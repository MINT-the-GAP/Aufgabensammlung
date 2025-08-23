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

comment: Löse eine Sachaufgabe mit einem Technikprojekt mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Technikprojekt


Für ein Technikprojekt steht ein Budget von $85\,\text{€}$ zur Verfügung.  
Zunächst werden für Materialien $\dfrac{3}{10}$ des Budgets ausgegeben.  
Später erhält die Gruppe eine Rückerstattung in Höhe von $\dfrac{1}{8}$ des **gesamten** Budgets (Gutschrift).  
**Berechne** den am Ende verfügbare Betrag als Bruch. 

<!-- data-solution-button="5"-->
[[  561/8  ]] €
@Algebrite.check(561/8)
************
$$
\begin{align*}
\text{Ausgabe:}\quad & \dfrac{3}{10}\cdot 85\,\text{€}
= \dfrac{255}{10}\,\text{€}
= \dfrac{51}{2}\,\text{€} \\[4pt]
\text{Rest nach Kauf:}\quad & 85\,\text{€} - \dfrac{51}{2}\,\text{€}
= \dfrac{170}{2}\,\text{€} - \dfrac{51}{2}\,\text{€}
= \dfrac{119}{2}\,\text{€} \\[4pt]
\text{Gutschrift:}\quad & \dfrac{1}{8}\cdot 85\,\text{€}
= \dfrac{85}{8}\,\text{€} \\[4pt]
\text{Endbetrag:}\quad & \dfrac{119}{2}\,\text{€} + \dfrac{85}{8}\,\text{€}
= \dfrac{476}{8}\,\text{€} + \dfrac{85}{8}\,\text{€}
= \dfrac{561}{8}\,\text{€}
\end{align*}
$$
************
