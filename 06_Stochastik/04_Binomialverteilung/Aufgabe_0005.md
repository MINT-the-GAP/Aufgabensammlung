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








tags: Binomialverteilung, Erwartungswert, sehr leicht, sehr niedrig, Angeben

comment: Wie groß wäre der Erwartungswert für die beschriebene Binomialverteilung?

author: Martin Lommatzsch

-->




# Erwartungswert von Binomialverteilungen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Erwartungswert der beschriebenen Binomialverteilung **an**.



__$a)\;\;$__ Ein Kleingärtner hat vergessen eine besondere Staudenblume im Herbst auszubuddeln und im Keller einzulagern. Durch die Wetterbedingungen der letzten Jahre weiß der Kleingärtner, dass die Stauden zu $65\%$ überleben. **Gib an** mit wie vielen überlebenden Stauden der Kleingärtner rechnen kann, wenn er insgesamt $25$ dieser Stauden gepflanzt hat.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  16,25 ]]
@Algebrite.check(16.25)


@ADetails(1=BE; Binomialverteilung, Erwartungswert)



__$b)\;\;$__ In einer Urne befinden sich $17$ grüne und $8$ gelbe Kugeln. **Gib** den Erwartungswert der getroffenen grünen Kugeln **an**, wenn aus der Urne eine Kugel mit Zurücklegen zwölfmal hintereinander gezogen wird.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  8,16  ]]
@Algebrite.check(8.16)


@ADetails(1=BE; Binomialverteilung, Erwartungswert)



__$c)\;\;$__ Es wird mit einem zwölfseitigen Würfel gewürfelt, bei beim Erwürfeln einer Primzahl der Wurf als gewonnen gilt. **Gib** den Erwartungswert für die Anzahl der Gewinne nach $24$ Würfen **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[   10   ]]
@Algebrite.check(10)


@ADetails(1=BE; Binomialverteilung, Erwartungswert)






