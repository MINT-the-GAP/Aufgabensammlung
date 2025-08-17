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



tags: Gleichungssysteme, leicht, niedrig, Berechnen

comment: Löse Gleichungssysteme mit natürlichen Zahlen.

author: Martin Lommatzsch

-->




# Gleichungssysteme lösen


**Berechne** die Lösungen des gegebenen Gleichungssystems.









<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x - y + z = 8 \\  
III.& \qquad x + 2y - z = 1  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  3  ]], $z$ = [[  7  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x - y + z = 8 \\  
III.& \qquad x + 2y - z = 1  \\  \hline
I. &\qquad x + y + z = 12 \quad \left| -x - y \right. \\
&\qquad z = 12 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (12 - x - y) = 8 \\
&\qquad x - 2y + 12 = 8 \quad \left| -12 \right. \\
&\qquad x - 2y = -4   \quad \left| +2y \right. \\
&\qquad x = 2y -4  \\ 
I. \cap III.\; &\qquad x + 2y - (12 - x - y) = 1 \\
&\qquad 2x + 3y - 12 = 1 \quad \left| +12 \right. \\
&\qquad 2x + 3y = 13 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y - 4 \\
 &\qquad 2(2y-4) + 3y = 13 \\
&\qquad 4y - 8 + 3y = 13 \\
&\qquad 7y = 21 \quad \left| :7 \right. \\
&\qquad y = 3 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y-4 = 2 \cdot 3-4 = 2 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 12 - 2 - 3 = 7
\end{align*}
$$
************

</div>
<div class="flex-child">

__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 10 \\  
II.& \qquad 2x - y + z = 9 \\  
III.& \qquad x + 3y - z = 4  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  2  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 10 \\  
II.& \qquad 2x - y + z = 9 \\  
III.& \qquad x + 3y - z = 4  \\  \hline
I. &\qquad x + y + z = 10 \quad \left| -x - y \right. \\
&\qquad z = 10 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (10 - x - y) = 9 \\
&\qquad x - 2y + 10 = 9 \quad \left| -10 \right. \\
&\qquad x - 2y = -1 \quad \left| +2y \right. \\
&\qquad x = 2y - 1 \\ 
I. \cap III.\; &\qquad x + 3y - (10 - x - y) = 4 \\
&\qquad 2x + 4y - 10 = 4 \quad \left| +10 \right. \\
&\qquad 2x + 4y = 14 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y - 1 \\
 &\qquad 2(2y-1) + 4y = 14 \\
&\qquad 4y - 2 + 4y = 14 \\
&\qquad 8y = 16 \quad \left| :8 \right. \\
&\qquad y = 2 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y-1 = 2\cdot 2 - 1 = 3 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 10 - 3 - 2 = 5
\end{align*}
$$
************


</div>
<div class="flex-child">

__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y + z = 15 \\  
II.& \qquad x + 2y + 3z = 24 \\  
III.& \qquad 3x - y + z = 17  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  1  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad 2x + y + z = 15 \\  
II.& \qquad x + 2y + 3z = 24 \\  
III.& \qquad 3x - y + z = 17  \\  \hline
I. &\qquad 2x + y + z = 15 \quad \left| -2x - z \right. \\
&\qquad y = 15 - 2x - z \\
III. &\qquad 3x - y + z = 17 \quad \left| -3x - z \right. \\
&\qquad -y = 17 - 3x - z \quad \left| \cdot(-1) \right. \\
&\qquad y = 3x + z - 17 \\ \hline
I = III\; &\qquad 15 - 2x - z = 3x + z - 17 \\
&\qquad 32 = 5x + 2z \quad (A) \\
I \cap II\; &\qquad x + 2(15 - 2x - z) + 3z = 24 \\
&\qquad x + 30 - 4x - 2z + 3z = 24 \\
&\qquad -3x + z + 30 = 24 \quad \left| -30 \right. \\
&\qquad z = 3x - 6 \quad (B) \\ \hline
(A) \cap (B)\; &\qquad 32 = 5x + 2(3x - 6) \\
&\qquad 32 = 11x - 12 \quad \left| +12 \right. \\
&\qquad 44 = 11x \quad \left| :11 \right. \\
&\qquad x = 4,\;\; z = 3\cdot 4 - 6 = 6, \;\; y = 15 - 2\cdot 4 - 6 = 1
\end{align*}
$$
************

</div>
<div class="flex-child">

__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + 2y + z = 16 \\  
II.& \qquad 2x + y - z = 11 \\  
III.& \qquad x - y + 2z = 7  
\end{align*}
$$  
$x$ = [[  5  ]], $y$ = [[  4  ]], $z$ = [[  3  ]]
************
$$
\begin{align*}
I.& \qquad x + 2y + z = 16 \\  
II.& \qquad 2x + y - z = 11 \\  
III.& \qquad x - y + 2z = 7  \\  \hline
I.+II.\; &\qquad (x+2y+z) + (2x+y-z) = 16 + 11 \\
&\qquad 3x + 3y = 27 \quad \left| :3 \right. \\
&\qquad x + y = 9 \quad (A) \\
I.\cdot 2 \; &\qquad 2x + 4y + 2z = 32 \\
(I.\cdot 2) - III.\; &\qquad (2x - x) + (4y - (-y)) + (2z - 2z) = 32 - 7 \\
&\qquad x + 5y = 25 \quad (B) \\ \hline
(A) &\qquad x = 9 - y \\
(A) \cap (B) &\qquad (9 - y) + 5y = 25 \\
&\qquad 4y + 9 = 25 \quad \left| -9 \right. \\
&\qquad 4y = 16 \quad \left| :4 \right. \\
&\qquad y = 4,\;\; x = 9 - 4 = 5,\;\; z: \; 5 + 2\cdot 4 + z = 16 \Rightarrow z = 3
\end{align*}
$$
************

</div>
</section>






