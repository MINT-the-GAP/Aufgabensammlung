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


tags: Division, Negative Zahlen, Dezimalzahlen, leicht, niedrig, Angeben

comment: Dividiere negative Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Division von negativen Dezimalzahlen

**Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ -0,54:(-0,6) =$ [[  0,9  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ -3 : (-8) =$ [[  0,375  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 1,5 : (-2,5) =$ [[  -0,6  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 0,072 : (-0,8) =$ [[  -0,09  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ -0,144 : (-1,2) =$ [[  0,12  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,49 : (-7) =$ [[  -0,07  ]]

</div> 
</section>





