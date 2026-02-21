<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: JS-Mode-Readout + Mode-Only (import-sicher: CSS-Injection via onload)

@modus: <span class="lia-mode-out" data-lia-mode-out>unknown</span>

@onload
(function () {

  const STYLE_ID = "__LIA_MODE_ONLY_STYLE_V01__";
  const MODE_CSS = `
/* Default: alles sichtbar */
[data-lia-only]{ display: block; }

/* Wenn Mode gesetzt ist: nur passenden Block zeigen */
html[data-lia-mode="slides"] [data-lia-only]:not([data-lia-only="slides"]){
  display: none !important;
}
html[data-lia-mode="presentation"] [data-lia-only]:not([data-lia-only="presentation"]){
  display: none !important;
}
html[data-lia-mode="textbook"] [data-lia-only]:not([data-lia-only="textbook"]){
  display: none !important;
}
`;

  function ensureStyle(doc){
    try{
      const head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement;
      if (!head) return;
      if (doc.getElementById(STYLE_ID)) return;

      const style = doc.createElement("style");
      style.id = STYLE_ID;
      style.type = "text/css";
      style.appendChild(doc.createTextNode(MODE_CSS));
      head.appendChild(style);
    }catch(e){}
  }

  // =========================
  // Mode mapping
  // =========================
  function norm(x){ return String(x ?? "").trim().toLowerCase(); }

  function mapModeToken(x){
    const s = norm(x);
    // LiaScript UI tokens
    if (s === "book") return "textbook";
    if (s === "hearing") return "presentation";
    if (s === "visibility") return "slides";
    // already mapped
    if (s === "textbook" || s === "presentation" || s === "slides") return s;
    // fuzzy
    if (s.includes("textbook") || s.includes("lehrbuch")) return "textbook";
    if (s.includes("presentation") || s.includes("präsent")) return "presentation";
    if (s.includes("slides") || s.includes("folien")) return "slides";
    return null;
  }

  // =========================
  // Sources for mode detection
  // =========================
  function modeFromActiveTopbarIcon(doc){
    // expects material-icons text: book/hearing/visibility
    const icons = Array.from(doc.querySelectorAll(".material-icons, i.material-icons, span.material-icons"));

    function isActive(btn){
      if(!btn) return false;
      const ap = norm(btn.getAttribute("aria-pressed"));
      const as = norm(btn.getAttribute("aria-selected"));
      const cls = norm(btn.className);
      return ap === "true" || as === "true" || cls.includes("active") || cls.includes("selected") || cls.includes("mdc-icon-button--on");
    }

    let best = null;
    for (const ic of icons){
      const key = norm(ic.textContent);
      const m = mapModeToken(key);
      if(!m) continue;

      const btn = ic.closest("button,[role='button'],a");
      const r   = (btn || ic).getBoundingClientRect();
      const vw  = doc.defaultView.innerWidth || 1200;

      // score prefers: top-right + active
      let score = 0;
      if (r.top < 140) score += 200;
      if (r.left > vw * 0.55) score += 200;
      if (btn && isActive(btn)) score += 1000;

      if(!best || score > best.score) best = { mode: m, score };
    }
    return best ? best.mode : null;
  }

  function modeFromWrapperAttrs(doc){
    const cand = [
      doc.querySelector("#app"),
      doc.querySelector("main"),
      doc.querySelector(".markdown-body"),
      doc.body,
      doc.documentElement
    ].filter(Boolean);

    for (const el of cand){
      const blob = [
        el.getAttribute && el.getAttribute("data-mode"),
        el.getAttribute && el.getAttribute("data-view"),
        el.getAttribute && el.getAttribute("mode"),
        el.className,
        el.id
      ].map(v => String(v || "")).join(" ");
      const m = mapModeToken(blob);
      if (m) return m;
    }
    return null;
  }

  function modeFromURL(win){
    const q = norm(win.location.search) + "&" + norm(win.location.hash);
    return mapModeToken(q);
  }

  function modeFromStorage(win){
    const stores = [win.sessionStorage, win.localStorage].filter(Boolean);
    for (const stor of stores){
      try{
        for (let i=0;i<stor.length;i++){
          const k = stor.key(i);
          const v = stor.getItem(k);
          const m = mapModeToken((k||"") + " " + (v||""));
          if (m) return m;
        }
      }catch(e){}
    }
    return null;
  }

  function detectModeForDoc(doc){
    const win = doc.defaultView;
    return (
      modeFromActiveTopbarIcon(doc) ||
      modeFromWrapperAttrs(doc) ||
      modeFromURL(win) ||
      modeFromStorage(win)
    );
  }

  // =========================
  // Where to write the output
  // =========================
  function collectDocsSameOrigin(){
    const docs = new Set();
    function add(d){ try{ if(d && d.documentElement) docs.add(d); }catch(e){} }

    // current + parents
    try{
      let w = window;
      for(let i=0;i<12;i++){
        add(w.document);
        if(!w.parent || w.parent === w) break;
        w = w.parent;
      }
    }catch(e){}

    // iframes one pass
    for (const d of Array.from(docs)){
      try{
        d.querySelectorAll("iframe").forEach(fr=>{
          try{ add(fr.contentDocument); }catch(e){}
        });
      }catch(e){}
    }

    return Array.from(docs);
  }

  function apply(){
    const docs = collectDocsSameOrigin();

    // Docs mit Ausgabe
    const outDocs = docs.filter(d => {
      try{ return !!d.querySelector("[data-lia-mode-out]"); }catch(e){ return false; }
    });

    // Docs mit Mode-Sections
    const sectionDocs = docs.filter(d => {
      try{ return !!d.querySelector("[data-lia-only]"); }catch(e){ return false; }
    });

    const targetOutDocs = outDocs.length ? outDocs : [document];
    const targetSectionDocs = sectionDocs.length ? sectionDocs : targetOutDocs;

    // CSS injizieren (import-sicher)
    for (const d of targetSectionDocs){
      ensureStyle(d);
    }

    // detect from the "best" doc (prefer one with topbar icons)
    let mode = null;
    for (const d of docs){
      mode = detectModeForDoc(d);
      if (mode) break;
    }
    if (!mode) mode = "unknown";

    // write readout
    for (const d of targetOutDocs){
      try{
        d.querySelectorAll("[data-lia-mode-out]").forEach(el => { el.textContent = mode; });
      }catch(e){}
    }

    // Mode fürs CSS setzen (if/then/else Anzeige)
    const valid = (mode === "slides" || mode === "presentation" || mode === "textbook");
    for (const d of targetSectionDocs){
      try{
        if (valid) d.documentElement.setAttribute("data-lia-mode", mode);
        else d.documentElement.removeAttribute("data-lia-mode"); // failsafe: alles sichtbar
      }catch(e){}
    }
  }

  // initial + after UI updates + on clicks
  apply();
  setTimeout(apply, 50);
  setTimeout(apply, 250);
  setTimeout(apply, 1000);

  document.addEventListener("click", () => setTimeout(apply, 0), true);
  window.addEventListener("hashchange", apply, true);
  window.addEventListener("popstate", apply, true);

})();
@end
-->

# Nutzung






So kann man Bereiche nur für einen Modus sichtbar machen: 

`<div data-lia-only="slides"> Das sehe ich nur bei Folien </div>`

`<div data-lia-only="presentation"> Das sehe ich nur bei Präsentation </div>`

`<div data-lia-only="textbook"> Das sehe ich nur bei Lehrbuch </div>`

Aktuell ist dieser Modus aktiv: <b><big><big> @modus </big></big></b>



---

---




<h2>Beispiel im Text</h2>



Das hier ist ein Beispiel bei dem man bei den verschiedenen Modi unterschiedliche Inhalte angezeigt bekommt. Hier muss dann eine Leerzeile sein.

<div data-lia-only="textbook">

<!-- data-solution-button="5"-->
$4+5=$ [[ 9 ]] 

</div>
<div data-lia-only="presentation">  

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne1.png)  

</div>
<div data-lia-only="slides">

- Eine Liste

- Die ist toll!

- wenn sie denn klappen würde

</div>

 Hier muss dann auch eine Leerzeile sein, aber dann geht eigentlich alles.




