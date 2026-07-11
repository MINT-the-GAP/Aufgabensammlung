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








tags: Tabelle, Parameter, Dezimalzahlen, Negative Zahlen, Vorrangsregeln, Periodizitäten, mittel, normal, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Dezimalzahlen und Periodizitäten

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $g$  |  $t$  |  $s$  | $g\cdot s+t$ | $(g+t)\cdot s$ | $g\cdot s-t$ |
| :---: | :---: | :---: | :-----------: | :-------------: | :-----------: |
| $0{,}\overline{6}$ | $-0{,}4$ | $3{,}0$ | [[ 1,6 ]] @canvas | [[ 0,8 ]] @canvas | [[ 2,4 ]] @canvas |
| $-1{,}\overline{3}$ | $0{,}25$ | $6{,}0$ | [[ -7,75 ]] @canvas | [[ -6,5 ]] @canvas | [[ -8,25 ]] @canvas |
| $0{,}\overline{8}$ | $-0{,}5$ | $9{,}0$ | [[ 7,5 ]] @canvas | [[ 3,5 ]] @canvas | [[ 8,5 ]] @canvas |
| $-0{,}\overline{5}$ | $1{,}2$ | $9{,}0$ | [[ -3,8 ]] @canvas | [[ 5,8 ]] @canvas | [[ -6,2 ]] @canvas |
@Algebrite.check([ 1.6; 0.8; 2.4; -7.75; -6.5; -8.25; 7.5; 3.5; 8.5; -3.8; 5.8; -6.2 ])




@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Dezimalzahlen, Negative Zahlen, Periodizitäten)