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
$\;\;\;\; 1,4 \cdot 6 - 0,4 \cdot 0,7 - 1,69:1,3 $ \
$=$ [[  8,4  ]] $- 0,4 \cdot 0,7 - 1,69:1,3 $ \
$=$ [[  8,4  ]] $-$ [[  0,28 ]] $- 1,69:1,3 $ \
$=$ [[  8,12 ]] $- 1,69:1,3 $ \
$=$ [[  8,12 ]] $-$ [[  1,3  ]] \
$=$ [[ 7,82 ]] 

</div> 
<div class="flex-child">

__$b)\;\;$__ \
$\;\;\;\; 1,8 \cdot 0,4 + 0,75 \cdot 6,4 - 0,125 \cdot 0,96 $ \
$= 1,8 \cdot 0,4 +$ [[  4,8   ]] $- 0,125 \cdot 0,96 $ \
$= 1,8 \cdot 0,4 +$ [[  4,8   ]] $-$ [[  0,12  ]] \
$= 1,8 \cdot 0,4 +$ [[  4,68  ]] \
$=$ [[  0,72  ]] $+$ [[  4,68  ]] \
$=$ [[  5,4   ]] 

</div> 
<div class="flex-child">

__$c)\;\;$__ \
$\;\;\;\; (3,4 - 1,4 \cdot 1,6) \cdot 0,5 + 2,1 \cdot 0,75  $ \
$= (3,4 - $ [[ 2,24  ]] $) \cdot 0,5 + 2,1 \cdot 0,75  $ \
$=$ [[ 1,16  ]] $ \cdot 0,5 + 2,1 \cdot 0,75  $ \
$=$ [[ 0,58  ]] $ + 2,1 \cdot 0,75  $ \
$=$ [[ 0,58  ]] $ + $ [[ 1,575 ]] \
$=$ [[ 2,155 ]] 

</div> 
<div class="flex-child">

__$d)\;\;$__ \
$\;\;\;\; (0,056:0,7) \cdot 2,5 + (0,42 : 0,6) \cdot 1,5  $ \
$= $ [[ 0,08 ]] $ \cdot 2,5 + (0,42 : 0,6) \cdot 1,5  $ \
$= $ [[ 0,2  ]] $ + (0,42 : 0,6) \cdot 1,5  $ \
$= $ [[ 0,2  ]] $ +$ [[ 0,7  ]] $\cdot 1,5  $ \
$= $ [[ 0,2  ]] $ +$ [[ 1,05 ]]  \
$=$ [[ 1,25 ]] 

</div> 
</section>






