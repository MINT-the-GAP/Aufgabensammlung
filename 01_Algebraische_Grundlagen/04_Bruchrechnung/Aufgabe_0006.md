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
__$a)\;\;$__ $\dfrac{3}{10}+\dfrac{9}{100} \qquad$  \
<br>
--> [[  0,39   ]] 
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $\dfrac{6}{10}+\dfrac{2}{100}+\dfrac{7}{1000} \qquad$  \
<br>
--> [[  0,627  ]] 
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $\dfrac{5}{10}+\dfrac{5}{1000} \qquad$  \
<br>
--> [[  0,505  ]] 
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $\dfrac{4}{100}+\dfrac{1}{1000} \qquad$  \
<br>
--> [[  0,041  ]] 
<br>
</div>
<div class="flex-child">
<br>
__$e)\;\;$__ $\dfrac{6}{1}+\dfrac{8}{100} \qquad$  \
<br>
--> [[  6,08   ]] 
<br>
</div>
<div class="flex-child">
<br>
__$f)\;\;$__ $\dfrac{5}{1}+\dfrac{4}{100}+\dfrac{7}{10000} \qquad$  \
<br>
--> [[  5,0407 ]] 

<br>
</div>
</section>

<br>
<br>
<br>

