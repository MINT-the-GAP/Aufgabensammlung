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

comment: Löse eine Sachaufgabe mit einem Wasserbecken mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Wasserbecken


Ein Wasserbecken fasst insgesamt $120\,\text{l}$. Am Morgen wird es nur zu $\dfrac{2}{5}$ gefüllt.  
Im Laufe des Tages werden zusätzlich $\dfrac{1}{4}$ des **vollen Beckens** nachgefüllt.  
**Bestimme**, wie viele Liter Wasser am Abend im Becken sind. 

<!-- data-solution-button="5"-->
[[  76  ]] l
************
$$
\text{Morgenfüllung:}\quad \dfrac{2}{5}\cdot 120 = 48\,\text{l} \\
\text{Nachfüllung:}\quad \dfrac{1}{4}\cdot 120 = 30\,\text{l} \\
\text{Gesamt:}\quad 48\,\text{l} + 30\,\text{l} = 78\,\text{l}
$$
************
