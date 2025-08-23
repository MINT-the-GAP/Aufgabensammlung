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
__$a)\;\;$__ $  \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{6} = $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{6}
&= \dfrac{1\cdot 3}{2\cdot 3} + \dfrac{1\cdot 2}{3\cdot 2} + \dfrac{1}{6} \\
&= \dfrac{3}{6} + \dfrac{2}{6} + \dfrac{1}{6} \\
&= \dfrac{3+2+1}{6} \\
&= \dfrac{6}{6} \;=\; 1
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{4} - \dfrac{1}{6} + \dfrac{1}{12} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{3}{4} - \dfrac{1}{6} + \dfrac{1}{12}
&= \dfrac{3\cdot 3}{4\cdot 3} - \dfrac{1\cdot 2}{6\cdot 2} + \dfrac{1}{12} \\
&= \dfrac{9}{12} - \dfrac{2}{12} + \dfrac{1}{12} \\
&= \dfrac{9-2+1}{12} \\
&= \dfrac{8}{12} \;=\; \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{8} + \dfrac{1}{4} - \dfrac{1}{16} = $ [[  13/16  ]]
@Algebrite.check(13/16)
************
$$
\begin{align*}
\dfrac{5}{8} + \dfrac{1}{4} - \dfrac{1}{16}
&= \dfrac{5\cdot 2}{8\cdot 2} + \dfrac{1\cdot 4}{4\cdot 4} - \dfrac{1}{16} \\
&= \dfrac{10}{16} + \dfrac{4}{16} - \dfrac{1}{16} \\
&= \dfrac{10+4-1}{16} \\
&= \dfrac{13}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{2}{5} + \dfrac{3}{10} + \dfrac{1}{4} = $ [[  19/20  ]]
@Algebrite.check(19/20)
************
$$
\begin{align*}
\dfrac{2}{5} + \dfrac{3}{10} + \dfrac{1}{4}
&= \dfrac{2\cdot 4}{5\cdot 4} + \dfrac{3\cdot 2}{10\cdot 2} + \dfrac{1\cdot 5}{4\cdot 5} \\
&= \dfrac{8}{20} + \dfrac{6}{20} + \dfrac{5}{20} \\
&= \dfrac{8+6+5}{20} \\
&= \dfrac{19}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{7}{12} - \dfrac{1}{8} - \dfrac{1}{6} = $ [[  7/24  ]]
@Algebrite.check(7/24)
************
$$
\begin{align*}
\dfrac{7}{12} - \dfrac{1}{8} - \dfrac{1}{6}
&= \dfrac{7\cdot 2}{12\cdot 2} - \dfrac{1\cdot 3}{8\cdot 3} - \dfrac{1\cdot 4}{6\cdot 4} \\
&= \dfrac{14}{24} - \dfrac{3}{24} - \dfrac{4}{24} \\
&= \dfrac{14-3-4}{24} \\
&= \dfrac{7}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{4}{9} + \dfrac{2}{15} - \dfrac{1}{10} = $ [[  43/90  ]]
@Algebrite.check(43/90)
************
$$
\begin{align*}
\dfrac{4}{9} + \dfrac{2}{15} - \dfrac{1}{10}
&= \dfrac{4\cdot 10}{9\cdot 10} + \dfrac{2\cdot 6}{15\cdot 6} - \dfrac{1\cdot 9}{10\cdot 9} \\
&= \dfrac{40}{90} + \dfrac{12}{90} - \dfrac{9}{90} \\
&= \dfrac{40+12-9}{90} \\
&= \dfrac{43}{90}
\end{align*}
$$
************
</div>

</section>






