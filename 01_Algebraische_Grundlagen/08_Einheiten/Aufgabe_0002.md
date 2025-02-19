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


tags: Einheiten, Länge, Zeit, Masse, sehr leicht, sehr niedrig, Angeben

comment: Wie viel sind nochmal was? Fülle die Lücken der Umrechnung.

author: Martin Lommatzsch

-->




# Lückentext bei Umrechnungen

**Gib** die Antwort auf die Frage **an**.

<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Wie viele Millimeter sind ein Meter? \
[[1000]]

<br>
</div>
<div class="flex-child">

__$b)\;\;$__ Wie viele  sind eine Stunde? \
[[60  ]]

<br>
</div>
<div class="flex-child">

__$c)\;\;$__ Wie viele Meter sind ein Kilometer? \
[[1000]]

<br>
</div>
<div class="flex-child">

__$d)\;\;$__ Wie viele Gramm sind ein Kilogramm? \
[[1000]]

<br>
</div>
<div class="flex-child">

__$e)\;\;$__ Wie viele Stunden sind ein Tag? \
[[24  ]]

</div>


</section>

<br>
<br>
<br>
<br>
<br>