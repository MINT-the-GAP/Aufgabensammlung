<!--
version:  0.0.1
language: de
narrator: Deutsch Female

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
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


tags: 

comment: 

author: 



import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md
-->




# Division nur Kwuzjend ???? määähhhh




__Aufgabe 3:__ Auch mittels interaktiver Graphen können Aufgaben realisiert werden: Schiebe mit dem Schieberegler hin und her, um die Aufgabenstellungen zu bearbeiten.


``` javascript @JSX.Graph
// Board
board = JXG.JSXGraph.initBoard(jxgbox, {
  axis: true,
  boundingbox: [-5, 5, 5, -5],
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

// Funktionen
var f  = function(x){ return 2*x + 1; };
var g  = function(x){ return x*x - 2*x + 1; }; // (x-1)^2
var gp = function(x){ return 2*x - 2; };       // Ableitung

// Graphen
board.create('functiongraph', [f, -5, 6], { strokeWidth: 5, strokeColor: '#1f77b4' });
board.create('functiongraph', [g, -5, 6], { strokeWidth: 5, strokeColor: '#d62728' });

// Slider-Einstellungen
var tangentColor = '#2ca02c';
var sliderStart = [-3.5, -2.5];
var sliderEnd   = [ 3.5, -2.5];
var vMin = -5, vInit = 1, vMax = 5;

// Slider ohne Standard-Label/Value-Anzeige; Ticks ohne Auto-Labels
var a = board.create('slider', [sliderStart, sliderEnd, [vMin, vInit, vMax]], {
  name: '',
  withLabel: false,          // kein "a" Label des Sliders
  precision: 2,
  snapWidth: 0.01,           // fein beweglich; auf 1 setzen für nur ganze Werte
  withTicks: true,
  ticks: {
    drawLabels: false,       // wir beschriften selbst
    minorTicks: 0,
    ticksDistance: 1
  }
});
// zur Sicherheit: verstecke etwaige Label-Objekte
if (a.label) { a.label.setAttribute({ visible: false }); }

// Slider FARBE auf tangentengrün (Linie, Highline, Punkt, Ticks)
a.setAttribute({ strokeColor: tangentColor });            // Grundlinie (Fallback)
if (a.baseline)  a.baseline.setAttribute({ strokeColor: tangentColor });
if (a.highline)  a.highline.setAttribute({ strokeColor: tangentColor, strokeWidth: 3 });
if (a.point)     a.point.setAttribute({ strokeColor: tangentColor, fillColor: tangentColor });
if (a.ticks)     a.ticks.setAttribute({ strokeColor: tangentColor });

// Eigene Tick-Labels bei ganzen Zahlen -5 ... 6
function mapValueToX(v) {
  var x1 = sliderStart[0], x2 = sliderEnd[0];
  return x1 + ( (v - vMin) / (vMax - vMin) ) * (x2 - x1);
}
for (var v = vMin; v <= vMax; v++) {
  board.create('text', [mapValueToX(v), sliderStart[1] - 0.35, v.toString()], {
    anchorX: 'middle',
    anchorY: 'top',
    fontSize:  18, 
    strokeColor: tangentColor ,
    fontWeight: 'bold'    
  });
}

// Eigene Wertanzeige rechts vom Slider (groß + tangentengrün)
board.create('text', [sliderEnd[0] + 0.2, sliderEnd[1], function() {
  return 'a = ' + a.Value().toFixed(2);
}], { anchorX: 'left', 
    anchorY: 'middle', 
    fontSize: 20,
    strokeColor: tangentColor,
    fontWeight: 'bold' });

// Punkt A auf der Parabel
var A = board.create('point', [
  function(){ return a.Value(); },
  function(){ return g(a.Value()); }
], {
  name: 'A',
  size: 3,
  face: 'o',
  strokeColor: tangentColor,
  fillColor: tangentColor,
  fontWeight: 'bold'
});

// Tangente an g in x=a
var tangent = board.create('functiongraph', [
  function(x){
    var av = a.Value(), m = gp(av), ya = g(av);
    return m*(x - av) + ya;
  },
  -5, 6
], { strokeWidth: 5, 
      strokeColor: tangentColor, 
      dash: 3 });

// Labels f, g
board.create('text', [5.2, f(5), 'f'], { anchorX: 'left' });
board.create('text', [5.2, g(5), 'g'], { anchorX: 'left' });

// Tangentengleichung (groß + grün)
board.create('text', [-3.5, 7.2, function(){
  var av = a.Value(),
      m  = gp(av),
      ya = g(av),
      n  = ya - m*av;
  return 'Tangente: t(x) = ' + m.toFixed(2) + 'x + ' + n.toFixed(2);
}], {   anchorX: 'left', 
        fontSize: 18, 
        strokeColor: tangentColor ,
        fontWeight: 'bold'});

// Punkt P(-1|-2) als Kreuz
var P = board.create('point', [-1, -2], {
  name: 'P',
  face: 'x',        // Kreuzsymbol
  size: 6,          // Dicke/Größe
  strokeColor: 'purple',
  fillColor: 'purple',
  fixed: true,       // nicht verschiebbar
  showInfobox: false,   // <- verhindert die Anzeige der Koordinaten
  withLabel: true       // Name „P“ bleibt sichtbar
});
```


