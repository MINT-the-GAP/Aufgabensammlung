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

comment: Löse eine Sachaufgabe zu Tieren auf einer Weide mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Tiere auf einer Weide


Auf einer Weide sind Hühner und Ziegen. Insgesamt zählst du 21 Tiere. Zusammen haben die Tiere 62 Beine.  
**Berechne** die Anzahl der Hühner und der Ziegen.

<!-- data-solution-button="5"-->
$x$ = [[  11  ]] und $y$ = [[  10  ]]
@Algebrite.check([ 11; 10 ])
************
Bezeichne mit $x$ die Anzahl der Hühner (je 2 Beine) und mit $y$ die Anzahl der Ziegen (je 4 Beine).
$$
\begin{align*}
I.& \qquad x + y = 21 \\
II.& \qquad 2x + 4y = 62 \\ \hline
II.& \qquad 2x + 4y = 62 \quad \left| :2 \right. \\
& \qquad x + 2y = 31 \\ \hline
(x + 2y) - (x + y):& \qquad y = 10 \\[6pt]
y \cap I:& \qquad x + 10 = 21 \quad \left| -10 \right. \\
& \qquad x = 11
\end{align*}
$$
Es gibt 11 Hühner und 10 Ziegen.
************



