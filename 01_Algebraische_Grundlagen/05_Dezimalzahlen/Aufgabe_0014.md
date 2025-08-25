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


tags: Dezimalzahlen, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Wie heißt die Zahl, die genau in der Mitte zwischen den beiden gegebenen Zahlen liegt?

author: Martin Lommatzsch

-->




# Die Zahl in der Mitte

**Gib** die Zahl als Dezimalzahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.





<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $0$ und $0,7 \quad$ \
[[ 0,35  ]] 
</div>
<div class="flex-child">
__$b)\;\;$__ $10$ und $21 \quad$ \
[[ 15,5  ]] 
</div> 
<div class="flex-child">
__$c)\;\;$__ $0,25$ und $1,75 \quad$ \
[[ 1     ]] 
</div> 
<div class="flex-child">
__$d)\;\;$__ $4,2$ und $0,8 \quad$ \
[[  2,4  ]] 
</div> 
</section>








