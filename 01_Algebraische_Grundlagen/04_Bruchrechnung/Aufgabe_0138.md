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

comment: Löse eine Sachaufgabe mit einem Vorratssilo mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Vorratssilo


Ein Vorratssilo enthält $90\,\text{kg}$ Getreide.  
Davon werden zunächst $\dfrac{2}{9}$ verfüttert.  
Von der verbleibenden Menge werden dann $\dfrac{3}{5}$ für den Verkauf abgefüllt.  
**Bestimme**, wie viele Kilogramm Getreide am Ende noch im Silo verbleiben. 

<!-- data-solution-button="5"-->
[[  30  ]] kg
************
$$
\text{Verfüttert: } \dfrac{2}{9}\cdot 90 = 20\,\text{kg} \\
\text{Rest: } 90-20 = 70\,\text{kg} \\
\text{Verkauf: } \dfrac{3}{5}\cdot 70 = 42\,\text{kg} \\
\text{Endbestand: } 70-42 = 28\,\text{kg}
$$
************