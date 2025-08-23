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

comment: Löse eine Sachaufgabe mit einer Pizza mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Pizza


Eine Pizza wird in $16$ gleich große Stücke geteilt. $\dfrac{3}{8}$ der Pizza werden gegessen.  
**Bestimme**, wie viele Stücke das sind. 

<!-- data-solution-button="5"-->
[[  6  ]]
@Algebrite.check(6)
************
$$
\dfrac{3}{8}\cdot 16 &= \dfrac{3}{8}\cdot \dfrac{16}{1}  \\
  & = \dfrac{48}{8}  \\
  & = 48:8  \\
  & = 6
$$
************