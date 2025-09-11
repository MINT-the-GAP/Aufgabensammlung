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

comment: Löse eine Sachaufgabe zu zeitliche Streckenanteilen mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - zeitliche Streckenanteile





Ein Mensch legt an einem Tag eine Strecke zurück: Einen Teil fährt der Mensch mit dem Fahrrad $\left(15 \,\dfrac{\text{km}}{\text{h}} \right)$, den anderen geht dieser zu Fuß $\left(5 \,\dfrac{\text{km}}{\text{h}} \right)$. Insgesamt ist der Mensch 3 Stunden unterwegs und die Strecke ist 24 km lang.  
**Berechne** die Zeitanteile der beiden Abschnitte.

<!-- data-solution-button="5"-->
$x$ = [[  9/10  ]] und $y$ = [[  21/10  ]]
@Algebrite.check([ 9/10; 21/10 ])
************
Bezeichne mit $x$ die Fahrzeit mit dem Fahrrad (in Stunden) und mit $y$ die Gehzeit.
$$
\begin{align*}
I.& \qquad x + y = 3 \\
II.& \qquad 15x + 5y = 24 \\ \hline
5\cdot I:& \qquad 5x + 5y = 15 \\ \hline
II - (5\cdot I):& \qquad (15x + 5y) - (5x + 5y) = 24 - 15 \\
& \qquad 10x = 9 \;\Rightarrow\; x = \dfrac{9}{10} \\[6pt]
x \cap I:& \qquad \dfrac{9}{10} + y = 3 
\;\Rightarrow\; y = 3 - \dfrac{9}{10} 
= \dfrac{30 - 9}{10} 
= \dfrac{21}{10}
\end{align*}
$$
Die Zeiten betragen $\dfrac{9}{10}\,\text{h}$ (Fahrrad) und $\dfrac{21}{10}\,\text{h}$ (zu Fuß).
************





