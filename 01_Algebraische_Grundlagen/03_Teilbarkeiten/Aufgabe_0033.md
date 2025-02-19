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
__$a)\;\;$__ $8425$ [[ $\mid$ | ($\nmid$) ]] $5$ \
<br>
</div>
<div class="flex-child">
__$b)\;\;$__ $3609$ [[ $\mid$ | ($\nmid$) ]] $9$ \
<br>
</div>
<div class="flex-child">
__$c)\;\;$__ $6142$ [[ $\mid$ | ($\nmid$) ]] $2$ \
<br>
</div>
<div class="flex-child">
__$d)\;\;$__ $3$ [[ ($\mid$) | $\nmid$ ]] $12$ \
<br>
</div>
<div class="flex-child">
__$e)\;\;$__ $4176$ [[ $\mid$ | ($\nmid$) ]] $4$ \
<br>
</div>
<div class="flex-child">
__$f)\;\;$__ $2511$ [[ $\mid$ | ($\nmid$) ]] $3$ 
<br>

</div>

</section>

<br>
<br>
<br>
<br>
<br>