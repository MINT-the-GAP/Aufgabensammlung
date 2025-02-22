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
__$a)\;\;$__ $ 2,1 \cdot 0,3 =$ [[  0,63  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 0,25 \cdot 0,25 =$ [[  0,0625  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 0,8 \cdot 25 =$ [[  20  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 6,4 \cdot 0,375 =$ [[  2,4  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 0,9 \cdot 0,12 =$ [[  0,108  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ 1,3 \cdot 2,5 =$ [[  3,25  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

