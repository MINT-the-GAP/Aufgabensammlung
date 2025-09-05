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



tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, schwer, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit Aufzügen mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Aufzüge

Im Neubau eines Museums werden die Aufzüge im Probebetrieb getestet.  
Ein Aufzug startet in der Tiefgarage Ebene −3 und fährt gleichmäßig nach oben; die Anzeige steigt dabei pro Minute um 1,5 Ebenen.  
Der andere Aufzug startet im 9. Obergeschoss und fährt gleichmäßig nach unten; die Anzeige sinkt pro Minute um 2 Ebenen.  
Die Höhenanzeige der Aufzüge kann auch Zwischenwerte zwischen zwei Ebenen anzeigen.  
**Berechne**, nach wie vielen Minuten beide Aufzüge auf gleicher Höhe sind.



<!-- data-solution-button="5"-->
$x$ = [[  24/7  ]]
@Algebrite.check(24/7)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{2}x - 3 \;\stackrel{!}{=}\; 9 - 2x
$$

$$
\begin{align*}
\dfrac{3}{2}x - 3 &= 9 - 2x \quad \left|\, +2x \right.\\[2pt]
\left(\dfrac{3}{2} + 2\right)x - 3 &= 9 \quad \left|\, +3 \right.\\[2pt]
\dfrac{7}{2}x &= 12 \quad \left|\, :\dfrac{7}{2} \right.\\[2pt]
x &= 12 \cdot \dfrac{2}{7} \;=\; \dfrac{24}{7}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{-3 + \dfrac{3}{2}\cdot\dfrac{24}{7}}_{\text{Aufzug aus der Tiefgarage}}
= -\dfrac{21}{7} + \dfrac{36}{7}
= \dfrac{15}{7}
&\quad\text{und}\quad
&\underbrace{9 - 2\cdot\dfrac{24}{7}}_{\text{Aufzug von oben}}
= \dfrac{63}{7} - \dfrac{48}{7}
= \dfrac{15}{7}
\end{align*}
$$


Deutung: Nach $\dfrac{24}{7}\approx 3{,}43$ Minuten sind beide auf gleicher Höhe, nämlich bei $\dfrac{15}{7}\approx 2{,}14$ Ebenen über dem Erdgeschoss (zwischen 2. und 3. OG).

************
