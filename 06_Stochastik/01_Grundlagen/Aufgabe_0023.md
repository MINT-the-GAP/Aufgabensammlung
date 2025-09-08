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

__$a)\;\;$__ Es gibt $6$ unterschiedliche Kugeln. 

[[  720    ]] 
**********
$6! = 720$
**********


</div>
<div class="flex-child">

__$b)\;\;$__ Es gibt $5$ rote und $3$ blaue Kugeln. 

[[  56     ]] 
**********
$\dfrac{8!}{5!3!} = 56$
**********


</div>
<div class="flex-child">


__$c)\;\;$__ Es gibt $9$ rote und $3$ blaue Kugeln. 

[[  220    ]] 
**********
$\dfrac{12!}{6!3!} = 220$
**********

</div>
</section>









