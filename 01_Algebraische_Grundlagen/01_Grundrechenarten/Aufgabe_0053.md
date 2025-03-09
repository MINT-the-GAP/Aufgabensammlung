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
__$a)\;\;$__ $ 6 \cdot 4 \cdot 3  - 33 =$ [[  39  ]]
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $ 83 - 5 \cdot 9  =$ [[  38  ]]
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $ 63 : 7 + 75:5  =$ [[  24  ]]
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $ 5 \cdot 7 + 32:8  =$ [[  39  ]]
<br>
</div>
<div class="flex-child">
<br>
__$e)\;\;$__ $ (24+36) \cdot 3  =$ [[  180  ]]
<br>
</div>
<div class="flex-child">
<br>
__$f)\;\;$__ $  (2 + 9) \cdot ( 16 - 7)  =$ [[  99  ]]
<br>
</div>
</section>
<br>
<br>
<br>
<br>

