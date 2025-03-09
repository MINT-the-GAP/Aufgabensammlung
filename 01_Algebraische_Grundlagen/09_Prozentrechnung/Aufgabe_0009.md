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
<br>
__$a)\;\;$__ $ \dfrac{7}{8} =$ [[  87,5  ]]%
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ \dfrac{9}{5} =$ [[  180  ]]%
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ \dfrac{3}{50} =$ [[  6  ]]%
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ \dfrac{3}{250} =$ [[  1,2  ]]%
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ \dfrac{7}{10} =$ [[  70  ]]%
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ \dfrac{8}{5000} =$ [[  0,16  ]]%
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

