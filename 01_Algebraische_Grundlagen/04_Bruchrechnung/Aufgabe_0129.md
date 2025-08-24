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

comment: Löse eine Sachaufgabe mit einem Sportplatz mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Sportplatz



Ein rechteckiger Sportplatz hat eine Länge von $30\,\text{m}$. Die Breite beträgt $\dfrac{2}{3}$ dieser Länge.  
Von der gesamten Fläche soll für ein Turnier nur $\dfrac{5}{6}$ genutzt werden, der Rest wird gesperrt.  
**Bestimme**, wie groß die gesperrte Fläche ist. 

<!-- data-solution-button="5"-->
[[  100  ]] m$^2$
************
$$
\text{Breite:}\quad \dfrac{2}{3}\cdot 30\,\text{m} = 20\,\text{m} \\
\text{Gesamtfläche:}\quad 30\,\text{m}\cdot 20\,\text{m} = 600\,\text{m}^2 \\
\text{Turnierfläche:}\quad \dfrac{5}{6}\cdot 600 = 500\,\text{m}^2 \\
\text{Gesperrt:}\quad 600-500 = 100\,\text{m}^2
$$
************
