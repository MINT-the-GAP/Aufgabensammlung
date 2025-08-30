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


tags: Koordinatensystem, Stelle, Punkt, Dezimalzahlen, Negative Zahlen, leicht, normal, Angeben

comment: Stellen und Punkte aus dem Koordinatensystem auslesen mit negativen Dezimalzahlen.

author: Martin Lommatzsch

-->




# Punkte ablesen


**Gib** die fehlende Information zu den Punkten als Dezimalzahl **an**.

<center>


<!-- style="width:1000px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap3/Koord15.png)

</center>

<section class="flex-container">

<div class="flex-child">
 $A($[[  4,2  ]]$|$[[  -3,3  ]]$)$ \
<br>
</div>

<div class="flex-child">

 $B($[[  -1,1  ]]$|$[[  -2,5  ]]$)$ \
<br>
</div>

<div class="flex-child">

 [[  D  ]]$( 4,1 | -0,1 )$ \
<br>

</div>

</section>

<br>
<br>
<br>
<br>
<br>