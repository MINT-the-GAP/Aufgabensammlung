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

comment: Löse eine Sachaufgabe mit Rechtecksseitenlängen mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Rechteckseitenlängen

Ein Rechteck hat eine Seite von $20$ cm. Die zweite Seite beträgt $\dfrac{2}{5}$ der ersten.  
**Bestimme** die Länge der zweiten Seite.  

<!-- data-solution-button="5"-->
[[  8  ]] cm
************
$$
\dfrac{2}{5}\cdot 20\,\text{cm}
= \dfrac{2}{5}\cdot \dfrac{20}{1}\,\text{cm}
= \dfrac{40}{5}\,\text{cm}
= 8\,\text{cm}
$$
************