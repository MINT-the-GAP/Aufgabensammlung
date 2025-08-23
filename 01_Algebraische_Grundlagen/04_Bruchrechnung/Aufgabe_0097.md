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

__$a)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $20\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchc1.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  6  ]] m$^2$
blau: [[  4  ]] m$^2$
violett: [[  4  ]] m$^2$

</div>
<div class="flex-child">

__$b)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $80\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchc2.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  48  ]] m$^2$
blau: [[  4   ]] m$^2$
violett: [[  12  ]] m$^2$

</div>
<div class="flex-child">

__$c)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $120\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchc3.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  18  ]] m$^2$
blau: [[  45  ]] m$^2$
violett: [[  27  ]] m$^2$

</div>
<div class="flex-child">

__$d)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $240\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchc4.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  105 ]] m$^2$
blau: [[  27  ]] m$^2$
violett: [[  45  ]] m$^2$

</div>
<div class="flex-child">

__$e)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $200\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchc5.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  35  ]] m$^2$
blau: [[  45  ]] m$^2$
violett: [[  15  ]] m$^2$

</div>
<div class="flex-child">

__$f)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $60\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchc6.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  9  ]] m$^2$
blau: [[  12 ]] m$^2$
violett: [[  6  ]] m$^2$

</div>

</section>

