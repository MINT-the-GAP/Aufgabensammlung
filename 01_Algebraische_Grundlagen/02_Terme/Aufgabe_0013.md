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


tags: Terme, Dezimalzahlen, Negative Zahlen, Vorrangsregeln, mittel, normal, Angeben

comment: Verrechne Schrittweise den Term. Lerne wie Termumformungen mit Dezimalzahlen niedergeschrieben werden. Achte auf die Vorzeichen.

author: Martin Lommatzsch

-->




# Termeumformen mit negativen Dezimalzahlen

**Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ \
$\;\;\;\; - 1,6 \cdot 4,25 - 0,85:0,5 + 1,25 \cdot 0,6 $ \
$= - 1,6 \cdot 4,25 - 0,85:0,5 + $ [[ 0,75   ]]  \
$= - 1,6 \cdot 4,25 - $ [[ 1,7   ]] $ + $ [[ 0,75   ]]  \
$= - 1,6 \cdot 4,25 - $ [[ 0,95  ]]  \
$=$ [[ -6,8  ]] $- $ [[ 0,95 ]]  \
$=$ [[ -7,75 ]] 

</div> 
<div class="flex-child">

__$b)\;\;$__ \
$\;\;\;\; -0,75 \cdot 5,8 - 0,7 \cdot 2,5 + 1,2 \cdot 0,9 $ \
$=$ [[ -4,35 ]] $ - 0,7 \cdot 2,5 + 1,2 \cdot 0,9 $ \
$=$ [[ -4,35 ]] $ - $ [[  1,75 ]] $ + 1,2 \cdot 0,9 $ \
$=$ [[ -6,1  ]]  $ + 1,2 \cdot 0,9 $ \
$=$ [[ -6,1  ]]  $ + $ [[  1,08 ]] \
$=$ [[ -5,02 ]] 

</div> 
<div class="flex-child">

__$c)\;\;$__ \
$\;\;\;\; 1,6 \cdot (-0,25) \cdot 2,5 - 6,3 : 70 $ \
$= 1,6 \cdot $ [[ (-0,625) ]] $ - 6,3 : 70 $ \
$= $ [[  -1   ]] $ - 6,3 : 70 $ \
$= $ [[  -1   ]] $ - $ [[   0,09   ]] \
$=$ [[  -1,09   ]] 

</div> 
<div class="flex-child">

__$d)\;\;$__ \
$\;\;\;\; -(-0,7 \cdot 0,2):0,25 + 0,8 \cdot (-4,5)  $ \
$= -($[[ -0,14   ]]$):0,25 + 0,8 \cdot (-4,5)  $ \
$=$ [[  0,14   ]]$:0,25 + 0,8 \cdot (-4,5)  $ \
$=$ [[  0,56   ]] $+ 0,8 \cdot (-4,5)  $ \
$=$ [[  0,56   ]] $+ $ [[ (-3,6) ]] \
$=$ [[ -3,04     ]] 

</div> 
</section>






