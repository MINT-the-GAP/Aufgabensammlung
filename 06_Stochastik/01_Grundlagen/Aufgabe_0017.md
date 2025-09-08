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


tags: Wahrscheinlichkeit, sehr leicht, sehr niedrig, Angeben

comment: Welcher Wahrscheinlichkeitswert ist hier beschrieben?

author: Martin Lommatzsch

-->




# Wahrscheinlichkeiten angeben


**Gib** die Wahrscheinlichkeit für das beschriebene Szenario **an**.



<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ Eine ideale Münze wird hochgeworfen. Beim Aufkommen liegt die Kopf-Seite oben.

$p=$[[  1/2  ]]
@Algebrite.check(1/2)
</div>
<div class="flex-child">
__$b)\;\;$__ Mit einem idealen sechsseitigen Würfel wird gewürfelt. Nach dem Wurf ist die 4 oben.

$p=$[[  1/6  ]]
@Algebrite.check(1/6)
</div>
<div class="flex-child">
__$c)\;\;$__ Mit einem idealen zwanzigseitigen Würfel wird gewürfelt. Nach dem Wurf ist keine 13 oben.

$p=$[[  19/20  ]]
@Algebrite.check(19/20)
</div>
<div class="flex-child">
__$d)\;\;$__ Ein Glücksrad ist in 25 gleichgroße Flächen eingeteilt. Zwei dieser Flächen sind rot und es kommt auf einer roten Fläche zum Stoppen.

$p=$[[  2/25  ]]
@Algebrite.check(2/25)
</div>
<div class="flex-child">
__$e)\;\;$__ Ein Glücksrad ist in 10 gleichgroße unterschiedlich gefärbte Flächen eingeteilt. Das Rad kommt auf einer orangen Fläche zum Stoppen.

$p=$[[  1/10  ]]
@Algebrite.check(1/10)
</div>
</section>




