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



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\dfrac{129}{100} \qquad$  \


 [[  1,29   ]] 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{2}{1}+\dfrac{4}{10}+\dfrac{4}{100} \qquad$  \


 [[  2,44  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{3}{10}+\dfrac{8}{10000} \qquad$  \

  [[  0,3008  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{9}{100}+\dfrac{6}{1000}+\dfrac{11}{1} \qquad$  \


 [[  11,096  ]] 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{3}{1}+\dfrac{49}{1000} \qquad$  \


 [[  3,049   ]] 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{7}{1000000} \qquad$  \


 [[  0,000007 ]] 


</div>
</section>





