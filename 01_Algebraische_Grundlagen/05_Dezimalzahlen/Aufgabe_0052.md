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
<br>
__$a)\;\;$__ \
$ 80 : 2 =$ [[  40   ]] \
$ 8 : 2 =$ [[  4    ]] \
$ 0,8 : 2 =$ [[  0,4   ]] \
$ 0,08 : 2 =$ [[  0,04  ]] \
$ 0,008 : 2 =$ [[  0,004  ]] \
$ 0,0008 : 2 =$ [[  0,0004  ]] \
$ 0,00008 : 2 =$ [[  0,00004  ]] 
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ \
$ 360 : 120 =$ [[  3       ]] \
$ 360 : 12 =$  [[  30      ]] \
$ 360 : 1,2 =$ [[  300     ]] \
$ 360 : 0,12 =$ [[  3000    ]] \
$ 360 : 0,012 =$ [[  30000   ]] \
$ 360 : 0,0012 =$ [[  300000  ]] \
$ 360 : 0,00012 =$ [[  3000000 ]] 
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ \
$ 540 : 9 =$ [[  60  ]] \
$ 54 : 0,9 =$ [[  60  ]] \
$ 5,4 : 0,09 =$ [[  60  ]] \
$ 0,54 : 0,009 =$ [[  60  ]] \
$ 0,054 : 0,0009 =$ [[  60  ]] \
$ 0,0054 : 0,00009 =$ [[  60  ]] \
$ 0,00054 : 0,000009 =$ [[  60  ]] 
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ \
$ 400 : 50 =$ [[  8    ]] \
$ 40 : 50 =$ [[  0,8  ]] \
$ 40 : 5 =$ [[  8  ]] \
$ 4 : 5 =$ [[  0,8  ]] \
$ 4 : 0,5 =$ [[  8  ]] \
$ 0,4 : 0,5 =$ [[  0,8  ]] \
$ 0,4 : 0,05 =$ [[  8  ]] 
<br>
</div>
</section>
<br>
<br>
<br>
<br>

