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
$ 56 : 7000 =$ [[  0,008  ]] \
$ 56 : 700 =$ [[  0,08  ]] \
$ 56 : 70 =$ [[  0,8  ]] \
$ 56 : 7 =$ [[  8  ]] \
$ 56 : 0,7 =$ [[  80  ]] \
$ 56 : 0,07 =$ [[  800  ]] \
$ 56 : 0,007 =$ [[  8000  ]] 

</div>
<div class="flex-child">

__$b)\;\;$__ \
$ 7500 : 15 =$ [[  500  ]] \
$ 750 : 15 =$ [[  50  ]] \
$ 75 : 15 =$ [[  5  ]] \
$ 7,5 : 15 =$ [[  0,5  ]] \
$ 0,75 : 15 =$ [[  0,05  ]] \
$ 0,075 : 15 =$ [[  0,005  ]] \
$ 0,0075 : 15 =$ [[  0,0005  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__ \
$ 9600 : 1600 =$ [[  6  ]] \
$ 960 : 160 =$ [[  6  ]] \
$ 96 : 16 =$ [[  6  ]] \
$ 9,6 : 1,6 =$ [[  6  ]] \
$ 0,96 : 0,16 =$ [[  6  ]] \
$ 0,096 : 0,016 =$ [[  6  ]] \
$ 0,0096 : 0,0016 =$ [[  6  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__ \
$ 48000 : 0,006 =$ [[  8000000    ]] \
$ 4800 : 0,06 =$ [[  80000     ]] \
$ 480 : 0,6 =$ [[  800      ]] \
$ 48 : 6 =$ [[  8         ]] \
$ 4,8 : 60 =$ [[  0,08      ]] \
$ 0,48 : 600 =$ [[  0,0008    ]] \
$ 0,048 : 6000 =$ [[  0,000008  ]] 

</div>
</section>





