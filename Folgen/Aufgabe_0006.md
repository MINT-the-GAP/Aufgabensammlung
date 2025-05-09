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


tags: Folgen, sehr leicht, normal, Angeben

comment: Welche Zahl, welches Symbol kommt als nächstes?

author: Martin Lommatzsch

-->




# Folgen von Zahlen und Symbolen

**Gib** nächsten Glieder der Folge **an**.


<br>

__$a)\;\;$__

$97 \quad 91 \quad 85 \quad 79 \quad 73 \quad 67 \quad $ [[ 61 ]] $\quad$ [[ 55 ]] $\quad$ [[ 49 ]] \

[[?]] Musterbeschreibung: Von der vorherigen Zahl wird $6$ subtrahiert.


<br>

__$b)\;\;$__

$1 \quad 11 \quad 111 \quad 1111 \quad 11111 \quad $ [[ 111111 ]] $\quad$ [[ 1111111 ]] $\quad$ [[ 11111111 ]] \

[[?]] Musterbeschreibung: Die nächste $10$er-Potenz wird zur vorherigen Zahl addiert.


<br>

__$c)\;\;$__

$43 \quad 57 \quad 71 \quad 85 \quad 99 \quad 113 \quad$ [[ 127 ]] $\quad$ [[ 141 ]] $\quad$ [[ 155 ]] \

[[?]] Musterbeschreibung: Startend bei der $43$ wird zur vorherigen Zahl immer $14$ addiert.

<br>



<br>
<br>
<br>
<br>