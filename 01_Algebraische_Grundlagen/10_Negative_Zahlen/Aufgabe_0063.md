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


tags: Betrag, Negative Zahlen, leicht, sehr niedrig, Angeben

comment: Rechne mit Beträgen von ganzen Zahlen im Kopf.

author: Martin Lommatzsch

-->




# Rechnen mit Beträgen

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \left| -4 \right| \cdot (-35) =$ [[  -140  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ \left| -45 - (-12) \right| =$ [[  33  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 15-\left| -37 \right| =$ [[  -22  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ \left| -18 \right|+(-47) =$ [[  -29  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ \left| 14 - \left| -52 \right| \right| =$ [[  38  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ \left| -96 \right| : (-8) =$ [[  -12  ]]

</div> 
</section>





