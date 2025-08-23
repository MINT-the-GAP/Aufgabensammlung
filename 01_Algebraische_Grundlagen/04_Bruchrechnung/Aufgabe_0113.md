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

comment: Löse eine Sachaufgabe mit einem Benzintank mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Benzintank


Ein Tank enthält $60$ Liter Benzin. Davon werden $\dfrac{2}{5}$ verbraucht.  
**Bestimme**, wie viele Liter übrig bleiben. 

<!-- data-solution-button="5"-->
[[ 36 ]] l
************
$$
60\,\text{l} - \dfrac{2}{5}\cdot 60\,\text{l} = 60\,\text{l} - \dfrac{120}{5} = 60\,\text{l} - 24\,\text{l} = 36\,\text{l}
$$
************