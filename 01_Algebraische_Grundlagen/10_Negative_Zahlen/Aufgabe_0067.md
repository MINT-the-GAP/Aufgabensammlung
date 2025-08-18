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


tags: Signum, Negative Zahlen, sehr leicht, sehr niedrig, Angeben

comment: Rechne mit der Signumsfunktion von ganzen Zahlen im Kopf.

author: Martin Lommatzsch

-->




# Rechnen mit Signum

**Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \text{sgn}\left(-94 \right) \cdot 92 =$ [[  -92  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ -74:\text{sgn}\left( 74\right) =$ [[  -74  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ -14-\text{sgn}\left( -58\right) =$ [[  -15  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 19:\text{sgn}\left( -65 \right) =$ [[  -19  ]]

</div> 
</section>





