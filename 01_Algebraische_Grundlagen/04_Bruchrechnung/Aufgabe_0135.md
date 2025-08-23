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



tags: Bruchrechnung, Sachaufgabe, leicht, niedrig, Bestimmen

comment: Löse eine Sachaufgabe mit Zeitschriften mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Zeitschriften


Eine Schulbibliothek besitzt $240$ Bücher. Davon sind $\dfrac{3}{8}$ Romane.  
Von den verbleibenden Büchern sind $\dfrac{2}{5}$ Sachbücher, der Rest sind Zeitschriften.  
**Bestimme**, wie viele Zeitschriften es gibt. 

<!-- data-solution-button="5"-->
[[  90  ]] Zeitschriften
************
$$
\text{Romane: } \dfrac{3}{8}\cdot 240 = 90 \\
\text{Rest: } 240 - 90 = 150 \\
\text{Sachbücher: } \dfrac{2}{5}\cdot 150 = 60 \\
\text{Zeitschriften: } 150 - 60 = 90
$$
************

