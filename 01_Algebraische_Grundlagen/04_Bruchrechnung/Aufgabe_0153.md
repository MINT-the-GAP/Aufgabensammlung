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

comment: Löse eine Sachaufgabe mit einer Sammelaktion mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Sammelaktion



Für eine Sammelaktion bringt jede der acht Klassen denselben Beitrag:  
pro Klasse $\left(\dfrac{3}{5}\,\text{kg} + \dfrac{1}{4}\,\text{kg}\right)$ Papier.  
Von der gesamten eingesammelten Masse wird anschließend $\dfrac{1}{5}$ direkt recycelt.  
Der verbleibende Rest wird gleichmäßig auf sechs Kisten verteilt.  
**Berechne** die Masse pro Kiste als Bruch. 


<!-- data-solution-button="5"-->
[[  68/75  ]] kg
@Algebrite.check(68/75)
************
$$
\begin{align*}
\text{Pro Klasse:}\quad 
&\left(\dfrac{3}{5}+\dfrac{1}{4}\right)\,\text{kg}
= \left(\dfrac{12}{20}+\dfrac{5}{20}\right)\,\text{kg}
= \dfrac{17}{20}\,\text{kg} \\[4pt]
\text{Gesamt:}\quad 
&8\cdot \dfrac{17}{20}\,\text{kg}
= \dfrac{136}{20}\,\text{kg}
= \dfrac{34}{5}\,\text{kg} \\[6pt]
\text{Nach Recycling:}\quad 
&\left(1-\dfrac{1}{5}\right)\cdot \dfrac{34}{5}\,\text{kg}
= \dfrac{4}{5}\cdot \dfrac{34}{5}\,\text{kg}
= \dfrac{136}{25}\,\text{kg} \\[6pt]
\text{Gleichmäßig auf 6 Kisten:}\quad 
&\dfrac{136}{25}\,\text{kg} : 6
= \dfrac{136}{25}\,\text{kg} \cdot \dfrac{1}{6}
= \dfrac{136}{150}\,\text{kg}
= \dfrac{68}{75}\,\text{kg}
\end{align*}
$$
************
