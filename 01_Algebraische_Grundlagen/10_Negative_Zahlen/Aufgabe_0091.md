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

__$a)\;\;$__ $ -9,2+(-4,1) =$ [[  -13,3  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 2,15+(-3,6) =$ [[  -1,45  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ -0,9+(-4,7) =$ [[  -5,8  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 3,1+(-4,44) =$ [[  -1,34  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ -2,74+(-1,67) =$ [[  -4,41  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,85+(-6,14) =$ [[  -5,29  ]]

</div> 
</section>





