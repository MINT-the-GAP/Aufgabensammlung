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












tags: Runden, schwer, sehr niedrig, Angeben

comment: Was ist die größte beziehungsweise kleinste Zahl, die zur gerunden Zahl führt?

author: Martin Lommatzsch

-->




# Grenzen des Runden

Gegeben sei eine gerundete Zahl. **Gib** jeweils die kleinste und die größte Zahl **an**, die nach dem Runden zur gegebenen Zahl wird.


<!-- data-type="none"
data-sortable="false" -->
| gerundete Zahl | wurde gerundet auf | kleinste Zahl |  größte Zahl  |
|  :----------:  | :-----------------: | :-----------: |  :---------:  |
|    $445000$    |      Tausender      | [[ 444500  ]] @canvas | [[ 445499  ]] @canvas |
|      $1700$    |      Hunderter      | [[   1650  ]] @canvas | [[ 1749    ]] @canvas |
|    $5000000$   |      Millionen      | [[ 4500000 ]] @canvas | [[ 5499999 ]] @canvas |
|      $1970$    |        Zehner       | [[ 1965    ]] @canvas | [[ 1974    ]] @canvas |
|    $780000$    |    Zehntausender    | [[ 775000  ]] @canvas | [[ 784999  ]] @canvas |

