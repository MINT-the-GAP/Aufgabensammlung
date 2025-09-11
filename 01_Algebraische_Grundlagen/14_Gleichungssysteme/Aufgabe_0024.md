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

comment: Löse eine Sachaufgabe zu Gerätelaufzeiten mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Gerätelaufzeiten


Zwei Geräte laufen an einem Tag zusammen 5 Stunden. Gerät A kostet pro Stunde 1,40 €, Gerät B pro Stunde 0,90 €. Am Ende betragen die Gesamtkosten 6,70 €.  
**Berechne** die Laufzeiten beider Geräte.

<!-- data-solution-button="5"-->
$x$ = [[  22/5  ]] und $y$ = [[  3/5  ]]
@Algebrite.check([ 22/5; 3/5 ])
************
Bezeichne mit $x$ die Laufzeit von Gerät A (in Stunden) und mit $y$ die Laufzeit von Gerät B.
$$
\begin{align*}
I.& \qquad x + y = 5 \\
II.& \qquad 1{,}4x + 0{,}9y = 6{,}7 \\ \hline
\text{Zehnfaches von } II\!:& \qquad 14x + 9y = 67 \\
9\cdot I\!:& \qquad 9x + 9y = 45 \\ \hline
(14x{+}9y) - (9x{+}9y):& \qquad 5x = 22 \;\Rightarrow\; x = \dfrac{22}{5} \\[6pt]
x \cap I:& \qquad \dfrac{22}{5} + y = 5 \;\Rightarrow\; y = 5 - \dfrac{22}{5} = \dfrac{3}{5}
\end{align*}
$$
Die Laufzeiten betragen $ \dfrac{22}{5}\,\text{h} $ und $ \dfrac{3}{5}\,\text{h} $.
************





