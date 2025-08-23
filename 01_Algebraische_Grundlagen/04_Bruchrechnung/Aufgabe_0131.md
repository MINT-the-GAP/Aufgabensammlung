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

comment: Löse eine Sachaufgabe mit Heften mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Hefte



Eine Schulklasse soll neue Hefte bekommen. Insgesamt werden $60$ Hefte geliefert.  
Zuerst verteilt die Lehrerin $\dfrac{1}{3}$ der Hefte an die Schülerinnen.  
Von den verbleibenden Heften werden später $\dfrac{1}{2}$ an die Schüler verteilt.  
**Bestimme**, wie viele Hefte am Ende noch übrig bleiben. 

<!-- data-solution-button="5"-->
[[  20  ]] Hefte
************
$$
\text{Erste Verteilung:}\quad \dfrac{1}{3}\cdot 60 = 20 \quad \Rightarrow \; 60-20=40 \text{ Hefte} \\
\text{Zweite Verteilung:}\quad \dfrac{1}{2}\cdot 40 = 20 \quad \Rightarrow \; 40-20=20 \text{ Hefte} \\
\text{Rest: } 20 \text{ Hefte}
$$
************