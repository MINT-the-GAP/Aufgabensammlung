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
$\;\;\;\; 1,7 + 0,5 \cdot 0,3 + 1,3 \cdot 0,25 $ \
$= 1,7 +$ [[  0,15   ]] $+ 1,3 \cdot 0,25 $ \
$= 1,7 +$ [[  0,15   ]] $+$ [[  0,325  ]]  \
$= 1,7 +$ [[  0,435  ]]   \
$=$ [[  2,135  ]] 

</div> 
<div class="flex-child">

__$b)\;\;$__ \
$\;\;\;\; 0,81:0,9 + 5,4:6 + 0,125 \cdot 5 $ \
$=$ [[  0,9  ]] $+ 5,4:6 + 0,125 \cdot 5 $ \
$=$ [[  0,9  ]] $+$ [[  0,9  ]] $+ 0,125 \cdot 5 $ \
$=$ [[  1,8  ]] $+ 0,125 \cdot 5 $ \
$=$ [[  1,8  ]] $+$ [[ 0,625 ]] \
$=$ [[ 2,425 ]] 

</div> 
<div class="flex-child">

__$c)\;\;$__ \
$\;\;\;\; 9,2 - 0,4 \cdot 1,5 \cdot 0,6 - 0,48:0,6 $ \
$= 9,2 -$ [[  0,6  ]] $\cdot 0,6 - 0,48:0,6 $ \
$= 9,2 -$ [[ 0,36  ]] $- 0,48:0,6 $ \
$= $ [[ 8,84 ]] $- 0,48:0,6 $ \
$= $ [[ 8,84 ]] $-$ [[  0,8  ]] \
$=$ [[ 8,04 ]] 

</div> 
<div class="flex-child">


__$d)\;\;$__ \
$\;\;\;\; (0,12 \cdot 0,4) : 0,08 + 6,5 : 1,3  $ \
$= $ [[ 0,048 ]] $ : 0,08 + 6,5 : 1,3  $ \
$= $ [[  0,6   ]] $ + 6,5 : 1,3  $ \
$= $ [[  0,6   ]] $ +$ [[  5   ]] \
$=$ [[ 5,6   ]] 


</div> 
</section>






