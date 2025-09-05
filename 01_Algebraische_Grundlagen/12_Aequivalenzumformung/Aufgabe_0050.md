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



tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, sehr schwer, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit Zügen an der Küstenlinie mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Züge an der Küstenlinie

Entlang einer geraden Küstenlinie steht ein Leuchtturm als Nullpunkt der Entfernungsskala.  
Ein Schnellzug A startet 55 km westlich des Leuchtturms und fährt ostwärts mit $110\,\dfrac{\text{km}}{\text{h}}$.  
Ein Regionalzug B befindet sich 145 km östlich des Leuchtturms, fährt aber erst 15 Minuten später westwärts mit $80\,\dfrac{\text{km}}{\text{h}}$ los.  
**Berechne**, nach wie vielen Stunden seit Abfahrt von Zug A beide Züge an derselben Position relativ zum Leuchtturm sind.  


<!-- data-solution-button="5"-->
$x$ = [[  22/19  ]]
@Algebrite.check(22/19)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
-55 + 110x \;\stackrel{!}{=}\; 145 - 80\,\bigl(x - \tfrac{1}{4}\bigr)
$$

$$
\begin{align*}
-55 + 110x &= 145 - 80x + 20 \\[2pt]
-55 + 110x &= 165 - 80x \quad \left|\, +80x \right.\\[2pt]
-55 + 190x &= 165 \quad \left|\, +55 \right.\\[2pt]
190x &= 220 \quad \left|\, :190 \right.\\[2pt]
x &= \dfrac{22}{19}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{-55 + 110\cdot \dfrac{22}{19}}_{\text{Zug A}}
= -\dfrac{1045}{19} + \dfrac{2420}{19}
= \dfrac{1375}{19}    \\
&\quad\text{und}\quad    \\
&\underbrace{145 - 80\!\left(\dfrac{22}{19} - \dfrac{1}{4}\right)}_{\text{Zug B}}
= \dfrac{2755}{19} - \dfrac{1380}{19}
= \dfrac{1375}{19}
\end{align*}
$$


Deutung: Nach $\dfrac{22}{19}\approx 1{,}16$ Stunden (ca. 69,5 Minuten) treffen sich die Züge $\dfrac{1375}{19}\approx 72{,}4$ km östlich vom Leuchtturm.

************
