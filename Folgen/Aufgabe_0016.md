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


tags: Folgen, sehr schwer, normal, Angeben

comment: Welche Zahl, welches Symbol kommt als nächstes?

author: Martin Lommatzsch

-->




# Folgen von Zahlen und Symbolen

**Gib** nächsten Glieder der Folge **an**.



<br>



<section class="flex-container">

<div class="flex-child">

$1 \quad 1 \quad 2 \quad 5 \quad 15 \quad 52 \quad 203 \quad 877 \quad $ [[ 4140 ]] $\quad$ [[ 21147 ]] $\quad$ [[ 115975 ]] \

[[?]] Musterbeschreibung: Die Bell'schen Zahlen beschreiben die Anzahl von Verbindungen in $n$-Ecken.

</div>

</section>

<br>
<br>
<br>
<br>