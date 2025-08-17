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



tags: Gleichungssysteme, mittel, normal, Berechnen

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
I.& \qquad 3x + 2y = 7 \\  
II.& \qquad 4x - y = 1  
\end{align*}
$$  
$x$ = [[  9/11  ]] @Algebrite.check(9/11) und  $y$ = [[  25/11  ]] @Algebrite.check(25/11)
************
$$
\begin{align*}
II. &\qquad 4x - y = 1 \quad \left| -4x \right. \\
&\qquad -y = 1 - 4x \quad \left| \cdot(-1) \right. \\
&\qquad y = 4x - 1 \\ \hline
I. \cap II. &\qquad 3x + 2(4x - 1) = 7 \\
&\qquad 3x + 8x - 2 = 7 \\
&\qquad 11x - 2 = 7 \quad \left| +2 \right. \\
&\qquad 11x = 9 \quad \left| :11 \right. \\
&\qquad x = \dfrac{9}{11} \\[6pt]
x \cap II. &\qquad 4 \cdot \dfrac{9}{11} - y = 1 \\
&\qquad \dfrac{36}{11} - y = 1 \quad \left| -\dfrac{36}{11} \right. \\
&\qquad -y = 1 - \dfrac{36}{11} = -\dfrac{25}{11} \quad \left| \cdot(-1) \right. \\
&\qquad y = \dfrac{25}{11}
\end{align*}
$$
************

</div>
<div class="flex-child">



<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 5x - 2y = 3 \\  
II.& \qquad x + 3y = 8  
\end{align*}
$$  
$x$ = [[  25/17  ]]  @Algebrite.check(25/17)  und  $y$ = [[  37/17  ]]  @Algebrite.check(37/17)
************
$$
\begin{align*}
II. &\qquad x + 3y = 8 \quad \left| -3y \right. \\
&\qquad x = 8 - 3y \\ \hline
I. \cap II. &\qquad 5(8 - 3y) - 2y = 3 \\
&\qquad 40 - 15y - 2y = 3 \\
&\qquad 40 - 17y = 3 \quad \left| -40 \right. \\
&\qquad -17y = -37 \quad \left| :(-17) \right. \\
&\qquad y = \dfrac{37}{17} \\[6pt]
y \cap II. &\qquad x + 3\cdot \dfrac{37}{17} = 8 \\
&\qquad x + \dfrac{111}{17} = 8 \quad \left| -\dfrac{111}{17} \right. \\
&\qquad x = \dfrac{136}{17} - \dfrac{111}{17} = \dfrac{25}{17}
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y = -1 \\  
II.& \qquad 3x - 2y = -16  
\end{align*}
$$  
$x$ = [[  -18/7  ]]  @Algebrite.check(-18/7) und  $y$ = [[  29/7  ]]   @Algebrite.check(29/7)
************
$$
\begin{align*}
I. &\qquad 2x + y = -1 \quad \left| -2x \right. \\
&\qquad y = -1 - 2x \\ \hline
I. \cap II.\; &\qquad 3x - 2(-1 - 2x) = -16 \\
&\qquad 3x + 2 + 4x = -16 \\
&\qquad 7x + 2 = -16 \quad \left| -2 \right. \\
&\qquad 7x = -18 \quad \left| :7 \right. \\
&\qquad x = -\dfrac{18}{7} \\[6pt]
x \cap I.\; &\qquad 2\!\left(-\dfrac{18}{7}\right) + y = -1 \\
&\qquad -\dfrac{36}{7} + y = -1 \quad \left| +\dfrac{36}{7} \right. \\
&\qquad y = -\dfrac{7}{7} + \dfrac{36}{7} = \dfrac{29}{7}
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x + 3y = 7 \\  
II.& \qquad 2x - y = -5  
\end{align*}
$$  
$x$ = [[  -2/5  ]]  @Algebrite.check(-2/5) und  $y$ = [[  13/5  ]] @Algebrite.check(13/5)
************
$$
\begin{align*}
II.& \qquad 2x - y = -5 \quad \left| -2x \right. \\
&\qquad -y = -5 - 2x \quad \left| \cdot(-1) \right. \\
&\qquad y = 5 + 2x \\ \hline
I. \cap II.\; &\qquad 4x + 3(5 + 2x) = 7 \\
&\qquad 4x + 15 + 6x = 7 \\
&\qquad 10x + 15 = 7 \quad \left| -15 \right. \\
&\qquad 10x = -8 \quad \left| :10 \right. \\
&\qquad x = -\dfrac{2}{5} \\[6pt]
x \cap II.\; &\qquad 2\!\left(-\dfrac{2}{5}\right) - y = -5 \\
&\qquad -\dfrac{4}{5} - y = -5 \quad \left| +\dfrac{4}{5} \right. \\
&\qquad -y = -\dfrac{21}{5} \quad \left| \cdot(-1) \right. \\
&\qquad y = \dfrac{21}{5} = \dfrac{13}{5}
\end{align*}
$$
************

</div>
</section>






