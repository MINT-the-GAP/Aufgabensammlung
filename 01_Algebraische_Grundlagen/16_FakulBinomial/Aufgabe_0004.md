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


tags: Binomialkoeffizient, sehr leicht, sehr niedrig, Angeben

comment: Gib den Wert des Terms mit Binomialkoeffizienten an.

author: Martin Lommatzsch

-->




# Rechnen mit Binomialkoeffizienten

**Gib** den Wert des Terms **an**

<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $  \left( \begin{array}{c} 6 \\ 5 \end{array} \right) = $ [[  6  ]]

</div>
<div class="flex-child">

__$b)\;\;$__ $  \left( \begin{array}{c} 9 \\ 7 \end{array} \right) = $ [[  36  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ $  \left( \begin{array}{c} 5 \\ 3 \end{array} \right) = $ [[  10  ]]

</div>
<div class="flex-child">

__$d)\;\;$__ $  \left( \begin{array}{c} 7 \\ 2 \end{array} \right) = $ [[  21  ]]

</div>
</section>







