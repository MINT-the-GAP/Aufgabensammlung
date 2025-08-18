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


tags: Multiplikation, Negative Zahlen, sehr leicht, sehr niedrig, Angeben

comment: Multipliziere ganze Zahlen im Kopf.

author: Martin Lommatzsch

-->




# Multiplikation von ganzen Zahlen

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ -8 \cdot 12 =$ [[  -96  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ -7 \cdot (-20) =$ [[  140  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 5 \cdot (-45) =$ [[  -225  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ -16 \cdot (-12) =$ [[  192  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 11 \cdot (-31) =$ [[  -341  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ -14 \cdot 6 =$ [[  -84  ]]

</div> 
</section>





