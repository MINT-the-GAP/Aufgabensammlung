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


tags: Dreiecke, Länge, Fläche, Dezimalzahlen, leicht, niedrig, Angeben

comment: Berechne den Flächeninhalt einer dreieckigen Fläche in Dezimalzahlen.

author: Martin Lommatzsch

-->




# Flächeninhalt von Dreiecken


**Gib** den Flächeninhalt des beschriebenen Dreiecks **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $g= 4,8\,$cm $\;\;\wedge\;\; h= 1,2\,$cm

$A=$[[  2,88  ]]cm$^2$

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $g= 6\,$cm $\;\;\wedge\;\; h= 1,75\,$cm

$A=$[[  5,25  ]]cm$^2$



</div>

</section>





<br>
<br>
<br>
<br>
<br>