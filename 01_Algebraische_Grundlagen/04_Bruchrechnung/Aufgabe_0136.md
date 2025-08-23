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

comment: Löse eine Sachaufgabe mit einem Schwimmbecken mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Schwimmbecken

Ein Schwimmbecken fasst $120\,\text{m}^3$ Wasser.  
Zunächst wird es zu $\dfrac{5}{6}$ gefüllt.  
Dann werden $\dfrac{3}{10}$ des gefüllten Wassers wieder abgelassen.  
**Bestimme**, wie viele Kubikmeter Wasser nun im Becken sind. 

<!-- data-solution-button="5"-->
[[  70  ]] m$^3$
************
$$
\text{Gefüllt: } \dfrac{5}{6}\cdot 120 = 100\,\text{m}^3 \\
\text{Abgelassen: } \dfrac{3}{10}\cdot 100 = 30\,\text{m}^3 \\
\text{Rest: } 100-30 = 70\,\text{m}^3
$$
************
