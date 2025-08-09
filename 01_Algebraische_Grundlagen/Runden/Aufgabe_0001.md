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


tags: Runden, sehr leicht, sehr niedrig, Angeben

comment: Runde eine natürliche Zahl.

author: Martin Lommatzsch

-->




# Runden von natürlichen Zahlen

**Gib** den auf Zehner gerundeten Wert **an**.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$534 \approx$ [[530    ]]

</div>



<div class="flex-child">

__$b)\;\;$__

$119 \approx$ [[120    ]]

</div>




<div class="flex-child">

__$c)\;\;$__

$346 \approx$ [[350    ]]

</div>




<div class="flex-child">

__$d)\;\;$__

$971 \approx$ [[970    ]]

</div>




<div class="flex-child">

__$e)\;\;$__

$289 \approx$ [[290    ]]

</div>



<div class="flex-child">

__$f)\;\;$__

$654 \approx$ [[650    ]]

</div>


</section>