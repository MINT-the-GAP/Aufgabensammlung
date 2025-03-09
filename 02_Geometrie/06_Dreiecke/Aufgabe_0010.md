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


tags: Dreiecke, Länge, Fläche, Umfang, Einheiten, Dezimalzahlen, leicht, normal, Angeben

comment: Berechne den Umfang einer dreieckigen Fläche in Dezimalzahlen. Achte auf die Einheiten.

author: Martin Lommatzsch

-->




# Umfang von Dreiecken


**Gib** den Umfang des beschriebenen Dreiecks **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $a=0,12\,$m $\;\;\wedge\;\; b=0,7\,$dm $\;\;\wedge\;\; c=11\,$cm

$u=$[[  300  ]]mm

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $a=26\,$mm $\;\;\wedge\;\; b=33\,$mm $\;\;\wedge\;\; c=4,4\,$cm

$u=$[[  1,03  ]]dm



</div>

</section>





<br>
<br>
<br>
<br>
<br>