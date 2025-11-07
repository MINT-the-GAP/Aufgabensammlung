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




tags: Gleichungssysteme, Sachaufgabe, schwer, normal, Berechnen

comment: Löse eine Sachaufgabe zu Zuckergehalten in Säften mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Zuckergehalten in Säften


Es werden drei Fruchtsäfte mit unterschiedlichen Zuckergehalten gemischt: Saft A enthält $120\,\text{g}$ Zucker je Liter, Saft B $80\,\text{g}$ je Liter und Saft C $50\,\text{g}$ je Liter. Insgesamt werden $9$ Liter gemischt. Der Gesamtzuckergehalt beträgt $815\,\text{g}$. Außerdem wird von Saft B einen halben Liter mehr als von Saft A verwendet.  
**Berechne** die Literanteile der drei Säfte.

<!-- data-solution-button="5"-->
$x$ = [[  7/2  ]], $y$ = [[  4  ]] und $z$ = [[  3/2  ]]
@Algebrite.check([ 7/2; 4; 3/2 ])
************
Bezeichne mit $x$ die Liter von Saft A, mit $y$ die Liter von Saft B und mit $z$ die Liter von Saft C.
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\
II.& \qquad 120x + 80y + 50z = 815 \\
III.& \qquad y = x + \dfrac{1}{2} \\ \hline
I \cap III:& \qquad x + \left(x + \dfrac{1}{2}\right) + z = 9 \\
& \qquad 2x + z = \dfrac{17}{2} \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 120x + 80\!\left(x + \dfrac{1}{2}\right) + 50z = 815 \\
& \qquad 200x + 50z = 815 - 40 = 775 \quad \left| :25 \right. \\
& \qquad 8x + 2z = 31 \quad \text{(V)} \\ \hline
(V) - 2\cdot(IV):& \qquad (8x + 2z) - (4x + 2z) = 31 - 17 \\
& \qquad 4x = 14 \;\Rightarrow\; x = \dfrac{7}{2} \\[6pt]
III:& \qquad y = x + \dfrac{1}{2} = \dfrac{7}{2} + \dfrac{1}{2} = 4 \\[6pt]
I:& \qquad z = 9 - x - y = 9 - \dfrac{7}{2} - 4 = \dfrac{3}{2}
\end{align*}
$$
Die Anteile betragen $ \dfrac{7}{2}\,\ell$ (Saft A), $4\,\ell$ (Saft B) und $ \dfrac{3}{2}\,\ell$ (Saft C).
************



