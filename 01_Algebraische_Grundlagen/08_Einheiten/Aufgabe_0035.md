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


tags: Einheiten, Dezimalzahlen, Bruchrechnung, Länge, Masse, Zeit, mittel, normal, Angeben

comment: Welche angegebene Größe ist größer? Wähle das passende Relationszeichen.

author: Martin Lommatzsch

-->




# Einheitenvergleich mit rationalen Zahlen


**Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.

<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 0,\bar{3}\,$kg [[($>$)|$=$|$<$]] $ = 300\,$g \
<br>
</div>
<div class="flex-child">
__$b)\;\;$__ $ \dfrac{5}{7}\,$min [[($>$)|$=$|$<$]] $ = 0,5\,$min \
<br>
</div>
<div class="flex-child">
__$c)\;\;$__ $ 12,5\,$mm [[$>$|$=$|($<$)]] $ = \dfrac{1}{8}\,$m \
<br>
</div>
<div class="flex-child">
__$d)\;\;$__ $ 0,04\,$m [[$>$|$=$|($<$)]] $ = \dfrac{2}{5}\,dm$ \
<br>
</div>
<div class="flex-child">
__$e)\;\;$__ $ \dfrac{5}{600}\,$h [[$>$|($=$)|$<$]] $ = 0,5\,$min \
<br>

</div>


</section>

<br>
<br>
<br>
<br>
<br>