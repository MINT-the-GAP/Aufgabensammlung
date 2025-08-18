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

__$a)\;\;$__ $ -0,63 : 7 =$ [[  -0,09  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,81:(-2,7) =$ [[  -0,3  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ -48:0,25 =$ [[  -192  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 0,016:(-0,02) =$ [[  -0,8  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ -7,2:0,36 =$ [[  -20  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ -0,56:(-0,7) =$ [[  0,8  ]]

</div> 
</section>





