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




tags: Bruchrechnung, Multiplikation, sehr leicht, sehr niedrig, Angeben

comment: Bestimme mittels einer Permanenzreihe die Regeln der Multiplikation von Brüchen.

author: Martin Lommatzsch

-->




# Permanenzreihen - Multiplikation mit Brüchen


**Gib** den Wert der Terme **an**. Achte dabei auf die Muster dieser Permanenzreihe.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$a)\;\;$__ \
$4 \cdot 4 =$ [[  16 ]] \
 \
$4 \cdot 2 =$ [[  8  ]] \
 \
$4 \cdot 1 =$ [[  4  ]] \
 \
$4 \cdot \dfrac{1}{2} =$ [[  2  ]] \
 \
$4 \cdot \dfrac{1}{4} =$ [[  1  ]] \
 \
$4 \cdot \dfrac{1}{8} =$ [[ 1/2 ]] \
 \
$4 \cdot \dfrac{1}{16} =$ [[ 1/4 ]] \
@Algebrite.check([ 16;8;4;2;1;1/2;1/4 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$b)\;\;$__ \
$24 \cdot 8 =$ [[  192 ]] \
 \
$24 \cdot 4 =$ [[  96  ]] \
 \
$24 \cdot 2 =$ [[  48  ]] \
 \
$24 \cdot 1 =$ [[  24  ]] \
 \
$24 \cdot \dfrac{1}{2} =$ [[  12  ]] \
 \
$24 \cdot \dfrac{1}{4} =$ [[   6  ]] \
 \
$24 \cdot \dfrac{1}{8} =$ [[  3   ]] \
@Algebrite.check([ 192;96;48;24;12;6;3 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$c)\;\;$__ \
$27 \cdot \dfrac{1}{81} =$ [[  1/3 ]] \
 \
$27 \cdot \dfrac{1}{27} =$ [[  1   ]] \
 \
$27 \cdot \dfrac{1}{9} =$ [[  3   ]] \
 \
$27 \cdot \dfrac{1}{3} =$ [[  9   ]] \
 \
$27 \cdot 1 =$ [[  27  ]] \
 \
$27 \cdot 3 =$ [[  81  ]] \
 \
$27 \cdot 9 =$ [[ 243  ]] \
@Algebrite.check([ 1/3;1;3;9;27;81;243 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$d)\;\;$__ \
$10 \cdot 100 =$ [[  1000  ]] \
 \
$10 \cdot 10 =$  [[  100   ]] \
 \
$10 \cdot 1 =$                [[  10    ]] \
 \
$10 \cdot \dfrac{1}{10} =$    [[  1     ]] \
 \
$10 \cdot \dfrac{1}{100} =$   [[  1/10  ]] \
 \
$10 \cdot \dfrac{1}{1000} =$  [[ 1/100  ]] \
 \
$10 \cdot \dfrac{1}{10000} =$ [[ 1/1000 ]] \
@Algebrite.check([ 1000;100;10;1;1/10;1/100;1/1000 ])
</div>

</section>





