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








tags: Binomialverteilung, Standardabweichung, sehr leicht, sehr niedrig, Angeben

comment: Wie groß wäre die Standardabweichung für die beschriebene Binomialverteilung?

author: Martin Lommatzsch

-->




# Standardabweichung von Binomialverteilungen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** die Standardabweichung der beschriebenen Binomialverteilung **an**. **Gib** die Werte gerundet auf drei Nachkommastellen **an**.



__$a)\;\;$__ An einem Glücksrad befinden sich $30$ Gewinnzahlen und $70$ andere Zahlen, die alle gleichgroße Bereiche zugewiesen bekommen haben. **Gib** die Standardabweichung von getroffenen Gewinnzahlen der beschriebenen Binomialverteilung **an**, wenn das Glücksrad achtmal gedreht wird.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\sigma \approx$ [[  1,296  ]]
@Algebrite.check(1.296)


@ADetails(1=BE; Binomialverteilung, Standardabweichung, Runden)



__$b)\;\;$__ In einer Urne befinden sich $4$ rote und $21$ blaue Kugeln. **Gib** die Standardabweichung der getroffenen roten Kugeln **an**, wenn aus der Urne eine Kugel mit Zurücklegen fünfmal hintereinander gezogen wird.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\sigma \approx$ [[  0,820  ]]
@Algebrite.check(0.820)


@ADetails(1=BE; Binomialverteilung, Standardabweichung, Runden)



__$c)\;\;$__ Bei der Produktion eines Produktes kommt es bei der Fertigung zu $3\%$ zu einem Produktionsfehler. **Gib** die Standardabweichung für fehlerhafte Produkte nach $300$ Fertigungen **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\sigma \approx$ [[  2,955  ]]
@Algebrite.check(2.955)


@ADetails(1=BE; Binomialverteilung, Standardabweichung, Runden)






