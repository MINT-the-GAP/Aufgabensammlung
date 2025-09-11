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

comment: Löse eine Sachaufgabe zu Arbeitszeiten bei Textkapiteln mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Arbeitszeiten bei Textkapiteln



Ein Mensch bearbeitet an einem Nachmittag zwei Textkapitel. Insgesamt arbeitet dieser 5 Stunden. Beim ersten Kapitel schafft er 60 Seiten pro Stunde, beim zweiten 40 Seiten pro Stunde. Am Ende hast der Mensch zusammen 255 Seiten bearbeitet.  
**Berechne** die Arbeitszeiten für beide Kapitel.

<!-- data-solution-button="5"-->
$x$ = [[  11/4  ]] und $y$ = [[  9/4  ]]
@Algebrite.check([ 11/4; 9/4 ])
************
Bezeichne mit $x$ die Zeit am ersten Kapitel (in Stunden) und mit $y$ die Zeit am zweiten Kapitel.
$$
\begin{align*}
I.& \qquad x + y = 5 \\
II.& \qquad 60x + 40y = 255 \\ \hline
40\cdot I\!:& \qquad 40x + 40y = 200 \\ \hline
II - (40\cdot I)\!:& \qquad (60x + 40y) - (40x + 40y) = 255 - 200 \\
& \qquad 20x = 55 \;\Rightarrow\; x = \dfrac{55}{20} = \dfrac{11}{4} \\[6pt]
x \cap I\!:& \qquad \dfrac{11}{4} + y = 5 
\;\Rightarrow\; y = 5 - \dfrac{11}{4} 
= \dfrac{20 - 11}{4} 
= \dfrac{9}{4}
\end{align*}
$$
Die Arbeitszeiten betragen $ \dfrac{11}{4}\,\text{h}$ (erstes Kapitel) und $ \dfrac{9}{4}\,\text{h}$ (zweites Kapitel).
************




