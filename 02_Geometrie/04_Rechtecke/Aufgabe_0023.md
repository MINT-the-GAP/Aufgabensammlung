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


tags: Rechteck, Einheiten, Dezimalzahlen, Länge, Fläche, Umfang, mittel, normal, Angeben

comment: Berechne den Umfang einer rechteckigen Fläche.

author: Martin Lommatzsch

-->




# Umfang von Rechtecken


**Gib** den Umfang des beschriebenen Rechtecks in der angegebenen Einheit **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $a=2,5\,$m $\;\;\wedge\;\; b=0,3\,$dm

$u=$[[  5,6  ]]m

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $a=0,81\,$dm $\;\;\wedge\;\; b=0,42\,$m

$u=$[[  100,2 ]]cm



</div>

</section>





<br>
<br>
<br>
<br>
<br>