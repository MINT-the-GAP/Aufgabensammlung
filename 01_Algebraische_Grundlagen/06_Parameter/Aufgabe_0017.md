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
|  $t$  |  $m$  |  $q$  | $t+m:q$ | $(t+q)\cdot m$ | $t:m+q$ |
| :---: | :---: | :---: | :-----: | :-------------: | :-----: |
| $0{,}6$ | $\dfrac{1}{2}$ | $0{,}25$ | [[ 13/5 ]] @canvas | [[ 17/40 ]] @canvas | [[ 29/20 ]] @canvas |
| $\dfrac{3}{4}$ | $0{,}5$ | $\dfrac{1}{4}$ | [[ 11/4 ]] @canvas | [[ 1/2 ]] @canvas | [[ 7/4 ]] @canvas |
| $1{,}2$ | $\dfrac{2}{3}$ | $0{,}4$ | [[ 43/15 ]] @canvas | [[ 16/15 ]] @canvas | [[ 11/5 ]] @canvas |
| $\dfrac{5}{6}$ | $0{,}75$ | $\dfrac{1}{2}$ | [[ 7/3 ]] @canvas | [[ 1 ]] @canvas | [[ 29/18 ]] @canvas |
@Algebrite.check([ 13/5; 17/40; 29/20; 11/4; 1/2; 7/4; 43/15; 16/15; 11/5; 7/3; 1; 29/18 ])







@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung, Dezimalzahlen)