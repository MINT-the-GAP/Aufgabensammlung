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










tags: Negative Zahlen, Multiplikation, Division, sehr schwer, niedrig, Bestimme

comment: Eine Rechenmauer für die Multiplikation mit negativen Zahlen. Fülle alle Felder aus.

author: Martin Lommatzsch

-->




# Rechenmauer mit Vorzeichen der Multiplikation

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
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
                                    |  " -1638400 "   |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[ -2560 ]] " |    " 640 "      |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  | " [[  80   ]] " |     " -32 "     |  " [[ -20  ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |                 |
         | " [[  -10  ]] " |     " -8 "      | " [[   4   ]] " |     " -5 "      |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |                 |                 |
| " [[  -5   ]] " |      " 2 "      | " [[   -4  ]] " | " [[   -1  ]] " | " [[   5   ]] " |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
```
@Algebrite.check([ -2560; 80; -20; -10; 4; -5; -4; -1; 5 ])


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
                                    | " [[-80000 ]] " |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[ 1000  ]] " | " [[  -80  ]] " |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  |     " -50 "     |    " -20 "      | " [[   4   ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |                 |
         | " [[  -5   ]] " | " [[   10  ]] " |     " -2 "      | " [[  -2   ]] " |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |                 |                 |
| " [[  -1   ]] " |      " 5 "      | " [[   2   ]] " | " [[  -1   ]] " |      " 2 "      |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
```
@Algebrite.check([ -8000; 1000; -80; 4; -5; 10; -2; -1; 2; -1 ])


@ADetails(1=BE; Negative Zahlen, Multiplikation)









