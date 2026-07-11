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








tags: Binomialverteilung, Standardabweichung, sehr leicht, sehr niedrig, Angeben

comment: Wie groß wäre die Standardabweichung für die beschriebene Binomialverteilung?

author: Martin Lommatzsch

-->




# Standardabweichung von Binomialverteilungen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** die Standardabweichung der beschriebenen Binomialverteilung **an**. **Gib** die Werte falls nötigt gerundet auf drei Nachkommastellen **an**.



__$a)\;\;$__ In einer Urne befinden sich $64$ schwarze und $16$ weiße Kugeln. **Gib** die Standardabweichung der getroffenen schwarzen Kugeln **an**, wenn aus der Urne eine Kugel mit Zurücklegen neunmal hintereinander gezogen wird.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\sigma =$ [[  1,2    ]]
@Algebrite.check(1.2)


@ADetails(1=BE; Binomialverteilung, Standardabweichung)



__$b)\;\;$__ Bei der Produktion eines Produktes kommt es bei der Fertigung zu $1,5\%$ zu einem Produktionsfehler. **Gib** die Standardabweichung für fehlerhafte Produkte nach $500$ Fertigungen **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\sigma \approx$ [[  2,718  ]]
@Algebrite.check(2.718)


@ADetails(1=BE; Binomialverteilung, Standardabweichung, Runden)



__$c)\;\;$__ In einem kleinen Waldstück leben von einer speziellen Ameisenart $18$ Stämme. Jeder Stamm überlebt den Winter mit einer Wahrscheinlichkeit von $92\%$. **Gib** die Standardabweichung für das Überleben der Stämme im kommenden Frühling **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\sigma \approx$ [[  1,151  ]]
@Algebrite.check(1.151)


@ADetails(1=BE; Binomialverteilung, Standardabweichung, Runden)






