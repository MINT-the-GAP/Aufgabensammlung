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








tags: Tabelle, Parameter, Dezimalzahlen, Negative Zahlen, Bruchrechnung, Vorrangsregeln, Periodizitäten, mittel, hoch, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit rationalen Zahlen und Periodizitäten

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $w$  |  $c$  |  $j$  | $w+c:j$ | $(w-j)\cdot c$ | $w\cdot j-c$ |
| :---: | :---: | :---: | :-----: | :-------------: | :-----------: |
| $0{,}\overline{6}$ | $\dfrac{1}{3}$ | $0{,}5$ | [[ 4/3 ]] @canvas | [[ 1/18 ]] @canvas | [[ 0 ]] @canvas |
| $1{,}\overline{3}$ | $0{,}\overline{6}$ | $\dfrac{1}{4}$ | [[ 4 ]] @canvas | [[ 13/18 ]] @canvas | [[ -1/3 ]] @canvas |
| $-0{,}\overline{6}$ | $0{,}\overline{3}$ | $-\dfrac{1}{2}$ | [[ -4/3 ]] @canvas | [[ -1/18 ]] @canvas | [[ 0 ]] @canvas |
| $0{,}\overline{8}$ | $-0{,}\overline{3}$ | $\dfrac{1}{2}$ | [[ 2/9 ]] @canvas | [[ -7/54 ]] @canvas | [[ 7/9 ]] @canvas |
@Algebrite.check([ 4/3; 1/18; 0; 4; 13/18; -1/3; -4/3; -1/18; 0; 2/9; -7/54; 7/9 ])




@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung, Dezimalzahlen, Negative Zahlen, Periodizitäten)