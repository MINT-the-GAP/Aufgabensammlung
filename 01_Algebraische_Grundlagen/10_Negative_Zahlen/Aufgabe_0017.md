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









tags: Negative Zahlen, Addition, Subtraktion, Subtraktion, mittel, niedrig, Bestimme

comment: Eine Rechenmauer für die Addition mit negativen Zahlen. Fülle alle Felder aus.

author: Martin Lommatzsch

-->




# Rechenmauer mit Vorzeichen der Addition

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
style="max-width: 1200px" -->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[   8   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[   2   ]] " |      " 6 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " -12 "    |      " 14 "     | " [[  -8   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+
```
@Algebrite.check([ 8; 2; -8 ])

@ADetails(1=BE; Negative Zahlen, Addition, Subtraktion)



__$b)\;\;$__





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
style="max-width: 1200px" -->
``` ascii
                  +-----------------+
                  |                 |
                  |     " -16 "     |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -42  ]] " |     " 26 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
| " [[  -23  ]] " | " [[  -19  ]] " |      " 45 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+
```
@Algebrite.check([ -42; -23; -19 ])

@ADetails(1=BE; Negative Zahlen, Addition, Subtraktion)









