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
$\{ 56,54,55,56,57,55,56,54,53,58,55,56,54,52,56,57 \}$
<br>

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ **Gib** die Spannweite **an**.\
$R=$ [[  6  ]]
*******************
$R = x_{max} - x_{min} = 58 - 52 = 8$
*******************

<br>
</div>
<div class="flex-child">

__$b)\;\;$__ **Gib** den Median **an**.\
$\tilde{x}=$ [[ 55  ]]
*******************
$\{ 52,53,54,54,54,55,55,\textcolor{red}{55},56,56,56,56,57,57,58  \}$
*******************

<br>
</div>
<div class="flex-child">

__$c)\;\;$__ **Gib** das arithmetische Mittel **an**.\
$\bar{x}=$ [[  51,6  ]]

<br>
</div> 

</section>

<br>
<br>
<br>
<br>


