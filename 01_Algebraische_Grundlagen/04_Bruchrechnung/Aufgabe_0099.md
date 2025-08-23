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


tags: Bruchrechnung, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Eine Fläche wurde in Bruchanteile unterteilt. Beantworte die Fragen dazu.

author: Martin Lommatzsch

-->




# Bruchunterteilung einer Fläche


**Gib** die Antwort auf die Fragen zu jeder Darstellung **an**.


<center>

<!-- style="width:500px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruch99.png)

</center>


__$a)\;\;$__ Das jeweilige Rechteck wird durch die gestrichelten Linien in wie viele Teile geteilt?  \\

<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  5  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  4  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  3  ]]
</div>
</section>

__$b)\;\;$__ Das jeweilige Rechteck wird durch die gepunkteten Linien in wie viele Teile geteilt?  \\

<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  3  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  4  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  6  ]]
</div>
</section>

__$c)\;\;$__ Das jeweilige Rechteck wird durch die gestrichelten und die gepunkteten Linien in wie viele Teile geteilt?  \\

<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  15  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  16  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  18  ]]
</div>
</section>

