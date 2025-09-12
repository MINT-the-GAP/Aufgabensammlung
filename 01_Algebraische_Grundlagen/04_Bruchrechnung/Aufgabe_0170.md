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




tags: Bruchrechnung, Division, sehr leicht, sehr niedrig, Angeben

comment: Bestimme mittels einer Permanenzreihe die Regeln der Division von Brüchen.

author: Martin Lommatzsch

-->




# Permanenzreihen - Division mit Brüchen


**Gib** den Wert der Terme **an**. Achte dabei auf die Muster dieser Permanenzreihe.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$a)\;\;$__ \
$4 : 4 =$ [[  1 ]] \
 \
$4 : 2 =$ [[  2  ]] \
 \
$4 : 1 =$ [[  4  ]] \
 \
$4 : \dfrac{1}{2} =$ [[  8  ]] \
 \
$4 : \dfrac{1}{4} =$ [[  16 ]] \
 \
$4 : \dfrac{1}{8} =$ [[  32 ]] \
 \
$4 : \dfrac{1}{16} =$ [[ 64  ]] \
@Algebrite.check([ 1;2;4;8;16;32;64 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$b)\;\;$__ \
$24 : 8 =$ [[  3  ]] \
 \
$24 : 4 =$ [[  6  ]] \
 \
$24 : 2 =$ [[  12  ]] \
 \
$24 : 1 =$ [[  24  ]] \
 \
$24 : \dfrac{1}{2} =$ [[  48  ]] \
 \
$24 : \dfrac{1}{4} =$ [[  96  ]] \
 \
$24 : \dfrac{1}{8} =$ [[  192 ]] \
@Algebrite.check([ 3;6;12;24;48;96;192 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$c)\;\;$__ \
$27 : \dfrac{1}{9} =$ [[  243   ]] \
 \
$27 : \dfrac{1}{3} =$ [[  81   ]] \
 \
$27 : 1 =$ [[  27  ]] \
 \
$27 : 3 =$ [[  9   ]] \
 \
$27 : 9 =$ [[ 3    ]] \
 \
$27 : 27 =$ [[  1   ]] \
 \
$27 : 81 =$ [[ 1/3  ]] \
@Algebrite.check([ 243;81;27;9;3;1;1/3 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$d)\;\;$__ \
$10 : 100 =$              [[  1/10  ]] \
 \
$10 : 10 =$               [[  1     ]] \
 \
$10 : 1 =$                [[  10    ]] \
 \
$10 : \dfrac{1}{10} =$    [[  100   ]] \
 \
$10 : \dfrac{1}{100} =$   [[  1000  ]] \
 \
$10 : \dfrac{1}{1000} =$  [[ 10000  ]] \
 \
$10 : \dfrac{1}{10000} =$ [[ 100000 ]] \
@Algebrite.check([ 1/10;1;10;100;1000;10000;100000 ])
</div>

</section>









