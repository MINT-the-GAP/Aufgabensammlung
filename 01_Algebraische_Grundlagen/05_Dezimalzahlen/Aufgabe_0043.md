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
__$a)\;\;$__ $ 16 \cdot 0,12 + 0,5 =$ [[  2,42  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 0,4 \cdot 0,8 + 2 \cdot 0,09 =$ [[  0,5  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 0,75:2,5 + 2,54 =$ [[  2,84  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 0,4 - 0,08 : 16 =$ [[  0,395  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 1,25 \cdot (5,7 - 4,2) =$ [[  1,875  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ (4,5 - 2,84) : 0,1 =$ [[  16,6  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

