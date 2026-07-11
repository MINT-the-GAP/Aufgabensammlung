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











tags: Häufigkeit, Chance, Wahrscheinlichkeit, mittel, niedrig, Angeben

comment: Es wird aus einer Urne gezogen. Kannst du die Chance, die Häufigkeit oder die Wahrscheinlichkeit angeben?

author: Martin Lommatzsch

-->




# Betrachtung von Urnen




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
<!-- Stochastik Grundlagen 0030 -->

In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="dynFlex">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne29.png)


</div>
<div class="flex-child">






<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der nicht grauen Kugeln **an**.\
$\#(\bar{G})=$ [[  11  ]]


@ADetails(1=BE; absolute Häufigkeit)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der blauen und grauen Kugeln **an**.\
$p(B \cup G)=$ [[ 7/14  ]]
@Algebrite.check(7/14)


@ADetails(1=BE; relative Häufigkeit)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  0  ]]
@Algebrite.check(0)


@ADetails(1=BE; Wahrscheinlichkeit)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  4:10  ]]


@ADetails(1=BE; Chance)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, eine nicht graue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(\bar{G})=$ [[  11:3  ]]


@ADetails(1=BE; Chance)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(B)=$ [[  4/14  ]]
@Algebrite.check(4/14)


@ADetails(1=BE; Wahrscheinlichkeit)


</div>
</section>


---


<section class="dynFlex">

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne30.png)


</div>
<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der violetten Kugeln **an**.\
$\#(V)=$ [[  4  ]]


@ADetails(1=BE; absolute Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  7/19  ]]
@Algebrite.check(7/19)


@ADetails(1=BE; relative Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, eine orange oder violette Kugel zu ziehen.\
$P(O \cup V)=$ [[  9/19  ]]
@Algebrite.check(9/19)


@ADetails(1=BE; Wahrscheinlichkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, eine grüne oder blauen Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(G \cup B)=$ [[  10:9  ]]


@ADetails(1=BE; Chance)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, keine violette Kugel zu ziehen.\
$P(\bar{V})=$ [[  15/19  ]]
@Algebrite.check(15/19)


@ADetails(1=BE; Wahrscheinlichkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, keine orange Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  14:5  ]]


@ADetails(1=BE; Chance)


</div>
</section>

---



<section class="dynFlex">

<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne31.png)


</div>
<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die absolute Häufigkeit der nicht orangen Kugeln **an**.\
$\#(\bar{O})=$ [[  23  ]]


@ADetails(1=BE; absolute Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(R)=$ [[  7/25  ]]
@Algebrite.check(7/25)


@ADetails(1=BE; relative Häufigkeit )



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, keine blaue Kugel zu ziehen.\
$P(\bar{B})=$ [[  6/25  ]]
@Algebrite.check(6/25)


@ADetails(1=BE; Wahrscheinlichkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Chance **an**, weder eine grüne noch eine graue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  15:10  ]]


@ADetails(1=BE; Chance)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die relative Häufigkeit der orangen und grünen Kugeln **an**.\
$p(O \cup G)=$ [[  8/25  ]]
@Algebrite.check(8/25)


@ADetails(1=BE; relative Häufigkeit)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
**Gib** die Wahrscheinlichkeit **an**, keine blaue oder rote Kugel zu ziehen.\
$P(\bar{B} \cup \bar{R})=$ [[  13/25  ]]
@Algebrite.check(13/25)


@ADetails(1=BE; Wahrscheinlichkeit)


</div>


</section>







