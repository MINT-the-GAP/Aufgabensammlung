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


@style
input {
    text-align: center;
}
@end








tags: Tabelle, Parameter, Dezimalzahlen, Vorrangsregeln, leicht, niedrig, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Dezimalzahlen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $v$  |  $a$  |  $s$  | $v\cdot s+a$ | $(v-a):s$ | $v:s-a$ |
| :---: | :---: | :---: | :-----------: | :-------: | :-----: |
| $1{,}2$ | $0{,}3$ | $0{,}5$ | [[ 0,9 ]] @canvas | [[ 1,8 ]] @canvas | [[ 2,1 ]] @canvas |
| $2{,}4$ | $0{,}6$ | $0{,}8$ | [[ 2,52 ]] @canvas | [[ 2,25 ]] @canvas | [[ 2,4 ]] @canvas |
| $1{,}75$ | $0{,}25$ | $0{,}5$ | [[ 1,125 ]] @canvas | [[ 3 ]] @canvas | [[ 3,25 ]] @canvas |
| $3{,}6$ | $1{,}2$ | $0{,}6$ | [[ 3,36 ]] @canvas | [[ 4 ]] @canvas | [[ 4,8 ]] @canvas |
@Algebrite.check([ 0.9; 1.8; 2.1; 2.52; 2.25; 2.4; 1.125; 3; 3.25; 3.36; 4; 4.8 ])







@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Dezimalzahlen)