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


tags: Bruchrechnung, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Welcher Bruch ist größer?

author: Martin Lommatzsch

-->




# Größe von Brüchen

**Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\dfrac{2}{5}$ [[$>$|($=$)|$<$]] $\dfrac{4}{10}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{3}{8}$ [[($>$)|$=$|$<$]] $\dfrac{1}{2}$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{5}{15}$ [[$>$|($=$)|$<$]] $\dfrac{2}{6}$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{5}{3}$ [[($>$)|$=$|$<$]] $\dfrac{7}{4}$ 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{17}{100}$ [[$>$|$=$|($<$)]] $\dfrac{2}{10}$ 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{7}{6}$ [[$>$|$=$|($<$)]] $\dfrac{4}{3}$ 


</div>
</section>





