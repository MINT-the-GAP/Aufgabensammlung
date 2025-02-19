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


tags: Teilbarkeiten, leicht, sehr niedrig, Angeben

comment: Ist die Zahl ein Teiler? Wähle aus.

author: Martin Lommatzsch

-->




# Teiler bestimmen


**Entscheide**, ob die es sich um einen Teiler $\mid$ oder keinem Teiler $\nmid$ der Zahl handelt.

<br>

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $8$ [[ ($\mid$) | $\nmid$ ]] $1416$ \
<br>
</div>
<div class="flex-child">
__$b)\;\;$__ $9$ [[ $\mid$ | ($\nmid$) ]] $6707$ \
<br>
</div>
<div class="flex-child">
__$c)\;\;$__ $6$ [[ ($\mid$) | $\nmid$ ]] $8424$ \
<br>
</div>
<div class="flex-child">
__$d)\;\;$__ $10$ [[ ($\mid$) | $\nmid$ ]] $9200$ \
<br>
</div>
<div class="flex-child">
__$e)\;\;$__ $4$ [[ $\mid$ | ($\nmid$) ]] $9846$ \
<br>
</div>
<div class="flex-child">
__$f)\;\;$__ $7$ [[ ($\mid$) | $\nmid$ ]] $7098$ 
<br>

</div>

</section>

<br>
<br>
<br>
<br>
<br>