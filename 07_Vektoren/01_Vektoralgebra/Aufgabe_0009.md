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

__$a)\;\;$__ $P\left( 1 | 4 | 5 \right) \;\;\wedge\;\; Q\left( 3 | 1 | 1 \right)$  \


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $ d = $ [[  5,385  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} 3 \\ 1 \\ 1 \end{array}\right)  - \left(\begin{array}{c} 1 \\ 4 \\ 5 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 2 \\ -3 \\ -4 \end{array}\right) \right| \\
   &= \sqrt{2^2+3^2+4^2} \\
   &= \sqrt{29} \\
   &\approx 5,385 \\
 \end{align*}
$$
***************

@ADetails(1=BE; Vektoren, Länge, Runden)



</div>
<div class="flex-child">

__$b)\;\;$__ $P\left( 6 | 3 | -2 \right) \;\;\wedge\;\; Q\left( -2 | 3 | -4 \right)$  \


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $ d = $ [[  8,246  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -2 \\ 3 \\ -4 \end{array}\right)  - \left(\begin{array}{c} 6 \\ 3 \\ -2 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -8 \\ 0 \\ -2  \end{array}\right) \right| \\
   &= \sqrt{8^2+0^2+2^2} \\
   &= \sqrt{68} \\
   &\approx 8,246 \\
 \end{align*}
$$
***************

@ADetails(1=BE; Vektoren, Länge, Runden)



</div>
<div class="flex-child">

__$c)\;\;$__ $P\left( 5 | -3 | -2 \right) \;\;\wedge\;\; Q\left( -7 | 2 | -5 \right)$  \


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $ d = $ [[  13,342  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{QP} \right| & = \left| \left(\begin{array}{c} 5 \\ -3 \\ -2 \end{array}\right)  - \left(\begin{array}{c} -7 \\ 2 \\ -5 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 12 \\ -5 \\ 3 \end{array}\right) \right| \\
   &= \sqrt{12^2+5^2+3^2} \\
   &= \sqrt{178} \\
   &\approx 13,342 \\
 \end{align*}
$$
***************

@ADetails(1=BE; Vektoren, Länge, Runden)



</div>
<div class="flex-child">

__$d)\;\;$__ $P\left( -6 | 3 | 1,5 \right) \;\;\wedge\;\; Q\left( -3 | 2 | 4 \right)$  \


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $ d = $ [[  4,387  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -3 \\ 2 \\ 4 \end{array}\right)  - \left(\begin{array}{c} -6 \\ 3 \\ 1,5 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 3 \\ -1 \\ 2,5 \end{array}\right) \right| \\
   &= \sqrt{3^2+1^2+2,5^2} \\
   &= \sqrt{19,25} \\
   &\approx 4,387 \\
 \end{align*}
$$
***************

@ADetails(1=BE; Vektoren, Länge, Runden)



</div>
</section>







