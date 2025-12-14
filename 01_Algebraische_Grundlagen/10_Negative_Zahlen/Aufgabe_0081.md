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


tags: Negative Zahlen, Addition, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Setze die Permanzreihe zur Addition mit ganzen Zahlen fort.

author: Martin Lommatzsch

-->




# Permanenzreichen zur Addition mit ganzen Zahlen

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ \
$ 8+8 =$ [[  16  ]] \
$ 8+4 =$ [[  12  ]] \
$ 8+0 =$ [[  8  ]] \
$ 8+(-4) =$ [[  4  ]] \
$ 8+(-8) =$ [[  0  ]] \
$ 8+(-12) =$ [[  -4  ]] \
$ 8+(-16) =$ [[  -8  ]]  

</div>
<div class="flex-child">

__$b)\;\;$__ \
$ 10+5 =$ [[  15  ]] \
$ 10+0 =$ [[  10  ]] \
$ 10+(-5) =$ [[  5  ]] \
$ 10+(-10) =$ [[  0  ]] \
$ 10+(-15) =$ [[  -5  ]] \
$ 10+(-20) =$ [[  -10  ]] \
$ 10+(-25) =$ [[  -15  ]]  

</div>
<div class="flex-child">

__$c)\;\;$__ \
$ 6+9 =$ [[  15  ]] \
$ 6+0 =$ [[  6  ]] \
$ 6+(-9) =$ [[  -3  ]] \
$ 6+(-18) =$ [[  -12  ]] \
$ 6+(-27) =$ [[  -21  ]] \
$ 6+(-36) =$ [[  -30  ]] \
$ 6+(-45) =$ [[  -39  ]]  

</div>
<div class="flex-child">

__$d)\;\;$__ \
$ 7+12 =$ [[  19  ]] \
$ 7+6 =$ [[  13  ]] \
$ 7+0 =$ [[  7  ]] \
$ 7+(-6) =$ [[  1  ]] \
$ 7+(-12) =$ [[  -5  ]] \
$ 7+(-18) =$ [[  -11  ]] \
$ 7+(-24) =$ [[  -17  ]]  

</div>
</section>





