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


tags: Bruchrechnung, Zahlenverständnis, Dezimalzahlen, sehr leicht, sehr niedrig, Angeben

comment: Eine Summe von Brüchen als Dezimalzahl? Schreib sie nieder.

author: Martin Lommatzsch

-->




# Darstellungswechsel vom Bruch zur Dezimalzahl

**Gib** die durch den Term angezeigte Dezimalzahl **an**.

<br>

<section class="flex-container">
<div class="flex-child">
<br>
__$a)\;\;$__ $\dfrac{1}{10}+\dfrac{5}{100}+\dfrac{2}{100} \qquad$  \
<br>

 [[  0,152   ]] 
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $\dfrac{8}{10}+\dfrac{9}{100}+\dfrac{3}{1000}+\dfrac{5}{10000} \qquad$  \
<br>

 [[  0,8935  ]] 
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $\dfrac{9}{100}+\dfrac{8}{10000} \qquad$  \
<br>

 [[  0,0908  ]] 
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $\dfrac{7}{1000}+\dfrac{9}{10000} \qquad$  \
<br>

 [[  0,0079  ]] 
<br>
</div>
<div class="flex-child">
<br>
__$e)\;\;$__ $\dfrac{7}{1}+\dfrac{15}{1000} \qquad$  \
<br>

 [[  7,015   ]] 
<br>
</div>
<div class="flex-child">
<br>
__$f)\;\;$__ $\dfrac{5}{1000}+\dfrac{5}{1000000} \qquad$  \
<br>

 [[  0,005005 ]] 

<br>
</div>
</section>

<br>
<br>
<br>

