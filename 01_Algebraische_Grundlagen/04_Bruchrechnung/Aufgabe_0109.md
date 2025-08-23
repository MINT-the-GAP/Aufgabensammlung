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

comment: Löse eine Sachaufgabe mit Arbeitszeit mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Arbeitszeit


Eine Arbeitszeit beträgt $90$ Minuten. Davon sind $\dfrac{3}{10}$ Pause.  
**Bestimme**, wie viele Minuten gearbeitet werden. 

<!-- data-solution-button="5"-->
[[  63  ]] min
************
$$
90\,\text{min} - \dfrac{3}{10}\cdot 90\,\text{min}
= 90\,\text{min} - \dfrac{3}{10}\cdot \dfrac{90}{1}\,\text{min}
= 90\,\text{min} - \dfrac{270}{10}\,\text{min}
= 90\,\text{min} - 27\,\text{min}
= 63\,\text{min}
$$
************