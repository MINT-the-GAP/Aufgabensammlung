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

comment: Hier werden zufällige Additionsaufgaben generiert, die vierstellige Summanden haben. Hier wird ein Summand gesucht. 

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->




# Zufallsaufgaben - Summandensuche 





**Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.




<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window._sub4_tick) { window._sub4_tick = 1 } else { window._sub4_tick++; }
  "Neue Aufgabe " + window._sub4_tick
</script>

---

<script modify="false">
// @input(`Aufgabe`)

// Helpers
const ri    = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const digs4 = n => [Math.floor(n/1000)%10, Math.floor(n/100)%10, Math.floor(n/10)%10, n%10]; // [T,H,Z,E]
const slot  = f => f ? '\\textcolor{red}{1}' : '\\hspace{0.5em}';

// Zufall: 4-stellige Summanden, KEIN Übertrag in 10^4
let a, b, c, ok = false;
while (!ok) {
  a = ri(1000, 9999);
  b = ri(1000, 9999);
  c = a + b;
  if (c < 10000) ok = true; // keine 5. Stelle
}

// Welcher Summand fehlt? 0 = a, 1 = b
const missing = ri(0,1);

// Aufgabe-Text
let problem = (missing === 0)
  ? `[[ ${a} ]] + ${b} = ${c}`
  : `${a} + [[ ${b} ]] = ${c}`;

// Leihzeile für Subtraktion (rote 1 WO +10 genommen wurde)
function borrowLineSub(minuend, subtrahend) {
  const M = digs4(minuend).slice();
  const S = digs4(subtrahend);
  const bor = [0,0,0,0]; // [T,H,Z,E]

  if (M[3] < S[3]) { bor[3] = 1; M[2] -= 1; M[3] += 10; }
  if (M[2] < S[2]) { bor[2] = 1; M[1] -= 1; M[2] += 10; }
  if (M[1] < S[1]) { bor[1] = 1; M[0] -= 1; M[1] += 10; }

  return `${slot(bor[0])}${slot(bor[1])}${slot(bor[2])}${slot(bor[3])}&`;
}

// Align-Block für Subtraktion
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
if (missing === 0) {
  solution += `\n$$x + ${b} = ${c} \\;\\Rightarrow\\; x = ${c} - ${b} = ${a}$$\n`;
  solution += subtractionAlign(c, b, a);
} else {
  solution += `\n$${a} + x = ${c} \\;\\Rightarrow\\; x = ${c} - ${a} = ${b}$$\n`.replace('$','$$');
  solution += subtractionAlign(c, a, b);
}
solution += '\n***************';

// Ausgabe
"LIASCRIPT:\n" + problem + "\n" + solution;
</script>



