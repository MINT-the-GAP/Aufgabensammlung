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

comment: Löse eine Sachaufgabe zu Stühlen im Klassenzimmer mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Stühle im Klassenzimmer


In einem Klassenzimmer sind Stühle aus Holz, Kunststoff und Metall aufgestellt. Insgesamt gibt es 36 Stühle. Die Holzstühle wiegen jeweils 5 kg, die Kunststoffstühle 3 kg und die Metallstühle 7 kg. Zusammen beträgt das Gewicht aller Stühle 180 kg. Außerdem sind doppelt so viele Kunststoffstühle vorhanden wie Metallstühle.  
**Berechne** die Anzahl der Holz-, Kunststoff- und Metallstühle.

<!-- data-solution-button="5"-->
$x$ = [[  12  ]], $y$ = [[  16  ]] und $z$ = [[  8  ]]
@Algebrite.check([ 12; 16; 8 ])
************
Bezeichne mit $x$ die Anzahl der Holzstühle, mit $y$ die Anzahl der Kunststoffstühle und mit $z$ die Anzahl der Metallstühle.
$$
\begin{align*}
I.& \qquad x + y + z = 36 \\
II.& \qquad 5x + 3y + 7z = 180 \\
III.& \qquad y = 2z \\ \hline
I \cap III:& \qquad x + 2z + z = 36 \\
& \qquad x + 3z = 36 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 5x + 3(2z) + 7z = 180 \\
& \qquad 5x + 6z + 7z = 180 \\
& \qquad 5x + 13z = 180 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad x = 36 - 3z \\[6pt]
\text{In (V):}& \qquad 5(36 - 3z) + 13z = 180 \\
& \qquad 180 - 15z + 13z = 180 \\
& \qquad -2z = 0 \;\Rightarrow\; z = 0 \;\; \text{(Fehler!)} 
\end{align*}
$$






