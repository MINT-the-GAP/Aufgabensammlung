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

<br>
<section class="flex-container">
<div class="flex-child">
<br>
__$a)\;\;$__ $\dfrac{1}{40}$ [[$>$|$=$|($<$)]] $0,03$ 
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $0,45$ [[($>$)|$=$|$<$]] $\dfrac{4}{9}$ 
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $0,\overline{428571}$ [[($>$)|($=$)|$<$]] $\dfrac{3}{7}$ 
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $\dfrac{7}{6}$ [[$>$|$=$|($<$)]] $1,2$ 
<br>
</div>
<div class="flex-child">
<br>
__$e)\;\;$__ $5,2$ [[($>$)|$=$|$<$]] $\dfrac{5}{2}$ 
<br>
</div>
<div class="flex-child">
<br>
__$f)\;\;$__ $\dfrac{5}{12}$ [[$>$|$=$|($<$)]] $0,\bar{4}$ 

</div>
</section>
<br>
<br>
<br>
<br>

