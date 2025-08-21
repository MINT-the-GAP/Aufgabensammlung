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



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ Wie viel sind $\dfrac{4}{5}$ von $2500\,$kg?  \

 [[  2000  ]]kg

</div>
<div class="flex-child">

__$b)\;\;$__ Wie viel sind $\dfrac{5}{9}$ von $180\,$cm?  \

 [[  100  ]]cm

</div>
<div class="flex-child">

__$c)\;\;$__ Wie viel sind $\dfrac{1}{4}$ von $300\,$min?  \

 [[  75  ]]min

</div>
<div class="flex-child">

__$d)\;\;$__ Wie viel sind $\dfrac{6}{7}$ von $42\,$m?  \

 [[  36  ]]m

</div>
</section>





