<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Resetter v0.0.1 — Button hinter @resetter rendert den folgenden Block als LIASCRIPT neu (vollständiger Reset inkl. Lia-Quizzes). Kein @input im JS → kein „Neustart is not defined“.

@style
/* Wrapper */
.lia-resetter{ margin: .35rem 0 .9rem 0; }

/* Quelltext unsichtbar speichern */
.lia-resetter-src{ display: none !important; }

/* Button: Hintergrund transparent, Text Theme-Farbe */
.lia-resetter input[type="button"],
.lia-resetter input[type="submit"]{
  appearance: none;
  background: transparent !important;
  color: rgb(var(--color-highlight, 11, 95, 255)) !important;
  border: 2px solid currentColor !important;
  border-radius: 999px !important;
  padding: .35rem .85rem !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  user-select: none !important;
}
.lia-resetter input[type="button"]:active,
.lia-resetter input[type="submit"]:active{
  transform: translateY(1px);
}
@end

@resetter
@resetter__impl(@uid)
@end

@resetter__impl(@0)
<div class="lia-resetter" id="lia-resetter-@0">
  <!-- ORIGINAL-Block (als Text) -->
  <pre class="lia-resetter-src" id="lia-resetter-src-@0">@input</pre>

  <!-- Button + Renderer: auf Load + Klick wird LIASCRIPT neu geparst -->
  <script input="button" value="Neustart">
    const wrap = document.getElementById("lia-resetter-@0");
    const pre  = wrap ? wrap.querySelector("#lia-resetter-src-@0") : null;

    function normalize(s){
      s = String(s || "").replace(/\r\n/g, "\n");
      s = s.replace(/^\n+|\n+$/g, ""); // äußere Leerzeilen weg
      const lines = s.split("\n");
      let min = Infinity;
      for(const line of lines){
        if(!line.trim()) continue;
        const m = line.match(/^(\s+)/);
        if(m) min = Math.min(min, m[1].length);
        else { min = 0; break; }
      }
      if(min && min !== Infinity){
        const pad = " ".repeat(min);
        return lines.map(l => l.startsWith(pad) ? l.slice(min) : l).join("\n");
      }
      return lines.join("\n");
    }

    const src = normalize(pre ? pre.textContent : "");

    // Nonce erzwingt Neu-Parse auch wenn src identisch ist
    "LIASCRIPT:\n<!-- reset:" + Date.now() + " -->\n" + src + "\n";
  </script>
</div>
@end
-->

# Nutzung

@resetter
<div class="resetter">

Was ist $3+8$?

[[ 11 ]]

</div>
@end
