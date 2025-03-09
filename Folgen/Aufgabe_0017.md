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

$100 \quad 99 \quad 97 \quad 94 \quad 90 \quad 85 \quad 79 \quad$ [[ 72 ]] $\quad$ [[ 64 ]] $\quad$ [[ 57 ]] \

[[?]] Musterbeschreibung: Es wird von der vorherigen Zahl eine aufsteigende natürliche Zahl subtrahiert.

<br>

__$b)\;\;$__

$11 \quad 22 \quad 33 \quad 44 \quad 55 \quad 66 \quad $ [[ 77 ]] $\quad$ [[ 88 ]] $\quad$ [[ 99 ]] \

[[?]] Musterbeschreibung: Die $11$er-Reihe.

<br>

__$c)\;\;$__

$1 \quad 121 \quad 12321 \quad 1234321 \quad $ [[ 123454321 ]] $\quad$ [[ 12345654321 ]] $\quad$ [[ 1234567654321 ]] \

[[?]] Musterbeschreibung: Es wird immer eine nächst höhere Ziffer in die Mitte eingefügt, sodass die Zahl sich aus den aufsteigenden und absteigenden Ziffern ergibt.

<br>



<br>
<br>
<br>
<br>