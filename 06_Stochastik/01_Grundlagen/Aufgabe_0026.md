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
<!-- Stochastik Grundlagen 0026 -->


In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="dynFlex">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne17.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der grünen Kugeln **an**.\
$\#(G)=$ [[  5  ]]

**Gib** die relative Häufigkeit der orangen Kugeln **an**.\
$p(O)=$ [[ 3/18  ]]
@Algebrite.check(3/18)

**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(B)=$ [[  6/18  ]]
@Algebrite.check(6/18)

**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  4:14  ]]

**Gib** die Wahrscheinlichkeit **an**, eine orange oder grüne Kugel zu ziehen.\
$P(O \cup G)=$ [[  8/18  ]]
@Algebrite.check(8/18)

**Gib** die Chance **an**, eine rote oder blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R \cup B)=$ [[  10:8  ]]


</div>
</section>


---


<section class="dynFlex">

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne18.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der violette Kugeln **an**.\
$\#(V)=$ [[  6  ]]

**Gib** die relative Häufigkeit der grünen Kugeln **an**.\
$p(G)=$ [[  4/20  ]]
@Algebrite.check(4/20)

**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(B)=$ [[  6/20  ]]
@Algebrite.check(6/20)

**Gib** die Chance **an**, eine orange Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(O)=$ [[  3:17  ]]

**Gib** die Wahrscheinlichkeit **an**, keine rote Kugel zu ziehen.\
$P(\bar{R})=$ [[  19/20  ]]
@Algebrite.check(19/20)

**Gib** die Chance **an**, eine violette oder orange Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(O \cup V)=$ [[  9:11  ]]


</div>

</section>


---


<section class="dynFlex">
<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne19.png)


</div>
<div class="flex-child">



**Gib** die relative Häufigkeit der violetten und grünen Kugeln **an**.\
$p(V \cup G)=$ [[  7/22  ]]
@Algebrite.check(7/22)

**Gib** die Wahrscheinlichkeit **an**, keine grüne oder blaue Kugel zu ziehen.\
$P(\bar{G} \cup \bar{B})=$ [[  13/22  ]]
@Algebrite.check(16/22)

**Gib** die Chance **an**, eine blaue oder violette Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(V \cup B)=$ [[  11:11  ]]

**Gib** die Wahrscheinlichkeit **an**, eine rote oder grüne Kugel zu ziehen.\
$P(R \cup G)=$ [[  7/22  ]]
@Algebrite.check(7/22)

**Gib** die Wahrscheinlichkeit **an**, eine orange, blaue oder violette Kugel zu ziehen.\
$P(O \cup B \cup V) =$ [[  15/22  ]]
@Algebrite.check(15/22)

**Gib** die Chance **an**, keine rote oder violette Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(\bar{R} \cup \bar{V})=$ [[  13:9  ]]


</div>

</section>







