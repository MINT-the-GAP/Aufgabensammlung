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


tags: Dezimalzahlen, Bruchrechnung, Negative Zahlen, Zahlenverständnis, mittel, normal, Angeben

comment: Welche Zahl ist größer? Gib es an.

author: Martin Lommatzsch

-->




# Größenvergleich von rationalen Zahlen

**Entscheide**, welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $|-0,\bar{7}|$ [[$>$|($=$)|$<$]] $\dfrac{7}{9}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $-\dfrac{5}{6}$ [[$>$|$=$|($<$)]] $-\dfrac{5}{12}$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\left|-\dfrac{7}{8}\right|$ [[($>$)|$=$|$<$]] $\left|-\dfrac{7}{16}\right|$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $-0,\bar{2}$ [[$>$|$=$|($<$)]] $-|-0,2|$ 

</div>
</section>





