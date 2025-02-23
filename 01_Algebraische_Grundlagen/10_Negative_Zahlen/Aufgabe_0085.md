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


tags: Negative Zahlen, Multiplikation, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Setze die Permanzreihe zur Multiplikation mit ganzen Zahlen fort.

author: Martin Lommatzsch

-->




# Permanenzreichen zur Multiplikation mit ganzen Zahlen

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ \
$ 2 \cdot (-3)  =$ [[  -6  ]] \
$ 2 \cdot (-(-3)) =$ [[  6  ]] \
$ 2 \cdot (-(-(-3))) =$ [[  -6  ]] \
$ 2 \cdot (-(-(-(-3)))) =$ [[  6  ]] \
$ 2 \cdot (-(-(-(-(-3))))) =$ [[  -6  ]] \
$ 2 \cdot (-(-(-(-(-(-3)))))) =$ [[  6  ]]  
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ \
$ -4 \cdot 8 =$ [[  -32  ]] \
$ -4 \cdot (-8) =$ [[  32  ]] \
$ -(-4) \cdot (-8) =$ [[  -32  ]] \
$ -(-4) \cdot (-(-8)) =$ [[  32  ]] \
$ -(-(-4)) \cdot (-(-8)) =$ [[  -32  ]] \
$ -(-(-4)) \cdot (-(-(-8)))  =$ [[  32  ]]  
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ \
$  -9 \cdot 5 =$ [[  -45  ]] \
$  -(-9) \cdot 5 =$ [[  45  ]] \
$  -(-(-9)) \cdot 5 =$ [[  -45  ]] \
$  -(-(-(-9))) \cdot 5 =$ [[  45  ]] \
$  -(-(-(-(-9)))) \cdot 5 =$ [[  -45  ]] \
$  -(-(-(-(-(-9))))) \cdot 5 =$ [[  45  ]] 
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ \
$ -8 \cdot (-7)  =$ [[  56  ]] \
$ -(-8) \cdot (-(-7)) =$ [[  56  ]] \
$ -(-(-8)) \cdot (-(-(-7))) =$ [[  56  ]] \
$ -(-(-(-8))) \cdot (-(-(-(-7)))) =$ [[  56  ]] \
$ -(-(-(-(-8)))) \cdot (-(-(-(-(-7))))) =$ [[  56  ]] \
$ -(-(-(-(-(-8))))) \cdot (-(-(-(-(-(-7)))))) =$ [[  56  ]]  
<br>
</div>
</section>
<br>
<br>
<br>
<br>

