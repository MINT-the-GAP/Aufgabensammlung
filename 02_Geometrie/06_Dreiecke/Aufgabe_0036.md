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


tags: Dreiecke, Länge, Fläche, Dezimalzahlen, Einheiten, leicht, normal, Angeben

comment: Berechne den Flächeninhalt einer dreieckigen Fläche in Dezimalzahlen. Achte auf die Einheiten.

author: Martin Lommatzsch

-->




# Flächeninhalt von Dreiecken


**Gib** den Flächeninhalt des beschriebenen Dreiecks **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $g= 1,4\,$dm $\;\;\wedge\;\; h= 5,1\,$cm

$A=$[[  3570  ]]mm$^2$

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $g= 0,4\,$dm $\;\;\wedge\;\; h= 2,4\,$mm

$A=$[[   0,6   ]]cm$^2$



</div>

</section>





<br>
<br>
<br>
<br>
<br>