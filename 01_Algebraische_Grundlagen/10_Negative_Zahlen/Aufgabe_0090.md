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


tags: Addition, Negative Zahlen, Dezimalzahlen, leicht, niedrig, Angeben

comment: Addiere negative Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Addition von negativen Dezimalzahlen

**Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ 7,7 +(0,29) =$ [[  7,41  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ -5,3+(-3,8) =$ [[  -9,1  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 4,26+(-6,84) =$ [[  -2,58  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ -2,3+(-5,17) =$ [[  -7,47  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 1,9+(-6,4) =$ [[  -4,5  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $ 6,4+(2,55) =$ [[  3,85  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

