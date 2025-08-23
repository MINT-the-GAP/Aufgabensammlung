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



tags: Bruchrechnung, Sachaufgabe, sehr schwer, normal, Berechnen

comment: Löse eine Sachaufgabe mit einer Aktionsfläche mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Aktionsfläche




Für einen Schulhof wird eine rechteckige Aktionsfläche angelegt.  
Die Länge beträgt $27\,\text{m}$, die Breite ist $\dfrac{2}{3}$ der Länge.  
Zuerst werden für Spielfelder $\dfrac{5}{12}$ der gesamten Fläche markiert.  
Von der verbleibenden Fläche werden anschließend $\dfrac{3}{7}$ als Rasen angelegt.  
Zum Schluss wird ein Materialschuppen aufgebaut, der $\dfrac{1}{8}$ der Gesamtfläche beansprucht.  
**Berechne** die am Ende frei nutzbare Fläche (ohne Spielfelder, ohne Rasen, ohne Schuppen). 

<!-- data-solution-button="5"-->
[[  405/4  ]] m$^2$
@Algebrite.check(405/4)
************
$$
\begin{align*}
\text{Breite:}\quad
& \dfrac{2}{3}\cdot 27\,\text{m}
= 18\,\text{m} \\[4pt]
\text{Gesamtfläche:}\quad
& 27\,\text{m}\cdot 18\,\text{m}
= 486\,\text{m}^2 \\[6pt]
\text{Spielfelder:}\quad
& \dfrac{5}{12}\cdot 486\,\text{m}^2
= \dfrac{5}{12}\cdot \dfrac{486}{1}\,\text{m}^2
= \dfrac{2430}{12}\,\text{m}^2
= \dfrac{405}{2}\,\text{m}^2 \\[6pt]
\text{Rest 1:}\quad
& 486\,\text{m}^2 - \dfrac{405}{2}\,\text{m}^2
= \dfrac{972}{2}\,\text{m}^2 - \dfrac{405}{2}\,\text{m}^2
= \dfrac{567}{2}\,\text{m}^2 \\[6pt]
\text{Rasen:}\quad
& \dfrac{3}{7}\cdot \dfrac{567}{2}\,\text{m}^2
= \dfrac{1701}{14}\,\text{m}^2 \\[6pt]
\text{Rest 2:}\quad
& \dfrac{567}{2}\,\text{m}^2 - \dfrac{1701}{14}\,\text{m}^2
= \left(\dfrac{3969}{14}-\dfrac{1701}{14}\right)\text{m}^2
= \dfrac{2268}{14}\,\text{m}^2
= 162\,\text{m}^2 \\[6pt]
\text{Schuppen:}\quad
& \dfrac{1}{8}\cdot 486\,\text{m}^2
= \dfrac{243}{4}\,\text{m}^2 \\[6pt]
\text{Frei nutzbar:}\quad
& 162\,\text{m}^2 - \dfrac{243}{4}\,\text{m}^2
= \dfrac{648}{4}\,\text{m}^2 - \dfrac{243}{4}\,\text{m}^2
= \dfrac{405}{4}\,\text{m}^2
\end{align*}
$$
************

