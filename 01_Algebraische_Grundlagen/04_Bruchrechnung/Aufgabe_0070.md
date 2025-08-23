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
__$a)\;\;$__ $ \dfrac{9}{8} \cdot \dfrac{4}{5}  \cdot \dfrac{25}{2}  \cdot \dfrac{4}{15} = $ [[  3/16  ]]
@Algebrite.check(3/16)
************
$$
\begin{align*}
\dfrac{9}{8} \cdot \dfrac{4}{5}  \cdot \dfrac{25}{2}  \cdot \dfrac{4}{15} 
& = \dfrac{\cancel{9}\,\textcolor{blue}{3}}{8} \cdot \dfrac{\xcancel{4}}{\bcancel{5}}  \cdot \dfrac{\bcancel{25}\,\textcolor{red}{5}}{2}  \cdot \dfrac{\xcancel{4}}{\cancel{15}\,\textcolor{blue}{5}} \\
& = \dfrac{3}{8} \cdot \dfrac{1}{1}  \cdot \dfrac{\bcancel{5}}{2}  \cdot \dfrac{1}{\bcancel{5}} \\
& = \dfrac{3}{8} \cdot \dfrac{1}{2}  \\
& = \dfrac{3}{16}  \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{8}{13} \cdot \dfrac{7}{2}  \cdot \dfrac{9}{7}  \cdot \dfrac{13}{4} = $ [[  9  ]]
@Algebrite.check(9)
************
$$
\begin{align*}
 \dfrac{8}{13} \cdot \dfrac{7}{2}  \cdot \dfrac{9}{7}  \cdot \dfrac{13}{4} 
 & =  \dfrac{\xcancel{8}  \,\textcolor{red}{4}  }{\bcancel{13}} \cdot \dfrac{\cancel{7}}{\xcancel{2}}  \cdot \dfrac{9}{\cancel{7}}  \cdot \dfrac{\bcancel{13}}{4} \\
 & =  \dfrac{\xcancel{4} }{1} \cdot \dfrac{1}{1}  \cdot \dfrac{9}{1}  \cdot \dfrac{1}{\xcancel{4}} \\
 & =  9 \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{2}{9} \cdot \dfrac{12}{5}  \cdot \dfrac{9}{8}  \cdot \dfrac{7}{6} \cdot \dfrac{7}{4}  = $ [[  49/40  ]]
@Algebrite.check(49/40)
************
$$
\begin{align*}
\dfrac{2}{9} \cdot \dfrac{12}{5}  \cdot \dfrac{9}{8}  \cdot \dfrac{7}{6} \cdot \dfrac{7}{4}
 &= \dfrac{\bcancel{4}}{\cancel{9}} \cdot \dfrac{\xcancel{12} \,\textcolor{red}{2} }{5}  \cdot \dfrac{\cancel{9}}{8}  \cdot \dfrac{7}{\xcancel{6}} \cdot \dfrac{7}{\bcancel{4} \,\textcolor{blue}{2}} \\ 
 &= \dfrac{1}{1} \cdot \dfrac{\cancel{2} }{5}  \cdot \dfrac{1}{8}  \cdot \dfrac{7}{1} \cdot \dfrac{7}{\cancel{2}} \\
 &= \dfrac{7  \cdot 7 }{5  \cdot 8}   \\
 &= \dfrac{ 49 }{ 40 }   \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{11}{4} \cdot \dfrac{10}{9}  \cdot \dfrac{4}{7}  \cdot \dfrac{7}{11} \cdot \dfrac{6}{5} =  $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\dfrac{11}{4} \cdot \dfrac{10}{9}  \cdot \dfrac{4}{7}  \cdot \dfrac{7}{11} \cdot \dfrac{6}{5}
 &= \dfrac{\cancel{11}}{\bcancel{4}} \cdot \dfrac{\xcancel{10} \,\textcolor{blue}{2}}{9}  \cdot \dfrac{\bcancel{4}}{7}  \cdot \dfrac{7}{\cancel{11}} \cdot \dfrac{6}{\xcancel{5}} \\
 &= \dfrac{1}{1} \cdot \dfrac{2}{\xcancel{9} \,\textcolor{blue}{3}}  \cdot \dfrac{1}{\bcancel{7}}  \cdot \dfrac{\bcancel{7}}{1} \cdot \dfrac{\xcancel{6} \,\textcolor{red}{2}}{1} \\
 &= \dfrac{1}{1} \cdot \dfrac{2}{3}  \cdot \dfrac{1}{1}  \cdot \dfrac{1}{1} \cdot \dfrac{2}{1} \\
 &= \dfrac{4}{3}  \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{12} \cdot \dfrac{16}{15}  \cdot \dfrac{9}{4}  \cdot \dfrac{7}{8} \cdot \dfrac{2}{3} \cdot \dfrac{4}{7} = $ [[  1/3  ]]
@Algebrite.check(1/3)
************
$$
\begin{align*}
\dfrac{5}{12} \cdot \dfrac{16}{15}  \cdot \dfrac{9}{4}  \cdot \dfrac{7}{8} \cdot \dfrac{2}{3} \cdot \dfrac{4}{7}
 &= \dfrac{\bcancel{5}}{\cancel{12} \,\textcolor{orange}{4}} \cdot \dfrac{\xcancel{16} \,\textcolor{blue}{2}}{\bcancel{15} \,\textcolor{red}{3}}  \cdot \dfrac{\cancel{9} \,\textcolor{orange}{3}}{4}  \cdot \dfrac{7}{\xcancel{8} } \cdot \dfrac{2}{3} \cdot \dfrac{4}{7} \\
 &= \dfrac{1}{\cancel{4} \,\textcolor{blue}{2}} \cdot \dfrac{\cancel{2}}{3}  \cdot \dfrac{3}{\bcancel{4}}  \cdot \dfrac{\xcancel{7}}{1 } \cdot \dfrac{2}{3} \cdot \dfrac{\bcancel{4}}{\xcancel{7}} \\
 &= \dfrac{1}{\bcancel{2}} \cdot \dfrac{1}{3}  \cdot \dfrac{\cancel{3}}{1}  \cdot \dfrac{1}{1 } \cdot \dfrac{\bcancel{2}}{\cancel{3}} \cdot \dfrac{1}{1} \\
 &= \dfrac{1}{3}  \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{10}{18} \cdot \dfrac{7}{8}  \cdot \dfrac{3}{8}  \cdot \dfrac{9}{4} \cdot \dfrac{16}{5} \cdot \dfrac{5}{21} = $ [[  5/16  ]]
@Algebrite.check(5/16)
************
$$
\begin{align*}
\dfrac{10}{18} \cdot \dfrac{7}{8}  \cdot \dfrac{3}{8}  \cdot \dfrac{9}{4} \cdot \dfrac{16}{5} \cdot \dfrac{5}{21}
&= \dfrac{10}{\xcancel{18} \,\textcolor{red}{2} } \cdot \dfrac{7}{8}  \cdot \dfrac{3}{\cancel{8}}  \cdot \dfrac{\xcancel{9}}{4} \cdot \dfrac{\cancel{16}\,\textcolor{blue}{2}}{\bcancel{5}} \cdot \dfrac{\bcancel{5}}{21} \\
&= \dfrac{\xcancel{10} \,\textcolor{red}{5}}{\cancel{2} } \cdot \dfrac{7}{\xcancel{8} \,\textcolor{red}{4}}  \cdot \dfrac{\bcancel{3}}{1}  \cdot \dfrac{1}{4} \cdot \dfrac{\cancel{2}}{1} \cdot \dfrac{1}{\bcancel{21}\,\textcolor{blue}{7}} \\
&= \dfrac{5}{1 } \cdot \dfrac{\bcancel{7}}{4}  \cdot \dfrac{1}{1}  \cdot \dfrac{1}{4} \cdot \dfrac{1}{1} \cdot \dfrac{1}{\bcancel{7}} \\
&= \dfrac{5}{1 } \cdot \dfrac{1}{4}  \cdot \dfrac{1}{1}  \cdot \dfrac{1}{4} \cdot \dfrac{1}{1} \cdot \dfrac{1}{1} \\
&= \dfrac{5}{16 } \\
\end{align*}
$$
************
</div>

</section>






