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

<br>

<section class="flex-container">
<div class="flex-child">
<br>
__$a)\;\;$__ Wie viel sind $80\%$ von $50\,$€?  \
<br>
 [[  40  ]]€
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ Wie viel sind $125\%$ von $300\,$€?  \
<br>
 [[  375  ]]€
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ Wie viel sind $400\%$ von $125\,$€?  \
<br>
 [[  500  ]]€
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ Wie viel sind $7\%$ von $900\,$€?  \
<br>
 [[  63  ]]€
<br>
</div>
</section>

<br>
<br>
<br>

