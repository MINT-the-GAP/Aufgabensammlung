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
__$a)\;\;$__ Die Chance wird mit $1:5$ angegeben.

$p=$[[ 1/6 ]]
@Algebrite.check(1/6)
</div>
<div class="flex-child">
__$b)\;\;$__ Die Chance wird mit $4:5$ angegeben.

$p=$[[ 4/9 ]]
@Algebrite.check(4/9)
</div>
<div class="flex-child">
__$c)\;\;$__ Die Chance wird mit $18:11$ angegeben.

$p=$[[ 18/29 ]]
@Algebrite.check(18/29)
</div>
<div class="flex-child">
__$d)\;\;$__ Die Chance wird mit $13:2$ angegeben.

$p=$[[ 13/15 ]]
@Algebrite.check(13/15)
</div>
<div class="flex-child">
__$e)\;\;$__ Die Chance wird mit $4:81$ angegeben.

$p=$[[ 4/85 ]]
@Algebrite.check(4/85)
</div>
<div class="flex-child">
__$f)\;\;$__ Die Chance wird mit $7:111$ angegeben.

$p=$[[ 7/118 ]]
@Algebrite.check(7/118)
</div>

</section>





