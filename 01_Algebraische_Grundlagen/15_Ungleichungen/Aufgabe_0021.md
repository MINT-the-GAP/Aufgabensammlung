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

comment: Löse eine Sachaufgabe zu Datenvolumen bei Handytarifen mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Datenvolumen bei Handytarifen


Tarif A kostet 8 € Grundpreis und 3 € je GB. Tarif B kostet 2 € Grundpreis und 5 € je GB.  
**Berechne**, ab welchem Datenvolumen $x$ (in GB) Tarif A nicht teurer als Tarif B ist.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 3 ]] $\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
8 + 3x &\leq 2 + 5x \\
8 - 2 &\leq 5x - 3x \quad \left|\, -2,\,-3x \right. \\
6 &\leq 2x \quad \left|\, :2 \right. \\
x &\geq 3
\end{align*}
$$
******************
