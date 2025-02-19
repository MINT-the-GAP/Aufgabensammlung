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
__$a)\;\;$__ $0,\overline{9} \approx$ [[  1,000 ]] 
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $13,\overline{97} \approx$ [[ 13,980 ]] 
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $3,\overline{2486} \approx$ [[  3,249 ]] 

</div>
</section>

<br>
<br>
<br>
<br>
<br>
