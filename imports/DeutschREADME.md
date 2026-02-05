<!--
version:  0.0.1
language: de
narrator: Deutsch Female

comment: Orthography-Export (Reset inline, gated resolve, sticky solutions, no-flicker)
author: Martin Lommatzsch


@style
/* Reset neben Prüfen/Auflösen */
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


@onload
(function(){
  // ---------------------------------------------------------
  // Globaler Boot (IMPORT-SAFE): nur einmal im ROOT anlegen
  // ---------------------------------------------------------
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();

  const KEY = "__ORTHOGRAPHY_EXPORT_V1__";
  if (ROOT[KEY]) return; // schon da

  const microtask = (fn) => (window.queueMicrotask ? queueMicrotask(fn) : Promise.resolve().then(fn));

  const MOD = {
    state: {},       // uid -> { solved, tries, start, solution, gate }
    fixers: {},      // uid -> repair()
    listener: false,
    observer: null,
    scheduled: false,

    norm: (s) => String(s||"").toLocaleLowerCase().replace(/\s+/g,""),

    schedule(){
      if (MOD.scheduled) return;
      MOD.scheduled = true;

      const run = () => {
        MOD.scheduled = false;
        Object.keys(MOD.fixers).forEach(k=>{
          try { MOD.fixers[k](); } catch(e){}
        });
      };

      microtask(run);
      try { requestAnimationFrame(run); } catch(e){}
      setTimeout(run, 0);
      setTimeout(run, 60);
      setTimeout(run, 180);
    },

    startGlobal(){
      if (MOD.listener) return;
      MOD.listener = true;

      document.addEventListener('click', () => MOD.schedule(), true);

      const startObserver = () => {
        if (MOD.observer) return;
        const target = document.body || document.documentElement;
        if (!target) return;

        MOD.observer = new MutationObserver(() => MOD.schedule());
        MOD.observer.observe(target, { childList: true, subtree: true });
      };

      startObserver();
      setTimeout(startObserver, 0);
      setTimeout(startObserver, 50);
    },

    parseGate(raw){
      const s = String(raw || "").trim().toLowerCase();
      if (s === "false" || s === "0" || s === "off" || s === "no") return { mode: "off", n: 0 };
      const n = parseInt(s, 10);
      if (Number.isFinite(n) && n > 0) return { mode: "attempts", n };
      return { mode: "on", n: 0 };
    },

    // ---------------------------------------------------------
    // Registrierung einer Macro-Instanz
    // ---------------------------------------------------------
    register(cfg){
      const uid     = cfg.uid;
      const selIn   = cfg.selInput;
      const idReset = cfg.idReset;
      const idSol   = cfg.idSol;
      const gateRaw = cfg.gateRaw;

      // state
      MOD.state[uid] = MOD.state[uid] || {
        solved: false,
        tries: 0,
        start: "",
        solution: "",
        gate: MOD.parseGate(gateRaw)
      };
      const S = MOD.state[uid];
      S.gate = MOD.parseGate(gateRaw);

      // dom getters (immer frisch wegen Re-Renders)
      const getInput = () => document.querySelector(selIn);
      const getReset = () => document.getElementById(idReset);
      const getSol   = () => document.getElementById(idSol);
      const getWrap  = () => {
        const input = getInput();
        return input ? input.closest('.orthography-wrap') : null;
      };

      // initiales Einlesen (quote-sicher via textContent)
      const input0 = getInput();
      const sol0   = getSol();
      if (input0 && !S.start)    S.start    = input0.getAttribute('value') || input0.defaultValue || "";
      if (sol0   && !S.solution) S.solution = (sol0.textContent || "");

      const clearClasses = (node) => {
        if(!node || !node.classList) return;
        [...node.classList].forEach(c => {
          if (/(correct|wrong|success|error|checked|valid|invalid|resolved|solved)/i.test(c)) {
            node.classList.remove(c);
          }
        });
      };

      const setInputValue = (v, emitEvents) => {
        const input = getInput();
        if(!input) return;
        input.value = v;
        if (emitEvents) {
          input.dispatchEvent(new Event('input',  { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }
      };

      const hardenSolution = (input) => {
        if(!input) return;
        input.defaultValue = S.solution;
        try { input.setAttribute('value', S.solution); } catch(e){}
        input.removeAttribute('aria-invalid');
      };

      // SILENT → verhindert Flicker / Lia-Trigger
      const silentForceSolution = () => {
        const input = getInput();
        if(!input) return;
        input.value = S.solution;
        hardenSolution(input);
      };

      const findQuiz = () => {
        const wrap = getWrap();
        if(!wrap) return null;

        // schneller Direkt-Link, wenn Lia aria-labelledby nutzt
        if (wrap.id) {
          const answers = document.querySelector('.lia-quiz__answers[aria-labelledby="' + wrap.id + '"]');
          if (answers) {
            const quiz = answers.closest('.lia-quiz');
            if (quiz) return quiz;
          }
        }

        // robust: TreeWalker bis zur nächsten orthography-wrap
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
      };

      const applyGate = (control) => {
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
      };

      const placeReset = (control) => {
        const btn = getReset();
        if(!control || !btn) return;

        if (btn.parentElement !== control || btn !== control.lastElementChild) {
          control.appendChild(btn);
        }
        btn.classList.add('ortho-reset-inline');
        btn.style.marginBottom = "0";
      };

      const lockSolution = () => {
        S.solved = true;
        silentForceSolution();
        const wrap = getWrap();
        if (wrap) wrap.dataset.orthoSolved = "1";
      };

      // gelöst bleibt wirklich unverändert → silent prepaint repair
      const ensureSolvedSticky = () => {
        const input = getInput();
        if(!input) return;

        const wrap = getWrap();
        if (wrap) {
          wrap.dataset.orthoTries  = String(S.tries);
          wrap.dataset.orthoSolved = S.solved ? "1" : "0";
        }

        if (S.solved) {
          if (MOD.norm(input.value) !== MOD.norm(S.solution)) {
            silentForceSolution();
          } else {
            hardenSolution(input);
          }
        }
      };

      // Reset: tries NICHT verändern!
      const doReset = () => {
        if (S.solved) {
          lockSolution();
        } else {
          setInputValue(S.start, true);
          const input = getInput();
          if (input) {
            input.defaultValue = S.start;
            try { input.setAttribute('value', S.start); } catch(e){}
            input.removeAttribute('aria-invalid');
          }
        }

        clearClasses(getInput());
        clearClasses(findQuiz());

        const quiz = findQuiz();
        if (quiz) {
          const control = quiz.querySelector('.lia-quiz__control');
          applyGate(control);
          placeReset(control);
        }
      };

      const bindReset = () => {
        const btn = getReset();
        if(!btn) return;
        if (btn.dataset.orthoResetBound === "1") return;
        btn.dataset.orthoResetBound = "1";

        const handler = (ev) => {
          if(ev){
            ev.preventDefault();
            ev.stopPropagation();
            if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
          }
          doReset();
        };

        btn.addEventListener('click', handler, true);
        btn.addEventListener('keydown', (ev)=>{
          if (ev.key === 'Enter' || ev.key === ' ') handler(ev);
        }, true);
      };

      const bindControl = () => {
        const quiz = findQuiz();
        if(!quiz) return;

        const control = quiz.querySelector('.lia-quiz__control');
        if(!control) return;

        applyGate(control);
        placeReset(control);
        bindReset();

        const ckey = "orthoCtlBound_" + uid;
        if (control.dataset[ckey] === "1") return;
        control.dataset[ckey] = "1";

        control.addEventListener('click', function(ev){
          // Reset-Klick ignorieren
          const btn = getReset();
          if (btn && ev.target && ev.target.closest && ev.target.closest('#' + btn.id)) return;

          const inputBefore = (getInput() ? getInput().value : "");
          const wasCorrect  = (MOD.norm(inputBefore) === MOD.norm(S.solution)); // VOR Lia merken

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
              setTimeout(lockSolution, 0);
              setTimeout(lockSolution, 30);
            } else {
              setTimeout(function(){
                const input = getInput();
                if (!input) return;
                // wenn Lia ungewollt Starttext reindrückt: silent restore
                if (!S.solved && input.value === S.start && inputBefore !== S.start) {
                  setInputValue(inputBefore, false);
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
          }
        }, true);
      };

      const repair = () => {
        // Lösung sicher aus DOM nachladen (falls neu gerendert)
        const sol = getSol();
        if (sol) S.solution = (sol.textContent || S.solution);

        // Start nur setzen, wenn noch leer
        const input = getInput();
        if (input && !S.start) S.start = input.getAttribute('value') || input.defaultValue || "";

        bindControl();
        ensureSolvedSticky();
      };

      // fixer registrieren + sofort reparieren
      MOD.fixers[uid] = repair;
      repair();
      MOD.schedule();
      setTimeout(repair, 0);
      setTimeout(repair, 60);
      setTimeout(repair, 180);
    }
  };

  MOD.startGlobal();
  ROOT[KEY] = MOD;
})();
@end


@orthography: @orthography_(@uid,`@0`,`@1`,`@2`)

@orthography_
<div class="orthography-wrap" id="orthography-wrap-@0">
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
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();
  const MOD  = ROOT["__ORTHOGRAPHY_EXPORT_V1__"];
  if(!MOD || !MOD.register) return;

  MOD.register({
    uid: "@0",
    gateRaw: "@1",
    selInput: '[data-id="lia-quiz-@0"]',
    idReset: "orthography-reset-@0",
    idSol:   "orthography-solution-@0"
  });
})();
</script>
@end








@diktat: @diktat_(@uid,@0)

@diktat_
{|>}{<span style="position:absolute; left:-10000px; top:auto; width:1px; height:1px; overflow:hidden;">@0</span>}
[[ @0 ]]
@end




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



