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
I.& \qquad x + y + z = 9 \\  
II.& \qquad 2x - y + z = 8 \\  
III.& \qquad x + 3y - z = 5  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  2  ]], $z$ = [[  4  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\
II.& \qquad 2x - y + z = 8 \\
III.& \qquad x + 3y - z = 5 \\ \hline
\text{(Eliminiere } z\text{): } I.+III.& \qquad (x+x) + (y+3y) + (z - z) = 9 + 5 \\
& \qquad 2x + 4y = 14 \quad (A) \\
II.+III.& \qquad (2x+x) + (-y+3y) + (z - z) = 8 + 5 \\
& \qquad 3x + 2y = 13 \quad (B) \\ \hline
2\cdot (B) - (A)\!:& \qquad (6x+4y) - (2x+4y) = 26 - 14 \\
& \qquad 4x = 12 \quad \left| :4 \right. \\
& \qquad x = 3 \\
x \cap (A):& \qquad 2\cdot 3 + 4y = 14 \\
& \qquad 6 + 4y = 14 \quad \left| -6 \right. \\
& \qquad 4y = 8 \quad \left| :4 \right. \\
& \qquad y = 2 \\
(x \wedge y) \cap I.:& \qquad 3 + 2 + z = 9 \\
& \qquad z = 4
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y + z = 16 \\  
II.& \qquad x + 2y - z = 5 \\  
III.& \qquad 3x - y + 2z = 19  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  3  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad 2x + y + z = 16 \\
II.& \qquad x + 2y - z = 5 \\
III.& \qquad 3x - y + 2z = 19 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (2x+x) + (y+2y) + (z - z) = 16 + 5 \\
& \qquad 3x + 3y = 21 \quad (A) \\ 
III. + 2\cdot II.& \qquad (3x+2x) + (-y+4y) + (2z - 2z) = 19 + 10 \\
& \qquad 5x + 3y = 29 \quad (B) \\ \hline
(B) - (A)& \qquad (5x+3y) - (3x+3y) = 29 - 21 \\
& \qquad 2x = 8 \quad \left| :2 \right. \\
& \qquad x = 4 \\
x \cap (A):& \qquad 3\cdot 4 + 3y = 21 \\
& \qquad 12 + 3y = 21 \quad \left| -12 \right. \\
& \qquad 3y = 9 \quad \left| :3 \right. \\
& \qquad y = 3 \\
(x \wedge y) \cap I.:& \qquad 2\cdot 4 + 3 + z = 16 \\
& \qquad 8 + 3 + z = 16 \\
& \qquad z = 5
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x + 3y - z = 11 \\  
III.& \qquad 3x - y + 2z = 12  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  4  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\
II.& \qquad 2x + 3y - z = 11 \\
III.& \qquad 3x - y + 2z = 12 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+2x) + (y+3y) + (z - z) = 11 + 11 \\
& \qquad 3x + 4y = 22 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } III.+2\cdot II.& \qquad (3x+4x) + (-y+6y) + (2z - 2z) = 12 + 22 \\
& \qquad 7x + 5y = 34 \quad (B) \\ \hline
(B)\cdot 4 - (A)\cdot 5\!:& \qquad (28x-15x) + (20y-20y) = 136 - 110 \\
& \qquad 13x = 26 \quad \left| :13 \right. \\
& \qquad x = 2 \\[6pt]
x \cap (A):& \qquad 3\cdot 2 + 4y = 22 \\
& \qquad 6 + 4y = 22 \quad \left| -6 \right. \\
& \qquad 4y = 16 \quad \left| :4 \right. \\
& \qquad y = 4 \\[6pt]
(x \wedge y) \cap I.:& \qquad 2 + 4 + z = 11 \;\Rightarrow\; z = 5
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 3x + y - z = 11 \\  
III.& \qquad 2x + 3y + z = 22  
\end{align*}
$$  
$x$ = [[  5  ]], $y$ = [[  2  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\
II.& \qquad 3x + y - z = 11 \\
III.& \qquad 2x + 3y + z = 22 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+3x) + (y+y) + (z - z) = 13 + 11 \\
& \qquad 4x + 2y = 24 \quad \left| :2 \right. \\
& \qquad 2x + y = 12 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } III.-I.& \qquad (2x - x) + (3y - y) + (z - z) = 22 - 13 \\
& \qquad x + 2y = 9 \quad (B) \\ \hline
2\cdot(B) - (A)\!:& \qquad (2x+4y) - (2x+y) = 18 - 12 \\
& \qquad 3y = 6 \quad \left| :3 \right. \\
& \qquad y = 2 \\[6pt]
y \cap (A):& \qquad 2x + 2 = 12 \quad \left| -2 \right. \\
& \qquad 2x = 10 \quad \left| :2 \right. \\
& \qquad x = 5 \\[6pt]
(x \wedge y) \cap I.:& \qquad 5 + 2 + z = 13 \;\Rightarrow\; z = 6
\end{align*}
$$
************


</div>
</section>





