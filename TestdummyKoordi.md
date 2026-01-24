<!--
version:  0.0.1
language: de
narrator: Deutsch Female

tags:
comment:
author:

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

input {
  text-align: center;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 20px;
}

.flex-child {
  flex: 1;
  min-width: 350px;
  margin-right: 20px;
}

@media (max-width: 400px) {
  .flex-child {
    flex: 100%;
    margin-right: 0;
  }
}





/* Quiz/Check NICHT über volle Breite ziehen (nur dort, wo class="check-only" gesetzt ist) */
.check-only {
  display: inline-block !important;
  width: auto !important;
  max-width: max-content !important;
  text-align: left !important;
}

/* sehr defensiv: typische LiaScript-Wrapper ebenfalls auf "shrink" */
.check-only .lia-quiz,
.check-only .lia-input,
.check-only .lia-solution,
.check-only .lia-quiz__controls,
.check-only .lia-quiz__solution {
  display: inline-block !important;
  width: auto !important;
  max-width: max-content !important;
  float: none !important;
  text-align: left !important;
}

/* In diesem Check-Block ALLE Eingabeelemente ausblenden, nur Button bleibt */
.check-only input,
.check-only textarea,
.check-only select {
  display: none !important;
  visibility: hidden !important;
  width: 0 !important;
  height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  border: 0 !important;
}


.check-only button {
  float: none !important;
  margin-left: 0 !important;
}

@end

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md





@onload
window.__boards = window.__boards || {};          // id -> board
window.__points = window.__points || {};          // boardId -> { name -> point }

window.ensurePoint = function (boardId, name) {
  const board = window.__boards && window.__boards[boardId];
  if (!board) return;

  window.__points[boardId] = window.__points[boardId] || {};

  // existiert schon auf diesem Board -> Feedback
  if (window.__points[boardId][name] && window.__points[boardId][name].elType === 'point') {
    window.__points[boardId][name].setAttribute({ strokeWidth: 4 });
    setTimeout(() => window.__points[boardId][name].setAttribute({ strokeWidth: 2 }), 250);
    board.update();
    return;
  }

  // Start zufällig in [0,1) x [0,1)
  const x0 = Math.random();
  const y0 = Math.random();

  const pt = board.create('point', [x0, y0], {
    name: name,
    face: 'x',
    size: 6,
    strokeColor: 'purple',
    fillColor: 'purple',
    fixed: false
  });

  pt.setAttribute({ showInfobox: false, showInfoBox: false });
  pt.on('over', function () { board.infobox && board.infobox.hide && board.infobox.hide(); });
  pt.on('out',  function () { board.infobox && board.infobox.hide && board.infobox.hide(); });

  window.__points[boardId][name] = pt;
  board.update();
};

window.ensurePointFromSpec = function (spec) {
  // spec: "boardId;Name;tx;ty"
  const parts = String(spec).split(';');
  const boardId = (parts[0] || '').trim();
  const name    = (parts[1] || '').trim();
  if (!boardId || !name) return;
  window.ensurePoint(boardId, name);
};
@end




@ErzeugePunkt: @ErzeugePunkt_(@uid,@0)

@ErzeugePunkt_
<button id="btn-@0" class="lia-btn" onclick="window.ensurePointFromSpec('@1')">Punkt erzeugen</button>

<script run-once="true" modify="false">
  (function () {
    // spec: "boardId;Name;tx;ty"
    const spec = '@1';
    const parts = String(spec).split(';');
    const name = (parts[1] || '').trim();
    const btn  = document.getElementById('btn-@0');
    if (btn && name) btn.textContent = name + ' erzeugen';
  })();
</script>

<!-- class="check-only" -->
[[ 0 ]]
<script modify="false">
  const spec = '@1';
  const parts = String(spec).split(';');

  const boardId = (parts[0] || '').trim();
  const name    = (parts[1] || '').trim();
  const tx = parseFloat((parts[2] || '').replace(',', '.'));
  const ty = parseFloat((parts[3] || '').replace(',', '.'));

  const pt = window.__points && window.__points[boardId] && window.__points[boardId][name];
  const eps = 0.05;

  const ok = !!pt
    && !Number.isNaN(tx)
    && !Number.isNaN(ty)
    && Math.abs(pt.X() - tx) < eps
    && Math.abs(pt.Y() - ty) < eps;

  ok
