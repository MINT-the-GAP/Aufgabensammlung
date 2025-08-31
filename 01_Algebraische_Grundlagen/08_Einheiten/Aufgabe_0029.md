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

__$a)\;\;$__ $ \dfrac{7}{8}\,$kg [[($>$)|$=$|$<$]] $\dfrac{1000}{2}\,$g \

</div>
<div class="flex-child">
__$b)\;\;$__ $ \dfrac{4}{5}\,$min [[$>$|($=$)|$<$]] $\dfrac{36}{3}\,$s \

</div>
<div class="flex-child">
__$c)\;\;$__ $ \dfrac{40}{7}\,$m [[($>$)|$=$|$<$]] $\dfrac{4}{70}\,$dm \

</div>
<div class="flex-child">
__$d)\;\;$__ $ \dfrac{8}{9}\,cm$ [[$>$|($=$)|$<$]] $\dfrac{80}{9}\,$mm \

</div>
<div class="flex-child">
__$e)\;\;$__ $ \dfrac{8}{3}\,$mm [[($>$)|$=$|$<$]] $\dfrac{8}{300}\,$cm \


</div>


</section>





