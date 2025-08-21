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
__$a)\;\;$__ $  \dfrac{3}{10} + \dfrac{1}{5} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{3}{10} + \dfrac{1}{5}
&= \dfrac{3}{10} + \dfrac{1\cdot 2}{5\cdot 2} \\
&= \dfrac{3}{10} + \dfrac{2}{10} \\
&= \dfrac{3+2}{10} \\
&= \dfrac{5}{10} \;=\; \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{9} - \dfrac{1}{6} = $ [[  11/18  ]]
@Algebrite.check(11/18)
************
$$
\begin{align*}
\dfrac{7}{9} - \dfrac{1}{6}
&= \dfrac{7\cdot 2}{9\cdot 2} - \dfrac{1\cdot 3}{6\cdot 3} \\
&= \dfrac{14}{18} - \dfrac{3}{18} \\
&= \dfrac{14-3}{18} \\
&= \dfrac{11}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{15} + \dfrac{2}{9} = $ [[  22/45  ]]
@Algebrite.check(22/45)
************
$$
\begin{align*}
\dfrac{4}{15} + \dfrac{2}{9}
&= \dfrac{4\cdot 3}{15\cdot 3} + \dfrac{2\cdot 5}{9\cdot 5} \\
&= \dfrac{12}{45} + \dfrac{10}{45} \\
&= \dfrac{12+10}{45} \\
&= \dfrac{22}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{10} - \dfrac{3}{20} = $ [[  11/20  ]]
@Algebrite.check(11/20)
************
$$
\begin{align*}
\dfrac{7}{10} - \dfrac{3}{20}
&= \dfrac{7\cdot 2}{10\cdot 2} - \dfrac{3}{20} \\
&= \dfrac{14}{20} - \dfrac{3}{20} \\
&= \dfrac{14-3}{20} \\
&= \dfrac{11}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{2}{3} + \dfrac{4}{9} = $ [[  10/9  ]]
@Algebrite.check(10/9)
************
$$
\begin{align*}
\dfrac{2}{3} + \dfrac{4}{9}
&= \dfrac{2\cdot 3}{3\cdot 3} + \dfrac{4}{9} \\
&= \dfrac{6}{9} + \dfrac{4}{9} \\
&= \dfrac{6+4}{9} \\
&= \dfrac{10}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{12} - \dfrac{1}{18} = $ [[  13/36  ]]
@Algebrite.check(13/36)
************
$$
\begin{align*}
\dfrac{5}{12} - \dfrac{1}{18}
&= \dfrac{5\cdot 3}{12\cdot 3} - \dfrac{1\cdot 2}{18\cdot 2} \\
&= \dfrac{15}{36} - \dfrac{2}{36} \\
&= \dfrac{15-2}{36} \\
&= \dfrac{13}{36}
\end{align*}
$$
************
</div>

</section>

