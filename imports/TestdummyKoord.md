<!--
version: 0.0.1
language: de
narrator: Deutsch Female


















@onload




  // =========================
  // KOORDINATENSYSTEM KERN
  // KOORDINATENSYSTEM KERN
  // KOORDINATENSYSTEM KERN
  // KOORDINATENSYSTEM KERN
  // KOORDINATENSYSTEM KERN
  // KOORDINATENSYSTEM KERN
  // KOORDINATENSYSTEM KERN
  // KOORDINATENSYSTEM KERN
  // KOORDINATENSYSTEM KERN
  // KOORDINATENSYSTEM KERN
  // =========================


if (window.__liaRunCoordHooks) {
  window.__liaRunCoordHooks();
  requestAnimationFrame(() => {
    if (window.__liaRunCoordHooks) window.__liaRunCoordHooks();
  });
  setTimeout(() => {
    if (window.__liaRunCoordHooks) window.__liaRunCoordHooks();
  }, 0);
  setTimeout(() => {
    if (window.__liaRunCoordHooks) window.__liaRunCoordHooks();
  }, 120);
}








































  // =========================
  // ACHSENBESCHRIFTUNG
  // ACHSENBESCHRIFTUNG
  // ACHSENBESCHRIFTUNG
  // ACHSENBESCHRIFTUNG
  // ACHSENBESCHRIFTUNG
  // ACHSENBESCHRIFTUNG
  // ACHSENBESCHRIFTUNG
  // ACHSENBESCHRIFTUNG
  // ACHSENBESCHRIFTUNG
  // =========================


(function(){
  if (window.__liaAxisTitlesReady) {
    try {
      if (window.__bootstrapAxisTitles) window.__bootstrapAxisTitles();
    } catch (e) {}
    return;
  }
  window.__liaAxisTitlesReady = true;

  window.__liaAxisTitleSpecs = window.__liaAxisTitleSpecs || {};

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

  function normalizeAxisLabelMath(s) {
    let out = String(s || '').trim();
    if (!out) return '';

    out = out.replace(/\\\$/g, '__LIA_ESC_DOLLAR__');
    out = out.replace(/\$\$([\s\S]+?)\$\$/g, function (_, inner) {
      return '\\[' + inner + '\\]';
    });
    out = out.replace(/\$([^$]+?)\$/g, function (_, inner) {
      return '\\(' + inner + '\\)';
    });
    out = out.replace(/__LIA_ESC_DOLLAR__/g, '$');

    return out;
  }

  function parseSpec(spec) {
    const raw = unquote(String(spec || '').trim());
    const obj = {};

    splitTopLevel(raw).forEach(function(part) {
      const eq = part.indexOf('=');
      if (eq < 0) return;

      const key = part.slice(0, eq).trim().toLowerCase();
      const val = unquote(part.slice(eq + 1).trim());
      obj[key] = val;
    });

    return {
      id: obj.id != null ? obj.id : '',
      xlabel: obj.xlabel != null ? obj.xlabel : '',
      ylabel: obj.ylabel != null ? obj.ylabel : ''
    };
  }

  function getMathJaxEngine() {
    try {
      if (window.MathJax) return window.MathJax;
    } catch (e) {}

    try {
      if (window.parent && window.parent.MathJax) return window.parent.MathJax;
    } catch (e) {}

    return null;
  }

  function neutralColor() {
    try {
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
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

  function getSafeBBox(board) {
    try {
      const bb = board.getBoundingBox();
      if (
        Array.isArray(bb) &&
        bb.length === 4 &&
        bb.every(function(v){ return Number.isFinite(v); }) &&
        bb[2] > bb[0] &&
        bb[1] > bb[3]
      ) {
        return bb.slice();
      }
    } catch (e) {}

    return [-5, 5, 5, -5];
  }

  function userToScrX(board, x) {
    return board.origin.scrCoords[1] + x * board.unitX;
  }

  function userToScrY(board, y) {
    return board.origin.scrCoords[2] - y * board.unitY;
  }

  function createOverlay(board) {
    const el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '40';
    el.style.whiteSpace = 'nowrap';
    el.style.lineHeight = '1.2';
    el.style.fontSize = '20px';
    el.style.maxWidth = 'none';
    el.style.display = 'none';
    board.containerObj.appendChild(el);
    return el;
  }

  function ensureOverlays(board) {
    if (!board || !board.containerObj) return;

    if (!board.__xTitleOverlay) {
      board.__xTitleOverlay = createOverlay(board);
    }

    if (!board.__yTitleOverlay) {
      board.__yTitleOverlay = createOverlay(board);
    }
  }

  function setOverlayContent(el, html) {
    if (!el) return;

    if (!html) {
      el.style.display = 'none';
      return;
    }

    el.style.display = 'block';

    if (el.__liaHtml === html) return;
    el.__liaHtml = html;
    el.innerHTML = html;

    const MJ = getMathJaxEngine();
    if (MJ && typeof MJ.typesetPromise === 'function') {
      try {
        MJ.typesetPromise([el]).catch(function(){});
      } catch (e) {}
    }
  }

  function applyAxisTitles(boardId) {
    const specs = window.__liaAxisTitleSpecs || {};
    const cfg = specs[boardId];
    if (!cfg) return;

    const board = window.__boards && window.__boards[boardId];
    if (!board || !board.containerObj) return;

    ensureOverlays(board);

    const xEl = board.__xTitleOverlay;
    const yEl = board.__yTitleOverlay;

    const col = neutralColor();
    if (xEl) xEl.style.color = col;
    if (yEl) yEl.style.color = col;

    const xHTML = normalizeAxisLabelMath(cfg.xlabel || '');
    const yHTML = normalizeAxisLabelMath(cfg.ylabel || '');

    setOverlayContent(xEl, xHTML);
    setOverlayContent(yEl, yHTML);

    const bb = getSafeBBox(board);
    const xmin = bb[0];
    const ymax = bb[1];
    const xmax = bb[2];
    const ymin = bb[3];

    const w = board.containerObj.clientWidth || 0;
    const h = board.containerObj.clientHeight || 0;

    const xAxisTop = 0 > ymax;
    const xAxisBottom = 0 < ymin;
    const yAxisLeft = 0 < xmin;
    const yAxisRight = 0 > xmax;

    if (xEl && xHTML) {
      xEl.style.left = 'auto';
      xEl.style.right = '12px';
      xEl.style.textAlign = 'right';
      xEl.style.transform = 'none';

      if (xAxisTop) {
        xEl.style.top = '44px';
        xEl.style.bottom = 'auto';
      } else if (xAxisBottom) {
        xEl.style.top = 'auto';
        xEl.style.bottom = '12px';
      } else {
        const scrY = userToScrY(board, 0);

        if (scrY < h / 2) {
          xEl.style.top = Math.max(8, Math.round(scrY + 16)) + 'px';
          xEl.style.bottom = 'auto';
        } else {
          xEl.style.top = Math.max(8, Math.round(scrY - 34)) + 'px';
          xEl.style.bottom = 'auto';
        }
      }
    }

    if (yEl && yHTML) {
      yEl.style.top = (xAxisTop ? 64 : 12) + 'px';
      yEl.style.bottom = 'auto';

      if (yAxisLeft) {
        yEl.style.left = '40px';
        yEl.style.right = 'auto';
        yEl.style.textAlign = 'left';
        yEl.style.transform = 'none';
      } else if (yAxisRight) {
        yEl.style.left = Math.max(0, w - 40) + 'px';
        yEl.style.right = 'auto';
        yEl.style.textAlign = 'right';
        yEl.style.transform = 'translateX(-100%)';
      } else {
        const scrX = userToScrX(board, 0);

        if (scrX < w / 2) {
          yEl.style.left = Math.round(scrX + 18) + 'px';
          yEl.style.right = 'auto';
          yEl.style.textAlign = 'left';
          yEl.style.transform = 'none';
        } else {
          yEl.style.left = Math.round(scrX - 18) + 'px';
          yEl.style.right = 'auto';
          yEl.style.textAlign = 'right';
          yEl.style.transform = 'translateX(-100%)';
        }
      }
    }
  }

  window.renderAxisTitlesFromSpec = function(spec) {
    const cfg = parseSpec(spec);
    if (!cfg.id) return false;

    window.__liaAxisTitleSpecs[cfg.id] = cfg;
    applyAxisTitles(cfg.id);
    return true;
  };

  window.__refreshAllAxisTitles = function() {
    const specs = window.__liaAxisTitleSpecs || {};
    Object.keys(specs).forEach(applyAxisTitles);
  };

  window.__bootstrapAxisTitles = function() {
    const nodes = document.querySelectorAll('[id^="axis-title-spec-"][data-spec]');

    nodes.forEach(function(node) {
      const spec = String(node.dataset.spec || '');
      if (!spec) return;

      if (node.__liaAxisBootstrapped && node.__liaAxisLastSpec === spec) return;

      node.__liaAxisBootstrapped = true;
      node.__liaAxisLastSpec = spec;

      window.renderAxisTitlesFromSpec(spec);
    });

    window.__refreshAllAxisTitles();
  };

  function kickAxisTitles() {
    try {
      if (window.__bootstrapAxisTitles) window.__bootstrapAxisTitles();
    } catch (e) {}
  }

  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = function() {
      kickAxisTitles();
    };

    if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', handler);
    else if (mq && typeof mq.addListener === 'function') mq.addListener(handler);
  } catch (e) {}

  window.addEventListener('resize', function() {
    requestAnimationFrame(function() {
      kickAxisTitles();
    });
  });

  try {
    const mo = new MutationObserver(function() {
      kickAxisTitles();
    });

    const root = document.body || document.documentElement;
    if (root) {
      mo.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-spec']
      });
    }
  } catch (e) {}

  setInterval(function() {
    kickAxisTitles();
  }, 400);

  kickAxisTitles();
})();











































  // =========================
  // ERZEUGE PUNKT MAKRO
  // ERZEUGE PUNKT MAKRO
  // ERZEUGE PUNKT MAKRO
  // ERZEUGE PUNKT MAKRO
  // ERZEUGE PUNKT MAKRO
  // ERZEUGE PUNKT MAKRO
  // ERZEUGE PUNKT MAKRO
  // ERZEUGE PUNKT MAKRO
  // =========================



