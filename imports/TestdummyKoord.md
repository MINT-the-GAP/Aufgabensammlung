<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: JSXGraph Board-Template (Design-Preset) — initBoard() + Theme/Grid Sync + Adaptive Ticks/Grid (import-sicher)


import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md



@style
:root{
  /* optional: wenn gesetzt, wird das für Grid bevorzugt */
  --grid-color: ;
}

/* Wrapper für max Breite (optional nutzen) */
.jxs-wrap{
  max-width: 1000px;
}

/* JSXGraph Container: transparent + Rahmen (Basis; Farbe via JS nachgezogen) */
.jxgbox{
  background: transparent !important;
  border-radius: 8px;
  box-sizing: border-box;
}

/* Navigation transparent (Farbe in @media) */
.jxgbox .JXG_navigation,
.JXG_navigation{
  background: transparent !important;
}

/* LIGHTMODE */
@media (prefers-color-scheme: light){
  .jxgbox .JXG_navigation,
  .JXG_navigation{ color: #000 !important; }

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

  .jxgbox .JXG_navigation svg,
  .jxgbox .JXG_navigation svg *,
  .JXG_navigation svg,
  .JXG_navigation svg *{
    fill: #000 !important;
    stroke: #000 !important;
  }

  .jxgbox .JXG_navigation img,
  .JXG_navigation img{
    filter: none !important;
  }
}

/* DARKMODE */
@media (prefers-color-scheme: dark){
  .jxgbox .JXG_navigation,
  .JXG_navigation{ color: #fff !important; }

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

  .jxgbox .JXG_navigation svg,
  .jxgbox .JXG_navigation svg *,
  .JXG_navigation svg,
  .JXG_navigation svg *{
    fill: #fff !important;
    stroke: #fff !important;
  }

  .jxgbox .JXG_navigation img,
  .JXG_navigation img{
    filter: invert(1) !important;
  }
}
@end


@onload
(function(){
  // =========================================================
  // Root/Content (iframe-safe)
  // =========================================================
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();

  // =========================================================
  // Registry (import-safe)
  // =========================================================
  const KEY = "__LIA_JXS_BOARD_TEMPLATE_V1__";
  ROOT[KEY] = ROOT[KEY] || { api: null };
  if (ROOT[KEY].api) {
    // API schon installiert: in diesem Dokument sichtbar machen
    try { window.__JXS = ROOT[KEY].api; } catch(e){}
    return;
  }

  // =========================================================
  // Helpers
  // =========================================================
  const api = {};
  ROOT[KEY].api = api;
  try { ROOT.__JXS = api; } catch(e){}
  try { window.__JXS = api; } catch(e){}

  api.boards = ROOT.__boards || (ROOT.__boards = {});
  api.timers = new WeakMap();   // board -> {gridTimer, themeTimer}
  api.grids  = new WeakMap();   // board -> gridObject (für rebuild)

  function isConnected(board){
    try { return !!(board && board.containerObj && board.containerObj.isConnected); }
    catch(e){ return true; }
  }

  // Lia Akzentfarbe: 1) --grid-color 2) .lia-btn bg/border/color 3) fallback
  api.readAccent = function(fallback = "#0b5fff"){
    // 1) im aktuellen Dokument
    try {
      const cs0 = getComputedStyle(document.documentElement);
      const v0 = cs0.getPropertyValue("--grid-color").trim();
      if (v0) return v0;
    } catch(e){}

    // 2) aus .lia-btn im aktuellen Dokument
    try {
      const btn = document.querySelector(".lia-btn");
      if (btn) {
        const cs = getComputedStyle(btn);
        const bg = cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)" ? cs.backgroundColor : "";
        if (bg) return bg;
        const br = cs.borderTopColor && cs.borderTopColor !== "rgba(0, 0, 0, 0)" ? cs.borderTopColor : "";
        if (br) return br;
        if (cs.color) return cs.color;
      }
    } catch(e){}

    // 3) parent versuchen
    try {
      if (window.parent && window.parent.document) {
        const docP = window.parent.document;
        const winP = window.parent;
        const csP0 = winP.getComputedStyle(docP.documentElement);
        const vP0 = csP0.getPropertyValue("--grid-color").trim();
        if (vP0) return vP0;

        const btnP = docP.querySelector(".lia-btn");
        if (btnP) {
          const cs = winP.getComputedStyle(btnP);
          const bg = cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)" ? cs.backgroundColor : "";
          if (bg) return bg;
          const br = cs.borderTopColor && cs.borderTopColor !== "rgba(0, 0, 0, 0)" ? cs.borderTopColor : "";
          if (br) return br;
          if (cs.color) return cs.color;
        }
      }
    } catch(e){}

    return fallback;
  };

  api.isDarkTheme = function(){
    try {
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
      const el  = doc.body || doc.documentElement;
      const bg  = win.getComputedStyle(el).backgroundColor || "";
      const m   = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (!m) return false;
      const r = parseInt(m[1],10), g = parseInt(m[2],10), b = parseInt(m[3],10);
      const lum = 0.2126*r + 0.7152*g + 0.0722*b;
      return lum < 128;
    } catch(e){ return false; }
  };

  api.neutral = function(){
    return api.isDarkTheme() ? "#fff" : "#000";
  };

  // Grid einfärben (existierende Objekte)
  api.applyGridColor = function(board, color){
    if (!board || !color) return;

    // Optionen (für spätere Builds)
    try {
      if (board.options && board.options.grid) {
        if (board.options.grid.major) board.options.grid.major.strokeColor = color;
        if (board.options.grid.minor) board.options.grid.minor.strokeColor = color;
      }
    } catch(e){}

    // aktives Grid-Objekt (falls von uns gebaut)
    try {
      const g = api.grids.get(board);
      if (g && typeof g.setAttribute === "function") {
        g.setAttribute({ strokeColor: color });
      }
    } catch(e){}

    // fallback: board.grids
    try {
      if (board.grids && board.grids.length) {
        board.grids.forEach(g => g && g.setAttribute && g.setAttribute({ strokeColor: color }));
      }
    } catch(e){}

    try {
      if (typeof board.fullUpdate === "function") board.fullUpdate();
      else board.update();
    } catch(e){}
  };

  // Achsen/Ticklabels einfärben + Rahmen
  api.applyAxisAndFrame = function(board){
    if (!board) return;
    const col = api.neutral();

    try {
      if (board.containerObj) {
        board.containerObj.style.border = "2px solid " + col;
        board.containerObj.style.borderRadius = "8px";
        board.containerObj.style.background = "transparent";
        board.containerObj.style.boxSizing = "border-box";
      }
    } catch(e){}

    // Defaults für neu entstehende Ticklabels
    try {
      board.options = board.options || {};
      board.options.defaultAxes = board.options.defaultAxes || {};
      ["x","y"].forEach(ax => {
        board.options.defaultAxes[ax] = board.options.defaultAxes[ax] || {};
        board.options.defaultAxes[ax].ticks = board.options.defaultAxes[ax].ticks || {};
        board.options.defaultAxes[ax].ticks.label = board.options.defaultAxes[ax].ticks.label || {};

        board.options.defaultAxes[ax].strokeColor = col;
        board.options.defaultAxes[ax].ticks.strokeColor = col;
        board.options.defaultAxes[ax].ticks.label.strokeColor = col;
        board.options.defaultAxes[ax].ticks.label.fillColor   = col;
      });
    } catch(e){}

    const paint = (obj) => {
      if (!obj || typeof obj.setAttribute !== "function") return;
      try {
        obj.setAttribute({
          strokeColor: col,
          highlightStrokeColor: col,
          fillColor: col,
          highlightFillColor: col
        });
      } catch(e){}
    };

    try {
      if (board.defaultAxes) {
        if (board.defaultAxes.x && board.defaultAxes.x.label) paint(board.defaultAxes.x.label);
        if (board.defaultAxes.y && board.defaultAxes.y.label) paint(board.defaultAxes.y.label);

        const paintTicks = (axis) => {
          if (!axis) return;
          try { axis.setAttribute({ strokeColor: col, highlightStrokeColor: col }); } catch(e){}

          const t = axis.defaultTicks;
          if (t) {
            paint(t);
            try {
              if (t.labels && t.labels.length) t.labels.forEach(paint);
              if (t.visProp && t.visProp.label) {
                t.visProp.label.strokeColor = col;
                t.visProp.label.fillColor   = col;
              }
            } catch(e){}
          }

          if (axis.ticks && axis.ticks.length) {
            axis.ticks.forEach(tt => {
              paint(tt);
              try {
                if (tt.labels && tt.labels.length) tt.labels.forEach(paint);
                if (tt.visProp && tt.visProp.label) {
                  tt.visProp.label.strokeColor = col;
                  tt.visProp.label.fillColor   = col;
                }
              } catch(e){}
            });
          }
        };

        paintTicks(board.defaultAxes.x);
        paintTicks(board.defaultAxes.y);
      }
    } catch(e){}

    try {
      if (typeof board.fullUpdate === "function") board.fullUpdate();
      else board.update();
    } catch(e){}
  };

  // Adaptive Ticks/Grid (1–2–5–10) + Rebuild Grid (versionsstabil)
  api.enableAdaptiveAxesAndGrid = function(board){
    if (!board) return;

    function niceStep(raw){
      if (!isFinite(raw) || raw <= 0) return 1;
      const exp = Math.floor(Math.log10(raw));
      const f = raw / Math.pow(10, exp);
      let nf;
      if (f <= 1) nf = 1;
      else if (f <= 2) nf = 2;
      else if (f <= 5) nf = 5;
      else nf = 10;
      return nf * Math.pow(10, exp);
    }

    function pxPerUnitX(){
      const bb = board.getBoundingBox(); // [xmin, ymax, xmax, ymin]
      const w = board.containerObj ? board.containerObj.clientWidth : (board.canvasWidth || 600);
      return w / Math.max(1e-9, (bb[2] - bb[0]));
    }
    function pxPerUnitY(){
      const bb = board.getBoundingBox();
      const h = board.containerObj ? board.containerObj.clientHeight : (board.canvasHeight || 400);
      return h / Math.max(1e-9, (bb[1] - bb[3]));
    }

    function setAxisTicks(axisKey, step, minorTicks, fontSize, drawLabels){
      try {
        const ax = board.defaultAxes && board.defaultAxes[axisKey];
        if (!ax) return;

        board.options = board.options || {};
        board.options.defaultAxes = board.options.defaultAxes || {};
        board.options.defaultAxes[axisKey] = board.options.defaultAxes[axisKey] || {};
        board.options.defaultAxes[axisKey].ticks = board.options.defaultAxes[axisKey].ticks || {};
        board.options.defaultAxes[axisKey].ticks.label = board.options.defaultAxes[axisKey].ticks.label || {};

        board.options.defaultAxes[axisKey].ticks.ticksDistance = step;
        board.options.defaultAxes[axisKey].ticks.minorTicks    = minorTicks;
        board.options.defaultAxes[axisKey].ticks.drawLabels    = !!drawLabels;
        board.options.defaultAxes[axisKey].ticks.label.fontSize = fontSize;

        const t = ax.defaultTicks;
        if (t && typeof t.setAttribute === "function") {
          t.setAttribute({
            ticksDistance: step,
            minorTicks: minorTicks,
            drawLabels: !!drawLabels,
            label: { fontSize: fontSize }
          });
        }
      } catch(e){}
    }

    function rebuildGrid(stepX, stepY, minorX, minorY){
      const color = api.readAccent("#0b5fff");

      // altes Grid entfernen (wenn von uns)
      try {
        const gOld = api.grids.get(board);
        if (gOld) { try { board.removeObject(gOld); } catch(e){} }
      } catch(e){}

      // neues Grid
      let gNew = null;
      try {
        gNew = board.create("grid", [], {
          majorStep: [stepX, stepY],
          minorElements: [minorX, minorY],
          includeBoundaries: true,
          forceSquare: true,
          major: { face:"line", strokeColor: color, strokeWidth: 1.5, dash: 0, drawZero: true },
          minor: { face:"line", strokeColor: color, strokeWidth: 1.0, dash: 1, drawZero: false }
        });
      } catch(e){}

      if (gNew) api.grids.set(board, gNew);
      api.applyGridColor(board, color);
      api.applyAxisAndFrame(board);
    }

    let lastSig = "";
    function computeAndApply(){
      const ppuX = pxPerUnitX();
      const ppuY = pxPerUnitY();
      const targetPx = 90;

      const stepX = niceStep(targetPx / Math.max(1e-9, ppuX));
      const stepY = niceStep(targetPx / Math.max(1e-9, ppuY));

      const minorX = (ppuX < 25 || stepX >= 10) ? 0 : (stepX >= 5 ? 4 : 9);
      const minorY = (ppuY < 25 || stepY >= 10) ? 0 : (stepY >= 5 ? 4 : 9);

      let font = 18;
      let draw = true;
      const ppuMin = Math.min(ppuX, ppuY);
      if (ppuMin < 35) font = 14;
      if (ppuMin < 25) font = 12;
      if (ppuMin < 16) draw = false;

      const sig = [stepX,stepY,minorX,minorY,font,draw].join("|");
      if (sig === lastSig) return;
      lastSig = sig;

      setAxisTicks("x", stepX, minorX, font, draw);
      setAxisTicks("y", stepY, minorY, font, draw);
      rebuildGrid(stepX, stepY, minorX, minorY);

      try {
        if (typeof board.fullUpdate === "function") board.fullUpdate();
        else board.update();
      } catch(e){}
    }

    let raf = 0;
    function schedule(){
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; computeAndApply(); });
    }

    try { board.on("boundingbox", schedule); } catch(e){}
    try { board.on("resize", schedule); } catch(e){}

    computeAndApply();
  };

  // Watcher: Grid-Farbe & Theme regelmäßig nachziehen (und bei DOM-Disconnect stoppen)
  api.enableWatchers = function(board, gridIntervalMs = 400, themeIntervalMs = 300){
    if (!board) return;

    const timers = api.timers.get(board) || {};

    // Grid watcher
    if (!timers.gridTimer) {
      let last = "";
      timers.gridTimer = setInterval(() => {
        if (!isConnected(board)) { clearInterval(timers.gridTimer); timers.gridTimer = null; return; }
        const c = api.readAccent("#0b5fff");
        if (c && c !== last) { last = c; api.applyGridColor(board, c); }
      }, gridIntervalMs);
    }

    // Theme watcher (hilft bei Lia-Theme-Umschaltungen/Slides)
    if (!timers.themeTimer) {
      let lastDark = null;
      timers.themeTimer = setInterval(() => {
        if (!isConnected(board)) { clearInterval(timers.themeTimer); timers.themeTimer = null; return; }
        const nowDark = api.isDarkTheme();
        if (nowDark === lastDark) return;
        lastDark = nowDark;
        api.applyAxisAndFrame(board);
      }, themeIntervalMs);
    }

    api.timers.set(board, timers);

    // matchMedia (sofortiger Wechsel, falls verfügbar)
    try {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => api.applyAxisAndFrame(board);
      if (mq && typeof mq.addEventListener === "function") mq.addEventListener("change", handler);
      else if (mq && typeof mq.addListener === "function") mq.addListener(handler);
    } catch(e){}
  };

  // =========================================================
  // Default-Optionen (dein Look)
  // =========================================================
  function baseOptions(btnColor, axisLabels){
    const xName = (axisLabels && axisLabels.x) ? axisLabels.x : "\\(x\\)";
    const yName = (axisLabels && axisLabels.y) ? axisLabels.y : "\\(y\\)";

    return {
      axis: true,
      showNavigation: true,
      showCopyright: false,
      keepaspectratio: true,

      zoom: { enabled: true, wheel: true, needShift: false, factorX: 1.15, factorY: 1.15 },
      pan:  { enabled: true, needShift: false, needTwoFingers: false },

      defaultAxes: {
        x: {
          strokeColor: "black",
          strokeWidth: 2.5,
          name: xName,
          withLabel: true,
          label: { position: "rt", offset: [-50, -25], fontSize: 18 },
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
          strokeColor: "black",
          strokeWidth: 2.5,
          name: yName,
          withLabel: true,
          label: { position: "rt", offset: [15, 0], fontSize: 18 },
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
        majorStep: "auto",
        minorElements: "auto",
        includeBoundaries: true,
        forceSquare: true,
        major: { face:"line", strokeColor: btnColor, strokeWidth: 1.5, dash: 0, drawZero: true },
        minor: { face:"line", strokeColor: btnColor, strokeWidth: 1.0, dash: 1, drawZero: false }
      }
    };
  }

  function deepMerge(a, b){
    if (!b) return a;
    const out = Array.isArray(a) ? a.slice() : Object.assign({}, a);
    Object.keys(b).forEach(k => {
      const bv = b[k];
      const av = out[k];
      const bothObj = av && bv && typeof av === "object" && typeof bv === "object" && !Array.isArray(av) && !Array.isArray(bv);
      out[k] = bothObj ? deepMerge(av, bv) : bv;
    });
    return out;
  }

  // =========================================================
  // Public API: initBoard
  // =========================================================
  api.initBoard = function(jxgbox, boardId, userOpts){
    if (!boardId) boardId = "board_" + Math.random().toString(36).slice(2);
    userOpts = userOpts || {};

    // MathJax in JSXGraph aktivieren (einmal)
    try { if (typeof JXG !== "undefined") JXG.Options.text.useMathJax = true; } catch(e){}

    const btnColor = api.readAccent("#0b5fff");
    const axisLabels = userOpts.axisLabels || null;

    // boundingbox MUSS kommen (default aus userOpts oder fallback)
    const bb = userOpts.boundingbox || [-1, 5, 7, -1];

    // Template defaults + user overrides (ohne axisLabels als Option an initBoard durchzureichen)
    const defaults = baseOptions(btnColor, axisLabels);
    const merged = deepMerge(defaults, userOpts);
    merged.boundingbox = bb;

    // axisLabels aus merged entfernen, damit JSXGraph nicht meckert
    try { delete merged.axisLabels; } catch(e){}

    const board = JXG.JSXGraph.initBoard(jxgbox, merged);

    // registrieren
    api.boards[boardId] = board;

    // initiale Theme/Frame/Colors
    api.applyAxisAndFrame(board);
    api.applyGridColor(board, btnColor);

    // adaptive ticks/grid + watcher
    api.enableAdaptiveAxesAndGrid(board);
    api.enableWatchers(board);

    return board;
  };

  // Optional: target store (falls du das nutzen willst)
  ROOT.__targets = ROOT.__targets || {};
  api.setTarget = function(boardId, key, fn){
    ROOT.__targets[boardId] = ROOT.__targets[boardId] || {};
    ROOT.__targets[boardId][key] = fn;
  };
})();
@end
-->




















# Koordinatensysteme 





``` javascript @JSX.Graph
const JXS = window.__JXS || (window.parent && window.parent.__JXS);
const id  = 'Aufgabe1';

board = JXS.initBoard(jxgbox, id, {
  boundingbox: [-1, 5, 7, -1],
  axisLabels: {
    x: '\\(x\\,\\text{in}\\,[m]\\)',
    y: '\\(y\\,\\text{in}\\,[m]\\)'
  }
});

// dein Inhalt (plotten, punkte, etc.)
const f1 = (x) => 0.25*x + 2;
// optionaler Store:
JXS.setTarget(id, 'graph1', f1);

```






















