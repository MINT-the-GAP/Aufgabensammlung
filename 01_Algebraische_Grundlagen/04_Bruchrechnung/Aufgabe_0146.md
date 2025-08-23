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

comment: Löse eine Sachaufgabe mit einer Tagesetappe eines Busses mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Tagesetappe


Eine Buslinie hat eine Tagesetappe von $54\,\text{km}$.  
Am Morgen werden $\dfrac{4}{9}$ der Gesamtdistanz gefahren.  
Von der verbleibenden Strecke wird nach der Pause nochmals $\dfrac{5}{12}$ zurückgelegt.  
**Berechne** die am Ende noch ausstehende Strecke als Bruch. 

<!-- data-solution-button="5"-->
[[  35/2  ]] km
@Algebrite.check(35/2)
************
$$
\begin{align*}
\text{Morgens:}\;& \dfrac{4}{9}\cdot 54\,\text{km}
= \dfrac{216}{9}\,\text{km}
= 24\,\text{km} \\[4pt]
\text{Rest 1:}\;& 54\,\text{km} - 24\,\text{km} = 30\,\text{km} \\[6pt]
\text{Nach der Pause:}\;& \dfrac{5}{12}\cdot 30\,\text{km}
= \dfrac{150}{12}\,\text{km}
= \dfrac{25}{2}\,\text{km} \\[4pt]
\text{Endrest:}\;& 30\,\text{km} - \dfrac{25}{2}\,\text{km}
= \dfrac{60}{2}\,\text{km} - \dfrac{25}{2}\,\text{km}
= \dfrac{35}{2}\,\text{km}
\end{align*}
$$
************

