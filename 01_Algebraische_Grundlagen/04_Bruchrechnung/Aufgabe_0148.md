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

comment: Löse eine Sachaufgabe mit Reinigungsmischungenn mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Reinigungsmischungen


In einem Labor werden Reinigungsmischungen angesetzt.  
Eine Mischung besteht aus $\dfrac{3}{8}\,\ell$ Lösung A und $\dfrac{1}{4}\,\ell$ Lösung B.  
Es werden $6$ Mischungen hergestellt; danach werden für Tests $\dfrac{2}{3}\,\ell$ des **Gesamtergebnisses** entnommen.  
**Bestimme** die verbleibende Flüssigkeitsmenge. 

<!-- data-solution-button="5"-->
[[  37/12  ]] l
@Algebrite.check(37/12)
************
$$
\begin{align*}
\text{Term:}\quad & 6\cdot\Big(\dfrac{3}{8}\,\ell+\dfrac{1}{4}\,\ell\Big)-\dfrac{2}{3}\,\ell \\[4pt]
\text{(Distributivgesetz)}\quad & = 6\cdot\dfrac{3}{8}\,\ell + 6\cdot\dfrac{1}{4}\,\ell - \dfrac{2}{3}\,\ell \\
&= \dfrac{18}{8}\,\ell + \dfrac{6}{4}\,\ell - \dfrac{2}{3}\,\ell
= \dfrac{9}{4}\,\ell + \dfrac{3}{2}\,\ell - \dfrac{2}{3}\,\ell \\
&= \Big(\dfrac{9}{4}+\dfrac{6}{4}\Big)\ell - \dfrac{2}{3}\,\ell
= \dfrac{15}{4}\,\ell - \dfrac{2}{3}\,\ell \\
&= \dfrac{45}{12}\,\ell - \dfrac{8}{12}\,\ell
= \dfrac{37}{12}\,\ell
\end{align*}
$$
************