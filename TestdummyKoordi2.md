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


/* =========================================================
   JSXGraph Navigation: Light = schwarz, Dark = weiß
   ========================================================= */

/* Basis: Navigation übernimmt eine definierte Farbe */
.jxgbox .JXG_navigation,
.JXG_navigation{
  background: transparent !important;
}

/* LIGHTMODE */
@media (prefers-color-scheme: light){
  .jxgbox .JXG_navigation,
  .JXG_navigation{
    color: #000 !important;
  }

  .jxgbox .JXG_navigation a,
  .jxgbox .JXG_navigation span,
  .jxgbox .JXG_navigation button,
  .JXG_navigation a,
  .JXG_navigation span,
  .JXG_navigation button{
    color: #000 !important;
    border-color: #000 !important;
    background: transparent !important;
  }

  /* SVG-Icons */
  .jxgbox .JXG_navigation svg,
  .jxgbox .JXG_navigation svg *,
  .JXG_navigation svg,
  .JXG_navigation svg *{
    fill: #000 !important;
    stroke: #000 !important;
  }

  /* IMG-Icons (falls verwendet) */
  .jxgbox .JXG_navigation img,
  .JXG_navigation img{
    filter: none !important;
  }
}

/* DARKMODE */
@media (prefers-color-scheme: dark){
  .jxgbox .JXG_navigation,
  .JXG_navigation{
    color: #fff !important;
  }

  .jxgbox .JXG_navigation a,
  .jxgbox .JXG_navigation span,
  .jxgbox .JXG_navigation button,
  .JXG_navigation a,
  .JXG_navigation span,
  .JXG_navigation button{
    color: #fff !important;
    border-color: #fff !important;
    background: transparent !important;
  }

  /* SVG-Icons */
  .jxgbox .JXG_navigation svg,
  .jxgbox .JXG_navigation svg *,
  .JXG_navigation svg,
  .JXG_navigation svg *{
    fill: #fff !important;
    stroke: #fff !important;
  }

  /* IMG-Icons (falls verwendet) */
  .jxgbox .JXG_navigation img,
  .JXG_navigation img{
    filter: invert(1) !important;
  }
}

@end

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

script: https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js



@onload


// =========================================================
// Root-Window: gemeinsamer Speicher zwischen LiaScript & JSXGraph
// =========================================================
window.__ROOT = window.__ROOT || (function () {
  try {
    // In LiaScript/JSXGraph ist "parent" oft das Hauptdokument.
    // Falls es mehrere Ebenen gibt: so weit wie möglich hoch.
    let w = window;
    while (w.parent && w.parent !== w) w = w.parent;
    return w;
  } catch (e) {
    return window;
  }
})();

const ROOT = window.__ROOT;

// Gemeinsame Stores IM ROOT
ROOT.__boards  = ROOT.__boards  || {}; // id -> board
ROOT.__points  = ROOT.__points  || {}; // boardId -> { name -> point }
ROOT.__targets = ROOT.__targets || {}; // boardId -> { key -> f(x) }

// Optional: Queue, falls Buttons vor Board-Init geklickt werden
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs || []; // ["boardId;Name", ...]






window.__boards = window.__boards || {};          // id -> board
window.__points = window.__points || {};          // boardId -> { name -> point }

window.ensurePoint = function (boardId, name) {
  const ROOT = window.__ROOT || window;
  const board = ROOT.__boards && ROOT.__boards[boardId];
  if (!board) return false;

  ROOT.__points[boardId] = ROOT.__points[boardId] || {};

  // existiert schon
  if (ROOT.__points[boardId][name] && ROOT.__points[boardId][name].elType === 'point') {
    ROOT.__points[boardId][name].setAttribute({ strokeWidth: 4 });
    setTimeout(() => ROOT.__points[boardId][name].setAttribute({ strokeWidth: 2 }), 250);
    try { window.__applyPointLabelTheme && window.__applyPointLabelTheme(boardId); } catch (e) {}
    board.update();
    return true;
  }

  const x0 = Math.random();
  const y0 = Math.random();

  const labelCol = (window.__neutralAutoColor ? window.__neutralAutoColor() : '#000');

  const pt = board.create('point', [x0, y0], {
    name: name,
    withLabel: true,                 // <- wichtig: Label aktiv halten
    label: {                         // <- Label-Farben (Text)
      strokeColor: labelCol,
      fillColor:   labelCol,
      highlightStrokeColor: labelCol,
      highlightFillColor:   labelCol
    },

    face: 'x',
    size: 6,
    strokeColor: 'purple',
    fillColor: 'purple',
    fixed: false
  });

  // sehr defensiv: manche JSXGraph-Versionen brauchen das am Label-Objekt direkt
  try {
    if (pt.label && typeof pt.label.setAttribute === 'function') {
      pt.label.setAttribute({
        strokeColor: labelCol,
        fillColor:   labelCol,
        highlightStrokeColor: labelCol,
        highlightFillColor:   labelCol
      });
    }
  } catch (e) {}


  pt.setAttribute({ showInfobox: false, showInfoBox: false });
  pt.on('over', () => { board.infobox && board.infobox.hide && board.infobox.hide(); });
  pt.on('out',  () => { board.infobox && board.infobox.hide && board.infobox.hide(); });

  ROOT.__points[boardId][name] = pt;
  try { window.__applyPointLabelTheme && window.__applyPointLabelTheme(boardId); } catch (e) {}
  board.update();
  return true;
};

window.ensurePointFromSpec = function (spec) {
  const ROOT = window.__ROOT || window;
  const parts = String(spec).split(';').map(s => String(s).trim());
  const boardId = parts[0] || '';
  const name    = parts[1] || '';
  if (!boardId || !name) return;

  // Wenn Board noch nicht da ist: merken und später flushen
  if (!ROOT.__boards || !ROOT.__boards[boardId]) {
    ROOT.__pendingPointSpecs.push(`${boardId};${name}`);
    return;
  }

  window.ensurePoint(boardId, name);
};



// ---- Theme-Farbe lesen (aus echtem .lia-btn; ggf. aus parent) ----
window.readLiaBtnColor = window.readLiaBtnColor || function (fallback = '#0b5fff') {
  // 0) Priorität: explizite Grid-Variable (für Switch gedacht)
  try {
    const cs0 = getComputedStyle(document.documentElement);
    const v0 = cs0.getPropertyValue('--grid-color').trim();
    if (v0) return v0;
  } catch (e) {}

  // 1) Buttonfarbe aus dem aktuellen Dokument lesen
  try {
    const btn = document.querySelector('.lia-btn');
    if (btn) {
      const cs = getComputedStyle(btn);
        const bg = cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)' ? cs.backgroundColor : '';
        if (bg) return bg;

        // oft ist bei Buttons die Akzentfarbe am Border sichtbar
        const br = cs.borderTopColor && cs.borderTopColor !== 'rgba(0, 0, 0, 0)' ? cs.borderTopColor : '';
        if (br) return br;

        if (cs.color) return cs.color;
    }
  } catch (e) {}

  // 2) Falls JSXGraph in einem isolierten Kontext läuft: parent versuchen
  try {
    if (window.parent && window.parent.document) {
      const btn = window.parent.document.querySelector('.lia-btn');
      if (btn) {
        const cs = window.parent.getComputedStyle(btn);
            const bg = cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)' ? cs.backgroundColor : '';
            if (bg) return bg;

            // oft ist bei Buttons die Akzentfarbe am Border sichtbar
            const br = cs.borderTopColor && cs.borderTopColor !== 'rgba(0, 0, 0, 0)' ? cs.borderTopColor : '';
            if (br) return br;

            if (cs.color) return cs.color;
      }
      // auch dort --grid-color probieren
      const csP = window.parent.getComputedStyle(window.parent.document.documentElement);
      const vP = csP.getPropertyValue('--grid-color').trim();
      if (vP) return vP;
    }
  } catch (e) {}

  return fallback;
};


// ---- Grid-Farbe auf einem Board aktualisieren ----
window.applyGridColor = window.applyGridColor || function (board, color) {
  if (!board || !color) return;

  // 1) Optionen setzen (für zukünftige Rebuilds)
  try {
    if (board.options && board.options.grid) {
      if (board.options.grid.major) board.options.grid.major.strokeColor = color;
      if (board.options.grid.minor) board.options.grid.minor.strokeColor = color;
    }
  } catch (e) {}

  // 2) EXISTIERENDE Grid-Objekte einfärben (das ist der entscheidende Teil)
  try {
    // Viele JSXGraph-Versionen haben board.grids (Array)
    if (board.grids && board.grids.length) {
      board.grids.forEach(g => {
        if (g && typeof g.setAttribute === 'function') {
          g.setAttribute({ strokeColor: color });
        }
      });
    }

    // Sehr defensiv: auch in objectsList nach "grid" suchen
    if (board.objectsList && board.objectsList.length) {
      board.objectsList.forEach(o => {
        if (!o || typeof o.setAttribute !== 'function') return;
        if (o.elType === 'grid' || o.type === (JXG && JXG.OBJECT_TYPE_GRID)) {
          o.setAttribute({ strokeColor: color });
        }
      });
    }
  } catch (e) {}

  // 3) Redraw
  try {
    if (typeof board.fullUpdate === 'function') board.fullUpdate();
    else board.update();
  } catch (e) {}
};


// ---- Auto-Update: Farbe regelmäßig prüfen und bei Änderung anwenden ----
window.watchGridColor = window.watchGridColor || function (board, intervalMs = 400) {
  if (!board) return;
  if (!window.__gridWatchers) window.__gridWatchers = new WeakMap();

  // nicht doppelt starten
  if (window.__gridWatchers.has(board)) return;

  let last = '';

  const timer = setInterval(() => {
    const c = window.readLiaBtnColor('#0b5fff');
    if (c && c !== last) {
      last = c;
      window.applyGridColor(board, c);
    }
  }, intervalMs);

  window.__gridWatchers.set(board, timer);
};

window.__targets = window.__targets || {}; // boardId -> { key -> f(x) }

// Ziel-Funktion registrieren (y = f(x))
window.setTargetFunction = window.setTargetFunction || function (boardId, key, fn) {
  window.__targets[boardId] = window.__targets[boardId] || {};
  window.__targets[boardId][key] = fn;
};

// Prüfen: Punkt nahe an y=f(x)
window.isPointOnTargetFunction = window.isPointOnTargetFunction || function (boardId, pointName, key, epsY = 0.15) {
  const pt = window.__points && window.__points[boardId] && window.__points[boardId][pointName];
  const fn = window.__targets && window.__targets[boardId] && window.__targets[boardId][key];
  if (!pt || typeof fn !== 'function') return false;

  const x = pt.X();
  const y = pt.Y();
  const y0 = fn(x);

  if (!isFinite(y0)) return false;
  return Math.abs(y - y0) <= epsY;
};




// =========================================================
// MathJax helper: typeset im ROOT/parent (wichtig bei Lia/JSXGraph)
// =========================================================
ROOT.__typeset = ROOT.__typeset || function (el) {
  if (!el) return;

  // MathJax kann je nach LiaScript in parent/root hängen
  const MJ =
    (ROOT && ROOT.MathJax) ||
    (window.parent && window.parent.MathJax) ||
    window.MathJax;

  if (!MJ) return;

  try {
    // MathJax v3
    if (typeof MJ.typesetPromise === 'function') {
      if (typeof MJ.typesetClear === 'function') MJ.typesetClear([el]);
      MJ.typesetPromise([el]);
      return;
    }
    // MathJax v2 fallback
    if (MJ.Hub && typeof MJ.Hub.Queue === 'function') {
      MJ.Hub.Queue(['Typeset', MJ.Hub, el]);
    }
  } catch (e) {}
};


window.__isDarkTheme = window.__isDarkTheme || function () {
  try {
    const doc = (window.parent && window.parent.document) ? window.parent.document : document;
    const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
    const el = doc.body || doc.documentElement;
    const bg = win.getComputedStyle(el).backgroundColor;
    const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!m) return false;
    const r = parseInt(m[1], 10), g = parseInt(m[2], 10), b = parseInt(m[3], 10);
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum < 128;
  } catch (e) { return false; }
};

window.__neutralAutoColor = window.__neutralAutoColor || function () {
  return window.__isDarkTheme() ? '#fff' : '#000';
};

window.__recolorNeutralAutoLabels = window.__recolorNeutralAutoLabels || function () {
  const col = window.__neutralAutoColor();
  document.querySelectorAll('span.autoNameNeutral').forEach(el => { el.style.color = col; });
};


window.__applyPointLabelTheme = window.__applyPointLabelTheme || function (boardId) {
  const ROOT = window.__ROOT || window;
  const col  = (window.__neutralAutoColor ? window.__neutralAutoColor() : '#000');

  const pts = ROOT.__points && ROOT.__points[boardId];
  if (!pts) return;

  Object.values(pts).forEach(pt => {
    if (!pt || typeof pt.setAttribute !== 'function') return;

    // Label-Defaults am Punkt
    try {
      pt.setAttribute({
        label: {
          strokeColor: col,
          fillColor: col,
          highlightStrokeColor: col,
          highlightFillColor: col
        }
      });
    } catch (e) {}

    // Direkt am Label-Objekt (je nach JSXGraph-Version entscheidend)
    try {
      if (pt.label && typeof pt.label.setAttribute === 'function') {
        pt.label.setAttribute({
          strokeColor: col,
          fillColor: col,
          highlightStrokeColor: col,
          highlightFillColor: col
        });
      }
    } catch (e) {}
  });

  // redraw
  try {
    const b = ROOT.__boards && ROOT.__boards[boardId];
    if (b) b.update();
  } catch (e) {}
};



(function () {
  const applyAll = () => {
    const ROOT = window.__ROOT || window;
    Object.keys(ROOT.__points || {}).forEach(bid => {
      try { window.__applyPointLabelTheme(bid); } catch (e) {}
    });
  };

  applyAll(); // initial

  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', applyAll);
    else if (mq && typeof mq.addListener === 'function') mq.addListener(applyAll);
  } catch (e) {}
})();



@end




-->























































# Koordinatensysteme - Aufgabe 1 - Graph bewegen - Gerade / lineare Funktion



