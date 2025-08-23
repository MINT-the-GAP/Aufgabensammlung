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




tags: Bruchrechnung, Sachaufgabe, leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit einem Garten mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Garten


Ein rechteckiger Garten besitzt eine Länge von $18\,\text{m}$. Die Breite beträgt $\dfrac{3}{4}$ der Länge. Für ein Blumenbeet wird ein Anteil von $\dfrac{2}{5}$ der gesamten Fläche genutzt.  
**Berechne** die Fläche des Blumenbeets.  \

<!-- data-solution-button="5"-->
[[  486/5  ]] m$^2$
@Algebrite.check(486/5)
************
$$
\begin{align*}
\text{Breite:}\quad & \dfrac{3}{4}\cdot 18\,\text{m}
= \dfrac{54}{4}\,\text{m}
= \dfrac{27}{2}\,\text{m} \\
\text{Fläche ges.:}\quad & 18\,\text{m}\cdot \dfrac{27}{2}\,\text{m}
= \dfrac{486}{2}\,\text{m}^2
= 243\,\text{m}^2 \\
\text{Beet:}\quad & \dfrac{2}{5}\cdot 243\,\text{m}^2
= \dfrac{486}{5}\,\text{m}^2
\end{align*}
$$
************
