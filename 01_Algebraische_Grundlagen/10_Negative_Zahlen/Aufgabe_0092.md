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

__$a)\;\;$__ $ 2,4+(-5,7) =$ [[  -3,3  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ -1,8+(-3,48) =$ [[  -5,28  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ -2,8+(-0,084) =$ [[  -2,884  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 2,18+(-3,54) =$ [[  -1,36  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ -0,85+(-1,68) =$ [[  -2,53  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 1,17+(-2,8) =$ [[  -1,63  ]]

</div> 
</section>





