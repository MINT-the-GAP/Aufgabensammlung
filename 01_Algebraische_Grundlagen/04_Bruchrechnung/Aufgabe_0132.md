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

comment: Löse eine Sachaufgabe mit einem Schulfest mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Schulfest

Ein rechteckiger Garten ist $24\,\text{m}$ lang. Die Breite beträgt $\dfrac{5}{8}$ der Länge.  
Für ein Schulfest wird $\dfrac{3}{4}$ der gesamten Gartenfläche genutzt.  
**Bestimme**, wie viele Quadratmeter nicht genutzt werden. 

<!-- data-solution-button="5"-->
[[  90  ]] m$^2$
************
$$
\text{Breite:}\quad \dfrac{5}{8}\cdot 24 = 15\,\text{m} \\
\text{Fläche:}\quad 24\cdot 15 = 360\,\text{m}^2 \\
\text{Nutzung:}\quad \dfrac{3}{4}\cdot 360 = 270\,\text{m}^2 \\
\text{Nicht genutzt: } 360-270 = 90\,\text{m}^2
$$
************
