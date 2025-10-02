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


import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md




tags: Äquivalenzumformung, Sachaufgabe, niedrig, leicht, Berechnen, 

comment: Löse eine Sachaufgabe mit Bezahlmodellen mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Trainingspässe im Sportzentrum

In einem Sportzentrum kann zwischen zwei Trainingspässen gewählt werden. Die Variante A sieht eine einmalige Kartengebühr 0,50 € vor, wobei 4,00 € pro Training noch verlangt werden. Im Pass B belaufen sich die einmaligen Kartengebühren auf 6,50 € und ein Training wird mit 2,50 € berechnet. **Berechne**, nach wie vielen Trainings die Gesamtkosten beider Pässe genau gleich sind.

<!-- data-solution-button="5"-->
$x$ = [[  4  ]]
@Algebrite.check(4)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
4x + \dfrac{1}{2} \;\stackrel{!}{=}\; \dfrac{5}{2}x + \dfrac{13}{2}
$$

$$
\begin{align*}
4x + \dfrac{1}{2} &= \dfrac{5}{2}x + \dfrac{13}{2} \quad \left|\, -\dfrac{5}{2}x \right.\\[2pt]
\left(4-\dfrac{5}{2}\right)x + \dfrac{1}{2} &= \dfrac{13}{2} \quad \left|\, -\dfrac{1}{2} \right.\\[2pt]
\dfrac{3}{2}x &= 6 \quad \left|\, :\dfrac{3}{2} \right.\\[2pt]
x &= 4
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{4\cdot4 + \dfrac{1}{2}}_{\text{Pass A}} = 16,5\ \text{€}  \\
&\quad\text{und}\quad  \\
&\underbrace{\dfrac{5}{2}\cdot4 + \dfrac{13}{2}}_{\text{Pass B}} = 10 + 6,5 = 16,5\ \text{€}\
\end{align*}
$$


Deutung: Für $x<4$ ist Pass A günstiger; für $x>4$ ist Pass B günstiger.

************