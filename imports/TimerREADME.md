<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Solution-Button per Timer — komplett in @onload (CSS-Injection) — import-sicher

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
  const CONTENT_WIN = window;
  const CONTENT_DOC = document;

  // =========================
  // Run-once Guard (ROOT-weit)
  // =========================
  const GUARD = "__LIA_SOLUTION_TIMER_V0_0_1__";
  if (ROOT_WIN[GUARD]) return;
  ROOT_WIN[GUARD] = true;

  // =========================
  // CSS Injection (in Content + ggf. Root)
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

  injectStyle(CONTENT_DOC);
  if (ROOT_DOC && ROOT_DOC !== CONTENT_DOC) injectStyle(ROOT_DOC);

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

  function parseStartMode(el){
    const v = (el.getAttribute("data-solution-timer-start") || "").trim().toLowerCase();
    if (v && /^(oncheck|check|aftercheck|after-check|after_check)$/.test(v)) return "oncheck";
    if (parseBool(el.getAttribute("data-solution-timer-after-check"), false)) return "oncheck"; // Alias optional
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
  // Button-Finder (robust)
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

  function findCheckButton(scope){
    if (!scope) return null;
    const btns = Array.from(scope.querySelectorAll("button, input[type='button'], a"));
    if (!btns.length) return null;

    const hits = btns.filter(b => {
      const t = normText(b);
      if (!t) return false;
      if (/(reset|zurück|zurueck|neustart)/.test(t)) return false;
      if (/(auf(lö|lo)sen|l(ö|oe)sung|solution|answer|antwort|reveal)/.test(t)) return false;
      return /(prüfen|pruefen|check)\b/.test(t);
    });
    return hits[0] || null;
  }

  // =========================
  // Global Tick (ROOT-Store)
  // =========================
  const STORE = ROOT_WIN.__liaSolTimerStore || (ROOT_WIN.__liaSolTimerStore = {
    items: new Map(), // key -> {btn, badge, endAt}
    timer: null
  });

  function ensureTicker() {
    if (STORE.timer) return;
    STORE.timer = setInterval(() => {
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
          if (it.badge) it.badge.textContent = `Lösung anzeigen in ${formatRemaining(remaining)}`;
        }
      }
      if (STORE.items.size === 0) {
        clearInterval(STORE.timer);
        STORE.timer = null;
      }
    }, 250);
  }

  function scheduleReveal(btn, badge, ms){
    const key = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
    STORE.items.set(key, { btn, badge, endAt: Date.now() + ms });
    ensureTicker();
  }

  // =========================
  // Apply Timer
  // =========================
  function armTimerOnElement(el) {
    const ms = parseTimeToMs(el.getAttribute("data-solution-timer"));
    if (ms <= 0) return;

    const showBadge = parseBool(el.getAttribute("data-solution-timer-badge"), true);
    const startMode = parseStartMode(el); // immediate | oncheck

    const quizScope =
      (el.matches("lia-quiz, .lia-quiz") ? el : null) ||
      el.querySelector?.("lia-quiz, .lia-quiz") ||
      el.closest?.("lia-quiz, .lia-quiz") ||
      el;

    const btn = findSolutionButton(quizScope);
    if (!btn) return;

    if (btn.dataset.__solTimerArmed === "1") return;
    btn.dataset.__solTimerArmed = "1";

    // Lösung-Button immer sofort verstecken; Freischalten kommt später
    btn.dataset.__solTimerPrevDisplay = btn.style.display || "";
    btn.style.display = "none";

    let badge = null;
    if (showBadge) {
      badge = CONTENT_DOC.createElement("span");
      badge.className = "lia-sol-timer-badge";
      badge.textContent = (startMode === "oncheck")
        ? `Timer startet nach Prüfen`
        : `Lösung in ${formatRemaining(ms)}`;
      const parent = btn.parentElement || quizScope;
      if (parent) parent.appendChild(badge);
    }

    if (startMode === "immediate") {
      scheduleReveal(btn, badge, ms);
      return;
    }

    // ===== Start erst nach erstem Prüfen-Klick =====
    let started = false;
    function startNow(){
      if (started) return;
      started = true;
      if (badge) badge.textContent = `Lösung in ${formatRemaining(ms)}`;
      scheduleReveal(btn, badge, ms);
    }

    const chkBtn = findCheckButton(quizScope);
    if (chkBtn && chkBtn.dataset.__solTimerHooked !== "1") {
      chkBtn.dataset.__solTimerHooked = "1";
      chkBtn.addEventListener("click", startNow, { once: true, passive: true });
      return;
    }

    // Delegiert (falls Button später gerendert / DOM anders)
    if (quizScope && quizScope.nodeType === 1 && quizScope.dataset.__solTimerDelegated !== "1") {
      quizScope.dataset.__solTimerDelegated = "1";
      quizScope.addEventListener("click", (ev) => {
        if (started) return;
        const t = ev.target;
        if (!t || !t.closest) return;
        const b = t.closest("button, input[type='button'], a");
        if (!b) return;
        const txt = normText(b);
        if (/(reset|zurück|zurueck|neustart)/.test(txt)) return;
        if (/(prüfen|pruefen|check)\b/.test(txt)) startNow();
      }, { capture: true, passive: true });
    }
  }

  // =========================
  // Scan + Observer
  // =========================
  function scan() {
    CONTENT_DOC.querySelectorAll("[data-solution-timer]").forEach(el => {
      if (el.dataset.__solTimerSeen === "1") return;
      el.dataset.__solTimerSeen = "1";
      armTimerOnElement(el);
    });
  }

  let debounce = null;
  const mo = new MutationObserver(() => {
    clearTimeout(debounce);
    debounce = setTimeout(scan, 50);
  });

  scan();
  mo.observe(CONTENT_DOC.documentElement, { childList: true, subtree: true });

})();
@end
-->





# Timer bis Lösungzeigen

> Beispiele:
> - Sofortiger Start: `data-solution-timer="10s"`
> - Start erst nach erstem Prüfen: `data-solution-timer="2min" data-solution-timer-start="oncheck"`
> - ohne Badge: zusätzlich `data-solution-timer-badge="off"`

<!-- data-solution-timer="10s" -->
2+3 = [[ 5 ]]

<!-- data-solution-timer="15s" data-solution-timer-start="oncheck" -->
7+8 = [[ 15 ]]

<!-- data-solution-timer="10s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
9+6 = [[ 15 ]]
