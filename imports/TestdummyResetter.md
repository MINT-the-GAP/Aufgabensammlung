<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Resetter v0.0.1 — Segment wird per LIASCRIPT neu gerendert; statische Originalkopie wird wrapper-sicher per Range nach einem Block-Host „weggestashed“ (kein <p>-Chaos, kein Folien-Crash)

@style
.lia-resetter-marker{ display:none !important; }
.lia-resetter-salt{ display:none !important; }

/* WICHTIG: LIASCRIPT-Render darf nie in <p> landen */
.lia-resetter-host{ display:block !important; margin:0 !important; padding:0 !important; }
.lia-resetter-trash{ display:none !important; }

/* Button: inline, transparent, Rand+Schrift Themefarbe, klein, max. Font-Höhe */
button.lia-resetter-btn{
  background: transparent !important;
  border: 1px solid currentColor !important;
  color: rgb(var(--color-highlight, 11, 95, 255)) !important;

  font-size: 0.75em !important;
  line-height: 1 !important;
  height: 1.15em !important;

  padding: 0 0.45em !important;
  margin: 0 0 0 0.6em !important;

  border-radius: 0.35em !important;
  display: inline-flex !important;
  align-items: center !important;
  vertical-align: baseline !important;

  cursor: pointer !important;
  user-select: none !important;
  white-space: nowrap !important;
  touch-action: manipulation !important;
}
button.lia-resetter-btn:hover,
button.lia-resetter-btn:focus{
  text-decoration: underline !important;
  outline: none !important;
}
@end