Bitte einmal die Farbthemes und zwischen Lightmode und Darkmode wechseln.




<div style="max-width: 1000px;">

``` javascript @JSX.Graph

function __getGridColor(fallback = '#0b5fff') {
  try {
    const doc = (window.parent && window.parent.document) ? window.parent.document : document;
    const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;

    // 1) Wenn du später mal --grid-color nutzt, wird das automatisch bevorzugt
    const v = win.getComputedStyle(doc.documentElement).getPropertyValue('--grid-color').trim();
    if (v) return v;

    // 2) Sonst Button-Farbe nehmen
    const btn = doc.querySelector('.lia-btn');
    if (btn) {
      const cs = win.getComputedStyle(btn);
      const bg = cs.backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)') return bg;
      if (cs.color) return cs.color;
    }
  } catch (e) {}

  return fallback;
}

// Board-Grid-Farbe live nachziehen
function __watchGridColor(board, intervalMs = 400) {
  let last = '';

  setInterval(() => {
    const c = __getGridColor('#0b5fff');
    if (!c || c === last) return;
    last = c;

    // 1) Optionen setzen (für zukünftige Rebuilds)
    try {
      if (board && board.options && board.options.grid) {
        if (board.options.grid.major) board.options.grid.major.strokeColor = c;
        if (board.options.grid.minor) board.options.grid.minor.strokeColor = c;
      }
    } catch (e) {}

    // 2) EXISTIERENDE Grid-Objekte einfärben (entscheidend!)
    try {
      if (board && board.grids && board.grids.length) {
        board.grids.forEach(g => {
          if (g && typeof g.setAttribute === 'function') {
            g.setAttribute({ strokeColor: c });
          }
        });
      }

      if (board && board.objectsList && board.objectsList.length) {
        board.objectsList.forEach(o => {
          if (!o || typeof o.setAttribute !== 'function') return;
          if (o.elType === 'grid' || (typeof JXG !== 'undefined' && o.type === JXG.OBJECT_TYPE_GRID)) {
            o.setAttribute({ strokeColor: c });
          }
        });
      }
    } catch (e) {}

    // 3) Redraw
    try {
      if (board && typeof board.fullUpdate === 'function') board.fullUpdate();
      else if (board) board.update();
    } catch (e) {}

  }, intervalMs);
}

const btnColor = __getGridColor('#0b5fff');

// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
var board = JXG.JSXGraph.initBoard(jxgbox, {
  axis: true,
  showNavigation: true,
  showCopyright: false,
  boundingbox: [-1, 5, 7, -1],
  keepaspectratio: true,

  zoom: {
    enabled: true,
    wheel: true,
    needShift: false,
    factorX: 1.15,
    factorY: 1.15
  },

  pan: {
    enabled: true,
    needShift: false,
    needTwoFingers: false
  },

  defaultAxes: {
    x: {
      strokeColor: 'black',
      strokeWidth: 2.5,
      ticks: {
        insertTicks: false,
        ticksDistance: 1,
        strokeWidth: 3,
        minorTicks: 9,         
        drawLabels: true,
        label: { fontSize: 18 }
      }
    },
    y: {
      strokeColor: 'black',
      strokeWidth: 2.5,
      ticks: {
        insertTicks: false,
        ticksDistance: 1,
        strokeWidth: 3,
        minorTicks: 9,        
        drawLabels: true,
        label: { fontSize: 18 }
      }
    }
  },

  grid: {
    majorStep: 'auto',                
    minorElements: 'auto',          
    includeBoundaries: true,
    forceSquare: true,

    major: {
      face: 'line',
      strokeColor: btnColor,
      strokeWidth: 1.5,          
      dash: 0,
      drawZero: true
    },
    minor: {
      face: 'line',
      strokeColor: btnColor,
      strokeWidth: 1,         
      dash: 1,
      drawZero: false             // <<< spart Linien
    }
  }
});




(function enableAdaptiveMinorGrid(board) {
  if (!board) return;

  function pxPerUnitX() {
    const bb = board.getBoundingBox();        // [xmin, ymax, xmax, ymin]
    const xmin = bb[0], xmax = bb[2];
    const w = board.canvasWidth || board.canvasWidth || board.containerObj.clientWidth;
    return w / Math.max(1e-9, (xmax - xmin));
  }

  let lastShow = null;

  function update() {
    const ppu = pxPerUnitX();

    // Schwelle: unter 55px pro Einheit -> minor off
    const showMinor = ppu >= 100;

    if (showMinor === lastShow) return;
    lastShow = showMinor;

    // Setze Minor-Gitterlinien effektiv unsichtbar oder sichtbar
    try {
      if (board.grids && board.grids.length) {
        board.grids.forEach(g => {
          if (!g || typeof g.setAttribute !== 'function') return;

          // Heuristik: Minor-Grids sind oft "dashed" oder strokeWidth==0.8 etc.
          // Wir schalten alle grids mit dash==1 (dein Minor) aus/an:
          const isMinor = (g.visProp && (g.visProp.dash == 1 || g.visProp.strokeWidth <= 1));
          if (isMinor) g.setAttribute({ visible: showMinor });
        });
      }
    } catch (e) {}

    board.update();
  }

  // Beim Zoomen/Pannen triggern
  board.on('boundingbox', update);

  // initial
  update();
})(board);


// =========================================================
// Board ins gemeinsame ROOT registrieren
// =========================================================
const ROOT = (function () {
  try { let w = window; while (w.parent && w.parent !== w) w = w.parent; return w; }
  catch (e) { return window; }
})();

ROOT.__boards = ROOT.__boards || {};
ROOT.__boards['Aufgabe1'] = board;

// Pending Points nachziehen (falls vorher geklickt)
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs || [];
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs.filter(spec => {
  const parts = String(spec).split(';').map(s => String(s).trim());
  const bid  = parts[0];
  const name = parts[1];

  if (bid === 'Aufgabe1' && name) {
    if (ROOT.ensurePoint) ROOT.ensurePoint(bid, name);
    else if (window.ensurePoint) window.ensurePoint(bid, name);
    return false; // aus Queue entfernen
  }
  return true;
});


; (function () {
  var r;
  try { r = (typeof ROOT !== 'undefined') ? ROOT : null; } catch (e) { r = null; }
  if (!r || typeof r.flushPendingAutoAdds !== 'function') return;

  // mini-delay, damit JSXGraph wirklich vollständig steht
  setTimeout(function () {
    try {
      r.flushPendingAutoAdds('Aufgabe1');
    } catch (e) {
      // bewusst still
    }
  }, 0);
})();



function __isDarkTheme() {
  try {
    const doc = (window.parent && window.parent.document) ? window.parent.document : document;
    const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;

    // bevorzugt: body, sonst documentElement
    const el = doc.body || doc.documentElement;
    const bg = win.getComputedStyle(el).backgroundColor;

    // bg ist typischerweise "rgb(r,g,b)" oder "rgba(r,g,b,a)"
    const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!m) return false;

    const r = parseInt(m[1], 10);
    const g = parseInt(m[2], 10);
    const b = parseInt(m[3], 10);

    // relative Luminanz (0..255) – Schwelle ~ 128
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum < 128;
  } catch (e) {
    return false;
  }
}


function __neutralAutoColor() {
  return __isDarkTheme() ? '#fff' : '#000';
}

function __recolorNeutralAutoLabels() {
  const col = __neutralAutoColor();
  document.querySelectorAll('span.autoNameNeutral').forEach(el => {
    // Nur neutrale Labels anfassen (nicht grün/rot aus dem Check)
    el.style.color = col;
  });
}



function __applyNavColors(board) {
  if (!board || !board.containerObj) return;

  // JSXGraph legt die Navigation innerhalb des Board-Containers an
  const nav = board.containerObj.querySelector('.JXG_navigation');
  if (!nav) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';

  // Navigation-Grundstil
  nav.style.color = col;
  nav.style.background = 'transparent';

  // Links/Buttons/Spans explizit einfärben
  nav.querySelectorAll('a, button, span').forEach(el => {
    el.style.color = col;
    el.style.borderColor = col;
    el.style.background = 'transparent';
    el.style.boxShadow = 'none';
  });

  // SVG-Icons (falls JSXGraph SVG nutzt)
  nav.querySelectorAll('svg, svg *').forEach(el => {
    el.style.fill = col;
    el.style.stroke = col;
  });

  // IMG-Icons (falls JSXGraph Bilder nutzt)
  nav.querySelectorAll('img').forEach(img => {
    img.style.filter = isDark ? 'invert(1)' : 'none';
  });
}

// einmal anwenden (nach initBoard)
__applyNavColors(board);

// bei Mode-Wechsel nachziehen
try {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  if (mq && typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', () => __applyNavColors(board));
  } else if (mq && typeof mq.addListener === 'function') {
    mq.addListener(() => __applyNavColors(board));
  }
} catch (e) {}


function __applyAxisColors(board) {
  if (!board) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';

  // 0) WICHTIG: Defaults für zukünftig neu erzeugte Tick-Labels setzen
  // (damit beim Rauszoomen neue Zahlen direkt korrekt gefärbt werden)
  try {
    board.options = board.options || {};
    board.options.defaultAxes = board.options.defaultAxes || {};
    ['x', 'y'].forEach(axKey => {
      board.options.defaultAxes[axKey] = board.options.defaultAxes[axKey] || {};
      board.options.defaultAxes[axKey].ticks = board.options.defaultAxes[axKey].ticks || {};
      board.options.defaultAxes[axKey].ticks.label = board.options.defaultAxes[axKey].ticks.label || {};

      board.options.defaultAxes[axKey].strokeColor = col;
      board.options.defaultAxes[axKey].ticks.strokeColor = col;

      // Diese beiden sind für die Ziffern entscheidend:
      board.options.defaultAxes[axKey].ticks.label.strokeColor = col;
      board.options.defaultAxes[axKey].ticks.label.fillColor   = col;
    });
  } catch (e) {}

  // Helfer: beliebige JSXGraph-Objekte einfärben
  const paint = (obj) => {
    if (!obj || typeof obj.setAttribute !== 'function') return;
    try {
      obj.setAttribute({
        strokeColor: col,
        highlightStrokeColor: col,
        fillColor: col,
        highlightFillColor: col
      });
    } catch (e) {}
  };

  // 1) Achsen + Ticks + Tick-Labels (existierende)
  try {
    if (board.defaultAxes) {
      paint(board.defaultAxes.x);
      paint(board.defaultAxes.y);

      const paintTicks = (axis) => {
        if (!axis) return;

        // Achsen-VisProps (wirkt oft auf neu erzeugte Ticks/Labels)
        try {
          axis.setAttribute({ strokeColor: col, highlightStrokeColor: col });
        } catch (e) {}

        // Standard-Ticks (häufig axis.defaultTicks)
        if (axis.defaultTicks) {
          paint(axis.defaultTicks);

          // Label-Default am Tick-Objekt selbst nachziehen
          try {
            axis.defaultTicks.setAttribute({
              strokeColor: col,
              highlightStrokeColor: col
            });
            if (axis.defaultTicks.visProp && axis.defaultTicks.visProp.label) {
              axis.defaultTicks.visProp.label.strokeColor = col;
              axis.defaultTicks.visProp.label.fillColor   = col;
            }
          } catch (e) {}

          if (axis.defaultTicks.labels && axis.defaultTicks.labels.length) {
            axis.defaultTicks.labels.forEach(paint);
          }
        }

        // Manche Versionen: axis.ticks als Array
        if (axis.ticks && axis.ticks.length) {
          axis.ticks.forEach(t => {
            paint(t);
            // Tick-Label-Defaults am Tick nachziehen
            try {
              if (t.visProp && t.visProp.label) {
                t.visProp.label.strokeColor = col;
                t.visProp.label.fillColor   = col;
              }
            } catch (e) {}
            if (t.labels && t.labels.length) t.labels.forEach(paint);
          });
        }

        // Manche Versionen: axis.getTicks()
        if (typeof axis.getTicks === 'function') {
          (axis.getTicks() || []).forEach(t => {
            paint(t);
            try {
              if (t.visProp && t.visProp.label) {
                t.visProp.label.strokeColor = col;
                t.visProp.label.fillColor   = col;
              }
            } catch (e) {}
            if (t.labels && t.labels.length) t.labels.forEach(paint);
          });
        }
      };

      paintTicks(board.defaultAxes.x);
      paintTicks(board.defaultAxes.y);
    }
  } catch (e) {}

  // 2) Fallback: Tick-Labels werden je nach Version als Textobjekte geführt.
  // Wir färben NUR Texte, die sehr wahrscheinlich Tick-Labels sind, um nicht alle Texte (z.B. Punktnamen) zu erwischen.
  try {
    if (board.objectsList && board.objectsList.length) {
      board.objectsList.forEach(o => {
        if (!o || o.elType !== 'text') return;

        // Heuristiken für Tick-Labels:
        // - Tick-Labels sind fast immer "fixed"
        // - und haben häufig sehr kurze Inhalte (Zahlen)
        // - und sind nicht "label" eines beliebigen Punktes (die sind oft an ein parent gekoppelt)
        const txt = (typeof o.getText === 'function') ? String(o.getText()) : (o.plaintext ? String(o.plaintext) : '');
        const looksNumeric = /^[\s\-+]*\d+([.,]\d+)?\s*$/.test(txt);

        const isFixed = (o.visProp && (o.visProp.fixed === true || o.visProp.isfixed === true));
        if (looksNumeric && isFixed) paint(o);
      });
    }
  } catch (e) {}

  // 3) Redraw
  try {
    if (typeof board.fullUpdate === 'function') board.fullUpdate();
    else board.update();
  } catch (e) {}
}

// einmal anwenden
__applyAxisColors(board);

// NEU: bei jedem Zoom/Pan (boundingbox ändert sich) Achsen/Ticks/Labels nachfärben
try {
  board.on('boundingbox', () => __applyAxisColors(board));
} catch (e) {}

// Optional (aber sinnvoll): auch nach Board-Resize einmal nachziehen
try {
  board.on('resize', () => __applyAxisColors(board));
} catch (e) {}



// einmal anwenden
__applyAxisColors(board);


function __applyBoardFrame(board) {
  if (!board || !board.containerObj) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';

  // Rahmen um das Koordinatensystem
  board.containerObj.style.border = `2px solid ${col}`;
  board.containerObj.style.borderRadius = '8px';     // optional
  board.containerObj.style.boxSizing = 'border-box';
}

// einmal anwenden
__applyBoardFrame(board);



// bei Mode-Wechsel nachziehen (gleiches Event wie Navigation nutzen)
try {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = () => {
    __applyNavColors(board);
    __applyAxisColors(board);
  };

  if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', handler);
  else if (mq && typeof mq.addListener === 'function') mq.addListener(handler);
} catch (e) {}



try {
  if (board && board.grids && board.grids.length) {
    board.grids.forEach(g => g && g.setAttribute && g.setAttribute({ strokeColor: btnColor }));
  }
} catch (e) {}


if (board && board.containerObj) {
  board.containerObj.style.background = 'transparent';
}

let __lastDark = null;

setInterval(() => {
  const nowDark = __isDarkTheme();
  if (nowDark === __lastDark) return;
  __lastDark = nowDark;

  __applyNavColors(board);
  __applyAxisColors(board);
  __applyBoardFrame(board);

  try { window.__recolorNeutralAutoLabels && window.__recolorNeutralAutoLabels(); } catch (e) {}
}, 300);



// Grid-Farbe automatisch an Button-Farbe koppeln
__watchGridColor(board, 400);










































/* =========================================================
   DRAGGABLE LINEAR FUNCTIONGRAPH (Translation per Mouse)
   - Klick nahe am Graphen -> ziehen
   - Gleichung wird aktualisiert
   - Robust: DOM Pointer-Events im CAPTURE, Pan wird sauber blockiert
   ========================================================= */

// Basisfunktion: y = m x + b0
let  m  = 1.25;
const b0 = 0.5;

// Verschiebung (in Weltkoordinaten)
let dx = 0;
let dy = 0;

// Sichtfenster-Grenzen dynamisch
const xmin = () => board.getBoundingBox()[0];
const xmax = () => board.getBoundingBox()[2];

// verschobene Funktion: y = m(x - dx) + b0 + dy
function fShift(x) {
  return m * (x - dx) + b0 + dy;
}

// Graph erzeugen (dynamischer Bereich)
// WICHTIG: highlight AUS, damit beim Hover nichts "explodiert"
const graph = board.create('functiongraph', [fShift, xmin, xmax], {
  strokeWidth: 3,
  strokeColor: '#b41f65',
  doAdvancedPlot: false,
  numberPointsLow: 20,
  numberPointsHigh: 100,
  highlight: false
});

// Hilfsfunktion: aktuelle Gleichung (nach Translation)
// f(x) = m x + (b0 + dy - m dx)
function currentIntercept() {
  return b0 + dy - m * dx;
}

function __fmtDE(num, digits = 3) {
  const v = Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  }).format(v);
}





/* =========================================================
   CHECKBOX-OVERLAY: Funktionsterm anzeigen + dynamischer Term (TeX)
   ========================================================= */

let __eqWrap = null;
let __eqCb   = null;
let __eqLbl  = null;
let __eqSpan = null;

// DE-Format
function __fmtDE(num, digits = 3) {
  const v = Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  }).format(v);
}

// --- NEU: Typeset-Helfer (MathJax / KaTeX / Fallback)
// --- NEU: MathJax im iFrame nachladen + typeset
let __mjxPromise = null;



// --- NEU: TeX -> SVG rendern (MathJax aus parent oder window verwenden)
function __getMJX() {
  try {
    if (window.MathJax && typeof window.MathJax.tex2svg === 'function') return window.MathJax;
  } catch (e) {}
  try {
    if (window.parent && window.parent.MathJax && typeof window.parent.MathJax.tex2svg === 'function') return window.parent.MathJax;
  } catch (e) {}
  return null;
}

function __renderTeXInto(el, tex) {
  const MJX = __getMJX();
  if (!MJX) {
    // Fallback: plain text
    el.textContent = tex;
    return;
  }

  try {
    // MathJax erzeugt ein <span> mit <svg> darin
    const wrapper = MJX.tex2svg(tex, { display: false });
    const svg = wrapper.querySelector('svg') || wrapper;

    // Wenn SVG aus parent-document kommt: in dieses Document importieren
    const imported = (svg.ownerDocument !== document) ? document.importNode(svg, true) : svg;

    // Inline-Optik
    imported.style.height = '1.2em';
    imported.style.verticalAlign = 'middle';

    el.innerHTML = '';
    el.appendChild(imported);
  } catch (e) {
    el.textContent = tex;
  }
}



// --- WICHTIG: liefert jetzt TeX (inline)
function __buildEqTeX() {
  const b = currentIntercept();
  const mDE = __fmtDE(m, 3);
  const bDE = __fmtDE(Math.abs(b), 3);
  const sign = (b >= 0) ? '+' : '-';

  // reiner TeX-String (ohne \( \) oder $$ $$)
  return `f(x) = ${mDE}x ${sign} ${bDE}`;
}


function __applyEqTheme() {
  if (!__eqWrap) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';
  const bg  = isDark ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.85)';
  const brd = isDark ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(0,0,0,0.20)';

  __eqWrap.style.color = col;
  __eqWrap.style.background = bg;
  __eqWrap.style.border = brd;
  __eqWrap.style.backdropFilter = 'blur(2px)';

  if (__eqLbl)  __eqLbl.style.color  = col;
  if (__eqSpan) __eqSpan.style.color = col;

  if (__eqCb) __eqCb.style.accentColor = col;
}

// --- WICHTIG: innerHTML + typeset
function __updateEqUI() {
  if (!__eqSpan) return;
  try {
    __renderTeXInto(__eqSpan, __buildEqTeX());
  } catch (e) {
    __eqSpan.textContent = 'f(x) = …';
  }
}


function __syncEqToggle() {
  if (!__eqCb || !__eqLbl || !__eqSpan) return;

  __updateEqUI();

  if (__eqCb.checked) {
    __eqLbl.style.display  = 'none';
    __eqSpan.style.display = '';
  } else {
    __eqLbl.style.display  = '';
    __eqSpan.style.display = 'none';
  }
}

// Klicks im Overlay sollen niemals JSXGraph-Drag/Pan triggern
function __shieldFromJXG(e) {
  // KEIN preventDefault, sonst Checkbox/Slider-Probleme möglich
  e.stopPropagation();
  if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
}

function __ensureEqUI() {
  if (__eqWrap || !board || !board.containerObj) return;

  // Container positionierbar machen
  try {
    const pos = board.containerObj.style.position;
    if (!pos || pos === 'static') board.containerObj.style.position = 'relative';
  } catch (e) {}

  __eqWrap = document.createElement('div');
  __eqWrap.style.position = 'absolute';
  __eqWrap.style.left = '10px';
  __eqWrap.style.top  = '10px';
  __eqWrap.style.zIndex = '9999';
  __eqWrap.style.display = 'flex';
  __eqWrap.style.alignItems = 'center';
  __eqWrap.style.gap = '10px';
  __eqWrap.style.padding = '6px 10px';
  __eqWrap.style.borderRadius = '8px';
  __eqWrap.style.userSelect = 'none';
  __eqWrap.style.pointerEvents = 'auto';
  __eqWrap.style.fontSize = '18px';
  __eqWrap.style.lineHeight = '1.2';

  __eqCb = document.createElement('input');
  __eqCb.type = 'checkbox';
  __eqCb.checked = false;

  __eqLbl = document.createElement('span');
  __eqLbl.textContent = 'Funktionsterm anzeigen';
  __eqLbl.style.cursor = 'pointer';
  __eqLbl.style.fontWeight = '600';

  // Label klickbar machen (ohne for/id)
  __eqLbl.addEventListener('click', (e) => {
    __shieldFromJXG(e);
    __eqCb.checked = !__eqCb.checked;
    __syncEqToggle();
  }, { capture: true });

  __eqSpan = document.createElement('span');
  __eqSpan.style.whiteSpace = 'nowrap';
  __eqSpan.style.fontWeight = '700';
  __eqSpan.style.display = 'none';

  __eqWrap.appendChild(__eqCb);
  __eqWrap.appendChild(__eqLbl);
  __eqWrap.appendChild(__eqSpan);

  board.containerObj.appendChild(__eqWrap);

  // Checkbox-Events
  __eqCb.addEventListener('change', (e) => { __shieldFromJXG(e); __syncEqToggle(); }, { capture: true });
  __eqCb.addEventListener('click',  (e) => { __shieldFromJXG(e); __syncEqToggle(); }, { capture: true });

  // Alles im Overlay gegen JSXGraph abschirmen
  [
    'pointerdown','pointerup','pointermove','pointercancel',
    'mousedown','mouseup','mousemove','touchstart','touchend','touchmove'
  ].forEach(type => __eqWrap.addEventListener(type, __shieldFromJXG, { capture: true, passive: true }));

  // Wheel: Zoom blocken, wenn Maus über dem Overlay ist
  __eqWrap.addEventListener('wheel', (e) => {
    e.preventDefault();
    __shieldFromJXG(e);
  }, { capture: true, passive: false });

  __applyEqTheme();
  __syncEqToggle();
}

// initial
__ensureEqUI();

// Theme regelmäßig nachziehen
let __lastEqDark = null;
setInterval(() => {
  const d = __isDarkTheme();
  if (d === __lastEqDark) return;
  __lastEqDark = d;
  __applyEqTheme();
}, 250);

/* =========================================================
   ENDE CHECKBOX-OVERLAY
   ========================================================= */
















/* =========================================================
   3) SLIDER-OVERLAY (gleicher Background wie Checkbox-Overlay)
   - Anzeige: "Steigung:" + Schieberegler (ohne Zahlen)
   - Range: -10 .. 10
   - Keine IDs, kein jxgbox, robust
   - Blockt Drag/Pan, wenn man am Slider arbeitet
   =========================================================
*/

let __slopeWrap   = null;
let __slopeLabel  = null;
let __slopeSlider = null;

function __applySlopeTheme() {
  if (!__slopeWrap) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';
  const bg  = isDark ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.85)';
  const brd = isDark ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(0,0,0,0.20)';

  __slopeWrap.style.color = col;
  __slopeWrap.style.background = bg;
  __slopeWrap.style.border = brd;
  __slopeWrap.style.backdropFilter = 'blur(2px)';

  if (__slopeLabel) __slopeLabel.style.color = col;

  // Slider-Farbe (Thumb/Track) – nutzt accentColor wo unterstützt
  if (__slopeSlider) __slopeSlider.style.accentColor = col;
}

function __shieldFromJXGHard(e) {
  // WICHTIG: KEIN preventDefault -> sonst lässt sich <input type="range"> oft nicht ziehen
  e.stopPropagation();
  if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
}


function __ensureSlopeUI() {
  if (__slopeWrap || !board || !board.containerObj) return;

  // Container positionierbar machen
  try {
    const pos = board.containerObj.style.position;
    if (!pos || pos === 'static') board.containerObj.style.position = 'relative';
  } catch (e) {}

  __slopeWrap = document.createElement('div');
  __slopeWrap.style.position = 'absolute';
  __slopeWrap.style.left = '10px';
  __slopeWrap.style.top  = '52px';         // unter dem Checkbox-Overlay
  __slopeWrap.style.zIndex = '9999';
  __slopeWrap.style.display = 'flex';
  __slopeWrap.style.alignItems = 'center';
  __slopeWrap.style.gap = '10px';
  __slopeWrap.style.padding = '6px 10px';
  __slopeWrap.style.borderRadius = '8px';
  __slopeWrap.style.userSelect = 'none';
  __slopeWrap.style.pointerEvents = 'auto';
  __slopeWrap.style.fontSize = '18px';
  __slopeWrap.style.lineHeight = '1.2';

  __slopeLabel = document.createElement('span');
  __slopeLabel.textContent = 'Steigung:';
  __slopeLabel.style.fontWeight = '600';

  __slopeSlider = document.createElement('input');
  __slopeSlider.type = 'range';
  __slopeSlider.min = '-10';
  __slopeSlider.max = '10';
  __slopeSlider.step = '0.01';      // wenn du nur ganze Zahlen willst: "1"
  __slopeSlider.value = String(m);

  // optisch: nur Regler, keine Zahlen
  __slopeSlider.style.width = '220px';
  __slopeSlider.style.margin = '0';
  __slopeSlider.style.padding = '0';
  __slopeSlider.style.background = 'transparent';

  // Beim Bewegen: m updaten, Graph + Gleichung neu zeichnen
  const applySlope = () => {
    const v = parseFloat(__slopeSlider.value);
    if (!isFinite(v)) return;
    m = v;
    // Graph muss nicht neu erzeugt werden, fShift liest m live.
    // Nur redraw + Term aktualisieren:
    try { board.update(); } catch (e) {}
    try { __updateEqUI(); } catch (e) {}
  };

  __slopeSlider.addEventListener('input',  (e) => { __shieldFromJXGHard(e); applySlope(); }, { capture: true, passive: true });
  __slopeSlider.addEventListener('change', (e) => { __shieldFromJXGHard(e); applySlope(); }, { capture: true, passive: true });


  // Alles im Slider-Overlay gegen JSXGraph abschirmen
  [
    'pointerdown','pointerup','pointermove','pointercancel',
    'mousedown','mouseup','mousemove',
    'touchstart','touchend','touchmove'
  ].forEach(type => __slopeWrap.addEventListener(type, __shieldFromJXGHard, { capture: true, passive: true }));

  // Wheel: Zoom blocken, wenn Maus über dem Slider-Overlay ist
  __slopeWrap.addEventListener('wheel', (e) => {
    e.preventDefault();          // hier ist es ok/gewollt
    __shieldFromJXGHard(e);
  }, { capture: true, passive: false });

    __slopeWrap.appendChild(__slopeLabel);
    __slopeWrap.appendChild(__slopeSlider);

    board.containerObj.appendChild(__slopeWrap);

    __applySlopeTheme();
  }

// initial
__ensureSlopeUI();

// Theme regelmäßig nachziehen (selbes Muster wie bei Checkbox)
let __lastSlopeDark = null;
setInterval(() => {
  const d = __isDarkTheme();
  if (d === __lastSlopeDark) return;
  __lastSlopeDark = d;
  __applySlopeTheme();
}, 250);

// Guard, damit Drag-Mechanik nicht startet, wenn man am Slider ist
function __isSlopeUIEvent(evt) {
  return !!(
    __slopeWrap &&
    evt &&
    evt.target &&
    (__slopeWrap === evt.target || __slopeWrap.contains(evt.target))
  );
}

















// =========================================================
// WICHTIG: Guard für Drag-Mechanik (damit Overlay-Klicks nicht ziehen)
// =========================================================
function __isEqUIEvent(evt) {
  return !!(
    __eqWrap &&
    evt &&
    evt.target &&
    (__eqWrap === evt.target || __eqWrap.contains(evt.target))
  );
}






/* ---------------------------------------------------------
   Drag-Mechanik: DOM Pointer-Events (CAPTURE!)
   --------------------------------------------------------- */

let dragging = false;
let startMouse = null;  // [x,y] in Weltkoordinaten
let startDx = 0;
let startDy = 0;

// Pan-Zustand merken
let panWasEnabled = null;

// Container vorbereiten (Browser-Gesten aus)
if (board.containerObj) {
  board.containerObj.style.touchAction = 'none';
  board.containerObj.style.userSelect  = 'none';
  board.containerObj.style.cursor      = 'default';
}

// Event -> Userkoordinaten
function usrCoordsDOM(evt) {
  if (typeof board.getUsrCoordsOfMouse === 'function') return board.getUsrCoordsOfMouse(evt);

  const rect = board.containerObj.getBoundingClientRect();
  const px = evt.clientX - rect.left;
  const py = evt.clientY - rect.top;

  const bb = board.getBoundingBox(); // [xmin, ymax, xmax, ymin]
  const x = bb[0] + (px / rect.width)  * (bb[2] - bb[0]);
  const y = bb[1] - (py / rect.height) * (bb[1] - bb[3]);
  return [x, y];
}

// Hit-Test: nahe am Graphen?
function hitTest(p) {
  const x = p[0], y = p[1];
  if (!isFinite(x) || !isFinite(y)) return false;

  const y0 = fShift(x);

  const bb = board.getBoundingBox();
  const ySpan = Math.max(1e-9, (bb[1] - bb[3]));
  const eps = ySpan / 45; // greifbarer als vorher

  return Math.abs(y - y0) <= eps;
}

// throttling gegen Lag
let rafPending = false;
function requestUpdate() {
  if (rafPending) return;
  rafPending = true;
  requestAnimationFrame(() => {
    rafPending = false;
    board.update();
    __updateEqUI();
  });
}

// Pointer capture
function setCapture(evt) {
  try {
    if (board.containerObj?.setPointerCapture && evt.pointerId != null) {
      board.containerObj.setPointerCapture(evt.pointerId);
    }
  } catch (e) {}
}
function releaseCapture(evt) {
  try {
    if (board.containerObj?.releasePointerCapture && evt.pointerId != null) {
      board.containerObj.releasePointerCapture(evt.pointerId);
    }
  } catch (e) {}
}

// Pan wirklich deaktivieren (hart)
function setPanEnabled(enabled) {
  try {
    // JSXGraph akzeptiert setAttribute
    board.setAttribute({ pan: { enabled: !!enabled } });
  } catch (e) {}
  try {
    // Fallback: direkt in attr
    if (board.attr && board.attr.pan) board.attr.pan.enabled = !!enabled;
  } catch (e) {}
}

// START
function onPointerDown(evt) {
  if (__isEqUIEvent(evt)) return; 
  if (__isSlopeUIEvent(evt)) return;
  if (evt.pointerType === 'mouse' && evt.button !== 0) return;

  const p = usrCoordsDOM(evt);
  if (!hitTest(p)) return;

  dragging = true;
  startMouse = p;
  startDx = dx;
  startDy = dy;

  // Pan aus (und Zustand merken)
  try {
    panWasEnabled = !!(board.attr && board.attr.pan && board.attr.pan.enabled);
  } catch (e) { panWasEnabled = null; }
  setPanEnabled(false);

  if (board.containerObj) board.containerObj.style.cursor = 'grabbing';

  setCapture(evt);

  // Entscheidend: JSXGraph-Handler unterbinden
  evt.preventDefault();
  evt.stopPropagation();
  if (typeof evt.stopImmediatePropagation === 'function') evt.stopImmediatePropagation();
}

// MOVE
function onPointerMove(evt) {
  if (!dragging) return;

  const p = usrCoordsDOM(evt);
  if (!isFinite(p[0]) || !isFinite(p[1])) return;

  dx = startDx + (p[0] - startMouse[0]);
  dy = startDy + (p[1] - startMouse[1]);

  requestUpdate();

  evt.preventDefault();
  evt.stopPropagation();
  if (typeof evt.stopImmediatePropagation === 'function') evt.stopImmediatePropagation();
}

// END
function endDrag(evt) {
  if (!dragging) return;

  dragging = false;
  startMouse = null;

  // Pan sicher zurück
  if (panWasEnabled !== null) setPanEnabled(panWasEnabled);
  panWasEnabled = null;

  if (board.containerObj) board.containerObj.style.cursor = 'default';

  releaseCapture(evt);

  if (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (typeof evt.stopImmediatePropagation === 'function') evt.stopImmediatePropagation();
  }
}

// Listener: CAPTURE-PHASE, damit wir VOR JSXGraph drankommen
if (board.containerObj) {
  board.containerObj.addEventListener('pointerdown', onPointerDown, { capture: true, passive: false });
  board.containerObj.addEventListener('pointermove', onPointerMove, { capture: true, passive: false });
  board.containerObj.addEventListener('pointerup', endDrag,        { capture: true, passive: false });
  board.containerObj.addEventListener('pointercancel', endDrag,    { capture: true, passive: false });
}


```

