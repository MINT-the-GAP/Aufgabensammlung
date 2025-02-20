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


tags: Dreiecke, Länge, Fläche, mittel, niedrig, Angeben

comment: Berechne die unbekannte Seitenlänge aus dem Flächeninhalt einer dreieckigen Fläche. Achte auf die Einheiten.

author: Martin Lommatzsch

-->




# Flächeninhalt von Dreiecken


**Gib** die fehlende Grundseitenlänge beziehungsweise Höhenlänge aus den beschriebenen Werten eines Dreiecks **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $A= 6600\,$mm$^2\;\;\wedge\;\; h= 12\,$cm

$g=$[[  110  ]]mm

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $A= 90\,$dm$^2\;\;\wedge\;\; g= 1200\,$mm

$h=$[[  150  ]]cm



</div>

</section>





<br>
<br>
<br>
<br>
<br>