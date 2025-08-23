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



tags: Bruchrechnung, Sachaufgabe, schwer, normal, Berechnen

comment: Löse eine Sachaufgabe mit Musterstücken mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Musterstücke

In einer Werkstatt sollen identische Musterstücke aus Stoff vorbereitet werden.  
Pro Musterstück werden $\dfrac{2}{3}\,\text{m}$ Stoff für die Fläche und zusätzlich $\dfrac{1}{4}\,\text{m}$ für Säume benötigt.  
Es werden $3$ Musterstücke gefertigt; anschließend wird für eine Probe noch $\dfrac{1}{2}\,\text{m}$ Stoff bereitgelegt.  
**Berechne** die gesamte Stofflänge. 

<!-- data-solution-button="5"-->
[[  13/4  ]] m
@Algebrite.check(13/4)
************
$$
\begin{align*}
\text{Term:}\quad & 3\cdot\Big(\dfrac{2}{3}\,\text{m}+\dfrac{1}{4}\,\text{m}\Big)+\dfrac{1}{2}\,\text{m} \\[4pt]
\text{(Distributivgesetz)}\quad & = 3\cdot\dfrac{2}{3}\,\text{m} + 3\cdot\dfrac{1}{4}\,\text{m} + \dfrac{1}{2}\,\text{m} \\
&= 2\,\text{m} + \dfrac{3}{4}\,\text{m} + \dfrac{1}{2}\,\text{m}
= 2\,\text{m} + \Big(\dfrac{3}{4}+\dfrac{2}{4}\Big)\text{m} \\
&= 2\,\text{m} + \dfrac{5}{4}\,\text{m}
= \dfrac{8}{4}\,\text{m} + \dfrac{5}{4}\,\text{m}
= \dfrac{13}{4}\,\text{m}
\end{align*}
$$
************

