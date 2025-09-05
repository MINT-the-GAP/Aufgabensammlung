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



tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit einer Schnellladestation mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Schnellladestation


Im Wartebereich eines Bahnhofs stehen zwei Sitzplätze mit Steckdosen.  
Ein Smartphone wird an eine Schnellladestation angeschlossen. Zu Beginn zeigt es 22 Prozent Akkustand und gewinnt pro Minute 1,5 Prozentpunkte hinzu.  
Das andere Smartphone läuft ohne Netzteil mit einem grafikintensiven Spiel. Es startet bei 94 Prozent und verliert pro Minute 2 Prozentpunkte.  
**Berechne**, nach wie vielen Minuten beide Geräte den gleichen Akkustand anzeigen.

<!-- data-solution-button="5"-->
$x$ = [[  144/7  ]]
@Algebrite.check(144/7)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{2}x + 22 \;\stackrel{!}{=}\; 94 - 2x
$$

$$
\begin{align*}
\dfrac{3}{2}x + 22 &= 94 - 2x \quad \left|\, +2x \right.\\[2pt]
\left(\dfrac{3}{2} + 2\right)x + 22 &= 94 \quad \left|\, -22 \right.\\[2pt]
\dfrac{7}{2}x &= 72 \quad \left|\, :\dfrac{7}{2} \right.\\[2pt]
x &= 72 \cdot \dfrac{2}{7} \;=\; \dfrac{144}{7}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{3}{2}\cdot \dfrac{144}{7} + 22}_{\text{Ladegerät}}
= \dfrac{216}{7} + \dfrac{154}{7}
= \dfrac{370}{7}   \\
&\quad\text{und}\quad   \\
&\underbrace{94 - 2\cdot \dfrac{144}{7}}_{\text{ohne Netzteil}}
= \dfrac{658}{7} - \dfrac{288}{7}
= \dfrac{370}{7}
\end{align*}
$$


Deutung: Nach $\dfrac{144}{7}\approx 20{,}6$ Minuten zeigen beide etwa $\dfrac{370}{7}\approx 52{,}9\,\% Akkustand.

************