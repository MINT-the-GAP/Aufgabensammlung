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











tags: Vektoren, Abstand, negative Zahlen, Wurzeln, Dezimalzahlen, Potenzen, Runden, mittel, sehr niedrig, Berechne

comment: Wie weit liegen die Punkte im dreidimensionalen Raum auseinander?

author: Martin Lommatzsch

-->




# Abstand von Punkten


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** den Abstand zwischen den gegebenen Punkten. Gib die Werte falls nötig gerundet auf drei Nachkommastellen an.


<section class="dynFlex">
<div class="flex-child">

__$a)\;\;$__ $P\left( -6 | 1 | -1 \right) \;\;\wedge\;\; Q\left( 2 | -5 | 1 \right)$  \

 $ d = $ [[   11    ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} 2 \\ -5 \\ 1 \end{array}\right)  - \left(\begin{array}{c} -6 \\ 1 \\ -1 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 8 \\ -6 \\ -2 \end{array}\right) \right| \\
   &= \sqrt{8^2+6^2+2^2} \\
   &= \sqrt{121} \\
   &= 11 \\
 \end{align*}
$$
***************



</div>
<div class="flex-child">

__$b)\;\;$__ $P\left( 3 | 6 | 2 \right) \;\;\wedge\;\; Q\left( -5 | 1 | -3 \right)$  \

 $ d = $ [[ 11,446  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -5 \\ 1 \\ -3 \end{array}\right)  - \left(\begin{array}{c} 3 \\ 6 \\ 2 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -8 \\ -5 \\ -5  \end{array}\right) \right| \\
   &= \sqrt{8^2+5^2+5^2} \\
   &= \sqrt{131} \\
   &\approx 11,446 \\
 \end{align*}
$$
***************



</div>
<div class="flex-child">

__$c)\;\;$__ $P\left( 7 | 4 | -8 \right) \;\;\wedge\;\; Q\left( 1 | -1 | -6 \right)$  \

 $ d = $ [[  8,062   ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{QP} \right| & = \left| \left(\begin{array}{c} 7 \\ 4 \\ -8 \end{array}\right)  - \left(\begin{array}{c} 1 \\ -1 \\ -6 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 6 \\ 5 \\ -2 \end{array}\right) \right| \\
   &= \sqrt{6^2+5^2+2^2} \\
   &= \sqrt{65} \\
   &\approx 8,062 \\
 \end{align*}
$$
***************



</div>
<div class="flex-child">

__$d)\;\;$__ $P\left( 5 | -5 | -5 \right) \;\;\wedge\;\; Q\left( -3 | -7 | 7 \right)$  \

 $ d = $ [[  14,560 ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -3 \\ -7 \\ 7 \end{array}\right)  - \left(\begin{array}{c} 5 \\ -5 \\ -5 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -8 \\ -2 \\ 12 \end{array}\right) \right| \\
   &= \sqrt{8^2+2^2+12^2} \\
   &= \sqrt{212} \\
   &\approx 14,560 \\
 \end{align*}
$$
***************



</div>
</section>







