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








tags: Tabelle, Parameter, Äquivalenzumformung, Bruchrechnung, leicht, normal, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit mit Äquivalenzumformung und Brüchen

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
|  $a$  |  $b$  |  $c$  | $(a+b)\cdot c$ | $a:(b+c)$ | $a\cdot b+c$ |
| :---: | :---: | :---: | :-------------: | :---------: | :-----------: |
| $\dfrac{1}{2}$ | $\dfrac{1}{4}$ | $\dfrac{2}{3}$ | [[ 1/2 ]] @canvas | [[ 6/11 ]] @canvas | [[ 19/24 ]] @canvas |
| [[ 3/4 ]] @canvas | $\dfrac{1}{3}$ | $\dfrac{1}{2}$ | $\dfrac{13}{24}$ | [[ 9/10 ]] @canvas | [[ 3/4 ]] @canvas |
| $\dfrac{2}{3}$ | [[ 1/6 ]] @canvas | $\dfrac{3}{4}$ | [[ 5/8 ]] @canvas | $\dfrac{8}{11}$ | [[ 31/36 ]] @canvas |
| $\dfrac{5}{6}$ | $\dfrac{1}{2}$ | [[ 1/3 ]] @canvas | [[ 4/9 ]] @canvas | $1$ | [[ 3/4 ]] @canvas |
@Algebrite.check([ 1/2; 6/11; 19/24; 3/4; 9/10; 3/4; 1/6; 5/8; 31/36; 1/3; 4/9; 3/4 ])




@ADetails(1=BE; Einsetzungsverfahren, Tabelle, Bruchrechnung, Äquivalenzumformung)