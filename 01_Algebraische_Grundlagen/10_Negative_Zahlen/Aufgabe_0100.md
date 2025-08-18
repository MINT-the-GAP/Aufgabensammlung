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

__$a)\;\;$__ $ 1,2 \cdot (-1,3) =$ [[  -1,56  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ -0,9 \cdot (-1,2) =$ [[  1,08  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ -0,875 \cdot 4 =$ [[  -3,5  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 0,4 \cdot (-0,6) =$ [[  -0,24  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ -1,2 \cdot (-0,325) =$ [[  0,45  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 3,2 \cdot 0,875 =$ [[  2,8  ]]

</div> 
</section>





