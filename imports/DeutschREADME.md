<!--
version:  0.0.1
language: de
narrator: Deutsch Female
author: Martin Lommatzsch
comment: Deutsch Tools Export – dynFlex markers + orthography/diktat (reset inline left)

@style
/* ---------------------------------------------------------
   dynFlex – robustes Flex-Layout (Fallback, falls Import fehlt)
--------------------------------------------------------- */
section.dynFlex{
  display:flex;
  flex-wrap:wrap;
  align-items:stretch;
  gap:20px;
}
section.dynFlex > .flex-child{
  flex:1 1 350px;
  min-width:350px;
}
@media (max-width: 400px){
  section.dynFlex > .flex-child{
    flex-basis:100%;
    min-width:0;
  }
}

/* ---------------------------------------------------------
   Reset in der Lia-Control-Leiste: links neben Prüfen/Auflösen
--------------------------------------------------------- */
.ortho-reset-inline{
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  width:auto !important;
  max-width:max-content !important;
  flex:0 0 auto !important;
  white-space:nowrap !important;
  cursor:pointer !important;
  margin-right:.5rem !important;
  /* kein order: wir setzen DOM-mäßig wirklich nach links */
}
@end


@onload
(function(){
  // =========================================================
  // ROOT + globaler Store (einmal pro Dokument)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();

  const STORE_KEY = "__DEUTSCH_TOOLS_EXPORT_V1__";
  ROOT[STORE_KEY] = ROOT[STORE_KEY] || {
    fixers: {},        // uid -> function
    listener: false,
    observer: null,
    scheduled: false
  };
  const STORE = ROOT[STORE_KEY];

  // =========================================================
  // dynFlex Marker -> echte .flex-child Wrapper
  // Nutzung im Kurs:
  // ===============================
  function normComment(s){
    return String(s||"").trim().toLowerCase();
  }

  function wrapDynFlexMarkers(){
    const sections = document.querySelectorAll('section.dynFlex');
    sections.forEach(sec=>{
      // Marker-Wrapper: scan childNodes
      let node = sec.firstChild;
      while(node){
        if (node.nodeType === 8 && normComment(node.nodeValue) === "flex-child"){
          const start = node;
          const wrap = document.createElement('div');
          wrap.className = 'flex-child';

          // Wrapper vor dem Start-Marker einfügen
          sec.insertBefore(wrap, start);

          // Nodes zwischen Start und End-Marker in Wrapper verschieben
          let cur = start.nextSibling;
          while(cur){
            const isEnd = (cur.nodeType === 8 && (
              normComment(cur.nodeValue) === "/flex-child" ||
              normComment(cur.nodeValue) === "end-flex-child" ||
              normComment(cur.nodeValue) === "flex-child-end"
            ));

            if (isEnd){
              const end = cur;
              // Marker entfernen
              if (start.parentNode === sec) sec.removeChild(start);
              if (end.parentNode === sec) sec.removeChild(end);
              break;
            }

            const next = cur.nextSibling;
            wrap.appendChild(cur);
            cur = next;
          }

          // weiter nach dem Wrapper
          node = wrap.nextSibling;
          continue;
        }

        node = node.nextSibling;
      }
    });

    // Safety: falls irgendwo Quiz-Reste als Text auftauchen -> nur die Sequenz [[!]] entfernen
    document.querySelectorAll('section.dynFlex .flex-child').forEach(fc=>{
      const w = document.createTreeWalker(fc, NodeFilter.SHOW_TEXT);
      const kills = [];
      while(w.nextNode()){
        const t = w.currentNode;
        if (t && typeof t.nodeValue === "string" && t.nodeValue.includes('[[!]]')){
          t.nodeValue = t.nodeValue.replace(/\[\[!\]\]\s*/g,'');
        }
      }
    });
  }

  // =========================================================
  // Scheduler: so früh wie möglich (vor Paint) + kurze Nachläufer
  // =========================================================
  function runAll(){
    // Layout zuerst (damit Controls später richtig gefunden werden)
    try { wrapDynFlexMarkers(); } catch(e){}
    Object.keys(STORE.fixers).forEach(k=>{
      try { STORE.fixers[k](); } catch(e){}
    });
  }

  function scheduleRunAll(){
    if (STORE.scheduled) return;
    STORE.scheduled = true;

    queueMicrotask(function(){
      STORE.scheduled = false;
      runAll();
    });

    try { requestAnimationFrame(runAll); } catch(e){}
    setTimeout(runAll, 0);
    setTimeout(runAll, 60);
    setTimeout(runAll, 180);
  }

  if (!STORE.listener){
    STORE.listener = true;
    document.addEventListener('click', scheduleRunAll, true);

    function startObserver(){
      if (STORE.observer) return;
      const target = document.body || document.documentElement;
      if (!target) return;
      STORE.observer = new MutationObserver(function(){ scheduleRunAll(); });
      STORE.observer.observe(target, { childList:true, subtree:true });
    }
    startObserver();
    setTimeout(startObserver, 0);
    setTimeout(startObserver, 50);
  }

  // global verfügbar (optional)
  ROOT.__DEUTSCH_TOOLS_SCHEDULE__ = scheduleRunAll;

  // sofort laufen
  scheduleRunAll();
})();
@end


