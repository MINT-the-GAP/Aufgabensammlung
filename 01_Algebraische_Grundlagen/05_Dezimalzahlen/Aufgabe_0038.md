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
<br>
__$a)\;\;$__ $ 1,\bar{5} : 0,\bar{8} =$ [[  1,75  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 1,\bar{3} \cdot 0,3 =$ [[  0,4  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 2,38\bar{7} - 0,\bar{7} =$ [[  1,61  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 3,1\bar{4}+0,123\bar{5} =$ [[  3,268  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

