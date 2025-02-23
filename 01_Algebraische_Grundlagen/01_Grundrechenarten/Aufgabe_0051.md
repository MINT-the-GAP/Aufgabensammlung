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
<br>
__$a)\;\;$__ $  7 \cdot 8 - 14  =$ [[  42  ]]
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $ 2 + 3 \cdot 9  =$ [[  29  ]]
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $  4 \cdot  5 + 6 \cdot 3  =$ [[  38  ]]
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $  72 : 9 + 15  =$ [[  23  ]]
<br>
</div>
<div class="flex-child">
<br>
__$e)\;\;$__ $  48 - 36:4  =$ [[  39  ]]
<br>
</div>
<div class="flex-child">
<br>
__$f)\;\;$__ $ 41:7 + 15:7  =$ [[  56  ]]
<br>
</div>
</section>
<br>
<br>
<br>
<br>

