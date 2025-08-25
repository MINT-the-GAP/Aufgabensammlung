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


tags: Dezimalzahlen, Bruchrechnung, sehr leicht, sehr niedrig, Angeben

comment: Wandle die Bruchzahl in eine Dezimalzahl um.

author: Martin Lommatzsch

-->




# Darstellung als Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \dfrac{3}{4} =$ [[  0,75  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ \dfrac{6}{5} =$ [[  1,2  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ \dfrac{15}{2} =$ [[  7,5  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ \dfrac{1}{16} =$ [[  0,0625  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ \dfrac{1}{25} =$ [[  0,04  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ \dfrac{987}{1000} =$ [[  0,987  ]]

</div> 
</section>





