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


tags: Einheiten, Bruchrechnung, Länge, Masse, Zeit, mittel, normal, Angeben

comment: Welche angegebene Größe in Bruchdarstellung ist größer? Wähle das passende Relationszeichen.

author: Martin Lommatzsch

-->




# Einheitenvergleich mit Brüchen


**Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.

<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \dfrac{7}{50}\,$dm [[($>$)|$=$|$<$]] $ = \dfrac{7}{5}\,$mm \
<br>
</div>
<div class="flex-child">
__$b)\;\;$__ $ \dfrac{1}{6}\,$h [[$>$|($=$)|$<$]] $ = \dfrac{4200}{7}\,$s \
<br>
</div>
<div class="flex-child">
__$c)\;\;$__ $ \dfrac{250}{3}\,$mm [[$>$|($=$)|$<$]] $ = \dfrac{5}{6}\,$dm \
<br>
</div>
<div class="flex-child">
__$d)\;\;$__ $ \dfrac{12}{9}\,$kg [[$>$|$=$|($<$)]] $ = \dfrac{5000}{3}\,$g \
<br>
</div>
<div class="flex-child">
__$e)\;\;$__ $ \dfrac{5}{6}\,$min [[($>$)|$=$|$<$]] $ = \dfrac{125}{3}\,$s \
<br>

</div>


</section>

<br>
<br>
<br>
<br>
<br>