__$a)\;\;$__ **Gib** den Wert von $a$ **an**, sodass die Tangente parallel zum blauen Graphen ist. $a=$ [[ 2 ]]
@Algebrite.check_margin(1.95,2.05)

__$b)\;\;$__ **Gib** den Wert der Steigung des blauen Graphens **an**. $m_{\text{blau}}=$ [[ 0,5 ]]
@Algebrite.check_margin(0.45,0.55)

__$c)\;\;$__ **Gib** die Distanz $d$ zwischen der Tangente und dem blauen Graph **an**, wenn die Tangente parallel zum blauen Graphen ist. $d=$ [[ 4 ]]
@Algebrite.check_margin(3.95,4.05)

__$d)\;\;$__ **Gib** den Wert der Steigung der Tangente **an**, wenn die Tangente orthogonal zum blauen Graphen ist. $m_t=$ [[ -2 ]]
@Algebrite.check_margin(-1.95,-2.05)

__$e)\;\;$__ **Gib** den Wert von $a$ **an**, bei dem die Tangente orthogonal zum blauen Graphen ist. $a$ [[ 0,75 ]]
@Algebrite.check_margin(0.73,-0.77)









# Bruch Addition Subtraktion Multiplikation Division









# Koordinatensystem








# Downloadbalken



> Klicke/ziehe den Balken auf **77 %** und drücke **Prüfen**.

<div>
  <progress id="prog77" value="0" max="100" style="width:33%; transform:scale(3); position:relative; left:calc(100% / 3); margin-bottom:1rem">0%</progress>
</div>

<script>
(() => {
  const bar = document.getElementById('prog77');
  if (!bar) return;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  function setValue(val) {
    const max = Number(bar.max) || 100;
    const v = clamp(Math.round(val), 0, max);
    bar.value = v;
    bar.textContent = v + '%'; // Fallback-Anzeige
  }
  function handlePointer(clientX) {
    const rect = bar.getBoundingClientRect();
    const frac = (clientX - rect.left) / rect.width;
    setValue(frac * (bar.max || 100));
  }

  // Klick & Drag
  bar.addEventListener('click', (e) => handlePointer(e.clientX));
  let dragging = false;
  bar.addEventListener('mousedown', (e) => { dragging = true; handlePointer(e.clientX); e.preventDefault(); });
  window.addEventListener('mousemove', (e) => { if (dragging) handlePointer(e.clientX); });
  window.addEventListener('mouseup',   () => { dragging = false; });

  // Anfangswert
  setValue(bar.value || 0);
})();
</script>

<!-- data-solution-button="3" -->
```js
(() => {
  const bar = document.getElementById('prog77');
  return !!bar && Number(bar.value) === 77;
})()
```








