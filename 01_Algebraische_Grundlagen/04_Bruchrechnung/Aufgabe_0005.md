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


tags: Bruchrechnung, sehr leicht, sehr niedrig, Angeben

comment: Welcher Nenner und welcher Zähler ist dargestellt?

author: Martin Lommatzsch

-->




# Brüche erkennen

**Gib** den Nenner und Zähler des jeweiligen dargestellten Bruchs **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:250px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/brucha41.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  3  ]] \
Nenner: [[  8  ]] 

</div>
<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:250px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/brucha42.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  2  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:250px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/brucha43.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  4  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:250px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/brucha44.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  5  ]] \
Nenner: [[  8  ]] 

</div>
<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="width:250px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/brucha45.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  7  ]] \
Nenner: [[ 16  ]] 

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="width:250px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/brucha46.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  8  ]] 

</div>


</section>







