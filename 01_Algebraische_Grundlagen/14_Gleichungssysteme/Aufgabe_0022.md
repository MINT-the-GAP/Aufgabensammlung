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

comment: Löse eine Sachaufgabe zu einem Kartenspiel mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Kartenspiel



Ein Kartenspiel besteht aus grünen und blauen Karten. Insgesamt sind es 28 Karten. Jede grüne Karte zählt 3 Punkte, jede blaue Karte 5 Punkte. Zusammen ergeben alle Karten 112 Punkte.  
**Berechne** die Anzahl der grünen und der blauen Karten.

<!-- data-solution-button="5"-->
$x$ = [[  14  ]] und $y$ = [[  14  ]]
@Algebrite.check([ 14; 14 ])
************
Bezeichne mit $x$ die Anzahl der grünen Karten (3 Punkte) und mit $y$ die Anzahl der blauen Karten (5 Punkte).
$$
\begin{align*}
I.& \qquad x + y = 28 \\
II.& \qquad 3x + 5y = 112 \\ \hline
I.& \qquad x + y = 28 \quad \left| \cdot 3 \right. \\
& \qquad 3x + 3y = 84 \\ \hline
II. - 3\cdot I:& \qquad (3x + 5y) - (3x + 3y) = 112 - 84 \\
& \qquad 2y = 28 \quad \left| :2 \right. \\
& \qquad y = 14 \\[6pt]
y \cap I:& \qquad x + 14 = 28 \quad \left| -14 \right. \\
& \qquad x = 14
\end{align*}
$$
Es gibt 14 grüne und 14 blaue Karten.
************






