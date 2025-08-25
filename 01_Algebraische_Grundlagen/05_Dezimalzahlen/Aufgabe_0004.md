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

__$a)\;\;$__ $0,\bar{7}$ [[$>$|($=$)|$<$]] $\dfrac{7}{9}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{5}{6}$ [[$>$|$=$|($<$)]] $0,85$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{5}{3}$ [[($>$)|$=$|($<$)]] $1,6667$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $0,\bar{9}$ [[$>$|($=$)|$<$]] $\dfrac{7}{7}$ 

</div>
<div class="flex-child">

__$e)\;\;$__ $0,125$ [[$>$|$=$|($<$)]] $\dfrac{1}{7}$ 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{9}{8}$ [[($>$)|$=$|$<$]] $\dfrac{10}{9}$ 

</div>
</section>





