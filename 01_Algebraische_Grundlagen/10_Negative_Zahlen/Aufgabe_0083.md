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


tags: Negative Zahlen, Subtraktion, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Setze die Permanzreihe zur Subtraktion mit ganzen Zahlen fort.

author: Martin Lommatzsch

-->




# Permanenzreichen zur Subtraktion mit ganzen Zahlen

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ \
$ 23-32 =$ [[  -9  ]] \
$ 23-24 =$ [[  -1  ]] \
$ 23-16 =$ [[  7  ]] \
$ 23-8 =$ [[  15  ]] \
$ 23-0 =$ [[  23  ]] \
$ 23-(-8) =$ [[  31  ]] \
$ 23-(-16) =$ [[  39  ]]  

</div>
<div class="flex-child">

__$b)\;\;$__ \
$ -12-20 =$ [[  -32  ]] \
$ -12-15 =$ [[  -27  ]] \
$ -12-10 =$ [[  -22  ]] \
$ -12-5 =$ [[ -17   ]] \
$ -12-0 =$ [[  -12  ]] \
$ -12-(-5) =$ [[  -7  ]] \
$ -12-(-10) =$ [[  -2  ]]  

</div>
<div class="flex-child">

__$c)\;\;$__ \
$ 13-30 =$ [[  -17  ]] \
$ 13-15 =$ [[ -2   ]] \
$ 13-0 =$ [[  13  ]] \
$ 13-(-15) =$ [[  28  ]] \
$ 13-(-30) =$ [[  43  ]] \
$ 13-(-45) =$ [[  58  ]] \
$ 13-(-60) =$ [[  73  ]]  

</div>
<div class="flex-child">

__$d)\;\;$__ \
$ -54-7 =$ [[  -61  ]] \
$ -54-0 =$ [[  -54  ]] \
$ -54-(-7) =$ [[  -47  ]] \
$ -54-(-14) =$ [[  -40  ]] \
$ -54-(-21) =$ [[  -33  ]] \
$ -54-(-28) =$ [[  -26  ]] \
$ -54-(-35) =$ [[  -19  ]]  

</div>
</section>





