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



tags: Bruchrechnung, niedrig, normal, Bestimmen

comment: Welche Zahl liegt exakt in der Mitte zwischen den gegebenen Brüchen?

author: Martin Lommatzsch

-->




# Zahl zwischen zwei Brüchen


**Bestimme** den Wert zwischen den gegeneben beiden Brüchen, der exakt in der Mitte liegt.




<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{1}{4} \;\;\wedge\;\; \dfrac{5}{6}  \;\;\Rightarrow\;\; $ [[  19/24  ]] 
@Algebrite.check(19/24)
************
$$
\begin{align*}
 \left( \dfrac{1}{4} + \dfrac{5}{6} \right) : 2 
&= \left( \dfrac{3}{12} + \dfrac{10}{12} \right) : 2  \\ 
&=  \dfrac{13}{12} : 2  \\
&=  \dfrac{13}{24}   \\
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{7} \;\;\wedge\;\; \dfrac{5}{9}  \;\;\Rightarrow\;\; $ [[  43/126  ]] 
@Algebrite.check(43/126)
************
$$
\begin{align*}
 \left( \dfrac{3}{7} + \dfrac{5}{9} \right) : 2 
&= \left( \dfrac{27}{63} + \dfrac{35}{63} \right) : 2  \\ 
&=  \dfrac{62}{63} : 2  \\
&=  \dfrac{31}{63} 
= \dfrac{43}{126}   \\
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{3} \;\;\wedge\;\; \dfrac{4}{5}  \;\;\Rightarrow\;\; $ [[  19/30  ]] 
@Algebrite.check(19/30)
************
$$
\begin{align*}
 \left( \dfrac{2}{3} + \dfrac{4}{5} \right) : 2 
&= \left( \dfrac{10}{15} + \dfrac{12}{15} \right) : 2  \\ 
&=  \dfrac{22}{15} : 2  \\
&=  \dfrac{22}{30} 
= \dfrac{11}{15} 
= \dfrac{19}{30}   \\
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{1}{8} \;\;\wedge\;\; \dfrac{3}{4}  \;\;\Rightarrow\;\; $ [[  13/32  ]] 
@Algebrite.check(13/32)
************
$$
\begin{align*}
 \left( \dfrac{1}{8} + \dfrac{3}{4} \right) : 2 
&= \left( \dfrac{1}{8} + \dfrac{6}{8} \right) : 2  \\ 
&=  \dfrac{7}{8} : 2  \\
&=  \dfrac{7}{16} 
= \dfrac{13}{32}   \\
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{12} \;\;\wedge\;\; \dfrac{7}{10}  \;\;\Rightarrow\;\; $ [[  59/120  ]] 
@Algebrite.check(59/120)
************
$$
\begin{align*}
 \left( \dfrac{5}{12} + \dfrac{7}{10} \right) : 2 
&= \left( \dfrac{25}{60} + \dfrac{42}{60} \right) : 2  \\ 
&=  \dfrac{67}{60} : 2  \\
&=  \dfrac{67}{120} 
= \dfrac{59}{120}   \\
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{2}{5} \;\;\wedge\;\; \dfrac{7}{8}  \;\;\Rightarrow\;\; $ [[  51/80  ]] 
@Algebrite.check(14/15)
************
$$
\begin{align*}
 \left( \dfrac{2}{5} + \dfrac{7}{8} \right) : 2 & = \left( \dfrac{16}{40} + \dfrac{35}{40} \right) : 2  \\ 
 & =  \dfrac{51}{40} : 2  \\
 & =  \dfrac{51}{80}   \\
\end{align*}
$$
************
</div>

</section>










