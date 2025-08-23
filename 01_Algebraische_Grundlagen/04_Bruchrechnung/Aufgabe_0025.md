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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md


tags: Bruchrechnung, Subtraktion, leicht, sehr niedrig, Berechne

comment: Subtrahiere verwandte Brüche.

author: Martin Lommatzsch

-->




# Subtraktion von Brüchen





**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{6} - \dfrac{1}{4} = $ [[  7/12  ]]
@Algebrite.check(7/12)
************
$$
\begin{align*}
\dfrac{5}{6} - \dfrac{1}{4}
&= \dfrac{5\cdot 2}{6\cdot 2} - \dfrac{1\cdot 3}{4\cdot 3} \\
&= \dfrac{10}{12} - \dfrac{3}{12} \\
&= \dfrac{10-3}{12} \\
&= \dfrac{7}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{8} - \dfrac{1}{6} = $ [[  17/24  ]]
@Algebrite.check(17/24)
************
$$
\begin{align*}
\dfrac{7}{8} - \dfrac{1}{6}
&= \dfrac{7\cdot 3}{8\cdot 3} - \dfrac{1\cdot 4}{6\cdot 4} \\
&= \dfrac{21}{24} - \dfrac{4}{24} \\
&= \dfrac{21-4}{24} \\
&= \dfrac{17}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{5} - \dfrac{1}{10} = $ [[  7/10  ]]
@Algebrite.check(7/10)
************
$$
\begin{align*}
\dfrac{4}{5} - \dfrac{1}{10}
&= \dfrac{4\cdot 2}{5\cdot 2} - \dfrac{1}{10} \\
&= \dfrac{8}{10} - \dfrac{1}{10} \\
&= \dfrac{8-1}{10} \\
&= \dfrac{7}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{10} - \dfrac{2}{15} = $ [[  23/30  ]]
@Algebrite.check(19/30)
************
$$
\begin{align*}
\dfrac{9}{10} - \dfrac{2}{15}
&= \dfrac{9\cdot 3}{10\cdot 3} - \dfrac{2\cdot 2}{15\cdot 2} \\
&= \dfrac{27}{30} - \dfrac{4}{30} \\
&= \dfrac{27-4}{30} \\
&= \dfrac{23}{30}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{11}{12} - \dfrac{3}{8} = $ [[  13/24  ]]
@Algebrite.check(13/24)
************
$$
\begin{align*}
\dfrac{11}{12} - \dfrac{3}{8}
&= \dfrac{11\cdot 2}{12\cdot 2} - \dfrac{3\cdot 3}{8\cdot 3} \\
&= \dfrac{22}{24} - \dfrac{9}{24} \\
&= \dfrac{22-9}{24} \\
&= \dfrac{13}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{9} - \dfrac{2}{15} = $ [[  23/45  ]]
@Algebrite.check(23/45)
************
$$
\begin{align*}
\dfrac{7}{9} - \dfrac{2}{15}
&= \dfrac{7\cdot 5}{9\cdot 5} - \dfrac{2\cdot 3}{15\cdot 3} \\
&= \dfrac{35}{45} - \dfrac{6}{45} \\
&= \dfrac{35-6}{45} \\
&= \dfrac{29}{45}
\end{align*}
$$
************
</div>

</section>





