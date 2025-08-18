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

__$a)\;\;$__ $ 144:\left| -12 \right| =$ [[  12  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ \left| -54-(-37) \right| =$ [[  14  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ \left| -36 \right| \cdot (-5) =$ [[  -180  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ \left| 48+(-69) \right| =$ [[  21  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ -11 \cdot \left| -13 \right| =$ [[  -143  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ -56 + \left| -74 \right| =$ [[  18  ]]

</div> 
</section>





