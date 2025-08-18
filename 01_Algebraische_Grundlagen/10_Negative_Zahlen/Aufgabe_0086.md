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

__$a)\;\;$__ \
$ -4 \cdot 3 =$ [[  -12  ]] \
$ -4 \cdot 3 \cdot (-1) =$ [[  12  ]] \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  =$ [[  -12  ]] \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  \cdot (-1)  =$ [[  12  ]] \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  \cdot (-1)  \cdot (-1)  =$ [[  -12  ]] \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  \cdot (-1)  \cdot (-1)  \cdot (-1)  =$ [[  12  ]]  

</div>
<div class="flex-child">

__$b)\;\;$__ \
$ -5 \cdot (-12)  =$ [[  60  ]] \
$ -(-5) \cdot (-(-12)) =$ [[  60  ]] \
$ -(-(-5)) \cdot (-(-(-12))) =$ [[  60  ]] \
$ -(-(-(-5))) \cdot (-(-(-(-12)))) =$ [[  60  ]] \
$ -(-(-(-(-5)))) \cdot (-(-(-(-(-12))))) =$ [[  60  ]] \
$ -(-(-(-(-(-5))))) \cdot (-(-(-(-(-(-12)))))) =$ [[  60  ]]  

</div>
<div class="flex-child">

__$c)\;\;$__ \
$ -6 \cdot (-7)  =$ [[  42  ]] \
$ -6 \cdot (-(-7)) =$ [[  -42  ]] \
$ -6 \cdot (-(-(-7))) =$ [[  42  ]] \
$ -6 \cdot (-(-(-(-7)))) =$ [[  -42  ]] \
$ -6 \cdot (-(-(-(-(-7))))) =$ [[  42  ]] \
$ -6 \cdot (-(-(-(-(-(-7)))))) =$ [[  -42  ]]  

</div>
<div class="flex-child">

__$d)\;\;$__ \
$  -4 \cdot (-7) =$ [[  28  ]] \
$  -(-4) \cdot (-7) =$ [[  -28  ]] \
$  -(-(-4)) \cdot (-7) =$ [[  28  ]] \
$  -(-(-(-4))) \cdot (-7) =$ [[  -28  ]] \
$  -(-(-(-(-4)))) \cdot (-7) =$ [[  28  ]] \
$  -(-(-(-(-(-4))))) \cdot (-7) =$ [[  -28  ]] 

</div>
</section>





