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
// globaler Speicher für Punkte
window.__points = window.__points || {};

// erzeugt (falls noch nicht vorhanden) einen Punkt mit Name `name`
window.ensurePoint = function (name) {
  const board = window.__board;
  if (!board) return;

  // existiert schon -> nur kurzes Feedback
  if (window.__points[name] && window.__points[name].elType === 'point') {
    window.__points[name].setAttribute({ strokeWidth: 4 });
    setTimeout(() => window.__points[name].setAttribute({ strokeWidth: 2 }), 250);
    board.update();
    return;
  }

  // zufällige Startposition in [0,1) x [0,1)
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

  // Infobox nur für diesen Punkt aus
  pt.setAttribute({ showInfobox: false, showInfoBox: false });

  // optional: Infobox auch bei Hover wegdrücken
  pt.on('over', function () { board.infobox && board.infobox.hide && board.infobox.hide(); });
  pt.on('out',  function () { board.infobox && board.infobox.hide && board.infobox.hide(); });

  window.__points[name] = pt;
  board.update();
};

window.ensurePointFromSpec = function (spec) {
  const name = (String(spec).split(';')[0] || '').trim();
  if (!name) return;
  window.ensurePoint(name);
};

window.checkPointFromSpec = function (spec, eps) {
  eps = (typeof eps === 'number') ? eps : 0.05;

  const parts = String(spec).split(';');
  const name = (parts[0] || '').trim();
  const tx = parseFloat((parts[1] || '').replace(',', '.'));
  const ty = parseFloat((parts[2] || '').replace(',', '.'));

  const pt = window.__points && window.__points[name];
  if (!pt || Number.isNaN(tx) || Number.isNaN(ty)) return false;

  return Math.abs(pt.X() - tx) < eps && Math.abs(pt.Y() - ty) < eps;
};
@end

@ErzeugePunkt: @ErzeugePunkt_(@uid,@0)

@ErzeugePunkt_
<button id="btn-@0" class="lia-btn" onclick="window.ensurePointFromSpec('@1')">Punkt erzeugen</button>

<script run-once="true" modify="false">
  (function () {
    const spec = '@1';
    const name = (spec.split(';')[0] || '').trim();
    const btn  = document.getElementById('btn-@0');
    if (btn && name) btn.textContent = name + ' erzeugen';
  })();
</script>

<!-- class="check-only" -->
[[ 0 ]]
<script modify="false">
  const spec = '@1';
  const parts = String(spec).split(';');

  const name = (parts[0] || '').trim();
  const tx = parseFloat((parts[1] || '').replace(',', '.'));
  const ty = parseFloat((parts[2] || '').replace(',', '.'));

  const pt = window.__points && window.__points[name];
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

window.__board = board;


```



<section class="flex-container">

<div class="flex-child">

Ziehe den Punkt $P$ auf die Koordinaten $(2|3)$.

@ErzeugePunkt(P;2;3)

</div>

<div class="flex-child">

Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(A;1;4)

</div>

<div class="flex-child">

Ziehe den Punkt $B$ auf die Koordinaten $(6|2)$.

@ErzeugePunkt(B;6;2)

</div>


</section>