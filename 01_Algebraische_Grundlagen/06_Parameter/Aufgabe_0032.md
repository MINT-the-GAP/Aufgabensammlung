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


@style
input {
    text-align: center;
}
@end








tags: Tabelle, Parameter, Dezimalzahlen, Vorrangsregeln, Periodizitäten, leicht, niedrig, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit positiven Dezimalzahlen und Periodizitäten

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
|  $r$  |  $k$  |  $v$  | $r\cdot v+k$ | $(r+k)\cdot v$ | $r:k\cdot v$ |
| :---: | :---: | :---: | :-----------: | :-------------: | :-----------: |
| $0{,}\overline{6}$ | $0{,}4$ | $1{,}5$ | [[ 1,4 ]] @canvas | [[ 1,6 ]] @canvas | [[ 2,5 ]] @canvas |
| $1{,}\overline{3}$ | $0{,}8$ | $0{,}75$ | [[ 1,8 ]] @canvas | [[ 1,6 ]] @canvas | [[ 1,25 ]] @canvas |
| $0{,}\overline{8}$ | $0{,}4$ | $4{,}5$ | [[ 4,4 ]] @canvas | [[ 5,8 ]] @canvas | [[ 10 ]] @canvas |
| $1{,}\overline{6}$ | $0{,}5$ | $0{,}6$ | [[ 1,5 ]] @canvas | [[ 1,3 ]] @canvas | [[ 2 ]] @canvas |
@Algebrite.check([ 1.4; 1.6; 2.5; 1.8; 1.6; 1.25; 4.4; 5.8; 10; 1.5; 1.3; 2 ])




@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Dezimalzahlen, Periodizitäten)