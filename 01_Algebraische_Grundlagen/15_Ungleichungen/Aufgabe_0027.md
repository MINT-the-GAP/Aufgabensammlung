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

comment: Löse eine Sachaufgabe zu einem Leck im Wassertank mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Leck im Wassertank



Ein Wassertank enthält anfangs $30\,\mathrm{l}$. Durch ein Leck verliert der Tank pro Minute $\dfrac{7}{4}\,\mathrm{l}$.  
**Berechne** die Anzahl der Minuten, sodass der Inhalt höchstens $20\,\mathrm{l}$ beträgt.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{R} \;|\; x \geq $ [[ 40/7 ]] $\}$
@Algebrite.check(40/7)
******************
$$
\begin{align*}
30 - \dfrac{7}{4}x &\le 20 \quad \left| \; -30 \; \right. \\
-\dfrac{7}{4}x &\le -10 \quad \left| \; \cdot(-1) \; \right. \\
\dfrac{7}{4}x &\ge 10 \quad \left| \; :\dfrac{7}{4} \; \right. \\
x &\ge \dfrac{40}{7} \\[4pt]
\end{align*}
$$
******************