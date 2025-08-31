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



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \dfrac{4}{3}\,$dm [[($>$)|$=$|$<$]] $1,3\,$cm \

</div>
<div class="flex-child">
__$b)\;\;$__ $ 0,00225\,$t [[$>$|$=$|($<$)]] $\dfrac{90}{4}\,$kg \

</div>
<div class="flex-child">
__$c)\;\;$__ $ \dfrac{7}{24}\,$min [[$>$|($=$)|$<$]] $17,5\,$s \

</div>
<div class="flex-child">
__$d)\;\;$__ $ 0,0001\bar{9}\,$km [[$>$|($=$)|$<$]] $0,2\,$dm \

</div>
<div class="flex-child">
__$e)\;\;$__ $ 1,7\,$dm [[($>$)|$=$|$<$]] $\dfrac{3}{20}\,$m \


</div>


</section>





