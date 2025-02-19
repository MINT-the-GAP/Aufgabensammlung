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


tags: Vierecke, sehr leicht, sehr niedrig, Angeben

comment: Zu welchen Viereck passen diese Eigenschaften? Kreuze an.

author: Martin Lommatzsch

-->




# Fehlende Punkte von Vierecken


**Wähle** die Vierecksarten **aus**, die die beschriebenen Eigenschaften erfüllen.

<br>
<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__


Mindestens ein Paar von gegenüberliegenden Seiten ist gleich lang aber nicht parallel zu einander.

[[ ]] Quadrat
[[ ]] Rechteck
[[ ]] Raute
[[ ]] Parallelogramm
[[X]] symmetrisches Trapez
[[ ]] Trapez
[[ ]] symmetrischer Drachen

<br>
</div> 




<div class="flex-child">

__$b)\;\;$__

Die Diagonalen sind nicht orthogonal zu einander.

[[ ]] Quadrat
[[ ]] Rechteck
[[ ]] Raute
[[X]] Parallelogramm
[[X]] symmetrisches Trapez
[[X]] Trapez
[[ ]] symmetrischer Drachen

<br>
</div> 




<div class="flex-child">

__$c)\;\;$__

Es existieren zwei Winkel die gleich groß sind, aber nicht alle Winkel haben das gleiche Winkelmaß.

[[ ]] Quadrat
[[ ]] Rechteck
[[X]] Raute
[[X]] Parallelogramm
[[X]] symmetrisches Trapez
[[ ]] Trapez
[[X]] symmetrischer Drachen

<br>
</div> 


<div class="flex-child">

__$d)\;\;$__

Das Viereck kann genau einen rechten Winkel haben.

[[ ]] Quadrat
[[ ]] Rechteck
[[ ]] Raute
[[ ]] Parallelogramm
[[ ]] symmetrisches Trapez
[[ ]] Trapez
[[X]] symmetrischer Drachen

<br>
</div> 


</section>

<br>
<br>
<br>
<br>
<br>