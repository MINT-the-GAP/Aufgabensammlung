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


tags: Negative Zahlen, Division, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Setze die Permanzreihe zur Division mit ganzen Zahlen fort.

author: Martin Lommatzsch

-->




# Permanenzreichen zur Division mit ganzen Zahlen

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ \
$ 18:(-2) =$ [[  -9  ]] \
$ 18:(-(-2)) =$ [[  9  ]] \
$ 18:(-(-(-2))) =$ [[  -9  ]] \
$ 18:(-(-(-(-2)))) =$ [[  9  ]] \
$ 18:(-(-(-(-(-2))))) =$ [[  -9  ]] \
$ 18:(-(-(-(-(-(-2)))))) =$ [[  9  ]]  

</div>
<div class="flex-child">

__$b)\;\;$__ \
$ -33 : 3 =$ [[  -11  ]] \
$ -(-33) : (-3) =$ [[  -11  ]] \
$ -(-(-33)) : (-(-3)) =$ [[  -11  ]] \
$ -(-(-(-33))) : (-(-(-3))) =$ [[  -11  ]] \
$ -(-(-(-(-33)))) : (-(-(-(-3)))) =$ [[  -11  ]] \
$ -(-(-(-(-(-33))))) : (-(-(-(-(-3))))) =$ [[  -11  ]]  

</div>
<div class="flex-child">

__$c)\;\;$__ \
$ 24 : (-8) =$ [[  -3  ]] \
$ -24 : (-8) =$ [[  3  ]] \
$ -(-24) : (-8) =$ [[ -3   ]] \
$ -(-(-24)) : (-8) =$ [[  3  ]] \
$ -(-(-(-24))) : (-8) =$ [[  -3  ]] \
$ -(-(-(-(-24)))) : (-8) =$ [[  3  ]]  

</div>
<div class="flex-child">

__$d)\;\;$__ \
$ -48 : (-8) =$ [[  6  ]] \
$ -(-48) : (-8) =$ [[  -6  ]] \
$ -(-48) : (-(-8)) =$ [[  6  ]] \
$ -(-(-48)) : (-(-8)) =$ [[  -6  ]] \
$ -(-(-48)) : (-(-(-8))) =$ [[  6  ]] \
$ -(-(-(-48))) : (-(-(-8))) =$ [[  -6  ]]  

</div>
</section>





