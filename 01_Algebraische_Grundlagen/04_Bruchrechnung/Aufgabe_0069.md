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


tags: Bruchrechnung, Multiplikation, leicht, niedrig, Berechnen

comment: Multiplikation mit vielen Brüchen. Kannst du dir die Rechnung vereinfachen?

author: Martin Lommatzsch

-->




# Multiplikation mit vielen Brüchen





**Berechne** den Wert des Terms.


<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{2}{3} \cdot \dfrac{7}{4}  \cdot \dfrac{8}{9}  \cdot \dfrac{9}{7} = $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\dfrac{2}{3} \cdot \dfrac{7}{4}  \cdot \dfrac{8}{9}  \cdot \dfrac{9}{7} &= \dfrac{2}{3} \cdot \dfrac{ \cancel{7} }{ \xcancel{4} }  \cdot \dfrac{\xcancel{8} \,\textcolor{red}{2}  }{\bcancel{9}}  \cdot \dfrac{\bcancel{9} }{\cancel{7} }  \\
 &= \dfrac{2  \cdot  1  \cdot  2  \cdot  1}{3 \cdot 1 \cdot 1 \cdot 1 }\\
 &= \dfrac{4}{3 }\\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{6}{5} \cdot \dfrac{9}{2}  \cdot \dfrac{10}{6}  \cdot \dfrac{7}{9} = $ [[  7  ]]
@Algebrite.check(7)
************
$$
\begin{align*}
\dfrac{6}{5} \cdot \dfrac{9}{2}  \cdot \dfrac{10}{6}  \cdot \dfrac{7}{9} & = \dfrac{\cancel{6}}{\xcancel{5}} \cdot \dfrac{\bcancel{9}}{2}  \cdot \dfrac{\xcancel{10}\,\textcolor{red}{2} }{\cancel{6}}  \cdot \dfrac{7}{\bcancel{9}}  \\
& = \dfrac{1}{1} \cdot \dfrac{1}{\cancel{2}}  \cdot \dfrac{\cancel{2} }{1}  \cdot \dfrac{7}{1}  \\
& = 7  \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{12}{18} \cdot \dfrac{20}{15} \cdot \dfrac{14}{7} \cdot \dfrac{9}{6} = $ [[  8/3  ]]
@Algebrite.check(8/3)
************
$$
\begin{align*}
\dfrac{12}{18} \cdot \dfrac{20}{15} \cdot \dfrac{14}{7} \cdot \dfrac{9}{6}
&= \dfrac{\cancel{12}\,\textcolor{orange}{2}}{ 18 }
   \cdot \dfrac{\bcancel{20}\,\textcolor{red}{4}}{\bcancel{15}\,\textcolor{red}{3}}
   \cdot \dfrac{\xcancel{14}\,\textcolor{blue}{2}}{\xcancel{7}\,\textcolor{blue}{1}}
   \cdot \dfrac{ 9 }{\cancel{6}\,\textcolor{orange}{2}} \\[6pt]
