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
|    $6000000$   |  Hunderttausender   | [[ 5950000 ]] @canvas | [[ 6049999 ]] @canvas |
|      $100$     |        Zehner       | [[   95   ]] @canvas  | [[  104    ]] @canvas |
|    $794000$    |      Tausender      | [[ 793500  ]] @canvas | [[ 794499  ]] @canvas |
|      $0$       |      Tausender      | [[ 0       ]] @canvas | [[ 499     ]] @canvas |
|      $6400$    |      Hunderter      | [[ 6350    ]] @canvas | [[ 6449    ]] @canvas |

