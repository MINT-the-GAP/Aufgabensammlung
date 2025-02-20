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


tags: Dreiecke, Länge, Fläche, Umfang, Einheiten, leicht, niedrig, Angeben

comment: Berechne den Umfang einer dreieckigen Fläche. Achte auf die Einheiten

author: Martin Lommatzsch

-->




# Umfang von Dreiecken


**Gib** den Umfang des beschriebenen Dreiecks **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $a=2\,$m $\;\;\wedge\;\; b=1\,$m $\;\;\wedge\;\; c=12\,$dm

$u=$[[  420   ]]cm

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $a=14\,$dm $\;\;\wedge\;\; b=12\,$dm $\;\;\wedge\;\; c=2\,$m

$u=$[[  4600  ]]mm



</div>

</section>





<br>
<br>
<br>
<br>
<br>