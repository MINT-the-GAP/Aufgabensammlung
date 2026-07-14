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








tags: Tabelle, Parameter, Äquivalenzumformung, schwer, niedrig, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Äquivalenzumformung

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->

|  $g$  |  $m$  |  $w$  | $g$ [[($+$)|$-$|$\cdot$|$:$]] $m\cdot$ [[ w ]] | $(g$ [[$+$|($-$)|$\cdot$|$:$]] [[ 2 ]] $\cdot m):w$ | $g:$ [[ m ]] [[$+$|$-$|($\cdot$)|$:$]] $w$ |
| :---: | :---: | :---: | :-------: | :--------------: | :----------------: |
| $30$ | $5$ | $4$ | [[ 50 ]] @canvas | [[ 5 ]] @canvas | [[ 24 ]] @canvas |
| [[ 42 ]] @canvas | $6$ | $5$ | $72$ | [[ 6 ]] @canvas | [[ 35 ]] @canvas |
| $48$ | [[ 8 ]] @canvas | $4$ | [[ 80 ]] @canvas | [[ 8 ]] @canvas | $24$ |
| $54$ | $9$ | [[ 6 ]] @canvas | [[ 108 ]] @canvas | $6$ | [[ 36 ]] @canvas |
@Algebrite.check([ w; 2; m; 50; 5; 24; 42; 6; 35; 8; 80; 8; 6; 108; 36 ])






@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Äquivalenzumformung)