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

__$a)\;\;$__ $ -4 \cdot (-3) - (-5) \cdot (-7) =$ [[  -23  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 44 : (-11) - (-34) =$ [[  30  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ (-11) \cdot (-8) + (-53) =$ [[  35  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 65:(-13) + 6 \cdot (-7) =$ [[  -47  ]]

</div> 
</section>





