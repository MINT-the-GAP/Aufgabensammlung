<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md









import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md


tags: Multiplikation, leicht, niedrig, Bestimmen, Random

comment: Hier werden zufällige Multiplikationsaufgaben mit einem einstelligen Faktor generiert. 

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->




# Zufallsaufgaben - Multiplikation mit einem einstelligen Faktor




**Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.



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


