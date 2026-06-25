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











tags: Häufigkeit, Chance, Wahrscheinlichkeit, mittel, niedrig, Angeben

comment: Es wird aus einer Urne gezogen. Kannst du die Chance, die Häufigkeit oder die Wahrscheinlichkeit angeben?

author: Martin Lommatzsch

-->




# Betrachtung von Urnen




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
<!-- Stochastik Grundlagen 0029 -->

In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="dynFlex">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne26.png)


</div>
<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der orangen Kugeln **an**.\
$\#(O)=$ [[  4  ]]


@ADetails(1=BE; absolute Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der blauen und roten Kugeln **an**.\
$p(B \cup R)=$ [[ 8/24  ]]
@Algebrite.check(8/24)


@ADetails(1=BE; relative Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, keine grüne oder graue Kugel zu ziehen.\
$P(R \cup B \cup O)=$ [[  12/24  ]]
@Algebrite.check(12/24)


@ADetails(1=BE; Wahrscheinlichkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(B)=$ [[  5:19  ]]


@ADetails(1=BE; Chance)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der nicht roten Kugeln **an**.\
$\#(\bar{R})=$ [[  21  ]]


@ADetails(1=BE; absolute Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, keine rote oder orange Kugel zu ziehen.\
$P(\bar{R} \cup \bar{O})=$ [[  17/24  ]]
@Algebrite.check(17/24)


@ADetails(1=BE; Wahrscheinlichkeit)



</div>
</section>


---


<section class="dynFlex">

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne27.png)


</div>
<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der orangen Kugeln **an**.\
$\#(O)=$ [[  3  ]]


@ADetails(1=BE; absolute Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  8/22  ]]
@Algebrite.check(8/22)


@ADetails(1=BE; relative Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, eine rote oder orange Kugel zu ziehen.\
$P(R \cup O)=$ [[  14/22  ]]
@Algebrite.check(14/22)


@ADetails(1=BE; Wahrscheinlichkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, eine nicht orange Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(\bar{O})=$ [[  19:3  ]]


@ADetails(1=BE; Chance)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der grünen und roten Kugeln **an**.\
$p(G \cup R)=$ [[  9/22  ]]
@Algebrite.check(9/22)


@ADetails(1=BE; relative Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der blauen und roten Kugeln **an**.\
$p(B \cup R)=$ [[  13/22  ]]
@Algebrite.check(13/22)


@ADetails(1=BE; relative Häufigkeit)


</div>
</section>

---



<section class="dynFlex">

<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne28.png)


</div>
<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der grauen Kugeln **an**.\
$\#(G)=$ [[  3  ]]


@ADetails(1=BE; absolute Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der violette Kugeln **an**.\
$p(B)=$ [[  8/18  ]]
@Algebrite.check(8/18)


@ADetails(1=BE; relative Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[  10/18  ]]
@Algebrite.check(10/18)


@ADetails(1=BE; Wahrscheinlichkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, eine graue oder violette Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(G \cup V)=$ [[  11:7  ]]


@ADetails(1=BE; Chance)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$  [[  0  ]]
@Algebrite.check(0)


@ADetails(1=BE; Wahrscheinlichkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der nicht orangen Kugeln **an**.\
$\#(R)=$ [[  11  ]]


@ADetails(1=BE; absolute Häufigkeit)



</div>

</section>







