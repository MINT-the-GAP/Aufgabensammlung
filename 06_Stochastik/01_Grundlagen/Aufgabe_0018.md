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
__$a)\;\;$__ Mit einem idealen achtsseitigen Würfel wird gewürfelt. Nach dem Wurf ist die 7 oben.

$p=$[[  1/8  ]]
@Algebrite.check(1/8)
</div>
<div class="flex-child">
__$b)\;\;$__ Ein Glücksrad ist in vier gleichgroße unterschiedlich gefärbte Flächen eingeteilt. Das Rad kommt auf einer blauen Fläche zum Stoppen.

$p=$[[  1/4  ]]
@Algebrite.check(1/4)
</div>
<div class="flex-child">
__$c)\;\;$__ In einer Losbox befinden sich 3 Gewinnlose und 7 Nieten. Es wird eine Niete gezogen.

$p=$[[  7/10  ]]
@Algebrite.check(7/10)
</div>
<div class="flex-child">
__$d)\;\;$__ Mit einem idealen zwölfseitigen Würfel wird gewürfelt. Nach dem Wurf ist keine 13 oben.

$p=$[[  1  ]]
@Algebrite.check(1)
</div>
<div class="flex-child">
__$e)\;\;$__ Mit einem idealen vierseitigen Würfel wird gewürfelt. Nach dem Wurf liegt eine Primzahl oben.

$p=$[[  1/2  ]]
@Algebrite.check(1/2)
</div>
</section>






