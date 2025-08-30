<!--
version:  0.0.1

language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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


tags: Zahlenstrahl, Zahlenverständnis, Dezimalzahlen, sehr leicht, niedrig, Angeben

comment: Welche Zahl müsste dort auf dem Zahlenstrahl stehen?

author: Martin Lommatzsch

-->




# Dezimalzahlen auf dem Zahlenstrahl

**Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi17_1.png)

</center>

<!-- data-solution-button="5"-->
[[   5   ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi17_2.png)

</center>

<!-- data-solution-button="5"-->
[[  2,25   ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi17_3.png)

</center>

<!-- data-solution-button="5"-->
[[  1,975  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi17_4.png)

</center>

<!-- data-solution-button="5"-->
[[  3,25  ]]

</div> 
</section>