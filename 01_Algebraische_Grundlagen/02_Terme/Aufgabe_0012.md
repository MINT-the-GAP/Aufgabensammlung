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
$\;\;\;\; 0,84 : 0,7 + 2,54 + 1,75 \cdot 4,8 $ \
$=$ [[  1,2  ]] $ + 2,54 + 1,75 \cdot 4,8 $ \
$=$ [[ 3,74  ]] $ + 1,75 \cdot 4,8 $ \
$=$ [[ 3,74  ]] $ + $ [[ 8,4   ]] \
$=$ [[ 12,14 ]] 

</div> 
<div class="flex-child">

__$b)\;\;$__ \
$\;\;\;\; 1,25 \cdot 0,4 \cdot 7,5 + 3,4 \cdot 3,5 \cdot 0,1 $ \
$=$ [[ 0,5  ]] $ \cdot 7,5 + 3,4 \cdot 3,5 \cdot 0,1 $ \
$=$ [[ 3,75 ]] $ + 3,4 \cdot 3,5 \cdot 0,1 $ \
$=$ [[ 3,75 ]] $ + $ [[ 11,9 ]] $ \cdot 0,1 $ \
$=$ [[ 3,75 ]] $ + $ [[ 1,19 ]]  \
$=$ [[ 4,94 ]] 

</div> 
<div class="flex-child">

__$c)\;\;$__ \
$\;\;\;\; 9,4 \cdot 0,25 + 1,4 \cdot 0,45 + 0,375 $ \
$= $ [[ 2,3   ]] $ + 1,4 \cdot 0,45 + 0,375 $ \
$= $ [[ 2,3   ]] $ + $ [[ 0,63  ]] $ + 0,375 $ \
$= $ [[ 2,93  ]] $ + 0,375 $ \
$=$  [[ 3,305 ]] 

</div> 
<div class="flex-child">

__$d)\;\;$__ \
$\;\;\;\; 1,75 \cdot 2,4 + 5,31 - 2,56 : 16 $ \
$=$ [[  4,2  ]] $ + 5,31 - 2,56 : 16 $ \
$=$ [[  9,51 ]] $ - 2,56 : 16 $ \
$=$ [[  9,51 ]] $ -$ [[  0,16 ]] \
$=$ [[  9,35 ]] 

</div> 
</section>






