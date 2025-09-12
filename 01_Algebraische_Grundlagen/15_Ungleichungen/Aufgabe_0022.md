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




tags: Ungleichungen, Sachaufgabe, sehr leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe zu Beschaffungen für ein Schulfest mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Beschaffungen für ein Schulfest


Für ein Schulfest werden gleich viele Wasser- und Saftflaschen beschafft. Eine Wasserflasche kostet 2 €, eine Saftflasche 6 €.  
**Berechne** die kleinste natürliche Zahl $x$ (Flaschen je Sorte), sodass mindestens 40 € ausgegeben werden.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 5 ]] $\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
2x + 6x &\geq 40 \\
8x &\geq 40 \quad \left|\, :8 \right. \\
x &\geq 5
\end{align*}
$$
******************
