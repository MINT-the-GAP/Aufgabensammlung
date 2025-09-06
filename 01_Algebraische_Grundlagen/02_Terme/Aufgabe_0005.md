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
$\;\;\;\; -2 \cdot 7 + 8 \cdot (-3) - 34 $ \
$=$ [[ -14   ]] $ + $ [[ (-24) ]] $ - 34 $ \
$=$ [[ -38   ]] $ - 34 $ \
$=$ [[ -72   ]] 

</div> 
<div class="flex-child">

__$b)\;\;$__ \
$\;\;\;\; -34-75:5-12 \cdot (-9) $ \
$= -34-75:5-$ [[ (-108) ]]  \
$= -34-$[[ 15    ]]$+$ [[ 108    ]]  \
$= -34+$[[ 93    ]]  \
$=$ [[ 59    ]] 

</div> 
<div class="flex-child">

__$c)\;\;$__ \
$\;\;\;\; 85:(-5) + (-4) \cdot (-3) \cdot (-5) - 44 $ \
$=$ [[ -17   ]] $ + (-4) \cdot (-3) \cdot (-5) - 44 $ \
$=$ [[ -17   ]] $ + $ [[ 12    ]] $ \cdot (-5) - 44 $ \
$=$ [[ -17   ]] $ + $ [[ (-60) ]] $ - 44 $ \
$=$ [[ -77   ]] $ - 44 $ \
$=$ [[ -121  ]] 

</div> 
<div class="flex-child">

__$d)\;\;$__ \
$\;\;\;\; - ( 3 - (-5) \cdot 7 + 23 ) + 54 $ \
$= - ( 3 - $  [[ (-35) ]]  $ + 23 ) + 54 $ \
$= - ( $ [[   -9  ]]  $  ) + 54 $ \
$=$   [[   9  ]]  $  + 54 $ \
$=$ [[  63  ]] 

</div> 
</section>






