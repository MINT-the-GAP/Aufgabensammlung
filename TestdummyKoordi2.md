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
// FIX: Target/Point-Checks konsequent über ROOT-Store
// =========================================================
window.setTargetFunction = function (boardId, key, fn) {
  const ROOT = window.__ROOT || window;
  ROOT.__targets = ROOT.__targets || {};
  ROOT.__targets[boardId] = ROOT.__targets[boardId] || {};
  ROOT.__targets[boardId][key] = fn;
};

window.isPointOnTargetFunction = function (boardId, pointName, key, epsY = 0.15) {
  const ROOT = window.__ROOT || window;

  const pt = ROOT.__points && ROOT.__points[boardId] && ROOT.__points[boardId][pointName];
  const fn = ROOT.__targets && ROOT.__targets[boardId] && ROOT.__targets[boardId][key];

  if (!pt || typeof fn !== 'function') return false;

  const x = pt.X();
  const y = pt.Y();
  const y0 = fn(x);

  if (!isFinite(y0)) return false;
  return Math.abs(y - y0) <= epsY;
};


// =========================================================
// @AutoPunkteGraph – Store + Namensgenerator + Actions
// =========================================================
ROOT.__autoPts = ROOT.__autoPts || {};             // boardId -> {counter, names:[]}
ROOT.__pendingAutoAdds = ROOT.__pendingAutoAdds || []; // falls Button vor Board klickt

function __autoLabel(i) {
  // A..Z, A',B',..Z', A'',...
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const base = letters[i % 26];
  const k = Math.floor(i / 26);
  return base + (k > 0 ? "'".repeat(k) : "");
}

function __randInBBox(board) {
  // Gewünschter Startbereich: 0 <= x < 1 und 0 <= y < 1
  const x = Math.random();   // in [0,1)
  const y = Math.random();   // in [0,1)
  return [x, y];
}

// optional: wenn Punkt erzeugt wurde, aber Board war noch nicht da
ROOT.flushPendingAutoAdds = ROOT.flushPendingAutoAdds || function (boardId) {
  const board = ROOT.__boards && ROOT.__boards[boardId];
  if (!board) return;

  ROOT.__pendingAutoAdds = (ROOT.__pendingAutoAdds || []).filter(item => {
    if (item.boardId !== boardId) return true;

    // Punkt erzeugen/positionieren
    window.ensurePoint(item.boardId, item.name);
    const pt = ROOT.__points && ROOT.__points[item.boardId] && ROOT.__points[item.boardId][item.name];
    if (pt && item.xy) {
      try { pt.moveTo(item.xy, 0); } catch (e) {}
      try { board.update(); } catch (e) {}
    }
    return false;
  });
};

function __initAuto(boardId) {
  ROOT.__autoPts[boardId] = ROOT.__autoPts[boardId] || { counter: 0, names: [] };
  return ROOT.__autoPts[boardId];
}

// spec: "boardId;targetKey;eps"
window.addAutoPointFromSpec = function (spec, uid) {
  const ROOT = window.__ROOT || window;
  const parts = String(spec).split(';').map(s => String(s).trim());

  const boardId = parts[0] || '';
  if (!boardId) return;

  const state = __initAuto(boardId);
  const name = __autoLabel(state.counter++);
  state.names.push(name);

  const msg = document.getElementById('autoMsg-' + uid);

  const board = ROOT.__boards && ROOT.__boards[boardId];
  if (!board) {
    // Board noch nicht registriert -> merken
    ROOT.__pendingAutoAdds.push({ boardId, name, xy: null });
    if (msg) {
      msg.textContent = `(${name}) vorgemerkt (Board lädt noch ...)`;
      msg.style.color = __neutralAutoColor();
    }
    return;
  }

  // Punkt erzeugen (zufällige Position im Sichtfenster)
  window.ensurePoint(boardId, name);

  const pt = ROOT.__points && ROOT.__points[boardId] && ROOT.__points[boardId][name];
  if (pt) {
    const xy = __randInBBox(board);
    try { pt.moveTo(xy, 0); } catch (e) {}
    try { board.update(); } catch (e) {}
  }
  if (msg) {
    const html = state.names
      .map(n => `<span class="autoNameNeutral" style="font-weight:600; color:${window.__neutralAutoColor()};">\\(${n}\\)</span>`)
      .join(', ');

    msg.innerHTML = html;

    setTimeout(() => {
      try { ROOT.__typeset(msg); } catch (e) {}
      try { window.__recolorNeutralAutoLabels(); } catch (e) {}
    }, 0);
  }
};


window.checkAutoPointsFromSpec = function (spec, uid) {
  const ROOT = window.__ROOT || window;
  const parts = String(spec).split(';').map(s => String(s).trim());

  const boardId = parts[0] || '';
  const key     = parts[1] || '';
  let eps       = parseFloat(String(parts[2] || '').replace(',', '.'));
  if (Number.isNaN(eps)) eps = 0.15;

  const msg = document.getElementById('autoMsg-' + uid);

  const state = ROOT.__autoPts && ROOT.__autoPts[boardId];
  const names = (state && state.names) ? state.names.slice() : [];

  if (!names.length) {
    if (msg) {
      msg.textContent = 'Noch keine Punkte erzeugt.';
      msg.style.color = '';
    }
    return;
  }

  if (msg) {
    const partsHtml = names.map(n => {
      const ok  = window.isPointOnTargetFunction(boardId, n, key, eps);
      const col = ok ? 'green' : 'red';
      return `<span style="color:${col}; font-weight:600;">\\(${n}\\)</span>`;
    });

    msg.innerHTML = partsHtml.join(', ');

    setTimeout(() => { try { ROOT.__typeset(msg); } catch (e) {} }, 0);
  }
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




@ErzeugePunkt: @ErzeugePunkt_(@uid,@0)

@ErzeugePunkt_
<button id="btn-@0" class="lia-btn" onclick="window.ensurePointFromSpec('@1')">Punkt erzeugen</button>

<script run-once="true" modify="false">
(function(){
  const btn = document.getElementById('btn-@0');
  if (!btn) return;

  const apply = () => {
    const c = (window.__neutralAutoColor ? window.__neutralAutoColor() : '#000');
    btn.style.color = c;
    // optional, aber meist sinnvoll (passt zum Text):
    btn.style.borderColor = c;
  };

  apply();

  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', apply);
    else if (mq && typeof mq.addListener === 'function') mq.addListener(apply);
  } catch (e) {}
})();
</script>


<!-- class="check-only" data-solution-button="off"-->
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


@ErzeugePunktGraph: @ErzeugePunktGraph_(@uid,@0)

@ErzeugePunktGraph_
<button id="btnG-@0" class="lia-btn" onclick="window.ensurePointFromSpec('@1')">Punkt erzeugen</button>

<script run-once="true" modify="false">
(function(){
  const btn = document.getElementById('btnG-@0');
  if (!btn) return;

  const apply = () => {
    const c = (window.__neutralAutoColor ? window.__neutralAutoColor() : '#000');
    btn.style.color = c;
    btn.style.borderColor = c;
  };

  apply();

  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', apply);
    else if (mq && typeof mq.addListener === 'function') mq.addListener(apply);
  } catch (e) {}
})();
</script>


<!-- class="check-only" data-solution-button="off"-->
[[ 0 ]]
<script modify="false">
  // @1 = "boardId;Name;targetKey;eps"
  const spec  = '@1';
  const parts = String(spec).split(';').map(s => String(s).trim());

  const boardId = parts[0] || '';
  const name    = parts[1] || '';
  const key     = parts[2] || '';

  let eps = parseFloat(String(parts[3] || '').replace(',', '.'));
  if (Number.isNaN(eps)) eps = 0.15;

  const ok = window.isPointOnTargetFunction(boardId, name, key, eps);
  ok
</script>
@end




@AutoPunkteGraph: @AutoPunkteGraph_(@uid,@0)

@AutoPunkteGraph_
<div>
  <button id="autoAdd-@0" class="lia-btn" onclick="window.addAutoPointFromSpec('@1','@0')">Punkt hinzufügen</button>
  <button id="autoChk-@0" class="lia-btn" onclick="window.checkAutoPointsFromSpec('@1','@0')">Prüfen</button>
  <span id="autoMsg-@0" style="margin-left: 12px;"></span>
</div>

<script run-once="true" modify="false">
(function(){
  const btnAdd = document.getElementById('autoAdd-@0');
  const btnChk = document.getElementById('autoChk-@0');

  const apply = () => {
    const c = (window.__neutralAutoColor ? window.__neutralAutoColor() : '#000');

    [btnAdd, btnChk].forEach(b => {
      if (!b) return;
      b.style.color = c;
      b.style.borderColor = c;
    });

    // ganz wichtig: bereits erzeugte, neutrale Labels anpassen (nicht grün/rot!)
    if (window.__recolorNeutralAutoLabels) window.__recolorNeutralAutoLabels();
  };

  apply();

  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', apply);
    else if (mq && typeof mq.addListener === 'function') mq.addListener(apply);
  } catch (e) {}
})();
</script>

@end


-->


