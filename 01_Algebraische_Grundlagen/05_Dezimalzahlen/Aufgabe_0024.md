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

__$a)\;\;$__ $ 5,26-1,15 =$ [[  4,11  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 6,3-4,88 =$ [[  1,42  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 3,84-2,45 =$ [[  1,39  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 4,82-1,71 =$ [[  2,11  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 6-0,375 =$ [[  5,625  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 4,53-2,68 =$ [[  1,85  ]]

</div> 
</section>





