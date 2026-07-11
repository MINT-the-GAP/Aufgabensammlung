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








tags: Tabelle, Parameter, Dezimalzahlen, Negative Zahlen, Vorrangsregeln, leicht, normal, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit negativen Dezimalzahlen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $u$  |  $d$  |  $p$  | $u-d\cdot p$ | $(u+p):d$ | $u:d+p$ |
| :---: | :---: | :---: | :-----------: | :-------: | :-----: |
| $-1{,}6$ | $0{,}8$ | $-0{,}5$ | [[ -1,2 ]] @canvas | [[ -2,625 ]] @canvas | [[ -2,5 ]] @canvas |
| $2{,}7$ | $-0{,}9$ | $0{,}9$ | [[ 3,51 ]] @canvas | [[ -4 ]] @canvas | [[ -2,1 ]] @canvas |
| $-2{,}25$ | $-0{,}75$ | $-0{,}75$ | [[ -2,8125 ]] @canvas | [[ 4 ]] @canvas | [[ 2,25 ]] @canvas |
| $3{,}2$ | $-0{,}4$ | $-0{,}8$ | [[ 2,88 ]] @canvas | [[ -6 ]] @canvas | [[ -8,8 ]] @canvas |
@Algebrite.check([ -1.2; -2.625; -2.5; 3.51; -4; -2.1; -2.8125; 4; 2.25; 2.88; -6; -8.8 ])









@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Dezimalzahlen, Negative Zahlen)