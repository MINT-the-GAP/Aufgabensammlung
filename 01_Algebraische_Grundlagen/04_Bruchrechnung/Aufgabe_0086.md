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

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb29.png)

</center>

<!-- data-solution-button="5"-->
[[  1/2  ]]
@Algebrite.check(1/2)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb30.png)

</center>

<!-- data-solution-button="5"-->
[[  1/3  ]]
@Algebrite.check(1/3)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb31.png)

</center>

<!-- data-solution-button="5"-->
[[  3/4  ]]
@Algebrite.check(3/4)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb32.png)

</center>

<!-- data-solution-button="5"-->
[[  10/24  ]]
@Algebrite.check(10/24)

</div>

</section>


