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



__$a)\;\;$__ In einer Urne befinden sich $26$ rote und $14$ schwarze Kugeln. **Gib** den Erwartungswert der getroffenen schwarzen Kugeln **an**, wenn aus der Urne eine Kugel ohne Zurücklegen $13$-mal hintereinander gezogen wird.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  4,55  ]]
@Algebrite.check(4.55)


@ADetails(1=BE; Hypergeometrische Verteilung, Erwartungswert)



__$b)\;\;$__ Auf fünf Stelle bewerben sich $32$ Personen, wovon $12$ männlich sind. Die Stellen werden per Losverfahren vergeben. **Gib** den Erwartungswert für männliche Personen **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  1,875 ]]
@Algebrite.check(1.875)


@ADetails(1=BE; Hypergeometrische Verteilung, Erwartungswert)



__$c)\;\;$__ Bei einem Kartenspiel werden zu Beginn sechs Karten gezogen. Insgesamt gibt es vier Joker unter den insgesamt $48$ Karten. **Gib** den Erwartungswert bezüglich der Joker **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  0,5   ]]
@Algebrite.check(0.5)


@ADetails(1=BE; Hypergeometrische Verteilung, Erwartungswert)






