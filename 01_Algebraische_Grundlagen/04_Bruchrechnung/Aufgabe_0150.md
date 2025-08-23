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

comment: Löse eine Sachaufgabe mit modularen Beeten mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - modulare Beete


Ein modularer Garten besteht aus drei identischen Beeten.  
Jedes Beet setzt sich aus einer Hauptfläche mit Breite $\dfrac{4}{5}\,\text{m}$ und einer Seitenfläche mit Breite $\dfrac{1}{2}\,\text{m}$ zusammen; die Länge beträgt jeweils $6\,\text{m}$.  
Aus ästhetischen Gründen bleibt je Beet ein Randstreifen von $\dfrac{1}{10}$ der jeweiligen **Beetfläche** unbepflanzt.  
**Berechne** die gesamte bepflanzte Fläche der drei Beete. 

<!-- data-solution-button="5"-->
[[  1053/50  ]] m^2
@Algebrite.check(1053/50)
************
$$
\begin{align*}
\text{Beetfläche:}\quad & 6\,\text{m}\cdot\Big(\dfrac{4}{5}\,\text{m}+\dfrac{1}{2}\,\text{m}\Big)
= 6\cdot\Big(\dfrac{4}{5}+\dfrac{1}{2}\Big)\text{ m}^2 \\[2pt]
&= 6\cdot\Big(\dfrac{8}{10}+\dfrac{5}{10}\Big)\text{ m}^2
= 6\cdot\dfrac{13}{10}\,\text{m}^2
= \dfrac{78}{10}\,\text{m}^2
= \dfrac{39}{5}\,\text{m}^2 \\[6pt]
\text{Bepflanzt je Beet:}\quad & \Big(1-\dfrac{1}{10}\Big)\cdot\dfrac{39}{5}
= \dfrac{9}{10}\cdot\dfrac{39}{5}
= \dfrac{351}{50}\,\text{m}^2 \\[6pt]
\text{Gesamt (3 Beete):}\quad & 3\cdot\dfrac{351}{50}
= \dfrac{1053}{50}\,\text{m}^2
\end{align*}
$$
************