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


tags: Rechteck, Länge, Fläche, Umfang, leicht, niedrig, Angeben

comment: Der Umfang einer rechteckigen Fläche ist bekannt, doch eine Seitenlänge fehlt.

author: Martin Lommatzsch

-->




# Umfang von Rechtecken


**Gib** die fehlende Seitenlänge **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $u=62\,$cm$\;\;\wedge\;\; a=21\,$cm

$b=$[[  10  ]]cm

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $u=20\,$cm$\;\;\wedge\;\; a=9\,$cm

$b=$[[  1  ]]cm




</div>

</section>




<br>
<br>
<br>
<br>
<br>