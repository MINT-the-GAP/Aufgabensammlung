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
<br>
__$a)\;\;$__ $ 8,4:1,2 =$ [[  6  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 5:0,2 =$ [[  25  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 0,81:0,009 =$ [[  90  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 12,5:5 =$ [[  2,5  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 0,64:80 =$ [[  0,008  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ 0,125:0,1 =$ [[  1,25  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