// =========================================================
// @diktat – inline-sicher (funktioniert in dynFlex)
// - versteckter Text für TTS + normales Lia-Eingabefeld
// =========================================================
@diktat: @diktat_(@uid,`@0`)
@diktat_
{|>}{<span style="position:absolute; left:-10000px">@1</span>}[[  @1  ]]


// =========================================================
// @orthography – mit Reset links in der Control-Leiste
// gate:
//   false/0/off/no  -> Auflösen aus
//   true            -> Auflösen sofort
//   n>0             -> Auflösen erst nach n Prüfen-Versuchen
// Reset:
//   - setzt KEINE tries zurück
//   - wenn solved/resolved -> lässt Lösung stehen (und setzt sie wieder)
// =========================================================
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
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();

  const STORE_KEY = "__ORTHO_STORE_V1__";
  ROOT[STORE_KEY] = ROOT[STORE_KEY] || { state:{}, fixers:{} };
  const STORE = ROOT[STORE_KEY];

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
  const sol0   = getSol();
  if(!input0 || !btn0 || !sol0) return;

  // Gate parse
  const gateRaw = "@1";
  function parseGate(raw){
    const s = String(raw || "").trim().toLowerCase();
    if (s === "false" || s === "0" || s === "off" || s === "no") return { mode:"off", n:0 };
    const n = parseInt(s, 10);
    if (Number.isFinite(n) && n > 0) return { mode:"attempts", n };
    return { mode:"on", n:0 };
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
  if (!S.solution) S.solution = (sol0.textContent || "");
  S.gate = parseGate(gateRaw);

  function setInputValue(v, emit){
    const input = getInput();
    if(!input) return;
    input.value = v;
    if (emit){
      input.dispatchEvent(new Event('input',  { bubbles:true }));
      input.dispatchEvent(new Event('change', { bubbles:true }));
    }
  }

  function hardenSolution(input){
    if(!input) return;
    input.defaultValue = S.solution;
    try { input.setAttribute('value', S.solution); } catch(e){}
    input.removeAttribute('aria-invalid');
  }

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

  // WICHTIG: Reset wirklich DOM-links einfügen (nicht nur via order)
  function placeReset(control){
    const btn = getReset();
    if(!control || !btn) return;

    const first = control.firstElementChild;
    if (first && btn !== first) {
      control.insertBefore(btn, first);
    } else if (!first) {
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

  function ensureSolvedSticky(){
    const input = getInput();
    if(!input) return;

    const wrap = getWrap();
    if (wrap) {
      wrap.dataset.orthoTries  = String(S.tries);
      wrap.dataset.orthoSolved = S.solved ? "1" : "0";
    }

    if (S.solved) {
      if (norm(input.value) !== norm(S.solution)) {
        silentForceSolution();
      } else {
        hardenSolution(input);
      }
    }
  }

  // Reset: tries NICHT anfassen!
  function doReset(){
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

    const quiz = findQuizForThisInput();
    if (quiz) {
      const control = quiz.querySelector('.lia-quiz__control');
      applyGate(control);
      placeReset(control);
    }
    ensureSolvedSticky();
  }

  // Reset-Handler: darf Lia nicht triggern
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
      const wasCorrect  = (norm(inputBefore) === norm(S.solution));

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

    return true;
  }

  function repair(){
    bindControl();
    ensureSolvedSticky();
  }

  STORE.fixers[uid] = repair;

  // an den globalen Scheduler hängen, wenn vorhanden
  if (ROOT.__DEUTSCH_TOOLS_SCHEDULE__) {
    ROOT.__DEUTSCH_TOOLS_SCHEDULE__();
  }

  setTimeout(repair, 0);
  setTimeout(repair, 60);
  setTimeout(repair, 180);
})();
</script>

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



