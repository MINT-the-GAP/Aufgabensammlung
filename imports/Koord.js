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
          max-width:260px;
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
      s = s.replace(new RegExp('([abc])\\s*(' + vEsc + ')', 'g'), '$1*$2');
      s = s.replace(new RegExp('(' + vEsc + ')\\s*\\(', 'g'), '$1*(');
      s = s.replace(/([abc])\s*\(/g, '$1*(');

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

      const usedCanonical = { a: false, b: false, c: false };
      s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(token) {
        const name = String(token || '');
        if (name === 'a' || name === 'b' || name === 'c') usedCanonical[name] = true;
        return token;
      });

      const slotByToken = Object.create(null);
      const preferredSlots = ['a', 'b', 'c'].filter(function(slot) { return !usedCanonical[slot]; });

      s = s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, function(token) {
        const name = String(token || '');
        const lower = name.toLowerCase();
        if (reserved[lower]) return name;
        if (name === 'a' || name === 'b' || name === 'c') return name;
        if (slotByToken[lower]) return slotByToken[lower];

        const nextSlot = preferredSlots.shift();
        if (!nextSlot) return name;
        slotByToken[lower] = nextSlot;
        return nextSlot;
      });

      s = s.replace(new RegExp('\\b([abc])\\s*(' + vEsc + ')', 'g'), '$1*$2');
      s = s.replace(/\b([abc])\s*\(/g, '$1*(');
      s = s.replace(/\b([abc])\s+(?=(?:pi|e|sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|exp|log|ln|sqrt|abs|floor|ceil|round|min|max|pow)\b)/gi, '$1*');

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
        c: found[2] || 'c'
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

    function substituteTerm(expr, variableName, aValue, bValue, cValue) {
      const normalized = normalizeFamilyExpr(expr, variableName).replace(/\*\*/g, '^');
      const cResolved = (cValue == null) ? 0 : cValue;
      let out = normalized.replace(/\b(a|b|c)\b/g, function(match) {
        if (match === 'a') return formatNumber(aValue);
        if (match === 'b') return formatNumber(bValue);
        return formatNumber(cResolved);
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

    function evaluateAt(entry, xValue, bValue, cValue) {
      if (!entry || typeof entry.fn !== 'function') return NaN;
      try {
        const value = entry.fn(
          xValue,
          entry.a,
          bValue == null ? entry.b : bValue,
          cValue == null ? ((entry && entry.c == null) ? 0 : entry.c) : cValue
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
            '<div class="lia-schar-head">' +
              '<span class="lia-schar-label">a:</span>' +
              '<input class="lia-schar-slider" type="range" min="-10" max="10" step="0.1" value="1" />' +
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
      const fill = tone === '#fff' ? 'rgba(0,0,0,.82)' : 'rgba(255,255,255,.97)';
      panel.style.color = tone;
      panel.style.background = fill;
      panel.style.borderColor = tone === '#fff' ? 'rgba(255,255,255,.25)' : 'rgba(0,0,0,.16)';
      panel.style.zIndex = '52';
      panel.style.display = 'block';

      const sliderParamName = (entry.paramSlots && entry.paramSlots.a) ? entry.paramSlots.a : 'a';
      if (entry.labelEl) {
        entry.labelEl.innerHTML = '\\(' + sliderParamName + '\\):';
        try {
          const MJ = window.MathJax || (window.parent && window.parent.MathJax);
          if (MJ && typeof MJ.typesetPromise === 'function') {
            if (typeof MJ.typesetClear === 'function') {
              try { MJ.typesetClear([entry.labelEl]); } catch (e) {}
            }
            MJ.typesetPromise([entry.labelEl]).catch(function(){});
            if (typeof requestAnimationFrame === 'function') {
              requestAnimationFrame(function() {
                try { MJ.typesetPromise([entry.labelEl]).catch(function(){}); } catch (e) {}
              });
            }
          }
        } catch (e) {}
      }
      if (entry.sliderEl) {
        entry.sliderEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
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

      if (entry.sliderEl && !entry.sliderEl.__liaScharBound) {
        entry.sliderEl.__liaScharBound = true;
        const blockBoardGesture = function(evt) {
          try { evt.stopPropagation(); } catch (e) {}
        };
        ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click'].forEach(function(type) {
          try { entry.sliderEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
        });
        entry.sliderEl.addEventListener('input', function() {
          entry.a = Math.max(-10, Math.min(10, Number(entry.sliderEl.value || 0)));
          refreshEntry(entry);
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

      relayoutPanelsForBoard(entry.boardId, entry.board);

      return !!entry.sliderEl && !!entry.termEl;
    }

    function refreshEntry(entry) {
      if (!entry) return false;
      if (!ensurePanel(entry)) return false;
      ensureNameTag(entry);

      if (entry.sliderEl) {
        entry.sliderEl.value = String(entry.a);
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
          const termText = substituteTerm(entry.cfg.expr, entry.cfg.variableName, entry.a, entry.b, entry.c).replace(/\*/g, ' \\cdot ');
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
        paramSlots: extractParamSlots(cfg.expr, cfg.variableName),
        fn: fn,
        a: 1,
        b: 0,
        c: 0,
        dragUsesC: /[+\-]\s*c\b/.test(normalizedExpr),
        dragSupportsX: /\bb\b/.test(normalizedExpr),
        graph: null,
        nameTag: null,
        nameAnchor: null,
        panel: null,
        sliderEl: null,
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
            '<input class="lia-schar-slider" type="range" min="-10" max="10" step="0.1" value="1" />' +
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
      entry.sliderEl.style.flex = '0 0 140px';
      entry.sliderEl.style.width = '140px';
      entry.sliderEl.style.minWidth = '140px';
      entry.sliderEl.style.maxWidth = '140px';
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
      entry.termToggleWrapEl.style.display = entry.cfg && Number(entry.cfg.showTerm) !== 0 ? 'block' : 'none';
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
      ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderEl.addEventListener('input', function() {
        entry.a = Math.max(-10, Math.min(10, Number(entry.sliderEl.value || 0)));
        refreshEntry(entry);
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
        max-width:260px;
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
    const slots = ['a', 'b', 'c', 'd'];
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

  // Like substituteTerm, but also replaces the variable with (x+n) for n-shift polynomial families.
  function substitutedWithNShift(entry) {
    const raw = substituteTerm(entry.cfg.expr, entry.cfg.variableName, entry.a, entry.b, entry.c, entry.d);
    const nVal = (entry.dragTranslatesPolyX && entry.n) ? entry.n : 0;
    if (nVal === 0) return raw;
    const v = String(entry.cfg && entry.cfg.variableName ? entry.cfg.variableName : 'x');
    const vEsc = escapeRegExp(v);
    const nFormatted = formatNumber(Math.abs(nVal)).replace('.', ',');
    const nStr = nVal > 0 ? '+' + nFormatted : '-' + nFormatted;
    return raw.replace(new RegExp('(?<![A-Za-z0-9_.])' + vEsc + '(?![A-Za-z0-9_])', 'g'), '(' + v + nStr + ')');
  }

  // Returns the expanded (Klammern aufgelöst) polynomial term as a TeX string for n-shift families.
  // For p(x+n) = a(x+n)^3 + b(x+n)^2 + c(x+n) + d the expanded coefficients are:
  //   A=a, B=b+3an, C=c+2bn+3an^2, D=d+cn+bn^2+an^3
  // Only works for cubic (degree 3) right now; returns null if not applicable.
  function expandedPolyTerm(entry) {
    if (!entry.dragTranslatesPolyX) return null;
    const n = entry.n || 0;
    const a = entry.a, b = entry.b, c = entry.c, d = entry.d;
    const v = String(entry.cfg && entry.cfg.variableName ? entry.cfg.variableName : 'x');
    const A = a;
    const B = b + 3 * a * n;
    const C = c + 2 * b * n + 3 * a * n * n;
    const D = d + c * n + b * n * n + a * n * n * n;
    // Build the TeX polynomial from expanded coefficients
    const fmtCoef = function(coef, isFirst) {
      const num = Math.round(coef * 1000) / 1000;
      if (Math.abs(num) < 0.0000001) return null;
      const absStr = formatNumber(Math.abs(num)).replace('.', ',');
      if (isFirst) return num < 0 ? '-' + absStr : absStr;
      return num < 0 ? '-' + absStr : '+' + absStr;
    };
    const parts = [];
    const cA = fmtCoef(A, true);
    if (cA !== null) parts.push((Math.abs(Math.abs(A) - 1) < 0.0000001 ? (A < 0 ? '-' : '') : cA) + v + '^3');
    const cB = fmtCoef(B, parts.length === 0);
    if (cB !== null) parts.push((Math.abs(Math.abs(B) - 1) < 0.0000001 ? (B < 0 ? '-' : (parts.length ? '+' : '')) : cB) + v + '^2');
    const cC = fmtCoef(C, parts.length === 0);
    if (cC !== null) parts.push((Math.abs(Math.abs(C) - 1) < 0.0000001 ? (C < 0 ? '-' : (parts.length ? '+' : '')) : cC) + v);
    const cD = fmtCoef(D, parts.length === 0);
    if (cD !== null) parts.push(cD);
    if (parts.length === 0) return '0';
    return parts.join('\\,').replace(/\+\s*-/g, '-').replace(/-\s*-/g, '+');
  }

  function evaluateAt(entry, xValue, bValue, cValue, dValue) {
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

  // Detect standard polynomial a*x^n + b*x^m + c*x + d where horizontal drag
  // should translate the whole graph by shifting all coefficients analytically.
  function isStandardPolyDragFamily(normalizedExpr, cfg) {
    if (!normalizedExpr) return false;
    const v = String(cfg && cfg.variableName ? cfg.variableName : 'x').trim() || 'x';
    const vEsc = escapeRegExp(v);
    // b appears as high-power coefficient: b*x**
    const hasBHighPow = new RegExp('\\bb\\s*\\*\\s*' + vEsc + '\\s*\\*\\*', 'i').test(normalizedExpr);
    // c appears as linear coefficient: c*x (not followed by **)
    const hasCLinear = new RegExp('\\bc\\s*\\*\\s*' + vEsc + '(?!\\s*\\*\\*)', 'i').test(normalizedExpr);
    if (!hasBHighPow || !hasCLinear) return false;
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

    let out = String(expr || '').trim();
    out = convertSqrtCalls(out);
    out = powerParensToBraces(out);
    out = out.replace(/\^\(([^()]+)\)/g, '^{$1}');
    out = out.replace(/\^\{\(([^{}]+)\)\}/g, '^{$1}');
    out = out.replace(/\^([A-Za-z0-9.]+)/g, '^{$1}');
    out = out.replace(/\*/g, ' \\cdot ');
    // Remove \cdot before ( only when preceded by a letter or closing brace (not digits)
    out = out.replace(/([A-Za-z}])\s*\\cdot\s*\(/g, '$1(');
    // Remove \cdot before e (Euler's number)
    out = out.replace(/([A-Za-z0-9.,{}()\-]+)\s*\\cdot\s*e\b/g, '$1 e');
    // Simplify coefficient 1 before ( (e.g. 1(x+c) -> (x+c))
    out = out.replace(/(^|[^0-9.,])1\s*\\cdot\s*\(/g, '$1(');
    out = out.replace(/(^|[^0-9.,])1\s*\(/g, '$1(');
    // Remove trailing +0 and -0 before ), }, or end of expression
    out = out.replace(/\+\s*0(?=[^0-9.,]|$)/g, '');
    out = out.replace(/-\s*0(?=[^0-9.,]|$)/g, '');
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
          '<input class="lia-schar-slider" type="range" min="-10" max="10" step="0.1" value="1" />' +
        '</div>' +
        '<div class="lia-schar-head lia-schar-head-b">' +
          '<span class="lia-schar-label-b">b:</span>' +
          '<input class="lia-schar-slider-b" type="range" min="-10" max="10" step="0.1" value="0" />' +
        '</div>' +
        '<div class="lia-schar-head lia-schar-head-c">' +
          '<span class="lia-schar-label-c">c:</span>' +
          '<input class="lia-schar-slider-c" type="range" min="-10" max="10" step="0.1" value="0" />' +
        '</div>' +
        '<div class="lia-schar-head lia-schar-head-d">' +
          '<span class="lia-schar-label-d">d:</span>' +
          '<input class="lia-schar-slider-d" type="range" min="-10" max="10" step="0.1" value="0" />' +
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
    entry.termToggleWrapEl = panel.querySelector('.lia-schar-term-toggle-wrap');
    entry.termToggleEl = panel.querySelector('.lia-schar-term-toggle');
    entry.termEl = panel.querySelector('.lia-schar-term');
    entry.minBtnEl = panel.querySelector('.lia-schar-min-btn');
    entry.miniWrapEl = panel.querySelector('.lia-schar-mini-wrap');
    entry.miniNameEl = panel.querySelector('.lia-schar-mini-name');
    entry.miniStripEl = panel.querySelector('.lia-schar-mini-strip');

    // Recover from stale/legacy panel markup that misses required controls.
    if (!entry.sliderEl || !entry.sliderBEl || !entry.sliderCEl || !entry.sliderDEl || !entry.termEl) {
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
    if (entry.sliderEl) {
      entry.sliderEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.sliderEl.style.display = 'block';
      entry.sliderEl.style.width = '140px';
      entry.sliderEl.style.minWidth = '140px';
      entry.sliderEl.style.maxWidth = '140px';
      entry.sliderEl.style.flex = '0 0 140px';
      entry.sliderEl.style.visibility = 'visible';
      entry.sliderEl.style.opacity = '1';
      entry.sliderEl.style.pointerEvents = 'auto';
      entry.sliderEl.style.appearance = 'auto';
      entry.sliderEl.style.webkitAppearance = 'auto';
    }
    if (entry.sliderBEl) {
      entry.sliderBEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.sliderBEl.style.display = 'block';
      entry.sliderBEl.style.width = '140px';
      entry.sliderBEl.style.minWidth = '140px';
      entry.sliderBEl.style.maxWidth = '140px';
      entry.sliderBEl.style.flex = '0 0 140px';
      entry.sliderBEl.style.visibility = 'visible';
      entry.sliderBEl.style.opacity = '1';
      entry.sliderBEl.style.pointerEvents = 'auto';
      entry.sliderBEl.style.appearance = 'auto';
      entry.sliderBEl.style.webkitAppearance = 'auto';
    }
    if (entry.sliderCEl) {
      entry.sliderCEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.sliderCEl.style.display = 'block';
      entry.sliderCEl.style.width = '140px';
      entry.sliderCEl.style.minWidth = '140px';
      entry.sliderCEl.style.maxWidth = '140px';
      entry.sliderCEl.style.flex = '0 0 140px';
      entry.sliderCEl.style.visibility = 'visible';
      entry.sliderCEl.style.opacity = '1';
      entry.sliderCEl.style.pointerEvents = 'auto';
      entry.sliderCEl.style.appearance = 'auto';
      entry.sliderCEl.style.webkitAppearance = 'auto';
    }
    if (entry.sliderDEl) {
      entry.sliderDEl.style.accentColor = entry.cfg && entry.cfg.color ? entry.cfg.color : '#0b5fff';
      entry.sliderDEl.style.display = 'block';
      entry.sliderDEl.style.width = '140px';
      entry.sliderDEl.style.minWidth = '140px';
      entry.sliderDEl.style.maxWidth = '140px';
      entry.sliderDEl.style.flex = '0 0 140px';
      entry.sliderDEl.style.visibility = 'visible';
      entry.sliderDEl.style.opacity = '1';
      entry.sliderDEl.style.pointerEvents = 'auto';
      entry.sliderDEl.style.appearance = 'auto';
      entry.sliderDEl.style.webkitAppearance = 'auto';
    }

    const showBSlider = shouldShowBSlider(entry);
    const showCSlider = /(^|[^A-Za-z0-9_])c([^A-Za-z0-9_]|$)/.test(String(entry.normalizedExpr || ''));
    const showDSlider = /(^|[^A-Za-z0-9_])d([^A-Za-z0-9_]|$)/.test(String(entry.normalizedExpr || ''));
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

    if (entry.termToggleWrapEl) {
      entry.termToggleWrapEl.style.display = entry.cfg && Number(entry.cfg.showTerm) !== 0 ? 'block' : 'none';
      entry.termToggleWrapEl.style.visibility = 'visible';
      entry.termToggleWrapEl.style.opacity = '1';
      entry.termToggleWrapEl.style.pointerEvents = 'auto';
      entry.termToggleWrapEl.style.marginTop = '6px';
      entry.termToggleWrapEl.style.fontSize = '13px';
      entry.termToggleWrapEl.style.userSelect = 'none';
    }

    if (entry.sliderEl && !entry.sliderEl.__liaScharBoundV3) {
      entry.sliderEl.__liaScharBoundV3 = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderEl.addEventListener('input', function() {
        entry.a = Math.max(-10, Math.min(10, Number(entry.sliderEl.value || 0)));
        refreshEntry(entry);
      });
    }

    if (entry.sliderBEl && !entry.sliderBEl.__liaScharBoundV3) {
      entry.sliderBEl.__liaScharBoundV3 = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderBEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderBEl.addEventListener('input', function() {
        entry.b = Math.max(-10, Math.min(10, Number(entry.sliderBEl.value || 0)));
        refreshEntry(entry);
      });
    }

    if (entry.sliderCEl && !entry.sliderCEl.__liaScharBoundV3) {
      entry.sliderCEl.__liaScharBoundV3 = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderCEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderCEl.addEventListener('input', function() {
        entry.c = Math.max(-10, Math.min(10, Number(entry.sliderCEl.value || 0)));
        refreshEntry(entry);
      });
    }

    if (entry.sliderDEl && !entry.sliderDEl.__liaScharBoundV3) {
      entry.sliderDEl.__liaScharBoundV3 = true;
      const blockBoardGesture = function(evt) {
        try { evt.stopPropagation(); } catch (e) {}
      };
      ['pointerdown', 'pointermove', 'pointerup', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'click'].forEach(function(type) {
        try { entry.sliderDEl.addEventListener(type, blockBoardGesture, true); } catch (e) {}
      });
      entry.sliderDEl.addEventListener('input', function() {
        entry.d = Math.max(-10, Math.min(10, Number(entry.sliderDEl.value || 0)));
        refreshEntry(entry);
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
          let targetWidth = Math.ceil(Math.max(250, termWidth + 44));
          const measuredHeight = Math.ceil(Math.max(112, panel.scrollHeight || panel.offsetHeight || 0));
          const currentHeight = Number(entry._panelHeight || panel.offsetHeight || 0);
          let stableHeight = currentHeight > 0 ? Math.max(currentHeight, measuredHeight) : measuredHeight;

          if (entry._freezePanelDuringDrag) {
            const lockedWidth = Number(entry._dragLockedWidth || entry._panelWidth || panel.offsetWidth || 0);
            const lockedHeight = Number(entry._dragLockedHeight || panel.offsetHeight || 0);
            if (lockedWidth > 0) targetWidth = Math.max(targetWidth, lockedWidth);
            if (lockedHeight > 0) stableHeight = Math.max(stableHeight, lockedHeight);
            entry._dragLockedWidth = targetWidth;
            entry._dragLockedHeight = stableHeight;
          }

          panel.style.maxWidth = 'none';
          panel.style.minWidth = targetWidth + 'px';
          panel.style.width = targetWidth + 'px';
          panel.style.height = stableHeight + 'px';
          panel.style.minHeight = stableHeight + 'px';
          entry._panelWidth = targetWidth;
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
        if (lightweight) {
          const dragTermText = toTexExpr(substitutedWithNShift(entry));
          const expandedPoly = expandedPolyTerm(entry);
          const newLatex = '\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + dragTermText + '\\)' +
            (expandedPoly !== null ? '<br>\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + expandedPoly + '\\)' : '');
          const now = Date.now();
          if (entry.panel && (!entry._lastDragPanelResize || now - entry._lastDragPanelResize > 70)) {
            const approxTermWidth = Math.max(0, dragTermText.length * 8);
            const approxTargetWidth = Math.ceil(Math.max(250, approxTermWidth + 44));
            const currentWidth = Number(entry._dragLockedWidth || entry._panelWidth || entry.panel.offsetWidth || approxTargetWidth);
            const smoothedWidth = Math.round(currentWidth * 0.6 + approxTargetWidth * 0.4);
            const dragWidth = Math.max(currentWidth, smoothedWidth);
            entry.panel.style.maxWidth = 'none';
            entry.panel.style.width = dragWidth + 'px';
            entry.panel.style.minWidth = dragWidth + 'px';
            entry._panelWidth = dragWidth;
            entry._dragLockedWidth = dragWidth;
            entry._lastDragPanelResize = now;
          }
          if (!entry._lastDragTypeset || now - entry._lastDragTypeset > 90) {
            entry._lastDragTypeset = now;
            entry.termEl.innerHTML = newLatex;
            typesetMathNode(entry.termEl).then(function() {
              shrinkRenderedMath();
              fitPanelToTerm();
            }).catch(function() {
              shrinkRenderedMath();
              fitPanelToTerm();
            });
          }
          try {
            if (entry.board && typeof entry.board.update === 'function') entry.board.update();
          } catch (e) {}
          relayoutPanelsForBoard(entry.boardId, entry.board);
          return true;
        }

        const termText = toTexExpr(substitutedWithNShift(entry));
        const expandedPolyLine = expandedPolyTerm(entry);
        entry.termEl.innerHTML = '\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + termText + '\\)' +
          (expandedPolyLine !== null ? '<br>\\(' + entry.cfg.name + '(' + entry.cfg.variableName + ')=' + expandedPolyLine + '\\)' : '');
        typesetMathNode(entry.termEl).then(function() {
          shrinkRenderedMath();
          fitPanelToTerm();
        }).catch(function() {
          shrinkRenderedMath();
          fitPanelToTerm();
        });
      } else {
        entry.termEl.textContent = '';
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
      const startN = entry && entry.n == null ? 0 : (entry.n || 0);
      const startGraphY = evaluateAt(entry, start.x, startB, startC, startD);
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
          // so horizontal drag only changes n (= x-offset), vertical drag changes d.
          // Sliders for a,b,c,d continue to work normally and independently.
          if (entry.dragTranslatesPolyX) {
            entry.n = startN - dx;
            entry.d = startD + dy;
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
      entry.dragUsesD = /[+\-]\s*d\b/.test(entry.normalizedExpr);
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
      n: 0,
      expDragMode: getExponentialDragMode({ normalizedExpr: normalizedExpr, cfg: cfg }),
      dragShiftsCWithX: shouldDragByCShift({ normalizedExpr: normalizedExpr, cfg: cfg }),
      dragUsesC: /[+\-]\s*c\b/.test(normalizedExpr) && !shouldDragByCShift({ normalizedExpr: normalizedExpr, cfg: cfg }),
      dragUsesD: /[+\-]\s*d\b/.test(normalizedExpr),
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
      valueEl: null,
      termToggleWrapEl: null,
      termToggleEl: null,
      termVisible: false,
      termEl: null,
      bAutoInitialized: false,
      dragState: null,
      stopDrag: null,
      panelScale: 1,
      panelMinimized: false
    };

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
        position:fixed;
        right:16px;
        bottom:70px;
        z-index:99999;
        min-width:280px;
        max-width:min(480px, calc(100vw - 32px));
        border:1px solid rgba(255,255,255,.22);
        border-radius:14px;
        background:#111c;
        color:#fff;
        backdrop-filter:blur(6px);
        padding:10px 14px;
        box-sizing:border-box;
        font-size:13px;
        font-family:monospace;
        line-height:1.45;
        white-space:pre-wrap;
        word-break:break-word;
        box-shadow:0 8px 28px rgba(0,0,0,.5);
        display:none;
        pointer-events:none;
      }

      .lia-plot-analyze-panel[data-open="1"]{
        display:block;
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

  function getState(boardId) {
    const key = String(boardId || '');
    if (!key) return null;

    const specs = window.__liaCoordDrawSpecs || {};
    const spec = specs[key] || null;
    const state = window.__liaCoordDrawStates[key] || (window.__liaCoordDrawStates[key] = {
      boardId: key,
      color: spec && spec.color ? String(spec.color) : '#fff',
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
      analyzedParamPanel: null,
      analyzedParamPanels: [],
      drawColorMenu: null,
      drawColorMenuOpen: false,
      drawColor: (spec && spec.color ? String(spec.color) : '#fff'),
      syncRaf: 0,
      hooksBound: false
    });

    return state;
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

  function linear2FitFromFeature(points, featureFn) {
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
    if (used < 4) return null;
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

  function analyzeStroke(boardId, stroke) {
    const pts = simplifyPoints(stroke);
    if (pts.length < 8) return null;

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

    function fitByGrid(name, bMin, bMax, bSteps, cMin, cMax, cSteps, featFn, buildExpr) {
      let best = null;
      for (let bi = 0; bi <= bSteps; bi++) {
        const b = bMin + (bMax - bMin) * (bi / bSteps);
        for (let ci = 0; ci <= cSteps; ci++) {
          const c = cMin + (cMax - cMin) * (ci / cSteps);
          const lin = linear2FitFromFeature(pts, function(x) { return featFn(x, b, c); });
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
        });
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
        });
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
          const lin = linear2FitFromFeature(pts, function(x) { return sinFeat(x, b, c); });
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
          const lin = linear2FitFromFeature(pts, function(x) { return sinFeat(x, b, c); });
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
      const expCand = candidates.find(function(cand) { return cand.name === 'exponential'; }) || null;
      const logCand = candidates.find(function(cand) { return cand.name === 'logarithmus'; }) || null;
      const curvatureNorm = c2 ? Math.abs(c2[2]) * xSpan * xSpan / Math.max(ySpan, 0.001) : Infinity;
      const quadGain = (linearCand && quadCand && Number.isFinite(linearCand.error) && Number.isFinite(quadCand.error))
        ? (linearCand.error - quadCand.error) / Math.max(linearCand.error, 1e-6)
        : 0;
      const cubicGain = (linearCand && cubicCand && Number.isFinite(linearCand.error) && Number.isFinite(cubicCand.error))
        ? (linearCand.error - cubicCand.error) / Math.max(linearCand.error, 1e-6)
        : 0;
      const isNearlyLinear = !!linearCand && (
        curvatureNorm < 0.09 ||
        (curvatureNorm < 0.14 && quadGain < 0.14 && cubicGain < 0.18)
      );
      const isStronglyLinear = !!linearCand && dirChanges <= 1 && (
        curvatureNorm < 0.18 &&
        quadGain < 0.22 &&
        cubicGain < 0.26
      );

      // ── Apply adjustments ──────────────────────────────────────────────────
      if (isStronglyLinear) {
        // Hard preference: almost straight curve should stay linear.
        candidates.forEach(function(cand) {
          if (cand.name === 'linear') cand.score *= 0.28;
          if (cand.name === 'quadratisch') cand.score *= 1.7;
          if (cand.name === 'kubisch') cand.score *= 2.0;
          if (cand.name === 'sinus' || cand.name === 'exponential' || cand.name === 'wurzel' || cand.name === 'logarithmus') cand.score *= 2.0;
        });
        return;
      }

      if (isNearlyLinear) {
        // If slope change is small, prefer the simpler linear model.
        candidates.forEach(function(cand) {
          if (cand.name === 'linear') cand.score *= 0.5;
          if (cand.name === 'quadratisch') cand.score *= 1.45;
          if (cand.name === 'kubisch') cand.score *= 1.75;
          if (cand.name === 'sinus' || cand.name === 'exponential' || cand.name === 'wurzel' || cand.name === 'logarithmus') cand.score *= 1.55;
        });
      }

      if (isOscillating) {
        candidates.forEach(function(cand) {
          if (cand.name === 'wurzel' || cand.name === 'exponential' || cand.name === 'logarithmus') cand.score *= 4;
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
          });
        } else if (isConvex) {
          // Convex + monotone + asymmetric → typical exp shape
          candidates.forEach(function(cand) {
            if (cand.name === 'exponential') cand.score *= 0.78;
            if (cand.name === 'wurzel')      cand.score *= 2.5;
            if (cand.name === 'logarithmus') cand.score *= 2.5;
          });
        }
      }

      if (isMonotone && isSymmetric) {
        // Symmetric arch → sinus half-period
        candidates.forEach(function(cand) {
          if (cand.name === 'wurzel' || cand.name === 'exponential' || cand.name === 'logarithmus') cand.score *= 2.5;
          if (cand.name === 'sinus') cand.score *= 0.55;
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
      if (linearCand && expCand && Number.isFinite(linearCand.error) && Number.isFinite(expCand.error)) {
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
      if (linearCand && logCand && Number.isFinite(linearCand.error) && Number.isFinite(logCand.error)) {
        const logGain = (linearCand.error - logCand.error) / Math.max(linearCand.error, 1e-6);
        if (logGain < 0.16) {
          linearCand.score *= 0.74;
          logCand.score *= 1.28;
        }
      }

      // Tie-break toward linear if it is almost as good in absolute error.
      if (linearCand && Number.isFinite(linearCand.error)) {
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
      (document.body || document.documentElement).appendChild(panel);
      state.analyzePanel = panel;
    }

    const hasText = !!(text);
    panel.style.display = hasText ? 'block' : 'none';
    panel.dataset.open = hasText ? '1' : '0';
    panel.textContent = text || '';

    // Anchor panel to board top-right if board is available
    if (hasText && board && board.containerObj) {
      try {
        const rect = board.containerObj.getBoundingClientRect();
        panel.style.position = 'fixed';
        panel.style.top = Math.max(4, rect.top + 8) + 'px';
        panel.style.right = Math.max(4, (window.innerWidth - rect.right) + 8) + 'px';
        panel.style.bottom = '';
        panel.style.left = '';
      } catch (e) {}
    }
  }

  function updateUi(boardId) {
    const board = window.__boards && window.__boards[boardId];
    const state = getState(boardId);
    if (!board || !state || !state.drawButton || !state.eraseButton || !state.analyzeButton || !state.canvas) return;

    const tone = resolveToolTone(board);
    const activeBg = resolveActiveBgColor();
    const drawActive = state.tool === 'draw';
    const eraseActive = state.tool === 'erase';
    const analyzeActive = state.tool === 'analyze';

    state.drawButton.style.color = tone;
    state.drawButton.style.background = drawActive ? activeBg : 'transparent';
    state.drawButton.style.borderColor = tone;
    state.drawButton.style.outline = 'none';
    state.drawButton.style.outlineOffset = '0';
    state.drawButton.dataset.active = drawActive ? '1' : '0';
    state.drawButton.title = drawActive ? 'Freihandzeichnen aktiv' : 'Freihandzeichnen aktivieren';

    state.eraseButton.style.color = tone;
    state.eraseButton.style.background = eraseActive ? activeBg : 'transparent';
    state.eraseButton.style.borderColor = tone;
    state.eraseButton.style.outline = 'none';
    state.eraseButton.style.outlineOffset = '0';
    state.eraseButton.dataset.active = eraseActive ? '1' : '0';
    state.eraseButton.title = eraseActive ? 'Radierer aktiv' : 'Radierer aktivieren';

    state.analyzeButton.style.color = tone;
    state.analyzeButton.style.background = analyzeActive ? activeBg : 'transparent';
    state.analyzeButton.style.borderColor = tone;
    state.analyzeButton.style.outline = 'none';
    state.analyzeButton.style.outlineOffset = '0';
    state.analyzeButton.dataset.active = analyzeActive ? '1' : '0';
    state.analyzeButton.title = analyzeActive ? 'Funktionsanalyse aktiv' : 'Funktionsanalyse aktivieren';

    // Hard-set SVG stroke color to avoid external CSS overriding currentColor.
    [state.drawButton, state.eraseButton, state.analyzeButton].forEach(function(btn) {
      if (!btn || !btn.querySelectorAll) return;
      btn.querySelectorAll('.ico-stroke').forEach(function(path) {
        path.style.stroke = tone;
        path.style.fill = 'none';
        path.style.strokeWidth = '1.6';
      });
    });

    if (state.analyzePanel) {
      state.analyzePanel.style.color = tone;
      state.analyzePanel.style.borderColor = tone;
    }

    state.canvas.dataset.active = state.tool ? '1' : '0';
    state.canvas.style.pointerEvents = state.tool ? 'auto' : 'none';
    state.canvas.style.cursor = drawActive ? 'crosshair' : (eraseActive ? 'cell' : (analyzeActive ? 'pointer' : 'default'));
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
    }

    function stopPanelEventPropagation(el) {
      if (!el || !el.addEventListener) return;
      ['pointerdown','pointermove','pointerup','mousedown','mousemove','mouseup','touchstart','touchmove','touchend','click'].forEach(function(t) {
        el.addEventListener(t, function(e) { e.stopPropagation(); }, true);
      });
    }

    function predictFromModel(name, params, fallbackPredict) {
      if (name === 'linear')      return function(x) { return params.m * x + params.n; };
      if (name === 'quadratisch') return function(x) { return params.A * (x + params.c) * (x + params.c) + params.d; };
      if (name === 'kubisch')     return function(x) { return ((params.a * x + params.b) * x + params.c) * x + params.d; };
      if (name === 'exponential') return function(x) { return params.A * Math.exp(params.b * (x + params.c)) + params.d; };
      if (name === 'logarithmus') return function(x) { var t = x + params.c; return t <= 0 ? NaN : params.A * Math.log(t) + params.d; };
      if (name === 'wurzel')      return function(x) { var bw = (params.b !== undefined ? params.b : 1); var t = bw * (x + params.c); return t < 0 ? NaN : params.A * Math.sqrt(t) + params.d; };
      if (name === 'sinus')       return function(x) { return params.A * Math.sin(params.b * (x + params.c)) + params.d; };
      return fallbackPredict;
    }

    function formatModelExpr(name, params, fallbackExpr) {
      if (name === 'linear')      return toFixedNum(params.m) + '*x' + signed(params.n);
      if (name === 'quadratisch') return toFixedNum(params.A) + '*(x' + signed(params.c) + ')^2' + signed(params.d);
      if (name === 'kubisch')     return toFixedNum(params.a) + '*x^3' + signed(params.b) + '*x^2' + signed(params.c) + '*x' + signed(params.d);
      if (name === 'exponential') return toFixedNum(params.A) + '*exp(' + toFixedNum(params.b) + '*(x' + signed(params.c) + '))' + signed(params.d);
      if (name === 'logarithmus') return toFixedNum(params.A) + '*ln(x' + signed(params.c) + ')' + signed(params.d);
      if (name === 'wurzel') {
        var bw = params.b;
        var inner = (bw === undefined || Math.abs(bw - 1) < 0.02)
          ? ('x' + signed(params.c))
          : (toFixedNum(bw) + '*(x' + signed(params.c) + ')');
        return toFixedNum(params.A) + '*sqrt(' + inner + ')' + signed(params.d);
      }
      if (name === 'sinus')       return toFixedNum(params.A) + '*sin(' + toFixedNum(params.b) + '*(x' + signed(params.c) + '))' + signed(params.d);
      return fallbackExpr || '';
    }

    function modelDisplayName(name) {
      if (name === 'linear') return 'Lineare Funktion';
      if (name === 'quadratisch') return 'Quadratische Funktion';
      if (name === 'kubisch') return 'Kubische Funktion';
      if (name === 'wurzel') return 'Wurzelfunktion';
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
      const panel = document.createElement('div');
      panel.className = 'lia-schar-panel';
      panel.style.zIndex = '60';
      panel.style.pointerEvents = 'auto';
      panel.style.minWidth = '190px';
      panel.style.maxWidth = 'none';
      panel.style.padding = '8px 10px';
      panel.style.borderRadius = '12px';
      panel.style.boxSizing = 'border-box';
      panel.style.boxShadow = '0 6px 18px rgba(0,0,0,.18)';
      const tone = neutralColor();
      const fill = tone === '#fff' ? 'rgba(0,0,0,.82)' : 'rgba(255,255,255,.94)';
      const uiFontFamily = resolveOverlayFontFamily(board);
      panel.style.color = tone;
      panel.style.background = fill;
      panel.style.borderColor = tone === '#fff' ? 'rgba(255,255,255,.25)' : 'rgba(0,0,0,.16)';
      panel.style.borderStyle = 'solid';
      panel.style.borderWidth = '1px';
      panel.style.fontFamily = uiFontFamily;
      stopPanelEventPropagation(panel);

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
      panel.appendChild(selectWrap);

      const controlsHost = document.createElement('div');
      panel.appendChild(controlsHost);

      const termBox = document.createElement('div');
      termBox.className = 'lia-schar-term';
      termBox.style.display = 'block';
      termBox.style.visibility = 'visible';
      termBox.style.opacity = '1';
      termBox.style.marginTop = '8px';
      panel.appendChild(termBox);

      function renderControls(candidateIndex, params) {
        const candidate = (result.candidates || [])[candidateIndex] || result.best;
        const values = params || Object.assign({}, candidate.params || {});
        termBox.textContent = '\\(f(x)=' + toTexModelExpr(formatModelExpr(candidate.name, values, candidate.expr)) + '\\)';
        typesetOverlayMath(termBox);
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
          sl.min = String(Math.min(-10, Math.floor(v * 2)));
          sl.max = String(Math.max(10, Math.ceil(v * 2)));
          sl.step = '0.05';
          sl.value = String(v);
          sl.style.accentColor = String(drawColor || '#ff4400');
          sl.style.display = 'block';
          sl.style.flex = '0 0 140px';
          sl.style.width = '140px';
          sl.style.minWidth = '140px';
          sl.style.maxWidth = '140px';
          sl.style.margin = '0';
          stopPanelEventPropagation(sl);
          sl.addEventListener('input', function() {
            const nextValues = Object.assign({}, values, {});
            nextValues[k] = Number(sl.value);
            termBox.textContent = '\\(f(x)=' + toTexModelExpr(formatModelExpr(candidate.name, nextValues, candidate.expr)) + '\\)';
            typesetOverlayMath(termBox);
            onSelectionChange(candidateIndex, nextValues);
            values[k] = nextValues[k];
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

      renderControls(Math.max(0, (result.candidates || []).indexOf(result.best)));
      return panel;
    }

    function renderAnalysisResult(result, curveColor) {
      if (!result) return;

      var activeIndex = Math.max(0, (result.candidates || []).indexOf(result.best));
      var activeCandidate = (result.candidates || [])[activeIndex] || result.best;
      var activeParams = Object.assign({}, activeCandidate.params || {});
      var livePredict = predictFromModel(activeCandidate.name, activeParams, activeCandidate.predict);
      const drawColor = String(curveColor || state.drawColor || state.color || '#ff4400');
      var createdGraph = null;

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
        state.analyzedGraph = createdGraph;
        if (!Array.isArray(state.analyzedGraphs)) state.analyzedGraphs = [];
        state.analyzedGraphs.push(createdGraph);
        try { board.update(); } catch (e) {}
      } catch (e) {}

      try {
        var pPanel = buildAnalysisOverlay(result, function(candidateIndex, params) {
          activeIndex = candidateIndex;
          activeCandidate = (result.candidates || [])[activeIndex] || result.best;
          activeParams = Object.assign({}, params || {});
          livePredict = predictFromModel(activeCandidate.name, activeParams, activeCandidate.predict);
          try { board.update(); } catch (e) {}
        }, drawColor);
        pPanel.classList.add('lia-plot-analysis-param-panel');
        pPanel.__liaGraphRef = createdGraph;
        board.containerObj.appendChild(pPanel);
        if (!Array.isArray(state.analyzedParamPanels)) state.analyzedParamPanels = [];
        state.analyzedParamPanels.push(pPanel);
        relayoutAnalyzedParamPanels();
        state.analyzedParamPanel = pPanel;
      } catch (e) {}

      setAnalyzePanel(board, state, '');
    }

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
          scheduleRedraw(boardId);
          return;
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
        const analysis = analyzeStroke(boardId, stroke);
        state.analyzedStrokeIndex = strokeIndex;
        state.analyzedCurvePoints = null;

        if (!analysis) {
          setAnalyzePanel(board, state, 'Analyse nicht moeglich (zu wenige/ungeeignete Punkte).');
          scheduleRedraw(boardId);
          return;
        }

        renderAnalysisResult(analysis, (stroke && stroke.color) ? stroke.color : state.color);
        scheduleRedraw(boardId);
        return;
        } catch (analyzeErr) {
          setAnalyzePanel(board, state, 'Fehler: ' + String(analyzeErr && analyzeErr.message || analyzeErr));
          return;
        }
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

    function stop(evt) {
      if (!state.drawing) return;
      if (evt && evt.pointerId != null && evt.pointerId !== state.pointerId) return;

      state.drawing = false;
      state.pointerId = null;
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
      button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" style="display:block;overflow:visible"><path class="ico-stroke" d="M4 20l4.7-1.1L19 8.6 15.4 5 5.1 15.3z"></path><path class="ico-stroke" d="M13.9 6.5l3.6 3.6"></path></svg>';
      board.containerObj.appendChild(button);
    }

    let eraseButton = board.containerObj.querySelector('.lia-plot-erase-toggle');
    if (!eraseButton) {
      eraseButton = document.createElement('button');
      eraseButton.type = 'button';
      eraseButton.className = 'lia-plot-draw-toggle lia-plot-erase-toggle';
      eraseButton.setAttribute('aria-label', 'Pinselstrich loeschen');
      eraseButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" style="display:block;overflow:visible;transform:translate(-2px,-2px)"><path class="ico-stroke" d="M6.2 15.7l8-8a2 2 0 0 1 2.8 0l3.1 3.1a2 2 0 0 1 0 2.8L13.4 20.3H9.3l-3.1-3.1a2 2 0 0 1 0-1.5z"></path><path class="ico-stroke" d="M9.2 20.3h8"></path><path class="ico-stroke" d="M10 13.9l5.7 5.7"></path></svg>';
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

    let colorMenu = board.containerObj.querySelector('.lia-plot-color-menu');
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
      (document.body || document.documentElement).appendChild(analyzePanel);
    }

    button.style.position = 'absolute';
    button.style.left = '10px';
    button.style.bottom = '10px';
    button.style.width = '40px';
    button.style.height = '40px';
    button.style.minWidth = '40px';
    button.style.minHeight = '40px';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.padding = '0';
    button.style.margin = '0';
    button.style.zIndex = '48';
    button.style.borderRadius = '999px';
    button.style.boxSizing = 'border-box';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 2px 10px rgba(0,0,0,.28)';

    eraseButton.style.position = 'absolute';
    eraseButton.style.left = '56px';
    eraseButton.style.bottom = '10px';
    eraseButton.style.width = '40px';
    eraseButton.style.height = '40px';
    eraseButton.style.minWidth = '40px';
    eraseButton.style.minHeight = '40px';
    eraseButton.style.display = 'flex';
    eraseButton.style.alignItems = 'center';
    eraseButton.style.justifyContent = 'center';
    eraseButton.style.padding = '0';
    eraseButton.style.margin = '0';
    eraseButton.style.zIndex = '48';
    eraseButton.style.borderRadius = '999px';
    eraseButton.style.boxSizing = 'border-box';
    eraseButton.style.cursor = 'pointer';
    eraseButton.style.boxShadow = '0 2px 10px rgba(0,0,0,.28)';

    analyzeButton.style.position = 'absolute';
    analyzeButton.style.left = '102px';
    analyzeButton.style.bottom = '10px';
    analyzeButton.style.width = '40px';
    analyzeButton.style.height = '40px';
    analyzeButton.style.minWidth = '40px';
    analyzeButton.style.minHeight = '40px';
    analyzeButton.style.display = 'flex';
    analyzeButton.style.alignItems = 'center';
    analyzeButton.style.justifyContent = 'center';
    analyzeButton.style.padding = '0';
    analyzeButton.style.margin = '0';
    analyzeButton.style.zIndex = '48';
    analyzeButton.style.borderRadius = '999px';
    analyzeButton.style.boxSizing = 'border-box';
    analyzeButton.style.cursor = 'pointer';
    analyzeButton.style.boxShadow = '0 2px 10px rgba(0,0,0,.28)';

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
      const isOpen = !!open;
      state.drawColorMenuOpen = isOpen;
      colorMenu.dataset.open = isOpen ? '1' : '0';
      colorMenu.style.display = isOpen ? 'grid' : 'none';
    }
    setColorMenuOpen(false);

    state.canvas = canvas;
    state.drawButton = button;
    state.eraseButton = eraseButton;
    state.analyzeButton = analyzeButton;
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

    bindCanvas(boardId);
    bindBoardHooks(boardId);

    if (!board.containerObj.__liaPlotColorMenuDocBound) {
      board.containerObj.__liaPlotColorMenuDocBound = true;
      document.addEventListener('pointerdown', function(evt) {
        const st = getState(boardId);
        if (!st || !st.drawColorMenu) return;
        if (!st.drawColorMenuOpen) return;
        const inBtn = st.drawButton && st.drawButton.contains(evt.target);
        const inMenu = st.drawColorMenu.contains(evt.target);
        if (!inBtn && !inMenu) {
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

  window.__bootstrapPlotZeichnen = function() {
    const nodes = document.querySelectorAll('[id^="plot-zeichnen-spec-"][data-color]');

    nodes.forEach(function(node) {
      const boardId = String(node.dataset.boardId || '').trim();
      const color = String(node.dataset.color || '').trim();
      if (!boardId || !color) return;

      window.__liaCoordDrawSpecs[boardId] = { color: color };
    });

    Object.keys(window.__liaCoordDrawSpecs || {}).forEach(function(boardId) {
      ensureBoardTools(boardId);
    });
  };

  try {
    const mo = new MutationObserver(function() {
      if (window.__bootstrapPlotZeichnen) window.__bootstrapPlotZeichnen();
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
        Object.keys(window.__liaCoordDrawSpecs || {}).forEach(updateUi);
      });
    }
  } catch (e) {}

  try {
    if (window.__bootstrapPlotZeichnen) window.__bootstrapPlotZeichnen();
    setTimeout(function() {
      if (window.__bootstrapPlotZeichnen) window.__bootstrapPlotZeichnen();
    }, 80);
    setTimeout(function() {
      if (window.__bootstrapPlotZeichnen) window.__bootstrapPlotZeichnen();
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
    Object.keys(window.__liaCoordDrawSpecs || {}).forEach(updateUi);
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
    const buttons = findAllQuizButtons(checkRoot);
    const idx = buttons.indexOf(targetBtn);
    const text = String(targetBtn.textContent || targetBtn.value || '').trim().toLowerCase();

    if (idx >= 1) return true;
    if (/l+�s|solution|aufl|show/.test(text)) return true;

    return false;
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
    const buttons = findAllQuizButtons(checkRoot);
    const idx = buttons.indexOf(targetBtn);
    const text = String(targetBtn.textContent || targetBtn.value || '').trim().toLowerCase();

    if (idx >= 1) return true;
    if (/l+�s|solution|aufl|show/.test(text)) return true;

    return false;
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






