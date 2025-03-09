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

comment: Viele Vorzeichen sind auch kein Problem.

author: Martin Lommatzsch

-->




# Viele Vorzeichen

**Gib** den Wert des Terms **an**.

<br>
<section class="flex-container">
<div class="flex-child">

<br>
__$a)\;\;$__ $ -\left( -\left( -4 \right) \right)=$ [[  -4  ]]
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $-\left( -\left( -\left( -\left( -9 \right) \right) \right) \right)=$ [[  -9  ]]
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $-\left( -\left( -\left( -12 \right) \right) \right)=$ [[  12  ]]
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $-\left( -\left| -\left( -7 \right) \right| \right)=$ [[   7  ]]

</div>
</section>
<br>
<br>
<br>
<br>