</div>



















































































# Koordinatensysteme - Aufgabe 2 - Graph bewegen - Parabeln



Bitte einmal die Farbthemes und zwischen Lightmode und Darkmode wechseln.




<div style="max-width: 1000px;">

``` javascript @JSX.Graph

function __getGridColor(fallback = '#0b5fff') {
  try {
    const doc = (window.parent && window.parent.document) ? window.parent.document : document;
    const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;

    // 1) Wenn du später mal --grid-color nutzt, wird das automatisch bevorzugt
    const v = win.getComputedStyle(doc.documentElement).getPropertyValue('--grid-color').trim();
    if (v) return v;

    // 2) Sonst Button-Farbe nehmen
    const btn = doc.querySelector('.lia-btn');
    if (btn) {
      const cs = win.getComputedStyle(btn);
      const bg = cs.backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)') return bg;
      if (cs.color) return cs.color;
    }
  } catch (e) {}

  return fallback;
}

// Board-Grid-Farbe live nachziehen
function __watchGridColor(board, intervalMs = 400) {
  let last = '';

  setInterval(() => {
    const c = __getGridColor('#0b5fff');
    if (!c || c === last) return;
    last = c;

    // 1) Optionen setzen (für zukünftige Rebuilds)
    try {
      if (board && board.options && board.options.grid) {
        if (board.options.grid.major) board.options.grid.major.strokeColor = c;
        if (board.options.grid.minor) board.options.grid.minor.strokeColor = c;
      }
    } catch (e) {}

    // 2) EXISTIERENDE Grid-Objekte einfärben (entscheidend!)
    try {
      if (board && board.grids && board.grids.length) {
        board.grids.forEach(g => {
          if (g && typeof g.setAttribute === 'function') {
            g.setAttribute({ strokeColor: c });
          }
        });
      }

      if (board && board.objectsList && board.objectsList.length) {
        board.objectsList.forEach(o => {
          if (!o || typeof o.setAttribute !== 'function') return;
          if (o.elType === 'grid' || (typeof JXG !== 'undefined' && o.type === JXG.OBJECT_TYPE_GRID)) {
            o.setAttribute({ strokeColor: c });
          }
        });
      }
    } catch (e) {}

    // 3) Redraw
    try {
      if (board && typeof board.fullUpdate === 'function') board.fullUpdate();
      else if (board) board.update();
    } catch (e) {}

  }, intervalMs);
}

const btnColor = __getGridColor('#0b5fff');

// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
var board = JXG.JSXGraph.initBoard(jxgbox, {
  axis: true,
  showNavigation: true,
  showCopyright: false,
  boundingbox: [-1, 5, 7, -1],
  keepaspectratio: true,

  zoom: {
    enabled: true,
    wheel: true,
    needShift: false,
    factorX: 1.15,
    factorY: 1.15
  },

  pan: {
    enabled: true,
    needShift: false,
    needTwoFingers: false
  },

  defaultAxes: {
    x: {
      strokeColor: 'black',
      strokeWidth: 2.5,
      ticks: {
        insertTicks: false,
        ticksDistance: 1,
        strokeWidth: 3,
        minorTicks: 9,         
        drawLabels: true,
        label: { fontSize: 18 }
      }
    },
    y: {
      strokeColor: 'black',
      strokeWidth: 2.5,
      ticks: {
        insertTicks: false,
        ticksDistance: 1,
        strokeWidth: 3,
        minorTicks: 9,        
        drawLabels: true,
        label: { fontSize: 18 }
      }
    }
  },

  grid: {
    majorStep: 'auto',                
    minorElements: 'auto',          
    includeBoundaries: true,
    forceSquare: true,

    major: {
      face: 'line',
      strokeColor: btnColor,
      strokeWidth: 1.5,          
      dash: 0,
      drawZero: true
    },
    minor: {
      face: 'line',
      strokeColor: btnColor,
      strokeWidth: 1,         
      dash: 1,
      drawZero: false             // <<< spart Linien
    }
  }
});




(function enableAdaptiveMinorGrid(board) {
  if (!board) return;

  function pxPerUnitX() {
    const bb = board.getBoundingBox();        // [xmin, ymax, xmax, ymin]
    const xmin = bb[0], xmax = bb[2];
    const w = board.canvasWidth || board.canvasWidth || board.containerObj.clientWidth;
    return w / Math.max(1e-9, (xmax - xmin));
  }

  let lastShow = null;

  function update() {
    const ppu = pxPerUnitX();

    // Schwelle: unter 55px pro Einheit -> minor off
    const showMinor = ppu >= 100;

    if (showMinor === lastShow) return;
    lastShow = showMinor;

    // Setze Minor-Gitterlinien effektiv unsichtbar oder sichtbar
    try {
      if (board.grids && board.grids.length) {
        board.grids.forEach(g => {
          if (!g || typeof g.setAttribute !== 'function') return;

          // Heuristik: Minor-Grids sind oft "dashed" oder strokeWidth==0.8 etc.
          // Wir schalten alle grids mit dash==1 (dein Minor) aus/an:
          const isMinor = (g.visProp && (g.visProp.dash == 1 || g.visProp.strokeWidth <= 1));
          if (isMinor) g.setAttribute({ visible: showMinor });
        });
      }
    } catch (e) {}

    board.update();
  }

  // Beim Zoomen/Pannen triggern
  board.on('boundingbox', update);

  // initial
  update();
})(board);


// =========================================================
// Board ins gemeinsame ROOT registrieren
// =========================================================
const ROOT = (function () {
  try { let w = window; while (w.parent && w.parent !== w) w = w.parent; return w; }
  catch (e) { return window; }
})();

ROOT.__boards = ROOT.__boards || {};
ROOT.__boards['Aufgabe1'] = board;

// Pending Points nachziehen (falls vorher geklickt)
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs || [];
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs.filter(spec => {
  const parts = String(spec).split(';').map(s => String(s).trim());
  const bid  = parts[0];
  const name = parts[1];

  if (bid === 'Aufgabe1' && name) {
    if (ROOT.ensurePoint) ROOT.ensurePoint(bid, name);
    else if (window.ensurePoint) window.ensurePoint(bid, name);
    return false; // aus Queue entfernen
  }
  return true;
});


; (function () {
  var r;
  try { r = (typeof ROOT !== 'undefined') ? ROOT : null; } catch (e) { r = null; }
  if (!r || typeof r.flushPendingAutoAdds !== 'function') return;

  // mini-delay, damit JSXGraph wirklich vollständig steht
  setTimeout(function () {
    try {
      r.flushPendingAutoAdds('Aufgabe1');
    } catch (e) {
      // bewusst still
    }
  }, 0);
})();



function __isDarkTheme() {
  try {
    const doc = (window.parent && window.parent.document) ? window.parent.document : document;
    const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;

    // bevorzugt: body, sonst documentElement
    const el = doc.body || doc.documentElement;
    const bg = win.getComputedStyle(el).backgroundColor;

    // bg ist typischerweise "rgb(r,g,b)" oder "rgba(r,g,b,a)"
    const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!m) return false;

    const r = parseInt(m[1], 10);
    const g = parseInt(m[2], 10);
    const b = parseInt(m[3], 10);

    // relative Luminanz (0..255) – Schwelle ~ 128
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum < 128;
  } catch (e) {
    return false;
  }
}


function __neutralAutoColor() {
  return __isDarkTheme() ? '#fff' : '#000';
}

function __recolorNeutralAutoLabels() {
  const col = __neutralAutoColor();
  document.querySelectorAll('span.autoNameNeutral').forEach(el => {
    // Nur neutrale Labels anfassen (nicht grün/rot aus dem Check)
    el.style.color = col;
  });
}



function __applyNavColors(board) {
  if (!board || !board.containerObj) return;

  // JSXGraph legt die Navigation innerhalb des Board-Containers an
  const nav = board.containerObj.querySelector('.JXG_navigation');
  if (!nav) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';

  // Navigation-Grundstil
  nav.style.color = col;
  nav.style.background = 'transparent';

  // Links/Buttons/Spans explizit einfärben
  nav.querySelectorAll('a, button, span').forEach(el => {
    el.style.color = col;
    el.style.borderColor = col;
    el.style.background = 'transparent';
    el.style.boxShadow = 'none';
  });

  // SVG-Icons (falls JSXGraph SVG nutzt)
  nav.querySelectorAll('svg, svg *').forEach(el => {
    el.style.fill = col;
    el.style.stroke = col;
  });

  // IMG-Icons (falls JSXGraph Bilder nutzt)
  nav.querySelectorAll('img').forEach(img => {
    img.style.filter = isDark ? 'invert(1)' : 'none';
  });
}

// einmal anwenden (nach initBoard)
__applyNavColors(board);

// bei Mode-Wechsel nachziehen
try {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  if (mq && typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', () => __applyNavColors(board));
  } else if (mq && typeof mq.addListener === 'function') {
    mq.addListener(() => __applyNavColors(board));
  }
} catch (e) {}


function __applyAxisColors(board) {
  if (!board) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';

  // 0) WICHTIG: Defaults für zukünftig neu erzeugte Tick-Labels setzen
  // (damit beim Rauszoomen neue Zahlen direkt korrekt gefärbt werden)
  try {
    board.options = board.options || {};
    board.options.defaultAxes = board.options.defaultAxes || {};
    ['x', 'y'].forEach(axKey => {
      board.options.defaultAxes[axKey] = board.options.defaultAxes[axKey] || {};
      board.options.defaultAxes[axKey].ticks = board.options.defaultAxes[axKey].ticks || {};
      board.options.defaultAxes[axKey].ticks.label = board.options.defaultAxes[axKey].ticks.label || {};

      board.options.defaultAxes[axKey].strokeColor = col;
      board.options.defaultAxes[axKey].ticks.strokeColor = col;

      // Diese beiden sind für die Ziffern entscheidend:
      board.options.defaultAxes[axKey].ticks.label.strokeColor = col;
      board.options.defaultAxes[axKey].ticks.label.fillColor   = col;
    });
  } catch (e) {}

  // Helfer: beliebige JSXGraph-Objekte einfärben
  const paint = (obj) => {
    if (!obj || typeof obj.setAttribute !== 'function') return;
    try {
      obj.setAttribute({
        strokeColor: col,
        highlightStrokeColor: col,
        fillColor: col,
        highlightFillColor: col
      });
    } catch (e) {}
  };

  // 1) Achsen + Ticks + Tick-Labels (existierende)
  try {
    if (board.defaultAxes) {
      paint(board.defaultAxes.x);
      paint(board.defaultAxes.y);

      const paintTicks = (axis) => {
        if (!axis) return;

        // Achsen-VisProps (wirkt oft auf neu erzeugte Ticks/Labels)
        try {
          axis.setAttribute({ strokeColor: col, highlightStrokeColor: col });
        } catch (e) {}

        // Standard-Ticks (häufig axis.defaultTicks)
        if (axis.defaultTicks) {
          paint(axis.defaultTicks);

          // Label-Default am Tick-Objekt selbst nachziehen
          try {
            axis.defaultTicks.setAttribute({
              strokeColor: col,
              highlightStrokeColor: col
            });
            if (axis.defaultTicks.visProp && axis.defaultTicks.visProp.label) {
              axis.defaultTicks.visProp.label.strokeColor = col;
              axis.defaultTicks.visProp.label.fillColor   = col;
            }
          } catch (e) {}

          if (axis.defaultTicks.labels && axis.defaultTicks.labels.length) {
            axis.defaultTicks.labels.forEach(paint);
          }
        }

        // Manche Versionen: axis.ticks als Array
        if (axis.ticks && axis.ticks.length) {
          axis.ticks.forEach(t => {
            paint(t);
            // Tick-Label-Defaults am Tick nachziehen
            try {
              if (t.visProp && t.visProp.label) {
                t.visProp.label.strokeColor = col;
                t.visProp.label.fillColor   = col;
              }
            } catch (e) {}
            if (t.labels && t.labels.length) t.labels.forEach(paint);
          });
        }

        // Manche Versionen: axis.getTicks()
        if (typeof axis.getTicks === 'function') {
          (axis.getTicks() || []).forEach(t => {
            paint(t);
            try {
              if (t.visProp && t.visProp.label) {
                t.visProp.label.strokeColor = col;
                t.visProp.label.fillColor   = col;
              }
            } catch (e) {}
            if (t.labels && t.labels.length) t.labels.forEach(paint);
          });
        }
      };

      paintTicks(board.defaultAxes.x);
      paintTicks(board.defaultAxes.y);
    }
  } catch (e) {}

  // 2) Fallback: Tick-Labels werden je nach Version als Textobjekte geführt.
  // Wir färben NUR Texte, die sehr wahrscheinlich Tick-Labels sind, um nicht alle Texte (z.B. Punktnamen) zu erwischen.
  try {
    if (board.objectsList && board.objectsList.length) {
      board.objectsList.forEach(o => {
        if (!o || o.elType !== 'text') return;

        // Heuristiken für Tick-Labels:
        // - Tick-Labels sind fast immer "fixed"
        // - und haben häufig sehr kurze Inhalte (Zahlen)
        // - und sind nicht "label" eines beliebigen Punktes (die sind oft an ein parent gekoppelt)
        const txt = (typeof o.getText === 'function') ? String(o.getText()) : (o.plaintext ? String(o.plaintext) : '');
        const looksNumeric = /^[\s\-+]*\d+([.,]\d+)?\s*$/.test(txt);

        const isFixed = (o.visProp && (o.visProp.fixed === true || o.visProp.isfixed === true));
        if (looksNumeric && isFixed) paint(o);
      });
    }
  } catch (e) {}

  // 3) Redraw
  try {
    if (typeof board.fullUpdate === 'function') board.fullUpdate();
    else board.update();
  } catch (e) {}
}

// einmal anwenden
__applyAxisColors(board);

// NEU: bei jedem Zoom/Pan (boundingbox ändert sich) Achsen/Ticks/Labels nachfärben
try {
  board.on('boundingbox', () => __applyAxisColors(board));
} catch (e) {}

// Optional (aber sinnvoll): auch nach Board-Resize einmal nachziehen
try {
  board.on('resize', () => __applyAxisColors(board));
} catch (e) {}



// einmal anwenden
__applyAxisColors(board);


function __applyBoardFrame(board) {
  if (!board || !board.containerObj) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';

  // Rahmen um das Koordinatensystem
  board.containerObj.style.border = `2px solid ${col}`;
  board.containerObj.style.borderRadius = '8px';     // optional
  board.containerObj.style.boxSizing = 'border-box';
}

// einmal anwenden
__applyBoardFrame(board);



// bei Mode-Wechsel nachziehen (gleiches Event wie Navigation nutzen)
try {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = () => {
    __applyNavColors(board);
    __applyAxisColors(board);
  };

  if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', handler);
  else if (mq && typeof mq.addListener === 'function') mq.addListener(handler);
} catch (e) {}



try {
  if (board && board.grids && board.grids.length) {
    board.grids.forEach(g => g && g.setAttribute && g.setAttribute({ strokeColor: btnColor }));
  }
} catch (e) {}


if (board && board.containerObj) {
  board.containerObj.style.background = 'transparent';
}

let __lastDark = null;

setInterval(() => {
  const nowDark = __isDarkTheme();
  if (nowDark === __lastDark) return;
  __lastDark = nowDark;

  __applyNavColors(board);
  __applyAxisColors(board);
  __applyBoardFrame(board);

  try { window.__recolorNeutralAutoLabels && window.__recolorNeutralAutoLabels(); } catch (e) {}
}, 300);



// Grid-Farbe automatisch an Button-Farbe koppeln
__watchGridColor(board, 400);


























/* =========================================================
   DRAGGABLE PARABOLA (Translation per Mouse)
   - Klick nahe an der Parabel -> ziehen
   - Anzeige: f(x) = a(x-h)^2 + k (Scheitelpunktform)
   - Overlay: Checkbox "Funktionsterm anzeigen"
   - Robust: Overlay-Klicks blockieren Drag/Pan, Pan wird beim Drag deaktiviert
   ========================================================= */

// Basisparabel: y = a(x - h0)^2 + k0
// (du kannst a,h0,k0 frei wählen)
let a  = 1.0;
const h0 = 2.0;
const k0 = 1.0;

// Verschiebung (in Weltkoordinaten)
let dx = 0;
let dy = 0;

// Sichtfenster-Grenzen dynamisch
const xmin = () => board.getBoundingBox()[0];
const xmax = () => board.getBoundingBox()[2];

// verschobene Parabel: y = a(x - (h0+dx))^2 + (k0+dy)
function fShift(x) {
  const h = h0 + dx;
  const k = k0 + dy;
  return a * Math.pow(x - h, 2) + k;
}

// Graph erzeugen (dynamischer Bereich)
const graph = board.create('functiongraph', [fShift, xmin, xmax], {
  strokeWidth: 3,
  strokeColor: '#b41f65',
  doAdvancedPlot: false,
  numberPointsLow: 30,
  numberPointsHigh: 120,
  highlight: false
});

// DE-Format
function __fmtDE(num, digits = 3) {
  const v = Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  }).format(v);
}

// Gleichungstext (Scheitelpunktform) bauen
function __buildEqText() {
  const h = h0 + dx;
  const k = k0 + dy;

  const aDE = __fmtDE(a, 3);
  const hDE = __fmtDE(Math.abs(h), 3);
  const kDE = __fmtDE(Math.abs(k), 3);

  // (x - h) bzw (x + h)
  const signH = (h >= 0) ? '- ' : '+ ';
  const signK = (k >= 0) ? '+ ' : '- ';

  return `f(x) = ${aDE}(x ${signH}${hDE})² ${signK}${kDE}`;
}




/* =========================================================
   CHECKBOX-OVERLAY: Funktionsterm anzeigen + dynamischer Term
   (robust: keine IDs, keine Abhängigkeit von jxgbox)
   ========================================================= */

let __eqWrap = null;
let __eqCb   = null;
let __eqLbl  = null;
let __eqSpan = null;

function __applyEqTheme() {
  if (!__eqWrap) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';
  const bg  = isDark ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.85)';
  const brd = isDark ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(0,0,0,0.20)';

  __eqWrap.style.color = col;
  __eqWrap.style.background = bg;
  __eqWrap.style.border = brd;
  __eqWrap.style.backdropFilter = 'blur(2px)';

  if (__eqLbl)  __eqLbl.style.color  = col;
  if (__eqSpan) __eqSpan.style.color = col;

  if (__eqCb) __eqCb.style.accentColor = col;
}

function __updateEqUI() {
  if (!__eqSpan) return;
  try {
    __eqSpan.textContent = __buildEqText();
  } catch (e) {
    __eqSpan.textContent = 'f(x) = …';
  }
}

function __syncEqToggle() {
  if (!__eqCb || !__eqLbl || !__eqSpan) return;

  __updateEqUI();

  if (__eqCb.checked) {
    __eqLbl.style.display  = 'none';
    __eqSpan.style.display = '';
  } else {
    __eqLbl.style.display  = '';
    __eqSpan.style.display = 'none';
  }
}

// Klicks im Overlay sollen niemals JSXGraph-Drag/Pan triggern
function __shieldFromJXG(e) {
  e.stopPropagation();
  if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
}

function __ensureEqUI() {
  if (__eqWrap || !board || !board.containerObj) return;

  try {
    const pos = board.containerObj.style.position;
    if (!pos || pos === 'static') board.containerObj.style.position = 'relative';
  } catch (e) {}

  __eqWrap = document.createElement('div');
  __eqWrap.style.position = 'absolute';
  __eqWrap.style.left = '10px';
  __eqWrap.style.top  = '10px';
  __eqWrap.style.zIndex = '9999';
  __eqWrap.style.display = 'flex';
  __eqWrap.style.alignItems = 'center';
  __eqWrap.style.gap = '10px';
  __eqWrap.style.padding = '6px 10px';
  __eqWrap.style.borderRadius = '8px';
  __eqWrap.style.userSelect = 'none';
  __eqWrap.style.pointerEvents = 'auto';
  __eqWrap.style.fontSize = '18px';
  __eqWrap.style.lineHeight = '1.2';

  __eqCb = document.createElement('input');
  __eqCb.type = 'checkbox';
  __eqCb.checked = false;

  __eqLbl = document.createElement('span');
  __eqLbl.textContent = 'Funktionsterm anzeigen';
  __eqLbl.style.cursor = 'pointer';
  __eqLbl.style.fontWeight = '600';

  // Label klickbar machen (ohne for/id)
  __eqLbl.addEventListener('click', (e) => {
    __shieldFromJXG(e);
    __eqCb.checked = !__eqCb.checked;
    __syncEqToggle();
  }, { capture: true });

  __eqSpan = document.createElement('span');
  __eqSpan.style.whiteSpace = 'nowrap';
  __eqSpan.style.fontWeight = '700';
  __eqSpan.style.display = 'none';

  __eqWrap.appendChild(__eqCb);
  __eqWrap.appendChild(__eqLbl);
  __eqWrap.appendChild(__eqSpan);

  board.containerObj.appendChild(__eqWrap);

  __eqCb.addEventListener('change', (e) => { __shieldFromJXG(e); __syncEqToggle(); }, { capture: true });
  __eqCb.addEventListener('click',  (e) => { __shieldFromJXG(e); __syncEqToggle(); }, { capture: true });

  [
    'pointerdown','pointerup','pointermove','pointercancel',
    'mousedown','mouseup','mousemove','touchstart','touchend','touchmove'
  ].forEach(type => __eqWrap.addEventListener(type, __shieldFromJXG, { capture: true, passive: true }));

  __eqWrap.addEventListener('wheel', (e) => {
    e.preventDefault();
    __shieldFromJXG(e);
  }, { capture: true, passive: false });

  __applyEqTheme();
  __syncEqToggle();
}

// initial
__ensureEqUI();

// Theme regelmäßig nachziehen
let __lastEqDark = null;
setInterval(() => {
  const d = __isDarkTheme();
  if (d === __lastEqDark) return;
  __lastEqDark = d;
  __applyEqTheme();
}, 250);











/* =========================================================
   A-SLIDER-OVERLAY: "Stauchung/Streckung:" + Schieberegler
   - a live ändern (Parabel y = a(x-h)^2 + k)
   - gleicher Background wie Checkbox
   - robust: keine IDs, blockt Zoom/Pan im Overlay
   ========================================================= */

let __aWrap   = null;
let __aLabel  = null;
let __aSlider = null;

function __applyATheme() {
  if (!__aWrap) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';
  const bg  = isDark ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.85)';
  const brd = isDark ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(0,0,0,0.20)';

  __aWrap.style.color = col;
  __aWrap.style.background = bg;
  __aWrap.style.border = brd;
  __aWrap.style.backdropFilter = 'blur(2px)';

  if (__aLabel) __aLabel.style.color = col;
  if (__aSlider) __aSlider.style.accentColor = col;
}

// WICHTIG: KEIN preventDefault -> sonst wird der Range-Regler gerne "unbeweglich"
function __shieldFromJXGOverlay(e) {
  e.stopPropagation();
  if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
}

function __ensureAUI() {
  if (__aWrap || !board || !board.containerObj) return;

  // Container positionierbar machen
  try {
    const pos = board.containerObj.style.position;
    if (!pos || pos === 'static') board.containerObj.style.position = 'relative';
  } catch (e) {}

  __aWrap = document.createElement('div');
  __aWrap.style.position = 'absolute';
  __aWrap.style.left = '10px';
  __aWrap.style.top  = '52px';          // unter Checkbox (10px) -> ggf. anpassen
  __aWrap.style.zIndex = '9999';
  __aWrap.style.display = 'flex';
  __aWrap.style.alignItems = 'center';
  __aWrap.style.gap = '10px';
  __aWrap.style.padding = '6px 10px';
  __aWrap.style.borderRadius = '8px';
  __aWrap.style.userSelect = 'none';
  __aWrap.style.pointerEvents = 'auto';
  __aWrap.style.fontSize = '18px';
  __aWrap.style.lineHeight = '1.2';

  __aLabel = document.createElement('span');
  __aLabel.textContent = 'Stauchung/Streckung:';
  __aLabel.style.fontWeight = '600';

  __aSlider = document.createElement('input');
  __aSlider.type = 'range';

  // Range für a: sinnvoll ist z.B. -5 .. 5 ohne 0-Singularität.
  // Wenn du KEIN Vorzeichenwechsel willst (nur strecken/stauchen, nicht spiegeln),
  // setz min auf 0.1 statt -5.
  __aSlider.min  = '-5';
  __aSlider.max  = '5';
  __aSlider.step = '0.01';
  __aSlider.value = String(a);

  // Optik: nur Slider, keine Zahlen
  __aSlider.style.width = '220px';
  __aSlider.style.margin = '0';
  __aSlider.style.padding = '0';
  __aSlider.style.background = 'transparent';

  const applyA = () => {
    const v = parseFloat(__aSlider.value);
    if (!isFinite(v)) return;

    // optional: "zu nah an 0" abfangen, damit die Parabel nicht praktisch flach wird
    // wenn du das NICHT willst, lösche diese 3 Zeilen:
    // if (Math.abs(v) < 0.05) return;

    a = v;
    try { board.update(); } catch (e) {}
    try { __updateEqUI(); } catch (e) {}
  };

  __aSlider.addEventListener('input',  (e) => { __shieldFromJXGOverlay(e); applyA(); }, { capture: true, passive: true });
  __aSlider.addEventListener('change', (e) => { __shieldFromJXGOverlay(e); applyA(); }, { capture: true, passive: true });

  // Overlay gegen JSXGraph abschirmen (ohne preventDefault!)
  [
    'pointerdown','pointerup','pointermove','pointercancel',
    'mousedown','mouseup','mousemove',
    'touchstart','touchend','touchmove'
  ].forEach(type => __aWrap.addEventListener(type, __shieldFromJXGOverlay, { capture: true, passive: true }));

  // Wheel: Zoom blocken, wenn Maus über dem Overlay ist
  __aWrap.addEventListener('wheel', (e) => {
    e.preventDefault();
    __shieldFromJXGOverlay(e);
  }, { capture: true, passive: false });

  __aWrap.appendChild(__aLabel);
  __aWrap.appendChild(__aSlider);
  board.containerObj.appendChild(__aWrap);

  __applyATheme();
}

// initial
__ensureAUI();

// Theme regelmäßig nachziehen
let __lastADark = null;
setInterval(() => {
  const d = __isDarkTheme();
  if (d === __lastADark) return;
  __lastADark = d;
  __applyATheme();
}, 250);

// Guard: Drag-Mechanik soll nicht starten, wenn man am a-Slider ist
function __isAUIEvent(evt) {
  return !!(
    __aWrap &&
    evt &&
    evt.target &&
    (__aWrap === evt.target || __aWrap.contains(evt.target))
  );
}










/* =========================================================
   Guard für Drag-Mechanik (damit Overlay-Klicks nicht ziehen)
   ========================================================= */
function __isEqUIEvent(evt) {
  return !!(
    __eqWrap &&
    evt &&
    evt.target &&
    (__eqWrap === evt.target || __eqWrap.contains(evt.target))
  );
}

/* ---------------------------------------------------------
   Drag-Mechanik: DOM Pointer-Events (CAPTURE!)
   --------------------------------------------------------- */

let dragging = false;
let startMouse = null;  // [x,y] in Weltkoordinaten
let startDx = 0;
let startDy = 0;

// Pan-Zustand merken
let panWasEnabled = null;

// Container vorbereiten
if (board.containerObj) {
  board.containerObj.style.touchAction = 'none';
  board.containerObj.style.userSelect  = 'none';
  board.containerObj.style.cursor      = 'default';
}

// Event -> Userkoordinaten
function usrCoordsDOM(evt) {
  if (typeof board.getUsrCoordsOfMouse === 'function') return board.getUsrCoordsOfMouse(evt);

  const rect = board.containerObj.getBoundingClientRect();
  const px = evt.clientX - rect.left;
  const py = evt.clientY - rect.top;

  const bb = board.getBoundingBox(); // [xmin, ymax, xmax, ymin]
  const x = bb[0] + (px / rect.width)  * (bb[2] - bb[0]);
  const y = bb[1] - (py / rect.height) * (bb[1] - bb[3]);
  return [x, y];
}

// Hit-Test: nahe am Graphen?
function hitTest(p) {
  const x = p[0], y = p[1];
  if (!isFinite(x) || !isFinite(y)) return false;

  const y0 = fShift(x);

  const bb = board.getBoundingBox();
  const ySpan = Math.max(1e-9, (bb[1] - bb[3]));
  const eps = ySpan / 35;  // Parabel: etwas "greifbarer" als bei Gerade

  return Math.abs(y - y0) <= eps;
}

// throttling gegen Lag
let rafPending = false;
function requestUpdate() {
  if (rafPending) return;
  rafPending = true;
  requestAnimationFrame(() => {
    rafPending = false;
    board.update();
    __updateEqUI();
  });
}

// Pointer capture
function setCapture(evt) {
  try {
    if (board.containerObj?.setPointerCapture && evt.pointerId != null) {
      board.containerObj.setPointerCapture(evt.pointerId);
    }
  } catch (e) {}
}
function releaseCapture(evt) {
  try {
    if (board.containerObj?.releasePointerCapture && evt.pointerId != null) {
      board.containerObj.releasePointerCapture(evt.pointerId);
    }
  } catch (e) {}
}

// Pan hart schalten
function setPanEnabled(enabled) {
  try { board.setAttribute({ pan: { enabled: !!enabled } }); } catch (e) {}
  try { if (board.attr && board.attr.pan) board.attr.pan.enabled = !!enabled; } catch (e) {}
}

// START
function onPointerDown(evt) {
  if (__isEqUIEvent(evt)) return;
  if (__isAUIEvent(evt))  return; 
  if (evt.pointerType === 'mouse' && evt.button !== 0) return;

  const p = usrCoordsDOM(evt);
  if (!hitTest(p)) return;

  dragging = true;
  startMouse = p;
  startDx = dx;
  startDy = dy;

  try { panWasEnabled = !!(board.attr && board.attr.pan && board.attr.pan.enabled); }
  catch (e) { panWasEnabled = null; }
  setPanEnabled(false);

  if (board.containerObj) board.containerObj.style.cursor = 'grabbing';

  setCapture(evt);

  evt.preventDefault();
  evt.stopPropagation();
  if (typeof evt.stopImmediatePropagation === 'function') evt.stopImmediatePropagation();
}

// MOVE
function onPointerMove(evt) {
  if (!dragging) return;

  const p = usrCoordsDOM(evt);
  if (!isFinite(p[0]) || !isFinite(p[1])) return;

  dx = startDx + (p[0] - startMouse[0]);
  dy = startDy + (p[1] - startMouse[1]);

  requestUpdate();

  evt.preventDefault();
  evt.stopPropagation();
  if (typeof evt.stopImmediatePropagation === 'function') evt.stopImmediatePropagation();
}

// END
function endDrag(evt) {
  if (!dragging) return;

  dragging = false;
  startMouse = null;

  if (panWasEnabled !== null) setPanEnabled(panWasEnabled);
  panWasEnabled = null;

  if (board.containerObj) board.containerObj.style.cursor = 'default';

  releaseCapture(evt);

  if (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (typeof evt.stopImmediatePropagation === 'function') evt.stopImmediatePropagation();
  }
}

// Listener: CAPTURE
if (board.containerObj) {
  board.containerObj.addEventListener('pointerdown', onPointerDown, { capture: true, passive: false });
  board.containerObj.addEventListener('pointermove', onPointerMove, { capture: true, passive: false });
  board.containerObj.addEventListener('pointerup', endDrag,        { capture: true, passive: false });
  board.containerObj.addEventListener('pointercancel', endDrag,    { capture: true, passive: false });
}

















```

