<!--
version:  0.0.1
language: de


@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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




tags: Äquivalenzumformung, sehr leicht, sehr niedrig, Berechnen, 

comment: Führe eine kurze Äquivalenzumformung aus.

author: Martin Lommatzsch

-->




# Kurze Äquivalenzumformung


**Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $  x - 4 = 9 $ \
$x$ = [[  13  ]]
************
$$
\begin{align*}
x - 4 & = 9 \quad \left| +4  \right. \\
x   & = 13  \\
\end{align*}
$$
************

</div>
<div class="flex-child">


__$b)\;\;$__ $  4 \cdot x = 36$ \
$x$ =  [[  9   ]]
************
$$
\begin{align*}
4 \cdot x & = 36 \quad \left| : 4  \right. \\
x   & = 9  \\
\end{align*}
$$
************


</div>
<div class="flex-child">


__$c)\;\;$__ $  7 = \dfrac{x}{6}  $ \
$x$ =  [[  42  ]]
************
$$
\begin{align*}
7 & = \dfrac{x}{6} \quad \left| \cdot 6  \right. \\
42   & = x  \\
\end{align*}
$$
************


</div>
<div class="flex-child">


__$d)\;\;$__ $ 3 = x - 5 $ \
$x$ =  [[  8   ]]
************
$$
\begin{align*}
3 & = x - 5 \quad \left| +5  \right. \\
8   & = x  \\
\end{align*}
$$
************


</div>
<div class="flex-child">
 
__$e)\;\;$__ $  x + 8  = 13 $ \
$x$ =  [[  5   ]]
************
$$
\begin{align*}
x+8 & = 13 \quad \left| -8  \right. \\
x   & = 5  \\
\end{align*}
$$
************


</div>
<div class="flex-child">
 
__$f)\;\;$__ $  64 = 4 \cdot x  $ \
$x$ =  [[  16  ]]
************
$$
\begin{align*}
64 & = 4x \quad \left| :4  \right. \\
16 & = x  \\
\end{align*}
$$
************


</div>
</section>






