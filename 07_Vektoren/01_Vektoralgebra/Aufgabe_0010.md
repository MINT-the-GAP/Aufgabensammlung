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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
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

__$a)\;\;$__ $P\left( 3 | 2 | 4 \right) \;\;\wedge\;\; Q\left( 6 | 5 | 8 \right)$  \


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $ d = $ [[  5,831  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} 6 \\ 5 \\ 8 \end{array}\right)  - \left(\begin{array}{c} 3 \\ 2 \\ 4 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 3 \\ 3 \\ 4 \end{array}\right) \right| \\
   &= \sqrt{3^2+3^2+4^2} \\
   &= \sqrt{34} \\
   &\approx 5,831 \\
 \end{align*}
$$
***************

@ADetails(1=BE; Vektoren, Länge, Runden)



</div>
<div class="flex-child">

__$b)\;\;$__ $P\left( 9 | -2 | 1 \right) \;\;\wedge\;\; Q\left( 4 | -3 | 7 \right)$  \


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $ d = $ [[  7,874  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} 4 \\ -3 \\ 7 \end{array}\right)  - \left(\begin{array}{c} 9 \\ -2 \\ 1 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -5 \\ -1 \\ 6  \end{array}\right) \right| \\
   &= \sqrt{5^2+1^2+6^2} \\
   &= \sqrt{62} \\
   &\approx 7,874 \\
 \end{align*}
$$
***************

@ADetails(1=BE; Vektoren, Länge, Runden)



</div>
<div class="flex-child">

__$c)\;\;$__ $P\left( 4 | 1 | 6 \right) \;\;\wedge\;\; Q\left( 5 | -3 | 2 \right)$  \


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $ d = $ [[  5,745  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{QP} \right| & = \left| \left(\begin{array}{c} 4 \\ 1 \\ 6 \end{array}\right)  - \left(\begin{array}{c} 5 \\ -3 \\ 2 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -1 \\ 4 \\ 4 \end{array}\right) \right| \\
   &= \sqrt{1^2+4^2+4^2} \\
   &= \sqrt{33} \\
   &\approx 5,745 \\
 \end{align*}
$$
***************

@ADetails(1=BE; Vektoren, Länge, Runden)



</div>
<div class="flex-child">

__$d)\;\;$__ $P\left( 3 | -1 | -6 \right) \;\;\wedge\;\; Q\left( -4 | -5 | -4 \right)$  \


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $ d = $ [[  8,307  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -4 \\ -5 \\ -4 \end{array}\right)  - \left(\begin{array}{c} 3 \\ -1 \\ -6 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -7 \\ -4 \\ 2 \end{array}\right) \right| \\
   &= \sqrt{7^2+4^2+2^2} \\
   &= \sqrt{69} \\
   &\approx 8,307 \\
 \end{align*}
$$
***************

@ADetails(1=BE; Vektoren, Länge, Runden)



</div>
</section>







