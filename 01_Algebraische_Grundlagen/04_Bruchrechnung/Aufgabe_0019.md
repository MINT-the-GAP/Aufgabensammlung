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


tags: Bruchrechnung, Subtraktion, sehr leicht, sehr niedrig, Berechne

comment: Subtrahiere verwandte Brüche.

author: Martin Lommatzsch

-->




# Subtraktion mit Brüchen




**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{7}{8} - \dfrac{1}{4} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{7}{8} - \dfrac{1}{4} &= \dfrac{7}{8} - \dfrac{1 \cdot 2}{4 \cdot 2} \\
&= \dfrac{7}{8} - \dfrac{2}{8} \\
&= \dfrac{7-2}{8} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{9}{10} - \dfrac{2}{5} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{9}{10} - \dfrac{2}{5} &= \dfrac{9}{10} - \dfrac{2 \cdot 2}{5 \cdot 2} \\
&= \dfrac{9}{10} - \dfrac{4}{10} \\
&= \dfrac{9-4}{10} \\
&= \dfrac{5}{10} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{11}{12} - \dfrac{5}{6} = $ [[  1/4  ]]
@Algebrite.check(1/4)
************
$$
\begin{align*}
\dfrac{11}{12} - \dfrac{5}{6} &= \dfrac{11}{12} - \dfrac{5 \cdot 2}{6 \cdot 2} \\
&= \dfrac{11}{12} - \dfrac{10}{12} \\
&= \dfrac{11-10}{12} \\
&= \dfrac{1}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{13}{15} - \dfrac{2}{5} = $ [[  7/15  ]]
@Algebrite.check(7/15)
************
$$
\begin{align*}
\dfrac{13}{15} - \dfrac{2}{5} &= \dfrac{13}{15} - \dfrac{2 \cdot 3}{5 \cdot 3} \\
&= \dfrac{13}{15} - \dfrac{6}{15} \\
&= \dfrac{13-6}{15} \\
&= \dfrac{7}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{19}{18} - \dfrac{4}{9} = $ [[  11/18  ]]
@Algebrite.check(11/18)
************
$$
\begin{align*}
\dfrac{19}{18} - \dfrac{4}{9} &= \dfrac{19}{18} - \dfrac{4 \cdot 2}{9 \cdot 2} \\
&= \dfrac{19}{18} - \dfrac{8}{18} \\
&= \dfrac{19-8}{18} \\
&= \dfrac{11}{18} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{19}{20} - \dfrac{3}{10} = $ [[  13/20  ]]
@Algebrite.check(13/20)
************
$$
\begin{align*}
\dfrac{19}{20} - \dfrac{3}{10} &= \dfrac{19}{20} - \dfrac{3 \cdot 2}{10 \cdot 2} \\
&= \dfrac{19}{20} - \dfrac{6}{20} \\
&= \dfrac{19-6}{20} \\
&= \dfrac{13}{20}
\end{align*}
$$
************
</div>

</section>






