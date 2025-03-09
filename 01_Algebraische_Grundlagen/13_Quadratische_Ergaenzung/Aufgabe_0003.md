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

**Ordne** den Termen einen äquivalenten Term zu **zu**.

<section class="flex-container">
<div class="flex-child">
$ I.    \;\; x^2-4x+4 $ \
$ II.   \;\; x^2+8x+16 $ \
$ III.  \;\; x^2-2x+1 $ \
$ IV.   \;\; x^2+3x+9 $ \
$ V.    \;\; x^2-8x+16 $ \
$ VI.   \;\; x^2+10x+25 $ \
</div>
<div class="flex-child">
$ VII.  \;\; x^2+2x+1 $ \
$ VIII. \;\; x^2-3x+9 $ \
$ IX.   \;\; x^2+5x+10 $ \
$ X.    \;\; x^2+4x+4 $ \
$ XI.   \;\; x^2-10x+25 $ \
$ XII.  \;\; x^2-5x+10 $ \
</div>

<br>

<div class="flex-child">
<br>
__$a)\;\;$__  $  (x-5)^2  =$ [[I.|II.|III.|IV.|V.|VI.|VII.|VIII.|IX.|X.|(XI.)|XII.]]
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__  $  (x-1)^2  =$ [[I.|II.|(III.)|IV.|V.|VI.|VII.|VIII.|IX.|X.|XI.|XII.]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>
<br>
<br>