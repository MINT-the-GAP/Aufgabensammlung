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


tags: Dezimalzahlen, Prozent, sehr leicht, sehr niedrig, Angeben

comment: Wandle die Dezimalzahl in eine Prozentzahl um.

author: Martin Lommatzsch

-->




# Darstellung als Prozentzahlen

**Gib** den Wert des Terms als Prozentzahl **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ 0,26 =$ [[  26  ]]%
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 0,064 =$ [[  6,4  ]]%
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 2,5 =$ [[  250  ]]%
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 0,149 =$ [[  14,9  ]]%
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 0,0034 =$ [[  0,34  ]]%
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ 0,9405 =$ [[  94,05  ]]%
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

