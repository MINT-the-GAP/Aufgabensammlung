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
__$a)\;\;$__ $ 9,6:0,12 =$ [[  80  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 0,85:1,7 =$ [[  0,5  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 1,11:8,88 =$ [[  0,125  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 6,25:2,5 =$ [[  2,5  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $6,3 :9 =$ [[  0,7  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ 0,002:0,1 =$ [[  0,02  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

