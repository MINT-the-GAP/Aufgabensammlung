<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Solution-Button per Timer — onclick-Startbutton zeigt Prüfen zuverlässig — ROOT/iframe/Slide-sicher — komplett in @onload

@onload
(function () {

  // =========================
  // Root/Content (iframe-safe)
  // =========================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN = getRootWindow();
  const ROOT_DOC = ROOT_WIN.document;

  // =========================
  // Run-once Guard (ROOT-weit)
  // =========================
  const GUARD = "__LIA_SOLUTION_TIMER_V0_0_1__";
  if (ROOT_WIN[GUARD]) return;
  ROOT_WIN[GUARD] = true;

  // =========================
  // Global Store (ROOT)
  // =========================
  const STORE = ROOT_WIN.__liaSolTimerV001 || (ROOT_WIN.__liaSolTimerV001 = {
    // reveal-ticker
    items: new Map(),         // key -> {btn, badge, endAt}
    ticker: null,

    // doc observing
    observedDocs: new Set(),  // Set<Document>
    docObservers: new Map(),  // Document -> MutationObserver
    sweep: null,              // interval id
    debounce: new Map(),      // Document -> timeout id
  });

  // =========================
  // CSS Injection (pro Document)
  // =========================
  const STYLE_ID = "__lia_solution_timer_css_v0_0_1__";
  const CSS = `
.lia-sol-timer-badge{
  display:inline-block;
  margin-left:.6rem;
  padding:.15rem .45rem;
  border:1px solid currentColor;
  border-radius:.5rem;
  font-size:.85em;
  opacity:.85;
  user-select:none;
}
.lia-sol-timer-startbtn{
  margin-right:.6rem;
}
`;

  function injectStyle(doc){
    try{
      if (!doc || !doc.head) return;
      if (doc.getElementById(STYLE_ID)) return;
      const st = doc.createElement("style");
      st.id = STYLE_ID;
      st.textContent = CSS;
      doc.head.appendChild(st);
    }catch(e){}
  }

  // =========================
  // Helpers
  // =========================
  function parseBool(raw, defaultValue = true){
    if (raw == null) return defaultValue;
    const s = String(raw).trim().toLowerCase();
    if (!s) return defaultValue;
    if (["0","false","off","no","n","none"].includes(s)) return false;
    if (["1","true","on","yes","y"].includes(s)) return true;
    return defaultValue;
  }

  // start modes:
  // - immediate (default)
  // - oncheck
  // - onclick (manual start button)
  function parseStartMode(el){
    const v = (el.getAttribute("data-solution-timer-start") || "").trim().toLowerCase();
    if (v && /^(onclick|click|manual|startbutton|start-button|start_button)$/.test(v)) return "onclick";
    if (v && /^(oncheck|check|aftercheck|after-check|after_check)$/.test(v)) return "oncheck";
    if (parseBool(el.getAttribute("data-solution-timer-after-check"), false)) return "oncheck"; // Alias
    return "immediate";
  }

  function parseTimeToMs(raw) {
    if (raw == null) return 0;
    const s0 = String(raw).trim().toLowerCase();
    if (!s0) return 0;

    // pure number => seconds
    if (/^\d+(\.\d+)?$/.test(s0)) return Math.max(0, parseFloat(s0) * 1000);

    // mm:ss
    if (/^\d+:\d{1,2}$/.test(s0)) {
      const [m, sec] = s0.split(":").map(Number);
      return Math.max(0, (m * 60 + sec) * 1000);
    }

    // tokens: 1h 2m 3s 400ms 2min 2mins 2minutes
    let total = 0;
    let found = false;
    const re = /(\d+(?:\.\d+)?)\s*(ms|s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours)\b/g;
    let match;
    while ((match = re.exec(s0))) {
      found = true;
      const n = parseFloat(match[1]);
      const u = match[2];

      if (u === "ms") total += n;
      else if (["s","sec","secs","second","seconds"].includes(u)) total += n * 1000;
      else if (["m","min","mins","minute","minutes"].includes(u)) total += n * 60000;
      else if (["h","hr","hrs","hour","hours"].includes(u)) total += n * 3600000;
    }
    return found ? Math.max(0, total) : 0;
  }

  function formatRemaining(ms) {
    ms = Math.max(0, ms);
    const totalSec = Math.ceil(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    if (m <= 0) return `${s}s`;
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  function normText(el){
    return (el.textContent || el.value || el.getAttribute("aria-label") || el.getAttribute("title") || "")
      .trim()
      .toLowerCase();
  }

  // =========================
  // Button-Finder
  // =========================
  function findSolutionButton(scope) {
    if (!scope) return null;
    const btns = Array.from(scope.querySelectorAll("button, input[type='button'], a"));
    if (!btns.length) return null;

    const wanted = btns.filter(b => {
      const t = normText(b);
      if (!t) return false;
      if (/(reset|zurück|zurueck|neustart)/.test(t)) return false;
      if (/(prüfen|pruefen|check)/.test(t)) return false;
      return /(auf(lö|lo)sen|l(ö|oe)sung|solution|answer|antwort|reveal)/.test(t);
    });
    if (wanted.length) return wanted[wanted.length - 1];

    const fallback = btns.filter(b => {
      const t = normText(b);
      if (!t) return true;
      if (/(reset|zurück|zurueck|neustart)/.test(t)) return false;
      if (/(prüfen|pruefen|check)/.test(t)) return false;
      return true;
    });
    return (fallback.length ? fallback[fallback.length - 1] : btns[btns.length - 1]) || null;
  }

  function isCheckBtn(b){
    const t = normText(b);
    if (!t) return false;
    if (/(reset|zurück|zurueck|neustart)/.test(t)) return false;
    if (/(auf(lö|lo)sen|l(ö|oe)sung|solution|answer|antwort|reveal)/.test(t)) return false;
    return /(prüfen|pruefen|check)\b/.test(t);
  }

  // Prüfen-Buttons "smart" finden: erst im selben Control-Panel wie der Auflösen-Button,
  // dann hochwandern, dann notfalls im Dokument in der Nähe.
  function findCheckButtonsSmart(quizScope, solBtn){
    const doc = (solBtn && solBtn.ownerDocument) ? solBtn.ownerDocument : (quizScope && quizScope.ownerDocument) ? quizScope.ownerDocument : ROOT_DOC;
    const scopes = [];

    try { if (solBtn && solBtn.parentElement) scopes.push(solBtn.parentElement); } catch(e){}
    try { if (solBtn) {
      const near = solBtn.closest("div, li, section, article, main, lia-quiz, .lia-quiz");
      if (near) scopes.push(near);
    }} catch(e){}
    if (quizScope) scopes.push(quizScope);

    // hochwandern ab solBtn
    try{
      let p = solBtn ? solBtn.parentElement : null;
      let steps = 0;
      while (p && steps++ < 6){
        scopes.push(p);
        p = p.parentElement;
      }
    }catch(e){}

    // unique
    const uniq = [];
    const seen = new Set();
    for (const s of scopes){
      if (!s || seen.has(s)) continue;
      seen.add(s);
      uniq.push(s);
    }

    for (const scope of uniq){
      try{
        const btns = Array.from(scope.querySelectorAll("button, input[type='button'], a")).filter(isCheckBtn);
        if (btns.length) return btns;
      }catch(e){}
    }

    // fallback: im ganzen Dokument – aber nur die ersten N (und später per show/hide mit restore)
    try{
      const all = Array.from(doc.querySelectorAll("button, input[type='button'], a")).filter(isCheckBtn);
      return all.slice(0, 6);
    }catch(e){}
    return [];
  }

  // =========================
  // Hide/Show helpers (robust)
  // =========================
  function hardHideBtn(b){
    if (!b || !b.style) return;
    if (b.dataset.__solTimerChkHidden === "1") return;
    b.dataset.__solTimerChkHidden = "1";
    b.dataset.__solTimerPrevDisplayChk = b.style.display || "";
    // nicht auf "hidden" vertrauen, aber falls gesetzt: merken & entfernen/setzen wir beim Show
    b.dataset.__solTimerPrevHiddenAttr = b.hasAttribute("hidden") ? "1" : "0";
    b.style.display = "none";
    b.setAttribute("hidden", "");
  }

  function hardShowBtn(b){
    if (!b || !b.style) return;
    if (b.dataset.__solTimerChkHidden !== "1") {
      // Falls LiaScript selbst "hidden" gesetzt hatte, respektieren wir das
      return;
    }
    b.style.display = b.dataset.__solTimerPrevDisplayChk || "";
    delete b.dataset.__solTimerPrevDisplayChk;
    delete b.dataset.__solTimerChkHidden;

    // hidden-Attr nur entfernen, wenn wir es gesetzt haben
    if (b.dataset.__solTimerPrevHiddenAttr === "0") b.removeAttribute("hidden");
    delete b.dataset.__solTimerPrevHiddenAttr;
  }

  function hideCheckButtons(btns){ for (const b of btns) hardHideBtn(b); }
  function showCheckButtons(btns){ for (const b of btns) hardShowBtn(b); }

  // =========================
  // Reveal Ticker
  // =========================
  function ensureTicker() {
    if (STORE.ticker) return;
    STORE.ticker = ROOT_WIN.setInterval(() => {
      const now = Date.now();
      for (const [key, it] of STORE.items.entries()) {
        if (!it.btn || !it.btn.isConnected) { STORE.items.delete(key); continue; }
        const remaining = it.endAt - now;
        if (remaining <= 0) {
          it.btn.style.display = it.btn.dataset.__solTimerPrevDisplay || "";
          delete it.btn.dataset.__solTimerPrevDisplay;
          if (it.badge && it.badge.isConnected) it.badge.remove();
          STORE.items.delete(key);
        } else {
          if (it.badge) it.badge.textContent = `Lösung in ${formatRemaining(remaining)}`;
        }
      }
      if (STORE.items.size === 0) {
        ROOT_WIN.clearInterval(STORE.ticker);
        STORE.ticker = null;
      }
    }, 250);
  }

  function scheduleReveal(btn, badge, ms){
    const key = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
    STORE.items.set(key, { btn, badge, endAt: Date.now() + ms });
    ensureTicker();
  }

  // =========================
  // Manual Start UI (onclick)
  // =========================
  function ensureStartButton(quizScope, doc, label){
    try{
      const existing = quizScope && quizScope.querySelector
        ? quizScope.querySelector("button[data-sol-timer-startbtn='1']")
        : null;
      if (existing) return existing;
    }catch(e){}

    const btn = doc.createElement("button");
    btn.type = "button";
    btn.textContent = label || "Timer starten";
    btn.className = "lia-btn lia-sol-timer-startbtn";
    btn.setAttribute("data-sol-timer-startbtn", "1");
    return btn;
  }

  // =========================
  // Core: arm timer on element
  // =========================
  function armTimerOnElement(el) {
    const ms = parseTimeToMs(el.getAttribute("data-solution-timer"));
    if (ms <= 0) return;

    const showBadge = parseBool(el.getAttribute("data-solution-timer-badge"), true);
    const startMode = parseStartMode(el);

    const quizScope =
      (el.matches("lia-quiz, .lia-quiz") ? el : null) ||
      el.querySelector?.("lia-quiz, .lia-quiz") ||
      el.closest?.("lia-quiz, .lia-quiz") ||
      el;

    const solBtn = findSolutionButton(quizScope);
    if (!solBtn) return;

    if (solBtn.dataset.__solTimerArmed === "1") return;
    solBtn.dataset.__solTimerArmed = "1";

    // Lösung-Button sofort verstecken
    solBtn.dataset.__solTimerPrevDisplay = solBtn.style.display || "";
    solBtn.style.display = "none";

    const doc = solBtn.ownerDocument || ROOT_DOC;

    function createBadge(){
      const b = doc.createElement("span");
      b.className = "lia-sol-timer-badge";
      return b;
    }

    // ---------- immediate ----------
    if (startMode === "immediate") {
      let badge = null;
      if (showBadge) {
        badge = createBadge();
        badge.textContent = `Lösung in ${formatRemaining(ms)}`;
        const parent = solBtn.parentElement || quizScope;
        if (parent) parent.appendChild(badge);
      }
      scheduleReveal(solBtn, badge, ms);
      return;
    }

    // ---------- oncheck ----------
    if (startMode === "oncheck") {
      let started = false;
      let badge = null;

      if (showBadge) {
        badge = createBadge();
        badge.textContent = `Timer startet nach Prüfen`;
        const parent = solBtn.parentElement || quizScope;
        if (parent) parent.appendChild(badge);
      }

      function startNow(){
        if (started) return;
        started = true;
        if (badge) badge.textContent = `Lösung in ${formatRemaining(ms)}`;
        scheduleReveal(solBtn, badge, ms);
      }

      const checkBtns = findCheckButtonsSmart(quizScope, solBtn);
      if (checkBtns[0] && checkBtns[0].dataset.__solTimerHooked !== "1") {
        checkBtns[0].dataset.__solTimerHooked = "1";
        checkBtns[0].addEventListener("click", startNow, { once: true, passive: true });
        return;
      }

      if (quizScope && quizScope.nodeType === 1 && quizScope.dataset.__solTimerDelegated !== "1") {
        quizScope.dataset.__solTimerDelegated = "1";
        quizScope.addEventListener("click", (ev) => {
          if (started) return;
          const t = ev.target;
          if (!t || !t.closest) return;
          const b = t.closest("button, input[type='button'], a");
          if (!b) return;
          if (isCheckBtn(b)) startNow();
        }, { capture: true, passive: true });
      }
      return;
    }

    // ---------- onclick (manual start) ----------
    if (startMode === "onclick") {
      // Marker: noch nicht gestartet (wichtig für spätere Scans!)
      el.dataset.__solTimerStarted = "0";

      // Check-Buttons (sobald vorhanden) verstecken
      hideCheckButtons(findCheckButtonsSmart(quizScope, solBtn));

      // Startbutton einfügen (in der Nähe der Kontrollleiste)
      const label = el.getAttribute("data-solution-timer-start-label") || "Timer starten";
      const startBtn = ensureStartButton(quizScope, doc, label);

      // Host: bevorzugt das Panel rund um solBtn (weil da sicher "sein" Quiz ist)
      const host =
        (solBtn.parentElement) ||
        (quizScope && quizScope.nodeType === 1 ? quizScope : null);

      if (host && !startBtn.isConnected) {
        if (host.firstChild) host.insertBefore(startBtn, host.firstChild);
        else host.appendChild(startBtn);
      }

      let started = false;
      startBtn.addEventListener("click", () => {
        if (started) return;
        started = true;
        el.dataset.__solTimerStarted = "1";

        // Prüfen sichtbar machen (smart suchen!)
        const btnsNow = findCheckButtonsSmart(quizScope, solBtn);
        showCheckButtons(btnsNow);

        // Zusätzlich: noch 2 Nachläufe (falls LiaScript erst nach Klick rendert/umbaute)
        setTimeout(() => showCheckButtons(findCheckButtonsSmart(quizScope, solBtn)), 50);
        setTimeout(() => showCheckButtons(findCheckButtonsSmart(quizScope, solBtn)), 250);

        // Badge erst nach Start (je nach setting)
        let badge = null;
        if (showBadge) {
          badge = createBadge();
          badge.textContent = `Lösung in ${formatRemaining(ms)}`;
          const parent = solBtn.parentElement || quizScope;
          if (parent) parent.appendChild(badge);
        }

        // Startbutton weg
        try { startBtn.remove(); } catch(e){ startBtn.disabled = true; }

        // Timer läuft
        scheduleReveal(solBtn, badge, ms);
      }, { passive: true });

      return;
    }
  }

  // =========================
  // Scan a document
  // =========================
  function scanDoc(doc){
    try{
      if (!doc || !doc.documentElement) return;
      injectStyle(doc);

      doc.querySelectorAll("[data-solution-timer]").forEach(el => {
        // Schon gesehen?
        if (el.dataset.__solTimerSeen === "1") {
          // Bei onclick: solange nicht gestartet, weiterhin Prüfen verstecken (auch wenn später gerendert)
          if (parseStartMode(el) === "onclick" && el.dataset.__solTimerStarted !== "1") {
            const quizScope =
              (el.matches("lia-quiz, .lia-quiz") ? el : null) ||
              el.querySelector?.("lia-quiz, .lia-quiz") ||
              el.closest?.("lia-quiz, .lia-quiz") ||
              el;

            const solBtn = findSolutionButton(quizScope);
            if (solBtn) hideCheckButtons(findCheckButtonsSmart(quizScope, solBtn));
          }
          return;
        }

        el.dataset.__solTimerSeen = "1";
        armTimerOnElement(el);
      });
    }catch(e){}
  }

  // =========================
  // Observe a document (MutationObserver)
  // =========================
  function observeDoc(doc){
    if (!doc || STORE.observedDocs.has(doc)) return;
    STORE.observedDocs.add(doc);

    scanDoc(doc);

    try{
      const mo = new MutationObserver(() => {
        const prev = STORE.debounce.get(doc);
        if (prev) ROOT_WIN.clearTimeout(prev);
        const t = ROOT_WIN.setTimeout(() => scanDoc(doc), 50);
        STORE.debounce.set(doc, t);
      });

      mo.observe(doc.documentElement, { childList: true, subtree: true });
      STORE.docObservers.set(doc, mo);
    }catch(e){}
  }

  // =========================
  // Collect same-origin iframe documents (recursive)
  // =========================
  function collectDocs(startDoc, out, depth){
    if (!startDoc || depth < 0) return;
    out.add(startDoc);

    let iframes = [];
    try { iframes = Array.from(startDoc.querySelectorAll("iframe")); } catch(e){}

    for (const fr of iframes){
      try{
        const d = fr.contentDocument;
        if (d && d.documentElement) {
          out.add(d);
          collectDocs(d, out, depth - 1);
        }
      }catch(e){}
    }
  }

  function observeAll(){
    const docs = new Set();
    collectDocs(ROOT_DOC, docs, 3);
    try { collectDocs(document, docs, 2); } catch(e){}
    for (const d of docs) observeDoc(d);
  }

  function rescanSoon(){
    observeAll();
    ROOT_WIN.setTimeout(observeAll, 0);
    ROOT_WIN.setTimeout(observeAll, 120);
    ROOT_WIN.setTimeout(observeAll, 500);
  }

  try{
    ROOT_WIN.addEventListener("hashchange", rescanSoon, { passive: true });
    ROOT_WIN.addEventListener("popstate",  rescanSoon, { passive: true });
  }catch(e){}

  if (!STORE.sweep){
    STORE.sweep = ROOT_WIN.setInterval(observeAll, 700);
  }

  rescanSoon();

})();
@end
-->








# Timer bis Lösungzeigen

> Beispiele:
> - Sofortiger Start: `data-solution-timer="10s"`
> - Start erst nach erstem Prüfen: `data-solution-timer="2min" data-solution-timer-start="oncheck"`
> - ohne Badge: zusätzlich `data-solution-timer-badge="off"`
> - Manueller Start: `data-solution-timer-start="onclick"`

<!-- data-solution-timer="10s" -->
2+3 = [[ 5 ]]


Manueller Start nach erstem Prüfen

<!-- data-solution-timer="15s" data-solution-timer-start="oncheck" -->
7+8 = [[ 15 ]]


Manueller Start nach erstem Prüfen (Timer nicht sichtbar)

<!-- data-solution-timer="10s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
9+6 = [[ 15 ]]


Manueller Startbutton (Prüfen erscheint erst nach Klick)

<!-- data-solution-timer="10s" data-solution-timer-start="onclick" -->
9+6 = [[ 15 ]]

Manueller Startbutton ohne Badge

<!-- data-solution-timer="10s" data-solution-timer-start="onclick" data-solution-timer-badge="off" -->
5+5 = [[ 10 ]]