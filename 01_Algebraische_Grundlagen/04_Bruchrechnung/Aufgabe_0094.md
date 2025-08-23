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


tags: Bruchrechnung, mittel, normal, Berechnen

comment: Rechnen innerhalb eines Doppelbruchs.

author: Martin Lommatzsch

-->




# Rechnungen in Doppelbrüchen





<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ 
$ \dfrac{ \left( \dfrac{3}{5} + \dfrac{1}{10} \right) }{ \left( \dfrac{7}{12} - \dfrac{1}{4} \right) } = $ [[  21/10  ]]
@Algebrite.check(21/10)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{3}{5} + \dfrac{1}{10} \right) }{ \left( \dfrac{7}{12} - \dfrac{1}{4} \right) }
&= \dfrac{ \left( \dfrac{6}{10} + \dfrac{1}{10} \right) }{ \left( \dfrac{7}{12} - \dfrac{3}{12} \right) } \\
&= \dfrac{ \dfrac{7}{10} }{ \dfrac{4}{12} }
= \dfrac{7}{10} : \dfrac{4}{12}
= \dfrac{7}{10} \cdot \dfrac{12}{4} \\
&= \dfrac{84}{40}
= \dfrac{21}{10}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ 
$ \dfrac{ \left( \dfrac{5}{8} - \dfrac{1}{16} \right) }{ \left( \dfrac{2}{3} + \dfrac{1}{6} \right) } = $ [[  27/40  ]]
@Algebrite.check(27/40)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{5}{8} - \dfrac{1}{16} \right) }{ \left( \dfrac{2}{3} + \dfrac{1}{6} \right) }
&= \dfrac{ \left( \dfrac{10}{16} - \dfrac{1}{16} \right) }{ \left( \dfrac{4}{6} + \dfrac{1}{6} \right) } \\
&= \dfrac{ \dfrac{9}{16} }{ \dfrac{5}{6} }
= \dfrac{9}{16} : \dfrac{5}{6}
= \dfrac{9}{16} \cdot \dfrac{6}{5} \\
&= \dfrac{54}{80}
= \dfrac{27}{40}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ 
$ \dfrac{ \left( \dfrac{4}{9} + \dfrac{1}{3} \right) }{ \left( \dfrac{7}{10} : \dfrac{7}{5} \right) } = $ [[  14/9  ]]
@Algebrite.check(14/9)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{4}{9} + \dfrac{1}{3} \right) }{ \left( \dfrac{7}{10} : \dfrac{7}{5} \right) }
&= \dfrac{ \left( \dfrac{4}{9} + \dfrac{3}{9} \right) }{ \left( \dfrac{7}{10} \cdot \dfrac{5}{7} \right) } \\
&= \dfrac{ \dfrac{7}{9} }{ \dfrac{5}{10} }
= \dfrac{7}{9} : \dfrac{1}{2}
= \dfrac{7}{9} \cdot 2 \\
&= \dfrac{14}{9}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ 
$ \dfrac{ \left( \dfrac{5}{6} : \dfrac{5}{12} \right) }{ \left( \dfrac{1}{2} + \dfrac{1}{3} \right) } = $ [[  12/5  ]]
@Algebrite.check(12/5)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{5}{6} : \dfrac{5}{12} \right) }{ \left( \dfrac{1}{2} + \dfrac{1}{3} \right) }
&= \dfrac{ \left( \dfrac{5}{6} \cdot \dfrac{12}{5} \right) }{ \left( \dfrac{3}{6} + \dfrac{2}{6} \right) } \\
&= \dfrac{ 2 }{ \dfrac{5}{6} }
= 2 : \dfrac{5}{6}
= 2 \cdot \dfrac{6}{5} \\
&= \dfrac{12}{5}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ 
$ \dfrac{ \left( \dfrac{9}{10} - \dfrac{2}{5} \right) }{ \left( \dfrac{1}{4} \cdot \dfrac{8}{3} \right) } = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{9}{10} - \dfrac{2}{5} \right) }{ \left( \dfrac{1}{4} \cdot \dfrac{8}{3} \right) }
&= \dfrac{ \left( \dfrac{9}{10} - \dfrac{4}{10} \right) }{ \left( \dfrac{8}{12} \right) } \\
&= \dfrac{ \dfrac{1}{2} }{ \dfrac{2}{3} }
= \dfrac{1}{2} : \dfrac{2}{3}
= \dfrac{1}{2} \cdot \dfrac{3}{2} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ 
$ \dfrac{ \left( \dfrac{7}{8} + \dfrac{1}{16} \right) }{ \left( \dfrac{3}{5} - \dfrac{1}{10} \right) } = $ [[  15/8  ]]
@Algebrite.check(15/8)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{7}{8} + \dfrac{1}{16} \right) }{ \left( \dfrac{3}{5} - \dfrac{1}{10} \right) }
&= \dfrac{ \left( \dfrac{14}{16} + \dfrac{1}{16} \right) }{ \left( \dfrac{6}{10} - \dfrac{1}{10} \right) } \\
&= \dfrac{ \dfrac{15}{16} }{ \dfrac{5}{10} }
= \dfrac{15}{16} : \dfrac{1}{2}
= \dfrac{15}{16} \cdot 2 \\
&= \dfrac{15}{8}
\end{align*}
$$
************
</div>

</section>

