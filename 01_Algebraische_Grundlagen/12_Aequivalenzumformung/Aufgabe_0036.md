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




tags: Äquivalenzumformung, Sachaufgabe, niedrig, leicht, Berechnen, 

comment: Löse eine Sachaufgabe mit fahrenden Autos mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Zwei Autos


Ein Auto fährt mit einer konstanten Geschwindigkeit von $60\,\dfrac{\text{km}}{\text{h}}$ los.  
Ein zweites Auto startet zwei Stunden später, ist aber schneller und fährt mit $90\,\dfrac{\text{km}}{\text{h}}$.  
**Berechne**, nach wie vielen Stunden beide Autos die gleiche Strecke zurückgelegt haben.

<!-- data-solution-button="5"-->
$x$ = [[  6  ]]
@Algebrite.check(6)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
60x \;\stackrel{!}{=}\; 90(x - 2)
$$

$$
\begin{align*}
60x &= 90x - 180 \quad \left|\, -90x \right.\\[2pt]
-30x &= -180 \quad \left|\, :(-30) \right.\\[2pt]
x &= 6
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{60\cdot 6}_{\text{1. Auto}} = 360\ \text{km} \\
&\quad\text{und}\quad \\
&\underbrace{90\cdot (6-2)}_{\text{2. Auto}} = 90\cdot 4 = 360\ \text{km}
\end{align*}
$$

Deutung: Nach 6 Stunden Fahrzeit des ersten Autos bzw. nach 4 Stunden des zweiten Autos haben beide die gleiche Strecke zurückgelegt.

************

