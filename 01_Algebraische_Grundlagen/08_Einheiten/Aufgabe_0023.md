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

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Einheiten, Dezimalzahlen, Länge, Fläche, Volumen, mittel, niedrig, Angeben

comment: Wähle die richtige Einheit aus.

author: Martin Lommatzsch

-->




# Einheitenwahl


**Wähle** die passende Einheit **aus**, sodass eine wahre mathematische Aussage entsteht.

<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $0,01275\,$km$ = 127,5\,$ [[km|m|(dm)|cm|mm]] \
<br>
</div>
<div class="flex-child">
__$b)\;\;$__ $450000\,$ml$ = 0,45\,$ [[km$^3$|(m$^3$)|dm$^3$|cm$^3$|mm$^3$]] \
<br>
</div>
<div class="flex-child">
__$c)\;\;$__ $1200000\,$mm$ = 1,2\,$ [[(km)|m|dm|cm|mm]] \
<br>
</div>
<div class="flex-child">
__$d)\;\;$__ $0,0053\,$ha$ = 530000\,$ [[km$^2$|ha|m$^2$|dm$^2$|(cm$^2$)|mm$^2$]] \
<br>
</div>
<div class="flex-child">
__$e)\;\;$__ $0,0654\,$m$ = 65,4\,$ [[km|m|dm|cm|(mm)]] \
<br>

</div>


</section>

<br>
<br>
<br>
<br>
<br>