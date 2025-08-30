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

tags: Quadratische Ergänzung, sehr leicht, sehr niedrig, Angeben

comment: Welcher quadratische Term ist äquivalent zu welchem anderen?

author: Martin Lommatzsch

-->




# Äquivalenz von quadratischen Termen

**Ordne** den Termen einen äquivalenten Term **zu**.


<section class="flex-container">
<div class="flex-child">

<!-- data-randomize="true"  -->
__$a)\;\;$__  $  (x+2)^2  =$ [->[$x^2-4x+4$|$x^2+8x+16$|$x^2-2x+1$|$x^2+3x+9$|$x^2-8x+16$|$x^2+10x+25$|$x^2+2x+1$|$x^2-3x+9$|$x^2+5x+10$|($x^2+4x+4$)|$x^2-10x+25$|$x^2-5x+10$]]

</div>
<div class="flex-child">

<!-- data-randomize="true"  -->
__$b)\;\;$__  $  (x-4)^2  =$ [->[$x^2-4x+4$|$x^2+8x+16$|$x^2-2x+1$|$x^2+3x+9$|($x^2-8x+16$)|$x^2+10x+25$|$x^2+2x+1$|$x^2-3x+9$|$x^2+5x+10$|$x^2+4x+4$|$x^2-10x+25$|$x^2-5x+10$]]

</div> 
</section>