</div>




































# Koordinatensysteme - Aufgabe 3 - Graph bewegen - Exponentialfunktion



Bitte einmal die Farbthemes und zwischen Lightmode und Darkmode wechseln.




<div style="max-width: 1000px;">

``` javascript @JSX.Graph

function __getGridColor(fallback = '#0b5fff') {
  try {
    const doc = (window.parent && window.parent.document) ? window.parent.document : document;
    const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;

    // 1) Wenn du später mal --grid-color nutzt, wird das automatisch bevorzugt
    const v = win.getComputedStyle(doc.documentElement).getPropertyValue('--grid-color').trim();
    if (v) return v;

    // 2) Sonst Button-Farbe nehmen
    const btn = doc.querySelector('.lia-btn');
    if (btn) {
      const cs = win.getComputedStyle(btn);
      const bg = cs.backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)') return bg;
      if (cs.color) return cs.color;
    }
  } catch (e) {}

  return fallback;
}

// Board-Grid-Farbe live nachziehen
function __watchGridColor(board, intervalMs = 400) {
  let last = '';

  setInterval(() => {
    const c = __getGridColor('#0b5fff');
    if (!c || c === last) return;
    last = c;

    // 1) Optionen setzen (für zukünftige Rebuilds)
    try {
      if (board && board.options && board.options.grid) {
        if (board.options.grid.major) board.options.grid.major.strokeColor = c;
        if (board.options.grid.minor) board.options.grid.minor.strokeColor = c;
      }
    } catch (e) {}

    // 2) EXISTIERENDE Grid-Objekte einfärben (entscheidend!)
    try {
      if (board && board.grids && board.grids.length) {
        board.grids.forEach(g => {
          if (g && typeof g.setAttribute === 'function') {
            g.setAttribute({ strokeColor: c });
          }
        });
      }

      if (board && board.objectsList && board.objectsList.length) {
        board.objectsList.forEach(o => {
          if (!o || typeof o.setAttribute !== 'function') return;
          if (o.elType === 'grid' || (typeof JXG !== 'undefined' && o.type === JXG.OBJECT_TYPE_GRID)) {
            o.setAttribute({ strokeColor: c });
          }
        });
      }
    } catch (e) {}

    // 3) Redraw
    try {
      if (board && typeof board.fullUpdate === 'function') board.fullUpdate();
      else if (board) board.update();
    } catch (e) {}

  }, intervalMs);
}

const btnColor = __getGridColor('#0b5fff');

// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
// Board HIER DIE KOORDINATEN
var board = JXG.JSXGraph.initBoard(jxgbox, {
  axis: true,
  showNavigation: true,
  showCopyright: false,
  boundingbox: [-1, 5, 7, -1],
  keepaspectratio: true,

  zoom: {
    enabled: true,
    wheel: true,
    needShift: false,
    factorX: 1.15,
    factorY: 1.15
  },

  pan: {
    enabled: true,
    needShift: false,
    needTwoFingers: false
  },

  defaultAxes: {
    x: {
      strokeColor: 'black',
      strokeWidth: 2.5,
      ticks: {
        insertTicks: false,
        ticksDistance: 1,
        strokeWidth: 3,
        minorTicks: 9,         
        drawLabels: true,
        label: { fontSize: 18 }
      }
    },
    y: {
      strokeColor: 'black',
      strokeWidth: 2.5,
      ticks: {
        insertTicks: false,
        ticksDistance: 1,
        strokeWidth: 3,
        minorTicks: 9,        
        drawLabels: true,
        label: { fontSize: 18 }
      }
    }
  },

  grid: {
    majorStep: 'auto',                
    minorElements: 'auto',          
    includeBoundaries: true,
    forceSquare: true,

    major: {
      face: 'line',
      strokeColor: btnColor,
      strokeWidth: 1.5,          
      dash: 0,
      drawZero: true
    },
    minor: {
      face: 'line',
      strokeColor: btnColor,
      strokeWidth: 1,         
      dash: 1,
      drawZero: false             // <<< spart Linien
    }
  }
});




(function enableAdaptiveMinorGrid(board) {
  if (!board) return;

  function pxPerUnitX() {
    const bb = board.getBoundingBox();        // [xmin, ymax, xmax, ymin]
    const xmin = bb[0], xmax = bb[2];
    const w = board.canvasWidth || board.canvasWidth || board.containerObj.clientWidth;
    return w / Math.max(1e-9, (xmax - xmin));
  }

  let lastShow = null;

  function update() {
    const ppu = pxPerUnitX();

    // Schwelle: unter 55px pro Einheit -> minor off
    const showMinor = ppu >= 100;

    if (showMinor === lastShow) return;
    lastShow = showMinor;

    // Setze Minor-Gitterlinien effektiv unsichtbar oder sichtbar
    try {
      if (board.grids && board.grids.length) {
        board.grids.forEach(g => {
          if (!g || typeof g.setAttribute !== 'function') return;

          // Heuristik: Minor-Grids sind oft "dashed" oder strokeWidth==0.8 etc.
          // Wir schalten alle grids mit dash==1 (dein Minor) aus/an:
          const isMinor = (g.visProp && (g.visProp.dash == 1 || g.visProp.strokeWidth <= 1));
          if (isMinor) g.setAttribute({ visible: showMinor });
        });
      }
    } catch (e) {}

    board.update();
  }

  // Beim Zoomen/Pannen triggern
  board.on('boundingbox', update);

  // initial
  update();
})(board);


// =========================================================
// Board ins gemeinsame ROOT registrieren
// =========================================================
const ROOT = (function () {
  try { let w = window; while (w.parent && w.parent !== w) w = w.parent; return w; }
  catch (e) { return window; }
})();

ROOT.__boards = ROOT.__boards || {};
ROOT.__boards['Aufgabe1'] = board;

// Pending Points nachziehen (falls vorher geklickt)
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs || [];
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs.filter(spec => {
  const parts = String(spec).split(';').map(s => String(s).trim());
  const bid  = parts[0];
  const name = parts[1];

  if (bid === 'Aufgabe1' && name) {
    if (ROOT.ensurePoint) ROOT.ensurePoint(bid, name);
    else if (window.ensurePoint) window.ensurePoint(bid, name);
    return false; // aus Queue entfernen
  }
  return true;
});


; (function () {
  var r;
  try { r = (typeof ROOT !== 'undefined') ? ROOT : null; } catch (e) { r = null; }
  if (!r || typeof r.flushPendingAutoAdds !== 'function') return;

  // mini-delay, damit JSXGraph wirklich vollständig steht
  setTimeout(function () {
    try {
      r.flushPendingAutoAdds('Aufgabe1');
    } catch (e) {
      // bewusst still
    }
  }, 0);
})();



function __isDarkTheme() {
  try {
    const doc = (window.parent && window.parent.document) ? window.parent.document : document;
    const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;

    // bevorzugt: body, sonst documentElement
    const el = doc.body || doc.documentElement;
    const bg = win.getComputedStyle(el).backgroundColor;

    // bg ist typischerweise "rgb(r,g,b)" oder "rgba(r,g,b,a)"
    const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!m) return false;

    const r = parseInt(m[1], 10);
    const g = parseInt(m[2], 10);
    const b = parseInt(m[3], 10);

    // relative Luminanz (0..255) – Schwelle ~ 128
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum < 128;
  } catch (e) {
    return false;
  }
}


function __neutralAutoColor() {
  return __isDarkTheme() ? '#fff' : '#000';
}

function __recolorNeutralAutoLabels() {
  const col = __neutralAutoColor();
  document.querySelectorAll('span.autoNameNeutral').forEach(el => {
    // Nur neutrale Labels anfassen (nicht grün/rot aus dem Check)
    el.style.color = col;
  });
}



function __applyNavColors(board) {
  if (!board || !board.containerObj) return;

  // JSXGraph legt die Navigation innerhalb des Board-Containers an
  const nav = board.containerObj.querySelector('.JXG_navigation');
  if (!nav) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';

  // Navigation-Grundstil
  nav.style.color = col;
  nav.style.background = 'transparent';

  // Links/Buttons/Spans explizit einfärben
  nav.querySelectorAll('a, button, span').forEach(el => {
    el.style.color = col;
    el.style.borderColor = col;
    el.style.background = 'transparent';
    el.style.boxShadow = 'none';
  });

  // SVG-Icons (falls JSXGraph SVG nutzt)
  nav.querySelectorAll('svg, svg *').forEach(el => {
    el.style.fill = col;
    el.style.stroke = col;
  });

  // IMG-Icons (falls JSXGraph Bilder nutzt)
  nav.querySelectorAll('img').forEach(img => {
    img.style.filter = isDark ? 'invert(1)' : 'none';
  });
}

// einmal anwenden (nach initBoard)
__applyNavColors(board);

// bei Mode-Wechsel nachziehen
try {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  if (mq && typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', () => __applyNavColors(board));
  } else if (mq && typeof mq.addListener === 'function') {
    mq.addListener(() => __applyNavColors(board));
  }
} catch (e) {}


function __applyAxisColors(board) {
  if (!board) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';

  // 0) WICHTIG: Defaults für zukünftig neu erzeugte Tick-Labels setzen
  // (damit beim Rauszoomen neue Zahlen direkt korrekt gefärbt werden)
  try {
    board.options = board.options || {};
    board.options.defaultAxes = board.options.defaultAxes || {};
    ['x', 'y'].forEach(axKey => {
      board.options.defaultAxes[axKey] = board.options.defaultAxes[axKey] || {};
      board.options.defaultAxes[axKey].ticks = board.options.defaultAxes[axKey].ticks || {};
      board.options.defaultAxes[axKey].ticks.label = board.options.defaultAxes[axKey].ticks.label || {};

      board.options.defaultAxes[axKey].strokeColor = col;
      board.options.defaultAxes[axKey].ticks.strokeColor = col;

      // Diese beiden sind für die Ziffern entscheidend:
      board.options.defaultAxes[axKey].ticks.label.strokeColor = col;
      board.options.defaultAxes[axKey].ticks.label.fillColor   = col;
    });
  } catch (e) {}

  // Helfer: beliebige JSXGraph-Objekte einfärben
  const paint = (obj) => {
    if (!obj || typeof obj.setAttribute !== 'function') return;
    try {
      obj.setAttribute({
        strokeColor: col,
        highlightStrokeColor: col,
        fillColor: col,
        highlightFillColor: col
      });
    } catch (e) {}
  };

  // 1) Achsen + Ticks + Tick-Labels (existierende)
  try {
    if (board.defaultAxes) {
      paint(board.defaultAxes.x);
      paint(board.defaultAxes.y);

      const paintTicks = (axis) => {
        if (!axis) return;

        // Achsen-VisProps (wirkt oft auf neu erzeugte Ticks/Labels)
        try {
          axis.setAttribute({ strokeColor: col, highlightStrokeColor: col });
        } catch (e) {}

        // Standard-Ticks (häufig axis.defaultTicks)
        if (axis.defaultTicks) {
          paint(axis.defaultTicks);

          // Label-Default am Tick-Objekt selbst nachziehen
          try {
            axis.defaultTicks.setAttribute({
              strokeColor: col,
              highlightStrokeColor: col
            });
            if (axis.defaultTicks.visProp && axis.defaultTicks.visProp.label) {
              axis.defaultTicks.visProp.label.strokeColor = col;
              axis.defaultTicks.visProp.label.fillColor   = col;
            }
          } catch (e) {}

          if (axis.defaultTicks.labels && axis.defaultTicks.labels.length) {
            axis.defaultTicks.labels.forEach(paint);
          }
        }

        // Manche Versionen: axis.ticks als Array
        if (axis.ticks && axis.ticks.length) {
          axis.ticks.forEach(t => {
            paint(t);
            // Tick-Label-Defaults am Tick nachziehen
            try {
              if (t.visProp && t.visProp.label) {
                t.visProp.label.strokeColor = col;
                t.visProp.label.fillColor   = col;
              }
            } catch (e) {}
            if (t.labels && t.labels.length) t.labels.forEach(paint);
          });
        }

        // Manche Versionen: axis.getTicks()
        if (typeof axis.getTicks === 'function') {
          (axis.getTicks() || []).forEach(t => {
            paint(t);
            try {
              if (t.visProp && t.visProp.label) {
                t.visProp.label.strokeColor = col;
                t.visProp.label.fillColor   = col;
              }
            } catch (e) {}
            if (t.labels && t.labels.length) t.labels.forEach(paint);
          });
        }
      };

      paintTicks(board.defaultAxes.x);
      paintTicks(board.defaultAxes.y);
    }
  } catch (e) {}

  // 2) Fallback: Tick-Labels werden je nach Version als Textobjekte geführt.
  // Wir färben NUR Texte, die sehr wahrscheinlich Tick-Labels sind, um nicht alle Texte (z.B. Punktnamen) zu erwischen.
  try {
    if (board.objectsList && board.objectsList.length) {
      board.objectsList.forEach(o => {
        if (!o || o.elType !== 'text') return;

        // Heuristiken für Tick-Labels:
        // - Tick-Labels sind fast immer "fixed"
        // - und haben häufig sehr kurze Inhalte (Zahlen)
        // - und sind nicht "label" eines beliebigen Punktes (die sind oft an ein parent gekoppelt)
        const txt = (typeof o.getText === 'function') ? String(o.getText()) : (o.plaintext ? String(o.plaintext) : '');
        const looksNumeric = /^[\s\-+]*\d+([.,]\d+)?\s*$/.test(txt);

        const isFixed = (o.visProp && (o.visProp.fixed === true || o.visProp.isfixed === true));
        if (looksNumeric && isFixed) paint(o);
      });
    }
  } catch (e) {}

  // 3) Redraw
  try {
    if (typeof board.fullUpdate === 'function') board.fullUpdate();
    else board.update();
  } catch (e) {}
}

// einmal anwenden
__applyAxisColors(board);

// NEU: bei jedem Zoom/Pan (boundingbox ändert sich) Achsen/Ticks/Labels nachfärben
try {
  board.on('boundingbox', () => __applyAxisColors(board));
} catch (e) {}

// Optional (aber sinnvoll): auch nach Board-Resize einmal nachziehen
try {
  board.on('resize', () => __applyAxisColors(board));
} catch (e) {}



// einmal anwenden
__applyAxisColors(board);


function __applyBoardFrame(board) {
  if (!board || !board.containerObj) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';

  // Rahmen um das Koordinatensystem
  board.containerObj.style.border = `2px solid ${col}`;
  board.containerObj.style.borderRadius = '8px';     // optional
  board.containerObj.style.boxSizing = 'border-box';
}

// einmal anwenden
__applyBoardFrame(board);



// bei Mode-Wechsel nachziehen (gleiches Event wie Navigation nutzen)
try {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = () => {
    __applyNavColors(board);
    __applyAxisColors(board);
  };

  if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', handler);
  else if (mq && typeof mq.addListener === 'function') mq.addListener(handler);
} catch (e) {}



try {
  if (board && board.grids && board.grids.length) {
    board.grids.forEach(g => g && g.setAttribute && g.setAttribute({ strokeColor: btnColor }));
  }
} catch (e) {}


if (board && board.containerObj) {
  board.containerObj.style.background = 'transparent';
}

let __lastDark = null;

setInterval(() => {
  const nowDark = __isDarkTheme();
  if (nowDark === __lastDark) return;
  __lastDark = nowDark;

  __applyNavColors(board);
  __applyAxisColors(board);
  __applyBoardFrame(board);

  try { window.__recolorNeutralAutoLabels && window.__recolorNeutralAutoLabels(); } catch (e) {}
}, 300);



// Grid-Farbe automatisch an Button-Farbe koppeln
__watchGridColor(board, 400);






















/* =========================================================
   DRAGGABLE EXPONENTIAL FUNCTION (Translation per Mouse)
   - Klick nahe am Graphen -> ziehen
   - Anzeige: f(x) = a · b^(c·x - h) + k
   - Overlay: Checkbox "Funktionsterm anzeigen"
   - Overlay: 2 Slider (ohne Zahlen)
       1) "Koeffizient"             -> a
       2) "Exponentenkoeffizient"   -> c
   - Robust: Overlay-Klicks blockieren Drag/Pan, Pan wird beim Drag deaktiviert
   ========================================================= */

// Basisfunktion: y = a * b^(c*x - h0) + k0
// (du kannst a,b,c,h0,k0 frei wählen; b > 0, b != 1)
let   a  = 1.0;     // <-- Slider 1
const b  = 2.781;
let   c  = 1.0;     // <-- Slider 2 (NEU)
const h0 = 0.0;
const k0 = 0.0;

// Verschiebung (in Weltkoordinaten)
let dx = 0;
let dy = 0;

// Sichtfenster-Grenzen dynamisch
const xmin = () => board.getBoundingBox()[0];
const xmax = () => board.getBoundingBox()[2];

// verschobene Funktion: y = a * b^(c*x - (h0+dx)) + (k0+dy)
function fShift(x) {
  const h = h0 + dx;
  const k = k0 + dy;
  return a * Math.pow(b, (c * x - h)) + k;
}

// Graph erzeugen (dynamischer Bereich)
const graph = board.create('functiongraph', [fShift, xmin, xmax], {
  strokeWidth: 3,
  strokeColor: '#b41f65',
  doAdvancedPlot: false,
  numberPointsLow: 40,
  numberPointsHigh: 180,
  highlight: false
});

// DE-Format
function __fmtDE(num, digits = 3) {
  const v = Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  }).format(v);
}

// Gleichungstext bauen: f(x) = a·b^(c·x - h) + k
function __buildEqText() {
  const h = h0 + dx;
  const k = k0 + dy;

  const aDE = __fmtDE(a, 3);
  const bDE = __fmtDE(b, 3);
  const cDE = __fmtDE(c, 3);
  const hDE = __fmtDE(Math.abs(h), 3);
  const kDE = __fmtDE(Math.abs(k), 3);

  const signH = (h >= 0) ? '- ' : '+ ';
  const signK = (k >= 0) ? '+ ' : '- ';

  return `f(x) = ${aDE}·${bDE}^(${cDE}·x ${signH}${hDE}) ${signK}${kDE}`;
}

/* =========================================================
   CHECKBOX-OVERLAY: Funktionsterm anzeigen + dynamischer Term
   ========================================================= */

let __eqWrap = null;
let __eqCb   = null;
let __eqLbl  = null;
let __eqSpan = null;

function __applyEqTheme() {
  if (!__eqWrap) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';
  const bg  = isDark ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.85)';
  const brd = isDark ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(0,0,0,0.20)';

  __eqWrap.style.color = col;
  __eqWrap.style.background = bg;
  __eqWrap.style.border = brd;
  __eqWrap.style.backdropFilter = 'blur(2px)';

  if (__eqLbl)  __eqLbl.style.color  = col;
  if (__eqSpan) __eqSpan.style.color = col;

  if (__eqCb) __eqCb.style.accentColor = col;
}

function __updateEqUI() {
  if (!__eqSpan) return;
  try {
    __eqSpan.textContent = __buildEqText();
  } catch (e) {
    __eqSpan.textContent = 'f(x) = …';
  }
}

function __syncEqToggle() {
  if (!__eqCb || !__eqLbl || !__eqSpan) return;

  __updateEqUI();

  if (__eqCb.checked) {
    __eqLbl.style.display  = 'none';
    __eqSpan.style.display = '';
  } else {
    __eqLbl.style.display  = '';
    __eqSpan.style.display = 'none';
  }
}

// stopPropagation, aber KEIN preventDefault (sonst werden Inputs schnell "unbeweglich")
function __shieldFromJXG(e) {
  e.stopPropagation();
  if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
}

function __ensureEqUI() {
  if (__eqWrap || !board || !board.containerObj) return;

  try {
    const pos = board.containerObj.style.position;
    if (!pos || pos === 'static') board.containerObj.style.position = 'relative';
  } catch (e) {}

  __eqWrap = document.createElement('div');
  __eqWrap.style.position = 'absolute';
  __eqWrap.style.left = '10px';
  __eqWrap.style.top  = '10px';
  __eqWrap.style.zIndex = '9999';
  __eqWrap.style.display = 'flex';
  __eqWrap.style.alignItems = 'center';
  __eqWrap.style.gap = '10px';
  __eqWrap.style.padding = '6px 10px';
  __eqWrap.style.borderRadius = '8px';
  __eqWrap.style.userSelect = 'none';
  __eqWrap.style.pointerEvents = 'auto';
  __eqWrap.style.fontSize = '18px';
  __eqWrap.style.lineHeight = '1.2';

  __eqCb = document.createElement('input');
  __eqCb.type = 'checkbox';
  __eqCb.checked = false;

  __eqLbl = document.createElement('span');
  __eqLbl.textContent = 'Funktionsterm anzeigen';
  __eqLbl.style.cursor = 'pointer';
  __eqLbl.style.fontWeight = '600';

  __eqLbl.addEventListener('click', (e) => {
    __shieldFromJXG(e);
    __eqCb.checked = !__eqCb.checked;
    __syncEqToggle();
  }, { capture: true });

  __eqSpan = document.createElement('span');
  __eqSpan.style.whiteSpace = 'nowrap';
  __eqSpan.style.fontWeight = '700';
  __eqSpan.style.display = 'none';

  __eqWrap.appendChild(__eqCb);
  __eqWrap.appendChild(__eqLbl);
  __eqWrap.appendChild(__eqSpan);

  board.containerObj.appendChild(__eqWrap);

  __eqCb.addEventListener('change', (e) => { __shieldFromJXG(e); __syncEqToggle(); }, { capture: true });
  __eqCb.addEventListener('click',  (e) => { __shieldFromJXG(e); __syncEqToggle(); }, { capture: true });

  [
    'pointerdown','pointerup','pointermove','pointercancel',
    'mousedown','mouseup','mousemove','touchstart','touchend','touchmove'
  ].forEach(type => __eqWrap.addEventListener(type, __shieldFromJXG, { capture: true, passive: true }));

  __eqWrap.addEventListener('wheel', (e) => {
    e.preventDefault();
    __shieldFromJXG(e);
  }, { capture: true, passive: false });

  __applyEqTheme();
  __syncEqToggle();
}

__ensureEqUI();

let __lastEqDark = null;
setInterval(() => {
  const d = __isDarkTheme();
  if (d === __lastEqDark) return;
  __lastEqDark = d;
  __applyEqTheme();
}, 250);

function __isEqUIEvent(evt) {
  return !!(
    __eqWrap &&
    evt &&
    evt.target &&
    (__eqWrap === evt.target || __eqWrap.contains(evt.target))
  );
}

/* =========================================================
   2 SLIDER-OVERLAY: a & c (ohne Zahlen)
   ========================================================= */

let __acWrap   = null;
let __aLbl     = null;
let __aSlider  = null;
let __cLbl     = null;
let __cSlider  = null;

function __applyACTheme() {
  if (!__acWrap) return;

  const isDark = __isDarkTheme();
  const col = isDark ? '#fff' : '#000';
  const bg  = isDark ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.85)';
  const brd = isDark ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(0,0,0,0.20)';

  __acWrap.style.color = col;
  __acWrap.style.background = bg;
  __acWrap.style.border = brd;
  __acWrap.style.backdropFilter = 'blur(2px)';

  if (__aLbl) __aLbl.style.color = col;
  if (__cLbl) __cLbl.style.color = col;

  // Slider-Farbe (Thumb/Track) – nutzt accentColor wo unterstützt
  if (__aSlider) __aSlider.style.accentColor = col;
  if (__cSlider) __cSlider.style.accentColor = col;
}

// stopPropagation, aber KEIN preventDefault für pointer/mouse (Slider bleibt beweglich)
function __shieldFromJXGOverlay(e) {
  e.stopPropagation();
  if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
}

function __ensureACUI() {
  if (__acWrap || !board || !board.containerObj) return;

  try {
    const pos = board.containerObj.style.position;
    if (!pos || pos === 'static') board.containerObj.style.position = 'relative';
  } catch (e) {}

  __acWrap = document.createElement('div');
  __acWrap.style.position = 'absolute';
  __acWrap.style.left = '10px';
  __acWrap.style.top  = '52px';       // unter Checkbox
  __acWrap.style.zIndex = '9999';
  __acWrap.style.display = 'flex';
  __acWrap.style.flexDirection = 'column';
  __acWrap.style.alignItems = 'flex-start';
  __acWrap.style.gap = '8px';
  __acWrap.style.padding = '8px 10px';
  __acWrap.style.borderRadius = '8px';
  __acWrap.style.userSelect = 'none';
  __acWrap.style.pointerEvents = 'auto';
  __acWrap.style.fontSize = '18px';
  __acWrap.style.lineHeight = '1.2';

  // ---- Row: a
  const rowA = document.createElement('div');
  rowA.style.display = 'flex';
  rowA.style.alignItems = 'center';
  rowA.style.gap = '10px';

  __aLbl = document.createElement('span');
  __aLbl.textContent = 'Koeffizient';
  __aLbl.style.fontWeight = '600';

  __aSlider = document.createElement('input');
  __aSlider.type = 'range';
  __aSlider.min = '-10';
  __aSlider.max = '10';
  __aSlider.step = '0.01';
  __aSlider.value = String(a);
  __aSlider.style.width = '240px';
  __aSlider.style.margin = '0';
  __aSlider.style.padding = '0';
  __aSlider.style.background = 'transparent';

  // ---- Row: c
  const rowC = document.createElement('div');
  rowC.style.display = 'flex';
  rowC.style.alignItems = 'center';
  rowC.style.gap = '10px';

  __cLbl = document.createElement('span');
  __cLbl.textContent = 'Exponentenkoeffizient';
  __cLbl.style.fontWeight = '600';

  __cSlider = document.createElement('input');
  __cSlider.type = 'range';
  __cSlider.min = '-10';
  __cSlider.max = '10';
  __cSlider.step = '0.01';
  __cSlider.value = String(c);
  __cSlider.style.width = '240px';
  __cSlider.style.margin = '0';
  __cSlider.style.padding = '0';
  __cSlider.style.background = 'transparent';

  const applyAC = () => {
    const va = parseFloat(__aSlider.value);
    const vc = parseFloat(__cSlider.value);
    if (isFinite(va)) a = va;
    if (isFinite(vc)) c = vc;

    try { board.update(); } catch (e) {}
    try { __updateEqUI(); } catch (e) {}
  };

  __aSlider.addEventListener('input',  (e) => { __shieldFromJXGOverlay(e); applyAC(); }, { capture: true, passive: true });
  __aSlider.addEventListener('change', (e) => { __shieldFromJXGOverlay(e); applyAC(); }, { capture: true, passive: true });

  __cSlider.addEventListener('input',  (e) => { __shieldFromJXGOverlay(e); applyAC(); }, { capture: true, passive: true });
  __cSlider.addEventListener('change', (e) => { __shieldFromJXGOverlay(e); applyAC(); }, { capture: true, passive: true });

  // Overlay gegen JSXGraph abschirmen
  [
    'pointerdown','pointerup','pointermove','pointercancel',
    'mousedown','mouseup','mousemove',
    'touchstart','touchend','touchmove'
  ].forEach(type => __acWrap.addEventListener(type, __shieldFromJXGOverlay, { capture: true, passive: true }));

  // Wheel: Zoom blocken, wenn Maus über dem Overlay ist
  __acWrap.addEventListener('wheel', (e) => {
    e.preventDefault();
    __shieldFromJXGOverlay(e);
  }, { capture: true, passive: false });

  rowA.appendChild(__aLbl);
  rowA.appendChild(__aSlider);

  rowC.appendChild(__cLbl);
  rowC.appendChild(__cSlider);

  __acWrap.appendChild(rowA);
  __acWrap.appendChild(rowC);

  board.containerObj.appendChild(__acWrap);

  __applyACTheme();
  applyAC(); // initial UI -> Werte anwenden + Gleichung aktualisieren
}

__ensureACUI();

let __lastACDark = null;
setInterval(() => {
  const d = __isDarkTheme();
  if (d === __lastACDark) return;
  __lastACDark = d;
  __applyACTheme();
}, 250);

function __isACUIEvent(evt) {
  return !!(
    __acWrap &&
    evt &&
    evt.target &&
    (__acWrap === evt.target || __acWrap.contains(evt.target))
  );
}

/* ---------------------------------------------------------
   Drag-Mechanik: DOM Pointer-Events (CAPTURE!)
   --------------------------------------------------------- */

let dragging = false;
let startMouse = null;
let startDx = 0;
let startDy = 0;

let panWasEnabled = null;

if (board.containerObj) {
  board.containerObj.style.touchAction = 'none';
  board.containerObj.style.userSelect  = 'none';
  board.containerObj.style.cursor      = 'default';
}

function usrCoordsDOM(evt) {
  if (typeof board.getUsrCoordsOfMouse === 'function') return board.getUsrCoordsOfMouse(evt);

  const rect = board.containerObj.getBoundingClientRect();
  const px = evt.clientX - rect.left;
  const py = evt.clientY - rect.top;

  const bb = board.getBoundingBox(); // [xmin, ymax, xmax, ymin]
  const x = bb[0] + (px / rect.width)  * (bb[2] - bb[0]);
  const y = bb[1] - (py / rect.height) * (bb[1] - bb[3]);
  return [x, y];
}

function hitTest(p) {
  const x = p[0], y = p[1];
  if (!isFinite(x) || !isFinite(y)) return false;

  const y0 = fShift(x);

  const bb = board.getBoundingBox();
  const ySpan = Math.max(1e-9, (bb[1] - bb[3]));
  const eps = ySpan / 28; // Exponential: toleranter, weil steil werden kann

  return Math.abs(y - y0) <= eps;
}

let rafPending = false;
function requestUpdate() {
  if (rafPending) return;
  rafPending = true;
  requestAnimationFrame(() => {
    rafPending = false;
    board.update();
    __updateEqUI();
  });
}

function setCapture(evt) {
  try {
    if (board.containerObj?.setPointerCapture && evt.pointerId != null) {
      board.containerObj.setPointerCapture(evt.pointerId);
    }
  } catch (e) {}
}
function releaseCapture(evt) {
  try {
    if (board.containerObj?.releasePointerCapture && evt.pointerId != null) {
      board.containerObj.releasePointerCapture(evt.pointerId);
    }
  } catch (e) {}
}

function setPanEnabled(enabled) {
  try { board.setAttribute({ pan: { enabled: !!enabled } }); } catch (e) {}
  try { if (board.attr && board.attr.pan) board.attr.pan.enabled = !!enabled; } catch (e) {}
}

function onPointerDown(evt) {
  if (__isEqUIEvent(evt)) return;
  if (__isACUIEvent(evt)) return;
  if (evt.pointerType === 'mouse' && evt.button !== 0) return;

  const p = usrCoordsDOM(evt);
  if (!hitTest(p)) return;

  dragging = true;
  startMouse = p;
  startDx = dx;
  startDy = dy;

  try { panWasEnabled = !!(board.attr && board.attr.pan && board.attr.pan.enabled); }
  catch (e) { panWasEnabled = null; }
  setPanEnabled(false);

  if (board.containerObj) board.containerObj.style.cursor = 'grabbing';

  setCapture(evt);

  evt.preventDefault();
  evt.stopPropagation();
  if (typeof evt.stopImmediatePropagation === 'function') evt.stopImmediatePropagation();
}

function onPointerMove(evt) {
  if (!dragging) return;

  const p = usrCoordsDOM(evt);
  if (!isFinite(p[0]) || !isFinite(p[1])) return;

  dx = startDx + (p[0] - startMouse[0]);
  dy = startDy + (p[1] - startMouse[1]);

  requestUpdate();

  evt.preventDefault();
  evt.stopPropagation();
  if (typeof evt.stopImmediatePropagation === 'function') evt.stopImmediatePropagation();
}

function endDrag(evt) {
  if (!dragging) return;

  dragging = false;
  startMouse = null;

  if (panWasEnabled !== null) setPanEnabled(panWasEnabled);
  panWasEnabled = null;

  if (board.containerObj) board.containerObj.style.cursor = 'default';

  releaseCapture(evt);

  if (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (typeof evt.stopImmediatePropagation === 'function') evt.stopImmediatePropagation();
  }
}

if (board.containerObj) {
  board.containerObj.addEventListener('pointerdown', onPointerDown, { capture: true, passive: false });
  board.containerObj.addEventListener('pointermove', onPointerMove, { capture: true, passive: false });
  board.containerObj.addEventListener('pointerup', endDrag,        { capture: true, passive: false });
  board.containerObj.addEventListener('pointercancel', endDrag,    { capture: true, passive: false });
}

















```

</div>
