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


tags: Subtraktion, Dezimalzahlen, sehr leicht, sehr niedrig, Angeben

comment: Subtrahiere Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Subtraktion von Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ 5,14-2,8 =$ [[  2,34  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 6,84-2,38 =$ [[  4,46  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 6,08-0,97 =$ [[  5,11  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 1,34-0,809 =$ [[  0,531  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 4,78-2,54 =$ [[  2,24  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ 5,97-2,64 =$ [[  3,33  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

