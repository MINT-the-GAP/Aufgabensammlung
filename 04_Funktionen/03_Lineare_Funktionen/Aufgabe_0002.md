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


tags: lineare Funktionen, Negative Zahlen, leicht, niedrig, Angeben

comment: Welche Koordinate gehört zu diesem Punkt auf der Funktion?

author: Martin Lommatzsch

-->




# Punkte auf Funktionen



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Gegeben sei die lineare Funktion $f(x) = -2x-1$. Bestimme die jeweilige fehlende Koordinate der Punkte $A$ und $B$. 

<br>

$A(-2|$ [[  3  ]] $)$ und $B($ [[  6  ]] $|-13)$

<br>
<br>
<br>

</div>


<div class="flex-child">

__$b)\;\;$__ Gegeben sei die lineare Funktion $f(x) = 3x+2$. Bestimme die jeweilige fehlende Koordinate der Punkte $A$ und $B$. 

<br>

$A(-1|$ [[  -1  ]] $)$ und $B($ [[  5  ]] $|17)$

<br>
<br>
<br>

</div>

</section>

