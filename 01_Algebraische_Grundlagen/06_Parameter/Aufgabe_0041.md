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








tags: Tabelle, Parameter, Äquivalenzumformung, Dezimalzahlen, schwer, normal, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Äquivalenzumformung und Dezimalzahlen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $m$  |  $e$  |  $u$  | $m$ [[($+$)|$-$|$\cdot$|$:$]] $e\cdot$ [[ u ]] | $(m$ [[$+$|($-$)|$\cdot$|$:$]] [[ 0,5 ]] $\cdot u):e$ | $m:$ [[ u ]] [[$+$|$-$|($\cdot$)|$:$]] $e$ |
| :---: | :---: | :---: | :-------------------: | :-----------------: | :-------------------------: |
| $2{,}2$ | $0{,}5$ | $0{,}4$ | [[ 2,4 ]] @canvas | [[ 4,0 ]] @canvas | [[ 2,75 ]] @canvas |
| [[ 2,0 ]] @canvas | $0{,}4$ | $0{,}8$ | $2{,}32$ | [[ 4,0 ]] @canvas | [[ 1,0 ]] @canvas |
| $3{,}0$ | [[ 0,5 ]] @canvas | $0{,}6$ | [[ 3,3 ]] @canvas | [[ 5,4 ]] @canvas | $2{,}5$ |
| $3{,}6$ | $0{,}8$ | [[ 0,8 ]] @canvas | [[ 4,24 ]] @canvas | $4{,}0$ | [[ 3,6 ]] @canvas |
@Algebrite.check([ u; 0.5; u; 2.4; 4.0; 2.75; 2.0; 4.0; 1.0; 0.5; 3.3; 5.4; 0.8; 4.24; 3.6 ])




@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Dezimalzahlen, Äquivalenzumformung)