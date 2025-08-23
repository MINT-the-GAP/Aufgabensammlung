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



tags: Bruchrechnung, Distributivgesetz, mittel, normal, Berechnen

comment: Rechne mit drei Brüchen und beachte das Distributivgesetz.

author: Martin Lommatzsch

-->




# Bruchrechnung mit Klammern



**Berechne** den Wert des Terms.



<section class="flex-container">


<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \left(\dfrac{2}{3} - \dfrac{4}{7}\right) \cdot \dfrac{4}{5} = $ [[  8/105  ]]
@Algebrite.check(8/105)
************
$$
\begin{align*}
\left(\dfrac{2}{3} - \dfrac{5}{7}\right) \cdot \dfrac{4}{5}   & = \left(\dfrac{14}{21} - \dfrac{12}{21}\right) \cdot \dfrac{4}{5} \\
 & = \dfrac{2}{21} \cdot \dfrac{4}{5} \\
 & = \dfrac{8}{105}  \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \left(\dfrac{3}{4} + \dfrac{1}{6}\right) \cdot \dfrac{2}{3} = $ [[  11/18  ]]
@Algebrite.check(11/18)
************
$$
\begin{align*}
\left(\dfrac{3}{4} + \dfrac{1}{6}\right) \cdot \dfrac{2}{3}
&= \left(\dfrac{3\cdot 3}{4\cdot 3} + \dfrac{1\cdot 2}{6\cdot 2}\right) \cdot \dfrac{2}{3} \\
&= \left(\dfrac{9}{12} + \dfrac{2}{12}\right) \cdot \dfrac{2}{3} \\
&= \dfrac{11}{12} \cdot \dfrac{2}{3} \\
&= \dfrac{22}{36} \\
&= \dfrac{11}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \left(\dfrac{5}{8} - \dfrac{1}{4}\right) : \dfrac{2}{5} = $ [[  15/16  ]]
@Algebrite.check(15/16)
************
$$
\begin{align*}
\left(\dfrac{5}{8} - \dfrac{1}{4}\right) : \dfrac{2}{5}
&= \left(\dfrac{5}{8} - \dfrac{1\cdot 2}{4\cdot 2}\right) : \dfrac{2}{5} \\
&= \left(\dfrac{5}{8} - \dfrac{2}{8}\right) : \dfrac{2}{5} \\
&= \dfrac{3}{8} : \dfrac{2}{5} \\
&= \dfrac{3}{8} \cdot \dfrac{5}{2} \\
&= \dfrac{15}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{5} \cdot \left(\dfrac{2}{3} + \dfrac{1}{6}\right) = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{3}{5} \cdot \left(\dfrac{2}{3} + \dfrac{1}{6}\right)
&= \dfrac{3}{5} \cdot \left(\dfrac{2\cdot 2}{3\cdot 2} + \dfrac{1}{6}\right) \\
&= \dfrac{3}{5} \cdot \left(\dfrac{4}{6} + \dfrac{1}{6}\right) \\
&= \dfrac{3}{5} \cdot \dfrac{5}{6} \\
&= \dfrac{3}{6} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{7} : \left(\dfrac{1}{2} + \dfrac{1}{14}\right) = $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{4}{7} : \left(\dfrac{1}{2} + \dfrac{1}{14}\right)
&= \dfrac{4}{7} : \left(\dfrac{7}{14} + \dfrac{1}{14}\right) \\
&= \dfrac{4}{7} : \dfrac{8}{14} \\
&= \dfrac{4}{7} : \dfrac{4}{7} \\
&= \dfrac{4}{7} \cdot \dfrac{7}{4} \\
&= 1
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \left(\dfrac{3}{10} + \dfrac{1}{5}\right) : \dfrac{2}{3} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\left(\dfrac{3}{10} + \dfrac{1}{5}\right) : \dfrac{2}{3}
&= \left(\dfrac{3}{10} + \dfrac{1\cdot 2}{5\cdot 2}\right) : \dfrac{2}{3} \\
&= \left(\dfrac{3}{10} + \dfrac{2}{10}\right) : \dfrac{2}{3} \\
&= \dfrac{5}{10} : \dfrac{2}{3} \\
&= \dfrac{1}{2} \cdot \dfrac{3}{2} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>


</section>









