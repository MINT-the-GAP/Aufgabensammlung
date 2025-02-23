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
<br>
__$a)\;\;$__ \
$ -17-18 =$ [[  -35  ]] \
$ -17-9 =$ [[  -26  ]] \
$ -17-0 =$ [[  -17  ]] \
$ -17-(-9) =$ [[  -8  ]] \
$ -17-(-18) =$ [[  1  ]] \
$ -17-(-27) =$ [[  10  ]] \
$ -17-(-36) =$ [[ 19   ]]  
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ \
$ 22-36 =$ [[  -14  ]] \
$ 22-24 =$ [[ -2   ]] \
$ 22-12 =$ [[ 10   ]] \
$ 22-0 =$ [[  22  ]] \
$ 22-(-12) =$ [[  34  ]] \
$ 22-(-24) =$ [[  46  ]] \
$ 22-(-36) =$ [[  58  ]]  
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ \
$ -1-15=$ [[ -16   ]] \
$ -1-10 =$ [[ -11   ]] \
$ -1-5 =$ [[  -6  ]] \
$ -1-0 =$ [[  -1  ]] \
$ -1-(-5) =$ [[  4  ]] \
$ -1-(-10) =$ [[  9  ]] \
$ -1-(-15) =$ [[  14  ]]  
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ \
$ 17-24 =$ [[  -7  ]] \
$ 17-16 =$ [[  1  ]] \
$ 17-8 =$ [[  9  ]] \
$ 17-0 =$ [[ 17   ]] \
$ 17-(-8) =$ [[  25  ]] \
$ 17-(-16) =$ [[ 33   ]] \
$ 17-(-24) =$ [[  41  ]]  
<br>
</div>
</section>
<br>
<br>
<br>
<br>

