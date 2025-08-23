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

comment: Löse eine Sachaufgabe mit einer Holzplatte mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Holzplatte


Für eine Ausstellungsfläche wird eine Holzplatte als Rechteck verwendet.  
Die Länge beträgt $32\,\text{cm}$, die Breite ist $\dfrac{5}{12}$ der Länge.  
Von der gesamten Fläche wird zunächst $\dfrac{3}{8}$ für Befestigungen reserviert.  
Von der verbleibenden Fläche wird anschließend $\dfrac{1}{3}$ farbig lackiert.  
**Berechne** die am Ende nicht lackierte Nutzfläche als Bruch. 

<!-- data-solution-button="5"-->
[[  1600/9  ]] cm^2
@Algebrite.check(1600/9)
************
$$
\begin{align*}
\text{Breite:}\;& \dfrac{5}{12}\cdot 32\,\text{cm}
= \dfrac{160}{12}\,\text{cm}
= \dfrac{40}{3}\,\text{cm} \\[4pt]
\text{Gesamtfläche:}\;& 32\,\text{cm}\cdot \dfrac{40}{3}\,\text{cm}
= \dfrac{1280}{3}\,\text{cm}^2 \\[6pt]
\text{Reserviert:}\;& \dfrac{3}{8}\cdot \dfrac{1280}{3}\,\text{cm}^2
= \dfrac{1280}{8}\,\text{cm}^2
= 160\,\text{cm}^2 \\[4pt]
\text{Rest 1:}\;& \dfrac{1280}{3}\,\text{cm}^2 - 160\,\text{cm}^2
= \dfrac{1280-480}{3}\,\text{cm}^2
= \dfrac{800}{3}\,\text{cm}^2 \\[6pt]
\text{Lackiert:}\;& \dfrac{1}{3}\cdot \dfrac{800}{3}\,\text{cm}^2
= \dfrac{800}{9}\,\text{cm}^2 \\[4pt]
\text{Nicht lackiert:}\;& \dfrac{800}{3}\,\text{cm}^2 - \dfrac{800}{9}\,\text{cm}^2
= \dfrac{2400-800}{9}\,\text{cm}^2
= \dfrac{1600}{9}\,\text{cm}^2
\end{align*}
$$
************