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
<br>
__$a)\;\;$__ $ 0,2 \cdot 4,5 + 0,6 =$ [[  1,5  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 8,4:0,14 - 22,5 =$ [[  47,5  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 2,56+1,28-0,75 =$ [[  3,09  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 0,4 \cdot 0,6 + 0,7 \cdot 0,3 =$ [[  0,45  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 0,75 \cdot 4,8 - 1,125 =$ [[  2,475  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ 0,05:2,5+1,5 =$ [[  1,52  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

