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
|  $w$  |  $h$  |  $q$  | $w:h+q$ | $(w-q)\cdot h$ | $w-h:q$ |
| :---: | :---: | :---: | :-----: | :-------------: | :-----: |
| $-\dfrac{3}{4}$ | $0{,}5$ | $-0{,}25$ | [[ -1,75 ]] @canvas | [[ -1/4 ]] @canvas | [[ 1,25 ]] @canvas |
| $1{,}2$ | $-\dfrac{2}{3}$ | $0{,}4$ | [[ -1,4 ]] @canvas | [[ -8/15 ]] @canvas | [[ 43/15 ]] @canvas |
| $-1{,}5$ | $\dfrac{3}{4}$ | $-0{,}6$ | [[ -2,6 ]] @canvas | [[ -27/40 ]] @canvas | [[ -0,25 ]] @canvas |
| $\dfrac{7}{8}$ | $-0{,}5$ | $0{,}25$ | [[ -1,5 ]] @canvas | [[ -5/16 ]] @canvas | [[ 2,875 ]] @canvas |
@Algebrite.check([ -7/4; -1/4; 5/4; -7/5; -8/15; 43/15; -13/5; -27/40; -1/4; -3/2; -5/16; 23/8 ])







@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung, Dezimalzahlen, Negative Zahlen)