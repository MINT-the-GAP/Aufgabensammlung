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








tags: Hypergeometrische Verteilung, Erwartungswert, sehr leicht, sehr niedrig, Angeben

comment: Wie groß wäre der Erwartungswert für die beschriebene Binomialverteilung?

author: Martin Lommatzsch

-->




# Erwartungswert von hypergeometrischen Verteilungen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Erwartungswert der hypergeometrischen Verteilung **an**.



__$a)\;\;$__ Auf vier Stelle bewerben sich $20$ Personen, wovon $7$ Berufserfahrung für genau diese Stelle mitbringen würden. Die Stellen werden per Losverfahren vergeben. **Gib** den Erwartungswert für Personen mit Berufserfahrung **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  1,4   ]]
@Algebrite.check(1.4)


@ADetails(1=BE; Hypergeometrische Verteilung, Erwartungswert)



__$b)\;\;$__ Bei einer Verlosung existieren $30$ Gewinnlose und $220$ Nieten. Es wurden $12$ Lose gekauft. **Gib** den Erwartungswert bezüglich der Gewinnlose **an**.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  1,44  ]]
@Algebrite.check(1.44)


@ADetails(1=BE; Hypergeometrische Verteilung, Erwartungswert)



__$c)\;\;$__ In einer Urne befinden sich $72$ schwarze und $8$ weiße Kugeln. **Gib** den Erwartungswert der getroffenen schwarzen Kugeln **an**, wenn aus der Urne eine Kugel ohne Zurücklegen siebenmal hintereinander gezogen wird.


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\mu =$ [[  6,3  ]]
@Algebrite.check(6.3)


@ADetails(1=BE; Hypergeometrische Verteilung, Erwartungswert)






