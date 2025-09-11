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

comment: Löse eine Sachaufgabe zu Sitzplätzen im Innenhof mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Sitzplätze im Innenhof


Auf einem Innenhof stehen Bänke: einige sind 2er-Bänke, andere 3er-Bänke. Insgesamt sind es 22 Bänke mit zusammen 56 Sitzplätzen.  
Berechne die Anzahl der 2er-Bänke und der 3er-Bänke.

<!-- data-solution-button="5"-->
$x$ = [[  10  ]] und $y$ = [[  12  ]]
@Algebrite.check([ 10; 12 ])
************
Bezeichne mit $x$ die Anzahl der 2er-Bänke und mit $y$ die Anzahl der 3er-Bänke.
$$
\begin{align*}
I.& \qquad x + y = 22 \\
II.& \qquad 2x + 3y = 56 \\ \hline
I.& \qquad x + y = 22 \quad \left| \cdot 2 \right. \\
& \qquad 2x + 2y = 44 \\ \hline
II. - 2\cdot I:& \qquad (2x + 3y) - (2x + 2y) = 56 - 44 \\
& \qquad y = 12 \\[6pt]
y \cap I:& \qquad x + 12 = 22 \quad \left| -12 \right. \\
& \qquad x = 10
\end{align*}
$$
Es gibt 10 2er-Bänke und 12 3er-Bänke.
************






