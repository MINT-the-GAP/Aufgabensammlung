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


tags: Einheiten, Länge, Masse, Zeit, sehr leich, sehr niedrig, Angeben

comment: Wähle die richtige Einheit aus, um den kleinsten Unterschied richtig darzustellen.

author: Martin Lommatzsch

-->




# Einheitenwahl


**Wähle** die passende Einheit **aus**, sodass die Differenz zwischen den beiden angegebenen Werten die kleinste ist.



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $4\,$m und $ 19\,$ [[km|m|dm|cm|mm]] \

</div>
<div class="flex-child">
__$b)\;\;$__ $4\,$s und $ 19\,$ [[d|h|min|s|ms]] \

</div>
<div class="flex-child">
__$c)\;\;$__ $4\,$g$ = 4\,$ [[t|kg|g|mg]] \

</div>
<div class="flex-child">
__$d)\;\;$__ $4\,$m und $ 19\,$ [[km|m|dm|cm|mm]] \

</div>
<div class="flex-child">
__$e)\;\;$__ $4\,$m und $ 19\,$ [[km|m|dm|cm|mm]] \


</div>


</section>





