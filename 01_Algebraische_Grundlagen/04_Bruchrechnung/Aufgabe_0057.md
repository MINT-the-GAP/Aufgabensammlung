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



tags: Bruchrechnung, schwer, hoch, Berechnen

comment: Löse Mehrfachbrüche auf.

author: Martin Lommatzsch

-->




# Mehrfachbrüche



**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 1 }{ 3 }\right) }{  \left(\dfrac{ 4 }{ 5 }\right) }  \right] }{ 4 } \;= $ [[  5/48  ]]
@Algebrite.check(5/48)
************
$$
\begin{align*}
\dfrac{ \left[ \dfrac{ \left(\dfrac{1}{3}\right) }{ \left(\dfrac{4}{5}\right) } \right] }{4}
&= \dfrac{\left(\dfrac{1}{3} : \dfrac{4}{5}\right)}{4} \\
&= \dfrac{\left(\dfrac{1}{3} \cdot \dfrac{5}{4}\right)}{4} \\
&= \dfrac{\dfrac{5}{12}}{4}
= \dfrac{5}{12} \cdot \dfrac{1}{4}
= \dfrac{5}{48}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{ 8 }{ \left[ \dfrac{ \left(\dfrac{ 2 }{ 5 }\right) }{  \left(\dfrac{ 3 }{ 4 }\right) }  \right] } \;= $ [[  15  ]]
@Algebrite.check(15)
************
$$
\begin{align*}
\dfrac{8}{\left[ \dfrac{\left(\dfrac{2}{5}\right)}{\left(\dfrac{3}{4}\right)} \right]}
&= 8 : \left( \dfrac{2}{5} : \dfrac{3}{4} \right) \\
&= 8 : \left( \dfrac{2}{5} \cdot \dfrac{4}{3} \right)
= 8 : \dfrac{8}{15} \\
&= 8 \cdot \dfrac{15}{8}
= 15
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{ \left[\dfrac{2}{3}\right] }{ \left[ \dfrac{ \left(\dfrac{ 9 }{ 7 }\right) }{  6 }  \right] } \;= $ [[  28/9  ]]
@Algebrite.check(28/9)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{2}{3}\right)}{\left[ \dfrac{\left(\dfrac{9}{7}\right)}{6} \right]}
&= \dfrac{\dfrac{2}{3}}{\left( \dfrac{9}{7} : 6 \right)}
= \dfrac{\dfrac{2}{3}}{\left( \dfrac{9}{7} \cdot \dfrac{1}{6} \right)} \\
&= \dfrac{\dfrac{2}{3}}{\dfrac{9}{42}}
= \dfrac{2}{3} \cdot \dfrac{42}{9}
= \dfrac{84}{27}
= \dfrac{28}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 5 }{ 6 }\right) }{  \left(\dfrac{ 4 }{ 3 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 4 }{ 3 }\right) }{  \left(\dfrac{ 7 }{ 8 }\right) }  \right] } \;= $ [[  105/256  ]]
@Algebrite.check(105/256)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{5}{6}\right)}{\left(\dfrac{4}{3}\right)}
&= \dfrac{5}{6} : \dfrac{4}{3}
= \dfrac{5}{6} \cdot \dfrac{3}{4}
= \dfrac{15}{24}
= \dfrac{5}{8} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{4}{3}\right)}{\left(\dfrac{7}{8}\right)}
&= \dfrac{4}{3} : \dfrac{7}{8}
= \dfrac{4}{3} \cdot \dfrac{8}{7}
= \dfrac{32}{21} \\
\text{Gesamt:}\quad 
\dfrac{\dfrac{5}{8}}{\dfrac{32}{21}}
&= \dfrac{5}{8} \cdot \dfrac{21}{32}
= \dfrac{105}{256}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 2 }{ 3 } + \dfrac{1}{2}\right) }{  \left(\dfrac{ 3 }{ 7 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 8 }{ 3 }\right) }{  \left(\dfrac{ 8 }{ 9 }\right) }  \right] } \;= $ [[  49/54  ]]
@Algebrite.check(49/54)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{2}{3} + \dfrac{1}{2}\right)}{\left(\dfrac{3}{7}\right)}
&= \dfrac{\left(\dfrac{4}{6} + \dfrac{3}{6}\right)}{\left(\dfrac{3}{7}\right)}
= \dfrac{\dfrac{7}{6}}{\dfrac{3}{7}}
= \dfrac{7}{6} \cdot \dfrac{7}{3}
= \dfrac{49}{18} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{8}{3}\right)}{\left(\dfrac{8}{9}\right)}
&= \dfrac{8}{3} : \dfrac{8}{9}
= \dfrac{8}{3} \cdot \dfrac{9}{8}
= 3 \\
\text{Gesamt:}\quad \dfrac{\dfrac{49}{18}}{3}
&= \dfrac{49}{18} \cdot \dfrac{1}{3}
= \dfrac{49}{54}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 5 }{ 7 }\right) }{  \left(\dfrac{ 4 }{ 5 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 9 }{ 8 }\right) }{  \left(\dfrac{ 11 }{ 3 } + \dfrac{3}{5}\right) }  \right] } \;= $ [[  640/189  ]]
@Algebrite.check(640/189)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{5}{7}\right)}{\left(\dfrac{4}{5}\right)}
&= \dfrac{5}{7} : \dfrac{4}{5}
= \dfrac{5}{7} \cdot \dfrac{5}{4}
= \dfrac{25}{28} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{9}{8}\right)}{\left(\dfrac{11}{3} + \dfrac{3}{5}\right)}
&= \dfrac{9}{8} : \left( \dfrac{55}{15} + \dfrac{9}{15} \right)
= \dfrac{9}{8} : \dfrac{64}{15}
= \dfrac{9}{8} \cdot \dfrac{15}{64}
= \dfrac{135}{512} \\
\text{Gesamt:}\quad 
\dfrac{\dfrac{25}{28}}{\dfrac{135}{512}}
&= \dfrac{25}{28} \cdot \dfrac{512}{135} \\
&= \dfrac{25}{135} \cdot \dfrac{512}{28}
= \dfrac{5}{27} \cdot \dfrac{128}{7} \\
&= \dfrac{640}{189}
\end{align*}
$$
************
</div>


</section>

