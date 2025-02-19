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

Zwei benachbarte Winkel sind gleich groß.

[[X]] Quadrat
[[X]] Rechteck
[[ ]] Raute
[[ ]] Parallelogramm
[[X]] symmetrisches Trapez
[[ ]] Trapez
[[ ]] symmetrischer Drachen

<br>
</div> 




<div class="flex-child">

__$b)\;\;$__

Eine Diagonale halbiert die andere.

[[X]] Quadrat
[[X]] Rechteck
[[X]] Raute
[[X]] Parallelogramm
[[ ]] symmetrisches Trapez
[[ ]] Trapez
[[X]] symmetrischer Drachen

<br>
</div> 




<div class="flex-child">

__$c)\;\;$__

Es gibt mindestens ein Paar von benachbarten Seiten, die gleichlang aber nicht orthogonal zu einander sind.

[[ ]] Quadrat
[[ ]] Rechteck
[[X]] Raute
[[X]] Parallelogramm
[[ ]] symmetrisches Trapez
[[ ]] Trapez
[[X]] symmetrischer Drachen

<br>
</div> 



<div class="flex-child">

__$d)\;\;$__

Die Innenwinkelsumme beträgt $360\circ$.

[[X]] Quadrat
[[X]] Rechteck
[[X]] Raute
[[X]] Parallelogramm
[[X]] symmetrisches Trapez
[[X]] Trapez
[[X]] symmetrischer Drachen

<br>
</div> 


</section>

<br>
<br>
<br>
<br>
<br>