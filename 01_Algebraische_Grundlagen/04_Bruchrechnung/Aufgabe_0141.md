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

comment: Löse eine Sachaufgabe mit Gartenflächen mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Gartenfläche


Für einen Schulgarten wird eine rechteckige Fläche abgesteckt. Die Länge beträgt $18\,\text{m}$, die Breite ist $\dfrac{7}{12}$ der Länge.  
Zunächst werden für Beete $\dfrac{2}{3}$ der gesamten Rasenfläche vorgesehen.  
Von der verbleibenden Fläche wird anschließend $\dfrac{1}{5}$ für Wege reserviert.  
**Berechne** die am Ende nutzbare Gartenfläche. 

<!-- data-solution-button="5"-->
[[  252/5  ]] m^2
@Algebrite.check(252/5)
************
$$
\begin{align*}
\text{Breite:}\quad & \dfrac{7}{12}\cdot 18\,\text{m}
= \dfrac{7}{12}\cdot \dfrac{18}{1}\,\text{m}
= \dfrac{126}{12}\,\text{m}
= \dfrac{21}{2}\,\text{m} \\[4pt]
\text{Gesamtfläche:}\quad & 18\,\text{m}\cdot \dfrac{21}{2}\,\text{m}
= \dfrac{378}{2}\,\text{m}^2
= 189\,\text{m}^2 \\[4pt]
\text{Beete:}\quad & \dfrac{2}{3}\cdot 189\,\text{m}^2
= 126\,\text{m}^2 \\[4pt]
\text{Rest 1:}\quad & 189\,\text{m}^2 - 126\,\text{m}^2
= 63\,\text{m}^2 \\[4pt]
\text{Wege:}\quad & \dfrac{1}{5}\cdot 63\,\text{m}^2
= \dfrac{63}{5}\,\text{m}^2 \\[4pt]
\text{Nutzfläche:}\quad & 63\,\text{m}^2 - \dfrac{63}{5}\,\text{m}^2
= \dfrac{315}{5}\,\text{m}^2 - \dfrac{63}{5}\,\text{m}^2
= \dfrac{252}{5}\,\text{m}^2
\end{align*}
$$
************
