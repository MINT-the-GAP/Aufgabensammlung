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


tags: Gleichungssysteme, sehr leicht, sehr niedrig, Angeben

comment: Gib die Lösungsverfahren an, die am jeweiligen Beispiel präsentiert wurde.

author: Martin Lommatzsch

-->




# Verfahrensbestimmung zum Lösen von Gleichungssystemen


**Gib** das verwendete Lösungsverfahren **an**.





<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ 
$$
\begin{align*}
I.& \qquad 2x + y = 11 \\
II.& \qquad 3x - y = 4 \\ \hline
I.+II.& \qquad (2x+3x) + (y-y) = 11+4 \\
& \qquad 5x = 15 \quad \left| :5 \right. \\
& \qquad x = 3 \\
x \cap I.& \qquad 2\cdot 3 + y = 11 \\
& \qquad 6 + y = 11 \quad \left| -6 \right. \\
& \qquad y = 5
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]
</div>
<div class="flex-child">
__$b)\;\;$__ 
$$
\begin{align*}
I.& \qquad 3x + 2y = 16 \\  
II.& \qquad x - y = 2  \\  \hline
II. &\qquad x - y = 2 \quad \left| -x \right. \\
&\qquad -y = 2 - x \quad \left| \cdot(-1) \right. \\
&\qquad y = x - 2 \\ \hline
I. \cap II. &\qquad 3x + 2(x-2) = 16 \\
&\qquad 3x + 2x - 4 = 16 \\
&\qquad 5x - 4 = 16 \quad \left| +4 \right. \\
&\qquad 5x = 20 \quad \left| :5 \right. \\
&\qquad x = 4 \\
x \cap II. &\qquad y = 4 - 2 = 2
\end{align*}
$$

<!-- data-solution-button="2"-->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]
</div>
<div class="flex-child">
__$c)\;\;$__ 
$$
\begin{align*}
I.& \qquad 4x - y = 10 \\  
II.& \qquad 2x + 3y = 12  \\  \hline
I. &\qquad 4x - y = 10 \quad \left| -4x \right. \\
&\qquad -y = 10 - 4x \quad \left| \cdot(-1) \right. \\
&\qquad y = 4x - 10 \\ \hline
I. \cap II. &\qquad 2x + 3(4x - 10) = 12 \\
&\qquad 2x + 12x - 30 = 12 \\
&\qquad 14x - 30 = 12 \quad \left| +30 \right. \\
&\qquad 14x = 42 \quad \left| :14 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 4\cdot 3 - y = 10 \\
&\qquad 12 - y = 10 \quad \left| -12 \right. \\
&\qquad -y = -2 \quad \left| \cdot(-1) \right. \\
&\qquad y = 2
\end{align*}
$$

<!-- data-solution-button="2"-->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]
</div>
<div class="flex-child">
__$d)\;\;$__ 
$$
\begin{align*}
I. &\qquad 2x + y = 11 \quad \left| -2x \right. \\
II. &\qquad x + 2y = 13 \quad \left| -x \right. \\ \hline
I. &\qquad y = 11 - 2x \\
II. &\qquad 2y = 13 - x \quad \left| :2 \right. \\
II. &\qquad y = \dfrac{13 - x}{2} \\[4pt]
I. \cap II. &\qquad 11 - 2x = \dfrac{13 - x}{2} \\
&\qquad 2(11 - 2x) = 13 - x \\
&\qquad 22 - 4x = 13 - x \quad \left| -13 \right. \\
&\qquad 9 - 4x = -x \quad \left| +4x \right. \\
&\qquad 9 = 3x \quad \left| :3 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 2\cdot 3 + y = 11 \\
&\qquad 6 + y = 11 \quad \left| -6 \right. \\
&\qquad y = 5
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]
</div>
<div class="flex-child">
__$e)\;\;$__ 
$$
\begin{align*}
I.& \qquad 4x + 2y = 20 \\  
II.& \qquad 3x + y = 11  \\ \hline
II.& \qquad 3x + y = 11 \quad \left|\cdot 2 \right. \\
& \qquad 6x + 2y = 22 \\ 
I.& \qquad 4x + 2y = 20 \\ \hline
(II.-I.)& \qquad (6x-4x) + (2y-2y) = 22-20 \\
& \qquad 2x = 2 \quad \left| :2 \right. \\
& \qquad x = 1 \\
x \cap II.& \qquad 3\cdot 1 + y = 11 \\
& \qquad 3 + y = 11 \quad \left| -3 \right. \\
& \qquad y = 8
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]
</div>
<div class="flex-child">
__$f)\;\;$__ 
$$
\begin{align*}
I. &\qquad 3x - y = 2 \quad \left| -3x \right. \\
II.&\qquad x + 2y = 17 \quad \left| -x \right. \\ \hline
I. &\qquad -y = 2 - 3x \quad \left| \cdot(-1) \right. \\
I. &\qquad y = 3x - 2 \\
II.&\qquad 2y = 17 - x \quad \left| :2 \right. \\
II.&\qquad y = \dfrac{17 - x}{2} \\ 
I. \cap II. &\qquad 3x - 2 = \dfrac{17 - x}{2} \\
&\qquad 2(3x - 2) = 17 - x \\
&\qquad 6x - 4 = 17 - x \quad \left| +x \right. \\
&\qquad 7x - 4 = 17 \quad \left| +4 \right. \\
&\qquad 7x = 21 \quad \left| :7 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 3\cdot 3 - y = 2 \\
&\qquad 9 - y = 2 \quad \left| -9 \right. \\
&\qquad -y = -7 \quad \left| \cdot(-1) \right. \\
&\qquad y = 7
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]
</div>
</section>

