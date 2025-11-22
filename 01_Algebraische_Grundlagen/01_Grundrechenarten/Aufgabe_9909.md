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


tags: Division, leicht, niedrig, Bestimmen, Random

comment: Hier werden zufällige Divisionsaufgaben mit einstelligem Divisor generiert. 

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->




# Zufallsaufgaben - Division mit einstelligem Divisor



**Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.



<script input="submit" output="Divisionsaufgabe" default="Neue Aufgabe" modify="false">
  if (!window._div_tick) { 
    window._div_tick = 1; 
  } else { 
    window._div_tick++; 
  }
  "Neue Aufgabe " + window._div_tick
</script>

---

<script modify="false">
// @input(`Divisionsaufgabe`)

// Zufall: einstelliger Divisor 2–9, vierstelliger Quotient 1000–9999
const ri = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const d = ri(2, 9);          // Divisor
const q = ri(1000, 9999);    // Quotient
const N = d * q;             // Dividend, damit die Division aufgeht

// Aufgabe: Dividend : Divisor = Quotient (Eingabe im Feld)
const problem = `$${N} : ${d} = $ [[ ${q} ]]`;

// Schriftliche Division mit \hspace, farbig
function longDivisionAlign(N, d, q) {
  const digits = String(N).split('').map(x => parseInt(x, 10));
  const L      = digits.length;
  const colors = ["blue", "green", "orange", "red", "purple", "brown"];
  let colorIndex = 0;

  const lines = [];

  // Kopfzeile
  lines.push(` ${N}:${d} &= ${q} \\\\`);

  // erste Teilzahl >= d bestimmen
  let i = 0;
  let partial = digits[0];
  while (partial < d && i + 1 < L) {
    i++;
    partial = partial * 10 + digits[i];
  }

  let end        = i;        // rechter Index der aktuellen Ziffern-Gruppe
  let startBlock = 0;        // linker Index der aktuellen Ziffern-Gruppe
  const hs       = '\\hspace{0.5em}';                // „Spalten-Schritt“
  const baseHS   = '\\hspace{0.85em}\\hspace{0.5em}'; // zusätzliche globale Einrückung

  while (true) {
    const qDigit = Math.floor(partial / d);
    const sub    = qDigit * d;
    const rem    = partial - sub;

    const col = colors[colorIndex % colors.length];
    colorIndex++;

    const subStr     = String(sub);
    const subLen     = subStr.length;
    const blockWidth = end - startBlock + 1;  // wie viele Stellen bilden den aktuellen Block?

    // viele \hspace für frühe Schritte, wenige für späte
    const offsetSub = Math.max(0, (L - 1) - end);

    // internes \hspace, wenn Subtrahend kürzer als Block (z.B. 3 unter "03")
    const needsInnerHs = subLen < blockWidth;
    const innerHs      = needsInnerHs ? hs : '';

    const coloredSub = `\\textcolor{${col}}{${subStr}}`;
    const subExpr    = `\\underline{-${innerHs}${coloredSub}}`;

    // Subtraktion: Zahl, dann variable \hspace, dann Basis-\hspace, dann &
    const lineSub =
      ' ' +
      subExpr +
      hs.repeat(offsetSub) +
      baseHS +
      ' & \\\\';
    lines.push(lineSub);

    if (end + 1 < L) {
      // Es gibt noch eine Ziffer zum Runterholen
      const nextIndex = end + 1;
      const nextDigit = digits[nextIndex];

      const topStr = String(rem) + String(nextDigit);  // z.B. "0" + "3" = "03"
      const k      = nextIndex;

      const offsetTop = Math.max(0, (L - 1) - k);

      const lineTop =
        ' ' +
        `${topStr}` +
        hs.repeat(offsetTop) +
        baseHS +
        ' & \\\\';
      lines.push(lineTop);

      partial    = parseInt(topStr, 10);
      // nächster Block beginnt eine Stelle weiter rechts
      startBlock = startBlock + 1;
      end        = k;
    } else {
      // letzter Rest
      const remStr    = String(rem);
      const offsetRem = Math.max(0, (L - 1) - end);

      const lineRem =
        ' ' +
        `${remStr}` +
        hs.repeat(offsetRem) +
        baseHS +
        ' & \\\\';
      lines.push(lineRem);
      break;
    }
  }

  return `$$
\\begin{align*}
${lines.join('\n')}
\\end{align*}
$$`;
}

// Versteckte Lösung (wie bei deinem Multiplikationsbeispiel)
let solution = '***************';
solution += '\n' + longDivisionAlign(N, d, q) + '\n';
solution += '***************';

// Ausgabe für LiaScript
"LIASCRIPT:\n" + problem + "\n" + solution;
</script>




