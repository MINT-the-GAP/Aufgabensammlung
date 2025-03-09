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


tags: Folgen, leicht, normal, Angeben

comment: Welche Zahl, welches Symbol kommt als nächstes?

author: Martin Lommatzsch

-->




# Folgen von Zahlen und Symbolen

**Gib** nächsten Glieder der Folge **an**.


<br>

__$a)\;\;$__

$1 \quad 1 \quad 2 \quad 3 \quad 5 \quad 8 \quad 13 \quad$ [[ 21 ]] $\quad$ [[ 34 ]] $\quad$ [[ 55 ]] \

[[?]] Musterbeschreibung: Die beiden vorherigen Zahlen werden miteinander addiert.

<br>

__$b)\;\;$__

$1 \quad 4 \quad 9 \quad 16 \quad 25 \quad 36 \quad 49 \quad$ [[ 64 ]] $\quad$ [[ 81 ]] $\quad$ [[ 100 ]] \

[[?]] Musterbeschreibung: Die aufsteigenden natürlichen Zahlen werden quadriert.

<br>

__$c)\;\;$__

$A \quad C \quad E \quad G \quad I \quad K \quad M \quad$ [[ O ]] $\quad$ [[ Q ]] $\quad$ [[ S ]] \

[[?]] Musterbeschreibung: Immer der übernächste Buchstabe des Alphabets

<br>



<br>
<br>
<br>
<br>