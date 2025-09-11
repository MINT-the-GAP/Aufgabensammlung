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



tags: Bruchrechnung, Addition, sehr leicht, sehr niedrig, Angeben

comment: Höre dir eine Beschreibung eines Terms an und gib danach den beschriebenen Wert des Terms an.

author: Martin Lommatzsch

-->




# Bruchaddition über Sprache



Höre die Tonspur an und **gib** den Wert des beschriebenen Terms **an**.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Ich habe zwei Siebtel und bekomme drei Siebtel hinzu.

<!-- data-solution-button="5"-->
[[  5/7  ]] 
@Algebrite.check(5/7)


</div>

<div class="flex-child">

__$b)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Was habe ich, wenn ich sieben Neuntel und vier Neuntel habe?

<!-- data-solution-button="5"-->
[[  11/9  ]] 
@Algebrite.check(11/9)


</div>

<div class="flex-child">

__$c)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Zu meinen drei Achtel kommen zwei Achtel hinzu.

<!-- data-solution-button="5"-->
[[  5/8  ]] 
@Algebrite.check(5/8)


</div>

<div class="flex-child">

__$d)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Ich habe ein Drittel und noch ein Drittel.

<!-- data-solution-button="5"-->
[[  2/3  ]] 
@Algebrite.check(2/3)


</div>

</section>
