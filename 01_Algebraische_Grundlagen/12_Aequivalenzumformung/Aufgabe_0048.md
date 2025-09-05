<!--
version:  0.0.1
language: de


@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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



tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, sehr schwer, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit Drohnen mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Drohnen

In einer großen Versuchshalle werden zwei Drohnen auf einer geraden Linie getestet.  
Der Boden ist mit einer Skala markiert: 0 m liegt in der Hallenmitte.  
Die erste Drohne startet 50 m links vom Mittelpunkt und fliegt gleichmäßig nach rechts; pro Sekunde legt sie 2,8 m zurück.  
Die zweite Drohne steht anfangs 130 m rechts vom Mittelpunkt, hebt aber erst 15 Sekunden später ab und fliegt dann gleichmäßig nach links mit 1,6 m pro Sekunde.  
**Berechne**, nach wie vielen Sekunden (ab Start der ersten Drohne) beide Drohnen an derselben Position sind.

<!-- data-solution-button="5"-->
$x$ = [[  510/11  ]]
@Algebrite.check(510/11)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
-50 + \dfrac{14}{5}x \;\stackrel{!}{=}\; 130 - \dfrac{8}{5}\,\bigl(x - 15\bigr)
$$

$$
\begin{align*}
-50 + \dfrac{14}{5}x &= 130 - \dfrac{8}{5}x + \dfrac{8}{5}\cdot 15 \\[2pt]
-50 + \dfrac{14}{5}x &= 130 + 24 - \dfrac{8}{5}x \quad \left|\, +\dfrac{8}{5}x \right.  \\[2pt]
\left(\dfrac{14}{5} + \dfrac{8}{5}\right)x - 50 &= 154 \quad \left|\, +50 \right.\\[2pt]
\dfrac{22}{5}x &= 204 \quad \left|\, :\dfrac{22}{5} \right.\\[2pt]
x &= 204 \cdot \dfrac{5}{22} \;=\; \dfrac{510}{11}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{-50 + \dfrac{14}{5}\cdot \dfrac{510}{11}}_{\text{1. Drohne}}
= -\dfrac{550}{11} + \dfrac{1428}{11}
= \dfrac{878}{11}    \\
&\quad\text{und}\quad    \\
&\underbrace{130 - \dfrac{8}{5}\!\left(\dfrac{510}{11} - 15\right)}_{\text{2. Drohne}}
= \dfrac{1430}{11} - \dfrac{552}{11}
= \dfrac{878}{11}
\end{align*}
$$


Deutung: Nach $\dfrac{510}{11}\approx 46{,}36$ s treffen sich beide bei $\dfrac{878}{11}\approx 79{,}82$ m rechts vom Mittelpunkt. Die zweite Drohne war dabei $\dfrac{510}{11}-15=\dfrac{345}{11}\approx 31{,}36$ s in der Luft.
************