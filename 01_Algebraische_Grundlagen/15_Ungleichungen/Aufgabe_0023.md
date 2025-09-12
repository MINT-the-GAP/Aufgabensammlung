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

comment: Löse eine Sachaufgabe zur Bestuhlung einer Veranstaltung mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Bestuhlung einer Veranstaltung


Für eine Veranstaltung stehen bereits 12 Stühle bereit. Pro zusätzlich aufgestellter Reihe kommen 5 Stühle hinzu.  
**Berechne** die kleinste natürliche Zahl $x$ (zusätzliche Reihen), sodass insgesamt mindestens 47 Stühle vorhanden sind.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 7 ]] $\}$
@Algebrite.check(7)
******************
$$
\begin{align*}
12 + 5x &\geq 47 \\
5x &\geq 47 - 12 \quad \left|\, -12 \right. \\
5x &\geq 35 \quad \left|\, :5 \right. \\
x &\geq 7
\end{align*}
$$
******************