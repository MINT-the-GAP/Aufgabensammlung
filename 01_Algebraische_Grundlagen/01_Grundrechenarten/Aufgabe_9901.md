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


tags: Addition, leicht, niedrig, Bestimmen, Random

comment: Hier werden zufällige Addittionsaufgaben generiert, die vierstellige Summanden haben. Hier wird die Summe gesucht. 

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->




# Zufallsaufgaben - Summe mit vierstelligen Summanden



**Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.




<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window._add4_tick) { window._add4_tick = 1 } else { window._add4_tick++; }
  "Neue Aufgabe " + window._add4_tick
</script>

---

<script modify="false">
// @input(`Aufgabe`)

// Helpers
const ri    = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const digs4 = n => [Math.floor(n/1000)%10, Math.floor(n/100)%10, Math.floor(n/10)%10, n%10]; // [T,H,Z,E]
const slot  = f => f ? '\\textcolor{red}{1}' : '\\hspace{0.5em}'; // TeX: \textcolor / \hspace mit {0.5em}

// Zufall: 4-stellige Summanden, KEIN Übertrag in 10^4
let a, b, c, ok = false;
while (!ok) {
  a = ri(1000, 9999);
  b = ri(1000, 9999);
  const A = digs4(a), B = digs4(b);

  const sE = A[3] + B[3]; const kZ = Math.floor(sE/10);
  const sZ = A[2] + B[2] + kZ; const kH = Math.floor(sZ/10);
  const sH = A[1] + B[1] + kH; const kT = Math.floor(sH/10);
  const sT = A[0] + B[0] + kT; const kTT = Math.floor(sT/10);
  ok = (kTT === 0); // keine fünfte Stelle erzeugen
}
c = a + b;

// Aufgabe (nur: Summe eingeben)
const problem = `${a} + ${b} = [[ ${c} ]]`;

// Übertragszeile (rote 1 IN der Zielspalte: E→Z, Z→H, H→T)
function carryLineAdd(a, b) {
  const A = digs4(a), B = digs4(b);
  const sE = A[3] + B[3]; const kZ = Math.floor(sE/10);
  const sZ = A[2] + B[2] + kZ; const kH = Math.floor(sZ/10);
  const sH = A[1] + B[1] + kH; const kT = Math.floor(sH/10);
  const flags = [kT, kH, kZ, 0]; // [T, H, Z, E]; E hat nie eine 1
  return `${slot(flags[0])}${slot(flags[1])}${slot(flags[2])}${slot(flags[3])}&`;
}

// Align-Block (dein Layout), korrekt in $$ … $$
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

// Versteckte Lösung
let solution = '***************';
solution += '\n' + additionAlign(a, b, c);
solution += '\n***************';

// Ausgabe
"LIASCRIPT:\n" + problem + "\n" + solution;
</script>


