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
<!-- Stochastik Grundlagen 0028 -->

In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="dynFlex">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne23.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der blauen Kugeln **an**.\
$\#(B)=$ [[  9  ]]

**Gib** die relative Häufigkeit der nicht grauen Kugeln **an**.\
$p(\bar{G})=$ [[ 13/19  ]]
@Algebrite.check(13/19)

**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(R)=$ [[  9/19  ]]
@Algebrite.check(9/19)

**Gib** die Chance **an**, eine violette oder graue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(\bar{B})=$ [[  10:9  ]]

**Gib** die Wahrscheinlichkeit **an**, eine blaue oder graue Kugel zu ziehen.\
$P(B \cup G)=$ [[  15/19  ]]
@Algebrite.check(15/19)

**Gib** die Chance **an**, eine violette Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(V)=$ [[  4:15  ]]


</div>
</section>

---



<section class="dynFlex">

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne24.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der grünen Kugeln **an**.\
$\#(G)=$ [[  10  ]]

**Gib** die relative Häufigkeit der orangen Kugeln **an**.\
$p(O)=$ [[  5/20  ]]
@Algebrite.check(5/20)

**Gib** die Wahrscheinlichkeit **an**, keine rote Kugel zu ziehen.\
$P(\bar{R})=$ [[  15/20  ]]
@Algebrite.check(15/20)

**Gib** die Chance **an**, eine grüne Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(G)=$ [[  10:10  ]]

**Gib** die Wahrscheinlichkeit **an**, eine orange oder grüne Kugel zu ziehen.\
$P(O \cup G)=$ [[  15/20  ]]
@Algebrite.check(15/20)

**Gib** die Wahrscheinlichkeit **an**, keine grüne Kugel zu ziehen.\
$P(\bar{G})=$ [[  10/20  ]]
@Algebrite.check(10/20)


</div>
</section>


---


<section class="dynFlex">

<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne25.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der violetten und grauen Kugeln **an**.\
$\#(V \cup G)=$ [[  11  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  8/22  ]]
@Algebrite.check(8/22)

**Gib** die Wahrscheinlichkeit **an**, keine grüne Kugel zu ziehen.\
$P(G \cup B \cup V)=$ [[  19/22  ]]
@Algebrite.check(19/22)

**Gib** die Chance **an**, eine graue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  7:15  ]]

**Gib** die Wahrscheinlichkeit **an**, keine violette oder blaue Kugel zu ziehen.\
$P(\bar{B} \cup \bar{V})=$ [[  11/22  ]]
@Algebrite.check(11/22)

**Gib** die Chance **an**, keine violette Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(\bar{V})=$ [[  19:3  ]]


</div>

</section>







