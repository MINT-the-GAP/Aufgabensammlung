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
__$a)\;\;$__ $  \dfrac{3}{4} + \dfrac{2}{9} = $ [[  35/36  ]]
@Algebrite.check(35/36)
************
$$
\begin{align*}
\dfrac{3}{4} + \dfrac{2}{9}
&= \dfrac{3\cdot 9}{4\cdot 9} + \dfrac{2\cdot 4}{9\cdot 4} \\
&= \dfrac{27}{36} + \dfrac{8}{36} \\
&= \dfrac{27+8}{36} \\
&= \dfrac{35}{36}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{6} + \dfrac{2}{7} = $ [[  47/42  ]]
@Algebrite.check(47/42)
************
$$
\begin{align*}
\dfrac{5}{6} + \dfrac{2}{7}
&= \dfrac{5\cdot 7}{6\cdot 7} + \dfrac{2\cdot 6}{7\cdot 6} \\
&= \dfrac{35}{42} + \dfrac{12}{42} \\
&= \dfrac{35+12}{42} \\
&= \dfrac{47}{42}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{5} + \dfrac{3}{8} = $ [[  31/40  ]]
@Algebrite.check(31/40)
************
$$
\begin{align*}
\dfrac{2}{5} + \dfrac{3}{8}
&= \dfrac{2\cdot 8}{5\cdot 8} + \dfrac{3\cdot 5}{8\cdot 5} \\
&= \dfrac{16}{40} + \dfrac{15}{40} \\
&= \dfrac{16+15}{40} \\
&= \dfrac{31}{40}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{1}{6} + \dfrac{4}{10} = $ [[  17/30  ]]
@Algebrite.check(17/30)
************
$$
\begin{align*}
\dfrac{1}{6} + \dfrac{4}{10}
&= \dfrac{1\cdot 5}{6\cdot 5} + \dfrac{4\cdot 3}{10\cdot 3} \\
&= \dfrac{5}{30} + \dfrac{12}{30} \\
&= \dfrac{5+12}{30} \\
&= \dfrac{17}{30}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{7} + \dfrac{2}{9} = $ [[  50/63  ]]
@Algebrite.check(50/63)
************
$$
\begin{align*}
\dfrac{4}{7} + \dfrac{2}{9}
&= \dfrac{4\cdot 9}{7\cdot 9} + \dfrac{2\cdot 7}{9\cdot 7} \\
&= \dfrac{36}{63} + \dfrac{14}{63} \\
&= \dfrac{36+14}{63} \\
&= \dfrac{50}{63}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{3}{8} + \dfrac{5}{12} = $ [[  29/24  ]]
@Algebrite.check(29/24)
************
$$
\begin{align*}
\dfrac{3}{8} + \dfrac{5}{12}
&= \dfrac{3\cdot 3}{8\cdot 3} + \dfrac{5\cdot 2}{12\cdot 2} \\
&= \dfrac{9}{24} + \dfrac{10}{24} \\
&= \dfrac{9+10}{24} \\
&= \dfrac{19}{24}
\end{align*}
$$
************
</div>

</section>







