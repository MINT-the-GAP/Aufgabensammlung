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
|  $y$  |  $f$  |  $m$  | $y-f:m$ | $(y+m)\cdot f$ | $y:f-m$ |
| :---: | :---: | :---: | :-----: | :-------------: | :-----: |
| $-\dfrac{3}{5}$ | $0{,}4$ | $-0{,}5$ | [[ 1/5 ]] @canvas | [[ -11/25 ]] @canvas | [[ -1 ]] @canvas |
| $1{,}25$ | $-\dfrac{2}{3}$ | $0{,}5$ | [[ 31/12 ]] @canvas | [[ -7/6 ]] @canvas | [[ -19/8 ]] @canvas |
| $-1{,}2$ | $\dfrac{3}{4}$ | $-0{,}25$ | [[ 9/5 ]] @canvas | [[ -87/80 ]] @canvas | [[ -27/20 ]] @canvas |
| $\dfrac{7}{8}$ | $-0{,}5$ | $0{,}75$ | [[ 37/24 ]] @canvas | [[ -13/16 ]] @canvas | [[ -5/2 ]] @canvas |
@Algebrite.check([ 1/5; -11/25; -1; 31/12; -7/6; -19/8; 9/5; -87/80; -27/20; 37/24; -13/16; -5/2 ])







@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung, Dezimalzahlen, Negative Zahlen)