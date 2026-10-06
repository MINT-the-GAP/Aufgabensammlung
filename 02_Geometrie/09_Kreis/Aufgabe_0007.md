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

tags: Kreis, sehr leicht, niedrig, Bestimmen
comment: Bestimme Radius, Durchmesser, Umfang und Flächeninhalt aus gegebenen Umfängen und Flächeninhalten.
author: Martin Lommatzsch
-->

# Umkehraufgaben zum Kreis

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png"  width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ Der Umfang beträgt $u=\frac{5}{2}\,\mathrm{cm}$. **Bestimme** den Radius.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$r=$ [[ \frac{5}{4\pi} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`5/(4*pi)`,`0.005`)
[[?]] @Explain
************
$$
\begin{aligned}
u&=2\pi r \quad \left| :(2\pi) \right. \\[4pt]
r&=\frac{u}{2\pi}=\frac{\frac{5}{2}}{2\pi}=\frac{5}{4\pi}\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

<div class="flex-child">

__$b)\;\;$__ Der Umfang beträgt $u=6\pi\sqrt{2}\,\mathrm{cm}$. **Bestimme** den Durchmesser.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$d=$ [[ 6\sqrt{2} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`6*sqrt(2)`,`0.005`)
[[?]] @Explain
************
$$
\begin{aligned}
u&=\pi d \quad \left| :\pi \right. \\[4pt]
d&=\frac{u}{\pi}=\frac{6\pi\sqrt{2}}{\pi}=6\sqrt{2}\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

<div class="flex-child">

__$c)\;\;$__ Der Flächeninhalt beträgt $A=16\,\mathrm{cm}^2$. **Bestimme** den Radius.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$r=$ [[ \frac{4}{\sqrt{\pi}} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`4/sqrt(pi)`,`0.005`)
[[?]] @Explain
************
Da der Radius positiv ist, gilt:

$$
\begin{aligned}
A&=\pi r^2 \quad \left| :\pi \right. \\[4pt]
r^2&=\frac{A}{\pi} \\[4pt]
\Rightarrow\quad r&=\sqrt{\frac{A}{\pi}}=\sqrt{\frac{16}{\pi}}=\frac{4}{\sqrt{\pi}}\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

<div class="flex-child">

__$d)\;\;$__ Der Flächeninhalt beträgt $A=2{,}25\,\mathrm{cm}^2$. **Bestimme** den Durchmesser.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$d=$ [[ \frac{3}{\sqrt{\pi}} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`3/sqrt(pi)`,`0.005`)
[[?]] @Explain
************
Da der Radius positiv ist, gilt:

$$
\begin{aligned}
A&=\pi r^2 \quad \left| :\pi \right. \\[4pt]
r^2&=\frac{A}{\pi} \\[4pt]
\Rightarrow\quad r&=\sqrt{\frac{A}{\pi}}=\sqrt{\frac{2{,}25}{\pi}}=\frac{3}{2\sqrt{\pi}}\,\mathrm{cm} \\[4pt]
d&=2r=2\cdot\left(\frac{3}{2\sqrt{\pi}}\right)=\frac{3}{\sqrt{\pi}}\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

<div class="flex-child">

__$e)\;\;$__ Der Umfang beträgt $u=8\pi\,\mathrm{cm}$. **Bestimme** den Flächeninhalt.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$A=$ [[ 16\pi ]] $\mathrm{cm}^2$ @canvas
@Algebrite.check2(`16*pi`,`0.005`)
[[?]] @Explain
************
$$
\begin{aligned}
u&=2\pi r \quad \left| :(2\pi) \right. \\[4pt]
r&=\frac{u}{2\pi}=\frac{8\pi}{2\pi}=4\,\mathrm{cm} \\[4pt]
A&=\pi r^2=\pi\cdot\left(4\right)^2=16\pi\,\mathrm{cm}^2
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

<div class="flex-child">

__$f)\;\;$__ Der Flächeninhalt beträgt $A=\frac{25\pi}{9}\,\mathrm{cm}^2$. **Bestimme** den Umfang.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$u=$ [[ \frac{10\pi}{3} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`10*pi/3`,`0.005`)
[[?]] @Explain
************
Da der Radius positiv ist, gilt:

$$
\begin{aligned}
A&=\pi r^2 \quad \left| :\pi \right. \\[4pt]
r^2&=\frac{A}{\pi} \\[4pt]
\Rightarrow\quad r&=\sqrt{\frac{A}{\pi}}=\sqrt{\frac{\frac{25\pi}{9}}{\pi}}=\frac{5}{3}\,\mathrm{cm} \\[4pt]
u&=2\pi r=2\pi\cdot\left(\frac{5}{3}\right)=\frac{10\pi}{3}\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

</section>
