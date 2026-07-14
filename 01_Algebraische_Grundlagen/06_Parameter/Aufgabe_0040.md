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








tags: Tabelle, Parameter, Äquivalenzumformung, Dezimalzahlen, mittel, normal, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Äquivalenzumformung und Dezimalzahlen

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
|  $j$  |  $p$  |  $w$  | $j+p\cdot$ [[ w ]] | $(j+$ [[ 0,5 ]] $\cdot w):p$ | $j:w+$ [[ 1,5 ]] $\cdot p$ |
| :---: | :---: | :---: | :-----------------: | :-------------------------: | :-------------------------: |
| $1{,}2$ | $0{,}4$ | $0{,}8$ | [[ 1,52 ]] @canvas | [[ 4,0 ]] @canvas | [[ 2,1 ]] @canvas |
| [[ 1,8 ]] @canvas | $0{,}5$ | $1{,}0$ | $2{,}3$ | [[ 4,6 ]] @canvas | [[ 2,55 ]] @canvas |
| $2{,}4$ | [[ 0,4 ]] @canvas | $0{,}6$ | [[ 2,64 ]] @canvas | [[ 6,75 ]] @canvas | $4{,}6$ |
| $3{,}0$ | $0{,}6$ | [[ 1,2 ]] @canvas | [[ 3,72 ]] @canvas | $6{,}0$ | [[ 3,4 ]] @canvas |
@Algebrite.check([ w; 0.5; 1.5; 1.52; 4.0; 2.1; 1.8; 4.6; 2.55; 0.4; 2.64; 6.75; 1.2; 3.72; 3.4 ])




@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Dezimalzahlen, Äquivalenzumformung)