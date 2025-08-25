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


tags: Dezimalzahlen, Division, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Setze die Permanzreihe zur Division mit Dezimalzahlen fort.

author: Martin Lommatzsch

-->




# Permanenzreichen zur Division mit Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ \
$ 250 : 5 =$ [[  50      ]] \
$ 25 : 5 =$  [[  5       ]] \
$ 2,5 : 5 =$ [[  0,5     ]] \
$ 0,25 : 5 =$ [[  0,05    ]] \
$ 0,025 : 5 =$ [[  0,005    ]] \
$ 0,0025 : 5 =$ [[  0,0005   ]] \
$ 0,00025 : 5 =$ [[  0,00005  ]] 

</div>
<div class="flex-child">

__$b)\;\;$__ \
$ 84000 : 12000 =$ [[  7  ]] \
$ 8400 : 1200 =$ [[  7  ]] \
$ 840 : 120 =$ [[  7  ]] \
$ 84 : 12 =$ [[  7  ]] \
$ 8,4 : 1,2 =$ [[  7  ]] \
$ 0,84 : 0,12 =$ [[  7  ]] \
$ 0,084 : 0,012 =$ [[  7  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__ \
$ 1200 : 4 =$ [[  300     ]] \
$ 120 : 4 =$ [[  30      ]] \
$ 12 : 4 =$ [[  3       ]] \
$ 1,2 : 4 =$ [[  0,3     ]] \
$ 0,12 : 4 =$ [[  0,03    ]] \
$ 0,012 : 4 =$ [[  0,003   ]] \
$ 0,0012 : 4 =$ [[  0,0003  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__ \
$ 36 : 0,006 =$ [[  6000   ]] \
$ 36 : 0,06 =$ [[  600    ]] \
$ 36 : 0,6 =$ [[  60     ]] \
$ 36 : 6 =$ [[  6      ]] \
$ 36 : 60 =$ [[  0,6    ]] \
$ 36 : 600 =$ [[  0,06   ]] \
$ 36 : 6000 =$ [[  0,006  ]] 

</div>
</section>





