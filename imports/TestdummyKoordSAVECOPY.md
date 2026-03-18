<!--
version: 0.0.1
language: de
narrator: Deutsch Female







import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md










@Koordinatensystem
<div>

``` javascript @JSX.Graph


(function () {
  JXG.Options.text.useMathJax = false;

  function splitTopLevel(str) {
    const out = [];
    let cur = '';
    let quote = '';
    let esc = false;

    for (let i = 0; i < str.length; i++) {
      const ch = str[i];

      if (esc) {
        cur += ch;
        esc = false;
        continue;
      }

      if (ch === '\\') {
        cur += ch;
        esc = true;
        continue;
      }

      if (quote) {
        cur += ch;
        if (ch === quote) quote = '';
        continue;
      }

      if (ch === '"' || ch === "'" || ch === '`') {
        cur += ch;
        quote = ch;
        continue;
      }

      if (ch === ';' || ch === ',') {
        if (cur.trim()) out.push(cur.trim());
        cur = '';
        continue;
      }

      cur += ch;
    }

    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  function unquote(v) {
    v = String(v || '').trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'")) ||
      (v.startsWith('`') && v.endsWith('`'))
    ) {
      return v.slice(1, -1);
    }
    return v;
  }

  function toNum(v, fallback) {
    const n = parseFloat(String(v).replace(',', '.'));
    return Number.isFinite(n) ? n : fallback;
  }

  function parseSpec(spec) {
    const raw = unquote(String(spec || '').trim());
    const obj = {};

    splitTopLevel(raw).forEach(part => {
      const eq = part.indexOf('=');
      if (eq < 0) return;

      const key = part.slice(0, eq).trim().toLowerCase();
      const val = unquote(part.slice(eq + 1).trim());
      obj[key] = val;
    });

    const cfg = {
      xmin:  toNum(obj.xmin, -4),
      xmax:  toNum(obj.xmax,  4),
      ymin:  toNum(obj.ymin, -3),
      ymax:  toNum(obj.ymax,  3),
      width: toNum(obj.width, NaN),
      id:    obj.id != null ? obj.id : 'A1'
    };

    if (!(cfg.xmax > cfg.xmin)) cfg.xmax = cfg.xmin + 1;
    if (!(cfg.ymax > cfg.ymin)) cfg.ymax = cfg.ymin + 1;
    if (!Number.isFinite(cfg.width) || cfg.width <= 0) cfg.width = null;

    return cfg;
  }

  const cfg = parseSpec(String.raw`@0`);

  const XMIN0 = cfg.xmin;
  const XMAX0 = cfg.xmax;
  const YMIN0 = cfg.ymin;
  const YMAX0 = cfg.ymax;
  const INITIAL_WIDTH = cfg.width;

  const INITIAL_BBOX = [XMIN0, YMAX0, XMAX0, YMIN0];
  const INITIAL_XSPAN = XMAX0 - XMIN0;
  const INITIAL_YSPAN = YMAX0 - YMIN0;
  const INITIAL_RATIO = INITIAL_YSPAN / INITIAL_XSPAN;

  let manualWidth = null;
  let manualHeight = null;

  function isDarkTheme() {
    try {
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
      const el  = doc.body || doc.documentElement;
      const bg  = win.getComputedStyle(el).backgroundColor;
      const m   = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (!m) return false;

      const r = parseInt(m[1], 10);
      const g = parseInt(m[2], 10);
      const b = parseInt(m[3], 10);

      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return lum < 128;
    } catch (e) {
      return false;
    }
  }

  function neutralColor() {
    return isDarkTheme() ? '#fff' : '#000';
  }

  function getGridColor(fallback = '#0b5fff') {
    try {
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;

      const btn = doc.querySelector('.lia-btn');
      if (btn) {
        const cs = win.getComputedStyle(btn);

        const bg = cs.backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)') return bg;

        const br = cs.borderTopColor;
        if (br && br !== 'rgba(0, 0, 0, 0)') return br;

        if (cs.color) return cs.color;
      }
    } catch (e) {}

    return fallback;
  }

  function applyBoardFrame(board) {
    if (!board || !board.containerObj) return;

    board.containerObj.style.border = '2px solid ' + neutralColor();
    board.containerObj.style.borderRadius = '8px';
    board.containerObj.style.boxSizing = 'border-box';
    board.containerObj.style.background = 'transparent';
    board.containerObj.style.position = 'relative';
    board.containerObj.style.display = 'block';
    board.containerObj.style.marginLeft = '0';
    board.containerObj.style.marginRight = 'auto';
    board.containerObj.style.touchAction = 'none';
  }

  function applyNavColors(board) {
    if (!board || !board.containerObj) return;

    const nav = board.containerObj.querySelector('.JXG_navigation');
    if (!nav) return;

    const col  = neutralColor();
    const dark = isDarkTheme();

    nav.style.color = col;
    nav.style.background = 'transparent';

    nav.querySelectorAll('a, button, span').forEach(el => {
      el.style.color = col;
      el.style.borderColor = col;
      el.style.background = 'transparent';
      el.style.boxShadow = 'none';
    });

    nav.querySelectorAll('svg, svg *').forEach(el => {
      el.style.fill = col;
      el.style.stroke = col;
    });

    nav.querySelectorAll('img').forEach(img => {
      img.style.filter = dark ? 'invert(1)' : 'none';
    });
  }

  function applyGridColor(board, color) {
    if (!board || !color) return;

    try {
      if (board.options && board.options.grid) {
        if (board.options.grid.major) board.options.grid.major.strokeColor = color;
        if (board.options.grid.minor) board.options.grid.minor.strokeColor = color;
      }
    } catch (e) {}

    try {
      if (board.grids && board.grids.length) {
        board.grids.forEach(g => {
          if (g && typeof g.setAttribute === 'function') {
            g.setAttribute({ strokeColor: color });
          }
        });
      }
    } catch (e) {}

    try {
      if (board.objectsList && board.objectsList.length) {
        board.objectsList.forEach(o => {
          if (!o || typeof o.setAttribute !== 'function') return;
          if (o.elType === 'grid' || (typeof JXG !== 'undefined' && o.type === JXG.OBJECT_TYPE_GRID)) {
            o.setAttribute({ strokeColor: color });
          }
        });
      }
    } catch (e) {}
  }

  function applyAxisColors(board) {
    if (!board || !board.defaultAxes) return;

    const col = neutralColor();

    ['x', 'y'].forEach(axisKey => {
      const ax = board.defaultAxes[axisKey];
      if (!ax) return;

      try {
        ax.setAttribute({
          strokeColor: col,
          highlightStrokeColor: col
        });
      } catch (e) {}

      try {
        if (ax.defaultTicks) {
          ax.defaultTicks.setAttribute({
            strokeColor: col,
            highlightStrokeColor: col,
            label: {
              strokeColor: col,
              fillColor: col
            }
          });
        }
      } catch (e) {}
    });

    try {
      if (typeof board.fullUpdate === 'function') board.fullUpdate();
      else board.update();
    } catch (e) {}
  }

  function getConstrainedAncestorWidth(el) {
    let cur = el;
    let best = Infinity;

    while (cur && cur !== document.body) {
      try {
        const r = cur.getBoundingClientRect();
        const w = Math.round(r.width);
        if (w > 0 && w < best) best = w;
      } catch (e) {}

      cur = cur.parentElement;
    }

    return Number.isFinite(best) ? best : 900;
  }

  function maxBoardWidth(board) {
    return Math.min(
      getConstrainedAncestorWidth(board.containerObj.parentElement),
      1000
    );
  }

  function maxBoardHeight() {
    return Math.min(Math.round(window.innerHeight * 0.82), 900);
  }

  function clampWidth(board, w) {
    return Math.max(260, Math.min(maxBoardWidth(board), w));
  }

  function clampHeight(h) {
    return Math.max(220, Math.min(maxBoardHeight(), h));
  }

  function roundPx(v) {
    return Math.max(1, Math.round(v));
  }

  function solveAspectFittedSize(board, preferredWidth, ratio) {
    const minW = 260;
    const minH = 220;
    const maxW = maxBoardWidth(board);
    const maxH = maxBoardHeight();

    const safeRatio = Math.max(1e-9, ratio);

    const lowerW = Math.max(minW, minH / safeRatio);
    const upperW = Math.min(maxW, maxH / safeRatio);

    let width;

    if (upperW >= lowerW) {
      width = Math.min(preferredWidth, upperW);
      if (width < lowerW) width = lowerW;
    } else {
      width = Math.min(preferredWidth, maxW, maxH / safeRatio);
      if (!(width > 0)) width = Math.min(maxW, preferredWidth, 600);
      width = Math.max(1, width);
    }

    const height = width * safeRatio;

    return {
      width: roundPx(width),
      height: roundPx(height)
    };
  }

  function computeResizeBBox(width, height) {
    const ySpan = INITIAL_XSPAN * (height / width);
    return [XMIN0, YMIN0 + ySpan, XMAX0, YMIN0];
  }

  function applyBoardSize(board, desiredWidth, desiredHeight, useInitialBBox) {
    if (!board || !board.containerObj) return null;

    const width  = clampWidth(board, desiredWidth);
    const height = clampHeight(desiredHeight);

    board.containerObj.style.width = width + 'px';
    board.containerObj.style.height = height + 'px';

    try {
      board.resizeContainer(width, height, false, true);
    } catch (e) {}

    const bb = useInitialBBox ? INITIAL_BBOX : computeResizeBBox(width, height);

    try {
      board.setBoundingBox(bb, true);
    } catch (e) {}

    try {
      board.update();
    } catch (e) {}

    return { width, height };
  }

  function fitBoardSize(board) {
    if (!board || !board.containerObj) return;

    const autoMode = (manualWidth == null || manualHeight == null);

    if (autoMode) {
      const autoWidth = Math.min(
        getConstrainedAncestorWidth(board.containerObj.parentElement),
        1000
      );

      const preferredWidth = INITIAL_WIDTH != null ? INITIAL_WIDTH : autoWidth;

      const size = solveAspectFittedSize(board, preferredWidth, INITIAL_RATIO);
      applyBoardSize(board, size.width, size.height, true);
      return;
    }

    applyBoardSize(board, manualWidth, manualHeight, false);
  }

  function styleResizeHandle(handle) {
    const col = neutralColor();

    handle.style.position = 'absolute';
    handle.style.right = '0';
    handle.style.bottom = '0';
    handle.style.left = 'auto';
    handle.style.width = '22px';
    handle.style.height = '22px';
    handle.style.cursor = 'nwse-resize';
    handle.style.zIndex = '50';
    handle.style.touchAction = 'none';
    handle.style.userSelect = 'none';
    handle.style.background = 'transparent';
    handle.style.borderRight = '2px solid ' + col;
    handle.style.borderBottom = '2px solid ' + col;
    handle.style.borderLeft = '0';
    handle.style.borderTop = '0';
    handle.style.borderBottomRightRadius = '8px';
    handle.style.borderBottomLeftRadius = '0';
    handle.style.boxSizing = 'border-box';
  }

  function ensureResizeHandle(board) {
    if (!board || !board.containerObj) return;

    let handle = board.containerObj.querySelector('.lia-jxg-resize-handle');
    if (!handle) {
      handle = document.createElement('div');
      handle.className = 'lia-jxg-resize-handle';
      board.containerObj.appendChild(handle);
    }

    styleResizeHandle(handle);

    if (handle.__bound) return;
    handle.__bound = true;

    let drag = null;

    function stopDrag() {
      drag = null;
      try { document.body.style.userSelect = ''; } catch (e) {}
    }

    handle.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();

      drag = {
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        startW: board.containerObj.clientWidth,
        startH: board.containerObj.clientHeight
      };

      try { handle.setPointerCapture(e.pointerId); } catch (err) {}
      try { document.body.style.userSelect = 'none'; } catch (err) {}
    });

    window.addEventListener('pointermove', (e) => {
      if (!drag || e.pointerId !== drag.pointerId) return;

      const dx = e.clientX - drag.startX;
      const dy = e.clientY - drag.startY;

      manualWidth  = clampWidth(board, drag.startW + dx);
      manualHeight = clampHeight(drag.startH + dy);

      applyBoardSize(board, manualWidth, manualHeight, false);
      applyBoardFrame(board);
      applyNavColors(board);
      applyGridColor(board, getGridColor('#0b5fff'));
      applyAxisColors(board);
      applyAdaptiveTicks(board);
      styleResizeHandle(handle);
    });

    window.addEventListener('pointerup', (e) => {
      if (!drag || e.pointerId !== drag.pointerId) return;
      stopDrag();
    });

    window.addEventListener('pointercancel', () => {
      stopDrag();
    });
  }

  function pxPerUnitX(board) {
    const bb = board.getBoundingBox();
    const w  = board.containerObj ? board.containerObj.clientWidth : 800;
    return w / Math.max(1e-9, (bb[2] - bb[0]));
  }

  function pxPerUnitY(board) {
    const bb = board.getBoundingBox();
    const h  = board.containerObj ? board.containerObj.clientHeight : 600;
    return h / Math.max(1e-9, (bb[1] - bb[3]));
  }

  function chooseDecadeStep(raw) {
    if (!isFinite(raw) || raw <= 0) return 1;

    const exp  = Math.floor(Math.log10(raw));
    const base = Math.pow(10, exp);
    const next = base * 10;

    return (raw / base < next / raw) ? base : next;
  }

  function chooseMinorTicks(pxPerMajor) {
    if (pxPerMajor >= 160) return 9;
    if (pxPerMajor >= 80)  return 3;
    if (pxPerMajor >= 36)  return 1;
    return 0;
  }

  let lastAdaptiveSig = '';

  function applyAdaptiveTicks(board) {
    if (!board || !board.defaultAxes) return;

    const ppuX = pxPerUnitX(board);
    const ppuY = pxPerUnitY(board);

    const targetPx = 90;

    const rawStepX = targetPx / Math.max(1e-9, ppuX);
    const rawStepY = targetPx / Math.max(1e-9, ppuY);

    const majorStepX = chooseDecadeStep(rawStepX);
    const majorStepY = chooseDecadeStep(rawStepY);

    const pxPerMajorX = majorStepX * ppuX;
    const pxPerMajorY = majorStepY * ppuY;

    const minorX = chooseMinorTicks(pxPerMajorX);
    const minorY = chooseMinorTicks(pxPerMajorY);

    let font = 18;
    if (Math.min(pxPerMajorX, pxPerMajorY) < 90) font = 16;
    if (Math.min(pxPerMajorX, pxPerMajorY) < 55) font = 14;

    const sig = [majorStepX, majorStepY, minorX, minorY, font].join('|');
    if (sig === lastAdaptiveSig) return;
    lastAdaptiveSig = sig;

    try {
      board.defaultAxes.x.setAttribute({
        ticks: {
          insertTicks: false,
          ticksDistance: majorStepX,
          minorTicks: minorX,
          label: { fontSize: font }
        }
      });

      board.defaultAxes.y.setAttribute({
        ticks: {
          insertTicks: false,
          ticksDistance: majorStepY,
          minorTicks: minorY,
          label: { fontSize: font }
        }
      });
    } catch (e) {}

    try {
      if (board.defaultAxes.x.defaultTicks) {
        board.defaultAxes.x.defaultTicks.setAttribute({
          ticksDistance: majorStepX,
          minorTicks: minorX,
          label: { fontSize: font }
        });
      }

      if (board.defaultAxes.y.defaultTicks) {
        board.defaultAxes.y.defaultTicks.setAttribute({
          ticksDistance: majorStepY,
          minorTicks: minorY,
          label: { fontSize: font }
        });
      }
    } catch (e) {}

    try {
      if (typeof board.fullUpdate === 'function') board.fullUpdate();
      else board.update();
    } catch (e) {}
  }

  const axisCol = neutralColor();
  const gridCol = getGridColor('#0b5fff');

  const board = JXG.JSXGraph.initBoard(jxgbox, {
    axis: true,
    showNavigation: true,
    showCopyright: false,
    boundingbox: INITIAL_BBOX,
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
        strokeColor: axisCol,
        strokeWidth: 2.5,
        name: '',
        withLabel: false,
        ticks: {
          insertTicks: false,
          ticksDistance: 1,
          strokeWidth: 1.75,
          minorTicks: 1,
          drawLabels: true,
          label: {
            fontSize: 18,
            strokeColor: axisCol,
            fillColor: axisCol
          }
        }
      },
      y: {
        strokeColor: axisCol,
        strokeWidth: 2.5,
        name: '',
        withLabel: false,
        ticks: {
          insertTicks: false,
          ticksDistance: 1,
          strokeWidth: 1.75,
          minorTicks: 1,
          drawLabels: true,
          label: {
            fontSize: 18,
            strokeColor: axisCol,
            fillColor: axisCol
          }
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
        strokeColor: gridCol,
        strokeWidth: 0.5,
        dash: 0,
        drawZero: true
      },
      minor: {
        face: 'line',
        strokeColor: gridCol,
        strokeWidth: 1.5,
        dash: 2,
        drawZero: false
      }
    }
  });

  window.__boards = window.__boards || {};
  window.__boards[cfg.id] = board;

  fitBoardSize(board);
  applyBoardFrame(board);
  applyNavColors(board);
  applyGridColor(board, gridCol);
  applyAxisColors(board);
  applyAdaptiveTicks(board);
  ensureResizeHandle(board);

  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      applyBoardFrame(board);
      applyNavColors(board);
      applyGridColor(board, getGridColor('#0b5fff'));
      applyAxisColors(board);
      applyAdaptiveTicks(board);
      ensureResizeHandle(board);
    };

    if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', handler);
    else if (mq && typeof mq.addListener === 'function') mq.addListener(handler);
  } catch (e) {}

  let resizeRAF = 0;
  window.addEventListener('resize', () => {
    if (resizeRAF) return;

    resizeRAF = requestAnimationFrame(() => {
      resizeRAF = 0;
      fitBoardSize(board);
      applyBoardFrame(board);
      applyNavColors(board);
      applyGridColor(board, getGridColor('#0b5fff'));
      applyAxisColors(board);
      applyAdaptiveTicks(board);
      ensureResizeHandle(board);
    });
  });

  let bboxRAF = 0;
  board.on('boundingbox', () => {
    if (bboxRAF) return;

    bboxRAF = requestAnimationFrame(() => {
      bboxRAF = 0;
      applyAdaptiveTicks(board);
      applyAxisColors(board);
      ensureResizeHandle(board);
    });
  });

  let lastGridColor = '';
  setInterval(() => {
    const c = getGridColor('#0b5fff');
    if (!c || c === lastGridColor) return;
    lastGridColor = c;
    applyGridColor(board, c);
  }, 400);
})();


