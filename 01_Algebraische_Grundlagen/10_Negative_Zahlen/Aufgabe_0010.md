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

comment: Gib das Vorzeichen oder den Betrag an.

author: Martin Lommatzsch

-->




# Signum und Betrag

**Gib** den Wert des Terms **an**.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $\text{sgn}(17)=$ [[  +1   ]]

</div>
<div class="flex-child">

__$b)\;\;$__ $\text{sgn}(|-14|)=$ [[  +1  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ $-|-77|=$ [[  -77  ]]

</div>
<div class="flex-child">

__$d)\;\;$__ $|\text{sgn}(-94)|=$ [[  +1  ]]

</div>
</section>





