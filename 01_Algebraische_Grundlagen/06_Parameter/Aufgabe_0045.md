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








tags: Tabelle, Parameter, Äquivalenzumformung, Bruchrechnung, Dezimalzahlen, negative Zahlen, mittel, hoch, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Äquivalenzumformung und rationalen Zahlen

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
|  $z$  |  $m$  |  $q$  | $(z-m):q$ | $z\cdot(q+m)$ | $z:q-m$ |
| :---: | :---: | :---: | :---------: | :-------------: | :-----: |
| $-\dfrac{3}{2}$ | $\dfrac{1}{4}$ | $\dfrac{1}{2}$ | [[ -7/2 ]] @canvas | [[ -9/8 ]] @canvas | [[ -13/4 ]] @canvas |
| [[ -7/5 ]] @canvas | $-0{,}4$ | $0{,}5$ | $-2$ | [[ -7/50 ]] @canvas | [[ -12/5 ]] @canvas |
| $0{,}75$ | [[ 1/4 ]] @canvas | $-\dfrac{1}{2}$ | [[ -1 ]] @canvas | $-\dfrac{3}{16}$ | [[ -7/4 ]] @canvas |
| $-1{,}2$ | $0{,}3$ | [[ 1/2 ]] @canvas | [[ -3 ]] @canvas | [[ -24/25 ]] @canvas | $-\dfrac{27}{10}$ |
@Algebrite.check([ -7/2; -9/8; -13/4; -7/5; -7/50; -12/5; 1/4; -1; -7/4; 1/2; -3; -24/25 ])






@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Dezimalzahlen, negative Zahlen, Bruchrechnung, Äquivalenzumformung)