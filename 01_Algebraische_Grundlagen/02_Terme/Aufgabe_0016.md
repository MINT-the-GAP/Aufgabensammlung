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
$\;\;\;\; (-0,63:0,9-0,25) : (-0,05) + 2,5 \cdot (-6,5)   $ \
$= ($ [[  -0,7   ]]$-0,25) : (-0,05) + 2,5 \cdot (-6,5)   $ \
$= $ [[  -0,95  ]]$ : (-0,05) + 2,5 \cdot (-6,5)   $ \
$= $ [[  19     ]]$  + 2,5 \cdot (-6,5)   $ \
$= $ [[  19     ]]$  + $[[ (-16,25) ]] \
$=$ [[ 2,75    ]] 

</div> 
<div class="flex-child">

__$b)\;\;$__ \
$\;\;\;\; -0,7 : 0,125 + 3,2 \cdot (-0,125) - 2,8 $ \
$=$ [[   -5,6  ]] $ + 3,2 \cdot (-0,125) - 2,8 $ \
$=$ [[   -5,6  ]] $ + $ [[ (-0,4)  ]] $ - 2,8 $ \
$=$ [[   -6    ]] $ - 2,8 $ \
$=$ [[  -8,8   ]] 

</div> 
<div class="flex-child">

__$c)\;\;$__ \
$\;\;\;\; -(-2,1 \cdot 0,4 +1,25) : 0,5 - 1,1 $ \
$= -( $ [[  -0,84  ]] $ +1,25) : 0,5 - 1,1 $ \
$= -( $ [[  0,41  ]] $) : 0,5 - 1,1 $ \
$= $ [[ -0,82  ]] $ - 1,1 $ \
$=$ [[ -1,92  ]] 

</div> 
<div class="flex-child">

__$d)\;\;$__ \
$\;\;\;\; -0,225: (-1,5) + 0,8 \cdot (-4) \cdot 0,375 $ \
$=  $ [[  0,15  ]] $ + 0,8 \cdot (-4) \cdot 0,375 $ \
$=  $ [[  0,15  ]] $ + $ [[ (-3,2) ]] $ \cdot 0,375 $ \
$=  $ [[  0,15  ]] $ + $ [[ (-1,2) ]]  \
$=$   [[ -1,05  ]] 

</div> 
</section>






