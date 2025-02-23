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
$ 20 + 2 \cdot 3 \cdot 4 \cdot 5 $ \
$= 20 +$ [[  6  ]] $\cdot 4 \cdot 5 $ \
$= 20 +$ [[ 24  ]] $ \cdot 5 $ \
$= 20 +$ [[ 120 ]]   \
$=$ [[ 140 ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ \
$ 187 - 17 - 31 -25 - 41  $ \
$=$ [[ 160 ]]  $  - 31 -25 - 41 $ \
$=$ [[ 129 ]]  $   -25 - 41 $ \
$=$ [[ 104 ]]  $    - 41 $ \
$=$ [[ 63 ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ \
$ 81 : 3 + 105 : 5 + 6 \cdot 4  $ \
$=$ $ 81 : 3 + 105 : 5 +$ [[ 24 ]]  \
$=$ $ 81 : 3 +$ [[ 21 ]] $+$ [[ 24 ]]  \
$=$ $ 81 : 3 +$ [[ 45 ]]  \
$=$ [[ 27 ]] $+$ [[ 45 ]]  \
$=$ [[ 72 ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ \
$ 11 \cdot 7 - 17 \cdot 3  $ \
$=$ [[ 77 ]] $ - 17 \cdot 3  $ \
$=$ [[ 77 ]] $-$ [[ 51 ]] \
$=$ [[ 26 ]] 
<br>
</div> 
</section>

<br>
<br>
<br>
<br>

