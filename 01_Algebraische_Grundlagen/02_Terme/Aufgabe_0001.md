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


tags: Terme, Grundrechenarten, Vorrangsregeln, sehr leicht, sehr niedrig, Angeben

comment: Verrechne Schrittweise den Term. Lerne wie Termumformungen niedergeschrieben werden.

author: Martin Lommatzsch

-->




# Termeumformen mit Grundrechenarten

**Fülle** die Lücken der Rechnung mit den passenden Werten aus **aus**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ \
$\;\;\;\; 13 \cdot 5 + 14 $ \
$=$ [[ 65 ]] $  + 14 $ \
$=$ [[ 79 ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ \
$\;\;\;\; 75 - 7 \cdot 5 + 23  $ \
$=  75 - $ [[ 35 ]] $  + 23 $ \
$=$ [[ 40 ]]  $  + 23 $ \
$=$ [[ 63 ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ \
$\;\;\;\; 65 : 13 + 85 : 5   $ \
$=$ $ 65 : 13 +$ [[ 17 ]]  \
$=$ [[  5 ]] $+$ [[ 17 ]]  \
$=$ [[ 22 ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ \
$\;\;\;\; 9 \cdot 8 - 12 \cdot 4  $ \
$=$ [[ 72 ]] $ - 12 \cdot 4  $ \
$=$ [[ 72 ]] $-$ [[ 48 ]] \
$=$ [[ 24 ]] 
<br>
</div> 
</section>

<br>
<br>
<br>
<br>

