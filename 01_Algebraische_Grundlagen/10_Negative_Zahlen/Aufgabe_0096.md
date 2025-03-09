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


tags: Subtraktion, Negative Zahlen, Dezimalzahlen, leicht, niedrig, Angeben

comment: Subtrahiere negative Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Subtraktion von negativen Dezimalzahlen

**Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ -8,5-(-6,25) =$ [[  -2,25  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 3,6-(-1,1) =$ [[  4,7  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 1,25-(-3,67) =$ [[  4,92  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ -6,4-(-0,25) =$ [[  -6,15  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ -2,3-(-5,4) =$ [[  3,1  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ -4,75-(-2,17) =$ [[  -2,58  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

