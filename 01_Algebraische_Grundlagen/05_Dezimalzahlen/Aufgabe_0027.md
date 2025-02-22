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


tags: Multiplikation, Dezimalzahlen, sehr leicht, sehr niedrig, Angeben

comment: Multipliziere Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Multiplikation von Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ 0,25 \cdot 0,2 =$ [[  0,05  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 1,1 \cdot 0,6 =$ [[  0,66  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 2,4 \cdot 0,3 =$ [[  0,72  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 1,2 \cdot 1,3 =$ [[  1,32  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 4,5 \cdot 0,5 =$ [[  2,25  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ 2,2 \cdot 1,5 =$ [[  3,3  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

