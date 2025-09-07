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


tags: Dezimalzahlen, Prozent, sehr leicht, sehr niedrig, Angeben

comment: Wandle die Dezimalzahl in eine Prozentzahl um.

author: Martin Lommatzsch

-->




# Darstellung als Prozentzahlen

**Gib** den Wert des Terms als Prozentzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 0,37 =$ [[  37  ]]%

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 1,12 =$ [[  112  ]]%

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 0,0649 =$ [[  6,49  ]]%

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 644,1 =$ [[  64410  ]]%

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 2,364 =$ [[  236,4  ]]%

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,00061 =$ [[  0,061  ]]%

</div> 
</section>





