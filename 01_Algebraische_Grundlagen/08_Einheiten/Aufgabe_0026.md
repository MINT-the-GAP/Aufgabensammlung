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


tags: Einheiten, Länge, Masse, Zeit, Volumen, sehr leicht, sehr niedrig, Angeben

comment: Welche angegebene Größe ist größer? Wähle das passende Relationszeichen.

author: Martin Lommatzsch

-->




# Einheitenvergleich


**Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.

<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 764\,$mm [[$>$|$=$|($<$)]] $ = 2\,$m \
<br>
</div>
<div class="flex-child">
__$b)\;\;$__ $ 150\,$kg [[($>$)|$=$|$<$]] $ = 95000\,$g \
<br>
</div>
<div class="flex-child">
__$c)\;\;$__ $ 3\,$l [[$>$|($=$)|$<$]] $ = 3000\,$cm$^3$ \
<br>
</div>
<div class="flex-child">
__$d)\;\;$__ $ 180\,$min [[$>$|$=$|($<$)]] $ = 4\,$h \
<br>
</div>
<div class="flex-child">
__$e)\;\;$__ $ 6\,$min [[$>$|$=$|($<$)]] $ = 3000\,$s \
<br>

</div>


</section>

<br>
<br>
<br>
<br>
<br>