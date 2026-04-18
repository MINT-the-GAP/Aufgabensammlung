<!--
version:  0.0.1
language: de
narrator: Deutsch Female
author: Martin Lommatzsch

comment: FractionQuizzes (circle+rect) — 200x200 + Label IM Slider (wie Button), nur Schieber (kein Reset/keine Zahlen), import-sicher, kein ||-Parsefehler
















@circleQuiz: @circleQuiz_(@uid,@0)

@circleQuiz_
<div id="fq-circle-wrap-@0" class="fq-widget" data-fq-kind="circle" data-fq-uid="@0">
  <div id="fq-circle-host-@0" class="fq-widget" data-fq-kind="circle" data-fq-uid="@0">
    <div id="fq-circle-mount-@0" class="fq-mount"></div>

    <div id="fq-circle-range-@0" class="fq-range" data-label="Unterteilungen">
<input type="range" min="1" max="32" value="1" output="fq-c-n-@0">
    </div>
  </div>

  [[!]]
  <script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  if (!API) return false;

  const passed = API.isCorrect(uid);
  if (passed && !API.isLocked(uid)) {
    API.onCheck(uid, true);
  }
  return passed;
})()
  </script>
</div>

<script modify="false">
(function () {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const targetRaw = String.raw`@1`;

  if (!API) return;

  function waitForCircleDom(cb) {
    let tries = 0;

    function tick() {
      const wrap = document.getElementById("fq-circle-wrap-@0");
      const host = document.getElementById("fq-circle-host-@0");
      const mount = document.getElementById("fq-circle-mount-@0");
      const rangeWrap = document.getElementById("fq-circle-range-@0");
      const input = rangeWrap ? rangeWrap.querySelector('input[type="range"]') : null;

      if (wrap && host && mount && rangeWrap && input) {
        cb({ wrap, host, mount, input });
        return;
      }

      tries++;
      if (tries < 240) requestAnimationFrame(tick);
    }

    tick();
  }

  waitForCircleDom(({ wrap, host, mount, input }) => {
    API.attachCircle(uid, {
      wrap: wrap,
      host: host,
      mount: mount,
      circleInput: input,
      target: targetRaw,
      initialParts: input.value || 1
    });

    API.ensureQuizBridge(uid, wrap);
  });
})();
</script>
@end





















@rectQuiz: @rectQuiz_(@uid,@0)

@rectQuiz_
<div id="fq-rect-wrap-@0" class="fq-widget" data-fq-kind="rect" data-fq-uid="@0">
  <div id="fq-rect-host-@0" class="fq-widget" data-fq-kind="rect" data-fq-uid="@0">
    <div id="fq-rect-mount-@0" class="fq-mount"></div>

    <div id="fq-rect-rows-wrap-@0" class="fq-range" data-label="vertikal">
<input type="range" min="1" max="20" value="1" output="fq-r-rows-@0">
    </div>

    <div id="fq-rect-cols-wrap-@0" class="fq-range" data-label="horizontal">
<input type="range" min="1" max="20" value="1" output="fq-r-cols-@0">
    </div>
  </div>

  [[!]]
  <script>
(() => {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  if (!API) return false;

  const passed = API.isCorrect(uid);
  if (passed && !API.isLocked(uid)) {
    API.onCheck(uid, true);
  }
  return passed;
})()
  </script>
</div>

<script modify="false">
(function () {
  const API = window.__LIA_FRACTION_QUIZ__;
  const uid = "@0";
  const targetRaw = String.raw`@1`;

  if (!API) return;

  function waitForRectDom(cb) {
    let tries = 0;

    function tick() {
      const wrap = document.getElementById("fq-rect-wrap-@0");
      const host = document.getElementById("fq-rect-host-@0");
      const mount = document.getElementById("fq-rect-mount-@0");
      const rowsWrap = document.getElementById("fq-rect-rows-wrap-@0");
      const colsWrap = document.getElementById("fq-rect-cols-wrap-@0");
      const rowsInput = rowsWrap ? rowsWrap.querySelector('input[type="range"]') : null;
      const colsInput = colsWrap ? colsWrap.querySelector('input[type="range"]') : null;

      if (wrap && host && mount && rowsWrap && colsWrap && rowsInput && colsInput) {
        cb({ wrap, host, mount, rowsInput, colsInput });
        return;
      }

      tries++;
      if (tries < 240) requestAnimationFrame(tick);
    }

    tick();
  }

  waitForRectDom(({ wrap, host, mount, rowsInput, colsInput }) => {
    API.attachRect(uid, {
      wrap: wrap,
      host: host,
      mount: mount,
      rowsInput: rowsInput,
      colsInput: colsInput,
      target: targetRaw,
      initialRows: rowsInput.value || 1,
      initialCols: colsInput.value || 1
    });

    API.ensureQuizBridge(uid, wrap);
  });
})();
</script>
@end




-->














# Brüche darstellen

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$a)\;\;$__ $\dfrac{1}{3}$

@rectQuiz(1/3)

__$b)\;\;$__ $\dfrac{4}{5}$

@circleQuiz(4/5)


__$c)\;\;$__ $\dfrac{3}{4}$

@rectQuiz(3/4)

__$d)\;\;$__ $\dfrac{3}{8}$

@circleQuiz(3/8)
