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


@style
input {
    text-align: center;
}
@end








tags: Tabelle, Parameter, Äquivalenzumformung, mittel, niedrig, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Äquivalenzumformung

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $z$  |  $b$  |  $f$  | $z+b\cdot$ [[ f ]] | $(z+$ [[ 2 ]] $\cdot b):f$ | $z:b+$ [[ 3 ]] $\cdot f$ |
| :---: | :---: | :---: | :-----------------: | :-----------------------: | :-----------------------: |
| $24$ | $4$ | $2$ | [[ 32 ]] @canvas | [[ 16 ]] @canvas | [[ 12 ]] @canvas |
| [[ 30 ]] @canvas | $5$ | $5$ | $55$ | [[ 8 ]] @canvas | [[ 21 ]] @canvas |
| $36$ | [[ 6 ]] @canvas | $3$ | [[ 54 ]] @canvas | [[ 16 ]] @canvas | $15$ |
| $40$ | $8$ | [[ 4 ]] @canvas | [[ 72 ]] @canvas | $14$ | [[ 17 ]] @canvas |
@Algebrite.check([ f; 2; 3; 32; 16; 12; 30; 8; 21; 6; 54; 16; 4; 72; 17 ])






@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Äquivalenzumformung)