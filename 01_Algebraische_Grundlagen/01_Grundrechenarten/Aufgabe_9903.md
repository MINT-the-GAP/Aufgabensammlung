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


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md












tags: Addition, Subtraktion, leicht, niedrig, Bestimmen, Random

comment: Hier werden zufällige Subtraktionsaufgaben generiert, die dreistellige Zahlen haben. 

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->




# Zufallsaufgaben - Subtraktion mit dreistelligen Zahlen




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.




<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window._sub3_tick) { window._sub3_tick = 1 } else { window._sub3_tick++; }
  "Neue Aufgabe " + window._sub3_tick
</script>

---

<script modify="false">
// @input(`Aufgabe`)

// Helpers
const ri    = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const digs3 = n => [Math.floor(n/100)%10, Math.floor(n/10)%10, n%10]; // [H,Z,E]
const slot  = f => f ? '\\textcolor{red}{1}' : '\\hspace{0.5em}'; // <<< mit {0.5em}

// Welche Größe ist gesucht? 0=Minuend A, 1=Subtrahend B, 2=Differenz C
const missing = ri(0, 2);

// Zahlen generieren (alle dreistellig)
let A, B, C;
if (missing === 2) {
  // C gesucht: A - B = C, mit C dreistellig
  A = ri(200, 999);
  B = ri(100, A - 100);
  C = A - B;
} else if (missing === 1) {
  // B gesucht
  A = ri(200, 999);
  C = ri(100, A - 100);
  B = A - C;
} else {
  // A gesucht
  B = ri(100, 899);
  C = ri(100, 999 - B);
  A = B + C;
}

// Aufgabe (gesuchte Zahl als Eingabefeld)
const problem =
  (missing === 0) ? `[[ ${A} ]] @canvas - ${B} = ${C}` :
  (missing === 1) ? `${A} - [[ ${B} ]] @canvas = ${C}` :
                    `${A} - ${B} = [[ ${C} ]] @canvas`;

// Leih-Zeile bauen: rote 1 WO +10 genommen wurde (Reihenfolge [H,Z,E])
function borrowLineSub(minuend, subtrahend) {
  const M = digs3(minuend).slice();
  const S = digs3(subtrahend);
  const bor = [0,0,0]; // [H,Z,E]

  // Einer
  if (M[2] < S[2]) { bor[2] = 1; M[1] -= 1; M[2] += 10; }
  // Zehner
  if (M[1] < S[1]) { bor[1] = 1; M[0] -= 1; M[1] += 10; }
  // Hunderter: kein weiteres Leihen (bleibt dreistellig)

  return `${slot(bor[0])}${slot(bor[1])}${slot(bor[2])}&`;
}

// Align-Block für die schriftliche Subtraktion (dein Layout)
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
  // Minuend gesucht
  solution += `\n$$x - ${B} = ${C} \\;\\Rightarrow\\; x = ${C} + ${B} = ${A}$$\n`;
  solution += subtractionAlign(A, B, C);
} else if (missing === 1) {
  // Subtrahend gesucht
  solution += `\n$$${A} - x = ${C} \\;\\Rightarrow\\; x = ${A} - ${C} = ${B}$$\n`;
  solution += subtractionAlign(A, B, C);
} else {
  // Differenz gesucht
  solution += `\n$$${A} - ${B} = x \\;\\Rightarrow\\; x = ${A} - ${B} = ${C}$$\n`;
  solution += subtractionAlign(A, B, C);
}
solution += '\n***************';

// Ausgabe
"LIASCRIPT:\n" + problem + "\n" + solution;
</script>
