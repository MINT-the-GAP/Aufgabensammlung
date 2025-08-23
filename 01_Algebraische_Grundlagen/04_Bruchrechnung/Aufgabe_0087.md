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




tags: Bruchrechnung, sehr leicht, sehr niedrig, Angeben

comment: Welcher Bruch ist dargestellt?

author: Martin Lommatzsch

-->




# Brüche erkennen

**Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb33.png)

</center>

<!-- data-solution-button="5"-->
[[  1/4  ]]
@Algebrite.check(1/4)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb34.png)

</center>

<!-- data-solution-button="5"-->
[[  11/30  ]]
@Algebrite.check(11/30)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb35.png)

</center>

<!-- data-solution-button="5"-->
[[  2/5  ]]
@Algebrite.check(2/5)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb36.png)

</center>

<!-- data-solution-button="5"-->
[[  19/40  ]]
@Algebrite.check(19/40)

</div>

</section>

