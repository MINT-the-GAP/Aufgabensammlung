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


tags: Rechteck, Länge, Fläche, sehr leicht, sehr niedrig, Angeben

comment: Berechne den Flächeninhalt einer rechteckigen Fläche.

author: Martin Lommatzsch

-->




# Fächeninhalt von Rechtecken


**Gib** den Flächeninhalt des beschriebenen Rechtecks **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $a=12\,$cm $\;\;\wedge\;\; b=9\,$cm
--> $A=$[[  108  ]]cm$^2$

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $a=8\,$cm $\;\;\wedge\;\; b=13\,$cm
--> $A=$[[  104  ]]cm$^2$



</div>

</section>




<br>
<br>
<br>
<br>
<br>