```

</div>

@end




























































@ErzeugePunkt: @ErzeugePunkt_(@uid,@0)

@ErzeugePunkt_
<style>
  #point-ui-@0{
    display:inline-flex;
    align-items:flex-start;
    gap:.6rem;
    flex-wrap:nowrap;
  }

  #point-task-@0,
  #point-check-@0{
    display:inline-flex;
    align-items:flex-start;
    align-self:flex-start;
    margin:0;
    padding:0;
  }

  #point-check-@0 > *{
    margin:0;
  }

  #btn-@0{
    vertical-align:top;
  }
</style>

<div id="point-ui-@0">
  <div id="point-task-@0" class="lia-point-task">
    <button
      id="btn-@0"
      class="lia-btn"
      type="button"
      data-spec="@1"
      onclick="window.ensurePointFromSpec(this.dataset.spec)"
    >
      Punkt erzeugen
    </button>
  </div>

  <div id="point-check-@0">
    <!-- data-solution-button="off" -->
    [[!]]
    <script modify="false">
      function unquote(v) {
        v = String(v || '').trim();
        if (
          (v.startsWith('"') && v.endsWith('"')) ||
          (v.startsWith("'") && v.endsWith("'")) ||
          (v.startsWith('`') && v.endsWith('`'))
        ) {
          return v.slice(1, -1);
        }
        return v;
      }

      const spec = unquote('@1');
      const parts = String(spec).split(';').map(s => s.trim());

      const boardId = parts[0] || '';
      const name    = parts[1] || '';
      const tx      = parseFloat((parts[2] || '').replace(',', '.'));
      const ty      = parseFloat((parts[3] || '').replace(',', '.'));

      const pt = window.__points && window.__points[boardId] && window.__points[boardId][name];
      const eps = 0.05;

      !!pt
        && !Number.isNaN(tx)
        && !Number.isNaN(ty)
        && Math.abs(pt.X() - tx) < eps
        && Math.abs(pt.Y() - ty) < eps;
    </script>
  </div>
</div>

<script run-once="true" modify="false">
(function(){
  if (window.__erzeugePunktReady) return;
  window.__erzeugePunktReady = true;

  function themeDoc() {
    return (window.parent && window.parent.document) ? window.parent.document : document;
  }

  function themeWin() {
    return (window.parent && window.parent.getComputedStyle) ? window.parent : window;
  }

  function currentNeutralColor() {
    try {
      const doc = themeDoc();
      const win = themeWin();
      const el  = doc.body || doc.documentElement;
      const bg  = win.getComputedStyle(el).backgroundColor;
      const m   = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (!m) return '#000';

      const r = parseInt(m[1], 10);
      const g = parseInt(m[2], 10);
      const b = parseInt(m[3], 10);
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      return lum < 128 ? '#fff' : '#000';
    } catch (e) {
      return '#000';
    }
  }

  function themeSignature() {
    try {
      const doc = themeDoc();
      const win = themeWin();
      const root = doc.documentElement || doc.body;
      const body = doc.body || doc.documentElement;
      const rootCls = root ? root.className : '';
      const bodyCls = body ? body.className : '';
      const bg = win.getComputedStyle(body).backgroundColor;
      const fg = win.getComputedStyle(body).color;
      return [String(rootCls), String(bodyCls), String(bg), String(fg)].join('|');
    } catch (e) {
      return String(Date.now());
    }
  }

  window.__points = window.__points || {};
  window.__pointNeutralColor = currentNeutralColor;

  if (!window.__liaThemeSync) {
    const listeners = new Set();
    let lastSig = themeSignature();

    function notify() {
      listeners.forEach(fn => {
        try { fn(); } catch (e) {}
      });
    }

    function check() {
      const sig = themeSignature();
      if (sig !== lastSig) {
        lastSig = sig;
        notify();
      }
    }

    window.__liaThemeSync = {
      listeners,
      check
    };

    try {
      const doc = themeDoc();
      const obs = new MutationObserver(check);

      if (doc.documentElement) {
        obs.observe(doc.documentElement, {
          attributes: true,
          attributeFilter: ['class', 'style', 'data-theme']
        });
      }

      if (doc.body) {
        obs.observe(doc.body, {
          attributes: true,
          attributeFilter: ['class', 'style', 'data-theme']
        });
      }
    } catch (e) {}

    try {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', check);
      else if (mq && typeof mq.addListener === 'function') mq.addListener(check);
    } catch (e) {}

    setInterval(check, 300);
  }

  window.__registerLiaThemeListener = function(fn) {
    if (!window.__liaThemeSync || !fn) return;
    window.__liaThemeSync.listeners.add(fn);
    try { fn(); } catch (e) {}
  };

  function unquote(v) {
    v = String(v || '').trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'")) ||
      (v.startsWith('`') && v.endsWith('`'))
    ) {
      return v.slice(1, -1);
    }
    return v;
  }

  function splitSpec(spec) {
    return unquote(spec)
      .split(';')
      .map(s => s.trim());
  }

  function stylePointLabel(pt) {
    if (!pt || typeof pt.setAttribute !== 'function') return;

    const c = currentNeutralColor();

    try {
      pt.setAttribute({
        label: {
          strokeColor: c,
          fillColor: c,
          fontSize: 24
        }
      });
    } catch (e) {}

    try {
      if (pt.label && typeof pt.label.setAttribute === 'function') {
        pt.label.setAttribute({
          strokeColor: c,
          fillColor: c,
          fontSize: 24
        });
      }
    } catch (e) {}
  }

  function refreshAllPointLabels() {
    try {
      const boards = window.__points || {};
      Object.keys(boards).forEach(boardId => {
        const entries = boards[boardId] || {};
        Object.keys(entries).forEach(name => {
          stylePointLabel(entries[name]);
        });
      });
    } catch (e) {}
  }

  window.ensurePointFromSpec = function(spec) {
    const parts = splitSpec(spec);

    const boardId = parts[0] || '';
    const name    = parts[1] || 'A';

    const board = window.__boards && window.__boards[boardId];
    if (!board || !name) return false;

    window.__points[boardId] = window.__points[boardId] || {};

    if (window.__points[boardId][name]) {
      stylePointLabel(window.__points[boardId][name]);
      try { board.update(); } catch (e) {}
      return true;
    }

    const x0 = Math.random();
    const y0 = Math.random();

    try {
      const pt = board.create('point', [x0, y0], {
        name: name,
        fixed: false,
        withLabel: true,
        showInfobox: false,
        strokeColor: 'orange',
        fillColor: 'orange',
        highlightStrokeColor: 'orange',
        highlightFillColor: 'orange',
        face: 'x',
        size: 7,
        label: {
          strokeColor: currentNeutralColor(),
          fillColor: currentNeutralColor(),
          fontSize: 24
        }
      });

      window.__points[boardId][name] = pt;
      stylePointLabel(pt);
      board.update();
      return true;
    } catch (e) {
      return false;
    }
  };

  window.__registerLiaThemeListener(refreshAllPointLabels);
})();
</script>
<script modify="false">
(function(){
  const btn = document.getElementById('btn-@0');
  const checkRoot = document.getElementById('point-check-@0');
  const uiRoot = document.getElementById('point-ui-@0');

  if (!btn || !checkRoot) return;

  function findCheckButton() {
    return checkRoot.querySelector(
      'button.lia-btn, input.lia-btn, button, input[type="button"], input[type="submit"]'
    );
  }

  function ensureInnerSpan() {
    let inner = btn.querySelector('.lia-btn-inner');
    if (inner) return inner;

    inner = document.createElement('span');
    inner.className = 'lia-btn-inner';

    while (btn.firstChild) {
      inner.appendChild(btn.firstChild);
    }
    btn.appendChild(inner);

    return inner;
  }

  function apply() {
    const c = (window.__pointNeutralColor ? window.__pointNeutralColor() : '#000');
    btn.style.color = c;

    if (uiRoot) {
      uiRoot.style.display = 'inline-flex';
      uiRoot.style.alignItems = 'flex-start';
      uiRoot.style.gap = '.6rem';
      uiRoot.style.flexWrap = 'nowrap';
    }

    const checkBtn = findCheckButton();
    if (!checkBtn) return;

    const cs = window.getComputedStyle(checkBtn);
    const h = checkBtn.offsetHeight;
    const inner = ensureInnerSpan();

    btn.style.display = 'inline-flex';
    btn.style.alignItems = 'stretch';
    btn.style.justifyContent = 'center';
    btn.style.verticalAlign = 'top';
    btn.style.boxSizing = 'border-box';
    btn.style.margin = '0';
    btn.style.textAlign = 'center';

    if (h > 0) {
      btn.style.height = h + 'px';
      btn.style.minHeight = h + 'px';
    }

    btn.style.paddingTop = '0';
    btn.style.paddingBottom = '0';
    btn.style.paddingLeft = '0';
    btn.style.paddingRight = '0';

    btn.style.fontSize = cs.fontSize;
    btn.style.fontFamily = cs.fontFamily;
    btn.style.fontWeight = cs.fontWeight;
    btn.style.lineHeight = 'normal';

    inner.style.display = 'inline-flex';
    inner.style.alignItems = 'center';
    inner.style.justifyContent = 'center';
    inner.style.boxSizing = 'border-box';
    inner.style.height = '100%';
    inner.style.paddingTop = '0';
    inner.style.paddingBottom = '0';
    inner.style.paddingLeft = cs.paddingLeft;
    inner.style.paddingRight = cs.paddingRight;
    inner.style.lineHeight = '1';
    inner.style.transform = 'translateY(5px)';
    inner.style.whiteSpace = 'nowrap';
  }

  apply();
  requestAnimationFrame(apply);
  setTimeout(apply, 0);
  setTimeout(apply, 80);
  setTimeout(apply, 200);

  try {
    const mo = new MutationObserver(apply);
    mo.observe(checkRoot, { childList: true, subtree: true, attributes: true });
  } catch (e) {}

  try {
    const checkBtn = findCheckButton();
    if (checkBtn && typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(apply);
      ro.observe(checkBtn);
    }
  } catch (e) {}

  if (window.__registerLiaThemeListener) {
    window.__registerLiaThemeListener(apply);
  } else {
    setInterval(apply, 300);
  }
})();
</script>


@end





-->













# Test


@Koordinatensystem(`xmin=-5;xmax=4;ymin=-3;ymax=10;width=500;id=A1`)



Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(`A1;A;1;4`)








Alles klappt nur wenn `import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md` im Header ist!