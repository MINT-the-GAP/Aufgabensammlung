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
|  $q$  |  $b$  |  $n$  | $q+b:n$ | $(q+n)\cdot b$ | $q:b-n$ |
| :---: | :---: | :---: | :-----: | :-------------: | :-----: |
| $\dfrac{3}{4}$ | $\dfrac{1}{2}$ | $\dfrac{1}{4}$ | [[ 11/4 ]] @canvas | [[ 1/2 ]] @canvas | [[ 5/4 ]] @canvas |
| $\dfrac{2}{3}$ | $\dfrac{1}{3}$ | $\dfrac{1}{6}$ | [[ 8/3 ]] @canvas | [[ 5/18 ]] @canvas | [[ 11/6 ]] @canvas |
| $\dfrac{5}{6}$ | $\dfrac{2}{5}$ | $\dfrac{1}{3}$ | [[ 61/30 ]] @canvas | [[ 7/15 ]] @canvas | [[ 7/4 ]] @canvas |
| $\dfrac{7}{8}$ | $\dfrac{3}{4}$ | $\dfrac{1}{2}$ | [[ 19/8 ]] @canvas | [[ 33/32 ]] @canvas | [[ 2/3 ]] @canvas |
@Algebrite.check([ 11/4; 1/2; 5/4; 8/3; 5/18; 11/6; 61/30; 7/15; 7/4; 19/8; 33/32; 2/3 ])






@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung)