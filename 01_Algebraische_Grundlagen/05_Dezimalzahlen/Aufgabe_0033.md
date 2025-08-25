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


tags: Division, Dezimalzahlen, sehr leicht, sehr niedrig, Angeben

comment: Multipliziere Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Division von Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 4,7:0,25 =$ [[  18,8  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,225:1,5 =$ [[  0,15  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 4,5:9 =$ [[  0,5  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 0,54:0,6 =$ [[  0,9  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 8,75:12,5 =$ [[  0,7  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 3,6:0,009 =$ [[  400  ]]

</div> 
</section>





