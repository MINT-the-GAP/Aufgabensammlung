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
$ 80 \cdot 10 =$ [[  800  ]] \
$ 80 \cdot 1 =$ [[  80   ]] \
$ 80 \cdot 0,1 =$ [[  8    ]] \
$ 80 \cdot 0,01 =$ [[  0,8  ]] \
$ 80 \cdot 0,001 =$ [[  0,08  ]] \
$ 80 \cdot 0,0001 =$ [[  0,008  ]]

</div>
<div class="flex-child">

__$b)\;\;$__ \
$ 4 \cdot 300 =$ [[  1200  ]] \
$ 4 \cdot 30 =$ [[  120   ]] \
$ 4 \cdot 3 =$ [[  12   ]] \
$ 4 \cdot 0,3 =$ [[  1,2    ]] \
$ 4 \cdot 0,03 =$ [[  0,12  ]] \
$ 4 \cdot 0,003 =$ [[  0,012  ]] \
$ 4 \cdot 0,0003 =$ [[  0,0012  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ \
$ 5 \cdot 60 =$ [[  300  ]] \
$ 5 \cdot 6 =$ [[  30   ]] \
$ 0,5 \cdot 6 =$ [[  3   ]] \
$ 0,5 \cdot 0,6 =$ [[  0,3    ]] \
$ 0,5 \cdot 0,06 =$ [[  0,03  ]] \
$ 0,5 \cdot 0,006 =$ [[  0,003  ]] \
$ 0,5 \cdot 0,0006 =$ [[  0,0003  ]]

</div>
<div class="flex-child">

__$d)\;\;$__ \
$ 900 \cdot 4 =$ [[  3600  ]] \
$ 90 \cdot 4 =$ [[  360   ]] \
$ 9 \cdot 4 =$ [[  36    ]] \
$ 0,9 \cdot 4 =$ [[  3,6  ]] \
$ 0,09 \cdot 4 =$ [[  0,36  ]] \
$ 0,09 \cdot 0,4 =$ [[  0,036  ]] \
$ 0,09 \cdot 0,04 =$ [[  0,0036 ]]

</div>
</section>





