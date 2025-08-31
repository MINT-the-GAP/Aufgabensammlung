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



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \dfrac{3}{2}\,$h [[($>$)|$=$|$<$]] $\dfrac{125}{4}\,$min \

</div>
<div class="flex-child">
__$b)\;\;$__ $ \dfrac{3}{400}\,$m [[$>$|$=$|($<$)]] $\dfrac{300}{4}\,mm$ \

</div>
<div class="flex-child">
__$c)\;\;$__ $ \dfrac{8}{3}\,$min [[$>$|($=$)|$<$]] $\dfrac{320}{2}\,$s \

</div>
<div class="flex-child">
__$d)\;\;$__ $ \dfrac{300}{7}\,$kg [[($>$)|$=$|$<$]] $\dfrac{3}{700}\,$g \

</div>
<div class="flex-child">
__$e)\;\;$__ $ \dfrac{5}{40}\,$dm [[$>$|$=$|($<$)]] $\dfrac{500}{4}\,$mm \


</div>


</section>





