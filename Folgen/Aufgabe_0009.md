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


tags: Folgen, mittel, normal, Angeben

comment: Welche Zahl, welches Symbol kommt als nächstes?

author: Martin Lommatzsch

-->




# Folgen von Zahlen und Symbolen

**Gib** nächsten Glieder der Folge **an**.



<br>



<section class="flex-container">

<div class="flex-child"> 

$0 \quad 3 \quad 8 \quad 15 \quad 24 \quad 35 \quad 48 \quad $ [[ 63 ]] $\quad$ [[ 80 ]] $\quad$ [[ 99 ]] \

[[?]] Musterbeschreibung: Von den Quadratzahlen wird $1$ subtrahiert.

</div>


<div class="flex-child">

__$b)\;\;$__

$1 \quad 2 \quad 4 \quad 7 \quad 11 \quad 16 \quad 22 \quad 29 \quad 37 \quad$ [[ 46 ]] $\quad$ [[ 56 ]] $\quad$ [[ 67 ]] \

[[?]] Musterbeschreibung: Es wird zur vorherigen Zahl eine aufsteigende natürliche Zahl addiert.

</div>


<div class="flex-child">

__$c)\;\;$__

$1 \quad 2 \quad 6 \quad 24 \quad 120 \quad 720 \quad $ [[ 5040 ]] $\quad$ [[ 40320 ]] $\quad$ [[ 362880 ]] \

[[?]] Musterbeschreibung: Die vorherige Zahl wird mit der nächsten natürlichen Zahl multipliziert, was auch Fakultät genannt wird $5!=5\cdot 4 \cdot 3 \cdot 2 \cdot 1$.

</div>

</section>

<br>
<br>
<br>
<br>