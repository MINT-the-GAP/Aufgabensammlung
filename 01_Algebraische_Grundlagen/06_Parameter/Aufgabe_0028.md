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








tags: Tabelle, Parameter, Dezimalzahlen, Negative Zahlen, Bruchrechnung, Vorrangsregeln, leicht, hoch, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit rationalen Zahlen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $j$  |  $b$  |  $t$  | $j\cdot b-t$ | $(j-t):b$ | $j+b:t$ |
| :---: | :---: | :---: | :-----------: | :-------: | :-----: |
| $-\dfrac{2}{3}$ | $0{,}75$ | $-0{,}5$ | [[ 0 ]] @canvas | [[ -2/9 ]] @canvas | [[ -13/6 ]] @canvas |
| $1{,}2$ | $-\dfrac{3}{4}$ | $0{,}4$ | [[ -1,3 ]] @canvas | [[ -16/15 ]] @canvas | [[ -0,675 ]] @canvas |
| $-1{,}5$ | $\dfrac{2}{5}$ | $-0{,}25$ | [[ -0,35 ]] @canvas | [[ -25/8 ]] @canvas | [[ -3,1 ]] @canvas |
| $\dfrac{7}{8}$ | $-0{,}6$ | $0{,}75$ | [[ -1,275 ]] @canvas | [[ -5/24 ]] @canvas | [[ 0,075 ]] @canvas |
@Algebrite.check([ 0; -2/9; -13/6; -13/10; -16/15; -27/40; -7/20; -25/8; -31/10; -51/40; -5/24; 3/40 ])







@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung, Dezimalzahlen, Negative Zahlen)