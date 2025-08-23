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

comment: Löse eine Sachaufgabe mit einer Zugteilstrecke mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Zugteilstrecke



Ein Zug fährt $180\,\text{km}$. Auf der ersten Teilstrecke werden $\dfrac{2}{5}$ der Gesamtlänge zurückgelegt.  
Von der verbleibenden Strecke werden anschließend nochmals $\dfrac{3}{4}$ gefahren.  
**Bestimme**, wie viele Kilometer am Ende noch übrig sind. 

<!-- data-solution-button="5"-->
[[  27  ]] km
************
$$
\text{Erste Strecke:}\quad \dfrac{2}{5}\cdot 180 = 72\,\text{km} \quad \Rightarrow \; 180-72=108\,\text{km} \\
\text{Zweite Strecke:}\quad \dfrac{3}{4}\cdot 108 = 81\,\text{km} \quad \Rightarrow \; 108-81=27\,\text{km} \\
\text{Rest: } 27\,\text{km}
$$
************
