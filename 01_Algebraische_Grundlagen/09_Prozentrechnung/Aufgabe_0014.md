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


tags: Prozentrechnung, sehr leicht, sehr niedrig, Angeben

comment: Wie viel sind zum Beispiel $25\%$ von 4000€? Bestimme den Prozentwert.

author: Martin Lommatzsch

-->




# Anteilsweise mit Prozentanteilen

**Gib** den beschriebenen Prozentwert **an**.

<br>

<section class="flex-container">
<div class="flex-child">
<br>
__$a)\;\;$__ Wie viel sind $62,5\%$ von $400\,$€?  \
<br>
 [[  250  ]]€
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ Wie viel sind $0,7\%$ von $1100\,$€?  \
<br>
 [[  7,7  ]]€
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ Wie viel sind $225\%$ von $360\,$€?  \
<br>
 [[  810  ]]€
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ Wie viel sind $45\%$ von $6000\,$€?  \
<br>
 [[  2700  ]]€
<br>
</div>
</section>

<br>
<br>
<br>

