<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 20px;
}

.flex-child {
    flex: 1;
    min-width: 350px;
    margin-right: 20px;
}

@media (max-width: 400px) {
    .flex-child {
        flex: 100%;
        margin-right: 0;
    }
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

@round
<script>
  let value = `@input`;
  if (value.startsWith("@")) {
    ""
  } else {
    value = JSON.parse(value);
    value = value[0]
    value = value.replace(/,/g, ".");
    value = parseFloat(value);
    value = Math.round(value * Math.pow(10,@1)) / Math.pow(10,@1);
    value == @0
  }
</script>
@end

tags: Einheiten, Dezimalzahlen, Länge, Zeit, Masse, Fläche, Volumen, mittel

-->





# Aufgabe 1


**Wähle** die passende Einheit **aus**, sodass eine wahre mathematische Aussage entsteht.

<br>


__$a)\;\;$__ $4,4\,$mm$ = 0,0044\,$ [[km|(m)|dm|cm|mm]] \
<br>
__$b)\;\;$__ $450\,$min$ = 7,5\,$ [[d|(h)|min|s]] \
<br>
__$c)\;\;$__ $0,00025\,$t$ = 250\,$ [[t|kg|(g)|mg]] \
<br>
__$d)\;\;$__ $1410000\,$cm$^2 = 0,0141\,$ [[km$^2$|(ha)|m$^2$|dm$^2$|cm$^2$|mm$^2$]] \
<br>
__$e)\;\;$__ $0,042\,$km$^3 = 42000\,$ [[km$^3$|(m$^3$)|dm$^3$|cm$^3$|mm$^3$]] \
<br>


<br>
<br>
<br>
<br>
<br>