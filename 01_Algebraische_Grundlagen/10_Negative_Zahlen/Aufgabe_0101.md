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


tags: Division, Negative Zahlen, Dezimalzahlen, leicht, niedrig, Angeben

comment: Dividiere negative Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Division von negativen Dezimalzahlen

**Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ 0,25 : (-0,05) =$ [[  -5  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ -8,1 : (-9) =$ [[  0,9  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ -0,4:0,025 =$ [[  -16  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ -9,6 : (-120) =$ [[  0,08  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 5,5 : (-2,5) =$ [[  -2,2  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ -3,5:0,07 =$ [[  -50  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

