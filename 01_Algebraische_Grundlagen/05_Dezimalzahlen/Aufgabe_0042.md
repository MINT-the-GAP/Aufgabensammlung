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


tags: Dezimalzahlen, Vorrangsregeln, leicht, niedrig, Angeben

comment: Rechne mit Dezimalzahlen im Kopf. Achte auf die Vorrangsregeln.

author: Martin Lommatzsch

-->




# Vorrangsregeln bei Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 8,25 - 2,4 \cdot 2,5 =$ [[  2,25  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,8 \cdot 1,1 + 0,3 \cdot 0,5 =$ [[  1,03  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ (0,75-0,64) \cdot 0,5 =$ [[  0,055  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 16,9 : 13 - 0,5 =$ [[  0,8  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 0,25 \cdot 3,6 + 0,75 =$ [[  1,65  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 9,6:0,08 - 2,5 =$ [[  117,5  ]]

</div> 
</section>





