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


tags: Bruchrechnung, sehr leicht, sehr niedrig, Angeben

comment: Wie viel sind zum Beispiel $\frac{1}{4}$ von 4000€? Bestimme den Anteilswert.

author: Martin Lommatzsch

-->




# Anteilsweise mit Bruchanteilen

**Gib** den beschriebenen Anteilswert **an**.

<br>

<section class="flex-container">
<div class="flex-child">
<br>
__$a)\;\;$__ Wie viel sind $\dfrac{3}{10}$ von $90\,$€?  \
<br>
 [[  27  ]]€
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ Wie viel sind $\dfrac{7}{4}$ von $840\,$kg?  \
<br>
 [[  147  ]]kg
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ Wie viel sind $\dfrac{2}{3}$ von $6\,$m$^3$?  \
<br>
 [[  4  ]]m$^3$
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ Wie viel sind $\dfrac{11}{6}$ von $240\,$l?  \
<br>
 [[  440  ]]l
<br>
</div>
</section>

<br>
<br>
<br>

