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



tags: Bruchrechnung, Division, leicht, niedrig, Berechnen

comment: Löse Doppelbrüche auf.

author: Martin Lommatzsch

-->




# Doppelbrüche



**Berechne** den Wert des Terms.



<section class="flex-container">


<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{ \left( \dfrac{2}{3} \right) }{ \left( \dfrac{5}{7} \right) } = $ [[  14/15  ]] 
@Algebrite.check(14/15)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{2}{3} \right) }{ \left( \dfrac{5}{7} \right) } & = \dfrac{2}{3} : \dfrac{5}{7} \\
& = \dfrac{2}{3} \cdot \dfrac{7}{5} \\
& = \dfrac{14}{15}  \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{\left(\dfrac{3}{4}\right)}{\left(\dfrac{2}{5}\right)} = $ [[  15/8  ]]
@Algebrite.check(15/8)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{3}{4}\right)}{\left(\dfrac{2}{5}\right)}
&= \dfrac{3}{4} : \dfrac{2}{5} \\
&= \dfrac{3}{4} \cdot \dfrac{5}{2} \\
&= \dfrac{15}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{\left(\dfrac{5}{6}\right)}{\left(\dfrac{1}{3}\right)} = $ [[  5/2  ]]
@Algebrite.check(5/2)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{5}{6}\right)}{\left(\dfrac{1}{3}\right)}
&= \dfrac{5}{6} : \dfrac{1}{3} \\
&= \dfrac{5}{6} \cdot \dfrac{3}{1} \\
&= \dfrac{15}{6} \\
&= \dfrac{5}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{\left(\dfrac{7}{9}\right)}{\left(\dfrac{7}{12}\right)} = $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{7}{9}\right)}{\left(\dfrac{7}{12}\right)}
&= \dfrac{7}{9} : \dfrac{7}{12} \\
&= \dfrac{7}{9} \cdot \dfrac{12}{7} \\
&= \dfrac{12}{9} \\
&= \dfrac{4}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{\left(\dfrac{4}{9}\right)}{\left(\dfrac{2}{3}\right)} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{4}{9}\right)}{\left(\dfrac{2}{3}\right)}
&= \dfrac{4}{9} : \dfrac{2}{3} \\
&= \dfrac{4}{9} \cdot \dfrac{3}{2} \\
&= \dfrac{12}{18} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{\left(\dfrac{8}{15}\right)}{\left(\dfrac{4}{25}\right)} = $ [[  10/3  ]]
@Algebrite.check(10/3)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{8}{15}\right)}{\left(\dfrac{4}{25}\right)}
&= \dfrac{8}{15} : \dfrac{4}{25} \\
&= \dfrac{8}{15} \cdot \dfrac{25}{4} \\
&= \dfrac{200}{60} \\
&= \dfrac{10}{3}
\end{align*}
$$
************
</div>

</section>







