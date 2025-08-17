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



tags: Gleichungssysteme, Additionsverfahren, leicht, niedrig, Berechnen

comment: Löse Gleichungssysteme mit natürlichen Zahlen mit dem Additionsverfahren.

author: Martin Lommatzsch

-->




# Additionsverfahren


**Berechne** die Lösungen des gegebenen Gleichungssystems mit dem Additionsverfahren.








<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x + 3y - z = 7 \\  
III.& \qquad 3x - y + 2z = 15  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  3  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\
II.& \qquad 2x + 3y - z = 7 \\
III.& \qquad 3x - y + 2z = 15 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+2x) + (y+3y) + (z - z) = 11 + 7 \\
& \qquad 3x + 4y = 18 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } III.-2\cdot I.& \qquad (3x-2x) + (-y-2y) + (2z-2z) = 15 - 22 \\
& \qquad x - 3y = -7 \quad (B) \\ \hline
(A) - 3\cdot (B)\!:& \qquad (3x-3x) + (4y-(-9y)) = 18 - (-21) \\
& \qquad 13y = 39 \quad \left| :13 \right. \\
& \qquad y = 3 \\[6pt]
y \cap (B):& \qquad x - 3\cdot 3 = -7 \;\Rightarrow\; x = 2 \\[6pt]
(x \wedge y) \cap I.:& \qquad 2 + 3 + z = 11 \;\Rightarrow\; z = 6
\end{align*}
$$
************


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 2x + y - z = 1 \\  
III.& \qquad x + 2y + 3z = 30  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  1  ]], $z$ = [[  8  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\
II.& \qquad 2x + y - z = 1 \\
III.& \qquad x + 2y + 3z = 30 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+2x) + (y+y) + (z - z) = 13 + 1 \\
& \qquad 3x + 2y = 14 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } (III.+II.) - 2\cdot I.& \qquad (3x-2x) + (3y-2y) + (2z-2z) = 31 - 26 \\
& \qquad x + y = 5 \quad (B) \\ \hline
2\cdot (B) - (A)\!:& \qquad (2x+2y) - (3x+2y) = 10 - 14 \\
& \qquad -x = -4 \;\Rightarrow\; x = 4 \\[6pt]
x \cap (B):& \qquad 4 + y = 5 \;\Rightarrow\; y = 1 \\[6pt]
(x \wedge y) \cap I.:& \qquad 4 + 1 + z = 13 \;\Rightarrow\; z = 8
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\  
II.& \qquad 2x - y + z = 4 \\  
III.& \qquad 3x + y - z = 11  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  4  ]], $z$ = [[  2  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\
II.& \qquad 2x - y + z = 4 \\
III.& \qquad 3x + y - z = 11 \\ \hline
\text{(Eliminiere } z\text{): } II.+III.\; &\qquad (2x+3x) + (-y+y) + (z - z) = 4 + 11 \\
&\qquad 5x = 15 \quad \left| :5 \right. \\
&\qquad x = 3 \\[6pt]
\text{(Eliminiere } z\text{): } I.-II.\; &\qquad (x-2x) + (y - (-y)) + (z - z) = 9 - 4 \\
&\qquad -x + 2y = 5 \quad (A) \\[6pt]
x \cap (A)\; &\qquad -3 + 2y = 5 \quad \left| +3 \right. \\
&\qquad 2y = 8 \quad \left| :2 \right. \\
&\qquad y = 4 \\[6pt]
(x \wedge y) \cap I.\; &\qquad 3 + 4 + z = 9 \\
&\qquad z = 2
\end{align*}
$$
************


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + 2y + z = 18 \\  
II.& \qquad 3x - y + z = 7 \\  
III.& \qquad 2x + 3y - z = 13  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  5  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + 2y + z = 18 \\
II.& \qquad 3x - y + z = 7 \\
III.& \qquad 2x + 3y - z = 13 \\ \hline
\text{(Eliminiere } z\text{): } II.+III.\; &\qquad (3x+2x) + (-y+3y) + (z - z) = 7 + 13 \\
&\qquad 5x + 2y = 20 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } I.-II.\; &\qquad (x-3x) + (2y - (-y)) + (z - z) = 18 - 7 \\
&\qquad -2x + 3y = 11 \quad (B) \\ \hline
(A)\cdot 3 - (B)\cdot 2\; &\qquad (15x+6y) - (-4x+6y) = 60 - 22 \\
&\qquad 19x = 38 \quad \left| :19 \right. \\
&\qquad x = 2 \\[6pt]
x \cap (A)\; &\qquad 5\cdot 2 + 2y = 20 \\
&\qquad 10 + 2y = 20 \quad \left| -10 \right. \\
&\qquad 2y = 10 \quad \left| :2 \right. \\
&\qquad y = 5 \\[6pt]
(x \wedge y) \cap I.\; &\qquad 2 + 2\cdot 5 + z = 18 \\
&\qquad 12 + z = 18 \quad \left| -12 \right. \\
&\qquad z = 6
\end{align*}
$$
************

</div>
</section>


