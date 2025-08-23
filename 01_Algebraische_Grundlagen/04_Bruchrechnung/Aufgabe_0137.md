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

comment: Löse eine Sachaufgabe mit einem Grundstück mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Grundstück


Ein rechteckiges Grundstück ist $48\,\text{m}$ lang und $\dfrac{3}{4}$ so breit.  
Von der Fläche wird ein Teil als Garten angelegt, der $\dfrac{2}{3}$ der Gesamtfläche einnimmt.  
**Bestimme**, wie groß die Gartenfläche ist. 

<!-- data-solution-button="5"-->
[[  576  ]] m$^2$
************
$$
\text{Breite: } \dfrac{3}{4}\cdot 48 = 36\,\text{m} \\
\text{Fläche: } 48\cdot 36 = 1728\,\text{m}^2 \\
\text{Gartenfläche: } \dfrac{2}{3}\cdot 1728 = 576\,\text{m}^2
$$
************