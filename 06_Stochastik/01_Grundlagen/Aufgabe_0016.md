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


tags: Chance, Wahrscheinlichkeit, sehr leicht, sehr niedrig, Angeben

comment: Welche Wahrscheinlichkeit versteckt sich hinter dieser Chance?

author: Martin Lommatzsch

-->




# Chance und Wahrscheinlichkeit



**Gib** die angegebene Chance als Wahrscheinlichkeit **an**.


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ Die Chance wird mit $2:3$ angegeben.

$p=$[[ 2/5 ]]
@Algebrite.check(2/5)
</div>
<div class="flex-child">
__$b)\;\;$__ Die Chance wird mit $5:2$ angegeben.

$p=$[[ 5/7 ]]
@Algebrite.check(5/7)
</div>
<div class="flex-child">
__$c)\;\;$__ Die Chance wird mit $11:9$ angegeben.

$p=$[[ 11/20 ]]
@Algebrite.check(11/20)
</div>
<div class="flex-child">
__$d)\;\;$__ Die Chance wird mit $17:23$ angegeben.

$p=$[[ 17/40 ]]
@Algebrite.check(17/40)
</div>
<div class="flex-child">
__$e)\;\;$__ Die Chance wird mit $1:22$ angegeben.

$p=$[[ 1/23 ]]
@Algebrite.check(1/23)
</div>
<div class="flex-child">
__$f)\;\;$__ Die Chance wird mit $45:2$ angegeben.

$p=$[[ 45/47 ]]
@Algebrite.check(45/47)
</div>

</section>


