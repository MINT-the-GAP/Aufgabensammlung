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


tags: Rechteck, Dezimalzahlen, Länge, Fläche, leicht, niedrig, Angeben

comment: Berechne den Flächeninhalt einer rechteckigen Fläche.

author: Martin Lommatzsch

-->




# Fächeninhalt von Rechtecken


**Gib** den Flächeninhalt des beschriebenen Rechtecks **an**.

<br>


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $a=4,4\,$dm $\;\;\wedge\;\; b=0,1\,$dm

$A=$[[  0,44   ]]dm$^2$

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ $a=3,5\,$mm $\;\;\wedge\;\; b=0,75\,$mm

$A=$[[  2,625  ]]mm$^2$


</div>

</section>



<br>
<br>
<br>
<br>
<br>