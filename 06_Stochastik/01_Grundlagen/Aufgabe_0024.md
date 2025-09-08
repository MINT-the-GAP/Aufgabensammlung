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


tags: Fakultät, Bruchrechnung, leicht, niedrig, Bestimme

comment: Bestimme die Anzahl der Permutationen für das beschriebene Szenario.

author: Martin Lommatzsch

-->




# Permutationsanzahl bestimmen


**Bestimme** die Anzahl der Permutationen.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Es gibt $7$ unterschiedliche Kugeln. 

[[  5040   ]] 
**********
$7! = 5040$
**********

</div>
<div class="flex-child">


__$b)\;\;$__ Es gibt $4$ rote und $2$ blaue Kugeln.

[[  15     ]] 
**********
$\dfrac{6!}{4!2!} = 15$
**********


</div>
<div class="flex-child">


__$c)\;\;$__ Es gibt $6$ rote, $2$ grüne und $2$ blaue Kugeln.

[[  1260   ]] 
**********
$\dfrac{10!}{6!2!2!} = 1260$
**********


</div>
</section>








