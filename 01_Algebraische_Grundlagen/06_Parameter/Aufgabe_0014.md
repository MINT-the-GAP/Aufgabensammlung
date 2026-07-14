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
|  $m$  |  $q$  |  $e$  | $m+q\cdot e$ | $(m-e):q$ | $m:q-e$ |
| :---: | :---: | :---: | :-----------: | :-------: | :-----: |
| $-\dfrac{1}{2}$ | $\dfrac{2}{3}$ | $\dfrac{3}{4}$ | [[ 0 ]] @canvas | [[ -15/8 ]] @canvas | [[ -3/2 ]] @canvas |
| $\dfrac{3}{4}$ | $-\dfrac{1}{2}$ | $\dfrac{1}{3}$ | [[ 7/12 ]] @canvas | [[ -5/6 ]] @canvas | [[ -11/6 ]] @canvas |
| $-\dfrac{2}{3}$ | $\dfrac{3}{5}$ | $-\dfrac{1}{4}$ | [[ -49/60 ]] @canvas | [[ -25/36 ]] @canvas | [[ -31/36 ]] @canvas |
| $\dfrac{5}{6}$ | $-\dfrac{2}{5}$ | $-\dfrac{1}{2}$ | [[ 31/30 ]] @canvas | [[ -10/3 ]] @canvas | [[ -19/12 ]] @canvas |
@Algebrite.check([ 0; -15/8; -3/2; 7/12; -5/6; -11/6; -49/60; -25/36; -31/36; 31/30; -10/3; -19/12 ])








@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung, Negative Zahlen)