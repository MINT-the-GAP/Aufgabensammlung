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


tags: Bruchrechnung, Zahlenverständnis, leicht, sehr niedrig, Angeben

comment: Welcher Bruch ist größer?

author: Martin Lommatzsch

-->




# Größe von Brüchen

**Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.\


<section class="flex-container">
<div class="flex-child">
<br>
__$a)\;\;$__ $\dfrac{8}{9}$ [[($>$)|$=$|$<$]] $\dfrac{2}{3}$ 
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $\dfrac{9}{24}$ [[$>$|($=$)|$<$]] $\dfrac{3}{8}$ 
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $\dfrac{12}{11}$ [[($>$)|$=$|$<$]] $\dfrac{11}{12}$ 
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $\dfrac{5}{6}$ [[($>$)|$=$|$<$]] $\dfrac{7}{10}$ 
<br>
</div>
<div class="flex-child">
<br>
__$e)\;\;$__ $\dfrac{13}{25}$ [[($>$)|$=$|$<$]] $\dfrac{27}{61}$ 
<br>
</div>
<div class="flex-child">
<br>
__$f)\;\;$__ $\dfrac{17}{6}$ [[$>$|$=$|($<$)]] $\dfrac{22}{7}$ 

<br>
</div>
</section>

<br>
<br>
<br>

