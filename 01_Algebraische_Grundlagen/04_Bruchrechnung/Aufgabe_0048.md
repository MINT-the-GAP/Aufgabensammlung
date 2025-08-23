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



tags: Bruchrechnung, Addition, Subtraktion, mittel, niedrig, Berechnen

comment: Addition und Subtraktion mit drei Brüche.

author: Martin Lommatzsch

-->




# Addition und Subtraktion mit Brüchen




**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{1}{3} + \dfrac{1}{4} + \dfrac{1}{6} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{1}{3} + \dfrac{1}{4} + \dfrac{1}{6}
&= \dfrac{1\cdot 4}{3\cdot 4} + \dfrac{1\cdot 3}{4\cdot 3} + \dfrac{1\cdot 2}{6\cdot 2} \\
&= \dfrac{4}{12} + \dfrac{3}{12} + \dfrac{2}{12} \\
&= \dfrac{4+3+2}{12} \\
&= \dfrac{9}{12} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{6} - \dfrac{1}{3} + \dfrac{1}{12} = $ [[  7/12  ]]
@Algebrite.check(7/12)
************
$$
\begin{align*}
\dfrac{5}{6} - \dfrac{1}{3} + \dfrac{1}{12}
&= \dfrac{5\cdot 2}{6\cdot 2} - \dfrac{1\cdot 4}{3\cdot 4} + \dfrac{1}{12} \\
&= \dfrac{10}{12} - \dfrac{4}{12} + \dfrac{1}{12} \\
&= \dfrac{10-4+1}{12} \\
&= \dfrac{7}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{3}{8} + \dfrac{1}{16} - \dfrac{1}{4} = $ [[  3/16  ]]
@Algebrite.check(1/16)
************
$$
\begin{align*}
\dfrac{3}{8} + \dfrac{1}{16} - \dfrac{1}{4}
&= \dfrac{3\cdot 2}{8\cdot 2} + \dfrac{1}{16} - \dfrac{1\cdot 4}{4\cdot 4} \\
&= \dfrac{6}{16} + \dfrac{1}{16} - \dfrac{4}{16} \\
&= \dfrac{6+1-4}{16} \\
&= \dfrac{3}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{2}{5} + \dfrac{1}{10} + \dfrac{3}{20} = $ [[  13/20  ]]
@Algebrite.check(13/20)
************
$$
\begin{align*}
\dfrac{2}{5} + \dfrac{1}{10} + \dfrac{3}{20}
&= \dfrac{2\cdot 4}{5\cdot 4} + \dfrac{1\cdot 2}{10\cdot 2} + \dfrac{3}{20} \\
&= \dfrac{8}{20} + \dfrac{2}{20} + \dfrac{3}{20} \\
&= \dfrac{8+2+3}{20} \\
&= \dfrac{13}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{7}{9} - \dfrac{2}{3} + \dfrac{1}{6} = $ [[  5/18  ]]
@Algebrite.check(5/18)
************
$$
\begin{align*}
\dfrac{7}{9} - \dfrac{2}{3} + \dfrac{1}{6}
&= \dfrac{14}{18} - \dfrac{12}{18} + \dfrac{3}{18} \\
&= \dfrac{14-12+3}{18} \\
&= \dfrac{5}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{4}{7} + \dfrac{2}{21} - \dfrac{1}{3} = $ [[  1/3  ]]
@Algebrite.check(1/3)
************
$$
\begin{align*}
\dfrac{4}{7} + \dfrac{2}{21} - \dfrac{1}{3}
&= \dfrac{12}{21} + \dfrac{2}{21} - \dfrac{7}{21} \\
&= \dfrac{12+2-7}{21} \\
&= \dfrac{7}{21} \\
&= \dfrac{1}{3}
\end{align*}
$$
************
</div>

</section>





