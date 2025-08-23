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

comment: Löse eine Sachaufgabe einer Wanderung mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Wanderung


Eine Strecke ist $15$ km lang. Davon werden $\dfrac{2}{5}$ mit dem Bus zurückgelegt, der Rest zu Fuß.  
**Bestimme**, wie viele Kilometer zu Fuß gegangen werden.  

<!-- data-solution-button="5"-->
[[  9  ]] km
************
$$
15\,\text{km} - \dfrac{2}{5}\cdot 15\,\text{km}
= 15\,\text{km} - \dfrac{2}{5}\cdot \dfrac{15}{1}\,\text{km}
= 15\,\text{km} - \dfrac{30}{5}\,\text{km}
= 15\,\text{km} - 6\,\text{km}
= 9\,\text{km}
$$
************