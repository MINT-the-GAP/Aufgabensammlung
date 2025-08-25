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

__$a)\;\;$__ $ 4,7+ 3,41=$ [[  8,11  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 1,56+ 2,85=$ [[  4,41  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 0,85+ 2,846=$ [[  3,696  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 3,45+ 2,97=$ [[  6,42  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 8,43+ 0,76=$ [[  9,19  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 2,748 + 0,494=$ [[  3,242  ]]

</div> 
</section>





