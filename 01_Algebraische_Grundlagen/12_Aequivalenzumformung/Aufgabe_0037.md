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




# Textaufgabe Äquivalenzumformung - Copyshop

In einem Copyshop kann zwischen zwei Bezahlmodellen gewählt werden. In Modell A fällt eine einmalige Grundgebühr von 0,75 € an; jede Kopie kostet zusätzlich 0,30 €. In Modell B beträgt die einmalige Grundgebühr 3,75 €, dafür kostet jede Kopie nur 0,15 €. **Berechne**, nach wie vielen Kopien die Gesamtkosten beider Modelle genau gleich sind.

<!-- data-solution-button="5"-->
$x$ = [[  20  ]]
@Algebrite.check(20)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{10}x + \dfrac{3}{4} \;\stackrel{!}{=}\; \dfrac{3}{20}x + \dfrac{15}{4}
$$

$$
\begin{align*}
\dfrac{3}{10}x + \dfrac{3}{4} &= \dfrac{3}{20}x + \dfrac{15}{4} \quad \left|\, -\dfrac{3}{20}x \right.\\[2pt]
\left(\dfrac{3}{10}-\dfrac{3}{20}\right)x + \dfrac{3}{4} &= \dfrac{15}{4} \quad \left|\, -\dfrac{3}{4} \right.\\[2pt]
\dfrac{3}{20}x &= \dfrac{12}{4} = 3 \quad \left|\, :\dfrac{3}{20} \right.\\[2pt]
x &= 20
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{3}{10}\cdot 20 + \dfrac{3}{4}}_{\text{Modell A}}
= 6 + 0,75
= 6,75\ \text{€}  \\
&\quad\text{und}\quad  \\
&\underbrace{\dfrac{3}{20}\cdot 20 + \dfrac{15}{4}}_{\text{Modell B}}
= 3 + 3,75
= 6,75\ \text{€}
\end{align*}
$$



Deutung: Für $x<20$ ist Modell A günstiger; für $x>20$ ist Modell B günstiger.
************