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

comment: Löse eine Sachaufgabe mit Flüssigkeitsvolumen mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Flüssigkeitsvolumen


In einem Labor steht ein Kanister mit $25\,\ell$ Desinfektionslösung.  
Zunächst werden $\dfrac{3}{10}$ der gesamten Menge entnommen.  
Am Abend wird eine feste Nachfüllmenge von $\dfrac{1}{8}$ des vollen Kanisters wieder aufgefüllt.  
**Berechne** das Flüssigkeitsvolumen im Kanister am Ende des Tages als Bruch. 

<!-- data-solution-button="5"-->
[[  165/8  ]]  $\ell$
@Algebrite.check(165/8)
************
$$
\begin{align*}
\text{Entnahme:}\;& \dfrac{3}{10}\cdot 25\,\ell
= \dfrac{75}{10}\,\ell
= \dfrac{15}{2}\,\ell \\[4pt]
\text{Rest nach Entnahme:}\;& 25\,\ell - \dfrac{15}{2}\,\ell
= \dfrac{50}{2}\,\ell - \dfrac{15}{2}\,\ell
= \dfrac{35}{2}\,\ell \\[4pt]
\text{Nachfüllung (fest):}\;& \dfrac{1}{8}\cdot 25\,\ell
= \dfrac{25}{8}\,\ell \\[4pt]
\text{Endmenge:}\;& \dfrac{35}{2}\,\ell + \dfrac{25}{8}\,\ell
= \dfrac{140}{8}\,\ell + \dfrac{25}{8}\,\ell
= \dfrac{165}{8}\,\ell
\end{align*}
$$
************
