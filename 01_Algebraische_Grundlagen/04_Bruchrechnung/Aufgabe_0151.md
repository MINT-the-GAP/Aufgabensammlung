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

comment: Löse eine Sachaufgabe mit Ausstellungsrahmen mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Ausstellungsrahmen


Für eine Ausstellung werden vier identische Rahmen gebaut.  
Je Rahmen werden zunächst $\dfrac{5}{6}\,\text{m}$ Leisten für die langen Kanten und $\dfrac{1}{3}\,\text{m}$ für die kurzen Kanten benötigt.  
Zusätzlich wird pro Rahmen ein Verschnitt von $\dfrac{1}{8}$ der je Rahmen benötigten Leistenlänge einkalkuliert.  
Am Ende bleiben insgesamt $\dfrac{1}{2}\,\text{m}$ Rest übrig, der abgezogen wird.  
**Berechne** die gesamte tatsächlich benötigte Leistenlänge.  


<!-- data-solution-button="5"-->
[[  19/4  ]] m
@Algebrite.check(19/4)
************
$$
\begin{align*}
\text{Basis je Rahmen:}\quad 
&\left(\dfrac{5}{6} + \dfrac{1}{3}\right)\,\text{m}
= \left(\dfrac{5}{6} + \dfrac{2}{6}\right)\,\text{m}
= \dfrac{7}{6}\,\text{m} \\[4pt]
\text{Mit Verschnitt je Rahmen:}\quad
&\left(1+\dfrac{1}{8}\right)\cdot \dfrac{7}{6}\,\text{m}
= \dfrac{9}{8}\cdot \dfrac{7}{6}\,\text{m}
= \dfrac{63}{48}\,\text{m}
= \dfrac{21}{16}\,\text{m} \\[6pt]
\text{Für 4 Rahmen:}\quad 
&4\cdot \dfrac{21}{16}\,\text{m} 
= \dfrac{84}{16}\,\text{m}
= \dfrac{21}{4}\,\text{m} \\[6pt]
\text{Abzug Rest:}\quad 
&\dfrac{21}{4}\,\text{m} - \dfrac{1}{2}\,\text{m}
= \dfrac{21}{4}\,\text{m} - \dfrac{2}{4}\,\text{m}
= \dfrac{19}{4}\,\text{m}
\end{align*}
$$
************