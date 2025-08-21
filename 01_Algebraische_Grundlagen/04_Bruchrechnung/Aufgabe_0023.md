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


tags: Bruchrechnung, Addition, leicht, sehr niedrig, Berechne

comment: Addiere zwei Brüche.

author: Martin Lommatzsch

-->




# Addition von Brüchen




**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{5} + \dfrac{3}{4} = $ [[  23/20  ]]
@Algebrite.check(23/20)
************
$$
\begin{align*}
\dfrac{2}{5} + \dfrac{3}{4}
&= \dfrac{2\cdot 4}{5\cdot 4} + \dfrac{3\cdot 5}{4\cdot 5} \\
&= \dfrac{8}{20} + \dfrac{15}{20} \\
&= \dfrac{8+15}{20} \\
&= \dfrac{23}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{7} + \dfrac{2}{3} = $ [[  23/21  ]]
@Algebrite.check(23/21)
************
$$
\begin{align*}
\dfrac{3}{7} + \dfrac{2}{3}
&= \dfrac{3\cdot 3}{7\cdot 3} + \dfrac{2\cdot 7}{3\cdot 7} \\
&= \dfrac{9}{21} + \dfrac{14}{21} \\
&= \dfrac{9+14}{21} \\
&= \dfrac{23}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{6} + \dfrac{1}{4} = $ [[  13/12  ]]
@Algebrite.check(13/12)
************
$$
\begin{align*}
\dfrac{5}{6} + \dfrac{1}{4}
&= \dfrac{5\cdot 2}{6\cdot 2} + \dfrac{1\cdot 3}{4\cdot 3} \\
&= \dfrac{10}{12} + \dfrac{3}{12} \\
&= \dfrac{10+3}{12} \\
&= \dfrac{13}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{4}{9} + \dfrac{2}{5} = $ [[  38/45  ]]
@Algebrite.check(38/45)
************
$$
\begin{align*}
\dfrac{4}{9} + \dfrac{2}{5}
&= \dfrac{4\cdot 5}{9\cdot 5} + \dfrac{2\cdot 9}{5\cdot 9} \\
&= \dfrac{20}{45} + \dfrac{18}{45} \\
&= \dfrac{20+18}{45} \\
&= \dfrac{38}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{1}{3} + \dfrac{4}{7} = $ [[  19/21  ]]
@Algebrite.check(19/21)
************
$$
\begin{align*}
\dfrac{1}{3} + \dfrac{4}{7}
&= \dfrac{1\cdot 7}{3\cdot 7} + \dfrac{4\cdot 3}{7\cdot 3} \\
&= \dfrac{7}{21} + \dfrac{12}{21} \\
&= \dfrac{7+12}{21} \\
&= \dfrac{19}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{2}{7} + \dfrac{3}{8} = $ [[  37/56  ]]
@Algebrite.check(37/56)
************
$$
\begin{align*}
\dfrac{2}{7} + \dfrac{3}{8}
&= \dfrac{2\cdot 8}{7\cdot 8} + \dfrac{3\cdot 7}{8\cdot 7} \\
&= \dfrac{16}{56} + \dfrac{21}{56} \\
&= \dfrac{16+21}{56} \\
&= \dfrac{37}{56}
\end{align*}
$$
************
</div>

</section>





