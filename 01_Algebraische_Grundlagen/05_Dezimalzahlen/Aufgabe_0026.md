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


tags: Subtraktion, Dezimalzahlen, sehr leicht, sehr niedrig, Angeben

comment: Subtrahiere Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Subtraktion von Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 0,94-0,008 =$ [[  0,932  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 2,3-0,48 =$ [[  1,82  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 7,49-2,84 =$ [[  4,65  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 2,13-1,47 =$ [[  0,66  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 4,15-2,36 =$ [[  1,79  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 2,64-1,83 =$ [[  0,81  ]]

</div> 
</section>





