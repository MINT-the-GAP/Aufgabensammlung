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
  \dfrac{3}{5}x - 4 & = \dfrac{2}{7} + x    \quad \left|  + 4  \right. \\
  \dfrac{3}{5}x   & = \dfrac{30}{7} + x    \quad \left|  -x  \right. \\
  -\dfrac{2}{5}x   & = \dfrac{30}{7}    \quad \left|  \cdot 5  \right. \\
  -2x   & = \dfrac{150}{7}    \quad \left|  : 2  \right. \\
  -x   & = \dfrac{75}{7}    \quad \left|  \cdot (-1)  \right. \\
  x   & = -\dfrac{75}{7}     \\
\end{align*}
$$

Als erstes wird die Gleichung sortiert, indem auf [[  beiden Seiten  ]] des Gleichheitszeichen $+4$ gerechnet wird. Anschließend wird [[  -x  ]] auf beiden Seiten des [[  Gleichheitszeichen  ]] gerechnet, sodass in den nächsten Schritten nur noch die Punktrechnung zum Einsatz kommen kann. Der Vorfaktor stückweise entfernt. Zu nächst wird [[ mit   ]] $5$ [[  multipliziert  ]], dann nächst wird [[ durch ]] $2$ [[  dividiert      ]]. Das Vorzeichen wird abschließend noch mit der [[  Multiplikation  ]] mit $(-1)$ von der Unbekannten gelöst.







