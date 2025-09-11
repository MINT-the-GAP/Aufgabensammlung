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

comment: Löse eine Sachaufgabe zu Tickets einer Veranstaltung mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Tickets einer Veranstaltung




Bei einer Veranstaltung werden drei Ticketarten verkauft: Einzeltickets zu 2 €, Tagestickets zu 5 € und ermäßigte Tickets zu 3 €. Insgesamt werden 24 Tickets verkauft und der Umsatz beträgt 78 €. Außerdem gibt es vier ermäßigte Tickets weniger als Einzeltickets.  
**Berechne** die Anzahl der drei Ticketarten.

<!-- data-solution-button="5"-->
$x$ = [[  10  ]], $y$ = [[  8  ]] und $z$ = [[  6  ]]
@Algebrite.check([ 10; 8; 6 ])
************
Bezeichne mit $x$ die Anzahl der Einzeltickets, mit $y$ die Anzahl der Tagestickets und mit $z$ die Anzahl der ermäßigten Tickets.
$$
\begin{align*}
I.& \qquad x + y + z = 24 \\
II.& \qquad 2x + 5y + 3z = 78 \\
III.& \qquad z = x - 4 \\ \hline
I \cap III:& \qquad x + y + (x - 4) = 24 \\
& \qquad 2x + y = 28 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 2x + 5y + 3(x - 4) = 78 \\
& \qquad 5x + 5y = 90 \quad \left| :5 \right. \\
& \qquad x + y = 18 \quad \text{(V)} \\ \hline
(IV) - (V):& \qquad (2x + y) - (x + y) = 28 - 18 \\
& \qquad x = 10 \\[6pt]
\text{Dann:}& \qquad y = 18 - 10 = 8,\quad z = x - 4 = 6
\end{align*}
$$
Es wurden $10$ Einzeltickets, $8$ Tagestickets und $6$ ermäßigte Tickets verkauft.
************




