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


tags: Subtraktion, Dezimalzahlen, sehr leicht, sehr niedrig, Angeben

comment: Subtrahiere Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Subtraktion von Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 9,3-5,5 =$ [[  3,8  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 2,5-0,47 =$ [[  2,03  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 6,4-2,22 =$ [[  4,18  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 0,28-0,125 =$ [[  0,155  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $1,75-0,8 =$ [[  0,95  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 11,6-8,9 =$ [[  2,7  ]]

</div> 
</section>





