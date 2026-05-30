<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md










import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md




tags: Gleichungssysteme, Sachaufgabe, leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe zu Einnahmen auf einem Klassenflohmarkt mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Klassenflohmarkt


Beim Klassenflohmarkt verkauft die betrachte Klasse Postkarten und Lesezeichen. Insgesamt wurden 34 Artikel verkauft. Eine Postkarte kostet 1 €, ein Lesezeichen 2 €. Am Ende zählen die Schüler:innen 44 € Einnahmen. **Berechne**, wie viele Postkarten und wie viele Lesezeichen verkauft wurden.


<!-- data-solution-button="5"-->
$x$ = [[  24  ]] und $y$ = [[  10  ]]
@Algebrite.check([ 24; 10 ])
************
Bezeichne mit $x$ die Anzahl der Postkarten und mit $y$ die Anzahl der Lesezeichen.
$$
\begin{align*}
I.& \qquad x + y = 34 \\
II.& \qquad x + 2y = 44 \\ \hline
2\cdot I:& \qquad 2x + 2y = 68 \\[4pt]
(2\cdot I) - II:& \qquad (2x + 2y) - (x + 2y) = 68 - 44 \\
& \qquad x = 24 \\[6pt]
x \cap I:& \qquad 24 + y = 34 \quad \left| -24 \right. \\
& \qquad y = 10
\end{align*}
$$
Es wurden 24 Postkarten und 10 Lesezeichen verkauft.
************




