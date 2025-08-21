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
__$b)\;\;$__ $  \dfrac{13}{12} - \dfrac{1}{6} = $ [[  11/12  ]]
@Algebrite.check(11/12)
************
$$
\begin{align*}
\dfrac{13}{12} - \dfrac{1}{6} &= \dfrac{13}{12} - \dfrac{1 \cdot 2}{6 \cdot 2} \\
&= \dfrac{13}{12} - \dfrac{2}{12} \\
&= \dfrac{13-2}{12} \\
&= \dfrac{11}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{9}{10} - \dfrac{1}{5} = $ [[  7/10  ]]
@Algebrite.check(7/10)
************
$$
\begin{align*}
\dfrac{9}{10} - \dfrac{1}{5} &= \dfrac{9}{10} - \dfrac{1 \cdot 2}{5 \cdot 2} \\
&= \dfrac{9}{10} - \dfrac{2}{10} \\
&= \dfrac{9-2}{10} \\
&= \dfrac{7}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{13}{14} - \dfrac{2}{7} = $ [[  11/14  ]]
@Algebrite.check(11/14)
************
$$
\begin{align*}
\dfrac{13}{14} - \dfrac{2}{7} &= \dfrac{13}{14} - \dfrac{2 \cdot 2}{7 \cdot 2} \\
&= \dfrac{13}{14} - \dfrac{4}{14} \\
&= \dfrac{13-4}{14} \\
&= \dfrac{11}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{15}{18} - \dfrac{1}{9} = $ [[  13/18  ]]
@Algebrite.check(13/18)
************
$$
\begin{align*}
\dfrac{15}{18} - \dfrac{1}{9} &= \dfrac{15}{18} - \dfrac{1 \cdot 2}{9 \cdot 2} \\
&= \dfrac{15}{18} - \dfrac{2}{18} \\
&= \dfrac{15-2}{18} \\
&= \dfrac{13}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{24}{20} - \dfrac{1}{4} = $ [[  19/20  ]]
@Algebrite.check(19/20)
************
$$
\begin{align*}
\dfrac{24}{20} - \dfrac{1}{4} &= \dfrac{19}{20} - \dfrac{1 \cdot 5}{4 \cdot 5} \\
&= \dfrac{24}{20} - \dfrac{5}{20} \\
&= \dfrac{24-5}{20} \\
&= \dfrac{19}{20}
\end{align*}
$$
************
</div>

</section>









