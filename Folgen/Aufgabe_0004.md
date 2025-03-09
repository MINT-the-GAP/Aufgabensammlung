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


tags: Folgen, schwer, normal, Angeben

comment: Welche Zahl, welches Symbol kommt als nächstes?

author: Martin Lommatzsch

-->




# Folgen von Zahlen und Symbolen

**Gib** nächsten Glieder der Folge **an**.



<br>

__$a)\;\;$__

$194 \quad 183 \quad 169 \quad 152 \quad 132 \quad 109 \quad $ [[ 83 ]] $\quad$ [[ 57 ]] $\quad$ [[ 28 ]] \

[[?]] Musterbeschreibung: Um $3$ wachsender Subtrahend wird vom vorherigen Wert subtrahiert.

<br>

__$b)\;\;$__

$1 \quad 16 \quad 81 \quad 256 \quad 625 \quad $ [[ 1296 ]] $\quad$ [[ 2401 ]] $\quad$ [[ 4096 ]] \

[[?]] Musterbeschreibung: Die aufsteigenden natürlichen Zahlen hoch $4$.


<br>

__$c)\;\;$__

$0 \quad 1 \quad 10 \quad 11 \quad 100 \quad 101 \quad 110 \quad 111 \quad $ [[ 1000 ]] $\quad$ [[ 1001 ]] $\quad$ [[ 1010 ]] \

[[?]] Musterbeschreibung: Die aufsteigenden Zahlen in binär.

<br>

<br>
<br>
<br>
<br>