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



tags: Bruchrechnung, Sachaufgabe, leicht, sehr niedrig, Bestimmen

comment: Löse eine Sachaufgabe mit einem Läufer mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Läufer


Ein Läufer hat eine Strecke von $18$ km zurückzulegen. Am Vormittag läuft er $\dfrac{5}{9}$ der Strecke.  
**Bestimme**, wie viele Kilometer am Nachmittag noch zu laufen sind. 

<!-- data-solution-button="5"-->
[[ 8 ]] km
************
$$
18\,\text{km} - \dfrac{5}{9}\cdot 18\,\text{km} = 18\,\text{km} - 10\,\text{km} = 8\,\text{km}
$$
************