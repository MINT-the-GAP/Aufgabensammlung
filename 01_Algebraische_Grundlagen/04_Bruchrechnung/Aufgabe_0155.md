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

comment: Löse eine Sachaufgabe mit Stoff-Kits mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Stoff-Kits

Für eine Materialserie werden identische Stoff-Kits vorbereitet.  
Je Kit werden $\dfrac{7}{12}\,\text{m}$ Stoff für die Außenflächen und $\dfrac{3}{8}\,\text{m}$ für das Innenfutter bereitgelegt.  
Pro Kit fällt zusätzlich Verschnitt in Höhe von $\dfrac{1}{6}$ der Kit-Grundlänge an (die Kit-Grundlänge ist die Summe aus Außen- und Innenanteil).  
Es werden fünf Kits gefertigt. Zusätzlich werden drei Teststreifen geschnitten, wobei jeder Teststreifen $\dfrac{1}{4}$ der Kit-Grundlänge entspricht (ohne Verschnitt).  
Von der bis dahin vorbereiteten Gesamtlänge werden anschließend $\dfrac{2}{15}$ zurückgegeben. Zum Abschluss kommen $\dfrac{1}{5}\,\text{m}$ aus Restbeständen dazu.  
**Berechne** die schließlich benötigte Stofflänge. 


<!-- data-solution-button="5"-->
[[  4897/864  ]] m
@Algebrite.check(4897/864)
************
$$
\begin{align*}
\text{Kit-Grundlänge:}\quad 
& \dfrac{7}{12}\,\text{m}+\dfrac{3}{8}\,\text{m}
= \dfrac{14}{24}\,\text{m}+\dfrac{9}{24}\,\text{m}
= \dfrac{23}{24}\,\text{m} \\[6pt]
\text{Verschnitt je Kit:}\quad 
& \dfrac{1}{6}\cdot \dfrac{23}{24}\,\text{m}
= \dfrac{23}{144}\,\text{m} \\[6pt]
\text{Je Kit inkl. Verschnitt:}\quad 
& \dfrac{23}{24}\,\text{m}+\dfrac{23}{144}\,\text{m}
= \dfrac{161}{144}\,\text{m} \\[6pt]
\text{Fünf Kits:}\quad 
& 5\cdot\dfrac{161}{144}\,\text{m}
= \dfrac{805}{144}\,\text{m} \\[6pt]
\text{Drei Teststreifen:}\quad 
& 3\cdot\left(\dfrac{1}{4}\cdot\dfrac{23}{24}\right)\,\text{m}
= 3\cdot\dfrac{23}{96}\,\text{m}
= \dfrac{23}{32}\,\text{m} \\[6pt]
\text{Zwischensumme:}\quad 
& \dfrac{805}{144}\,\text{m}+\dfrac{23}{32}\,\text{m}
= \dfrac{1817}{288}\,\text{m} \\[6pt]
\text{Rückgabe:}\quad 
& \left(1-\dfrac{2}{15}\right)\cdot\dfrac{1817}{288}\,\text{m}
= \dfrac{13}{15}\cdot\dfrac{1817}{288}\,\text{m}
= \dfrac{23621}{4320}\,\text{m} \\[6pt]
\text{Restbestand hinzu:}\quad 
& \dfrac{23621}{4320}\,\text{m}+\dfrac{1}{5}\,\text{m}
= \dfrac{23621}{4320}\,\text{m}+\dfrac{864}{4320}\,\text{m} \\[4pt]
&= \dfrac{24485}{4320}\,\text{m}
= \dfrac{4897}{864}\,\text{m}
\end{align*}
$$
************