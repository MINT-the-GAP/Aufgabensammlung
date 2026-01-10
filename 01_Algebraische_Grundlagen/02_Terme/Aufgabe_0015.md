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
$\;\;\;\;   -0,8 \cdot (-0,3) - 1,4 \cdot (-0,75) + 2,25$  \
$=$ [[ 0,24 ]] $ - 1,4 \cdot (-0,75) + 2,25 $ \
$=$ [[   0,24  ]] $ - $ [[ (-1,05) ]] $ + 2,25 $ \
$=$ [[   1,29  ]] $ + 2,25 $ \
$=$ [[   3,54  ]] 

</div> 
<div class="flex-child">

__$b)\;\;$__ \
$\;\;\;\; -0,15 : 0,2 + 0,7 \cdot (-2,1) - 2,3 $ \
$=$ [[  -0,75  ]] $ + 0,7 \cdot (-2,1) - 2,3 $ \
$=$ [[  -0,75  ]] $ + $ [[ (-1,47) ]] $ - 2,3 $ \
$=$ [[  -2,22 ]] $ - 2,3 $ \
$=$ [[ -4,52  ]] 

</div> 
<div class="flex-child">

__$c)\;\;$__ \
$\;\;\;\; (1,44 : 0,8 -2,5) \cdot 0,7 - 0,85 $ \
$= ($ [[   1,6  ]]  $ -2,5) \cdot 0,7 - 0,85 $ \
$= $  [[  -0,9  ]]  $  \cdot 0,7 - 0,85 $ \
$= $  [[  -0,63 ]]  $ - 0,85 $ \
$=$   [[  -1,48 ]] 

</div> 
<div class="flex-child">

__$d)\;\;$__ \
$\;\;\;\; (0,12 : (-0,125) - 5,2 \cdot 0,25) : (-0,1) $ \
$=($ [[  -0,96  ]] $ - 5,2 \cdot 0,25) : (-0,1) $ \
$=($ [[  -0,96  ]] $ - $ [[  1,3   ]] $) : (-0,1) $ \
$= $ [[  -2,26  ]] $ : (-0,1) $ \
$=$ [[  -22,6  ]] 

</div> 
</section>






