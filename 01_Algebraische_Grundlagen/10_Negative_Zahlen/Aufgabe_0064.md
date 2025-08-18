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


tags: Betrag, Negative Zahlen, sehr leicht, sehr niedrig, Angeben

comment: Rechne mit Beträgen von ganzen Zahlen im Kopf.

author: Martin Lommatzsch

-->




# Rechnen mit Beträgen

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \left| -37 \right| - \left| -65 \right| =$ [[  -28  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ -13 \cdot \left| -9 \right| =$ [[  -117  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ \left|-625:\left| -25 \right|\right| =$ [[  25  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ \left| -17 \right| - 85 =$ [[  -68  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ \left| -26 - (84) \right| =$ [[  58  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ \left| -29 \right| + (-45) =$ [[  -16  ]]

</div> 
</section>





