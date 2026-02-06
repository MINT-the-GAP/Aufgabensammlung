<!--
version:  0.0.2
language: de
author: Martin Lommatzsch
comment: TOC PDF-Bookmarks V5.1 — Baum AUS originalem LiaScript-TOC (Navigation + Active), crash-sicher, import-sicher, FILLED Keile ▶/▼

@style
/* ===== Bookmarks TOC (V5) ===== */
.lia-toc #lia-bm-toc5{ padding:.25em 0 .5em 0; }

.lia-toc #lia-bm-toc5 ul{ list-style:none; margin:0; padding:0; }
.lia-toc #lia-bm-toc5 .bm-list{ padding:0 .5em; }

.lia-toc #lia-bm-toc5 .bm-row{
  display:flex; align-items:center; gap:.35em;
  padding:.18em .25em; border-radius:.35em;
  line-height:1.25;
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
}
.lia-toc #lia-bm-toc5 .bm-toggle:hover{ opacity:1; }

/* ===== FILLED Keil: ▶ (zu/rechts) / ▼ (auf/runter) ===== */
.lia-toc #lia-bm-toc5 .bm-toggle::before{
  content:"";
  display:block;
  width:0; height:0;
  /* gefülltes Dreieck nach rechts */
  border-top: .28em solid transparent;
  border-bottom: .28em solid transparent;
  border-left: .45em solid currentColor;
  transform: rotate(0deg);            /* ▶ */
  transition: transform .12s ease;
}
.lia-toc #lia-bm-toc5 .bm-row.bm-open > .bm-toggle::before{
  transform: rotate(90deg);           /* ▼ */
}

.lia-toc #lia-bm-toc5 a{
  color:inherit; text-decoration:none;
  flex:1 1 auto; min-width:0;
  display:block;
}
.lia-toc #lia-bm-toc5 a:hover{ text-decoration:underline; }

.lia-toc #lia-bm-toc5 .bm-children{ padding-left: 0.5em; }
.lia-toc #lia-bm-toc5 .bm-hidden{ display:none !important; }

/* ===== Active in Themefarbe (mit LiaScript-Variablen, Fallbacks) ===== */
.lia-toc #lia-bm-toc5 .bm-row.bm-active{
  background: rgba(0,0,0,.14);
  background: rgba(var(--color-highlight), .18);
  border-left: 3px solid rgba(0,0,0,.35);
  border-left-color: rgb(var(--color-highlight));
  padding-left: calc(.25em - 3px);
}
.lia-toc #lia-bm-toc5 .bm-row.bm-active a{ font-weight: 700; }

/* Level-Optik (optional) — Werte wie bei dir */
.lia-toc #lia-bm-toc5 .bm-row[data-level="1"] a{ font-size:1.25em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="2"] a{ font-size:1.00em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="3"] a{ font-size:.9em;  font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="4"] a{ font-size:.8em;  font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="5"] a{ font-size:.75em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="6"] a{ font-size:.7em;  font-weight:700; }
@end

