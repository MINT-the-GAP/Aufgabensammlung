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








tags: Tabelle, Parameter, Äquivalenzumformung,  Dezimalzahlen, negative Zahlen, Bruchrechnung, schwer, hoch, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Äquivalenzumformung und rationalen Zahlen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
**Fülle** die freien Felder der Tabelle **aus**.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution 
data-type="none" 
data-sortable="false" -->
|  $p$  |  $x$  |  $r$  | $p+x:$ [[ r ]] | $(p-$ [[ 0,5 ]] $\cdot r)\cdot x$ | $p:r+$ [[ 3/4 ]] $\cdot x$ |
| :---: | :---: | :---: | :---------------: | :----------------------------------: | :---------------------------: |
| $-\dfrac{1}{2}$ | $\dfrac{3}{2}$ | $-\dfrac{3}{4}$ | [[ -5/2 ]] @canvas | [[ -3/16 ]] @canvas | [[ 43/24 ]] @canvas |
| [[ 6/5 ]] @canvas | $-0{,}8$ | $0{,}4$ | $-0{,}8$ | [[ -4/5 ]] @canvas | [[ 12/5 ]] @canvas |
| $\dfrac{3}{4}$ | [[ 2/3 ]] @canvas | $-\dfrac{1}{2}$ | [[ -7/12 ]] @canvas | $\dfrac{2}{3}$ | [[ -1 ]] @canvas |
| $-1{,}5$ | $\dfrac{1}{4}$ | [[ 3/4 ]] @canvas | [[ -7/6 ]] @canvas | [[ -15/32 ]] @canvas | $-\dfrac{29}{16}$ |
@Algebrite.check([ r; 0.5; 3/4; -5/2; -3/16; 43/24; 6/5; -4/5; 12/5; 2/3; -7/12; -1; 3/4; -7/6; -15/32 ])






@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Dezimalzahlen, negative Zahlen, Bruchrechnung, Äquivalenzumformung)