<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Aufgabenresetter v0.0.1 — Segment-Reset via LIASCRIPT-Reparse (Invocation-Scan) + sibling-safe Stash + single-instance guard

@style
:root{
  --lia-resetter-accent: var(--lia-accent, var(--lia-primary-color, var(--color-primary, #0b5fff)));
}

button.lia-resetter-btn{
  background: transparent !important;
  color: var(--lia-resetter-accent) !important;
  border: 1px solid var(--lia-resetter-accent) !important;

  font-size: 0.75em !important;
  line-height: 1 !important;
  height: 1.35em !important;

  padding: 0 0.45em !important;
  margin: 0 0 0 0.6em !important;
  border-radius: 0.35em !important;

  display: inline-flex !important;
  align-items: center !important;
  vertical-align: baseline !important;

  cursor: pointer !important;
}
button.lia-resetter-btn:hover{ text-decoration: underline !important; }
button.lia-resetter-btn:focus{ outline: none !important; text-decoration: underline !important; }

.lia-resetter-host{
  display: block !important;
  margin-top: 0.25rem !important;
}
output.lia-resetter-out{ display: block !important; }

.lia-resetter-stash{ display: none !important; }
@end


@onload
(function () {

  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT_WIN    = getRootWindow();
  const ROOT_DOC    = ROOT_WIN.document;
  const CONTENT_WIN = window;
  const CONTENT_DOC = document;

  // =========================
  // Registry (import-sicher) + Single-Instance Guard
  // =========================
  const REGKEY = "__LIA_RESETTER_V001__";
  const REG = ROOT_WIN[REGKEY] || (ROOT_WIN[REGKEY] = {
    activeId: null,
    cleanup: null,

    sendByUid: Object.create(null),
    uiByUid: Object.create(null),
    inflight: Object.create(null),

    cache: Object.create(null),

    MAX_DEPTH: 12,
    MAX_FILES: 250
  });

  // Kill previous instance (best effort)
  const MY_ID = String(Date.now()) + "_" + Math.random().toString(16).slice(2);
  try{
    if (typeof REG.cleanup === "function") REG.cleanup();
  }catch(e){}
  REG.activeId = MY_ID;
  REG.cleanup = function(){
    // nothing persistent here (no observers/timers)
  };

  function isActive(){
    return REG.activeId === MY_ID;
  }

  // =========================
  // Themefarbe (aus .lia-btn gemessen)
  // =========================
  function sampleAccent(doc){
    try{
      let btn = doc.querySelector(".lia-btn");
      let tmp = null;
      if (!btn && doc.body){
        tmp = doc.createElement("button");
        tmp.className = "lia-btn";
        tmp.type = "button";
        tmp.textContent = "x";
        tmp.style.position = "absolute";
        tmp.style.left = "-10000px";
        tmp.style.top  = "-10000px";
        tmp.style.opacity = "0";
        doc.body.appendChild(tmp);
        btn = tmp;
      }
      if (!btn) return "";
      const cs = (doc.defaultView || ROOT_WIN).getComputedStyle(btn);
      const bg = (cs.backgroundColor || "").trim();
      const bc = (cs.borderTopColor  || "").trim();
      if (tmp) tmp.remove();
      return (bg && bg !== "rgba(0, 0, 0, 0)") ? bg : bc;
    }catch(e){ return ""; }
  }

  function updateAccent(){
    const c = sampleAccent(ROOT_DOC) || sampleAccent(CONTENT_DOC) || "#0b5fff";
    try{ ROOT_DOC.documentElement.style.setProperty("--lia-resetter-accent", c); }catch(e){}
    try{ CONTENT_DOC.documentElement.style.setProperty("--lia-resetter-accent", c); }catch(e){}
  }

  // =========================
  // Kurs-URL + Fetch
  // =========================
  function normalizeGithubUrl(u){
    try{
      if (!u) return u;
      if (u.includes("github.com/") && u.includes("/blob/")){
        return u.replace("https://github.com/", "https://raw.githubusercontent.com/").replace("/blob/", "/");
      }
      return u;
    }catch(e){ return u; }
  }

  function getCourseUrl(){
    try{
      const qs = (ROOT_WIN.location && ROOT_WIN.location.search) ? ROOT_WIN.location.search : "";
      if (qs && qs.length > 1){
        const raw = qs.slice(1);
        if (raw.startsWith("http")) return normalizeGithubUrl(decodeURIComponent(raw));
        const sp = new URLSearchParams(raw);
        const c = sp.get("course") || sp.get("url") || sp.get("src");
        if (c) return normalizeGithubUrl(decodeURIComponent(c));
        const keys = Array.from(sp.keys());
        if (keys.length === 1 && keys[0].startsWith("http")) return normalizeGithubUrl(decodeURIComponent(keys[0]));
      }
    }catch(e){}
    try{
      const L = ROOT_WIN.LIA;
      if (L && L.course && typeof L.course.url === "string")  return normalizeGithubUrl(L.course.url);
      if (L && L.course && typeof L.course.path === "string") return normalizeGithubUrl(L.course.path);
    }catch(e){}
    return null;
  }

  async function fetchText(url){
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("fetch " + res.status);
    return await res.text();
  }

  // =========================
  // Import resolver → resolved source (cached)
  // =========================
  function absolutize(u, base){
    try{
      if (!u) return null;
      if (/^https?:\/\//.test(u)) return normalizeGithubUrl(u);
      return normalizeGithubUrl(new URL(u, base).href);
    }catch(e){ return normalizeGithubUrl(u); }
  }

  function parseImportBlock(lines, startIdx){
    const ln = lines[startIdx] || "";
    const m = ln.match(/^\s*import\s*:\s*(.*)$/);
    if (!m) return null;

    const urls = [];
    const addFrom = (s) => {
      const parts = String(s || "").trim().split(/\s+/).filter(Boolean);
      for (const p of parts){
        if (/^https?:\/\//.test(p) || /^[./]/.test(p)) urls.push(p);
      }
    };

    addFrom(m[1]);
    let i = startIdx + 1;
    for (; i < lines.length; i++){
      const t = lines[i] || "";
      if (/^\s+/.test(t) && (t.trim().startsWith("http") || t.trim().startsWith("./") || t.trim().startsWith("../"))){
        addFrom(t);
        continue;
      }
      break;
    }
    return { endIdx: i, urls };
  }

  async function resolveUrl(url, depth, visited, counter){
    if (depth > REG.MAX_DEPTH) return [];
    if (visited.has(url)) return [];
    visited.add(url);

    counter.count++;
    if (counter.count > REG.MAX_FILES) return [];

    const txt = await fetchText(url);
    const lines = txt.split(/\r?\n/);

    const out = [];
    for (let i = 0; i < lines.length; ){
      const imp = parseImportBlock(lines, i);
      if (imp && imp.urls.length){
        for (const u of imp.urls){
          const abs = absolutize(u, url);
          if (!abs) continue;
          const sub = await resolveUrl(abs, depth + 1, visited, counter);
          out.push(...sub);
        }
        i = imp.endIdx;
        continue;
      }
      out.push(lines[i]);
      i++;
    }
    return out;
  }

  async function getResolvedLines(url){
    const now = Date.now();
    const c = REG.cache[url] || (REG.cache[url] = { resolved:null, inv:null, ts:0, resolving:null });

    if (c.resolved && c.inv && (now - c.ts) < 2000) return c;

    if (c.resolving) return await c.resolving;

    c.resolving = (async () => {
      const visited = new Set();
      const counter = { count: 0 };
      const resolved = await resolveUrl(url, 0, visited, counter);
      const inv = scanInvocations(resolved);
      c.resolved = resolved;
      c.inv = inv;
      c.ts = Date.now();
      return c;
    })();

    try{ return await c.resolving; }
    finally{ c.resolving = null; }
  }

  // =========================
  // Source scan: @resetter invocations (inline ok)
  // =========================
  const TOKEN = "@resetter";
  const TOKEN_LEN = 9;

  function isHeadingLine(line){
    return /^[ \t]*#{1,6}\s/.test(String(line || ""));
  }

  function nextNonSpaceChar(s, from){
    for (let i = from; i < s.length; i++){
      const c = s[i];
      if (c !== " " && c !== "\t") return c;
    }
    return "";
  }

  function isInvocationAt(line, idx){
    const before = (idx > 0) ? line[idx - 1] : "";
    if (before && /[A-Za-z0-9_]/.test(before)) return false;

    const after = nextNonSpaceChar(line, idx + TOKEN_LEN);
    if (after === ":" || after === "_") return false;
    return true;
  }

  function scanInvocations(lines){
    const inv = [];
    let inFence = false;
    let fenceMark = "";
    let inComment = false;

    for (let i = 0; i < lines.length; i++){
      const line = String(lines[i] || "");

      const fm = line.match(/^\s*(```|~~~)/);
      if (!inComment && fm){
        const mark = fm[1];
        if (!inFence){ inFence = true; fenceMark = mark; }
        else if (mark === fenceMark){ inFence = false; fenceMark = ""; }
        continue;
      }
      if (inFence) continue;

      let pos = 0;
      while (pos < line.length){
        if (inComment){
          const end = line.indexOf("-->", pos);
          if (end === -1){ pos = line.length; continue; }
          inComment = false;
          pos = end + 3;
          continue;
        } else {
          const start = line.indexOf("<!--", pos);
          const scanEnd = (start === -1) ? line.length : start;

          let j = pos;
          while (j < scanEnd){
            const k = line.indexOf(TOKEN, j);
            if (k === -1 || k >= scanEnd) break;
            if (isInvocationAt(line, k)) inv.push({ line: i, col: k });
            j = k + TOKEN_LEN;
          }

          if (start === -1){
            pos = line.length;
          } else {
            inComment = true;
            pos = start + 4;
          }
        }
      }
    }
    return inv;
  }

  function stripInvocationRemainder(s){
    let t = String(s || "");
    t = t.replace(/^\s*\([^)]*\)\s*/, " ");
    return t.trimStart();
  }

  function extractSegmentByPick(lines, invList, pickIndex){
    const pick = invList[pickIndex];
    const curLine = String(lines[pick.line] || "");

    let remainder = curLine.slice(pick.col + TOKEN_LEN);
    remainder = stripInvocationRemainder(remainder);

    const next = (pickIndex + 1 < invList.length) ? invList[pickIndex + 1] : null;

    const out = [];
    if (remainder.trim()) out.push(remainder);

    for (let i = pick.line + 1; i < lines.length; i++){
      if (next && i === next.line) break;
      if (isHeadingLine(lines[i])) break;
      out.push(String(lines[i] || ""));
    }
    return out.join("\n");
  }

  // =========================
  // DOM: host/output + sibling-safe stash
  // =========================
  function cssEscape(s){
    try{ return (CSS && CSS.escape) ? CSS.escape(s) : String(s).replace(/"/g, '\\"'); }
    catch(e){ return String(s).replace(/"/g, '\\"'); }
  }

  function isInsideDynamic(n){
    return !!(n && n.closest && n.closest(".lia-resetter-host, .lia-resetter-stash"));
  }

  function getOriginalMarkers(){
    const root = CONTENT_DOC.querySelector("main") || CONTENT_DOC.body;
    return Array.from(root.querySelectorAll(".lia-resetter-marker[data-resetter-uid]"))
      .filter(m => !isInsideDynamic(m));
  }

  function getMarkerIndexByUid(uid){
    const ms = getOriginalMarkers();
    for (let i = 0; i < ms.length; i++){
      if (ms[i].getAttribute("data-resetter-uid") === uid) return i;
    }
    return 0;
  }

  function ensureHost(uid){
    const marker = CONTENT_DOC.querySelector(`.lia-resetter-marker[data-resetter-uid="${cssEscape(uid)}"]`);
    if (!marker) return null;

    const anchor = marker.closest(".lia-paragraph, p, li") || marker;

    let host = CONTENT_DOC.querySelector(`.lia-resetter-host[data-resetter-host="${cssEscape(uid)}"]`);
    if (!host){
      host = CONTENT_DOC.createElement("div");
      host.className = "lia-resetter-host";
      host.setAttribute("data-resetter-host", uid);
      anchor.insertAdjacentElement("afterend", host);
    }

    const out = CONTENT_DOC.querySelector(`output.lia-resetter-out[data-resetter-out="${cssEscape(uid)}"]`);
    if (out && out.parentElement !== host) host.appendChild(out);

    REG.uiByUid[uid] = REG.uiByUid[uid] || {};
    REG.uiByUid[uid].host = host;

    return host;
  }

  function restoreIfStashed(uid){
    const stash = CONTENT_DOC.querySelector(`.lia-resetter-stash[data-resetter-stash="${cssEscape(uid)}"]`);
    if (!stash) return;

    const host = ensureHost(uid);
    if (!host || !stash.parentElement) return;

    while (stash.firstChild){
      stash.parentElement.insertBefore(stash.firstChild, stash);
    }
    stash.remove();

    if (REG.uiByUid[uid]) REG.uiByUid[uid].stashed = false;
  }

  function stashOnceSiblingSafe(uid){
    const ui = REG.uiByUid[uid] || (REG.uiByUid[uid] = {});
    if (ui.stashed) return true;

    const host = ensureHost(uid);
    if (!host) return false;

    // Boundary = nächster Original-Marker-Block oder Heading, aber nur wenn als SIBLING erreichbar
    const parent = host.parentNode;
    if (!parent) return false;

    let boundary = null;
    let cur = host.nextSibling;

    const MAX_ELEMS = 80;
    let elems = 0;

    while (cur){
      // boundary candidate: heading
      if (cur.nodeType === 1){
        const el = cur;
        if (!isInsideDynamic(el)){
          if (/^H[1-6]$/.test(el.tagName) || (el.tagName === "HEADER" && el.querySelector && el.querySelector("h1,h2,h3,h4,h5,h6"))){
            boundary = el;
            break;
          }
          // boundary candidate: next resetter marker block
          const m = el.querySelector && el.querySelector(".lia-resetter-marker[data-resetter-uid]");
          if (m && !isInsideDynamic(m)){
            boundary = el;
            break;
          }
        }
        elems++;
        if (elems > MAX_ELEMS) return false;
      }
      cur = cur.nextSibling;
    }

    // Keine sichere boundary -> NICHT stashen
    if (!boundary) return false;

    // Extract only siblings between host and boundary
    const r = CONTENT_DOC.createRange();
    try{
      r.setStartAfter(host);
      r.setEndBefore(boundary);
    }catch(e){
      return false;
    }

    const frag = r.extractContents();

    const stash = CONTENT_DOC.createElement("div");
    stash.className = "lia-resetter-stash";
    stash.setAttribute("data-resetter-stash", uid);
    host.insertAdjacentElement("afterend", stash);
    stash.appendChild(frag);

    ui.stashed = true;
    return true;
  }

  // =========================
  // Render
  // =========================
  async function renderUid(uid){
    if (!isActive()) return;

    const send = REG.sendByUid[uid];
    if (!send || !send.output) return;

    if (REG.inflight[uid]) return;
    REG.inflight[uid] = true;

    try{
      updateAccent();
      ensureHost(uid);

      const url = getCourseUrl();
      if (!url){
        restoreIfStashed(uid);
        send.output("HTML:<em>Resetter: Kurs-URL nicht gefunden.</em>");
        return;
      }

      const pack = await getResolvedLines(url);
      const lines = pack.resolved;
      const inv   = pack.inv;

      if (!inv || !inv.length){
        restoreIfStashed(uid);
        send.output("HTML:<em>Resetter: keine @resetter-Invocations im Source gefunden.</em>");
        return;
      }

      const pickIndex = Math.min(getMarkerIndexByUid(uid), inv.length - 1);
      const seg = extractSegmentByPick(lines, inv, pickIndex);

      if (!seg || !seg.trim()){
        restoreIfStashed(uid);
        send.output("HTML:<em>Resetter: Segment leer (Index " + pickIndex + ").</em>");
        return;
      }

      // Salt -> neue interne IDs (wichtig für "wie Reload")
      uiSalt(uid);
      const payload = "LIASCRIPT:\n<!-- resetter:" + uid + ":" + REG.uiByUid[uid].salt + " -->\n" + seg + "\n";

      // erst jetzt stashen (und nur safe)
      stashOnceSiblingSafe(uid);

      send.output(payload);
    } finally {
      REG.inflight[uid] = false;
    }
  }

  function uiSalt(uid){
    REG.uiByUid[uid] = REG.uiByUid[uid] || {};
    REG.uiByUid[uid].salt = (REG.uiByUid[uid].salt || 0) + 1;
  }

  // Public function (inline onclick)
  ROOT_WIN.__liaResetter_v001 = function(uid){
    try{ renderUid(String(uid)); }catch(e){}
  };
  CONTENT_WIN.__liaResetter_v001 = ROOT_WIN.__liaResetter_v001;

  updateAccent();

})();
@end


@resetter: @resetter_(@uid)
@resetter_
<span class="lia-resetter-marker" data-resetter-uid="@0" aria-hidden="true"></span>
<button class="lia-resetter-btn" type="button" onclick="__liaResetter_v001('@0')">Neustart der Aufgabe</button>
<output class="lia-resetter-out" data-resetter-out="@0" modify="false">
<script run-once="true" modify="false">
(function(){
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();
  const REGKEY = "__LIA_RESETTER_V001__";
  const REG = ROOT[REGKEY] || (ROOT[REGKEY] = { sendByUid: Object.create(null) });

  try{
    if (!REG.sendByUid) REG.sendByUid = Object.create(null);
    REG.sendByUid["@0"] = send;
  }catch(e){}

  "HTML:<span style='display:none' data-resetter-keep='@0'></span>";
})();
</script>
</output>
@end
-->









































































# Aufgabenresetter 1

Aufgabe 1: @resetter 

3 + 4 = [[  7  ]] 


Aufgabe 2: @resetter 

4 + 3 = [[  7  ]] 


Aufgabe 3: 

2 + 4 = [[  6  ]] 




# Aufgabenresetter 2



1 + 6 = [[  7  ]] 


Aufgabe 4: @resetter 

7 + 0 = [[  7  ]] 




# Aufgabenresetter 2


Aufgabe 5: @resetter 

- [[X]] richtig
- [[ ]] falsch


Aufgabe 6: @resetter 

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [X]             [ ]     ]  $$\left|\vec{a} \times \vec{b}\right|$$
- [    ( )           ( )             (X)     ]  $$\vec{c} \times \left( \vec{a} \circ \vec{b}\right) $$
- [    [X]           [ ]             [ ]     ]  $$s \vec{a} \times \left(\vec{b} \times r \vec{c}\right)$$
- [    (X)           ( )             ( )     ]  $$\left( \vec{c} \circ \vec{b}\right)  \cdot \vec{a}  $$
- [    [ ]           [ ]             [X]     ]  $$\dfrac{\left(\vec{a} \times \vec{c}\right)^2}{\vec{a} \times \vec{b}}$$


Aufgabe 7: @resetter 


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$a)\;\;$__ $\dfrac{3}{4}$ 
 [->[$\left. 1 \boxed{ = \dfrac{1}{2} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{5}{4} : \dfrac{5}{2}}  $]]
 [->[$\left. 2 \boxed{ =  \dfrac{3}{6}} \right\|\boxed{ \dfrac{3}{5} + \dfrac{1}{10}}  $]]
 [->[$\left. 3 \boxed{ =  \dfrac{14}{20}} \right\|\boxed{ \dfrac{7}{8} : \dfrac{7}{12}}  $]]
 [->[$\left. 4 \boxed{ =  \dfrac{9}{6}} \right\|\boxed{ 1 - \dfrac{1}{3}}  $]]
$= \dfrac{2}{3}$



