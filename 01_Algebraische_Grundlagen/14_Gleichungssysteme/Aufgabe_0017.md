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




tags: Gleichungssysteme, Sachaufgabe, leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe zu Einnahmen auf einem Schulfest mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Einnahmen beim Schulfest



Beim Schulfest verkauft die betrachtet Klasse Kuchenstücke und Waffeln. Am Ende stehen insgesamt 26 verkaufte Teile auf der Liste. Ein Kuchenstück kostet 2 €, eine Waffel 3 €. Zusammen wurden 62 € eingenommen. **Berechne**, wie viele Kuchenstücke und wie viele Waffeln verkauft wurden.



<!-- data-solution-button="5"-->
$x$ = [[  16  ]] und $y$ = [[  10  ]] 
@Algebrite.check([ 16; 10 ])
************
Bezeichne mit $x$ die Anzahl der Kuchenstücke und mit $y$ die Anzahl der Waffeln.
$$
\begin{align*}
I.& \qquad x + y = 26 \\
II.& \qquad 2x + 3y = 62  \\ \hline
I.& \qquad x + y = 26 \quad \left| \cdot 2 \right. \\
& \qquad 2x + 2y = 52 \\ \hline
II. - 2\cdot I:& \qquad (2x + 3y) - (2x + 2y) = 62 - 52 \\
& \qquad y = 10 \\[6pt]
y \cap I:& \qquad x + 10 = 26 \quad \left| -10 \right. \\
& \qquad x = 16
\end{align*}
$$
Es wurden 16 Kuchenstücke und 10 Waffeln verkauft.
************






