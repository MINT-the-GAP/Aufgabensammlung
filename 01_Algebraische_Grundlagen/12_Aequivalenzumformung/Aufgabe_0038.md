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

comment: Löse eine Sachaufgabe mit Wasserbecken mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Wasserbecken 

Ein Becken wird pro Minute um 0,75 Liter aufgefüllt; zu Beginn sind 2,5 Liter enthalten.  
Ein zweites Becken enthält anfangs 7,25 Liter, dabei werden pro Minute 0,5 Liter abgelassen.  
**Berechne**, nach wie vielen Minuten beide Becken gleich viel Wasser enthalten.

<!-- data-solution-button="5"-->
$x$ = [[  19/5  ]]
@Algebrite.check(19/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{4}x + \dfrac{5}{2} \;\stackrel{!}{=}\; \dfrac{29}{4} - \dfrac{1}{2}x
$$

$$
\begin{align*}
\dfrac{3}{4}x + \dfrac{5}{2} &= \dfrac{29}{4} - \dfrac{1}{2}x \quad \left|\, +\dfrac{1}{2}x \right.\\[2pt]
\left(\dfrac{3}{4}+\dfrac{1}{2}\right)x + \dfrac{5}{2} &= \dfrac{29}{4} \quad \left|\, -\dfrac{5}{2} \right.\\[2pt]
\dfrac{5}{4}x &= \dfrac{29}{4} - \dfrac{10}{4} = \dfrac{19}{4} \quad \left|\, :\dfrac{5}{4} \right.\\[2pt]
x &= \dfrac{19}{4}\cdot\dfrac{4}{5} = \dfrac{19}{5}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{3}{4}\cdot\dfrac{19}{5} + \dfrac{5}{2}}_{\text{1. Becken}}
= \dfrac{57}{20} + \dfrac{50}{20}
= \dfrac{107}{20}  \\
&\quad\text{und}\quad  \\
&\underbrace{\dfrac{29}{4} - \dfrac{1}{2}\cdot\dfrac{19}{5}}_{\text{2. Becken}}
= \dfrac{145}{20} - \dfrac{38}{20}
= \dfrac{107}{20}
\end{align*}
$$

Deutung:
Nach $\dfrac{19}{5}\approx 3,8$ Minuten ist der Füllstand in beiden Becken gleich ( $\dfrac{107}{20}=5,35$ Liter)
************