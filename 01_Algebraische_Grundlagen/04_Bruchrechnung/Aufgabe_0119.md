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

comment: Löse eine Sachaufgabe mit einem Budget mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Budget

Ein Budget umfasst $50$ €. Davon werden $\dfrac{3}{5}$ verplant.  
**Bestimme** den verbleibenden Betrag.  

<!-- data-solution-button="5"-->
[[  20  ]] €
************
$$
50\,\text{€} - \dfrac{3}{5}\cdot 50\,\text{€}
= 50\,\text{€} - \dfrac{3}{5}\cdot \dfrac{50}{1}\,\text{€}
= 50\,\text{€} - \dfrac{150}{5}\,\text{€}
= 50\,\text{€} - 30\,\text{€}
= 20\,\text{€}
$$
************
