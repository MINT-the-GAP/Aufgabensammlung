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
__$a)\;\;$__ $  \dfrac{1}{3} \;\;\wedge\;\; \dfrac{3}{5}  \;\;\Rightarrow\;\; $ [[  7/15  ]] 
@Algebrite.check(7/15)
************
$$
\begin{align*}
\left(\dfrac{1}{3} + \dfrac{3}{5}\right) : 2
&= \left(\dfrac{5}{15} + \dfrac{9}{15}\right) : 2 \\
&= \dfrac{14}{15} : 2 \\
&= \dfrac{14}{30} \;=\; \dfrac{7}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{2}{7} \;\;\wedge\;\; \dfrac{5}{6}  \;\;\Rightarrow\;\; $ [[  47/84  ]] 
@Algebrite.check(47/84)
************
$$
\begin{align*}
\left(\dfrac{2}{7} + \dfrac{5}{6}\right) : 2
&= \left(\dfrac{12}{42} + \dfrac{35}{42}\right) : 2 \\
&= \dfrac{47}{42} : 2 \\
&= \dfrac{47}{84}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{9} \;\;\wedge\;\; \dfrac{2}{3}  \;\;\Rightarrow\;\; $ [[  5/9  ]] 
@Algebrite.check(5/9)
************
$$
\begin{align*}
\left(\dfrac{4}{9} + \dfrac{2}{3}\right) : 2
&= \left(\dfrac{4}{9} + \dfrac{6}{9}\right) : 2 \\
&= \dfrac{10}{9} : 2 \\
&= \dfrac{10}{18} \;=\; \dfrac{5}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{8} \;\;\wedge\;\; \dfrac{1}{12}  \;\;\Rightarrow\;\; $ [[  17/48  ]] 
@Algebrite.check(17/48)
************
$$
\begin{align*}
\left(\dfrac{5}{8} + \dfrac{1}{12}\right) : 2
&= \left(\dfrac{15}{24} + \dfrac{2}{24}\right) : 2 \\
&= \dfrac{17}{24} : 2 \\
&= \dfrac{17}{48}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{10} \;\;\wedge\;\; \dfrac{7}{12}  \;\;\Rightarrow\;\; $ [[  53/120  ]] 
@Algebrite.check(53/120)
************
$$
\begin{align*}
\left(\dfrac{3}{10} + \dfrac{7}{12}\right) : 2
&= \left(\dfrac{18}{60} + \dfrac{35}{60}\right) : 2 \\
&= \dfrac{53}{60} : 2 \\
&= \dfrac{53}{120}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{11}{20} \;\;\wedge\;\; \dfrac{3}{4}  \;\;\Rightarrow\;\; $ [[  13/20  ]] 
@Algebrite.check(13/20)
************
$$
\begin{align*}
\left(\dfrac{11}{20} + \dfrac{3}{4}\right) : 2
&= \left(\dfrac{11}{20} + \dfrac{15}{20}\right) : 2 \\
&= \dfrac{26}{20} : 2 \\
&= \dfrac{13}{10} : 2
= \dfrac{13}{20}
\end{align*}
$$
************
</div>

</section>





