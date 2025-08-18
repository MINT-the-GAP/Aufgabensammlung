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

__$a)\;\;$__ $ -0,008 : (-0,2) =$ [[  0,04  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ -0,55: 1,1 =$ [[  -0,5  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ -4,8:(-0,06)=$ [[  8  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ -3,6:90 =$ [[  -0,04  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 0,009:(-0,3) =$ [[  -0,03  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,96:0,8 =$ [[  1,2  ]]

</div> 
</section>





