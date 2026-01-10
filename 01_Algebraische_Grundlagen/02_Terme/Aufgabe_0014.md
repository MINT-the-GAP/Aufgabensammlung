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
$\;\;\;\; -(-7,2:(-4)):20 - 0,4 \cdot 0,125 $ \
$= -($ [[  1,8  ]] $):20 - 0,4 \cdot 0,125 $ \
$= $ [[ -1,8  ]] $:20 - 0,4 \cdot 0,125 $ \
$= $ [[ -0,09 ]] $ - 0,4 \cdot 0,125 $ \
$= $ [[ -0,09 ]] $ - $ [[  0,05  ]]  \
$=$ [[ -0,14 ]] 

</div> 
<div class="flex-child">

__$b)\;\;$__ \
$\;\;\;\; 0,65:5 - 0,4 \cdot 1,7 - 0,7 : 0,2 $ \
$=$ [[  0,13  ]] $ - 0,4 \cdot 1,7 - 0,7 : 0,2 $ \
$=$ [[  0,13  ]] $ - $ [[  0,68  ]] $ - 0,7 : 0,2 $ \
$=$ [[ -0,55  ]] $ - 0,7 : 0,2 $ \
$=$ [[ -0,55  ]] $ - $ [[  3,5  ]]  \
$=$ [[ -4,05  ]] 

</div> 
<div class="flex-child">

__$c)\;\;$__ \
$\;\;\;\; 1,7 \cdot (-0,75) + (-0,85 : 1,7) \cdot (-3,5)   $ \
$=$ [[ -1,275 ]] $ + (-0,85 : 1,7) \cdot (-3,5)   $ \
$=$ [[ -1,275 ]] $ + $ ([[  -0,5  ]]) $ \cdot (-3,5)   \
$=$ [[ -1,275 ]] $ + $ [[  1,75  ]] $  \
$=$ [[  0,475 ]] 

</div> 
<div class="flex-child">

__$d)\;\;$__ \
$\;\;\;\; (1,9:(-0,25) - 4,2 \cdot 0,25) \cdot (-1,5) $ \
$= ($ [[  -7,6   ]] $ - 4,2 \cdot 0,25) \cdot (-1,5) $ \
$= ($ [[  -7,6   ]] $ - $ [[  1,05   ]] $) \cdot (-1,5) $ \
$= $ [[ -8,65   ]] $ \cdot (-1,5) $ \
$=$ [[  12,975 ]] 

</div> 
</section>






