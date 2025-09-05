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




tags: Äquivalenzumformung, Sachaufgabe, niedrig, leicht, Berechnen, 

comment: Löse eine Sachaufgabe mit Bezahlmodellen mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Wasser in Behältern

Ein Behälter wird täglich mit vier Litern Wasser aufgefüllt. Zu Beginn sind bereits zwei Liter enthalten.  
Ein zweiter Behälter enthält anfangs 14 Liter Wasser, verliert jedoch jeden Tag einen Liter.  
**Berechne**, nach wie vielen Tagen beide Behälter gleich viel Wasser enthalten.

<!-- data-solution-button="5"-->
$x$ = [[  3  ]]
@Algebrite.check(3)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
4x + 2 \;\stackrel{!}{=}\; 14 - x
$$

$$
\begin{align*}
4x + 2 &= 14 - x \quad \left|\, +x \right.\\[2pt]
5x + 2 &= 14 \quad \left|\, -2 \right.\\[2pt]
5x &= 12 \quad \left|\, :5 \right.\\[2pt]
x &= \dfrac{12}{5}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{4\cdot \dfrac{12}{5} + 2}_{\text{1. Behälter}} 
= \dfrac{48}{5} + \dfrac{10}{5} = \dfrac{58}{5} = 11,6   \\
&\quad\text{und}\quad    \\
\underbrace{14 - \dfrac{12}{5}}_{\text{2. Behälter}}
&= \dfrac{70}{5} - \dfrac{12}{5} = \dfrac{58}{5} = 11,6
\end{align*}
$$


Deutung: Nach $\dfrac{12}{5}\approx 2{,}4$ Tagen haben beide Behälter gleich viel Wasser.
************