(function(){
  if (window.__erzeugePunktReady) {
    try {
      if (window.__bootstrapErzeugePunkte) window.__bootstrapErzeugePunkte();
    } catch (e) {}
    return;
  }
  window.__erzeugePunktReady = true;

  try {
    if (window.JXG && JXG.Options && JXG.Options.text) {
      JXG.Options.text.useMathJax = true;
    }
  } catch (e) {}

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
  window.__pointStates = window.__pointStates || {};
  window.__pointNeutralColor = currentNeutralColor;
  window.__erzeugePunktInstances = window.__erzeugePunktInstances || {};

  if (!window.__liaThemeSync) {
    const listeners = new Set();
    let lastSig = themeSignature();

    function notify() {
      listeners.forEach(function(fn) {
        try { fn(); } catch (e) {}
      });
    }

    function check() {
      const sig = themeSignature();
      if (sig !== lastSig) {
        lastSig = sig;
        window.__pointNeutralColor = currentNeutralColor;
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

  if (typeof window.__registerLiaThemeListener !== 'function') {
    window.__registerLiaThemeListener = function(fn) {
      if (!window.__liaThemeSync || !fn) return;
      window.__liaThemeSync.listeners.add(fn);
      try { fn(); } catch (e) {}
    };
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

  function splitSpec(spec) {
    return unquote(spec)
      .split(';')
      .map(function(s){ return s.trim(); });
  }

  function texName(name) {
    const s = String(name || '').trim();
    return s ? '\\(' + s + '\\)' : '\\(A\\)';
  }

  function ensureBuckets(boardId) {
    window.__points[boardId] = window.__points[boardId] || {};
    window.__pointStates[boardId] = window.__pointStates[boardId] || {};
  }

  function getPointTargetFromSpec(spec) {
    const parts = splitSpec(spec);

    return {
      boardId: parts[0] || '',
      name: parts[1] || 'A',
      tx: parseFloat((parts[2] || '').replace(',', '.')),
      ty: parseFloat((parts[3] || '').replace(',', '.'))
    };
  }

  function stylePointLabel(pt) {
    if (!pt || typeof pt.setAttribute !== 'function') return;

    const c = currentNeutralColor();

    try {
      pt.setAttribute({
        label: {
          strokeColor: c,
          fillColor: c,
          fontSize: 24,
          parse: false,
          useMathJax: true
        }
      });
    } catch (e) {}

    try {
      if (pt.label && typeof pt.label.setAttribute === 'function') {
        pt.label.setAttribute({
          strokeColor: c,
          fillColor: c,
          fontSize: 24,
          parse: false,
          useMathJax: true
        });
      }
    } catch (e) {}
  }

  function refreshAllPointLabels() {
    try {
      const boards = window.__points || {};
      Object.keys(boards).forEach(function(boardId) {
        const entries = boards[boardId] || {};
        Object.keys(entries).forEach(function(name) {
          stylePointLabel(entries[name]);
        });
      });
    } catch (e) {}
  }

  function savePointState(boardId, name, pt) {
    if (!pt) return;
    ensureBuckets(boardId);

    let fixed = false;
    try {
      fixed = !!(pt.getAttribute ? pt.getAttribute('fixed') : pt.visProp && pt.visProp.fixed);
    } catch (e) {}

    try {
      window.__pointStates[boardId][name] = {
        x: pt.X(),
        y: pt.Y(),
        fixed: fixed
      };
    } catch (e) {}
  }

  function movePointTo(pt, x, y) {
    if (!pt) return false;

    try {
      if (typeof pt.moveTo === 'function') {
        pt.moveTo([x, y], 0);
        return true;
      }
    } catch (e) {}

    try {
      if (typeof pt.setPositionDirectly === 'function' && typeof JXG !== 'undefined') {
        pt.setPositionDirectly(JXG.COORDS_BY_USER, [x, y]);
        return true;
      }
    } catch (e) {}

    try {
      if (typeof pt.setPosition === 'function' && typeof JXG !== 'undefined') {
        pt.setPosition(JXG.COORDS_BY_USER, [x, y]);
        return true;
      }
    } catch (e) {}

    return false;
  }

  function bindPointPersistence(boardId, name, pt) {
    if (!pt || pt.__liaStateBound) return;
    pt.__liaStateBound = true;

    const persist = function() {
      savePointState(boardId, name, pt);
    };

    try { pt.on('drag', persist); } catch (e) {}
    try { pt.on('up', persist); } catch (e) {}
    try { pt.on('move', persist); } catch (e) {}

    persist();
  }

  function createPoint(board, boardId, name, x0, y0) {
    try {
      const pt = board.create('point', [x0, y0], {
        name: texName(name),
        fixed: false,
        withLabel: true,
        showInfobox: false,
        strokeColor: '#ff00ff',
        fillColor: '#ff00ff',
        highlightStrokeColor: '#ff00ff',
        highlightFillColor: '#ff00ff',
        strokeWidth: 3,
        highlightStrokeWidth: 3,
        face: 'x',
        size: 7,
        label: {
          strokeColor: currentNeutralColor(),
          fillColor: currentNeutralColor(),
          fontSize: 24,
          parse: false,
          useMathJax: true
        }
      });

      ensureBuckets(boardId);
      window.__points[boardId][name] = pt;

      stylePointLabel(pt);
      bindPointPersistence(boardId, name, pt);
      savePointState(boardId, name, pt);

      return pt;
    } catch (e) {
      return null;
    }
  }

  function getLivePointOnCurrentBoard(boardId, name) {
    const board = window.__boards && window.__boards[boardId];
    const pt = window.__points && window.__points[boardId] && window.__points[boardId][name];

    if (!board || !pt) return null;

    try {
      if (pt.board === board) return pt;
    } catch (e) {}

    return null;
  }

  function restorePointFromState(boardId, name) {
    const board = window.__boards && window.__boards[boardId];
    const state = window.__pointStates && window.__pointStates[boardId] && window.__pointStates[boardId][name];

    if (!board || !state) return null;

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (!pt) {
      pt = createPoint(board, boardId, name, state.x, state.y);
      if (!pt) return null;
    }

    movePointTo(pt, state.x, state.y);

    try {
      pt.setAttribute({ fixed: !!state.fixed });
    } catch (e) {}

    stylePointLabel(pt);
    bindPointPersistence(boardId, name, pt);
    savePointState(boardId, name, pt);

    try { board.update(); } catch (e) {}
    return pt;
  }

  window.restorePointFromSpec = function(spec) {
    const target = getPointTargetFromSpec(spec);
    if (!target.boardId || !target.name) return null;
    return restorePointFromState(target.boardId, target.name);
  };

  window.getPointFromSpec = function(spec) {
    const target = getPointTargetFromSpec(spec);
    const boardId = target.boardId;
    const name = target.name;

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (pt) return pt;

    return restorePointFromState(boardId, name);
  };

  window.ensurePointFromSpec = function(spec) {
    const target = getPointTargetFromSpec(spec);
    const boardId = target.boardId;
    const name = target.name;

    const board = window.__boards && window.__boards[boardId];
    if (!board || !name) return false;

    ensureBuckets(boardId);

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (pt) {
      stylePointLabel(pt);
      bindPointPersistence(boardId, name, pt);
      savePointState(boardId, name, pt);
      try { board.update(); } catch (e) {}
      return true;
    }

    pt = restorePointFromState(boardId, name);
    if (pt) {
      try { board.update(); } catch (e) {}
      return true;
    }

    const x0 = Math.random();
    const y0 = Math.random();

    pt = createPoint(board, boardId, name, x0, y0);
    if (!pt) return false;

    try { board.update(); } catch (e) {}
    return true;
  };

  window.finalizePointFromSpec = function(spec) {
    const target = getPointTargetFromSpec(spec);
    const boardId = target.boardId;
    const name = target.name;
    const tx = target.tx;
    const ty = target.ty;

    const board = window.__boards && window.__boards[boardId];
    if (!board || !name || Number.isNaN(tx) || Number.isNaN(ty)) return false;

    ensureBuckets(boardId);

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (!pt) pt = restorePointFromState(boardId, name);
    if (!pt) pt = createPoint(board, boardId, name, tx, ty);
    if (!pt) return false;

    movePointTo(pt, tx, ty);

    try {
      pt.setAttribute({ fixed: true });
    } catch (e) {}

    stylePointLabel(pt);
    savePointState(boardId, name, pt);

    try { board.update(); } catch (e) {}
    return true;
  };

  window.__checkPointFromSpec = function(spec) {
    const target = getPointTargetFromSpec(spec);
    const pt = window.getPointFromSpec ? window.getPointFromSpec(spec) : null;
    const eps = 0.05;

    const ok = !!pt
      && !Number.isNaN(target.tx)
      && !Number.isNaN(target.ty)
      && Math.abs(pt.X() - target.tx) < eps
      && Math.abs(pt.Y() - target.ty) < eps;

    if (ok && typeof window.finalizePointFromSpec === 'function') {
      window.finalizePointFromSpec(spec);
    }

    return ok;
  };

  function findCheckButton(checkRoot) {
    return checkRoot.querySelector(
      'button.lia-btn, input.lia-btn, button, input[type="button"], input[type="submit"]'
    );
  }

  function findAllQuizButtons(checkRoot) {
    return Array.from(
      checkRoot.querySelectorAll(
        'button.lia-btn, input.lia-btn, button, input[type="button"], input[type="submit"]'
      )
    );
  }

  function ensureInnerSpan(btn) {
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

  function looksLikeResolveButton(checkRoot, targetBtn) {
    const buttons = findAllQuizButtons(checkRoot);
    const idx = buttons.indexOf(targetBtn);
    const text = String(targetBtn.textContent || targetBtn.value || '').trim().toLowerCase();

    if (idx >= 1) return true;
    if (/lös|solution|aufl|show/.test(text)) return true;

    return false;
  }

  function applyErzeugePunktUi(uid) {
    const uiRoot = document.getElementById('point-ui-' + uid);
    const taskRoot = document.getElementById('point-task-' + uid);
    const checkRoot = document.getElementById('point-check-' + uid);
    const btn = document.getElementById('btn-' + uid);

    if (!uiRoot || !taskRoot || !checkRoot || !btn) return false;

    const spec = uiRoot.dataset.spec || '';

    uiRoot.style.display = 'inline-flex';
    uiRoot.style.alignItems = 'flex-start';
    uiRoot.style.gap = '.6rem';
    uiRoot.style.flexWrap = 'nowrap';

    taskRoot.style.display = 'inline-flex';
    taskRoot.style.alignItems = 'flex-start';
    taskRoot.style.alignSelf = 'flex-start';
    taskRoot.style.margin = '0';
    taskRoot.style.padding = '0';

    checkRoot.style.display = 'inline-flex';
    checkRoot.style.alignItems = 'flex-start';
    checkRoot.style.alignSelf = 'flex-start';
    checkRoot.style.margin = '0';
    checkRoot.style.padding = '0';

    Array.from(checkRoot.children).forEach(function(el) {
      try { el.style.margin = '0'; } catch (e) {}
    });

    const c = (window.__pointNeutralColor ? window.__pointNeutralColor() : '#000');
    btn.style.color = c;

    const checkBtn = findCheckButton(checkRoot);
    if (!checkBtn) {
      try {
        const inner = ensureInnerSpan(btn);
        btn.style.display = 'inline-flex';
        btn.style.alignItems = 'center';
        btn.style.justifyContent = 'center';
        btn.style.verticalAlign = 'top';
        btn.style.boxSizing = 'border-box';
        btn.style.margin = '0';
        inner.style.display = 'inline-flex';
        inner.style.alignItems = 'center';
        inner.style.justifyContent = 'center';
        inner.style.whiteSpace = 'nowrap';
        inner.style.transform = 'translateY(0px)';
      } catch (e) {}

      if (typeof window.restorePointFromSpec === 'function') {
        window.restorePointFromSpec(spec);
      }
      return true;
    }

    const cs = window.getComputedStyle(checkBtn);
    const h = checkBtn.offsetHeight;
    const inner = ensureInnerSpan(btn);

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
    inner.style.transform = 'translateY(0px)';
    inner.style.whiteSpace = 'nowrap';

    if (typeof window.restorePointFromSpec === 'function') {
      window.restorePointFromSpec(spec);
    }

    return true;
  }

  window.renderErzeugePunktFromSpec = function(uid, spec) {
    const uiRoot = document.getElementById('point-ui-' + uid);
    const taskRoot = document.getElementById('point-task-' + uid);
    const checkRoot = document.getElementById('point-check-' + uid);

    if (!uiRoot || !taskRoot || !checkRoot) return false;

    if ((uiRoot.dataset.spec || '') !== String(spec || '')) {
      uiRoot.dataset.spec = spec;
    }

    let btn = document.getElementById('btn-' + uid);
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'btn-' + uid;
      btn.className = 'lia-btn';
      btn.type = 'button';
      btn.textContent = 'Punkt erzeugen';
      taskRoot.appendChild(btn);
    }

    if (!btn.__liaPointEnsureBound) {
      btn.__liaPointEnsureBound = true;
      btn.addEventListener('click', function() {
        const curSpec = uiRoot.dataset.spec || '';
        if (typeof window.ensurePointFromSpec === 'function') {
          window.ensurePointFromSpec(curSpec);
        }
      });
    }

    applyErzeugePunktUi(uid);

    if (!checkRoot.__liaPointUiObserved) {
      checkRoot.__liaPointUiObserved = true;

      try {
        const mo = new MutationObserver(function() {
          if (checkRoot.__liaPointUiScheduled) return;
          checkRoot.__liaPointUiScheduled = true;
          requestAnimationFrame(function() {
            checkRoot.__liaPointUiScheduled = false;
            applyErzeugePunktUi(uid);
          });
        });
        mo.observe(checkRoot, { childList: true, subtree: true });
      } catch (e) {}

      try {
        checkRoot.addEventListener('click', function(e) {
          const targetBtn = e.target && e.target.closest
            ? e.target.closest('button, input[type="button"], input[type="submit"]')
            : null;

          if (!targetBtn || !checkRoot.contains(targetBtn)) return;
          if (!looksLikeResolveButton(checkRoot, targetBtn)) return;

          setTimeout(function() {
            const curSpec = uiRoot.dataset.spec || '';
            if (typeof window.finalizePointFromSpec === 'function') {
              window.finalizePointFromSpec(curSpec);
            }
          }, 0);

          setTimeout(function() {
            const curSpec = uiRoot.dataset.spec || '';
            if (typeof window.finalizePointFromSpec === 'function') {
              window.finalizePointFromSpec(curSpec);
            }
          }, 80);
        });
      } catch (e) {}

      if (window.__registerLiaThemeListener) {
        window.__registerLiaThemeListener(function() {
          applyErzeugePunktUi(uid);
        });
      }
    }

    setTimeout(function() {
      if (typeof window.restorePointFromSpec === 'function') {
        window.restorePointFromSpec(spec);
      }
    }, 0);

    setTimeout(function() {
      if (typeof window.restorePointFromSpec === 'function') {
        window.restorePointFromSpec(spec);
      }
    }, 120);

    return true;
  };

  window.__bootstrapErzeugePunkte = function() {
    const nodes = document.querySelectorAll('[id^="point-ui-"][data-spec]');

    nodes.forEach(function(node) {
      const uid = String(node.id || '').replace(/^point-ui-/, '');
      const spec = String(node.dataset.spec || '');
      if (!uid || !spec) return;

      window.renderErzeugePunktFromSpec(uid, spec);
    });

    refreshAllPointLabels();
  };

  if (!window.__scheduleBootstrapErzeugePunkte) {
    window.__scheduleBootstrapErzeugePunkte = function() {
      if (window.__bootstrapErzeugePunkteRAF) return;
      window.__bootstrapErzeugePunkteRAF = requestAnimationFrame(function() {
        window.__bootstrapErzeugePunkteRAF = 0;
        try {
          if (window.__bootstrapErzeugePunkte) window.__bootstrapErzeugePunkte();
        } catch (e) {}
      });
    };
  }

  try {
    const mo = new MutationObserver(function(mutations) {
      let needsBootstrap = false;

      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];
        if (m.type !== 'childList') continue;

        const added = Array.from(m.addedNodes || []);
        for (let j = 0; j < added.length; j++) {
          const n = added[j];
          if (!n || n.nodeType !== 1) continue;

          if (
            (n.id && /^point-ui-/.test(n.id)) ||
            (n.querySelector && n.querySelector('[id^="point-ui-"][data-spec]'))
          ) {
            needsBootstrap = true;
            break;
          }
        }

        if (needsBootstrap) break;
      }

      if (needsBootstrap && window.__scheduleBootstrapErzeugePunkte) {
        window.__scheduleBootstrapErzeugePunkte();
      }
    });

    const root = document.body || document.documentElement;
    if (root) {
      mo.observe(root, {
        childList: true,
        subtree: true
      });
    }
  } catch (e) {}

  window.__registerLiaThemeListener(refreshAllPointLabels);

  try {
    if (window.__scheduleBootstrapErzeugePunkte) window.__scheduleBootstrapErzeugePunkte();
    setTimeout(function() {
      if (window.__scheduleBootstrapErzeugePunkte) window.__scheduleBootstrapErzeugePunkte();
    }, 80);
    setTimeout(function() {
      if (window.__scheduleBootstrapErzeugePunkte) window.__scheduleBootstrapErzeugePunkte();
    }, 220);
  } catch (e) {}
})();







































  // =========================
  // PLOT FUNKTION
  // PLOT FUNKTION
  // PLOT FUNKTION
  // PLOT FUNKTION
  // PLOT FUNKTION
  // PLOT FUNKTION
  // PLOT FUNKTION
  // PLOT FUNKTION
  // =========================

(function(){
  if (window.__plotFunktionReady) {
    try {
      if (window.__bootstrapPlotFunctions) window.__bootstrapPlotFunctions();
    } catch (e) {}
    return;
  }
  window.__plotFunktionReady = true;

  window.__plotFunctionEntries = window.__plotFunctionEntries || {};

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

  function splitTopLevel(str, sep) {
    const out = [];
    let cur = '';
    let quote = '';
    let esc = false;
    let depth = 0;

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

      if (ch === '(' || ch === '[' || ch === '{') {
        depth++;
        cur += ch;
        continue;
      }

      if (ch === ')' || ch === ']' || ch === '}') {
        depth = Math.max(0, depth - 1);
        cur += ch;
        continue;
      }

      if (ch === sep && depth === 0) {
        out.push(cur.trim());
        cur = '';
        continue;
      }

      cur += ch;
    }

    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  function decodeExprPlaceholders(s) {
    return String(s || '')
      .replace(/\{\{/g, '(')
      .replace(/\}\}/g, ')');
  }

  function parsePlotSpec(spec) {
    const raw = unquote(spec);
    const parts = splitTopLevel(raw, ';');

    return {
      boardId: parts[0] ? unquote(parts[0]) : '',
      name:    parts[1] ? unquote(parts[1]) : 'f',
      expr:    parts[2] ? decodeExprPlaceholders(unquote(parts[2])) : '',
      color:   parts[3] ? unquote(parts[3]) : 'red'
    };
  }

  function makeKey(uid) {
    return 'plot-' + uid;
  }

  function removeExisting(uid) {
    const key = makeKey(uid);
    const entry = window.__plotFunctionEntries[key];
    if (!entry) return;

    try {
      if (entry.graph && entry.graph.board) {
        entry.graph.board.removeObject(entry.graph);
      }
    } catch (e) {}

    try {
      if (entry.label && entry.label.board) {
        entry.label.board.removeObject(entry.label);
      }
    } catch (e) {}

    try {
      if (entry.anchor && entry.anchor.board) {
        entry.anchor.board.removeObject(entry.anchor);
      }
    } catch (e) {}

    delete window.__plotFunctionEntries[key];
  }

  function sameBoard(a, b) {
    try {
      return !!a && !!b && a === b;
    } catch (e) {
      return false;
    }
  }

  function normalizeExpr(expr) {
    let s = String(expr || '').trim();

    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*\(\s*x\s*\)\s*=\s*/i, '');
    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*=\s*/i, '');

    s = s.replace(/−/g, '-');
    s = s.replace(/\^/g, '**');

    s = s.replace(/(\d)\s*x\b/g, '$1*x');
    s = s.replace(/(\d)\s*\(/g, '$1*(');
    s = s.replace(/\bx\s*\(/g, 'x*(');
    s = s.replace(/\)\s*(\d)/g, ')*$1');

    return s.trim();
  }

  function compileExpr(expr) {
    const s = normalizeExpr(expr);

    try {
      return new Function(
        'x',
        `
        const pi = Math.PI;
        const e = Math.E;

        const sin = Math.sin;
        const cos = Math.cos;
        const tan = Math.tan;
        const asin = Math.asin;
        const acos = Math.acos;
        const atan = Math.atan;

        const sinh = Math.sinh;
        const cosh = Math.cosh;
        const tanh = Math.tanh;

        const exp = Math.exp;
        const log = Math.log;
        const ln = Math.log;
        const sqrt = Math.sqrt;
        const abs = Math.abs;
        const floor = Math.floor;
        const ceil = Math.ceil;
        const round = Math.round;
        const min = Math.min;
        const max = Math.max;
        const pow = Math.pow;

        return (${s});
        `
      );
    } catch (e) {
      return null;
    }
  }

  function safeBBox(board) {
    try {
      const bb = board.getBoundingBox();
      if (
        Array.isArray(bb) &&
        bb.length === 4 &&
        bb.every(v => Number.isFinite(v)) &&
        bb[2] > bb[0] &&
        bb[1] > bb[3]
      ) {
        return bb.slice();
      }
    } catch (e) {}

    return [-5, 5, 5, -5];
  }

  function texName(name) {
    const raw = String(name || '').trim();
    if (!raw) return '';
    if (raw.includes('\\(') || raw.includes('\\[') || raw.includes('$')) return raw;
    return '\\(' + raw + '\\)';
  }

  function chooseVisibleAnchorX(board, fn) {
    const bb = safeBBox(board);
    const xmin = bb[0];
    const ymax = bb[1];
    const xmax = bb[2];
    const ymin = bb[3];

    const xspan = xmax - xmin;
    const yspan = ymax - ymin;

    const xStart = xmax - 0.10 * xspan;
    const xEnd   = xmin + 0.18 * xspan;

    const yPadTop = 0.14 * yspan;
    const yPadBottom = 0.12 * yspan;

    const steps = 120;

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = xStart - t * (xStart - xEnd);

      let y;
      try {
        y = fn(x);
      } catch (e) {
        y = NaN;
      }

      if (!Number.isFinite(y)) continue;
      if (y <= ymax - yPadTop && y >= ymin + yPadBottom) return x;
    }

    return xmin + 0.60 * xspan;
  }

  function createFunctionLabel(board, fn, name, color) {
    const labelText = texName(name);

    const anchor = board.create('point', [
      function() {
        return chooseVisibleAnchorX(board, fn);
      },
      function() {
        const x = chooseVisibleAnchorX(board, fn);
        let y;

        try {
          y = fn(x);
        } catch (e) {
          y = NaN;
        }

        if (!Number.isFinite(y)) {
          const bb = safeBBox(board);
          return (bb[1] + bb[3]) / 2;
        }

        return y;
      }
    ], {
      visible: false,
      fixed: true,
      withLabel: false,
      name: ''
    });

    const label = board.create('text', [
      function() {
        return anchor.X() + 0.18;
      },
      function() {
        return anchor.Y() + 0.18;
      },
      function() {
        return labelText;
      }
    ], {
      fixed: true,
      highlight: false,
      parse: false,
      useMathJax: true,
      display: 'html',
      strokeColor: color,
      fillColor: color,
      fontSize: 28,
      anchorX: 'left',
      anchorY: 'top'
    });

    return { anchor, label };
  }

  window.renderPlotFunctionFromSpec = function(uid, spec) {
    const cfg = parsePlotSpec(spec);

    const boardId = String(cfg.boardId || '').trim();
    const name = String(cfg.name || 'f').trim() || 'f';
    const expr = String(cfg.expr || '').trim();
    const color = String(cfg.color || 'red').trim() || 'red';

    if (!boardId || !expr) return false;

    const board = window.__boards && window.__boards[boardId];
    if (!board) return false;

    const key = makeKey(uid);
    const old = window.__plotFunctionEntries[key];

    if (
      old &&
      old.boardId === boardId &&
      old.name === name &&
      old.expr === expr &&
      old.color === color &&
      old.graph &&
      sameBoard(old.graph.board, board)
    ) {
      return true;
    }

    removeExisting(uid);

    const fn = compileExpr(expr);
    if (!fn) return false;

    try {
      const graph = board.create('functiongraph', [fn], {
        strokeColor: color,
        highlightStrokeColor: color,
        strokeWidth: 3,
        fixed: true,
        withLabel: false
      });

      const labelPack = createFunctionLabel(board, fn, name, color);

      window.__plotFunctionEntries[key] = {
        uid: uid,
        boardId: boardId,
        name: name,
        expr: expr,
        color: color,
        graph: graph,
        anchor: labelPack.anchor,
        label: labelPack.label
      };

      try { board.update(); } catch (e) {}
      return true;
    } catch (e) {
      return false;
    }
  };

  window.__bootstrapPlotFunctions = function() {
    const nodes = document.querySelectorAll('[id^="plot-spec-"][data-spec]');

    nodes.forEach(function(node) {
      const uid = String(node.id || '').replace(/^plot-spec-/, '');
      const spec = String(node.dataset.spec || '');
      if (!uid || !spec) return;

      window.renderPlotFunctionFromSpec(uid, spec);
    });
  };

  try {
    const mo = new MutationObserver(function() {
      if (window.__bootstrapPlotFunctions) window.__bootstrapPlotFunctions();
    });

    const root = document.body || document.documentElement;
    if (root) {
      mo.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-spec']
      });
    }
  } catch (e) {}

  try {
    if (window.__bootstrapPlotFunctions) window.__bootstrapPlotFunctions();
  } catch (e) {}
})();










































  // =========================
  // GRAPHEN SELBST ZEICHNEN LASSEN
  // GRAPHEN SELBST ZEICHNEN LASSEN
  // GRAPHEN SELBST ZEICHNEN LASSEN
  // GRAPHEN SELBST ZEICHNEN LASSEN
  // GRAPHEN SELBST ZEICHNEN LASSEN
  // GRAPHEN SELBST ZEICHNEN LASSEN
  // GRAPHEN SELBST ZEICHNEN LASSEN
  // GRAPHEN SELBST ZEICHNEN LASSEN
  // =========================



