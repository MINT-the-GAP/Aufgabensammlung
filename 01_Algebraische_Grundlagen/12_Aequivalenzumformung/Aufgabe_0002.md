<!--
version:  0.0.1
language: de


@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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


tags: Äquivalenzumformung, sehr leicht, sehr niedrig, Bestimmen

comment: Löse Streichholzschachtelgleichungen.

author: Martin Lommatzsch

-->




# Streichholzschachtelgleichungen


In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer. Auf jeder Seite des Gleichheitszeichen befindet sich die selbe Anzahl an Streichhölzern. **Bestimme** bei allen drei Streichholzschachtelgleichungen wie viele Streichhölzer sich in einer Schachtel befinden.

<!-- style="width:600px" -->
__$a)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholz1e.png)  
$x=$ [[  2  ]] Streichhölzer

<!-- style="width:600px" -->
__$b)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholz1f.png)  
$x=$ [[  2  ]] Streichhölzer

<!-- style="width:600px" -->
__$c)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholz1g.png)  
$x=$ [[  1  ]] Streichhölzer

<!-- style="width:600px" -->
__$d)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholz1h.png)  
$x=$ [[  5  ]] Streichhölzer