</script>
@end





-->


# Koordinatensysteme





``` javascript @JSX.Graph
// Board
board = JXG.JSXGraph.initBoard(jxgbox, {
  axis: true,
  boundingbox: [-1, 5, 7, -1],
  keepaspectratio: true,
  defaultAxes: {
    x: { 
      strokeColor: 'black',
      strokeWidth: 2.5,  
      ticks: { insertTicks: false, ticksDistance: 1, minorTicks: 9, drawLabels: true, label: { fontSize: 18 } } },
    y: {  
      strokeColor: 'black',
      strokeWidth: 2.5,  
      ticks: { insertTicks: false, ticksDistance: 1, minorTicks: 9, drawLabels: true, label: { fontSize: 18 } } }
  },
  // Raster konfigurieren: Major solide, Minor gestrichelt
  grid: {
    majorStep: 'auto',        // übernimmt die Schrittweite der Achsen (=> 1)
    minorElements: 'auto',    // übernimmt die Anzahl Minor-Ticks (=> 4)
    includeBoundaries: true,
    forceSquare: true,        // gleiche Metrik in x und y

    major: {                  // durchgezogene Linien bei ganzen Zahlen
      face: 'line',
      strokeColor: '#999',
      strokeWidth: 1.5,
      dash: 0,
      drawZero: true
    },
    minor: {                  // gestrichelte Hilfslinien dazwischen
      face: 'line',
      strokeColor: '#999',
      strokeWidth: 1,
      dash: 1,
      drawZero: true
    }
  }
});

window.__boards = window.__boards || {};
window.__boards['Aufgabe1'] = board;


```



<section class="flex-container">

<div class="flex-child">

Ziehe den Punkt $P$ auf die Koordinaten $(2|3)$.

@ErzeugePunkt(Aufgabe1;P;2;3)

</div>

<div class="flex-child">

Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(Aufgabe1;A;1;4)

</div>

<div class="flex-child">

Ziehe den Punkt $B$ auf die Koordinaten $(6|2)$.

@ErzeugePunkt(Aufgabe1;B;6;2)

</div>


</section>








``` javascript @JSX.Graph
// Board
board = JXG.JSXGraph.initBoard(jxgbox, {
  axis: true,
  boundingbox: [-1, 5, 7, -1],
  keepaspectratio: true,
  defaultAxes: {
    x: { 
      strokeColor: 'black',
      strokeWidth: 2.5,  
      ticks: { insertTicks: false, ticksDistance: 1, minorTicks: 9, drawLabels: true, label: { fontSize: 18 } } },
    y: {  
      strokeColor: 'black',
      strokeWidth: 2.5,  
      ticks: { insertTicks: false, ticksDistance: 1, minorTicks: 9, drawLabels: true, label: { fontSize: 18 } } }
  },
  // Raster konfigurieren: Major solide, Minor gestrichelt
  grid: {
    majorStep: 'auto',        // übernimmt die Schrittweite der Achsen (=> 1)
    minorElements: 'auto',    // übernimmt die Anzahl Minor-Ticks (=> 4)
    includeBoundaries: true,
    forceSquare: true,        // gleiche Metrik in x und y

    major: {                  // durchgezogene Linien bei ganzen Zahlen
      face: 'line',
      strokeColor: '#999',
      strokeWidth: 1.5,
      dash: 0,
      drawZero: true
    },
    minor: {                  // gestrichelte Hilfslinien dazwischen
      face: 'line',
      strokeColor: '#999',
      strokeWidth: 1,
      dash: 1,
      drawZero: true
    }
  }
});

window.__boards = window.__boards || {};
window.__boards['Aufgabe2'] = board;


```



<section class="flex-container">

<div class="flex-child">

Ziehe den Punkt $Q$ auf die Koordinaten $(7|0)$.

@ErzeugePunkt(Aufgabe2;Q;7;0)

</div>

<div class="flex-child">

Ziehe den Punkt $A$ auf die Koordinaten $(2|4)$.

@ErzeugePunkt(Aufgabe2;A;2;4)

</div>

<div class="flex-child">

Ziehe den Punkt $B$ auf die Koordinaten $(5|4)$.

@ErzeugePunkt(Aufgabe2;B;5;4)

</div>


</section>