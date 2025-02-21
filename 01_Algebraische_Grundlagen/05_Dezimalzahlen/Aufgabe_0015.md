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



<br>

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $6,5$ und $8 \quad$ \
[[ 7,25  ]] 
</div>
<div class="flex-child">
__$b)\;\;$__ $0,05$ und $0,75 \quad$ \
[[ 0,4   ]] 
</div> 
<div class="flex-child">
__$c)\;\;$__ $1,9$ und $3,5 \quad$ \
[[ 2,6   ]] 
</div> 
<div class="flex-child">
__$d)\;\;$__ $0,02$ und $2 \quad$ \
[[ 0,99  ]] 
</div> 
</section>

<br>

<br>
<br>
<br>
<br>
<br>
<br>