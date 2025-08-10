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




# Runden von periodischen Dezimalzahlen

**Gib** die Zahl gerundet auf drei Nachkommastellen **an**.

<br>
<section class="flex-container">
<div class="flex-child">
<br>
__$a)\;\;$__ $0,\overline{8} \approx$ [[ 0,889 ]] 
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $1,\overline{35} \approx$ [[ 1,354 ]] 
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $7,\overline{645891} \approx$ [[ 7,646 ]] 

</div>
</section>

<br>
<br>
<br>
<br>
<br>
