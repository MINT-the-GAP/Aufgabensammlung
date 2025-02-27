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


tags: Fakultät, Bruchrechnung, leicht, niedrig, Bestimme

comment: Bestimme die Anzahl der Permutationen für das beschriebene Szenario.

author: Martin Lommatzsch

-->




# Permutationsanzahl bestimmen

<br>

__$a)\;\;$__ Es gibt $6$ unterschiedliche Kugeln. **Bestimme** die Anzahl der Permutationen.

[[  720    ]] 
**********
$6! = 720$
**********

<br>

__$b)\;\;$__ Es gibt $5$ rote und $3$ blaue Kugeln. **Bestimme** die Anzahl der Permutationen.

[[  56     ]] 
**********
$\dfrac{8!}{5!3!} = 56$
**********


<br>

__$c)\;\;$__ Es gibt $9$ rote und $3$ blaue Kugeln. **Bestimme** die Anzahl der Permutationen.

[[  220    ]] 
**********
$\dfrac{12!}{6!3!} = 220$
**********


<br>
<br>
<br>
<br>
<br>
<br>


