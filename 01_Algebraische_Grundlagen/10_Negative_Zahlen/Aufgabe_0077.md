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


tags: Vorrangsregeln, Negative Zahlen, leicht, niedrig, Angeben

comment: Rechne mit ganzen Zahlen im Kopf. Beachte die Vorrangsregeln.

author: Martin Lommatzsch

-->




# Vorrangsregeln mit ganzen Zahlen

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ -91 : (-7) + (-45) =$ [[  -32  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $  -56 - 6 \cdot (-4) =$ [[  -32  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ - 6 \cdot 3 - 4 \cdot (-8) =$ [[  14  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ -(-24)-(-8) \cdot (-5) =$ [[  -16  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

