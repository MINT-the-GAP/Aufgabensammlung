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

__$a)\;\;$__ $ 8,7+ 2,9=$ [[  11,6  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $5,45 + 2,68=$ [[  8,13  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $2,78 + 2,45=$ [[  5,23  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 3,5+ 0,375=$ [[  3,875  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $6,25 + 4,875=$ [[  11,125  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 1,74+ 6,54=$ [[  8,28  ]]

</div> 
</section>





