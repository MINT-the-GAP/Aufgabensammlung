<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: TOC PDF-Bookmarks V0.1 — eigener Baum-TOC (▶/▼), import-sicher, Original-TOC+Search entfernt, Übersicht bleibt unten, Cleanup beim Übersicht-Klick & auf Overview-Root

@onload
(function () {

  // =========================================================
  // Root/Doc (iframe-safe)
  // =========================================================
  function getRootWindowSafe(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  let ROOT = getRootWindowSafe();
  let ROOT_DOC = null;
  try { ROOT_DOC = ROOT.document; } catch(e){ ROOT = window; ROOT_DOC = document; }

  // =========================================================
  // Run-once Registry (import-sicher) — aber "kickbar"
  // =========================================================
  const REGKEY = "__LIA_BM_TOC5_V59__";
  if (ROOT[REGKEY] && ROOT[REGKEY].installed) {
    try { ROOT[REGKEY].kick && ROOT[REGKEY].kick(); } catch(e){}
    return;
  }
  ROOT[REGKEY] = ROOT[REGKEY] || {};
  ROOT[REGKEY].installed = true;

  // =========================================================
  // CSS Injection (immer in toc.ownerDocument)
  // =========================================================
  const STYLE_ID = "lia-bm-toc5-style";
  const CSS_TEXT = `
/* ===== Aktiv nur wenn Klasse gesetzt ===== */
.lia-toc.lia-bm-toc5-active{
  display:flex !important;
  flex-direction:column !important;
  min-height:0 !important;
}
.lia-toc.lia-bm-toc5-active #lia-bm-toc5{
  flex: 1 1 auto !important;
  min-height: 0 !important;
  overflow: auto !important;
}
.lia-toc.lia-bm-toc5-active .lia-bm-overview-pin{
  margin-top: auto !important;
}

/* ===== Bookmarks TOC ===== */
.lia-toc #lia-bm-toc5{ padding:.25em 0 .5em 0; }

.lia-toc #lia-bm-toc5 ul{ list-style:none; margin:0; padding:0; }
.lia-toc #lia-bm-toc5 .bm-list{ padding:0 .5em; }

.lia-toc #lia-bm-toc5 .bm-row{
  display:flex; align-items:center; gap:.35em;
    padding:.18em .25em .28em .25em; border-radius:.35em;
  line-height:1.25;
}


/* ===== Separator: weiß, 80% Breite, zentriert, zwischen ALLEN sichtbaren Einträgen ===== */
.lia-toc #lia-bm-toc5 .bm-row{
  position:relative; /* Anker für ::after */
  padding-bottom:.28em; /* Platz für Linie */
}
.lia-toc #lia-bm-toc5 .bm-row::after{
  content:"";
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  width:90%;
  height:1px;
  bottom:0; /* Linie IN der Zeile, wird nicht vom children-UL überdeckt */
  background: rgba(255,255,255,0.85);
  pointer-events:none;
}
/* nur beim letzten BLATT (ohne Kinder) ausblenden */
.lia-toc #lia-bm-toc5 li:last-child:not(.bm-has-kids) > .bm-row::after{
  display:none;
}



.lia-toc #lia-bm-toc5 .bm-row:hover{ background: rgba(127,127,127,.12); }

.lia-toc #lia-bm-toc5 .bm-toggle,
.lia-toc #lia-bm-toc5 .bm-spacer{
  width:1.15em; height:1.15em; flex:0 0 1.15em;
  display:inline-flex; align-items:center; justify-content:center;
}

.lia-toc #lia-bm-toc5 .bm-toggle{
  border:0; background:transparent; color:inherit;
  cursor:pointer; padding:0; opacity:.9;
  font-size:.95em; line-height:1;
}
.lia-toc #lia-bm-toc5 .bm-toggle:hover{ opacity:1; }

.lia-toc #lia-bm-toc5 a{
  color:inherit; text-decoration:none;
  flex:1 1 auto; min-width:0;
  display:block;
}
.lia-toc #lia-bm-toc5 a:hover{ text-decoration:underline; }

.lia-toc #lia-bm-toc5 .bm-children{ padding-left: 0.5em; }
.lia-toc #lia-bm-toc5 .bm-hidden{ display:none !important; }

/* Active in Themefarbe */
.lia-toc #lia-bm-toc5 .bm-row.bm-active{
  background: rgba(0,0,0,.14);
  background: rgba(var(--color-highlight), .18);
  border-left: 3px solid rgba(0,0,0,.35);
  border-left-color: rgb(var(--color-highlight));
  padding-left: calc(.25em - 3px);
}
.lia-toc #lia-bm-toc5 .bm-row.bm-active a{ font-weight: 700; }

/* Level-Optik (deine Werte) */
.lia-toc #lia-bm-toc5 .bm-row[data-level="1"] a{ font-size:1.25em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="2"] a{ font-size:1.00em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="3"] a{ font-size:.9em;  font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="4"] a{ font-size:.8em;  font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="5"] a{ font-size:.75em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="6"] a{ font-size:.7em;  font-weight:700; }

/* Search überall in .lia-toc verstecken (aber nicht in unserem Baum) */
.lia-toc :not(#lia-bm-toc5) input[type="search"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="Suche"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="suche"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="Search"],
.lia-toc :not(#lia-bm-toc5) input[placeholder*="search"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="Suche"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="suche"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="Search"],
.lia-toc :not(#lia-bm-toc5) input[aria-label*="search"],
.lia-toc :not(#lia-bm-toc5) form[role="search"],
.lia-toc :not(#lia-bm-toc5) [role="search"]{
  display:none !important;
}
  `.trim();

  function ensureStyle(doc){
    if (!doc) return;
    try{
      if (doc.getElementById(STYLE_ID)) return;
      const st = doc.createElement("style");
      st.id = STYLE_ID;
      st.type = "text/css";
      st.appendChild(doc.createTextNode(CSS_TEXT));
      (doc.head || doc.documentElement || doc.body).appendChild(st);
    } catch(e){}
  }

  // =========================================================
  // Storage
  // =========================================================
  function storageKey(){
    try{
      const href = (ROOT.location && ROOT.location.href) ? ROOT.location.href : "";
      return "__LIA_BM_TOC5_STATE__::" + href.split("#")[0];
    } catch(e){
      return "__LIA_BM_TOC5_STATE__";
    }
  }
  function loadState(){
    try{
      const raw = ROOT.localStorage.getItem(storageKey());
      const obj = raw ? JSON.parse(raw) : {};
      return (obj && typeof obj === "object") ? obj : {};
    } catch(e){ return {}; }
  }
  function saveState(s){
    try{ ROOT.localStorage.setItem(storageKey(), JSON.stringify(s || {})); } catch(e){}
  }

  // =========================================================
  // Route: Overview-Root?
  // =========================================================
  function isOverviewRoot(){
    try{
      const u = new URL(ROOT.location.href);
      const p = (u.pathname || "").replace(/\/+$/,"/"); // normalize
      const isNightly = /\/nightly\/$/.test(p);
      const isCourse  = /\/course\/$/.test(p);
      const noQuery = !u.search || u.search === "";
      return (isNightly || isCourse) && noQuery;
    } catch(e){
      return false;
    }
  }

  // =========================================================
  // Helpers (TOC)
  // =========================================================
  function findTOC(){
    return (ROOT_DOC && ROOT_DOC.querySelector ? ROOT_DOC.querySelector(".lia-toc") : null)
        || (document.querySelector ? document.querySelector(".lia-toc") : null);
  }

  function extractHashFromHref(href){
    href = (href || "").trim();
    if (!href.includes("#")) return "";
    const h = href.split("#").pop() || "";
    return h.trim();
  }

  function isRealHashLink(a){
    if (!a || !a.getAttribute) return false;
    const href = (a.getAttribute("href") || "").trim();
    if (!href.includes("#")) return false;
    const h = extractHashFromHref(href);
    return !!h;
  }

  function getOriginalLinks(toc){
    if (!toc) return [];
    return Array.from(toc.querySelectorAll('a[href*="#"]'))
      .filter(a => !a.closest("#lia-bm-toc5"))
      .filter(a => isRealHashLink(a));
  }

  function getOriginalActiveHash(toc){
    if (!toc) return "";
    const a = toc.querySelector("a.lia-active") || (toc.querySelector(".lia-active a") || null);
    if (!a) return "";
    return extractHashFromHref(a.getAttribute("href") || "");
  }

  function findOriginalLinkByHash(toc, hash){
    if (!toc || !hash) return null;
    const needle = "#" + hash;
    const links = Array.from(toc.querySelectorAll('a[href*="#"]'))
      .filter(a => !a.closest("#lia-bm-toc5"));
    return (
      links.find(a => ((a.getAttribute("href")||"").trim()).endsWith(needle)) ||
      links.find(a => ((a.getAttribute("href")||"").trim()).includes(needle)) ||
      null
    );
  }

  function clickOriginalByHash(toc, hash){
    const a = findOriginalLinkByHash(toc, hash);
    if (!a) return false;
    try { a.click(); return true; } catch(e){}
    try{
      a.dispatchEvent(new MouseEvent("click", { bubbles:true, cancelable:true, view:ROOT }));
      return true;
    } catch(e){}
    return false;
  }

  function getLevelFromDOM(a, toc){
    const aria = a.getAttribute("aria-level");
    if (aria && !isNaN(parseInt(aria,10))) return parseInt(aria,10);

    const li = a.closest("li");
    if (li){
      let depth = 1;
      let n = li.parentElement;
      while (n && n !== toc){
        if (n.tagName === "UL") depth++;
        n = n.parentElement;
      }
      return Math.max(1, Math.min(6, depth));
    }
    return 0;
  }

  function getIndentPx(a){
    try{
      const cs = (a.ownerDocument && a.ownerDocument.defaultView)
        ? a.ownerDocument.defaultView.getComputedStyle(a)
        : getComputedStyle(a);
      const pl = parseFloat(cs.paddingLeft || "0") || 0;
      const ml = parseFloat(cs.marginLeft  || "0") || 0;
      const ti = parseFloat(cs.textIndent  || "0") || 0;
      return Math.max(pl, ml, ti);
    } catch(e){
      return 0;
    }
  }

  function mapIndentLevels(nodes){
    const indents = nodes.map(n => n.indent).filter(x => x > 0);
    const uniq = Array.from(new Set(indents.map(x => Math.round(x)))).sort((a,b)=>a-b);

    if (!uniq.length){
      nodes.forEach(n => { if (n.level === 0) n.level = 1; });
      return;
    }

    nodes.forEach(n => {
      if (n.level !== 0) return;
      const v = Math.round(n.indent);
      let idx = uniq.indexOf(v);
      if (idx < 0) idx = 0;
      n.level = Math.max(1, Math.min(6, idx + 1));
    });
  }

  function buildTree(items){
    const root = { children: [] };
    const stack = [{ node: root, level: 0 }];
    for (const it of items){
      while (stack.length && stack[stack.length-1].level >= it.level) stack.pop();
      const parent = stack[stack.length-1].node;
      const node = { ...it, children: [] };
      parent.children.push(node);
      stack.push({ node, level: it.level });
    }
    return root.children;
  }

  function collectForceOpen(tree, activeHash){
    const force = new Set();
    function walk(list, parents){
      for (const n of list){
        if (n.hash === activeHash){
          parents.forEach(p => force.add(p.key));
          return true;
        }
        if (n.children && n.children.length){
          if (walk(n.children, parents.concat(n))) return true;
        }
      }
      return false;
    }
    walk(tree, []);
    return force;
  }

  function setCollapsed(row, childWrap, open){
    row.classList.toggle("bm-open", !!open);
    if (childWrap) childWrap.classList.toggle("bm-hidden", !open);
  }

  function setGlyph(btn, open){
    if (!btn) return;
    btn.textContent = open ? "▼" : "▶";
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  // =========================================================
  // Search überall entfernen (JS robust)
  // =========================================================
  function looksLikeSearchInput(inp){
    if (!inp || !inp.getAttribute) return false;
    const type = (inp.getAttribute("type") || "").toLowerCase();
    const ph   = (inp.getAttribute("placeholder") || "").toLowerCase();
    const al   = (inp.getAttribute("aria-label") || "").toLowerCase();
    return (
      type === "search" ||
      ph.includes("suche") || ph.includes("search") ||
      al.includes("suche") || al.includes("search")
    );
  }

  function killSearchAnywhere(toc){
    if (!toc) return;
    try{
      Array.from(toc.querySelectorAll("input"))
        .filter(inp => !inp.closest("#lia-bm-toc5"))
        .forEach(inp => {
          if (!looksLikeSearchInput(inp)) return;
          const wrap =
            inp.closest('form,[role="search"],[class*="search"],[id*="search"],div,label') || inp;
          wrap.style.display = "none";
          wrap.setAttribute("data-lia-bm-hidden","1");
        });

      Array.from(toc.querySelectorAll('form[role="search"],[role="search"]'))
        .filter(el => !el.closest("#lia-bm-toc5"))
        .forEach(el => {
          el.style.display = "none";
          el.setAttribute("data-lia-bm-hidden","1");
        });

      Array.from(toc.querySelectorAll('[class*="search"],[id*="search"]'))
        .filter(el => !el.closest("#lia-bm-toc5"))
        .forEach(el => {
          if (!el.querySelector("input")) return;
          el.style.display = "none";
          el.setAttribute("data-lia-bm-hidden","1");
        });
    } catch(e){}
  }

  // =========================================================
  // Übersicht finden & unten pinnen
  // =========================================================
  function findOverviewControl(toc){
    if (!toc) return null;

    // Kandidaten: a/button mit Text "Übersicht"
    const cand = Array.from(toc.querySelectorAll("a,button"))
      .filter(el => !el.closest("#lia-bm-toc5"));

    // 1) Textmatch
    for (const el of cand){
      const t = (el.textContent || "").trim().toLowerCase();
      if (t === "übersicht" || t === "uebersicht" || t === "overview") return el;
    }

    // 2) href zeigt auf /nightly/ oder /course/ Root
    for (const el of cand){
      if (!el.getAttribute) continue;
      const href = (el.getAttribute("href") || "").trim();
      if (!href) continue;
      if (href === "/nightly/" || href === "/course/" ||
          href.endsWith("/nightly/") || href.endsWith("/course/")) {
        return el;
      }
    }

    return null;
  }

  // direct child of toc (damit margin-top:auto greift)
  function directChildOfTOC(el, toc){
    if (!el || !toc) return null;
    let n = el;
    while (n && n.parentElement && n.parentElement !== toc) n = n.parentElement;
    return (n && n.parentElement === toc) ? n : null;
  }

  function pinOverviewBottom(toc, overviewEl){
    if (!toc) return null;
    if (!overviewEl) return null;

    const child = directChildOfTOC(overviewEl, toc) || overviewEl;
    try{
      child.classList.add("lia-bm-overview-pin");
    } catch(e){}
    return child;
  }

  // =========================================================
  // Original-TOC ausblenden (Button/Toolbar bleibt)
  // =========================================================
  function unhideAllHidden(toc){
    if (!toc) return;
    try{
      toc.querySelectorAll('[data-lia-bm-hidden="1"]').forEach(el => {
        el.style.display = "";
        el.removeAttribute("data-lia-bm-hidden");
      });
    } catch(e){}
  }

  function elementContainsOriginalHashLinks(el){
    if (!el || !el.querySelectorAll) return false;
    const as = Array.from(el.querySelectorAll('a[href*="#"]'));
    return as.some(a => !a.closest("#lia-bm-toc5") && isRealHashLink(a));
  }

  function hideOriginalNavigation(toc, toolbar, box, keepEl){
    if (!toc) return;

    // direkte Kinder, die Original-Hashlinks enthalten -> weg (außer keep)
    try{
      const kids = Array.from(toc.children || []);
      kids.forEach(ch => {
        if (!ch) return;
        if (toolbar && ch === toolbar) return;
        if (box && ch === box) return;
        if (keepEl && ch === keepEl) return;

        if (elementContainsOriginalHashLinks(ch)){
          ch.style.display = "none";
          ch.setAttribute("data-lia-bm-hidden","1");
        }
      });
    } catch(e){}

    // Fallback: tiefer liegende Wrapper/Listen -> weg (außer keep/toolbar/box)
    try{
      const cand = Array.from(toc.querySelectorAll("ul,ol,nav,section,div"))
        .filter(el => !el.closest("#lia-bm-toc5"))
        .filter(el => !(toolbar && el.closest && el.closest(".lia-toolbar")))
        .filter(el => !(keepEl && keepEl.contains && keepEl.contains(el)))
        .filter(el => elementContainsOriginalHashLinks(el));

      cand.forEach(el => {
        const parent = el.parentElement;
        if (parent && cand.includes(parent)) return;
        el.style.display = "none";
        el.setAttribute("data-lia-bm-hidden","1");
      });
    } catch(e){}
  }

  // =========================================================
  // Cleanup: Baum + Klassen + Hides entfernen
  // =========================================================
  function cleanup(toc){
    try{
      if (!toc) return;

      // Box raus
      const box = toc.querySelector("#lia-bm-toc5");
      if (box) box.remove();

      // Hides zurück
      unhideAllHidden(toc);

      // Klassen zurück
      toc.classList.remove("lia-bm-toc5-active");
      try{
        toc.querySelectorAll(".lia-bm-overview-pin").forEach(el => el.classList.remove("lia-bm-overview-pin"));
      } catch(e){}

    } catch(e){}
  }

  // =========================================================
  // Render
  // =========================================================
  function renderTree(doc, toc, nodes, state, activeHash, forceOpen){
    const ul = doc.createElement("ul");
    ul.className = "bm-list";

    for (const n of nodes){
      const li = doc.createElement("li");

      const row = doc.createElement("div");
      row.className = "bm-row";
      row.dataset.level = String(n.level);

      const hasKids = n.children && n.children.length;
      if (hasKids) li.classList.add("bm-has-kids");
      let childWrap = null;
      const mustOpen = (forceOpen && forceOpen.has(n.key)) || (state[n.key] === 1);

      let btn = null;

      if (hasKids){
        btn = doc.createElement("button");
        btn.type = "button";
        btn.className = "bm-toggle";
        btn.setAttribute("aria-label", "Abschnitt ein-/ausklappen");
        row.appendChild(btn);
      } else {
        const sp = doc.createElement("span");
        sp.className = "bm-spacer";
        row.appendChild(sp);
      }

      const a = doc.createElement("a");
      a.textContent = n.text;

      const orig = findOriginalLinkByHash(toc, n.hash);
      a.href = (orig && orig.getAttribute) ? (orig.getAttribute("href") || ("#" + n.hash)) : ("#" + n.hash);

      if (n.hash === activeHash) row.classList.add("bm-active");

      if (hasKids){
        childWrap = doc.createElement("ul");
        childWrap.className = "bm-children";
      }

      setCollapsed(row, childWrap, mustOpen);
      if (btn) setGlyph(btn, mustOpen);

      if (btn){
        btn.addEventListener("click", (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

          const nowOpen = !row.classList.contains("bm-open");
          state[n.key] = nowOpen ? 1 : 0;
          saveState(state);

          setCollapsed(row, childWrap, nowOpen);
          setGlyph(btn, nowOpen);
        }, true);
      }

      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

        // Auto-Open: Klick auf Parent klappt auf
        if (hasKids && !row.classList.contains("bm-open")){
          state[n.key] = 1;
          saveState(state);
          setCollapsed(row, childWrap, true);
          if (btn) setGlyph(btn, true);
        }

        const ok = clickOriginalByHash(toc, n.hash);
        if (!ok){
          try { ROOT.location.hash = "#" + n.hash; } catch(e2){}
          try { window.location.hash = "#" + n.hash; } catch(e3){}
        }

        ROOT.setTimeout(() => { try{ syncActive(toc); } catch(e){} }, 80);
      }, true);

      row.appendChild(a);
      li.appendChild(row);

      if (hasKids){
        const kids = renderTree(doc, toc, n.children, state, activeHash, forceOpen);
        while (kids.firstChild) childWrap.appendChild(kids.firstChild);
        li.appendChild(childWrap);
      }

      ul.appendChild(li);
    }

    return ul;
  }

  // =========================================================
  // Enhance / Sync
  // =========================================================
  let LOCK = false;

  function enhance(){
    if (LOCK) return false;
    LOCK = true;

    try{
      const toc = findTOC();
      if (!toc) return false;

      // Wenn wir auf Overview-Root sind: cleanup und fertig
      if (isOverviewRoot()){
        cleanup(toc);
        return false;
      }

      const TOC_DOC = toc.ownerDocument || ROOT_DOC || document;

      ensureStyle(TOC_DOC);
      ensureStyle(ROOT_DOC);
      if (ROOT_DOC !== document) ensureStyle(document);

      // Reset alter Zustände
      unhideAllHidden(toc);
      killSearchAnywhere(toc);

      // Toolbar behalten (TOC-Button)
      const toolbar = toc.querySelector(".lia-toolbar");

      // Overview-Button finden, pinnen und click-hook für cleanup
      const overviewBtn = findOverviewControl(toc);
      const overviewChild = pinOverviewBottom(toc, overviewBtn);

      if (overviewBtn && !overviewBtn.getAttribute("data-lia-bm-hooked")){
        overviewBtn.setAttribute("data-lia-bm-hooked","1");
        overviewBtn.addEventListener("click", () => {
          // Vor dem Wechsel: DOM-Reste entfernen
          const t = findTOC();
          if (t) cleanup(t);
        }, true);
      }

      // alten Baum entfernen
      const old = toc.querySelector("#lia-bm-toc5");
      if (old) old.remove();

      // Original-Links als Quelle
      const links = getOriginalLinks(toc);
      if (!links.length) return false;

      // Nodes dedupe nach hash
      const nodes = [];
      const seen = new Set();
      links.forEach((a) => {
        const hash = extractHashFromHref(a.getAttribute("href") || "");
        if (!hash) return;

        const key = "h:" + hash;
        if (seen.has(key)) return;
        seen.add(key);

        const lvl = getLevelFromDOM(a, toc);
        nodes.push({
          key,
          hash,
          text: (a.textContent || "").trim().replace(/\s+/g," "),
          level: lvl || 0,
          indent: getIndentPx(a)
        });
      });

      mapIndentLevels(nodes);
      const tree = buildTree(nodes);

      const state = loadState();
      const activeHash = getOriginalActiveHash(toc) || "";

      // Defaults: alles zu (nur nodes mit Kindern)
      (function initDefaults(list){
        for (const n of list){
          if (n.children && n.children.length){
            if (state[n.key] !== 0 && state[n.key] !== 1) state[n.key] = 0;
            initDefaults(n.children);
          }
        }
      })(tree);

      const forceOpen = activeHash ? collectForceOpen(tree, activeHash) : new Set();

      // bauen & einfügen
      const box = TOC_DOC.createElement("div");
      box.id = "lia-bm-toc5";
      box.appendChild(renderTree(TOC_DOC, toc, tree, state, activeHash, forceOpen));

      if (toolbar && toolbar.parentElement === toc) toolbar.insertAdjacentElement("afterend", box);
      else toc.insertBefore(box, toc.firstChild);

      // Layout aktivieren (damit Übersicht unten bleibt)
      toc.classList.add("lia-bm-toc5-active");

      // Original-Navi weg (aber toolbar + box + overviewChild bleiben)
      hideOriginalNavigation(toc, toolbar, box, overviewChild);

      saveState(state);
      return true;

    } catch(e){
      return false;
    } finally {
      LOCK = false;
    }
  }

  function syncActive(toc){
    try{
      if (!toc) return;
      const box = toc.querySelector ? toc.querySelector("#lia-bm-toc5") : null;
      if (!box) return;

      const activeHash = getOriginalActiveHash(toc);
      if (!activeHash) return;

      box.querySelectorAll(".bm-row.bm-active").forEach(r => r.classList.remove("bm-active"));

      const links = Array.from(box.querySelectorAll('a[href*="#"]'));
      const needle = "#" + activeHash;
      const a = links.find(x => (x.getAttribute("href") || "").includes(needle));
      if (a && a.closest){
        const row = a.closest(".bm-row");
        if (row) row.classList.add("bm-active");
      }
    } catch(e){}
  }

  // =========================================================
  // Boot (kein MutationObserver)
  // =========================================================
  let tries = 0;
  const bootTimer = ROOT.setInterval(() => {
    tries++;
    const ok = enhance();
    if (ok || tries > 160) ROOT.clearInterval(bootTimer);
  }, 150);

  const interval = ROOT.setInterval(() => {
    const toc = findTOC();
    if (!toc) return;

    // Falls wir auf Overview-Root sind: sicher cleanup
    if (isOverviewRoot()){
      cleanup(toc);
      return;
    }

    // Search wird von LiaScript gern nachgerendert
    killSearchAnywhere(toc);

    const box = toc.querySelector("#lia-bm-toc5");
    if (!box) {
      enhance();
    } else {
      // Original weg halten + Active sync
      const toolbar = toc.querySelector(".lia-toolbar");
      const overviewBtn = findOverviewControl(toc);
      const overviewChild = pinOverviewBottom(toc, overviewBtn);
      hideOriginalNavigation(toc, toolbar, box, overviewChild);
      toc.classList.add("lia-bm-toc5-active");
      syncActive(toc);
    }
  }, 700);

  try{
    ROOT.addEventListener("hashchange", () => {
      const toc = findTOC();
      if (toc) syncActive(toc);
    }, true);
  } catch(e){}

  // expose for kick
  ROOT[REGKEY].kick = function(){
    try{
      const toc = findTOC();
      if (toc && !isOverviewRoot()) enhance();
      if (toc && isOverviewRoot()) cleanup(toc);
    } catch(e){}
  };

})();
@end
-->




















# Navigationstests

## Navigationstestsa

## Navigationstestse

# Navigationstestsb

## Navigationstestsc

## Navigationstestsd

### Navigationstestsc

### Navigationstestsd

### Navigationstestsc

#### Navigationstestsc

##### Navigationstestsc

###### Navigationstestsc

###### Navigationstestsc

## Navigationstestsd

