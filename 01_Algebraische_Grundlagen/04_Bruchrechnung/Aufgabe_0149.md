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

comment: Löse eine Sachaufgabe mit Rahmenleisten mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Rahmenleisten


Für ein Ausstellungsmodell werden Rahmen gebaut.  
Jeder Rahmen benötigt $\dfrac{3}{2}\,\text{m}$ Leisten für die langen Kanten und $\dfrac{3}{4}\,\text{m}$ für die kurzen Kanten.  
Beim Anpassen fällt pro Rahmen Verschnitt von $\dfrac{1}{6}\,\text{m}$ an, der von der benötigten Länge abgezogen wird.  
Es werden $4$ identische Rahmen gefertigt.  
**Berechne** die gesamte tatsächlich benötigte Leistenlänge. 

<!-- data-solution-button="5"-->
[[  25/3  ]] m
@Algebrite.check(25/3)
************
$$
\begin{align*}
\text{Term:}\quad & 4\cdot\Big( \big(\dfrac{3}{2}+\dfrac{3}{4}\big)\text{ m} - \dfrac{1}{6}\,\text{m} \Big) \\[4pt]
\text{Klammer:}\quad & \dfrac{3}{2}+\dfrac{3}{4}=\dfrac{6}{4}+\dfrac{3}{4}=\dfrac{9}{4} \\
&\Rightarrow \; 4\cdot\Big(\dfrac{9}{4}\,\text{m} - \dfrac{1}{6}\,\text{m}\Big)
= 4\cdot\Big(\dfrac{27}{12}-\dfrac{2}{12}\Big)\text{ m} \\
&= 4\cdot\dfrac{25}{12}\,\text{m}
= \dfrac{100}{12}\,\text{m}
= \dfrac{25}{3}\,\text{m}
\end{align*}
$$
************
