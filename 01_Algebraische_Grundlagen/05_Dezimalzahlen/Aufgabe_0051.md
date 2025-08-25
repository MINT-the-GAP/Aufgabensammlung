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


tags: Dezimalzahlen, Multiplikation, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Setze die Permanzreihe zur Multiplikation mit Dezimalzahlen fort.

author: Martin Lommatzsch

-->




# Permanenzreichen zur Multiplikation mit Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ \
$ 500 \cdot 70 =$ [[  35000  ]] \
$ 500 \cdot 7 =$ [[  3500   ]] \
$ 500 \cdot 0,7 =$ [[  350    ]] \
$ 500 \cdot 0,07 =$ [[  35  ]] \
$ 500 \cdot 0,007 =$ [[  3,5  ]] \
$ 500 \cdot 0,0007 =$ [[  0,35  ]] \
$ 500 \cdot 0,00007 =$ [[  0,035  ]]

</div>
<div class="flex-child">

__$b)\;\;$__ \
$ 11 \cdot 60 =$ [[  660  ]] \
$ 11 \cdot 6 =$ [[  66   ]] \
$ 11 \cdot 0,6 =$ [[  6,6   ]] \
$ 11 \cdot 0,06 =$ [[  0,66    ]] \
$ 11 \cdot 0,006 =$ [[  0,066  ]] \
$ 11 \cdot 0,0006 =$ [[  0,0066  ]] \
$ 11 \cdot 0,00006 =$ [[  0,00066  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ \
$ 400 \cdot 20 =$ [[  8000  ]] \
$ 40 \cdot 2 =$ [[  80   ]] \
$ 4 \cdot 0,2 =$ [[  0,8   ]] \
$ 0,4 \cdot 0,02 =$ [[  0,008    ]] \
$ 0,04 \cdot 0,002 =$ [[  0,00008  ]] \
$ 0,004 \cdot 0,0002 =$ [[  0,0000008  ]] \
$ 0,0004 \cdot 0,00002 =$ [[  0,000000008  ]]

</div>
<div class="flex-child">

__$d)\;\;$__ \
$ 900 \cdot 0,007 =$ [[  6,3  ]] \
$ 90 \cdot 0,07 =$ [[  6,3  ]] \
$ 9 \cdot 0,7 =$ [[  6,3  ]] \
$ 0,9 \cdot 7 =$ [[  6,3  ]] \
$ 0,09 \cdot 70 =$ [[  6,3  ]] \
$ 0,009 \cdot 700 =$ [[  6,3  ]] \
$ 0,0009 \cdot 7000 =$ [[  6,3  ]]

</div>
</section>





