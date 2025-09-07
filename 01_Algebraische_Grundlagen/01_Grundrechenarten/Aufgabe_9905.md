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
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md


tags: Addition, Subtraktion, leicht, niedrig, Bestimmen, Random

comment: Hier werden zufällige Subtraktionsaufgaben dreistelligen Zahlen generiert. Der Minuend wird gesucht.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->




# Zufallsaufgaben - Minuendensuche




**Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.



<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window._sub4_min_tick) { window._sub4_min_tick = 1 } else { window._sub4_min_tick++; }
  "Neue Aufgabe " + window._sub4_min_tick
</script>

---

<script modify="false">
// @input(`Aufgabe`)

// Hilfsfunktionen
const ri    = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const digs4 = n => [Math.floor(n/1000)%10, Math.floor(n/100)%10, Math.floor(n/10)%10, n%10]; // [T,H,Z,E]
const slot  = f => f ? '\\textcolor{red}{1}' : '\\hspace{0.5em}'; // mit {0.5em}

// Zufallszahlen: Subtrahend und Differenz (beide vierstellig), daraus Minuend
let B = ri(1000, 9999);
let C = ri(1000, 9999 - B); // C so, dass A = B+C ≤ 9999
let A = B + C;

// Aufgabe: Minuend gesucht
const problem = `[[ ${A} ]] - ${B} = ${C}`;

// Leih-Zeile für Subtraktion
function borrowLineSub(minuend, subtrahend) {
  const M = digs4(minuend).slice(); // Arbeitskopie
  const S = digs4(subtrahend);
  const bor = [0,0,0,0]; // [T,H,Z,E]

  // Einer
  if (M[3] < S[3]) { bor[3] = 1; M[2] -= 1; M[3] += 10; }
  // Zehner
  if (M[2] < S[2]) { bor[2] = 1; M[1] -= 1; M[2] += 10; }
  // Hunderter
  if (M[1] < S[1]) { bor[1] = 1; M[0] -= 1; M[1] += 10; }
  // Tausender: kein weiteres Leihen

  return `${slot(bor[0])}${slot(bor[1])}${slot(bor[2])}${slot(bor[3])}&`;
}

// Align-Block im $$ … $$-Format
function subtractionAlign(minuend, subtrahend, result) {
  const borrows = borrowLineSub(minuend, subtrahend);
  return `$$
\\begin{align*}
 ${minuend}& \\\\
-${subtrahend}& \\\\
 ${borrows} \\\\ \\hline
 ${result}& \\\\
\\end{align*}
$$`;
}

// Versteckte Lösung
let solution = '***************';
solution += `\n$$x - ${B} = ${C} \\;\\Rightarrow\\; x = ${C} + ${B} = ${A}$$\n`;
solution += subtractionAlign(A, B, C);
solution += '\n***************';

// Ausgabe
"LIASCRIPT:\n" + problem + "\n" + solution;
</script>

