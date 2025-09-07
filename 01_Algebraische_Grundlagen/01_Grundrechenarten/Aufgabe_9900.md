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

comment: Hier werden zufällige Aufgaben generiert, die dreistellige Summanden haben. 

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->




# Zufallsaufgaben - Addition mit dreistelligen Summanden




**Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.



<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window.randomAdd) { window.randomAdd = 1 }
  "Neue Aufgabe " + window.randomAdd++
</script>

---

<script modify="false">
// @input(`Aufgabe`)

// Helpers
const ri = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const digs4 = n => [Math.floor(n/1000)%10, Math.floor(n/100)%10, Math.floor(n/10)%10, n%10]; // [T,H,Z,E]

// Slot: liefert *einen* Backslash in TeX (\hspace ... / \textcolor ...)
const slot = f => f ? '\\textcolor{red}{1}' : '\\hspace{0.5em}';

// Zufall (dreistellige Summanden)
const a = ri(100, 999);
const b = ri(100, 999);
const c = a + b;

// 0 -> a gesucht, 1 -> b gesucht, 2 -> Summe gesucht
const marked = Math.floor(Math.random() * 3);

// Aufgabe (dein Format)
const problem =
  (marked === 0) ? `[[ ${a} ]] + ${b} = ${c}` :
  (marked === 1) ? `${a} + [[ ${b} ]] = ${c}` :
                   `${a} + ${b} = [[ ${c} ]]`;

// Übertragszeile für Addition (rote 1 IN der Zielspalte: E→Z, Z→H, H→T)
function carryLineAdd(a, b) {
  const A = digs4(a), B = digs4(b);
  const sE = A[3] + B[3]; const kZ = Math.floor(sE/10);
  const sZ = A[2] + B[2] + kZ; const kH = Math.floor(sZ/10);
  const sH = A[1] + B[1] + kH; const kT = Math.floor(sH/10);
  const flags = [kT, kH, kZ, 0]; // [T,H,Z,E] -> 1, wenn in diese Spalte übertragen wird
  return `${slot(flags[0])}${slot(flags[1])}${slot(flags[2])}${slot(flags[3])}&`;
}

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

// Align-Blöcke (nur deine Darstellung, sauber in $$ ... $$)
function additionAlign(a, b, c) {
  const carriers = carryLineAdd(a, b);
  return `$$
\\begin{align*}
 ${a}& \\\\
+${b}& \\\\
 ${carriers} \\\\ \\hline
 ${c}& \\\\
\\end{align*}
$$`;
}

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

// Versteckte Lösung (keine Leerzeile davor; End-Sternenblock)
let solution = '***************';
if (marked === 2) {
  solution += '\n' + additionAlign(a, b, c);
} else if (marked === 0) {
  solution += `\n$$x + ${b} = ${c} \\;\\Rightarrow\\; x = ${c} - ${b} = ${a}$$\n`;
  solution += subtractionAlign(c, b, a);
} else {
  solution += `\n$$${a} + x = ${c} \\;\\Rightarrow\\; x = ${c} - ${a} = ${b}$$\n`;
  solution += subtractionAlign(c, a, b);
}
solution += '\n***************';

// Ausgabe
"LIASCRIPT:\n" + problem + "\n" + solution;
</script>





