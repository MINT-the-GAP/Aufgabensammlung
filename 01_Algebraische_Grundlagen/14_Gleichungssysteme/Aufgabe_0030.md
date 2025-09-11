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




tags: Gleichungssysteme, Sachaufgabe, mittel, niedrig, Berechnen

comment: Löse eine Sachaufgabe zu Ausdauersportarten mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Ausdauersportarten



Du planst in einer Woche Einheiten in drei Ausdauersportarten: Laufen, Radfahren und Schwimmen. Insgesamt absolvierst du 14 Einheiten. Pro Laufeinheit rechnest du mit 500 kcal, pro Radeinheit mit 300 kcal und pro Schwimmeinheit mit 200 kcal. Zusammen ergeben sich 4900 kcal. Außerdem fährst du doppelt so oft Rad wie du schwimmst.  
**Berechne** die Anzahl der Einheiten in den drei Sportarten.

<!-- data-solution-button="5"-->
$x$ = [[  5  ]], $y$ = [[  6  ]] und $z$ = [[  3  ]]
@Algebrite.check([ 5; 6; 3 ])
************
Bezeichne mit $x$ die Anzahl der Laufeinheiten, mit $y$ die Anzahl der Radeinheiten und mit $z$ die Anzahl der Schwimmeinheiten.
$$
\begin{align*}
I.& \qquad x + y + z = 14 \\
II.& \qquad 500x + 300y + 200z = 4900 \\
III.& \qquad y = 2z \\ \hline
I \cap III:& \qquad x + 2z + z = 14 \\
& \qquad x + 3z = 14 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 500x + 300(2z) + 200z = 4900 \\
& \qquad 500x + 800z = 4900 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad x = 14 - 3z \\[6pt]
\text{In (V):}& \qquad 500(14 - 3z) + 800z = 4900 \\
& \qquad 7000 - 1500z + 800z = 4900 \\
& \qquad -700z = -2100 \;\Rightarrow\; z = 3 \\[6pt]
\text{Dann:}& \qquad y = 2z = 6,\quad x = 14 - 3\cdot 3 = 5
\end{align*}
$$
Es ergeben sich $5$ Laufeinheiten, $6$ Radeinheiten und $3$ Schwimmeinheiten.
************





