<!--
version:  0.0.1
language: de
narrator: Deutsch Female

tags:
comment:
author: Martin Lommatzsch


@style
.ortho-reset-inline{
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: auto !important;
  max-width: max-content !important;
  flex: 0 0 auto !important;
  white-space: nowrap !important;
  cursor: pointer !important;
  order: -1;
  margin-right: .5rem !important;
}
@end


@orthography: @orthography_(@uid,`@0`,`@1`,`@2`)

@orthography_
<div class="orthography-wrap">
  <span id="orthography-solution-@0" style="display:none">@3</span>

  <input
    data-id="lia-quiz-@0"
    class="lia-input lia-quiz__input"
    style="margin-bottom: .5rem"
    value="@2">

  <button
    type="button"
    class="lia-btn lia-btn--outline"
    id="orthography-reset-@0"
    style="margin-bottom: 2rem">
    Reset
  </button>
</div>

[[!]]
<script>
(function(){
  const el  = document.querySelector('[data-id="lia-quiz-@0"]');
  const sol = document.getElementById('orthography-solution-@0');
  if(!el || !sol) return false;
  const norm = s => String(s||"").toLocaleLowerCase().replace(/\s+/g,"");
  return norm(el.value) === norm(sol.textContent);
})()
</script>

<script modify="false">
(function(){
  // =========================================================
  // ROOT + globaler Store (persistiert über Re-Renders)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();

  const STORE_KEY = "__ORTHOGRAPHY_STORE_V2__";
  ROOT[STORE_KEY] = ROOT[STORE_KEY] || {
    state: {},        // uid -> { solved, tries, start, solution, gate }
    fixers: {},       // uid -> function
    listener: false,
    observer: null,
    scheduled: false
  };
  const STORE = ROOT[STORE_KEY];

  function runAllFixers(){
    Object.keys(STORE.fixers).forEach(k=>{
      try { STORE.fixers[k](); } catch(e){}
    });
  }

  // Sehr schneller Scheduler: vor Paint (microtask + rAF) + kurze Nachläufer
  function scheduleRunAll(){
    if (STORE.scheduled) return;
    STORE.scheduled = true;

    // 1) microtask: so früh wie möglich im selben Tick
    queueMicrotask(function(){
      STORE.scheduled = false;
      runAllFixers();
    });

    // 2) vor dem nächsten Paint
    try { requestAnimationFrame(runAllFixers); } catch(e){}

    // 3) Nachläufer für Lia async
    setTimeout(runAllFixers, 0);
    setTimeout(runAllFixers, 60);
    setTimeout(runAllFixers, 180);
  }

  // globaler Trigger: Klicks + DOM-Mutationen (damit Re-Renders sofort repariert werden)
  if (!STORE.listener) {
    STORE.listener = true;
    document.addEventListener('click', scheduleRunAll, true);

    // MutationObserver: reagiert auf DOM-Ersetzungen, bevor es sichtbar wird
    function startObserver(){
      if (STORE.observer) return;
      const target = document.body || document.documentElement;
      if (!target) return;

      STORE.observer = new MutationObserver(function(){
        scheduleRunAll();
      });
      STORE.observer.observe(target, { childList: true, subtree: true });
    }

    // falls body noch nicht da ist:
    startObserver();
    setTimeout(startObserver, 0);
    setTimeout(startObserver, 50);
  }

  // =========================================================
  // Selektoren dieser Instanz
  // =========================================================
  const uid = "@0";

  const selInput = '[data-id="lia-quiz-@0"]';
  const idReset  = 'orthography-reset-@0';
  const idSol    = 'orthography-solution-@0';

  const norm = s => String(s||"").toLocaleLowerCase().replace(/\s+/g,"");

  function getInput(){ return document.querySelector(selInput); }
  function getReset(){ return document.getElementById(idReset); }
  function getSol(){ return document.getElementById(idSol); }
  function getWrap(){
    const input = getInput();
    return input ? input.closest('.orthography-wrap') : null;
  }

  const input0 = getInput();
  const btn0   = getReset();
  const solEl0 = getSol();
  if(!input0 || !btn0 || !solEl0) return;

  // =========================================================
  // State
  // =========================================================
  const gateRaw = "@1";
  const solutionText = (solEl0.textContent || "");

  function parseGate(raw){
    const s = String(raw || "").trim().toLowerCase();
    if (s === "false" || s === "0" || s === "off" || s === "no") return { mode: "off", n: 0 };
    const n = parseInt(s, 10);
    if (Number.isFinite(n) && n > 0) return { mode: "attempts", n };
    return { mode: "on", n: 0 };
  }

  STORE.state[uid] = STORE.state[uid] || {
    solved: false,
    tries: 0,
    start: "",
    solution: "",
    gate: parseGate(gateRaw)
  };
  const S = STORE.state[uid];

  if (!S.start)    S.start    = input0.getAttribute('value') || input0.defaultValue || "";
  if (!S.solution) S.solution = solutionText;
  S.gate = parseGate(gateRaw);

  // =========================================================
  // Helpers
  // =========================================================
  function clearClasses(node){
    if(!node || !node.classList) return;
    [...node.classList].forEach(c => {
      if (/(correct|wrong|success|error|checked|valid|invalid|resolved|solved)/i.test(c)) {
        node.classList.remove(c);
      }
    });
  }

  // set value with optional event emission
  function setInputValue(v, emitEvents){
    const input = getInput();
    if(!input) return;
    input.value = v;
    if (emitEvents) {
      input.dispatchEvent(new Event('input',  { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  function hardenSolution(input){
    if(!input) return;
    input.defaultValue = S.solution;
    try { input.setAttribute('value', S.solution); } catch(e){}
    input.removeAttribute('aria-invalid');
  }

  // Wichtig gegen Flackern: silent (ohne Events), damit wir Lia nicht wieder triggern
  function silentForceSolution(){
    const input = getInput();
    if(!input) return;
    input.value = S.solution;
    hardenSolution(input);
  }

  function findQuizForThisInput(){
    const wrap = getWrap();
    if(!wrap) return null;

    if (wrap.id) {
      const answers = document.querySelector('.lia-quiz__answers[aria-labelledby="' + wrap.id + '"]');
      if (answers) {
        const quiz = answers.closest('.lia-quiz');
        if (quiz) return quiz;
      }
    }

    const root = document.body || document.documentElement;
    if (!root || !root.contains(wrap) || !document.createTreeWalker) return null;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    walker.currentNode = wrap;

    let node;
    while ((node = walker.nextNode())) {
      if (node !== wrap && node.classList && node.classList.contains('orthography-wrap')) break;
      if (node.classList && node.classList.contains('lia-quiz')) return node;
    }
    return null;
  }

  function applyGate(control){
    if(!control) return;
    const resolve = control.querySelector('.lia-quiz__resolve');
    if(!resolve) return;

    if (S.gate.mode === "off") {
      resolve.disabled = true;
      resolve.style.display = "none";
      resolve.setAttribute("aria-hidden", "true");
      return;
    }

    if (S.gate.mode === "attempts") {
      if (S.tries >= S.gate.n) {
        resolve.style.display = "";
        resolve.disabled = false;
        resolve.removeAttribute("aria-hidden");
      } else {
        resolve.disabled = true;
        resolve.style.display = "none";
        resolve.setAttribute("aria-hidden", "true");
      }
      return;
    }

    resolve.style.display = "";
    resolve.disabled = false;
    resolve.removeAttribute("aria-hidden");
  }

  function placeReset(control){
    const btn = getReset();
    if(!control || !btn) return;

    if (btn.parentElement !== control || btn !== control.lastElementChild) {
      control.appendChild(btn);
    }
    btn.classList.add('ortho-reset-inline');
    btn.style.marginBottom = "0";
  }

  function lockSolution(){
    S.solved = true;
    silentForceSolution();

    const wrap = getWrap();
    if (wrap) wrap.dataset.orthoSolved = "1";
  }

  // Sticky ohne Flackern: niemals Events, nur sofort wieder Solution setzen
  function ensureSolvedSticky(){
    const input = getInput();
    if(!input) return;

    const wrap = getWrap();
    if (wrap) {
      wrap.dataset.orthoTries  = String(S.tries);
      wrap.dataset.orthoSolved = S.solved ? "1" : "0";
    }

    if (S.solved) {
      // Wenn Lia/Render irgendwas überschreibt -> sofort (silent) zurück
      if (norm(input.value) !== norm(S.solution)) {
        silentForceSolution();
      } else {
        // auch bei korrektem Wert härten (neu gerenderte Inputs!)
        hardenSolution(input);
      }
    }
  }

  // =========================================================
  // Reset (tries NICHT anfassen!)
  // =========================================================
  function doReset(){
    if (S.solved) {
      // gelöst -> bleibt Lösung
      lockSolution();
    } else {
      // ungelöst -> zurück zum Starttext (hier Events ok)
      setInputValue(S.start, true);
      const input = getInput();
      if (input) {
        input.defaultValue = S.start;
        try { input.setAttribute('value', S.start); } catch(e){}
        input.removeAttribute('aria-invalid');
      }
    }

    clearClasses(getInput());
    clearClasses(findQuizForThisInput());

    const quiz = findQuizForThisInput();
    if (quiz) {
      const control = quiz.querySelector('.lia-quiz__control');
      applyGate(control);
      placeReset(control);
    }
  }

  (function bindReset(){
    const btn = getReset();
    if(!btn) return;

    const handler = function(ev){
      if(ev){
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
      }
      doReset();
    };

    btn.addEventListener('click', handler, true);
    btn.addEventListener('keydown', function(ev){
      if (ev.key === 'Enter' || ev.key === ' ') handler(ev);
    }, true);
  })();

  // =========================================================
  // Control Delegation
  // =========================================================
  function bindControl(){
    const quiz = findQuizForThisInput();
    if(!quiz) return false;

    const control = quiz.querySelector('.lia-quiz__control');
    if(!control) return false;

    applyGate(control);
    placeReset(control);

    const key = 'orthoCtlBound_' + uid;
    if (control.dataset[key] === "1") return true;
    control.dataset[key] = "1";

    control.addEventListener('click', function(ev){
      const btn = getReset();
      if (btn && ev.target && ev.target.closest && ev.target.closest('#' + btn.id)) return;

      const inputBefore = (getInput() ? getInput().value : "");
      const wasCorrect  = (norm(inputBefore) === norm(S.solution)); // VOR Lia merken

      const check = ev.target && ev.target.closest ? ev.target.closest('.lia-quiz__check') : null;
      if (check) {
        if (S.gate.mode === "attempts") {
          setTimeout(function(){
            S.tries += 1;
            applyGate(control);
            placeReset(control);
            ensureSolvedSticky();
          }, 0);
        }

        if (wasCorrect) {
          // Lösung fixieren (silent, kein Flackern)
          setTimeout(lockSolution, 0);
          setTimeout(lockSolution, 30);
        } else {
          // nicht korrekt: wenn Lia Input ungewollt auf Start zurücksetzt, restore
          setTimeout(function(){
            const input = getInput();
            if (!input) return;
            if (!S.solved && input.value === S.start && inputBefore !== S.start) {
              setInputValue(inputBefore, false); // silent restore
            }
          }, 30);
          setTimeout(ensureSolvedSticky, 80);
        }
        return;
      }

      const resolve = ev.target && ev.target.closest ? ev.target.closest('.lia-quiz__resolve') : null;
      if (resolve) {
        if (resolve.disabled || resolve.style.display === "none") return;
        setTimeout(lockSolution, 0);
        setTimeout(lockSolution, 30);
        return;
      }
    }, true);

    return true;
  }

  // =========================================================
  // Fixer registrieren
  // =========================================================
  function repair(){
    bindControl();
    ensureSolvedSticky();
  }
  STORE.fixers[uid] = repair;

  // initial
  scheduleRunAll();
  setTimeout(repair, 0);
  setTimeout(repair, 60);
  setTimeout(repair, 180);
})();
</script>
@end


diktat: {|>}{<span style="position: absolute; left: -10000px">@0</span>} [[  @0  ]]


-->






















# Makrosammlung

> Beispielaufgaben:






__Aufgabe 1:__ Hör dir den Satz an und schreib ihn korrekt in das Eingabefeld.


{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Anna sitzt auf einem fliegenden Teppich.

[[    Anna sitzt auf einem fliegenden Teppich.    ]]


--- 


__Aufgabe 2:__ Lass dir die Wörter vorlesen, die in die Lücken kommen und schreibe diese in die Lücken.

Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.


--- 



__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflösung ist blockiert.)


@orthography(false,`Das ist der Tag an dem ich geblitzt wurde.`,`Das ist der Tag, an dem ich geblitzt wurde.`)

@orthography(2,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)



--- 


__Aufgabe 4:__ Setze die Satzzeichen so, dass der Satz eine korrekte wörtliche Rede darstellt. (Auflösung bei erst nach 2 und 0 Versuchen)

__$a)\;\;$__
@orthography(2,`Der Apfel ist rot sagte Ben`,`"Der Apfel ist rot", sagte Ben.`)

__$b)\;\;$__
@orthography(true,`Clara sagt Druck ist eine physikalische Größe`,`Clara sagt: "Druck ist eine physikalische Größe."`)


--- 


__Aufgabe 5:__ Korrigiere die Rechtschreibfehler im gezeigten Satz. (Auflösung geht noch nicht und ist deswegen blockiert.)

@orthography(3,`Es ist jetze um sechse.`,`Es ist jetzt um sechs.`)



