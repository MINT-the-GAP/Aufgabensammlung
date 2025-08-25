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

__$a)\;\;$__ $ 2,6 \cdot 0,25 - 0,01 =$ [[  0,64  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,56 : (1,57-1,49) =$ [[  0,7  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 1,45 + 1,4 \cdot 0,09 =$ [[  1,566  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 0,2 \cdot 0,3 \cdot 0,4 =$ [[  0,024  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 3,2-1,24-1,35 =$ [[  0,61  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 2,4:8+2,045 =$ [[  2,345  ]]

</div> 
</section>





