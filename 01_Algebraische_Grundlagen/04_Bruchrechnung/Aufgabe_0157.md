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

comment: Löse eine Sachaufgabe mit Montagesets mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Montagesets



Für eine Kleinserie werden identische Montagesets vorbereitet.  
Pro Set werden für die Grundplatte $\dfrac{3}{4}\,\text{m}$ Metallleiste und für die Verstärkung $\dfrac{2}{5}\,\text{m}$ zusätzlich benötigt.  
Je Set kommt ein Verstärkungszuschlag in Höhe von $\dfrac{1}{6}$ der Set-Grundlänge (Summe aus Grundplatte und Verstärkung) hinzu.  
Es werden sechs Sets fertiggestellt. Anschließend werden $\dfrac{2}{9}$ der bis dahin insgesamt verwendeten Länge als Ausschuss verworfen.  
Zum Schluss können $\dfrac{1}{4}\,\text{m}$ aus Reststücken wiederverwendet werden (werden addiert).  
**Berechne** die schließlich benötigte Leistenlänge.  

<!-- data-solution-button="5"-->
[[  293/45  ]] m
@Algebrite.check(293/45)
************
$$
\begin{align*}
\text{Set-Grundlänge:}\quad
& \dfrac{3}{4}\,\text{m} + \dfrac{2}{5}\,\text{m}
= \left(\dfrac{15}{20}+\dfrac{8}{20}\right)\text{m}
= \dfrac{23}{20}\,\text{m} \\[6pt]
\text{Zuschlag je Set:}\quad
& \dfrac{1}{6}\cdot \dfrac{23}{20}\,\text{m}
= \dfrac{23}{120}\,\text{m} \\[6pt]
\text{Summe je Set:}\quad
& \dfrac{23}{20}\,\text{m} + \dfrac{23}{120}\,\text{m}
= \left(\dfrac{138}{120}+\dfrac{23}{120}\right)\text{m}
= \dfrac{161}{120}\,\text{m} \\[6pt]
\text{Vor Ausschuss (6 Sets):}\quad
& 6\cdot \dfrac{161}{120}\,\text{m}
= \dfrac{161}{20}\,\text{m} \\[6pt]
\text{Nach Ausschuss:}\quad
& \left(1-\dfrac{2}{9}\right)\cdot \dfrac{161}{20}\,\text{m}
= \dfrac{7}{9}\cdot \dfrac{161}{20}\,\text{m}
= \dfrac{1127}{180}\,\text{m} \\[6pt]
\text{Reststücke addieren:}\quad
& \dfrac{1127}{180}\,\text{m} + \dfrac{1}{4}\,\text{m}
= \dfrac{1127}{180}\,\text{m} + \dfrac{45}{180}\,\text{m}
= \dfrac{1172}{180}\,\text{m}
= \dfrac{293}{45}\,\text{m}
\end{align*}
$$
************


