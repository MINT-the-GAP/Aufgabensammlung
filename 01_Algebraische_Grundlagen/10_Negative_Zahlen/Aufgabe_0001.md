<!--
version:  0.0.1

language: de

@style
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


tags: Negative Zahlen, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Welche Zahl ist größer? Gib es an.

author: Martin Lommatzsch

-->




# Größenvergleich von ganzen Zahlen

**Entscheide**, welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $-7$ [[($>$)|$=$|$<$]] $-11$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $-19$ [[$>$|$=$|($<$)]] $-5$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $-8$ [[($>$)|$=$|$<$]] $-9$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $-15$ [[$>$|$=$|($<$)]] $5$ 

</div>
</section>





