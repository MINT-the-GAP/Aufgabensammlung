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




tags: Gleichungssysteme, Bruchrechnung, negative Zahlen, schwer, normal, Berechnen

comment: Löse Gleichungssysteme mit rationalen Zahlen.

author: Martin Lommatzsch

-->




# Gleichungssysteme lösen


**Berechne** die Lösungen des gegebenen Gleichungssystems.





<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__  
$$
\begin{align*}
I.& \qquad 8x + 6y + 5z = 6 \\
II.& \qquad 4x - 6y + 10z = -3 \\
III.& \qquad -4x + 12y - 30z = 13
\end{align*}
$$
$x$ = [[  3/4  ]],  $y$ = [[  1/3  ]]  und  $z$ = [[  -2/5  ]]
@Algebrite.check([ 3/4; 1/3; -2/5 ])
************
$$
\begin{align*}
I.& \qquad 8x + 6y + 5z = 6 \\
II.& \qquad 4x - 6y + 10z = -3 \\
III.& \qquad -4x + 12y - 30z = 13 \\ \hline
IV := I + II:&\qquad 12x + 15z = 3 \\[6pt]
V := 2\cdot I - III:&\qquad 20x + 40z = -1 \\[6pt]
(IV)\cdot 5 \;+\; (V)\cdot(-3):&\qquad -45z = 18 \;\Rightarrow\; z = -\dfrac{2}{5} \\[6pt]
z \cap IV:&\qquad 12x + 15\!\left(-\dfrac{2}{5}\right) = 3 \;\Rightarrow\; 12x - 6 = 3 \;\Rightarrow\; x = \dfrac{3}{4} \\[6pt]
z,x \cap I:&\qquad 8\cdot\dfrac{3}{4} + 6y + 5\!\left(-\dfrac{2}{5}\right) = 6 \;\Rightarrow\; 6 + 6y - 2 = 6 \;\Rightarrow\; y = \dfrac{1}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__  
$$
\begin{align*}
I.& \qquad 6x + 8y + 9z = 9 \\
II.& \qquad 12x - 8y + 3z = -10 \\
III.& \qquad -6x + 16y - 12z = 7
\end{align*}
$$
$x$ = [[  -1/2  ]],  $y$ = [[  3/4  ]]  und  $z$ = [[  2/3  ]]
@Algebrite.check([ -1/2; 3/4; 2/3 ])
************
$$
\begin{align*}
I.& \qquad 6x + 8y + 9z = 9 \\
II.& \qquad 12x - 8y + 3z = -10 \\
III.& \qquad -6x + 16y - 12z = 7 \\ \hline
IV := I + II:&\qquad 18x + 12z = -1 \\[6pt]
V := 2\cdot I - III:&\qquad 18x + 30z = 11 \\[6pt]
V - IV:&\qquad 18z = 12 \;\Rightarrow\; z = \dfrac{2}{3} \\[6pt]
z \cap IV:&\qquad 18x + 12\!\left(\dfrac{2}{3}\right) = -1 \;\Rightarrow\; 18x + 8 = -1 \;\Rightarrow\; x = -\dfrac{1}{2} \\[6pt]
x,z \cap I:&\qquad 6\!\left(-\dfrac{1}{2}\right) + 8y + 9\!\left(\dfrac{2}{3}\right) = 9 \;\Rightarrow\; -3 + 8y + 6 = 9 \;\Rightarrow\; y = \dfrac{3}{4}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__  
$$
\begin{align*}
I.& \qquad 9x + 6y + 3z = 7 \\
II.& \qquad 12x - 6y + 6z = 15 \\
III.& \qquad -9x + 12y - 15z = -19
\end{align*}
$$
$x$ = [[  5/6  ]],  $y$ = [[  -1/3  ]]  und  $z$ = [[  1/2  ]]
@Algebrite.check([ 5/6; -1/3; 1/2 ])
************
$$
\begin{align*}
I.& \qquad 9x + 6y + 3z = 7 \\
II.& \qquad 12x - 6y + 6z = 15 \\
III.& \qquad -9x + 12y - 15z = -19 \\ \hline
IV := I + II:&\qquad 21x + 9z = 22 \\[6pt]
V := 2\cdot I - III:&\qquad 27x + 21z = 33 \\[6pt]
(IV)\cdot 7 \;+\; (V)\cdot(-3):&\qquad 66x = 55 \;\Rightarrow\; x = \dfrac{5}{6} \\[6pt]
x \cap IV:&\qquad 21\!\left(\dfrac{5}{6}\right) + 9z = 22 \;\Rightarrow\; \dfrac{105}{6} + 9z = 22 \;\Rightarrow\; 9z = \dfrac{9}{2} \;\Rightarrow\; z = \dfrac{1}{2} \\[6pt]
x,z \cap I:&\qquad 9\!\left(\dfrac{5}{6}\right) + 6y + 3\!\left(\dfrac{1}{2}\right) = 7 \;\Rightarrow\; \dfrac{15}{2} + 6y + \dfrac{3}{2} = 7 \;\Rightarrow\; 6y = -2 \;\Rightarrow\; y = -\dfrac{1}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$h)\;\;$__  
$$
\begin{align*}
I.& \qquad 5x + 10y + 4z = 8 \\
II.& \qquad 15x - 10y + 8z = -3 \\
III.& \qquad -5x + 20y - 12z = 15
\end{align*}
$$
$x$ = [[  2/5  ]],  $y$ = [[  7/10  ]]  und  $z$ = [[  -1/4  ]]
@Algebrite.check([ 2/5; 7/10; -1/4 ])
************
$$
\begin{align*}
I.& \qquad 5x + 10y + 4z = 8 \\
II.& \qquad 15x - 10y + 8z = -3 \\
III.& \qquad -5x + 20y - 12z = 15 \\ \hline
IV := I + II:&\qquad 20x + 12z = 5 \\[6pt]
V := 2\cdot I - III:&\qquad 15x + 20z = 1 \\[6pt]
(IV)\cdot 5 \;+\; (V)\cdot(-3):&\qquad 55x = 22 \;\Rightarrow\; x = \dfrac{2}{5} \\[6pt]
x \cap IV:&\qquad 20\!\left(\dfrac{2}{5}\right) + 12z = 5 \;\Rightarrow\; 8 + 12z = 5 \;\Rightarrow\; z = -\dfrac{1}{4} \\[6pt]
x,z \cap I:&\qquad 5\!\left(\dfrac{2}{5}\right) + 10y + 4\!\left(-\dfrac{1}{4}\right) = 8 \;\Rightarrow\; 2 + 10y - 1 = 8 \;\Rightarrow\; y = \dfrac{7}{10}
\end{align*}
$$
************
</div>


</section>





