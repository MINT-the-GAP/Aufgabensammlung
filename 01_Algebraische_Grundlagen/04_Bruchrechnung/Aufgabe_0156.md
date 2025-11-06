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

comment: Löse eine Sachaufgabe mit einer Laborreihe mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Laborreihe


Für eine Laborreihe werden Mischungen angesetzt.  
Pro Dose werden $\dfrac{2}{3}\,\ell$ Grundlösung und $\dfrac{3}{10}\,\ell$ Zusatzlösung kombiniert.  
Beim Ansetzen geht je Dose $\dfrac{1}{12}$ der Mischsumme als Verlust ab (die Mischsumme ist $\dfrac{2}{3}\,\ell+\dfrac{3}{10}\,\ell$).  
Es werden sechs Dosen hergestellt. Danach wird $\dfrac{3}{8}$ der bis dahin vorhandenen Gesamtmenge für Tests entnommen.  
Zum Schluss werden pro hergestellter Dose nochmals $\dfrac{1}{5}\,\ell$ destilliertes Wasser zugegeben.  
**Bestimme** das endgültige Volumen. 



<!-- data-solution-button="5"-->
[[  2171/480  ]] $\ell$
@Algebrite.check(2171/480)
************
$$
\begin{align*}
\text{Mischsumme je Dose:}\quad
& \dfrac{2}{3}\,\ell+\dfrac{3}{10}\,\ell
= \dfrac{20}{30}\,\ell+\dfrac{9}{30}\,\ell
= \dfrac{29}{30}\,\ell \\[6pt]
\text{Verlust je Dose:}\quad
& \dfrac{1}{12}\cdot\dfrac{29}{30}\,\ell
= \dfrac{29}{360}\,\ell \\[6pt]
\text{Je Dose nach Verlust:}\quad
& \left(\dfrac{29}{30}-\dfrac{29}{360}\right)\,\ell
= \dfrac{319}{360}\,\ell \\[6pt]
\text{Sechs Dosen:}\quad
& 6\cdot\dfrac{319}{360}\,\ell
= \dfrac{319}{60}\,\ell \\[6pt]
\text{Entnahme Tests:}\quad
& \left(1-\dfrac{3}{8}\right)\cdot\dfrac{319}{60}\,\ell
= \dfrac{5}{8}\cdot\dfrac{319}{60}\,\ell
= \dfrac{319}{96}\,\ell \\[6pt]
\text{Zugabe Wasser:}\quad
& 6\cdot\dfrac{1}{5}\,\ell
= \dfrac{6}{5}\,\ell
= \dfrac{576}{480}\,\ell \\[6pt]
\text{Endvolumen:}\quad
& \dfrac{319}{96}\,\ell + \dfrac{6}{5}\,\ell
= \dfrac{1595}{480}\,\ell + \dfrac{576}{480}\,\ell
= \dfrac{2171}{480}\,\ell
\end{align*}
$$
************