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


tags: Gleichungssysteme, leicht, sehr niedrig, Berechnen

comment: Löse einfache Gleichungssystem.

author: Martin Lommatzsch

-->




# Einfache Gleichungssysteme


**Berechne** die Lösungen des gegebenen Gleichungssystems.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y = 11 \\  
II.& \qquad x + 3y = 13  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  3  ]]
************
$$
\begin{align*}
I. &\qquad 2x + y = 11 \quad \left| -2x  \right. \\
II. &\qquad x + 3y = 13    \\ \hline
I. &\qquad y = 11 - 2x \\  
I. \cap II.  &\qquad x + 3(11-2x) = 13   \\
& \qquad x + 33 - 6x = 13 \quad \left| -33 \right. \\
& \qquad -5x = -20 \quad \left| :(-5) \right. \\
& \qquad x = 4 \\
x \cap I. &\qquad 2\cdot 4 + y = 11 \\
& \qquad 8 + y = 11 \quad \left| -8 \right. \\
& \qquad y = 3
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + 2y = 19 \\  
II.& \qquad 2x + y  = 12  
\end{align*}
$$  
$x$ = [[  5  ]]  und  $y$ = [[  2  ]]
************
$$
\begin{align*}
I. & \qquad 3x + 2y = 19 \\
II. & \qquad 2x + y  = 12 \quad \left| -2x \right. \\ \hline
II. &  \qquad y = 12 - 2x \\ 
I.\cap II. & \qquad 3x + 2(12 - 2x) = 19 \\
&  \qquad 3x + 24 - 4x = 19 \\
&  \qquad -x + 24 = 19 \quad \left| -24 \right. \\
&  \qquad-x = -5 \quad \left| \cdot(-1) \right. \\
&  \qquad x = 5 \\
x\cap II. &  \qquad 2\cdot 5 + y = 12 \\
&  \qquad 10 + y = 12 \quad \left| -10 \right. \\
&  \qquad y = 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y &= 9 \\  
II.& \qquad 2x - y &= 3  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  5  ]]
************
$$
\begin{align*}
I.\ &\qquad x + y = 9 \quad \left| -x \right. \\
II.\ &\qquad 2x - y = 3 \\ \hline
I.\ &\qquad y = 9 - x \\
I.\cap II.\ &\qquad 2x - (9 - x) = 3 \\
&\qquad 2x - 9 + x = 3 \\
&\qquad 3x - 9 = 3 \quad \left| +9 \right. \\
&\qquad 3x = 12 \quad \left| :3 \right. \\
&\qquad x = 4 \\
x\cap I.\ &\qquad 4 + y = 9 \quad \left| -4 \right. \\
&\qquad y = 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x - y &= 7 \\  
II.& \qquad x + 2y &= 13  
\end{align*}
$$  
$x$ = [[  3  ]]  und  $y$ = [[  5  ]]
************
$$
\begin{align*}
I.\ &\qquad 4x - y = 7 \quad \left| -4x \right. \\
II.\ &\qquad x + 2y = 13 \\ \hline
I.\ &\qquad -y = 7 - 4x \quad \left| \cdot(-1) \right. \\
I.\ &\qquad y = 4x - 7 \\
I.\cap II.\ &\qquad x + 2(4x - 7) = 13 \\
&\qquad x + 8x - 14 = 13 \\
&\qquad 9x - 14 = 13 \quad \left| +14 \right. \\
&\qquad 9x = 27 \quad \left| :9 \right. \\
&\qquad x = 3 \\
x\cap I.\ &\qquad 4\cdot 3 - y = 7 \\
&\qquad 12 - y = 7 \quad \left| -12 \right. \\
&\qquad -y = -5 \quad \left| \cdot(-1) \right. \\
&\qquad y = 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + y &= 16 \\  
II.& \qquad 2x + 3y &= 20  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  4  ]]
************
$$
\begin{align*}
I.\ &\qquad 3x + y = 16 \quad \left| -3x \right. \\
II.\ &\qquad 2x + 3y = 20 \\ \hline
I.\ &\qquad y = 16 - 3x \\
I.\cap II.\ &\qquad 2x + 3(16 - 3x) = 20 \\
&\qquad 2x + 48 - 9x = 20 \\
&\qquad -7x + 48 = 20 \quad \left| -48 \right. \\
&\qquad -7x = -28 \quad \left| :(-7) \right. \\
&\qquad x = 4 \\
x\cap I.  &\qquad 3\cdot 4 + y = 16 \\
&\qquad 12 + y = 16 \quad \left| -12 \right. \\
&\qquad y = 4
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x + y &= 24 \\  
II.& \qquad x + 2y &= 13  
\end{align*}
$$  
$x$ = [[  5  ]]  und  $y$ = [[  4  ]]
************
$$
\begin{align*}
I.\qquad &\ 4x + y = 24 \quad \left| -4x \right. \\
II.\qquad &\ x + 2y = 13 \\ \hline
I.\qquad &\ y = 24 - 4x \\
I.\cap II.\ &\qquad x + 2(24 - 4x) = 13 \\
&\qquad x + 48 - 8x = 13 \\
&\qquad -7x + 48 = 13 \quad \left| -48 \right. \\
&\qquad -7x = -35 \quad \left| :(-7) \right. \\
&\qquad x = 5 \\
x\cap I.  &\qquad 4\cdot 5 + y = 24 \\
&\qquad 20 + y = 24 \quad \left| -20 \right. \\
&\qquad y = 4
\end{align*}
$$
************
</div>
</section>