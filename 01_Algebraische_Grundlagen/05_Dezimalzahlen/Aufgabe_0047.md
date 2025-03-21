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
<br>
__$a)\;\;$__ $ \dfrac{9}{4} =$ [[  2,25  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ \dfrac{17}{20} =$ [[  0,85  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ \dfrac{19}{5} =$ [[  3,8  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ \dfrac{9}{8} =$ [[  1,125  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ \dfrac{548}{100} =$ [[  5,48  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ \dfrac{8}{50} =$ [[  0,16  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

