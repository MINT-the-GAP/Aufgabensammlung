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
  const KEY = "__ORTHOGRAPHY_EXPORT_V14__";
  if (ROOT[KEY]) return;

  const MOD = {
    state: {},
    observer: null,
    started: false,
    styleInstalled: false,
    syncScheduled: false,
    lateSyncTimer: null,

    norm(s){
      return String(s || "")
        .normalize("NFKC")
        .replace(/[„“”‟«»‹›"]/g, '"')
        .replace(/[‚‘’‛]/g, "'")
        .replace(/\u00A0/g, " ")
        .toLocaleLowerCase()
        .replace(/\s+/g, "");
    },

    ensureStyle(){
      if (this.styleInstalled) return;
      this.styleInstalled = true;

      const style = document.createElement("style");
      style.id = "orthography-export-style-v14";
      style.textContent = `
        .orthography-ui{
          display:block;
          margin:0;
          padding:0;
        }

        .orthography-task{
          display:block;
          margin:0;
          padding:0;
        }

        .orthography-check{
          display:block;
          margin:0;
          padding:0;
        }

        .orthography-wrap{
          display:grid;
          grid-template-columns:minmax(0, 1fr) auto;
          column-gap:.5rem;
          row-gap:.35rem;
          align-items:center;
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
      `;
      (document.head || document.documentElement).appendChild(style);
    },

    ensureState(uid){
      if (!this.state[uid]) {
        this.state[uid] = {
          uid,
          cfg: null,
          start: "",
          solution: "",
          liveValue: null,
          solved: false
        };
      }
      return this.state[uid];
    },

    register(cfg){
      const uid = String(cfg && cfg.uid || "").trim();
      if (!uid) return;

      const S = this.ensureState(uid);
      S.cfg = cfg || null;

      if (cfg && typeof cfg.startText === "string") {
        S.start = cfg.startText;
      }

      if (cfg && typeof cfg.solutionText === "string") {
        S.solution = cfg.solutionText;
      }

      if (S.liveValue === null) {
        S.liveValue = S.start;
      }

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

      return "";
    },

    getNodes(uid){
      const S = this.ensureState(uid);
      const cfg = S.cfg || {};

      const ui =
        document.getElementById(cfg.idUi || ("orthography-ui-" + uid));

      const task =
        document.getElementById(cfg.idTask || ("orthography-task-" + uid));

      const checkRoot =
        document.getElementById(cfg.idCheck || ("orthography-check-" + uid));

      const input =
        document.getElementById(cfg.idInput || ("orthography-input-" + uid));

      const wrap =
        (input ? input.closest(".orthography-wrap") : null) ||
        document.getElementById(cfg.idWrap || ("orthography-wrap-" + uid));

      const reset =
        document.getElementById(cfg.idReset || ("orthography-reset-" + uid));

      const start =
        document.getElementById(cfg.idStart || ("orthography-start-" + uid));

      const solution =
        document.getElementById(cfg.idSolution || ("orthography-solution-" + uid));

      if (ui) ui.dataset.orthoUid = uid;
      if (task) task.dataset.orthoUid = uid;
      if (checkRoot) checkRoot.dataset.orthoUid = uid;
      if (wrap) wrap.dataset.orthoUid = uid;
      if (input) input.dataset.orthoUid = uid;
      if (reset) reset.dataset.orthoUid = uid;
      if (start) start.dataset.orthoUid = uid;
      if (solution) solution.dataset.orthoUid = uid;

      return { ui, task, checkRoot, wrap, input, reset, start, solution };
    },

    readStaticTexts(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);

      if (!S.start) {
        if (N.start) S.start = N.start.textContent || "";
      }

      if (!S.solution) {
        if (N.solution) S.solution = N.solution.textContent || "";
      }

      if (S.liveValue === null) {
        if (N.input) S.liveValue = N.input.value;
        else S.liveValue = S.start;
      }
    },

    findQuiz(uid){
      const N = this.getNodes(uid);
      if (!N.checkRoot) return null;

      const quizzes = N.checkRoot.querySelectorAll(".lia-quiz");
      if (!quizzes || !quizzes.length) return null;

      return quizzes[quizzes.length - 1];
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

    ensureInstanceBindings(uid){
      const N = this.getNodes(uid);

      if (N.input && N.input.__orthoInputBoundUid !== uid) {
        N.input.__orthoInputBoundUid = uid;

        N.input.addEventListener("input", () => {
          this.handleInput(uid);
        }, true);

        N.input.addEventListener("change", () => {
          this.handleInput(uid);
        }, true);
      }

      if (N.reset && N.reset.__orthoResetBoundUid !== uid) {
        N.reset.__orthoResetBoundUid = uid;

        N.reset.addEventListener("click", (ev) => {
          this.handleReset(uid, ev);
        }, true);
      }
    },

    setInputValue(uid, value){
      const N = this.getNodes(uid);
      if (!N.input) return;

      N.input.value = value;
      N.input.defaultValue = value;
      try { N.input.setAttribute("value", value); } catch(e){}
    },

    syncSolvedFromQuiz(uid){
      const S = this.ensureState(uid);
      const quiz = this.findQuiz(uid);

      if (!quiz) {
        S.solved = false;
        return;
      }

      S.solved =
        quiz.classList.contains("solved") ||
        quiz.classList.contains("resolved");
    },

    restoreLiveValue(uid){
      const S = this.ensureState(uid);
      const N = this.getNodes(uid);
      if (!N.input) return;

      const desired = S.solved
        ? (S.solution || S.liveValue || S.start)
        : (S.liveValue == null ? S.start : S.liveValue);

      const current = N.input.value;

      N.input.readOnly = !!S.solved;

      if (this.norm(current) !== this.norm(desired)) {
        this.setInputValue(uid, desired);
      }
    },

    syncUid(uid){
      const S = this.ensureState(uid);
      this.readStaticTexts(uid);
      this.syncSolvedFromQuiz(uid);
      this.ensureResetPlacement(uid);
      this.ensureInstanceBindings(uid);
      this.restoreLiveValue(uid);

      const N = this.getNodes(uid);
      if (N.wrap) {
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

    getCurrentValue(uid){
      const N = this.getNodes(uid);
      if (N.input) return N.input.value;

      const S = this.ensureState(uid);
      return S.liveValue == null ? S.start : S.liveValue;
    },

    getSolution(uid){
      const S = this.ensureState(uid);
      return S.solution || "";
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

    startGlobal(){
      if (this.started) return;
      this.started = true;

      this.ensureStyle();

      const startObserver = () => {
        if (this.observer) return;

        const target = document.body || document.documentElement;
        if (!target) return;

        this.observer = new MutationObserver(() => {
          this.scheduleSync();
        });

        this.observer.observe(target, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ["class", "aria-hidden", "tabindex"]
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
<div id="orthography-ui-@0" class="orthography-ui" data-ortho-uid="@0">
  <div id="orthography-task-@0" class="orthography-task">
    <div class="orthography-wrap" id="orthography-wrap-@0" data-ortho-uid="@0">
      <span id="orthography-start-@0" style="display:none">@2</span>
      <span id="orthography-solution-@0" style="display:none">@3</span>

      <input
        id="orthography-input-@0"
        data-ortho-uid="@0"
        data-id="lia-quiz-@0"
        class="lia-input lia-quiz__input"
        style="margin-bottom:.5rem"
        value="@2"
      >

      <button
        type="button"
        class="lia-btn lia-btn--outline ortho-reset-inline"
        id="orthography-reset-@0"
        data-ortho-uid="@0"
      >Reset</button>
    </div>
  </div>

  <div id="orthography-check-@0" class="orthography-check" data-ortho-uid="@0">
    @1
    [[!]]
    <script modify="false">
      (() => {
        function getRootWindow(){
          let w = window;
          try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
          return w;
        }

        const ROOT = getRootWindow();
        const MOD  = ROOT["__ORTHOGRAPHY_EXPORT_V14__"];
        if (!MOD || !MOD.getCurrentValue || !MOD.getSolution || !MOD.norm) return false;

        return MOD.norm(MOD.getCurrentValue("@0")) === MOD.norm(MOD.getSolution("@0"));
      })()
    </script>
  </div>
</div>

<script type="text/plain" id="orthography-comment-@0">@1</script>

<script modify="false">
(function(){
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const MOD  = ROOT["__ORTHOGRAPHY_EXPORT_V13__"];
  if (!MOD || !MOD.register) return;

  MOD.register({
    uid: "@0",
    startText: String.raw`@2`,
    solutionText: String.raw`@3`,
    idUi: "orthography-ui-@0",
    idTask: "orthography-task-@0",
    idCheck: "orthography-check-@0",
    idWrap: "orthography-wrap-@0",
    idInput: "orthography-input-@0",
    idReset: "orthography-reset-@0",
    idComment: "orthography-comment-@0",
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


@orthography(`<!--  data-solution-button="false"  -->`,`Das ist der Tag an dem ich geblitzt wurde.`,`Das ist der Tag, an dem ich geblitzt wurde.`)


<p>

@orthography(`<!--  data-solution-button="4"  -->`,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)

</p>


--- 


__Aufgabe 4:__ Setze die Satzzeichen so, dass der Satz eine korrekte wörtliche Rede darstellt. (Auflösung bei erst nach 2 und 0 Versuchen)

__$a)\;\;$__

@orthography(`<!--  data-solution-button="2"  -->`,`Der Apfel ist rot sagte Ben`,`"Der Apfel ist rot", sagte Ben.`)

__$b)\;\;$__

@orthography(`<!--  data-solution-button="0"  -->`,`Clara sagt Druck ist eine physikalische Größe`,`Clara sagt: "Druck ist eine physikalische Größe."`)


--- 


__Aufgabe 5:__ Korrigiere die Rechtschreibfehler im gezeigten Satz. 

@orthography(`<!--  data-solution-button="4"  -->`,`Es ist jetze um sechse.`,`Es ist jetzt um sechs.`)



