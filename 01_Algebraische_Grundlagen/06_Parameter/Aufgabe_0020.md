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
|  $m$  |  $q$  |  $b$  | $m+q\cdot b$ | $(m-q):b$ | $m:b+q$ |
| :---: | :---: | :---: | :-----------: | :-------: | :-----: |
| $1{,}2$ | $0{,}4$ | $0{,}5$ | [[ 1,4 ]] @canvas | [[ 1,6 ]] @canvas | [[ 2,8 ]] @canvas |
| $2{,}5$ | $0{,}75$ | $0{,}5$ | [[ 2,875 ]] @canvas | [[ 3,5 ]] @canvas | [[ 5,75 ]] @canvas |
| $1{,}8$ | $0{,}6$ | $0{,}3$ | [[ 1,98 ]] @canvas | [[ 4 ]] @canvas | [[ 6,6 ]] @canvas |
| $3{,}2$ | $1{,}4$ | $0{,}8$ | [[ 4,32 ]] @canvas | [[ 2,25 ]] @canvas | [[ 5,4 ]] @canvas |
@Algebrite.check([ 1.4; 1.6; 2.8; 2.875; 3.5; 5.75; 1.98; 4; 6.6; 4.32; 2.25; 5.4 ])







@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Dezimalzahlen)