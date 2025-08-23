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

comment: Es sind zwei Brüche dargestellt nur fehlt eine Zahl, sodass die beiden Brüche gleichwertig sind. Gib die Zahl an.

author: Martin Lommatzsch

-->




# Gleichwertige Brüche


**Gib** die Zahl **an**, die $x$ sein muss, sodass die Brüche gleichwertig sind.


<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$ \dfrac{ 2 }{ 3 } = \dfrac{ x }{ 12 } $ \
$x = $ [[  8  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$ \dfrac{ 7 }{ x } = \dfrac{ 14 }{ 30 } $ \
$x = $ [[  15  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$ \dfrac{ x }{ 9 } = \dfrac{ 5 }{ 15 } $ \
$x = $ [[  3  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$ \dfrac{ 6 }{ 8 } = \dfrac{ x }{ 20 } $ \
$x = $ [[  15  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__  
$ \dfrac{ x }{ 14 } = \dfrac{ 9 }{ 21 } $ \
$x = $ [[  6  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__  
$ \dfrac{ 10 }{ x } = \dfrac{ 15 }{ 12 } $ \
$x = $ [[  8  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__  
$ \dfrac{ x }{ 5 } = \dfrac{ 12 }{ 15 } $ \
$x = $ [[  4  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$h)\;\;$__  
$ \dfrac{ 8 }{ 20 } = \dfrac{ x }{ 25 } $ \
$x = $ [[  10  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$i)\;\;$__  
$ \dfrac{ x }{ 16 } = \dfrac{ 9 }{ 24 } $ \
$x = $ [[  6  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$j)\;\;$__  
$ \dfrac{ 4 }{ x } = \dfrac{ 6 }{ 18 } $ \
$x = $ [[  12  ]]
</div>

</section>


