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








tags: Tabelle, Parameter, Bruchrechnung, Dezimalzahlen, Vorrangsregeln, leicht, normal, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit negativen Brüchen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $g$  |  $p$  |  $w$  | $g-p\cdot w$ | $(g+p)\cdot w$ | $g:w+p$ |
| :---: | :---: | :---: | :-----------: | :-------------: | :-----: |
| $1{,}2$ | $\dfrac{1}{2}$ | $0{,}4$ | [[ 1 ]] @canvas | [[ 17/25 ]] @canvas | [[ 7/2 ]] @canvas |
| $\dfrac{3}{4}$ | $0{,}25$ | $\dfrac{1}{2}$ | [[ 5/8 ]] @canvas | [[ 1/2 ]] @canvas | [[ 7/4 ]] @canvas |
| $1{,}5$ | $\dfrac{2}{3}$ | $0{,}75$ | [[ 1 ]] @canvas | [[ 13/8 ]] @canvas | [[ 8/3 ]] @canvas |
| $\dfrac{5}{6}$ | $0{,}4$ | $0{,}5$ | [[ 19/30 ]] @canvas | [[ 37/60 ]] @canvas | [[ 31/15 ]] @canvas |
@Algebrite.check([ 1; 17/25; 7/2; 5/8; 1/2; 7/4; 1; 13/8; 8/3; 19/30; 37/60; 31/15 ])







@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung, Dezimalzahlen)