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












tags: Multiplikation, leicht, niedrig, Bestimmen, Random

comment: Hier werden zufällige Multiplikationsaufgaben mit dreistelligen Faktoren generiert. 

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->




# Zufallsaufgaben - Multiplikation mit dreistelligen Faktoren



**Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.



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
const problem = `$${A} \\cdot ${B} = $ [[ ${P} ]] @canvas`;

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


