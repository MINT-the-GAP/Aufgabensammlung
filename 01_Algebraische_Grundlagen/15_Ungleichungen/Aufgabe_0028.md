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

comment: Löse eine Sachaufgabe zu einem Bücherregal mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Bücherregal


Ein Regal fasst maximal $50$ Bücher. Zu Beginn stehen bereits $18$ Bücher darin. Jede neue Lieferung enthält $\dfrac{11}{3}$ Bücher im Durchschnitt (z. B. durch wechselnde Buchmengen pro Paket).  
**Berechne** die Anzahl der Lieferungen $x$, sodass die Kapazität des Regals überschritten wird.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 9 ]] $\}$
@Algebrite.check(9)
******************
$$
\begin{align*}
18 + \dfrac{11}{3}x &> 50 \quad \left| \; -18 \; \right. \\
\dfrac{11}{3}x &> 32 \quad \left| \; :\dfrac{11}{3} \; \right. \\
x &> \dfrac{96}{11} \\[4pt]
\Rightarrow\;\; \mathbb{N}\text{:}\quad x &\ge 9
\end{align*}
$$
******************


