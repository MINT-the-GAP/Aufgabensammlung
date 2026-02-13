<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Resetter v0.0.1 — @resetter erzeugt einen Neustart-Button; Klick rendert den Block (zwischen @resetter...@end) komplett neu (inkl. Lia-Buttons/State)

@style
/* =========================================================
   Resetter: Button-Design (transparent, Theme-Farbe)
   ========================================================= */

script.lia-resetter{
  display: inline-block;
  margin: .4rem 0 .6rem 0;
  padding: 0 !important;
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
}

/* LiaScript erzeugt intern i.d.R. ein <input type="button"> */
script.lia-resetter input[type="button"],
script.lia-resetter input[type="submit"]{
  appearance: none;
  background: transparent !important;
  border: 2px solid rgb(var(--color-highlight, 11, 95, 255)) !important;
  color: rgb(var(--color-highlight, 11, 95, 255)) !important;
  border-radius: 12px !important;
  padding: .35rem .8rem !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  user-select: none !important;
  line-height: 1.1 !important;
}

script.lia-resetter input[type="button"]:hover,
script.lia-resetter input[type="submit"]:hover{
  background: rgba(var(--color-highlight, 11, 95, 255), .12) !important;
}

script.lia-resetter input[type="button"]:active,
script.lia-resetter input[type="submit"]:active{
  transform: translateY(1px);
}

@media (prefers-color-scheme: dark){
  script.lia-resetter input[type="button"],
  script.lia-resetter input[type="submit"]{
    border-color: rgba(var(--color-highlight, 11, 95, 255), .85) !important;
  }
}
@end


@onload
(function(){
  // Import-sicher: Style auch ins Root-Dokument injizieren (falls @style beim Import nicht greift)
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }
  const ROOT = getRootWindow();
  const STYLE_ID = "__LIA_RESETTER_STYLE_V01__";
  try{
    const DOC = ROOT.document;
    if (DOC.getElementById(STYLE_ID)) return;
    const st = DOC.createElement("style");
    st.id = STYLE_ID;
    st.textContent = `
script.lia-resetter{display:inline-block;margin:.4rem 0 .6rem 0;padding:0!important;border:none!important;background:transparent!important;box-shadow:none!important;}
script.lia-resetter input[type="button"],script.lia-resetter input[type="submit"]{
  appearance:none;background:transparent!important;
  border:2px solid rgb(var(--color-highlight,11,95,255))!important;
  color:rgb(var(--color-highlight,11,95,255))!important;
  border-radius:12px!important;padding:.35rem .8rem!important;
  font-weight:700!important;cursor:pointer!important;user-select:none!important;line-height:1.1!important;
}
script.lia-resetter input[type="button"]:hover,script.lia-resetter input[type="submit"]:hover{background:rgba(var(--color-highlight,11,95,255),.12)!important;}
script.lia-resetter input[type="button"]:active,script.lia-resetter input[type="submit"]:active{transform:translateY(1px);}
@media (prefers-color-scheme: dark){
  script.lia-resetter input[type="button"],script.lia-resetter input[type="submit"]{
    border-color:rgba(var(--color-highlight,11,95,255),.85)!important;
  }
}`;
    (DOC.head || DOC.documentElement).appendChild(st);
  }catch(e){}
})();
@end


@resetter
<script class="lia-resetter" input="button" value="Neustart" modify="false">
  // Der Block zwischen @resetter ... @end wird als STRING geholt (sauber escaped)
  const SRC = @'input;

  // Bei jedem Run (initial + Klick) wird der Block NEU als LiaScript geparst:
  // -> alle Quizzes/Buttons sind wieder frisch (kompletter Reset).
  "LIASCRIPT:\n" + SRC
</script>
@end
-->


# Nutzung (Beispiel)

@resetter
<div class="resetter">

Was ist $3+8$?

[[ 11 ]]

</div>
@end
