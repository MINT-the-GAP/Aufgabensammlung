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


tags: Negative Zahlen, Dezimalzahlen, Zahlenverständnis, leicht, niedrig, Angeben

comment: Wie heißt die Dezimalzahl, die genau in der Mitte zwischen den beiden gegebenen Zahlen liegt?

author: Martin Lommatzsch

-->




# Die Zahl in der Mitte

**Gib** die Dezimalzahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.



<br>

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $-5$ und $-1,7 \quad$ \
[[ -3,35  ]] 
</div>
<div class="flex-child">
__$b)\;\;$__ $1,3$ und $-2,9 \quad$ \
[[ -0,8   ]] 
</div> 
<div class="flex-child">
__$c)\;\;$__ $-6,3$ und $-0,8 \quad$ \
[[ -3,05  ]] 
</div> 
<div class="flex-child">
__$d)\;\;$__ $-7,5$ und $ 10 \quad$ \
[[  2,25  ]] 
</div> 
</section>

<br>

<br>
<br>
<br>
<br>
<br>
<br>