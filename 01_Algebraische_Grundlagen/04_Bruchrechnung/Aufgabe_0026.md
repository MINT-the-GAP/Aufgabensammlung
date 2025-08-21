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


tags: Bruchrechnung, Subtraktion, leicht, sehr niedrig, Berechne

comment: Subtrahiere verwandte Brüche.

author: Martin Lommatzsch

-->




# Subtraktion von Brüchen





**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{7} - \dfrac{1}{14} = $ [[  9/14  ]]
@Algebrite.check(9/14)
************
$$
\begin{align*}
\dfrac{5}{7} - \dfrac{1}{14}
&= \dfrac{5\cdot 2}{7\cdot 2} - \dfrac{1}{14} \\
&= \dfrac{10}{14} - \dfrac{1}{14} \\
&= \dfrac{10-1}{14} \\
&= \dfrac{9}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{8} - \dfrac{1}{16} = $ [[  5/16  ]]
@Algebrite.check(5/16)
************
$$
\begin{align*}
\dfrac{3}{8} - \dfrac{1}{16}
&= \dfrac{3\cdot 2}{8\cdot 2} - \dfrac{1}{16} \\
&= \dfrac{6}{16} - \dfrac{1}{16} \\
&= \dfrac{6-1}{16} \\
&= \dfrac{5}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{13}{20} - \dfrac{1}{10} = $ [[  11/20  ]]
@Algebrite.check(11/20)
************
$$
\begin{align*}
\dfrac{13}{20} - \dfrac{1}{10}
&= \dfrac{13}{20} - \dfrac{1\cdot 2}{10\cdot 2} \\
&= \dfrac{13}{20} - \dfrac{2}{20} \\
&= \dfrac{13-2}{20} \\
&= \dfrac{11}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{8}{21} - \dfrac{1}{7} = $ [[  5/21  ]]
@Algebrite.check(5/21)
************
$$
\begin{align*}
\dfrac{8}{21} - \dfrac{1}{7}
&= \dfrac{8}{21} - \dfrac{1\cdot 3}{7\cdot 3} \\
&= \dfrac{8}{21} - \dfrac{3}{21} \\
&= \dfrac{8-3}{21} \\
&= \dfrac{5}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{7}{12} - \dfrac{1}{6} = $ [[  5/12  ]]
@Algebrite.check(5/12)
************
$$
\begin{align*}
\dfrac{7}{12} - \dfrac{1}{6}
&= \dfrac{7}{12} - \dfrac{1\cdot 2}{6\cdot 2} \\
&= \dfrac{7}{12} - \dfrac{2}{12} \\
&= \dfrac{7-2}{12} \\
&= \dfrac{5}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{4}{9} - \dfrac{1}{27} = $ [[  11/27  ]]
@Algebrite.check(11/27)
************
$$
\begin{align*}
\dfrac{4}{9} - \dfrac{1}{27}
&= \dfrac{4\cdot 3}{9\cdot 3} - \dfrac{1}{27} \\
&= \dfrac{12}{27} - \dfrac{1}{27} \\
&= \dfrac{12-1}{27} \\
&= \dfrac{11}{27}
\end{align*}
$$
************
</div>

</section>





