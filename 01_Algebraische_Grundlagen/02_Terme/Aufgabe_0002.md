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
$ 72:16 + 26 + 22 $ \
$=$ [[ 4 ]] $ + 26 + 22  $ \
$=$ [[ 30 ]] $ + 22  $ \
$=$ [[ 52 ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ \
$ 5 \cdot 9 + 6 \cdot 7 + 2 $ \
$= $ [[ 45 ]] $ + 6 \cdot 7 + 2$ \
$=$ [[ 45 ]]  $+$ [[ 42 ]] $+ 2$  \
$=$ [[ 87 ]]  $+ 2$  \
$=$ [[ 89 ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ \
$ 34 + 64 + 25 + 21   $ \
$=$ $ 34 + 64 + $ [[ 46 ]]  \
$=$ $ 34 +$ [[ 110 ]]  \
$=$ [[ 144 ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ \
$= 7 \cdot 3 \cdot ( 14 - 2 \cdot 4 ) $ \
$= 7 \cdot 3 \cdot ( 14 -$ [[  8 ]] $) $ \
$= 7 \cdot 3 \cdot$  [[  6 ]]  \
$= 7 \cdot $  [[  18 ]] \
$=$ [[ 126 ]] 
<br>
</div> 
</section>

<br>
<br>
<br>
<br>

