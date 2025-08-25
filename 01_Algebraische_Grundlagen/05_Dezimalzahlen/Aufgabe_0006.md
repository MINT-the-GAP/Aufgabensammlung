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


tags: Bruchrechnung, Dezimalzahlen, Periodizität, Zahlenverständnis, leicht, niedrig, Angeben

comment: Welche Zahl ist größer? Wähle aus.

author: Martin Lommatzsch

-->




# Größe von positiven rationalen Zahlen

**Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $0,78$ [[($>$)|$=$|$<$]] $\dfrac{12}{16}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{5}{6}$ [[$>$|($=$)|$<$]] $0,8\bar{3}$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{8}{3}$ [[($>$)|$=$|($<$)]] $2,7$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{20}{9}$ [[$>$|$=$|($<$)]] $2,25$ 

</div>
<div class="flex-child">

__$e)\;\;$__ $0,85$ [[$>$|($=$)|$<$]] $\dfrac{17}{20}$ 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{8}{25}$ [[$>$|$=$|($<$)]] $0,\bar{3}$ 

</div>
</section>





