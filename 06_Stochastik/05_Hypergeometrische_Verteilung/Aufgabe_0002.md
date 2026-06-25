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








tags: Hypergeometrische Verteilung, Erwartungswert, sehr leicht, sehr niedrig, Angeben

comment: Wie groß wäre der Erwartungswert für die beschriebene Binomialverteilung?

author: Martin Lommatzsch

-->




# Erwartungswert von hypergeometrischen Verteilungen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Erwartungswert der hypergeometrischen Verteilung **an**.



__$a)\;\;$__ Bei einem Kartenspiel werden zu Beginn neun Karten gezogen. Insgesamt gibt es acht besonders wertvolle Karten, während die anderen $24$ Karten weniger spielerischen Wert haben. **Gib** den Erwartungswert bezüglich der spielerisch wertvollen Karten **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  2,25  ]]
@Algebrite.check(2.25)


@ADetails(1=BE; Hypergeometrische Verteilung, Erwartungswert)



__$b)\;\;$__ In einer Urne befinden sich $13$ grüne und $12$ blaue Kugeln. **Gib** den Erwartungswert der getroffenen grünen Kugeln **an**, wenn aus der Urne eine Kugel ohne Zurücklegen elfmal hintereinander gezogen wird.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  5,72  ]]
@Algebrite.check(5.72)


@ADetails(1=BE; Hypergeometrische Verteilung, Erwartungswert)



__$c)\;\;$__ Bei einem Ratespiel werden per Zufallsgenerator insgesamt sechs Zahlen zwischen $1$ und $50$ ausgespuckt, wobei keine doppelten Zahlen ausgegeben werden können. Ein Spieler kann vier Zahlen vorher einloggen. **Gib** den Erwartungswert für die Treffer **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  0,48  ]]
@Algebrite.check(0.48)


@ADetails(1=BE; Hypergeometrische Verteilung, Erwartungswert)






