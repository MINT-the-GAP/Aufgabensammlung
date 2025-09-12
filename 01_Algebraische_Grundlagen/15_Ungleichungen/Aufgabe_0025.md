<!--
version:  0.0.1

language: de

@style
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

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md




tags: Ungleichungen, Mengen, negative Zahlen, Bruchrechnung, Sachaufgabe, mittel, normal, Berechnen

comment: Löse eine Sachaufgabe zur Temperatur im Kühlraum mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Temperatur im Kühlraum


Ein Kühlraum hat zu Beginn eine Temperatur von $-6^\circ\mathrm{C}$. Durch Aufheizen steigt die Temperatur pro Stunde um $0,75^\circ\mathrm{C}$.  
**Berechne** die kleinste natürliche Zahl $x$ (Stunden), sodass die Temperatur mindestens $2^\circ\mathrm{C}$ beträgt.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 11 ]] $\}$
@Algebrite.check(11)
******************
$$
\begin{align*}
-6 + \dfrac{3}{4}x &\ge 2 \quad \left| \; +6 \; \right. \\
\dfrac{3}{4}x &\ge 8 \quad \left| \; :\dfrac{3}{4} \; \right. \\
x &\ge \dfrac{32}{3} \\[4pt]
\Rightarrow\;\; \mathbb{N}\text{:}\quad x &\ge 11
\end{align*}
$$
******************
