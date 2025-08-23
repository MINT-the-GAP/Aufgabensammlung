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

comment: Löse eine Sachaufgabe mit Fachböden mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Fachböden










Für eine Regalanlage werden identische Fachböden vorbereitet.  
Je Fachboden werden $\dfrac{4}{9}\,\text{m}$ Leiste für die Auflage und $\dfrac{5}{12}\,\text{m}$ für die Rückwand zugeschnitten.  
Zusätzlich wird pro Fachboden eine Verstärkung in Höhe von $\dfrac{1}{8}$ der Fachboden-Summe (Auflage plus Rückwand) angebracht.  
Es werden elf Fachböden hergestellt. Danach fällt beim Endbeschnitt ein Verlust von $\dfrac{1}{11}$ der bis dahin verwendeten Gesamtlänge an.  
Zum Schluss werden noch zwei Zusatzleisten zu je $\dfrac{3}{20}\,\text{m}$ ergänzt.  
**Berechne** die schließlich benötigte Leistenlänge.  \


<!-- data-solution-button="5"-->
[[  799/80  ]] m
@Algebrite.check(799/80)
************
$$
\begin{align*}
\text{Fachboden-Summe:}\quad
& \dfrac{4}{9}\,\text{m} + \dfrac{5}{12}\,\text{m}
= \left(\dfrac{16}{36} + \dfrac{15}{36}\right)\text{m}
= \dfrac{31}{36}\,\text{m} \\[6pt]
\text{Mit Verstärkung je Fachboden:}\quad
& \left(1+\dfrac{1}{8}\right)\cdot \dfrac{31}{36}\,\text{m}
= \dfrac{9}{8}\cdot \dfrac{31}{36}\,\text{m}
= \dfrac{31}{32}\,\text{m} \\[6pt]
\text{Für 11 Fachböden:}\quad
& 11\cdot \dfrac{31}{32}\,\text{m}
= \dfrac{341}{32}\,\text{m} \\[6pt]
\text{Endbeschnitt (Verlust } \dfrac{1}{11}\text{):}\quad
& \left(1-\dfrac{1}{11}\right)\cdot \dfrac{341}{32}\,\text{m}
= \dfrac{10}{11}\cdot \dfrac{341}{32}\,\text{m}
= \dfrac{155}{16}\,\text{m} \\[6pt]
\text{Zusatzleisten:}\quad
& 2\cdot \dfrac{3}{20}\,\text{m}
= \dfrac{3}{10}\,\text{m} \\[6pt]
\text{Endlänge:}\quad
& \dfrac{155}{16}\,\text{m} + \dfrac{3}{10}\,\text{m}
= \dfrac{775}{80}\,\text{m} + \dfrac{24}{80}\,\text{m}
= \dfrac{799}{80}\,\text{m}
\end{align*}
$$
************


