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


tags: Terme, Negative Zahlen, Vorrangsregeln, leicht, niedrig, Angeben

comment: Verrechne Schrittweise den Term. Lerne wie Termumformungen niedergeschrieben werden. Achte auf die Vorzeichen.

author: Martin Lommatzsch

-->




# Termeumformen mit ganzen Zahlen

**Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ \
$\;\;\;\; 44 - 2 \cdot (13 - 5 \cdot (3 + 2 \cdot (-4)) ) $ \
$= 44 - 2 \cdot (13 - 5 \cdot (3 +$ [[ (-8)  ]] $ ) ) $ \
$= 44 - 2 \cdot (13 - 5 \cdot ($ [[  -5   ]] $ ) ) $ \
$= 44 - 2 \cdot (13 - ($ [[ (-25) ]] $  )) $ \
$= 44 - 2 \cdot $ [[   38  ]] $  $ \
$= 44 - $ [[   76  ]] $  $ \
$=$ [[  -32  ]] 

</div> 
<div class="flex-child">

__$b)\;\;$__ \
$\;\;\;\; -45 + (-3) \cdot (-8) - 92: (-4) $ \
$= -45 +$ [[   24  ]] $- 92: (-4) $ \
$= -45 +$ [[   24  ]] $-$ [[ (-23) ]]   \
$= -45 +$ [[   47  ]] $ \
$=$ [[   2   ]] 

</div> 
<div class="flex-child">

__$c)\;\;$__ \
$\;\;\;\; -4 \cdot (-3) + 5 \cdot (-9) - 74 $ \
$= -4 \cdot (-3) +$ [[ (-45)  ]] $ - 74 $ \
$= -4 \cdot (-3) +$ [[ (-119) ]] \
$=$ [[   12   ]] $+$ [[ (-119) ]] \
$=$ [[ -107   ]] 

</div> 
<div class="flex-child">

__$d)\;\;$__ \
$\;\;\;\; -(-56 : (-2)) : (-7) - (-14) $ \
$= -(-56 : (-2)) : (-7) + $ [[ 14   ]] \
$= -($ [[ 28   ]] $) : (-7) + $ [[ 14   ]] \
$= $ [[  4   ]] $  + $ [[ 14   ]] \
$=$ [[ 18   ]] 

</div> 
</section>






