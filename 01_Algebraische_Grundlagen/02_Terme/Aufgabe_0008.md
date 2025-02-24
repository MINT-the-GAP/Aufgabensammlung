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
$\;\;\;\; -7 \cdot (-47 + 2 \cdot (-4) \cdot (-6) ) $ \
$= -7 \cdot (-47 + 2 \cdot $ [[  24  ]] $) $ \
$= -7 \cdot (-47 +$ [[  48  ]] $) $ \
$= -7 \cdot $ [[   1  ]]  \
$=$ [[  -7  ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ \
$\;\;\;\; -65-(-25)-42+8 \cdot (-6) $ \
$= -65-(-25)-42+ $ [[ (-48) ]] \
$= -65-(-25)-$ [[   90  ]] \
$= -65+$[[   25  ]]$-$ [[   90  ]] \
$= -65-$[[   65  ]] \
$=$ [[  -130 ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ \
$\;\;\;\; -(-45:(-9) - 54:(-6)) \cdot (-2) $ \
$= -($ [[   5   ]] $ - 54:(-6)) \cdot (-2) $ \
$= -($ [[   5   ]] $ + $ [[   9   ]] $) \cdot (-2) $ \
$= -$ [[  14   ]] $ \cdot (-2) $ \
$=$ [[  28   ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ \
$\;\;\;\; -(-6 \cdot (-5) \cdot 4) : (-8) - 13 \cdot 11 $ \
$= -($ [[  30   ]] $\cdot 4) : (-8) - 13 \cdot 11 $ \
$= -($ [[  120  ]] $) : (-8) - 13 \cdot 11 $ \
$= $ [[   15  ]]  $- 13 \cdot 11 $ \
$= $ [[   15  ]]  $-$ [[  143  ]]   \
$=$  [[ -128  ]] 
<br>
</div> 
</section>

<br>
<br>
<br>
<br>

