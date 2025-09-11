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






tags: Gleichungssysteme, Sachaufgabe, schwer, normal, Berechnen

comment: Löse eine Sachaufgabe zu Laufzeiten von Maschinen mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Laufzeiten von Maschinen


Drei Maschinen produzieren Teile. Zusammen laufen sie 5 Stunden. Pro Stunde fertigen sie $12$, $18$ bzw. $30$ Teile. Insgesamt entstehen $79$ Teile. Außerdem läuft die zweite Maschine eine halbe Stunde länger als die erste.  
**Berechne** die Laufzeiten der drei Maschinen.

<!-- data-solution-button="5"-->
$x$ = [[  13/6  ]], $y$ = [[  8/3  ]] und $z$ = [[  1/6  ]]
@Algebrite.check([ 13/6; 8/3; 1/6 ])
************
Bezeichne mit $x$ die Laufzeit der ersten Maschine (in Stunden), mit $y$ die der zweiten und mit $z$ die der dritten.
$$
\begin{align*}
I.& \qquad x + y + z = 5 \\
II.& \qquad 12x + 18y + 30z = 79 \\
III.& \qquad y = x + \dfrac{1}{2} \\ \hline
I \cap III:& \qquad x + \left(x + \dfrac{1}{2}\right) + z = 5 \\
& \qquad 2x + z = \dfrac{9}{2} \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 12x + 18\!\left(x + \dfrac{1}{2}\right) + 30z = 79 \\
& \qquad 30x + 30z = 70 \quad \left| :10 \right. \\
& \qquad 3x + 3z = 7 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad z = \dfrac{9}{2} - 2x \\[6pt]
\text{In (V):}& \qquad 3x + 3\!\left(\dfrac{9}{2} - 2x\right) = 7 \\
& \qquad 3x + \dfrac{27}{2} - 6x = 7 \\
& \qquad -3x = 7 - \dfrac{27}{2} = -\dfrac{13}{2} \\
& \qquad x = \dfrac{13}{6} \\[6pt]
\text{Dann:}& \qquad y = x + \dfrac{1}{2} = \dfrac{13}{6} + \dfrac{3}{6} = \dfrac{8}{3}, \\
& \qquad z = \dfrac{9}{2} - 2\cdot \dfrac{13}{6} = \dfrac{27}{6} - \dfrac{26}{6} = \dfrac{1}{6}
\end{align*}
$$
Die Laufzeiten betragen $ \dfrac{13}{6}\,\text{h}$, $ \dfrac{8}{3}\,\text{h}$ und $ \dfrac{1}{6}\,\text{h}$.
************






