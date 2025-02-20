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

**Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.

<br>
<section class="flex-container">
<div class="flex-child">

<br>
__$a)\;\;$__ $-\dfrac{6}{5}$ [[($>$)|$=$|$<$]] $-\dfrac{17}{10}$ 
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $|-1,\bar{3}|$ [[($>$)|$=$|$<$]] $-\dfrac{4}{3}$ 
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $0,04$ [[($>$)|$=$|$<$]] $-\dfrac{7}{10}$ 
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $\dfrac{1}{25}$ [[$>$|$=$|($<$)]] $|-0,05|$ 

</div>
</section>
<br>
<br>
<br>
<br>