(function(){
  if (window.__liaLatexStudentPlotReady) {
    try {
      if (window.__scheduleBootstrapPlotInputs) window.__scheduleBootstrapPlotInputs();
      else if (window.__bootstrapPlotInputs) window.__bootstrapPlotInputs();
    } catch (e) {}
    return;
  }
  window.__liaLatexStudentPlotReady = true;

  const H = {};
  window.__liaLatexStudentPlot = H;
  window.__liaLatexStudentPlotStates = window.__liaLatexStudentPlotStates || {};
  window.__liaLatexStudentPlotInstances = window.__liaLatexStudentPlotInstances || {};

  H.functionNames = new Set([
    'sin','cos','tan',
    'asin','acos','atan',
    'arcsin','arccos','arctan',
    'sqrt','exp','ln','log','abs'
  ]);

  H.splitTopLevel = function(str) {
    const out = [];
    let cur = '';
    let quote = '';
    let esc = false;
    let round = 0;
    let square = 0;
    let curly = 0;

    for (let i = 0; i < str.length; i++) {
      const ch = str[i];

      if (esc) {
        cur += ch;
        esc = false;
        continue;
      }

      if (quote) {
        cur += ch;
        if (ch === '\\') esc = true;
        else if (ch === quote) quote = '';
        continue;
      }

      if (ch === '"' || ch === "'" || ch === '`') {
        quote = ch;
        cur += ch;
        continue;
      }

      if (ch === '(') round++;
      else if (ch === ')') round = Math.max(0, round - 1);
      else if (ch === '[') square++;
      else if (ch === ']') square = Math.max(0, square - 1);
      else if (ch === '{') curly++;
      else if (ch === '}') curly = Math.max(0, curly - 1);

      if (ch === ';' && round === 0 && square === 0 && curly === 0) {
        out.push(cur.trim());
        cur = '';
        continue;
      }

      cur += ch;
    }

    out.push(cur.trim());
    return out;
  };

  H.numOr = function(parts, idx, fallback){
    const v = parseFloat(parts[idx]);
    return Number.isFinite(v) ? v : fallback;
  };

  H.parseInputSpec = function(spec){
    const parts = H.splitTopLevel(String(spec || '').trim());

    return {
      boardId: parts[0] || 'A1',
      name: parts[1] || 'f',
      color: parts[2] || '#b41f65',
      placeholder: parts[3] || 'z. B. \\frac{1}{2}x^2 - 1',
      dx: H.numOr(parts, 4, 0.18),
      dy: H.numOr(parts, 5, 0.18),
      strokeWidth: H.numOr(parts, 6, 3),
      labelFontSize: H.numOr(parts, 7, 28)
    };
  };

  H.skipSpaces = function(str, i){
    while (i < str.length && /\s/.test(str[i])) i++;
    return i;
  };

  H.readBalanced = function(str, start, openCh, closeCh){
    if (str[start] !== openCh) {
      throw new Error('Erwartet ' + openCh);
    }

    let depth = 0;

    for (let i = start; i < str.length; i++) {
      const ch = str[i];

      if (ch === openCh) depth++;
      else if (ch === closeCh) {
        depth--;
        if (depth === 0) {
          return {
            content: str.slice(start + 1, i),
            end: i + 1
          };
        }
      }
    }

    throw new Error('Klammer nicht geschlossen: ' + openCh + ' ... ' + closeCh);
  };

  H.readToken = function(str, start){
    let i = H.skipSpaces(str, start);
    if (i >= str.length) return null;

    const ch = str[i];

    if (ch === '{') {
      const g = H.readBalanced(str, i, '{', '}');
      return { text: g.content, end: g.end };
    }

    if (ch === '(') {
      const g = H.readBalanced(str, i, '(', ')');
      return { text: '(' + g.content + ')', end: g.end };
    }

    if (ch === '[') {
      const g = H.readBalanced(str, i, '[', ']');
      return { text: '[' + g.content + ']', end: g.end };
    }

    if (ch === '\\') {
      let j = i + 1;
      while (j < str.length && /[A-Za-z]/.test(str[j])) j++;
      const cmd = str.slice(i + 1, j);

      if (!cmd && j < str.length) {
        return { text: str.slice(i, j + 1), end: j + 1 };
      }

      if (cmd === 'left' || cmd === 'right') {
        return H.readToken(str, j);
      }

      if (cmd === 'frac') {
        const num = H.readToken(str, j);
        if (!num) throw new Error('Zähler nach \\frac fehlt.');
        const den = H.readToken(str, num.end);
        if (!den) throw new Error('Nenner nach \\frac fehlt.');

        return {
          text: '((' + H.transformLatex(num.text) + ')/(' + H.transformLatex(den.text) + '))',
          end: den.end
        };
      }

      if (cmd === 'sqrt') {
        let k = H.skipSpaces(str, j);
        let degree = null;

        if (str[k] === '[') {
          const dg = H.readBalanced(str, k, '[', ']');
          degree = H.transformLatex(dg.content);
          k = dg.end;
        }

        const arg = H.readToken(str, k);
        if (!arg) throw new Error('Argument nach \\sqrt fehlt.');

        return {
          text: degree
            ? '((' + H.transformLatex(arg.text) + ')^(1/(' + degree + ')))'
            : 'sqrt(' + H.transformLatex(arg.text) + ')',
          end: arg.end
        };
      }

      return { text: str.slice(i, j), end: j };
    }

    if (/[0-9.]/.test(ch)) {
      let j = i + 1;
      while (j < str.length && /[0-9.]/.test(str[j])) j++;
      return { text: str.slice(i, j), end: j };
    }

    if (/[A-Za-z]/.test(ch)) {
      let j = i + 1;
      while (j < str.length && /[A-Za-z0-9]/.test(str[j])) j++;
      return { text: str.slice(i, j), end: j };
    }

    return { text: ch, end: i + 1 };
  };

  H.transformLatex = function(input){
    const str = String(input || '');
    let out = '';
    let i = 0;

    while (i < str.length) {
      const ch = str[i];

      if (ch === '\\') {
        let j = i + 1;
        while (j < str.length && /[A-Za-z]/.test(str[j])) j++;
        const cmd = str.slice(i + 1, j);

        if (!cmd) {
          const sym = str[j] || '';
          if (sym === ',' || sym === ';' || sym === ':' || sym === '!' || sym === ' ') {
            i = j + 1;
            continue;
          }
          out += sym;
          i = j + 1;
          continue;
        }

        if (cmd === 'left' || cmd === 'right') {
          i = j;
          continue;
        }

        if (cmd === 'cdot' || cmd === 'times') {
          out += '*';
          i = j;
          continue;
        }

        if (cmd === 'div') {
          out += '/';
          i = j;
          continue;
        }

        if (cmd === 'pi') {
          out += 'pi';
          i = j;
          continue;
        }

        if (cmd === 'frac') {
          const num = H.readToken(str, j);
          if (!num) throw new Error('Zähler nach \\frac fehlt.');
          const den = H.readToken(str, num.end);
          if (!den) throw new Error('Nenner nach \\frac fehlt.');

          out += '((' + H.transformLatex(num.text) + ')/(' + H.transformLatex(den.text) + '))';
          i = den.end;
          continue;
        }

        if (cmd === 'sqrt') {
          let k = H.skipSpaces(str, j);
          let degree = null;

          if (str[k] === '[') {
            const dg = H.readBalanced(str, k, '[', ']');
            degree = H.transformLatex(dg.content);
            k = dg.end;
          }

          const arg = H.readToken(str, k);
          if (!arg) throw new Error('Argument nach \\sqrt fehlt.');

          out += degree
            ? '((' + H.transformLatex(arg.text) + ')^((1)/(' + degree + ')))'
            : 'sqrt(' + H.transformLatex(arg.text) + ')';

          i = arg.end;
          continue;
        }

        if (cmd === 'mathrm' || cmd === 'operatorname' || cmd === 'text') {
          const arg = H.readToken(str, j);
          if (!arg) {
            i = j;
            continue;
          }
          out += H.transformLatex(arg.text);
          i = arg.end;
          continue;
        }

        const fnMap = {
          sin: 'sin',
          cos: 'cos',
          tan: 'tan',
          asin: 'asin',
          acos: 'acos',
          atan: 'atan',
          arcsin: 'arcsin',
          arccos: 'arccos',
          arctan: 'arctan',
          ln: 'ln',
          log: 'log',
          exp: 'exp',
          abs: 'abs'
        };

        if (fnMap[cmd]) {
          const arg = H.readToken(str, j);
          if (arg) {
            out += fnMap[cmd] + '(' + H.transformLatex(arg.text) + ')';
            i = arg.end;
          } else {
            out += fnMap[cmd];
            i = j;
          }
          continue;
        }

        out += cmd;
        i = j;
        continue;
      }

      if (ch === '{') {
        const g = H.readBalanced(str, i, '{', '}');
        out += '(' + H.transformLatex(g.content) + ')';
        i = g.end;
        continue;
      }

      if (ch === '^') {
        const arg = H.readToken(str, i + 1);
        if (!arg) throw new Error('Exponent nach ^ fehlt.');
        out += '^(' + H.transformLatex(arg.text) + ')';
        i = arg.end;
        continue;
      }

      if (ch === '_') {
        const arg = H.readToken(str, i + 1);
        i = arg ? arg.end : i + 1;
        continue;
      }

      out += ch;
      i++;
    }

    return out;
  };

  H.stripOuterMath = function(s){
    let out = String(s || '').trim();
    out = out.replace(/^\${1,2}\s*/, '').replace(/\s*\${1,2}$/, '');
    return out.trim();
  };

  H.prepareRawInput = function(s){
    let out = H.stripOuterMath(s);

    out = out
      .replace(/−/g, '-')
      .replace(/–/g, '-')
      .replace(/·/g, '*');

    out = out.replace(/^\s*[A-Za-z]+\s*\(\s*x\s*\)\s*=\s*/, '');
    out = out.replace(/^\s*y\s*=\s*/, '');

    for (let k = 0; k < 8; k++) {
      const next = out.replace(/(\d)\s*,\s*(\d)/g, '$1.$2');
      if (next === out) break;
      out = next;
    }

    return out.trim();
  };

  H.tokenize = function(expr){
    const tokens = [];
    let i = 0;

    while (i < expr.length) {
      const ch = expr[i];

      if (/\s/.test(ch)) {
        i++;
        continue;
      }

      if (/[0-9.]/.test(ch)) {
        let j = i + 1;
        while (j < expr.length && /[0-9.]/.test(expr[j])) j++;
        tokens.push({ type: 'number', value: expr.slice(i, j) });
        i = j;
        continue;
      }

      if (/[A-Za-z]/.test(ch)) {
        let j = i + 1;
        while (j < expr.length && /[A-Za-z0-9]/.test(expr[j])) j++;
        tokens.push({ type: 'ident', value: expr.slice(i, j) });
        i = j;
        continue;
      }

      if (ch === '*' && expr[i + 1] === '*') {
        tokens.push({ type: 'op', value: '**' });
        i += 2;
        continue;
      }

      if ('+-*/^,'.includes(ch)) {
        tokens.push({ type: 'op', value: ch });
        i++;
        continue;
      }

      if (ch === '(') {
        tokens.push({ type: 'open', value: ch });
        i++;
        continue;
      }

      if (ch === ')') {
        tokens.push({ type: 'close', value: ch });
        i++;
        continue;
      }

      throw new Error('Unbekanntes Zeichen im Ausdruck: ' + ch);
    }

    return tokens;
  };

  H.insertImplicitMultiplication = function(tokens){
    const out = [];

    function isValueEnd(t){
      return t && (t.type === 'number' || t.type === 'ident' || t.type === 'close');
    }

    function isValueStart(t){
      return t && (t.type === 'number' || t.type === 'ident' || t.type === 'open');
    }

    for (let i = 0; i < tokens.length; i++) {
      const cur = tokens[i];
      const prev = out[out.length - 1];

      if (prev && isValueEnd(prev) && isValueStart(cur)) {
        const prevIsFn = prev.type === 'ident' && H.functionNames.has(prev.value);
        const callLike = prevIsFn && cur.type === 'open';

        if (!callLike) {
          out.push({ type: 'op', value: '*' });
        }
      }

      out.push(cur);
    }

    return out;
  };

  H.normalizeExpr = function(expr){
    const rawTokens = H.tokenize(expr);
    const tokens = H.insertImplicitMultiplication(rawTokens);

    return tokens.map(function(t){
      if (t.type === 'number') return t.value;
      if (t.type === 'open' || t.type === 'close') return t.value;
      if (t.type === 'op') return t.value === '^' ? '**' : t.value;

      if (t.type === 'ident') {
        const v = t.value;

        if (v === 'x') return 'x';
        if (v === 'pi') return 'pi';
        if (v === 'e') return 'e';
        if (H.functionNames.has(v)) return v;

        throw new Error('Unbekannte Variable oder Funktion: ' + v);
      }

      throw new Error('Interner Tokenfehler.');
    }).join('');
  };

  H.compileExpr = function(expr){
    const s = H.normalizeExpr(expr);

    try {
      return new Function(
        'x',
        `
        const pi = Math.PI;
        const e = Math.E;

        const sin = Math.sin;
        const cos = Math.cos;
        const tan = Math.tan;
        const asin = Math.asin;
        const acos = Math.acos;
        const atan = Math.atan;
        const arcsin = Math.asin;
        const arccos = Math.acos;
        const arctan = Math.atan;

        const exp = Math.exp;
        const log = (Math.log10 ? Math.log10 : function(v){ return Math.log(v)/Math.LN10; });
        const ln = Math.log;
        const sqrt = Math.sqrt;
        const abs = Math.abs;
        const floor = Math.floor;
        const ceil = Math.ceil;
        const round = Math.round;
        const min = Math.min;
        const max = Math.max;
        const pow = Math.pow;

        return (${s});
        `
      );
    } catch (e) {
      return null;
    }
  };

  H.compileLatex = function(raw){
    const prepared = H.prepareRawInput(raw);
    const ascii = H.transformLatex(prepared);
    const fn = H.compileExpr(ascii);

    return {
      prepared: prepared,
      ascii: ascii,
      fn: fn
    };
  };

  H.safeBBox = function(board){
    try {
      const bb = board.getBoundingBox();
      if (
        Array.isArray(bb) &&
        bb.length === 4 &&
        bb.every(v => Number.isFinite(v))
      ) {
        return bb.slice();
      }
    } catch (e) {}
    return [-5, 5, 5, -5];
  };

  H.texName = function(name) {
    const raw = String(name || '').trim();
    if (!raw) return '';
    if (raw.includes('\\(') || raw.includes('\\[') || raw.includes('$')) return raw;
    return '\\(' + raw + '\\)';
  };

  H.chooseVisibleAnchorX = function(board, fn){
    const bb = H.safeBBox(board);
    const xmin = bb[0];
    const ymax = bb[1];
    const xmax = bb[2];
    const ymin = bb[3];

    const xspan = xmax - xmin;
    const yspan = ymax - ymin;

    const xStart = xmax - 0.10 * xspan;
    const xEnd   = xmin + 0.18 * xspan;

    const yPadTop = 0.14 * yspan;
    const yPadBottom = 0.12 * yspan;

    const steps = 120;

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = xStart - t * (xStart - xEnd);

      let y;
      try {
        y = fn(x);
      } catch (e) {
        y = NaN;
      }

      if (!Number.isFinite(y)) continue;
      if (y <= ymax - yPadTop && y >= ymin + yPadBottom) return x;
    }

    return xmin + 0.60 * xspan;
  };

  H.removePlotObjects = function(board, state){
    ['text','anchor','graph'].forEach(function(key){
      if (state[key]) {
        try { board.removeObject(state[key]); } catch (e) {}
        state[key] = null;
      }
    });
  };

  H.createFunctionLabel = function(board, fn, state) {
    const labelText = H.texName(state.name);

    const anchor = board.create('point', [
      function() {
        return H.chooseVisibleAnchorX(board, fn);
      },
      function() {
        const x = H.chooseVisibleAnchorX(board, fn);
        let y;

        try {
          y = fn(x);
        } catch (e) {
          y = NaN;
        }

        if (!Number.isFinite(y)) {
          const bb = H.safeBBox(board);
          return (bb[1] + bb[3]) / 2;
        }

        return y;
      }
    ], {
      visible: false,
      fixed: true,
      withLabel: false,
      name: ''
    });

    const label = board.create('text', [
      function() {
        return anchor.X() + state.dx;
      },
      function() {
        return anchor.Y() + state.dy;
      },
      function() {
        return labelText;
      }
    ], {
      fixed: true,
      highlight: false,
      parse: false,
      useMathJax: true,
      display: 'html',
      strokeColor: state.color,
      fillColor: state.color,
      fontSize: state.labelFontSize,
      anchorX: 'left',
      anchorY: 'top'
    });

    return { anchor, label };
  };

  H.plotIntoBoard = function(board, state, raw){
    H.removePlotObjects(board, state);

    const compiled = H.compileLatex(raw);
    const fn = compiled.fn;
    if (!fn) throw new Error('Der Ausdruck konnte nicht kompiliert werden.');

    state.graph = board.create('functiongraph', [fn], {
      name: '',
      strokeColor: state.color,
      highlightStrokeColor: state.color,
      strokeWidth: state.strokeWidth,
      fixed: true,
      withLabel: false
    });

    const labelPack = H.createFunctionLabel(board, fn, state);
    state.anchor = labelPack.anchor;
    state.text = labelPack.label;

    board.update();

    return compiled;
  };

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

  window.__liaLatexStudentPlotNeutralColor = currentNeutralColor;

  if (!window.__liaLatexStudentPlotThemeSync) {
    const listeners = new Set();
    let lastSig = themeSignature();

    function notify() {
      listeners.forEach(function(fn) {
        try { fn(); } catch (e) {}
      });
    }

    function check() {
      const sig = themeSignature();
      if (sig !== lastSig) {
        lastSig = sig;
        window.__liaLatexStudentPlotNeutralColor = currentNeutralColor;
        notify();
      }
    }

    window.__liaLatexStudentPlotThemeSync = {
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
  }

  window.__registerLiaLatexStudentPlotThemeListener = function(fn) {
    if (!window.__liaLatexStudentPlotThemeSync || !fn) return;
    window.__liaLatexStudentPlotThemeSync.listeners.add(fn);
    try { fn(); } catch (e) {}
  };

  window.renderPlotEingabeLatexFromSpec = function(uid, spec) {
    const root = document.getElementById('lia-plot-eingabe-' + uid);
    if (!root) return false;

    if ((root.dataset.spec || '') !== String(spec || '')) {
      root.dataset.spec = spec;
    }

    const cfg = H.parseInputSpec(spec);
    const state = window.__liaLatexStudentPlotStates[uid] || (window.__liaLatexStudentPlotStates[uid] = {});
    const inst = window.__liaLatexStudentPlotInstances[uid] || (window.__liaLatexStudentPlotInstances[uid] = {});

    state.uid = uid;
    state.boardId = cfg.boardId;
    state.name = cfg.name;
    state.color = cfg.color;
    state.placeholder = cfg.placeholder;
    state.dx = cfg.dx;
    state.dy = cfg.dy;
    state.strokeWidth = cfg.strokeWidth;
    state.labelFontSize = cfg.labelFontSize;

    function hasFullInstance(instance) {
      return !!(
        instance &&
        instance.built &&
        instance.ui &&
        instance.field &&
        instance.input &&
        instance.actions &&
        instance.btnPlot &&
        instance.btnClear &&
        instance.msg
      );
    }

    function mountInstance() {
      if (!hasFullInstance(inst)) return false;

      const uiMounted = inst.ui.parentNode === root;
      const msgMounted = inst.msg.parentNode === root;

      if (uiMounted && msgMounted) return true;

      while (root.firstChild) {
        root.removeChild(root.firstChild);
      }

      root.appendChild(inst.ui);
      root.appendChild(inst.msg);
      return true;
    }

    if (!hasFullInstance(inst)) {
      const ui = document.createElement('div');
      const field = document.createElement('div');
      const input = document.createElement('input');
      const actions = document.createElement('div');
      const btnPlot = document.createElement('button');
      const btnClear = document.createElement('button');
      const msg = document.createElement('div');

      input.type = 'text';
      input.inputMode = 'text';
      input.autocomplete = 'off';
      input.autocapitalize = 'off';
      input.spellcheck = false;

      btnPlot.className = 'lia-btn';
      btnPlot.type = 'button';
      btnPlot.textContent = 'Plotten';

      btnClear.className = 'lia-btn';
      btnClear.type = 'button';
      btnClear.textContent = 'Löschen';

      ui.appendChild(field);
      field.appendChild(input);
      ui.appendChild(actions);
      actions.appendChild(btnPlot);
      actions.appendChild(btnClear);
      root.appendChild(ui);
      root.appendChild(msg);

      inst.ui = ui;
      inst.field = field;
      inst.input = input;
      inst.actions = actions;
      inst.btnPlot = btnPlot;
      inst.btnClear = btnClear;
      inst.msg = msg;
      inst.built = true;

      function getBoard(){
        return (window.__boards && window.__boards[state.boardId]) || null;
      }

      function setMsg(text, isError){
        msg.textContent = text || '';
        msg.style.marginTop = '.45rem';
        msg.style.minHeight = '1.2em';
        msg.style.fontSize = '.95rem';
        msg.style.lineHeight = '1.25';
        msg.style.fontWeight = text ? '600' : '400';
        msg.style.color = text ? (isError ? '#b00020' : '#1d6f42') : '';
      }

      function doPlot(){
        const raw = String(input.value || '').trim();
        state.raw = raw;

        if (!raw) {
          setMsg('Bitte einen Funktionsterm eingeben.', true);
          return;
        }

        const board = getBoard();
        if (!board) {
          setMsg('Board "' + state.boardId + '" wurde nicht gefunden.', true);
          return;
        }

        try {
          H.plotIntoBoard(board, state, raw);
          setMsg('Graph geplottet.', false);
        } catch (err) {
          setMsg((err && err.message) ? err.message : 'Der Ausdruck konnte nicht geplottet werden.', true);
        }
      }

      function doClear(){
        state.raw = '';
        input.value = '';

        const board = getBoard();
        if (board) {
          H.removePlotObjects(board, state);
          board.update();
        }

        setMsg('', false);
      }

      btnPlot.addEventListener('click', doPlot);
      btnClear.addEventListener('click', doClear);

      input.addEventListener('keydown', function(ev){
        if (ev.key === 'Enter') {
          ev.preventDefault();
          doPlot();
        }
      });

      input.addEventListener('input', function() {
        state.raw = input.value;
      });

      inst.setMsg = setMsg;
    } else {
      mountInstance();
    }

    inst.input.placeholder = state.placeholder;
    inst.input.value = (typeof state.raw === 'string') ? state.raw : '';

    function ensureBtnInner(btn) {
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

    function px(v){
      const n = parseFloat(v);
      return Number.isFinite(n) ? n : 0;
    }

    function applyInputTheme() {
      const neutral = currentNeutralColor();
      const doc = themeDoc();
      const win = themeWin();
      const el = (doc && (doc.body || doc.documentElement)) || document.body || document.documentElement;
      const cs = win.getComputedStyle(el);

      root.style.width = '100%';
      root.style.margin = '.5rem 0 1rem 0';
      root.style.position = 'relative';

      inst.ui.style.display = 'flex';
      inst.ui.style.flexWrap = 'wrap';
      inst.ui.style.alignItems = 'flex-start';
      inst.ui.style.width = '100%';

      inst.field.style.flex = '1 1 22rem';
      inst.field.style.minWidth = '16rem';
      inst.field.style.display = 'flex';
      inst.field.style.alignItems = 'flex-start';

      inst.input.style.boxSizing = 'border-box';
      inst.input.style.width = '100%';
      inst.input.style.minWidth = '0';
      inst.input.style.margin = '0';

      inst.input.style.font = 'inherit';
      inst.input.style.fontSize = cs.fontSize;
      inst.input.style.fontFamily = cs.fontFamily;
      inst.input.style.fontWeight = cs.fontWeight;
      inst.input.style.lineHeight = '1.2';

      inst.input.style.color = cs.color || neutral;
      inst.input.style.background = 'transparent';
      inst.input.style.border = '1px solid ' + neutral;
      inst.input.style.borderRadius = '.4rem';
      inst.input.style.padding = '.55rem .75rem';
      inst.input.style.outline = 'none';
    }

    function applyButtonTheme(btn) {
      const c = currentNeutralColor();
      const cs = window.getComputedStyle(btn);
      const h = btn.offsetHeight;
      const inner = ensureBtnInner(btn);

      btn.style.color = c;
      btn.style.display = 'inline-flex';
      btn.style.alignItems = 'stretch';
      btn.style.justifyContent = 'center';
      btn.style.verticalAlign = 'top';
      btn.style.boxSizing = 'border-box';
      btn.style.textAlign = 'center';
      btn.style.minWidth = '8rem';

      if (h > 0) {
        btn.style.height = h + 'px';
        btn.style.minHeight = h + 'px';
      }

      btn.style.marginTop = '0';
      btn.style.marginBottom = '0';
      btn.style.marginLeft = '0';
      btn.style.marginRight = '0';

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
      inner.style.minWidth = '100%';
      inner.style.paddingTop = '0';
      inner.style.paddingBottom = '0';
      inner.style.paddingLeft = Math.max(px(cs.paddingLeft), 18) + 'px';
      inner.style.paddingRight = Math.max(px(cs.paddingRight), 18) + 'px';
      inner.style.lineHeight = '1';
      inner.style.transform = 'translateY(0px)';
      inner.style.whiteSpace = 'nowrap';
    }

    function applyTheme() {
      applyInputTheme();
      applyButtonTheme(inst.btnPlot);
      applyButtonTheme(inst.btnClear);

      inst.actions.style.display = 'inline-flex';
      inst.actions.style.flexDirection = 'row';
      inst.actions.style.flexWrap = 'nowrap';
      inst.actions.style.alignItems = 'flex-start';
      inst.actions.style.justifyContent = 'flex-start';
      inst.actions.style.whiteSpace = 'nowrap';
      inst.actions.style.marginTop = '0rem';
      inst.actions.style.marginLeft = '1.2rem';

      inst.btnPlot.style.marginRight = '1.2rem';
      inst.btnClear.style.marginLeft = '0rem';
    }

    applyTheme();

    if (!inst.themeRegistered) {
      inst.themeRegistered = true;

      if (window.__registerLiaLatexStudentPlotThemeListener) {
        window.__registerLiaLatexStudentPlotThemeListener(function() {
          applyTheme();
        });
      }
    }

    requestAnimationFrame(applyTheme);
    setTimeout(applyTheme, 0);
    setTimeout(applyTheme, 80);
    setTimeout(applyTheme, 200);
    setTimeout(applyTheme, 500);

    return true;
  };

  window.__bootstrapPlotInputs = function() {
    const nodes = document.querySelectorAll('[id^="lia-plot-eingabe-"][data-spec]');

    nodes.forEach(function(node) {
      const uid = String(node.id || '').replace(/^lia-plot-eingabe-/, '');
      const spec = String(node.dataset.spec || '');
      if (!uid || !spec) return;

      window.renderPlotEingabeLatexFromSpec(uid, spec);
    });
  };

  if (!window.__scheduleBootstrapPlotInputs) {
    window.__scheduleBootstrapPlotInputs = function() {
      if (window.__bootstrapPlotInputsRAF) return;
      window.__bootstrapPlotInputsRAF = requestAnimationFrame(function() {
        window.__bootstrapPlotInputsRAF = 0;
        try {
          if (window.__bootstrapPlotInputs) window.__bootstrapPlotInputs();
        } catch (e) {}
      });
    };
  }

  try {
    const mo = new MutationObserver(function(mutations) {
      let needsBootstrap = false;

      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];
        if (m.type !== 'childList') continue;

        const added = Array.from(m.addedNodes || []);
        for (let j = 0; j < added.length; j++) {
          const n = added[j];
          if (!n || n.nodeType !== 1) continue;

          if (
            (n.id && /^lia-plot-eingabe-/.test(n.id)) ||
            (n.querySelector && n.querySelector('[id^="lia-plot-eingabe-"][data-spec]'))
          ) {
            needsBootstrap = true;
            break;
          }
        }

        if (needsBootstrap) break;
      }

      if (needsBootstrap && window.__scheduleBootstrapPlotInputs) {
        window.__scheduleBootstrapPlotInputs();
      }
    });

    const root = document.body || document.documentElement;
    if (root) {
      mo.observe(root, {
        childList: true,
        subtree: true
      });
    }
  } catch (e) {}

  try {
    window.addEventListener('hashchange', function() {
      if (window.__scheduleBootstrapPlotInputs) window.__scheduleBootstrapPlotInputs();
    }, true);
  } catch (e) {}

  try {
    window.addEventListener('pageshow', function() {
      if (window.__scheduleBootstrapPlotInputs) window.__scheduleBootstrapPlotInputs();
    }, true);
  } catch (e) {}

  try {
    document.addEventListener('visibilitychange', function() {
      if (!document.hidden && window.__scheduleBootstrapPlotInputs) {
        window.__scheduleBootstrapPlotInputs();
      }
    }, true);
  } catch (e) {}

  try {
    if (window.__scheduleBootstrapPlotInputs) window.__scheduleBootstrapPlotInputs();
    setTimeout(function() {
      if (window.__scheduleBootstrapPlotInputs) window.__scheduleBootstrapPlotInputs();
    }, 80);
    setTimeout(function() {
      if (window.__scheduleBootstrapPlotInputs) window.__scheduleBootstrapPlotInputs();
    }, 220);
  } catch (e) {}
})();








































  // =========================
  // EINZELNER PUNKT AUF GRAPH
  // EINZELNER PUNKT AUF GRAPH
  // EINZELNER PUNKT AUF GRAPH
  // EINZELNER PUNKT AUF GRAPH
  // EINZELNER PUNKT AUF GRAPH
  // EINZELNER PUNKT AUF GRAPH
  // EINZELNER PUNKT AUF GRAPH
  // EINZELNER PUNKT AUF GRAPH
  // =========================


(function(){
  if (window.__punktGraphReady) {
    try {
      if (window.__bootstrapPunktGraphs) window.__bootstrapPunktGraphs();
    } catch (e) {}
    return;
  }
  window.__punktGraphReady = true;

  try {
    if (window.JXG && JXG.Options && JXG.Options.text) {
      JXG.Options.text.useMathJax = true;
    }
  } catch (e) {}

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
  window.__pointStates = window.__pointStates || {};
  window.__pointGraphs = window.__pointGraphs || {};
  window.__pointGraphStates = window.__pointGraphStates || {};
  window.__pointNeutralColor = currentNeutralColor;
  window.__punktGraphInstances = window.__punktGraphInstances || {};

  if (!window.__liaThemeSync) {
    const listeners = new Set();
    let lastSig = themeSignature();

    function notify() {
      listeners.forEach(function(fn) {
        try { fn(); } catch (e) {}
      });
    }

    function check() {
      const sig = themeSignature();
      if (sig !== lastSig) {
        lastSig = sig;
        window.__pointNeutralColor = currentNeutralColor;
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

  if (typeof window.__registerLiaThemeListener !== 'function') {
    window.__registerLiaThemeListener = function(fn) {
      if (!window.__liaThemeSync || !fn) return;
      window.__liaThemeSync.listeners.add(fn);
      try { fn(); } catch (e) {}
    };
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

  function splitSpec(spec) {
    return unquote(spec)
      .split(';')
      .map(function(s) { return s.trim(); });
  }

  function getTargetFromSpec(spec) {
    const parts = splitSpec(spec);

    return {
      boardId: parts[0] || '',
      name:    parts[1] || 'A',
      expr:    parts[2] || '',
      eps:     (function() {
        const v = parseFloat((parts[3] || '0.05').replace(',', '.'));
        return Number.isFinite(v) ? Math.abs(v) : 0.05;
      })()
    };
  }

  function getGraphKey(target) {
    return String(target.name || '') + '||' + String(target.expr || '');
  }

  function texName(name) {
    const s = String(name || '').trim();
    return s ? '\\(' + s + '\\)' : '\\(A\\)';
  }

  function ensureBuckets(boardId) {
    window.__points[boardId] = window.__points[boardId] || {};
    window.__pointStates[boardId] = window.__pointStates[boardId] || {};
    window.__pointGraphs[boardId] = window.__pointGraphs[boardId] || {};
    window.__pointGraphStates[boardId] = window.__pointGraphStates[boardId] || {};
  }

  function stylePointLabel(pt) {
    if (!pt || typeof pt.setAttribute !== 'function') return;

    const c = currentNeutralColor();

    try {
      pt.setAttribute({
        label: {
          strokeColor: c,
          fillColor: c,
          fontSize: 24,
          parse: false,
          useMathJax: true
        }
      });
    } catch (e) {}

    try {
      if (pt.label && typeof pt.label.setAttribute === 'function') {
        pt.label.setAttribute({
          strokeColor: c,
          fillColor: c,
          fontSize: 24,
          parse: false,
          useMathJax: true
        });
      }
    } catch (e) {}
  }

  function refreshAllPointLabels() {
    try {
      const boards = window.__points || {};
      Object.keys(boards).forEach(function(boardId) {
        const entries = boards[boardId] || {};
        Object.keys(entries).forEach(function(name) {
          stylePointLabel(entries[name]);
        });
      });
    } catch (e) {}
  }

  function savePointState(boardId, name, pt) {
    if (!pt) return;
    ensureBuckets(boardId);

    let fixed = false;
    try {
      fixed = !!(pt.getAttribute ? pt.getAttribute('fixed') : pt.visProp && pt.visProp.fixed);
    } catch (e) {}

    try {
      window.__pointStates[boardId][name] = {
        x: pt.X(),
        y: pt.Y(),
        fixed: fixed
      };
    } catch (e) {}
  }

  function movePointTo(pt, x, y) {
    if (!pt) return false;

    try {
      if (typeof pt.moveTo === 'function') {
        pt.moveTo([x, y], 0);
        return true;
      }
    } catch (e) {}

    try {
      if (typeof pt.setPositionDirectly === 'function' && typeof JXG !== 'undefined') {
        pt.setPositionDirectly(JXG.COORDS_BY_USER, [x, y]);
        return true;
      }
    } catch (e) {}

    try {
      if (typeof pt.setPosition === 'function' && typeof JXG !== 'undefined') {
        pt.setPosition(JXG.COORDS_BY_USER, [x, y]);
        return true;
      }
    } catch (e) {}

    return false;
  }

  function bindPointPersistence(boardId, name, pt) {
    if (!pt || pt.__liaStateBound) return;
    pt.__liaStateBound = true;

    const persist = function() {
      savePointState(boardId, name, pt);
    };

    try { pt.on('drag', persist); } catch (e) {}
    try { pt.on('up', persist); } catch (e) {}
    try { pt.on('move', persist); } catch (e) {}

    persist();
  }

  function createPoint(board, boardId, name, x0, y0) {
    try {
      const pt = board.create('point', [x0, y0], {
        name: texName(name),
        fixed: false,
        withLabel: true,
        showInfobox: false,
        strokeColor: '#ff00ff',
        fillColor: '#ff00ff',
        highlightStrokeColor: '#ff00ff',
        highlightFillColor: '#ff00ff',
        strokeWidth: 3,
        highlightStrokeWidth: 3,
        face: 'x',
        size: 7,
        label: {
          strokeColor: currentNeutralColor(),
          fillColor: currentNeutralColor(),
          fontSize: 24,
          parse: false,
          useMathJax: true
        }
      });

      ensureBuckets(boardId);
      window.__points[boardId][name] = pt;

      stylePointLabel(pt);
      bindPointPersistence(boardId, name, pt);
      savePointState(boardId, name, pt);

      return pt;
    } catch (e) {
      return null;
    }
  }

  function getLivePointOnCurrentBoard(boardId, name) {
    const board = window.__boards && window.__boards[boardId];
    const pt = window.__points && window.__points[boardId] && window.__points[boardId][name];

    if (!board || !pt) return null;

    try {
      if (pt.board === board) return pt;
    } catch (e) {}

    return null;
  }

  function restorePointFromState(boardId, name) {
    const board = window.__boards && window.__boards[boardId];
    const state = window.__pointStates && window.__pointStates[boardId] && window.__pointStates[boardId][name];

    if (!board || !state) return null;

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (!pt) {
      pt = createPoint(board, boardId, name, state.x, state.y);
      if (!pt) return null;
    }

    movePointTo(pt, state.x, state.y);

    try {
      pt.setAttribute({ fixed: !!state.fixed });
    } catch (e) {}

    stylePointLabel(pt);
    bindPointPersistence(boardId, name, pt);
    savePointState(boardId, name, pt);

    try { board.update(); } catch (e) {}
    return pt;
  }

  window.restorePointGraphFromSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    if (!target.boardId || !target.name) return null;
    return restorePointFromState(target.boardId, target.name);
  };

  window.getPointGraphFromSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const name = target.name;

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (pt) return pt;

    return restorePointFromState(boardId, name);
  };

  window.ensurePointGraphFromSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const name = target.name;

    const board = window.__boards && window.__boards[boardId];
    if (!board || !name) return false;

    ensureBuckets(boardId);

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (pt) {
      stylePointLabel(pt);
      bindPointPersistence(boardId, name, pt);
      savePointState(boardId, name, pt);
      try { board.update(); } catch (e) {}
      return true;
    }

    pt = restorePointFromState(boardId, name);
    if (pt) {
      try { board.update(); } catch (e) {}
      return true;
    }

    const x0 = Math.random();
    const y0 = Math.random();

    pt = createPoint(board, boardId, name, x0, y0);
    if (!pt) return false;

    try { board.update(); } catch (e) {}
    return true;
  };

  function normalizeExpr(expr) {
    expr = unquote(expr)
      .trim()
      .replace(/\u2212/g, '-')
      .replace(/\u00B7/g, '*')
      .replace(/\s+/g, ' ');

    expr = expr.replace(/^\s*(?:y|f\s*\(\s*x\s*\))\s*=\s*/i, '');
    expr = expr.replace(/(\d),(\d)/g, '$1.$2');
    expr = expr.replace(/\^/g, '**');
    expr = expr.replace(/\bln\s*\(/gi, 'log(');
    expr = expr.replace(/\bpi\b/g, 'PI');
    expr = expr.replace(/\be\b/g, 'E');

    const FN =
      '(?:sin|cos|tan|asin|acos|atan|sqrt|abs|log|exp|floor|ceil|round|min|max|pow)';

    expr = expr.replace(new RegExp('(\\d)\\s*(x|PI|E|\\()', 'gi'), '$1*$2');
    expr = expr.replace(new RegExp('(\\))\\s*(x|PI|E|\\()', 'gi'), '$1*$2');
    expr = expr.replace(new RegExp('(x|PI|E)\\s*(\\()', 'gi'), '$1*$2');
    expr = expr.replace(new RegExp('(\\d|x|\\)|PI|E)\\s*(' + FN + '\\s*\\()', 'gi'), '$1*$2');

    return expr.trim();
  }

  function buildGraphFunction(expr) {
    const src = normalizeExpr(expr);

    if (!src) {
      throw new Error('Leerer Term');
    }

    if (/[^0-9A-Za-z_+\-*/().,\s]/.test(src)) {
      throw new Error('Unerlaubte Zeichen im Term');
    }

    const ids = src.match(/[A-Za-z_]+/g) || [];
    const allowed = new Set([
      'x',
      'sin', 'cos', 'tan',
      'asin', 'acos', 'atan',
      'sqrt', 'abs', 'log', 'exp',
      'floor', 'ceil', 'round',
      'min', 'max', 'pow',
      'PI', 'E'
    ]);

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      if (!allowed.has(id)) {
        throw new Error('Unerlaubter Bezeichner: ' + id);
      }
    }

    return new Function(
      'x',
      `
      const {
        sin, cos, tan,
        asin, acos, atan,
        sqrt, abs, log, exp,
        floor, ceil, round,
        min, max, pow,
        PI, E
      } = Math;

      return (${src});
      `
    );
  }

  function getLiveGraphOnCurrentBoard(boardId, graphKey) {
    const board = window.__boards && window.__boards[boardId];
    const graph = window.__pointGraphs && window.__pointGraphs[boardId] && window.__pointGraphs[boardId][graphKey];

    if (!board || !graph) return null;

    try {
      if (graph.board === board) return graph;
    } catch (e) {}

    return null;
  }

  function createGraphFromSpec(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const expr = target.expr;
    const board = window.__boards && window.__boards[boardId];
    const graphKey = getGraphKey(target);

    if (!board || !expr) return null;

    let f;
    try {
      f = buildGraphFunction(expr);
    } catch (e) {
      return null;
    }

    try {
      const graph = board.create('functiongraph', [
        function(x) {
          return f(x);
        }
      ], {
        strokeColor: '#b41f65',
        highlightStrokeColor: '#b41f65',
        strokeWidth: 3,
        fixed: true
      });

      ensureBuckets(boardId);
      window.__pointGraphs[boardId][graphKey] = graph;
      window.__pointGraphStates[boardId][graphKey] = { visible: true };

      return graph;
    } catch (e) {
      return null;
    }
  }

  window.showGraphFromPointGraphSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const graphKey = getGraphKey(target);
    const board = window.__boards && window.__boards[boardId];

    if (!board || !target.expr) return false;

    ensureBuckets(boardId);

    let graph = getLiveGraphOnCurrentBoard(boardId, graphKey);

    if (!graph) {
      graph = createGraphFromSpec(spec);
      if (!graph) return false;
    } else {
      try {
        graph.setAttribute({
          visible: true,
          strokeColor: '#b41f65',
          highlightStrokeColor: '#b41f65',
          strokeWidth: 3,
          fixed: true
        });
      } catch (e) {}
      window.__pointGraphStates[boardId][graphKey] = { visible: true };
    }

    try { board.update(); } catch (e) {}
    return true;
  };

  window.restorePointGraphVisualState = function(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const graphKey = getGraphKey(target);

    if (!boardId) return false;

    if (
      window.__pointGraphStates &&
      window.__pointGraphStates[boardId] &&
      window.__pointGraphStates[boardId][graphKey] &&
      window.__pointGraphStates[boardId][graphKey].visible
    ) {
      return window.showGraphFromPointGraphSpec(spec);
    }

    return false;
  };

  window.checkPointGraphFromSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const expr = target.expr;
    const eps = target.eps;

    if (!boardId || !target.name || !expr) return false;

    const pt = window.getPointGraphFromSpec(spec);
    if (!pt) return false;

    let f;
    try {
      f = buildGraphFunction(expr);
    } catch (e) {
      return false;
    }

    let x, y, fy;
    try {
      x = Number(pt.X());
      y = Number(pt.Y());
      fy = Number(f(x));
    } catch (e) {
      return false;
    }

    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(fy)) {
      return false;
    }

    return Math.abs(y - fy) <= eps;
  };

  window.finalizePointGraphFromSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const name = target.name;
    const board = window.__boards && window.__boards[boardId];

    if (!boardId) return false;

    const pt = window.getPointGraphFromSpec(spec);
    if (pt) {
      try {
        pt.setAttribute({ fixed: true });
      } catch (e) {}
      savePointState(boardId, name, pt);
    }

    const shown = window.showGraphFromPointGraphSpec(spec);

    try { if (board) board.update(); } catch (e) {}

    return !!(pt || shown);
  };

  window.__checkPointGraphFromSpec = function(spec) {
    const ok = !!(
      typeof window.checkPointGraphFromSpec === 'function' &&
      window.checkPointGraphFromSpec(spec)
    );

    if (ok && typeof window.finalizePointGraphFromSpec === 'function') {
      window.finalizePointGraphFromSpec(spec);
    }

    return ok;
  };

  function findCheckButton(checkRoot) {
    return checkRoot.querySelector(
      'button.lia-btn, input.lia-btn, button, input[type="button"], input[type="submit"]'
    );
  }

  function findAllQuizButtons(checkRoot) {
    return Array.from(
      checkRoot.querySelectorAll(
        'button.lia-btn, input.lia-btn, button, input[type="button"], input[type="submit"]'
      )
    );
  }

  function ensureInnerSpan(btn) {
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

  function looksLikeResolveButton(checkRoot, targetBtn) {
    const buttons = findAllQuizButtons(checkRoot);
    const idx = buttons.indexOf(targetBtn);
    const text = String(targetBtn.textContent || targetBtn.value || '').trim().toLowerCase();

    if (idx >= 1) return true;
    if (/lös|solution|aufl|show/.test(text)) return true;

    return false;
  }

  function applyPunktGraphUi(uid) {
    const uiRoot = document.getElementById('graph-ui-' + uid);
    const taskRoot = document.getElementById('graph-task-' + uid);
    const checkRoot = document.getElementById('graph-check-' + uid);
    const btn = document.getElementById('graph-btn-' + uid);

    if (!uiRoot || !taskRoot || !checkRoot || !btn) return false;

    const spec = uiRoot.dataset.spec || '';

    uiRoot.style.display = 'inline-flex';
    uiRoot.style.alignItems = 'flex-start';
    uiRoot.style.gap = '.6rem';
    uiRoot.style.flexWrap = 'nowrap';

    taskRoot.style.display = 'inline-flex';
    taskRoot.style.alignItems = 'flex-start';
    taskRoot.style.alignSelf = 'flex-start';
    taskRoot.style.margin = '0';
    taskRoot.style.padding = '0';

    checkRoot.style.display = 'inline-flex';
    checkRoot.style.alignItems = 'flex-start';
    checkRoot.style.alignSelf = 'flex-start';
    checkRoot.style.margin = '0';
    checkRoot.style.padding = '0';

    Array.from(checkRoot.children).forEach(function(el) {
      try { el.style.margin = '0'; } catch (e) {}
    });

    const c = (window.__pointNeutralColor ? window.__pointNeutralColor() : '#000');
    btn.style.color = c;

    const checkBtn = findCheckButton(checkRoot);
    if (!checkBtn) {
      try {
        const inner = ensureInnerSpan(btn);
        btn.style.display = 'inline-flex';
        btn.style.alignItems = 'center';
        btn.style.justifyContent = 'center';
        btn.style.verticalAlign = 'top';
        btn.style.boxSizing = 'border-box';
        btn.style.margin = '0';
        inner.style.display = 'inline-flex';
        inner.style.alignItems = 'center';
        inner.style.justifyContent = 'center';
        inner.style.whiteSpace = 'nowrap';
        inner.style.transform = 'translateY(0px)';
      } catch (e) {}

      if (typeof window.restorePointGraphFromSpec === 'function') {
        window.restorePointGraphFromSpec(spec);
      }
      if (typeof window.restorePointGraphVisualState === 'function') {
        window.restorePointGraphVisualState(spec);
      }
      return true;
    }

    const cs = window.getComputedStyle(checkBtn);
    const h = checkBtn.offsetHeight;
    const inner = ensureInnerSpan(btn);

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
    inner.style.transform = 'translateY(0px)';
    inner.style.whiteSpace = 'nowrap';

    if (typeof window.restorePointGraphFromSpec === 'function') {
      window.restorePointGraphFromSpec(spec);
    }

    if (typeof window.restorePointGraphVisualState === 'function') {
      window.restorePointGraphVisualState(spec);
    }

    return true;
  }

  window.renderPunktGraphFromSpec = function(uid, spec) {
    const uiRoot = document.getElementById('graph-ui-' + uid);
    const taskRoot = document.getElementById('graph-task-' + uid);
    const checkRoot = document.getElementById('graph-check-' + uid);

    if (!uiRoot || !taskRoot || !checkRoot) return false;

    if ((uiRoot.dataset.spec || '') !== String(spec || '')) {
      uiRoot.dataset.spec = spec;
    }

    let btn = document.getElementById('graph-btn-' + uid);
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'graph-btn-' + uid;
      btn.className = 'lia-btn';
      btn.type = 'button';
      btn.textContent = 'Punkt erzeugen';
      taskRoot.appendChild(btn);
    }

    if (!btn.__liaPointGraphEnsureBound) {
      btn.__liaPointGraphEnsureBound = true;
      btn.addEventListener('click', function() {
        const curSpec = uiRoot.dataset.spec || '';
        if (typeof window.ensurePointGraphFromSpec === 'function') {
          window.ensurePointGraphFromSpec(curSpec);
        }
      });
    }

    applyPunktGraphUi(uid);

    if (!checkRoot.__liaPointGraphUiObserved) {
      checkRoot.__liaPointGraphUiObserved = true;

      try {
        const mo = new MutationObserver(function() {
          if (checkRoot.__liaPointGraphUiScheduled) return;
          checkRoot.__liaPointGraphUiScheduled = true;
          requestAnimationFrame(function() {
            checkRoot.__liaPointGraphUiScheduled = false;
            applyPunktGraphUi(uid);
          });
        });
        mo.observe(checkRoot, { childList: true, subtree: true });
      } catch (e) {}

      try {
        checkRoot.addEventListener('click', function(e) {
          const targetBtn = e.target && e.target.closest
            ? e.target.closest('button, input[type="button"], input[type="submit"]')
            : null;

          if (!targetBtn || !checkRoot.contains(targetBtn)) return;
          if (!looksLikeResolveButton(checkRoot, targetBtn)) return;

          setTimeout(function() {
            const curSpec = uiRoot.dataset.spec || '';
            if (typeof window.finalizePointGraphFromSpec === 'function') {
              window.finalizePointGraphFromSpec(curSpec);
            }
          }, 0);

          setTimeout(function() {
            const curSpec = uiRoot.dataset.spec || '';
            if (typeof window.finalizePointGraphFromSpec === 'function') {
              window.finalizePointGraphFromSpec(curSpec);
            }
          }, 80);
        });
      } catch (e) {}

      if (window.__registerLiaThemeListener) {
        window.__registerLiaThemeListener(function() {
          applyPunktGraphUi(uid);
        });
      }
    }

    setTimeout(function() {
      if (typeof window.restorePointGraphFromSpec === 'function') {
        window.restorePointGraphFromSpec(spec);
      }
      if (typeof window.restorePointGraphVisualState === 'function') {
        window.restorePointGraphVisualState(spec);
      }
    }, 0);

    setTimeout(function() {
      if (typeof window.restorePointGraphFromSpec === 'function') {
        window.restorePointGraphFromSpec(spec);
      }
      if (typeof window.restorePointGraphVisualState === 'function') {
        window.restorePointGraphVisualState(spec);
      }
    }, 120);

    return true;
  };

  window.__bootstrapPunktGraphs = function() {
    const nodes = document.querySelectorAll('[id^="graph-ui-"][data-spec]');

    nodes.forEach(function(node) {
      const uid = String(node.id || '').replace(/^graph-ui-/, '');
      const spec = String(node.dataset.spec || '');
      if (!uid || !spec) return;

      window.renderPunktGraphFromSpec(uid, spec);
    });

    refreshAllPointLabels();
  };

  if (!window.__scheduleBootstrapPunktGraphs) {
    window.__scheduleBootstrapPunktGraphs = function() {
      if (window.__bootstrapPunktGraphsRAF) return;
      window.__bootstrapPunktGraphsRAF = requestAnimationFrame(function() {
        window.__bootstrapPunktGraphsRAF = 0;
        try {
          if (window.__bootstrapPunktGraphs) window.__bootstrapPunktGraphs();
        } catch (e) {}
      });
    };
  }

  try {
    const mo = new MutationObserver(function(mutations) {
      let needsBootstrap = false;

      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];
        if (m.type !== 'childList') continue;

        const added = Array.from(m.addedNodes || []);
        for (let j = 0; j < added.length; j++) {
          const n = added[j];
          if (!n || n.nodeType !== 1) continue;

          if (
            (n.id && /^graph-ui-/.test(n.id)) ||
            (n.querySelector && n.querySelector('[id^="graph-ui-"][data-spec]'))
          ) {
            needsBootstrap = true;
            break;
          }
        }

        if (needsBootstrap) break;
      }

      if (needsBootstrap && window.__scheduleBootstrapPunktGraphs) {
        window.__scheduleBootstrapPunktGraphs();
      }
    });

    const root = document.body || document.documentElement;
    if (root) {
      mo.observe(root, {
        childList: true,
        subtree: true
      });
    }
  } catch (e) {}

  window.__registerLiaThemeListener(refreshAllPointLabels);

  try {
    if (window.__scheduleBootstrapPunktGraphs) window.__scheduleBootstrapPunktGraphs();
    setTimeout(function() {
      if (window.__scheduleBootstrapPunktGraphs) window.__scheduleBootstrapPunktGraphs();
    }, 80);
    setTimeout(function() {
      if (window.__scheduleBootstrapPunktGraphs) window.__scheduleBootstrapPunktGraphs();
    }, 220);
  } catch (e) {}
})();































@end










































@Koordinatensystem
<div>

``` javascript @JSX.Graph




(function () {
  JXG.Options.text.useMathJax = true;

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

  function getBoardStateStore() {
    window.__coordBoardStates = window.__coordBoardStates || {};
    return window.__coordBoardStates;
  }

  function isValidBBox(bb) {
    return Array.isArray(bb) &&
      bb.length === 4 &&
      bb.every(v => Number.isFinite(v)) &&
      bb[2] > bb[0] &&
      bb[1] > bb[3];
  }

  function loadStoredBoardState(id) {
    const store = getBoardStateStore();
    const st = store[id];
    if (!st) return null;

    const width = Math.round(st.width);
    const height = Math.round(st.height);
    const bbox = Array.isArray(st.bbox) ? st.bbox.slice() : null;

    if (!(width > 0) || !(height > 0) || !isValidBBox(bbox)) return null;

    return { width, height, bbox };
  }

  function getSafeBBox(board) {
    try {
      const bb = board.getBoundingBox();
      if (
        Array.isArray(bb) &&
        bb.length === 4 &&
        bb.every(v => Number.isFinite(v)) &&
        bb[2] > bb[0] &&
        bb[1] > bb[3]
      ) {
        return bb.slice();
      }
    } catch (e) {}

    return INITIAL_BBOX.slice();
  }

  function saveBoardState(board) {
    if (!board || !board.containerObj) return;
    if (board.__restoreLockUntil && Date.now() < board.__restoreLockUntil) return;

    const bbox = getSafeBBox(board);
    const width = Math.round(board.containerObj.clientWidth || 0);
    const height = Math.round(board.containerObj.clientHeight || 0);

    if (!(width > 0) || !(height > 0) || !isValidBBox(bbox)) return;

    getBoardStateStore()[cfg.id] = {
      width: width,
      height: height,
      bbox: bbox.slice()
    };
  }

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

  function callIfFunction(fn) {
    if (typeof fn !== 'function') return;
    try { fn(); } catch (e) {}
  }

  function runExternalBootstraps() {
    callIfFunction(window.__bootstrapAxisTitles);
    callIfFunction(window.__bootstrapPlotFunctions);
    callIfFunction(window.__bootstrapPlotInputs);
    callIfFunction(window.__bootstrapErzeugePunkte);
    callIfFunction(window.__bootstrapPunktGraphs);
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
    function usableWidth(node) {
      if (!node) return 0;

      try {
        const cs = window.getComputedStyle(node);
        if (cs.display === 'none' || cs.visibility === 'hidden') return 0;

        const w = Math.round(node.getBoundingClientRect().width || 0);
        return w > 250 ? w : 0;
      } catch (e) {
        return 0;
      }
    }

    if (el) {
      const oldWidth = el.style.width;
      const oldMaxWidth = el.style.maxWidth;
      const oldMinWidth = el.style.minWidth;
      const oldBoxSizing = el.style.boxSizing;

      try {
        el.style.width = '100%';
        el.style.maxWidth = 'none';
        el.style.minWidth = '0';
        el.style.boxSizing = 'border-box';

        const measured = usableWidth(el);
        if (measured) return measured;
      } catch (e) {
      } finally {
        el.style.width = oldWidth;
        el.style.maxWidth = oldMaxWidth;
        el.style.minWidth = oldMinWidth;
        el.style.boxSizing = oldBoxSizing;
      }
    }

    let cur = el ? el.parentElement : null;
    while (cur && cur !== document.body && cur !== document.documentElement) {
      const w = usableWidth(cur);
      if (w) return w;
      cur = cur.parentElement;
    }

    try {
      const fallback =
        document.querySelector('.reveal .slides section.present') ||
        document.querySelector('.lia-slide') ||
        document.querySelector('.lia-content') ||
        document.querySelector('main') ||
        document.querySelector('article');

      const w = usableWidth(fallback);
      if (w) return w;
    } catch (e) {}

    return 900;
  }

  function maxBoardWidth(board) {
    return getConstrainedAncestorWidth(board.containerObj);
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

  function computeResizeBBox(width, height, anchorBBox) {
    const bb = (Array.isArray(anchorBBox) && anchorBBox.length === 4)
      ? anchorBBox
      : INITIAL_BBOX;

    const xmin  = bb[0];
    const ymax  = bb[1];
    const xspan = bb[2] - bb[0];
    const yspan = xspan * (height / width);

    return [xmin, ymax, xmin + xspan, ymax - yspan];
  }

  function applyBoardSize(board, desiredWidth, desiredHeight, useInitialBBox, anchorBBox) {
    if (!board || !board.containerObj) return null;

    const width  = clampWidth(board, desiredWidth);
    const height = clampHeight(desiredHeight);

    const basisBBox = useInitialBBox
      ? INITIAL_BBOX.slice()
      : getSafeBBox(board);

    const resizeAnchorBBox = useInitialBBox
      ? INITIAL_BBOX.slice()
      : (
          Array.isArray(anchorBBox) && anchorBBox.length === 4
            ? anchorBBox.slice()
            : basisBBox.slice()
        );

    board.containerObj.style.width = width + 'px';
    board.containerObj.style.height = height + 'px';

    try {
      board.resizeContainer(width, height, false, true);
    } catch (e) {}

    const bb = useInitialBBox
      ? INITIAL_BBOX.slice()
      : computeResizeBBox(width, height, resizeAnchorBBox);

    try {
      board.setBoundingBox(bb, true);
    } catch (e) {}

    try {
      board.update();
    } catch (e) {}

    saveBoardState(board);
    return { width, height };
  }

  function fitBoardSize(board) {
    if (!board || !board.containerObj) return;

    const autoMode = (manualWidth == null || manualHeight == null);

    if (autoMode) {
      const autoWidth = getConstrainedAncestorWidth(board.containerObj.parentElement);
      const preferredWidth = INITIAL_WIDTH != null ? INITIAL_WIDTH : autoWidth;
      const size = solveAspectFittedSize(board, preferredWidth, INITIAL_RATIO);
      applyBoardSize(board, size.width, size.height, true, INITIAL_BBOX);
      return;
    }

    applyBoardSize(board, manualWidth, manualHeight, false, getSafeBBox(board));
  }

  function restoreSavedBoardState(board) {
    if (!board || !board.containerObj) return false;

    const st = loadStoredBoardState(cfg.id);
    if (!st) return false;

    manualWidth = st.width;
    manualHeight = st.height;

    const width = clampWidth(board, st.width);
    const height = clampHeight(st.height);

    board.__restoreLockUntil = Date.now() + 500;

    board.containerObj.style.width = width + 'px';
    board.containerObj.style.height = height + 'px';

    try {
      board.resizeContainer(width, height, false, true);
    } catch (e) {}

    try {
      board.setBoundingBox(st.bbox.slice(), true);
    } catch (e) {}

    try {
      board.update();
    } catch (e) {}

    return true;
  }

  const PRESET_STATE = loadStoredBoardState(cfg.id);
  const START_BBOX = PRESET_STATE ? PRESET_STATE.bbox.slice() : INITIAL_BBOX.slice();

  if (PRESET_STATE) {
    manualWidth = PRESET_STATE.width;
    manualHeight = PRESET_STATE.height;

    try {
      jxgbox.style.width = Math.round(PRESET_STATE.width) + 'px';
      jxgbox.style.height = Math.round(PRESET_STATE.height) + 'px';
    } catch (e) {}
  }

  try {
    jxgbox.style.visibility = 'hidden';
  } catch (e) {}

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
        startH: board.containerObj.clientHeight,
        anchorBBox: getSafeBBox(board)
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

      applyBoardSize(board, manualWidth, manualHeight, false, drag.anchorBBox);
      applyBoardFrame(board);
      applyNavColors(board);
      applyGridColor(board, getGridColor('#0b5fff'));
      applyAxisColors(board);
      applyAdaptiveTicks(board);
      updateStickyTickLabelPositions(board);
      styleResizeHandle(handle);
      runExternalBootstraps();
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
    if (pxPerMajor >= 220) return 9;
    if (pxPerMajor >= 120) return 3;
    if (pxPerMajor >= 60)  return 1;
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

  function buildStickyAxes(board, axisCol) {
    const xAxis = board.create('axis', [[0, 0], [1, 0]], {
      strokeColor: axisCol,
      highlightStrokeColor: axisCol,
      strokeWidth: 2.5,
      name: '',
      withLabel: false,
      fixed: true,
      position: 'sticky',
      anchor: 'left right',
      anchorDist: '24px',
      ticksAutoPos: false,
      ticks: {
        insertTicks: false,
        ticksDistance: 1,
        strokeWidth: 1.75,
        minorTicks: 1,
        drawLabels: true,
        label: {
          fontSize: 18,
          strokeColor: axisCol,
          fillColor: axisCol,
          anchorX: 'middle',
          anchorY: 'top',
          offset: [0, 10]
        }
      }
    });

    const yAxis = board.create('axis', [[0, 0], [0, 1]], {
      strokeColor: axisCol,
      highlightStrokeColor: axisCol,
      strokeWidth: 2.5,
      name: '',
      withLabel: false,
      fixed: true,
      position: 'sticky',
      anchor: 'left right',
      anchorDist: '24px',
      ticksAutoPos: false,
      ticks: {
        insertTicks: false,
        ticksDistance: 1,
        strokeWidth: 1.75,
        minorTicks: 1,
        drawLabels: true,
        label: {
          fontSize: 18,
          strokeColor: axisCol,
          fillColor: axisCol,
          anchorX: 'right',
          anchorY: 'middle',
          offset: [-10, 0]
        }
      }
    });

    board.defaultAxes = { x: xAxis, y: yAxis };
  }

  function updateStickyTickLabelPositions(board) {
    if (!board || !board.defaultAxes) return;

    const bb = getSafeBBox(board);
    const xmin = bb[0];
    const ymax = bb[1];
    const xmax = bb[2];
    const ymin = bb[3];

    const xAxis = board.defaultAxes.x;
    const yAxis = board.defaultAxes.y;

    let xLabel;
    if (0 > ymax) {
      xLabel = {
        anchorX: 'middle',
        anchorY: 'top',
        offset: [0, -5]
      };
    } else if (0 < ymin) {
      xLabel = {
        anchorX: 'middle',
        anchorY: 'bottom',
        offset: [0, 5]
      };
    } else {
      xLabel = {
        anchorX: 'middle',
        anchorY: 'top',
        offset: [0, -5]
      };
    }

    let yLabel;
    if (0 < xmin) {
      yLabel = {
        anchorX: 'left',
        anchorY: 'middle',
        offset: [10, 0]
      };
    } else if (0 > xmax) {
      yLabel = {
        anchorX: 'right',
        anchorY: 'middle',
        offset: [-10, 0]
      };
    } else {
      yLabel = {
        anchorX: 'right',
        anchorY: 'middle',
        offset: [-10, 0]
      };
    }

    try {
      xAxis.setAttribute({
        ticks: { label: xLabel }
      });
    } catch (e) {}

    try {
      yAxis.setAttribute({
        ticks: { label: yLabel }
      });
    } catch (e) {}

    try {
      if (xAxis.defaultTicks) xAxis.defaultTicks.setAttribute({ label: xLabel });
      if (yAxis.defaultTicks) yAxis.defaultTicks.setAttribute({ label: yLabel });
    } catch (e) {}

    try {
      board.update();
    } catch (e) {}
  }

  const axisCol = neutralColor();
  const gridCol = getGridColor('#0b5fff');

  const board = JXG.JSXGraph.initBoard(jxgbox, {
    axis: false,
    showNavigation: true,
    showCopyright: false,
    boundingbox: START_BBOX,
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
    }
  });

  buildStickyAxes(board, axisCol);
  updateStickyTickLabelPositions(board);

  board.create('grid', [board.defaultAxes.x, board.defaultAxes.y], {
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
      dash: 1,
      drawZero: false
    }
  });

  window.__boards = window.__boards || {};
  window.__boards[cfg.id] = board;

  window.__liaCoordHooks = window.__liaCoordHooks || {};

  window.__liaCoordHooks[cfg.id] = function() {
    try { applyBoardFrame(board); } catch (e) {}
    try { applyNavColors(board); } catch (e) {}
    try { applyGridColor(board, getGridColor('#0b5fff')); } catch (e) {}
    try { applyAxisColors(board); } catch (e) {}
    try { applyAdaptiveTicks(board); } catch (e) {}
    try { updateStickyTickLabelPositions(board); } catch (e) {}
    try { ensureResizeHandle(board); } catch (e) {}
    runExternalBootstraps();
  };

  window.__liaRunCoordHooks = function() {
    const hooks = window.__liaCoordHooks || {};
    Object.keys(hooks).forEach(function(id) {
      try { hooks[id](); } catch (e) {}
    });
    runExternalBootstraps();
  };

  const hadSavedState = restoreSavedBoardState(board);
  if (!hadSavedState) {
    fitBoardSize(board);
  }

  function finalizeBoardAppearance() {
    applyBoardFrame(board);
    applyNavColors(board);
    applyGridColor(board, getGridColor('#0b5fff'));
    applyAxisColors(board);
    applyAdaptiveTicks(board);
    updateStickyTickLabelPositions(board);
    ensureResizeHandle(board);
    runExternalBootstraps();

    try {
      board.containerObj.style.visibility = 'visible';
    } catch (e) {}
  }

  if (hadSavedState) {
    let shown = false;

    const showBoard = () => {
      if (shown) return;
      shown = true;
      restoreSavedBoardState(board);
      finalizeBoardAppearance();
    };

    requestAnimationFrame(() => {
      restoreSavedBoardState(board);
      requestAnimationFrame(showBoard);
    });

    setTimeout(showBoard, 120);
  } else {
    finalizeBoardAppearance();
  }

  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      applyBoardFrame(board);
      applyNavColors(board);
      applyGridColor(board, getGridColor('#0b5fff'));
      applyAxisColors(board);
      applyAdaptiveTicks(board);
      updateStickyTickLabelPositions(board);
      ensureResizeHandle(board);
      runExternalBootstraps();
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
      updateStickyTickLabelPositions(board);
      ensureResizeHandle(board);
      runExternalBootstraps();
    });
  });

  let bboxRAF = 0;
  board.on('boundingbox', () => {
    if (bboxRAF) return;

    bboxRAF = requestAnimationFrame(() => {
      bboxRAF = 0;
      saveBoardState(board);
      applyAdaptiveTicks(board);
      applyAxisColors(board);
      updateStickyTickLabelPositions(board);
      ensureResizeHandle(board);
      runExternalBootstraps();
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



















@AchsenBeschriftung: @AchsenBeschriftung_(@uid,@0)

@AchsenBeschriftung_
<span id="axis-title-spec-@0" data-spec="@1" style="display:none;"></span>
@end









@ErzeugePunkt: @ErzeugePunkt_(@uid,@0,@1)

@ErzeugePunkt_
<div id="point-ui-@0" data-spec="@1">
  <div id="point-task-@0" class="lia-point-task"></div>

  <div id="point-check-@0">
    @2
    [[!]]
    <script modify="false">
      (() => {
        const root = document.getElementById('point-ui-@0');
        const spec = root ? (root.dataset.spec || '') : String.raw`@1`;

        if (typeof window.__checkPointFromSpec === 'function') {
          return window.__checkPointFromSpec(spec);
        }
        return false;
      })()
    </script>
  </div>
</div>

@end














@PlotFunktion: @PlotFunktion_(@uid,@0)

@PlotFunktion_
<span id="plot-spec-@0" data-spec="@1" style="display:none;"></span>
@end







@PlotEingabeLatex: @PlotEingabeLatex_(@uid,@0)

@PlotEingabeLatex_
<div id="lia-plot-eingabe-@0" data-spec="@1"></div>
@end







@PunktGraph: @PunktGraph_(@uid,@0)

@PunktGraph_
<div id="graph-ui-@0" data-spec="@1">
  <div id="graph-task-@0" class="lia-graph-task"></div>

  <div id="graph-check-@0">
    [[!]]
    <script modify="false">
      (() => {
        const root = document.getElementById('graph-ui-@0');
        const spec = root ? (root.dataset.spec || '') : String.raw`@1`;

        if (typeof window.__checkPointGraphFromSpec === 'function') {
          return window.__checkPointGraphFromSpec(spec);
        }
        return false;
      })()
    </script>
  </div>
</div>

@end





-->











# Graph selbst plotten

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A8`)

