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



tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen, 

comment: Löse eine Sachaufgabe umgestellt Pflanzenwachstum mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Pflanzenwachstum

Zwei Pflanzen wachsen in gleichmäßiger Höhe pro Woche.  
Die erste Pflanze ist zu Beginn 26 cm hoch und wächst jede Woche um 3,5 cm.  
Die zweite Pflanze ist anfangs 48 cm hoch und wächst pro Woche um 1 cm.  
**Berechne**, nach wie vielen Wochen beide Pflanzen gleich hoch sind.



<!-- data-solution-button="5"-->
$x$ = [[  44/5  ]]
@Algebrite.check(44/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{7}{2}x + 26 \;\stackrel{!}{=}\; x + 48
$$

$$
\begin{align*}
\dfrac{7}{2}x + 26 &= x + 48 \quad \left|\, -x \right.\\[2pt]
\left(\dfrac{7}{2} - 1\right)x + 26 &= 48 \quad \left|\, -26 \right.\\[2pt]
\dfrac{5}{2}x &= 22 \quad \left|\, :\dfrac{5}{2} \right.\\[2pt]
x &= 22 \cdot \dfrac{2}{5} \;=\; \dfrac{44}{5}
\end{align*}
$$

$$
\textbf{Probe:}\quad 
\underbrace{\dfrac{7}{2}\cdot \dfrac{44}{5} + 26}_{\text{1. Pflanze}}
= \dfrac{154}{5} + \dfrac{130}{5}
= \dfrac{284}{5}
\quad\text{und}\quad
\underbrace{48 + \dfrac{44}{5}}_{\text{2. Pflanze}}
= \dfrac{240}{5} + \dfrac{44}{5}
= \dfrac{284}{5}
$$


Deutung: Nach $\dfrac{44}{5} \approx 8{,}8$ Wochen sind beide Pflanzen gleich hoch ($\dfrac{284}{5} = 56{,}8$ cm).

************