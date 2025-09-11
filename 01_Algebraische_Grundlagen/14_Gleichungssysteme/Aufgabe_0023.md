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




tags: Gleichungssysteme, Sachaufgabe, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen

comment: Löse eine Sachaufgabe zur Arbeitszeitvergütung mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Arbeitszeitvergütung



Zwei Tätigkeiten werden an einem Tag erledigt. Zusammen beträgt die Arbeitszeit 8 Stunden. Die eine Tätigkeit wird mit 12 € pro Stunde vergütet, die andere mit 8 € pro Stunde. Insgesamt werden 85 € ausgezahlt.  
**Berechne** die gearbeiteten Stunden der beiden Tätigkeiten.

<!-- data-solution-button="5"-->
$x$ = [[  21/4  ]] und $y$ = [[  11/4  ]]
@Algebrite.check([ 21/4; 11/4 ])
************
Bezeichne mit $x$ die Stunden der höher vergüteten Tätigkeit $\left( 12\, \dfrac{\text{€}}{\text{h}} \right)$ und mit $y$ die Stunden der anderen Tätigkeit $\left( 8\, \dfrac{\text{€}}{\text{h}} \right)$.
$$
\begin{align*}
I.& \qquad x + y = 8 \\
II.& \qquad 12x + 8y = 85 \\ \hline
8\cdot I:& \qquad 8x + 8y = 64 \\[4pt]
II - (8\cdot I):& \qquad (12x + 8y) - (8x + 8y) = 85 - 64 \\
& \qquad 4x = 21 \;\Rightarrow\; x = \dfrac{21}{4} \\[6pt]
x \cap I:& \qquad \dfrac{21}{4} + y = 8 
\;\Rightarrow\; y = 8 - \dfrac{21}{4} 
= \dfrac{32 - 21}{4} 
= \dfrac{11}{4}
\end{align*}
$$
Die Arbeitszeiten betragen $\dfrac{21}{4}$ h und $\dfrac{11}{4}$ h.
************




