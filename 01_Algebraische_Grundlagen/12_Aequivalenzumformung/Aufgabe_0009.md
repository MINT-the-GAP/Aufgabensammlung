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




tags: Äquivalenzumformung, leicht, sehr niedrig, Angeben, 

comment: Beschreibe die Äquivalenzumformung durch einen Lückentext.

author: Martin Lommatzsch

-->




# Lückentext zur Äquivalenzumformung


Im Folgenden ist eine Äquivalenzumformung dargestellt und das Vorgehen ist in einem Lückentext beschrieben. **Fülle** die Lücken **aus**.




$$
\begin{align*}
  \dfrac{3}{x-2} & = \dfrac{4}{3x+7}    \quad \left|  \cdot (x-2)  \right. \\
  3 & = \dfrac{4}{3x+7} (x-2)    \quad \left|  \cdot (3x+7) \right. \\
  3(3x+7) & = 4 (x-2)      \\
  9x+21 & = 4x-8     \quad \left| -4x \right.     \\
  5x+21 & = -8     \quad \left| -21 \right.     \\
  5x  & = -29     \quad \left| :5 \right.     \\
  x  & = -\dfrac{29}{5}       \\
\end{align*}
$$


Bei dieser Gleichung steht die gesuchte Unbekannte auf beiden Seiten des Gleichheitszeichen im [[  Nenner  ]]. Um dies aufzuheben wird mit $(x-2)$ und dann mit $(3x+7)$ auf beiden Seiten des Gleichheitszeichen [[  multipliziert  ]]. Die [[  Klammern  ]] sind dabei wichtig, aufgrund der Regel: Punkt- vor [[  Strichrechnung  ]]. Anschließend wird das [[  Distributivgesetz  ]] benutzt, um die Klammern aufzulösen. Nun wird die Gleichung mit der Strichrechnung sortiert, indem erst $-4x$ und dann [[  -21  ]] auf beiden Seiten des Gleichheitszeichen gerechnet wird. Abschließend wird durch den [[  Vorfaktor  ]] $5$ dividiert.









