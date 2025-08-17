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
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 2y - z = 0  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  1  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 2y - z = 0  \\  \hline
I. &\qquad x + y + z = 11 \quad \left| -x - y \right. \\
&\qquad z = 11 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (11 - x - y) = 13 \\
&\qquad x - 2y + 11 = 13 \quad \left| -11 \right. \\
&\qquad x - 2y = 2 \quad \left| +2y \right. \\
&\qquad x = 2y + 2 \\ 
I. \cap III.\; &\qquad x + 2y - (11 - x - y) = 0 \\
&\qquad 2x + 3y - 11 = 0 \quad \left| +11 \right. \\
&\qquad 2x + 3y = 11 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y + 2 \\
&\qquad 2(2y+2) + 3y = 11 \\
&\qquad 4y + 4 + 3y = 11 \\
&\qquad 7y = 7 \quad \left| :7 \right. \\
&\qquad y = 1 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y+2 = 2 \cdot 1 + 2 = 4 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 11 - 4 - 1 = 6
\end{align*}
$$
************


</div>
<div class="flex-child">

__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x + y - z = 7 \\  
III.& \qquad x + 3y + z = 22  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  5  ]], $z$ = [[  4  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x + y - z = 7 \\  
III.& \qquad x + 3y + z = 22  \\  \hline
III. - I.\; &\qquad (x+3y+z) - (x+y+z) = 22 - 12 \\
&\qquad 2y = 10 \quad \left| :2 \right. \\
&\qquad y = 5 \\ \hline
I. + II.\; &\qquad (x+y+z) + (2x+y-z) = 12 + 7 \\
&\qquad 3x + 2y = 19 \\
y \cap (I.+II.)\; &\qquad 3x + 2\cdot 5 = 19 \\
&\qquad 3x + 10 = 19 \quad \left| -10 \right. \\
&\qquad 3x = 9 \quad \left| :3 \right. \\
&\qquad x = 3 \\ \hline
\left( x \wedge y \right) \cap I.\; &\qquad 3 + 5 + z = 12 \\
&\qquad z = 12 - 8 = 4
\end{align*}
$$
************

</div>
<div class="flex-child">

__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 3y - z = 3  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  2  ]], $z$ = [[  7  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 3y - z = 3  \\  \hline
I. &\qquad x + y + z = 13 \quad \left| -x - y \right. \\
&\qquad z = 13 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (13 - x - y) = 13 \\
&\qquad x - 2y + 13 = 13 \quad \left| -13 \right. \\
&\qquad x - 2y = 0 \quad \left| +2y \right. \\
&\qquad x = 2y \\ 
I. \cap III.\; &\qquad x + 3y - (13 - x - y) = 3 \\
&\qquad 2x + 4y - 13 = 3 \quad \left| +13 \right. \\
&\qquad 2x + 4y = 16 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y \\
 &\qquad 2(2y) + 4y = 16 \\
&\qquad 4y + 4y = 16 \\
&\qquad 8y = 16 \quad \left| :8 \right. \\
&\qquad y = 2 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y = 2 \cdot 2 = 4 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 13 - 4 - 2 = 7
\end{align*}
$$
************

</div>
<div class="flex-child">

__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 14 \\  
II.& \qquad 2x + y - z = 10 \\  
III.& \qquad x + 2y + 3z = 27  
\end{align*}
$$  
$x$ = [[  6  ]], $y$ = [[  3  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 14 \\  
II.& \qquad 2x + y - z = 10 \\  
III.& \qquad x + 2y + 3z = 27  \\  \hline
I. &\qquad x + y + z = 14 \quad \left| -x - y \right. \\
&\qquad z = 14 - x - y \\ \hline
I. \cap II.\; &\qquad 2x + y - (14 - x - y) = 10 \\
&\qquad 3x + 2y - 14 = 10 \quad \left| +14 \right. \\
&\qquad 3x + 2y = 24 \quad (A) \\ 
I. \cap III.\; &\qquad x + 2y + 3(14 - x - y) = 27 \\
&\qquad x + 2y + 42 - 3x - 3y = 27 \\
&\qquad -2x - y + 42 = 27 \quad \left| -42 \right. \\
&\qquad -2x - y = -15 \quad \left| \cdot(-1) \right. \\
&\qquad 2x + y = 15 \quad (B) \\ \hline
(B)\cdot 2\; &\qquad 4x + 2y = 30 \\
\big((B)\cdot 2\big) - (A)\; &\qquad (4x - 3x) + (2y - 2y) = 30 - 24 \\
&\qquad x = 6 \\
x \cap (B)\; &\qquad 2\cdot 6 + y = 15 \;\Rightarrow\; y = 3 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 14 - 6 - 3 = 5
\end{align*}
$$
************

</div>
</section>






