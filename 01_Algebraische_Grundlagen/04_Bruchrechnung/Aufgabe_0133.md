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

comment: Löse eine Sachaufgabe mit einer Obstkiste mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Obstkiste

Eine Obstkiste wiegt $48\,\text{kg}$. Darin befinden sich Äpfel und Birnen.  
Die Äpfel machen $\dfrac{5}{12}$ der gesamten Masse aus. Von den restlichen Kilogramm entfallen $\dfrac{2}{3}$ auf Birnen.  
**Bestimme**, wie viele Kilogramm Obst weder Äpfel noch Birnen sind. 

<!-- data-solution-button="5"-->
[[  10  ]] kg
************
$$
\text{Äpfel:}\quad \dfrac{5}{12}\cdot 48 = 20\,\text{kg} \\
\text{Rest:}\quad 48-20 = 28\,\text{kg} \\
\text{Birnen:}\quad \dfrac{2}{3}\cdot 28 = 18\,\text{kg} \\
\text{Sonstiges: } 28-18 = 10\,\text{kg}
$$
************
