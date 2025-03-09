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


tags: Multiplikation, Negative Zahlen, Dezimalzahlen, leicht, niedrig, Angeben

comment: Multipliziere negative Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Multiplikation von negativen Dezimalzahlen

**Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ -1,5 \cdot (-0,25) =$ [[  0,375  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 7,5 \cdot (-0,2) =$ [[  -1,5  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ -0,03 \cdot 0,8 =$ [[  -0,24  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 1,7 \cdot (-0,4) =$ [[  -0,68  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ -4,4 \cdot (-0,2) =$ [[  0,88  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ -0,8 \cdot (-0,09) =$ [[  0,072  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

