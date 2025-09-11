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





tags: Gleichungssysteme, schwer, normal, Berechnen

comment: Löse Gleichungssysteme mit rationalen Zahlen.

author: Martin Lommatzsch

-->




# Gleichungssysteme lösen


**Berechne** die Lösungen des gegebenen Gleichungssystems.


<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + 3y = 8 \\  
II.& \qquad 5x - y = 4  
\end{align*}
$$  
$x$ = [[  1  ]] und  $y$ = [[  2  ]] 
@Algebrite.check([ 1; 2 ])
************
$$
\begin{align*}
II.& \qquad 5x - y = 4 \quad \left| -5x \right. \\
& \qquad -y = 4 - 5x \quad \left| \cdot(-1) \right. \\
& \qquad y = 5x - 4 \\ \hline
I. \cap II.& \qquad 2x + 3(5x - 4) = 8 \\
& \qquad 2x + 15x - 12 = 8 \\
& \qquad 17x - 12 = 8 \quad \left| +12 \right. \\
& \qquad 17x = 20 \quad \left| :17 \right. \\
& \qquad x = 1 \\[6pt]
x \cap II.& \qquad y = 5\cdot 1 - 4 = 1 \\
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x - 2y = -4 \\  
II.& \qquad x + y = 5  
\end{align*}
$$  
$x$ = [[  2  ]] und  $y$ = [[  3  ]] 
@Algebrite.check([ 2; 3 ])
************
$$
\begin{align*}
II.& \qquad x + y = 5 \quad \left| -x \right. \\
& \qquad y = 5 - x \\ \hline
I. \cap II.& \qquad 3x - 2(5 - x) = -4 \\
& \qquad 3x - 10 + 2x = -4 \\
& \qquad 5x - 10 = -4 \quad \left| +10 \right. \\
& \qquad 5x = 6 \quad \left| :5 \right. \\
& \qquad x = 2 \\[6pt]
x \cap II.& \qquad y = 5 - 2 = 3
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x + y = 10 \\  
II.& \qquad 2x - 3y = -4  
\end{align*}
$$  
$x$ = [[  2  ]] und  $y$ = [[  2  ]] 
@Algebrite.check([ 2; 2 ])
************
$$
\begin{align*}
I.& \qquad 4x + y = 10 \quad \left| -4x \right. \\
& \qquad y = 10 - 4x \\ \hline
II. \cap I.& \qquad 2x - 3(10 - 4x) = -4 \\
& \qquad 2x - 30 + 12x = -4 \\
& \qquad 14x - 30 = -4 \quad \left| +30 \right. \\
& \qquad 14x = 26 \quad \left| :14 \right. \\
& \qquad x = 2 \\[6pt]
x \cap I.& \qquad y = 10 - 4\cdot 2 = 2
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 6x - y = 7 \\  
II.& \qquad 2x + 3y = 1  
\end{align*}
$$  
$x$ = [[  1  ]] und  $y$ = [[  -1  ]] 
@Algebrite.check([ 1; -1 ])
************
$$
\begin{align*}
I.& \qquad 6x - y = 7 \quad \left| -6x \right. \\
& \qquad -y = 7 - 6x \quad \left| \cdot(-1) \right. \\
& \qquad y = 6x - 7 \\ \hline
II. \cap I.& \qquad 2x + 3(6x - 7) = 1 \\
& \qquad 2x + 18x - 21 = 1 \\
& \qquad 20x - 21 = 1 \quad \left| +21 \right. \\
& \qquad 20x = 22 \quad \left| :20 \right. \\
& \qquad x = 1 \\[6pt]
x \cap I.& \qquad y = 6\cdot 1 - 7 = -1
\end{align*}
$$
************
</div>
</section>






