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
$ 82 - 5 \cdot 3 - 6 \cdot 4 $ \
$= 82 - $ [[ 15 ]] $ - 6 \cdot 4  $ \
$= [[ 67 ]] $ - 6 \cdot 4  $ \
$= [[ 67 ]] $ - $[[ 24 ]] \
$=$ [[ 43 ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ \
$ 144 - ( 8 \cdot 6 + 17)  $ \
$= 144 - ( $[[ 42 ]]$ + 17)  $ \
$= 144 - $[[ 59 ]]$  \
$=$ [[ 85 ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ \
$ ( 9 \cdot 5 + 18 ) : 7   $ \
$= ( $[[ 45 ]] $ + 18 ) : 7   $ \
$=  $[[ 63 ]] $  : 7   $ \
$=$ [[ 9 ]] 
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ \
$ 13 + 5 \cdot 7 + 108 : 4  $ \
$= 13 +$ [[ 35 ]] $+ 108 : 4  $ \
$= $ [[ 48 ]] $+ 108 : 4  $ \
$= $ [[ 48 ]] $+$ [[ 27 ]] \
$=$ [[ 75 ]] 
<br>
</div> 
</section>

<br>
<br>
<br>
<br>

