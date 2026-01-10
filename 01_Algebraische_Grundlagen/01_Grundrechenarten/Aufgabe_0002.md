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


tags: Vokabeln, Grundrechenarten, sehr leicht, sehr niedrig, Angeben

comment: Ein Term wird durch die Fachsprache beschrieben. Gib den Wert dieses Terms an.

author: Martin Lommatzsch

-->




# Fachsprache von Termen

**Gib** den Wert des beschriebenen Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Der Dividend ist $81$ und der Divisor $27$. \
[[  3   ]]

</div>
<div class="flex-child">

__$b)\;\;$__ Eine Summe besteht aus den Summanden $12$, $34$ und $26$.\
[[  72  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ Es wird ein Produkt aus $11$ und $12$ gebildet. \
[[  132 ]]

</div>
<div class="flex-child">

__$d)\;\;$__ Der Subtrahend einer Differenz ist $19$, während der Wert des Minuenden $45$ beträgt.\
[[  26  ]]

</div>
</section>





