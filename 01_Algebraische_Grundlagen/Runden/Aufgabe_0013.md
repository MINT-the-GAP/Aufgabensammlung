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


tags: Zahlenverständnis, Dezimalzahlen, Periodizität, Runden, sehr leicht, sehr niedrig, Angeben

comment: Runde eine periodische Dezimalzahl.

author: Martin Lommatzsch

-->




# Größenvergleich von ganzen Zahlen

**Gib** die Zahl gerundet auf drei Nachkommastellen **an**.

<br>
<section class="flex-container">
<div class="flex-child">
<br>
__$a)\;\;$__ $5,\overline{91} \approx$ [[ 5,919 ]] 
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $2,\overline{7} \approx$ [[ 2,778 ]] 
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $0,\overline{45} \approx$ [[ 0,455 ]] 

</div>
</section>

<br>
<br>
<br>
<br>
<br>

