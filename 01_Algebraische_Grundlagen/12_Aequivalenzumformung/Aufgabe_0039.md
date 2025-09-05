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

comment: Löse eine Sachaufgabe mit einem Zahlentrick mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Zahlentrick

Eine gesuchte Zahl wird verdreifacht und anschließend um fünf verringert.  
Nimmt man stattdessen von derselben Zahl die Hälfte und addiert sieben, so entsteht derselbe Wert.  
**Berechne** die gesuchte Zahl.

<!-- data-solution-button="5"-->
$x$ = [[  24/5  ]]
@Algebrite.check(24/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
3x - 5 \;\stackrel{!}{=}\; \dfrac{1}{2}x + 7
$$

$$
\begin{align*}
3x - 5 &= \dfrac{1}{2}x + 7 \quad \left|\, -\dfrac{1}{2}x \right.\\[2pt]
\left(3 - \dfrac{1}{2}\right)x - 5 &= 7 \quad \left|\, +5 \right.\\[2pt]
\dfrac{5}{2}x &= 12 \quad \left|\, :\dfrac{5}{2} \right.\\[2pt]
x &= 12\cdot \dfrac{2}{5} = \dfrac{24}{5}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{3\cdot \dfrac{24}{5} - 5}_{\text{linke Seite}}
= \dfrac{72}{5} - \dfrac{25}{5}
= \dfrac{47}{5}   \\
&\quad\text{und}\quad   \\
&\underbrace{\dfrac{1}{2}\cdot \dfrac{24}{5} + 7}_{\text{rechte Seite}}
= \dfrac{12}{5} + \dfrac{35}{5}
= \dfrac{47}{5}
\end{align*}
$$


Deutung: Die gesuchte Zahl ist $\dfrac{24}{5}=4{,}8$.
************
