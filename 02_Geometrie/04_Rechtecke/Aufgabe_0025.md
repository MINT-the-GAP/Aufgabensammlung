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


tags: Rechteck, Länge, Fläche, leicht, niedrig, Angeben

comment: Der Flächeninhalt einer rechteckigen Fläche ist bekannt, doch eine Seitenlänge fehlt.

author: Martin Lommatzsch

-->




# Fächeninhalt von Rechtecken


**Gib** die fehlende Seitenlänge **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $A=45\,$cm$^2\;\;\wedge\;\; a=5\,$cm

$b=$[[  9  ]]cm

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $A=56\,$cm$^2\;\;\wedge\;\; a=7\,$cm

$b=$[[  8  ]]cm




</div>

</section>

<br>
<br>
<br>
<br>
<br>