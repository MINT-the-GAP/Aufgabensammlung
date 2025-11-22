<!--
version:  0.0.1
language: de
narrator: Deutsch Female

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


tags: Erklärung, Zahlenverständnis

comment: In diesem Abschnitt werden Zahlen sowie Ziffern besprochen.

author: Martin Lommatzsch

-->

# Ziffern und Zahlen


{{|>}}
*******************************

*Ziffern* sind die einzelnen Zeichen, die zur Darstellung von Zahlen verwendet werden. Im *Dezimalsystem* gibt es genau zehn *Ziffern*:

$$
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
$$

{{|>}} Eine *Zahl* entsteht erst, wenn eine oder mehrere *Ziffern* in einer bestimmten Anordnung geschrieben werden. Da in unserem Zahlensystem - dem Dezimalsystem - nach der 9 keine weitere neue *Ziffer* kommt muss eine *Zahl* die größer als die 9 ist durch zwei *Ziffern* ausgedrückt werden. Die Position (Stelle) einer *Ziffer* in der *Zahl* bestimmt dabei ihren Wert. Die Stellenwerttafel bildet diese Wertigkeit ab. 


{{|>}} Im *Dezimalsystem* basiert jede Stelle auf *Potenzen* der Zahl 10:

<center>
<!-- data-type="none" 
data-sortable="false" 
style="width:300px" -->
| Tausender | Hunderter | Zehner | Einer |
|-----------|-----------|--------|-------|
| T | H | Z | E |
| $10^3$    | $10^2$    | $10^1$ | $10^0$ |
| $1000$    | $100$    | $10$ | $1$ |
</center>



{{|>}} Die Zahl $4 583$ besteht aus den *Ziffern* $4$, $5$, $8$ und $3$.  
In der Stellenwerttafel:

<center>
<!-- data-type="none" 
data-sortable="false" 
style="width:50px" -->
| T | H | Z | E |
|---|---|---|---|
| 4 | 5 | 8 | 3 |
</center>

Das bedeutet:

$$
4 \cdot 1000 \;+\; 5 \cdot 100 \;+\; 8 \cdot 10 \;+\; 3 \cdot 1
= 4000 + 500 + 80 + 3
$$

{{|>}} *Ziffern* sind somit die Bausteine der Zahldarstellung. *Zahlen* entstehen durch Anordnung von *Ziffern* und Interpretation ihrer Position in einem Stellenwertsystem. Die *Stellenwerttafel* hilft, den Wert jeder Ziffer in einer Zahl zu erkennen.


*******************************