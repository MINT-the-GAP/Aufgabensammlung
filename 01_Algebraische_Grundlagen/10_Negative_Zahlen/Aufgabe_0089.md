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


tags: Addition, Negative Zahlen, Dezimalzahlen, leicht, niedrig, Angeben

comment: Addiere negative Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Addition von negativen Dezimalzahlen

**Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 2,3+(-9,4) =$ [[  -6,9  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ -1,9+(-3,5) =$ [[  -5,4  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 2,7+(-6,2) =$ [[  -3,5  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ -0,25+(-3,68) =$ [[  -3,93  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ -0,09+(-2,18) =$ [[  -2,27  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,19+(-2,75) =$ [[  -2,56  ]]

</div> 
</section>





