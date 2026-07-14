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








tags: Tabelle, Parameter, Bruchrechnung, Negativen Zahlen, Vorrangsregeln, leicht, normal, Angeben

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
|  $v$  |  $c$  |  $j$  | $v-c\cdot j$ | $(v+j):c$ | $v:c+j$ |
| :---: | :---: | :---: | :-----------: | :-------: | :-----: |
| $-\dfrac{3}{4}$ | $\dfrac{1}{2}$ | $-\dfrac{2}{3}$ | [[ -5/12 ]] @canvas | [[ -17/6 ]] @canvas | [[ -13/6 ]] @canvas |
| $\dfrac{5}{6}$ | $-\dfrac{2}{5}$ | $\dfrac{1}{3}$ | [[ 29/30 ]] @canvas | [[ -35/12 ]] @canvas | [[ -7/4 ]] @canvas |
| $-\dfrac{1}{2}$ | $-\dfrac{3}{4}$ | $\dfrac{2}{5}$ | [[ -1/5 ]] @canvas | [[ 2/15 ]] @canvas | [[ 16/15 ]] @canvas |
| $\dfrac{3}{5}$ | $\dfrac{2}{3}$ | $-\dfrac{1}{4}$ | [[ 23/30 ]] @canvas | [[ 21/40 ]] @canvas | [[ 13/20 ]] @canvas |
@Algebrite.check([ -5/12; -17/6; -13/6; 29/30; -35/12; -7/4; -1/5; 2/15; 16/15; 23/30; 21/40; 13/20 ])







@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung, Negative Zahlen)