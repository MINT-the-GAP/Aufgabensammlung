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


tags: Terme, Dezimalzahlen, Vorrangsregeln, leicht, niedrig, Angeben

comment: Verrechne Schrittweise den Term. Lerne wie Termumformungen mit Dezimalzahlen niedergeschrieben werden.

author: Martin Lommatzsch

-->




# Termeumformen mit Dezimalzahlen

**Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ \
$\;\;\;\; 3,5 \cdot 2,5 - 0,8 \cdot 1,2 - 0,875 \cdot 1,6 $ \
$=$ [[ 8,75 ]] $ - 0,8 \cdot 1,2 - 0,875 \cdot 1,6 $ \
$=$ [[ 8,75 ]] $ - $ [[ 0,96 ]] $ - 0,875 \cdot 1,6 $ \
$=$ [[ 7,79  ]] $ - 0,875 \cdot 1,6 $ \
$=$ [[ 7,79  ]] $ -$ [[ 1,4  ]] \
$=$ [[ 6,39  ]] 

</div> 
<div class="flex-child">

__$b)\;\;$__ \
$\;\;\;\; 0,25 \cdot 0,8 \cdot 5,2 + 0,6 \cdot 5,5 - 2,75 $ \
$= $ [[ 0,2  ]] $ \cdot 5,2 + 0,6 \cdot 5,5 - 2,75 $ \
$= $ [[ 1,3  ]] $ + 0,6 \cdot 5,5 - 2,75 $ \
$= $ [[ 1,3  ]] $ + $ [[ 3,3  ]] $ - 2,75 $ \
$= $ [[ 4,6  ]] $ - 2,75 $ \
$=$ [[ 1,85 ]] 

</div> 
<div class="flex-child">

__$c)\;\;$__ \
$\;\;\;\; 9,87-2,3-0,45-0,37-1,87 $ \
$= $ [[ 7,57  ]] $ -0,45-0,37-1,87 $ \
$= $ [[ 7,12  ]] $ -0,37-1,87 $ \
$= $ [[ 6,75  ]] $ -1,87 $ \
$=$ [[ 4,88  ]] 

</div> 
<div class="flex-child">

__$d)\;\;$__ \
$\;\;\;\; 0,75 \cdot (1,6 - 0,4 \cdot 0,8) + 0,9 \cdot 1,5 $ \
$= 0,75 \cdot (1,6 - $ [[ 0,32  ]] $) + 0,9 \cdot 1,5 $ \
$= 0,75 \cdot $ [[ 1,28  ]] $ + 0,9 \cdot 1,5 $ \
$= $ [[ 0,96  ]] $ + 0,9 \cdot 1,5 $ \
$= $ [[ 0,96  ]] $ + $ [[ 1,35  ]] \
$=$ [[ 2,31  ]] 

</div> 
</section>






