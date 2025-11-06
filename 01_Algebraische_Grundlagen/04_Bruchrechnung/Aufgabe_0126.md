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



tags: Bruchrechnung, Sachaufgabe, leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit einer Reinigungslösung mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Reinigungslösung



Für die Reinigung steht eine $5\,\ell$-Kanisterlösung bereit. Zuerst verschüttet sich $\dfrac{3}{10}$ des Inhalts, danach wird $\dfrac{1}{4}$ der verbleibenden Menge für die Gerätepflege genutzt.  
**Berechne** das restliche Volumen im Kanister. 

<!-- data-solution-button="5"-->
[[  21/8  ]] $\ell$
@Algebrite.check(21/8)
************
$$
\begin{align*}
\text{Verschüttet:}\quad & \dfrac{3}{10}\cdot 5\,\ell
= \dfrac{15}{10}\,\ell
= \dfrac{3}{2}\,\ell \\
\text{Rest 1:}\quad & 5\,\ell - \dfrac{3}{2}\,\ell
= \dfrac{10}{2}\,\ell - \dfrac{3}{2}\,\ell
= \dfrac{7}{2}\,\ell \\
\text{Verbrauch:}\quad & \dfrac{1}{4}\cdot \dfrac{7}{2}\,\ell
= \dfrac{7}{8}\,\ell \\
\text{Endrest:}\quad & \dfrac{7}{2}\,\ell - \dfrac{7}{8}\,\ell
= \dfrac{28}{8}\,\ell - \dfrac{7}{8}\,\ell
= \dfrac{21}{8}\,\ell
\end{align*}
$$
************