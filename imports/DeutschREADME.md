<!--
version:  0.0.1
language: de
narrator: Deutsch Female
author: Martin Lommatzsch

comment: Orthography-Export (Reset inline, gated resolve, sticky solutions, no-flicker)
author: Martin Lommatzsch
















@onload
(function(){
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const KEY = "__ORTHOGRAPHY_EXPORT_V8__";
  if (ROOT[KEY]) return;

  const MOD = {
    state: {},
    observer: null,
    started: false,
    styleInstalled: false,
    syncScheduled: false,
    lateSyncTimer: null,

    norm(s){
      return String(s || "").toLocaleLowerCase().replace(/\s+/g, "");
    },

    parseGate(raw){
      const s = String(raw || "").trim().toLowerCase();
      if (s === "false" || s === "0" || s === "off" || s === "no") {
        return { mode: "off", n: 0 };
      }
      const n = parseInt(s, 10);
      if (Number.isFinite(n) && n > 0) {
        return { mode: "attempts", n: n };
      }
      return { mode: "on", n: 0 };
    },

    ensureStyle(){
      if (this.styleInstalled) return;
      this.styleInstalled = true;
    
      const style = document.createElement("style");
      style.id = "orthography-export-style-v8b";
      style.textContent = `
        .orthography-wrap{
          display:grid;
          grid-template-columns:minmax(0, 1fr) auto;
          column-gap:.5rem;
          row-gap:.35rem;
          align-items:center;
        }
    
        .orthography-wrap > p.lia-paragraph{
          grid-column:1 / -1;
          margin-bottom:0 !important;
        }
    
        .orthography-wrap > .lia-quiz__input{
          grid-column:1;
          min-width:0;
          width:100%;
          margin-bottom:0 !important;
        }
    
        .orthography-wrap > .ortho-reset-below{
          grid-column:2;
          margin:0 !important;
          display:inline-flex !important;
          align-items:center;
          justify-content:center;
          white-space:nowrap;
          align-self:stretch;
        }
    
        .orthography-wrap[data-ortho-solved="1"] > .ortho-reset-below{
          display:none !important;
        }
    
        .lia-quiz__resolve.ortho-resolve-faded{
          opacity:.38 !important;
          transition:opacity .18s ease;
        }
      `;
      (document.head || document.documentElement).appendChild(style);
    },

    ensureState(uid){
      if (!this.state[uid]) {
        this.state[uid] = {
          uid: uid,
          cfg: null,
          gate: { mode: "on", n: 0 },
          start: "",
          solution: "",
          liveValue: null,
          solved: false,
          tries: 0,
          checkToken: 0,
          resolvePending: false
        };
      }
      return this.state[uid];
    },

    register(cfg){
      const uid = String(cfg && cfg.uid || "").trim();
      if (!uid) return;

      const S = this.ensureState(uid);
      S.cfg = cfg || null;
      S.gate = this.parseGate(cfg && cfg.gateRaw);

      this.readStaticTexts(uid);
      this.syncUid(uid);
      this.scheduleSync();
    },

    parseUidFromString(v, prefix){
      v = String(v || "");
      if (!v) return "";
      if (prefix && v.indexOf(prefix) === 0) return v.slice(prefix.length);
      return "";
    },

    deriveUidFromWrap(wrap){
      if (!wrap) return "";

      if (wrap.dataset && wrap.dataset.orthoUid) {
        return String(wrap.dataset.orthoUid);
      }

      const byInputId = wrap.querySelector('[id^="orthography-input-"]');
      if (byInputId && byInputId.id) {
        return this.parseUidFromString(byInputId.id, "orthography-input-");
      }

      const byDataId = wrap.querySelector('[data-id^="lia-quiz-"]');
      if (byDataId) {
        const uid = this.parseUidFromString(byDataId.getAttribute("data-id"), "lia-quiz-");
        if (uid) return uid;
      }

      const bySolution = wrap.querySelector('[id^="orthography-solution-"]');
      if (bySolution && bySolution.id) {
        return this.parseUidFromString(bySolution.id, "orthography-solution-");
      }

      const byReset = wrap.querySelector('[id^="orthography-reset-"]');
      if (byReset && byReset.id) {
        return this.parseUidFromString(byReset.id, "orthography-reset-");
      }

      return "";
    },

    getNodes(uid){
      const S = this.ensureState(uid);
      const cfg = S.cfg || {};

      const input =
        document.getElementById(cfg.idInput || ("orthography-input-" + uid)) ||
        document.querySelector('[data-id="lia-quiz-' + uid + '"]');

      const wrap =
        (input ? input.closest(".orthography-wrap") : null) ||
        document.querySelector('.orthography-wrap[data-ortho-uid="' + uid + '"]') ||
        document.getElementById(cfg.idWrap || ("orthography-wrap-" + uid));

      const reset =
        document.getElementById(cfg.idReset || ("orthography-reset-" + uid)) ||
        (wrap ? wrap.querySelector('[id^="orthography-reset-"]') : null);

      const start =
        document.getElementById(cfg.idStart || ("orthography-start-" + uid)) ||
        (wrap ? wrap.querySelector('[id^="orthography-start-"]') : null);

      const solution =
        document.getElementById(cfg.idSolution || ("orthography-solution-" + uid)) ||
        (wrap ? wrap.querySelector('[id^="orthography-solution-"]') : null);

      if (wrap) wrap.dataset.orthoUid = uid;
      if (input) input.dataset.orthoUid = uid;
      if (reset) reset.dataset.orthoUid = uid;
      if (start) start.dataset.orthoUid = uid;
      if (solution) solution.dataset.orthoUid = uid;

      return { wrap, input, reset, start, solution };
    },

    readStaticTexts(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);

      if (!S.start) {
        if (N.start) {
          S.start = N.start.textContent || "";
        } else if (N.input) {
          S.start = N.input.getAttribute("value") || N.input.defaultValue || "";
        }
      }

      if (N.solution) {
        S.solution = N.solution.textContent || S.solution || "";
      }

      if (S.liveValue === null) {
        if (N.input) S.liveValue = N.input.value;
        else S.liveValue = S.start;
      }
    },

    findQuiz(uid){
      const N = this.getNodes(uid);
      const wrap = N.wrap;
      if (!wrap) return null;

      if (wrap.id) {
        const answers = document.querySelector('.lia-quiz__answers[aria-labelledby="' + wrap.id + '"]');
        if (answers) {
          const quiz = answers.closest(".lia-quiz");
          if (quiz) return quiz;
        }
      }

      let node = wrap.nextElementSibling;
      while (node) {
        if (node.classList && node.classList.contains("orthography-wrap")) break;
        if (node.classList && node.classList.contains("lia-quiz")) return node;
        if (node.querySelector) {
          const quiz = node.querySelector(".lia-quiz");
          if (quiz) return quiz;
        }
        node = node.nextElementSibling;
      }

      const root = document.body || document.documentElement;
      if (!root || !document.createTreeWalker || !root.contains(wrap)) return null;

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
      walker.currentNode = wrap;

      let current;
      while ((current = walker.nextNode())) {
        if (!(current instanceof Element)) continue;
        if (current !== wrap && current.classList && current.classList.contains("orthography-wrap")) break;
        if (current.classList && current.classList.contains("lia-quiz")) return current;
      }

      return null;
    },

    ensureQuizBinding(uid){
      const quiz = this.findQuiz(uid);
      if (!quiz) return null;

      const control = quiz.querySelector(".lia-quiz__control");
      const check = control ? control.querySelector(".lia-quiz__check") : null;
      const resolve = control ? control.querySelector(".lia-quiz__resolve") : null;

      quiz.dataset.orthoUid = uid;
      if (control) control.dataset.orthoUid = uid;
      if (check) check.dataset.orthoUid = uid;
      if (resolve) resolve.dataset.orthoUid = uid;

      return { quiz, control, check, resolve };
    },

    ensureResetPlacement(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);
      if (!N.wrap || !N.input || !N.reset) return;

      N.wrap.dataset.orthoUid = uid;
      N.wrap.dataset.orthoSolved = S.solved ? "1" : "0";
      N.reset.dataset.orthoUid = uid;
      N.reset.classList.add("ortho-reset-below");

      if (N.reset.parentElement !== N.wrap || N.reset.previousElementSibling !== N.input) {
        N.input.insertAdjacentElement("afterend", N.reset);
      }

      if (S.solved) {
        N.reset.disabled = true;
        N.reset.setAttribute("aria-hidden", "true");
        N.reset.setAttribute("tabindex", "-1");
      } else {
        N.reset.disabled = false;
        N.reset.removeAttribute("aria-hidden");
        N.reset.removeAttribute("tabindex");
      }
    },

    setInputValue(uid, value){
      const N = this.getNodes(uid);
      if (!N.input) return;

      N.input.value = value;
      N.input.defaultValue = value;
      try { N.input.setAttribute("value", value); } catch(e){}
    },

    restoreLiveValue(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);
      if (!N.input) return;

      const desired = S.solved ? S.solution : (S.liveValue == null ? S.start : S.liveValue);
      const current = N.input.value;

      N.input.readOnly = !!S.solved;

      if (this.norm(current) !== this.norm(desired)) {
        this.setInputValue(uid, desired);
      }
    },

    applyResolveState(uid){
      const S = this.ensureState(uid);
      const B = this.ensureQuizBinding(uid);
      if (!B || !B.resolve) return;

      const resolve = B.resolve;

      if (S.solved) {
        resolve.style.display = "";
        resolve.disabled = true;
        resolve.setAttribute("aria-hidden", "true");
        resolve.setAttribute("tabindex", "-1");
        resolve.classList.add("ortho-resolve-faded");
        return;
      }

      resolve.classList.remove("ortho-resolve-faded");

      if (S.gate.mode === "off") {
        resolve.disabled = true;
        resolve.style.display = "none";
        resolve.setAttribute("aria-hidden", "true");
        resolve.setAttribute("tabindex", "-1");
        return;
      }

      if (S.gate.mode === "attempts") {
        if (S.tries >= S.gate.n) {
          resolve.disabled = false;
          resolve.style.display = "";
          resolve.removeAttribute("aria-hidden");
          resolve.removeAttribute("tabindex");
        } else {
          resolve.disabled = true;
          resolve.style.display = "none";
          resolve.setAttribute("aria-hidden", "true");
          resolve.setAttribute("tabindex", "-1");
        }
        return;
      }

      resolve.disabled = false;
      resolve.style.display = "";
      resolve.removeAttribute("aria-hidden");
      resolve.removeAttribute("tabindex");
    },

    syncUid(uid){
      const S = this.ensureState(uid);
      this.readStaticTexts(uid);
      this.ensureResetPlacement(uid);
      this.ensureQuizBinding(uid);
      this.applyResolveState(uid);
      this.restoreLiveValue(uid);

      const N = this.getNodes(uid);
      if (N.wrap) {
        N.wrap.dataset.orthoTries = String(S.tries);
        N.wrap.dataset.orthoSolved = S.solved ? "1" : "0";
      }
    },

    discoverAll(){
      const wraps = document.querySelectorAll(".orthography-wrap");
      wraps.forEach((wrap) => {
        const uid = this.deriveUidFromWrap(wrap);
        if (!uid) return;
        const S = this.ensureState(uid);
        wrap.dataset.orthoUid = uid;
        if (!S.cfg) S.cfg = {};
        this.readStaticTexts(uid);
      });
    },

    syncAll(){
      this.discoverAll();
      Object.keys(this.state).forEach((uid) => {
        try { this.syncUid(uid); } catch(e){}
      });
    },

    scheduleSync(){
      if (this.syncScheduled) return;
      this.syncScheduled = true;

      const run = () => {
        this.syncScheduled = false;
        this.syncAll();
      };

      try { requestAnimationFrame(run); } catch(e) { setTimeout(run, 16); }

      clearTimeout(this.lateSyncTimer);
      this.lateSyncTimer = setTimeout(() => this.syncAll(), 90);
    },

    getUidFromOrthographyInput(node){
      if (!(node instanceof Element)) return "";

      const direct = node.closest("[data-ortho-uid]");
      if (direct && direct.dataset && direct.dataset.orthoUid) {
        return String(direct.dataset.orthoUid);
      }

      const input = node.closest('[id^="orthography-input-"], [data-id^="lia-quiz-"]');
      if (input) {
        if (input.id) {
          const byId = this.parseUidFromString(input.id, "orthography-input-");
          if (byId) return byId;
        }
        const dataId = input.getAttribute("data-id");
        if (dataId) {
          const byData = this.parseUidFromString(dataId, "lia-quiz-");
          if (byData) return byData;
        }
      }

      return "";
    },

    getUidFromReset(node){
      if (!(node instanceof Element)) return "";

      const direct = node.closest("[data-ortho-uid]");
      if (direct && direct.dataset && direct.dataset.orthoUid) {
        return String(direct.dataset.orthoUid);
      }

      if (node.id) {
        const uid = this.parseUidFromString(node.id, "orthography-reset-");
        if (uid) return uid;
      }

      return "";
    },

    getUidFromOrthographyControl(node){
      if (!(node instanceof Element)) return "";

      const direct = node.closest("[data-ortho-uid]");
      if (direct && direct.dataset && direct.dataset.orthoUid) {
        return String(direct.dataset.orthoUid);
      }

      const control = node.closest(".lia-quiz__control");
      if (control && control.dataset && control.dataset.orthoUid) {
        return String(control.dataset.orthoUid);
      }

      const quiz = node.closest(".lia-quiz");
      if (quiz && quiz.dataset && quiz.dataset.orthoUid) {
        return String(quiz.dataset.orthoUid);
      }

      return "";
    },

    handleInput(uid){
      const S = this.ensureState(uid);
      if (S.solved) return;

      const N = this.getNodes(uid);
      if (!N.input) return;

      S.liveValue = N.input.value;
    },

    handleReset(uid, ev){
      const S = this.ensureState(uid);

      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
      }

      if (S.solved) return;

      S.liveValue = S.start;
      this.setInputValue(uid, S.start);
    },

    finishCheck(uid, token, beforeValue, wasCorrect){
      const S = this.ensureState(uid);
      if (token !== S.checkToken) return;

      if (!S.solved && S.gate.mode === "attempts") {
        S.tries += 1;
      }

      if (wasCorrect) {
        S.solved = true;
        S.liveValue = S.solution;
      } else {
        S.liveValue = beforeValue;
      }

      this.syncUid(uid);
      this.scheduleSync();
    },

    handleCheck(uid, ev){
      const S = this.ensureState(uid);
      if (S.solved) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
        }
        return;
      }

      const N = this.getNodes(uid);
      if (!N.input) return;

      const beforeValue = N.input.value;
      const wasCorrect = this.norm(beforeValue) === this.norm(S.solution);
      const token = ++S.checkToken;

      setTimeout(() => this.finishCheck(uid, token, beforeValue, wasCorrect), 0);

      try {
        requestAnimationFrame(() => this.finishCheck(uid, token, beforeValue, wasCorrect));
      } catch(e){}
    },

    handleResolve(uid, ev){
      const S = this.ensureState(uid);

      if (S.solved || S.resolvePending) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
        }
        return;
      }

      S.resolvePending = true;

      setTimeout(() => {
        S.resolvePending = false;
        S.solved = true;
        S.liveValue = S.solution;
        this.syncUid(uid);
        this.scheduleSync();
      }, 0);

      try {
        requestAnimationFrame(() => this.syncUid(uid));
      } catch(e){}
    },

    startGlobal(){
      if (this.started) return;
      this.started = true;

      this.ensureStyle();

      document.addEventListener("input", (ev) => {
        const target = ev.target;
        if (!(target instanceof Element)) return;

        const uid = this.getUidFromOrthographyInput(target);
        if (!uid) return;
        this.handleInput(uid);
      }, true);

      document.addEventListener("change", (ev) => {
        const target = ev.target;
        if (!(target instanceof Element)) return;

        const uid = this.getUidFromOrthographyInput(target);
        if (!uid) return;
        this.handleInput(uid);
      }, true);

      document.addEventListener("click", (ev) => {
        const target = ev.target;
        if (!(target instanceof Element)) return;

        const reset = target.closest(".ortho-reset-below, [id^='orthography-reset-']");
        if (reset) {
          const uid = this.getUidFromReset(reset);
          if (uid) this.handleReset(uid, ev);
          return;
        }

        const check = target.closest(".lia-quiz__check");
        if (check) {
          const uid = this.getUidFromOrthographyControl(check);
          if (uid) this.handleCheck(uid, ev);
          return;
        }

        const resolve = target.closest(".lia-quiz__resolve");
        if (resolve) {
          const uid = this.getUidFromOrthographyControl(resolve);
          if (uid) this.handleResolve(uid, ev);
        }
      }, true);

      const startObserver = () => {
        if (this.observer) return;

        const target = document.body || document.documentElement;
        if (!target) return;

        this.observer = new MutationObserver(() => {
          this.scheduleSync();
        });

        this.observer.observe(target, {
          childList: true,
          subtree: true
        });
      };

      startObserver();
      setTimeout(startObserver, 0);

      this.syncAll();
      setTimeout(() => this.syncAll(), 0);
      setTimeout(() => this.syncAll(), 120);
      setTimeout(() => this.syncAll(), 260);
    }
  };

  ROOT[KEY] = MOD;
  MOD.startGlobal();
})();
@end


















