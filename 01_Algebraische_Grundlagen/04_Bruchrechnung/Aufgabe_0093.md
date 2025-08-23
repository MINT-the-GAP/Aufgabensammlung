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
$ \dfrac{ \left( \dfrac{3}{4} + \dfrac{1}{6} \right) }{ \left( \dfrac{5}{8} - \dfrac{1}{4} \right) } = $ [[  22/9  ]]
@Algebrite.check(22/9)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{3}{4} + \dfrac{1}{6} \right) }{ \left( \dfrac{5}{8} - \dfrac{1}{4} \right) }
&= \dfrac{ \left( \dfrac{9}{12} + \dfrac{2}{12} \right) }{ \left( \dfrac{5}{8} - \dfrac{2}{8} \right) } \\
&= \dfrac{ \dfrac{11}{12} }{ \dfrac{3}{8} }
= \dfrac{11}{12} : \dfrac{3}{8}
= \dfrac{11}{12} \cdot \dfrac{8}{3} \\
&= \dfrac{88}{36}
= \dfrac{22}{9}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ 
$ \dfrac{ \left( \dfrac{5}{6} - \dfrac{1}{3} \right) }{ \left( \dfrac{2}{5} + \dfrac{1}{10} \right) } = $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{5}{6} - \dfrac{1}{3} \right) }{ \left( \dfrac{2}{5} + \dfrac{1}{10} \right) }
&= \dfrac{ \left( \dfrac{5}{6} - \dfrac{2}{6} \right) }{ \left( \dfrac{4}{10} + \dfrac{1}{10} \right) } \\
&= \dfrac{ \dfrac{3}{6} }{ \dfrac{5}{10} }
= \dfrac{ \dfrac{1}{2} }{ \dfrac{1}{2} }
= 1
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ 
$ \dfrac{ \left( \dfrac{3}{5} \cdot \dfrac{10}{9} \right) }{ \left( \dfrac{7}{12} : \dfrac{7}{18} \right) } = $ [[  4/9  ]]
@Algebrite.check(4/9)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{3}{5} \cdot \dfrac{10}{9} \right) }{ \left( \dfrac{7}{12} : \dfrac{7}{18} \right) }
&= \dfrac{ \dfrac{30}{45} }{ \left( \dfrac{7}{12} \cdot \dfrac{18}{7} \right) } \\
&= \dfrac{ \dfrac{2}{3} }{ \dfrac{18}{12} }
= \dfrac{ \dfrac{2}{3} }{ \dfrac{3}{2} }
= \dfrac{2}{3} \cdot \dfrac{2}{3}
= \dfrac{4}{9}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ 
$ \dfrac{ \left( \dfrac{4}{7} + \dfrac{5}{14} \right) }{ \left( \dfrac{3}{5} + \dfrac{1}{10} \right) } = $ [[  65/49  ]]
@Algebrite.check(65/49)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{4}{7} + \dfrac{5}{14} \right) }{ \left( \dfrac{3}{5} + \dfrac{1}{10} \right) }
&= \dfrac{ \left( \dfrac{8}{14} + \dfrac{5}{14} \right) }{ \left( \dfrac{6}{10} + \dfrac{1}{10} \right) } \\
&= \dfrac{ \dfrac{13}{14} }{ \dfrac{7}{10} }
= \dfrac{13}{14} : \dfrac{7}{10}
= \dfrac{13}{14} \cdot \dfrac{10}{7} \\
&= \dfrac{130}{98}
= \dfrac{65}{49}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ 
$ \dfrac{ \left( \dfrac{9}{8} - \dfrac{1}{16} \right) }{ \left( \dfrac{3}{4} + \dfrac{1}{6} \right) } = $ [[  51/44  ]]
@Algebrite.check(51/44)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{9}{8} - \dfrac{1}{16} \right) }{ \left( \dfrac{3}{4} + \dfrac{1}{6} \right) }
&= \dfrac{ \left( \dfrac{18}{16} - \dfrac{1}{16} \right) }{ \left( \dfrac{9}{12} + \dfrac{2}{12} \right) } \\
&= \dfrac{ \dfrac{17}{16} }{ \dfrac{11}{12} }
= \dfrac{17}{16} : \dfrac{11}{12}
= \dfrac{17}{16} \cdot \dfrac{12}{11} \\
&= \dfrac{204}{176}
= \dfrac{51}{44}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ 
$ \dfrac{ \left( \dfrac{2}{3} : \dfrac{5}{9} \right) }{ \left( \dfrac{7}{10} - \dfrac{1}{5} \right) } = $ [[  12/5  ]]
@Algebrite.check(12/5)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{2}{3} : \dfrac{5}{9} \right) }{ \left( \dfrac{7}{10} - \dfrac{1}{5} \right) }
&= \dfrac{ \left( \dfrac{2}{3} \cdot \dfrac{9}{5} \right) }{ \left( \dfrac{7}{10} - \dfrac{2}{10} \right) } \\
&= \dfrac{ \dfrac{18}{15} }{ \dfrac{5}{10} }
= \dfrac{ \dfrac{6}{5} }{ \dfrac{1}{2} }
= \dfrac{6}{5} \cdot 2
= \dfrac{12}{5}
\end{align*}
$$
************
</div>

</section>


