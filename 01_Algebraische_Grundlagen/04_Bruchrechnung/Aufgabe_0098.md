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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md



tags: Bruchrechnung, leicht, niedrig, Bestimmen

comment: Bestimme den markierten Anteil einer Fläche.

author: Martin Lommatzsch

-->




# Anteile bestimmen




**Bestimme** den farbigen Anteil an der Gesamtfläche. 



<section class="flex-container">


<div class="flex-child">

__$a)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $90\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc7.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  5  ]] m$^2$
blau: [[  50 ]] m$^2$
violett: [[ 25  ]] m$^2$

</div>
<div class="flex-child">

__$b)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $96\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc8.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  4   ]] m$^2$
blau: [[  20  ]] m$^2$
violett: [[  10  ]] m$^2$

</div>
<div class="flex-child">

__$c)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $81\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc9.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  21  ]] m$^2$
blau: [[  12  ]] m$^2$
violett: [[  42  ]] m$^2$

</div>
<div class="flex-child">

__$d)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $560\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc10.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  98  ]] m$^2$
blau: [[  126 ]] m$^2$
violett: [[  42  ]] m$^2$

</div>
<div class="flex-child">

__$e)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $126\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc11.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  40  ]] m$^2$
blau: [[  24  ]] m$^2$
violett: [[  32  ]] m$^2$

</div>
<div class="flex-child">

__$f)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $192\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc12.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  60  ]] m$^2$
blau: [[  36  ]] m$^2$
violett: [[  60  ]] m$^2$

</div>

</section>



