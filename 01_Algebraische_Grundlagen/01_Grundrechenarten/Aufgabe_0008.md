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


tags: Vokabeln, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Eine Zahl in Worten, schreibe sie in Ziffern auf.

author: Martin Lommatzsch

-->




# Schrift als Ziffern

**Gib** die in Sprache dargestellt Zahl in Ziffern **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ Viertausendzweihundertneunundzwanzig  \

[[  4229  ]]
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ Achttausendvier.\

[[  8004  ]]
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ Zweitausendsiebhundertelf.\

[[  2711  ]]
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ Dreihundertneuntausendvierhundertsechsunddreißig.\

[[ 309436 ]]

</div>
</section>
<br>
<br>
<br>
<br>