@onload
(function () {

  // =========================
  // Root/Doc (iframe-safe)
  // =========================
  function getRootWindowSafe(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  let ROOT = getRootWindowSafe();
  let ROOT_DOC = null;
  try { ROOT_DOC = ROOT.document; } catch(e){ ROOT = window; ROOT_DOC = document; }

  // =========================
  // Run-once (import-sicher)
  // =========================
  const REGKEY = "__LIA_BM_TOC5__";
  if (ROOT[REGKEY] && ROOT[REGKEY].installed) return;
  ROOT[REGKEY] = ROOT[REGKEY] || {};
  ROOT[REGKEY].installed = true;

  // =========================
  // Storage
  // =========================
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

  // =========================
  // Helpers
  // =========================
  function findTOC(){
    return ROOT_DOC.querySelector(".lia-toc") || document.querySelector(".lia-toc");
  }

  function extractHashFromHref(href){
    href = (href || "").trim();
    if (!href.includes("#")) return "";
    const h = href.split("#").pop() || "";
    return h.trim();
  }

  function getOriginalLinks(toc){
    if (!toc) return [];
    return Array.from(toc.querySelectorAll('a[href*="#"]'))
      .filter(a => !a.closest("#lia-bm-toc5"))
      .filter(a => {
        const href = (a.getAttribute("href") || "").trim();
        const hash = extractHashFromHref(href);
        return !!hash;
      });
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

  function getOriginalActiveHash(toc){
    if (!toc) return "";
    const a = toc.querySelector("a.lia-active") || (toc.querySelector(".lia-active a") || null);
    if (!a) return "";
    return extractHashFromHref(a.getAttribute("href") || "");
  }

  function getLevelFromDOM(a, toc){
    // 1) aria-level?
    const aria = a.getAttribute("aria-level");
    if (aria && !isNaN(parseInt(aria,10))) return parseInt(aria,10);

    // 2) Verschachtelung über UL/LI?
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

    return 0; // unknown => später via Indent-Mapping
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

  function hideOriginalTOCList(toc, keep1, keep2){
    for (const ch of Array.from(toc.children)){
      if (ch === keep1) continue;
      if (ch === keep2) continue;
      ch.style.display = "none";
    }
  }

  // =========================
  // Render
  // =========================
  function renderTree(doc, toc, nodes, state, activeHash, forceOpen){
    const ul = doc.createElement("ul");
    ul.className = "bm-list";

    for (const n of nodes){
      const li = doc.createElement("li");

      const row = doc.createElement("div");
      row.className = "bm-row";
      row.dataset.level = String(n.level);

      const hasKids = n.children && n.children.length;
      let childWrap = null;

      const mustOpen = (forceOpen && forceOpen.has(n.key)) || (state[n.key] === 1);

      if (hasKids){
        const btn = doc.createElement("button");
        btn.type = "button";
        btn.className = "bm-toggle";
        row.appendChild(btn);

        btn.addEventListener("click", (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

          const nowOpen = !row.classList.contains("bm-open");
          state[n.key] = nowOpen ? 1 : 0;
          saveState(state);
          setCollapsed(row, childWrap, nowOpen);
        }, true);
      } else {
        const sp = doc.createElement("span");
        sp.className = "bm-spacer";
        row.appendChild(sp);
      }

      const a = doc.createElement("a");
      a.textContent = n.text;

      // href aus originalem Link (wenn vorhanden), sonst #hash
      const orig = findOriginalLinkByHash(toc, n.hash);
      a.href = (orig && orig.getAttribute) ? (orig.getAttribute("href") || ("#" + n.hash)) : ("#" + n.hash);

      if (n.hash === activeHash) row.classList.add("bm-active");

      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

        // Navigation: originalen Link klicken (LiaScript springt zuverlässig)
        const ok = clickOriginalByHash(toc, n.hash);

        // Fallback: Hash setzen
        if (!ok){
          try { ROOT.location.hash = "#" + n.hash; } catch(e2){}
          try { window.location.hash = "#" + n.hash; } catch(e3){}
        }

        // Active nachziehen
        ROOT.setTimeout(() => {
          try{ syncActive(toc); } catch(e){}
        }, 80);
      }, true);

      row.appendChild(a);
      li.appendChild(row);

      if (hasKids){
        childWrap = doc.createElement("ul");
        childWrap.className = "bm-children";

        const kids = renderTree(doc, toc, n.children, state, activeHash, forceOpen);
        while (kids.firstChild) childWrap.appendChild(kids.firstChild);

        setCollapsed(row, childWrap, mustOpen);
        li.appendChild(childWrap);
      }

      ul.appendChild(li);
    }

    return ul;
  }

  // =========================
  // Enhance / Sync
  // =========================
  let LOCK = false;

  function enhance(){
    if (LOCK) return false;
    LOCK = true;

    try{
      const toc = findTOC();
      if (!toc) return false;

      const toolbar = toc.querySelector(".lia-toolbar");

      // Reset unserer Box
      const old = toc.querySelector("#lia-bm-toc5");
      if (old) old.remove();

      const links = getOriginalLinks(toc);
      if (!links.length) return false;

      // Nodes dedupliziert nach hash
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

      // Defaults: alles zu (nur Nodes mit Kindern)
      (function initDefaults(list){
        for (const n of list){
          if (n.children && n.children.length){
            if (state[n.key] !== 0 && state[n.key] !== 1) state[n.key] = 0;
            initDefaults(n.children);
          }
        }
      })(tree);

      const forceOpen = activeHash ? collectForceOpen(tree, activeHash) : new Set();

      const doc = toc.ownerDocument || ROOT_DOC;
      const box = doc.createElement("div");
      box.id = "lia-bm-toc5";
      box.appendChild(renderTree(doc, toc, tree, state, activeHash, forceOpen));

      if (toolbar && toolbar.parentElement === toc) toolbar.insertAdjacentElement("afterend", box);
      else toc.insertBefore(box, toc.firstChild);

      // Originales Listing ausblenden (Toolbar + Baum bleiben)
      hideOriginalTOCList(toc, toolbar, box);

      // State sicherheitshalber speichern
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
      const box = toc && toc.querySelector ? toc.querySelector("#lia-bm-toc5") : null;
      if (!box) return;

      const activeHash = getOriginalActiveHash(toc);
      if (!activeHash) return;

      box.querySelectorAll(".bm-row.bm-active").forEach(r => r.classList.remove("bm-active"));

      const target = box.querySelector(`a[href*="#${CSS.escape(activeHash)}"]`);
      if (target && target.closest){
        const row = target.closest(".bm-row");
        if (row) row.classList.add("bm-active");
      }
    } catch(e){}
  }

  // =========================
  // Boot (kein MutationObserver)
  // =========================
  let tries = 0;
  const bootTimer = ROOT.setInterval(() => {
    tries++;
    const ok = enhance();
    if (ok || tries > 80) ROOT.clearInterval(bootTimer);
  }, 150);

  // Falls LiaScript das TOC später neu rendert: nur dann rebuilden, wenn unser Box fehlt
  ROOT.setInterval(() => {
    const toc = findTOC();
    if (!toc) return;
    const box = toc.querySelector("#lia-bm-toc5");
    if (!box) enhance();
    else syncActive(toc);
  }, 700);

  try{
    ROOT.addEventListener("hashchange", () => {
      const toc = findTOC();
      if (toc) syncActive(toc);
    }, true);
  } catch(e){}

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

