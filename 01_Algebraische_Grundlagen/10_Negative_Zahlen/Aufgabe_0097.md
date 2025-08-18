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


tags: Multiplikation, Negative Zahlen, Dezimalzahlen, leicht, niedrig, Angeben

comment: Multipliziere negative Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Multiplikation von negativen Dezimalzahlen

**Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ -1,25 \cdot 2,8 =$ [[  -3,5  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,25 \cdot (-3,1) =$ [[  -1,65  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ - 1,2 \cdot (-0,9) =$ [[  1,08  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 0,7 \cdot (-0,2) =$ [[  -0,14  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ -0,125 \cdot (-4,8) =$ [[  0,6  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,75 \cdot (-4,2) =$ [[  -1,05  ]]

</div> 
</section>





