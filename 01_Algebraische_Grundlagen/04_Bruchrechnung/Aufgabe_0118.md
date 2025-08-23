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

comment: Löse eine Sachaufgabe mit einer markierten Strecke mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - markierte Strecke

Eine Strecke ist $18$ cm lang. Davon werden $\dfrac{2}{3}$ markiert, der Rest bleibt unmarkiert.  
**Bestimme** die unmarkierte Länge.  

<!-- data-solution-button="5"-->
[[  6  ]] cm
@Algebrite.check(6)
************
$$
18\,\text{cm} - \dfrac{2}{3}\cdot 18\,\text{cm}
= 18\,\text{cm} - \dfrac{2}{3}\cdot \dfrac{18}{1}\,\text{cm}
= 18\,\text{cm} - \dfrac{36}{3}\,\text{cm}
= 18\,\text{cm} - 12\,\text{cm}
= 6\,\text{cm}
$$
************
