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


tags: Prozent, sehr leicht, sehr niedrig, Angeben

comment: Wie viel sind zum Beispiel $25\%$ von 4000€? Bestimme den Prozentwert.

author: Martin Lommatzsch

-->




# Anteilsweise mit Prozentanteilen

**Gib** den beschriebenen Prozentwert **an**.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ Wie viel sind $20\%$ von $4500\,$€?  \

 [[  1800  ]]€

</div>
<div class="flex-child">

__$b)\;\;$__ Wie viel sind $75\%$ von $60\,$€?  \

 [[  45  ]]€

</div>
<div class="flex-child">

__$c)\;\;$__ Wie viel sind $110\%$ von $640\,$€?  \

 [[  704  ]]€

</div>
<div class="flex-child">

__$d)\;\;$__ Wie viel sind $4\%$ von $500\,$€?  \

 [[  20  ]]€

</div>
</section>





