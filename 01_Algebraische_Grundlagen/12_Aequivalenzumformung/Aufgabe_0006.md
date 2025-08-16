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



tags: Äquivalenzumformung, Einheiten, Dezimalzahlen, sehr leicht, niedrig, Angeben, Bestimmen

comment: Löse Balkenwaagengleichungen.

author: Martin Lommatzsch

-->




# Balkenwaagengleichungen



**Bestimme** die Massenwert des Massestückchens $x$.


<!-- style="width:600px" -->
__$a)\;\;$__ ![](Kap2/waage1b.png)  
$x=$ [[  3    ]] kg

<!-- style="width:600px" -->
__$b)\;\;$__ ![](Kap2/waage1e.png)  
$x=$ [[  2    ]] kg

<!-- style="width:600px" -->
__$c)\;\;$__ ![](Kap2/waage1h.png)  
$x=$ [[  1,83  ]] kg












