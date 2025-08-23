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

comment: Löse eine Sachaufgabe mit Stoffmengen mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Stoffmenge


In einer Textilwerkstatt liegt eine Stoffrolle mit $50\,\text{m}$ Länge bereit.  
Zunächst wird ein Anteil von $\dfrac{3}{5}$ der gesamten Rolle für Vorhänge zugeschnitten.  
Aus der verbleibenden Stoffmenge wird anschließend noch $\dfrac{1}{4}$ für Tischdecken verwendet.  
**Berechne** die am Ende übrig bleibende Stofflänge. 

<!-- data-solution-button="5"-->
[[  15  ]] m
@Algebrite.check(15)
************
$$
\begin{align*}
\text{Erster Zuschnitt:}\;& \dfrac{3}{5}\cdot 50\,\text{m}
= \dfrac{150}{5}\,\text{m}
= 30\,\text{m} \\
\text{Rest 1:}\;& 50\,\text{m} - 30\,\text{m} = 20\,\text{m} \\
\text{Zweiter Zuschnitt:}\;& \dfrac{1}{4}\cdot 20\,\text{m}
= 5\,\text{m} \\
\text{Endrest:}\;& 20\,\text{m} - 5\,\text{m} = 15\,\text{m}
\end{align*}
$$
************