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


tags: Subtraktion, Negative Zahlen, Dezimalzahlen, leicht, niedrig, Angeben

comment: Subtrahiere negative Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Subtraktion von negativen Dezimalzahlen

**Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ -2,14-(-3,2) =$ [[  1,06  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 1,4-(-0,39) =$ [[  1,79  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ -2,7-(1,55) =$ [[  -1,15  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ -6,2-(-9,75) =$ [[  3,55  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 0,65-(-3,4) =$ [[  4,05  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ -0,84-(2,52) =$ [[  1,68  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

