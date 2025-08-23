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


tags: Gleichungssysteme, sehr leicht, sehr niedrig, Bestimmen

comment: Löse Streichholzschachtelgleichungssysteme.

author: Martin Lommatzsch

-->




# Streichholzschachtelgleichungsysteme


In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer, gleiches gilt für die $y$-Schachteln und $z$-Schachteln. Auf jeder Seite des Gleichheitszeichen befindet sich die gleiche Anzahl an Streichhölzern. **Bestimme** bei allen Gleichungssystemen wie viele Streichhölzer sich in den einzelnen $x$-, $y$- und $z$-Schachteln befinden.



<!-- style="width:600px" -->
__$a)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem1b.png)  
$x=$ [[  2  ]] Streichhölzer
$y=$ [[  12 ]] Streichhölzer

<!-- style="width:600px" -->
__$b)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem2b.png)  
$x=$ [[  2   ]] Streichhölzer
$y=$ [[  3   ]] Streichhölzer

<!-- style="width:600px" -->
__$c)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem3b.png)  
$x=$ [[  1  ]] Streichhölzer
$y=$ [[  2  ]] Streichhölzer

<!-- style="width:600px" -->
__$d)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem4b.png)  
$x=$ [[  2  ]] Streichhölzer
$y=$ [[  6  ]] Streichhölzer
$z=$ [[  4  ]] Streichhölzer















