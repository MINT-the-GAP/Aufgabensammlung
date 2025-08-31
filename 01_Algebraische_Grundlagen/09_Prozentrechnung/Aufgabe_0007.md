<!--
version:  0.0.1

language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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


tags: Bruchrechnung, Prozent, sehr leicht, sehr niedrig, Angeben

comment: Wandle die Bruchzahl in eine Prozentzahl um.

author: Martin Lommatzsch

-->




# Darstellung als Prozentzahl

**Gib** den Wert des Terms als Prozentzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \dfrac{2}{5} =$ [[  40  ]]%

</div> 
<div class="flex-child">

__$b)\;\;$__ $ \dfrac{1}{20} =$ [[  5  ]]%

</div> 
<div class="flex-child">

__$c)\;\;$__ $ \dfrac{17}{100} =$ [[ 17   ]]%

</div> 
<div class="flex-child">

__$d)\;\;$__ $ \dfrac{5}{4} =$ [[  125  ]]%

</div> 
<div class="flex-child">

__$e)\;\;$__ $ \dfrac{12}{25} =$ [[  48  ]]%

</div> 
<div class="flex-child">

__$f)\;\;$__ $ \dfrac{3}{8} =$ [[  37,5  ]]%

</div> 
</section>





