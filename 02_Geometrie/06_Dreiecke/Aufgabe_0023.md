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


tags: Dreiecke, Länge, Fläche, Umfang, Dezimalzahlen, Einheiten, mittel, normal, Angeben

comment: Berechne die unbekannte Seitenlänge aus dem Umfang einer dreieckigen Fläche in Dezimalzahlen. Achte auf die Einheiten.

author: Martin Lommatzsch

-->




# Seitenlänge aus dem Dreiecksumfang


**Gib** die fehlende Seitenlänge aus den beschriebenen Werten eines Dreiecks **an**.

<br>


<section class="flex-container">


<div class="flex-child">
__$a)\;\;$__ $u=1,1\,$m $\;\;\wedge\;\; b=4,2\,$dm $\;\;\wedge\;\; c=3,9\,$dm
--> $a=$[[  290  ]]mm

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $u=40,8\,$cm $\;\;\wedge\;\; b=121\,$mm $\;\;\wedge\;\; c=14,4\,$cm
--> $a=$[[  1,43  ]]dm



</div>

</section>





<br>
<br>
<br>
<br>
<br>