@onload
(function () {

  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const DOC  = document;

  const REGKEY = "__LIA_RESETTER_V001__";
  const REG = ROOT[REGKEY] || (ROOT[REGKEY] = {
    items: Object.create(null),  // uid -> { send, seg, salt, stashedSalt }
    mdLines: null,
    mdPromise: null,
    guardDocs: new WeakSet(),
    obsDocs: new WeakSet(),
    muting: false
  });

  function escAttr(v){
    return String(v || "").replace(/\\/g,"\\\\").replace(/"/g,'\\"');
  }

  // =========================
  // Markdown laden (Course-URL)
  // =========================
  function getCourseUrl(){
    try{
      const s = (ROOT.location && ROOT.location.search) ? ROOT.location.search : (location.search || "");
      if (!s || s.length < 2) return null;

      const raw = s.slice(1);
      const first = raw.split("&")[0];
      const dec = decodeURIComponent(first);
      if (/^https?:\/\//i.test(dec)) return dec;

      try{
        const usp = new URLSearchParams(raw);
        const cand = usp.get("url") || usp.get("src") || usp.get("course") || usp.get("md");
        if (cand && /^https?:\/\//i.test(cand)) return decodeURIComponent(cand);
      }catch(e){}
      return null;
    }catch(e){
      return null;
    }
  }

  async function ensureMarkdown(){
    if (REG.mdLines) return REG.mdLines;
    if (REG.mdPromise) return REG.mdPromise;

    const url = getCourseUrl();
    REG.mdPromise = (async () => {
      if (!url) return [];
      const res = await fetch(url, { cache: "no-store" });
      const txt = await res.text();
      REG.mdLines = String(txt || "").split(/\r?\n/);
      return REG.mdLines;
    })().catch(() => {
      REG.mdLines = [];
      return REG.mdLines;
    });

    return REG.mdPromise;
  }

  function isHeadingLine(line){ return /^[ \t]*#{1,6}\s+/.test(line || ""); }
  function isResetterLine(line){ return /@resetter\b/.test(line || ""); }

  function markerFor(uid){
    return DOC.querySelector('.lia-resetter-marker[data-resetter-uid="'+escAttr(uid)+'"]');
  }

  // Output zuverlässig finden (LiaScript strippt oft Attribute am <output>)
  function outputForUid(uid){
    const marker = markerFor(uid);
    if (!marker) return null;
    const pStart = marker.closest("p") || marker.closest(".lia-paragraph");
    if (!pStart) return null;

    const outs = pStart.querySelectorAll("output");
    if (!outs || !outs.length) return null;

    // nimm das Output, das NACH dem Marker liegt
    for (let i = 0; i < outs.length; i++){
      const o = outs[i];
      const pos = marker.compareDocumentPosition(o);
      if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return o;
    }
    // fallback: erstes Output im Absatz
    return outs[0];
  }

  function approxLineFromMarker(marker){
    try{
      const p = marker && (marker.closest("p") || marker.closest(".lia-paragraph"));
      if (!p) return null;
      let best = null;
      p.querySelectorAll('[ondblclick*="lineGoto("]').forEach(el => {
        const s = el.getAttribute("ondblclick") || "";
        const m = s.match(/lineGoto\((\d+)\)/);
        if (!m) return;
        const n = parseInt(m[1], 10);
        if (!Number.isNaN(n)) best = (best == null) ? n : Math.max(best, n);
      });
      return best;
    }catch(e){
      return null;
    }
  }

  function findResetterLineIndex(lines, approx){
    if (!lines || !lines.length || approx == null) return null;

    let idx = approx;
    if (idx >= lines.length && (idx - 1) >= 0) idx = idx - 1;

    const lo = Math.max(0, idx - 14);
    const hi = Math.min(lines.length - 1, idx + 14);

    for (let i = idx; i >= lo; i--){
      if (isResetterLine(lines[i])) return i;
    }
    for (let i = idx + 1; i <= hi; i++){
      if (isResetterLine(lines[i])) return i;
    }
    return null;
  }

  function extractSegment(lines, resetIdx){
    const start = resetIdx + 1;
    let end = lines.length;
    for (let i = start; i < lines.length; i++){
      if (isResetterLine(lines[i]) || isHeadingLine(lines[i])){
        end = i;
        break;
      }
    }
    return lines.slice(start, end).join("\n");
  }

  // =========================
  // Host nach "Aufgabe X:" Absatz einfügen und Output dorthin verschieben
  // =========================
  function ensureHost(uid){
    const marker = markerFor(uid);
    if (!marker) return null;

    const outEl = outputForUid(uid);
    if (!outEl) return null;

    const pStart = marker.closest("p") || marker.closest(".lia-paragraph");
    if (!pStart || !pStart.parentNode) return null;

    let host = DOC.querySelector('.lia-resetter-host[data-resetter-host="'+escAttr(uid)+'"]');
    if (!host){
      host = DOC.createElement("div");
      host.className = "lia-resetter-host";
      host.setAttribute("data-resetter-host", uid);
      pStart.parentNode.insertBefore(host, pStart.nextSibling);
    } else {
      // Host ggf. wieder korrekt positionieren (nach Rebuild)
      if (host.parentNode === pStart.parentNode && host.previousSibling !== pStart){
        pStart.parentNode.insertBefore(host, pStart.nextSibling);
      }
    }

    if (outEl.parentNode !== host){
      host.appendChild(outEl);
    }

    return { marker, pStart, host };
  }

  // =========================
  // Stop-Anker: nächster Resetter (anderer uid) oder nächste Überschrift
  // =========================
  function findStopAnchor(scope, host, uid){
    const tw = DOC.createTreeWalker(scope, NodeFilter.SHOW_ELEMENT, null);
    let n = null;
    let started = false;

    while ((n = tw.nextNode())){
      if (!started){
        if (n === host) started = true;
        continue;
      }

      if (host.contains(n)) continue;

      if (n.classList && n.classList.contains("lia-resetter-marker")){
        const u = n.getAttribute("data-resetter-uid");
        if (u && String(u) !== String(uid)){
          return n.closest("p") || n.closest(".lia-paragraph") || n;
        }
      }

      if (/^H[1-6]$/.test(n.tagName)){
        return n;
      }
    }
    return null;
  }

  // =========================
  // Statische Kopie stashen: Range nach Host bis Stop in hidden Trash verschieben
  // =========================
  function stashStatic(uid){
    const it = REG.items[uid];
    if (!it) return false;

    const parts = ensureHost(uid);
    if (!parts) return false;

    const { marker, host } = parts;

    const scope = marker.closest("section") || DOC.querySelector("main") || DOC.body;
    const stop  = findStopAnchor(scope, host, uid);

    // Ohne Stop NICHT blind alles entfernen (nur wenn es wirklich eine SECTION-Folie ist)
    if (!stop && !(scope && scope.tagName === "SECTION")) return false;

    try{
      // alten Trash dieses uid entfernen
      scope.querySelectorAll('.lia-resetter-trash[data-resetter-trash="'+escAttr(uid)+'"]').forEach(el => el.remove());

      const r = DOC.createRange();
      r.setStartAfter(host);

      if (stop){
        r.setEndBefore(stop);
      } else {
        const last = scope.lastChild;
        if (!last) return false;
        r.setEndAfter(last);
      }

      if (r.collapsed) return false;

      const frag = r.extractContents();
      const has = !!(frag && (frag.childNodes.length || (frag.textContent || "").trim().length));
      if (!has) return false;

      const trash = DOC.createElement("div");
      trash.className = "lia-resetter-trash";
      trash.setAttribute("data-resetter-trash", uid);
      trash.style.display = "none";
      trash.appendChild(frag);

      if (stop && stop.parentNode){
        stop.parentNode.insertBefore(trash, stop);
      } else {
        scope.appendChild(trash);
      }

      it.stashedSalt = it.salt;
      return true;

    }catch(e){
      return false;
    }
  }

  function stashLoop(uid){
    const it = REG.items[uid];
    if (!it) return;

    let tries = 0;
    const step = () => {
      tries++;
      if (it.stashedSalt === it.salt) return;

      REG.muting = true;
      stashStatic(uid);
      setTimeout(() => { REG.muting = false; }, 0);

      if (tries > 160) return;
      setTimeout(step, 70);
    };
    step();
  }

  // =========================
  // Render / Reset
  // =========================
  function render(uid){
    const it = REG.items[uid];
    if (!it || !it.send) return;

    ensureHost(uid);

    it.salt = (it.salt || 0) + 1;
    const salt = '<span class="lia-resetter-salt" data-resetter-salt="'+uid+'-'+it.salt+'"></span>\n\n';

    it.send.output("LIASCRIPT:" + salt + (it.seg || ""));

    stashLoop(uid);
  }

  // =========================
  // Public API
  // =========================
  ROOT.__liaResetterV001 = ROOT.__liaResetterV001 || {
    bind: async function(uid, send){
      uid = String(uid);

      const parts = ensureHost(uid);
      if (!parts) return;

      const it = REG.items[uid] || (REG.items[uid] = {});
      it.send = send;

      const lines  = await ensureMarkdown();
      const approx = approxLineFromMarker(parts.marker);
      const rIdx   = findResetterLineIndex(lines, approx);
      if (rIdx == null) return;

      it.seg = extractSegment(lines, rIdx);
      render(uid);
    },

    reset: function(uid){
      render(String(uid));
    }
  };

  // =========================
  // Click Guard (Capture): verhindert Folien-Sprung
  // =========================
  function installGuard(){
    if (REG.guardDocs.has(DOC)) return;
    REG.guardDocs.add(DOC);

    const handler = (ev) => {
      const t = ev && ev.target;
      if (!t || !t.closest) return;

      const btn = t.closest("button.lia-resetter-btn");
      if (!btn) return;

      const uid = btn.getAttribute("data-resetter-btn");
      if (!uid) return;

      ev.preventDefault();
      ev.stopPropagation();
      if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

      ROOT.__liaResetterV001.reset(uid);
    };

    ["pointerdown","mousedown","touchstart","click"].forEach(type => {
      try { DOC.addEventListener(type, handler, true); } catch(e){}
      try { ROOT.document.addEventListener(type, handler, true); } catch(e){}
    });
  }

  // =========================
  // Observer: nach Slide-Rebuild wieder Host/Trash herstellen
  // =========================
  function installObserver(){
    if (REG.obsDocs.has(DOC)) return;
    REG.obsDocs.add(DOC);

    const rootEl = DOC.querySelector("main") || DOC.body;
    if (!rootEl) return;

    let pending = false;
    const obs = new MutationObserver(() => {
      if (REG.muting) return;
      if (pending) return;
      pending = true;

      setTimeout(() => {
        pending = false;
        for (const uid in REG.items){
          ensureHost(uid);
          stashStatic(uid);
        }
      }, 140);
    });

    obs.observe(rootEl, { childList: true, subtree: true });
  }

  installGuard();
  installObserver();

})();
@end


@resetter: @resetter_(@uid)
@resetter_
<span class="lia-resetter-marker" data-resetter-uid="@0" aria-hidden="true"></span>
<button class="lia-resetter-btn" type="button" data-resetter-btn="@0">Neustart der Aufgabe</button>

<output modify="false">
<script run-once="true" modify="false">
(function(){
  try{
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    if (w.__liaResetterV001 && typeof send !== "undefined"){
      setTimeout(function(){ w.__liaResetterV001.bind("@0", send); }, 0);
    }
  }catch(e){}
  return "";
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



