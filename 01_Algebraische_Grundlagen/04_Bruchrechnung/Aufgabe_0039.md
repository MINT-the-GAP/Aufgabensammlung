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


tags: Bruchrechnung, Kehrwert, sehr leicht, sehr niedrig, Angeben

comment: Bilde den Kehrwert.

author: Martin Lommatzsch

-->




# Kehrwerte






**Gib** den Kehrwert **an**.




<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{8}{17} \;\;\Rightarrow\;\; $ [[  17/8  ]] 
@Algebrite.check(17/8)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{5}{11} \;\;\Rightarrow\;\; $ [[  11/5  ]] 
@Algebrite.check(11/5)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{6}{7} \;\;\Rightarrow\;\; $ [[  7/6  ]] 
@Algebrite.check(7/6)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{12}{13} \;\;\Rightarrow\;\; $ [[  13/12  ]] 
@Algebrite.check(13/12)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{21}{83} \;\;\Rightarrow\;\; $ [[  83/21  ]] 
@Algebrite.check(83/21)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{25}{19} \;\;\Rightarrow\;\; $ [[  19/25  ]] 
@Algebrite.check(19/25)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ \dfrac{8}{13} \;\;\Rightarrow\;\; $ [[  13/8  ]] 
@Algebrite.check(13/8)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ \dfrac{51}{23} \;\;\Rightarrow\;\; $ [[  23/51  ]] 
@Algebrite.check(23/51)
</div>

</section>




