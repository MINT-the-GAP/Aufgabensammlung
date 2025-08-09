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


tags: Runden, leicht, sehr niedrig, Angeben

comment: Runde eine natürliche Zahl.

author: Martin Lommatzsch

-->




# Runden von natürlichen Zahlen

**Gib** den auf die angegebene Stelle gerundeten Wert **an**.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

Auf Hunderter: $54164 \approx$ [[54200]]

</div>



<div class="flex-child">

__$b)\;\;$__

Auf Hunderttausender: $54164 \approx$ [[100000]]

</div>




<div class="flex-child">

__$c)\;\;$__

Auf Zehner: $8431 \approx$ [[8430]]

</div>




<div class="flex-child">

__$d)\;\;$__

Auf Millionen: $47081 \approx$ [[0]]

</div>




<div class="flex-child">

__$e)\;\;$__

Auf Hunderter: $94516 \approx$ [[94500]]

</div>



<div class="flex-child">

__$f)\;\;$__

Auf Zehntausender: $998146 \approx$ [[1000000]]

</div>


</section>