<!--
version: 1.0.0
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

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md

tags: Kreis, sehr leicht, sehr niedrig, Angeben
comment: Gib Radius, Durchmesser, Umfang und Flächeninhalt von Kreisen an.
author: Martin Lommatzsch
-->

# Grundaufgaben zum Kreis

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png"  width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ Der Radius beträgt $r=3\,\mathrm{cm}$. **Gib** den Durchmesser **an**.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$d=$ [[ 6 ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`6`,`0.005`)
[[?]] @Explain
************
$$
d=2r=2\cdot\left(3\right)=6\,\mathrm{cm}
$$
************

@resetter

@ADetails(1=BE; Kreis)

</div>

<div class="flex-child">

__$b)\;\;$__ Der Durchmesser beträgt $d=7{,}5\,\mathrm{cm}$. **Gib** den Radius **an**.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$r=$ [[ 3,75 ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`15/4`,`0.005`)
[[?]] @Explain
************
$$
r=\frac{d}{2}=\frac{7{,}5}{2}=3{,}75\,\mathrm{cm}
$$
************

@resetter

@ADetails(1=BE; Kreis)

</div>

<div class="flex-child">

__$c)\;\;$__ Der Radius beträgt $r=\frac{2}{3}\,\mathrm{cm}$. **Gib** den Umfang **an**.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$u=$ [[ \frac{4\pi}{3} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`4*pi/3`,`0.005`)
[[?]] @Explain
************
$$
u=2\pi r=2\pi\cdot\left(\frac{2}{3}\right)=\frac{4\pi}{3}\,\mathrm{cm}
$$
************

@resetter

@ADetails(1=BE; Kreis)

</div>

<div class="flex-child">

__$d)\;\;$__ Der Durchmesser beträgt $d=2\sqrt{7}\,\mathrm{cm}$. **Gib** den Umfang **an**.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$u=$ [[ 2\pi\sqrt{7} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`2*pi*sqrt(7)`,`0.005`)
[[?]] @Explain
************
$$
u=\pi d=\pi\cdot\left(2\sqrt{7}\right)=2\pi\sqrt{7}\,\mathrm{cm}
$$
************

@resetter

@ADetails(1=BE; Kreis)

</div>

<div class="flex-child">

__$e)\;\;$__ Der Radius beträgt $r=3\,\mathrm{cm}$. **Gib** den Flächeninhalt **an**.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$A=$ [[ 9\pi ]] $\mathrm{cm}^2$ @canvas
@Algebrite.check2(`9*pi`,`0.005`)
[[?]] @Explain
************
$$
A=\pi r^2=\pi\cdot\left(3\right)^2=9\pi\,\mathrm{cm}^2
$$
************

@resetter

@ADetails(1=BE; Kreis)

</div>

<div class="flex-child">

__$f)\;\;$__ Der Durchmesser beträgt $d=1{,}2\,\mathrm{cm}$. **Gib** den Flächeninhalt **an**.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$A=$ [[ \frac{9\pi}{25} ]] $\mathrm{cm}^2$ @canvas
@Algebrite.check2(`9*pi/25`,`0.005`)
[[?]] @Explain
************
$$
A=\pi\left(\frac{d}{2}\right)^2=\pi\cdot\left(\frac{1{,}2}{2}\right)^2=\frac{9\pi}{25}\,\mathrm{cm}^2
$$
************

@resetter

@ADetails(1=BE; Kreis)

</div>

</section>
