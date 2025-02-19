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


tags: Einheiten, Dezimalzahlen, Länge, Masse, Zeit, mittel, niedrig, Angeben

comment: Wähle die richtige Einheit aus.

author: Martin Lommatzsch

-->




# Einheitenwahl


**Wähle** die passende Einheit **aus**, sodass eine wahre mathematische Aussage entsteht.

<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $0,00021\,$t$ = 21000\,$ [[t|kg|g|dg|(cg)|mg]] \
<br>
</div>
<div class="flex-child">
__$b)\;\;$__ $0,05\,$d$ = 72\,$ [[d|h|(min)|s|ms]] \
<br>
</div>
<div class="flex-child">
__$c)\;\;$__ $0,000037\,$m$ = 0,0037\,$ [[km|m|dm|(cm)|mm]] \
<br>
</div>
<div class="flex-child">
__$d)\;\;$__ $6300\,$s$ = 1,75\,$ [[d|(h)|min|s|ms]] \
<br>
</div>
<div class="flex-child">
__$e)\;\;$__ $2,5\,$h$ = 150\,$ [[d|h|(min)|s|ms]] \
<br>

</div>


</section>

<br>
<br>
<br>
<br>
<br>