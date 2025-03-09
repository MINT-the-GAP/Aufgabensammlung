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



tags: Einheiten, Dezimalzahlen, Länge, Masse, Zeit, leicht, niedrig, Angeben

comment: Welche angegebene Größe in Dezimalzahldarstellung ist größer? Wähle das passende Relationszeichen.

author: Martin Lommatzsch

-->




# Einheitenvergleich mit Dezimalzahlen


**Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.

<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 2,5\,$h [[$>$|$=$|($<$)]] $ = 250\,$min \
<br>
</div>
<div class="flex-child">
__$b)\;\;$__ $ 240\,$mm [[$>$|($=$)|$<$]] $ = 0,24\,$m \
<br>
</div>
<div class="flex-child">
__$c)\;\;$__ $ 0,0014\,$km [[($>$)|$=$|$<$]] $ = 63\,$cm \
<br>
</div>
<div class="flex-child">
__$d)\;\;$__ $ 310\,$mg [[($>$)|$=$|$<$]] $ = 0,00026\,$kg \
<br>
</div>
<div class="flex-child">
__$e)\;\;$__ $ 80\,$min [[($>$)|$=$|$<$]] $ = 1,33\,$h \
<br>

</div>


</section>

<br>
<br>
<br>
<br>
<br>