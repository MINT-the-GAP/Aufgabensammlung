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


tags: Einheiten, Länge, Masse, Zeit, Fläche, sehr leicht, sehr niedrig, Angeben

comment: Welche angegebene Größe ist größer? Wähle das passende Relationszeichen.

author: Martin Lommatzsch

-->




# Einheitenvergleich


**Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 450\,$min [[($>$)|$=$|$<$]] $7\,$h \

</div>
<div class="flex-child">
__$b)\;\;$__ $ 600\,$kg [[$>$|$=$|($<$)]] $3\,$t \

</div>
<div class="flex-child">
__$c)\;\;$__ $ 25\,$dm [[($>$)|$=$|$<$]] $2\,$m \

</div>
<div class="flex-child">
__$d)\;\;$__ $ 84000\,$mm [[$>$|($=$)|$<$]] $840\,$dm \

</div>
<div class="flex-child">
__$e)\;\;$__ $ 50\,$dm$^2$ [[$>$|($=$)|$<$]] $500000\,$mm$^2$ \


</div>


</section>





