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











tags: Häufigkeit, Chance, Wahrscheinlichkeit, mittel, niedrig, Angeben

comment: Es wird aus einer Urne gezogen. Kannst du die Chance, die Häufigkeit oder die Wahrscheinlichkeit angeben?

author: Martin Lommatzsch

-->




# Betrachtung von Urnen




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
<!-- Stochastik Grundlagen 0027 -->

In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="dynFlex">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne20.png)


</div>
<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  5  ]]



@ADetails(1=BE; absolute Häufigkeit)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der grünen Kugeln **an**.\
$p(G)=$ [[ 6/20  ]]
@Algebrite.check(6/20)



@ADetails(1=BE; relative Häufigkeit)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, keine blaue Kugel zu ziehen.\
$P(\bar{B})=$ [[  16/20  ]]
@Algebrite.check(16/20)



@ADetails(1=BE; Wahrscheinlichkeit)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  5:15  ]]



@ADetails(1=BE; Chance)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, eine grüne oder rote Kugel zu ziehen.\
$P(R \cup G)=$ [[  11/20  ]]
@Algebrite.check(11/20)




@ADetails(1=BE; Wahrscheinlichkeit)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, keine graue Kugel zu ziehen.\
$P(R \cup B \cup G)=$ [[  15/20  ]]
@Algebrite.check(15/20)



@ADetails(1=BE; Wahrscheinlichkeit)

</div>
</section>


---


<section class="dynFlex">

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne21.png)


</div>
<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der orange Kugeln **an**.\
$\#(O)=$ [[  7  ]]



@ADetails(1=BE; absolute Häufigkeit)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der violetten und orangen Kugeln **an**.\
$p(B \cup O)=$ [[  11/22  ]]
@Algebrite.check(11/22)



@ADetails(1=BE; relative Häufigkeit)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, eine graue oder violette Kugel zu ziehen.\
$P(G \cup V)=$ [[  9/22  ]]
@Algebrite.check(9/22)



@ADetails(1=BE; Wahrscheinlichkeit)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, eine violette Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(V)=$ [[  5:17  ]]



@ADetails(1=BE; Chance)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der nicht grauen Kugeln **an**.\
$p(\bar{G})=$ [[  18/22  ]]
@Algebrite.check(18/22)



@ADetails(1=BE; relative Häufigkeit)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, keine blaue oder violette Kugel zu ziehen.\
$P(\bar{V} \cup \bar{B})=$ [[  11/22  ]]
@Algebrite.check(11/22)


@ADetails(1=BE; Wahrscheinlichkeit)


</div>
</section>


---


<section class="dynFlex">

<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne22.png)


</div>
<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der blauen und orangen Kugeln **an**.\
$\#(B \cup O)=$ [[  10  ]]


@ADetails(1=BE; absolute Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(R)=$ [[  7/22  ]]
@Algebrite.check(7/22)


@ADetails(1=BE; relative Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(G)=$ [[  4/22  ]]
@Algebrite.check(4/22)


@ADetails(1=BE; Wahrscheinlichkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der nicht blauen Kugeln **an**.\
$p(\bar{B})=$ [[  16/22  ]]
@Algebrite.check(16/22)


@ADetails(1=BE; relative Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, eine orange oder rote Kugel zu ziehen.\
$P(R \cup O)=$ [[  13/22  ]]
@Algebrite.check(13/22)


@ADetails(1=BE; Wahrscheinlichkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, eine orange oder grüne Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(G \cup O)=$ [[  11:11  ]]


@ADetails(1=BE; Chance)


</div>

</section>







