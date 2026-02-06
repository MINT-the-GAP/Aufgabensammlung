<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Solution-Button per Timer — per-Folie init + pending-arm + onclick/oncheck + Badge optional — KEINE doppelten Timerfelder — alles in @onload

@onload
(function () {

  const WIN = window;
  const DOC = document;

  // =========================
  // Per-Window/Folie Guard
  // =========================
  const GUARD = "__LIA_SOLUTION_TIMER_V0_0_1__";
  if (WIN[GUARD]) return;
  WIN[GUARD] = true;

  // =========================
  // State (pro Folie)
  // =========================
  const STATE = WIN.__liaSolTimerV001 || (WIN.__liaSolTimerV001 = {
    items: new Map(),          // key -> {btn, badge, endAt}
    ticker: null,
    observedRoots: new WeakSet(),
    observers: [],
  });

  // =========================
  // CSS Injection (Document + ShadowRoots)
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
.lia-sol-timer-startbtn{ margin-right:.6rem; }
`;

  function injectStyleIntoRoot(root){
    try{
      if (!root) return;

      // Document
      if (root.nodeType === 9) {
        const doc = root;
        if (!doc.head) return;
        if (doc.getElementById(STYLE_ID)) return;
        const st = doc.createElement("style");
        st.id = STYLE_ID;
        st.textContent = CSS;
        doc.head.appendChild(st);
        return;
      }

      // ShadowRoot / DocumentFragment
      if (root.nodeType === 11 && root.host) {
        if (root.querySelector && root.querySelector(`style[data-id="${STYLE_ID}"]`)) return;
        const st = DOC.createElement("style");
        st.setAttribute("data-id", STYLE_ID);
        st.textContent = CSS;
        root.appendChild(st);
      }
    }catch(e){}
  }

  // =========================
  // Utils
  // =========================
  function parseBool(raw, def = true){
    if (raw == null) return def;
    const s = String(raw).trim().toLowerCase();
    if (!s) return def;
    if (["0","false","off","no","n","none"].includes(s)) return false;
    if (["1","true","on","yes","y"].includes(s)) return true;
    return def;
  }

  function parseStartMode(el){
    const v = (el.getAttribute("data-solution-timer-start") || "").trim().toLowerCase();
    if (/^(onclick|click|manual|startbutton|start-button|start_button)$/.test(v)) return "onclick";
    if (/^(oncheck|check|aftercheck|after-check|after_check)$/.test(v)) return "oncheck";
    return "immediate";
  }

  function parseTimeToMs(raw){
    if (raw == null) return 0;
    const s0 = String(raw).trim().toLowerCase();
    if (!s0) return 0;

    if (/^\d+(\.\d+)?$/.test(s0)) return Math.max(0, parseFloat(s0) * 1000); // seconds

    if (/^\d+:\d{1,2}$/.test(s0)) {
      const [m, sec] = s0.split(":").map(Number);
      return Math.max(0, (m * 60 + sec) * 1000);
    }

    let total = 0, found = false;
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

  function formatRemaining(ms){
    ms = Math.max(0, ms);
    const sec = Math.ceil(ms / 1000);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return (m <= 0) ? `${s}s` : `${m}:${String(s).padStart(2,"0")}`;
  }

  function normText(el){
    return (el.textContent || el.value || el.getAttribute("aria-label") || el.getAttribute("title") || "")
      .trim().toLowerCase();
  }

  function isCheckBtn(b){
    const t = normText(b);
    if (!t) return false;
    if (/(reset|zurück|zurueck|neustart)/.test(t)) return false;
    if (/(auf(lö|lo)sen|l(ö|oe)sung|solution|answer|antwort|reveal)/.test(t)) return false;
    return /(prüfen|pruefen|check)\b/.test(t);
  }

  function isSolutionBtn(b){
    const t = normText(b);
    if (!t) return false;
    if (/(reset|zurück|zurueck|neustart)/.test(t)) return false;
    if (/(prüfen|pruefen|check)/.test(t)) return false;
    return /(auf(lö|lo)sen|l(ö|oe)sung|solution|answer|antwort|reveal)/.test(t);
  }

  // =========================
  // Smart finders (RootNode: Document oder ShadowRoot)
  // =========================
  function findSolutionButtonSmart(el){
    const root = el.getRootNode ? el.getRootNode() : DOC;

    const scopes = [];
    const quizScope =
      (el.matches && (el.matches("lia-quiz, .lia-quiz") ? el : null)) ||
      (el.closest ? el.closest("lia-quiz, .lia-quiz") : null) ||
      null;
    if (quizScope) scopes.push(quizScope);

    let p = el.parentElement, steps = 0;
    while (p && steps++ < 8) { scopes.push(p); p = p.parentElement; }

    for (const s of scopes){
      try{
        const btns = Array.from(s.querySelectorAll("button, input[type='button'], a")).filter(isSolutionBtn);
        if (btns.length) return btns[btns.length - 1];
      }catch(e){}
    }

    try{
      const btns = root.querySelectorAll ? Array.from(root.querySelectorAll("button, input[type='button'], a")).filter(isSolutionBtn) : [];
      for (let i = btns.length - 1; i >= 0; i--){
        const b = btns[i];
        if (b && b.getClientRects && b.getClientRects().length) return b;
      }
      return btns[btns.length - 1] || null;
    }catch(e){}
    return null;
  }

  function findCheckButtonsSmart(el, solBtn){
    const root = (el.getRootNode ? el.getRootNode() : DOC);
    const scopes = [];
    if (solBtn && solBtn.parentElement) scopes.push(solBtn.parentElement);

    const quizScope =
      (el.matches && (el.matches("lia-quiz, .lia-quiz") ? el : null)) ||
      (el.closest ? el.closest("lia-quiz, .lia-quiz") : null) ||
      null;
    if (quizScope) scopes.push(quizScope);

    let p = solBtn ? solBtn.parentElement : el.parentElement, steps = 0;
    while (p && steps++ < 8) { scopes.push(p); p = p.parentElement; }

    for (const s of scopes){
      try{
        const btns = Array.from(s.querySelectorAll("button, input[type='button'], a")).filter(isCheckBtn);
        if (btns.length) return btns;
      }catch(e){}
    }

    try{
      const all = root.querySelectorAll ? Array.from(root.querySelectorAll("button, input[type='button'], a")).filter(isCheckBtn) : [];
      return all.slice(0, 8);
    }catch(e){}
    return [];
  }

  // =========================
  // UI Host + Cleanup (✅ verhindert doppelte Timerfelder)
  // =========================
  function getUiHost(el, solBtn){
    // möglichst stabil: container der Control-Leiste
    const quizScope =
      (el.closest ? el.closest("lia-quiz, .lia-quiz") : null) || null;

    return (
      (solBtn && solBtn.parentElement) ||
      (solBtn && solBtn.closest && solBtn.closest("div, p, li, section, article")) ||
      quizScope ||
      el.parentElement ||
      (solBtn && solBtn.ownerDocument ? solBtn.ownerDocument.body : DOC.body)
    );
  }

  function cleanupTimerUI(host){
    if (!host || !host.querySelectorAll) return;
    // löscht ALLE unsere Timer-UI im selben Host (Badge + Startbutton)
    host.querySelectorAll("[data-sol-timer-badge='1']").forEach(n => { try{ n.remove(); }catch(e){} });
    host.querySelectorAll("[data-sol-timer-startbtn='1']").forEach(n => { try{ n.remove(); }catch(e){} });
  }

  // =========================
  // Hide/Show check buttons
  // =========================
  function hardHideBtn(b){
    if (!b || !b.style) return;
    if (b.dataset.__solTimerChkHidden === "1") return;
    b.dataset.__solTimerChkHidden = "1";
    b.dataset.__solTimerPrevDisplayChk = b.style.display || "";
    b.dataset.__solTimerPrevHiddenAttr = b.hasAttribute("hidden") ? "1" : "0";
    b.style.display = "none";
    b.setAttribute("hidden", "");
  }
  function hardShowBtn(b){
    if (!b || !b.style) return;
    if (b.dataset.__solTimerChkHidden !== "1") return;
    b.style.display = b.dataset.__solTimerPrevDisplayChk || "";
    delete b.dataset.__solTimerPrevDisplayChk;
    delete b.dataset.__solTimerChkHidden;
    if (b.dataset.__solTimerPrevHiddenAttr === "0") b.removeAttribute("hidden");
    delete b.dataset.__solTimerPrevHiddenAttr;
  }
  function hideChecks(btns){ for (const b of btns) hardHideBtn(b); }
  function showChecks(btns){ for (const b of btns) hardShowBtn(b); }

  // =========================
  // Reveal ticker
  // =========================
  function ensureTicker(){
    if (STATE.ticker) return;
    STATE.ticker = WIN.setInterval(() => {
      const now = Date.now();
      for (const [key, it] of STATE.items.entries()){
        if (!it.btn || !it.btn.isConnected) { STATE.items.delete(key); continue; }
        const rem = it.endAt - now;
        if (rem <= 0){
          it.btn.style.display = it.btn.dataset.__solTimerPrevDisplay || "";
          delete it.btn.dataset.__solTimerPrevDisplay;
          if (it.badge && it.badge.isConnected) it.badge.remove();
          STATE.items.delete(key);
        } else {
          if (it.badge) it.badge.textContent = `Lösung in ${formatRemaining(rem)}`;
        }
      }
      if (STATE.items.size === 0){
        WIN.clearInterval(STATE.ticker);
        STATE.ticker = null;
      }
    }, 250);
  }

  function scheduleReveal(btn, badge, ms){
    const key = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
    STATE.items.set(key, { btn, badge, endAt: Date.now() + ms });
    ensureTicker();
  }

  // =========================
  // ARM (pending, wiederholt versucht)
  // =========================
  function tryArm(el){
    if (el.dataset.__solTimerArmed === "1") return true;

    const ms = parseTimeToMs(el.getAttribute("data-solution-timer"));
    if (ms <= 0) return false;

    const startMode = parseStartMode(el);
    const showBadge = parseBool(el.getAttribute("data-solution-timer-badge"), true);

    const solBtn = findSolutionButtonSmart(el);
    if (!solBtn) return false; // pending

    const doc = solBtn.ownerDocument || DOC;
    const host = getUiHost(el, solBtn);

    // ✅ wichtig: alte UI im selben Host weg, damit nichts doppelt bleibt
    cleanupTimerUI(host);

    // Lösung-Button verstecken + armed markieren
    solBtn.dataset.__solTimerPrevDisplay = solBtn.style.display || "";
    solBtn.style.display = "none";
    el.dataset.__solTimerArmed = "1";

    const makeBadge = () => {
      const badge = doc.createElement("span");
      badge.className = "lia-sol-timer-badge";
      badge.setAttribute("data-sol-timer-badge", "1");
      return badge;
    };

    // immediate
    if (startMode === "immediate") {
      let badge = null;
      if (showBadge) {
        badge = makeBadge();
        badge.textContent = `Lösung in ${formatRemaining(ms)}`;
        host.appendChild(badge);
      }
      scheduleReveal(solBtn, badge, ms);
      return true;
    }

    // oncheck
    if (startMode === "oncheck") {
      let started = false;
      let badge = null;

      if (showBadge) {
        badge = makeBadge();
        badge.textContent = `Timer startet nach Prüfen`;
        host.appendChild(badge);
      }

      const startNow = () => {
        if (started) return;
        started = true;
        if (badge) badge.textContent = `Lösung in ${formatRemaining(ms)}`;
        scheduleReveal(solBtn, badge, ms);
      };

      const checks = findCheckButtonsSmart(el, solBtn);
      if (checks[0] && checks[0].dataset.__solTimerHooked !== "1") {
        checks[0].dataset.__solTimerHooked = "1";
        checks[0].addEventListener("click", startNow, { once: true, passive: true });
      } else {
        // delegated
        if (host && host.dataset.__solTimerDelegated !== "1") {
          host.dataset.__solTimerDelegated = "1";
          host.addEventListener("click", (ev) => {
            const t = ev.target;
            if (!t || !t.closest) return;
            const b = t.closest("button, input[type='button'], a");
            if (b && isCheckBtn(b)) startNow();
          }, { capture: true, passive: true });
        }
      }
      return true;
    }

    // onclick
    if (startMode === "onclick") {
      el.dataset.__solTimerStarted = "0";

      const checksNow = findCheckButtonsSmart(el, solBtn);
      hideChecks(checksNow);

      const startBtn = doc.createElement("button");
      startBtn.type = "button";
      startBtn.textContent = el.getAttribute("data-solution-timer-start-label") || "Timer starten";
      startBtn.className = "lia-btn lia-sol-timer-startbtn";
      startBtn.setAttribute("data-sol-timer-startbtn", "1");

      // (nach cleanup) genau einmal rein
      host.insertBefore(startBtn, host.firstChild);

      startBtn.addEventListener("click", () => {
        if (el.dataset.__solTimerStarted === "1") return;
        el.dataset.__solTimerStarted = "1";

        const showNow = () => showChecks(findCheckButtonsSmart(el, solBtn));
        showNow(); setTimeout(showNow, 60); setTimeout(showNow, 250);

        let badge = null;
        if (showBadge) {
          // nochmals cleanup, falls LiaScript beim Klick neu rendert
          cleanupTimerUI(host);
          badge = makeBadge();
          badge.textContent = `Lösung in ${formatRemaining(ms)}`;
          host.appendChild(badge);
        } else {
          // ohne badge trotzdem start button weg
          try { startBtn.remove(); } catch(e){ startBtn.disabled = true; }
        }

        try { startBtn.remove(); } catch(e){ startBtn.disabled = true; }

        scheduleReveal(solBtn, badge, ms);
      }, { passive: true });

      return true;
    }

    return true;
  }

  // =========================
  // Deep roots (Shadow DOM)
  // =========================
  function getShadowRoots(root){
    const roots = [];
    try{
      const start = (root.nodeType === 9) ? root.documentElement : root;
      if (!start) return roots;
      const walker = DOC.createTreeWalker(start, NodeFilter.SHOW_ELEMENT, null);
      let node = walker.currentNode;
      while (node) {
        if (node.shadowRoot) roots.push(node.shadowRoot);
        node = walker.nextNode();
      }
    }catch(e){}
    return roots;
  }

  function observeRoot(root){
    if (!root || STATE.observedRoots.has(root)) return;
    STATE.observedRoots.add(root);

    injectStyleIntoRoot(root);

    try{
      const mo = new MutationObserver(() => scanAll());
      mo.observe(root, { childList: true, subtree: true });
      STATE.observers.push(mo);
    }catch(e){}
  }

  // =========================
  // Scan (Document + ShadowRoots)
  // =========================
  function scanAll(){
    const roots = [DOC, ...getShadowRoots(DOC)];
    for (const r of roots) {
      observeRoot(r);

      let els = [];
      try{
        els = (r.querySelectorAll ? Array.from(r.querySelectorAll("[data-solution-timer]")) : []);
      }catch(e){}

      for (const el of els){
        if (el.dataset.__solTimerArmed === "1") {
          // onclick: solange nicht gestartet => Prüfen weiter verstecken (wenn Buttons später auftauchen)
          if (parseStartMode(el) === "onclick" && el.dataset.__solTimerStarted !== "1") {
            const solBtn = findSolutionButtonSmart(el);
            if (solBtn) hideChecks(findCheckButtonsSmart(el, solBtn));
          }
          continue;
        }
        tryArm(el);
      }
    }
  }

  // init
  injectStyleIntoRoot(DOC);
  scanAll();
  setTimeout(scanAll, 0);
  setTimeout(scanAll, 120);
  setTimeout(scanAll, 500);

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