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

comment: Löse eine Sachaufgabe mit einem Vorratstank mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Vorratstank


Ein Vorratstank enthält zu Beginn $48\,\text{l}$ Wasser. Am Vormittag werden $\dfrac{3}{8}$ des Inhalts verwendet, am Nachmittag danach $\dfrac{1}{4}$ des verbleibenden Inhalts.  
**Berechne** das Restvolumen im Tank.  

<!-- data-solution-button="5"-->
[[  45/2  ]] l
@Algebrite.check(45/2)
************
$$
\begin{align*}
\text{Vormittag:}\quad & \dfrac{3}{8}\cdot 48\,\text{l}
= \dfrac{144}{8}\,\text{l}
= 18\,\text{l} \\
\text{Rest 1:}\quad & 48\,\text{l} - 18\,\text{l} = 30\,\text{l} \\
\text{Nachmittag:}\quad & \dfrac{1}{4}\cdot 30\,\text{l}
= \dfrac{30}{4}\,\text{l}
= \dfrac{15}{2}\,\text{l} \\
\text{Endrest:}\quad & 30\,\text{l} - \dfrac{15}{2}\,\text{l}
= \dfrac{60}{2}\,\text{l} - \dfrac{15}{2}\,\text{l}
= \dfrac{45}{2}\,\text{l}
\end{align*}
$$
************

