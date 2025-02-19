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


tags: Dreiecke, Länge, Fläche, Umfang, Einheiten, leicht, normal, Angeben

comment: Berechne die unbekannte Seitenlänge aus dem Umfang einer dreieckigen Fläche. Achte auf die Einheiten.

author: Martin Lommatzsch

-->




# Seitenlänge aus dem Dreiecksumfang


**Gib** die fehlende Seitenlänge aus den beschriebenen Werten eines Dreiecks **an**.

<br>


<section class="flex-container">


<div class="flex-child">
__$a)\;\;$__ $u=47\,$dm $\;\;\wedge\;\; b=18\,$dm $\;\;\wedge\;\; c=16\,$dm
--> $a=$[[  1300  ]]mm

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $u=32\,$cm $\;\;\wedge\;\; b=1\,$dm $\;\;\wedge\;\; c=140\,$mm
--> $a=$[[  80  ]]mm



</div>

</section>





<br>
<br>
<br>
<br>
<br>