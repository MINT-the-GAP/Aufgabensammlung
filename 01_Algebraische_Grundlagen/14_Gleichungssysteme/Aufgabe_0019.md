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

comment: Löse eine Sachaufgabe zu Fahrzeugen auf einem Parkplatz mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Fahrzeuge auf einem Parkplatz


Auf einem Parkplatz stehen insgesamt 28 Fahrzeuge. Darunter befinden sich Autos und Motorräder. Zusammen haben alle Fahrzeuge 80 Räder.  
**Berechne** die Anzahl der Autos und Motorräder.

<!-- data-solution-button="5"-->
$x$ = [[  12  ]] und $y$ = [[  16  ]]
@Algebrite.check([ 12; 16 ])
************
Bezeichnen wir mit $x$ die Anzahl der Autos und mit $y$ die Anzahl der Motorräder.
$$
\begin{align*}
I.& \qquad x + y = 28 \\
II.& \qquad 4x + 2y = 80 \\ \hline
II.& \qquad 4x + 2y = 80 \quad \left| :2 \right. \\
& \qquad 2x + y = 40 \\[6pt]
(2x + y) - (x + y):& \qquad x = 12 \\[6pt]
x \cap I:& \qquad 12 + y = 28 \;\Rightarrow\; y = 16
\end{align*}
$$
Es stehen 12 Autos und 16 Motorräder auf dem Parkplatz.
************






