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








tags: Tabelle, Parameter, Äquivalenzumformung, Negative Zahlen, mittel, normal, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Äquivalenzumformung und negativen Zahlen

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
|  $x$  |  $q$  |  $s$  | $x-q\cdot$ [[ s ]] | $(x+$ [[ 3 ]] $\cdot s):q$ | $x:s+$ [[ 2 ]] $\cdot q$ |
| :---: | :---: | :---: | :-----------------: | :-------------------------: | :-------------------------: |
| $-24$ | $-3$ | $3$ | [[ -15 ]] @canvas | [[ 5 ]] @canvas | [[ -14 ]] @canvas |
| [[ -14 ]] @canvas | $4$ | $-2$ | $-6$ | [[ -5 ]] @canvas | [[ 15 ]] @canvas |
| $18$ | [[ -3 ]] @canvas | $-3$ | [[ 9 ]] @canvas | [[ -3 ]] @canvas | $-12$ |
| $-30$ | $5$ | [[ -5 ]] @canvas | [[ -5 ]] @canvas | $-9$ | [[ 16 ]] @canvas |
@Algebrite.check([ s; 3; 2; -15; 5; -14; -14; -5; 15; -3; 9; -3; -5; -5; 16 ])




@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Negative Zahlen, Äquivalenzumformung)