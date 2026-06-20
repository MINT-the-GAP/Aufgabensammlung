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








tags: Tabelle, Parameter, Bruchrechnung, Vorrangsregeln, leicht, niedrig, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Brüchen

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
|  $a$  |  $b$  |  $c$  | $a+b\cdot c$ | $(a+b):c$ | $a:b+c$ |
| :---: | :---: | :---: | :-----------: | :-------: | :-----: |
| $\dfrac{1}{2}$ | $\dfrac{1}{3}$ | $\dfrac{3}{4}$ | [[ 3/4 ]] @canvas | [[ 10/9 ]] @canvas | [[ 9/4 ]] @canvas |
| $\dfrac{2}{3}$ | $\dfrac{1}{4}$ | $\dfrac{2}{5}$ | [[ 23/30 ]] @canvas | [[ 55/24 ]] @canvas | [[ 46/15 ]] @canvas |
| $\dfrac{3}{4}$ | $\dfrac{2}{5}$ | $\dfrac{1}{2}$ | [[ 19/20 ]] @canvas | [[ 23/10 ]] @canvas | [[ 19/8 ]] @canvas |
| $\dfrac{1}{3}$ | $\dfrac{3}{5}$ | $\dfrac{5}{6}$ | [[ 5/6 ]] @canvas | [[ 28/25 ]] @canvas | [[ 25/18 ]] @canvas |
@Algebrite.check([ 3/4; 10/9; 9/4; 23/30; 55/24; 46/15; 19/20; 23/10; 19/8; 5/6; 28/25; 25/18 ])




@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung)