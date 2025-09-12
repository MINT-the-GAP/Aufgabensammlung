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

comment: Löse eine Sachaufgabe zu mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - 


Für Arbeitsblätter werden bereits 9 Kopien bereitgehalten. Ein zusätzliches Bündel enthält 12 Kopien.  
**Berechne** die kleinste natürliche Zahl $x$ (zusätzliche Bündel), sodass insgesamt mindestens 81 Kopien vorliegen.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 6 ]] $\}$
@Algebrite.check(6)
******************
$$
\begin{align*}
9 + 12x &\geq 81 \\
12x &\geq 81 - 9 \quad \left|\, -9 \right. \\
12x &\geq 72 \quad \left|\, :12 \right. \\
x &\geq 6
\end{align*}
$$
******************