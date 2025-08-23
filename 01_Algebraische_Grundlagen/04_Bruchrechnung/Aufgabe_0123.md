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

comment: Löse eine Sachaufgabe mit einer Werkhalle mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Werkhalle


In der Werkhalle liegt eine Papierrolle von $30\,\text{m}$ Länge bereit. Für einen Zuschnitt wird ein Anteil von $\dfrac{3}{10}$ der Rolle verwendet.  
**Bestimme** die Länge des zugeschnittenen Stücks. 

<!-- data-solution-button="5"-->
[[  9  ]] m
************
$$
\dfrac{3}{10}\cdot 30\,\text{m}
= \dfrac{3}{10}\cdot \dfrac{30}{1}\,\text{m}
= \dfrac{90}{10}\,\text{m}
= 9\,\text{m}
$$
************