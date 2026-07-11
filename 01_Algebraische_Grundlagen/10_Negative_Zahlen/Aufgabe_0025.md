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









tags: Negative Zahlen, Multiplikation, Division, schwer, niedrig, Bestimme

comment: Eine Rechenmauer für die Multiplikation mit negativen Zahlen. Fülle alle Felder aus.

author: Martin Lommatzsch

-->




# Rechenmauer mit Vorzeichen der Multiplikation

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
**Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.





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
                           |    " -648 "     |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  | " [[  18   ]] " |     " -36 "     |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         | " [[  -3   ]] " |     " -6 "      | " [[   6   ]] " |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |                 |
| " [[  -1   ]] " |      " 3 "      | " [[   -2  ]] " | " [[   -3  ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+
```
@Algebrite.check([ 18; -3; 6; -1; -2; -3 ])


@ADetails(1=BE; Negative Zahlen, Multiplikation)




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
                           | " [[ -384  ]] " |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  |      " 24 "     | " [[  -16  ]] " |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         |      " 6 "      | " [[  4    ]] " |      " -4 "     |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |                 |
| " [[   -6  ]] " |      " -1 "     | " [[  -4   ]] " | " [[   -1  ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+
```
@Algebrite.check([ -384; -16; 4; -6; -4; -1 ])


@ADetails(1=BE; Negative Zahlen, Multiplikation)










