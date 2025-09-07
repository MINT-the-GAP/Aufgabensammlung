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


tags: Prozent, leicht, niedrig, Bestimmen, Random

comment: Hier werden zufällige Prozentrechnungsaufgaben mit übersichtlichen Zahlen generiert. 

author: Martin Lommatzsch

-->




# Zufallsaufgaben - Prozentrechnung


**Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.


<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window.randomMath) { window.randomMath = 0 }
  "Neue Aufgabe " + window.randomMath++
</script>

---

<script run-once modify="false">
// @input(`Aufgabe`)
// Zufällige Prozentzahl (10 bis 90 in 10er-Schritten)
const percentage = (Math.floor(Math.random() * 9) + 1) * 10;
// Zufällige Basiszahl (zwischen 50 und 500, in 50er-Schritten)
const base = (Math.floor(Math.random() * 10) + 1) * 50;
// Berechnung des Ergebnisses
const result = Math.round((percentage / 100) * base);

// Auswahl einer Zahl zur Markierung (0 => Prozentsatz, 1 => Basis, 2 => Ergebnis)
const markedNumber = Math.floor(Math.random() * 3);
let problem = ""

if (markedNumber === 0) {
  // Prozentsatz unbekannt
  problem = `[[ ${percentage} ]] % von ${base} = ${result}`;
} else if (markedNumber === 1) {
  // Basis unbekannt
  problem = `${percentage}% von [[ ${base} ]] = ${result}`
} else {
  // Ergebnis unbekannt
  problem = `${percentage}% von ${base} = [[ ${result} ]]`
}

// Lösungsschritte vereinfacht und in einem aligned-Block
let solution = "***************\n\n";

if (markedNumber === 0) {
  // Prozentsatz x ist unbekannt: x% von base = result
  // => x/100 = result/base => x = (result * 100)/base
  const xVal = (result * 100) / base;
  solution += `$$
    \\begin{aligned}
      \\frac{x}{100} &= \\frac{${result}}{${base}} \\\\[5mm]
      x&=\\frac{${result} \\cdot 100}{${base}} \\\\[5mm]
      x&=${xVal}
    \\end{aligned}
    $$\n\n`;
} else if (markedNumber === 1) {
  // Basis x ist unbekannt: percentage% von x = result
  // => percentage/100 = result/x => x = (result * 100)/percentage
  const xVal = (result * 100) / percentage;
  solution += `$$
    \\begin{aligned}
      \\frac{${percentage}}{100}&=\\frac{${result}}{x} \\\\[5mm]
      x&=\\frac{${result} \\cdot 100}{${percentage}} \\\\[5mm]
        x&=${xVal}
    \\end{aligned}
    $$\n\n`;
} else {
  // Ergebnis x ist unbekannt: percentage% von base = x
  // => percentage/100 = x/base => x = (percentage * base)/100
  const xVal = Math.round((percentage * base) / 100);
  solution += `$$
    \\begin{aligned}
      \\frac{${percentage}}{100}&=\\frac{x}{${base}} \\\\[5mm]
      x&=\\frac{${percentage} \\cdot ${base}}{100} \\\\[5mm]
      x&=${xVal}
    \\end{aligned}
    $$\n\n`;
}

solution += "***************";

"LIASCRIPT: \n " + problem + "\n" + solution;
</script>



