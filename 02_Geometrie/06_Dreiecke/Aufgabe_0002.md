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


tags: Dreiecke, Länge, Fläche, Umfang, sehr leicht, sehr niedrig, Angeben

comment: Berechne den Umfang einer dreieckigen Fläche.

author: Martin Lommatzsch

-->




# Umfang von Dreiecken


**Gib** den Umfang des beschriebenen Dreiecks **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $a=6\,$cm $\;\;\wedge\;\; b=4\,$cm $\;\;\wedge\;\; c=7\,$cm
--> $u=$[[  17  ]]cm

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $a=21\,$cm $\;\;\wedge\;\; b=15\,$cm $\;\;\wedge\;\; c=14\,$cm
--> $u=$[[  50  ]]cm



</div>

</section>





<br>
<br>
<br>
<br>
<br>