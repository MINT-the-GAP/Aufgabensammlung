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


tags: Teilbarkeiten, Quersumme, sehr leicht, sehr niedrig, Angeben

comment: Addiere alle Ziffern einer Zahl und erhalte die Quersumme.

author: Martin Lommatzsch

-->




# Quersumme angeben


**Gib** den Wert der Quersumme **an**.

<br>

<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $34786396$

<br>
--> [[ 46 ]]
<br>
<br>
<br>

</div>
</section>

<section class="flex-container">
<div class="flex-child">

__$b)\;\;$__ $78258003$

<br>
--> [[ 33 ]]
<br>
<br>
<br>

</div>
</section>

<section class="flex-container">
<div class="flex-child">

__$c)\;\;$__ $28359015$

<br>
--> [[ 33 ]]
<br>
<br>
<br>

</div>
</section>

<section class="flex-container">
<div class="flex-child">

__$d)\;\;$__ $81015806$

<br>
--> [[ 29 ]]
<br>
<br>
<br>

</div>
</section>

<br>
<br>
<br>
<br>
<br>