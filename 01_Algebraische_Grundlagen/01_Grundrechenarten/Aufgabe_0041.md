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


tags: Distributivgesetz, Division, leicht, niedrig, Angeben

comment: Der Wert des Terms ist gesucht, doch ist die Division nur mit dem Distributivgesetz zu lösen, wenn nur die natürlichen Zahlen bekannt sind. 

author: Martin Lommatzsch

-->




# Erzwungenes Distributivgesetz

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 65:7 - 16:7 =$ [[  7  ]]

</div>
<div class="flex-child">

__$b)\;\;$__ $ 23:9 + 58:9 =$ [[  9  ]]

</div>
</section>





