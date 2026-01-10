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


tags: Vorrangsregeln, Grundrechenarten, leicht, niedrig, Angeben

comment: Bestimme den Wert des Terms im Kopf. Achte auf die Vorrangsregeln. 

author: Martin Lommatzsch

-->




# Vorrangsregeln bei natürlichen Zahlen

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $  7 \cdot 4 - 3 \cdot 6 =$ [[  10  ]]

</div>
<div class="flex-child">

__$b)\;\;$__ $  14 \cdot 9 + 6  =$ [[  132  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ $  7 + 3 \cdot 17  =$ [[  58  ]]

</div>
<div class="flex-child">

__$d)\;\;$__ $ 55:5 - 42:6  =$ [[  4  ]]

</div>
<div class="flex-child">

__$e)\;\;$__ $  11 \cdot 25 - 144:18  =$ [[  267  ]]

</div>
<div class="flex-child">

__$f)\;\;$__ $ 16 \cdot 5 - 51   =$ [[  29  ]]

</div>
</section>





