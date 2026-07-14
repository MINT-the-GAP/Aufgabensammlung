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
|  $u$  |  $k$  |  $r$  | $u-k\cdot r$ | $(u+r):k$ | $u\cdot k+r$ |
| :---: | :---: | :---: | :------------: | :---------: | :------------: |
| $\dfrac{5}{6}$ | $\dfrac{1}{3}$ | $\dfrac{1}{2}$ | [[ 2/3 ]] @canvas | [[ 4 ]] @canvas | [[ 7/9 ]] @canvas |
| $\dfrac{3}{4}$ | $\dfrac{2}{5}$ | $\dfrac{1}{4}$ | [[ 13/20 ]] @canvas | [[ 5/2 ]] @canvas | [[ 11/20 ]] @canvas |
| $\dfrac{7}{8}$ | $\dfrac{1}{2}$ | $\dfrac{1}{3}$ | [[ 17/24 ]] @canvas | [[ 29/12 ]] @canvas | [[ 37/48 ]] @canvas |
| $\dfrac{4}{5}$ | $\dfrac{3}{10}$ | $\dfrac{1}{2}$ | [[ 13/20 ]] @canvas | [[ 13/3 ]] @canvas | [[ 37/50 ]] @canvas |
@Algebrite.check([ 2/3; 4; 7/9; 13/20; 5/2; 11/20; 17/24; 29/12; 37/48; 13/20; 13/3; 37/50 ])






@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung)