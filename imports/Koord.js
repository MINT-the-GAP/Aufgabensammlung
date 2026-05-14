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

window.__liaDisableLegacyScharEngines = true;


if (window.__liaRunCoordHooks) {
  window.__liaRunCoordHooks();
  requestAnimationFrame(() => {
    if (window.__liaRunCoordHooks) window.__liaRunCoordHooks();
  });
  setTimeout(() => {
    if (window.__scharReadyV3) {
      try {
        if (window.__bootstrapScharen) window.__bootstrapScharen();
      } catch (e) {}
      return;
    }


    // =========================
    // SCHAR
    // SCHAR
    // SCHAR
    // SCHAR
    // =========================

  (function(){
    if (window.__liaDisableLegacyScharEngines) return;
    if (window.__scharReadyV2) {
      try {
        if (window.__bootstrapScharen) window.__bootstrapScharen();
      } catch (e) {}
      return;
    }
    window.__scharReadyV2 = true;

    window.__scharEntries = window.__scharEntries || {};

    function ensureCss() {
      if (document.getElementById('__lia_schar_css_v2')) return;

      const st = document.createElement('style');
      st.id = '__lia_schar_css_v2';
      st.textContent = `
        .lia-schar-panel{
          position:absolute;
          left:10px;
          top:10px;
          z-index:52;
          min-width:190px;
          max-width:none;
          padding:8px 10px;
          border-radius:10px;
          background:rgba(255,255,255,.96);
          border:1px solid rgba(0,0,0,.16);
          box-shadow:0 6px 18px rgba(0,0,0,.18);
          box-sizing:border-box;
          font-family:inherit;
        }

        .lia-schar-head{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
          margin-bottom:6px;
          font-size:10px;
          font-weight:600;
        }

        .lia-schar-slider{
          width:100%;
          margin:0;
        }

        .lia-schar-slider::-webkit-slider-thumb{
          width:12px;
          height:12px;
        }

        .lia-schar-slider::-moz-range-thumb{
          width:12px;
          height:12px;
          border:none;
        }

        .lia-schar-term{
          margin-top:8px;
          font-size:5px;
          line-height:1.35;
          word-break:normal;
          white-space:nowrap;
          overflow-wrap:normal;
        }

        .lia-schar-term mjx-container{
          font-size:0.7em !important;
        }
      `;

      (document.head || document.documentElement).appendChild(st);
    }

    function neutralColor() {
      try {
        const doc = (window.parent && window.parent.document) ? window.parent.document : document;
        const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
        const el = doc.body || doc.documentElement;
        const bg = win.getComputedStyle(el).backgroundColor;
        const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
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
          depth += 1;
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

    function looksLikeColor(value) {
      const raw = String(value || '').trim();
      if (!raw) return false;
      return /^#|^rgb\(|^rgba\(|^hsl\(|^hsla\(|^[a-z]+$/i.test(raw);
    }

    function parseBoolFlag(value, fallbackValue) {
      const raw = String(value || '').trim().toLowerCase();
      const normalized = raw.replace(/^term\s*=\s*/, '');
      if (!normalized) return fallbackValue;
      if (normalized === '1' || normalized === 'true' || normalized === 'ja') return 1;
      if (normalized === '0' || normalized === 'false' || normalized === 'nein') return 0;
      return fallbackValue;
    }

    function parseScharSpec(spec) {
      const raw = unquote(spec);
        const parts = splitTopLevel(raw, ';');
      const name = parts[0] ? unquote(parts[0]) : 'f';
      const variableName = parts[1] ? unquote(parts[1]) : 'x';
      const expr = parts[2] ? decodeExprPlaceholders(unquote(parts[2])) : '';
      const boardId = parts[3] ? unquote(parts[3]) : '';

      let showTerm = 1;
      let color = '#0b5fff';

      if (parts[4] && looksLikeColor(unquote(parts[4]))) {
        color = unquote(parts[4]);
      } else {
        showTerm = parseBoolFlag(parts[4], 1);
        color = parts[5] ? unquote(parts[5]) : '#0b5fff';
      }

      return {
        name: String(name || 'f').trim() || 'f',
        variableName: String(variableName || 'x').trim() || 'x',
        expr: String(expr || '').trim(),
        boardId: String(boardId || '').trim(),
        showTerm: showTerm ? 1 : 0,
        color: String(color || '#0b5fff').trim() || '#0b5fff'
      };
    }

    function escapeRegExp(value) {
      return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function normalizeFamilyExpr(expr, variableName) {
      let s = String(expr || '').trim();
      const v = String(variableName || 'x').trim() || 'x';
      const vEsc = escapeRegExp(v);

      s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*\([^)]*\)\s*=\s*/i, '');
      s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*=\s*/i, '');
      s = s.replace(/���/g, '-');
      s = s.replace(/\^/g, '**');
      s = s.replace(/(\d)\s*([A-Za-z(])/g, '$1*$2');
      s = s.replace(/\)\s*([A-Za-z0-9(])/g, ')*$1');
      s = s.replace(new RegExp('([abcdf])\\s*(' + vEsc + ')', 'g'), '$1*$2');
      s = s.replace(new RegExp('(' + vEsc + ')\\s*\\(', 'g'), '$1*(');
      s = s.replace(/([abcdf])\s*\(/g, '$1*(');

      const reserved = {
        pi: true, e: true,
        sin: true, cos: true, tan: true,
        asin: true, acos: true, atan: true,
        sinh: true, cosh: true, tanh: true,
        exp: true, log: true, ln: true,
        sqrt: true, abs: true,
        floor: true, ceil: true, round: true,
        min: true, max: true, pow: true
      };
      reserved[String(v).toLowerCase()] = true;

      s = s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(token) {
        const name = String(token || '');
        const lower = name.toLowerCase();
        const vLower = String(v).toLowerCase();
        if (reserved[lower] || lower === vLower) return name;
        if (lower.endsWith(vLower) && lower.length > vLower.length) {
          const head = name.slice(0, name.length - String(v).length);
          if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(head)) return head + '*' + v;
        }
        return name;
      });

      const usedCanonical = { a: false, b: false, c: false, d: false, f: false };
      s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(token) {
        const name = String(token || '');
        if (name === 'a' || name === 'b' || name === 'c' || name === 'd' || name === 'f') usedCanonical[name] = true;
        return token;
      });

      const slotByToken = Object.create(null);
      const preferredSlots = ['a', 'b', 'c', 'd', 'f'].filter(function(slot) { return !usedCanonical[slot]; });

      s = s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(token) {
        const name = String(token || '');
        const lower = name.toLowerCase();
        if (reserved[lower]) return name;
        if (name === 'a' || name === 'b' || name === 'c' || name === 'd' || name === 'f') return name;
        if (slotByToken[lower]) return slotByToken[lower];

        const nextSlot = preferredSlots.shift();
        if (!nextSlot) return name;
        slotByToken[lower] = nextSlot;
        return nextSlot;
      });

      s = s.replace(new RegExp('\\b([abcdf])\\s*(' + vEsc + ')', 'g'), '$1*$2');
      s = s.replace(/\b([abcdf])\s*\(/g, '$1*(');
      s = s.replace(/\b([abcdf])\s+(?=(?:pi|e|sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|exp|log|ln|sqrt|abs|floor|ceil|round|min|max|pow)\b)/gi, '$1*');

      return s.trim();
    }

    function extractParamSlots(expr, variableName) {
      let s = String(expr || '').trim();
      const v = String(variableName || 'x').trim().toLowerCase() || 'x';
      const vRaw = String(variableName || 'x').trim() || 'x';
      s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*\([^)]*\)\s*=\s*/i, '');
      s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*=\s*/i, '');

      const reserved = {
        pi: true, e: true,
        sin: true, cos: true, tan: true,
        asin: true, acos: true, atan: true,
        sinh: true, cosh: true, tanh: true,
        exp: true, log: true, ln: true,
        sqrt: true, abs: true,
        floor: true, ceil: true, round: true,
        min: true, max: true, pow: true
      };
      reserved[v] = true;

      const found = [];
      s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(_, token) {
        const lower = String(token || '').toLowerCase();
        if (!reserved[lower] && found.indexOf(token) === -1) found.push(token);
        return token;
      });

      return {
        a: found[0] || 'a',
        b: found[1] || 'b',
        c: found[2] || 'c',
        d: found[3] || 'd',
        f: found[4] || 'f'
      };
    }

    function compileFamilyExpr(expr, variableName) {
      const normalized = normalizeFamilyExpr(expr, variableName);
      const variable = String(variableName || 'x').trim() || 'x';

      try {
        return new Function(
          variable,
          'a',
          'b',
          'c',
          'd',
          'f',
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
          return (${normalized});
          `
        );
      } catch (e) {
        return null;
      }
    }

    function formatNumber(value) {
      const n = Number(value);
      if (!Number.isFinite(n)) return '0';
      if (Math.abs(n) < 0.0000001) return '0';
      if (Math.abs(n - Math.round(n)) < 0.0000001) return String(Math.round(n));
      return String(Math.round(n * 100) / 100);
    }

    function substituteTerm(expr, variableName, aValue, bValue, cValue, dValue, fValue) {
      const normalized = normalizeFamilyExpr(expr, variableName).replace(/\*\*/g, '^');
      const cResolved = (cValue == null) ? 0 : cValue;
      const dResolved = (dValue == null) ? 0 : dValue;
      const fResolved = (fValue == null) ? 0 : fValue;
      let out = normalized.replace(/\b(a|b|c|d|f)\b/g, function(match) {
        if (match === 'a') return formatNumber(aValue);
        if (match === 'b') return formatNumber(bValue);
        if (match === 'c') return formatNumber(cResolved);
        if (match === 'd') return formatNumber(dResolved);
        return formatNumber(fResolved);
      });
      out = out
        .replace(/\+\s*-/g, '- ')
        .replace(/-\s*-/g, '+ ')
        .replace(/\+\s*\+/g, '+ ')
        .replace(/-\s*\+/g, '- ')
        .replace(/(^|[^\w])(-?\d+)\.(\d+)/g, function(_, pre, intPart, fracPart) {
          return pre + intPart + ',' + fracPart;
        })
        .replace(/\s+/g, ' ')
        .trim();
      return out;
    }

    function evaluateAt(entry, xValue, bValue, cValue, dValue, fValue) {
      if (!entry || typeof entry.fn !== 'function') return NaN;
      try {
        const value = entry.fn(
          xValue,
          entry.a,
          bValue == null ? entry.b : bValue,
          cValue == null ? ((entry && entry.c == null) ? 0 : entry.c) : cValue,
          dValue == null ? ((entry && entry.d == null) ? 0 : entry.d) : dValue,
          fValue == null ? ((entry && entry.f == null) ? 0 : entry.f) : fValue
        );
        return Number.isFinite(value) ? value : NaN;
      } catch (e) {
        return NaN;
      }
    }

    function eventToUser(board, evt) {
      const rect = board.containerObj.getBoundingClientRect();
      const lx = evt.clientX - rect.left;
      const ly = evt.clientY - rect.top;

      return {
        x: (lx - board.origin.scrCoords[1]) / board.unitX,
        y: (board.origin.scrCoords[2] - ly) / board.unitY
      };
    }

    function solveBForPointer(entry, xValue, targetY) {
      const dragBase = entry && entry.dragUsesC ? (entry.c == null ? 0 : entry.c) : (entry ? entry.b : 0);
      const base = entry && entry.dragUsesC
        ? evaluateAt(entry, xValue, entry.b, dragBase)
        : evaluateAt(entry, xValue, dragBase, entry ? entry.c : 0);
      const shifted = entry && entry.dragUsesC
        ? evaluateAt(entry, xValue, entry.b, dragBase + 1)
        : evaluateAt(entry, xValue, dragBase + 1, entry ? entry.c : 0);
      const sensitivity = shifted - base;
      if (!Number.isFinite(base) || !Number.isFinite(sensitivity) || Math.abs(sensitivity) < 0.000001) {
        return dragBase + (targetY - base);
      }
      return dragBase + ((targetY - base) / sensitivity);
    }

    function solveCForPointer(entry, xValue, targetY, bValue) {
      const cBase = entry && entry.c == null ? 0 : entry.c;
      const bUsed = bValue == null ? (entry ? entry.b : 0) : bValue;
      const base = evaluateAt(entry, xValue, bUsed, cBase);
      const shifted = evaluateAt(entry, xValue, bUsed, cBase + 1);
      const sensitivity = shifted - base;
      if (!Number.isFinite(base) || !Number.isFinite(sensitivity) || Math.abs(sensitivity) < 0.000001) {
        return cBase + (targetY - base);
      }
      return cBase + ((targetY - base) / sensitivity);
    }

    function relayoutPanelsForBoard(boardId, board) {
      try {
        const entries = Object.keys(window.__scharEntries || {}).map(function(key) {
          return window.__scharEntries[key];
        }).filter(function(item) {
          return item && item.boardId === boardId && item.panel && item.panel.parentNode && board && board.containerObj && item.panel.parentNode === board.containerObj;
        }).sort(function(a, b) {
          return String(a.uid || '').localeCompare(String(b.uid || ''));
        });

        let top = 10;
        entries.forEach(function(item) {
          try {
            item.panel.style.left = '10px';
            item.panel.style.top = top + 'px';
            top += (item.panel.offsetHeight || 56) + 8;
          } catch (e) {}
        });
      } catch (e) {}
    }

    function getUsedParams(entry) {
      const allowed = ['a', 'b', 'c', 'd', 'f'];
      const seen = Object.create(null);
      const out = [];

      const src = Array.isArray(entry && entry.usedParams) ? entry.usedParams : [];
      for (let i = 0; i < src.length; i++) {
        const p = String(src[i] || '').trim();
        if (!allowed.includes(p)) continue;
        if (seen[p]) continue;
        seen[p] = true;
        out.push(p);
      }

      if (!out.length && entry && entry.cfg && entry.cfg.expr) {
        let normalized = '';
        try {
          normalized = normalizeFamilyExpr(entry.cfg.expr, entry.cfg.variableName || 'x');
        } catch (e) {
          normalized = String(entry.cfg.expr || '');
        }

        for (let i = 0; i < allowed.length; i++) {
          const p = allowed[i];
          try {
            if (new RegExp('\\b' + p + '\\b').test(normalized)) out.push(p);
          } catch (e) {}
        }
      }

      if (!out.length) out.push('a');
      return out;
    }

    function getSliderLabelForParam(entry, param) {
      const mapped = entry && entry.paramSlots ? entry.paramSlots[param] : '';
      return String(mapped || param || 'a').trim() || 'a';
    }

    function ensureNameTag(entry) {
      if (!entry || !entry.board) return;
      if (entry.nameTag && entry.nameTag.board === entry.board && entry.nameAnchor && entry.nameAnchor.board === entry.board) return;

      try {
        const fn = function(x) { return evaluateAt(entry, x); };
        const safeBBox = function(board) {
          try {
            const bb = board.getBoundingBox();
            if (Array.isArray(bb) && bb.length >= 4) return bb;
          } catch (e) {}
          return [-10, 10, 10, -10];
        };

        const chooseVisibleAnchorX = function(board) {
          const bb = safeBBox(board);
          const xmin = bb[0], ymax = bb[1], xmax = bb[2], ymin = bb[3];
          const xspan = Math.max(1e-9, xmax - xmin);
          const yspan = Math.max(1e-9, ymax - ymin);
          const xStart = xmax - 0.10 * xspan;
          const xEnd = xmin + 0.18 * xspan;
          const yPadTop = 0.14 * yspan;
          const yPadBottom = 0.12 * yspan;
          const steps = 120;

          for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const x = xStart - t * (xStart - xEnd);
            let y;
            try { y = fn(x); } catch (e) { y = NaN; }
            if (!Number.isFinite(y)) continue;
            if (y <= ymax - yPadTop && y >= ymin + yPadBottom) return x;
          }
          return xmin + 0.60 * xspan;
        };

        entry.nameAnchor = entry.board.create('point', [
          function() { return chooseVisibleAnchorX(entry.board); },
          function() {
            const x = chooseVisibleAnchorX(entry.board);
            let y;
            try { y = fn(x); } catch (e) { y = NaN; }
            if (!Number.isFinite(y)) {
              const bb = safeBBox(entry.board);
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

        entry.nameTag = entry.board.create('text', [
          function() { return entry.nameAnchor.X() + 0.18; },
          function() { return entry.nameAnchor.Y() + 0.18; },
          function() {
            const raw = entry && entry.cfg && entry.cfg.name ? String(entry.cfg.name) : 'f';
            const n = raw.trim().replace(/\(.*$/, '').replace(/[^A-Za-z]/g, '') || 'f';
            return '\\(' + n + '\\)';
          }
        ], {
          fixed: true,
          highlight: false,
          parse: false,
          useMathJax: true,
          display: 'html',
          fontSize: 24,
          strokeColor: entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff',
          fillColor: entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff',
          anchorX: 'left',
          anchorY: 'top'
        });
      } catch (e) {}
    }

    function removeExisting(uid) {
      const key = 'schar-' + uid;
      const entry = window.__scharEntries[key];
      if (!entry) return;
      const boardRef = entry.board;
      const boardIdRef = entry.boardId;

      try {
        if (entry.graph && entry.board) entry.board.removeObject(entry.graph);
      } catch (e) {}

      try {
        if (entry.nameTag && entry.board) entry.board.removeObject(entry.nameTag);
      } catch (e) {}

      try {
        if (entry.nameAnchor && entry.board) entry.board.removeObject(entry.nameAnchor);
      } catch (e) {}

      try {
        if (entry.panel && entry.panel.parentNode) entry.panel.parentNode.removeChild(entry.panel);
      } catch (e) {}

      try {
        if (typeof entry.stopDrag === 'function') entry.stopDrag();
      } catch (e) {}

      delete window.__scharEntries[key];
      relayoutPanelsForBoard(boardIdRef, boardRef);
    }

    function ensurePanel(entry) {
      if (!entry || !entry.board || !entry.board.containerObj) return false;

      ensureCss();

      let panel = entry.panel;
      if (!panel || !panel.parentNode || panel.parentNode !== entry.board.containerObj) {
        if (panel && panel.parentNode && panel.parentNode !== entry.board.containerObj) {
          try { panel.parentNode.removeChild(panel); } catch (e) {}
          panel = null;
        }
        if (!panel) {
          panel = document.createElement('div');
          panel.className = 'lia-schar-panel';
          panel.innerHTML = '' +
            '<div class="lia-schar-sliders"></div>' +
            '<label class="lia-schar-term-toggle-wrap"><input class="lia-schar-term-toggle" type="checkbox" /> Term anzeigen</label>' +
            '<div class="lia-schar-term"></div>';
        }
        entry.board.containerObj.appendChild(panel);
      }

      entry.panel = panel;
      entry.slidersRootEl = panel.querySelector('.lia-schar-sliders');
      if (!entry.slidersRootEl) {
        entry.slidersRootEl = document.createElement('div');
        entry.slidersRootEl.className = 'lia-schar-sliders';
        panel.insertBefore(entry.slidersRootEl, panel.firstChild || null);
      }
      entry.termToggleWrapEl = panel.querySelector('.lia-schar-term-toggle-wrap');
      entry.termToggleEl = panel.querySelector('.lia-schar-term-toggle');
      entry.termEl = panel.querySelector('.lia-schar-term');
      entry.sliderControls = entry.sliderControls || Object.create(null);

      if (!entry.termToggleWrapEl && entry.termEl) {
        const wrap = document.createElement('label');
        wrap.className = 'lia-schar-term-toggle-wrap';
        wrap.innerHTML = '<input class="lia-schar-term-toggle" type="checkbox" /> Term anzeigen';
        try { panel.insertBefore(wrap, entry.termEl); } catch (e) {}
        entry.termToggleWrapEl = panel.querySelector('.lia-schar-term-toggle-wrap');
        entry.termToggleEl = panel.querySelector('.lia-schar-term-toggle');
      }

      const tone = neutralColor();
      const fill = tone === '#fff' ? 'rgba(0,0,0,.82)' : 'rgba(255,255,255,.97)';
      panel.style.color = tone;
      panel.style.background = fill;
      panel.style.borderColor = tone === '#fff' ? 'rgba(255,255,255,.25)' : 'rgba(0,0,0,.16)';
      panel.style.zIndex = '52';
      panel.style.display = 'block';

      const usedParams = getUsedParams(entry);
      const sliderTone = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';

      const expected = Object.create(null);
      for (let i = 0; i < usedParams.length; i++) {
        expected[usedParams[i]] = true;
      }

      Object.keys(entry.sliderControls).forEach(function(param) {
        if (expected[param]) return;
        const ctrl = entry.sliderControls[param];
        try {
          if (ctrl && ctrl.row && ctrl.row.parentNode) ctrl.row.parentNode.removeChild(ctrl.row);
        } catch (e) {}
        delete entry.sliderControls[param];
      });

      for (let i = 0; i < usedParams.length; i++) {
        const param = usedParams[i];
        let ctrl = entry.sliderControls[param];

        if (!ctrl || !ctrl.row || !ctrl.row.parentNode) {
          const row = document.createElement('div');
          row.className = 'lia-schar-head';

          const label = document.createElement('span');
          label.className = 'lia-schar-label';

          const slider = document.createElement('input');
          slider.className = 'lia-schar-slider';
          slider.type = 'range';
          slider.min = '-10';
          slider.max = '10';
          slider.step = '0.05';

          row.appendChild(label);
          row.appendChild(slider);
          entry.slidersRootEl.appendChild(row);

          ctrl = { row: row, label: label, slider: slider, param: param };
          entry.sliderControls[param] = ctrl;

          if (!slider.__liaScharBound) {
            slider.__liaScharBound = true;
            const blockBoardGesture = function(evt) {
              try { evt.stopPropagation(); } catch (e) {}
            };
            ['pointerdown', 'pointerup', 'pointercancel', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click'].forEach(function(type) {
              try { slider.addEventListener(type, blockBoardGesture, true); } catch (e) {}
            });
            slider.addEventListener('input', function() {
              const p = String(slider.dataset.param || param);
              entry[p] = Math.max(-10, Math.min(10, Number(slider.value || 0)));
              refreshEntry(entry, true);
            });
          }
        }

        ctrl.param = param;
        ctrl.slider.dataset.param = param;
        ctrl.slider.style.accentColor = sliderTone;
        ctrl.label.innerHTML = '\\(' + getSliderLabelForParam(entry, param) + '\\):';

        try {
          const MJ = window.MathJax || (window.parent && window.parent.MathJax);
          if (MJ && typeof MJ.typesetPromise === 'function') {
            if (typeof MJ.typesetClear === 'function') {
              try { MJ.typesetClear([ctrl.label]); } catch (e) {}
            }
            MJ.typesetPromise([ctrl.label]).catch(function(){});
          }
        } catch (e) {}
      }

      if (entry.termToggleWrapEl) {
        entry.termToggleWrapEl.style.display = entry.cfg && Number(entry.cfg.showTerm) !== 0 ? 'block' : 'none';
        entry.termToggleWrapEl.style.visibility = 'visible';
        entry.termToggleWrapEl.style.opacity = '1';
        entry.termToggleWrapEl.style.pointerEvents = 'auto';
        entry.termToggleWrapEl.style.marginTop = '6px';
        entry.termToggleWrapEl.style.fontSize = '13px';
        entry.termToggleWrapEl.style.userSelect = 'none';
      }

      if (entry.termToggleEl && !entry.termToggleEl.__liaScharBound) {
        entry.termToggleEl.__liaScharBound = true;
        const blockBoardGesture = function(evt) {
          try { evt.stopPropagation(); } catch (e) {}
        };
        ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click'].forEach(function(type) {
          try { entry.termToggleEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
        });
        const onTermToggleChanged = function() {
          entry.termVisible = !!entry.termToggleEl.checked;
          refreshEntry(entry);
        };
        entry.termToggleEl.addEventListener('change', onTermToggleChanged);
        entry.termToggleEl.addEventListener('input', onTermToggleChanged);
      }

      relayoutPanelsForBoard(entry.boardId, entry.board);

      return !!entry.termEl;
    }

    function refreshEntry(entry) {
      if (!entry) return false;
      if (!ensurePanel(entry)) return false;
      ensureNameTag(entry);

      const usedParams = getUsedParams(entry);
      for (let i = 0; i < usedParams.length; i++) {
        const param = usedParams[i];
        const ctrl = entry.sliderControls && entry.sliderControls[param];
        if (!ctrl || !ctrl.slider) continue;
        const val = Number(entry[param]);
        ctrl.slider.value = String(Number.isFinite(val) ? val : 0);
      }

      const allowTerm = !!(entry.cfg && Number(entry.cfg.showTerm) !== 0);
      const hasToggle = !!entry.termToggleEl;
      if (allowTerm && !hasToggle) entry.termVisible = true;
      if (!allowTerm) entry.termVisible = false;

      if (entry.termToggleWrapEl) {
        entry.termToggleWrapEl.style.display = allowTerm ? 'block' : 'none';
        entry.termToggleWrapEl.style.visibility = 'visible';
        entry.termToggleWrapEl.style.opacity = '1';
        entry.termToggleWrapEl.style.pointerEvents = 'auto';
      }

      if (entry.termToggleEl) {
        entry.termToggleEl.checked = allowTerm ? !!entry.termVisible : false;
      }

      if (entry.termEl) {
        const fitPanelToTerm = function() {
          try {
            if (!entry.panel || !entry.termEl) return;
            const panel = entry.panel;
            let termWidth = 0;
            const mjx = entry.termEl.querySelectorAll('mjx-container');
            if (mjx && mjx.length) {
              mjx.forEach(function(node) {
                const w = Math.max(Number(node.scrollWidth || 0), Number(node.offsetWidth || 0));
                if (w > termWidth) termWidth = w;
              });
            }
            if (!termWidth) termWidth = entry.termEl.scrollWidth || 0;
            const targetWidth = Math.ceil(Math.max(250, termWidth + 44));
            const measuredHeight = Math.ceil(Math.max(112, panel.scrollHeight || panel.offsetHeight || 0));
            const currentHeight = Number(entry._panelHeight || panel.offsetHeight || 0);
            const stableHeight = currentHeight > 0 ? Math.max(currentHeight, measuredHeight) : measuredHeight;

            panel.style.maxWidth = 'none';
            panel.style.minWidth = targetWidth + 'px';
            panel.style.width = targetWidth + 'px';
            panel.style.height = stableHeight + 'px';
            panel.style.minHeight = stableHeight + 'px';
            entry._panelWidth = targetWidth;
            entry._panelHeight = stableHeight;
          } catch (e) {}
        };

        const shrinkRenderedMath = function() {
          try {
            const mjx = entry.termEl.querySelectorAll('mjx-container');
            mjx.forEach(function(node) {
              node.style.fontSize = '0.68em';
              node.style.whiteSpace = 'nowrap';
              node.style.display = 'inline-block';
            });
          } catch (e) {}
        };

        entry.termEl.style.fontSize = '32px';
        entry.termEl.style.lineHeight = '1.2';
        entry.termEl.style.whiteSpace = 'nowrap';
        entry.termEl.style.wordBreak = 'normal';
        entry.termEl.style.overflowWrap = 'normal';
        const shouldShowTerm = allowTerm && (hasToggle ? !!entry.termVisible : true);
        entry.termEl.style.display = shouldShowTerm ? 'block' : 'none';
        if (shouldShowTerm) {
          const termText = substituteTerm(entry.cfg.expr, entry.cfg.variableName, entry.a, entry.b, entry.c, entry.d, entry.f).replace(/\*/g, ' \\cdot ');
          entry.termEl.innerHTML = '\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + termText + '\\)';
          fitPanelToTerm();
          shrinkRenderedMath();
          fitPanelToTerm();
          try {
            const MJ = window.MathJax || (window.parent && window.parent.MathJax);
            if (MJ && typeof MJ.typesetPromise === 'function') {
              if (typeof MJ.typesetClear === 'function') {
                try { MJ.typesetClear([entry.termEl]); } catch (e) {}
              }
              MJ.typesetPromise([entry.termEl]).then(function() {
                shrinkRenderedMath();
                fitPanelToTerm();
              }).catch(function(){});
              if (typeof requestAnimationFrame === 'function') {
                requestAnimationFrame(function() {
                  try {
                    MJ.typesetPromise([entry.termEl]).then(function() {
                      shrinkRenderedMath();
                      fitPanelToTerm();
                    }).catch(function(){});
                  } catch (e) {}
                });
              }
            }
          } catch (e) {}
        } else {
          entry.termEl.innerHTML = '';
        }
      }

      try {
        if (entry.graph) {
          entry.graph.visProp.strokeColor = entry.cfg.color;
          entry.graph.visProp.highlightStrokeColor = entry.cfg.color;
          if (entry.graph.label && entry.graph.label.visProp) {
            entry.graph.label.visProp.strokeColor = entry.cfg.color;
            entry.graph.label.visProp.color = entry.cfg.color;
          }
        }
      } catch (e) {}

      try {
        if (entry.nameTag && entry.nameTag.visProp) {
          entry.nameTag.visProp.strokeColor = entry.cfg.color;
          entry.nameTag.needsUpdate = true;
        }
      } catch (e) {}

      try {
        if (entry.board && typeof entry.board.update === 'function') entry.board.update();
      } catch (e) {}

      relayoutPanelsForBoard(entry.boardId, entry.board);

      return true;
    }

    function stopDrag(entry) {
      if (!entry || !entry.dragState) return;

      const drag = entry.dragState;
      try { window.removeEventListener('pointermove', drag.onMove, true); } catch (e) {}
      try { window.removeEventListener('pointerup', drag.onUp, true); } catch (e) {}
      try { window.removeEventListener('pointercancel', drag.onUp, true); } catch (e) {}
      entry.dragState = null;
    }

    function bindGraphDrag(entry) {
      if (!entry || !entry.graph) return;
      if (entry.graph.__liaScharDragBoundV2) return;
      entry.graph.__liaScharDragBoundV2 = true;

      const targets = [entry.graph.rendNode, entry.graph.rendNodeStroke].filter(Boolean);

      const onPointerDown = function(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        stopDrag(entry);

        const pointerId = evt.pointerId;
        const start = eventToUser(entry.board, evt);
        const startB = entry && entry.b == null ? 0 : entry.b;
        const startC = entry && entry.c == null ? 0 : entry.c;
        const startGraphY = evaluateAt(entry, start.x, startB, startC);
        const offsetY = Number.isFinite(startGraphY) ? (start.y - startGraphY) : 0;

        const onMove = function(moveEvt) {
          if (moveEvt.pointerId !== pointerId) return;
          moveEvt.preventDefault();
          moveEvt.stopPropagation();

          const now = eventToUser(entry.board, moveEvt);
          if (entry && entry.dragSupportsX) {
            entry.b = startB - (now.x - start.x);
          }
          const desiredY = now.y - offsetY;
          if (entry && entry.dragUsesC) {
            const solvedC = solveCForPointer(entry, now.x, desiredY, entry.b);
            if (Number.isFinite(solvedC)) entry.c = solvedC;
            refreshEntry(entry);
          } else {
            const solvedB = solveBForPointer(entry, now.x, desiredY);
            if (Number.isFinite(solvedB)) entry.b = solvedB;
            refreshEntry(entry);
          }
        };

        const onUp = function(upEvt) {
          if (upEvt.pointerId !== pointerId) return;
          upEvt.preventDefault();
          upEvt.stopPropagation();
          stopDrag(entry);
        };

        entry.dragState = {
          onMove: onMove,
          onUp: onUp
        };

        window.addEventListener('pointermove', onMove, true);
        window.addEventListener('pointerup', onUp, true);
        window.addEventListener('pointercancel', onUp, true);
      };

      targets.forEach(function(target) {
        try {
          target.style.cursor = 'move';
          target.style.touchAction = 'none';
          target.addEventListener('pointerdown', onPointerDown, true);
        } catch (e) {}
      });

      entry.stopDrag = function() {
        stopDrag(entry);
        targets.forEach(function(target) {
          try { target.removeEventListener('pointerdown', onPointerDown, true); } catch (e) {}
        });
      };
    }

    window.renderScharFromSpec = function(uid, spec) {
      const cfg = parseScharSpec(spec);
      const boardId = String(cfg.boardId || window.__liaLastCoordBoardId || '').trim();
      const board = window.__boards && window.__boards[boardId];
      if (!uid || !boardId || !board || !cfg.expr) return false;

      const normalizedExpr = normalizeFamilyExpr(cfg.expr, cfg.variableName);
      const fn = compileFamilyExpr(cfg.expr, cfg.variableName);
      if (!fn) return false;

      const key = 'schar-' + uid;
      let entry = window.__scharEntries[key];

      if (
        entry &&
        entry.boardId === boardId &&
        entry.board === board &&
        entry.graph &&
        entry.graph.board === board &&
        entry.cfg &&
        entry.cfg.name === cfg.name &&
        entry.cfg.variableName === cfg.variableName &&
        entry.cfg.expr === cfg.expr &&
        entry.cfg.color === cfg.color &&
        entry.cfg.showTerm === cfg.showTerm
      ) {
        entry.cfg = cfg;
        entry.paramSlots = extractParamSlots(cfg.expr, cfg.variableName);
        entry.usedParams = ['a', 'b', 'c', 'd', 'f'].filter(function(param) {
          try {
            return new RegExp('\\b' + param + '\\b').test(normalizedExpr);
          } catch (e) {
            return false;
          }
        });
        entry.fn = fn;
        if (!Number.isFinite(entry.d)) entry.d = 0;
        if (!Number.isFinite(entry.f)) entry.f = 0;
        return refreshEntry(entry);
      }

      removeExisting(uid);

      entry = {
        uid: uid,
        boardId: boardId,
        board: board,
        cfg: cfg,
        paramSlots: extractParamSlots(cfg.expr, cfg.variableName),
        usedParams: ['a', 'b', 'c', 'd', 'f'].filter(function(param) {
          try {
            return new RegExp('\\b' + param + '\\b').test(normalizedExpr);
          } catch (e) {
            return false;
          }
        }),
        fn: fn,
        a: 1,
        b: 0,
        c: 0,
        d: 0,
        f: 0,
        dragUsesC: /[+\-]\s*c\b/.test(normalizedExpr),
        dragSupportsX: /\bb\b/.test(normalizedExpr),
        graph: null,
        nameTag: null,
        nameAnchor: null,
        panel: null,
        slidersRootEl: null,
        sliderControls: null,
        valueEl: null,
        termToggleWrapEl: null,
        termToggleEl: null,
        termVisible: false,
        termEl: null,
        dragState: null,
        stopDrag: null
      };

      try {
        entry.graph = board.create('functiongraph', [function(x) {
          return evaluateAt(entry, x);
        }], {
          name: cfg.name + '(' + cfg.variableName + ')',
          strokeColor: cfg.color,
          highlightStrokeColor: cfg.color,
          strokeWidth: 3,
          fixed: true,
          withLabel: false,
          label: { color: cfg.color, strokeColor: cfg.color }
        });
      } catch (e) {
        return false;
      }

      window.__scharEntries[key] = entry;

      ensurePanel(entry);
      bindGraphDrag(entry);
      refreshEntry(entry);
      return true;
    };

    window.__bootstrapScharen = function() {
      const nodes = document.querySelectorAll('[id^="schar-spec-"][data-spec]');

      nodes.forEach(function(node) {
        const uid = String(node.id || '').replace(/^schar-spec-/, '');
        const spec = String(node.dataset.spec || '');
        if (!uid || !spec) return;

        window.renderScharFromSpec(uid, spec);
      });
    };

    try {
      const mo = new MutationObserver(function() {
        if (window.__bootstrapScharen) window.__bootstrapScharen();
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
      if (window.__registerLiaThemeListener) {
        window.__registerLiaThemeListener(function() {
          Object.keys(window.__scharEntries || {}).forEach(function(key) {
            refreshEntry(window.__scharEntries[key]);
          });
        });
      }
    } catch (e) {}

    try {
      if (window.__bootstrapScharen) window.__bootstrapScharen();
      setTimeout(function() {
        if (window.__bootstrapScharen) window.__bootstrapScharen();
      }, 80);
      setTimeout(function() {
        if (window.__bootstrapScharen) window.__bootstrapScharen();
      }, 220);
    } catch (e) {}
  })();

    if (window.__liaRunCoordHooks) window.__liaRunCoordHooks();
  }, 0);
  setTimeout(() => {
    if (window.__scharReadyV3) {
      try {
        if (window.__bootstrapScharen) window.__bootstrapScharen();
      } catch (e) {}
      return;
    }


  // =========================
  // SCHAR
  // SCHAR
  // SCHAR
  // SCHAR
  // =========================

(function(){
  if (window.__liaDisableLegacyScharEngines) return;
  if (window.__scharReady) {
    try {
      if (window.__bootstrapScharen) window.__bootstrapScharen();
    } catch (e) {}
    return;
  }
  window.__scharReady = true;

  window.__scharEntries = window.__scharEntries || {};

  function ensureCss() {
    if (document.getElementById('__lia_schar_css_v1')) return;

    const st = document.createElement('style');
    st.id = '__lia_schar_css_v1';
    st.textContent = `
      .lia-schar-panel{
        position:absolute;
        left:10px;
        top:10px;
        z-index:44;
        min-width:180px;
        padding:8px 10px;
        border-radius:10px;
        background:rgba(255,255,255,.92);
        border:1px solid rgba(0,0,0,.16);
        box-shadow:0 6px 18px rgba(0,0,0,.18);
        box-sizing:border-box;
        backdrop-filter:blur(6px);
        font-family:inherit;
      }

      .lia-schar-head{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:10px;
        margin-bottom:6px;
        font-size:10px;
        font-weight:600;
      }

      .lia-schar-slider{
        width:100%;
        margin:0;
      }

      .lia-schar-slider::-webkit-slider-thumb{
        width:12px;
        height:12px;
      }

      .lia-schar-slider::-moz-range-thumb{
        width:12px;
        height:12px;
        border:none;
      }

      .lia-schar-term{
        margin-top:8px;
        font-size:5px;
        line-height:1.35;
        word-break:normal;
        white-space:nowrap;
        overflow-wrap:normal;
      }

      .lia-schar-term mjx-container{
        font-size:0.7em !important;
      }
    `;

    (document.head || document.documentElement).appendChild(st);
  }

  function neutralColor() {
    try {
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
      const el = doc.body || doc.documentElement;
      const bg = win.getComputedStyle(el).backgroundColor;
      const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
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

  function isUsableCssColor(value) {
    const s = String(value || '').trim().toLowerCase();
    if (!s) return false;
    if (s === 'transparent') return false;
    if (s === 'rgba(0, 0, 0, 0)') return false;
    if (s === 'rgba(0,0,0,0)') return false;
    return true;
  }

  // Keep PlotZeichnen color logic aligned with OCR tool buttons.
  // Prefer --canvas-border, then Lia button colors, then neutral fallback.
  function resolveToolTone(board) {
    try {
      const el = board && board.containerObj ? board.containerObj : null;
      if (el) {
        const border = getComputedStyle(el).borderTopColor || '';
        const rgb = parseRgbColor(border);
        if (rgb) {
          return luminance(rgb) >= 140 ? '#fff' : '#000';
        }
      }
    } catch (e) {}

    try {
      const root = document.documentElement;
      const cssTone = root ? getComputedStyle(root).getPropertyValue('--canvas-border').trim() : '';
      if (isUsableCssColor(cssTone)) return cssTone;
    } catch (e) {}

    try {
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
      const btn = doc.querySelector('.lia-btn');
      if (btn) {
        const cs = win.getComputedStyle(btn);
        const border = cs.borderTopColor || cs.borderColor || '';
        if (isUsableCssColor(border)) return border;
        const color = cs.color || '';
        if (isUsableCssColor(color)) return color;
      }
    } catch (e) {}

    return neutralColor();
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
        depth += 1;
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

  function looksLikeColor(value) {
    const raw = String(value || '').trim();
    if (!raw) return false;
    return /^#|^rgb\(|^rgba\(|^hsl\(|^hsla\(|^[a-z]+$/i.test(raw);
  }

  function parseBoolFlag(value, fallbackValue) {
    const raw = String(value || '').trim().toLowerCase().replace(/^term\s*=\s*/, '');
    if (!raw) return fallbackValue;
    if (raw === '1' || raw === 'true' || raw === 'ja') return 1;
    if (raw === '0' || raw === 'false' || raw === 'nein') return 0;
    return fallbackValue;
  }

  function parseScharSpec(spec) {
    const raw = unquote(spec);
    const parts = splitTopLevel(raw, ';');
    const name = parts[0] ? unquote(parts[0]) : 'f';
    const variableName = parts[1] ? unquote(parts[1]) : 'x';
    const expr = parts[2] ? decodeExprPlaceholders(unquote(parts[2])) : '';
    const boardId = parts[3] ? unquote(parts[3]) : '';

    let showTerm = 1;
    let color = '#0b5fff';

    if (parts[4] && looksLikeColor(unquote(parts[4]))) {
      color = unquote(parts[4]);
    } else {
      showTerm = parseBoolFlag(parts[4], 1);
      color = parts[5] ? unquote(parts[5]) : '#0b5fff';
    }

    return {
      name: String(name || 'f').trim() || 'f',
      variableName: String(variableName || 'x').trim() || 'x',
      expr: String(expr || '').trim(),
      boardId: String(boardId || '').trim(),
      showTerm: showTerm ? 1 : 0,
      color: String(color || '#0b5fff').trim() || '#0b5fff'
    };
  }

  function escapeRegExp(value) {
    return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function normalizeFamilyExpr(expr, variableName) {
    let s = String(expr || '').trim();
    const v = String(variableName || 'x').trim() || 'x';
    const vEsc = escapeRegExp(v);

    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*\([^)]*\)\s*=\s*/i, '');
    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*=\s*/i, '');
    s = s.replace(/���/g, '-');
    s = s.replace(/\^/g, '**');
    s = s.replace(/(\d)\s*([A-Za-z(])/g, '$1*$2');
    s = s.replace(/\)\s*([A-Za-z0-9(])/g, ')*$1');
    s = s.replace(new RegExp('([abcd])\\s*(' + vEsc + ')', 'g'), '$1*$2');
    s = s.replace(new RegExp('(' + vEsc + ')\\s*\\(', 'g'), '$1*(');
    s = s.replace(/([abcd])\s*\(/g, '$1*(');

    const reserved = {
      pi: true, e: true,
      sin: true, cos: true, tan: true,
      asin: true, acos: true, atan: true,
      sinh: true, cosh: true, tanh: true,
      exp: true, log: true, ln: true,
      sqrt: true, abs: true,
      floor: true, ceil: true, round: true,
      min: true, max: true, pow: true
    };
    reserved[String(v).toLowerCase()] = true;

    s = s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(token) {
      const name = String(token || '');
      const lower = name.toLowerCase();
      const vLower = String(v).toLowerCase();
      if (reserved[lower] || lower === vLower) return name;
      if (lower.endsWith(vLower) && lower.length > vLower.length) {
        const head = name.slice(0, name.length - String(v).length);
        if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(head)) return head + '*' + v;
      }
      return name;
    });

    const slotByToken = Object.create(null);
    const preferredSlots = ['a', 'b', 'c', 'd'];

    s = s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(token) {
      const name = String(token || '');
      const lower = name.toLowerCase();
      if (reserved[lower]) return name;
      if (slotByToken[lower]) return slotByToken[lower];

      const nextSlot = preferredSlots.shift();
      if (!nextSlot) return name;
      slotByToken[lower] = nextSlot;
      return nextSlot;
    });

    s = s.replace(new RegExp('\\b([abcd])\\s*(' + vEsc + ')', 'g'), '$1*$2');
    s = s.replace(/\b([abcd])\s*\(/g, '$1*(');
    s = s.replace(/\b([abcd])\s+(?=(?:pi|e|sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|exp|log|ln|sqrt|abs|floor|ceil|round|min|max|pow)\b)/gi, '$1*');

    return s.trim();
  }

  function extractParamSlots(expr, variableName) {
    let s = String(expr || '').trim();
    const v = String(variableName || 'x').trim().toLowerCase() || 'x';
    const vRaw = String(variableName || 'x').trim() || 'x';
    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*\([^)]*\)\s*=\s*/i, '');
    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*=\s*/i, '');

    const reserved = {
      pi: true, e: true,
      sin: true, cos: true, tan: true,
      asin: true, acos: true, atan: true,
      sinh: true, cosh: true, tanh: true,
      exp: true, log: true, ln: true,
      sqrt: true, abs: true,
      floor: true, ceil: true, round: true,
      min: true, max: true, pow: true
    };
    reserved[v] = true;

    const found = [];
    s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(_, token) {
      const rawToken = String(token || '');
      const lower = rawToken.toLowerCase();
      if (reserved[lower]) return rawToken;

      let candidate = rawToken;
      if (lower.endsWith(v) && lower.length > v.length) {
        candidate = rawToken.slice(0, rawToken.length - vRaw.length);
      }

      if (!candidate) return rawToken;
      if (String(candidate).toLowerCase() === v) return rawToken;
      if (found.indexOf(candidate) === -1) found.push(candidate);
      return rawToken;
    });

    return {
      a: found[0] || 'a',
      b: found[1] || 'b',
      c: found[2] || 'c',
      d: found[3] || 'd'
    };
  }

  function compileFamilyExpr(expr, variableName) {
    const normalized = normalizeFamilyExpr(expr, variableName);
    const variable = String(variableName || 'x').trim() || 'x';

    try {
      return new Function(
        variable,
        'a',
        'b',
        'c',
        'd',
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
        return (${normalized});
        `
      );
    } catch (e) {
      return null;
    }
  }

  function formatNumber(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return '0';
    if (Math.abs(n) < 0.0000001) return '0';
    if (Math.abs(n - Math.round(n)) < 0.0000001) return String(Math.round(n));
    return String(Math.round(n * 100) / 100);
  }

  function substituteTerm(expr, variableName, aValue, bValue, cValue, dValue) {
    const normalized = normalizeFamilyExpr(expr, variableName).replace(/\*\*/g, '^');
    const cResolved = (cValue == null) ? 0 : cValue;
    const dResolved = (dValue == null) ? 0 : dValue;
    let out = normalized.replace(/\b(a|b|c|d)\b/g, function(match) {
      if (match === 'a') return formatNumber(aValue);
      if (match === 'b') return formatNumber(bValue);
      if (match === 'c') return formatNumber(cResolved);
      return formatNumber(dResolved);
    });
    out = out
      .replace(/\+\s*-/g, '- ')
      .replace(/-\s*-/g, '+ ')
      .replace(/\+\s*\+/g, '+ ')
      .replace(/-\s*\+/g, '- ')
      .replace(/(^|[^\w])(-?\d+)\.(\d+)/g, function(_, pre, intPart, fracPart) {
        return pre + intPart + ',' + fracPart;
      })
      .replace(/\s+/g, ' ')
      .trim();
    return out;
  }

  function evaluateAt(entry, xValue, bValue, cValue, dValue) {
    if (!entry || typeof entry.fn !== 'function') return NaN;
    try {
      const value = entry.fn(
        xValue,
        entry.a,
        bValue == null ? entry.b : bValue,
        cValue == null ? ((entry && entry.c == null) ? 0 : entry.c) : cValue,
        dValue == null ? ((entry && entry.d == null) ? 0 : entry.d) : dValue
      );
      return Number.isFinite(value) ? value : NaN;
    } catch (e) {
      return NaN;
    }
  }

  function eventToUser(board, evt) {
    const rect = board.containerObj.getBoundingClientRect();
    const lx = evt.clientX - rect.left;
    const ly = evt.clientY - rect.top;

    return {
      x: (lx - board.origin.scrCoords[1]) / board.unitX,
      y: (board.origin.scrCoords[2] - ly) / board.unitY
    };
  }

  function solveBForPointer(entry, xValue, targetY) {
    const bBase = entry && entry.b == null ? 0 : entry.b;
    const cBase = entry && entry.c == null ? 0 : entry.c;
    const base = evaluateAt(entry, xValue, bBase, cBase);
    const shifted = evaluateAt(entry, xValue, bBase + 1, cBase);
    const sensitivity = shifted - base;
    if (!Number.isFinite(base) || !Number.isFinite(sensitivity) || Math.abs(sensitivity) < 0.000001) {
      return bBase + (targetY - base);
    }
    return bBase + ((targetY - base) / sensitivity);
  }

  function solveCForPointer(entry, xValue, targetY, bValue) {
    const cBase = entry && entry.c == null ? 0 : entry.c;
    const bUsed = bValue == null ? (entry ? entry.b : 0) : bValue;
    const base = evaluateAt(entry, xValue, bUsed, cBase);
    const shifted = evaluateAt(entry, xValue, bUsed, cBase + 1);
    const sensitivity = shifted - base;
    if (!Number.isFinite(base) || !Number.isFinite(sensitivity) || Math.abs(sensitivity) < 0.000001) {
      return cBase + (targetY - base);
    }
    return cBase + ((targetY - base) / sensitivity);
  }

  function solveDForPointer(entry, xValue, targetY, bValue, cValue) {
    const dBase = entry && entry.d == null ? 0 : entry.d;
    const bUsed = bValue == null ? (entry ? entry.b : 0) : bValue;
    const cUsed = cValue == null ? (entry ? entry.c : 0) : cValue;
    const base = evaluateAt(entry, xValue, bUsed, cUsed, dBase);
    const shifted = evaluateAt(entry, xValue, bUsed, cUsed, dBase + 1);
    const sensitivity = shifted - base;
    if (!Number.isFinite(base) || !Number.isFinite(sensitivity) || Math.abs(sensitivity) < 0.000001) {
      return dBase + (targetY - base);
    }
    return dBase + ((targetY - base) / sensitivity);
  }

  function solveDForPointer(entry, xValue, targetY, bValue, cValue) {
    const dBase = entry && entry.d == null ? 0 : entry.d;
    const bUsed = bValue == null ? (entry ? entry.b : 0) : bValue;
    const cUsed = cValue == null ? (entry ? entry.c : 0) : cValue;
    const base = evaluateAt(entry, xValue, bUsed, cUsed, dBase);
    const shifted = evaluateAt(entry, xValue, bUsed, cUsed, dBase + 1);
    const sensitivity = shifted - base;
    if (!Number.isFinite(base) || !Number.isFinite(sensitivity) || Math.abs(sensitivity) < 0.000001) {
      return dBase + (targetY - base);
    }
    return dBase + ((targetY - base) / sensitivity);
  }

  function relayoutPanelsForBoard(boardId, board) {
    try {
      const entries = Object.keys(window.__scharEntries || {}).map(function(key) {
        return window.__scharEntries[key];
      }).filter(function(item) {
        const host = item && getPanelHost(item);
        return item && item.boardId === boardId && item.panel && item.panel.parentNode && host && item.panel.parentNode === host;
      }).sort(function(a, b) {
        return String(a.uid || '').localeCompare(String(b.uid || ''));
      });

      let top = 10;
      entries.forEach(function(item) {
        try {
          item.panel.style.left = '10px';
          item.panel.style.top = top + 'px';
          const reservedHeight = Number(item._panelHeight || item._panelReservedHeight || item.panel.offsetHeight || 56);
          top += Math.max(56, reservedHeight) + 8;
        } catch (e) {}
      });
    } catch (e) {}
  }

  function getPanelHost(entry) {
    if (!entry || !entry.board || !entry.board.containerObj) return null;

    const boardEl = entry.board.containerObj;
    const wrapper = boardEl.parentElement || boardEl;

    try {
      const wrapperStyle = window.getComputedStyle(wrapper);
      if (!wrapperStyle.position || wrapperStyle.position === 'static') {
        wrapper.style.position = 'relative';
      }
    } catch (e) {}

    let host = wrapper.querySelector(':scope > .lia-schar-overlay-host');
    if (!host) {
      host = document.createElement('div');
      host.className = 'lia-schar-overlay-host';
      host.style.position = 'absolute';
      host.style.left = boardEl.offsetLeft + 'px';
      host.style.top = boardEl.offsetTop + 'px';
      host.style.width = boardEl.offsetWidth + 'px';
      host.style.height = boardEl.offsetHeight + 'px';
      host.style.pointerEvents = 'none';
      host.style.zIndex = '60';
      wrapper.appendChild(host);
    } else {
      host.style.left = boardEl.offsetLeft + 'px';
      host.style.top = boardEl.offsetTop + 'px';
      host.style.width = boardEl.offsetWidth + 'px';
      host.style.height = boardEl.offsetHeight + 'px';
    }

    return host;
  }

  function getNameTagIndex(entry) {
    try {
      const list = Object.keys(window.__scharEntries || {}).map(function(key) {
        return window.__scharEntries[key];
      }).filter(function(item) {
        return item && entry && item.boardId === entry.boardId;
      }).sort(function(a, b) {
        return String(a.uid || '').localeCompare(String(b.uid || ''));
      });
      const idx = list.indexOf(entry);
      return idx >= 0 ? idx : 0;
    } catch (e) {
      return 0;
    }
  }

  function ensureNameTag(entry) {
    if (!entry || !entry.board) return;
    if (entry.nameTag && entry.nameTag.board === entry.board && entry.nameAnchor && entry.nameAnchor.board === entry.board) return;
    try {
      const fn = function(x) { return evaluateAt(entry, x); };
      const safeBBox = function(board) {
        try {
          const bb = board.getBoundingBox();
          if (Array.isArray(bb) && bb.length >= 4) return bb;
        } catch (e) {}
        return [-10, 10, 10, -10];
      };
      const chooseVisibleAnchorX = function(board) {
        const bb = safeBBox(board);
        const xmin = bb[0], ymax = bb[1], xmax = bb[2], ymin = bb[3];
        const xspan = Math.max(1e-9, xmax - xmin);
        const yspan = Math.max(1e-9, ymax - ymin);
        const xStart = xmax - 0.10 * xspan;
        const xEnd = xmin + 0.18 * xspan;
        const yPadTop = 0.14 * yspan;
        const yPadBottom = 0.12 * yspan;
        const steps = 120;

        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const x = xStart - t * (xStart - xEnd);
          let y;
          try { y = fn(x); } catch (e) { y = NaN; }
          if (!Number.isFinite(y)) continue;
          if (y <= ymax - yPadTop && y >= ymin + yPadBottom) return x;
        }
        return xmin + 0.60 * xspan;
      };

      entry.nameAnchor = entry.board.create('point', [
        function() { return chooseVisibleAnchorX(entry.board); },
        function() {
          const x = chooseVisibleAnchorX(entry.board);
          let y;
          try { y = fn(x); } catch (e) { y = NaN; }
          if (!Number.isFinite(y)) {
            const bb = safeBBox(entry.board);
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

      entry.nameTag = entry.board.create('text', [
        function() { return entry.nameAnchor.X() + 0.18; },
        function() { return entry.nameAnchor.Y() + 0.18; },
        function() {
          const raw = entry && entry.cfg && entry.cfg.name ? String(entry.cfg.name) : 'f';
          const n = raw.trim().replace(/\(.*$/, '').replace(/[^A-Za-z]/g, '') || 'f';
          return '\\(' + n + '\\)';
        }
      ], {
        fixed: true,
        highlight: false,
        parse: false,
        useMathJax: true,
        display: 'html',
        fontSize: 24,
        strokeColor: entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff',
        fillColor: entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff',
        anchorX: 'left',
        anchorY: 'top'
      });
    } catch (e) {}
  }

  function getScharStateStore() {
    window.__liaScharStateStore = window.__liaScharStateStore || {};
    return window.__liaScharStateStore;
  }

  function getScharStateKey(uid, boardId) {
    return String(uid || '') + '::' + String(boardId || '');
  }

  function restoreScharEntryState(entry) {
    if (!entry) return;
    const key = getScharStateKey(entry.uid, entry.boardId);
    const raw = getScharStateStore()[key];
    if (!raw || typeof raw !== 'object') return;

    const readNum = function(v, fallback) {
      const n = Number(v);
      return Number.isFinite(n) ? n : fallback;
    };

    entry.a = Math.max(-10, Math.min(10, readNum(raw.a, entry.a)));
    entry.b = Math.max(-10, Math.min(10, readNum(raw.b, entry.b)));
    entry.c = Math.max(-10, Math.min(10, readNum(raw.c, entry.c)));
    entry.d = Math.max(-10, Math.min(10, readNum(raw.d, entry.d)));
    entry.n = readNum(raw.n, entry.n);
    entry.termVisible = !!raw.termVisible;
    entry.panelMinimized = !!raw.panelMinimized;

    const scale = readNum(raw.panelScale, entry.panelScale);
    entry.panelScale = Math.max(0.35, Math.min(1.2, scale));
  }

  function persistScharEntryState(entry) {
    if (!entry) return;
    const key = getScharStateKey(entry.uid, entry.boardId);
    getScharStateStore()[key] = {
      a: Number(entry.a),
      b: Number(entry.b),
      c: Number(entry.c),
      d: Number(entry.d),
      n: Number(entry.n),
      termVisible: !!entry.termVisible,
      panelMinimized: !!entry.panelMinimized,
      panelScale: Number(entry.panelScale || 0.6)
    };
  }

  function removeExisting(uid) {
    const key = 'schar-' + uid;
    const entry = window.__scharEntries[key];
    if (!entry) return;
    const boardRef = entry.board;
    const boardIdRef = entry.boardId;

    try {
      if (entry.graph && entry.board) entry.board.removeObject(entry.graph);
    } catch (e) {}

      try {
        if (entry.nameTag && entry.board) entry.board.removeObject(entry.nameTag);
      } catch (e) {}

      try {
        if (entry.nameAnchor && entry.board) entry.board.removeObject(entry.nameAnchor);
      } catch (e) {}

    try {
      if (entry.panel && entry.panel.parentNode) entry.panel.parentNode.removeChild(entry.panel);
    } catch (e) {}

    try {
      if (typeof entry.stopDrag === 'function') entry.stopDrag();
    } catch (e) {}

    try {
      if (typeof persistScharEntryState === 'function') persistScharEntryState(entry);
    } catch (e) {}

    delete window.__scharEntries[key];
    relayoutPanelsForBoard(boardIdRef, boardRef);
  }

  function getScharStateStore() {
    window.__liaScharStateStore = window.__liaScharStateStore || {};
    return window.__liaScharStateStore;
  }

  function getScharStateKey(uid, boardId) {
    return String(uid || '') + '::' + String(boardId || '');
  }

  function restoreScharEntryState(entry) {
    if (!entry) return;
    const key = getScharStateKey(entry.uid, entry.boardId);
    const raw = getScharStateStore()[key];
    if (!raw || typeof raw !== 'object') return;

    const readNum = function(v, fallback) {
      const n = Number(v);
      return Number.isFinite(n) ? n : fallback;
    };

    entry.a = Math.max(-10, Math.min(10, readNum(raw.a, entry.a)));
    entry.b = Math.max(-10, Math.min(10, readNum(raw.b, entry.b)));
    entry.c = Math.max(-10, Math.min(10, readNum(raw.c, entry.c)));
    entry.d = Math.max(-10, Math.min(10, readNum(raw.d, entry.d)));
    entry.n = readNum(raw.n, entry.n);
    entry.termVisible = !!raw.termVisible;
    entry.panelMinimized = !!raw.panelMinimized;

    const scale = readNum(raw.panelScale, entry.panelScale);
    entry.panelScale = Math.max(0.35, Math.min(1.2, scale));
  }

  function persistScharEntryState(entry) {
    if (!entry) return;
    const key = getScharStateKey(entry.uid, entry.boardId);
    getScharStateStore()[key] = {
      a: Number(entry.a),
      b: Number(entry.b),
      c: Number(entry.c),
      d: Number(entry.d),
      n: Number(entry.n),
      termVisible: !!entry.termVisible,
      panelMinimized: !!entry.panelMinimized,
      panelScale: Number(entry.panelScale || 0.6)
    };
  }

  function hasLiveGraph(entry, board) {
    return !!(
      entry &&
      entry.graph &&
      entry.graph.board &&
      board &&
      entry.graph.board === board
    );
  }

  function hasLivePanel(entry, board) {
    return !!(
      entry &&
      entry.panel &&
      entry.panel.parentNode &&
      board &&
      board.containerObj &&
      entry.panel.parentNode === board.containerObj
    );
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

  function typesetMathInNode(node) {
    const MJ = getMathJaxEngine();
    if (!MJ || !node || typeof MJ.typesetPromise !== 'function') return;

    const runTypeset = function() {
      try {
        if (typeof MJ.typesetClear === 'function') {
          try { MJ.typesetClear([node]); } catch (e) {}
        }
        MJ.typesetPromise([node]).catch(function(){});
      } catch (e) {}
    };

    runTypeset();
    try {
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(function() { runTypeset(); });
      }
    } catch (e) {}
  }

  function toTexExpr(expr) {
    const convertSqrtCalls = function(input) {
      const src = String(input || '');
      let out = '';
      let i = 0;

      while (i < src.length) {
        if (src.slice(i, i + 4).toLowerCase() === 'sqrt') {
          let j = i + 4;
          while (j < src.length && /\s/.test(src[j])) j += 1;
          if (src[j] === '(') {
            let k = j + 1;
            let depth = 1;
            while (k < src.length && depth > 0) {
              if (src[k] === '(') depth += 1;
              else if (src[k] === ')') depth -= 1;
              k += 1;
            }
            if (depth === 0) {
              const inner = src.slice(j + 1, k - 1);
              out += '\\sqrt{' + convertSqrtCalls(inner) + '}';
              i = k;
              continue;
            }
          }
        }
        out += src[i];
        i += 1;
      }

      return out;
    };

    return convertSqrtCalls(String(expr || ''))
      .replace(/\*/g, ' \\cdot ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function ensurePanel(entry) {
    if (!entry || !entry.board || !entry.board.containerObj) return false;

    ensureCss();
    const panelHost = getPanelHost(entry);
    if (!panelHost) return false;

    try {
      entry.board.containerObj.style.position = 'relative';
    } catch (e) {}

    let panel = entry.panel;
    if (!panel || !panel.parentNode || panel.parentNode !== entry.board.containerObj) {
      if (panel && panel.parentNode && panel.parentNode !== entry.board.containerObj) {
        try { panel.parentNode.removeChild(panel); } catch (e) {}
        panel = null;
      }

      if (!panel) {
        panel = document.createElement('div');
        panel.className = 'lia-schar-panel';
        panel.innerHTML = '' +
          '<div class="lia-schar-head">' +
            '<span class="lia-schar-label">\\(a\\):</span>' +
            '<input class="lia-schar-slider" type="range" min="-10" max="10" step="0.05" value="1" />' +
          '</div>' +
          '<label class="lia-schar-term-toggle-wrap"><input class="lia-schar-term-toggle" type="checkbox" /> Term anzeigen</label>' +
          '<div class="lia-schar-term"></div>';
      }

      entry.board.containerObj.appendChild(panel);
    }

    entry.panel = panel;
  entry.labelEl = panel.querySelector('.lia-schar-label');
    entry.sliderEl = panel.querySelector('.lia-schar-slider');
    entry.termToggleWrapEl = panel.querySelector('.lia-schar-term-toggle-wrap');
    entry.termToggleEl = panel.querySelector('.lia-schar-term-toggle');
    entry.termEl = panel.querySelector('.lia-schar-term');

    if (!entry.termToggleWrapEl && entry.termEl) {
      const wrap = document.createElement('label');
      wrap.className = 'lia-schar-term-toggle-wrap';
      wrap.innerHTML = '<input class="lia-schar-term-toggle" type="checkbox" /> Term anzeigen';
      try { panel.insertBefore(wrap, entry.termEl); } catch (e) {}
      entry.termToggleWrapEl = panel.querySelector('.lia-schar-term-toggle-wrap');
      entry.termToggleEl = panel.querySelector('.lia-schar-term-toggle');
    }

    const tone = neutralColor();
    const fill = tone === '#fff' ? 'rgba(0,0,0,.82)' : 'rgba(255,255,255,.94)';
    panel.style.position = 'absolute';
    panel.style.left = '10px';
    panel.style.top = '10px';
    panel.style.zIndex = '60';
    panel.style.display = 'block';
    panel.style.visibility = 'visible';
    panel.style.opacity = '1';
    panel.style.pointerEvents = 'auto';
    panel.style.minWidth = '190px';
    panel.style.maxWidth = 'none';
    panel.style.padding = '8px 10px';
    panel.style.borderRadius = '10px';
    panel.style.boxSizing = 'border-box';
    panel.style.boxShadow = '0 6px 18px rgba(0,0,0,.18)';
    panel.style.color = tone;
    panel.style.background = fill;
    panel.style.borderColor = tone === '#fff' ? 'rgba(255,255,255,.25)' : 'rgba(0,0,0,.16)';
    panel.style.borderStyle = 'solid';
    panel.style.borderWidth = '1px';

    if (entry.labelEl) {
      entry.labelEl.style.display = 'inline-flex';
      entry.labelEl.style.alignItems = 'center';
      entry.labelEl.style.whiteSpace = 'nowrap';
      entry.labelEl.style.marginRight = '8px';
      const sliderParamName = (entry.paramSlots && entry.paramSlots.a) ? entry.paramSlots.a : 'a';
      entry.labelEl.innerHTML = '\\(' + sliderParamName + '\\):';
      typesetMathInNode(entry.labelEl);
    }

    panel.querySelector('.lia-schar-head').style.display = 'flex';
    panel.querySelector('.lia-schar-head').style.alignItems = 'center';
    panel.querySelector('.lia-schar-head').style.gap = '8px';

    if (entry.sliderEl) {
      entry.sliderEl.style.display = 'block';
      entry.sliderEl.style.flex = '0 0 220px';
      entry.sliderEl.style.width = '220px';
      entry.sliderEl.style.minWidth = '220px';
      entry.sliderEl.style.maxWidth = '220px';
      entry.sliderEl.style.margin = '0';
      entry.sliderEl.style.visibility = 'visible';
      entry.sliderEl.style.opacity = '1';
      entry.sliderEl.style.pointerEvents = 'auto';
      entry.sliderEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
    }

    if (entry.termEl) {
      entry.termEl.style.display = 'none';
      entry.termEl.style.visibility = 'visible';
      entry.termEl.style.opacity = '1';
    }

    if (entry.termToggleWrapEl) {
      entry.termToggleWrapEl.style.display = entry.cfg && Number(entry.cfg.showTerm) !== 0 ? 'inline-flex' : 'none';
      entry.termToggleWrapEl.style.alignItems = 'center';
      entry.termToggleWrapEl.style.gap = '6px';
      entry.termToggleWrapEl.style.whiteSpace = 'nowrap';
      entry.termToggleWrapEl.style.visibility = 'visible';
      entry.termToggleWrapEl.style.opacity = '1';
      entry.termToggleWrapEl.style.pointerEvents = 'auto';
      entry.termToggleWrapEl.style.marginTop = '6px';
      entry.termToggleWrapEl.style.fontSize = '13px';
      entry.termToggleWrapEl.style.userSelect = 'none';
    }

    if (entry.sliderEl && !entry.sliderEl.__liaScharBound) {
      entry.sliderEl.__liaScharBound = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointerup', 'pointercancel', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderEl.addEventListener('input', function() {
        entry.a = Math.max(-10, Math.min(10, Number(entry.sliderEl.value || 0)));
        refreshEntry(entry, true);
      });
    }

    if (entry.termToggleEl && !entry.termToggleEl.__liaScharBound) {
      entry.termToggleEl.__liaScharBound = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click'].forEach(function(type) {
        try { entry.termToggleEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      const onTermToggleChanged = function() {
        entry.termVisible = !!entry.termToggleEl.checked;
        refreshEntry(entry);
      };
      entry.termToggleEl.addEventListener('change', onTermToggleChanged);
      entry.termToggleEl.addEventListener('input', onTermToggleChanged);
    }

    if (panel && !panel.__liaScharPanelShield) {
      panel.__liaScharPanelShield = true;
      const blockPanelGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click', 'dblclick', 'wheel'].forEach(function(type) {
        try { panel.addEventListener(type, blockPanelGesture, true); } catch (e) {}
      });
    }

    if (panel && !panel.__liaScharPanelShield) {
      panel.__liaScharPanelShield = true;
      const blockPanelGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click', 'dblclick', 'wheel'].forEach(function(type) {
        try { panel.addEventListener(type, blockPanelGesture, true); } catch (e) {}
      });
    }

    relayoutPanelsForBoard(entry.boardId, entry.board);

    return !!entry.sliderEl && !!entry.termEl;
  }

  function refreshEntry(entry, lightweight) {
    if (!entry) return false;
    if (!ensurePanel(entry)) return false;

    if (entry.sliderEl) {
      entry.sliderEl.value = String(entry.a);
    }

    const allowTerm = !!(entry.cfg && Number(entry.cfg.showTerm) !== 0);
    const hasToggle = !!entry.termToggleEl;
    if (allowTerm && !hasToggle) entry.termVisible = true;
    if (!allowTerm) entry.termVisible = false;

    if (entry.termToggleWrapEl) {
      entry.termToggleWrapEl.style.display = allowTerm ? 'inline-flex' : 'none';
      entry.termToggleWrapEl.style.alignItems = 'center';
      entry.termToggleWrapEl.style.gap = '6px';
      entry.termToggleWrapEl.style.whiteSpace = 'nowrap';
      entry.termToggleWrapEl.style.visibility = 'visible';
      entry.termToggleWrapEl.style.opacity = '1';
      entry.termToggleWrapEl.style.pointerEvents = 'auto';
    }
    if (entry.termToggleEl) {
      entry.termToggleEl.checked = allowTerm ? !!entry.termVisible : false;
    }

    if (entry.termEl) {
      const fitPanelToTerm = function() {
        try {
          if (!entry.panel || !entry.termEl) return;
          const panel = entry.panel;
          let termWidth = 0;
          const mjx = entry.termEl.querySelectorAll('mjx-container');
          if (mjx && mjx.length) {
            mjx.forEach(function(node) {
              const w = Math.max(Number(node.scrollWidth || 0), Number(node.offsetWidth || 0));
              if (w > termWidth) termWidth = w;
            });
          }
          if (!termWidth) termWidth = entry.termEl.scrollWidth || 0;
          const fixedWidth = Math.ceil(Math.max(250, termWidth + 44));

          const measuredHeight = Math.ceil(Math.max(112, panel.scrollHeight || panel.offsetHeight || 0));
          const currentHeight = Number(entry._panelHeight || panel.offsetHeight || 0);
          const stableHeight = currentHeight > 0 ? Math.max(currentHeight, measuredHeight) : measuredHeight;

          panel.style.maxWidth = 'none';
          panel.style.minWidth = fixedWidth + 'px';
          panel.style.width = fixedWidth + 'px';
          panel.style.height = stableHeight + 'px';
          panel.style.minHeight = stableHeight + 'px';
          entry._panelWidth = fixedWidth;
          entry._panelHeight = stableHeight;
          entry._panelReservedHeight = stableHeight;
        } catch (e) {}
      };

      const shrinkRenderedMath = function() {
        try {
          const mjx = entry.termEl.querySelectorAll('mjx-container');
          mjx.forEach(function(node) {
            node.style.fontSize = '0.68em';
            node.style.whiteSpace = 'nowrap';
            node.style.display = 'inline-block';
          });
        } catch (e) {}
      };

      entry.termEl.style.fontSize = '32px';
      entry.termEl.style.lineHeight = '1.2';
      entry.termEl.style.whiteSpace = 'nowrap';
      entry.termEl.style.wordBreak = 'normal';
      entry.termEl.style.overflowWrap = 'normal';
      const shouldShowTerm = allowTerm && (hasToggle ? !!entry.termVisible : true);
      entry.termEl.style.display = shouldShowTerm ? 'block' : 'none';
      if (shouldShowTerm) {
        entry.termEl.innerHTML = '\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + toTexExpr(substituteTerm(entry.cfg.expr, entry.cfg.variableName, entry.a, entry.b, entry.c)) + '\\)';
        typesetMathInNode(entry.termEl).then(function() {
          shrinkRenderedMath();
          fitPanelToTerm();
        }).catch(function() {
          shrinkRenderedMath();
          fitPanelToTerm();
        });
      } else {
        entry.termEl.innerHTML = '';
        if (entry.panel) {
          entry.panel.style.width = '';
          entry.panel.style.minWidth = '190px';
          entry.panel.style.maxWidth = 'none';
          entry.panel.style.height = '';
          entry.panel.style.minHeight = '';
        }
        entry._panelWidth = 0;
        entry._panelHeight = 0;
        entry._panelReservedHeight = 0;
      }
    }

    try {
      if (entry.graph) {
        entry.graph.visProp.strokeColor = entry.cfg.color;
        entry.graph.visProp.highlightStrokeColor = entry.cfg.color;
        if (entry.graph.label && entry.graph.label.visProp) {
          entry.graph.label.visProp.strokeColor = entry.cfg.color;
          entry.graph.label.visProp.color = entry.cfg.color;
        }
      }
    } catch (e) {}

    try {
      if (entry.board && typeof entry.board.update === 'function') entry.board.update();
    } catch (e) {}

    relayoutPanelsForBoard(entry.boardId, entry.board);

    return true;
  }

  function stopDrag(entry) {
    if (!entry || !entry.dragState) return;

    const drag = entry.dragState;
    try { window.removeEventListener('pointermove', drag.onMove, true); } catch (e) {}
    try { window.removeEventListener('pointerup', drag.onUp, true); } catch (e) {}
    try { window.removeEventListener('pointercancel', drag.onUp, true); } catch (e) {}
    entry.dragState = null;
  }

  function bindGraphDrag(entry) {
    if (!entry || !entry.graph) return;
    if (entry.graph.__liaScharDragBound) return;
    entry.graph.__liaScharDragBound = true;

    const targets = [entry.graph.rendNode, entry.graph.rendNodeStroke].filter(Boolean);

    const onPointerDown = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      stopDrag(entry);

      const start = eventToUser(entry.board, evt);
      const pointerId = evt.pointerId;
      const startB = entry && entry.b == null ? 0 : entry.b;
      const startC = entry && entry.c == null ? 0 : entry.c;
      const startGraphY = evaluateAt(entry, start.x, startB, startC);
      const offsetY = Number.isFinite(startGraphY) ? (start.y - startGraphY) : 0;

      const onMove = function(moveEvt) {
        if (moveEvt.pointerId !== pointerId) return;
        moveEvt.preventDefault();
        moveEvt.stopPropagation();

        const now = eventToUser(entry.board, moveEvt);
        if (entry && entry.dragSupportsX) {
          entry.b = startB - (now.x - start.x);
        }
        const desiredY = now.y - offsetY;
        if (entry && entry.dragUsesC) {
          const solvedC = solveCForPointer(entry, now.x, desiredY, entry.b);
          if (Number.isFinite(solvedC)) entry.c = solvedC;
        } else {
          const solvedB = solveBForPointer(entry, now.x, desiredY);
          if (Number.isFinite(solvedB)) entry.b = solvedB;
        }
        refreshEntry(entry);
      };

      const onUp = function(upEvt) {
        if (upEvt.pointerId !== pointerId) return;
        upEvt.preventDefault();
        upEvt.stopPropagation();
        stopDrag(entry);
      };

      entry.dragState = {
        onMove: onMove,
        onUp: onUp
      };

      window.addEventListener('pointermove', onMove, true);
      window.addEventListener('pointerup', onUp, true);
      window.addEventListener('pointercancel', onUp, true);
    };

    targets.forEach(function(target) {
      try {
        target.style.cursor = 'ns-resize';
        target.style.touchAction = 'none';
        target.addEventListener('pointerdown', onPointerDown, true);
      } catch (e) {}

      try {
        if (entry.nameTag && entry.nameTag.visProp) {
          entry.nameTag.visProp.strokeColor = entry.cfg.color;
          entry.nameTag.needsUpdate = true;
        }
      } catch (e) {}
    });

    entry.stopDrag = function() {
      stopDrag(entry);
      targets.forEach(function(target) {
        try { target.removeEventListener('pointerdown', onPointerDown, true); } catch (e) {}
      });
    };
  }

  window.renderScharFromSpec = function(uid, spec) {
    const cfg = parseScharSpec(spec);
    const boardId = String(cfg.boardId || window.__liaLastCoordBoardId || '').trim();
    const board = window.__boards && window.__boards[boardId];
    if (!uid || !boardId || !board || !cfg.expr) return false;

    const key = 'schar-' + uid;
    let entry = window.__scharEntries[key];

    if (
      entry &&
      entry.boardId === boardId &&
      entry.board === board &&
      entry.graph &&
      entry.graph.board === board &&
      entry.cfg &&
      entry.cfg.name === cfg.name &&
      entry.cfg.variableName === cfg.variableName &&
      entry.cfg.expr === cfg.expr &&
      entry.cfg.color === cfg.color &&
      entry.cfg.showTerm === cfg.showTerm
    ) {
      return refreshEntry(entry);
    }

    const normalizedExpr = normalizeFamilyExpr(cfg.expr, cfg.variableName);
    const fn = compileFamilyExpr(cfg.expr, cfg.variableName);
    if (!fn) return false;

    removeExisting(uid);

    entry = {
      uid: uid,
      boardId: boardId,
      board: board,
      cfg: cfg,
      normalizedExpr: normalizedExpr,
      paramSlots: extractParamSlots(cfg.expr, cfg.variableName),
      fn: fn,
      a: 1,
      b: 0,
      c: 0,
      dragUsesC: /[+\-]\s*c\b/.test(normalizedExpr),
      dragSupportsX: /\bb\b/.test(normalizedExpr),
      graph: null,
      nameTag: null,
      panel: null,
      sliderEl: null,
      labelEl: null,
      termToggleWrapEl: null,
      termToggleEl: null,
      termVisible: false,
      termEl: null,
      dragState: null,
      stopDrag: null
    };

    try {
      entry.graph = board.create('functiongraph', [function(x) {
        return evaluateAt(entry, x);
      }], {
        name: cfg.name + '(' + cfg.variableName + ')',
        strokeColor: cfg.color,
        highlightStrokeColor: cfg.color,
        strokeWidth: 3,
        fixed: true,
        withLabel: false,
        label: { color: cfg.color, strokeColor: cfg.color }
      });
    } catch (e) {
      return false;
    }

    window.__scharEntries[key] = entry;

    ensurePanel(entry);
      ensureNameTag(entry);
    bindGraphDrag(entry);
    refreshEntry(entry);
    return true;
  };

  window.__bootstrapScharen = function() {
    const nodes = document.querySelectorAll('[id^="schar-spec-"][data-spec]');

    nodes.forEach(function(node) {
      const uid = String(node.id || '').replace(/^schar-spec-/, '');
      const spec = String(node.dataset.spec || '');
      if (!uid || !spec) return;

      window.renderScharFromSpec(uid, spec);
    });
  };

  try {
    const mo = new MutationObserver(function() {
      if (window.__bootstrapScharen) window.__bootstrapScharen();
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
    if (window.__registerLiaThemeListener) {
      window.__registerLiaThemeListener(function() {
        Object.keys(window.__scharEntries || {}).forEach(function(key) {
          refreshEntry(window.__scharEntries[key]);
        });
      });
    }
  } catch (e) {}

  try {
    if (window.__bootstrapScharen) window.__bootstrapScharen();
  } catch (e) {}
})();

    if (window.__liaRunCoordHooks) window.__liaRunCoordHooks();
  }, 120);
}

(function(){
  if (window.__scharReadyV3) {
    try {
      if (window.__bootstrapScharen) window.__bootstrapScharen();
    } catch (e) {}
    return;
  }
  window.__scharReadyV3 = true;

  window.__scharEntries = window.__scharEntries || {};

  function ensureCss() {
    if (document.getElementById('__lia_schar_css_v3')) return;

    const st = document.createElement('style');
    st.id = '__lia_schar_css_v3';
    st.textContent = `
      .lia-schar-panel{
        position:absolute;
        left:10px;
        top:10px;
        z-index:52;
        min-width:190px;
        max-width:none;
        padding:8px 10px;
        border-radius:10px;
        background:rgba(255,255,255,.97);
        border:1px solid rgba(0,0,0,.16);
        box-shadow:0 6px 18px rgba(0,0,0,.18);
        box-sizing:border-box;
        font-family:inherit;
      }

      .lia-schar-head{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:10px;
        margin-bottom:6px;
        font-size:10px;
        font-weight:600;
      }

      .lia-schar-slider{
        width:100%;
        margin:0;
      }

      .lia-schar-slider::-webkit-slider-thumb{
        width:12px;
        height:12px;
      }

      .lia-schar-slider::-moz-range-thumb{
        width:12px;
        height:12px;
        border:none;
      }

      .lia-schar-term{
        margin-top:8px;
        font-size:5px;
        line-height:1.35;
        word-break:normal;
        white-space:nowrap;
        overflow-wrap:normal;
      }

      .lia-schar-term mjx-container{
        font-size:0.7em !important;
      }
    `;

    (document.head || document.documentElement).appendChild(st);
  }

  function neutralColor() {
    try {
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
      const el = doc.body || doc.documentElement;
      const bg = win.getComputedStyle(el).backgroundColor;
      const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
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
        depth += 1;
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

  function looksLikeColor(value) {
    const raw = String(value || '').trim();
    if (!raw) return false;
    return /^#|^rgb\(|^rgba\(|^hsl\(|^hsla\(|^[a-z]+$/i.test(raw);
  }

  function parseBoolFlag(value, fallbackValue) {
    const raw = String(value || '').trim().toLowerCase().replace(/^term\s*=\s*/, '');
    if (!raw) return fallbackValue;
    if (raw === '1' || raw === 'true' || raw === 'ja') return 1;
    if (raw === '0' || raw === 'false' || raw === 'nein') return 0;
    return fallbackValue;
  }

  function parseScharSpec(spec) {
    const raw = unquote(spec);
    const parts = splitTopLevel(raw, ';');
    const name = parts[0] ? unquote(parts[0]) : 'f';
    const variableName = parts[1] ? unquote(parts[1]) : 'x';
    const expr = parts[2] ? decodeExprPlaceholders(unquote(parts[2])) : '';
    const boardId = parts[3] ? unquote(parts[3]) : '';

    let showTerm = 1;
    let color = '#0b5fff';

    if (parts[4] && looksLikeColor(unquote(parts[4]))) {
      color = unquote(parts[4]);
    } else {
      showTerm = parseBoolFlag(parts[4], 1);
      color = parts[5] ? unquote(parts[5]) : '#0b5fff';
    }

    return {
      name: String(name || 'f').trim() || 'f',
      variableName: String(variableName || 'x').trim() || 'x',
      expr: String(expr || '').trim(),
      boardId: String(boardId || '').trim(),
      showTerm: showTerm ? 1 : 0,
      color: String(color || '#0b5fff').trim() || '#0b5fff'
    };
  }

  function escapeRegExp(value) {
    return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function normalizeFamilyExpr(expr, variableName) {
    let s = String(expr || '').trim();
    const v = String(variableName || 'x').trim() || 'x';
    const vEsc = escapeRegExp(v);

    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*\([^)]*\)\s*=\s*/i, '');
    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*=\s*/i, '');
    s = s.replace(/���/g, '-');
    s = s.replace(/\^/g, '**');
    s = s.replace(/(\d)\s*([A-Za-z(])/g, '$1*$2');
    s = s.replace(/\)\s*([A-Za-z0-9(])/g, ')*$1');
    s = s.replace(new RegExp('([abcd])\\s*(' + vEsc + ')', 'g'), '$1*$2');
    s = s.replace(new RegExp('(' + vEsc + ')\\s*\\(', 'g'), '$1*(');
    s = s.replace(/([abcd])\s*\(/g, '$1*(');

    const reserved = {
      pi: true, e: true,
      sin: true, cos: true, tan: true,
      asin: true, acos: true, atan: true,
      sinh: true, cosh: true, tanh: true,
      exp: true, log: true, ln: true,
      sqrt: true, abs: true,
      floor: true, ceil: true, round: true,
      min: true, max: true, pow: true
    };
    reserved[String(v).toLowerCase()] = true;

    s = s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(token) {
      const name = String(token || '');
      const lower = name.toLowerCase();
      const vLower = String(v).toLowerCase();
      if (reserved[lower] || lower === vLower) return name;
      if (lower.endsWith(vLower) && lower.length > vLower.length) {
        const head = name.slice(0, name.length - String(v).length);
        if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(head)) return head + '*' + v;
      }
      return name;
    });

    const slotByToken = Object.create(null);
    const slots = ['a', 'b', 'c', 'd', 'f'];
    let slotIndex = 0;

    s = s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(token) {
      const name = String(token || '');
      const lower = name.toLowerCase();
      if (reserved[lower]) return name;
      if (lower === v.toLowerCase()) return name;
      if (slotByToken[lower]) return slotByToken[lower];

      const nextSlot = slots[slotIndex];
      if (!nextSlot) return name;
      slotByToken[lower] = nextSlot;
      slotIndex += 1;
      return nextSlot;
    });

    s = s.replace(new RegExp('\\b([abcdf])\\s*(' + vEsc + ')', 'g'), '$1*$2');
    s = s.replace(/\b([abcdf])\s*\(/g, '$1*(');
    s = s.replace(/\b([abcdf])\s+(?=(?:pi|e|sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|exp|log|ln|sqrt|abs|floor|ceil|round|min|max|pow)\b)/gi, '$1*');

    return s.trim();
  }

  function extractParamSlots(expr, variableName) {
    let s = String(expr || '').trim();
    const v = String(variableName || 'x').trim().toLowerCase() || 'x';
    const vRaw = String(variableName || 'x').trim() || 'x';
    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*\([^)]*\)\s*=\s*/i, '');
    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*=\s*/i, '');

    const reserved = {
      pi: true, e: true,
      sin: true, cos: true, tan: true,
      asin: true, acos: true, atan: true,
      sinh: true, cosh: true, tanh: true,
      exp: true, log: true, ln: true,
      sqrt: true, abs: true,
      floor: true, ceil: true, round: true,
      min: true, max: true, pow: true
    };
    reserved[v] = true;

    const found = [];
    s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(_, token) {
      const rawToken = String(token || '');
      const lower = rawToken.toLowerCase();
      if (reserved[lower]) return rawToken;

      let candidate = rawToken;
      if (lower.endsWith(v) && lower.length > v.length) {
        candidate = rawToken.slice(0, rawToken.length - vRaw.length);
      }

      if (!candidate) return rawToken;
      if (String(candidate).toLowerCase() === v) return rawToken;
      if (found.indexOf(candidate) === -1) found.push(candidate);
      return rawToken;
    });

    return {
      a: found[0] || 'a',
      b: found[1] || 'b',
      c: found[2] || 'c',
      d: found[3] || 'd',
      f: found[4] || 'f'
    };
  }

  function compileFamilyExpr(expr, variableName) {
    const normalized = normalizeFamilyExpr(expr, variableName);
    const variable = String(variableName || 'x').trim() || 'x';

    try {
      return new Function(
        variable,
        'a',
        'b',
        'c',
        'd',
        'f',
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
        return (${normalized});
        `
      );
    } catch (e) {
      return null;
    }
  }

  function formatNumber(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return '0';
    if (Math.abs(n) < 0.0000001) return '0';
    if (Math.abs(n - Math.round(n)) < 0.0000001) return String(Math.round(n));
    return String(Math.round(n * 100) / 100);
  }

  function substituteTerm(expr, variableName, aValue, bValue, cValue, dValue, fValue) {
    const normalized = normalizeFamilyExpr(expr, variableName).replace(/\*\*/g, '^');
    const cResolved = (cValue == null) ? 0 : cValue;
    const dResolved = (dValue == null) ? 0 : dValue;
    const fResolved = (fValue == null) ? 0 : fValue;
    let out = normalized.replace(/\b(a|b|c|d|f)\b/g, function(match) {
      if (match === 'a') return formatNumber(aValue);
      if (match === 'b') return formatNumber(bValue);
      if (match === 'c') return formatNumber(cResolved);
      if (match === 'd') return formatNumber(dResolved);
      return formatNumber(fResolved);
    });
    out = out
      .replace(/\+\s*-/g, '- ')
      .replace(/-\s*-/g, '+ ')
      .replace(/\+\s*\+/g, '+ ')
      .replace(/-\s*\+/g, '- ')
      .replace(/(^|[^\w])(-?\d+)\.(\d+)/g, function(_, pre, intPart, fracPart) {
        return pre + intPart + ',' + fracPart;
      })
      .replace(/\s+/g, ' ')
      .trim();
    return out;
  }

  // Like substituteTerm, but also replaces the variable with (x+n) for n-shift polynomial families.
  function substitutedWithNShift(entry) {
    const raw = substituteTerm(entry.cfg.expr, entry.cfg.variableName, entry.a, entry.b, entry.c, entry.d, entry.f);
    const nVal = (entry.dragTranslatesPolyX && entry.n) ? entry.n : 0;
    if (nVal === 0) return raw;
    const v = String(entry.cfg && entry.cfg.variableName ? entry.cfg.variableName : 'x');
    const vEsc = escapeRegExp(v);
    const nFormatted = formatNumber(Math.abs(nVal)).replace('.', ',');
    const nStr = nVal > 0 ? '+' + nFormatted : '-' + nFormatted;
    return raw.replace(new RegExp('(?<![A-Za-z0-9_.])' + vEsc + '(?![A-Za-z0-9_])', 'g'), '(' + v + nStr + ')');
  }

  // Returns the expanded (Klammern aufgelöst) polynomial term as a TeX string for n-shift families.
  // Supports cubic:  p(x+n)=a(x+n)^3+b(x+n)^2+c(x+n)+d
  // and quartic:     p(x+n)=a(x+n)^4+b(x+n)^3+c(x+n)^2+d(x+n)+f
  function expandedPolyTerm(entry) {
    if (!entry.dragTranslatesPolyX) return null;
    const n = entry.n || 0;
    const a = entry.a, b = entry.b, c = entry.c, d = entry.d, f = entry.f;
    const v = String(entry.cfg && entry.cfg.variableName ? entry.cfg.variableName : 'x');
    const vEsc = escapeRegExp(v);
    const expr = String(entry.normalizedExpr || '');
    const isQuartic = new RegExp('\\b' + vEsc + '\\s*\\*\\*\\s*4\\b', 'i').test(expr);

    const coeffs = isQuartic
      ? [
          a,
          b + 4 * a * n,
          c + 3 * b * n + 6 * a * n * n,
          d + 2 * c * n + 3 * b * n * n + 4 * a * n * n * n,
          f + d * n + c * n * n + b * n * n * n + a * n * n * n * n
        ]
      : [
          a,
          b + 3 * a * n,
          c + 2 * b * n + 3 * a * n * n,
          d + c * n + b * n * n + a * n * n * n
        ];

    // Build the TeX polynomial from expanded coefficients.
    const fmtCoef = function(coef, isFirst) {
      const num = Math.round(coef * 1000) / 1000;
      if (Math.abs(num) < 0.0000001) return null;
      const absStr = formatNumber(Math.abs(num)).replace('.', ',');
      if (isFirst) return num < 0 ? '-' + absStr : absStr;
      return num < 0 ? '-' + absStr : '+' + absStr;
    };

    const parts = [];
    const powers = isQuartic ? [4, 3, 2, 1, 0] : [3, 2, 1, 0];

    for (let i = 0; i < coeffs.length; i += 1) {
      const coef = Number(coeffs[i]);
      const power = powers[i];
      const token = fmtCoef(coef, parts.length === 0);
      if (token === null) continue;

      let term = '';
      if (power === 0) {
        term = token;
      } else {
        const nearOne = Math.abs(Math.abs(coef) - 1) < 0.0000001;
        const signOnly = nearOne
          ? (coef < 0 ? '-' : (parts.length ? '+' : ''))
          : token;
        term = signOnly + v + (power > 1 ? '^' + String(power) : '');
      }
      parts.push(term);
    }

    if (parts.length === 0) return '0';
    return parts.join('\\,').replace(/\+\s*-/g, '-').replace(/-\s*-/g, '+');
  }

  function getPolyVerticalParam(entry) {
    const expr = String(entry && entry.normalizedExpr || '');
    if (hasStandaloneParamTerm(expr, 'f')) return 'f';
    return 'd';
  }

  function evaluateAt(entry, xValue, bValue, cValue, dValue, fValue) {
    if (!entry || typeof entry.fn !== 'function') return NaN;
    try {
      // For n-shift polynomial families, apply the horizontal offset at evaluation time:
      // fn(x+n, a, b, c, d) = a*(x+n)^3 + b*(x+n)^2 + c*(x+n) + d
      const xEval = (entry.dragTranslatesPolyX && entry.n) ? xValue + entry.n : xValue;
      const value = entry.fn(
        xEval,
        entry.a,
        bValue == null ? entry.b : bValue,
        cValue == null ? ((entry && entry.c == null) ? 0 : entry.c) : cValue,
        dValue == null ? ((entry && entry.d == null) ? 0 : entry.d) : dValue,
        fValue == null ? ((entry && entry.f == null) ? 0 : entry.f) : fValue
      );
      return Number.isFinite(value) ? value : NaN;
    } catch (e) {
      return NaN;
    }
  }

  function eventToUser(board, evt) {
    const rect = board.containerObj.getBoundingClientRect();
    const lx = evt.clientX - rect.left;
    const ly = evt.clientY - rect.top;

    return {
      x: (lx - board.origin.scrCoords[1]) / board.unitX,
      y: (board.origin.scrCoords[2] - ly) / board.unitY
    };
  }

  function solveBForPointer(entry, xValue, targetY) {
    const dragBase = entry && entry.dragUsesC ? (entry.c == null ? 0 : entry.c) : (entry ? entry.b : 0);
    const base = entry && entry.dragUsesC
      ? evaluateAt(entry, xValue, entry.b, dragBase)
      : evaluateAt(entry, xValue, dragBase, entry ? entry.c : 0);
    const shifted = entry && entry.dragUsesC
      ? evaluateAt(entry, xValue, entry.b, dragBase + 1)
      : evaluateAt(entry, xValue, dragBase + 1, entry ? entry.c : 0);
    const sensitivity = shifted - base;
    if (!Number.isFinite(base)) return dragBase;
    if (!Number.isFinite(sensitivity) || Math.abs(sensitivity) < 0.000001) {
      return dragBase + (targetY - base);
    }
    return dragBase + ((targetY - base) / sensitivity);
  }

  function solveCForPointer(entry, xValue, targetY, bValue) {
    const cBase = entry && entry.c == null ? 0 : entry.c;
    const bUsed = bValue == null ? (entry ? entry.b : 0) : bValue;
    const base = evaluateAt(entry, xValue, bUsed, cBase);
    const shifted = evaluateAt(entry, xValue, bUsed, cBase + 1);
    const sensitivity = shifted - base;
    if (!Number.isFinite(base) || !Number.isFinite(sensitivity) || Math.abs(sensitivity) < 0.000001) {
      return cBase + (targetY - base);
    }
    return cBase + ((targetY - base) / sensitivity);
  }

  function solveDForPointer(entry, xValue, targetY, bValue, cValue) {
    const dBase = entry && entry.d == null ? 0 : entry.d;
    const bUsed = bValue == null ? (entry ? entry.b : 0) : bValue;
    const cUsed = cValue == null ? (entry ? entry.c : 0) : cValue;
    const base = evaluateAt(entry, xValue, bUsed, cUsed, dBase);
    const shifted = evaluateAt(entry, xValue, bUsed, cUsed, dBase + 1);
    const sensitivity = shifted - base;
    if (!Number.isFinite(base) || !Number.isFinite(sensitivity) || Math.abs(sensitivity) < 0.000001) {
      return dBase + (targetY - base);
    }
    return dBase + ((targetY - base) / sensitivity);
  }

  function relayoutPanelsForBoard(boardId, board) {
    try {
      const entries = Object.keys(window.__scharEntries || {}).map(function(key) {
        return window.__scharEntries[key];
      }).filter(function(item) {
        const host = getPanelHost(item);
        return item && item.boardId === boardId && item.panel && item.panel.parentNode && host && item.panel.parentNode === host;
      }).sort(function(a, b) {
        return String(a.uid || '').localeCompare(String(b.uid || ''));
      });

      let top = 10;
      entries.forEach(function(item) {
        try {
          item.panel.style.left = '10px';
          item.panel.style.top = top + 'px';
          const panelH = Math.ceil((item.panel.getBoundingClientRect && item.panel.getBoundingClientRect().height) || item.panel.offsetHeight || 56);
          top += panelH + 8;
        } catch (e) {}
      });
    } catch (e) {}
  }

  function applyPanelScale(entry) {
    if (!entry || !entry.panel) return;
    const scale = Math.max(0.55, Math.min(1.45, Number(entry.panelScale || 1)));
    entry.panelScale = scale;
    entry.panel.style.transformOrigin = 'top left';
    entry.panel.style.transform = 'scale(' + scale + ')';
  }

  function bindPanelResizeHandle(entry) {
    if (!entry || !entry.panel) return;
    const panel = entry.panel;
    let handle = panel.querySelector('.lia-schar-resize-handle');
    if (!handle) {
      handle = document.createElement('div');
      handle.className = 'lia-schar-resize-handle';
      panel.appendChild(handle);
    }

    handle.style.position = 'absolute';
    handle.style.right = '0';
    handle.style.bottom = '0';
    handle.style.width = '18px';
    handle.style.height = '18px';
    handle.style.cursor = 'nwse-resize';
    handle.style.borderRight = '2px solid ' + (entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff');
    handle.style.borderBottom = '2px solid ' + (entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff');
    handle.style.borderBottomRightRadius = '8px';
    handle.style.boxSizing = 'border-box';
    handle.style.zIndex = '5';
    handle.style.pointerEvents = 'auto';
    handle.style.userSelect = 'none';
    handle.style.touchAction = 'none';

    if (handle.__liaScharResizeBound) return;
    handle.__liaScharResizeBound = true;

    const block = function(evt) {
      try { evt.stopPropagation(); } catch (e) {}
    };
    ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click', 'dblclick'].forEach(function(type) {
      try { handle.addEventListener(type, block, true); } catch (e) {}
    });

    let drag = null;
    handle.addEventListener('pointerdown', function(evt) {
      try { evt.preventDefault(); } catch (e) {}
      try { evt.stopPropagation(); } catch (e) {}

      const base = Number(entry.panelScale || 1);
      drag = {
        pointerId: evt.pointerId,
        startX: evt.clientX,
        startY: evt.clientY,
        startScale: base
      };
      try { handle.setPointerCapture(evt.pointerId); } catch (e) {}
    }, true);

    const onMove = function(evt) {
      if (!drag || evt.pointerId !== drag.pointerId) return;
      try { evt.preventDefault(); } catch (e) {}
      try { evt.stopPropagation(); } catch (e) {}

      const dx = evt.clientX - drag.startX;
      const dy = evt.clientY - drag.startY;
      const delta = Math.max(dx, dy);
      entry.panelScale = Math.max(0.55, Math.min(1.45, drag.startScale + (delta / 260)));
      applyPanelScale(entry);
      relayoutPanelsForBoard(entry.boardId, entry.board);
    };

    const onUp = function(evt) {
      if (!drag || evt.pointerId !== drag.pointerId) return;
      try { evt.preventDefault(); } catch (e) {}
      try { evt.stopPropagation(); } catch (e) {}
      drag = null;
      relayoutPanelsForBoard(entry.boardId, entry.board);
    };

    window.addEventListener('pointermove', onMove, true);
    window.addEventListener('pointerup', onUp, true);
    window.addEventListener('pointercancel', onUp, true);

    entry.__unbindPanelResizeHandle = function() {
      try { window.removeEventListener('pointermove', onMove, true); } catch (e) {}
      try { window.removeEventListener('pointerup', onUp, true); } catch (e) {}
      try { window.removeEventListener('pointercancel', onUp, true); } catch (e) {}
    };
  }

  function getPanelHost(entry) {
    if (!entry || !entry.board || !entry.board.containerObj) return null;

    const boardEl = entry.board.containerObj;
    try {
      const boardStyle = window.getComputedStyle(boardEl);
      if (!boardStyle.position || boardStyle.position === 'static') {
        boardEl.style.position = 'relative';
      }
    } catch (e) {}

    let host = null;
    try {
      host = boardEl.querySelector(':scope > .lia-schar-overlay-host');
    } catch (e) {
      host = boardEl.querySelector('.lia-schar-overlay-host');
    }

    if (!host) {
      host = document.createElement('div');
      host.className = 'lia-schar-overlay-host';
      host.style.position = 'absolute';
      host.style.left = '0';
      host.style.top = '0';
      host.style.width = '100%';
      host.style.height = '100%';
      host.style.pointerEvents = 'none';
      host.style.zIndex = '60';
      boardEl.appendChild(host);
    }

    host.style.left = '0';
    host.style.top = '0';
    host.style.width = '100%';
    host.style.height = '100%';

    return host;
  }

  function getNameTagIndex(entry) {
    try {
      const list = Object.keys(window.__scharEntries || {}).map(function(key) {
        return window.__scharEntries[key];
      }).filter(function(item) {
        return item && entry && item.boardId === entry.boardId;
      }).sort(function(a, b) {
        return String(a.uid || '').localeCompare(String(b.uid || ''));
      });
      const idx = list.indexOf(entry);
      return idx >= 0 ? idx : 0;
    } catch (e) {
      return 0;
    }
  }

  function ensureNameTag(entry) {
    if (!entry || !entry.board) return;
    if (entry.nameTag && entry.nameTag.board === entry.board && entry.nameAnchor && entry.nameAnchor.board === entry.board) return;
    try {
      const fn = function(x) { return evaluateAt(entry, x); };
      const safeBBox = function(board) {
        try {
          const bb = board.getBoundingBox();
          if (Array.isArray(bb) && bb.length >= 4) return bb;
        } catch (e) {}
        return [-10, 10, 10, -10];
      };
      const chooseVisibleAnchorX = function(board) {
        const bb = safeBBox(board);
        const xmin = bb[0], ymax = bb[1], xmax = bb[2], ymin = bb[3];
        const xspan = Math.max(1e-9, xmax - xmin);
        const yspan = Math.max(1e-9, ymax - ymin);
        const xStart = xmax - 0.10 * xspan;
        const xEnd = xmin + 0.18 * xspan;
        const yPadTop = 0.14 * yspan;
        const yPadBottom = 0.12 * yspan;
        const steps = 120;

        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const x = xStart - t * (xStart - xEnd);
          let y;
          try { y = fn(x); } catch (e) { y = NaN; }
          if (!Number.isFinite(y)) continue;
          if (y <= ymax - yPadTop && y >= ymin + yPadBottom) return x;
        }
        return xmin + 0.60 * xspan;
      };

      entry.nameAnchor = entry.board.create('point', [
        function() { return chooseVisibleAnchorX(entry.board); },
        function() {
          const x = chooseVisibleAnchorX(entry.board);
          let y;
          try { y = fn(x); } catch (e) { y = NaN; }
          if (!Number.isFinite(y)) {
            const bb = safeBBox(entry.board);
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

      entry.nameTag = entry.board.create('text', [
        function() { return entry.nameAnchor.X() + 0.18; },
        function() { return entry.nameAnchor.Y() + 0.18; },
        function() {
          const raw = entry && entry.cfg && entry.cfg.name ? String(entry.cfg.name) : 'f';
          const n = raw.trim().replace(/\(.*$/, '').replace(/[^A-Za-z]/g, '') || 'f';
          return '\\(' + n + '\\)';
        }
      ], {
        fixed: true,
        highlight: false,
        parse: false,
        useMathJax: true,
        display: 'html',
        fontSize: 24,
        strokeColor: entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff',
        fillColor: entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff',
        anchorX: 'left',
        anchorY: 'top'
      });
    } catch (e) {}
  }

  function getScharStateStore() {
    window.__liaScharStateStore = window.__liaScharStateStore || {};
    return window.__liaScharStateStore;
  }

  function getScharStateKey(uid, boardId) {
    return String(uid || '') + '::' + String(boardId || '');
  }

  function restoreScharEntryState(entry) {
    if (!entry) return;
    const key = getScharStateKey(entry.uid, entry.boardId);
    const raw = getScharStateStore()[key];
    if (!raw || typeof raw !== 'object') return;

    const readNum = function(v, fallback) {
      const n = Number(v);
      return Number.isFinite(n) ? n : fallback;
    };

    entry.a = Math.max(-10, Math.min(10, readNum(raw.a, entry.a)));
    entry.b = Math.max(-10, Math.min(10, readNum(raw.b, entry.b)));
    entry.c = Math.max(-10, Math.min(10, readNum(raw.c, entry.c)));
    entry.d = Math.max(-10, Math.min(10, readNum(raw.d, entry.d)));
    entry.f = Math.max(-10, Math.min(10, readNum(raw.f, entry.f)));
    entry.n = readNum(raw.n, entry.n);
    entry.termVisible = !!raw.termVisible;
    entry.panelMinimized = !!raw.panelMinimized;

    const scale = readNum(raw.panelScale, entry.panelScale);
    entry.panelScale = Math.max(0.35, Math.min(1.2, scale));
  }

  function persistScharEntryState(entry) {
    if (!entry) return;
    const key = getScharStateKey(entry.uid, entry.boardId);
    getScharStateStore()[key] = {
      a: Number(entry.a),
      b: Number(entry.b),
      c: Number(entry.c),
      d: Number(entry.d),
      f: Number(entry.f),
      n: Number(entry.n),
      termVisible: !!entry.termVisible,
      panelMinimized: !!entry.panelMinimized,
      panelScale: Number(entry.panelScale || 0.6)
    };
  }

  function removeExisting(uid) {
    const key = 'schar-' + uid;
    const entry = window.__scharEntries[key];
    if (!entry) return;
    const boardRef = entry.board;
    const boardIdRef = entry.boardId;

    try {
      if (entry.graph && entry.board) entry.board.removeObject(entry.graph);
    } catch (e) {}

    try {
      if (entry.nameTag && entry.board) entry.board.removeObject(entry.nameTag);
    } catch (e) {}

    try {
      if (entry.nameAnchor && entry.board) entry.board.removeObject(entry.nameAnchor);
    } catch (e) {}

    try {
      if (entry.panel && entry.panel.parentNode) entry.panel.parentNode.removeChild(entry.panel);
    } catch (e) {}

    try {
      if (typeof entry.stopDrag === 'function') entry.stopDrag();
    } catch (e) {}

    try {
      persistScharEntryState(entry);
    } catch (e) {}

    delete window.__scharEntries[key];
    relayoutPanelsForBoard(boardIdRef, boardRef);
  }

  function hasLiveGraph(entry, board) {
    return !!(
      entry &&
      entry.graph &&
      entry.graph.board &&
      board &&
      entry.graph.board === board
    );
  }

  function hasLivePanel(entry, board) {
    const host = getPanelHost(entry);
    return !!(
      entry &&
      entry.panel &&
      entry.panel.parentNode &&
      board &&
      host &&
      entry.panel.parentNode === host
    );
  }

  function shouldShowBSlider(entry) {
    if (!entry) return false;
    const expr = String(entry.normalizedExpr || '').trim();
    if (!expr) return false;

    // Exponential families with parameter b in the exponent always expose b.
    if (isExponentialBFamilyExpr(expr, entry)) return true;

    const lower = expr.toLowerCase();
    const idxs = [];
    lower.replace(/\bb\b/g, function(match, offset) {
      idxs.push(offset);
      return match;
    });
    if (!idxs.length) return false;

    const variable = String(entry && entry.cfg && entry.cfg.variableName ? entry.cfg.variableName : 'x').trim() || 'x';
    const vEsc = escapeRegExp(variable);
    const shiftedGroup = new RegExp('\\(\\s*(?:' + vEsc + '\\s*[+\\-]\\s*b|b\\s*[+\\-]\\s*' + vEsc + ')\\s*\\)', 'i');
    if (shiftedGroup.test(expr)) return true;

    const prevNonSpace = function(i) {
      for (let p = i - 1; p >= 0; p--) {
        const ch = lower[p];
        if (!/\s/.test(ch)) return ch;
      }
      return '';
    };

    const nextNonSpace = function(i) {
      for (let p = i + 1; p < lower.length; p++) {
        const ch = lower[p];
        if (!/\s/.test(ch)) return ch;
      }
      return '';
    };

    let hasStrongUse = false;
    let hasOnlyAdditiveUse = true;

    idxs.forEach(function(i) {
      const prev = prevNonSpace(i);
      const next = nextNonSpace(i + 0);

      const strong = prev === '*' || prev === '/' || prev === '^' || prev === ',' || next === '*' || next === '/' || next === '^' || next === ',';
      const additive = (prev === '' || prev === '+' || prev === '-' || prev === '(') && (next === '' || next === '+' || next === '-' || next === ')');

      if (strong) hasStrongUse = true;
      if (!additive) hasOnlyAdditiveUse = false;
    });

    if (hasStrongUse) return true;
    if (hasOnlyAdditiveUse) return false;
    return true;
  }

  function getExponentContent(expr) {
    const src = String(expr || '').trim();
    const marker = /\be\s*\*\*\s*\(/i;
    const match = marker.exec(src);
    if (!match) return '';

    const start = match.index + match[0].length;
    let depth = 1;
    let i = start;
    for (; i < src.length; i++) {
      const ch = src[i];
      if (ch === '(') depth += 1;
      else if (ch === ')') {
        depth -= 1;
        if (depth === 0) break;
      }
    }
    if (depth !== 0) return '';
    return src.slice(start, i).trim();
  }

  function isExponentialBFamilyExpr(expr, entry) {
    const src = String(expr || '').trim();
    if (!src) return false;

    const variable = String(entry && entry.cfg && entry.cfg.variableName ? entry.cfg.variableName : 'x').trim() || 'x';
    const vEsc = escapeRegExp(variable);
    if (!new RegExp('\\be\\s*\\*\\*\\s*\\(', 'i').test(src)) return false;

    const exponent = getExponentContent(src);
    if (!exponent) return false;

    return new RegExp('(^|[^A-Za-z0-9_])b([^A-Za-z0-9_]|$)', 'i').test(exponent) &&
      new RegExp(vEsc, 'i').test(exponent);
  }

  function getExponentialDragMode(entry) {
    const expr = String(entry && entry.normalizedExpr || '').trim();
    if (!isExponentialBFamilyExpr(expr, entry)) {
      return {
        isExpB: false,
        xShiftByC: false,
        xShiftByScaledC: false
      };
    }

    const variable = String(entry && entry.cfg && entry.cfg.variableName ? entry.cfg.variableName : 'x').trim() || 'x';
    const vEsc = escapeRegExp(variable);
    const exponent = getExponentContent(expr);

    const groupedPattern = new RegExp('^\\s*b\\s*\\*\\s*\\(\\s*(?:' + vEsc + '\\s*[+\\-]\\s*c|c\\s*[+\\-]\\s*' + vEsc + ')\\s*\\)\\s*$', 'i');
    const linearPattern = new RegExp('^\\s*(?:b\\s*\\*\\s*' + vEsc + '\\s*[+\\-]\\s*c|c\\s*[+\\-]\\s*b\\s*\\*\\s*' + vEsc + ')\\s*$', 'i');

    return {
      isExpB: true,
      xShiftByC: groupedPattern.test(exponent),
      xShiftByScaledC: linearPattern.test(exponent)
    };
  }

  function shouldDragByXShift(entry) {
    if (!entry) return false;
    const expr = String(entry.normalizedExpr || '').trim();
    if (!expr) return false;

    if (/\bb\s*(?:\*|\/|\^)/i.test(expr) || /(?:\*|\/|\^)\s*b\b/i.test(expr)) {
      return false;
    }

    const variable = String(entry && entry.cfg && entry.cfg.variableName ? entry.cfg.variableName : 'x').trim() || 'x';
    const vEsc = escapeRegExp(variable);
    const shiftedGroup = new RegExp('\\(\\s*(?:' + vEsc + '\\s*[+\\-]\\s*b|b\\s*[+\\-]\\s*' + vEsc + ')\\s*\\)', 'i');

    return shiftedGroup.test(expr);
  }

  function shouldDragByExpScale(entry) {
    if (!entry) return false;
    const expr = String(entry.normalizedExpr || '').trim();
    if (!expr) return false;

    const variable = String(entry && entry.cfg && entry.cfg.variableName ? entry.cfg.variableName : 'x').trim() || 'x';
    const vEsc = escapeRegExp(variable);

    const hasExpBx = new RegExp('\\be\\s*\\*\\*\\s*\\(\\s*b\\s*\\*\\s*' + vEsc + '\\s*\\)', 'i').test(expr);
    if (!hasExpBx) return false;
    if (!/\ba\b/i.test(expr)) return false;

    return !shouldDragByXShift(entry) && !shouldDragByCShift(entry);
  }

  function shouldDragByCShift(entry) {
    if (!entry) return false;
    const expr = String(entry.normalizedExpr || '').trim();
    if (!expr) return false;

    const variable = String(entry && entry.cfg && entry.cfg.variableName ? entry.cfg.variableName : 'x').trim() || 'x';
    const vEsc = escapeRegExp(variable);
    const linearBxPlusC = new RegExp('\\be\\s*\\*\\*\\s*\\(\\s*(?:b\\s*\\*\\s*' + vEsc + '\\s*[+\\-]\\s*c|c\\s*[+\\-]\\s*b\\s*\\*\\s*' + vEsc + ')\\s*\\)', 'i');
    const groupedBxPlusC = new RegExp('\\be\\s*\\*\\*\\s*\\(\\s*b\\s*\\*\\s*\\(\\s*' + vEsc + '\\s*[+\\-]\\s*c\\s*\\)\\s*\\)', 'i');
    const groupedCxPlusB = new RegExp('\\be\\s*\\*\\*\\s*\\(\\s*b\\s*\\*\\s*\\(\\s*c\\s*[+\\-]\\s*' + vEsc + '\\s*\\)\\s*\\)', 'i');
    const groupedXPlusC = new RegExp('\\(\\s*(?:' + vEsc + '\\s*[+\\-]\\s*c|c\\s*[+\\-]\\s*' + vEsc + ')\\s*\\)', 'i');

    return linearBxPlusC.test(expr) || groupedBxPlusC.test(expr) || groupedCxPlusB.test(expr) || groupedXPlusC.test(expr);
  }

  function hasStandaloneParamTerm(expr, param) {
    const p = escapeRegExp(String(param || '').trim());
    if (!p) return false;
    return new RegExp('(^|[+\\-])\\s*' + p + '(?!\\s*\\*)(?=\\s*(?:$|[+\\-]))', 'i').test(String(expr || ''));
  }

  // Detect standard polynomial families where horizontal drag should translate
  // the whole graph by shifting coefficients analytically.
  // Supported forms:
  // cubic:   a*x^3 + b*x^2 + c*x + d
  // quartic: a*x^4 + b*x^3 + c*x^2 + d*x + f
  function isStandardPolyDragFamily(normalizedExpr, cfg) {
    if (!normalizedExpr) return false;
    const v = String(cfg && cfg.variableName ? cfg.variableName : 'x').trim() || 'x';
    const vEsc = escapeRegExp(v);
    const hasA4 = new RegExp('\\ba\\s*\\*\\s*' + vEsc + '\\s*\\*\\*\\s*4\\b', 'i').test(normalizedExpr);
    const hasB3 = new RegExp('\\bb\\s*\\*\\s*' + vEsc + '\\s*\\*\\*\\s*3\\b', 'i').test(normalizedExpr);
    const hasC2 = new RegExp('\\bc\\s*\\*\\s*' + vEsc + '\\s*\\*\\*\\s*2\\b', 'i').test(normalizedExpr);
    const hasD1 = new RegExp('\\bd\\s*\\*\\s*' + vEsc + '(?!\\s*\\*\\*)', 'i').test(normalizedExpr);
    const hasFConst = hasStandaloneParamTerm(normalizedExpr, 'f');

    const hasA3 = new RegExp('\\ba\\s*\\*\\s*' + vEsc + '\\s*\\*\\*\\s*3\\b', 'i').test(normalizedExpr);
    const hasB2 = new RegExp('\\bb\\s*\\*\\s*' + vEsc + '\\s*\\*\\*\\s*2\\b', 'i').test(normalizedExpr);
    const hasC1 = new RegExp('\\bc\\s*\\*\\s*' + vEsc + '(?!\\s*\\*\\*)', 'i').test(normalizedExpr);
    const hasDConst = hasStandaloneParamTerm(normalizedExpr, 'd');

    const isQuartic = hasA4 && hasB3 && hasC2 && hasD1 && hasFConst;
    const isCubic = hasA3 && hasB2 && hasC1 && hasDConst;
    if (!isQuartic && !isCubic) return false;
    // Must not already have a proper x-shift mechanism
    const tempEntry = { normalizedExpr: normalizedExpr, cfg: cfg };
    if (shouldDragByXShift(tempEntry)) return false;
    if (shouldDragByCShift(tempEntry)) return false;
    return true;
  }

  function powerParensToBraces(expr) {
    const src = String(expr || '');
    let out = '';
    let i = 0;

    while (i < src.length) {
      if (src[i] === '^' && src[i + 1] === '(') {
        let j = i + 2;
        let depth = 1;
        while (j < src.length && depth > 0) {
          const ch = src[j];
          if (ch === '(') depth += 1;
          else if (ch === ')') depth -= 1;
          j += 1;
        }
        if (depth === 0) {
          const content = src.slice(i + 2, j - 1);
          out += '^{' + content + '}';
          i = j;
          continue;
        }
      }
      out += src[i];
      i += 1;
    }

    return out;
  }

  function toTexExpr(expr) {
    const convertSqrtCalls = function(input) {
      const src = String(input || '');
      let outSqrt = '';
      let i = 0;

      while (i < src.length) {
        if (src.slice(i, i + 4).toLowerCase() === 'sqrt') {
          let j = i + 4;
          while (j < src.length && /\s/.test(src[j])) j += 1;
          if (src[j] === '(') {
            let k = j + 1;
            let depth = 1;
            while (k < src.length && depth > 0) {
              if (src[k] === '(') depth += 1;
              else if (src[k] === ')') depth -= 1;
              k += 1;
            }
            if (depth === 0) {
              const inner = src.slice(j + 1, k - 1);
              outSqrt += '\\sqrt{' + convertSqrtCalls(inner) + '}';
              i = k;
              continue;
            }
          }
        }
        outSqrt += src[i];
        i += 1;
      }

      return outSqrt;
    };

    const splitTopLevelAdditive = function(input) {
      const src = String(input || '');
      const parts = [];
      let cur = '';
      let depth = 0;

      const prevSignificantChar = function(text, index) {
        for (let i = index - 1; i >= 0; i -= 1) {
          const ch = text[i];
          if (!/\s/.test(ch)) return ch;
        }
        return '';
      };

      for (let i = 0; i < src.length; i += 1) {
        const ch = src[i];

        if (ch === '(' || ch === '[' || ch === '{') {
          depth += 1;
          cur += ch;
          continue;
        }

        if (ch === ')' || ch === ']' || ch === '}') {
          depth = Math.max(0, depth - 1);
          cur += ch;
          continue;
        }

        if (depth === 0 && (ch === '+' || ch === '-')) {
          const prev = prevSignificantChar(src, i);
          if (prev && !/[+\-*/^(,=]/.test(prev)) {
            if (cur) parts.push(cur);
            cur = ch;
            continue;
          }
        }

        cur += ch;
      }

      if (cur) parts.push(cur);
      return parts;
    };

    const stripOuterParens = function(input) {
      let s = String(input || '').trim();
      while (s.startsWith('(') && s.endsWith(')')) {
        let depth = 0;
        let balanced = true;
        for (let i = 0; i < s.length; i += 1) {
          const ch = s[i];
          if (ch === '(') depth += 1;
          else if (ch === ')') depth -= 1;
          if (depth === 0 && i < s.length - 1) {
            balanced = false;
            break;
          }
          if (depth < 0) {
            balanced = false;
            break;
          }
        }
        if (!balanced || depth !== 0) break;
        s = s.slice(1, -1).trim();
      }
      return s;
    };

    const isZeroNumeric = function(input) {
      const s = stripOuterParens(String(input || '').trim());
      return /^[-+]?0(?:[.,]0+)?$/.test(s);
    };

    const isZeroLikeTerm = function(input) {
      const core = stripOuterParens(String(input || '').trim());
      if (!core) return true;
      if (isZeroNumeric(core)) return true;

      const factors = splitTopLevel(core, '*');
      if (factors.length <= 1) return false;
      for (let i = 0; i < factors.length; i += 1) {
        if (isZeroNumeric(factors[i])) return true;
      }
      return false;
    };

    const pruneZeroAdditiveTerms = function(input) {
      const parts = splitTopLevelAdditive(String(input || ''));
      const kept = [];

      parts.forEach(function(rawPart) {
        let part = String(rawPart || '').trim();
        if (!part) return;

        let sign = '+';
        if (part[0] === '+' || part[0] === '-') {
          sign = part[0];
          part = part.slice(1).trim();
        }

        if (isZeroLikeTerm(part)) return;
        kept.push({ sign: sign, term: part });
      });

      if (!kept.length) return '0';

      let out = '';
      kept.forEach(function(item, index) {
        if (index === 0) {
          out += (item.sign === '-' ? '-' : '') + item.term;
        } else {
          out += ' ' + item.sign + ' ' + item.term;
        }
      });
      return out;
    };

    const convertTopLevelFractions = function(input) {
      const src = String(input || '');
      const additiveParts = splitTopLevelAdditive(src);
      if (additiveParts.length > 1) {
        return additiveParts.map(function(part) {
          return convertTopLevelFractions(part);
        }).join('');
      }

      let depth = 0;
      for (let i = 0; i < src.length; i += 1) {
        const ch = src[i];

        if (ch === '(' || ch === '[' || ch === '{') {
          depth += 1;
          continue;
        }

        if (ch === ')' || ch === ']' || ch === '}') {
          depth = Math.max(0, depth - 1);
          continue;
        }

        if (ch === '/' && depth === 0) {
          const left = src.slice(0, i).trim();
          const right = src.slice(i + 1).trim();
          if (!left || !right) break;
          return '\\dfrac{' + convertTopLevelFractions(left) + '}{' + convertTopLevelFractions(right) + '}';
        }
      }

      return src;
    };

    let out = String(expr || '').trim();
    out = pruneZeroAdditiveTerms(out);
    out = convertSqrtCalls(out);
    out = powerParensToBraces(out);
    out = out.replace(/\^\(([^()]+)\)/g, '^{$1}');
    out = out.replace(/\^\{\(([^{}]+)\)\}/g, '^{$1}');
    out = out.replace(/\^([A-Za-z0-9.]+)/g, '^{$1}');
    out = convertTopLevelFractions(out);
    out = out.replace(/\*/g, ' \\cdot ');
    // Remove \cdot before ( only when preceded by a letter or closing brace (not digits)
    out = out.replace(/([A-Za-z}])\s*\\cdot\s*\(/g, '$1(');
    // Remove \cdot before e (Euler's number)
    out = out.replace(/([A-Za-z0-9.,{}()\-]+)\s*\\cdot\s*e\b/g, '$1 e');
    // Simplify coefficient 1 before ( (e.g. 1(x+c) -> (x+c))
    out = out.replace(/(^|[^0-9.,])1\s*\\cdot\s*\(/g, '$1(');
    out = out.replace(/(^|[^0-9.,])1\s*\(/g, '$1(');
    out = pruneZeroAdditiveTerms(out);
    out = out.replace(/\s+/g, ' ').trim();
    return out;
  }

  function typesetMathNode(node) {
    if (!node) return Promise.resolve(false);
    try {
      const MJ = window.MathJax || (window.parent && window.parent.MathJax);
      if (!MJ || typeof MJ.typesetPromise !== 'function') return Promise.resolve(false);
      if (typeof MJ.typesetClear === 'function') {
        try { MJ.typesetClear([node]); } catch (e) {}
      }
      return MJ.typesetPromise([node]).then(function() { return true; }).catch(function() { return false; });
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  function ensurePanel(entry) {
    if (!entry || !entry.board || !entry.board.containerObj) return false;

    ensureCss();
    const panelHost = getPanelHost(entry);
    if (!panelHost) return false;

    function createFreshPanel() {
      const panel = document.createElement('div');
      panel.className = 'lia-schar-panel';
      panel.innerHTML = '' +
        '<button class="lia-schar-min-btn" type="button" aria-label="Overlay minimieren">\u00d7</button>' +
        '<div class="lia-schar-mini-wrap"><span class="lia-schar-mini-name"></span><div class="lia-schar-mini-strip"></div></div>' +
        '<div class="lia-schar-head">' +
          '<span class="lia-schar-label">a:</span>' +
          '<input class="lia-schar-slider" type="range" min="-10" max="10" step="0.05" value="1" />' +
        '</div>' +
        '<div class="lia-schar-head lia-schar-head-b">' +
          '<span class="lia-schar-label-b">b:</span>' +
          '<input class="lia-schar-slider-b" type="range" min="-10" max="10" step="0.05" value="0" />' +
        '</div>' +
        '<div class="lia-schar-head lia-schar-head-c">' +
          '<span class="lia-schar-label-c">c:</span>' +
          '<input class="lia-schar-slider-c" type="range" min="-10" max="10" step="0.05" value="0" />' +
        '</div>' +
        '<div class="lia-schar-head lia-schar-head-d">' +
          '<span class="lia-schar-label-d">d:</span>' +
          '<input class="lia-schar-slider-d" type="range" min="-10" max="10" step="0.05" value="0" />' +
        '</div>' +
        '<div class="lia-schar-head lia-schar-head-f">' +
          '<span class="lia-schar-label-f">f:</span>' +
          '<input class="lia-schar-slider-f" type="range" min="-10" max="10" step="0.05" value="0" />' +
        '</div>' +
        '<label class="lia-schar-term-toggle-wrap"><input class="lia-schar-term-toggle" type="checkbox" /> Term anzeigen</label>' +
        '<div class="lia-schar-term"></div>';
      return panel;
    }

    let panel = entry.panel;
    if (!panel || !panel.parentNode || panel.parentNode !== panelHost) {
      if (panel && panel.parentNode && panel.parentNode !== panelHost) {
        try { panel.parentNode.removeChild(panel); } catch (e) {}
        panel = null;
      }
      if (!panel) {
        panel = createFreshPanel();
      }
      panelHost.appendChild(panel);
    }

    entry.panel = panel;
    entry.sliderRowEl = panel.querySelector('.lia-schar-head');
    entry.labelEl = panel.querySelector('.lia-schar-label');
    entry.sliderEl = panel.querySelector('.lia-schar-slider');
    entry.sliderBRowEl = panel.querySelector('.lia-schar-head-b');
    entry.labelBEl = panel.querySelector('.lia-schar-label-b');
    entry.sliderBEl = panel.querySelector('.lia-schar-slider-b');
    entry.sliderCRowEl = panel.querySelector('.lia-schar-head-c');
    entry.labelCEl = panel.querySelector('.lia-schar-label-c');
    entry.sliderCEl = panel.querySelector('.lia-schar-slider-c');
    entry.sliderDRowEl = panel.querySelector('.lia-schar-head-d');
    entry.labelDEl = panel.querySelector('.lia-schar-label-d');
    entry.sliderDEl = panel.querySelector('.lia-schar-slider-d');
    entry.sliderFRowEl = panel.querySelector('.lia-schar-head-f');
    entry.labelFEl = panel.querySelector('.lia-schar-label-f');
    entry.sliderFEl = panel.querySelector('.lia-schar-slider-f');
    entry.termToggleWrapEl = panel.querySelector('.lia-schar-term-toggle-wrap');
    entry.termToggleEl = panel.querySelector('.lia-schar-term-toggle');
    entry.termEl = panel.querySelector('.lia-schar-term');
    entry.minBtnEl = panel.querySelector('.lia-schar-min-btn');
    entry.miniWrapEl = panel.querySelector('.lia-schar-mini-wrap');
    entry.miniNameEl = panel.querySelector('.lia-schar-mini-name');
    entry.miniStripEl = panel.querySelector('.lia-schar-mini-strip');

    // Recover from stale/legacy panel markup that misses required controls.
    if (!entry.sliderEl || !entry.sliderBEl || !entry.sliderCEl || !entry.sliderDEl || !entry.sliderFEl || !entry.termEl) {
      try {
        if (panel.parentNode) panel.parentNode.removeChild(panel);
      } catch (e) {}
      panel = createFreshPanel();
      panelHost.appendChild(panel);

      entry.panel = panel;
      entry.sliderRowEl = panel.querySelector('.lia-schar-head');
      entry.labelEl = panel.querySelector('.lia-schar-label');
      entry.sliderEl = panel.querySelector('.lia-schar-slider');
      entry.sliderBRowEl = panel.querySelector('.lia-schar-head-b');
      entry.labelBEl = panel.querySelector('.lia-schar-label-b');
      entry.sliderBEl = panel.querySelector('.lia-schar-slider-b');
      entry.sliderCRowEl = panel.querySelector('.lia-schar-head-c');
      entry.labelCEl = panel.querySelector('.lia-schar-label-c');
      entry.sliderCEl = panel.querySelector('.lia-schar-slider-c');
      entry.sliderDRowEl = panel.querySelector('.lia-schar-head-d');
      entry.labelDEl = panel.querySelector('.lia-schar-label-d');
      entry.sliderDEl = panel.querySelector('.lia-schar-slider-d');
      entry.sliderFRowEl = panel.querySelector('.lia-schar-head-f');
      entry.labelFEl = panel.querySelector('.lia-schar-label-f');
      entry.sliderFEl = panel.querySelector('.lia-schar-slider-f');
      entry.termToggleWrapEl = panel.querySelector('.lia-schar-term-toggle-wrap');
      entry.termToggleEl = panel.querySelector('.lia-schar-term-toggle');
      entry.termEl = panel.querySelector('.lia-schar-term');
      entry.minBtnEl = panel.querySelector('.lia-schar-min-btn');
      entry.miniWrapEl = panel.querySelector('.lia-schar-mini-wrap');
      entry.miniNameEl = panel.querySelector('.lia-schar-mini-name');
      entry.miniStripEl = panel.querySelector('.lia-schar-mini-strip');
    }

    if (!entry.termToggleWrapEl && entry.termEl) {
      const wrap = document.createElement('label');
      wrap.className = 'lia-schar-term-toggle-wrap';
      wrap.innerHTML = '<input class="lia-schar-term-toggle" type="checkbox" /> Term anzeigen';
      try { panel.insertBefore(wrap, entry.termEl); } catch (e) {}
      entry.termToggleWrapEl = panel.querySelector('.lia-schar-term-toggle-wrap');
      entry.termToggleEl = panel.querySelector('.lia-schar-term-toggle');
    }

    const tone = neutralColor();
    const fill = tone === '#fff' ? 'rgba(0,0,0,.82)' : 'rgba(255,255,255,.97)';
    panel.style.position = 'absolute';
    panel.style.left = '10px';
    panel.style.top = '10px';
    panel.style.minWidth = '190px';
    panel.style.maxWidth = 'none';
    panel.style.padding = '8px 10px';
    panel.style.borderRadius = '10px';
    panel.style.color = tone;
    panel.style.background = fill;
    panel.style.borderStyle = 'solid';
    panel.style.borderWidth = '1px';
    panel.style.borderColor = tone === '#fff' ? 'rgba(255,255,255,.25)' : 'rgba(0,0,0,.16)';
    panel.style.boxShadow = '0 6px 18px rgba(0,0,0,.18)';
    panel.style.boxSizing = 'border-box';
    panel.style.zIndex = '52';
    panel.style.display = 'block';
    panel.style.pointerEvents = 'auto';
    panel.style.overflow = 'visible';

    if (!panel.__liaEvtStop) {
      panel.__liaEvtStop = true;
      var _panelEvts = ['pointerdown','pointermove','pointerup','mousedown','mousemove','mouseup','touchstart','touchmove','touchend','click'];
      _panelEvts.forEach(function(t) {
        panel.addEventListener(t, function(e) { e.stopPropagation(); }, false);
      });
    }

    if (entry.minBtnEl) {
      const c = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.minBtnEl.style.position = 'absolute';
      entry.minBtnEl.style.top = '5px';
      entry.minBtnEl.style.right = '6px';
      entry.minBtnEl.style.width = '18px';
      entry.minBtnEl.style.height = '18px';
      entry.minBtnEl.style.padding = '0';
      entry.minBtnEl.style.border = 'none';
      entry.minBtnEl.style.background = 'transparent';
      entry.minBtnEl.style.color = c;
      entry.minBtnEl.style.fontSize = '18px';
      entry.minBtnEl.style.fontWeight = '900';
      entry.minBtnEl.style.lineHeight = '18px';
      entry.minBtnEl.style.cursor = 'pointer';
      entry.minBtnEl.style.zIndex = '6';
      entry.minBtnEl.style.pointerEvents = 'auto';
      entry.minBtnEl.textContent = '\u00d7';
      entry.minBtnEl.style.display = entry.panelMinimized ? 'none' : 'block';
      entry.minBtnEl.setAttribute('aria-label', entry.panelMinimized ? 'Overlay wiederherstellen' : 'Overlay minimieren');
    }

    if (entry.miniStripEl) {
      entry.miniStripEl.style.display = entry.panelMinimized ? 'block' : 'none';
      entry.miniStripEl.style.width = '16px';
      entry.miniStripEl.style.height = '4px';
      entry.miniStripEl.style.borderRadius = '99px';
      entry.miniStripEl.style.background = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.miniStripEl.style.margin = '0';
      entry.miniStripEl.style.cursor = 'pointer';
      entry.miniStripEl.style.pointerEvents = 'auto';
    }

    if (entry.miniWrapEl) {
      entry.miniWrapEl.style.display = entry.panelMinimized ? 'inline-flex' : 'none';
      entry.miniWrapEl.style.alignItems = 'center';
      entry.miniWrapEl.style.justifyContent = 'center';
      entry.miniWrapEl.style.gap = '6px';
      entry.miniWrapEl.style.pointerEvents = 'auto';
    }

    if (entry.miniNameEl) {
      const raw = entry && entry.cfg && entry.cfg.name ? String(entry.cfg.name) : 'f';
      const n = raw.trim().replace(/\(.*$/, '').replace(/[^A-Za-z]/g, '') || 'f';
      entry.miniNameEl.textContent = '\\(' + n + '\\)';
      entry.miniNameEl.style.color = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.miniNameEl.style.fontSize = '16px';
      entry.miniNameEl.style.lineHeight = '1';
      entry.miniNameEl.style.whiteSpace = 'nowrap';
      entry.miniNameEl.style.cursor = 'pointer';
      entry.miniNameEl.style.pointerEvents = 'auto';
      typesetMathNode(entry.miniNameEl);
    }

    if (entry.sliderRowEl) {
      entry.sliderRowEl.style.display = 'flex';
      entry.sliderRowEl.style.alignItems = 'center';
      entry.sliderRowEl.style.gap = '8px';
      entry.sliderRowEl.style.visibility = 'visible';
    }

    const sliderParamName = (entry.paramSlots && entry.paramSlots.a) ? entry.paramSlots.a : 'a';
    const sliderBParamName = (entry.paramSlots && entry.paramSlots.b) ? entry.paramSlots.b : 'b';
    const sliderCParamName = (entry.paramSlots && entry.paramSlots.c) ? entry.paramSlots.c : 'c';
    const sliderDParamName = (entry.paramSlots && entry.paramSlots.d) ? entry.paramSlots.d : 'd';
    const sliderFParamName = (entry.paramSlots && entry.paramSlots.f) ? entry.paramSlots.f : 'f';

    const typesetLabel = function(node) {
      if (!node) return;
      typesetMathNode(node);
    };

    if (entry.labelEl) {
      entry.labelEl.textContent = '\\(' + sliderParamName + '\\):';
      entry.labelEl.style.display = 'inline-block';
      entry.labelEl.style.whiteSpace = 'nowrap';
      typesetLabel(entry.labelEl);
    }
    if (entry.labelBEl) {
      entry.labelBEl.textContent = '\\(' + sliderBParamName + '\\):';
      entry.labelBEl.style.display = 'inline-block';
      entry.labelBEl.style.whiteSpace = 'nowrap';
      typesetLabel(entry.labelBEl);
    }
    if (entry.labelCEl) {
      entry.labelCEl.textContent = '\\(' + sliderCParamName + '\\):';
      entry.labelCEl.style.display = 'inline-block';
      entry.labelCEl.style.whiteSpace = 'nowrap';
      typesetLabel(entry.labelCEl);
    }
    if (entry.labelDEl) {
      entry.labelDEl.textContent = '\\(' + sliderDParamName + '\\):';
      entry.labelDEl.style.display = 'inline-block';
      entry.labelDEl.style.whiteSpace = 'nowrap';
      typesetLabel(entry.labelDEl);
    }
    if (entry.labelFEl) {
      entry.labelFEl.textContent = '\\(' + sliderFParamName + '\\):';
      entry.labelFEl.style.display = 'inline-block';
      entry.labelFEl.style.whiteSpace = 'nowrap';
      typesetLabel(entry.labelFEl);
    }
    if (entry.sliderEl) {
      entry.sliderEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.sliderEl.style.display = 'block';
      entry.sliderEl.style.width = '220px';
      entry.sliderEl.style.minWidth = '220px';
      entry.sliderEl.style.maxWidth = '220px';
      entry.sliderEl.style.flex = '0 0 220px';
      entry.sliderEl.style.visibility = 'visible';
      entry.sliderEl.style.opacity = '1';
      entry.sliderEl.style.pointerEvents = 'auto';
      entry.sliderEl.style.appearance = 'auto';
      entry.sliderEl.style.webkitAppearance = 'auto';
    }
    if (entry.sliderBEl) {
      entry.sliderBEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.sliderBEl.style.display = 'block';
      entry.sliderBEl.style.width = '220px';
      entry.sliderBEl.style.minWidth = '220px';
      entry.sliderBEl.style.maxWidth = '220px';
      entry.sliderBEl.style.flex = '0 0 220px';
      entry.sliderBEl.style.visibility = 'visible';
      entry.sliderBEl.style.opacity = '1';
      entry.sliderBEl.style.pointerEvents = 'auto';
      entry.sliderBEl.style.appearance = 'auto';
      entry.sliderBEl.style.webkitAppearance = 'auto';
    }
    if (entry.sliderCEl) {
      entry.sliderCEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.sliderCEl.style.display = 'block';
      entry.sliderCEl.style.width = '220px';
      entry.sliderCEl.style.minWidth = '220px';
      entry.sliderCEl.style.maxWidth = '220px';
      entry.sliderCEl.style.flex = '0 0 220px';
      entry.sliderCEl.style.visibility = 'visible';
      entry.sliderCEl.style.opacity = '1';
      entry.sliderCEl.style.pointerEvents = 'auto';
      entry.sliderCEl.style.appearance = 'auto';
      entry.sliderCEl.style.webkitAppearance = 'auto';
    }
    if (entry.sliderDEl) {
      entry.sliderDEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.sliderDEl.style.display = 'block';
      entry.sliderDEl.style.width = '220px';
      entry.sliderDEl.style.minWidth = '220px';
      entry.sliderDEl.style.maxWidth = '220px';
      entry.sliderDEl.style.flex = '0 0 220px';
      entry.sliderDEl.style.visibility = 'visible';
      entry.sliderDEl.style.opacity = '1';
      entry.sliderDEl.style.pointerEvents = 'auto';
      entry.sliderDEl.style.appearance = 'auto';
      entry.sliderDEl.style.webkitAppearance = 'auto';
    }
    if (entry.sliderFEl) {
      entry.sliderFEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.sliderFEl.style.display = 'block';
      entry.sliderFEl.style.width = '220px';
      entry.sliderFEl.style.minWidth = '220px';
      entry.sliderFEl.style.maxWidth = '220px';
      entry.sliderFEl.style.flex = '0 0 220px';
      entry.sliderFEl.style.visibility = 'visible';
      entry.sliderFEl.style.opacity = '1';
      entry.sliderFEl.style.pointerEvents = 'auto';
      entry.sliderFEl.style.appearance = 'auto';
      entry.sliderFEl.style.webkitAppearance = 'auto';
    }

    function applyFixedSliderRange(sl) {
      if (!sl) return;
      sl.step = '0.05';
      sl.min = '-10';
      sl.max = '10';
    }

    applyFixedSliderRange(entry.sliderEl);
    applyFixedSliderRange(entry.sliderBEl);
    applyFixedSliderRange(entry.sliderCEl);
    applyFixedSliderRange(entry.sliderDEl);
    applyFixedSliderRange(entry.sliderFEl);

    const showBSlider = shouldShowBSlider(entry);
    const showCSlider = /(^|[^A-Za-z0-9_])c([^A-Za-z0-9_]|$)/.test(String(entry.normalizedExpr || ''));
    const showDSlider = /(^|[^A-Za-z0-9_])d([^A-Za-z0-9_]|$)/.test(String(entry.normalizedExpr || ''));
    const showFSlider = /(^|[^A-Za-z0-9_])f([^A-Za-z0-9_]|$)/.test(String(entry.normalizedExpr || ''));
    if (showBSlider && !entry.bAutoInitialized) {
      if (!Number.isFinite(entry.b) || Math.abs(entry.b) < 0.0000001) {
        entry.b = 1;
      }
      entry.bAutoInitialized = true;
    }
    if (entry.sliderBRowEl) {
      entry.sliderBRowEl.style.display = showBSlider ? 'flex' : 'none';
      entry.sliderBRowEl.style.alignItems = 'center';
      entry.sliderBRowEl.style.gap = '8px';
    }
    if (entry.sliderCRowEl) {
      entry.sliderCRowEl.style.display = showCSlider ? 'flex' : 'none';
      entry.sliderCRowEl.style.alignItems = 'center';
      entry.sliderCRowEl.style.gap = '8px';
    }
    if (entry.sliderDRowEl) {
      entry.sliderDRowEl.style.display = showDSlider ? 'flex' : 'none';
      entry.sliderDRowEl.style.alignItems = 'center';
      entry.sliderDRowEl.style.gap = '8px';
    }
    if (entry.sliderFRowEl) {
      entry.sliderFRowEl.style.display = showFSlider ? 'flex' : 'none';
      entry.sliderFRowEl.style.alignItems = 'center';
      entry.sliderFRowEl.style.gap = '8px';
    }

    if (entry.termToggleWrapEl) {
      entry.termToggleWrapEl.style.display = entry.cfg && Number(entry.cfg.showTerm) !== 0 ? 'block' : 'none';
      entry.termToggleWrapEl.style.visibility = 'visible';
      entry.termToggleWrapEl.style.opacity = '1';
      entry.termToggleWrapEl.style.pointerEvents = 'auto';
      entry.termToggleWrapEl.style.marginTop = '6px';
      entry.termToggleWrapEl.style.fontSize = '13px';
      entry.termToggleWrapEl.style.userSelect = 'none';
    }

    function scheduleLightRefresh() {
      if (entry.__sliderRefreshRaf) return;
      entry.__sliderRefreshRaf = requestAnimationFrame(function() {
        entry.__sliderRefreshRaf = 0;
        refreshEntry(entry, true);
      });
    }

    if (entry.sliderEl && !entry.sliderEl.__liaScharBoundV3) {
      entry.sliderEl.__liaScharBoundV3 = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointerup', 'pointercancel', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderEl.addEventListener('input', function() {
        entry.a = Math.max(-10, Math.min(10, Number(entry.sliderEl.value || 0)));
        scheduleLightRefresh();
      });
      entry.sliderEl.addEventListener('change', function() {
        refreshEntry(entry, false);
      });
    }

    if (entry.sliderBEl && !entry.sliderBEl.__liaScharBoundV3) {
      entry.sliderBEl.__liaScharBoundV3 = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointerup', 'pointercancel', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderBEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderBEl.addEventListener('input', function() {
        entry.b = Math.max(-10, Math.min(10, Number(entry.sliderBEl.value || 0)));
        scheduleLightRefresh();
      });
      entry.sliderBEl.addEventListener('change', function() {
        refreshEntry(entry, false);
      });
    }

    if (entry.sliderCEl && !entry.sliderCEl.__liaScharBoundV3) {
      entry.sliderCEl.__liaScharBoundV3 = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointerup', 'pointercancel', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderCEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderCEl.addEventListener('input', function() {
        entry.c = Math.max(-10, Math.min(10, Number(entry.sliderCEl.value || 0)));
        scheduleLightRefresh();
      });
      entry.sliderCEl.addEventListener('change', function() {
        refreshEntry(entry, false);
      });
    }

    if (entry.sliderDEl && !entry.sliderDEl.__liaScharBoundV3) {
      entry.sliderDEl.__liaScharBoundV3 = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointerup', 'pointercancel', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderDEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderDEl.addEventListener('input', function() {
        entry.d = Math.max(-10, Math.min(10, Number(entry.sliderDEl.value || 0)));
        scheduleLightRefresh();
      });
      entry.sliderDEl.addEventListener('change', function() {
        refreshEntry(entry, false);
      });
    }

    if (entry.sliderFEl && !entry.sliderFEl.__liaScharBoundV3) {
      entry.sliderFEl.__liaScharBoundV3 = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointerup', 'pointercancel', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderFEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderFEl.addEventListener('input', function() {
        entry.f = Math.max(-10, Math.min(10, Number(entry.sliderFEl.value || 0)));
        scheduleLightRefresh();
      });
      entry.sliderFEl.addEventListener('change', function() {
        refreshEntry(entry, false);
      });
    }

    if (entry.termToggleEl && !entry.termToggleEl.__liaScharBound) {
      entry.termToggleEl.__liaScharBound = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click'].forEach(function(type) {
        try { entry.termToggleEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      const onTermToggleChanged = function() {
        entry.termVisible = !!entry.termToggleEl.checked;
        refreshEntry(entry);
      };
      entry.termToggleEl.addEventListener('change', onTermToggleChanged);
      entry.termToggleEl.addEventListener('input', onTermToggleChanged);
    }

    if (entry.minBtnEl && !entry.minBtnEl.__liaScharMinBound) {
      entry.minBtnEl.__liaScharMinBound = true;
      const onMinToggle = function(evt) {
        try { evt.preventDefault(); } catch (e) {}
        try { evt.stopPropagation(); } catch (e) {}
        entry.panelMinimized = !entry.panelMinimized;
        refreshEntry(entry);
      };
      ['pointerdown', 'mousedown', 'touchstart', 'click'].forEach(function(type) {
        try { entry.minBtnEl.addEventListener(type, function(evt) { try { evt.stopPropagation(); } catch (e) {} }, true); } catch (e) {}
      });
      entry.minBtnEl.addEventListener('click', onMinToggle, true);
    }

    if (entry.miniStripEl && !entry.miniStripEl.__liaScharMiniBound) {
      entry.miniStripEl.__liaScharMiniBound = true;
      const onMiniRestore = function(evt) {
        try { evt.preventDefault(); } catch (e) {}
        try { evt.stopPropagation(); } catch (e) {}
        entry.panelMinimized = false;
        refreshEntry(entry);
      };
      ['pointerdown', 'mousedown', 'touchstart', 'click'].forEach(function(type) {
        try { entry.miniStripEl.addEventListener(type, function(evt) { try { evt.stopPropagation(); } catch (e) {} }, true); } catch (e) {}
      });
      entry.miniStripEl.addEventListener('click', onMiniRestore, true);
    }

    if (entry.miniNameEl && !entry.miniNameEl.__liaScharMiniNameBound) {
      entry.miniNameEl.__liaScharMiniNameBound = true;
      const onMiniRestore = function(evt) {
        try { evt.preventDefault(); } catch (e) {}
        try { evt.stopPropagation(); } catch (e) {}
        entry.panelMinimized = false;
        refreshEntry(entry);
      };
      ['pointerdown', 'mousedown', 'touchstart', 'click'].forEach(function(type) {
        try { entry.miniNameEl.addEventListener(type, function(evt) { try { evt.stopPropagation(); } catch (e) {} }, true); } catch (e) {}
      });
      entry.miniNameEl.addEventListener('click', onMiniRestore, true);
    }

    if (entry.panel && !entry.panel.__liaScharMiniPanelRestoreBound) {
      entry.panel.__liaScharMiniPanelRestoreBound = true;
      const onPanelRestore = function(evt) {
        if (!entry.panelMinimized) return;
        try { evt.preventDefault(); } catch (e) {}
        try { evt.stopPropagation(); } catch (e) {}
        entry.panelMinimized = false;
        refreshEntry(entry);
      };
      try { entry.panel.addEventListener('pointerdown', onPanelRestore, true); } catch (e) {}
      try { entry.panel.addEventListener('click', onPanelRestore, true); } catch (e) {}
    }

    bindPanelResizeHandle(entry);
    applyPanelScale(entry);

    relayoutPanelsForBoard(entry.boardId, entry.board);

    return !!entry.sliderEl && !!entry.termEl;
  }

  function refreshEntry(entry, lightweight) {
    if (!entry) return false;
    if (!ensurePanel(entry)) return false;

    if (lightweight) {
      try {
        const boardId = String(entry && entry.boardId || '').trim();
        if (boardId) {
          window.__liaActiveScharByBoard = window.__liaActiveScharByBoard || {};
          window.__liaActiveScharByBoard[boardId] = String(entry.uid || '');
          const now = Date.now();
          entry.__lastSelectedAt = now;
          entry.__lastChangedAt = now;
        }
      } catch (e) {}
    }

    const allowTerm = !!(entry.cfg && Number(entry.cfg.showTerm) !== 0);

    const minimized = !!entry.panelMinimized;

    if (entry.miniStripEl) {
      entry.miniStripEl.style.display = minimized ? 'block' : 'none';
      entry.miniStripEl.style.background = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
    }
    if (entry.miniWrapEl) {
      entry.miniWrapEl.style.display = minimized ? 'inline-flex' : 'none';
    }
    if (entry.miniNameEl) {
      const raw = entry && entry.cfg && entry.cfg.name ? String(entry.cfg.name) : 'f';
      const n = raw.trim().replace(/\(.*$/, '').replace(/[^A-Za-z]/g, '') || 'f';
      entry.miniNameEl.textContent = '\\(' + n + '\\)';
      entry.miniNameEl.style.color = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      if (minimized) typesetMathNode(entry.miniNameEl);
    }
    if (entry.minBtnEl) {
      entry.minBtnEl.textContent = '\u00d7';
      entry.minBtnEl.style.color = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.minBtnEl.style.display = minimized ? 'none' : 'block';
      entry.minBtnEl.setAttribute('aria-label', minimized ? 'Overlay wiederherstellen' : 'Overlay minimieren');
    }

    if (entry.sliderRowEl) entry.sliderRowEl.style.display = minimized ? 'none' : 'flex';
    if (entry.sliderBRowEl) entry.sliderBRowEl.style.display = minimized ? 'none' : entry.sliderBRowEl.style.display;
    if (entry.sliderCRowEl) entry.sliderCRowEl.style.display = minimized ? 'none' : entry.sliderCRowEl.style.display;
    if (entry.sliderDRowEl) entry.sliderDRowEl.style.display = minimized ? 'none' : entry.sliderDRowEl.style.display;
    if (entry.sliderFRowEl) entry.sliderFRowEl.style.display = minimized ? 'none' : entry.sliderFRowEl.style.display;
    if (entry.termToggleWrapEl) entry.termToggleWrapEl.style.display = minimized ? 'none' : (allowTerm ? 'block' : 'none');
    if (entry.termEl) entry.termEl.style.display = minimized ? 'none' : entry.termEl.style.display;
    const resizeHandle = entry.panel ? entry.panel.querySelector('.lia-schar-resize-handle') : null;
    if (resizeHandle) resizeHandle.style.display = minimized ? 'none' : 'block';

    if (entry.panel) {
      if (minimized) {
        entry.panel.style.padding = '4px';
        entry.panel.style.display = 'inline-flex';
        entry.panel.style.alignItems = 'center';
        entry.panel.style.justifyContent = 'center';
        entry.panel.style.width = 'auto';
        entry.panel.style.minWidth = '0';
        entry.panel.style.maxWidth = 'none';
        entry.panel.style.height = 'auto';
        entry.panel.style.minHeight = '0';
      } else {
        entry.panel.style.padding = '14px 10px 8px 10px';
        entry.panel.style.display = 'block';
        entry.panel.style.alignItems = '';
        entry.panel.style.justifyContent = '';
        entry.panel.style.maxWidth = 'none';
        if (!entry.termVisible) {
          entry.panel.style.height = '';
          entry.panel.style.minHeight = '';
        }
      }
    }

    if (minimized) {
      try {
        if (entry.board && typeof entry.board.update === 'function') entry.board.update();
      } catch (e) {}
      relayoutPanelsForBoard(entry.boardId, entry.board);
      return true;
    }

    if (entry.sliderEl) entry.sliderEl.value = String(entry.a);
    if (entry.sliderBEl) entry.sliderBEl.value = String(entry.b == null ? 0 : entry.b);
    if (entry.sliderCEl) entry.sliderCEl.value = String(entry.c == null ? 0 : entry.c);
    if (entry.sliderDEl) entry.sliderDEl.value = String(entry.d == null ? 0 : entry.d);
    if (entry.sliderFEl) entry.sliderFEl.value = String(entry.f == null ? 0 : entry.f);

    const hasToggle = !!entry.termToggleEl;
    if (allowTerm && !hasToggle) entry.termVisible = true;
    if (!allowTerm) entry.termVisible = false;

    if (entry.termToggleWrapEl) {
      entry.termToggleWrapEl.style.display = allowTerm ? 'block' : 'none';
      entry.termToggleWrapEl.style.visibility = 'visible';
      entry.termToggleWrapEl.style.opacity = '1';
      entry.termToggleWrapEl.style.pointerEvents = 'auto';
    }
    if (entry.termToggleEl) {
      entry.termToggleEl.checked = allowTerm ? !!entry.termVisible : false;
    }

    if (entry.termEl) {
      const fitPanelStable = function() {
        try {
          if (!entry.panel) return;
          const panel = entry.panel;
          panel.style.maxWidth = 'none';
          panel.style.width = 'auto';
          panel.style.minWidth = '294px';
          panel.style.height = '';
          panel.style.minHeight = '';
        } catch (e) {}
      };

      const shrinkRenderedMath = function() {
        try {
          const mjx = entry.termEl.querySelectorAll('mjx-container');
          mjx.forEach(function(node) {
            node.style.fontSize = '0.68em';
            node.style.whiteSpace = 'nowrap';
            node.style.display = 'inline-block';
          });
        } catch (e) {}
      };

      entry.termEl.style.fontSize = '32px';
      entry.termEl.style.lineHeight = '1.2';
      entry.termEl.style.whiteSpace = 'nowrap';
      entry.termEl.style.wordBreak = 'normal';
      entry.termEl.style.overflowWrap = 'normal';
      entry.termEl.style.overflowX = 'auto';
      entry.termEl.style.overflowY = 'hidden';
      const shouldShowTerm = allowTerm && (hasToggle ? !!entry.termVisible : true);
      entry.termEl.style.display = shouldShowTerm ? 'block' : 'none';
      if (shouldShowTerm) {
        if (lightweight) {
          const dragTermRaw = substitutedWithNShift(entry);
          const dragTermText = toTexExpr(dragTermRaw);
          entry._currentTermRhs = String(dragTermRaw || '').trim();
          const expandedPoly = expandedPolyTerm(entry);
          const newLatex = '\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + dragTermText + '\\)' +
            (expandedPoly !== null ? '<br>\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + expandedPoly + '\\)' : '');
          const now = Date.now();
            entry._lastDragPanelResize = now;
          if (!entry._lastDragTypeset || now - entry._lastDragTypeset > 90) {
            entry._lastDragTypeset = now;
            entry.termEl.innerHTML = newLatex;
            typesetMathNode(entry.termEl).then(function() {
              shrinkRenderedMath();
            }).catch(function() {
              shrinkRenderedMath();
            });
          }
          try {
            if (entry.board && typeof entry.board.update === 'function') entry.board.update();
          } catch (e) {}
          // Avoid vertical panel jitter while dragging: keep stack layout stable
          // and only relayout on non-lightweight refresh.
          return true;
        }

        const termRaw = substitutedWithNShift(entry);
        const termText = toTexExpr(termRaw);
        entry._currentTermRhs = String(termRaw || '').trim();
        const expandedPolyLine = expandedPolyTerm(entry);
        entry._currentTermText = '\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + termText + '\\)' +
          (expandedPolyLine !== null ? '<br>\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + expandedPolyLine + '\\)' : '');
        entry.termEl.innerHTML = '\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + termText + '\\)' +
          (expandedPolyLine !== null ? '<br>\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + expandedPolyLine + '\\)' : '');
        typesetMathNode(entry.termEl).then(function() {
          shrinkRenderedMath();
          fitPanelStable();
        }).catch(function() {
          shrinkRenderedMath();
          fitPanelStable();
        });
      } else {
        entry.termEl.textContent = '';
        entry._currentTermRhs = '';
        if (entry.panel) {
          entry.panel.style.width = '';
          entry.panel.style.minWidth = '190px';
          entry.panel.style.maxWidth = 'none';
          entry.panel.style.height = '';
          entry.panel.style.minHeight = '';
        }
      }
    }

    try {
      if (entry.graph) {
        entry.graph.visProp.strokeColor = entry.cfg.color;
        entry.graph.visProp.highlightStrokeColor = entry.cfg.color;
        if (entry.graph.label && entry.graph.label.visProp) {
          entry.graph.label.visProp.strokeColor = entry.cfg.color;
          entry.graph.label.visProp.color = entry.cfg.color;
        }
      }
    } catch (e) {}

    try {
      if (entry.nameTag && entry.nameTag.visProp) {
        entry.nameTag.visProp.strokeColor = entry.cfg.color;
        entry.nameTag.needsUpdate = true;
      }
    } catch (e) {}

    try {
      if (entry.board && typeof entry.board.update === 'function') entry.board.update();
    } catch (e) {}

    persistScharEntryState(entry);

    if (!lightweight) {
      relayoutPanelsForBoard(entry.boardId, entry.board);
    }

    return true;
  }

  function stopDrag(entry) {
    if (!entry || !entry.dragState) return;
    const drag = entry.dragState;
    try { window.removeEventListener('pointermove', drag.onMove, true); } catch (e) {}
    try { window.removeEventListener('pointerup', drag.onUp, true); } catch (e) {}
    try { window.removeEventListener('pointercancel', drag.onUp, true); } catch (e) {}
    entry._freezePanelDuringDrag = false;
    entry._dragLockedWidth = 0;
    entry._dragLockedHeight = 0;
    entry.dragState = null;
  }

  function bindGraphDrag(entry) {
    if (!entry || !entry.graph) return;
    if (entry.graph.__liaScharDragBoundV3) return;
    entry.graph.__liaScharDragBoundV3 = true;

    const targets = [entry.graph.rendNode, entry.graph.rendNodeStroke].filter(Boolean);

    const onPointerDown = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      try {
        const boardId = String(entry && entry.boardId || '').trim();
        if (boardId) {
          window.__liaActiveScharByBoard = window.__liaActiveScharByBoard || {};
          window.__liaActiveScharByBoard[boardId] = String(entry.uid || '');
          entry.__lastSelectedAt = Date.now();
        }
      } catch (e) {}

      stopDrag(entry);
      entry._freezePanelDuringDrag = true;
      if (entry.panel) {
        entry._dragLockedWidth = Math.ceil(Number(entry.panel.offsetWidth || 0));
        entry._dragLockedHeight = Math.ceil(Number(entry.panel.offsetHeight || 0));
      }

      const pointerId = evt.pointerId;
      const start = eventToUser(entry.board, evt);
      const startA = entry && entry.a == null ? 1 : entry.a;
      const startB = entry && entry.b == null ? 0 : entry.b;
      const startC = entry && entry.c == null ? 0 : entry.c;
      const startD = entry && entry.d == null ? 0 : entry.d;
      const startF = entry && entry.f == null ? 0 : entry.f;
      const startN = entry && entry.n == null ? 0 : (entry.n || 0);
      const startGraphY = evaluateAt(entry, start.x, startB, startC, startD, startF);
      const offsetY = Number.isFinite(startGraphY) ? (start.y - startGraphY) : 0;

      const onMove = function(moveEvt) {
        if (moveEvt.pointerId !== pointerId) return;
        moveEvt.preventDefault();
        moveEvt.stopPropagation();

        const now = eventToUser(entry.board, moveEvt);
        const dx = now.x - start.x;
        const dy = now.y - start.y;

        const expMode = entry && entry.expDragMode
          ? entry.expDragMode
          : { isExpB: false, xShiftByC: false, xShiftByScaledC: false };

        if (expMode.isExpB) {
          if (entry && entry.dragUsesD) {
            // +d means pure vertical translation in user coordinates.
            entry.d = startD + dy;
          }

          if (expMode.xShiftByC) {
            // e^(b*(x+c)) -> c encodes direct horizontal shift.
            entry.c = startC - dx;
          } else if (expMode.xShiftByScaledC) {
            // e^(b*x+c) -> c shift scales with b.
            const bUsed = Number.isFinite(startB) ? startB : 0;
            entry.c = startC - (bUsed * dx);
          } else if (entry && entry.dragSupportsX) {
            entry.b = startB - dx;
          }

          refreshEntry(entry, true);
          return;
        }

        if (entry && entry.dragUsesD) {
          // n-shift for standard polynomial families: evaluateAt uses fn(x+n, a, b, c, d)
          // so horizontal drag only changes n (= x-offset), vertical drag changes
          // the additive constant term (d for cubic, f for quartic).
          // Sliders for a,b,c,d continue to work normally and independently.
          if (entry.dragTranslatesPolyX) {
            const yShiftParam = getPolyVerticalParam(entry);
            entry.n = startN - dx;
            if (yShiftParam === 'f') {
              entry.f = startF + dy;
            } else {
              entry.d = startD + dy;
            }
            refreshEntry(entry, true);
            return;
          }

          // For +d families (e.g. A e^(b(x+c))+d), prioritize vertical movement.
          if (entry.dragShiftsCWithX) {
            // c-shift families (sin, sqrt, ...): c handles x-translation, d handles y-translation.
            // Using solveDForPointer here causes wackle: it evaluates the oscillating function at
            // now.x with the *stale* c (not yet updated), so d overshoots and oscillates each frame.
            // Simple linear tracking is both correct and stable.
            entry.c = startC - dx;
            entry.d = startD + dy;
          } else {
            const desiredY = now.y - offsetY;
            const solvedD = solveDForPointer(entry, now.x, desiredY, entry.b, entry.c);
            if (Number.isFinite(solvedD)) entry.d = solvedD;

            if (entry.dragSupportsX) {
              entry.b = startB - dx;
            } else if (entry.dragScalesA) {
              const bUsed = Number.isFinite(startB) ? startB : 0;
              entry.a = startA * Math.exp(-bUsed * dx);
            }
          }

          refreshEntry(entry, true);
        } else {
          if (entry && entry.dragSupportsX) {
            entry.b = startB - dx;
          } else if (entry && entry.dragShiftsCWithX) {
            // For generic (x+c)-based families (e.g. sqrt(b*(x+c))), c is a direct x-shift.
            entry.c = startC - dx;
          } else if (entry && entry.dragScalesA) {
            const bUsed = Number.isFinite(startB) ? startB : 0;
            entry.a = startA * Math.exp(-bUsed * dx);
          }

          const desiredY = now.y - offsetY;
          if (entry && entry.dragUsesC) {
            const solvedC = solveCForPointer(entry, now.x, desiredY, entry.b);
            if (Number.isFinite(solvedC)) entry.c = solvedC;
          } else {
            const solvedB = solveBForPointer(entry, now.x, desiredY);
            if (Number.isFinite(solvedB)) entry.b = solvedB;
          }
          refreshEntry(entry, true);
        }
      };

      const onUp = function(upEvt) {
        if (upEvt.pointerId !== pointerId) return;
        upEvt.preventDefault();
        upEvt.stopPropagation();
        stopDrag(entry);
        entry._freezePanelDuringDrag = false;
        entry._lastDragPanelResize = 0;
        entry._dragLockedWidth = 0;
        entry._dragLockedHeight = 0;
        refreshEntry(entry);
      };

      entry.dragState = { onMove: onMove, onUp: onUp };
      window.addEventListener('pointermove', onMove, true);
      window.addEventListener('pointerup', onUp, true);
      window.addEventListener('pointercancel', onUp, true);
    };

    targets.forEach(function(target) {
      try {
        target.style.cursor = 'move';
        target.style.touchAction = 'none';
        target.addEventListener('pointerdown', onPointerDown, true);
      } catch (e) {}
    });

    entry.stopDrag = function() {
      stopDrag(entry);
      targets.forEach(function(target) {
        try { target.removeEventListener('pointerdown', onPointerDown, true); } catch (e) {}
      });
      if (typeof entry.__unbindPanelResizeHandle === 'function') {
        try { entry.__unbindPanelResizeHandle(); } catch (e) {}
        entry.__unbindPanelResizeHandle = null;
      }
    };
  }

  window.renderScharFromSpec = function(uid, spec) {
    const cfg = parseScharSpec(spec);
    const boardId = String(cfg.boardId || window.__liaLastCoordBoardId || '').trim();
    const board = window.__boards && window.__boards[boardId];
    if (!uid || !boardId || !board || !cfg.expr) return false;

    const key = 'schar-' + uid;
    let entry = window.__scharEntries[key];

    if (
      entry &&
      entry.engineVersion === 3 &&
      entry.boardId === boardId &&
      entry.board === board &&
      entry.cfg &&
      entry.cfg.name === cfg.name &&
      entry.cfg.variableName === cfg.variableName &&
      entry.cfg.expr === cfg.expr &&
      entry.cfg.color === cfg.color &&
      entry.cfg.showTerm === cfg.showTerm &&
      hasLiveGraph(entry, board)
    ) {
      entry.cfg = cfg;
      entry.normalizedExpr = normalizeFamilyExpr(cfg.expr, cfg.variableName);
      entry.paramSlots = extractParamSlots(cfg.expr, cfg.variableName);
      entry.expDragMode = getExponentialDragMode(entry);
      entry.dragShiftsCWithX = shouldDragByCShift(entry);
      entry.dragUsesC = /[+\-]\s*c\b/.test(entry.normalizedExpr) && !entry.dragShiftsCWithX;
      entry.dragUsesD = hasStandaloneParamTerm(entry.normalizedExpr, 'd') || hasStandaloneParamTerm(entry.normalizedExpr, 'f');
      entry.dragSupportsX = shouldDragByXShift(entry);
      entry.dragScalesA = shouldDragByExpScale(entry);
      entry.dragTranslatesPolyX = isStandardPolyDragFamily(entry.normalizedExpr, entry.cfg);
      if (!hasLivePanel(entry, board)) {
        ensurePanel(entry);
      }
      return refreshEntry(entry);
    }

    if (entry) {
      removeExisting(uid);
    }

    const normalizedExpr = normalizeFamilyExpr(cfg.expr, cfg.variableName);
    const fn = compileFamilyExpr(cfg.expr, cfg.variableName);
    if (!fn) return false;

    entry = {
      engineVersion: 3,
      uid: uid,
      boardId: boardId,
      board: board,
      cfg: cfg,
      normalizedExpr: normalizedExpr,
      paramSlots: extractParamSlots(cfg.expr, cfg.variableName),
      fn: fn,
      a: 1,
      b: 0,
      c: 0,
      d: 0,
      f: 0,
      n: 0,
      expDragMode: getExponentialDragMode({ normalizedExpr: normalizedExpr, cfg: cfg }),
      dragShiftsCWithX: shouldDragByCShift({ normalizedExpr: normalizedExpr, cfg: cfg }),
      dragUsesC: /[+\-]\s*c\b/.test(normalizedExpr) && !shouldDragByCShift({ normalizedExpr: normalizedExpr, cfg: cfg }),
      dragUsesD: hasStandaloneParamTerm(normalizedExpr, 'd') || hasStandaloneParamTerm(normalizedExpr, 'f'),
      dragSupportsX: shouldDragByXShift({ normalizedExpr: normalizedExpr, cfg: cfg }),
      dragScalesA: shouldDragByExpScale({ normalizedExpr: normalizedExpr, cfg: cfg }),
      dragTranslatesPolyX: isStandardPolyDragFamily(normalizedExpr, cfg),
      graph: null,
      nameTag: null,
      panel: null,
      sliderEl: null,
      sliderBRowEl: null,
      sliderBEl: null,
      labelBEl: null,
      sliderCRowEl: null,
      sliderCEl: null,
      labelCEl: null,
      sliderDRowEl: null,
      sliderDEl: null,
      labelDEl: null,
      sliderFRowEl: null,
      sliderFEl: null,
      labelFEl: null,
      valueEl: null,
      termToggleWrapEl: null,
      termToggleEl: null,
      termVisible: false,
      termEl: null,
      bAutoInitialized: false,
      dragState: null,
      stopDrag: null,
      panelScale: 0.6,
      panelMinimized: false
    };

    restoreScharEntryState(entry);

    // Keep legacy flag aligned with the explicit exponential mode.
    if (entry.expDragMode && entry.expDragMode.xShiftByC) {
      entry.dragShiftsCWithX = true;
    }

    try {
      entry.graph = board.create('functiongraph', [function(x) {
        return evaluateAt(entry, x);
      }], {
        name: cfg.name + '(' + cfg.variableName + ')',
        strokeColor: cfg.color,
        highlightStrokeColor: cfg.color,
        strokeWidth: 3,
        fixed: true,
        withLabel: false,
        label: { color: cfg.color, strokeColor: cfg.color }
      });
    } catch (e) {
      return false;
    }

    window.__scharEntries[key] = entry;
    ensurePanel(entry);
    ensureNameTag(entry);
    bindGraphDrag(entry);
    refreshEntry(entry);
    return true;
  };

  window.__bootstrapScharen = function() {
    const nodes = document.querySelectorAll('[id^="schar-spec-"][data-spec]');
    nodes.forEach(function(node) {
      const uid = String(node.id || '').replace(/^schar-spec-/, '');
      const spec = String(node.dataset.spec || '');
      if (!uid || !spec) return;
      window.renderScharFromSpec(uid, spec);
    });
  };

  window.__refreshVisibleScharPanels = function() {
    Object.keys(window.__scharEntries || {}).forEach(function(key) {
      const entry = window.__scharEntries[key];
      if (!entry || !entry.board || !entry.board.containerObj) return;

      let boardRect;
      try {
        boardRect = entry.board.containerObj.getBoundingClientRect();
      } catch (e) {
        return;
      }

      if (!boardRect || boardRect.width <= 0 || boardRect.height <= 0) return;

      const needsPanel = !hasLivePanel(entry, entry.board) ||
        !entry.panel ||
        !entry.sliderEl ||
        !entry.sliderBEl ||
        !entry.termEl;

      if (needsPanel) {
        try { ensurePanel(entry); } catch (e) {}
      }

      try { refreshEntry(entry); } catch (e) {}
    });
  };

  try {
    const mo = new MutationObserver(function() {
      if (window.__bootstrapScharen) window.__bootstrapScharen();
      if (window.__refreshVisibleScharPanels) window.__refreshVisibleScharPanels();
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
    if (window.__registerLiaThemeListener) {
      window.__registerLiaThemeListener(function() {
        Object.keys(window.__scharEntries || {}).forEach(function(key) {
          refreshEntry(window.__scharEntries[key]);
        });
      });
    }
  } catch (e) {}

  try {
    if (window.__bootstrapScharen) window.__bootstrapScharen();
    if (window.__refreshVisibleScharPanels) window.__refreshVisibleScharPanels();
    setTimeout(function() {
      if (window.__bootstrapScharen) window.__bootstrapScharen();
      if (window.__refreshVisibleScharPanels) window.__refreshVisibleScharPanels();
    }, 80);
    setTimeout(function() {
      if (window.__bootstrapScharen) window.__bootstrapScharen();
      if (window.__refreshVisibleScharPanels) window.__refreshVisibleScharPanels();
    }, 220);
  } catch (e) {}
})();

(function() {
  if (window.__liaCoordResizeSyncReady) {
    try {
      if (window.__liaObserveCoordBoards) window.__liaObserveCoordBoards();
      if (window.__liaScheduleCoordResizePass) window.__liaScheduleCoordResizePass('reinit');
    } catch (e) {}
    return;
  }

  window.__liaCoordResizeSyncReady = true;

  function getBoardEntries() {
    const boards = window.__boards || {};
    return Object.keys(boards).map(function(id) {
      return boards[id];
    }).filter(function(board) {
      return !!board && !!board.containerObj;
    });
  }

  function getBoardPixelSize(board) {
    if (!board || !board.containerObj) return null;

    const el = board.containerObj;
    const width = Math.max(0, Math.round(el.clientWidth || el.offsetWidth || 0));
    const height = Math.max(0, Math.round(el.clientHeight || el.offsetHeight || 0));

    if (width <= 0 || height <= 0) return null;

    return {
      width: width,
      height: height,
      sig: width + 'x' + height
    };
  }

  function refreshBoardGeometry(board) {
    const size = getBoardPixelSize(board);
    if (!size) return;

    const prev = board.__liaCoordLastPixelSize || {};
    const changed = prev.width !== size.width || prev.height !== size.height;

    board.__liaCoordLastPixelSize = {
      width: size.width,
      height: size.height
    };

    try {
      board.containerObj.__liaCoordSizeSig = size.sig;
    } catch (e) {}

    if (changed) {
      try {
        if (typeof board.resizeContainer === 'function') {
          board.resizeContainer(size.width, size.height, false, true);
        }
      } catch (e) {}
    }

    try {
      if (typeof board.fullUpdate === 'function') board.fullUpdate();
      else if (typeof board.update === 'function') board.update();
    } catch (e) {}
  }

  function runCoordResizePass() {
    getBoardEntries().forEach(refreshBoardGeometry);

    try {
      if (window.__liaRunCoordHooks) window.__liaRunCoordHooks();
    } catch (e) {}

    try {
      if (window.__refreshVisibleScharPanels) window.__refreshVisibleScharPanels();
    } catch (e) {}
  }

  let resizePassToken = 0;

  function scheduleCoordResizePass() {
    resizePassToken += 1;
    const token = resizePassToken;

    const run = function() {
      if (token !== resizePassToken) return;

      try {
        if (window.__liaObserveCoordBoards) window.__liaObserveCoordBoards();
      } catch (e) {}

      runCoordResizePass();
    };

    requestAnimationFrame(run);
    setTimeout(run, 0);
    setTimeout(run, 80);
    setTimeout(run, 180);
    setTimeout(run, 320);
  }

  function observeBoard(board) {
    if (!board || !board.containerObj) return;

    const el = board.containerObj;
    if (el.__liaCoordObserved) return;
    el.__liaCoordObserved = true;

    if (typeof ResizeObserver === 'function') {
      try {
        const ro = new ResizeObserver(function() {
          const size = getBoardPixelSize(board);
          if (!size) return;
          if (el.__liaCoordSizeSig === size.sig) return;

          el.__liaCoordSizeSig = size.sig;
          scheduleCoordResizePass();
        });

        ro.observe(el);
        if (el.parentElement) ro.observe(el.parentElement);
        el.__liaCoordRO = ro;
      } catch (e) {}
    }
  }

  window.__liaObserveCoordBoards = function() {
    getBoardEntries().forEach(observeBoard);
  };

  window.__liaScheduleCoordResizePass = scheduleCoordResizePass;

  window.addEventListener('resize', function() {
    scheduleCoordResizePass();
  });

  setInterval(function() {
    try {
      if (window.__liaObserveCoordBoards) window.__liaObserveCoordBoards();
    } catch (e) {}
  }, 500);

  requestAnimationFrame(function() {
    try {
      if (window.__liaObserveCoordBoards) window.__liaObserveCoordBoards();
    } catch (e) {}
    scheduleCoordResizePass();
  });
})();


































  // =========================
  // PLOT ZEICHNEN
  // PLOT ZEICHNEN
  // PLOT ZEICHNEN
  // PLOT ZEICHNEN
  // =========================

(function(){
  if (window.__liaPlotZeichnenReady) {
    try {
      if (window.__bootstrapPlotZeichnen) window.__bootstrapPlotZeichnen();
    } catch (e) {}
    return;
  }
  window.__liaPlotZeichnenReady = true;

  window.__liaCoordDrawSpecs = window.__liaCoordDrawSpecs || {};
  window.__liaCoordDrawStates = window.__liaCoordDrawStates || {};
  window.__liaCoordRegressionSpecs = window.__liaCoordRegressionSpecs || {};
  const DRAW_COLORS = [
    '#ff0000', '#ff7500', '#ffff00', '#ff00ff', '#0055ff',
    '#00ffff', '#00ff00', '#007500', '#000000', '#ffffff'
  ];

  function ensureCss() {
    if (document.getElementById('__lia_plot_zeichnen_css_v1')) return;

    const st = document.createElement('style');
    st.id = '__lia_plot_zeichnen_css_v1';
    st.textContent = `
      .lia-plot-draw-layer{
        position:absolute;
        inset:0;
        display:block;
        width:100%;
        height:100%;
        pointer-events:none;
        z-index:31;
        touch-action:none;
      }

      .lia-plot-draw-layer[data-active="1"]{
        pointer-events:auto;
        cursor:crosshair;
      }

      .lia-plot-draw-toggle{
        position:absolute;
        left:10px;
        bottom:10px;
        width:40px;
        height:40px;
        min-width:40px;
        min-height:40px;
        border-radius:999px;
        border:2px solid currentColor;
        background:transparent;
        color:inherit;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:0;
        z-index:48;
        cursor:pointer;
        box-sizing:border-box;
        box-shadow:0 2px 10px rgba(0,0,0,.28);
        font-size:20px;
        font-weight:700;
        line-height:1;
        appearance:none;
        -webkit-appearance:none;
      }

      .lia-plot-draw-toggle[data-active="1"]{
        outline:none;
      }

      .lia-plot-draw-toggle svg{
        width:20px;
        height:20px;
        display:block;
      }

      .lia-plot-draw-toggle .ico-stroke{
        stroke:currentColor;
        fill:none;
        stroke-width:2.2;
        stroke-linecap:round;
        stroke-linejoin:round;
      }

      .lia-plot-analyze-panel{
        position:absolute;
        top:8px;
        right:8px;
        z-index:70;
        min-width:0;
        width:auto;
        max-width:calc(100% - 16px);
        min-height:0 !important;
        height:auto !important;
        max-height:none !important;
        border:1px solid rgba(255,255,255,.22);
        border-radius:14px;
        background:#111c;
        color:#fff;
        backdrop-filter:blur(6px);
        padding:2px 6px;
        box-sizing:border-box;
        font-size:10px;
        font-family:monospace;
        line-height:1.1;
        white-space:normal;
        word-break:break-word;
        box-shadow:0 8px 28px rgba(0,0,0,.5);
        display:none;
        pointer-events:none;
      }

      .lia-plot-analyze-panel[data-open="1"]{
        display:inline-block;
      }

      .lia-plot-color-menu{
        position:absolute;
        left:10px;
          bottom:56px;
        z-index:56;
        display:none;
        padding:14px 26px;
        border:1.5px solid var(--canvas-border, #000);
        border-radius:12px;
        background:rgba(0,0,0,.15);
        backdrop-filter:blur(6px);
        overflow:hidden;
        box-sizing:border-box;
        row-gap:10px;
      }

      .lia-plot-color-menu[data-open="1"]{
        display:grid;
        align-items:start;
      }

      .lia-plot-color-grid{
        display:grid;
        grid-template-columns:repeat(5, 22px);
        gap:10px;
        padding:0 6px;
        align-items:center;
      }

      .lia-plot-color-item{
        width:22px;
        height:22px;
        border-radius:999px;
        border:2px solid var(--canvas-border, #000);
        padding:0;
        margin:0;
        cursor:pointer;
        box-sizing:border-box;
      }

      .lia-plot-color-item[data-active="1"]{
        outline:2px solid var(--canvas-border, #000);
        outline-offset:2px;
      }

      .lia-plot-reg-menu{
        row-gap:2px;
        column-gap:2px;
        padding:3px;
        min-width:190px;
        grid-template-columns:1fr 1fr;
      }

      .lia-plot-reg-item{
        width:100%;
        padding:1px 4px;
        border-radius:999px;
        border:1px solid currentColor;
        background:transparent;
        color:inherit;
        cursor:pointer;
        box-sizing:border-box;
        text-align:center;
        font-size:0.64em;
      }

      .lia-plot-panel-close{
        position:absolute;
        top:6px;
        right:6px;
        z-index:5;
        width:20px;
        height:20px;
        padding:0;
        border-radius:999px;
        border:2px solid currentColor;
        background:transparent;
        cursor:pointer;
        user-select:none;
        display:flex;
        align-items:center;
        justify-content:center;
        line-height:0;
        transition:background 0.12s;
      }

      .lia-plot-panel-close:hover{
        background:currentColor;
      }

      .lia-plot-panel-close:hover svg path{
        stroke:#fff;
      }

      .lia-plot-panel-close svg{
        width:10px;
        height:10px;
        display:block;
      }

      .lia-plot-panel-header{
        width:100%;
        height:8px;
        border-radius:4px;
        margin-bottom:8px;
        cursor:move;
        flex-shrink:0;
        user-select:none;
        touch-action:none;
      }

      .lia-plot-panel-resize{
        position:absolute;
        bottom:0;
        right:0;
        width:16px;
        height:16px;
        cursor:nwse-resize;
        background:transparent;
        border:0;
        padding:0;
        margin:0;
        user-select:none;
        touch-action:none;
        display:flex;
        align-items:flex-end;
        justify-content:flex-end;
        opacity:0.45;
      }

      .lia-plot-panel-resize svg{
        width:10px;
        height:10px;
        display:block;
      }

      .lia-schar-panel{
        overflow:visible !important;
      }
    `;

    (document.head || document.documentElement).appendChild(st);
  }

  function neutralColor() {
    try {
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
      const el = doc.body || doc.documentElement;
      const bg = win.getComputedStyle(el).backgroundColor;
      const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
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

  function isUsableCssColor(value) {
    const s = String(value || '').trim().toLowerCase();
    if (!s) return false;
    if (s === 'transparent') return false;
    if (s === 'rgba(0, 0, 0, 0)') return false;
    if (s === 'rgba(0,0,0,0)') return false;
    return true;
  }

  function parseRgbColor(value) {
    const s = String(value || '').trim();
    const m = s.match(/^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    if (!m) return null;
    return [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)];
  }

  function luminance(rgb) {
    if (!rgb || rgb.length < 3) return 255;
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  }

  function isDarkModeLike() {
    try {
      const root = document.documentElement;
      const body = document.body;
      const classes = ((root && root.className) || '') + ' ' + ((body && body.className) || '');
      if (/\bdark\b|\btheme-dark\b|\blia-dark\b/i.test(classes)) return true;
    } catch (e) {}

    try {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
    } catch (e) {}

    try {
      const probes = [document.body, document.documentElement].filter(Boolean);
      for (let i = 0; i < probes.length; i++) {
        const bg = getComputedStyle(probes[i]).backgroundColor;
        const rgb = parseRgbColor(bg);
        if (!rgb) continue;
        if (luminance(rgb) < 140) return true;
      }
    } catch (e) {}

    try {
      if (window.parent && window.parent !== window && window.parent.getComputedStyle) {
        const pdoc = window.parent.document;
        const pel = (pdoc && (pdoc.body || pdoc.documentElement)) || null;
        if (pel) {
          const pbg = window.parent.getComputedStyle(pel).backgroundColor;
          const prgb = parseRgbColor(pbg);
          if (prgb && luminance(prgb) < 140) return true;
        }
      }
    } catch (e) {}

    return false;
  }

  function resolveToolTone(board) {
    try {
      const nav = board && board.containerObj ? board.containerObj.querySelector('.JXG_navigation') : null;
      if (nav) {
        const navColor = getComputedStyle(nav).color || '';
        const navRgb = parseRgbColor(navColor);
        if (navRgb) return luminance(navRgb) < 140 ? '#000' : '#fff';
      }
    } catch (e) {}

    try {
      const borderHost = board && board.containerObj ? board.containerObj : null;
      if (borderHost) {
        const borderColor = getComputedStyle(borderHost).borderTopColor || '';
        const borderRgb = parseRgbColor(borderColor);
        if (borderRgb) return luminance(borderRgb) < 140 ? '#000' : '#fff';
      }
    } catch (e) {}

    try {
      const root = document.documentElement;
      const cssTone = root ? getComputedStyle(root).getPropertyValue('--canvas-border').trim() : '';
      const cssRgb = parseRgbColor(cssTone);
      if (cssRgb) return luminance(cssRgb) < 140 ? '#000' : '#fff';
    } catch (e) {}

    try {
      if (window.parent && window.parent !== window && window.parent.getComputedStyle) {
        const pdoc = window.parent.document;
        const proot = pdoc && pdoc.documentElement;
        const pTone = proot ? window.parent.getComputedStyle(proot).getPropertyValue('--canvas-border').trim() : '';
        const pRgb = parseRgbColor(pTone);
        if (pRgb) return luminance(pRgb) < 140 ? '#000' : '#fff';
      }
    } catch (e) {}

    return isDarkModeLike() ? '#fff' : '#000';
  }

  function resolveActiveBgColor() {
    try {
      const root = document.documentElement;
      const cssAccent = root ? getComputedStyle(root).getPropertyValue('--canvas-accent').trim() : '';
      if (isUsableCssColor(cssAccent)) return cssAccent;
    } catch (e) {}

    try {
      const doc = (window.parent && window.parent.document) ? window.parent.document : document;
      const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
      const btn = doc.querySelector('.lia-btn');
      if (btn) {
        const cs = win.getComputedStyle(btn);
        const bg = cs.backgroundColor || '';
        if (isUsableCssColor(bg)) return bg;
        const border = cs.borderTopColor || cs.borderColor || '';
        if (isUsableCssColor(border)) return border;
        const color = cs.color || '';
        if (isUsableCssColor(color)) return color;
      }
    } catch (e) {}

    return '#0b5fff';
  }

  function normalizeDrawColor(rawColor, fallbackColor) {
    const raw = String(rawColor || '').trim();
    if (!raw) return fallbackColor;
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(raw)) return raw;
    if (/^rgba?\(/i.test(raw)) return raw;
    if (/^hsla?\(/i.test(raw)) return raw;
    if (/^[a-z]+$/i.test(raw)) return raw;
    return fallbackColor;
  }

  function getState(boardId) {
    const key = String(boardId || '');
    if (!key) return null;

    const specs = window.__liaCoordDrawSpecs || {};
    const spec = specs[key] || null;
    const defaultDrawColor = normalizeDrawColor(spec && spec.color ? String(spec.color) : '', '#ff0000');
    const state = window.__liaCoordDrawStates[key] || (window.__liaCoordDrawStates[key] = {
      boardId: key,
      color: defaultDrawColor,
      strokes: [],
      tool: '',
      drawing: false,
      pointerId: null,
      canvas: null,
      drawButton: null,
      eraseButton: null,
      analyzeButton: null,
      analyzePanel: null,
      analyzedStrokeIndex: -1,
      analyzedCurvePoints: null,
      analyzedGraph: null,
      analyzedGraphs: [],
      analyzedModelStates: [],
      analyzedModelSeq: 0,
      analyzedParamPanel: null,
      analyzedParamPanels: [],
      regressionPoints: [],
      regressionButton: null,
      regressionMenu: null,
      regressionMenuOpen: false,
      drawColorMenu: null,
      drawColorMenuOpen: false,
      drawColor: defaultDrawColor,
      syncRaf: 0,
      hooksBound: false
    });

    return state;
  }

  function getToolBoardIds() {
    const ids = new Set();
    Object.keys(window.__liaCoordDrawSpecs || {}).forEach(function(boardId) {
      ids.add(String(boardId));
    });
    Object.keys(window.__liaCoordRegressionSpecs || {}).forEach(function(boardId) {
      ids.add(String(boardId));
    });
    return Array.from(ids);
  }

  function userToLocal(board, pt) {
    return {
      x: board.origin.scrCoords[1] + pt.x * board.unitX,
      y: board.origin.scrCoords[2] - pt.y * board.unitY
    };
  }

  function eventToUser(board, evt) {
    const rect = board.containerObj.getBoundingClientRect();
    const lx = evt.clientX - rect.left;
    const ly = evt.clientY - rect.top;

    return {
      x: (lx - board.origin.scrCoords[1]) / board.unitX,
      y: (board.origin.scrCoords[2] - ly) / board.unitY
    };
  }

  function eventToLocal(board, evt) {
    const rect = board.containerObj.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  function distanceToSegment(point, start, end) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const lenSq = dx * dx + dy * dy;
    if (lenSq <= 0.000001) {
      const px = point.x - start.x;
      const py = point.y - start.y;
      return Math.sqrt(px * px + py * py);
    }

    let t = ((point.x - start.x) * dx + (point.y - start.y) * dy) / lenSq;
    if (t < 0) t = 0;
    if (t > 1) t = 1;

    const projX = start.x + t * dx;
    const projY = start.y + t * dy;
    const diffX = point.x - projX;
    const diffY = point.y - projY;
    return Math.sqrt(diffX * diffX + diffY * diffY);
  }

  function hitStrokeIndex(board, state, evt) {
    if (!board || !state || !Array.isArray(state.strokes) || state.strokes.length === 0) return -1;

    const localPoint = eventToLocal(board, evt);

    for (let strokeIndex = state.strokes.length - 1; strokeIndex >= 0; strokeIndex--) {
      const stroke = state.strokes[strokeIndex];
      if (!stroke || !Array.isArray(stroke.points) || stroke.points.length === 0) continue;

      const tolerance = Math.max(10, (Number(stroke.width) || 3) + 8);
      const first = userToLocal(board, stroke.points[0]);

      if (stroke.points.length === 1) {
        const dx = localPoint.x - first.x;
        const dy = localPoint.y - first.y;
        if (Math.sqrt(dx * dx + dy * dy) <= tolerance) return strokeIndex;
        continue;
      }

      let prev = first;
      for (let pointIndex = 1; pointIndex < stroke.points.length; pointIndex++) {
        const next = userToLocal(board, stroke.points[pointIndex]);
        if (distanceToSegment(localPoint, prev, next) <= tolerance) {
          return strokeIndex;
        }
        prev = next;
      }
    }

    return -1;
  }

  function getSelectableBoardPoints(board, boardId) {
    if (!board) return [];

    const out = [];
    const seen = new Set();

    function pushPoint(obj) {
      if (!obj || typeof obj !== 'object') return;
      const type = String(obj.elType || '').toLowerCase();
      if (type !== 'point' && type !== 'glider') return;

      try {
        if (obj.visPropCalc && obj.visPropCalc.visible === false) return;
        if (obj.visProp && obj.visProp.visible === false) return;
      } catch (e) {}

      let x = NaN;
      let y = NaN;
      try {
        if (typeof obj.X === 'function' && typeof obj.Y === 'function') {
          x = Number(obj.X());
          y = Number(obj.Y());
        }
      } catch (e) {}

      if (!Number.isFinite(x) || !Number.isFinite(y)) {
        try {
          const usr = obj.coords && obj.coords.usrCoords;
          if (Array.isArray(usr) && usr.length >= 3) {
            const w = Number(usr[0]);
            if (Number.isFinite(w) && Math.abs(w) > 1e-12) {
              x = Number(usr[1]) / w;
              y = Number(usr[2]) / w;
            }
          }
        } catch (e) {}
      }

      if (!Number.isFinite(x) || !Number.isFinite(y)) return;

      const key = String(obj.id || obj.name || ('xy:' + x.toFixed(6) + ',' + y.toFixed(6)));
      if (seen.has(key)) return;
      seen.add(key);

      out.push({ key: key, x: x, y: y });
    }

    const key = String(boardId || board.id || '');
    const namedPoints = (window.__points && key && window.__points[key]) || null;

    if (namedPoints && typeof namedPoints === 'object') {
      Object.keys(namedPoints).forEach(function(name) {
        pushPoint(namedPoints[name]);
      });
    }

    if (!out.length) {
      if (Array.isArray(board.objectsList)) {
        board.objectsList.forEach(pushPoint);
      }

      if (board.objects && typeof board.objects === 'object') {
        Object.keys(board.objects).forEach(function(k) {
          pushPoint(board.objects[k]);
        });
      }
    }

    return out;
  }

  function findNearestSelectableBoardPoint(board, boardId, evt, maxDistancePx) {
    if (!board || !evt) return null;
    const candidates = getSelectableBoardPoints(board, boardId);
    if (!candidates.length) return null;

    const localPoint = eventToLocal(board, evt);
    const maxDist = Number.isFinite(maxDistancePx) ? maxDistancePx : 14;

    let best = null;
    let bestDist = Infinity;
    candidates.forEach(function(candidate) {
      const localCandidate = userToLocal(board, candidate);
      const dx = localCandidate.x - localPoint.x;
      const dy = localCandidate.y - localPoint.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < bestDist) {
        bestDist = dist;
        best = candidate;
      }
    });

    if (!best || bestDist > maxDist) return null;
    return best;
  }

  function syncCanvasSize(board, state) {
    if (!board || !state || !state.canvas) return;

    const canvas = state.canvas;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const w = Math.max(1, Math.round(board.containerObj.clientWidth || board.containerObj.offsetWidth || 1));
    const h = Math.max(1, Math.round(board.containerObj.clientHeight || board.containerObj.offsetHeight || 1));
    const pxW = Math.max(1, Math.round(w * dpr));
    const pxH = Math.max(1, Math.round(h * dpr));

    if (canvas.width !== pxW) canvas.width = pxW;
    if (canvas.height !== pxH) canvas.height = pxH;

    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
  }

  function redraw(boardId) {
    const board = window.__boards && window.__boards[boardId];
    const state = getState(boardId);
    if (!board || !board.containerObj || !state || !state.canvas) return;

    syncCanvasSize(board, state);

    const canvas = state.canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const w = Math.max(1, Math.round(board.containerObj.clientWidth || 1));
    const h = Math.max(1, Math.round(board.containerObj.clientHeight || 1));

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    state.strokes.forEach(function(stroke) {
      if (!stroke || !Array.isArray(stroke.points) || stroke.points.length === 0) return;

      ctx.beginPath();
      ctx.strokeStyle = String(stroke.color || state.drawColor || state.color || '#fff');
      ctx.lineWidth = Math.max(2, Number(stroke.width) || 3);

      const first = userToLocal(board, stroke.points[0]);
      ctx.moveTo(first.x, first.y);

      for (let i = 1; i < stroke.points.length; i++) {
        const p = userToLocal(board, stroke.points[i]);
        ctx.lineTo(p.x, p.y);
      }

      if (stroke.points.length === 1) {
        ctx.lineTo(first.x + 0.01, first.y + 0.01);
      }

      ctx.stroke();
    });

    if (Array.isArray(state.regressionPoints) && state.regressionPoints.length) {
      const pointColor = String(state.drawColor || state.color || '#ff0000');
      const outline = resolveToolTone(board);
      state.regressionPoints.forEach(function(point) {
        if (!point || !Number.isFinite(point.x) || !Number.isFinite(point.y)) return;
        const p = userToLocal(board, point);
        ctx.beginPath();
        ctx.fillStyle = pointColor;
        ctx.strokeStyle = outline;
        ctx.lineWidth = 1.5;
        ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }

    const tone = resolveToolTone(board);
    if (state.analyzedStrokeIndex >= 0 && state.strokes[state.analyzedStrokeIndex]) {
      const stroke = state.strokes[state.analyzedStrokeIndex];
      if (stroke && Array.isArray(stroke.points) && stroke.points.length) {
        ctx.beginPath();
        ctx.strokeStyle = String(stroke.color || state.drawColor || state.color || tone);
        ctx.lineWidth = Math.max(3, (Number(stroke.width) || 3) + 1.5);
        const first = userToLocal(board, stroke.points[0]);
        ctx.moveTo(first.x, first.y);
        for (let i = 1; i < stroke.points.length; i++) {
          const p = userToLocal(board, stroke.points[i]);
          ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
    }

    if (Array.isArray(state.analyzedCurvePoints) && state.analyzedCurvePoints.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = tone;
      ctx.lineWidth = 4;
      const f = userToLocal(board, state.analyzedCurvePoints[0]);
      ctx.moveTo(f.x, f.y);
      for (let i = 1; i < state.analyzedCurvePoints.length; i++) {
        const p = userToLocal(board, state.analyzedCurvePoints[i]);
        ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }
  }

  function scheduleRedraw(boardId) {
    const state = getState(boardId);
    if (!state || state.syncRaf) return;

    state.syncRaf = requestAnimationFrame(function() {
      state.syncRaf = 0;
      redraw(boardId);
    });
  }

  function toFixedNum(v) {
    const n = Number(v);
    if (!Number.isFinite(n)) return '0';
    const r = Math.round(n * 1000) / 1000;
    if (Math.abs(r) < 0.0000001) return '0';
    return String(r);
  }

  function signed(v) {
    const n = Number(v) || 0;
    return n >= 0 ? ('+' + toFixedNum(n)) : toFixedNum(n);
  }

  function gaussianSolve(matrix, vector) {
    const n = vector.length;
    const a = matrix.map(function(row) { return row.slice(); });
    const b = vector.slice();

    for (let col = 0; col < n; col++) {
      let pivot = col;
      let pivotAbs = Math.abs(a[col][col]);
      for (let r = col + 1; r < n; r++) {
        const ab = Math.abs(a[r][col]);
        if (ab > pivotAbs) {
          pivotAbs = ab;
          pivot = r;
        }
      }
      if (pivotAbs < 1e-12) return null;

      if (pivot !== col) {
        const tmpRow = a[col];
        a[col] = a[pivot];
        a[pivot] = tmpRow;
        const tmpB = b[col];
        b[col] = b[pivot];
        b[pivot] = tmpB;
      }

      const div = a[col][col];
      for (let j = col; j < n; j++) a[col][j] /= div;
      b[col] /= div;

      for (let r = 0; r < n; r++) {
        if (r === col) continue;
        const f = a[r][col];
        if (Math.abs(f) < 1e-12) continue;
        for (let j = col; j < n; j++) a[r][j] -= f * a[col][j];
        b[r] -= f * b[col];
      }
    }
    return b;
  }

  function polyFit(points, degree) {
    const n = degree + 1;
    const mat = Array.from({ length: n }, function() { return Array(n).fill(0); });
    const vec = Array(n).fill(0);

    points.forEach(function(p) {
      const xP = [1];
      for (let i = 1; i <= 2 * degree; i++) xP[i] = xP[i - 1] * p.x;

      for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) mat[r][c] += xP[r + c];
        vec[r] += p.y * xP[r];
      }
    });

    return gaussianSolve(mat, vec);
  }

  function linear2FitFromFeature(points, featureFn, minUsedOverride) {
    let s11 = 0, s12 = 0, s22 = 0, sy1 = 0, sy2 = 0;
    let used = 0;
    points.forEach(function(p) {
      const z = featureFn(p.x);
      if (!Number.isFinite(z)) return;
      s11 += z * z;
      s12 += z;
      s22 += 1;
      sy1 += p.y * z;
      sy2 += p.y;
      used += 1;
    });
    const minUsed = Number.isFinite(minUsedOverride) ? Math.max(2, Math.floor(minUsedOverride)) : 4;
    if (used < minUsed) return null;
    const det = s11 * s22 - s12 * s12;
    if (Math.abs(det) < 1e-12) return null;
    const A = (sy1 * s22 - sy2 * s12) / det;
    const d = (s11 * sy2 - s12 * sy1) / det;
    return { A: A, d: d };
  }

  function rmse(points, predictFn) {
    let se = 0;
    let cnt = 0;
    for (let i = 0; i < points.length; i++) {
      const yHat = predictFn(points[i].x);
      if (!Number.isFinite(yHat)) continue;
      const e = yHat - points[i].y;
      se += e * e;
      cnt += 1;
    }
    if (!cnt) return Infinity;
    return Math.sqrt(se / cnt);
  }

  function simplifyPoints(stroke) {
    const pts = (stroke && Array.isArray(stroke.points)) ? stroke.points.slice() : [];
    if (pts.length < 8) return [];
    const sorted = pts.slice().sort(function(a, b) { return a.x - b.x; });
    const out = [];
    const minStep = 0.08;
    for (let i = 0; i < sorted.length; i++) {
      const p = sorted[i];
      if (!out.length || Math.abs(p.x - out[out.length - 1].x) >= minStep) {
        out.push({ x: p.x, y: p.y });
      } else {
        out[out.length - 1].y = (out[out.length - 1].y + p.y) * 0.5;
      }
    }
    return out;
  }

  function simplifyRegressionPoints(points) {
    const pts = Array.isArray(points) ? points.slice() : [];
    if (pts.length < 2) return [];
    const sorted = pts
      .filter(function(p) {
        return p && Number.isFinite(p.x) && Number.isFinite(p.y);
      })
      .map(function(p) { return { x: p.x, y: p.y }; })
      .sort(function(a, b) { return a.x - b.x; });
    if (sorted.length < 2) return [];

    const out = [];
    const minStep = 0.02;
    for (let i = 0; i < sorted.length; i++) {
      const p = sorted[i];
      if (!out.length || Math.abs(p.x - out[out.length - 1].x) >= minStep) {
        out.push(p);
      } else {
        out[out.length - 1].y = (out[out.length - 1].y + p.y) * 0.5;
      }
    }
    return out;
  }

  function collectStrokePointsByColor(state, color) {
    if (!state || !Array.isArray(state.strokes)) return [];
    const target = String(color || '').trim().toLowerCase();
    if (!target) return [];

    const out = [];
    state.strokes.forEach(function(stroke) {
      if (!stroke || !Array.isArray(stroke.points) || stroke.points.length === 0) return;
      const strokeColor = String(stroke.color || '').trim().toLowerCase();
      if (strokeColor !== target) return;
      stroke.points.forEach(function(point) {
        if (!point) return;
        if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) return;
        out.push({ x: point.x, y: point.y });
      });
    });

    return out;
  }

  function collectPlottedGraphs(boardId, board) {
    const out = [];
    const seen = new Set();

    function pushGraph(graph) {
      if (!graph || seen.has(graph)) return;
      if (typeof graph.Y !== 'function') return;
      seen.add(graph);
      out.push(graph);
    }

    const scharEntries = window.__scharEntries || {};
    Object.keys(scharEntries).forEach(function(key) {
      const e = scharEntries[key];
      if (!e || e.boardId !== boardId || e.board !== board) return;
      pushGraph(e.graph);
    });

    const plotEntries = window.__plotFunctionEntries || {};
    Object.keys(plotEntries).forEach(function(key) {
      const e = plotEntries[key];
      if (!e || e.boardId !== boardId) return;
      const gb = e.graph && e.graph.board;
      if (!gb || (gb !== board && gb.id !== board.id)) return;
      pushGraph(e.graph);
    });

    return out;
  }

  function sampleGraphPoints(board, graph) {
    if (!board || !graph) return [];
    // Use stored dataX/dataY if available (avoids triggering renderer)
    let xMin, xMax;
    try {
      const bb = board.getBoundingBox();
      if (Array.isArray(bb) && bb.length >= 4) {
        xMin = Math.min(bb[0], bb[2]);
        xMax = Math.max(bb[0], bb[2]);
      }
    } catch (e) {}
    if (!Number.isFinite(xMin) || !Number.isFinite(xMax)) return [];

    const count = 120;
    const pts = [];
    const yFn = typeof graph.Y === 'function' ? graph.Y.bind(graph) : null;
    if (!yFn) return [];

    for (let i = 0; i <= count; i++) {
      const x = xMin + (xMax - xMin) * (i / count);
      let y = NaN;
      try { y = yFn(x); } catch (e) {}
      if (Number.isFinite(y) && Math.abs(y) < 1e7) pts.push({ x: x, y: y });
    }
    return pts;
  }

  function hitPlottedGraph(boardId, board, evt) {
    const graphs = collectPlottedGraphs(boardId, board);
    if (!graphs.length) return null;

    const clickLocal = eventToLocal(board, evt);
    let best = null;

    for (let gi = 0; gi < graphs.length; gi++) {
      const pts = sampleGraphPoints(board, graphs[gi]);
      if (pts.length < 8) continue;

      let minDist = Infinity;
      let prev = userToLocal(board, pts[0]);
      for (let i = 1; i < pts.length; i++) {
        const next = userToLocal(board, pts[i]);
        const d = distanceToSegment(clickLocal, prev, next);
        if (d < minDist) minDist = d;
        prev = next;
      }

      if (!best || minDist < best.distance) {
        let color = null;
        try {
          color = (graphs[gi].visProp && (graphs[gi].visProp.strokecolor || graphs[gi].visProp.highlightstrokecolor)) || null;
        } catch (e) {}
        best = { distance: minDist, points: pts, color: color };
      }
    }

    if (!best || best.distance > 24) return null;
    return best;
  }

  function analyzeStroke(boardId, stroke, opts) {
    const pointMode = !!(opts && opts.pointMode);
    const pts = pointMode
      ? simplifyRegressionPoints(stroke && stroke.points)
      : simplifyPoints(stroke);
    if (pts.length < (pointMode ? 2 : 8)) return null;

    const xs = pts.map(function(p) { return p.x; });
    const ys = pts.map(function(p) { return p.y; });
    const xMin = Math.min.apply(null, xs);
    const xMax = Math.max.apply(null, xs);
    const yMin = Math.min.apply(null, ys);
    const yMax = Math.max.apply(null, ys);
    const xSpan = Math.max(0.5, xMax - xMin);
    const ySpan = Math.max(0.5, yMax - yMin);

    const nPts = pts.length;
    const candidates = [];
    // numP = number of free parameters in the model (for BIC-style penalty)
    function pushCandidate(name, expr, macroExpr, predictFn, params, numP) {
      const error = rmse(pts, predictFn);
      if (!Number.isFinite(error)) return;
      // BIC-like penalty: penalise complexity so simpler models win when fit is equally good
      const penalty = (numP || 2) / Math.max(nPts, 8) * 0.5;
      const score = error / Math.max(ySpan, 0.001) + penalty;
      candidates.push({ name: name, expr: expr, macroExpr: macroExpr, params: params, predict: predictFn, error: error, score: score });
    }

    const c1 = polyFit(pts, 1);
    if (c1) {
      const n = c1[0], m = c1[1];
      pushCandidate('linear', toFixedNum(m) + '*x' + signed(n), toFixedNum(m) + 'x' + signed(n), function(x) { return m * x + n; }, { m: m, n: n }, 2);
    }

    const c2 = polyFit(pts, 2);
    if (c2) {
      const q0 = c2[0], q1 = c2[1], q2 = c2[2];
      const A = q2;
      const c = Math.abs(A) > 1e-8 ? (q1 / (2 * A)) : 0;
      const d = q0 - A * c * c;
      pushCandidate('quadratisch', toFixedNum(A) + '*(x' + signed(c) + ')^2' + signed(d), toFixedNum(A) + '{{x' + signed(c) + '}}^2' + signed(d), function(x) { return A * (x + c) * (x + c) + d; }, { A: A, c: c, d: d }, 3);
    }

    const c3 = polyFit(pts, 3);
    if (c3) {
      const d0 = c3[0], d1 = c3[1], d2 = c3[2], d3 = c3[3];
      pushCandidate('kubisch', toFixedNum(d3) + '*x^3' + signed(d2) + '*x^2' + signed(d1) + '*x' + signed(d0), toFixedNum(d3) + 'x^3' + signed(d2) + 'x^2' + signed(d1) + 'x' + signed(d0), function(x) { return ((d3 * x + d2) * x + d1) * x + d0; }, { a: d3, b: d2, c: d1, d: d0 }, 4);
    }

    const c4 = polyFit(pts, 4);
    if (c4) {
      const e0 = c4[0], e1 = c4[1], e2 = c4[2], e3 = c4[3], e4 = c4[4];
      pushCandidate('quartisch',
        toFixedNum(e4) + '*x^4' + signed(e3) + '*x^3' + signed(e2) + '*x^2' + signed(e1) + '*x' + signed(e0),
        toFixedNum(e4) + 'x^4' + signed(e3) + 'x^3' + signed(e2) + 'x^2' + signed(e1) + 'x' + signed(e0),
        function(x) { return ((((e4 * x + e3) * x + e2) * x + e1) * x + e0); },
        { a: e4, b: e3, c: e2, d: e1, f: e0 },
        5
      );
    }

    function fitByGrid(name, bMin, bMax, bSteps, cMin, cMax, cSteps, featFn, buildExpr) {
      let best = null;
      for (let bi = 0; bi <= bSteps; bi++) {
        const b = bMin + (bMax - bMin) * (bi / bSteps);
        for (let ci = 0; ci <= cSteps; ci++) {
          const c = cMin + (cMax - cMin) * (ci / cSteps);
          const lin = linear2FitFromFeature(pts, function(x) { return featFn(x, b, c); }, pointMode ? 2 : 4);
          if (!lin) continue;
          const A = lin.A;
          const d = lin.d;
          const err = rmse(pts, function(x) {
            const z = featFn(x, b, c);
            if (!Number.isFinite(z)) return NaN;
            return A * z + d;
          });
          if (!Number.isFinite(err)) continue;
          if (!best || err < best.err) best = { A: A, b: b, c: c, d: d, err: err };
        }
      }
      if (!best) return;
      const built = buildExpr(best);
      pushCandidate(name, built.expr, built.macroExpr, built.predict, { A: best.A, b: best.b, c: best.c, d: best.d }, 4);
    }

    fitByGrid('exponential', -3 / xSpan, 3 / xSpan, 20, -xSpan, xSpan, 20,
      function(x, b, c) { const z = Math.exp(b * (x + c)); return Number.isFinite(z) ? z : NaN; },
      function(best) {
        const A = best.A, b = best.b, c = best.c, d = best.d;
        return {
          expr: toFixedNum(A) + '*exp(' + toFixedNum(b) + '*(x' + signed(c) + '))' + signed(d),
          macroExpr: toFixedNum(A) + ' e^{{' + toFixedNum(b) + '{{x' + signed(c) + '}}}}' + signed(d),
          predict: function(x) { return A * Math.exp(b * (x + c)) + d; }
        };
      }
    );

    // ── Logarithmus: asymptote near observed domain start, b fixed to 1. ───────────
    (function() {
      let logBest = null;
      const xStart = pts[0].x;

      function logWeightedError(A, c, d) {
        let se = 0;
        let sw = 0;
        let invalid = 0;
        for (let i = 0; i < pts.length; i++) {
          const x = pts[i].x;
          const t = x + c;
          if (t <= 0) {
            invalid += 1;
            continue;
          }
          const yHat = A * Math.log(t) + d;
          if (!Number.isFinite(yHat)) continue;
          const leftFactor = 1 + 1.8 * (1 - Math.min(1, Math.max(0, (x - xMin) / Math.max(xSpan, 0.001))));
          const e = yHat - pts[i].y;
          se += leftFactor * e * e;
          sw += leftFactor;
        }
        if (!sw) return Infinity;
        const wrmse = Math.sqrt(se / sw);
        const invalidFrac = invalid / Math.max(pts.length, 1);
        const r = -c;
        const startPenalty = Math.abs(r - xStart) / Math.max(xSpan, 0.001) * ySpan * 0.35;
        const invalidPenalty = invalidFrac * ySpan * 3.6;
        return wrmse + startPenalty + invalidPenalty;
      }

      const rMin = xStart - 0.8 * xSpan;
      const rMax = xStart + 0.22 * xSpan;
      const steps = 84;
      for (let ri = 0; ri <= steps; ri++) {
        const r = rMin + (rMax - rMin) * (ri / steps);
        const c = -r;

        const lin = linear2FitFromFeature(pts, function(x) {
          const t = x + c;
          return t > 0 ? Math.log(t) : NaN;
        }, pointMode ? 2 : 4);
        if (!lin) continue;

        const A = lin.A;
        const d = lin.d;
        const err = logWeightedError(A, c, d);
        if (!Number.isFinite(err)) continue;
        if (!logBest || err < logBest.err) logBest = { A: A, b: 1, c: c, d: d, err: err };
      }

      if (!logBest) return;
      const A = logBest.A, c = logBest.c, d = logBest.d;
      pushCandidate(
        'logarithmus',
        toFixedNum(A) + '*ln(x' + signed(c) + ')' + signed(d),
        toFixedNum(A) + ' ln{{x' + signed(c) + '}}' + signed(d),
        function(x) { const t = x + c; return t <= 0 ? NaN : A * Math.log(t) + d; },
        { A: A, b: 1, c: c, d: d },
        3
      );
    })();

    // ── Wurzel: anchor root near observed domain start and penalize truncation. ─────
    // A*sqrt(b*(x+c)) = A*sqrt(b)*sqrt(x+c), so b is redundant with A.
    (function() {
      let wurzelBest = null;

      // Observed domain start (first valid x after simplification)
      const xStart = pts[0].x;

      function rootWeightedError(A, c, d) {
        let se = 0;
        let sw = 0;
        let invalid = 0;

        for (let i = 0; i < pts.length; i++) {
          const x = pts[i].x;
          const t = x + c;
          if (t < 0) {
            invalid += 1;
            continue;
          }
          const yHat = A * Math.sqrt(t) + d;
          if (!Number.isFinite(yHat)) continue;

          // Emphasize left side to lock onto the root start location.
          const leftFactor = 1 + 2.2 * (1 - Math.min(1, Math.max(0, (x - xMin) / Math.max(xSpan, 0.001))));
          const e = yHat - pts[i].y;
          se += leftFactor * e * e;
          sw += leftFactor;
        }

        if (!sw) return Infinity;
        const wrmse = Math.sqrt(se / sw);
        const invalidFrac = invalid / Math.max(pts.length, 1);

        // Root r=-c should be close to observed start xStart.
        const r = -c;
        const startPenalty = Math.abs(r - xStart) / Math.max(xSpan, 0.001) * ySpan * 0.55;
        // Strongly penalize fits that drop many points left of the model domain.
        const invalidPenalty = invalidFrac * ySpan * 4.2;

        return wrmse + startPenalty + invalidPenalty;
      }

      // Search root position r around left edge of observed data.
      const rMin = xStart - 0.9 * xSpan;
      const rMax = xStart + 0.22 * xSpan;
      const steps = 84;
      for (let ri = 0; ri <= steps; ri++) {
        const r = rMin + (rMax - rMin) * (ri / steps);
        const c = -r;   // sqrt(x - r) = sqrt(x + c)

        const lin = linear2FitFromFeature(pts, function(x) {
          const t = x + c;
          return t >= 0 ? Math.sqrt(t) : NaN;
        }, pointMode ? 2 : 4);
        if (!lin) continue;

        const A = lin.A;
        const d = lin.d;
        const err = rootWeightedError(A, c, d);
        if (!Number.isFinite(err)) continue;

        if (!wurzelBest || err < wurzelBest.err) {
          wurzelBest = { A: A, b: 1, c: c, d: d, err: err };
        }
      }

      if (!wurzelBest) return;
      const A = wurzelBest.A, c = wurzelBest.c, d = wurzelBest.d;
      pushCandidate(
        'wurzel',
        toFixedNum(A) + '*sqrt(x' + signed(c) + ')' + signed(d),
        toFixedNum(A) + ' sqrt{{x' + signed(c) + '}}' + signed(d),
        function(x) { const t = x + c; return t < 0 ? NaN : A * Math.sqrt(t) + d; },
        { A: A, b: 1, c: c, d: d },
        3
      );
    })();

    // ── Hyperbel: fit y = A/(b*(x+c)) + d with asymptote search around largest x-gap ─
    (function() {
      let hyperBest = null;
      const sortedX = xs.slice().sort(function(a, b) { return a - b; });
      let maxGap = 0;
      let gapMid = (xMin + xMax) * 0.5;
      for (let i = 1; i < sortedX.length; i++) {
        const g = sortedX[i] - sortedX[i - 1];
        if (g > maxGap) {
          maxGap = g;
          gapMid = (sortedX[i] + sortedX[i - 1]) * 0.5;
        }
      }

      function hyperWeightedError(A, b, c, d) {
        const eps = Math.max(0.04 * xSpan, 0.04);
        let se = 0;
        let cnt = 0;
        let invalid = 0;
        let leftCnt = 0;
        let rightCnt = 0;

        for (let i = 0; i < pts.length; i++) {
          const x = pts[i].x;
          const t = b * (x + c);
          if (Math.abs(t) < eps) {
            invalid += 1;
            continue;
          }

          if (t < 0) leftCnt += 1;
          else rightCnt += 1;

          const yHat = A / t + d;
          if (!Number.isFinite(yHat)) continue;

          const e = yHat - pts[i].y;
          se += e * e;
          cnt += 1;
        }

        if (!cnt) return Infinity;
        const wrmse = Math.sqrt(se / cnt);
        const invalidFrac = invalid / Math.max(pts.length, 1);
        const r = -c;
        const asymPenalty = (maxGap > 0.18 * xSpan)
          ? (Math.abs(r - gapMid) / Math.max(xSpan, 0.001)) * ySpan * 0.35
          : 0;
        const invalidPenalty = invalidFrac * ySpan * 4.5;
        // Only penalise a single-branch fit when the asymptote is far from the drawn range
        // (avoids falsely penalising genuine one-branch curves approaching a pole).
        const distToEdge = Math.min(Math.abs(r - xMin), Math.abs(r - xMax));
        const oneBranchPenalty = (leftCnt === 0 || rightCnt === 0) && distToEdge > 0.45 * xSpan ? ySpan * 0.15 : 0;

        return wrmse + asymPenalty + invalidPenalty + oneBranchPenalty;
      }

      const rCenter = gapMid;
      const rSpan = Math.max(0.8 * xSpan, maxGap * 2);
      const steps = 96;
      const eps = Math.max(0.04 * xSpan, 0.04);

      for (let ri = 0; ri <= steps; ri++) {
        const r = rCenter - rSpan + (2 * rSpan) * (ri / steps);
        const c = -r;
        const b = 1;

        const lin = linear2FitFromFeature(pts, function(x) {
          const t = b * (x + c);
          if (Math.abs(t) < eps) return NaN;
          return 1 / t;
        }, pointMode ? 2 : 4);
        if (!lin) continue;

        const A = lin.A;
        const d = lin.d;
        const err = hyperWeightedError(A, b, c, d);
        if (!Number.isFinite(err)) continue;
        if (!hyperBest || err < hyperBest.err) {
          hyperBest = { A: A, b: b, c: c, d: d, err: err };
        }
      }

      if (!hyperBest) return;
      const A = hyperBest.A, b = hyperBest.b, c = hyperBest.c, d = hyperBest.d;
      pushCandidate(
        'hyperbel',
        toFixedNum(A) + '/(' + toFixedNum(b) + '*(x' + signed(c) + '))' + signed(d),
        toFixedNum(A) + '/{{' + toFixedNum(b) + '{{x' + signed(c) + '}}}}' + signed(d),
        function(x) {
          const t = b * (x + c);
          return Math.abs(t) < 1e-9 ? NaN : A / t + d;
        },
        { A: A, b: b, c: c, d: d },
        4
      );
    })();

    // ── Quadratische Hyperbel: fit y = A/(b*(x+c)^2) + d with asymptote search ───
    (function() {
      let hyper2Best = null;
      const sortedX = xs.slice().sort(function(a, b) { return a - b; });
      let maxGap = 0;
      let gapMid = (xMin + xMax) * 0.5;
      for (let i = 1; i < sortedX.length; i++) {
        const g = sortedX[i] - sortedX[i - 1];
        if (g > maxGap) {
          maxGap = g;
          gapMid = (sortedX[i] + sortedX[i - 1]) * 0.5;
        }
      }

      function hyper2WeightedError(A, b, c, d) {
        const eps = Math.max(0.04 * xSpan, 0.04);
        let se = 0;
        let cnt = 0;
        let invalid = 0;

        for (let i = 0; i < pts.length; i++) {
          const x = pts[i].x;
          const t = b * (x + c) * (x + c);
          if (t < eps) {
            invalid += 1;
            continue;
          }

          const yHat = A / t + d;
          if (!Number.isFinite(yHat)) continue;

          const e = yHat - pts[i].y;
          se += e * e;
          cnt += 1;
        }

        if (!cnt) return Infinity;
        const wrmse = Math.sqrt(se / cnt);
        const invalidFrac = invalid / Math.max(pts.length, 1);
        const r = -c;
        const asymPenalty = (maxGap > 0.18 * xSpan)
          ? (Math.abs(r - gapMid) / Math.max(xSpan, 0.001)) * ySpan * 0.32
          : 0;
        const invalidPenalty = invalidFrac * ySpan * 4.0;

        return wrmse + asymPenalty + invalidPenalty;
      }

      const rCenter = gapMid;
      const rSpan = Math.max(0.8 * xSpan, maxGap * 2);
      const steps = 96;
      const eps = Math.max(0.04 * xSpan, 0.04);

      for (let ri = 0; ri <= steps; ri++) {
        const r = rCenter - rSpan + (2 * rSpan) * (ri / steps);
        const c = -r;
        const b = 1;

        const lin = linear2FitFromFeature(pts, function(x) {
          const t = b * (x + c) * (x + c);
          if (t < eps) return NaN;
          return 1 / t;
        }, pointMode ? 2 : 4);
        if (!lin) continue;

        const A = lin.A;
        const d = lin.d;
        const err = hyper2WeightedError(A, b, c, d);
        if (!Number.isFinite(err)) continue;
        if (!hyper2Best || err < hyper2Best.err) {
          hyper2Best = { A: A, b: b, c: c, d: d, err: err };
        }
      }

      if (!hyper2Best) return;
      const A = hyper2Best.A, b = hyper2Best.b, c = hyper2Best.c, d = hyper2Best.d;
      pushCandidate(
        'hyperbel2',
        toFixedNum(A) + '/(' + toFixedNum(b) + '*(x' + signed(c) + ')^2)' + signed(d),
        toFixedNum(A) + '/{{' + toFixedNum(b) + '{{x' + signed(c) + '}}^2}}' + signed(d),
        function(x) {
          const t = b * (x + c) * (x + c);
          return t < 1e-9 ? NaN : A / t + d;
        },
        { A: A, b: b, c: c, d: d },
        4
      );
    })();

    // ── Sinus: coarse-to-fine two-pass, extended b range ────────────────────────────
    (function() {
      const sinFeat = function(x, b, c) { return Math.sin(b * (x + c)); };
      const sinBuild = function(best) {
        const A = best.A, b = best.b, c = best.c, d = best.d;
        return {
          expr: toFixedNum(A) + '*sin(' + toFixedNum(b) + '*(x' + signed(c) + '))' + signed(d),
          macroExpr: toFixedNum(A) + ' sin{{' + toFixedNum(b) + '{{x' + signed(c) + '}}}}' + signed(d),
          predict: function(x) { return A * Math.sin(b * (x + c)) + d; }
        };
      };
      const bMin = 0.15 / xSpan;
      const bMax = Math.max(22 / xSpan, 5);   // catch sin(2x), sin(3x), etc.
      const cRange = xSpan * 1.5;
      let coarseBest = null;
      for (let bi = 0; bi <= 44; bi++) {
        const b = bMin + (bMax - bMin) * (bi / 44);
        for (let ci = 0; ci <= 34; ci++) {
          const c = -cRange + 2 * cRange * (ci / 34);
          const lin = linear2FitFromFeature(pts, function(x) { return sinFeat(x, b, c); }, pointMode ? 2 : 4);
          if (!lin) continue;
          const A = lin.A, d = lin.d;
          const err = rmse(pts, function(x) { return A * sinFeat(x, b, c) + d; });
          if (!Number.isFinite(err)) continue;
          if (!coarseBest || err < coarseBest.err) coarseBest = { A: A, b: b, c: c, d: d, err: err };
        }
      }
      if (!coarseBest) return;
      // Fine pass: ±12 % around best b
      let fineBest = coarseBest;
      const bFineMin = coarseBest.b * 0.88, bFineMax = coarseBest.b * 1.12;
      for (let bi = 0; bi <= 30; bi++) {
        const b = bFineMin + (bFineMax - bFineMin) * (bi / 30);
        for (let ci = 0; ci <= 34; ci++) {
          const c = -cRange + 2 * cRange * (ci / 34);
          const lin = linear2FitFromFeature(pts, function(x) { return sinFeat(x, b, c); }, pointMode ? 2 : 4);
          if (!lin) continue;
          const A = lin.A, d = lin.d;
          const err = rmse(pts, function(x) { return A * sinFeat(x, b, c) + d; });
          if (!Number.isFinite(err)) continue;
          if (err < fineBest.err) fineBest = { A: A, b: b, c: c, d: d, err: err };
        }
      }
      const built = sinBuild(fineBest);
      pushCandidate('sinus', built.expr, built.macroExpr, built.predict,
        { A: fineBest.A, b: fineBest.b, c: fineBest.c, d: fineBest.d }, 4);
    })();

    if (!candidates.length) return null;

    // ── Structural shape analysis ────────────────────────────────────────────────────
    (function() {
      // 1. Direction reversals
      let dirChanges = 0;
      let lastDir = 0;
      const noiseThreshold = ySpan * 0.03;
      for (let i = 1; i < pts.length; i++) {
        const dy = pts[i].y - pts[i - 1].y;
        if (Math.abs(dy) < noiseThreshold) continue;
        const dir = dy > 0 ? 1 : -1;
        if (lastDir !== 0 && dir !== lastDir) dirChanges++;
        lastDir = dir;
      }
      const isOscillating = dirChanges >= 2;
      const isMonotone    = dirChanges === 0;

      // 2. Endpoint asymmetry: sqrt and exp are asymmetric, sin-arch is symmetric
      function yAt(xTarget) {
        if (pts[0].x >= xTarget) return pts[0].y;
        if (pts[pts.length - 1].x <= xTarget) return pts[pts.length - 1].y;
        for (let i = 1; i < pts.length; i++) {
          if (pts[i].x >= xTarget) {
            const t = (xTarget - pts[i - 1].x) / (pts[i].x - pts[i - 1].x);
            return pts[i - 1].y + t * (pts[i].y - pts[i - 1].y);
          }
        }
        return pts[pts.length - 1].y;
      }
      const yLeft  = yAt(xMin + xSpan * 0.05);
      const yRight = yAt(xMax - xSpan * 0.05);
      const endpointDiff = Math.abs(yLeft - yRight) / Math.max(ySpan, 0.001);
      const isSymmetric  = endpointDiff < 0.22;
      const isAsymmetric = endpointDiff > 0.35;

      // 3. Curvature sign from quadratic fit: concave (a<0) → sqrt; convex (a>0) → exp
      const isConcave = c2 && c2[2] < -1e-6;   // quadratic x² coeff
      const isConvex  = c2 && c2[2] >  1e-6;

      // 4. Near-linear detection: tiny curvature and little gain from higher-order fits.
      const linearCand = candidates.find(function(cand) { return cand.name === 'linear'; }) || null;
      const quadCand = candidates.find(function(cand) { return cand.name === 'quadratisch'; }) || null;
      const cubicCand = candidates.find(function(cand) { return cand.name === 'kubisch'; }) || null;
      const quarticCand = candidates.find(function(cand) { return cand.name === 'quartisch'; }) || null;
      const expCand = candidates.find(function(cand) { return cand.name === 'exponential'; }) || null;
      const logCand = candidates.find(function(cand) { return cand.name === 'logarithmus'; }) || null;
      const hyper2Cand = candidates.find(function(cand) { return cand.name === 'hyperbel2'; }) || null;
      const isNearBiquad = !!(quarticCand && c4 && (function() {
        const e4 = Math.abs(c4[4]) * Math.pow(xSpan, 4);
        const e3 = Math.abs(c4[3]) * Math.pow(xSpan, 3);
        const e2 = Math.abs(c4[2]) * xSpan * xSpan;
        const e1 = Math.abs(c4[1]) * xSpan;
        const evenRange = e4 + e2;
        const oddRange  = e3 + e1;
        return evenRange > 0.001 && oddRange / evenRange < 0.30;
      })());
      const curvatureNorm = c2 ? Math.abs(c2[2]) * xSpan * xSpan / Math.max(ySpan, 0.001) : Infinity;
      const quadGain = (linearCand && quadCand && Number.isFinite(linearCand.error) && Number.isFinite(quadCand.error))
        ? (linearCand.error - quadCand.error) / Math.max(linearCand.error, 1e-6)
        : 0;
      const cubicGain = (linearCand && cubicCand && Number.isFinite(linearCand.error) && Number.isFinite(cubicCand.error))
        ? (linearCand.error - cubicCand.error) / Math.max(linearCand.error, 1e-6)
        : 0;
      const hyperbelCand = candidates.find(function(cand) { return cand.name === 'hyperbel'; }) || null;
      const hyper2Gain = (linearCand && hyper2Cand && Number.isFinite(linearCand.error) && Number.isFinite(hyper2Cand.error))
        ? (linearCand.error - hyper2Cand.error) / Math.max(linearCand.error, 1e-6)
        : 0;
      const hyperbelGain = (linearCand && hyperbelCand && Number.isFinite(linearCand.error) && Number.isFinite(hyperbelCand.error))
        ? (linearCand.error - hyperbelCand.error) / Math.max(linearCand.error, 1e-6)
        : 0;
      const isNearlyLinear = !!linearCand && hyper2Gain < 0.15 && hyperbelGain < 0.15 && (
        curvatureNorm < 0.09 ||
        (curvatureNorm < 0.14 && quadGain < 0.14 && cubicGain < 0.18)
      );
      const isStronglyLinear = !!linearCand && dirChanges <= 1 && hyper2Gain < 0.20 && hyperbelGain < 0.20 && (
        curvatureNorm < 0.18 &&
        quadGain < 0.22 &&
        cubicGain < 0.26
      );

      // ── Apply adjustments ──────────────────────────────────────────────────
      if (!pointMode && isStronglyLinear) {
        // Hard preference: almost straight curve should stay linear.
        candidates.forEach(function(cand) {
          if (cand.name === 'linear') cand.score *= 0.28;
          if (cand.name === 'quadratisch') cand.score *= 1.7;
          if (cand.name === 'kubisch') cand.score *= 2.0;
          if (cand.name === 'quartisch') cand.score *= 2.35;
          if (cand.name === 'sinus' || cand.name === 'exponential' || cand.name === 'wurzel' || cand.name === 'logarithmus' || cand.name === 'hyperbel') cand.score *= 2.0;
          if (cand.name === 'hyperbel2') cand.score *= 2.2;
        });
        return;
      }

      if (!pointMode && isNearlyLinear) {
        // If slope change is small, prefer the simpler linear model.
        candidates.forEach(function(cand) {
          if (cand.name === 'linear') cand.score *= 0.5;
          if (cand.name === 'quadratisch') cand.score *= 1.45;
          if (cand.name === 'kubisch') cand.score *= 1.75;
          if (cand.name === 'quartisch') cand.score *= 1.95;
          if (cand.name === 'sinus' || cand.name === 'exponential' || cand.name === 'wurzel' || cand.name === 'logarithmus' || cand.name === 'hyperbel') cand.score *= 1.55;
          if (cand.name === 'hyperbel2') cand.score *= 1.65;
        });
      }

      if (isOscillating) {
        candidates.forEach(function(cand) {
          if (cand.name === 'wurzel' || cand.name === 'exponential' || cand.name === 'logarithmus') cand.score *= 4;
          if (cand.name === 'hyperbel2') cand.score *= 3.2;
        });
      }

      if (isMonotone && isAsymmetric) {
        // Not a symmetric arch → penalise sinus
        candidates.forEach(function(cand) {
          if (cand.name === 'sinus') cand.score *= 2.5;
        });

        if (isConcave) {
          // Concave + monotone + asymmetric → typical sqrt/log shape
          candidates.forEach(function(cand) {
            if (cand.name === 'wurzel')      cand.score *= 0.4;   // strong boost
            if (cand.name === 'logarithmus') cand.score *= 0.55;
            if (cand.name === 'exponential') cand.score *= 2.5;
            if (cand.name === 'linear')      cand.score *= 1.8;
            if (cand.name === 'kubisch')     cand.score *= 1.8;
            if (cand.name === 'quartisch')   cand.score *= 1.9;
          });
        } else if (isConvex) {
          // Convex + monotone + asymmetric → exp shape or hyperbola approaching a pole
          candidates.forEach(function(cand) {
            if (cand.name === 'exponential') cand.score *= 0.78;
            if (cand.name === 'wurzel')      cand.score *= 2.5;
            if (cand.name === 'logarithmus') cand.score *= 2.5;
            if (cand.name === 'hyperbel2')   cand.score *= 0.70;
            if (cand.name === 'hyperbel')    cand.score *= 0.60;
            if (cand.name === 'linear')      cand.score *= 1.70;
          });
        }
      }

      if (isMonotone && isSymmetric) {
        // Symmetric arch → sinus half-period
        candidates.forEach(function(cand) {
          if (cand.name === 'wurzel' || cand.name === 'exponential' || cand.name === 'logarithmus' || cand.name === 'hyperbel') cand.score *= 2.5;
          if (cand.name === 'sinus') cand.score *= 0.55;
          if (cand.name === 'quartisch') cand.score *= 0.85;
        });
      }

      // Wurzel domain coverage penalty
      const wurzelCand = candidates.find(function(cc) { return cc.name === 'wurzel'; });
      if (wurzelCand && wurzelCand.params) {
        const wc = wurzelCand.params.c;
        const invalid = pts.filter(function(p) { return (p.x + wc) < 0; }).length;
        const invalidFrac = invalid / pts.length;
        if (invalidFrac > 0.15) wurzelCand.score *= (1 + invalidFrac * 4);
      }

      // Explicit linear-vs-exponential preference:
      // if exp is only slightly better (or not better), keep linear as default.
      if (!pointMode && linearCand && expCand && Number.isFinite(linearCand.error) && Number.isFinite(expCand.error)) {
        const expGain = (linearCand.error - expCand.error) / Math.max(linearCand.error, 1e-6);
        if (expGain < 0.18) {
          linearCand.score *= 0.62;
          expCand.score *= 1.55;
        } else if (expGain < 0.28) {
          linearCand.score *= 0.78;
          expCand.score *= 1.22;
        }
      }

      // Linear-vs-logarithmus tie handling for weakly curved monotone traces.
      if (!pointMode && linearCand && logCand && Number.isFinite(linearCand.error) && Number.isFinite(logCand.error)) {
        const logGain = (linearCand.error - logCand.error) / Math.max(linearCand.error, 1e-6);
        if (logGain < 0.16) {
          linearCand.score *= 0.74;
          logCand.score *= 1.28;
        }
      }

      // Linear-vs-hyperbel2: protect the quadratic hyperbola when it fits clearly better.
      if (!pointMode && linearCand && hyper2Cand && Number.isFinite(linearCand.error) && Number.isFinite(hyper2Cand.error)) {
        if (hyper2Gain >= 0.12) {
          linearCand.score  *= 1.55;
          hyper2Cand.score  *= 0.68;
        } else if (hyper2Gain >= 0.06) {
          linearCand.score  *= 1.25;
          hyper2Cand.score  *= 0.80;
        }
      }

      // Linear-vs-hyperbel: protect the standard hyperbola when it fits clearly better.
      if (!pointMode && linearCand && hyperbelCand && Number.isFinite(linearCand.error) && Number.isFinite(hyperbelCand.error)) {
        if (hyperbelGain >= 0.12) {
          linearCand.score   *= 1.55;
          hyperbelCand.score *= 0.68;
        } else if (hyperbelGain >= 0.06) {
          linearCand.score   *= 1.25;
          hyperbelCand.score *= 0.80;
        }
      }

      // Tie-break toward linear if it is almost as good in absolute error.
      if (!pointMode && linearCand && Number.isFinite(linearCand.error)) {
        let bestErr = Infinity;
        for (let i = 0; i < candidates.length; i++) {
          if (Number.isFinite(candidates[i].error) && candidates[i].error < bestErr) bestErr = candidates[i].error;
        }
        if (Number.isFinite(bestErr) && bestErr > 0) {
          const relGap = (linearCand.error - bestErr) / bestErr;
          if (relGap <= 0.1) linearCand.score *= 0.58;
          else if (relGap <= 0.16) linearCand.score *= 0.78;
        }
      }

      // Prefer quartisch when its fit is near a biquadratic (odd-degree terms are small)
      if (quarticCand && isNearBiquad) {
        quarticCand.score *= 0.72;
      }
    })();

    candidates.sort(function(a, b) { return a.score - b.score; });
    const minScore = candidates[0].score;
    let totalWeight = 0;
    candidates.forEach(function(candidate) {
      const weight = Math.exp(-6 * Math.max(0, candidate.score - minScore));
      candidate.weight = weight;
      totalWeight += weight;
    });
    candidates.forEach(function(candidate) {
      candidate.probability = totalWeight > 0 ? (candidate.weight / totalWeight) * 100 : 0;
    });
    const best = candidates[0];
    const confPct = Math.round(best.probability || 0);
    const macro = '@Schar(`f;x;' + best.macroExpr + ';' + boardId + ';term=1;#00ffff`)';
    return { best: best, candidates: candidates, top: candidates.slice(0, 3), confidence: confPct, macro: macro };
  }

  function setAnalyzePanel(board, state, text) {
    if (!state) return;
    let panel = state.analyzePanel;
    if (!panel) {
      panel = document.getElementById('lia-analyze-panel-' + (state.boardId || ''));
      if (panel) state.analyzePanel = panel;
    }
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'lia-plot-analyze-panel';
      panel.id = 'lia-analyze-panel-' + (state.boardId || '');
      panel.dataset.open = '0';
      const host = (board && board.containerObj) ? board.containerObj : (document.body || document.documentElement);
      host.appendChild(panel);
      state.analyzePanel = panel;
    }

    const hasText = !!(text);
    panel.style.display = hasText ? 'inline-block' : 'none';
    panel.dataset.open = hasText ? '1' : '0';
    panel.textContent = text || '';
    panel.style.minWidth = '0';
    panel.style.width = 'auto';
    panel.style.maxWidth = 'calc(100% - 16px)';
    panel.style.minHeight = '0';
    panel.style.height = 'auto';
    panel.style.maxHeight = 'none';
    panel.style.padding = '2px 6px';
    panel.style.margin = '0';
    panel.style.fontSize = '10px';
    panel.style.lineHeight = '1.1';
    panel.style.whiteSpace = 'normal';

    // Anchor panel to the board top-right if board is available
    if (hasText && board && board.containerObj) {
      try {
        if (panel.parentNode !== board.containerObj) {
          board.containerObj.appendChild(panel);
        }
        panel.style.position = 'absolute';
        panel.style.top = '8px';
        panel.style.right = '8px';
        panel.style.bottom = '';
        panel.style.left = '';
      } catch (e) {}
    }
  }

  function updateUi(boardId) {
    const board = window.__boards && window.__boards[boardId];
    const state = getState(boardId);
    if (!board || !state || !state.canvas) return;

    const tone = resolveToolTone(board);
    const activeBg = resolveActiveBgColor();
    const drawActive = state.tool === 'draw';
    const eraseActive = state.tool === 'erase';
    const analyzeActive = state.tool === 'analyze';
    const regressionActive = state.tool === 'regression';
    const showDrawButtons = !!state.showDrawButtons;

    // Update Undo/Redo button states
    const canUndo = state.history && state.historyIndex > 0;
    const canRedo = state.history && state.historyIndex < state.history.length - 1;
    
    if (state.undoButton) {
      state.undoButton.disabled = !canUndo;
      state.undoButton.style.opacity = canUndo ? '1' : '0.4';
      state.undoButton.style.cursor = canUndo ? 'pointer' : 'not-allowed';
      state.undoButton.title = canUndo ? 'Rückgängig (Ctrl+Z)' : 'Nichts rückgängig zu machen';
      state.undoButton.style.display = showDrawButtons ? 'grid' : 'none';
      state.undoButton.style.color = tone;
      state.undoButton.style.background = 'transparent';
      state.undoButton.style.borderColor = tone;
    }
    
    if (state.redoButton) {
      state.redoButton.disabled = !canRedo;
      state.redoButton.style.opacity = canRedo ? '1' : '0.4';
      state.redoButton.style.cursor = canRedo ? 'pointer' : 'not-allowed';
      state.redoButton.title = canRedo ? 'Wiederherstellen (Ctrl+Y)' : 'Nichts wiederherzustellen';
      state.redoButton.style.display = showDrawButtons ? 'grid' : 'none';
      state.redoButton.style.color = tone;
      state.redoButton.style.background = 'transparent';
      state.redoButton.style.borderColor = tone;
    }

    if (state.drawButton) {
      state.drawButton.style.display = showDrawButtons ? 'grid' : 'none';
      state.drawButton.style.color = tone;
      state.drawButton.style.background = drawActive ? activeBg : 'transparent';
      state.drawButton.style.borderColor = tone;
      state.drawButton.style.borderWidth = '2px';
      state.drawButton.style.borderStyle = 'solid';
      state.drawButton.style.outline = 'none';
      state.drawButton.style.outlineOffset = '0';
      state.drawButton.dataset.active = drawActive ? '1' : '0';
      state.drawButton.title = drawActive ? 'Freihandzeichnen aktiv' : 'Freihandzeichnen aktivieren';
    }

    if (state.eraseButton) {
      state.eraseButton.style.display = showDrawButtons ? 'grid' : 'none';
      state.eraseButton.style.color = tone;
      state.eraseButton.style.background = eraseActive ? activeBg : 'transparent';
      state.eraseButton.style.borderColor = tone;
      state.eraseButton.style.borderWidth = '2px';
      state.eraseButton.style.borderStyle = 'solid';
      state.eraseButton.style.outline = 'none';
      state.eraseButton.style.outlineOffset = '0';
      state.eraseButton.dataset.active = eraseActive ? '1' : '0';
      state.eraseButton.title = eraseActive ? 'Radierer aktiv' : 'Radierer aktivieren';
    }

    if (state.analyzeButton) {
      state.analyzeButton.style.display = 'none';
      state.analyzeButton.style.color = tone;
      state.analyzeButton.style.background = analyzeActive ? activeBg : 'transparent';
      state.analyzeButton.style.borderColor = tone;
      state.analyzeButton.style.borderWidth = '2px';
      state.analyzeButton.style.borderStyle = 'solid';
      state.analyzeButton.style.outline = 'none';
      state.analyzeButton.style.outlineOffset = '0';
      state.analyzeButton.dataset.active = analyzeActive ? '1' : '0';
      state.analyzeButton.title = analyzeActive ? 'Funktionsanalyse aktiv' : 'Funktionsanalyse aktivieren';
    }

    if (state.regressionButton) {
      state.regressionButton.style.display = 'grid';
      state.regressionButton.style.color = tone;
      state.regressionButton.style.background = regressionActive ? activeBg : 'transparent';
      state.regressionButton.style.borderColor = tone;
      state.regressionButton.style.borderWidth = '2px';
      state.regressionButton.style.borderStyle = 'solid';
      state.regressionButton.style.outline = 'none';
      state.regressionButton.style.outlineOffset = '0';
      const regButtonActive = !!state.regressionMenuOpen || regressionActive;
      state.regressionButton.style.background = regButtonActive ? activeBg : 'transparent';
      state.regressionButton.dataset.active = regButtonActive ? '1' : '0';
      state.regressionButton.title = regButtonActive ? 'Regressionspunkte auswaehlen' : 'Regression aus Punkten';
    }

    if (state.regressionMenu) {
      const regOpen = !!state.regressionMenuOpen;
      state.regressionMenu.dataset.open = regOpen ? '1' : '0';
      state.regressionMenu.style.display = regOpen ? 'grid' : 'none';

      const regMode = state.regressionMode || '';
      state.regressionMenu.querySelectorAll('.lia-plot-reg-item').forEach(function(item) {
        const itemAction = String(item.getAttribute('data-action') || '');
        const isToggle = itemAction === 'recognize' || itemAction === 'select-points';
        const isAction = itemAction === 'compute' || itemAction === 'clear';
        const isActiveToggle = isToggle && regMode === itemAction;
        const actionEnabled = !isAction || regMode === 'select-points';
        const isActive = !isToggle || isActiveToggle;
        item.style.background = isActive ? activeBg : 'transparent';
        item.style.color = isActive ? '#fff' : tone;
        item.style.borderColor = isActive ? 'rgba(255,255,255,.58)' : tone;
        item.style.fontWeight = '600';
        item.style.borderRadius = '999px';
        item.style.padding = '4px 10px';
        item.style.lineHeight = '1.2';
        item.style.opacity = actionEnabled ? '1' : '0.35';
        item.style.cursor = actionEnabled ? 'pointer' : 'not-allowed';
        item.disabled = !actionEnabled;
      });
    }

    if (state.drawColorMenu) {
      state.drawColorMenu.style.display = showDrawButtons && state.drawColorMenuOpen ? 'grid' : 'none';
    }

    // Hard-set SVG stroke color to avoid external CSS overriding currentColor.
    [state.drawButton, state.eraseButton, state.analyzeButton, state.undoButton, state.redoButton, state.regressionButton].forEach(function(btn) {
      if (!btn || !btn.querySelectorAll) return;
      btn.querySelectorAll('.ico-stroke').forEach(function(path) {
        path.style.stroke = tone;
        path.style.fill = 'none';
        path.style.strokeWidth = '1.6';
      });
    });

    if (state.drawButton && state.drawButton.querySelector) {
      const dot = state.drawButton.querySelector('.ico-color-dot');
      if (dot) {
        const selectedColor = String(state.drawColor || state.color || '#ff0000');
        dot.style.fill = selectedColor;
        dot.style.stroke = tone;
        dot.style.strokeWidth = '1.2';
      }
    }

    if (state.analyzePanel) {
      const panelFill = tone === '#fff' ? 'rgba(0,0,0,.82)' : 'rgba(255,255,255,.94)';
      state.analyzePanel.style.color = tone;
      state.analyzePanel.style.background = panelFill;
      state.analyzePanel.style.borderColor = tone === '#fff' ? 'rgba(255,255,255,.62)' : 'rgba(0,0,0,.46)';
      state.analyzePanel.style.borderStyle = 'solid';
      state.analyzePanel.style.borderWidth = '1px';
      state.analyzePanel.style.boxShadow = '0 6px 18px rgba(0,0,0,.18)';
      state.analyzePanel.style.padding = '2px 6px';
      state.analyzePanel.style.fontSize = '10px';
      state.analyzePanel.style.lineHeight = '1.1';
    }

    state.canvas.dataset.active = state.tool ? '1' : '0';
    state.canvas.style.pointerEvents = state.tool ? 'auto' : 'none';
    state.canvas.style.cursor = drawActive
      ? 'crosshair'
      : (eraseActive
          ? 'cell'
          : (analyzeActive
              ? 'pointer'
              : (regressionActive ? 'crosshair' : 'default')));
    state.canvas.style.zIndex = state.tool ? '47' : '46';
  }

  function bindCanvas(boardId) {
    const board = window.__boards && window.__boards[boardId];
    const state = getState(boardId);
    if (!board || !state || !state.canvas || state.canvas.__liaPlotDrawBound) return;
    state.canvas.__liaPlotDrawBound = true;

    const canvas = state.canvas;

    function relayoutAnalyzedParamPanels() {
      if (!Array.isArray(state.analyzedParamPanels)) state.analyzedParamPanels = [];
      state.analyzedParamPanels = state.analyzedParamPanels.filter(function(panel) {
        return !!(panel && panel.parentNode === board.containerObj);
      });

      var panelTop = 10;
      state.analyzedParamPanels.forEach(function(panel) {
        panel.style.position = 'absolute';
        panel.style.left = '10px';
        panel.style.top = panelTop + 'px';
        panelTop += (panel.offsetHeight || 56) + 8;
      });
    }

    function removeParamPanelsForGraph(graph) {
      if (!Array.isArray(state.analyzedParamPanels) || !graph) return;
      state.analyzedParamPanels = state.analyzedParamPanels.filter(function(panel) {
        const isTarget = !!(panel && panel.__liaGraphRef === graph);
        if (isTarget) {
          try { panel.parentNode && panel.parentNode.removeChild(panel); } catch (e) {}
        }
        return !isTarget;
      });
      if (state.analyzedParamPanel && state.analyzedParamPanel.__liaGraphRef === graph) {
        state.analyzedParamPanel = state.analyzedParamPanels.length
          ? state.analyzedParamPanels[state.analyzedParamPanels.length - 1]
          : null;
      }
      relayoutAnalyzedParamPanels();
    }

    function removeAnalyzedGraph(targetGraph) {
      const graph = targetGraph || state.analyzedGraph;
      if (!graph) return;
      const modelId = String((graph && graph.__liaModelId) || '');
      try { board.removeObject(graph); } catch (e) {}
      removeParamPanelsForGraph(graph);

      if (Array.isArray(state.analyzedGraphs)) {
        state.analyzedGraphs = state.analyzedGraphs.filter(function(g) { return g && g !== graph; });
      }
      if (state.analyzedGraph === graph) {
        state.analyzedGraph = (Array.isArray(state.analyzedGraphs) && state.analyzedGraphs.length)
          ? state.analyzedGraphs[state.analyzedGraphs.length - 1]
          : null;
      }
      if (modelId && Array.isArray(state.analyzedModelStates)) {
        state.analyzedModelStates = state.analyzedModelStates.filter(function(model) {
          return String((model && model.id) || '') !== modelId;
        });
      }
    }

    function stopPanelEventPropagation(el) {
      if (!el || !el.addEventListener) return;
      ['pointerdown','pointerup','pointercancel','mousedown','mouseup','touchstart','touchend','click'].forEach(function(t) {
        el.addEventListener(t, function(e) { e.stopPropagation(); }, true);
      });
    }

    function predictFromModel(name, params, fallbackPredict) {
      if (name === 'linear')      return function(x) { return params.m * x + params.n; };
      if (name === 'quadratisch') return function(x) { return params.A * (x + params.c) * (x + params.c) + params.d; };
      if (name === 'kubisch')     return function(x) { return ((params.a * x + params.b) * x + params.c) * x + params.d; };
      if (name === 'quartisch')   return function(x) { return ((((params.a * x + params.b) * x + params.c) * x + params.d) * x + params.f); };
      if (name === 'exponential') return function(x) { return params.A * Math.exp(params.b * (x + params.c)) + params.d; };
      if (name === 'logarithmus') return function(x) { var t = x + params.c; return t <= 0 ? NaN : params.A * Math.log(t) + params.d; };
      if (name === 'wurzel')      return function(x) { var bw = (params.b !== undefined ? params.b : 1); var t = bw * (x + params.c); return t < 0 ? NaN : params.A * Math.sqrt(t) + params.d; };
      if (name === 'hyperbel')    return function(x) { var bh = (params.b !== undefined ? params.b : 1); var th = bh * (x + params.c); return Math.abs(th) < 1e-9 ? NaN : params.A / th + params.d; };
      if (name === 'hyperbel2')   return function(x) { var bh2 = (params.b !== undefined ? params.b : 1); var th2 = bh2 * (x + params.c) * (x + params.c); return Math.abs(th2) < 1e-9 ? NaN : params.A / th2 + params.d; };
      if (name === 'sinus')       return function(x) { return params.A * Math.sin(params.b * (x + params.c)) + params.d; };
      return fallbackPredict;
    }

    function makePersistableAnalysisResult(result) {
      if (!result || !Array.isArray(result.candidates) || !result.candidates.length) return null;
      const candidates = result.candidates.map(function(candidate) {
        return {
          name: String((candidate && candidate.name) || ''),
          probability: Number((candidate && candidate.probability) || 0),
          expr: String((candidate && candidate.expr) || ''),
          params: Object.assign({}, (candidate && candidate.params) || {})
        };
      });
      const bestIndex = Math.max(0, Math.min(candidates.length - 1, (result.candidates || []).indexOf(result.best)));
      return { candidates: candidates, bestIndex: bestIndex };
    }

    function restorePersistedAnalysisResult(data) {
      if (!data || !Array.isArray(data.candidates) || !data.candidates.length) return null;
      const candidates = data.candidates.map(function(candidate) {
        return {
          name: String((candidate && candidate.name) || ''),
          probability: Number((candidate && candidate.probability) || 0),
          expr: String((candidate && candidate.expr) || ''),
          params: Object.assign({}, (candidate && candidate.params) || {})
        };
      });
      const bestIndex = Math.max(0, Math.min(candidates.length - 1, Number(data.bestIndex) || 0));
      return { candidates: candidates, best: candidates[bestIndex] };
    }

    function formatModelExpr(name, params, fallbackExpr) {
      if (name === 'linear')      return toFixedNum(params.m) + '*x' + signed(params.n);
      if (name === 'quadratisch') return toFixedNum(params.A) + '*(x' + signed(params.c) + ')^2' + signed(params.d);
      if (name === 'kubisch')     return toFixedNum(params.a) + '*x^3' + signed(params.b) + '*x^2' + signed(params.c) + '*x' + signed(params.d);
      if (name === 'quartisch')   return toFixedNum(params.a) + '*x^4' + signed(params.b) + '*x^3' + signed(params.c) + '*x^2' + signed(params.d) + '*x' + signed(params.f);
      if (name === 'exponential') return toFixedNum(params.A) + '*exp(' + toFixedNum(params.b) + '*(x' + signed(params.c) + '))' + signed(params.d);
      if (name === 'logarithmus') return toFixedNum(params.A) + '*ln(x' + signed(params.c) + ')' + signed(params.d);
      if (name === 'wurzel') {
        var bw = params.b;
        var inner = (bw === undefined || Math.abs(bw - 1) < 0.02)
          ? ('x' + signed(params.c))
          : (toFixedNum(bw) + '*(x' + signed(params.c) + ')');
        return toFixedNum(params.A) + '*sqrt(' + inner + ')' + signed(params.d);
      }
      if (name === 'hyperbel') {
        var bh = params.b;
        var innerH = (bh === undefined || Math.abs(bh - 1) < 0.02)
          ? ('x' + signed(params.c))
          : (toFixedNum(bh) + '*(x' + signed(params.c) + ')');
        return toFixedNum(params.A) + '/(' + innerH + ')' + signed(params.d);
      }
      if (name === 'hyperbel2') {
        var bh2 = params.b;
        var innerH2 = (bh2 === undefined || Math.abs(bh2 - 1) < 0.02)
          ? ('(x' + signed(params.c) + ')^2')
          : (toFixedNum(bh2) + '*(x' + signed(params.c) + ')^2');
        return toFixedNum(params.A) + '/(' + innerH2 + ')' + signed(params.d);
      }
      if (name === 'sinus')       return toFixedNum(params.A) + '*sin(' + toFixedNum(params.b) + '*(x' + signed(params.c) + '))' + signed(params.d);
      return fallbackExpr || '';
    }

    function modelDisplayName(name) {
      if (name === 'linear') return 'Lineare Funktion';
      if (name === 'quadratisch') return 'Quadratische Funktion';
      if (name === 'kubisch') return 'Kubische Funktion';
      if (name === 'quartisch') return 'Polynomfunktion 4. Grades';
      if (name === 'wurzel') return 'Wurzelfunktion';
      if (name === 'hyperbel') return 'Hyperbelfunktion';
      if (name === 'hyperbel2') return 'Quadratische Hyperbelfunktion';
      if (name === 'sinus') return 'Sinusfunktion';
      if (name === 'exponential') return 'Exponentialfunktion';
      if (name === 'logarithmus') return 'Logarithmusfunktion';
      return String(name || 'Funktion');
    }

    function toTexModelExpr(expr) {
      const src = String(expr || '');

      function renderFn(name, arg) {
        const texArg = toTexModelExpr(arg);
        if (name === 'sqrt') return '\\sqrt{' + texArg + '}';
        if (name === 'exp') return 'e^{' + texArg + '}';
        if (name === 'sin') return '\\sin{' + texArg + '}';
        if (name === 'ln') return '\\ln{' + texArg + '}';
        if (name === 'log') return '\\log{' + texArg + '}';
        return name + '(' + texArg + ')';
      }

      let out = '';
      let i = 0;
      while (i < src.length) {
        const names = ['sqrt', 'exp', 'sin', 'ln', 'log'];
        let matched = null;
        for (let ni = 0; ni < names.length; ni++) {
          const n = names[ni];
          if (src.slice(i, i + n.length).toLowerCase() === n) {
            matched = n;
            break;
          }
        }
        if (matched) {
          let j = i + matched.length;
          while (j < src.length && /\s/.test(src[j])) j += 1;
          if (src[j] === '(') {
            let k = j + 1;
            let depth = 1;
            while (k < src.length && depth > 0) {
              if (src[k] === '(') depth += 1;
              else if (src[k] === ')') depth -= 1;
              k += 1;
            }
            if (depth === 0) {
              out += renderFn(matched, src.slice(j + 1, k - 1));
              i = k;
              continue;
            }
          }
        }
        out += src[i];
        i += 1;
      }

      return out
        .replace(/\^([0-9]+)/g, '^{$1}')
        .replace(/\*/g, ' \\cdot ')
        .replace(/(\d)\.(\d)/g, '$1,$2')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function typesetOverlayMath(node) {
      if (!node) return;
      let MJ = null;
      try { if (window.MathJax) MJ = window.MathJax; } catch (e) {}
      if (!MJ) {
        try { if (window.parent && window.parent.MathJax) MJ = window.parent.MathJax; } catch (e) {}
      }
      if (!MJ || typeof MJ.typesetPromise !== 'function') return;

      const runTypeset = function() {
        try {
          if (typeof MJ.typesetClear === 'function') {
            try { MJ.typesetClear([node]); } catch (e) {}
          }
          MJ.typesetPromise([node]).catch(function(){});
        } catch (e) {}
      };
      runTypeset();
      try {
        if (typeof requestAnimationFrame === 'function') {
          requestAnimationFrame(function() { runTypeset(); });
        }
      } catch (e) {}
    }

    function resolveOverlayFontFamily(boardRef) {
      try {
        if (boardRef && boardRef.containerObj) {
          const boardFont = getComputedStyle(boardRef.containerObj).fontFamily || '';
          if (boardFont) return boardFont;
        }
      } catch (e) {}

      try {
        const doc = (window.parent && window.parent.document) ? window.parent.document : document;
        const win = (window.parent && window.parent.getComputedStyle) ? window.parent : window;
        const root = doc.body || doc.documentElement;
        const uiFont = root ? win.getComputedStyle(root).fontFamily || '' : '';
        if (uiFont) return uiFont;
      } catch (e) {}

      return 'inherit';
    }

    function buildAnalysisOverlay(result, onSelectionChange, drawColor) {
      const accentColor = String(drawColor || '#ff4400');
      const panel = document.createElement('div');
      panel.className = 'lia-schar-panel';
      panel.style.zIndex = '60';
      panel.style.pointerEvents = 'auto';
      panel.style.minWidth = '190px';
      panel.style.maxWidth = 'none';
      panel.style.padding = '8px 10px';
      panel.style.paddingTop = '8px';
      panel.style.borderRadius = '12px';
      panel.style.boxSizing = 'border-box';
      panel.style.boxShadow = '0 6px 18px rgba(0,0,0,.18)';
      panel.style.position = 'absolute';
      panel.style.overflow = 'visible';
      const tone = neutralColor();
      const fill = tone === '#fff' ? 'rgba(0,0,0,.82)' : 'rgba(255,255,255,.94)';
      const uiFontFamily = resolveOverlayFontFamily(board);
      panel.style.color = tone;
      panel.style.background = fill;
      panel.style.borderColor = tone === '#fff' ? 'rgba(255,255,255,.25)' : 'rgba(0,0,0,.16)';
      panel.style.borderStyle = 'solid';
      panel.style.borderWidth = '1px';
      panel.style.fontFamily = uiFontFamily;
      // Bubble-Phase: Events erreichen zuerst Kinder, dann wird Bubbling zu JSXGraph gestoppt
      var _panelEvts = ['pointerdown','pointermove','pointerup','mousedown','mousemove','mouseup','touchstart','touchmove','touchend','click'];
      _panelEvts.forEach(function(t) {
        panel.addEventListener(t, function(e) { e.stopPropagation(); }, false);
      });

      // ---- Minimier-Button × (wie bei Scharen) ----
      const minBtn = document.createElement('button');
      minBtn.type = 'button';
      minBtn.textContent = '\u00d7';
      minBtn.setAttribute('aria-label', 'Overlay minimieren');
      minBtn.style.position = 'absolute';
      minBtn.style.top = '5px';
      minBtn.style.right = '6px';
      minBtn.style.width = '18px';
      minBtn.style.height = '18px';
      minBtn.style.padding = '0';
      minBtn.style.border = 'none';
      minBtn.style.background = 'transparent';
      minBtn.style.color = accentColor;
      minBtn.style.fontSize = '18px';
      minBtn.style.fontWeight = '900';
      minBtn.style.lineHeight = '18px';
      minBtn.style.cursor = 'pointer';
      minBtn.style.zIndex = '6';
      minBtn.style.pointerEvents = 'auto';
      minBtn.style.userSelect = 'none';
      panel.appendChild(minBtn);

      // ---- Mini-Wrap (sichtbar im minimierten Zustand) ----
      const miniWrap = document.createElement('div');
      miniWrap.style.display = 'none';
      miniWrap.style.alignItems = 'center';
      miniWrap.style.justifyContent = 'center';
      miniWrap.style.cursor = 'pointer';
      miniWrap.style.minHeight = '16px';
      miniWrap.style.pointerEvents = 'auto';
      const miniStrip = document.createElement('div');
      miniStrip.style.width = '28px';
      miniStrip.style.height = '4px';
      miniStrip.style.borderRadius = '99px';
      miniStrip.style.background = accentColor;
      miniStrip.style.cursor = 'pointer';
      miniWrap.appendChild(miniStrip);
      panel.appendChild(miniWrap);

      // ---- L-förmige Skalierungsecke (wie bei Scharen) ----
      const resizeHandle = document.createElement('div');
      resizeHandle.style.position = 'absolute';
      resizeHandle.style.right = '0';
      resizeHandle.style.bottom = '0';
      resizeHandle.style.width = '18px';
      resizeHandle.style.height = '18px';
      resizeHandle.style.cursor = 'nwse-resize';
      resizeHandle.style.borderRight = '2px solid ' + accentColor;
      resizeHandle.style.borderBottom = '2px solid ' + accentColor;
      resizeHandle.style.borderBottomRightRadius = '10px';
      resizeHandle.style.boxSizing = 'border-box';
      resizeHandle.style.zIndex = '5';
      resizeHandle.style.pointerEvents = 'auto';
      resizeHandle.style.userSelect = 'none';
      resizeHandle.style.touchAction = 'none';
      panel.appendChild(resizeHandle);

      // ---- Inhalts-Container ----
      const content = document.createElement('div');
      content.style.paddingRight = '22px';
      panel.appendChild(content);

      const selectWrap = document.createElement('div');
      selectWrap.style.marginBottom = '8px';
      const select = document.createElement('select');
      select.style.width = '100%';
      select.style.boxSizing = 'border-box';
      select.style.borderRadius = '8px';
      select.style.padding = '6px 8px';
      select.style.border = '1px solid currentColor';
      select.style.background = fill;
      select.style.color = tone;
      select.style.fontFamily = uiFontFamily;
      (result.candidates || []).forEach(function(candidate, index) {
        const option = document.createElement('option');
        option.value = String(index);
        option.textContent = modelDisplayName(candidate.name) + ' (' + Math.round(candidate.probability || 0) + '%)';
        if (candidate === result.best) option.selected = true;
        select.appendChild(option);
      });
      stopPanelEventPropagation(select);
      selectWrap.appendChild(select);
      content.appendChild(selectWrap);

      const controlsHost = document.createElement('div');
      content.appendChild(controlsHost);

      const termBox = document.createElement('div');
      termBox.className = 'lia-schar-term';
      termBox.style.display = 'block';
      termBox.style.visibility = 'visible';
      termBox.style.opacity = '1';
      termBox.style.marginTop = '8px';
      content.appendChild(termBox);

      let currentCandidateIndex = -1;
      let currentValues = {};
      let termRenderSeq = 0;
      let termPendingExpr = '';
      let termRenderTimer = null;

      function getOverlayMathJax() {
        let MJ = null;
        try { if (window.MathJax) MJ = window.MathJax; } catch (e) {}
        if (!MJ) {
          try { if (window.parent && window.parent.MathJax) MJ = window.parent.MathJax; } catch (e) {}
        }
        return MJ;
      }

      function renderTermTexStable(texExpr) {
        const seq = ++termRenderSeq;
        const MJ = getOverlayMathJax();
        if (!MJ || typeof MJ.typesetPromise !== 'function') {
          termBox.textContent = texExpr;
          return;
        }

        const staging = document.createElement('div');
        staging.style.position = 'absolute';
        staging.style.left = '-100000px';
        staging.style.top = '-100000px';
        staging.style.visibility = 'hidden';
        staging.style.pointerEvents = 'none';
        staging.textContent = texExpr;
        panel.appendChild(staging);

        const cleanup = function() {
          try { staging.parentNode && staging.parentNode.removeChild(staging); } catch (e) {}
        };

        try {
          if (typeof MJ.typesetClear === 'function') {
            try { MJ.typesetClear([staging]); } catch (e) {}
          }
          MJ.typesetPromise([staging]).then(function() {
            if (seq !== termRenderSeq) {
              cleanup();
              return;
            }
            termBox.innerHTML = staging.innerHTML;
            cleanup();
          }).catch(function() {
            if (seq === termRenderSeq) {
              termBox.textContent = texExpr;
            }
            cleanup();
          });
        } catch (e) {
          cleanup();
          termBox.textContent = texExpr;
        }
      }

      function renderTerm(candidate, values, lightweight) {
        const texExpr = '\\(f(x)=' + toTexModelExpr(formatModelExpr(candidate.name, values, candidate.expr)) + '\\)';
        if (!lightweight) {
          if (termRenderTimer) {
            try { clearTimeout(termRenderTimer); } catch (e) {}
            termRenderTimer = null;
          }
          termPendingExpr = texExpr;
          renderTermTexStable(texExpr);
          return;
        }

        termPendingExpr = texExpr;
        if (termRenderTimer) return;
        termRenderTimer = setTimeout(function() {
          termRenderTimer = null;
          renderTermTexStable(termPendingExpr);
        }, 80);
      }

      function renderControls(candidateIndex, params) {
        const candidate = (result.candidates || [])[candidateIndex] || result.best;
        const values = params || Object.assign({}, candidate.params || {});
        currentCandidateIndex = candidateIndex;
        currentValues = Object.assign({}, values);
        renderTerm(candidate, values, false);
        controlsHost.innerHTML = '';
        Object.keys(values).forEach(function(k) {
          const v = values[k];
          const row = document.createElement('div');
          row.className = 'lia-schar-head';
          row.style.display = 'flex';
          row.style.alignItems = 'center';
          row.style.gap = '8px';
          row.style.marginBottom = '6px';
          const lbl = document.createElement('span');
          lbl.className = 'lia-schar-label';
          lbl.innerHTML = '\\(' + k + '\\):';
          lbl.style.minWidth = '22px';
          lbl.style.display = 'inline-flex';
          lbl.style.alignItems = 'center';
          lbl.style.whiteSpace = 'nowrap';
          lbl.style.marginRight = '8px';
          typesetOverlayMath(lbl);
          const sl = document.createElement('input');
          sl.type = 'range';
          sl.className = 'lia-schar-slider';
          sl.setAttribute('data-param-key', k);
          const analysisStep = 0.05;
          const analysisSpan = 12;
          const analysisPad = 1.0;
          const absMax = Math.max(10, Math.ceil(Math.abs(Number(v || 0))) + 2);

          const snapAnalysis = function(val) {
            return Math.round(Number(val || 0) / analysisStep) * analysisStep;
          };

          const setAnalysisWindow = function(center) {
            const half = analysisSpan / 2;
            let min = snapAnalysis(Number(center || 0) - half);
            let max = snapAnalysis(Number(center || 0) + half);

            if (min < -absMax) {
              min = -absMax;
              max = snapAnalysis(min + analysisSpan);
            }
            if (max > absMax) {
              max = absMax;
              min = snapAnalysis(max - analysisSpan);
            }

            sl.min = String(min);
            sl.max = String(max);
          };

          const maybeShiftAnalysisWindow = function(value) {
            const min = Number(sl.min);
            const max = Number(sl.max);
            const current = Number(value);
            if (!Number.isFinite(min) || !Number.isFinite(max) || !Number.isFinite(current)) {
              setAnalysisWindow(current);
              return;
            }
            if (current <= min + analysisPad || current >= max - analysisPad) {
              setAnalysisWindow(current);
            }
          };

          setAnalysisWindow(v);
          sl.step = '0.05';
          sl.value = String(v);
          sl.style.accentColor = accentColor;
          sl.style.display = 'block';
          sl.style.flex = '0 0 220px';
          sl.style.width = '220px';
          sl.style.minWidth = '220px';
          sl.style.maxWidth = '220px';
          sl.style.margin = '0';
          sl.style.touchAction = 'pan-x';
          stopPanelEventPropagation(sl);

          let pendingValue = Number(v);
          let pendingRaf = 0;

          const flushSliderUpdate = function(lightweight) {
            const nextValues = Object.assign({}, values, {});
            nextValues[k] = Number(pendingValue);
            currentValues = Object.assign({}, nextValues);
            renderTerm(candidate, nextValues, !!lightweight);
            onSelectionChange(candidateIndex, nextValues, !!lightweight);
            values[k] = nextValues[k];
          };

          sl.addEventListener('input', function() {
            pendingValue = Number(sl.value);
            maybeShiftAnalysisWindow(pendingValue);
            if (pendingRaf) return;
            pendingRaf = requestAnimationFrame(function() {
              pendingRaf = 0;
              flushSliderUpdate(true);
            });
          });

          sl.addEventListener('change', function() {
            pendingValue = Number(sl.value);
            if (pendingRaf) {
              try { cancelAnimationFrame(pendingRaf); } catch (e) {}
              pendingRaf = 0;
            }
            flushSliderUpdate(false);
          });

          row.appendChild(lbl);
          row.appendChild(sl);
          controlsHost.appendChild(row);
        });
      }

      select.addEventListener('change', function() {
        const idx = Math.max(0, Math.min((result.candidates || []).length - 1, Number(select.value) || 0));
        renderControls(idx);
        const chosen = (result.candidates || [])[idx] || result.best;
        onSelectionChange(idx, Object.assign({}, chosen.params || {}));
      });

      panel.__liaSyncAnalysisParams = function(candidateIndex, params, lightweight) {
        const idx = Math.max(0, Math.min((result.candidates || []).length - 1, Number(candidateIndex) || 0));
        const candidate = (result.candidates || [])[idx] || result.best;
        const nextValues = Object.assign({}, params || {});

        if (!lightweight || idx !== currentCandidateIndex) {
          select.value = String(idx);
          renderControls(idx, nextValues);
          return;
        }

        currentValues = Object.assign({}, nextValues);
        renderTerm(candidate, nextValues, true);
        const sliders = controlsHost.querySelectorAll('input[type="range"][data-param-key]');
        sliders.forEach(function(sl) {
          const key = sl.getAttribute('data-param-key') || '';
          if (!Object.prototype.hasOwnProperty.call(nextValues, key)) return;
          if (lightweight) {
            const isActive = (document.activeElement === sl) || !!(sl.matches && sl.matches(':active'));
            if (isActive) return;
          }
          sl.value = String(nextValues[key]);
        });
      };

      // ---- Minimieren / Wiederherstellen ----
      function setMinimized(val) {
        resizeHandle.style.display = val ? 'none' : 'block';
        content.style.display = val ? 'none' : 'block';
        minBtn.style.display = val ? 'none' : 'block';
        miniWrap.style.display = val ? 'inline-flex' : 'none';
        if (val) {
          panel.style.padding = '4px';
          panel.style.display = 'inline-flex';
          panel.style.alignItems = 'center';
          panel.style.justifyContent = 'center';
          panel.style.width = 'auto';
          panel.style.minWidth = '0';
          panel.style.height = 'auto';
          panel.style.minHeight = '0';
        } else {
          panel.style.padding = '8px 10px';
          panel.style.display = 'block';
          panel.style.alignItems = '';
          panel.style.justifyContent = '';
          panel.style.width = '';
          panel.style.minWidth = '190px';
          panel.style.height = '';
          panel.style.minHeight = '';
        }
        relayoutAnalyzedParamPanels();
      }

      // Capture-Phase wie bei Scharen-minBtnEl
      ['pointerdown','mousedown','touchstart','click'].forEach(function(t) {
        minBtn.addEventListener(t, function(e) { try { e.stopPropagation(); } catch (ex) {} }, true);
      });
      minBtn.addEventListener('click', function(e) {
        e.preventDefault(); e.stopPropagation();
        setMinimized(true);
      }, true);

      ['pointerdown','mousedown','touchstart','click'].forEach(function(t) {
        miniWrap.addEventListener(t, function(e) { try { e.stopPropagation(); } catch (ex) {} }, true);
        miniStrip.addEventListener(t, function(e) { try { e.stopPropagation(); } catch (ex) {} }, true);
      });
      miniWrap.addEventListener('click', function(e) {
        e.preventDefault(); e.stopPropagation();
        setMinimized(false);
      }, true);
      miniStrip.addEventListener('click', function(e) {
        e.preventDefault(); e.stopPropagation();
        setMinimized(false);
      }, true);

      // ---- Skalierungs-Logik ----
      var panelScale = 0.6;
      panel.style.transformOrigin = 'top left';
      panel.style.transform = 'scale(' + panelScale + ')';
      (function bindResizeDrag() {
        let drag = null;
        const block = function(evt) { try { evt.stopPropagation(); } catch (e) {} };
        ['pointerdown','pointermove','pointerup','mousedown','mouseup','click'].forEach(function(t) {
          resizeHandle.addEventListener(t, block, true);
        });
        resizeHandle.addEventListener('pointerdown', function(e) {
          e.preventDefault(); e.stopPropagation();
          drag = { pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, startScale: panelScale };
          try { resizeHandle.setPointerCapture(e.pointerId); } catch (ex) {}
        }, true);
        const onMove = function(e) {
          if (!drag || e.pointerId !== drag.pointerId) return;
          e.preventDefault();
          const dx = e.clientX - drag.startX;
          const dy = e.clientY - drag.startY;
          panelScale = Math.max(0.55, Math.min(1.45, drag.startScale + (Math.max(dx, dy) / 260)));
          panel.style.transformOrigin = 'top left';
          panel.style.transform = 'scale(' + panelScale + ')';
          relayoutAnalyzedParamPanels();
        };
        const onUp = function(e) {
          if (!drag || e.pointerId !== drag.pointerId) return;
          drag = null;
          relayoutAnalyzedParamPanels();
        };
        window.addEventListener('pointermove', onMove, true);
        window.addEventListener('pointerup', onUp, true);
        window.addEventListener('pointercancel', onUp, true);
      })();

      renderControls(Math.max(0, (result.candidates || []).indexOf(result.best)));

      return panel;
    }

    function renderAnalysisResult(result, curveColor, options) {
      if (!result) return;

      // Leave interactive draw/analyze tools while parameter panel is in use.
      state.tool = '';
      state.drawing = false;
      state.pointerId = null;
      try { updateUi(boardId); } catch (e) {}

      const opts = options || {};
      const restoredResult = restorePersistedAnalysisResult(result);
      if (restoredResult) result = restoredResult;
      if (!result || !Array.isArray(result.candidates) || !result.candidates.length) return;

      if (!Array.isArray(state.analyzedModelStates)) state.analyzedModelStates = [];
      state.analyzedModelSeq = Number(state.analyzedModelSeq || 0);

      let modelState = opts.modelState || null;
      if (!modelState) {
        state.analyzedModelSeq += 1;
        modelState = {
          id: 'a' + state.analyzedModelSeq,
          curveColor: String(curveColor || state.drawColor || state.color || '#ff4400'),
          resultData: makePersistableAnalysisResult(result),
          activeIndex: Math.max(0, (result.candidates || []).indexOf(result.best)),
          activeParams: null
        };
        state.analyzedModelStates.push(modelState);
      }

      var activeIndex = Math.max(0, (result.candidates || []).indexOf(result.best));
      var activeCandidate = (result.candidates || [])[activeIndex] || result.best;
      var activeParams = Object.assign({}, activeCandidate.params || {});
      if (Number.isFinite(Number(modelState.activeIndex))) {
        const idx = Math.max(0, Math.min((result.candidates || []).length - 1, Number(modelState.activeIndex) || 0));
        activeIndex = idx;
        activeCandidate = (result.candidates || [])[activeIndex] || result.best;
      }
      if (modelState && modelState.activeParams && typeof modelState.activeParams === 'object') {
        activeParams = Object.assign({}, modelState.activeParams);
      }
      var livePredict = predictFromModel(activeCandidate.name, activeParams, activeCandidate.predict);
      const drawColor = String((modelState && modelState.curveColor) || curveColor || state.drawColor || state.color || '#ff4400');
      var createdGraph = null;
      var pPanel = null;

      function syncActiveFromParams(lightweight) {
        modelState.activeIndex = activeIndex;
        modelState.activeParams = Object.assign({}, activeParams || {});
        livePredict = predictFromModel(activeCandidate.name, activeParams, activeCandidate.predict);
        if (pPanel && typeof pPanel.__liaSyncAnalysisParams === 'function') {
          pPanel.__liaSyncAnalysisParams(activeIndex, activeParams, !!lightweight);
        }
        try { board.update(); } catch (e) {}
      }

      function bindAnalysisGraphDrag(graph) {
        if (!graph || graph.__liaAnalysisDragBound) return;
        graph.__liaAnalysisDragBound = true;

        function normalizePointerEvent(evt) {
          if (!evt) return null;
          if (evt.evt && Number.isFinite(evt.evt.clientX) && Number.isFinite(evt.evt.clientY)) return evt.evt;
          if (Number.isFinite(evt.clientX) && Number.isFinite(evt.clientY)) return evt;
          return null;
        }

        function getTargets() {
          return [graph.rendNode, graph.rendNodeStroke].filter(Boolean);
        }

        var dragging = null;
        const onPointerDown = function(evt) {
          const downEvt = normalizePointerEvent(evt);
          if (!downEvt) return;
          try { if (evt && evt.preventDefault) evt.preventDefault(); } catch (e) {}
          try { if (evt && evt.stopPropagation) evt.stopPropagation(); } catch (e) {}
          try { downEvt.preventDefault && downEvt.preventDefault(); } catch (e) {}
          try { downEvt.stopPropagation && downEvt.stopPropagation(); } catch (e) {}

          if (dragging) {
            try { window.removeEventListener('pointermove', dragging.onMove, true); } catch (e) {}
            try { window.removeEventListener('pointerup', dragging.onUp, true); } catch (e) {}
            try { window.removeEventListener('pointercancel', dragging.onUp, true); } catch (e) {}
            dragging = null;
          }

          const pointerId = Number.isFinite(downEvt.pointerId) ? downEvt.pointerId : null;
          const start = eventToUser(board, downEvt);
          const startParams = Object.assign({}, activeParams || {});
          const hasC = Number.isFinite(startParams.c);
          const hasD = Number.isFinite(startParams.d);
          const hasM = Number.isFinite(startParams.m);
          const hasN = Number.isFinite(startParams.n);

          const onMove = function(moveEvt) {
            if (pointerId !== null && moveEvt.pointerId !== pointerId) return;
            moveEvt.preventDefault();
            moveEvt.stopPropagation();

            const now = eventToUser(board, moveEvt);
            const dx = now.x - start.x;
            const dy = now.y - start.y;
            const nextParams = Object.assign({}, startParams);

            if (hasC) nextParams.c = startParams.c - dx;
            if (hasD) nextParams.d = startParams.d + dy;

            // Lineare Regression hat keinen c/d-Shift, deshalb ueber n verschieben.
            if (!hasC && !hasD && hasM && hasN) {
              nextParams.n = startParams.n - startParams.m * dx + dy;
            } else if (!hasD && hasN && !hasC) {
              nextParams.n = startParams.n + dy;
            }

            activeParams = nextParams;
            syncActiveFromParams(true);
          };

          const onUp = function(upEvt) {
            if (pointerId !== null && upEvt.pointerId !== pointerId) return;
            upEvt.preventDefault();
            upEvt.stopPropagation();
            try { window.removeEventListener('pointermove', onMove, true); } catch (e) {}
            try { window.removeEventListener('pointerup', onUp, true); } catch (e) {}
            try { window.removeEventListener('pointercancel', onUp, true); } catch (e) {}
            dragging = null;
            syncActiveFromParams(false);
          };

          dragging = { onMove: onMove, onUp: onUp };
          window.addEventListener('pointermove', onMove, true);
          window.addEventListener('pointerup', onUp, true);
          window.addEventListener('pointercancel', onUp, true);
        };

        function attachTargets() {
          getTargets().forEach(function(target) {
            if (!target || target.__liaAnalysisDragTargetBound) return;
            target.__liaAnalysisDragTargetBound = true;
            try {
              target.style.cursor = 'move';
              target.style.touchAction = 'none';
              target.addEventListener('pointerdown', onPointerDown, true);
            } catch (e) {}
          });
        }

        attachTargets();
        try {
          requestAnimationFrame(function() {
            attachTargets();
            requestAnimationFrame(function() { attachTargets(); });
          });
        } catch (e) {}

        if (typeof graph.on === 'function') {
          try { graph.on('down', onPointerDown); } catch (e) {}
        }
      }

      try {
        createdGraph = board.create('functiongraph', [function(x) {
          try { return livePredict(x); } catch (e) { return NaN; }
        }], {
          strokeColor: drawColor,
          highlightStrokeColor: drawColor,
          strokeWidth: 2.5,
          dash: 2,
          fixed: false,
          withLabel: false
        });
        createdGraph.__liaPlotColor = drawColor;
        createdGraph.__liaModelId = String((modelState && modelState.id) || '');
        state.analyzedGraph = createdGraph;
        if (!Array.isArray(state.analyzedGraphs)) state.analyzedGraphs = [];
        state.analyzedGraphs.push(createdGraph);
        try { board.update(); } catch (e) {}
      } catch (e) {}

      try {
        pPanel = buildAnalysisOverlay(result, function(candidateIndex, params, lightweight) {
          activeIndex = candidateIndex;
          activeCandidate = (result.candidates || [])[activeIndex] || result.best;
          activeParams = Object.assign({}, params || {});
          syncActiveFromParams(!!lightweight);
        }, drawColor);
        pPanel.classList.add('lia-plot-analysis-param-panel');
        pPanel.__liaGraphRef = createdGraph;
        pPanel.__liaModelId = String((modelState && modelState.id) || '');
        board.containerObj.appendChild(pPanel);
        if (!Array.isArray(state.analyzedParamPanels)) state.analyzedParamPanels = [];
        state.analyzedParamPanels.push(pPanel);
        relayoutAnalyzedParamPanels();
        state.analyzedParamPanel = pPanel;
      } catch (e) {}

      try { bindAnalysisGraphDrag(createdGraph); } catch (e) {}
      try { syncActiveFromParams(false); } catch (e) {}

      setAnalyzePanel(board, state, '');
    }

    function runRegressionFromSelectedPoints() {
      if (!Array.isArray(state.regressionPoints) || state.regressionPoints.length < 2) {
        setAnalyzePanel(board, state, 'Regression braucht mindestens 2 ausgewaehlte Punkte.');
        scheduleRedraw(boardId);
        return;
      }

      const regressionColor = String(state.drawColor || state.color || '#ff0000');
      state.drawColor = regressionColor;
      state.color = regressionColor;

      const regressionStroke = { points: state.regressionPoints.slice() };
      const regressionResult = analyzeStroke(boardId, regressionStroke, { pointMode: true });
      state.analyzedStrokeIndex = -1;
      state.analyzedCurvePoints = null;

      if (!regressionResult) {
        setAnalyzePanel(board, state, 'Regression nicht moeglich (ungeeignete Punkte).');
        scheduleRedraw(boardId);
        return;
      }

      renderAnalysisResult(regressionResult, regressionColor);
      scheduleRedraw(boardId);
    }
    state.__runRegressionFromSelectedPoints = runRegressionFromSelectedPoints;

    function restoreAnalyzedModelsAfterBoardSwitch() {
      if (!Array.isArray(state.analyzedModelStates) || !state.analyzedModelStates.length) return;

      const hasGraphOnCurrentBoard = Array.isArray(state.analyzedGraphs) && state.analyzedGraphs.some(function(g) {
        try { return !!(g && g.board === board); } catch (e) { return false; }
      });
      if (hasGraphOnCurrentBoard) return;

      state.analyzedGraphs = [];
      state.analyzedGraph = null;
      if (Array.isArray(state.analyzedParamPanels)) {
        state.analyzedParamPanels.forEach(function(panel) {
          try { panel.parentNode && panel.parentNode.removeChild(panel); } catch (e) {}
        });
      }
      state.analyzedParamPanels = [];
      state.analyzedParamPanel = null;

      const models = state.analyzedModelStates.slice();
      models.forEach(function(modelState) {
        if (!modelState || !modelState.resultData) return;
        try {
          renderAnalysisResult(modelState.resultData, modelState.curveColor, { modelState: modelState, restored: true });
        } catch (e) {}
      });
      relayoutAnalyzedParamPanels();
      scheduleRedraw(boardId);
    }
    restoreAnalyzedModelsAfterBoardSwitch();

    function handlePointerInteraction(evt) {
      if (!state.tool) return;
      evt.preventDefault();
      evt.stopPropagation();

      if (state.tool === 'erase') {
        const strokeIndex = hitStrokeIndex(board, state, evt);
        if (strokeIndex >= 0) {
          state.strokes.splice(strokeIndex, 1);
          if (state.analyzedStrokeIndex === strokeIndex) state.analyzedStrokeIndex = -1;
          state.analyzedCurvePoints = null;
          window.saveToHistory(boardId);
          scheduleRedraw(boardId);
          return;
        }
        
        // Check if clicking on an auto-created X point
        if (Array.isArray(state.autoCreatedPoints) && state.autoCreatedPoints.length > 0) {
          const clickPoint = eventToUser(board, evt);
          let hitPointName = null;
          let bestDist = Infinity;
          
          for (let i = 0; i < state.autoCreatedPoints.length; i++) {
            const pointName = state.autoCreatedPoints[i];
            const pt = window.__points && window.__points[boardId] && window.__points[boardId][pointName];
            if (!pt) continue;
            
            const ptX = pt.X();
            const ptY = pt.Y();
            const dist = Math.sqrt((clickPoint.x - ptX) * (clickPoint.x - ptX) + (clickPoint.y - ptY) * (clickPoint.y - ptY));
            
            if (dist < 0.2 && dist < bestDist) {
              bestDist = dist;
              hitPointName = pointName;
            }
          }
          
          if (hitPointName) {
            // Delete the point
            try {
              const pt = window.__points[boardId][hitPointName];
              if (pt) board.removeObject(pt);
              delete window.__points[boardId][hitPointName];
            } catch (e) {}
            
            // Remove from autoCreatedPoints list
            const idx = state.autoCreatedPoints.indexOf(hitPointName);
            if (idx >= 0) state.autoCreatedPoints.splice(idx, 1);
            
            // Remove from regressionPoints if it's there
            if (Array.isArray(state.regressionPoints)) {
              state.regressionPoints = state.regressionPoints.filter(function(p) {
                return String((p && p.key) || '') !== hitPointName;
              });
            }
            
            window.saveToHistory(boardId);
            setAnalyzePanel(board, state, 'Punkt gelöscht.');
            scheduleRedraw(boardId);
            return;
          }
        }
        
        // hit-test all analyzed fit curves
        const graphs = (Array.isArray(state.analyzedGraphs) && state.analyzedGraphs.length)
          ? state.analyzedGraphs.slice()
          : (state.analyzedGraph ? [state.analyzedGraph] : []);
        if (graphs.length) {
          try {
            const clickLocal = eventToLocal(board, evt);
            let bestHitGraph = null;
            let bestDist = Infinity;
            for (let gi = 0; gi < graphs.length; gi++) {
              const pts = sampleGraphPoints(board, graphs[gi]);
              if (!pts || pts.length < 2) continue;
              let minDist = Infinity;
              let prev = userToLocal(board, pts[0]);
              for (let i = 1; i < pts.length; i++) {
                const next = userToLocal(board, pts[i]);
                const d = distanceToSegment(clickLocal, prev, next);
                if (d < minDist) minDist = d;
                prev = next;
              }
              if (minDist < bestDist) {
                bestDist = minDist;
                bestHitGraph = graphs[gi];
              }
            }
            if (bestHitGraph && bestDist <= 24) {
              removeAnalyzedGraph(bestHitGraph);
              state.analyzedStrokeIndex = -1;
              state.analyzedCurvePoints = null;
              setAnalyzePanel(board, state, '');
              scheduleRedraw(boardId);
            }
          } catch (e) {}
        }
        return;
      }

      if (state.tool === 'analyze') {
        try {
        const strokeIndex = hitStrokeIndex(board, state, evt);
        if (strokeIndex < 0) {
          const graphHit = hitPlottedGraph(boardId, board, evt);
          if (!graphHit) {
            state.analyzedStrokeIndex = -1;
            state.analyzedCurvePoints = null;
            setAnalyzePanel(board, state, '');
            scheduleRedraw(boardId);
            return;
          }

          const syntheticStroke = { points: graphHit.points };
          const graphAnalysis = analyzeStroke(boardId, syntheticStroke);
          state.analyzedStrokeIndex = -1;
          state.analyzedCurvePoints = graphHit.points;

          if (!graphAnalysis) {
            setAnalyzePanel(board, state, 'Analyse nicht moeglich (zu wenige/ungeeignete Punkte).');
            scheduleRedraw(boardId);
            return;
          }

          renderAnalysisResult(graphAnalysis, graphHit.color || state.drawColor || state.color);
          scheduleRedraw(boardId);
          return;
        }

        const stroke = state.strokes[strokeIndex];
        const strokeColor = String(stroke && stroke.color || '').trim();
        const groupedPoints = collectStrokePointsByColor(state, strokeColor);
        const analysisStroke = groupedPoints.length ? { points: groupedPoints } : stroke;
        const analysis = analyzeStroke(boardId, analysisStroke);
        state.analyzedStrokeIndex = strokeIndex;
        state.analyzedCurvePoints = null;

        if (!analysis) {
          setAnalyzePanel(board, state, 'Analyse nicht moeglich (zu wenige/ungeeignete Punkte).');
          scheduleRedraw(boardId);
          return;
        }

        renderAnalysisResult(analysis, strokeColor || state.color);
        scheduleRedraw(boardId);
        return;
        } catch (analyzeErr) {
          setAnalyzePanel(board, state, 'Fehler: ' + String(analyzeErr && analyzeErr.message || analyzeErr));
          return;
        }
      }

      if (state.tool === 'regression') {
        if (!Array.isArray(state.regressionPoints)) state.regressionPoints = [];

        const hitPoint = findNearestSelectableBoardPoint(board, boardId, evt, 14);
        if (!hitPoint) {
          setAnalyzePanel(board, state, 'Bitte einen vorhandenen Punkt anklicken.');
          return;
        }

        setAnalyzePanel(board, state, '');
        const key = String(hitPoint.key || '');
        const existingIndex = state.regressionPoints.findIndex(function(p) {
          return String((p && p.key) || '') === key;
        });

        if (existingIndex >= 0) {
          state.regressionPoints.splice(existingIndex, 1);
        } else {
          state.regressionPoints.push({ x: hitPoint.x, y: hitPoint.y, key: key });
        }

        state.analyzedCurvePoints = null;
        scheduleRedraw(boardId);
        return;
      }

      const point = eventToUser(board, evt);
      state.drawing = true;
      state.pointerId = evt.pointerId;
      state.strokes.push({
        color: state.drawColor || state.color,
        width: 3,
        points: [point]
      });

      try { canvas.setPointerCapture(evt.pointerId); } catch (e) {}
      scheduleRedraw(boardId);
    }

    canvas.addEventListener('pointerdown', handlePointerInteraction, true);

    canvas.addEventListener('pointermove', function(evt) {
      if (state.tool !== 'draw' || !state.drawing || evt.pointerId !== state.pointerId) return;
      evt.preventDefault();
      evt.stopPropagation();

      const stroke = state.strokes[state.strokes.length - 1];
      if (!stroke) return;

      const point = eventToUser(board, evt);
      const last = stroke.points[stroke.points.length - 1];
      if (last) {
        const dx = point.x - last.x;
        const dy = point.y - last.y;
        if ((dx * dx + dy * dy) < 0.00005) return;
      }

      stroke.points.push(point);
      scheduleRedraw(boardId);
    }, true);

    // Helper: Check if point C lies on segment AB
    function pointOnSegment(A, B, C) {
      return Math.min(A.x, B.x) <= C.x && C.x <= Math.max(A.x, B.x) &&
             Math.min(A.y, B.y) <= C.y && C.y <= Math.max(A.y, B.y);
    }

    // Helper: Calculate orientation of ordered triplet (p, q, r)
    // Returns: 0 if collinear, 1 if clockwise, 2 if counterclockwise
    function getOrientation(p, q, r) {
      const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
      if (Math.abs(val) < 1e-9) return 0;  // collinear
      return (val > 0) ? 1 : 2;  // clockwise or counterclockwise
    }

    // Find intersection point of two line segments
    // Returns {intersects: bool, x: number, y: number}
    function findSegmentIntersection(p1, q1, p2, q2) {
      const o1 = getOrientation(p1, q1, p2);
      const o2 = getOrientation(p1, q1, q2);
      const o3 = getOrientation(p2, q2, p1);
      const o4 = getOrientation(p2, q2, q1);

      // General case: segments intersect if they straddle each other
      if (o1 !== o2 && o3 !== o4) {
        // Calculate intersection point using parametric equations
        const x1 = p1.x, y1 = p1.y;
        const x2 = q1.x, y2 = q1.y;
        const x3 = p2.x, y3 = p2.y;
        const x4 = q2.x, y4 = q2.y;

        const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (Math.abs(denom) < 1e-9) return { intersects: false };

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
        const intersectX = x1 + t * (x2 - x1);
        const intersectY = y1 + t * (y2 - y1);

        return { intersects: true, x: intersectX, y: intersectY };
      }

      // Special cases: collinear
      if (o1 === 0 && pointOnSegment(p1, q1, p2)) return { intersects: true, x: p2.x, y: p2.y };
      if (o2 === 0 && pointOnSegment(p1, q1, q2)) return { intersects: true, x: q2.x, y: q2.y };
      if (o3 === 0 && pointOnSegment(p2, q2, p1)) return { intersects: true, x: p1.x, y: p1.y };
      if (o4 === 0 && pointOnSegment(p2, q2, q1)) return { intersects: true, x: q1.x, y: q1.y };

      return { intersects: false };
    }

    // Check if two strokes (as collections of segments) intersect
    function findStrokesIntersection(stroke1, stroke2) {
      // stroke1 and stroke2 are arrays of points
      if (!Array.isArray(stroke1) || !Array.isArray(stroke2) || stroke1.length < 2 || stroke2.length < 2) {
        return { intersects: false };
      }

      // Find the closest intersection point between any pair of segments from the two strokes
      let bestIntersection = null;
      let bestDist = Infinity;

      for (let i = 0; i < stroke1.length - 1; i++) {
        for (let j = 0; j < stroke2.length - 1; j++) {
          const result = findSegmentIntersection(stroke1[i], stroke1[i + 1], stroke2[j], stroke2[j + 1]);
          if (result.intersects) {
            const dist = Math.sqrt((result.x - result.x) * (result.x - result.x) + (result.y - result.y) * (result.y - result.y));
            if (dist < bestDist) {
              bestDist = dist;
              bestIntersection = result;
            }
          }
        }
      }

      return bestIntersection || { intersects: false };
    }

    function stop(evt) {
      if (!state.drawing) return;
      if (evt && evt.pointerId != null && evt.pointerId !== state.pointerId) return;

      state.drawing = false;
      state.pointerId = null;
      
      // Check if last 2 strokes intersect to form an X
      if (state.tool === 'draw' && Array.isArray(state.strokes) && state.strokes.length >= 2 && board) {
        const stroke1 = state.strokes[state.strokes.length - 2];
        const stroke2 = state.strokes[state.strokes.length - 1];
        
        if (stroke1 && stroke1.points && stroke2 && stroke2.points) {
          const xDetection = findStrokesIntersection(stroke1.points, stroke2.points);
          
          if (xDetection.intersects && Number.isFinite(xDetection.x) && Number.isFinite(xDetection.y)) {
            // X erkannt: Punkt auf dem Board erstellen (nicht automatisch ausgewählt)
            try {
              const pointName = 'auto-x-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
              const pt = board.create('point', [xDetection.x, xDetection.y], {
                name: pointName,
                fixed: false,
                withLabel: false,
                showInfobox: false,
                strokeColor: '#ff00ff',
                fillColor: '#ff00ff',
                highlightStrokeColor: '#ff00ff',
                highlightFillColor: '#ff00ff',
                strokeWidth: 3,
                highlightStrokeWidth: 3,
                face: 'x',
                size: 7
              });
              
              // Registriere den Punkt
              if (!window.__points) window.__points = {};
              if (!window.__points[boardId]) window.__points[boardId] = {};
              window.__points[boardId][pointName] = pt;
              
              // Speichere den Punkt im State
              if (!Array.isArray(state.autoCreatedPoints)) state.autoCreatedPoints = [];
              state.autoCreatedPoints.push(pointName);
              
              // Speichere Koordinaten separat für Undo/Redo (NICHT in regressionPoints!)
              if (!Array.isArray(state.autoCreatedPointsData)) state.autoCreatedPointsData = [];
              state.autoCreatedPointsData.push({ x: xDetection.x, y: xDetection.y, key: pointName });
              
              // Feedback
              setAnalyzePanel(board, state, 'X erkannt! Punkt bei (' + xDetection.x.toFixed(2) + ', ' + xDetection.y.toFixed(2) + ').');
              console.log('[X-detect] X intersection found at:', xDetection.x, xDetection.y);
              
              try { board.update(); } catch (e) {}
            } catch (err) {
              console.error('[X-detect] Error creating point:', err);
            }
          }
        }
      }
      
      // Save to history
      window.saveToHistory(boardId);
      
      try {
        if (evt && evt.pointerId != null) canvas.releasePointerCapture(evt.pointerId);
      } catch (e) {}
      scheduleRedraw(boardId);
    }

    canvas.addEventListener('pointerup', stop, true);
    canvas.addEventListener('pointercancel', stop, true);
    canvas.addEventListener('lostpointercapture', stop, true);
  }

  function bindBoardHooks(boardId) {
    const board = window.__boards && window.__boards[boardId];
    const state = getState(boardId);
    if (!board || !state || state.hooksBound) return;
    state.hooksBound = true;

    // Initialize history system
    if (!state.history) {
      state.history = [JSON.stringify({ strokes: [], regressionPoints: [], autoCreatedPoints: [] })];
      state.historyIndex = 0;
    }

    // Helper: Create state snapshot
    window.createStateSnapshot = function(boardId) {
      const state = getState(boardId);
      if (!state) return null;
      return JSON.stringify({
        strokes: (state.strokes || []).map(function(s) {
          return { points: s.points || [], color: s.color || '#000000', width: s.width || 3 };
        }),
        regressionPoints: (state.regressionPoints || []).slice(),
        autoCreatedPoints: (state.autoCreatedPoints || []).slice(),
        autoCreatedPointsData: (state.autoCreatedPointsData || []).slice()
      });
    };

    // Helper: Restore state from snapshot
    window.restoreStateSnapshot = function(boardId, snapshot) {
      const board = window.__boards && window.__boards[boardId];
      const state = getState(boardId);
      if (!state || !snapshot) return;

      try {
        const data = JSON.parse(snapshot);
        
        // Clear current state
        state.strokes = [];
        state.regressionPoints = [];
        
        // Remove old auto-created points from board
        if (Array.isArray(state.autoCreatedPoints)) {
          state.autoCreatedPoints.forEach(function(pointName) {
            try {
              const pt = window.__points && window.__points[boardId] && window.__points[boardId][pointName];
              if (pt && board) board.removeObject(pt);
              if (window.__points && window.__points[boardId]) delete window.__points[boardId][pointName];
            } catch (e) {}
          });
        }
        state.autoCreatedPoints = [];
        
        // Restore strokes
        if (Array.isArray(data.strokes)) {
          state.strokes = data.strokes.map(function(s) {
            return { points: s.points || [], color: s.color || '#000000', width: s.width || 3 };
          });
        }
        
        // Restore regression points
        if (Array.isArray(data.regressionPoints)) {
          state.regressionPoints = data.regressionPoints.slice();
        }
        
        // Restore auto-created points
        if (Array.isArray(data.autoCreatedPoints) && board) {
          data.autoCreatedPoints.forEach(function(pointName) {
            // Find point by checking autoCreatedPointsData for its coordinates
            const ptData = data.autoCreatedPointsData && data.autoCreatedPointsData.find(function(p) { return p.key === pointName; });
            if (ptData && board) {
              try {
                const createdPt = board.create('point', [ptData.x, ptData.y], {
                  name: pointName,
                  fixed: false,
                  withLabel: false,
                  showInfobox: false,
                  strokeColor: '#ff00ff',
                  fillColor: '#ff00ff',
                  highlightStrokeColor: '#ff00ff',
                  highlightFillColor: '#ff00ff',
                  strokeWidth: 3,
                  highlightStrokeWidth: 3,
                  face: 'x',
                  size: 7
                });
                if (!window.__points) window.__points = {};
                if (!window.__points[boardId]) window.__points[boardId] = {};
                window.__points[boardId][pointName] = createdPt;
                state.autoCreatedPoints.push(pointName);
              } catch (e) {}
            }
          });
        }
        
        scheduleRedraw(boardId);
      } catch (e) {
        console.error('[Undo/Redo] Error restoring state:', e);
      }
    };

    // Undo function
    window.undoAction = function(boardId) {
      const state = getState(boardId);
      if (!state || !state.history || state.historyIndex <= 0) return;
      
      state.historyIndex -= 1;
      const snapshot = state.history[state.historyIndex];
      window.restoreStateSnapshot(boardId, snapshot);
      updateUi(boardId);
    };

    // Redo function
    window.redoAction = function(boardId) {
      const state = getState(boardId);
      if (!state || !state.history || state.historyIndex >= state.history.length - 1) return;
      
      state.historyIndex += 1;
      const snapshot = state.history[state.historyIndex];
      window.restoreStateSnapshot(boardId, snapshot);
      updateUi(boardId);
    };

    // Helper: Save state to history
    window.saveToHistory = function(boardId) {
      const state = getState(boardId);
      if (!state || !state.history) return;
      
      // Remove any redo history if we're not at the end
      if (state.historyIndex < state.history.length - 1) {
        state.history = state.history.slice(0, state.historyIndex + 1);
      }
      
      const snapshot = window.createStateSnapshot(boardId);
      if (snapshot && snapshot !== state.history[state.history.length - 1]) {
        state.history.push(snapshot);
        state.historyIndex = state.history.length - 1;
        
        // Limit history to 50 entries
        if (state.history.length > 50) {
          state.history.shift();
          state.historyIndex -= 1;
        }
        
        updateUi(boardId);
      }
    };

    try {
      board.on('boundingbox', function() {
        scheduleRedraw(boardId);
      });
    } catch (e) {}

    window.addEventListener('resize', function() {
      scheduleRedraw(boardId);
    });
  }

  function ensureBoardTools(boardId) {
    const board = window.__boards && window.__boards[boardId];
    const state = getState(boardId);
    if (!board || !board.containerObj || !state) return false;
    const hasDrawSpec = !!(window.__liaCoordDrawSpecs && window.__liaCoordDrawSpecs[boardId]);
    const hasRegressionSpec = !!(window.__liaCoordRegressionSpecs && window.__liaCoordRegressionSpecs[boardId]);

    state.showDrawButtons = hasDrawSpec;
    if (!hasDrawSpec && (state.tool === 'draw' || state.tool === 'erase' || state.tool === 'analyze')) {
      state.tool = '';
      state.drawing = false;
      state.pointerId = null;
    }

    ensureCss();

    let canvas = board.containerObj.querySelector('.lia-plot-draw-layer');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.className = 'lia-plot-draw-layer';
      canvas.setAttribute('aria-hidden', 'true');
      board.containerObj.appendChild(canvas);
    }

    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.right = '0';
    canvas.style.bottom = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    canvas.style.background = 'transparent';
    canvas.style.touchAction = 'none';
    canvas.style.pointerEvents = state.active ? 'auto' : 'none';
    canvas.style.zIndex = state.active ? '47' : '46';

    let button = board.containerObj.querySelector('.lia-plot-draw-toggle');
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'lia-plot-draw-toggle';
      button.setAttribute('aria-label', 'Freihandzeichnen');
      button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" style="width:22px;height:22px;display:block;"><path class="ico-stroke" d="M4 20l4.7-1.1L19 8.6 15.4 5 5.1 15.3z"></path><path class="ico-stroke" d="M13.9 6.5l3.6 3.6"></path><circle class="ico-color-dot" cx="16.5" cy="16.5" r="4.5"></circle></svg>';
      board.containerObj.appendChild(button);
    }

    let eraseButton = board.containerObj.querySelector('.lia-plot-erase-toggle');
    if (!eraseButton) {
      eraseButton = document.createElement('button');
      eraseButton.type = 'button';
      eraseButton.className = 'lia-plot-draw-toggle lia-plot-erase-toggle';
      eraseButton.setAttribute('aria-label', 'Pinselstrich loeschen');
      eraseButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" style="width:22px;height:22px;display:block;"><path class="ico-stroke" d="M6.2 15.7l8-8a2 2 0 0 1 2.8 0l3.1 3.1a2 2 0 0 1 0 2.8L13.4 20.3H9.3l-3.1-3.1a2 2 0 0 1 0-1.5z"></path><path class="ico-stroke" d="M9.2 20.3h8"></path><path class="ico-stroke" d="M10 13.9l5.7 5.7"></path></svg>';
      board.containerObj.appendChild(eraseButton);
    }

    let analyzeButton = board.containerObj.querySelector('.lia-plot-analyze-toggle');
    if (!analyzeButton) {
      analyzeButton = document.createElement('button');
      analyzeButton.type = 'button';
      analyzeButton.className = 'lia-plot-draw-toggle lia-plot-analyze-toggle';
      analyzeButton.setAttribute('aria-label', 'Funktion analysieren');
      analyzeButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" style="display:block;overflow:visible"><path class="ico-stroke" d="M5 18h4"></path><path class="ico-stroke" d="M7 16v4"></path><path class="ico-stroke" d="M12.8 4.5l1.7 3.5 3.9.5-2.8 2.7.7 3.8-3.5-1.8-3.5 1.8.7-3.8-2.8-2.7 3.9-.5z"></path></svg>';
      board.containerObj.appendChild(analyzeButton);
    }

    let undoButton = board.containerObj.querySelector('.lia-plot-undo-btn');
    if (!undoButton) {
      undoButton = document.createElement('button');
      undoButton.type = 'button';
      undoButton.className = 'lia-plot-undo-btn';
      undoButton.setAttribute('aria-label', 'Rückgängig');
      undoButton.innerHTML = '<svg viewBox="-4 0 24 24" aria-hidden="true" style="width:22px;height:22px;display:block;transform:translateX(-2px);"><path d="M21 8H10.2V4L2 12l8.2 8v-4H21V8z" fill="currentColor"/><rect x="10.2" y="10.6" width="10.8" height="2.8" rx="1.4" fill="currentColor"/></svg>';
      undoButton.onclick = function() { window.undoAction(boardId); };
      board.containerObj.appendChild(undoButton);
    }

    let redoButton = board.containerObj.querySelector('.lia-plot-redo-btn');
    if (!redoButton) {
      redoButton = document.createElement('button');
      redoButton.type = 'button';
      redoButton.className = 'lia-plot-redo-btn';
      redoButton.setAttribute('aria-label', 'Wiederherstellen');
      redoButton.innerHTML = '<svg viewBox="-4 0 24 24" aria-hidden="true" style="width:22px;height:22px;display:block;transform:translateX(-2px);"><path d="M3 8h10.8V4l8.2 8-8.2 8v-4H3V8z" fill="currentColor"/><rect x="3" y="10.6" width="10.8" height="2.8" rx="1.4" fill="currentColor"/></svg>';
      redoButton.onclick = function() { window.redoAction(boardId); };
      board.containerObj.appendChild(redoButton);
    }

    let regressionButton = board.containerObj.querySelector('.lia-plot-regression-toggle');
    if (hasRegressionSpec && !regressionButton) {
      regressionButton = document.createElement('button');
      regressionButton.type = 'button';
      regressionButton.className = 'lia-plot-draw-toggle lia-plot-regression-toggle';
      regressionButton.setAttribute('aria-label', 'Regression aus Punkten');
      regressionButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" style="display:block;overflow:visible"><path class="ico-stroke" d="M5 18h4"></path><path class="ico-stroke" d="M7 16v4"></path><path class="ico-stroke" d="M12.8 4.5l1.7 3.5 3.9.5-2.8 2.7.7 3.8-3.5-1.8-3.5 1.8.7-3.8-2.8-2.7 3.9-.5z"></path></svg>';
      board.containerObj.appendChild(regressionButton);
    }

    let regressionMenu = board.containerObj.querySelector('.lia-plot-reg-menu');
    if (hasRegressionSpec && !regressionMenu) {
      regressionMenu = document.createElement('div');
      regressionMenu.className = 'lia-plot-color-menu lia-plot-reg-menu';
      regressionMenu.dataset.open = '0';
      regressionMenu.innerHTML = '' +
        '<button class="lia-plot-reg-item" type="button" data-action="recognize">Zeichnung erkennen</button>' +
        '<button class="lia-plot-reg-item" type="button" data-action="select-points">Punkte auswählen</button>' +
        '<button class="lia-plot-reg-item" type="button" data-action="compute">Regression berechnen</button>' +
        '<button class="lia-plot-reg-item" type="button" data-action="clear">Auswahl aufheben</button>';
      board.containerObj.appendChild(regressionMenu);
    }

    if (!hasRegressionSpec) {
      if (regressionButton && regressionButton.parentNode) regressionButton.parentNode.removeChild(regressionButton);
      if (regressionMenu && regressionMenu.parentNode) regressionMenu.parentNode.removeChild(regressionMenu);
      regressionButton = null;
      regressionMenu = null;
      state.regressionMenuOpen = false;
      if (state.tool === 'regression') state.tool = '';
    }

    let colorMenu = board.containerObj.querySelector('.lia-plot-color-menu:not(.lia-plot-reg-menu)');
    if (!colorMenu) {
      colorMenu = document.createElement('div');
      colorMenu.className = 'lia-plot-color-menu';
      colorMenu.dataset.open = '0';
      board.containerObj.appendChild(colorMenu);
    }
    colorMenu.dataset.open = '0';
    colorMenu.style.display = 'none';
    state.drawColorMenuOpen = false;
    if (!state.drawColor) state.drawColor = state.color;

    function rebuildColorMenu() {
      let html = '<div class="lia-plot-color-grid">';
      for (let i = 0; i < DRAW_COLORS.length; i++) {
        const col = DRAW_COLORS[i];
        const active = String(col).toLowerCase() === String(state.drawColor || state.color || '').toLowerCase() ? '1' : '0';
        html += '<button class="lia-plot-color-item" type="button" data-color="' + col + '" data-active="' + active + '" style="background:' + col + ';width:22px;height:22px;border-radius:999px;display:inline-block;" aria-label="Farbe ' + col + '"></button>';
      }
      html += '</div>';
      colorMenu.innerHTML = html;
    }
    rebuildColorMenu();

    let analyzePanel = document.getElementById('lia-analyze-panel-' + boardId);
    if (!analyzePanel) {
      analyzePanel = document.createElement('div');
      analyzePanel.className = 'lia-plot-analyze-panel';
      analyzePanel.id = 'lia-analyze-panel-' + boardId;
      analyzePanel.dataset.open = '0';
      (board.containerObj || document.body || document.documentElement).appendChild(analyzePanel);
    }

    button.style.position = 'absolute';
    button.style.left = '82px';
    button.style.bottom = '10px';
    button.style.width = '28px';
    button.style.height = '28px';
    button.style.minWidth = '28px';
    button.style.minHeight = '28px';
    button.style.display = hasDrawSpec ? 'grid' : 'none';
    button.style.placeItems = 'center';
    button.style.padding = '0';
    button.style.margin = '0';
    button.style.zIndex = '48';
    button.style.borderRadius = '999px';
    button.style.boxSizing = 'border-box';
    button.style.cursor = 'pointer';
    button.style.border = '2px solid currentColor';
    button.style.background = 'transparent';

    eraseButton.style.position = 'absolute';
    eraseButton.style.left = '118px';
    eraseButton.style.bottom = '10px';
    eraseButton.style.width = '28px';
    eraseButton.style.height = '28px';
    eraseButton.style.minWidth = '28px';
    eraseButton.style.minHeight = '28px';
    eraseButton.style.display = hasDrawSpec ? 'grid' : 'none';
    eraseButton.style.placeItems = 'center';
    eraseButton.style.padding = '0';
    eraseButton.style.margin = '0';
    eraseButton.style.zIndex = '48';
    eraseButton.style.borderRadius = '999px';
    eraseButton.style.boxSizing = 'border-box';
    eraseButton.style.cursor = 'pointer';
    eraseButton.style.border = '2px solid currentColor';
    eraseButton.style.background = 'transparent';

    analyzeButton.style.position = 'absolute';
    analyzeButton.style.left = '154px';
    analyzeButton.style.bottom = '10px';
    analyzeButton.style.width = '28px';
    analyzeButton.style.height = '28px';
    analyzeButton.style.minWidth = '28px';
    analyzeButton.style.minHeight = '28px';
    analyzeButton.style.display = 'none';
    analyzeButton.style.placeItems = 'center';
    analyzeButton.style.padding = '0';
    analyzeButton.style.margin = '0';
    analyzeButton.style.zIndex = '48';
    analyzeButton.style.borderRadius = '999px';
    analyzeButton.style.boxSizing = 'border-box';
    analyzeButton.style.cursor = 'pointer';
    analyzeButton.style.border = '2px solid currentColor';
    analyzeButton.style.background = 'transparent';

    undoButton.style.position = 'absolute';
    undoButton.style.left = '10px';
    undoButton.style.bottom = '10px';
    undoButton.style.width = '28px';
    undoButton.style.height = '28px';
    undoButton.style.minWidth = '28px';
    undoButton.style.minHeight = '28px';
    undoButton.style.display = hasDrawSpec ? 'grid' : 'none';
    undoButton.style.placeItems = 'center';
    undoButton.style.padding = '0';
    undoButton.style.margin = '0';
    undoButton.style.zIndex = '48';
    undoButton.style.borderRadius = '999px';
    undoButton.style.boxSizing = 'border-box';
    undoButton.style.cursor = 'pointer';
    undoButton.style.border = '2px solid currentColor';
    undoButton.style.background = 'transparent';
    undoButton.style.userSelect = 'none';

    redoButton.style.position = 'absolute';
    redoButton.style.left = '46px';
    redoButton.style.bottom = '10px';
    redoButton.style.width = '28px';
    redoButton.style.height = '28px';
    redoButton.style.minWidth = '28px';
    redoButton.style.minHeight = '28px';
    redoButton.style.display = hasDrawSpec ? 'grid' : 'none';
    redoButton.style.placeItems = 'center';
    redoButton.style.padding = '0';
    redoButton.style.margin = '0';
    redoButton.style.zIndex = '48';
    redoButton.style.borderRadius = '999px';
    redoButton.style.boxSizing = 'border-box';
    redoButton.style.cursor = 'pointer';
    redoButton.style.border = '2px solid currentColor';
    redoButton.style.background = 'transparent';
    redoButton.style.userSelect = 'none';

    if (regressionButton) {
      regressionButton.style.position = 'absolute';
      regressionButton.style.left = hasDrawSpec ? '154px' : '10px';
      regressionButton.style.bottom = '10px';
      regressionButton.style.width = '28px';
      regressionButton.style.height = '28px';
      regressionButton.style.minWidth = '28px';
      regressionButton.style.minHeight = '28px';
      regressionButton.style.display = 'grid';
      regressionButton.style.placeItems = 'center';
      regressionButton.style.padding = '0';
      regressionButton.style.margin = '0';
      regressionButton.style.zIndex = '48';
      regressionButton.style.borderRadius = '999px';
      regressionButton.style.boxSizing = 'border-box';
      regressionButton.style.cursor = 'pointer';
      regressionButton.style.border = '2px solid currentColor';
      regressionButton.style.background = 'transparent';
    }

    if (regressionMenu) {
      regressionMenu.style.position = 'absolute';
      regressionMenu.style.left = hasDrawSpec ? '184px' : '46px';
      regressionMenu.style.bottom = '10px';
      regressionMenu.style.zIndex = '56';
      regressionMenu.style.padding = '4px';
      regressionMenu.style.display = 'none';
      regressionMenu.style.gridTemplateColumns = '1fr 1fr';
      regressionMenu.style.gap = '3px';
      {
        const tone = neutralColor();
        const fill = tone === '#fff' ? 'rgba(0,0,0,.82)' : 'rgba(255,255,255,.94)';
        regressionMenu.style.color = tone;
        regressionMenu.style.background = fill;
        regressionMenu.style.borderRadius = '12px';
        regressionMenu.style.overflow = 'hidden';
        regressionMenu.style.borderColor = tone === '#fff' ? 'rgba(255,255,255,.62)' : 'rgba(0,0,0,.46)';
        regressionMenu.style.borderStyle = 'solid';
        regressionMenu.style.borderWidth = '1px';
        regressionMenu.style.boxShadow = '0 6px 18px rgba(0,0,0,.18)';
      }
    }

    colorMenu.style.position = 'absolute';
    colorMenu.style.left = '10px';
    colorMenu.style.bottom = '56px';
    colorMenu.style.padding = '2px 8px';
    colorMenu.style.zIndex = '56';
      {
        const tone = neutralColor();
        const fill = tone === '#fff' ? 'rgba(0,0,0,.82)' : 'rgba(255,255,255,.94)';
        colorMenu.style.color = tone;
        colorMenu.style.background = fill;
        colorMenu.style.borderRadius = '12px';
        colorMenu.style.overflow = 'hidden';
        colorMenu.style.borderColor = tone === '#fff' ? 'rgba(255,255,255,.62)' : 'rgba(0,0,0,.46)';
        colorMenu.style.borderStyle = 'solid';
        colorMenu.style.borderWidth = '1px';
        colorMenu.style.boxShadow = '0 6px 18px rgba(0,0,0,.18)';
      }

    function setColorMenuOpen(open) {
      const isOpen = !!open && !!state.showDrawButtons;
      state.drawColorMenuOpen = isOpen;
      colorMenu.dataset.open = isOpen ? '1' : '0';
      colorMenu.style.display = isOpen ? 'grid' : 'none';
    }
    setColorMenuOpen(false);

    function setRegressionMenuOpen(open) {
      if (!regressionMenu) {
        state.regressionMenuOpen = false;
        return;
      }
      const isOpen = !!open;
      state.regressionMenuOpen = isOpen;
      regressionMenu.dataset.open = isOpen ? '1' : '0';
      regressionMenu.style.display = isOpen ? 'grid' : 'none';
    }
    setRegressionMenuOpen(!!state.regressionMenuOpen);

    state.canvas = canvas;
    state.drawButton = button;
    state.eraseButton = eraseButton;
    state.analyzeButton = analyzeButton;
    state.undoButton = undoButton;
    state.redoButton = redoButton;
    state.regressionButton = regressionButton;
    state.regressionMenu = regressionMenu;
    state.analyzePanel = analyzePanel;
    state.drawColorMenu = colorMenu;

    if (button.__liaPlotDrawClickHandler) {
      try { button.removeEventListener('click', button.__liaPlotDrawClickHandler); } catch (e) {}
    }
    button.__liaPlotDrawClickHandler = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (state.tool === 'draw') {
        state.tool = '';
        setColorMenuOpen(false);
      } else {
        state.tool = 'draw';
        setColorMenuOpen(true);
        setRegressionMenuOpen(false);
      }
      state.drawing = false;
      state.pointerId = null;
      updateUi(boardId);
    };
    button.addEventListener('click', button.__liaPlotDrawClickHandler);

    if (colorMenu.__liaPlotColorMenuClickHandler) {
      try { colorMenu.removeEventListener('click', colorMenu.__liaPlotColorMenuClickHandler, true); } catch (e) {}
      try { colorMenu.removeEventListener('pointerdown', colorMenu.__liaPlotColorMenuClickHandler, true); } catch (e) {}
    }
    colorMenu.__liaPlotColorMenuClickHandler = function(evt) {
      const btn = evt.target && evt.target.closest ? evt.target.closest('.lia-plot-color-item') : null;
      if (!btn) return;
      evt.preventDefault();
      evt.stopPropagation();
      const col = String(btn.getAttribute('data-color') || '').trim();
      if (!col) return;
      state.drawColor = col;
      state.color = col;
      rebuildColorMenu();
      state.tool = 'draw';
      setColorMenuOpen(false);
      updateUi(boardId);
    };
    colorMenu.addEventListener('pointerdown', colorMenu.__liaPlotColorMenuClickHandler, true);
    colorMenu.addEventListener('click', colorMenu.__liaPlotColorMenuClickHandler, true);

    if (eraseButton.__liaPlotEraseClickHandler) {
      try { eraseButton.removeEventListener('click', eraseButton.__liaPlotEraseClickHandler); } catch (e) {}
    }
    eraseButton.__liaPlotEraseClickHandler = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      state.tool = state.tool === 'erase' ? '' : 'erase';
      state.drawing = false;
      state.pointerId = null;
      setColorMenuOpen(false);
      setRegressionMenuOpen(false);
      updateUi(boardId);
    };
    eraseButton.addEventListener('click', eraseButton.__liaPlotEraseClickHandler);

    if (analyzeButton.__liaPlotAnalyzeClickHandler) {
      try { analyzeButton.removeEventListener('click', analyzeButton.__liaPlotAnalyzeClickHandler); } catch (e) {}
    }
    analyzeButton.__liaPlotAnalyzeClickHandler = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      try {
        const curState = window.__liaCoordDrawStates && window.__liaCoordDrawStates[boardId];
        const curBoard = window.__boards && window.__boards[boardId];
        const st = curState || state;
        st.tool = st.tool === 'analyze' ? '' : 'analyze';
        st.drawing = false;
        st.pointerId = null;
        setColorMenuOpen(false);
        setRegressionMenuOpen(false);
        if (st.tool !== 'analyze') {
          st.analyzedStrokeIndex = -1;
          st.analyzedCurvePoints = null;
          setAnalyzePanel(curBoard || board, st, '');
        }
        updateUi(boardId);
        scheduleRedraw(boardId);
      } catch (err) {
        try {
          setAnalyzePanel(null, state, 'FEHLER: ' + String(err && err.message || err));
        } catch (e2) {}
      }
    };
    analyzeButton.addEventListener('click', analyzeButton.__liaPlotAnalyzeClickHandler);

    if (regressionButton) {
      if (regressionButton.__liaPlotRegressionClickHandler) {
        try { regressionButton.removeEventListener('click', regressionButton.__liaPlotRegressionClickHandler); } catch (e) {}
      }
      regressionButton.__liaPlotRegressionClickHandler = function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        const wasOpen = !!state.regressionMenuOpen;
        if (wasOpen) {
          state.tool = '';
          state.regressionMode = '';
        }
        state.drawing = false;
        state.pointerId = null;
        setColorMenuOpen(false);
        setRegressionMenuOpen(!wasOpen);
        updateUi(boardId);
        scheduleRedraw(boardId);
      };
      regressionButton.addEventListener('click', regressionButton.__liaPlotRegressionClickHandler);
    }

    if (regressionMenu) {
      if (regressionMenu.__liaPlotRegressionMenuHandler) {
        try { regressionMenu.removeEventListener('click', regressionMenu.__liaPlotRegressionMenuHandler, true); } catch (e) {}
      }
      regressionMenu.__liaPlotRegressionMenuHandler = function(evt) {
        const btn = evt.target && evt.target.closest ? evt.target.closest('.lia-plot-reg-item') : null;
        if (!btn) return;
        evt.preventDefault();
        evt.stopPropagation();
        const action = String(btn.getAttribute('data-action') || '').trim();
        if (action === 'recognize' || action === 'select-points') {
          const newMode = (state.regressionMode === action) ? '' : action;
          state.regressionMode = newMode;
          if (newMode === 'recognize') {
            state.tool = 'analyze';
          } else if (newMode === 'select-points') {
            state.tool = 'regression';
          } else {
            state.tool = '';
          }
          if (newMode !== 'recognize') {
            state.analyzedStrokeIndex = -1;
            state.analyzedCurvePoints = null;
            setAnalyzePanel(board, state, '');
          }
          state.drawing = false;
          state.pointerId = null;
          updateUi(boardId);
          scheduleRedraw(boardId);
          return;
        }
        if (action === 'clear') {
          state.regressionPoints = [];
          state.analyzedCurvePoints = null;
          state.analyzedStrokeIndex = -1;
          scheduleRedraw(boardId);
          return;
        }
        if (action === 'compute') {
          if (typeof state.__runRegressionFromSelectedPoints === 'function') {
            state.__runRegressionFromSelectedPoints();
            state.tool = '';
            state.drawing = false;
            state.pointerId = null;
            setRegressionMenuOpen(false);
            updateUi(boardId);
            scheduleRedraw(boardId);
          } else {
            setAnalyzePanel(board, state, 'Regression noch nicht initialisiert.');
          }
        }
      };
      regressionMenu.addEventListener('click', regressionMenu.__liaPlotRegressionMenuHandler, true);
    }

    bindCanvas(boardId);
    bindBoardHooks(boardId);

    if (!board.containerObj.__liaPlotMenusDocBound) {
      board.containerObj.__liaPlotMenusDocBound = true;
      document.addEventListener('pointerdown', function(evt) {
        const st = getState(boardId);
        if (!st) return;

        if (st.drawColorMenu && st.drawColorMenuOpen) {
          const inBtn = st.drawButton && st.drawButton.contains(evt.target);
          const inMenu = st.drawColorMenu.contains(evt.target);
          if (!inBtn && !inMenu) {
            st.drawColorMenuOpen = false;
            st.drawColorMenu.dataset.open = '0';
            st.drawColorMenu.style.display = 'none';
          }
        }

        // Regressionsmenü bleibt offen – wird nur über den Hauptbutton geschlossen.

        if (st.tool !== 'draw' && st.drawColorMenu && st.drawColorMenu.style.display !== 'none') {
          st.drawColorMenuOpen = false;
          st.drawColorMenu.dataset.open = '0';
          st.drawColorMenu.style.display = 'none';
        }
      }, true);
    }

    updateUi(boardId);
    scheduleRedraw(boardId);
    return true;
  }

  function splitSpecTopLevel(str) {
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
        depth += 1;
        cur += ch;
        continue;
      }

      if (ch === ')' || ch === ']' || ch === '}') {
        depth = Math.max(0, depth - 1);
        cur += ch;
        continue;
      }

      if (ch === ';' && depth === 0) {
        out.push(cur.trim());
        cur = '';
        continue;
      }

      cur += ch;
    }

    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  function parseRekonstruktionSpec(spec) {
    const raw = String(spec || '').trim();
    const parts = splitSpecTopLevel(raw);

    const boardId = String(parts[0] || '').trim();
    let term = '';
    let epsRaw = '';

    if (parts.length >= 3) {
      term = parts.slice(1, parts.length - 1).join(';').trim();
      epsRaw = String(parts[parts.length - 1] || '').trim();
    } else {
      term = String(parts[1] || '').trim();
      epsRaw = String(parts[2] || '').trim();
    }

    const epsNum = parseFloat(epsRaw.replace(',', '.'));
    const eps = Number.isFinite(epsNum) ? Math.abs(epsNum) : 0.1;

    return {
      boardId: boardId,
      term: term,
      eps: eps
    };
  }

  function normalizeRekExpr(expr) {
    let s = String(expr || '').trim();

    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*\(\s*x\s*\)\s*=\s*/i, '');
    s = s.replace(/^[A-Za-z][A-Za-z0-9_]*\s*=\s*/i, '');

    s = s
      .replace(/[−–—]/g, '-')
      .replace(/\^/g, '**')
      .replace(/(\d),(\d)/g, '$1.$2');

    s = s.replace(/(\d)\s*x\b/g, '$1*x');
    s = s.replace(/(\d)\s*\(/g, '$1*(');
    s = s.replace(/\bx\s*\(/g, 'x*(');
    s = s.replace(/\)\s*(\d)/g, ')*$1');

    return s.trim();
  }

  function compileRekExpr(expr) {
    const src = normalizeRekExpr(expr);
    if (!src) return null;

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

        return (${src});
        `
      );
    } catch (e) {
      return null;
    }
  }

  function getSafeRekBBox(board) {
    try {
      const bb = board.getBoundingBox();
      if (
        Array.isArray(bb) &&
        bb.length === 4 &&
        bb.every(function(v) { return Number.isFinite(v); })
      ) {
        const xmin = Math.min(bb[0], bb[2]);
        const xmax = Math.max(bb[0], bb[2]);
        if (xmax > xmin) return [xmin, xmax];
      }
    } catch (e) {}
    return [-5, 5];
  }

  function analyzeTermAsModel(boardId, board, term) {
    const fn = compileRekExpr(term);
    if (!fn) return null;

    const xRange = getSafeRekBBox(board);
    const xmin = xRange[0];
    const xmax = xRange[1];
    const count = 140;
    const pts = [];

    for (let i = 0; i <= count; i++) {
      const x = xmin + (xmax - xmin) * (i / count);
      let y = NaN;
      try { y = fn(x); } catch (e) {}
      if (Number.isFinite(y) && Math.abs(y) < 1e7) {
        pts.push({ x: x, y: y });
      }
    }

    if (pts.length < 2) return null;
    return analyzeStroke(boardId, { points: pts }, { pointMode: true });
  }

  function extractActiveModelFromResultData(resultData, activeIndex, activeParams) {
    if (!resultData || !Array.isArray(resultData.candidates) || !resultData.candidates.length) return null;

    const idx = Math.max(0, Math.min(resultData.candidates.length - 1, Number(activeIndex) || 0));
    const candidate = resultData.candidates[idx] || resultData.candidates[0];
    if (!candidate) return null;

    const params = Object.assign({}, candidate.params || {});
    if (activeParams && typeof activeParams === 'object') {
      Object.keys(activeParams).forEach(function(key) {
        const value = Number(activeParams[key]);
        if (Number.isFinite(value)) params[key] = value;
      });
    }

    return {
      name: String(candidate.name || ''),
      params: params
    };
  }

  function extractLearnerModel(boardId, board, state) {
    const modelStates = (state && Array.isArray(state.analyzedModelStates))
      ? state.analyzedModelStates
      : [];

    if (modelStates.length) {
      const latest = modelStates[modelStates.length - 1];
      const fromSaved = extractActiveModelFromResultData(
        latest && latest.resultData,
        latest && latest.activeIndex,
        latest && latest.activeParams
      );
      if (fromSaved) return fromSaved;
    }

    if (state && Array.isArray(state.regressionPoints) && state.regressionPoints.length >= 2) {
      const result = analyzeStroke(boardId, { points: state.regressionPoints.slice() }, { pointMode: true });
      if (result && result.best) {
        return {
          name: String(result.best.name || ''),
          params: Object.assign({}, result.best.params || {})
        };
      }
    }

    if (state && Array.isArray(state.strokes) && state.strokes.length) {
      const lastStroke = state.strokes[state.strokes.length - 1];
      const result = analyzeStroke(boardId, lastStroke, { pointMode: false });
      if (result && result.best) {
        return {
          name: String(result.best.name || ''),
          params: Object.assign({}, result.best.params || {})
        };
      }
    }

    return null;
  }

  function getScharEntriesForBoard(boardId, board) {
    const id = String(boardId || '').trim();
    if (!id) return [];

    const entries = Object.keys(window.__scharEntries || {}).map(function(key) {
      return window.__scharEntries[key];
    }).filter(function(entry) {
      if (!entry) return false;
      if (String(entry.boardId || '').trim() !== id) return false;
      if (board && entry.board && entry.board !== board) return false;
      return typeof entry.fn === 'function';
    });

    return entries;
  }

  function isBoardVisibleForQuiz(board) {
    if (!board || !board.containerObj) return false;
    try {
      const rect = board.containerObj.getBoundingClientRect();
      if (!rect) return false;
      if (!(rect.width > 10 && rect.height > 10)) return false;
      if (rect.bottom <= 0 || rect.right <= 0) return false;
      const vw = window.innerWidth || document.documentElement.clientWidth || 0;
      const vh = window.innerHeight || document.documentElement.clientHeight || 0;
      if (rect.left >= vw || rect.top >= vh) return false;
      return true;
    } catch (e) {
      return false;
    }
  }

  function getPreferredScharEntriesForQuiz(boardId, board) {
    const all = getScharEntriesForBoard(boardId, null);
    if (!all.length) return all;

    const visible = all.filter(function(entry) {
      return entry && isBoardVisibleForQuiz(entry.board);
    });

    const base = visible.length ? visible : all;
    if (!board) return base;

    const sameBoard = base.filter(function(entry) {
      return entry && entry.board === board;
    });

    return sameBoard.length ? sameBoard : base;
  }

  function getVisibleScharEntriesFromDom(boardId) {
    const id = String(boardId || '').trim();
    if (!id) return [];

    const inViewport = function(node) {
      if (!node || !node.getBoundingClientRect) return false;
      try {
        const r = node.getBoundingClientRect();
        if (!(r.width > 0 && r.height > 0)) return false;
        const vw = window.innerWidth || document.documentElement.clientWidth || 0;
        const vh = window.innerHeight || document.documentElement.clientHeight || 0;
        if (r.right <= 0 || r.bottom <= 0 || r.left >= vw || r.top >= vh) return false;
        return true;
      } catch (e) {
        return false;
      }
    };

    const nodes = Array.from(document.querySelectorAll('[id^="schar-spec-"][data-spec]'));
    const selected = [];

    nodes.forEach(function(node) {
      const spec = String(node.dataset.spec || '').trim();
      if (!spec) return;
      const parts = splitSpecTopLevel(spec);
      const boardFromSpec = String(parts[3] || '').trim();
      if (boardFromSpec !== id) return;

      const uid = String(node.id || '').replace(/^schar-spec-/, '');
      if (!uid) return;
      const key = 'schar-' + uid;
      const entry = window.__scharEntries && window.__scharEntries[key];
      if (!entry || typeof entry.fn !== 'function') return;
      if (!inViewport(entry.board && entry.board.containerObj ? entry.board.containerObj : null)) return;
      selected.push(entry);
    });

    return selected;
  }

  function getMostRecentScharEntriesForQuiz(boardId, board) {
    const preferred = getPreferredScharEntriesForQuiz(boardId, board);
    if (!preferred.length) return preferred;
    return preferred.slice().sort(function(a, b) {
      const ta = Number(a && a.__lastChangedAt || 0);
      const tb = Number(b && b.__lastChangedAt || 0);
      if (tb !== ta) return tb - ta;
      return String(a && a.uid || '').localeCompare(String(b && b.uid || ''));
    });
  }

  function getMostRecentChangedScharEntry(boardId) {
    const id = String(boardId || '').trim();
    if (!id) return null;
    let best = null;
    let bestTs = -1;
    Object.keys(window.__scharEntries || {}).forEach(function(key) {
      const entry = window.__scharEntries[key];
      if (!entry) return;
      if (String(entry.boardId || '').trim() !== id) return;
      const ts = Number(entry.__lastChangedAt || 0);
      if (!Number.isFinite(ts)) return;
      if (ts > bestTs) {
        bestTs = ts;
        best = entry;
      }
    });
    return best;
  }

  function markScharEntryActive(entry, asChanged) {
    if (!entry) return;
    const boardId = String(entry.boardId || '').trim();
    if (!boardId) return;
    window.__liaActiveScharByBoard = window.__liaActiveScharByBoard || {};
    window.__liaActiveScharByBoard[boardId] = String(entry.uid || '');
    entry.__lastSelectedAt = Date.now();
    if (asChanged) entry.__lastChangedAt = entry.__lastSelectedAt;
  }

  function getActiveScharEntryForBoard(boardId) {
    const id = String(boardId || '').trim();
    if (!id) return null;

    const byBoard = window.__liaActiveScharByBoard || {};
    const activeUid = String(byBoard[id] || '').trim();
    if (activeUid) {
      const activeKey = 'schar-' + activeUid;
      const activeEntry = window.__scharEntries && window.__scharEntries[activeKey];
      if (activeEntry && String(activeEntry.boardId || '').trim() === id && typeof activeEntry.fn === 'function') {
        return activeEntry;
      }
    }

    let best = null;
    let bestTs = -1;
    Object.keys(window.__scharEntries || {}).forEach(function(key) {
      const entry = window.__scharEntries[key];
      if (!entry) return;
      if (String(entry.boardId || '').trim() !== id) return;
      if (typeof entry.fn !== 'function') return;
      const ts = Number(entry.__lastSelectedAt || 0);
      if (!Number.isFinite(ts)) return;
      if (ts > bestTs) {
        bestTs = ts;
        best = entry;
      }
    });

    return best;
  }

  function getAllVisibleScharEntries() {
    const out = [];
    Object.keys(window.__scharEntries || {}).forEach(function(key) {
      const entry = window.__scharEntries[key];
      if (!entry || typeof entry.fn !== 'function') return;
      if (!isBoardVisibleForQuiz(entry.board)) return;
      out.push(entry);
    });
    return out;
  }

  function extractLearnerModelFromSchar(boardId, board) {
    const entries = getScharEntriesForBoard(boardId, board);
    if (!entries.length) return null;

    // Use the latest Schar entry on this board, which matches current task intent.
    const entry = entries[entries.length - 1];
    const xRange = getSafeRekBBox(board);
    const xmin = xRange[0];
    const xmax = xRange[1];
    const count = 140;
    const pts = [];

    for (let i = 0; i <= count; i++) {
      const x = xmin + (xmax - xmin) * (i / count);
      let y = NaN;
      try { y = evaluateAt(entry, x); } catch (e) {}
      if (Number.isFinite(y) && Math.abs(y) < 1e7) {
        pts.push({ x: x, y: y });
      }
    }

    if (pts.length < 2) return null;
    const result = analyzeStroke(boardId, { points: pts }, { pointMode: true });
    if (!result || !result.best) return null;

    return {
      name: String(result.best.name || ''),
      params: Object.assign({}, result.best.params || {})
    };
  }

  function extractLearnerModelFromScharEntry(boardId, entry) {
    if (!entry || typeof entry.fn !== 'function') return null;
    const board = entry.board;
    if (!board) return null;

    const xRange = getSafeRekBBox(board);
    const xmin = xRange[0];
    const xmax = xRange[1];
    const count = 140;
    const pts = [];

    for (let i = 0; i <= count; i++) {
      const x = xmin + (xmax - xmin) * (i / count);
      let y = NaN;
      try { y = evaluateAt(entry, x); } catch (e) {}
      if (Number.isFinite(y) && Math.abs(y) < 1e7) {
        pts.push({ x: x, y: y });
      }
    }

    if (pts.length < 2) return null;
    const result = analyzeStroke(boardId, { points: pts }, { pointMode: true });
    if (!result || !result.best) return null;

    return {
      name: String(result.best.name || ''),
      params: Object.assign({}, result.best.params || {})
    };
  }

  function extractLearnerModelsFromSchar(boardId, board) {
    const entries = getScharEntriesForBoard(boardId, board);
    if (!entries.length) return [];
    const models = [];

    entries.forEach(function(entry) {
      const model = extractLearnerModelFromScharEntry(boardId, entry);
      if (model) models.push(model);
    });

    return models;
  }

  function boardHasScharSpecNode(boardId) {
    const id = String(boardId || '').trim();
    if (!id) return false;

    const nodes = document.querySelectorAll('[id^="schar-spec-"][data-spec]');
    for (let i = 0; i < nodes.length; i++) {
      const spec = String(nodes[i].dataset.spec || '').trim();
      if (!spec) continue;
      const parts = splitSpecTopLevel(spec);
      const boardFromSpec = String(parts[3] || '').trim();
      if (boardFromSpec === id) return true;
    }

    return false;
  }

  function getComparableParamValue(modelName, params, key) {
    const value = Number(params && params[key]);
    if (Number.isFinite(value)) return value;

    if (key === 'b' && (modelName === 'wurzel' || modelName === 'hyperbel' || modelName === 'hyperbel2' || modelName === 'logarithmus')) {
      return 1;
    }

    return NaN;
  }

  function compareModelParams(learnerModel, targetModel, eps) {
    if (!learnerModel || !targetModel) return false;
    if (String(learnerModel.name || '') !== String(targetModel.name || '')) return false;

    const keys = Object.keys(targetModel.params || {});
    if (!keys.length) return false;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const targetValue = getComparableParamValue(targetModel.name, targetModel.params, key);
      const learnerValue = getComparableParamValue(learnerModel.name, learnerModel.params, key);
      if (!Number.isFinite(targetValue) || !Number.isFinite(learnerValue)) return false;
      if (Math.abs(learnerValue - targetValue) > eps) return false;
    }

    return true;
  }

  function scharMatchesTargetNumerically(entry, targetFn, eps) {
    if (!entry || typeof entry.fn !== 'function' || typeof targetFn !== 'function') return false;

    const targetLinear = extractLinearParamsFromFn(targetFn);
    const learnerLinear = extractLinearParamsFromSchar(entry);
    if (targetLinear && learnerLinear) {
      const tolLinear = Math.max(0.03, Number(eps) || 0.1);
      return Math.abs(learnerLinear.m - targetLinear.m) <= tolLinear && Math.abs(learnerLinear.n - targetLinear.n) <= tolLinear;
    }

    const board = entry.board;
    if (!board) return false;

    const range = getSafeRekBBox(board);
    const xmin = range[0];
    const xmax = range[1];
    if (!Number.isFinite(xmin) || !Number.isFinite(xmax) || xmax <= xmin) return false;

    const samples = 80;
    const tol = Math.max(0.03, Number(eps) || 0.1);
    let valid = 0;

    for (let i = 0; i <= samples; i++) {
      const x = xmin + (xmax - xmin) * (i / samples);
      let ys = NaN;
      let yt = NaN;
      try { ys = evaluateAt(entry, x); } catch (e) {}
      try { yt = targetFn(x); } catch (e) {}
      if (!Number.isFinite(ys) || !Number.isFinite(yt)) continue;
      valid += 1;
      if (Math.abs(ys - yt) > tol) return false;
    }

    return valid >= 20;
  }

  function extractLinearParamsFromFn(fn) {
    if (typeof fn !== 'function') return null;
    let y0 = NaN, y1 = NaN, y2 = NaN;
    try { y0 = fn(0); } catch (e) {}
    try { y1 = fn(1); } catch (e) {}
    try { y2 = fn(2); } catch (e) {}
    if (!Number.isFinite(y0) || !Number.isFinite(y1) || !Number.isFinite(y2)) return null;
    const m = y1 - y0;
    const n = y0;
    const y2Pred = 2 * m + n;
    if (!Number.isFinite(y2Pred)) return null;
    if (Math.abs(y2 - y2Pred) > 0.02) return null;
    return { m: m, n: n };
  }

  function extractLinearParamsFromSchar(entry) {
    if (!entry || typeof entry.fn !== 'function') return null;
    let y0 = NaN, y1 = NaN, y2 = NaN;
    try { y0 = evaluateAt(entry, 0); } catch (e) {}
    try { y1 = evaluateAt(entry, 1); } catch (e) {}
    try { y2 = evaluateAt(entry, 2); } catch (e) {}
    if (!Number.isFinite(y0) || !Number.isFinite(y1) || !Number.isFinite(y2)) return null;
    const m = y1 - y0;
    const n = y0;
    const y2Pred = 2 * m + n;
    if (!Number.isFinite(y2Pred)) return null;
    if (Math.abs(y2 - y2Pred) > 0.05) return null;
    return { m: m, n: n };
  }

  function scharMatchesTargetLinearParams(entry, targetFn, eps) {
    const target = extractLinearParamsFromFn(targetFn);
    const learner = extractLinearParamsFromSchar(entry);
    if (!target || !learner) return false;
    const tol = Math.max(0.03, Number(eps) || 0.1);
    return Math.abs(learner.m - target.m) <= tol && Math.abs(learner.n - target.n) <= tol;
  }

  function getScharTermRhsFromEntry(entry) {
    if (!entry) return '';

    let rhs = '';
    if (typeof entry._currentTermRhs === 'string' && entry._currentTermRhs.trim()) {
      rhs = entry._currentTermRhs.trim();
    } else if (typeof substitutedWithNShift === 'function') {
      try { rhs = String(substitutedWithNShift(entry) || '').trim(); } catch (e) {}
    }

    if (!rhs && entry.termEl) {
      const text = String((entry.termEl.textContent || entry.termEl.innerText || '')).trim();
      const eqPos = text.indexOf('=');
      rhs = eqPos >= 0 ? text.slice(eqPos + 1).trim() : text;
    }

    return String(rhs || '').trim();
  }

  function sanitizeDisplayedRhsForCompile(rhs) {
    let s = String(rhs || '').trim();
    if (!s) return '';
    s = s.replace(/\u00a0/g, ' ');
    s = s.replace(/\u2212/g, '-');
    s = s.replace(/\u00b7/g, '*');
    s = s.replace(/\\cdot/g, '*');
    s = s.replace(/\s+/g, '');
    s = s.replace(/,(?=\d)/g, '.');
    return s;
  }

  function scharEntryRhsMatchesTarget(entry, targetFn, eps) {
    if (!entry || typeof targetFn !== 'function') return false;
    const rhsRaw = getScharTermRhsFromEntry(entry);
    const rhs = sanitizeDisplayedRhsForCompile(rhsRaw);
    if (!rhs) return false;
    const rhsFn = compileRekExpr(rhs);
    if (typeof rhsFn !== 'function') return false;

    const targetLinear = extractLinearParamsFromFn(targetFn);
    const rhsLinear = extractLinearParamsFromFn(rhsFn);
    if (targetLinear && rhsLinear) {
      const tolLinear = Math.max(0.03, Number(eps) || 0.1);
      return Math.abs(rhsLinear.m - targetLinear.m) <= tolLinear && Math.abs(rhsLinear.n - targetLinear.n) <= tolLinear;
    }

    const board = entry.board;
    if (!board) return false;
    const range = getSafeRekBBox(board);
    const xmin = range[0];
    const xmax = range[1];
    if (!Number.isFinite(xmin) || !Number.isFinite(xmax) || xmax <= xmin) return false;

    const samples = 60;
    const tol = Math.max(0.03, Number(eps) || 0.1);
    let valid = 0;
    for (let i = 0; i <= samples; i++) {
      const x = xmin + (xmax - xmin) * (i / samples);
      let yr = NaN;
      let yt = NaN;
      try { yr = rhsFn(x); } catch (e) {}
      try { yt = targetFn(x); } catch (e) {}
      if (!Number.isFinite(yr) || !Number.isFinite(yt)) continue;
      valid += 1;
      if (Math.abs(yr - yt) > tol) return false;
    }

    return valid >= 12;
  }

  function removeRekonstruktionPlot(boardId) {
    window.__rekonstruktionPlots = window.__rekonstruktionPlots || {};
    const key = String(boardId || '').trim();
    if (!key) return;

    const old = window.__rekonstruktionPlots[key];
    if (!old) return;

    try {
      if (old.graph && old.graph.board) {
        old.graph.board.removeObject(old.graph);
      }
    } catch (e) {}

    delete window.__rekonstruktionPlots[key];
  }

  window.__revealRekonstruktionFromSpec = function(spec) {
    const cfg = parseRekonstruktionSpec(spec);
    if (!cfg.boardId || !cfg.term) return false;

    let board = window.__boards && window.__boards[cfg.boardId];
    const domPreferredEntries = getVisibleScharEntriesFromDom(cfg.boardId);
    const scharEntries = domPreferredEntries.length
      ? domPreferredEntries
      : getPreferredScharEntriesForQuiz(cfg.boardId, board);
    if (scharEntries.length) {
      const preferred = scharEntries[scharEntries.length - 1];
      if (preferred && preferred.board) board = preferred.board;
    }
    if (!board) return false;

    const fn = compileRekExpr(cfg.term);
    if (!fn) return false;

    removeRekonstruktionPlot(cfg.boardId);

    let graph = null;
    try {
      graph = board.create('functiongraph', [fn], {
        strokeColor: '#00a86b',
        highlightStrokeColor: '#00a86b',
        strokeWidth: 3,
        dash: 1,
        fixed: true,
        highlight: false,
        withLabel: false
      });
      try { graph.setAttribute({ fixed: true, highlight: false }); } catch (e) {}
    } catch (e) {
      return false;
    }

    window.__rekonstruktionPlots = window.__rekonstruktionPlots || {};
    window.__rekonstruktionPlots[String(cfg.boardId)] = {
      boardId: String(cfg.boardId),
      term: String(cfg.term),
      graph: graph
    };

    try { board.update(); } catch (e) {}
    return true;
  };

  window.__checkRekonstruktionFromSpec = function(spec) {
    const cfg = parseRekonstruktionSpec(spec);
    if (!cfg.boardId || !cfg.term) return false;

    const board = window.__boards && window.__boards[cfg.boardId];
    if (!board && !getScharEntriesForBoard(cfg.boardId, null).length) return false;

    const targetFn = compileRekExpr(cfg.term);

    const activeEntry = getActiveScharEntryForBoard(cfg.boardId);
    if (activeEntry && targetFn && scharEntryRhsMatchesTarget(activeEntry, targetFn, cfg.eps)) {
      if (typeof window.__revealRekonstruktionFromSpec === 'function') {
        window.__revealRekonstruktionFromSpec(spec);
      }
      return true;
    }

    const mostRecentEntry = getMostRecentChangedScharEntry(cfg.boardId);
    if (mostRecentEntry && targetFn && scharEntryRhsMatchesTarget(mostRecentEntry, targetFn, cfg.eps)) {
      if (typeof window.__revealRekonstruktionFromSpec === 'function') {
        window.__revealRekonstruktionFromSpec(spec);
      }
      return true;
    }
    if (mostRecentEntry && targetFn && scharMatchesTargetLinearParams(mostRecentEntry, targetFn, cfg.eps)) {
      if (typeof window.__revealRekonstruktionFromSpec === 'function') {
        window.__revealRekonstruktionFromSpec(spec);
      }
      return true;
    }
    if (mostRecentEntry && targetFn && scharMatchesTargetNumerically(mostRecentEntry, targetFn, cfg.eps)) {
      if (typeof window.__revealRekonstruktionFromSpec === 'function') {
        window.__revealRekonstruktionFromSpec(spec);
      }
      return true;
    }

    if (targetFn) {
      const visibleScharEntries = getAllVisibleScharEntries();
      for (let i = 0; i < visibleScharEntries.length; i++) {
        const entry = visibleScharEntries[i];
        if (scharMatchesTargetLinearParams(entry, targetFn, cfg.eps)) {
          if (typeof window.__revealRekonstruktionFromSpec === 'function') {
            window.__revealRekonstruktionFromSpec(spec);
          }
          return true;
        }
        if (scharMatchesTargetNumerically(entry, targetFn, cfg.eps)) {
          if (typeof window.__revealRekonstruktionFromSpec === 'function') {
            window.__revealRekonstruktionFromSpec(spec);
          }
          return true;
        }
      }
    }

    const domPreferredEntries = getVisibleScharEntriesFromDom(cfg.boardId);
    const scharEntries = domPreferredEntries.length
      ? domPreferredEntries
      : getMostRecentScharEntriesForQuiz(cfg.boardId, board);
    if (scharEntries.length) {
      for (let i = 0; i < scharEntries.length; i++) {
        const entry = scharEntries[i];
        if (targetFn && scharMatchesTargetNumerically(entry, targetFn, cfg.eps)) {
          if (typeof window.__revealRekonstruktionFromSpec === 'function') {
            window.__revealRekonstruktionFromSpec(spec);
          }
          return true;
        }

        const learnerModel = extractLearnerModelFromScharEntry(cfg.boardId, entry);
        if (!learnerModel) continue;

        const targetResultFromEntryBoard = analyzeTermAsModel(cfg.boardId, entry.board || board, cfg.term);
        if (!targetResultFromEntryBoard || !targetResultFromEntryBoard.best) continue;

        const targetModelFromEntryBoard = {
          name: String(targetResultFromEntryBoard.best.name || ''),
          params: Object.assign({}, targetResultFromEntryBoard.best.params || {})
        };

        if (compareModelParams(learnerModel, targetModelFromEntryBoard, cfg.eps)) {
          if (typeof window.__revealRekonstruktionFromSpec === 'function') {
            window.__revealRekonstruktionFromSpec(spec);
          }
          return true;
        }
      }
    }

    const targetResult = analyzeTermAsModel(cfg.boardId, board, cfg.term);
    if (!targetResult || !targetResult.best) return false;

    const targetModel = {
      name: String(targetResult.best.name || ''),
      params: Object.assign({}, targetResult.best.params || {})
    };

    const scharModels = extractLearnerModelsFromSchar(cfg.boardId, board);
    for (let i = 0; i < scharModels.length; i++) {
      if (compareModelParams(scharModels[i], targetModel, cfg.eps)) {
        if (typeof window.__revealRekonstruktionFromSpec === 'function') {
          window.__revealRekonstruktionFromSpec(spec);
        }
        return true;
      }
    }

    const state = window.__liaCoordDrawStates && window.__liaCoordDrawStates[cfg.boardId];
    let learnerModel = extractLearnerModelFromSchar(cfg.boardId, board);
    if (!learnerModel && state) {
      learnerModel = extractLearnerModel(cfg.boardId, board, state);
    }
    if (!learnerModel) return false;

    const ok = compareModelParams(learnerModel, targetModel, cfg.eps);
    if (ok && typeof window.__revealRekonstruktionFromSpec === 'function') {
      window.__revealRekonstruktionFromSpec(spec);
    }

    return ok;
  };

  window.__enableRekonstruktionBoard = function(boardId) {
    const id = String(boardId || '').trim();
    if (!id) return false;

    const hasSchar = getScharEntriesForBoard(id, null).length > 0 || boardHasScharSpecNode(id);
    if (hasSchar) {
      // Schar-based Rekonstruktion should not force draw/regression controls.
      return true;
    }

    window.__liaCoordRegressionSpecs = window.__liaCoordRegressionSpecs || {};
    window.__liaCoordRegressionSpecs[id] = { enabled: true };

    if (typeof window.__bootstrapRegression === 'function') {
      window.__bootstrapRegression();
    }
    if (typeof window.__bootstrapPlotZeichnen === 'function') {
      window.__bootstrapPlotZeichnen();
    }

    return true;
  };

  function getRekQuizStore() {
    window.__rekQuizStore = window.__rekQuizStore || {};
    return window.__rekQuizStore;
  }

  function parseRekOptionDataAttrs(source) {
    const src = String(source || '');
    const re = /(data-[\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>/]+))/gi;
    const attrs = [];
    let m;

    while ((m = re.exec(src)) !== null) {
      const name = String(m[1] || '').toLowerCase();
      if (!name) continue;
      const value = m[2] != null ? m[2] : (m[3] != null ? m[3] : (m[4] != null ? m[4] : ''));
      attrs.push({ name: name, value: String(value) });
    }

    return attrs;
  }

  function collectRekDataAttrsFromElement(el) {
    if (!el || !el.attributes) return [];

    const out = [];
    for (let i = 0; i < el.attributes.length; i++) {
      const attr = el.attributes[i];
      const name = String(attr && attr.name || '').toLowerCase();
      if (!/^data-/.test(name)) continue;
      if (name !== 'data-solution-button' && !/^data-solution-timer(?:-|$)/.test(name)) continue;
      out.push({ name: name, value: String(attr.value == null ? '' : attr.value) });
    }
    return out;
  }

  function mergeRekAttrs(list) {
    const map = Object.create(null);
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (!item || !item.name) continue;
      map[String(item.name).toLowerCase()] = String(item.value == null ? '' : item.value);
    }
    return Object.keys(map).map(function(name) {
      return { name: name, value: map[name] };
    });
  }

  function collectRekLeadingOptionText(anchor) {
    if (!anchor) return '';

    const chunks = [];
    let cur = anchor.previousSibling;
    let guard = 0;

    while (cur && guard < 30) {
      guard += 1;

      if (cur.nodeType === 8) {
        const raw = String(cur.data || '').trim();
        if (raw) chunks.unshift(raw);
        cur = cur.previousSibling;
        continue;
      }

      if (cur.nodeType === 3) {
        const text = String(cur.textContent || '');
        if (!text.trim()) {
          cur = cur.previousSibling;
          continue;
        }

        const matches = text.match(/<!--[\s\S]*?-->/g);
        if (!matches || !matches.length) break;

        for (let i = 0; i < matches.length; i++) {
          const inner = String(matches[i]).replace(/^\s*<!--\s*|\s*-->\s*$/g, '').trim();
          if (inner) chunks.unshift(inner);
        }

        cur = cur.previousSibling;
        continue;
      }

      if (cur.nodeType === 1) {
        const tag = String(cur.tagName || '').toLowerCase();
        const isIgnorable = tag === 'br' || (tag === 'p' && !String(cur.textContent || '').trim());
        if (isIgnorable) {
          cur = cur.previousSibling;
          continue;
        }
      }

      break;
    }

    return chunks.join(' ').trim();
  }

  function parseRekRevealSetting(attrs) {
    for (let i = 0; i < attrs.length; i++) {
      const item = attrs[i];
      if (item && item.name === 'data-solution-button') {
        return String(item.value == null ? '' : item.value).trim().toLowerCase();
      }
    }
    return '';
  }

  function findRekControlButtons(root) {
    if (!root || !root.querySelectorAll) return [];
    return Array.from(root.querySelectorAll('button.lia-btn, input.lia-btn, button, input[type="button"], input[type="submit"]'));
  }

  function isRekResolveButton(root, btn) {
    if (!root || !btn) return false;

    const cls = String(btn.className || '').toLowerCase();
    if (/lia-quiz__resolve/.test(cls)) return true;
    if (/lia-quiz__check/.test(cls)) return false;

    const text = String(btn.textContent || btn.value || btn.getAttribute('aria-label') || '')
      .trim()
      .toLowerCase();
    if (/(solution|aufl|show|loes|l\u00f6s)/.test(text)) return true;
    if (/(check|pr\u00fcf|pruef)/.test(text)) return false;

    const buttons = findRekControlButtons(root);
    const idx = buttons.indexOf(btn);
    return idx >= 1;
  }

  function applyRekOptionAttrs(state) {
    if (!state || !state.root) return;
    const attrs = state.optionAttrs || [];
    if (!attrs.length) return;

    for (let i = 0; i < attrs.length; i++) {
      const item = attrs[i];
      try { state.root.setAttribute(item.name, item.value); } catch (e) {}
      try { if (state.specNode) state.specNode.setAttribute(item.name, item.value); } catch (e) {}
    }

    const applyToQuizzes = (retries) => {
      if (!state || !state.root || !state.root.querySelectorAll) return;
      let targets = [];
      try {
        targets = Array.from(state.root.querySelectorAll('lia-quiz, .lia-quiz'));
      } catch (e) {}

      if (!targets.length) {
        if (retries < 320) requestAnimationFrame(function() { applyToQuizzes(retries + 1); });
        return;
      }

      for (let i = 0; i < targets.length; i++) {
        for (let j = 0; j < attrs.length; j++) {
          try { targets[i].setAttribute(attrs[j].name, attrs[j].value); } catch (e) {}
        }
      }
    };

    applyToQuizzes(0);
  }

  function applyRekRevealState(state) {
    if (!state || !state.root) return;
    if (!state.revealSetting) return;

    const buttons = findRekControlButtons(state.root).filter(function(btn) {
      return isRekResolveButton(state.root, btn);
    });
    if (!buttons.length) return;

    const attempts = Math.max(0, Number(state.failedChecks) || 0);
    let show = true;

    if (/^(off|false|disable|disabled|none)$/.test(state.revealSetting)) {
      show = false;
    } else if (/^(on|true|enable|enabled)$/.test(state.revealSetting)) {
      show = true;
    } else if (/^\d+$/.test(state.revealSetting)) {
      const threshold = parseInt(state.revealSetting, 10);
      show = attempts >= (Number.isFinite(threshold) ? threshold : 0);
    }

    for (let i = 0; i < buttons.length; i++) {
      try { buttons[i].style.display = show ? '' : 'none'; } catch (e) {}
    }
  }

  function resolveRekOptionAttrs(root, specNode) {
    const commentText = collectRekLeadingOptionText(specNode) || collectRekLeadingOptionText(root);
    const fromComment = parseRekOptionDataAttrs(commentText);
    const fromSpecNode = collectRekDataAttrsFromElement(specNode);
    const fromRoot = collectRekDataAttrsFromElement(root);

    return mergeRekAttrs([].concat(fromComment, fromSpecNode, fromRoot));
  }

  window.__setupRekonstruktionQuiz = function(uid, spec) {
    const id = String(uid || '').trim();
    if (!id) return false;

    const root = document.getElementById('rek-check-' + id);
    const specNode = document.getElementById('rek-spec-' + id);
    if (!root || !specNode) return false;

    const rawSpec = String(spec == null ? (specNode.dataset.spec || '') : spec);
    if (typeof window.__enableRekonstruktionBoard === 'function') {
      try {
        const boardId = String(rawSpec.split(';')[0] || '').trim();
        if (boardId) window.__enableRekonstruktionBoard(boardId);
      } catch (e) {}
    }

    const store = getRekQuizStore();
    const state = store[id] || (store[id] = { uid: id, failedChecks: 0, clickBound: false, observed: false });
    state.uid = id;
    state.root = root;
    state.specNode = specNode;
    state.spec = rawSpec;
    state.failedChecks = Math.max(0, Number(state.failedChecks) || 0);

    const attrs = resolveRekOptionAttrs(root, specNode);
    state.optionAttrs = attrs;
    state.revealSetting = parseRekRevealSetting(attrs);

    try { root.setAttribute('data-rek-failed-checks', String(state.failedChecks)); } catch (e) {}

    applyRekOptionAttrs(state);

    if (!state.clickBound) {
      state.clickBound = true;
      root.addEventListener('click', function(e) {
        const btn = e.target && e.target.closest
          ? e.target.closest('button, input[type="button"], input[type="submit"]')
          : null;
        if (!btn || !root.contains(btn)) return;
        if (!isRekResolveButton(root, btn)) return;

        const currentSpec = String((state.specNode && state.specNode.dataset && state.specNode.dataset.spec) || state.spec || '');
        setTimeout(function() {
          if (typeof window.__revealRekonstruktionFromSpec === 'function') {
            window.__revealRekonstruktionFromSpec(currentSpec);
          }
        }, 0);
        setTimeout(function() {
          if (typeof window.__revealRekonstruktionFromSpec === 'function') {
            window.__revealRekonstruktionFromSpec(currentSpec);
          }
        }, 80);
      }, true);
    }

    if (!state.observed && typeof MutationObserver === 'function') {
      state.observed = true;
      try {
        state.observer = new MutationObserver(function() {
          applyRekOptionAttrs(state);
          applyRekRevealState(state);
        });
        state.observer.observe(root, { childList: true, subtree: true });
      } catch (e) {}
    }

    applyRekRevealState(state);
    requestAnimationFrame(function() { applyRekRevealState(state); });
    setTimeout(function() { applyRekRevealState(state); }, 80);
    setTimeout(function() { applyRekRevealState(state); }, 220);
    setTimeout(function() { applyRekRevealState(state); }, 500);

    return true;
  };

  window.__checkRekonstruktionQuiz = function(uid, spec) {
    const id = String(uid || '').trim();
    if (!id) return false;

    const store = getRekQuizStore();
    const state = store[id] || (store[id] = { uid: id, failedChecks: 0, clickBound: false, observed: false });

    if (typeof window.__setupRekonstruktionQuiz === 'function') {
      window.__setupRekonstruktionQuiz(id, spec);
    }

    const effectiveSpec = String(spec == null ? (state.spec || '') : spec);
    const passed = (typeof window.__checkRekonstruktionFromSpec === 'function')
      ? !!window.__checkRekonstruktionFromSpec(effectiveSpec)
      : false;

    if (!passed) {
      state.failedChecks = Math.max(0, Number(state.failedChecks) || 0) + 1;
      try {
        if (state.root) state.root.setAttribute('data-rek-failed-checks', String(state.failedChecks));
      } catch (e) {}
    }

    applyRekRevealState(state);
    return passed;
  };

  window.__bootstrapPlotZeichnen = function() {
    const nodes = document.querySelectorAll('[id^="plot-zeichnen-spec-"][data-color]');

    nodes.forEach(function(node) {
      const boardId = String(node.dataset.boardId || '').trim();
      const color = String(node.dataset.color || '').trim();
      if (!boardId || !color) return;

      window.__liaCoordDrawSpecs[boardId] = { color: color };
    });

    getToolBoardIds().forEach(function(boardId) {
      ensureBoardTools(boardId);
    });
  };

  window.__bootstrapRegression = function() {
    const nodes = document.querySelectorAll('[id^="regression-spec-"][data-board-id]');

    nodes.forEach(function(node) {
      const boardId = String(node.dataset.boardId || '').trim();
      if (!boardId) return;
      window.__liaCoordRegressionSpecs[boardId] = { enabled: true };
    });

    getToolBoardIds().forEach(function(boardId) {
      ensureBoardTools(boardId);
    });
  };

  try {
    const mo = new MutationObserver(function() {
      if (window.__bootstrapPlotZeichnen) window.__bootstrapPlotZeichnen();
      if (window.__bootstrapRegression) window.__bootstrapRegression();
    });

    const root = document.body || document.documentElement;
    if (root) {
      mo.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-color', 'data-board-id']
      });
    }
  } catch (e) {}

  try {
    if (window.__registerLiaThemeListener) {
      window.__registerLiaThemeListener(function() {
        getToolBoardIds().forEach(updateUi);
      });
    }
  } catch (e) {}

  try {
    if (window.__bootstrapPlotZeichnen) window.__bootstrapPlotZeichnen();
    if (window.__bootstrapRegression) window.__bootstrapRegression();
    setTimeout(function() {
      if (window.__bootstrapPlotZeichnen) window.__bootstrapPlotZeichnen();
      if (window.__bootstrapRegression) window.__bootstrapRegression();
    }, 80);
    setTimeout(function() {
      if (window.__bootstrapPlotZeichnen) window.__bootstrapPlotZeichnen();
      if (window.__bootstrapRegression) window.__bootstrapRegression();
    }, 220);
  } catch (e) {}

  // Fallback theme/mode sync for environments without __registerLiaThemeListener.
  let __lastPlotThemeSig = '';
  setInterval(function() {
    const tone = resolveToolTone();
    const activeBg = resolveActiveBgColor();
    const sig = tone + '|' + activeBg;
    if (sig === __lastPlotThemeSig) return;
    __lastPlotThemeSig = sig;
    getToolBoardIds().forEach(updateUi);
  }, 350);
})();








































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
    const run = function() {
      kickAxisTitles();
    };

    if (window.__liaScheduleCoordResizePass) {
      try {
        window.__liaScheduleCoordResizePass('axis-titles');
      } catch (e) {}
    }

    requestAnimationFrame(run);
    setTimeout(run, 0);
    setTimeout(run, 80);
    setTimeout(run, 180);
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


function currentAccentColor() {
  try {
    const doc = themeDoc();
    const win = themeWin();
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

  return currentNeutralColor();
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

  function parseFixToken(v) {
    return /^fix$/i.test(String(v || '').trim());
  }

  function texName(name) {
    const s = String(name || '').trim();
    if (!s) return '\\(A\\)';
    if (s.includes('\\(') || s.includes('\\[') || s.includes('$')) return s;

    const m = s.match(/^(.+?)_(.+)$/);
    if (m) {
      return '\\(' + m[1] + '_{' + m[2] + '}\\)';
    }

    return '\\(' + s + '\\)';
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
      ty: parseFloat((parts[3] || '').replace(',', '.')),
      fixed: parseFixToken(parts[4] || '')
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

  function createPoint(board, boardId, name, x0, y0, isFixed) {
    try {
      const pt = board.create('point', [x0, y0], {
        name: texName(name),
        fixed: !!isFixed,
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

  window.placeKoordPointFromSpec = function(spec) {
    const target = getPointTargetFromSpec(spec);
    const boardId = target.boardId;
    const name = target.name;
    const tx = target.tx;
    const ty = target.ty;
    const isFixed = !!target.fixed;

    const board = window.__boards && window.__boards[boardId];
    if (!board || !name || Number.isNaN(tx) || Number.isNaN(ty)) return false;

    ensureBuckets(boardId);

    const state = window.__pointStates &&
      window.__pointStates[boardId] &&
      window.__pointStates[boardId][name];

    let pt = getLivePointOnCurrentBoard(boardId, name);

    if (!pt) {
      if (isFixed) {
        pt = createPoint(board, boardId, name, tx, ty, true);
      } else if (state && Number.isFinite(state.x) && Number.isFinite(state.y)) {
        pt = createPoint(board, boardId, name, state.x, state.y, false);
      } else {
        pt = createPoint(board, boardId, name, tx, ty, false);
      }
    }

    if (!pt) return false;

    if (isFixed) {
      movePointTo(pt, tx, ty);
    }

    try {
      pt.setAttribute({ fixed: isFixed });
    } catch (e) {}

    stylePointLabel(pt);
    bindPointPersistence(boardId, name, pt);
    savePointState(boardId, name, pt);

    try { board.update(); } catch (e) {}
    return true;
  };

  window.renderKoordPunktFromSpec = function(uid, spec) {
    const holder = document.getElementById('punkt-spec-' + uid);
    if (!holder) return false;

    if ((holder.dataset.spec || '') !== String(spec || '')) {
      holder.dataset.spec = spec;
    }

    if (typeof window.placeKoordPointFromSpec === 'function') {
      return !!window.placeKoordPointFromSpec(spec);
    }
    return false;
  };

  window.__bootstrapKoordPunkte = function() {
    const nodes = document.querySelectorAll('[id^="punkt-spec-"][data-spec]');

    nodes.forEach(function(node) {
      const uid = String(node.id || '').replace(/^punkt-spec-/, '');
      const spec = String(node.dataset.spec || '');
      if (!uid || !spec) return;

      window.renderKoordPunktFromSpec(uid, spec);
    });

    refreshAllPointLabels();
  };

  if (!window.__scheduleBootstrapKoordPunkte) {
    window.__scheduleBootstrapKoordPunkte = function() {
      if (window.__bootstrapKoordPunkteRAF) return;
      window.__bootstrapKoordPunkteRAF = requestAnimationFrame(function() {
        window.__bootstrapKoordPunkteRAF = 0;
        try {
          if (window.__bootstrapKoordPunkte) window.__bootstrapKoordPunkte();
        } catch (e) {}
      });
    };
  }

  try {
    const moKoordPunkte = new MutationObserver(function(mutations) {
      let needsBootstrap = false;

      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];

        if (m.type === 'attributes') {
          const target = m.target;
          if (target && target.id && /^punkt-spec-/.test(target.id)) {
            needsBootstrap = true;
            break;
          }
        }

        if (m.type !== 'childList') continue;

        const added = Array.from(m.addedNodes || []);
        for (let j = 0; j < added.length; j++) {
          const n = added[j];
          if (!n || n.nodeType !== 1) continue;

          if (
            (n.id && /^punkt-spec-/.test(n.id)) ||
            (n.querySelector && n.querySelector('[id^="punkt-spec-"][data-spec]'))
          ) {
            needsBootstrap = true;
            break;
          }
        }

        if (needsBootstrap) break;
      }

      if (needsBootstrap && window.__scheduleBootstrapKoordPunkte) {
        window.__scheduleBootstrapKoordPunkte();
      }
    });

    const rootKoordPunkte = document.body || document.documentElement;
    if (rootKoordPunkte) {
      moKoordPunkte.observe(rootKoordPunkte, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-spec']
      });
    }
  } catch (e) {}

  try {
    if (window.__scheduleBootstrapKoordPunkte) window.__scheduleBootstrapKoordPunkte();
    setTimeout(function() {
      if (window.__scheduleBootstrapKoordPunkte) window.__scheduleBootstrapKoordPunkte();
    }, 80);
    setTimeout(function() {
      if (window.__scheduleBootstrapKoordPunkte) window.__scheduleBootstrapKoordPunkte();
    }, 220);
  } catch (e) {}

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
    if (/l+�s|solution|aufl|show/.test(text)) return true;

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

    s = s.replace(/���/g, '-');
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
        if (!num) throw new Error('Z+�hler nach \\frac fehlt.');
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
          if (!num) throw new Error('Z+�hler nach \\frac fehlt.');
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
      .replace(/���/g, '-')
      .replace(/���/g, '-')
      .replace(/-�/g, '*');

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
      btnClear.textContent = 'L\u00f6schen';

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
        msg.style.display = text ? 'inline-block' : 'none';
        msg.style.marginTop = '.45rem';
        msg.style.minHeight = '0';
        msg.style.height = 'auto';
        msg.style.fontSize = '.95rem';
        msg.style.lineHeight = '1.25';
        msg.style.padding = '0';
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
      if (window.__scheduleBootstrapPunktGraphs) window.__scheduleBootstrapPunktGraphs();
      else if (window.__bootstrapPunktGraphs) window.__bootstrapPunktGraphs();
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
  window.__punktGraphLocks = window.__punktGraphLocks || {};
  window.__pointGraphQuizStore = window.__pointGraphQuizStore || {};

  function parsePointGraphOptionAttrs(source) {
    const src = String(source || '');
    const re = /(data-[\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>/]+))/gi;
    const attrs = [];
    let m;

    while ((m = re.exec(src)) !== null) {
      const name = String(m[1] || '').toLowerCase();
      if (!name) continue;
      const value = m[2] != null ? m[2] : (m[3] != null ? m[3] : (m[4] != null ? m[4] : ''));
      attrs.push({ name: name, value: String(value) });
    }

    return attrs;
  }

  function collectPointGraphDataAttrsFromElement(el) {
    if (!el || !el.attributes) return [];

    const out = [];
    for (let i = 0; i < el.attributes.length; i++) {
      const attr = el.attributes[i];
      const name = String(attr && attr.name || '').toLowerCase();
      if (!/^data-/.test(name)) continue;
      if (name !== 'data-solution-button' && !/^data-solution-timer(?:-|$)/.test(name)) continue;
      out.push({ name: name, value: String(attr.value == null ? '' : attr.value) });
    }

    return out;
  }

  function mergePointGraphAttrs(list) {
    const map = Object.create(null);
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (!item || !item.name) continue;
      map[String(item.name).toLowerCase()] = String(item.value == null ? '' : item.value);
    }

    return Object.keys(map).map(function(name) {
      return { name: name, value: map[name] };
    });
  }

  function collectPointGraphLeadingOptionText(anchor) {
    if (!anchor) return '';

    const chunks = [];
    let cur = anchor.previousSibling;
    let guard = 0;

    while (cur && guard < 30) {
      guard += 1;

      if (cur.nodeType === 8) {
        const raw = String(cur.data || '').trim();
        if (raw) chunks.unshift(raw);
        cur = cur.previousSibling;
        continue;
      }

      if (cur.nodeType === 3) {
        const text = String(cur.textContent || '');
        if (!text.trim()) {
          cur = cur.previousSibling;
          continue;
        }

        const matches = text.match(/<!--[\s\S]*?-->/g);
        if (!matches || !matches.length) break;

        for (let i = 0; i < matches.length; i++) {
          const inner = String(matches[i]).replace(/^\s*<!--\s*|\s*-->\s*$/g, '').trim();
          if (inner) chunks.unshift(inner);
        }

        cur = cur.previousSibling;
        continue;
      }

      if (cur.nodeType === 1) {
        const tag = String(cur.tagName || '').toLowerCase();
        const isIgnorable = tag === 'br' || (tag === 'p' && !String(cur.textContent || '').trim());
        if (isIgnorable) {
          cur = cur.previousSibling;
          continue;
        }
      }

      break;
    }

    return chunks.join(' ').trim();
  }

  function parsePointGraphRevealSetting(attrs) {
    for (let i = 0; i < attrs.length; i++) {
      const item = attrs[i];
      if (item && item.name === 'data-solution-button') {
        return String(item.value == null ? '' : item.value).trim().toLowerCase();
      }
    }
    return '';
  }

  function collectPointGraphOptionAttrs(uiRoot, checkRoot, inlineOptionText) {
    const leadingText = collectPointGraphLeadingOptionText(uiRoot) || collectPointGraphLeadingOptionText(checkRoot);
    const fromInline = parsePointGraphOptionAttrs(inlineOptionText);
    const fromComment = parsePointGraphOptionAttrs(leadingText);
    const fromUi = collectPointGraphDataAttrsFromElement(uiRoot);
    const fromCheck = collectPointGraphDataAttrsFromElement(checkRoot);
    return mergePointGraphAttrs([].concat(fromInline, fromComment, fromUi, fromCheck));
  }

  function applyPointGraphOptionAttrs(state) {
    if (!state || !state.uiRoot || !state.checkRoot) return;

    const attrs = state.optionAttrs || [];
    if (!attrs.length) return;

    for (let i = 0; i < attrs.length; i++) {
      const item = attrs[i];
      try { state.uiRoot.setAttribute(item.name, item.value); } catch (e) {}
      try { state.checkRoot.setAttribute(item.name, item.value); } catch (e) {}
    }

    const applyToQuizzes = (retries) => {
      if (!state || !state.checkRoot || !state.checkRoot.querySelectorAll) return;

      let targets = [];
      try {
        targets = Array.from(state.checkRoot.querySelectorAll('lia-quiz, .lia-quiz'));
      } catch (e) {}

      if (!targets.length) {
        if (retries < 320) requestAnimationFrame(function() { applyToQuizzes(retries + 1); });
        return;
      }

      for (let i = 0; i < targets.length; i++) {
        for (let j = 0; j < attrs.length; j++) {
          try { targets[i].setAttribute(attrs[j].name, attrs[j].value); } catch (e) {}
        }
      }
    };

    applyToQuizzes(0);
  }

  function isPointGraphResolveButton(checkRoot, targetBtn) {
    if (!checkRoot || !targetBtn) return false;

    const cls = String(targetBtn.className || '').toLowerCase();
    if (/lia-quiz__resolve/.test(cls)) return true;
    if (/lia-quiz__check/.test(cls)) return false;

    const text = String(targetBtn.textContent || targetBtn.value || targetBtn.getAttribute('aria-label') || '')
      .trim()
      .toLowerCase();

    if (/(solution|aufl|show|loes|l\u00f6s)/.test(text)) return true;
    if (/(check|pr\u00fcf|pruef)/.test(text)) return false;

    const buttons = findAllQuizButtons(checkRoot);
    const idx = buttons.indexOf(targetBtn);
    return idx >= 1;
  }

  function applyPointGraphRevealState(state) {
    if (!state || !state.checkRoot || !state.revealSetting) return;

    const buttons = findAllQuizButtons(state.checkRoot).filter(function(btn) {
      return isPointGraphResolveButton(state.checkRoot, btn);
    });
    if (!buttons.length) return;

    const attempts = Math.max(0, Number(state.failedChecks) || 0);
    let show = true;

    if (/^(off|false|disable|disabled|none)$/.test(state.revealSetting)) {
      show = false;
    } else if (/^(on|true|enable|enabled)$/.test(state.revealSetting)) {
      show = true;
    } else if (/^\d+$/.test(state.revealSetting)) {
      const threshold = parseInt(state.revealSetting, 10);
      show = attempts >= (Number.isFinite(threshold) ? threshold : 0);
    }

    for (let i = 0; i < buttons.length; i++) {
      try { buttons[i].style.display = show ? '' : 'none'; } catch (e) {}
    }
  }

  window.__setupPointGraphQuiz = function(uid, spec, optionText) {
    const id = String(uid || '').trim();
    if (!id) return false;

    const uiRoot = document.getElementById('graph-ui-' + id);
    const checkRoot = document.getElementById('graph-check-' + id);
    if (!uiRoot || !checkRoot) return false;

    const effectiveSpec = String(spec == null ? getGraphUiSpecByUid(id) : spec);
    const store = window.__pointGraphQuizStore || (window.__pointGraphQuizStore = {});
    const state = store[id] || (store[id] = { uid: id, failedChecks: 0, observed: false });

    state.uid = id;
    state.uiRoot = uiRoot;
    state.checkRoot = checkRoot;
    state.spec = effectiveSpec;
    state.inlineOptionText = String(optionText == null ? '' : optionText);
    state.failedChecks = Math.max(0, Number(state.failedChecks) || 0);
    state.optionAttrs = collectPointGraphOptionAttrs(uiRoot, checkRoot, state.inlineOptionText);
    state.revealSetting = parsePointGraphRevealSetting(state.optionAttrs);

    try { checkRoot.setAttribute('data-pointgraph-failed-checks', String(state.failedChecks)); } catch (e) {}

    applyPointGraphOptionAttrs(state);
    applyPointGraphRevealState(state);

    if (!state.observed && typeof MutationObserver === 'function') {
      state.observed = true;
      try {
        state.observer = new MutationObserver(function() {
          applyPointGraphOptionAttrs(state);
          applyPointGraphRevealState(state);
        });
        state.observer.observe(checkRoot, { childList: true, subtree: true });
      } catch (e) {}
    }

    requestAnimationFrame(function() { applyPointGraphRevealState(state); });
    setTimeout(function() { applyPointGraphRevealState(state); }, 80);
    setTimeout(function() { applyPointGraphRevealState(state); }, 220);
    setTimeout(function() { applyPointGraphRevealState(state); }, 500);

    return true;
  };

  window.__checkPointGraphQuiz = function(uid, spec, optionText) {
    const id = String(uid || '').trim();
    if (!id) return false;

    if (typeof window.__setupPointGraphQuiz === 'function') {
      window.__setupPointGraphQuiz(id, spec, optionText);
    }

    const store = window.__pointGraphQuizStore || (window.__pointGraphQuizStore = {});
    const state = store[id] || (store[id] = { uid: id, failedChecks: 0, observed: false });
    const effectiveSpec = String(spec == null ? (state.spec || '') : spec);

    const ok = !!(
      typeof window.__checkPointGraphFromSpec === 'function' &&
      window.__checkPointGraphFromSpec(id, effectiveSpec)
    );

    if (!ok) {
      state.failedChecks = Math.max(0, Number(state.failedChecks) || 0) + 1;
      try {
        if (state.checkRoot) state.checkRoot.setAttribute('data-pointgraph-failed-checks', String(state.failedChecks));
      } catch (e) {}
    }

    applyPointGraphRevealState(state);
    return ok;
  };

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

  function isColorToken(s) {
    const v = String(s || '').trim();
    return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(v);
  }

  function parseEpsToken(s, fallback) {
    const v = parseFloat(String(s || '').replace(',', '.'));
    return Number.isFinite(v) ? Math.abs(v) : fallback;
  }

  function texName(name) {
    const s = String(name || '').trim();
    if (!s) return '\\(f\\)';
    if (s.includes('\\(') || s.includes('\\[') || s.includes('$')) return s;

    const m = s.match(/^(.+?)_(.+)$/);
    if (m) {
      return '\\(' + m[1] + '_{' + m[2] + '}\\)';
    }
    return '\\(' + s + '\\)';
  }

  function getGraphUiSpecByUid(uid) {
    const holder = document.getElementById('graph-spec-' + uid);
    if (holder) return String(holder.textContent || '');
    return '';
  }

  function getTargetFromSpec(spec) {
    const parts = splitSpec(spec);

    const boardId = parts[0] || '';
    const name    = parts[1] || 'A';

    let pointColor = '#ff00ff';
    let graphName  = 'f';
    let expr       = '';
    let graphColor = '#b41f65';
    let eps        = 0.05;

    if (isColorToken(parts[2])) {
      pointColor = parts[2] || '#ff00ff';
      graphName  = parts[3] || 'f';
      expr       = parts[4] || '';
      graphColor = isColorToken(parts[5]) ? parts[5] : '#b41f65';
      eps        = parseEpsToken(parts[6], 0.05);
    } else {
      graphName  = parts[2] || 'f';
      expr       = parts[3] || '';
      eps        = parseEpsToken(parts[4], 0.05);
    }

    return {
      boardId: boardId,
      name: name,
      pointColor: pointColor || '#ff00ff',
      graphName: graphName || 'f',
      expr: expr,
      graphColor: graphColor || '#b41f65',
      eps: eps
    };
  }

  function getGraphKey(target) {
    return [
      String(target.name || ''),
      String(target.graphName || ''),
      String(target.expr || '')
    ].join('||');
  }

  function isLocked(uid) {
    return !!window.__punktGraphLocks[String(uid)];
  }

  function setLocked(uid, value) {
    window.__punktGraphLocks[String(uid)] = !!value;
    try { applyPunktGraphUi(uid); } catch (e) {}
  }

  function ensureBuckets(boardId) {
    window.__points[boardId] = window.__points[boardId] || {};
    window.__pointStates[boardId] = window.__pointStates[boardId] || {};
    window.__pointGraphs[boardId] = window.__pointGraphs[boardId] || {};
    window.__pointGraphStates[boardId] = window.__pointGraphStates[boardId] || {};
  }

  function applyPointVisual(pt, pointColor) {
    if (!pt || typeof pt.setAttribute !== 'function') return;

    const pCol = String(pointColor || '#ff00ff').trim() || '#ff00ff';

    try {
      pt.setAttribute({
        strokeColor: pCol,
        fillColor: pCol,
        highlightStrokeColor: pCol,
        highlightFillColor: pCol,
        strokeWidth: 3,
        highlightStrokeWidth: 3,
        face: 'x',
        size: 7
      });
    } catch (e) {}
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

  function createPoint(board, boardId, name, x0, y0, pointColor) {
    const pCol = String(pointColor || '#ff00ff').trim() || '#ff00ff';

    try {
      const pt = board.create('point', [x0, y0], {
        name: texName(name),
        fixed: false,
        withLabel: true,
        showInfobox: false,
        strokeColor: pCol,
        fillColor: pCol,
        highlightStrokeColor: pCol,
        highlightFillColor: pCol,
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

      applyPointVisual(pt, pCol);
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

  function restorePointFromState(boardId, name, pointColor) {
    const board = window.__boards && window.__boards[boardId];
    const state = window.__pointStates && window.__pointStates[boardId] && window.__pointStates[boardId][name];

    if (!board || !state) return null;

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (!pt) {
      pt = createPoint(board, boardId, name, state.x, state.y, pointColor);
      if (!pt) return null;
    }

    movePointTo(pt, state.x, state.y);

    try {
      pt.setAttribute({ fixed: !!state.fixed });
    } catch (e) {}

    applyPointVisual(pt, pointColor);
    stylePointLabel(pt);
    bindPointPersistence(boardId, name, pt);
    savePointState(boardId, name, pt);

    try { board.update(); } catch (e) {}
    return pt;
  }

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

  function safeBBox(board) {
    try {
      const bb = board.getBoundingBox();
      if (
        Array.isArray(bb) &&
        bb.length === 4 &&
        bb.every(function(v) { return Number.isFinite(v); }) &&
        bb[2] > bb[0] &&
        bb[1] > bb[3]
      ) {
        return bb.slice();
      }
    } catch (e) {}

    return [-5, 5, 5, -5];
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

  function createFunctionLabel(board, fn, graphName, graphColor) {
    const labelText = texName(graphName);
    const gCol = String(graphColor || '#b41f65').trim() || '#b41f65';

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

    const text = board.create('text', [
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
      strokeColor: gCol,
      fillColor: gCol,
      fontSize: 24,
      anchorX: 'left',
      anchorY: 'top'
    });

    return {
      anchor: anchor,
      text: text
    };
  }

  function getLiveGraphEntryOnCurrentBoard(boardId, graphKey) {
    const board = window.__boards && window.__boards[boardId];
    const entry = window.__pointGraphs && window.__pointGraphs[boardId] && window.__pointGraphs[boardId][graphKey];

    if (!board || !entry || !entry.graph) return null;

    try {
      if (entry.graph.board === board) return entry;
    } catch (e) {}

    return null;
  }

  function createGraphFromSpec(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const expr = target.expr;
    const graphName = target.graphName || 'f';
    const graphColor = target.graphColor || '#b41f65';
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
        strokeColor: graphColor,
        highlightStrokeColor: graphColor,
        strokeWidth: 3,
        fixed: true
      });

      const labelPack = createFunctionLabel(board, f, graphName, graphColor);

      ensureBuckets(boardId);
      window.__pointGraphs[boardId][graphKey] = {
        graph: graph,
        anchor: labelPack.anchor,
        text: labelPack.text,
        name: graphName,
        color: graphColor,
        expr: expr
      };
      window.__pointGraphStates[boardId][graphKey] = {
        visible: true,
        name: graphName,
        color: graphColor
      };

      return window.__pointGraphs[boardId][graphKey];
    } catch (e) {
      return null;
    }
  }

  window.showGraphFromPointGraphSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const graphKey = getGraphKey(target);
    const graphColor = target.graphColor || '#b41f65';
    const board = window.__boards && window.__boards[boardId];

    if (!board || !target.expr) return false;

    ensureBuckets(boardId);

    let entry = getLiveGraphEntryOnCurrentBoard(boardId, graphKey);

    if (!entry) {
      entry = createGraphFromSpec(spec);
      if (!entry) return false;
    } else {
      try {
        if (entry.graph) {
          entry.graph.setAttribute({
            visible: true,
            strokeColor: graphColor,
            highlightStrokeColor: graphColor,
            strokeWidth: 3,
            fixed: true
          });
        }
      } catch (e) {}

      try {
        if (entry.text) {
          entry.text.setAttribute({
            strokeColor: graphColor,
            fillColor: graphColor,
            fontSize: 24
          });
        }
      } catch (e) {}

      window.__pointGraphStates[boardId][graphKey] = {
        visible: true,
        name: target.graphName,
        color: graphColor
      };
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

  window.restorePointGraphFromSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    if (!target.boardId || !target.name) return null;
    return restorePointFromState(target.boardId, target.name, target.pointColor);
  };

  window.getPointGraphFromSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const name = target.name;

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (pt) {
      applyPointVisual(pt, target.pointColor);
      return pt;
    }

    return restorePointFromState(boardId, name, target.pointColor);
  };

  window.ensurePointGraphFromSpec = function(uid, spec) {
    if (isLocked(uid)) return false;

    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const name = target.name;

    const board = window.__boards && window.__boards[boardId];
    if (!board || !name) return false;

    ensureBuckets(boardId);

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (pt) {
      applyPointVisual(pt, target.pointColor);
      stylePointLabel(pt);
      bindPointPersistence(boardId, name, pt);
      savePointState(boardId, name, pt);
      try { board.update(); } catch (e) {}
      applyPunktGraphUi(uid);
      return true;
    }

    pt = restorePointFromState(boardId, name, target.pointColor);
    if (pt) {
      try { board.update(); } catch (e) {}
      applyPunktGraphUi(uid);
      return true;
    }

    const x0 = Math.random();
    const y0 = Math.random();

    pt = createPoint(board, boardId, name, x0, y0, target.pointColor);
    if (!pt) return false;

    try { board.update(); } catch (e) {}
    applyPunktGraphUi(uid);
    return true;
  };

  window.checkPointGraphFromSpec = function(uid, spec) {
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

  window.finalizePointGraphFromSpec = function(uid, spec) {
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
      applyPointVisual(pt, target.pointColor);
      savePointState(boardId, name, pt);
    }

    const shown = window.showGraphFromPointGraphSpec(spec);
    setLocked(uid, true);

    try { if (board) board.update(); } catch (e) {}

    return !!(pt || shown);
  };

  window.__checkPointGraphFromSpec = function(uid, spec) {
    const ok = !!(
      typeof window.checkPointGraphFromSpec === 'function' &&
      window.checkPointGraphFromSpec(uid, spec)
    );

    if (ok && typeof window.finalizePointGraphFromSpec === 'function') {
      window.finalizePointGraphFromSpec(uid, spec);
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
    return isPointGraphResolveButton(checkRoot, targetBtn);
  }

  function applyLockedStateToButton(uid, btn) {
    const locked = isLocked(uid);

    btn.disabled = locked;
    btn.style.opacity = locked ? '0.55' : '';
    btn.style.cursor = locked ? 'not-allowed' : '';
    btn.style.pointerEvents = locked ? 'none' : '';
  }

  function applyPunktGraphUi(uid) {
    const uiRoot = document.getElementById('graph-ui-' + uid);
    const taskRoot = document.getElementById('graph-task-' + uid);
    const checkRoot = document.getElementById('graph-check-' + uid);
    const btn = document.getElementById('graph-btn-' + uid);

    if (!uiRoot || !taskRoot || !checkRoot || !btn) return false;

    const spec = getGraphUiSpecByUid(uid);

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

      applyLockedStateToButton(uid, btn);

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

    applyLockedStateToButton(uid, btn);

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
        const curSpec = getGraphUiSpecByUid(uid);
        if (typeof window.ensurePointGraphFromSpec === 'function') {
          window.ensurePointGraphFromSpec(uid, curSpec);
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
            const curSpec = getGraphUiSpecByUid(uid);
            if (typeof window.finalizePointGraphFromSpec === 'function') {
              window.finalizePointGraphFromSpec(uid, curSpec);
            }
          }, 0);

          setTimeout(function() {
            const curSpec = getGraphUiSpecByUid(uid);
            if (typeof window.finalizePointGraphFromSpec === 'function') {
              window.finalizePointGraphFromSpec(uid, curSpec);
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
      const curSpec = getGraphUiSpecByUid(uid);
      if (typeof window.restorePointGraphFromSpec === 'function') {
        window.restorePointGraphFromSpec(curSpec);
      }
      if (typeof window.restorePointGraphVisualState === 'function') {
        window.restorePointGraphVisualState(curSpec);
      }
      applyPunktGraphUi(uid);
    }, 0);

    setTimeout(function() {
      const curSpec = getGraphUiSpecByUid(uid);
      if (typeof window.restorePointGraphFromSpec === 'function') {
        window.restorePointGraphFromSpec(curSpec);
      }
      if (typeof window.restorePointGraphVisualState === 'function') {
        window.restorePointGraphVisualState(curSpec);
      }
      applyPunktGraphUi(uid);
    }, 120);

    return true;
  };

  window.__bootstrapPunktGraphs = function() {
    const nodes = document.querySelectorAll('[id^="graph-ui-"]');

    nodes.forEach(function(node) {
      const uid = String(node.id || '').replace(/^graph-ui-/, '');
      const spec = getGraphUiSpecByUid(uid);
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
            (n.id && /^graph-spec-/.test(n.id)) ||
            (n.querySelector && n.querySelector('[id^="graph-ui-"], [id^="graph-spec-"]'))
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

  try {
    window.addEventListener('hashchange', function() {
      if (window.__scheduleBootstrapPunktGraphs) window.__scheduleBootstrapPunktGraphs();
    }, true);
  } catch (e) {}

  try {
    window.addEventListener('pageshow', function() {
      if (window.__scheduleBootstrapPunktGraphs) window.__scheduleBootstrapPunktGraphs();
    }, true);
  } catch (e) {}

  try {
    document.addEventListener('visibilitychange', function() {
      if (!document.hidden && window.__scheduleBootstrapPunktGraphs) {
        window.__scheduleBootstrapPunktGraphs();
      }
    }, true);
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














































































  // =========================
  // MEHRERE PUNKTE AUF GRAPH
  // MEHRERE PUNKTE AUF GRAPH
  // MEHRERE PUNKTE AUF GRAPH
  // MEHRERE PUNKTE AUF GRAPH
  // MEHRERE PUNKTE AUF GRAPH
  // MEHRERE PUNKTE AUF GRAPH
  // MEHRERE PUNKTE AUF GRAPH
  // MEHRERE PUNKTE AUF GRAPH
  // =========================


(function(){
  if (window.__punkteAufGraphReady) {
    try {
      if (window.__scheduleBootstrapPunkteAufGraph) window.__scheduleBootstrapPunkteAufGraph();
      else if (window.__bootstrapPunkteAufGraph) window.__bootstrapPunkteAufGraph();
    } catch (e) {}
    return;
  }
  window.__punkteAufGraphReady = true;

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
  window.__punkteAufGraphInstances = window.__punkteAufGraphInstances || {};
  window.__punkteAufGraphLocks = window.__punkteAufGraphLocks || {};
  window.__punkteAufGraphQuizStore = window.__punkteAufGraphQuizStore || {};

  function parsePunkteQuizOptionAttrs(source) {
    const src = String(source || '');
    const re = /(data-[\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>/]+))/gi;
    const attrs = [];
    let m;

    while ((m = re.exec(src)) !== null) {
      const name = String(m[1] || '').toLowerCase();
      if (!name) continue;
      const value = m[2] != null ? m[2] : (m[3] != null ? m[3] : (m[4] != null ? m[4] : ''));
      attrs.push({ name: name, value: String(value) });
    }

    return attrs;
  }

  function collectPunkteQuizDataAttrsFromElement(el) {
    if (!el || !el.attributes) return [];

    const out = [];
    for (let i = 0; i < el.attributes.length; i++) {
      const attr = el.attributes[i];
      const name = String(attr && attr.name || '').toLowerCase();
      if (!/^data-/.test(name)) continue;
      if (name !== 'data-solution-button' && !/^data-solution-timer(?:-|$)/.test(name)) continue;
      out.push({ name: name, value: String(attr.value == null ? '' : attr.value) });
    }

    return out;
  }

  function mergePunkteQuizAttrs(list) {
    const map = Object.create(null);
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (!item || !item.name) continue;
      map[String(item.name).toLowerCase()] = String(item.value == null ? '' : item.value);
    }

    return Object.keys(map).map(function(name) {
      return { name: name, value: map[name] };
    });
  }

  function collectPunkteQuizLeadingOptionText(anchor) {
    if (!anchor) return '';

    const chunks = [];
    let cur = anchor.previousSibling;
    let guard = 0;

    while (cur && guard < 30) {
      guard += 1;

      if (cur.nodeType === 8) {
        const raw = String(cur.data || '').trim();
        if (raw) chunks.unshift(raw);
        cur = cur.previousSibling;
        continue;
      }

      if (cur.nodeType === 3) {
        const text = String(cur.textContent || '');
        if (!text.trim()) {
          cur = cur.previousSibling;
          continue;
        }

        const matches = text.match(/<!--[\s\S]*?-->/g);
        if (!matches || !matches.length) break;

        for (let i = 0; i < matches.length; i++) {
          const inner = String(matches[i]).replace(/^\s*<!--\s*|\s*-->\s*$/g, '').trim();
          if (inner) chunks.unshift(inner);
        }

        cur = cur.previousSibling;
        continue;
      }

      if (cur.nodeType === 1) {
        const tag = String(cur.tagName || '').toLowerCase();
        const isIgnorable = tag === 'br' || (tag === 'p' && !String(cur.textContent || '').trim());
        if (isIgnorable) {
          cur = cur.previousSibling;
          continue;
        }
      }

      break;
    }

    return chunks.join(' ').trim();
  }

  function parsePunkteQuizRevealSetting(attrs) {
    for (let i = 0; i < attrs.length; i++) {
      const item = attrs[i];
      if (item && item.name === 'data-solution-button') {
        return String(item.value == null ? '' : item.value).trim().toLowerCase();
      }
    }
    return '';
  }

  function collectPunkteQuizOptionAttrs(uiRoot, checkRoot) {
    const text = collectPunkteQuizLeadingOptionText(uiRoot) || collectPunkteQuizLeadingOptionText(checkRoot);
    const fromComment = parsePunkteQuizOptionAttrs(text);
    const fromUi = collectPunkteQuizDataAttrsFromElement(uiRoot);
    const fromCheck = collectPunkteQuizDataAttrsFromElement(checkRoot);
    return mergePunkteQuizAttrs([].concat(fromComment, fromUi, fromCheck));
  }

  function applyPunkteQuizOptionAttrs(state) {
    if (!state || !state.uiRoot || !state.checkRoot) return;

    const attrs = state.optionAttrs || [];
    if (!attrs.length) return;

    for (let i = 0; i < attrs.length; i++) {
      const item = attrs[i];
      try { state.uiRoot.setAttribute(item.name, item.value); } catch (e) {}
      try { state.checkRoot.setAttribute(item.name, item.value); } catch (e) {}
    }

    const applyToQuizzes = (retries) => {
      if (!state || !state.checkRoot || !state.checkRoot.querySelectorAll) return;

      let targets = [];
      try {
        targets = Array.from(state.checkRoot.querySelectorAll('lia-quiz, .lia-quiz'));
      } catch (e) {}

      if (!targets.length) {
        if (retries < 320) requestAnimationFrame(function() { applyToQuizzes(retries + 1); });
        return;
      }

      for (let i = 0; i < targets.length; i++) {
        for (let j = 0; j < attrs.length; j++) {
          try { targets[i].setAttribute(attrs[j].name, attrs[j].value); } catch (e) {}
        }
      }
    };

    applyToQuizzes(0);
  }

  function isPunkteResolveButton(checkRoot, targetBtn) {
    if (!checkRoot || !targetBtn) return false;

    const cls = String(targetBtn.className || '').toLowerCase();
    if (/lia-quiz__resolve/.test(cls)) return true;
    if (/lia-quiz__check/.test(cls)) return false;

    const text = String(targetBtn.textContent || targetBtn.value || targetBtn.getAttribute('aria-label') || '')
      .trim()
      .toLowerCase();
    if (/(solution|aufl|show|loes|l\u00f6s)/.test(text)) return true;
    if (/(check|pr\u00fcf|pruef)/.test(text)) return false;

    const buttons = findAllQuizButtons(checkRoot);
    const idx = buttons.indexOf(targetBtn);
    return idx >= 1;
  }

  function applyPunkteQuizRevealState(state) {
    if (!state || !state.checkRoot || !state.revealSetting) return;

    const buttons = findAllQuizButtons(state.checkRoot).filter(function(btn) {
      return isPunkteResolveButton(state.checkRoot, btn);
    });
    if (!buttons.length) return;

    const attempts = Math.max(0, Number(state.failedChecks) || 0);
    let show = true;

    if (/^(off|false|disable|disabled|none)$/.test(state.revealSetting)) {
      show = false;
    } else if (/^(on|true|enable|enabled)$/.test(state.revealSetting)) {
      show = true;
    } else if (/^\d+$/.test(state.revealSetting)) {
      const threshold = parseInt(state.revealSetting, 10);
      show = attempts >= (Number.isFinite(threshold) ? threshold : 0);
    }

    for (let i = 0; i < buttons.length; i++) {
      try { buttons[i].style.display = show ? '' : 'none'; } catch (e) {}
    }
  }

  window.__setupPunkteAufGraphQuiz = function(uid, spec) {
    const id = String(uid || '').trim();
    if (!id) return false;

    const uiRoot = document.getElementById('multi-graph-ui-' + id);
    const checkRoot = document.getElementById('multi-graph-check-' + id);
    if (!uiRoot || !checkRoot) return false;

    const effectiveSpec = String(spec == null ? (uiRoot.dataset.spec || '') : spec);
    uiRoot.dataset.spec = effectiveSpec;

    const store = window.__punkteAufGraphQuizStore || (window.__punkteAufGraphQuizStore = {});
    const state = store[id] || (store[id] = { uid: id, failedChecks: 0, observed: false });
    state.uid = id;
    state.uiRoot = uiRoot;
    state.checkRoot = checkRoot;
    state.spec = effectiveSpec;
    state.failedChecks = Math.max(0, Number(state.failedChecks) || 0);

    state.optionAttrs = collectPunkteQuizOptionAttrs(uiRoot, checkRoot);
    state.revealSetting = parsePunkteQuizRevealSetting(state.optionAttrs);

    try { checkRoot.setAttribute('data-punkte-failed-checks', String(state.failedChecks)); } catch (e) {}

    applyPunkteQuizOptionAttrs(state);
    applyPunkteQuizRevealState(state);

    if (!state.observed && typeof MutationObserver === 'function') {
      state.observed = true;
      try {
        state.observer = new MutationObserver(function() {
          applyPunkteQuizOptionAttrs(state);
          applyPunkteQuizRevealState(state);
        });
        state.observer.observe(checkRoot, { childList: true, subtree: true });
      } catch (e) {}
    }

    requestAnimationFrame(function() { applyPunkteQuizRevealState(state); });
    setTimeout(function() { applyPunkteQuizRevealState(state); }, 80);
    setTimeout(function() { applyPunkteQuizRevealState(state); }, 220);
    setTimeout(function() { applyPunkteQuizRevealState(state); }, 500);

    return true;
  };

  window.__checkPunkteAufGraphQuiz = function(uid, spec) {
    const id = String(uid || '').trim();
    if (!id) return false;

    if (typeof window.__setupPunkteAufGraphQuiz === 'function') {
      window.__setupPunkteAufGraphQuiz(id, spec);
    }

    const store = window.__punkteAufGraphQuizStore || (window.__punkteAufGraphQuizStore = {});
    const state = store[id] || (store[id] = { uid: id, failedChecks: 0, observed: false });
    const effectiveSpec = String(spec == null ? (state.spec || '') : spec);

    const ok = !!(
      typeof window.__checkPunkteAufGraphFromSpec === 'function' &&
      window.__checkPunkteAufGraphFromSpec(id, effectiveSpec)
    );

    if (!ok) {
      state.failedChecks = Math.max(0, Number(state.failedChecks) || 0) + 1;
      try {
        if (state.checkRoot) state.checkRoot.setAttribute('data-punkte-failed-checks', String(state.failedChecks));
      } catch (e) {}
    }

    applyPunkteQuizRevealState(state);
    return ok;
  };

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

  function parseCountToken(s) {
    const raw = String(s || '').trim();
    const cleaned = raw.replace(/^n\s*=\s*/i, '');
    const v = parseInt(cleaned, 10);
    return Number.isFinite(v) && v > 0 ? v : 1;
  }

  function parseDistanceToken(s) {
    const raw = String(s || '').trim();
    const cleaned = raw.replace(/^d\s*=\s*/i, '');
    const v = parseFloat(cleaned.replace(',', '.'));
    return Number.isFinite(v) ? Math.abs(v) : 0;
  }

  function parseEpsToken(s, fallback) {
    const v = parseFloat(String(s || '').replace(',', '.'));
    return Number.isFinite(v) ? Math.abs(v) : fallback;
  }

  function isColorToken(s) {
    const v = String(s || '').trim();
    return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(v);
  }

  function texName(name) {
    const s = String(name || '').trim();
    if (!s) return '\\(f\\)';
    if (s.includes('\\(') || s.includes('\\[') || s.includes('$')) return s;

    const m = s.match(/^(.+?)_(.+)$/);
    if (m) {
      return '\\(' + m[1] + '_{' + m[2] + '}\\)';
    }
    return '\\(' + s + '\\)';
  }

  function ensureBuckets(boardId) {
    window.__points[boardId] = window.__points[boardId] || {};
    window.__pointStates[boardId] = window.__pointStates[boardId] || {};
    window.__pointGraphs[boardId] = window.__pointGraphs[boardId] || {};
    window.__pointGraphStates[boardId] = window.__pointGraphStates[boardId] || {};
  }

  function getTargetFromSpec(spec) {
    const parts = splitSpec(spec);

    const boardId = parts[0] || '';
    const count   = parseCountToken(parts[1] || '1');
    const minDist = parseDistanceToken(parts[2] || '0');
    const prefix  = parts[3] || 'A';

    let pointColor = '#ff00ff';
    let graphName = 'f';
    let expr = '';
    let graphColor = '#b41f65';
    let eps = 0.05;

    if (isColorToken(parts[4])) {
      pointColor = parts[4] || '#ff00ff';
      graphName = parts[5] || 'f';
      expr = parts[6] || '';
      graphColor = isColorToken(parts[7]) ? parts[7] : '#b41f65';
      eps = parseEpsToken(parts[8], 0.05);
    } else {
      graphName = parts[4] || 'f';
      expr = parts[5] || '';
      eps = parseEpsToken(parts[6], 0.05);
    }

    const names = [];
    for (let i = 1; i <= count; i++) {
      names.push(prefix + '_' + i);
    }

    return {
      boardId: boardId,
      count: count,
      minDist: minDist,
      prefix: prefix,
      pointColor: pointColor || '#ff00ff',
      graphName: graphName || 'f',
      expr: expr,
      graphColor: graphColor || '#b41f65',
      eps: eps,
      names: names
    };
  }

  function getGraphKey(target) {
    return [
      String(target.prefix || ''),
      String(target.count || 0),
      String(target.graphName || ''),
      String(target.expr || '')
    ].join('||');
  }

  function isLocked(uid) {
    return !!window.__punkteAufGraphLocks[String(uid)];
  }

  function setLocked(uid, value) {
    window.__punkteAufGraphLocks[String(uid)] = !!value;
    try {
      applyPunkteAufGraphUi(uid);
    } catch (e) {}
  }

  function applyPointVisual(pt, pointColor) {
    if (!pt || typeof pt.setAttribute !== 'function') return;

    const pCol = String(pointColor || '#ff00ff').trim() || '#ff00ff';

    try {
      pt.setAttribute({
        strokeColor: pCol,
        fillColor: pCol,
        highlightStrokeColor: pCol,
        highlightFillColor: pCol,
        strokeWidth: 3,
        highlightStrokeWidth: 3,
        face: 'x',
        size: 7
      });
    } catch (e) {}
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

  function createPoint(board, boardId, name, x0, y0, pointColor) {
    const pCol = String(pointColor || '#ff00ff').trim() || '#ff00ff';

    try {
      const pt = board.create('point', [x0, y0], {
        name: texName(name),
        fixed: false,
        withLabel: true,
        showInfobox: false,
        strokeColor: pCol,
        fillColor: pCol,
        highlightStrokeColor: pCol,
        highlightFillColor: pCol,
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

      applyPointVisual(pt, pCol);
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

  function restorePointFromState(boardId, name, pointColor) {
    const board = window.__boards && window.__boards[boardId];
    const state = window.__pointStates && window.__pointStates[boardId] && window.__pointStates[boardId][name];

    if (!board || !state) return null;

    let pt = getLivePointOnCurrentBoard(boardId, name);
    if (!pt) {
      pt = createPoint(board, boardId, name, state.x, state.y, pointColor);
      if (!pt) return null;
    }

    movePointTo(pt, state.x, state.y);

    try {
      pt.setAttribute({ fixed: !!state.fixed });
    } catch (e) {}

    applyPointVisual(pt, pointColor);
    stylePointLabel(pt);
    bindPointPersistence(boardId, name, pt);
    savePointState(boardId, name, pt);

    try { board.update(); } catch (e) {}
    return pt;
  }

  function randomStartPositions(count) {
    const out = [];
    for (let i = 0; i < count; i++) {
      out.push({
        x: Math.random(),
        y: Math.random()
      });
    }
    return out;
  }

  function distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function allPairDistancesOk(points, minDist) {
    if (!(minDist > 0)) return true;

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const d = distance(
          { x: Number(points[i].X()), y: Number(points[i].Y()) },
          { x: Number(points[j].X()), y: Number(points[j].Y()) }
        );

        if (!Number.isFinite(d) || d < minDist) {
          return false;
        }
      }
    }

    return true;
  }

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
      if (!allowed.has(ids[i])) {
        throw new Error('Unerlaubter Bezeichner: ' + ids[i]);
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

  function safeBBox(board) {
    try {
      const bb = board.getBoundingBox();
      if (
        Array.isArray(bb) &&
        bb.length === 4 &&
        bb.every(function(v) { return Number.isFinite(v); }) &&
        bb[2] > bb[0] &&
        bb[1] > bb[3]
      ) {
        return bb.slice();
      }
    } catch (e) {}

    return [-5, 5, 5, -5];
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

  function createFunctionLabel(board, fn, graphName, graphColor) {
    const labelText = texName(graphName);
    const gCol = String(graphColor || '#b41f65').trim() || '#b41f65';

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

    const text = board.create('text', [
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
      strokeColor: gCol,
      fillColor: gCol,
      fontSize: 24,
      anchorX: 'left',
      anchorY: 'top'
    });

    return {
      anchor: anchor,
      text: text
    };
  }

  function getLiveGraphEntryOnCurrentBoard(boardId, graphKey) {
    const board = window.__boards && window.__boards[boardId];
    const entry = window.__pointGraphs && window.__pointGraphs[boardId] && window.__pointGraphs[boardId][graphKey];

    if (!board || !entry || !entry.graph) return null;

    try {
      if (entry.graph.board === board) return entry;
    } catch (e) {}

    return null;
  }

  function removeGraphEntry(entry) {
    if (!entry) return;

    try {
      if (entry.graph && entry.graph.board) entry.graph.board.removeObject(entry.graph);
    } catch (e) {}

    try {
      if (entry.anchor && entry.anchor.board) entry.anchor.board.removeObject(entry.anchor);
    } catch (e) {}

    try {
      if (entry.text && entry.text.board) entry.text.board.removeObject(entry.text);
    } catch (e) {}
  }

  function createGraphFromSpec(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const expr = target.expr;
    const graphName = target.graphName || 'f';
    const graphColor = target.graphColor || '#b41f65';
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
        strokeColor: graphColor,
        highlightStrokeColor: graphColor,
        strokeWidth: 3,
        fixed: true
      });

      const labelPack = createFunctionLabel(board, f, graphName, graphColor);

      ensureBuckets(boardId);
      window.__pointGraphs[boardId][graphKey] = {
        graph: graph,
        anchor: labelPack.anchor,
        text: labelPack.text,
        name: graphName,
        color: graphColor,
        expr: expr
      };
      window.__pointGraphStates[boardId][graphKey] = {
        visible: true,
        name: graphName,
        color: graphColor
      };

      return window.__pointGraphs[boardId][graphKey];
    } catch (e) {
      return null;
    }
  }

  window.showGraphFromPunkteAufGraphSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    const boardId = target.boardId;
    const graphKey = getGraphKey(target);
    const graphColor = target.graphColor || '#b41f65';
    const board = window.__boards && window.__boards[boardId];

    if (!board || !target.expr) return false;

    ensureBuckets(boardId);

    let entry = getLiveGraphEntryOnCurrentBoard(boardId, graphKey);

    if (!entry) {
      entry = createGraphFromSpec(spec);
      if (!entry) return false;
    } else {
      try {
        if (entry.graph) {
          entry.graph.setAttribute({
            visible: true,
            strokeColor: graphColor,
            highlightStrokeColor: graphColor,
            strokeWidth: 3,
            fixed: true
          });
        }
      } catch (e) {}

      try {
        if (entry.text) {
          entry.text.setAttribute({
            strokeColor: graphColor,
            fillColor: graphColor,
            fontSize: 24
          });
        }
      } catch (e) {}

      window.__pointGraphStates[boardId][graphKey] = {
        visible: true,
        name: target.graphName,
        color: graphColor
      };
    }

    try { board.update(); } catch (e) {}
    return true;
  };

  window.restorePunkteAufGraphVisualState = function(spec) {
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
      return window.showGraphFromPunkteAufGraphSpec(spec);
    }

    return false;
  };

  window.restorePunkteAufGraphFromSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    if (!target.boardId || !target.names.length) return [];

    const out = [];
    for (let i = 0; i < target.names.length; i++) {
      const pt = restorePointFromState(target.boardId, target.names[i], target.pointColor);
      if (pt) out.push(pt);
    }
    return out;
  };

  window.getPunkteAufGraphFromSpec = function(spec) {
    const target = getTargetFromSpec(spec);
    const out = [];

    for (let i = 0; i < target.names.length; i++) {
      const name = target.names[i];
      let pt = getLivePointOnCurrentBoard(target.boardId, name);
      if (!pt) pt = restorePointFromState(target.boardId, name, target.pointColor);
      if (pt) {
        applyPointVisual(pt, target.pointColor);
        out.push(pt);
      }
    }

    return out;
  };

  window.ensurePunkteAufGraphFromSpec = function(uid, spec) {
    if (isLocked(uid)) return false;

    const target = getTargetFromSpec(spec);
    const board = window.__boards && window.__boards[target.boardId];

    if (!board || !target.names.length) return false;
    ensureBuckets(target.boardId);

    const positions = randomStartPositions(target.count);

    for (let i = 0; i < target.names.length; i++) {
      const name = target.names[i];
      const pos = positions[i];

      let pt = getLivePointOnCurrentBoard(target.boardId, name);
      if (!pt) pt = restorePointFromState(target.boardId, name, target.pointColor);
      if (!pt) pt = createPoint(board, target.boardId, name, pos.x, pos.y, target.pointColor);
      if (!pt) continue;

      movePointTo(pt, pos.x, pos.y);

      try {
        pt.setAttribute({ fixed: false });
      } catch (e) {}

      applyPointVisual(pt, target.pointColor);
      stylePointLabel(pt);
      bindPointPersistence(target.boardId, name, pt);
      savePointState(target.boardId, name, pt);
    }

    try { board.update(); } catch (e) {}
    applyPunkteAufGraphUi(uid);
    return true;
  };

  window.checkPunkteAufGraphFromSpec = function(uid, spec) {
    const target = getTargetFromSpec(spec);

    if (!target.boardId || !target.expr || !target.names.length) return false;

    let f;
    try {
      f = buildGraphFunction(target.expr);
    } catch (e) {
      return false;
    }

    const pts = [];

    for (let i = 0; i < target.names.length; i++) {
      const name = target.names[i];
      let pt = getLivePointOnCurrentBoard(target.boardId, name);
      if (!pt) pt = restorePointFromState(target.boardId, name, target.pointColor);
      if (!pt) return false;

      applyPointVisual(pt, target.pointColor);

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

      if (Math.abs(y - fy) > target.eps) {
        return false;
      }

      pts.push(pt);
    }

    if (!allPairDistancesOk(pts, target.minDist)) {
      return false;
    }

    return true;
  };

  window.finalizePunkteAufGraphFromSpec = function(uid, spec) {
    const target = getTargetFromSpec(spec);
    const board = window.__boards && window.__boards[target.boardId];
    let any = false;

    for (let i = 0; i < target.names.length; i++) {
      const name = target.names[i];
      let pt = getLivePointOnCurrentBoard(target.boardId, name);
      if (!pt) pt = restorePointFromState(target.boardId, name, target.pointColor);
      if (!pt) continue;

      try {
        pt.setAttribute({ fixed: true });
      } catch (e) {}

      applyPointVisual(pt, target.pointColor);
      savePointState(target.boardId, name, pt);
      any = true;
    }

    const shown = window.showGraphFromPunkteAufGraphSpec(spec);
    setLocked(uid, true);

    try { if (board) board.update(); } catch (e) {}

    return !!(any || shown);
  };

  window.__checkPunkteAufGraphFromSpec = function(uid, spec) {
    const ok = !!(
      typeof window.checkPunkteAufGraphFromSpec === 'function' &&
      window.checkPunkteAufGraphFromSpec(uid, spec)
    );

    if (ok && typeof window.finalizePunkteAufGraphFromSpec === 'function') {
      window.finalizePunkteAufGraphFromSpec(uid, spec);
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
    return isPunkteResolveButton(checkRoot, targetBtn);
  }

  function applyLockedStateToButton(uid, btn) {
    const locked = isLocked(uid);

    btn.disabled = locked;
    btn.style.opacity = locked ? '0.55' : '';
    btn.style.cursor = locked ? 'not-allowed' : '';
    btn.style.pointerEvents = locked ? 'none' : '';
  }

  function applyPunkteAufGraphUi(uid) {
    const uiRoot = document.getElementById('multi-graph-ui-' + uid);
    const taskRoot = document.getElementById('multi-graph-task-' + uid);
    const checkRoot = document.getElementById('multi-graph-check-' + uid);
    const btn = document.getElementById('multi-graph-btn-' + uid);

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
      applyLockedStateToButton(uid, btn);

      if (typeof window.restorePunkteAufGraphFromSpec === 'function') {
        window.restorePunkteAufGraphFromSpec(spec);
      }
      if (typeof window.restorePunkteAufGraphVisualState === 'function') {
        window.restorePunkteAufGraphVisualState(spec);
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

    applyLockedStateToButton(uid, btn);

    if (typeof window.restorePunkteAufGraphFromSpec === 'function') {
      window.restorePunkteAufGraphFromSpec(spec);
    }

    if (typeof window.restorePunkteAufGraphVisualState === 'function') {
      window.restorePunkteAufGraphVisualState(spec);
    }

    return true;
  }

  window.renderPunkteAufGraphFromSpec = function(uid, spec) {
    const uiRoot = document.getElementById('multi-graph-ui-' + uid);
    const taskRoot = document.getElementById('multi-graph-task-' + uid);
    const checkRoot = document.getElementById('multi-graph-check-' + uid);

    if (!uiRoot || !taskRoot || !checkRoot) return false;

    uiRoot.dataset.spec = spec;

    let btn = document.getElementById('multi-graph-btn-' + uid);
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'multi-graph-btn-' + uid;
      btn.className = 'lia-btn';
      btn.type = 'button';
      btn.textContent = 'Punkte erzeugen';
      taskRoot.appendChild(btn);
    }

    if (!btn.__liaMultiGraphEnsureBound) {
      btn.__liaMultiGraphEnsureBound = true;
      btn.addEventListener('click', function() {
        const curSpec = uiRoot.dataset.spec || '';
        if (typeof window.ensurePunkteAufGraphFromSpec === 'function') {
          window.ensurePunkteAufGraphFromSpec(uid, curSpec);
        }
      });
    }

    btn.dataset.spec = spec;

    applyPunkteAufGraphUi(uid);

    if (!checkRoot.__liaMultiGraphUiObserved) {
      checkRoot.__liaMultiGraphUiObserved = true;

      try {
        checkRoot.addEventListener('click', function(e) {
          const targetBtn = e.target && e.target.closest
            ? e.target.closest('button, input[type="button"], input[type="submit"]')
            : null;

          if (!targetBtn || !checkRoot.contains(targetBtn)) return;
          if (!looksLikeResolveButton(checkRoot, targetBtn)) return;

          setTimeout(function() {
            const curSpec = uiRoot.dataset.spec || '';
            if (typeof window.finalizePunkteAufGraphFromSpec === 'function') {
              window.finalizePunkteAufGraphFromSpec(uid, curSpec);
            }
          }, 0);

          setTimeout(function() {
            const curSpec = uiRoot.dataset.spec || '';
            if (typeof window.finalizePunkteAufGraphFromSpec === 'function') {
              window.finalizePunkteAufGraphFromSpec(uid, curSpec);
            }
          }, 80);
        });
      } catch (e) {}

      if (window.__registerLiaThemeListener) {
        window.__registerLiaThemeListener(function() {
          applyPunkteAufGraphUi(uid);
        });
      }
    }

    setTimeout(function() {
      if (typeof window.restorePunkteAufGraphFromSpec === 'function') {
        window.restorePunkteAufGraphFromSpec(spec);
      }
      if (typeof window.restorePunkteAufGraphVisualState === 'function') {
        window.restorePunkteAufGraphVisualState(spec);
      }
      applyPunkteAufGraphUi(uid);
    }, 0);

    setTimeout(function() {
      if (typeof window.restorePunkteAufGraphFromSpec === 'function') {
        window.restorePunkteAufGraphFromSpec(spec);
      }
      if (typeof window.restorePunkteAufGraphVisualState === 'function') {
        window.restorePunkteAufGraphVisualState(spec);
      }
      applyPunkteAufGraphUi(uid);
    }, 120);

    return true;
  };

  window.__bootstrapPunkteAufGraph = function() {
    const nodes = document.querySelectorAll('[id^="multi-graph-ui-"][data-spec]');

    nodes.forEach(function(node) {
      const uid = String(node.id || '').replace(/^multi-graph-ui-/, '');
      const spec = String(node.dataset.spec || '');
      if (!uid || !spec) return;

      window.renderPunkteAufGraphFromSpec(uid, spec);
    });

    refreshAllPointLabels();
  };

  if (!window.__scheduleBootstrapPunkteAufGraph) {
    window.__scheduleBootstrapPunkteAufGraph = function() {
      if (window.__bootstrapPunkteAufGraphRAF) return;
      window.__bootstrapPunkteAufGraphRAF = requestAnimationFrame(function() {
        window.__bootstrapPunkteAufGraphRAF = 0;
        try {
          if (window.__bootstrapPunkteAufGraph) window.__bootstrapPunkteAufGraph();
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
            (n.id && /^multi-graph-ui-/.test(n.id)) ||
            (n.querySelector && n.querySelector('[id^="multi-graph-ui-"][data-spec]'))
          ) {
            needsBootstrap = true;
            break;
          }
        }

        if (needsBootstrap) break;
      }

      if (needsBootstrap && window.__scheduleBootstrapPunkteAufGraph) {
        window.__scheduleBootstrapPunkteAufGraph();
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
      if (window.__scheduleBootstrapPunkteAufGraph) window.__scheduleBootstrapPunkteAufGraph();
    }, true);
  } catch (e) {}

  try {
    window.addEventListener('pageshow', function() {
      if (window.__scheduleBootstrapPunkteAufGraph) window.__scheduleBootstrapPunkteAufGraph();
    }, true);
  } catch (e) {}

  try {
    document.addEventListener('visibilitychange', function() {
      if (!document.hidden && window.__scheduleBootstrapPunkteAufGraph) {
        window.__scheduleBootstrapPunkteAufGraph();
      }
    }, true);
  } catch (e) {}

  window.__registerLiaThemeListener(refreshAllPointLabels);

  try {
    if (window.__scheduleBootstrapPunkteAufGraph) window.__scheduleBootstrapPunkteAufGraph();
    setTimeout(function() {
      if (window.__scheduleBootstrapPunkteAufGraph) window.__scheduleBootstrapPunkteAufGraph();
    }, 80);
    setTimeout(function() {
      if (window.__scheduleBootstrapPunkteAufGraph) window.__scheduleBootstrapPunkteAufGraph();
    }, 220);
  } catch (e) {}
})();



































  // =========================
  // TABELLE ZU GRAPHEN
  // TABELLE ZU GRAPHEN
  // TABELLE ZU GRAPHEN
  // TABELLE ZU GRAPHEN
  // =========================

(function(){
if (window.__liaTabelleReadyV2) {
  try {
    if (window.__scheduleBootstrapTabellen) window.__scheduleBootstrapTabellen();
    else if (window.__bootstrapTabellen) window.__bootstrapTabellen();
  } catch (e) {}
  return;
}
window.__liaTabelleReadyV2 = true;

  const DEFAULT_COLS = 3;
  const MIN_COLS = 2;
  const MAX_COLS = 30;

const MIN_CELL_PX = 120;
const MAX_CELL_PX = 900;

  window.__liaTableStates = window.__liaTableStates || {};

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

function currentAccentColor() {
  try {
    const doc = themeDoc();
    const win = themeWin();
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

  return currentNeutralColor();
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

  function typesetNode(node) {
    const MJ = getMathJaxEngine();
    if (!MJ || !node || typeof MJ.typesetPromise !== 'function') return;

    try {
      MJ.typesetPromise([node]).catch(function(){});
    } catch (e) {}
  }

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

  function toPositiveInt(v, fallback) {
    const n = parseInt(String(v || '').trim(), 10);
    return Number.isFinite(n) && n > 0 ? n : fallback;
  }

  function parseCountToken(token) {
    const raw = String(token || '').trim();

    if (!raw) return DEFAULT_COLS;

    const cleaned = raw
      .replace(/^(zeilen|spalten|n)\s*=\s*/i, '')
      .trim();

    return Math.max(MIN_COLS, Math.min(MAX_COLS, toPositiveInt(cleaned, DEFAULT_COLS)));
  }

function parseSpec(spec) {
  const raw = unquote(String(spec || '').trim());
  const parts = splitTopLevel(raw);

  const count = parseCountToken(parts[0] || String(DEFAULT_COLS));
  const row1 = parts[1] ? unquote(parts[1]) : 'x';
  const row2 = parts[2] ? unquote(parts[2]) : 'f';

  let pointPrefix = '';
  let boardId = '';

  for (let i = 3; i < parts.length; i++) {
    const part = unquote(parts[i] || '').trim();
    if (!part) continue;

    const eq = part.indexOf('=');
    if (eq >= 0) {
      const key = part.slice(0, eq).trim().toLowerCase();
      const val = unquote(part.slice(eq + 1).trim());

      if (key === 'id') {
        boardId = val;
        continue;
      }

      if (key === 'p' || key === 'punkt' || key === 'punkte' || key === 'prefix') {
        pointPrefix = val;
        continue;
      }
    }

    if (!pointPrefix) pointPrefix = part;
  }

  return {
    count: count,
    row1: row1,
    row2: row2,
    pointPrefix: pointPrefix,
    boardId: boardId
  };
}

  function normalizeLabelMath(s, isSecondRow) {
    let out = String(s || '').trim();

    if (!out) out = isSecondRow ? 'f' : 'x';

    if (
      out.indexOf('\\(') >= 0 ||
      out.indexOf('\\[') >= 0
    ) {
      return out;
    }

    out = out.replace(/\\\$/g, '__LIA_ESC_DOLLAR__');
    out = out.replace(/\$\$([\s\S]+?)\$\$/g, function (_, inner) {
      return '\\[' + inner + '\\]';
    });
    out = out.replace(/\$([^$]+?)\$/g, function (_, inner) {
      return '\\(' + inner + '\\)';
    });
    out = out.replace(/__LIA_ESC_DOLLAR__/g, '$');

    if (
      out.indexOf('\\(') >= 0 ||
      out.indexOf('\\[') >= 0
    ) {
      return out;
    }

    if (isSecondRow && !/[()[\]]/.test(out)) {
      out = out + '(x)';
    }

    return '\\(' + out + '\\)';
  }

  function cloneValue(v) {
    return {
      x: v && v.x != null ? String(v.x) : '',
      y: v && v.y != null ? String(v.y) : ''
    };
  }

  function resizeValues(values, count) {
    const out = [];
    for (let i = 0; i < count; i++) {
      out.push(cloneValue(values && values[i]));
    }
    return out;
  }

function ensureState(uid, spec) {
  const cfg = parseSpec(spec);
  let st = window.__liaTableStates[uid];

  if (!st) {
    st = {
      uid: uid,
      spec: spec,
      cols: cfg.count,
      row1: cfg.row1,
      row2: cfg.row2,
      pointPrefix: cfg.pointPrefix,
      boardId: cfg.boardId,
      values: resizeValues([], cfg.count),
      cellWidths: {}
    };
    window.__liaTableStates[uid] = st;
    return st;
  }

  if (st.spec !== spec) {
    st.spec = spec;
    st.cols = cfg.count;
    st.row1 = cfg.row1;
    st.row2 = cfg.row2;
    st.pointPrefix = cfg.pointPrefix;
    st.boardId = cfg.boardId;
    st.values = resizeValues(st.values, st.cols);
    st.cellWidths = st.cellWidths || {};
    return st;
  }

  st.row1 = cfg.row1;
  st.row2 = cfg.row2;
  st.pointPrefix = cfg.pointPrefix;
  st.boardId = cfg.boardId;
  st.values = resizeValues(st.values, st.cols);
  st.cellWidths = st.cellWidths || {};

  return st;
}


function parseTableNumber(v) {
  const s = String(v != null ? v : '').trim().replace(',', '.');
  if (!s) return NaN;

  const n = parseFloat(s);
  return Number.isFinite(n) ? n : NaN;
}

function getPointName(prefix, colIndex) {
  const base = String(prefix || 'P').trim() || 'P';
  return base + '_' + (colIndex + 1);
}

function updatePointButtonState(uid, colIndex, btn) {
  if (!btn) return;

  const st = window.__liaTableStates[uid];
  const entry = st && st.values && st.values[colIndex] ? st.values[colIndex] : null;

  const x = parseTableNumber(entry ? entry.x : '');
  const y = parseTableNumber(entry ? entry.y : '');

  const ready = !!(
    st &&
    st.boardId &&
    st.pointPrefix &&
    Number.isFinite(x) &&
    Number.isFinite(y) &&
    typeof window.finalizePointFromSpec === 'function'
  );

  btn.disabled = !ready;
  btn.style.opacity = ready ? '' : '0.55';
  btn.title = ready ? '' : 'Bitte erst numerische Werte f++r x und f(x) eintragen.';
}

function refreshPointButtons(uid) {
  const root = getRoot(uid);
  if (!root) return;

  root.querySelectorAll('.lia-dyn-table-point-btn[data-col-index]').forEach(function(btn) {
    const colIndex = parseInt(btn.dataset.colIndex || '0', 10) || 0;
    updatePointButtonState(uid, colIndex, btn);
  });
}

function buildPointButton(uid, colIndex, state) {
  const wrap = document.createElement('div');
  wrap.className = 'lia-dyn-table-point-wrap';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'lia-btn lia-dyn-table-point-btn';
  btn.dataset.colIndex = String(colIndex);

  const pointName = getPointName(state.pointPrefix, colIndex);
  btn.innerHTML = 'Erzeuge&nbsp;' + normalizeLabelMath(pointName, false);

  btn.addEventListener('click', function() {
    const st = window.__liaTableStates[uid];
    if (!st) return;

    const entry = st.values && st.values[colIndex] ? st.values[colIndex] : null;
    const x = parseTableNumber(entry ? entry.x : '');
    const y = parseTableNumber(entry ? entry.y : '');

    if (!st.boardId || !st.pointPrefix) return;
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    if (typeof window.finalizePointFromSpec !== 'function') return;

    const spec =
      st.boardId +
      ';' +
      getPointName(st.pointPrefix, colIndex) +
      ';' +
      x +
      ';' +
      y;

    window.finalizePointFromSpec(spec);
  });

  wrap.appendChild(btn);
  typesetNode(btn);
  updatePointButtonState(uid, colIndex, btn);

  return wrap;
}

  function getRoot(uid) {
    return document.getElementById('lia-table-' + uid);
  }

function ensureCss() {
  if (document.getElementById('__lia_table_css_v3')) return;

  const st = document.createElement('style');
  st.id = '__lia_table_css_v3';
  st.textContent = `

    .lia-dyn-table-root{
      width: 100%;
      max-width: 100%;
      margin: .9rem 0 1.2rem 0;
      --lia-table-fg: #000;
      --lia-table-border: #000;
      --lia-table-accent: #0b5fff;
      --lia-table-soft: rgba(127,127,127,.08);
      --lia-table-soft-2: rgba(127,127,127,.14);
      --lia-table-cell-max: 520px;
    }

    .lia-dyn-table-shell{
      width: max-content;
      max-width: 100%;
      display: inline-flex;
      align-items: stretch;
      border: 2px solid var(--lia-table-border);
      border-radius: 18px;
      overflow: hidden;
      background: transparent;
      box-sizing: border-box;
    }

    .lia-dyn-table-wrap{
      flex: 0 1 auto;
      min-width: 0;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: thin;
      cursor: auto;
      background: transparent;
    }

    .lia-dyn-table{
      border-collapse: separate;
      border-spacing: 0;
      color: var(--lia-table-fg);
      margin: 0;
      width: max-content;
      min-width: 0;
      table-layout: auto;
      background: transparent;
    }

    .lia-dyn-table th,
    .lia-dyn-table td{
      padding: .55rem .6rem;
      text-align: center;
      vertical-align: middle;
      background: transparent;
      border-right: 1px solid var(--lia-table-border);
      border-bottom: 1px solid var(--lia-table-border);
      box-sizing: border-box;
    }

    .lia-dyn-table-last-col{
      border-right: 0 !important;
    }

    .lia-dyn-table-bottom-row{
      border-bottom: 0 !important;
    }

    .lia-dyn-table-label{
      min-width: 6.2rem;
      font-weight: 700;
      white-space: nowrap;
      background: var(--lia-table-soft);
    }

    .lia-dyn-table-double-sep{
      border-right: 4px double var(--lia-table-border) !important;
    }

    .lia-dyn-table-label > div{
      min-height: 2.15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 .15rem;
    }

    .lia-dyn-table-pool-item{
      display: inline-block;
      width: max-content;
      min-width: 0;
      max-width: none;
    }

.lia-dyn-table-point-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
}

.lia-dyn-table-point-btn{
  min-width: auto;
  width: auto;
  height: auto;
  min-height: 2.35rem;
  padding: .55rem 1.05rem;
  border-radius: 999px;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.lia-dyn-table-point-btn:disabled{
  cursor: not-allowed;
}

    .lia-dyn-table-input{
      width: 6ch;
      min-width: 6ch;
      max-width: 40ch;
      box-sizing: content-box;
      margin: 0;
      padding: .55rem .6rem;
      border: 2px solid var(--lia-table-accent);
      border-radius: 12px;
      background: var(--lia-table-soft);
      color: var(--lia-table-fg);
      caret-color: var(--lia-table-fg);
      text-align: center;
      font: inherit;
      line-height: 1.2;
      outline: none;
      box-shadow: inset 0 0 0 1px rgba(127,127,127,.08);
      transition:
        border-color .14s ease,
        box-shadow .14s ease,
        background .14s ease,
        width .12s ease;
    }

    .lia-dyn-table-input-wrap{
      position: relative;
      display: inline-block;
      vertical-align: middle;
      line-height: 0;
    }

    .lia-dyn-table-mini-canvas{
      position: absolute;
      inset: 0;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      border: 1px solid var(--lia-table-border);
      background: rgba(127,127,127,.10);
      pointer-events: none;
      z-index: 1;
    }

    .lia-dyn-table-input{
      position: relative;
      z-index: 2;
      background: transparent;
    }

    .lia-dyn-table-input:hover{
      background: rgba(127,127,127,.11);
      box-shadow: inset 0 0 0 1px var(--lia-table-accent);
    }
    
    .lia-dyn-table-input:focus{
      border-color: var(--lia-table-accent);
      background: rgba(127,127,127,.13);
      box-shadow:
        inset 0 0 0 1px var(--lia-table-accent),
        0 0 0 2px var(--lia-table-accent);
    }

    .lia-dyn-table-rail{
      flex: 0 0 3.2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .45rem;
      padding: .5rem .25rem;
      border-left: 1px solid var(--lia-table-border);
      background: var(--lia-table-soft);
      box-sizing: border-box;
      user-select: none;
      touch-action: auto;
      cursor: default;
    }

    .lia-dyn-table-rail.is-dragging{
      cursor: grabbing;
    }

    .lia-dyn-table-rail-buttons{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .45rem;
      width: 100%;
    }

    .lia-dyn-table-btn{
      min-width: 2.8rem;
      width: 2.8rem;
      height: 2.8rem;
      padding: 0;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      font-size: 3.0rem;
      font-weight: 700;
    }

    .lia-dyn-table-field-stack{
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: .35rem;
      width: max-content;
      min-width: 0;
      max-width: var(--lia-table-cell-max);
      flex: 0 1 auto;
    }

    .lia-dyn-table-value{
      min-width: 0;
      width: auto;
      max-width: var(--lia-table-cell-max);
      padding: .4rem .35rem;
      box-sizing: border-box;
    }

    .lia-dyn-table-pool{
      position: absolute;
      left: -99999px;
      top: 0;
      width: 1px;
      height: 1px;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
    }

    .lia-dyn-table-pool-item{
      display: inline-block;
      width: max-content;
      min-width: 0;
      max-width: var(--lia-table-cell-max);
    }

    .lia-draw-wrap{
      width: 100%;
      max-width: none;
    }



  `;

  (document.head || document.documentElement).appendChild(st);
}

function applyThemeToRoot(root) {
  if (!root) return;

  const c = currentNeutralColor();
  const a = currentAccentColor();

  root.style.setProperty('--lia-table-fg', c);
  root.style.setProperty('--lia-table-border', c);
  root.style.setProperty('--lia-table-accent', a);
  root.style.setProperty('--lia-table-cell-max', MAX_CELL_PX + 'px');
}

  function refreshAllTableThemes() {
    const nodes = document.querySelectorAll('[id^="lia-table-"]');
    nodes.forEach(function(node) {
      applyThemeToRoot(node);
    });
  }

  function setStateValue(uid, colIndex, key, value) {
    const st = window.__liaTableStates[uid];
    if (!st) return;

    st.values = resizeValues(st.values, st.cols);

    if (!st.values[colIndex]) {
      st.values[colIndex] = { x: '', y: '' };
    }

    st.values[colIndex][key] = String(value != null ? value : '');
  }

function getCellWidthKey(colIndex, key) {
  return colIndex + ':' + key;
}

function getStoredCellWidth(uid, colIndex, key) {
  const st = window.__liaTableStates[uid];
  if (!st || !st.cellWidths) return 0;
  return Math.max(0, parseInt(st.cellWidths[getCellWidthKey(colIndex, key)] || 0, 10) || 0);
}

function setStoredCellWidth(uid, colIndex, key, width) {
  const st = window.__liaTableStates[uid];
  if (!st) return;

  st.cellWidths = st.cellWidths || {};
  st.cellWidths[getCellWidthKey(colIndex, key)] =
    Math.max(MIN_CELL_PX, Math.min(MAX_CELL_PX, Math.round(width || MIN_CELL_PX)));
}

function getPoolRoot(uid) {
  return document.getElementById('lia-table-pool-' + uid);
}

function getPoolIndex(colIndex, key) {
  return colIndex * 2 + (key === 'y' ? 1 : 0);
}

function reclaimPoolItems(uid) {
  const root = getRoot(uid);
  const pool = getPoolRoot(uid);
  if (!root || !pool) return;

  const mounted = root.querySelectorAll('.lia-dyn-table-pool-item[data-index]');
  mounted.forEach(function(node) {
    pool.appendChild(node);
  });
}

function takePoolItem(uid, index) {
  const pool = getPoolRoot(uid);
  if (!pool) return null;

  return pool.querySelector('.lia-dyn-table-pool-item[data-index="' + index + '"]');
}

function calcInputCh(value) {
  const s = String(value != null ? value : '').trim();
  if (!s) return 6;
  return Math.max(6, Math.min(40, s.length + 2));
}

function applyAutoInputWidth(input) {
  if (!input) return;
  input.style.width = calcInputCh(input.value) + 'ch';
}

function isElementLayoutVisible(el) {
  if (!el) return false;

  try {
    const cs = window.getComputedStyle(el);
    if (cs.display === 'none') return false;
    if (cs.visibility === 'hidden') return false;
    if (parseFloat(cs.opacity || '1') === 0) return false;

    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  } catch (e) {
    return false;
  }
}

function isPoolCanvasOpen(poolItem) {
  if (!poolItem) return false;

  const candidates = poolItem.querySelectorAll(
    '.lia-draw-wrap, .lia-draw-block, .lia-ocr-wrap, .lia-canvas-wrap, canvas'
  );

  for (const el of candidates) {
    if (!isElementLayoutVisible(el)) continue;

    try {
      const rect = el.getBoundingClientRect();
      if (rect.width > 40 && rect.height > 40) return true;
    } catch (e) {}
  }

  return false;
}

function syncCellWidthFromStack(uid, colIndex, key, stack, poolItem) {
  if (!stack || !stack.closest) return;

  const td = stack.closest('td');
  if (!td) return;

  const storedWidth = getStoredCellWidth(uid, colIndex, key);
  const canvasOpen = isPoolCanvasOpen(poolItem);

  td.style.width = 'auto';
  td.style.minWidth = '0px';
  td.style.maxWidth = MAX_CELL_PX + 'px';

  stack.style.width = 'auto';
  stack.style.minWidth = '0px';
  stack.style.maxWidth = MAX_CELL_PX + 'px';

  if (poolItem) {
    poolItem.style.maxWidth = MAX_CELL_PX + 'px';
  }

  let maxW = 0;

  function takeWidth(el) {
    if (!el) return;
    if (!isElementLayoutVisible(el)) return;

    try {
      const rect = el.getBoundingClientRect();
      maxW = Math.max(
        maxW,
        Math.ceil(rect.width || 0),
        Math.ceil(el.scrollWidth || 0),
        Math.ceil(el.offsetWidth || 0),
        Math.ceil(el.clientWidth || 0)
      );
    } catch (e) {}
  }

  takeWidth(stack);
  if (poolItem) takeWidth(poolItem);

  const descendants = stack.querySelectorAll('*');
  descendants.forEach(function(el) {
    takeWidth(el);
  });

  let effective = maxW;

  if (canvasOpen && storedWidth > 0) {
    effective = Math.max(effective, storedWidth);
  }

  if (effective <= 0) return;

  const clamped = Math.max(MIN_CELL_PX, Math.min(MAX_CELL_PX, effective));

  td.style.width = clamped + 'px';
  td.style.minWidth = clamped + 'px';
  td.style.maxWidth = MAX_CELL_PX + 'px';

  stack.style.width = clamped + 'px';
  stack.style.minWidth = clamped + 'px';
  stack.style.maxWidth = MAX_CELL_PX + 'px';

  if (poolItem) {
    if (canvasOpen) {
      poolItem.style.width = clamped + 'px';
      poolItem.style.minWidth = clamped + 'px';
    } else {
      poolItem.style.width = 'auto';
      poolItem.style.minWidth = '0px';
    }

    poolItem.style.maxWidth = MAX_CELL_PX + 'px';

    const innerHost =
      poolItem.querySelector('.lia-draw-wrap, .lia-draw-block, .lia-ocr-wrap, .lia-canvas-wrap') ||
      poolItem.firstElementChild;

    if (innerHost) {
      if (canvasOpen) {
        innerHost.style.width = clamped + 'px';
        innerHost.style.minWidth = clamped + 'px';
      } else {
        innerHost.style.width = 'auto';
        innerHost.style.minWidth = '0px';
      }
      innerHost.style.maxWidth = 'none';
    }
  }
}

function measureCellBaseWidth(stack, poolItem) {
  if (!stack || !stack.closest) return MIN_CELL_PX;

  const td = stack.closest('td');
  let w = 0;

  function takeWidth(el) {
    if (!el) return;

    try {
      const rect = el.getBoundingClientRect();
      w = Math.max(
        w,
        Math.ceil(rect.width || 0),
        Math.ceil(el.scrollWidth || 0),
        Math.ceil(el.offsetWidth || 0),
        Math.ceil(el.clientWidth || 0)
      );
    } catch (e) {}
  }

  takeWidth(td);
  takeWidth(stack);
  takeWidth(poolItem);

  return Math.max(MIN_CELL_PX, Math.min(MAX_CELL_PX, w || MIN_CELL_PX));
}

function applyLiveDragWidth(uid, colIndex, key, stack, poolItem, widthPx) {
  if (!stack || !stack.closest) return;

  const td = stack.closest('td');
  if (!td) return;

  const w = Math.max(MIN_CELL_PX, Math.min(MAX_CELL_PX, Math.round(widthPx || MIN_CELL_PX)));

  setStoredCellWidth(uid, colIndex, key, w);

  td.style.width = w + 'px';
  td.style.minWidth = w + 'px';
  td.style.maxWidth = MAX_CELL_PX + 'px';

  stack.style.width = w + 'px';
  stack.style.minWidth = w + 'px';
  stack.style.maxWidth = MAX_CELL_PX + 'px';

  if (poolItem) {
    poolItem.style.width = w + 'px';
    poolItem.style.minWidth = w + 'px';
    poolItem.style.maxWidth = MAX_CELL_PX + 'px';

    const innerHost =
      poolItem.querySelector('.lia-draw-wrap, .lia-draw-block, .lia-ocr-wrap, .lia-canvas-wrap') ||
      poolItem.firstElementChild;

    if (innerHost) {
      innerHost.style.width = w + 'px';
      innerHost.style.minWidth = w + 'px';
      innerHost.style.maxWidth = 'none';
    }
  }
}

function closeCellResizeHeadroom(stack) {
  if (!stack || !stack.closest) return;

  const td = stack.closest('td');
  if (!td) return;

  td.style.width = 'auto';
  td.style.minWidth = '0px';
  td.style.maxWidth = MAX_CELL_PX + 'px';

  stack.style.width = 'auto';
  stack.style.minWidth = '0px';
  stack.style.maxWidth = MAX_CELL_PX + 'px';
}

function isResizeHandleTarget(target, stopNode) {
  let el = target;

  while (el && el !== stopNode && el !== document.body) {
    try {
      const cur = window.getComputedStyle(el).cursor || '';
      if (/resize/i.test(cur)) return true;
    } catch (e) {}

    el = el.parentElement;
  }

  try {
    if (stopNode) {
      const cur = window.getComputedStyle(stopNode).cursor || '';
      if (/resize/i.test(cur)) return true;
    }
  } catch (e) {}

  return false;
}

function openCellResizeHeadroom(stack, poolItem) {
  if (!stack || !stack.closest) return;

  const td = stack.closest('td');
  if (!td) return;

  td.style.width = 'auto';
  td.style.minWidth = '0px';
  td.style.maxWidth = MAX_CELL_PX + 'px';

  stack.style.width = 'auto';
  stack.style.minWidth = '0px';
  stack.style.maxWidth = MAX_CELL_PX + 'px';

  if (poolItem) {
    poolItem.style.width = 'auto';
    poolItem.style.minWidth = '0px';
    poolItem.style.maxWidth = MAX_CELL_PX + 'px';
  }
}



function observeFieldWidth(uid, colIndex, key, stack, input, poolItem) {
  if (!stack || stack.__liaFieldWidthObserved) return;
  stack.__liaFieldWidthObserved = true;

  function syncNow() {
    syncCellWidthFromStack(uid, colIndex, key, stack, poolItem);
  }

  function syncSoon() {
    requestAnimationFrame(syncNow);
  }

  syncSoon();
  setTimeout(syncSoon, 0);
  setTimeout(syncSoon, 80);
  setTimeout(syncSoon, 220);
  setTimeout(syncSoon, 500);

  if (typeof ResizeObserver === 'function') {
    try {
      const ro = new ResizeObserver(function() {
        if (stack.__liaCellResizeDragging) return;
        syncSoon();
      });

      ro.observe(stack);
      if (input) ro.observe(input);
      if (poolItem) ro.observe(poolItem);

      const all = poolItem ? poolItem.querySelectorAll('*') : [];
      all.forEach(function(el) {
        try { ro.observe(el); } catch (e) {}
      });

      stack.__liaFieldWidthRO = ro;
    } catch (e) {}
  }

  if (poolItem && !poolItem.__liaOpenCloseSyncBound) {
  poolItem.__liaOpenCloseSyncBound = true;

  poolItem.addEventListener('click', function() {
    if (stack.__liaCellResizeDragging) return;

    syncSoon();
    setTimeout(syncSoon, 0);
    setTimeout(syncSoon, 80);
    setTimeout(syncSoon, 220);
    setTimeout(syncSoon, 500);
  }, true);

  try {
      const mo = new MutationObserver(function() {
        if (stack.__liaCellResizeDragging) return;

        syncSoon();
        setTimeout(syncSoon, 80);
        setTimeout(syncSoon, 220);
      });

      mo.observe(poolItem, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class', 'hidden', 'open']
      });

      stack.__liaFieldWidthMO = mo;
    } catch (e) {}
  }

  if (poolItem && !poolItem.__liaDragWidthSyncBound) {
    poolItem.__liaDragWidthSyncBound = true;

    let drag = null;

    function start(e) {
      if (!isResizeHandleTarget(e.target, poolItem)) return;

      drag = {
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        baseWidth: getStoredCellWidth(uid, colIndex, key) || measureCellBaseWidth(stack, poolItem),
        active: false
      };
    }

    function move(e) {
      if (!drag || e.pointerId !== drag.pointerId) return;

      const dx = e.clientX - drag.startX;
      const dy = e.clientY - drag.startY;

      if (!drag.active) {
        if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
        drag.active = true;
        stack.__liaCellResizeDragging = true;
      }

      applyLiveDragWidth(uid, colIndex, key, stack, poolItem, drag.baseWidth + dx);
    }

    function stop(e) {
      if (!drag) return;
      if (e && e.pointerId !== drag.pointerId) return;

      const wasActive = !!drag.active;
      drag = null;

      if (!wasActive) return;

      stack.__liaCellResizeDragging = false;

      syncSoon();
      setTimeout(syncSoon, 80);
      setTimeout(syncSoon, 220);
      setTimeout(syncSoon, 500);
    }

    poolItem.addEventListener('pointerdown', start, true);
    window.addEventListener('pointermove', move, true);
    window.addEventListener('pointerup', stop, true);
    window.addEventListener('pointercancel', stop, true);
  }

  window.addEventListener('resize', function() {
    if (stack.__liaCellResizeDragging) return;
    syncSoon();
  });
}


function syncMiniCanvasSize(canvas, host) {
  if (!canvas || !host) return;

  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const w = Math.max(1, Math.round(host.offsetWidth || host.clientWidth || 1));
  const h = Math.max(1, Math.round(host.offsetHeight || host.clientHeight || 1));

  const pxW = Math.max(1, Math.round(w * dpr));
  const pxH = Math.max(1, Math.round(h * dpr));

  if (canvas.width !== pxW) canvas.width = pxW;
  if (canvas.height !== pxH) canvas.height = pxH;

  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
}

function scheduleMiniCanvasSync(canvas, host) {
  requestAnimationFrame(function() {
    syncMiniCanvasSize(canvas, host);
  });

  setTimeout(function() {
    syncMiniCanvasSize(canvas, host);
  }, 0);

  setTimeout(function() {
    syncMiniCanvasSize(canvas, host);
  }, 80);
}

function observeMiniCanvas(canvas, host) {
  if (!canvas || !host) return;
  if (host.__liaMiniCanvasObserved) return;
  host.__liaMiniCanvasObserved = true;

  if (typeof ResizeObserver === 'function') {
    try {
      const ro = new ResizeObserver(function() {
        syncMiniCanvasSize(canvas, host);
      });
      ro.observe(host);
      host.__liaMiniCanvasRO = ro;
      return;
    } catch (e) {}
  }

  window.addEventListener('resize', function() {
    syncMiniCanvasSize(canvas, host);
  });
}


function enableRailPan(scroller, rail) {
  if (!scroller || !rail || rail.__liaPanBound) return;
  rail.__liaPanBound = true;

  let drag = null;

  function stopDrag() {
    drag = null;
    rail.classList.remove('is-dragging');
    try { document.body.style.userSelect = ''; } catch (e) {}
  }

  rail.addEventListener('pointerdown', function(e) {
    const interactive = e.target && e.target.closest
      ? e.target.closest('button, input, textarea, select, label')
      : null;

    if (interactive) return;

    drag = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startLeft: scroller.scrollLeft
    };

    rail.classList.add('is-dragging');

    try { rail.setPointerCapture(e.pointerId); } catch (err) {}
    try { document.body.style.userSelect = 'none'; } catch (err) {}

    e.preventDefault();
  });

  rail.addEventListener('pointermove', function(e) {
    if (!drag || e.pointerId !== drag.pointerId) return;

    const dx = e.clientX - drag.startX;
    scroller.scrollLeft = drag.startLeft - dx;

    e.preventDefault();
  });

  rail.addEventListener('pointerup', function(e) {
    if (!drag || e.pointerId !== drag.pointerId) return;
    stopDrag();
  });

  rail.addEventListener('pointercancel', function() {
    stopDrag();
  });

  rail.addEventListener('lostpointercapture', function() {
    stopDrag();
  });
}

function buildInput(uid, colIndex, key, value) {
  const stack = document.createElement('div');
  stack.className = 'lia-dyn-table-field-stack';

  const input = document.createElement('input');
  input.type = 'text';
  input.inputMode = 'text';
  input.autocomplete = 'off';
  input.autocapitalize = 'off';
  input.spellcheck = false;
  input.className = 'lia-dyn-table-input';
  input.value = String(value != null ? value : '');

  applyAutoInputWidth(input);
  stack.appendChild(input);

  const poolItem = takePoolItem(uid, getPoolIndex(colIndex, key));
  if (poolItem) {
    stack.appendChild(poolItem);
  }

  input.addEventListener('input', function() {
    setStateValue(uid, colIndex, key, input.value);
    applyAutoInputWidth(input);
    syncCellWidthFromStack(uid, colIndex, key, stack, poolItem);
    refreshPointButtons(uid);
  });

  input.addEventListener('blur', function() {
    applyAutoInputWidth(input);
    syncCellWidthFromStack(uid, colIndex, key, stack, poolItem);
    refreshPointButtons(uid);
  });

  observeFieldWidth(uid, colIndex, key, stack, input, poolItem);
  syncCellWidthFromStack(uid, colIndex, key, stack, poolItem);

  return stack;
}

function buildControl(uid, spec, state, scroller) {
  const rail = document.createElement('div');
  rail.className = 'lia-dyn-table-rail';

  const buttons = document.createElement('div');
  buttons.className = 'lia-dyn-table-rail-buttons';

  const btnPlus = document.createElement('button');
  btnPlus.type = 'button';
  btnPlus.className = 'lia-btn lia-dyn-table-btn';
  btnPlus.textContent = '+';
  btnPlus.disabled = state.cols >= MAX_COLS;

  btnPlus.addEventListener('click', function() {
    const st = window.__liaTableStates[uid];
    if (!st) return;

    st.cols = Math.min(MAX_COLS, st.cols + 1);
    st.values = resizeValues(st.values, st.cols);

    if (typeof window.renderTabelleFromSpec === 'function') {
      window.renderTabelleFromSpec(uid, spec, true);
    }
  });

  const btnMinus = document.createElement('button');
  btnMinus.type = 'button';
  btnMinus.className = 'lia-btn lia-dyn-table-btn';
  btnMinus.textContent = '-';
  btnMinus.disabled = state.cols <= MIN_COLS;

  btnMinus.addEventListener('click', function() {
    const st = window.__liaTableStates[uid];
    if (!st) return;

    st.cols = Math.max(MIN_COLS, st.cols - 1);
    st.values = resizeValues(st.values, st.cols);

    if (typeof window.renderTabelleFromSpec === 'function') {
      window.renderTabelleFromSpec(uid, spec, true);
    }
  });

  buttons.appendChild(btnPlus);
  buttons.appendChild(btnMinus);

  rail.appendChild(buttons);

  return rail;
}

function rebuildTable(uid, spec) {
  const root = getRoot(uid);
  if (!root) return false;

  reclaimPoolItems(uid);

  ensureCss();
  applyThemeToRoot(root);

  const st = ensureState(uid, spec);
  const hasPointRow = !!(st.pointPrefix && st.boardId);

  root.innerHTML = '';
  root.classList.add('lia-dyn-table-root');
  root.dataset.spec = spec;

  const shell = document.createElement('div');
  shell.className = 'lia-dyn-table-shell';

  const wrap = document.createElement('div');
  wrap.className = 'lia-dyn-table-wrap';

  const table = document.createElement('table');
  table.className = 'lia-dyn-table';

  const tbody = document.createElement('tbody');

  const tr1 = document.createElement('tr');
  const tr2 = document.createElement('tr');
  const tr3 = hasPointRow ? document.createElement('tr') : null;

  const th1 = document.createElement('th');
  th1.className = 'lia-dyn-table-label lia-dyn-table-double-sep';
  const th1Inner = document.createElement('div');
  th1Inner.innerHTML = normalizeLabelMath(st.row1, false);
  th1.appendChild(th1Inner);

  const th2 = document.createElement('th');
  th2.className =
    'lia-dyn-table-label lia-dyn-table-double-sep' +
    (hasPointRow ? '' : ' lia-dyn-table-bottom-row');
  const th2Inner = document.createElement('div');
  th2Inner.innerHTML = normalizeLabelMath(st.row2, true);
  th2.appendChild(th2Inner);

  tr1.appendChild(th1);
  tr2.appendChild(th2);

  let th3Inner = null;

if (hasPointRow && tr3) {
  const th3 = document.createElement('th');
  th3.className = 'lia-dyn-table-label lia-dyn-table-double-sep lia-dyn-table-bottom-row';

  th3Inner = document.createElement('div');
  th3Inner.innerHTML = '&nbsp;';
  th3.appendChild(th3Inner);

  tr3.appendChild(th3);
}

  for (let i = 0; i < st.cols; i++) {
    const isLast = i === st.cols - 1;

    const tdTop = document.createElement('td');
    tdTop.className =
      'lia-dyn-table-value' +
      (isLast ? ' lia-dyn-table-last-col' : '');
    tdTop.appendChild(buildInput(uid, i, 'x', st.values[i] ? st.values[i].x : ''));
    tr1.appendChild(tdTop);

    const tdBottom = document.createElement('td');
    tdBottom.className =
      'lia-dyn-table-value' +
      (hasPointRow ? '' : ' lia-dyn-table-bottom-row') +
      (isLast ? ' lia-dyn-table-last-col' : '');
    tdBottom.appendChild(buildInput(uid, i, 'y', st.values[i] ? st.values[i].y : ''));
    tr2.appendChild(tdBottom);

    if (hasPointRow && tr3) {
      const tdPoint = document.createElement('td');
      tdPoint.className =
        'lia-dyn-table-value lia-dyn-table-bottom-row' +
        (isLast ? ' lia-dyn-table-last-col' : '');

      tdPoint.appendChild(buildPointButton(uid, i, st));
      tr3.appendChild(tdPoint);
    }
  }

  tbody.appendChild(tr1);
  tbody.appendChild(tr2);
  if (hasPointRow && tr3) tbody.appendChild(tr3);

  table.appendChild(tbody);
  wrap.appendChild(table);

  const rail = buildControl(uid, spec, st, wrap);

  shell.appendChild(wrap);
  shell.appendChild(rail);
  root.appendChild(shell);

  typesetNode(th1Inner);
  typesetNode(th2Inner);
  if (th3Inner) typesetNode(th3Inner);

  refreshPointButtons(uid);

  root.__liaTableMounted = true;
  root.__liaTableLastSpec = spec;

  return true;
}

  window.renderTabelleFromSpec = function(uid, spec, force) {
    const root = getRoot(uid);
    if (!root) return false;

    if (!force && root.__liaTableMounted && root.__liaTableLastSpec === spec) {
      applyThemeToRoot(root);
      return true;
    }

    return rebuildTable(uid, spec);
  };

  window.getTabelleWerte = function(uid) {
    const st = window.__liaTableStates[uid];
    if (!st) return [];

    return resizeValues(st.values, st.cols).map(function(v) {
      return { x: v.x, y: v.y };
    });
  };

window.getTabelleDaten = function(uid) {
  const st = window.__liaTableStates[uid];
  if (!st) return null;

  return {
    uid: uid,
    spalten: st.cols,
    zeilen: st.pointPrefix && st.boardId ? 3 : 2,
    zeile1: st.row1,
    zeile2: st.row2,
    punktPrefix: st.pointPrefix || '',
    zielId: st.boardId || '',
    werte: window.getTabelleWerte(uid)
  };
};

  window.setTabelleWerte = function(uid, werte) {
    const st = window.__liaTableStates[uid];
    if (!st) return false;

    const arr = Array.isArray(werte) ? werte : [];
    const newCount = Math.max(MIN_COLS, Math.min(MAX_COLS, arr.length || st.cols || DEFAULT_COLS));

    st.cols = newCount;
    st.values = resizeValues(arr, newCount);

    const root = getRoot(uid);
    if (root && typeof window.renderTabelleFromSpec === 'function') {
      window.renderTabelleFromSpec(uid, root.dataset.spec || st.spec || '', true);
    }

    return true;
  };

  window.__bootstrapTabellen = function() {
    const nodes = document.querySelectorAll('[id^="lia-table-"][data-spec]');

    nodes.forEach(function(node) {
      const uid = String(node.id || '').replace(/^lia-table-/, '');
      const spec = String(node.dataset.spec || '');
      if (!uid || !spec) return;

      window.renderTabelleFromSpec(uid, spec, false);
      applyThemeToRoot(node);
    });
  };

  if (!window.__scheduleBootstrapTabellen) {
    window.__scheduleBootstrapTabellen = function() {
      if (window.__bootstrapTabellenRAF) return;

      window.__bootstrapTabellenRAF = requestAnimationFrame(function() {
        window.__bootstrapTabellenRAF = 0;
        try {
          if (window.__bootstrapTabellen) window.__bootstrapTabellen();
        } catch (e) {}
      });
    };
  }

  try {
    const mo = new MutationObserver(function(mutations) {
      let needsBootstrap = false;

      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];

        if (m.type === 'attributes') {
          const target = m.target;
          if (target && target.id && /^lia-table-/.test(target.id)) {
            needsBootstrap = true;
            break;
          }
        }

        if (m.type !== 'childList') continue;

        const added = Array.from(m.addedNodes || []);
        for (let j = 0; j < added.length; j++) {
          const n = added[j];
          if (!n || n.nodeType !== 1) continue;

          if (
            (n.id && /^lia-table-/.test(n.id)) ||
            (n.querySelector && n.querySelector('[id^="lia-table-"][data-spec]'))
          ) {
            needsBootstrap = true;
            break;
          }
        }

        if (needsBootstrap) break;
      }

      if (needsBootstrap && window.__scheduleBootstrapTabellen) {
        window.__scheduleBootstrapTabellen();
      }
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
    window.addEventListener('hashchange', function() {
      if (window.__scheduleBootstrapTabellen) window.__scheduleBootstrapTabellen();
    }, true);
  } catch (e) {}

  try {
    window.addEventListener('pageshow', function() {
      if (window.__scheduleBootstrapTabellen) window.__scheduleBootstrapTabellen();
    }, true);
  } catch (e) {}

  try {
    document.addEventListener('visibilitychange', function() {
      if (!document.hidden && window.__scheduleBootstrapTabellen) {
        window.__scheduleBootstrapTabellen();
      }
    }, true);
  } catch (e) {}

  try {
    if (window.__registerLiaThemeListener) {
      window.__registerLiaThemeListener(function() {
        refreshAllTableThemes();
      });
    } else {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = function() {
        refreshAllTableThemes();
      };

      if (mq && typeof mq.addEventListener === 'function') mq.addEventListener('change', handler);
      else if (mq && typeof mq.addListener === 'function') mq.addListener(handler);
    }
  } catch (e) {}

  try {
    if (window.__scheduleBootstrapTabellen) window.__scheduleBootstrapTabellen();
    setTimeout(function() {
      if (window.__scheduleBootstrapTabellen) window.__scheduleBootstrapTabellen();
    }, 80);
    setTimeout(function() {
      if (window.__scheduleBootstrapTabellen) window.__scheduleBootstrapTabellen();
    }, 220);
  } catch (e) {}
})();






