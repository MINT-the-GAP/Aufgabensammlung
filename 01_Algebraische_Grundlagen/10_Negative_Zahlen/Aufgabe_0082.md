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
<br>
__$a)\;\;$__ \
$ 2+14 =$ [[  16  ]] \
$ 2+7 =$ [[  9  ]] \
$ 2+0 =$ [[  2  ]] \
$ 2+(-7) =$ [[  -5  ]] \
$ 2+(-14) =$ [[  -12  ]] \
$ 2+(-21) =$ [[  -19  ]] \
$ 2+(-28) =$ [[  -26  ]]  
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ \
$ 5+12 =$ [[  17  ]] \
$ 5+6 =$ [[  11  ]] \
$ 5+0 =$ [[  5  ]] \
$ 5+(-6) =$ [[  -1  ]] \
$ 5+(-12) =$ [[  -7  ]] \
$ 5+(-18) =$ [[  -13  ]] \
$ 5+(-24) =$ [[  -19  ]]  
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ \
$ 54+9 =$ [[  63  ]] \
$ 54+0 =$ [[  54  ]] \
$ 54+(-9) =$ [[  45  ]] \
$ 54+(-18) =$ [[  36  ]] \
$ 54+(-27) =$ [[  27  ]] \
$ 54+(-36) =$ [[  18  ]] \
$ 54+(-45) =$ [[  9  ]]  
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ \
$ -7+16 =$ [[  9  ]] \
$ -7+8 =$ [[  1  ]] \
$ -7+0 =$ [[  -7  ]] \
$ -7+(-8) =$ [[  -15  ]] \
$ -7+(-16) =$ [[  -23  ]] \
$ -7+(-24) =$ [[  -31  ]] \
$ -7+(-32) =$ [[  -39  ]]  
<br>
</div>
</section>
<br>
<br>
<br>
<br>

