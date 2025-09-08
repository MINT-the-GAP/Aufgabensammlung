<!--
version:  0.0.1

language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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


tags: Spannweite, arithmetisches Mittel, Median, sehr leicht, niedrig, Angeben

comment: Bestimme die Eigenschaften von gegebenen Ergebnismengen.

author: Martin Lommatzsch

-->




# Eigenschaften von Ergebnismengen

Gegeben sei die folgende Ergebnismenge: \
$\{ 7,8,8,6,11,14,12,12,13,8,10,7,7,11,9 \}$


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ **Gib** die Spannweite **an**.\
$R=$ [[  8  ]]
*******************
$R = x_{max} - x_{min} = 14 - 6 = 8$
*******************


</div>
<div class="flex-child">

__$b)\;\;$__ **Gib** den Median **an**.\
$\tilde{x}=$ [[  9  ]]
*******************
$\{ 6,7,7,7,8,8,8,\textcolor{red}{9},10,11,11,12,12,13,14 \}$
*******************


</div>
<div class="flex-child">

__$c)\;\;$__ **Gib** das arithmetische Mittel gerundet auf drei Nachkommastellen **an**.\
$\bar{x}=$ [[  9,533  ]]


</div> 

</section>







