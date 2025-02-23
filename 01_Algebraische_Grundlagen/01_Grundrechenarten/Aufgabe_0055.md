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
__$a)\;\;$__ $ 96:8 + 3 \cdot 5  =$ [[  27  ]]
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $ (9 + 2 \cdot 4) \cdot 3 =$ [[  51  ]]
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $ 6 \cdot 9 - 5 \cdot 5  =$ [[  38  ]]
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $ 13 + 7 \cdot 8  =$ [[  69  ]]
<br>
</div>
<div class="flex-child">
<br>
__$e)\;\;$__ $ 73 - 13 \cdot 4  =$ [[  21  ]]
<br>
</div>
<div class="flex-child">
<br>
__$f)\;\;$__ $ 108:12 + 85:5  =$ [[  26  ]]
<br>
</div>
</section>
<br>
<br>
<br>
<br>

