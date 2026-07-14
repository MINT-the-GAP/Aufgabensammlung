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








tags: Binomialverteilung, Erwartungswert, sehr leicht, sehr niedrig, Angeben

comment: Wie groß wäre der Erwartungswert für die beschriebene Binomialverteilung?

author: Martin Lommatzsch

-->




# Erwartungswert von Binomialverteilungen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Erwartungswert der beschriebenen Binomialverteilung **an**.



__$a)\;\;$__ An einem Glücksrad befinden sich $30$ Gewinnzahlen und $70$ andere Zahlen, die alle gleichgroße Bereiche zugewiesen bekommen haben. **Gib** den Erwartungswert an getroffenen Gewinnzahlen der beschriebenen Binomialverteilung **an**, wenn das Glücksrad achtmal gedreht wird.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  2,4  ]]
@Algebrite.check(2.4)


@ADetails(1=BE; Binomialverteilung, Erwartungswert)



__$b)\;\;$__ In einer Urne befinden sich $4$ rote und $21$ blaue Kugeln. **Gib** den Erwartungswert der getroffenen roten Kugeln **an**, wenn aus der Urne eine Kugel mit Zurücklegen fünfmal hintereinander gezogen wird.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  0,8  ]]
@Algebrite.check(0.8)


@ADetails(1=BE; Binomialverteilung, Erwartungswert)



__$c)\;\;$__ Bei der Produktion eines Produktes kommt es bei der Fertigung zu $3\%$ zu einem Produktionsfehler. **Gib** den Erwartungswert an fehlerhaften Produkten nach $300$ Fertigungen **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  9    ]]
@Algebrite.check(9)


@ADetails(1=BE; Binomialverteilung, Erwartungswert)






