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
__$a)\;\;$__ $ 1,4 + 2,1 \cdot 0,3 =$ [[  2,09  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 6,5 : 1,25 -1,6 =$ [[  3,6  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 3,4 - 0,6 \cdot 1,1 =$ [[  2,84  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ (4,8+2,5) \cdot 0,02 =$ [[  0,146  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 5,7:6-2,1:6 =$ [[  0,6  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ (0,8-0,45):0,7 =$ [[  0,5  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

