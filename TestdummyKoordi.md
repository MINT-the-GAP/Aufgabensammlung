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



.check-only input[type="number"],
.check-only input {
  display: none !important;
}
@end

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md







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
      ticks: { insertTicks: false, ticksDistance: 1, minorTicks: 4, drawLabels: true, label: { fontSize: 18 } } },
    y: {  
      strokeColor: 'black',
      strokeWidth: 2.5,  
      ticks: { insertTicks: false, ticksDistance: 1, minorTicks: 4, drawLabels: true, label: { fontSize: 18 } } }
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


// Punkt P(2|3) als Kreuz
var P = board.create('point', [2, 3], {
  name: 'P',
  face: 'x',        // Kreuzsymbol
  size: 6,          // Dicke/Größe
  strokeColor: 'purple',
  fillColor: 'purple',
  fixed: false       // nicht verschiebbar
});
P.setAttribute({
  showInfobox: false,   // aktuelle Schreibweise
});
// Optional: verhindert, dass beim Hover doch kurz eine Infobox aufpoppt
P.on('over', function () { board.infobox && board.infobox.hide && board.infobox.hide(); });
P.on('out',  function () { board.infobox && board.infobox.hide && board.infobox.hide(); });
// Für den LiaScript-Check global verfügbar machen:
window.__P = P;
window.__board = board;




// Punkt Q(2|3) als Kreuz
var Q = board.create('point', [3, 3], {
  name: 'Q',
  face: 'x',        // Kreuzsymbol
  size: 6,          // Dicke/Größe
  strokeColor: 'purple',
  fillColor: 'purple',
  fixed: false       // nicht verschiebbar
});
Q.setAttribute({
  showInfobox: false,   // aktuelle Schreibweise
});
// Optional: verhindert, dass beim Hover doch kurz eine Infobox aufpoppt
Q.on('over', function () { board.infobox && board.infobox.hide && board.infobox.hide(); });
Q.on('out',  function () { board.infobox && board.infobox.hide && board.infobox.hide(); });
// Für den LiaScript-Check global verfügbar machen:
window.__Q = Q;
window.__board = board;


// Punkt A(2|3) als Kreuz
var A = board.create('point', [2.5, 3], {
  name: 'A',
  face: 'x',        // Kreuzsymbol
  size: 6,          // Dicke/Größe
  strokeColor: 'purple',
  fillColor: 'purple',
  fixed: false       // nicht verschiebbar
});
A.setAttribute({
  showInfobox: false,   // aktuelle Schreibweise
});
// Optional: verhindert, dass beim Hover doch kurz eine Infobox aufpoppt
A.on('over', function () { board.infobox && board.infobox.hide && board.infobox.hide(); });
A.on('out',  function () { board.infobox && board.infobox.hide && board.infobox.hide(); });
// Für den LiaScript-Check global verfügbar machen:
window.__A = A;
window.__board = board;

```



<section class="flex-container">
<div class="flex-child">

Ziehe den Punkt $P$ auf die Koordinaten $(4|1)$.

<div class="check-only">
[[ 0 ]] 
<script>
  const P = window.__P;
  const eps = 0.05;

  const ok = !!P
    && Math.abs(P.X() - 4) < eps
    && Math.abs(P.Y() - 1) < eps;

  ok
</script>
</div>

</div>
<div class="flex-child">


Ziehe den Punkt $Q$ auf die Koordinaten $(6|3)$.

<div class="check-only">
[[ 0 ]] 
<script>
  const Q = window.__Q;
  const eps = 0.05;

  const ok = !!Q
    && Math.abs(Q.X() - 6) < eps
    && Math.abs(Q.Y() - 3) < eps;

  ok
</script>
</div>

</div>
<div class="flex-child">


Ziehe den Punkt $A$ auf die Koordinaten $(5|0)$.

<div class="check-only">
[[ 0 ]] 
<script>
  const A = window.__A;
  const eps = 0.05;

  const ok = !!A
    && Math.abs(A.X() - 6) < eps
    && Math.abs(A.Y() - 3) < eps;

  ok
</script>
</div>


</div>
</section>