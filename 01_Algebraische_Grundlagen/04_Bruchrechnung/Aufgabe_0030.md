<!--
version:  0.0.1

language: de

@style
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




tags: Bruchrechnung, Addition, Subtraktion, leicht, niedrig, Berechne

comment: Addiere oder Subtrahiere zwei Brüche.

author: Martin Lommatzsch

-->




# Subtraktion oder Addition von Brüchen



**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{4}{9} + \dfrac{5}{12} = $ [[  31/36  ]]
@Algebrite.check(31/36)
************
$$
\begin{align*}
\dfrac{4}{9} + \dfrac{5}{12}
&= \dfrac{4\cdot 4}{9\cdot 4} + \dfrac{5\cdot 3}{12\cdot 3} \\
&= \dfrac{16}{36} + \dfrac{15}{36} \\
&= \dfrac{31}{36}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{10} - \dfrac{1}{4} = $ [[  9/20  ]]
@Algebrite.check(9/20)
************
$$
\begin{align*}
\dfrac{7}{10} - \dfrac{1}{4}
&= \dfrac{7\cdot 2}{10\cdot 2} - \dfrac{1\cdot 5}{4\cdot 5} \\
&= \dfrac{14}{20} - \dfrac{5}{20} \\
&= \dfrac{9}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{3}{8} + \dfrac{7}{12} = $ [[  23/24  ]]
@Algebrite.check(23/24)
************
$$
\begin{align*}
\dfrac{3}{8} + \dfrac{7}{12}
&= \dfrac{3\cdot 3}{8\cdot 3} + \dfrac{7\cdot 2}{12\cdot 2} \\
&= \dfrac{9}{24} + \dfrac{14}{24} \\
&= \dfrac{23}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{11}{18} - \dfrac{5}{12} = $ [[  7/36  ]]
@Algebrite.check(7/36)
************
$$
\begin{align*}
\dfrac{11}{18} - \dfrac{5}{12}
&= \dfrac{11\cdot 2}{18\cdot 2} - \dfrac{5\cdot 3}{12\cdot 3} \\
&= \dfrac{22}{36} - \dfrac{15}{36} \\
&= \dfrac{7}{36}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{14} + \dfrac{9}{21} = $ [[  33/42  ]]
@Algebrite.check(33/42)
************
$$
\begin{align*}
\dfrac{5}{14} + \dfrac{9}{21}
&= \dfrac{5\cdot 3}{14\cdot 3} + \dfrac{9\cdot 2}{21\cdot 2} \\
&= \dfrac{15}{42} + \dfrac{18}{42} \\
&= \dfrac{33}{42} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{13}{20} - \dfrac{3}{8} = $ [[  11/40  ]]
@Algebrite.check(11/40)
************
$$
\begin{align*}
\dfrac{13}{20} - \dfrac{3}{8}
&= \dfrac{13\cdot 2}{20\cdot 2} - \dfrac{3\cdot 5}{8\cdot 5} \\
&= \dfrac{26}{40} - \dfrac{15}{40} \\
&= \dfrac{11}{40}
\end{align*}
$$
************
</div>

</section>



