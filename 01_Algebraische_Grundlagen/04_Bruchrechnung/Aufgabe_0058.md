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




tags: Bruchrechnung, schwer, hoch, Berechne

comment: Löse Mehrfachbrüche auf.

author: Martin Lommatzsch

-->




# Mehrfachbrüche




**Berechne** den Wert des Terms.



<section class="flex-container">


<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 1 }{ 4 }\right) }{  \left(\dfrac{ 5 }{ 6 }\right) }  \right] }{ 3 } \;= $ [[  1/10  ]]
@Algebrite.check(1/10)
************
$$
\begin{align*}
\dfrac{ \left[ \dfrac{ \left(\dfrac{1}{4}\right) }{ \left(\dfrac{5}{6}\right) } \right] }{3}
&= \dfrac{\left(\dfrac{1}{4} : \dfrac{5}{6}\right)}{3}
= \dfrac{\left(\dfrac{1}{4} \cdot \dfrac{6}{5}\right)}{3}
= \dfrac{\dfrac{6}{20}}{3}
= \dfrac{\dfrac{3}{10}}{3} \\
&= \dfrac{3}{10}\cdot\dfrac{1}{3}
= \dfrac{3}{30}
= \dfrac{1}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{ 9 }{ \left[ \dfrac{ \left(\dfrac{ 3 }{ 7 }\right) }{  \left(\dfrac{ 2 }{ 5 }\right) }  \right] } \;= $ [[  42/5  ]]
@Algebrite.check(42/5)
************
$$
\begin{align*}
\dfrac{9}{\left[ \dfrac{\left(\dfrac{3}{7}\right)}{\left(\dfrac{2}{5}\right)} \right]}
&= 9 : \left( \dfrac{3}{7} : \dfrac{2}{5} \right)
= 9 : \left( \dfrac{3}{7}\cdot\dfrac{5}{2} \right)
= 9 : \dfrac{15}{14} \\
&= 9 \cdot \dfrac{14}{15}
= \dfrac{126}{15}
= \dfrac{42}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{ \left[\dfrac{3}{4}\right] }{ \left[ \dfrac{ \left(\dfrac{ 7 }{ 5 }\right) }{  2 }  \right] } \;= $ [[  15/14  ]]
@Algebrite.check(15/14)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{3}{4}\right)}{\left[ \dfrac{\left(\dfrac{7}{5}\right)}{2} \right]}
&= \dfrac{\dfrac{3}{4}}{\left( \dfrac{7}{5} : 2 \right)}
= \dfrac{\dfrac{3}{4}}{\left( \dfrac{7}{5}\cdot\dfrac{1}{2} \right)}
= \dfrac{\dfrac{3}{4}}{\dfrac{7}{10}} \\
&= \dfrac{3}{4}\cdot\dfrac{10}{7}
= \dfrac{30}{28}
= \dfrac{15}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 4 }{ 5 }\right) }{  \left(\dfrac{ 3 }{ 2 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 3 }{ 2 }\right) }{  \left(\dfrac{ 5 }{ 6 }\right) }  \right] } \;= $ [[  8/27  ]]
@Algebrite.check(8/27)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{4}{5}\right)}{\left(\dfrac{3}{2}\right)}
&= \dfrac{4}{5} : \dfrac{3}{2}
= \dfrac{4}{5}\cdot\dfrac{2}{3}
= \dfrac{8}{15} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{3}{2}\right)}{\left(\dfrac{5}{6}\right)}
&= \dfrac{3}{2} : \dfrac{5}{6}
= \dfrac{3}{2}\cdot\dfrac{6}{5}
= \dfrac{18}{10}
= \dfrac{9}{5} \\
\text{Gesamt:}\quad \dfrac{\dfrac{8}{15}}{\dfrac{9}{5}}
&= \dfrac{8}{15}\cdot\dfrac{5}{9}
= \dfrac{40}{135}
= \dfrac{8}{27}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 1 }{ 2 } + \dfrac{3}{4}\right) }{  \left(\dfrac{ 2 }{ 5 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 9 }{ 4 }\right) }{  \left(\dfrac{ 9 }{ 10 }\right) }  \right] } \;= $ [[  5/4  ]]
@Algebrite.check(5/4)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{1}{2} + \dfrac{3}{4}\right)}{\left(\dfrac{2}{5}\right)}
&= \dfrac{\left(\dfrac{2}{4} + \dfrac{3}{4}\right)}{\left(\dfrac{2}{5}\right)}
= \dfrac{\dfrac{5}{4}}{\dfrac{2}{5}}
= \dfrac{5}{4}\cdot\dfrac{5}{2}
= \dfrac{25}{8} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{9}{4}\right)}{\left(\dfrac{9}{10}\right)}
&= \dfrac{9}{4} : \dfrac{9}{10}
= \dfrac{9}{4}\cdot\dfrac{10}{9}
= \dfrac{10}{4}
= \dfrac{5}{2} \\
\text{Gesamt:}\quad \dfrac{\dfrac{25}{8}}{\dfrac{5}{2}}
&= \dfrac{25}{8}\cdot\dfrac{2}{5}
= \dfrac{50}{40}
= \dfrac{5}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 7 }{ 9 }\right) }{  \left(\dfrac{ 5 }{ 6 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 4 }{ 3 }\right) }{  \left(\dfrac{ 7 }{ 2 } + \dfrac{1}{3}\right) }  \right] } \;= $ [[  161/60  ]]
@Algebrite.check(161/60)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{7}{9}\right)}{\left(\dfrac{5}{6}\right)}
&= \dfrac{7}{9} : \dfrac{5}{6}
= \dfrac{7}{9}\cdot\dfrac{6}{5}
= \dfrac{42}{45}
= \dfrac{14}{15} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{4}{3}\right)}{\left(\dfrac{7}{2} + \dfrac{1}{3}\right)}
&= \dfrac{4}{3} : \left(\dfrac{21}{6} + \dfrac{2}{6}\right)
= \dfrac{4}{3} : \dfrac{23}{6}
= \dfrac{4}{3}\cdot\dfrac{6}{23}
= \dfrac{24}{69}
= \dfrac{8}{23} \\
\text{Gesamt:}\quad \dfrac{\dfrac{14}{15}}{\dfrac{8}{23}}
&= \dfrac{14}{15}\cdot\dfrac{23}{8}
= \dfrac{322}{120}
= \dfrac{161}{60}
\end{align*}
$$
************
</div>


</section>





