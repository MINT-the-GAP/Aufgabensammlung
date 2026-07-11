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








tags: Tabelle, Parameter, Äquivalenzumformung, Bruchrechnung, mittel, normal, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Äquivalenzumformung und Brüchen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $d$  |  $e$  |  $f$  | $(d+$ [[ e ]] $):f$ | $d\cdot(e+$ [[ 1/2 ]] $)$ | $(d-f)\cdot$ [[ 3/2 ]] $+e$ |
| :---: | :---: | :---: | :-----------------: | :--------------------------: | :----------------------------: |
| $\dfrac{3}{4}$ | $\dfrac{1}{4}$ | $\dfrac{1}{2}$ | [[ 2 ]] @canvas | [[ 9/16 ]] @canvas | [[ 5/8 ]] @canvas |
| [[ 5/6 ]] @canvas | $\dfrac{1}{3}$ | $\dfrac{1}{2}$ | $\dfrac{7}{3}$ | [[ 25/36 ]] @canvas | [[ 5/6 ]] @canvas |
| $\dfrac{3}{4}$ | [[ 1/2 ]] @canvas | $\dfrac{1}{4}$ | [[ 5 ]] @canvas | $\dfrac{3}{4}$ | [[ 5/4 ]] @canvas |
| $\dfrac{7}{8}$ | $\dfrac{1}{8}$ | [[ 3/8 ]] @canvas | [[ 8/3 ]] @canvas | [[ 35/64 ]] @canvas | $\dfrac{7}{8}$ |
@Algebrite.check([ e; 1/2; 3/2; 2; 9/16; 5/8; 5/6; 25/36; 5/6; 1/2; 5; 5/4; 3/8; 8/3; 35/64 ])




@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung, Äquivalenzumformung)