@AchsenBeschriftung(`id=A8;xlabel=$x$;ylabel=$y$`)

@PlotEingabeLatex(`A8;g;#b41f65`)


```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A8`)

@AchsenBeschriftung(`id=A8;xlabel=$x$;ylabel=$y$`)

@PlotEingabeLatex(`A8;g;#b41f65`)
```





# Plot Funktion



Alles klappt nur wenn `https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md` im Header importiert wurde!


@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A1`)

@AchsenBeschriftung(`id=A1;xlabel=$x$;ylabel=$y$`)

@PlotFunktion(`A1;f;x;#b41f65`)



```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A1`)

@AchsenBeschriftung(`id=A1;xlabel=$x$;ylabel=$y$`)

@PlotFunktion(`A1;f;x;#b41f65`)
```





# Punkt auf Koordinate



@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A2`)

@AchsenBeschriftung(`id=A2;xlabel=$x$;ylabel=$y$`)



Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(`A2;A;1;4`,`<!-- data-solution-button="2" -->`)



```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A2`)

@AchsenBeschriftung(`id=A2;xlabel=$x$;ylabel=$y$`)

Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(`A2;A;1;4`,`<!-- data-solution-button="2" -->`)
```




# Punkt auf Graph

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A4`)

@AchsenBeschriftung(`id=A4;xlabel=$x$;ylabel=$y$`)

Ziehe den Punkt auf den Graphen von $f(x)=2x-4$.

@PunktGraph(`A4;A;2x-4;0.05`)


```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A4`)

@AchsenBeschriftung(`id=A4;xlabel=$x$;ylabel=$y$`)

Ziehe den Punkt auf den Graphen von $f(x)=2x-4$.

@PunktGraph(`A4;A;2x-4;0.05`)
```






# Funktion schiebbar

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A3`)

@AchsenBeschriftung(`id=A3;xlabel=$x$;ylabel=$y$`)






# Punkte (plural) auf Graph

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A5`)

@AchsenBeschriftung(`id=A5;xlabel=$x$;ylabel=$y$`)



# Tabelle zu Graphen

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A6`)

@AchsenBeschriftung(`id=A6;xlabel=$x$;ylabel=$y$`)


