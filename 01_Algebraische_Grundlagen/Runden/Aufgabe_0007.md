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












tags: Runden, mittel, sehr niedrig, Angeben

comment: Runde eine natürliche Zahl auf unterschiedliche Stellen in einer Tabelle.

author: Martin Lommatzsch

-->




# Runden in Tabellen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Gib** den auf die angegebene Stelle gerundeten Wert in den freien Tabellenfeldern **an**.



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none"
data-sortable="false" -->
|   Zahl    |    Zehner     |   Hunderter    |   Tausender    |   Zehntausender    |   Hunderttausender   |
|  :-----:  |    :-----:    |   :-----:      |     :-----:    |     :-----:        |       :-----:        |
| $548062$  | [[ 548060  ]]  |  [[ 548100  ]]  | [[ 548000  ]]   |    [[ 550000  ]]    |     [[ 500000  ]]     |
| $48991$   | [[ 48990   ]]  |  [[ 49000   ]]  | [[ 49000   ]]   |    [[ 50000   ]]    |     [[   0     ]]     |
| $5184612$ | [[ 5184610 ]]  |  [[ 5184600 ]]  | [[ 5185000 ]]   |    [[ 5180000 ]]    |     [[ 5200000 ]]     |
|  $84151$  | [[ 84150   ]]  |  [[ 84200   ]]  | [[ 84000   ]]   |    [[ 80000   ]]    |     [[ 100000  ]]     |
| $2504468$ | [[ 2504470 ]]  |  [[ 2504500 ]]  | [[ 2504000 ]]   |    [[ 2500000 ]]    |     [[ 2500000 ]]     |



@ADetails(1=BE; Runden)