@orthography: @orthography_(@uid,`@0`,`@1`,`@2`)

@orthography_
<div class="orthography-wrap" id="orthography-wrap-@0" data-ortho-uid="@0">
  <span id="orthography-start-@0" style="display:none">@2</span>
  <span id="orthography-solution-@0" style="display:none">@3</span>

  <input id="orthography-input-@0" data-ortho-uid="@0" data-id="lia-quiz-@0" class="lia-input lia-quiz__input" style="margin-bottom:.5rem" value="@2">

  <button type="button" class="lia-btn lia-btn--outline ortho-reset-inline" id="orthography-reset-@0" data-ortho-uid="@0">Reset</button>
</div>

[[!]]
<script>
(function(){
  const el  = document.getElementById("orthography-input-@0");
  const sol = document.getElementById("orthography-solution-@0");
  if(!el || !sol) return false;

  const norm = s => String(s || "").toLocaleLowerCase().replace(/\s+/g, "");
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
  const MOD  = ROOT["__ORTHOGRAPHY_EXPORT_V8__"];
  if (!MOD || !MOD.register) return;

  MOD.register({
    uid: "@0",
    gateRaw: "@1",
    idWrap: "orthography-wrap-@0",
    idInput: "orthography-input-@0",
    idReset: "orthography-reset-@0",
    idStart: "orthography-start-@0",
    idSolution: "orthography-solution-@0"
  });
})();
</script>

@end















@diktat: @diktat_(@uid,@0)

@diktat_
<span class="lia-diktat" id="lia-diktat-@0">{|>}{<span class="lia-diktat-measure" style="position:absolute;left:-10000px;top:auto;width:auto;height:auto;overflow:hidden;white-space:pre;">@1</span>}[[ @1 ]]</span>
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


<p>

@orthography(2,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)

</p>


--- 


__Aufgabe 4:__ Setze die Satzzeichen so, dass der Satz eine korrekte wörtliche Rede darstellt. (Auflösung bei erst nach 2 und 0 Versuchen)

__$a)\;\;$__
@orthography(2,`Der Apfel ist rot sagte Ben`,`"Der Apfel ist rot", sagte Ben.`)

__$b)\;\;$__
@orthography(true,`Clara sagt Druck ist eine physikalische Größe`,`Clara sagt: "Druck ist eine physikalische Größe."`)


--- 


__Aufgabe 5:__ Korrigiere die Rechtschreibfehler im gezeigten Satz. (Auflösung geht noch nicht und ist deswegen blockiert.)

@orthography(3,`Es ist jetze um sechse.`,`Es ist jetzt um sechs.`)



