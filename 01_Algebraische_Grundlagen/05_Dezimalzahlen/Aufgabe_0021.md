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


tags: Addition, Dezimalzahlen, sehr leicht, sehr niedrig, Angeben

comment: Addiere Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Addition von Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 4,2+ 1,37=$ [[  5,57  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $3,64 +2,78 =$ [[  6,42  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 4,27+ 2,69=$ [[  6,96  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $5,34 + 2,87=$ [[  8,21  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 0,564+ 0,485=$ [[  1,049  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 1,57+ 3,74=$ [[  5,31  ]]

</div> 
</section>