# Koordinatensysteme - Aufgabe 1 - Punkte



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
board = JXG.JSXGraph.initBoard(jxgbox, {
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



// Beispiel-Zielkurve: y = 0.25*x + 2
const f1 = (x) => 0.25*x + 2;

ROOT.__targets = ROOT.__targets || {};
ROOT.__targets['Aufgabe1'] = ROOT.__targets['Aufgabe1'] || {};
ROOT.__targets['Aufgabe1']['graph1'] = f1;

// Ziel registrieren
window.setTargetFunction('Aufgabe1', 'graph1', f1);


window.__boards = window.__boards || {};
window.__boards['Aufgabe1'] = board;


```

</div>


<section class="flex-container">

<div class="flex-child">

Ziehe Punkte auf den Graphen der Funktion $f(x) = \dfrac{1}{4}x+2$.

@AutoPunkteGraph(Aufgabe1;graph1;0.03)

</div>

</section>








# Koordinatensysteme - Aufgabe 2 - Punkte und Graphen







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
// Board HIER DIE KOORDINATEN

board = JXG.JSXGraph.initBoard(jxgbox, {
  axis: true,
  showNavigation: true,
  showCopyright: false,
  boundingbox: [-1, 5, 10, -1],
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
ROOT.__boards['Aufgabe2'] = board;

// Pending Points nachziehen (falls vorher geklickt)
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs || [];
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs.filter(spec => {
  const parts = String(spec).split(';').map(s => String(s).trim());
  const bid = parts[0], name = parts[1];
  if (bid === 'Aufgabe2' && name) {
    // ensurePoint liegt im ROOT? -> über ROOT.window? meistens im gleichen Top-Level verfügbar.
    // Sicher: direkt im ROOT aufrufen, falls vorhanden.
    if (ROOT.ensurePoint) ROOT.ensurePoint(bid, name);
    else if (window.ensurePoint) window.ensurePoint(bid, name);
    return false;
  }
  return true;
});


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


// Beispiel-Zielkurve: y = 0.5*x - 1
const f1 = (x) => 0.5*x - 1;
const f2 = x => 0.5*x + 1;
const f3 = x => 2*x - 3;

ROOT.__targets = ROOT.__targets || {};
ROOT.__targets['Aufgabe2'] = ROOT.__targets['Aufgabe2'] || {};
ROOT.__targets['Aufgabe2']['graph1'] = f1;
ROOT.__targets['Aufgabe2']['graph2'] = f2;
ROOT.__targets['Aufgabe2']['graph3'] = f3;

// Ziel registrieren
window.setTargetFunction('Aufgabe2', 'graph1', f1);
window.setTargetFunction('Aufgabe2', 'graph2', f2);
window.setTargetFunction('Aufgabe2', 'graph3', f3);




window.__boards = window.__boards || {};
window.__boards['Aufgabe2'] = board;


```

</div>




<section class="flex-container">

<div class="flex-child">

Ziehe den Punkt $Q$ irgendwo auf den Graphen der Funktion $f(x)=\dfrac{1}{2} x - 1$

@ErzeugePunktGraph(Aufgabe2;Q;graph1;0.03)

</div>

<div class="flex-child">

Ziehe den Punkt $Q$ irgendwo auf den Graphen der Funktion $f(x)=\dfrac{1}{2} x + 1$

@ErzeugePunktGraph(Aufgabe2;A;graph2;0.03)

</div>

<div class="flex-child">

Ziehe den Punkt $Q$ irgendwo auf den Graphen der Funktion $f(x)=2 x - 3$

@ErzeugePunktGraph(Aufgabe2;B;graph3;0.03)

</div>

</section>




# Koordinatensysteme - Aufgabe 3 - Punkte abfragen





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

board = JXG.JSXGraph.initBoard(jxgbox, {
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
ROOT.__boards['Aufgabe3'] = board;

// Pending Points nachziehen (falls vorher geklickt)
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs || [];
ROOT.__pendingPointSpecs = ROOT.__pendingPointSpecs.filter(spec => {
  const parts = String(spec).split(';').map(s => String(s).trim());
  const bid = parts[0], name = parts[1];
  if (bid === 'Aufgabe3' && name) {
    // ensurePoint liegt im ROOT? -> über ROOT.window? meistens im gleichen Top-Level verfügbar.
    // Sicher: direkt im ROOT aufrufen, falls vorhanden.
    if (ROOT.ensurePoint) ROOT.ensurePoint(bid, name);
    else if (window.ensurePoint) window.ensurePoint(bid, name);
    return false;
  }
  return true;
});


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



window.__boards = window.__boards || {};
window.__boards['Aufgabe3'] = board;


```

</div>




<section class="flex-container">


<section class="flex-container">

<div class="flex-child">

Ziehe den Punkt $P$ auf die Koordinaten $(2|3)$.

@ErzeugePunkt(Aufgabe3;P;2;3)

</div>



<div class="flex-child">

Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(Aufgabe3;A;1;4)

</div>

<div class="flex-child">

Ziehe den Punkt $B$ auf die Koordinaten $(6|2)$.

@ErzeugePunkt(Aufgabe3;B;6;2)

</div>

<div class="flex-child">

Ziehe den Punkt $C$ auf die Koordinaten $(3|1)$.

@ErzeugePunkt(Aufgabe3;C;3;1)

</div>

<div class="flex-child">

Ziehe den Punkt $D$ auf die Koordinaten $(0|4)$.

@ErzeugePunkt(Aufgabe3;D;0;4)

</div>

<div class="flex-child">

Ziehe den Punkt $E$ auf die Koordinaten $(6|4)$.

@ErzeugePunkt(Aufgabe3;E;6;4)

</div>

</section>


</section>
