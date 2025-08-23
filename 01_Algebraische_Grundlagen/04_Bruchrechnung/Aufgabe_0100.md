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

comment: Eine Fläche wurde in Bruchanteile von Bruchanteile eingefärbt unterteilt. Beantworte die Fragen dazu.

author: Martin Lommatzsch

-->




# Eingefärbte Anteile von Anteilen


**Gib** die Antwort auf die Fragen zu jeder Darstellung **an**.



<center>

<!-- style="width:500px" -->
![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruch100.png)

</center>



__$a)\;\;$__ Welcher Bruchanteil des jeweiligen Rechteck ist farbig markiert?  \\

<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  1/3  ]]
@Algebrite.check(1/3)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  3/4  ]]
@Algebrite.check(3/4)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  3/5  ]]
@Algebrite.check(3/5)
</div>
</section>

__$b)\;\;$__ Welcher Bruchanteil der farbigen Markierung ist bläulich markiert?  \\

<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  2/3  ]]
@Algebrite.check(2/3)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  1/6  ]]
@Algebrite.check(1/6)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  3/4  ]]
@Algebrite.check(3/4)
</div>
</section>

__$c)\;\;$__ Welcher Bruchanteil der jeweiligen Rechteck ist bläulich markiert?  \\

<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  2/9  ]]
@Algebrite.check(2/9)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  3/24 ]]
@Algebrite.check(3/24)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  9/20  ]]
@Algebrite.check(9/20)
</div>
</section>
