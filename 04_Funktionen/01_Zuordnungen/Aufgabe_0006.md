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


tags: Zuordnung, Eindeutigkeit, leicht, sehr niedrig, Angeben

comment: Ist diese Zuordnung eindeutig?

author: Martin Lommatzsch

-->




# Eindeutigkeit

**Entscheide**, ob der beschriebene Sachzusammenhang eine mehrdeutige, eindeutige oder eineindeutige Zuordnung darstellt.

<br>

__$a)\;\;$__ Jedem Namen wird ein Mensch zugeordnet.


Es handelt sich um eine [[(mehrdeutige)|eindeutige|eineindeutige]] Zuordnung.

<br>

__$b)\;\;$__ Jedem Menschen wird eine Augenfarbe zugeordnet.


Es handelt sich um eine [[mehrdeutige|(eindeutige)|eineindeutige]] Zuordnung.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>