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


tags: Bruchrechnung, Dezimalzahlen, Zahlenverständnis, sehr leicht, niedrig, Angeben

comment: Welche Zahl ist größer? Wähle aus.

author: Martin Lommatzsch

-->




# Größe von positiven rationalen Zahlen

**Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $1,1$ [[$>$|$=$|($<$)]] $\dfrac{4}{3}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{3}{7}$ [[$>$|$=$|($<$)]] $0,49$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{7}{5}$ [[($>$)|($=$)|$<$]] $1,400$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $1,9$ [[($>$)|$=$|$<$]] $\dfrac{199}{200}$ 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{0}{75}$ [[$>$|$=$|($<$)]] $0,00001$ 

</div>
<div class="flex-child">

__$f)\;\;$__ $0,6$ [[$>$|$=$|($<$)]] $\dfrac{2}{3}$ 

</div>
</section>





