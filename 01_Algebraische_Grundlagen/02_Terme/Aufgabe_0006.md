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

**Fülle** die Lücken der Rechnung mit den passenden Werten aus **aus**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ \
$\;\;\;\; - 5 \cdot (-9) - 46 + 11 \cdot (-4) $ \
$= $ [[  45   ]] $ - 46 + 11 \cdot (-4) $ \
$= $ [[  -1   ]] $ + 11 \cdot (-4) $ \
$= $ [[  -1   ]] $ + $ [[ (-44) ]]   \
$=$ [[  -45  ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ \
$\;\;\;\; -92 + 7 \cdot (-4) - 144 : (-4) $ \
$= -92 +$ [[ (-28) ]] $ - 144 : (-4) $ \
$= $ [[ -120 ]] $ - 144 : (-4) $ \
$= $ [[ -120 ]] $ -$ [[ (-36) ]]  \
$=$ [[ -84  ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ \
$\;\;\;\; -3 \cdot (-4) \cdot (-2) \cdot (-5) : (-6) $ \
$=$ [[  24  ]] $ \cdot (-2) \cdot (-5) : (-6) $ \
$=$ [[ -48  ]] $ \cdot (-5) : (-6) $ \
$=$ [[ 240  ]] $ : (-6) $ \
$=$ [[ -40 ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ \
$\;\;\;\; -8 \cdot (-7) - 4 \cdot (-3) + 72:(-8) $ \
$=$ [[  56   ]] $- 4 \cdot (-3) + 72:(-8) $ \
$=$ [[  56   ]] $-$ [[ (-12) ]]$ + 72:(-8) $ \
$=$ [[  56   ]] $+$ [[   12  ]]$ + 72:(-8) $ \
$=$ [[  68   ]] $ + 72:(-8) $ \
$=$ [[  68   ]] $ +$  [[  (-9) ]] \
$=$ [[  59   ]] 
<br>
</div> 
</section>

<br>
<br>
<br>
<br>

