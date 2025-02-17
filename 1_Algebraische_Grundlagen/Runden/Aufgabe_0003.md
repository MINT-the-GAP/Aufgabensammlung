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

**Gib** den auf Tausender gerundeten Wert **an**.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$78961 \approx$ [[79000]]

</div>



<div class="flex-child">

__$b)\;\;$__

$18207 \approx$ [[18000]]

</div>




<div class="flex-child">

__$c)\;\;$__

$138499 \approx$ [[138000]]

</div>




<div class="flex-child">

__$d)\;\;$__

$316418 \approx$ [[316000]]

</div>




<div class="flex-child">

__$e)\;\;$__

$218640 \approx$ [[219000]]

</div>



<div class="flex-child">

__$f)\;\;$__

$450748 \approx$ [[451000]]

</div>


</section>