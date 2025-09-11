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

comment: Löse eine Sachaufgabe zu Einnahmen auf einem Klassenflohmarkt mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Klassenflohmarkt


Beim Klassenflohmarkt verkauft die betrachte Klasse Postkarten und Lesezeichen. Insgesamt wurden 34 Artikel verkauft. Eine Postkarte kostet 1 €, ein Lesezeichen 2 €. Am Ende zählen die Schüler:innen 44 € Einnahmen. **Berechne**, wie viele Postkarten und wie viele Lesezeichen verkauft wurden.


<!-- data-solution-button="5"-->
$x$ = [[  24  ]] und $y$ = [[  10  ]]
@Algebrite.check([ 24; 10 ])
************
Bezeichne mit $x$ die Anzahl der Postkarten und mit $y$ die Anzahl der Lesezeichen.
$$
\begin{align*}
I.& \qquad x + y = 34 \\
II.& \qquad x + 2y = 44 \\ \hline
2\cdot I:& \qquad 2x + 2y = 68 \\[4pt]
(2\cdot I) - II:& \qquad (2x + 2y) - (x + 2y) = 68 - 44 \\
& \qquad x = 24 \\[6pt]
x \cap I:& \qquad 24 + y = 34 \quad \left| -24 \right. \\
& \qquad y = 10
\end{align*}
$$
Es wurden 24 Postkarten und 10 Lesezeichen verkauft.
************




