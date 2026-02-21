<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: JS-Mode-Readout (slides|presentation|textbook) -> "Aktiver Modus: ..."

@modus: <span class="lia-mode-out" data-lia-mode-out>unknown</span>

@style
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
@end


@onload
(function () {
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

    // find a doc that actually contains our output spans
    const outDocs = docs.filter(d => {
      try{ return !!d.querySelector("[data-lia-mode-out]"); }catch(e){ return false; }
    });

    const targetDocs = outDocs.length ? outDocs : [document];

    // detect from the "best" doc (prefer one with topbar icons)
    let mode = null;
    for (const d of docs){
      mode = detectModeForDoc(d);
      if (mode) break;
    }
    if (!mode) mode = "unknown";

    // write it
    for (const d of targetDocs){
      try{
        d.querySelectorAll("[data-lia-mode-out]").forEach(el => { el.textContent = mode; });
      }catch(e){}
    }

        // === NEU: Mode fürs CSS setzen (if/then/else Anzeige) ===
    const valid = (mode === "slides" || mode === "presentation" || mode === "textbook");
    for (const d of targetDocs){
      try{
        if (valid) d.documentElement.setAttribute("data-lia-mode", mode);
        else d.documentElement.removeAttribute("data-lia-mode"); // failsafe
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

Wechsel bitte einmal zwischen den Ansichtsmodi durch.

Aktiver Modus: @modus

Das hier sieht man immer.

<div data-lia-only="slides">
Das sehe ich nur bei Slides

**Aufgabe 1:** $6+7=$ [[  13  ]]
</div>

<div data-lia-only="presentation">
Das sehe ich nur bei Präsentation

**Aufgabe 1:** $5+7=$ [[  12  ]]
</div>

<div data-lia-only="textbook">
Das sehe ich nur bei Textbook

**Aufgabe 1:** $2+7=$ [[   9  ]]

- Hier steht mehr kram 
- Hier steht mehr kram
- Hier steht mehr kram
- Hier steht mehr kram

**Aufgabe 2:** $3+7=$ [[  10  ]]

</div>