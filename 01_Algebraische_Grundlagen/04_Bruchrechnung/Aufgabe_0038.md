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


tags: Bruchrechnung, Kehrwert, sehr leicht, sehr niedrig, Angeben

comment: Bilde den Kehrwert.

author: Martin Lommatzsch

-->




# Kehrwerte








**Gib** den Kehrwert **an**.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{4}{5} \;\;\Rightarrow\;\; $ [[  5/4  ]] 
@Algebrite.check(5/4)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{9}{7} \;\;\Rightarrow\;\; $ [[  7/9  ]] 
@Algebrite.check(7/9)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{8}{3} \;\;\Rightarrow\;\; $ [[  3/8  ]] 
@Algebrite.check(3/8)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{11}{4} \;\;\Rightarrow\;\; $ [[  4/11  ]] 
@Algebrite.check(4/11)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{7}{13} \;\;\Rightarrow\;\; $ [[  13/7  ]] 
@Algebrite.check(13/7)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{8}{5} \;\;\Rightarrow\;\; $ [[  5/8  ]] 
@Algebrite.check(5/8)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ \dfrac{9}{4} \;\;\Rightarrow\;\; $ [[  4/9  ]] 
@Algebrite.check(4/9)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ \dfrac{23}{12} \;\;\Rightarrow\;\; $ [[  12/23  ]] 
@Algebrite.check(12/23)
</div>

</section>



