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

comment: Löse eine Sachaufgabe zu Münzen in einem Kassenfach mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Münzen in einem Kassenfach




In einem Kassenfach liegen 1-€, 2-€ und 50-Cent-Münzen. Insgesamt sind es 30 Münzen. Der Gesamtwert beträgt 33 €. Außerdem gibt es zwei 50-Cent-Münzen weniger als 1-€-Münzen.  
**Berechne** die Anzahl der 1-€, 2-€ und 50-Cent-Münzen.

<!-- data-solution-button="5"-->
$x$ = [[  12  ]], $y$ = [[  8  ]] und $z$ = [[  10  ]]
@Algebrite.check([ 12; 8; 10 ])
************
Bezeichne mit $x$ die Anzahl der 1-€-Münzen, mit $y$ die Anzahl der 2-€-Münzen und mit $z$ die Anzahl der 50-Cent-Münzen.
$$
\begin{align*}
I.& \qquad x + y + z = 30 \\
II.& \qquad 100x + 200y + 50z = 3300 \\
III.& \qquad z = x - 2 \\ \hline
I \cap III:& \qquad x + y + (x - 2) = 30 \\
& \qquad 2x + y = 32 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 100x + 200y + 50(x - 2) = 3300 \\
& \qquad 150x + 200y = 3400 \quad \left| :50 \right. \\
& \qquad 3x + 4y = 68 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad y = 32 - 2x \\[6pt]
\text{In (V):}& \qquad 3x + 4(32 - 2x) = 68 \\
& \qquad 3x + 128 - 8x = 68 \\
& \qquad -5x = -60 \;\Rightarrow\; x = 12 \\[6pt]
\text{Dann:}& \qquad y = 32 - 2\cdot 12 = 8 \\
& \qquad z = x - 2 = 10
\end{align*}
$$
Es liegen $12$ Stück 1-€-Münzen, $8$ Stück 2-€-Münzen und $10$ Stück 50-Cent-Münzen im Kassenfach.
************




