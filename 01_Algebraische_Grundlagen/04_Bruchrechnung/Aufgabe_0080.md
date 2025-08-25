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


tags: Bruchrechnung, sehr leicht, sehr niedrig, Angeben

comment: Wie viel sind zum Beispiel $\frac{1}{4}$ von 4000€? Bestimme den Anteilswert.

author: Martin Lommatzsch

-->




# Anteilsweise mit Bruchanteilen

**Gib** den beschriebenen Anteilswert **an**.



<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ Wie viel sind $\dfrac{9}{4}$ von $72\,$kg?  \
 [[  162  ]]kg
***************
$$
\begin{align*}
  \dfrac{9}{4} \cdot 72\,\text{kg} & = \dfrac{9 \cdot 72}{4} \,\text{kg} \\
  & = 9 \cdot 18 \,\text{kg} 
  & = 162 \,\text{kg} 
\end{align*}
$$
***************

</div>
<div class="flex-child">


__$b)\;\;$__ Wie viel sind $\dfrac{7}{10}$ von $120\,$kg?  \
 [[  84  ]]kg
***************
$$
\begin{align*}
  \dfrac{7}{10} \cdot 120\,\text{kg} & = \dfrac{7 \cdot 12}{10} \,\text{kg} \\
  & = 7 \cdot 12 \,\text{kg} 
  & = 84 \,\text{kg} 
\end{align*}
$$
***************

</div>
<div class="flex-child">


__$c)\;\;$__ Wie viel sind $\dfrac{1}{8}$ von $480\,$m?  \
 [[  60  ]]m
***************
$$
\begin{align*}
  \dfrac{1}{8} \cdot 480\,\text{m} & = \dfrac{480}{8} \,\text{m} \\
  & = 480 : 8 \,\text{m} 
  & = 60 \,\text{m} 
\end{align*}
$$
***************

</div>
<div class="flex-child">


__$d)\;\;$__ Wie viel sind $\dfrac{3}{20}$ von $500\,$€?  \
 [[  75  ]]€
***************
$$
\begin{align*}
  \dfrac{3}{20} \cdot 500\,\text{€} & = \dfrac{3 \cdot 500}{20} \,\text{€} \\
  & = \dfrac{3 \cdot 50}{2} \,\text{€} 
  & = 3 \cdot 25 \,\text{€} 
  & = 75 \,\text{€} 
\end{align*}
$$
***************

</div>
</section>




