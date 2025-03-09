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
__$a)\;\;$__ $ 7,2-1,5 \cdot 2,5 =$ [[  3,45  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 1,44:12+0,56 =$ [[  0,68  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ (2,9-2,25):0,5 =$ [[  1,3  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 1,5 \cdot 7 - 0,75 \cdot 8-8 =$ [[  4,1  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 2,3:0,9 + 4:0,9 =$ [[  7  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ 4,5 \cdot (0,12 + 0,14 + 0,24) =$ [[  2,25  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

