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
<br>
__$a)\;\;$__ \
$ -144 : (-36) =$ [[  4  ]] \
$ -(-144) : (-36) =$ [[  -4  ]] \
$ -(-144) : (-(-36)) =$ [[  4  ]] \
$ -(-(-144)) : (-(-36)) =$ [[  -4  ]] \
$ -(-(-144)) : (-(-(-36))) =$ [[  4  ]] \
$ -(-(-(-144))) : (-(-(-36))) =$ [[  -4  ]]  
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ \
$ 63 : (-7) =$ [[  -9  ]] \
$ -63 : (-7) =$ [[  9  ]] \
$ -(-63) : (-7) =$ [[ -9   ]] \
$ -(-(-63)) : (-7) =$ [[  9  ]] \
$ -(-(-(-63))) : (-7) =$ [[  -9  ]] \
$ -(-(-(-(-63)))) : (-7) =$ [[  9  ]]  
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ \
$ 35:(-7) =$ [[  -5  ]] \
$ 35:(-(-7)) =$ [[  5  ]] \
$ 35:(-(-(-7))) =$ [[  -5  ]] \
$ 35:(-(-(-(-7)))) =$ [[  5  ]] \
$ 35:(-(-(-(-(-7))))) =$ [[  -5  ]] \
$ 35:(-(-(-(-(-(-7)))))) =$ [[  5  ]]  
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ \
$ -84 : 7 =$ [[  -12  ]] \
$ -(-84) : (-7) =$ [[  -12  ]] \
$ -(-(-84)) : (-(-7)) =$ [[  -12  ]] \
$ -(-(-(-84))) : (-(-(-7))) =$ [[  -12  ]] \
$ -(-(-(-(-84)))) : (-(-(-(-7)))) =$ [[  -12  ]] \
$ -(-(-(-(-(-84))))) : (-(-(-(-(-7))))) =$ [[  -12  ]]  
<br>
</div>
</section>
<br>
<br>
<br>
<br>

