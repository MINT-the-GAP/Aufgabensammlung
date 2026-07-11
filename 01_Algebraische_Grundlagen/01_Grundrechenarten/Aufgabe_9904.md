<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md












tags: Subtraktion, leicht, niedrig, Bestimmen, Random

comment: Hier werden zufällige Subtraktionsaufgaben mit dreistellige Zahlen generiert. 

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->




# Zufallsaufgaben - Differenz von dreistelligen Zahlen




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.





<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window._sub4_diff_tick) { window._sub4_diff_tick = 1 } else { window._sub4_diff_tick++; }
  "Neue Aufgabe " + window._sub4_diff_tick
</script>

---

<script modify="false">
// @input(`Aufgabe`)

// Hilfsfunktionen
const ri    = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const digs4 = n => [Math.floor(n/1000)%10, Math.floor(n/100)%10, Math.floor(n/10)%10, n%10]; // [T,H,Z,E]
const slot  = f => f ? '\\textcolor{red}{1}' : '\\hspace{0.5em}'; // mit {0.5em}

// Zufall: vierstellige Zahlen, A >= B
let A = ri(1000, 9999);
let B = ri(1000, A);
const C = A - B;

// Aufgabe: nur Differenz gesucht
const problem = `${A} - ${B} = [[ ${C} ]] @canvas`;

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

// Align-Block im richtigen $$ … $$-Format
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
solution += `\n$$${A} - ${B} = x \\;\\Rightarrow\\; x = ${A} - ${B} = ${C}$$\n`;
solution += subtractionAlign(A, B, C);
solution += '\n***************';

// Ausgabe
"LIASCRIPT:\n" + problem + "\n" + solution;
</script>



