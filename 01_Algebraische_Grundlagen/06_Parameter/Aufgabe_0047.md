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








tags: Tabelle, Parameter, Äquivalenzumformung,  Dezimalzahlen, negative Zahlen, Bruchrechnung, sehr schwer, hoch, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Äquivalenzumformung und rationalen Zahlen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $y$  |  $c$  |  $n$  | $(y$ [[$+$|($-$)|$\cdot$|$:$]] $c):$ [[ n ]] | $y\cdot(c$ [[($-$)|$+$|$\cdot$|$:$]] [[ 0,5 ]] $)+n$ | $y:$ [[ n ]] [[$+$|$-$|($\cdot$)|$:$]] $c$ |
| :---: | :---: | :---: | :---------------: | :---------------: | :--------------: |
| $-\dfrac{3}{2}$ | $\dfrac{1}{4}$ | $\dfrac{1}{2}$ | [[ -7/2 ]] @canvas | [[ 7/8 ]] @canvas | [[ -3/4 ]] @canvas |
| [[ -1 ]] @canvas | $-0{,}4$ | $0{,}2$ | $-3$ | [[ 11/10 ]] @canvas | [[ 2 ]] @canvas |
| $\dfrac{3}{4}$ | [[ 1/3 ]] @canvas | $-\dfrac{1}{2}$ | [[ -5/6 ]] @canvas | $-\dfrac{5}{8}$ | [[ -1/2 ]] @canvas |
| $-1{,}2$ | $0{,}75$ | [[ 3/5 ]] @canvas | [[ -13/4 ]] @canvas | [[ 3/10 ]] @canvas | $-\dfrac{3}{2}$ |
@Algebrite.check([ n; 0.5; n; -7/2; 7/8; -3/4; -1; 11/10; 2; 1/3; -5/6; -1/2; 3/5; -13/4; 3/10 ])






@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Dezimalzahlen, negative Zahlen, Bruchrechnung, Äquivalenzumformung)