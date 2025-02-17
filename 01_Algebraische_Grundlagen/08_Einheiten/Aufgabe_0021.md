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


tags: Einheiten, Dezimalzahlen, Länge, Zeit, Masse, Fläche, Volumen, mittel, niedrig, Angeben

comment: Wähle die richtige Einheit aus.

author: Martin Lommatzsch

-->




# Einheitenwahl


**Wähle** die passende Einheit **aus**, sodass eine wahre mathematische Aussage entsteht.

<br>


__$a)\;\;$__ $75\,$cm$ = 7,5\,$ [[km|m|(dm)|cm|mm]] \
<br>
__$b)\;\;$__ $3\,$h$ = 10800\,$ [[d|h|min|(s)]] \
<br>
__$c)\;\;$__ $64000\,$mg$ = 0,064\,$ [[t|(kg)|g|mg]] \
<br>
__$d)\;\;$__ $2,5\,$dm$^2 = 25000\,$ [[km$^2$|ha|m$^2$|dm$^2$|cm$^2$|(mm$^2$)]] \
<br>
__$e)\;\;$__ $43\,$l$ = 43000\,$ [[km$^3$|m$^3$|dm$^3$|(cm$^3$)|mm$^3$]] \
<br>


<br>
<br>
<br>
<br>
<br>