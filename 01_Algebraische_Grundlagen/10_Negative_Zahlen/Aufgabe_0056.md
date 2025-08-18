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


tags: Multiplikation, Negative Zahlen, sehr leicht, sehr niedrig, Angeben

comment: Multipliziere ganze Zahlen im Kopf.

author: Martin Lommatzsch

-->




# Multiplikation von ganzen Zahlen

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ -7 \cdot 4=$ [[  -28  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ -6 \cdot (-7) =$ [[  42  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 9 \cdot (-12) =$ [[  -108 ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 11 \cdot (-13) =$ [[ -143  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ -8 \cdot 15 =$ [[  -120 ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ -9 \cdot (-7) =$ [[  63  ]]

</div> 
</section>





