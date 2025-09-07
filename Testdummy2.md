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


import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md


tags: 

comment: 

author: 



import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md
-->



# dreistellige Addition RANDOM








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









# vierstellige Addition SUMME Random




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











# vierstellige Addition SUMMAND Random





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






# Nun Subktation




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
  (missing === 0) ? `[[ ${A} ]] - ${B} = ${C}` :
  (missing === 1) ? `${A} - [[ ${B} ]] = ${C}` :
                    `${A} - ${B} = [[ ${C} ]]`;

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








# Nur Differenz




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
const problem = `${A} - ${B} = [[ ${C} ]]`;

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








# Nur Minuend



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









# Nur Subtrahend





<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window._sub4_subtrahend_tick) { window._sub4_subtrahend_tick = 1 } else { window._sub4_subtrahend_tick++; }
  "Neue Aufgabe " + window._sub4_subtrahend_tick
</script>

---

<script modify="false">
// @input(`Aufgabe`)

// Hilfsfunktionen
const ri    = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const digs4 = n => [Math.floor(n/1000)%10, Math.floor(n/100)%10, Math.floor(n/10)%10, n%10]; // [T,H,Z,E]
const slot  = f => f ? '\\textcolor{red}{1}' : '\\hspace{0.5em}'; // <- mit {0.5em}

// Zahlen wählen: Minuend A und Differenz C vierstellig; B = A - C ebenfalls vierstellig
const A = ri(2000, 9999);
const C = ri(1000, A - 1000);
const B = A - C; // 1000..8999

// Aufgabe: nur der Subtrahend ist gesucht
const problem = `${A} - [[ ${B} ]] = ${C}`;

// Leih-Markierungen (rote 1 dort, WO +10 genommen wurde) in Reihenfolge [T,H,Z,E]
function borrowLineSub(minuend, subtrahend) {
  const M = digs4(minuend).slice();
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

// Align-Block (sauber in $$ … $$ gekapselt)
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

// Versteckte Lösung (keine Leerzeile davor; mit End-Sternen)
let solution = '***************';
solution += `\n$${A} - x = ${C} \\;\\Rightarrow\\; x = ${A} - ${C} = ${B}$$\n`.replace('$','$$');
solution += subtractionAlign(A, B, C);
solution += '\n***************';

// Ausgabe
"LIASCRIPT:\n" + problem + "\n" + solution;
</script>


















# Multiplikation 1er





<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window._mult3x1_tick) { window._mult3x1_tick = 1 } else { window._mult3x1_tick++; }
  "Neue Aufgabe " + window._mult3x1_tick
</script>

---

<script modify="false">
// @input(`Aufgabe`)

const ri = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Zufall: dreistelliger und einstelliger Faktor
const A = ri(100, 999);
const B = ri(2, 9);
const P = A * B;

// Aufgabe: TeX für Rechnung, Eingabefeld außerhalb
const problem = `$${A} \\cdot ${B} =$ [[ ${P} ]]`;

// Lösung im Align-Stil
function multiplicationAlign(a, b, p) {
  const digits = String(a).split('').map(d => parseInt(d));
  let lines = [];

  // Einer
  let prod = digits[2] * b;
  lines.push(`+\\hspace{0.5em}\\hspace{0.5em}\\hspace{0.5em}${prod}& \\\\`);

  // Zehner
  prod = digits[1] * b;
  lines.push(`+\\hspace{0.5em}\\hspace{0.5em}${prod}\\textcolor{red}{0}& \\\\`);

  // Hunderter
  prod = digits[0] * b;
  lines.push(`+\\hspace{0.5em}${prod}\\textcolor{red}{00}& \\\\`);

  return `$$
\\begin{align*}
 ${a} \\cdot ${b}& \\\\ \\hline
 ${lines.join('\n')}
 \\hline
 ${p}& \\\\
\\end{align*}
$$`;
}

// Versteckte Lösung
let solution = '***************';
solution += '\n' + multiplicationAlign(A, B, P);
solution += '\n***************';

// Ausgabe
"LIASCRIPT:\n" + problem + "\n" + solution;
</script>





















# Multiplikation 3x3er




<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window._mult3x3_tick) { window._mult3x3_tick = 1 } else { window._mult3x3_tick++; }
  "Neue Aufgabe " + window._mult3x3_tick
</script>

---

<script modify="false">
// @input(`Aufgabe`)

// Zufall: beide Faktoren dreistellig
const ri = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const A = ri(100, 999);
const B = ri(100, 999);
const P = A * B;

// Aufgabe: TeX links, Eingabefeld rechts (außerhalb der TeX-Umgebung)
const problem = `$${A} \\cdot ${B} = $ [[ ${P} ]]`;

