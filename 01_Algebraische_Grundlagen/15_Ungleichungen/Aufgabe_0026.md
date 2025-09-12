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

comment: Löse eine Sachaufgabe zum Saldo eines Kontos mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Saldo eines Kontos


Ein Konto weist zu Beginn einen Saldo von $-1200\,\mathrm{€}$ auf. Durch regelmäßige Einzahlungen erhöht sich der Saldo pro Woche um $450\,\mathrm{€}$.  
**Berechne** die Anzahl der Wochen, sodass der Saldo mindestens $300\,\mathrm{€}$ beträgt.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{R} \;|\; x \geq $ [[ 10/3 ]] $\}$
@Algebrite.check(10/3)
******************
$$
\begin{align*}
-1200 + 450x &\geq 300 \quad \left| \; +1200 \; \right. \\
450x &\geq 1500 \quad \left| \; :450 \; \right. \\
x &\geq \dfrac{1500}{450} \;=\; \dfrac{30}{9} \;=\; \dfrac{10}{3} \\
\end{align*}
$$
******************
