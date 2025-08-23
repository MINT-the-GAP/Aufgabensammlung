<!--
version:  0.0.1

language: de

@style
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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md



tags: Bruchrechnung, Sachaufgabe, sehr leicht, sehr niedrig, Bestimmen

comment: Löse eine Sachaufgabe mit einem Reissack mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Reissack


Ein Reissack enthält $6$ kg. Für ein Projekt wird $\dfrac{5}{12}$ des Inhalts benötigt.  
**Bestimme** die benötigte Masse als Bruch.  

<!-- data-solution-button="5"-->
[[  5/2  ]] kg
@Algebrite.check(5/2)
************
$$
\dfrac{5}{12}\cdot 6\,\text{kg}
= \dfrac{5}{12}\cdot \dfrac{6}{1}\,\text{kg}
= \dfrac{30}{12}\,\text{kg}
= 30\,\text{kg}:12
= \dfrac{5}{2}\,\text{kg}
$$
************