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


tags: Dezimalzahlen, Periodizität, leicht, sehr niedrig, Angeben

comment: Rechne mit Periodizitäten im Kopf.

author: Martin Lommatzsch

-->




# Rechnen mit Periodizitäten

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 1,\bar{8} : 0,\bar{4} =$ [[  4,25  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,\bar{2} \cdot 0,09 =$ [[  0,02  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 1,1\bar{6} - 0,\bar{6} =$ [[  0,5  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 5,42\bar{1}+1,5\bar{8} =$ [[  7,011  ]]

</div> 
</section>





