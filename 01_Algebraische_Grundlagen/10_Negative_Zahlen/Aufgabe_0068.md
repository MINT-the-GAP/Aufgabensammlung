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
<br>
__$a)\;\;$__ $ \text{sgn}\left( -81\right) + (-8) =$ [[  -9  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ \text{sgn}\left( -21 \right) - (-17)=$ [[  -16  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ \text{sgn}\left( -63 \right) \cdot (-83) =$ [[  83  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 81:\text{sgn}\left( 45 \right) =$ [[  81  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