&= \dfrac{ 2 \cdot 4 \cdot \bcancel{2} \cdot \cancel{9}\,\textcolor{lime}{3} }{ \bcancel{18}\,\textcolor{violet}{9} \cdot \cancel{3} \cdot 1 \cdot 2 } \\[6pt]
&= \dfrac{ 2 \cdot 4 \cdot 1 \cdot 3 }{ 9 \cdot 1 \cdot 1 \cdot 2 } \\[6pt]
&= \dfrac{ \cancel{2} \cdot 4 \cdot 2\cdot \cancel{3} }{ \cancel{9}\,\textcolor{red}{3}  \cdot 1 \cdot 1 \cdot \cancel{2} } \\[6pt]
&= \dfrac{ 4 \cdot 2  }{ 3 \cdot 1  } \\[6pt]
&= \dfrac{8}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{6}{8} \cdot \dfrac{2}{3}  \cdot \dfrac{20}{9}  \cdot \dfrac{15}{2} \cdot \dfrac{7}{3} \cdot \dfrac{18}{5} = $ [[  70  ]]
@Algebrite.check(70)
************
$$
\begin{align*}
\dfrac{6}{8} \cdot \dfrac{2}{3}  \cdot \dfrac{20}{9}  \cdot \dfrac{15}{2} \cdot \dfrac{7}{3} \cdot \dfrac{18}{5} 
& = \dfrac{6}{\xcancel{8}\,\textcolor{orange}{2}} \cdot \dfrac{2}{3}  \cdot \dfrac{\xcancel{20}\,\textcolor{orange}{5}}{\cancel{9}}  \cdot \dfrac{\bcancel{15}\,\textcolor{blue}{3}}{2} \cdot \dfrac{7}{3} \cdot \dfrac{\cancel{18}\,\textcolor{red}{2}}{\bcancel{5}}  \\
& = \dfrac{6}{\bcancel{2}} \cdot \dfrac{\bcancel{2}}{3}  \cdot \dfrac{5}{1}  \cdot \dfrac{\cancel{3}}{\xcancel{2}} \cdot \dfrac{7}{\cancel{3}} \cdot \dfrac{\xcancel{2}}{1}  \\
& = \dfrac{\cancel{6}\,\textcolor{red}{2}}{1} \cdot \dfrac{1}{\cancel{3}}  \cdot \dfrac{5}{1}  \cdot \dfrac{1}{1} \cdot \dfrac{7}{1} \cdot \dfrac{1}{1}  \\
& = \dfrac{2 \cdot 5 \cdot 7 }{1}   \\
& = 70   \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{6}{7} \cdot \dfrac{7}{10}  \cdot \dfrac{5}{9}  \cdot \dfrac{4}{3} \cdot \dfrac{9}{8} \cdot \dfrac{5}{6}  = $ [[  5/12  ]]
@Algebrite.check(5/12)
************
$$
\begin{align*}
\dfrac{6}{7} \cdot \dfrac{7}{10}  \cdot \dfrac{5}{9}  \cdot \dfrac{4}{3} \cdot \dfrac{9}{8} \cdot \dfrac{5}{6} 
& = \dfrac{\cancel{6}}{\xcancel{7}} \cdot \dfrac{\xcancel{7}}{10}  \cdot \dfrac{5}{\bcancel{9}}  \cdot \dfrac{4}{3} \cdot \dfrac{\bcancel{9}}{8} \cdot \dfrac{5}{\cancel{6}} \\
& = \dfrac{1}{1} \cdot \dfrac{1}{\bcancel{10}\,\textcolor{blue}{2}}  \cdot \dfrac{\bcancel{5}}{1}  \cdot \dfrac{\cancel{4}}{3} \cdot \dfrac{1}{\cancel{8}\,\textcolor{red}{2}} \cdot \dfrac{5}{1} \\
& = \dfrac{1}{1} \cdot \dfrac{1}{2}  \cdot \dfrac{1}{1}  \cdot \dfrac{1}{3} \cdot \dfrac{1}{2} \cdot \dfrac{5}{1} \\
& = \dfrac{5}{ 2 \cdot 3 \cdot 2 } \\
& = \dfrac{5}{ 12 } \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{12}{7} \cdot \dfrac{15}{33} \cdot \dfrac{8}{45} \cdot \dfrac{14}{3} \cdot \dfrac{9}{8} \cdot \dfrac{11}{5} = $ [[  8/5  ]]
@Algebrite.check(8/5)
************
$$
\begin{align*}
\dfrac{12}{7} \cdot \dfrac{15}{33} \cdot \dfrac{8}{45} \cdot \dfrac{14}{3} \cdot \dfrac{9}{8} \cdot \dfrac{11}{5}
&= \dfrac{12}{\cancel{7}} \cdot \dfrac{15}{\bcancel{33}\,\textcolor{blue}{3}} \cdot \dfrac{\xcancel{8}}{45} \cdot \dfrac{\cancel{14}\,\textcolor{red}{2}}{3} \cdot \dfrac{9}{\xcancel{8}} \cdot \dfrac{\bcancel{11}}{5}  \\
&= \dfrac{\xcancel{12}\,\textcolor{blue}{4}}{1} \cdot \dfrac{\bcancel{15}}{\xcancel{3}} \cdot \dfrac{1}{\bcancel{45}\,\textcolor{orange}{3}} \cdot \dfrac{2}{\cancel{3}} \cdot \dfrac{\cancel{9}\,\textcolor{red}{3}}{1} \cdot \dfrac{1}{5}  \\
&= \dfrac{4}{1} \cdot \dfrac{1}{1} \cdot \dfrac{1}{\cancel{3}} \cdot \dfrac{2}{1} \cdot \dfrac{\cancel{3}}{1} \cdot \dfrac{1}{5}  \\
&= \dfrac{4 \cdot 1 \cdot 1 \cdot 2 \cdot 1 \cdot 1}{1 \cdot 1 \cdot 1 \cdot 1 \cdot 1 \cdot 5} \\
&= \dfrac{8}{5} \\
\end{align*}
$$
************
</div>

</section>





