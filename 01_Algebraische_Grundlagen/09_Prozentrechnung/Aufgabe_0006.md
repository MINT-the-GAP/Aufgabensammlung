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


tags: Dezimalzahlen, Prozent, sehr leicht, sehr niedrig, Angeben

comment: Wandle die Prozentzahl in eine Dezimalzahl um.

author: Martin Lommatzsch

-->




# Darstellung als Dezimalzahl

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 60 \%=$ [[  0,6  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,9 \%=$ [[  0,009  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 107 \%=$ [[  1,07  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 4,7 \%=$ [[  0,047  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 2064,2 \%=$ [[  20,642  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,017 \%=$ [[  0,00017  ]]

</div> 
</section>





