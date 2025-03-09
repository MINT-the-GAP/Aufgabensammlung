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


tags: Rechteck, Einheiten, Länge, Fläche, leicht, niedrig, Angeben

comment: Der Flächeninhalt einer rechteckigen Fläche ist bekannt, doch eine Seitenlänge fehlt. Achte auf die Einheiten.

author: Martin Lommatzsch

-->




# Fächeninhalt von Rechtecken


**Gib** die fehlende Seitenlänge **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $A=64\,$km$^2\;\;\wedge\;\; a=4\,$km

$b=$[[  1600000  ]]cm

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $A=250000\,$cm$^2\;\;\wedge\;\; a=5\,$dm

$b=$[[  50       ]]m




</div>

</section>

<br>
<br>
<br>
<br>
<br>