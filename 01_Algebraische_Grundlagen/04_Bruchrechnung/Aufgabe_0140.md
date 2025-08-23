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



tags: Bruchrechnung, Sachaufgabe, mittel, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit Teiglingen mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Teiglinge

In der Backstube steht ein Mehlsack mit $24\,\text{kg}$.  
Am Vormittag werden für Teiglinge $\dfrac{3}{8}$ der Gesamtmasse verbraucht.  
Am Nachmittag wird für eine zweite Charge die Hälfte der verbleibenden Masse genutzt.  
**Berechne** die am Ende noch vorhandene Mehlmenge als Bruch. 

<!-- data-solution-button="5"-->
[[  15/2  ]] kg
@Algebrite.check(15/2)
************
$$
\begin{align*}
\text{Vormittag:}\quad & \dfrac{3}{8}\cdot 24\,\text{kg}
= \dfrac{72}{8}\,\text{kg}
= 9\,\text{kg} \\[4pt]
\text{Rest 1:}\quad & 24\,\text{kg} - 9\,\text{kg} = 15\,\text{kg} \\[4pt]
\text{Nachmittag:}\quad & \dfrac{1}{2}\cdot 15\,\text{kg}
= \dfrac{15}{2}\,\text{kg} \\[4pt]
\text{Rest ges.:}\quad & 15\,\text{kg} - \dfrac{15}{2}\,\text{kg}
= \dfrac{30}{2}\,\text{kg} - \dfrac{15}{2}\,\text{kg}
= \dfrac{15}{2}\,\text{kg}
\end{align*}
$$
************
