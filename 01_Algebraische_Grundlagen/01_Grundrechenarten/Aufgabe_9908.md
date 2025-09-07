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


