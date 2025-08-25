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
$ 14 \cdot 20 =$ [[  280  ]] \
$ 14 \cdot 2 =$ [[  28   ]] \
$ 14 \cdot 0,2 =$ [[  2,8    ]] \
$ 14 \cdot 0,02 =$ [[  0,28  ]] \
$ 14 \cdot 0,002 =$ [[  0,028  ]] \
$ 14 \cdot 0,0002 =$ [[  0,0028  ]]

</div>
<div class="flex-child">

__$b)\;\;$__ \
$ 5 \cdot 500 =$ [[  2500  ]] \
$ 5 \cdot 50 =$ [[  250   ]] \
$ 5 \cdot 5 =$ [[  25   ]] \
$ 5 \cdot 0,5 =$ [[  2,5    ]] \
$ 5 \cdot 0,05 =$ [[  0,25  ]] \
$ 5 \cdot 0,005 =$ [[  0,025  ]] \
$ 5 \cdot 0,0005 =$ [[  0,0025  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ \
$ 400 \cdot 800 =$ [[  320000  ]] \
$ 40 \cdot 80 =$ [[  3200   ]] \
$ 4 \cdot 8 =$ [[  32     ]] \
$ 0,4 \cdot 0,8 =$ [[  0,32      ]] \
$ 0,04 \cdot 0,08 =$ [[  0,0032  ]] \
$ 0,004 \cdot 0,008 =$ [[  0,000032  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__ \
$ 24000 \cdot 0,004 =$ [[  96   ]] \
$ 2400 \cdot 0,04 =$ [[  96   ]] \
$ 240 \cdot 0,4 =$ [[  96   ]] \
$ 24 \cdot 4 =$ [[  96   ]] \
$ 2,4 \cdot 40 =$ [[  96   ]] \
$ 0,24 \cdot 400 =$ [[  96   ]] \
$ 0,024 \cdot 4000 =$ [[  96   ]]

</div>
</section>





