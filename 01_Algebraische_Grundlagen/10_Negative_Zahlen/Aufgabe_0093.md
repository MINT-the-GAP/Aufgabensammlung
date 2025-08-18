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

__$a)\;\;$__ $ 1,4-(-2,8) =$ [[  4,2  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ -2,05-(-1,1) =$ [[  -0,95  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ -1,9-(-1,48) =$ [[  -0,42  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ -1,3-(-3,75) =$ [[  2,45  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ -4,61-(-2,48) =$ [[  -7,09  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 2,44-(-3,12) =$ [[  5,56  ]]

</div> 
</section>





