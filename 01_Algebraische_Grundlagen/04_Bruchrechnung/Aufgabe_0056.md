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
__$a)\;\;$__ $ \dfrac{\left(\dfrac{2}{5}\right)}{\left(\dfrac{1}{10}\right)} = $ [[  4  ]]
@Algebrite.check(4)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{2}{5}\right)}{\left(\dfrac{1}{10}\right)}
&= \dfrac{2}{5} : \dfrac{1}{10} \\
&= \dfrac{2}{5} \cdot \dfrac{10}{1} \\
&= \dfrac{20}{5} \\
&= 4
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{\left(\dfrac{3}{7}\right)}{\left(\dfrac{9}{14}\right)} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{3}{7}\right)}{\left(\dfrac{9}{14}\right)}
&= \dfrac{3}{7} : \dfrac{9}{14} \\
&= \dfrac{3}{7} \cdot \dfrac{14}{9} \\
&= \dfrac{42}{63} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{\left(\dfrac{4}{9}\right)}{\left(\dfrac{2}{27}\right)} = $ [[  6  ]]
@Algebrite.check(6)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{4}{9}\right)}{\left(\dfrac{2}{27}\right)}
&= \dfrac{4}{9} : \dfrac{2}{27} \\
&= \dfrac{4}{9} \cdot \dfrac{27}{2} \\
&= \dfrac{108}{18} \\
&= 6
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{\left(\dfrac{7}{12}\right)}{\left(\dfrac{14}{15}\right)} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{7}{12}\right)}{\left(\dfrac{14}{15}\right)}
&= \dfrac{7}{12} : \dfrac{14}{15} \\
&= \dfrac{7}{12} \cdot \dfrac{15}{14} \\
&= \dfrac{105}{168} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{\left(\dfrac{9}{20}\right)}{\left(\dfrac{3}{25}\right)} = $ [[  15/4  ]]
@Algebrite.check(15/4)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{9}{20}\right)}{\left(\dfrac{3}{25}\right)}
&= \dfrac{9}{20} : \dfrac{3}{25} \\
&= \dfrac{9}{20} \cdot \dfrac{25}{3} \\
&= \dfrac{225}{60} \\
&= \dfrac{15}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{\left(\dfrac{8}{15}\right)}{\left(\dfrac{6}{25}\right)} = $ [[  10/9  ]]
@Algebrite.check(10/9)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{8}{15}\right)}{\left(\dfrac{6}{25}\right)}
&= \dfrac{8}{15} : \dfrac{6}{25} \\
&= \dfrac{8}{15} \cdot \dfrac{25}{6} \\
&= \dfrac{200}{90} \\
&= \dfrac{10}{9}
\end{align*}
$$
************
</div>

</section>