// Lösung im Align-Stil
function multiplicationAlign(a, b, p) {
  const [h, z, e] = String(b).padStart(3, '0').split('').map(x => parseInt(x, 10));
  const prodE = a * e;   // Einer-Teilprodukt
  const prodZ = a * z;   // Zehner-Teilprodukt
  const prodH = a * h;   // Hunderter-Teilprodukt

  return `$$
\\begin{align*}
 ${a} \\cdot \\textcolor{orange}{${h}}\\textcolor{green}{${z}}\\textcolor{blue}{${e}}& \\\\ \\hline
 \\textcolor{blue}{${prodE}}& \\\\
 +\\textcolor{green}{${prodZ}}\\textcolor{red}{0}& \\\\
 +\\textcolor{orange}{${prodH}}\\textcolor{red}{00}& \\\\ \\hline
 ${p}& \\\\
\\end{align*}
$$`;
}

// Versteckte Lösung
let solution = '***************';
solution += '\n' + multiplicationAlign(A, B, P);
solution += '\n***************';

// Ausgabe
"LIASCRIPT:\n" + problem + "\n" + solution;
</script>







































# Division nur Qutient ???? määähhhh





# Bruch Addition









<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window._frac_tick) { window._frac_tick = 1 } else { window._frac_tick++; }
  "Neue Aufgabe " + window._frac_tick
</script>

---

<script modify="false">
// @input(`Aufgabe`)

// Hilfsfunktionen
function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { const t = b; b = a % b; a = t; }
  return a || 1;
}
const ri = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Zufall: Zähler/Nenner 1..20
const a = ri(1, 20);
const b = ri(1, 20);
const c = ri(1, 20);
const d = ri(1, 20);

// Operation wählen (Addition ODER Subtraktion). Wenn du nur Addition willst: const op = '+';
const ops = ['+','-'];
const op = ops[ri(0, ops.length - 1)];

// Auf gemeinsamen Nenner bringen
const denom = b * d;
const leftNum  = a * d;
const rightNum = c * b;

// Ergebnis-Zähler je nach Operation
const numRaw = (op === '+') ? (leftNum + rightNum) : (leftNum - rightNum);

// Kürzen
const g = gcd(numRaw, denom);
const num = numRaw / g;
const den = denom / g;

// Aufgabe (Eingabefeld + Algebrite-Prüfung)
const problem = `$\\dfrac{${a}}{${b}} ${op} \\dfrac{${c}}{${d}} = $ [[ ${num}/${den} ]]
@Algebrite.check(${num}/${den})`;

// Musterlösung mit sauberen Zeilenumbrüchen
const alignSolution = `$$
\\begin{align*}
\\dfrac{${a}}{${b}} ${op} \\dfrac{${c}}{${d}}
&= \\dfrac{${a}\\cdot ${d}}{${b}\\cdot ${d}} ${op} \\dfrac{${c}\\cdot ${b}}{${d}\\cdot ${b}} \\\\[6pt]
&= \\dfrac{${leftNum}}{${denom}} ${op} \\dfrac{${rightNum}}{${denom}} \\\\[6pt]
&= \\dfrac{${leftNum} ${op} ${rightNum}}{${denom}} \\\\[6pt]
&= \\dfrac{${numRaw}}{${denom}} \\\\[6pt]
&= \\dfrac{${num}}{${den}}
\\end{align*}
$$`;

// >>> Lösung als versteckter Block mit Button-Text "Lösung anzeigen"
const solution =
`<!-- data-solution-button="Lösung anzeigen" -->
***************
${alignSolution}
***************`;

// Ausgabe im LiaScript-Format
"LIASCRIPT:\n" + problem + "\n\n" + solution;
</script>














# Bruch Subtraktion

















# Bruch Multiplikation

















# Bruch Division





























# Koordinatensystem








# Downloadbalken



> Klicke/ziehe den Balken auf **77 %** und drücke **Prüfen**.

<div>
  <progress id="prog77" value="0" max="100" style="width:33%; transform:scale(3); position:relative; left:calc(100% / 3); margin-bottom:1rem">0%</progress>
</div>

<script>
(() => {
  const bar = document.getElementById('prog77');
  if (!bar) return;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  function setValue(val) {
    const max = Number(bar.max) || 100;
    const v = clamp(Math.round(val), 0, max);
    bar.value = v;
    bar.textContent = v + '%'; // Fallback-Anzeige
  }
  function handlePointer(clientX) {
    const rect = bar.getBoundingClientRect();
    const frac = (clientX - rect.left) / rect.width;
    setValue(frac * (bar.max || 100));
  }

  // Klick & Drag
  bar.addEventListener('click', (e) => handlePointer(e.clientX));
  let dragging = false;
  bar.addEventListener('mousedown', (e) => { dragging = true; handlePointer(e.clientX); e.preventDefault(); });
  window.addEventListener('mousemove', (e) => { if (dragging) handlePointer(e.clientX); });
  window.addEventListener('mouseup',   () => { dragging = false; });

  // Anfangswert
  setValue(bar.value || 0);
})();
</script>

<!-- data-solution-button="3" -->
```js
(() => {
  const bar = document.getElementById('prog77');
  return !!bar && Number(bar.value) === 77;
})()
```








