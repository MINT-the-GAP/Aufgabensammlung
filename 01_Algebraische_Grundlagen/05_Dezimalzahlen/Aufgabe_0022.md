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


tags: Addition, Dezimalzahlen, sehr leicht, sehr niedrig, Angeben

comment: Addiere Dezimalzahlen im Kopf.

author: Martin Lommatzsch

-->




# Addition von Dezimalzahlen

**Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ 4,7+ 3,41=$ [[  8,11  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$b)\;\;$__ $ 1,56+ 2,85=$ [[  4,41  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$c)\;\;$__ $ 0,85+ 2,846=$ [[  3,696  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$d)\;\;$__ $ 3,45+ 2,97=$ [[  6,42  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$e)\;\;$__ $ 8,43+ 0,76=$ [[  9,19  ]]
<br>
</div> 
<div class="flex-child">
<br>
__$f)\;\;$__ $2,748 + 0,494=$ [[  3,242  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

