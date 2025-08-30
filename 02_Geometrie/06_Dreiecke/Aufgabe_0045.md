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


tags: Koordinatensystem, Punkt, Dreieck, Fläche, sehr leicht, niedrig, Angeben

comment: Im Koodinatensystem ist ein Dreieck dargestellt. Bestimme den Flächeninhalt.

author: Martin Lommatzsch

-->




# Dreiecksfläche im Koordinatensystem


**Gib** den Flächeninhalt des dargestellten Dreiecks **an**.

<br>
<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap3/Dreieck45a.png)

</center>
 $A=$[[  21  ]]$FE$ \
<br>
</div> 




<div class="flex-child">

__$b)\;\;$__

<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap3/Dreieck45b.png)

</center>
 $A=$[[  10  ]]$FE$ \
<br>
</div> 


</section>

<br>
<br>
<br>
<br>
<br>