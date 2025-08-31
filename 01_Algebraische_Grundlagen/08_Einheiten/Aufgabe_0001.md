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

**Fülle** die Lücken **aus**.



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ [[ 1000 ]] Millimeter sind ein Meter. \


</div>
<div class="flex-child">

__$b)\;\;$__ Eine Tonne sind [[ 1000 ]] Kilogramm. \


</div>
<div class="flex-child">

__$c)\;\;$__ Ein Dezimeter entsprechen [[ 100  ]] Millimeter. \


</div>
<div class="flex-child">

__$d)\;\;$__ Eine Minute besitzt [[ 60   ]] Sekunden. \


</div>
<div class="flex-child">

__$e)\;\;$__ $10$ Dezimeter sind [[   1  ]] Meter. \

</div>


</section>




