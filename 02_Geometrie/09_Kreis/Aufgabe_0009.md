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

tags: Kreis, leicht, niedrig, Bestimmen
comment: Bestimme Innen- und Außenradien, Durchmesser und Umfänge aus der Kreisringfläche und einem Kreisumfang.
author: Martin Lommatzsch
-->

# Umkehraufgaben zum Kreisring

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png"  width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

$R$ bezeichnet den Außenradius und $r$ den Innenradius.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ Ein Kreisring hat den Flächeninhalt $A_{\mathrm{Ring}}=16\pi\,\mathrm{cm}^2$. Der Außenkreis hat den Umfang $u_{\mathrm{a}}=10\pi\,\mathrm{cm}$. **Bestimme** den Innenradius.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$r=$ [[ 3 ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`3`,`0.005`)
[[?]] @Explain
************
Da beide Radien positiv sind, gilt:

$$
\begin{aligned}
u_{\mathrm{a}}&=2\pi R \quad \left| :(2\pi) \right. \\[4pt]
R&=\frac{u_{\mathrm{a}}}{2\pi}=\frac{10\pi}{2\pi}=5\,\mathrm{cm} \\[6pt]
A_{\mathrm{Ring}}&=\pi(R^2-r^2) \quad \left| :\pi \right. \\[4pt]
\frac{A_{\mathrm{Ring}}}{\pi}&=R^2-r^2 \quad \left| +r^2 \right. \\[4pt]
\frac{A_{\mathrm{Ring}}}{\pi}+r^2&=R^2 \quad \left| -\frac{A_{\mathrm{Ring}}}{\pi} \right. \\[4pt]
r^2&=R^2-\frac{A_{\mathrm{Ring}}}{\pi}=\left(5\right)^2-\frac{16\pi}{\pi}=\left(9\right)\,\mathrm{cm}^2 \\[4pt]
\Rightarrow\quad r&=\sqrt{9}=3\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

<div class="flex-child">

__$b)\;\;$__ Ein Kreisring hat den Flächeninhalt $A_{\mathrm{Ring}}=2{,}5\,\mathrm{cm}^2$. Der Innenkreis hat den Umfang $u_{\mathrm{i}}=3\pi\,\mathrm{cm}$. **Bestimme** den Außenradius.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$R=$ [[ \sqrt{\frac{9}{4}+\frac{5}{2\pi}} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`sqrt(9/4+5/(2*pi))`,`0.005`)
[[?]] @Explain
************
Da beide Radien positiv sind, gilt:

$$
\begin{aligned}
u_{\mathrm{i}}&=2\pi r \quad \left| :(2\pi) \right. \\[4pt]
r&=\frac{u_{\mathrm{i}}}{2\pi}=\frac{3\pi}{2\pi}=\frac{3}{2}\,\mathrm{cm} \\[6pt]
A_{\mathrm{Ring}}&=\pi(R^2-r^2) \quad \left| :\pi \right. \\[4pt]
\frac{A_{\mathrm{Ring}}}{\pi}&=R^2-r^2 \quad \left| +r^2 \right. \\[4pt]
R^2&=\frac{A_{\mathrm{Ring}}}{\pi}+r^2=\frac{2{,}5}{\pi}+\left(\frac{3}{2}\right)^2=\left(\frac{9}{4}+\frac{5}{2\pi}\right)\,\mathrm{cm}^2 \\[4pt]
\Rightarrow\quad R&=\sqrt{\frac{9}{4}+\frac{5}{2\pi}}\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

<div class="flex-child">

__$c)\;\;$__ Ein Kreisring hat den Flächeninhalt $A_{\mathrm{Ring}}=5\pi\,\mathrm{cm}^2$. Der Außenkreis hat den Umfang $u_{\mathrm{a}}=6\pi\sqrt{2}\,\mathrm{cm}$. **Bestimme** den Innendurchmesser.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$d_{\mathrm{i}}=$ [[ 2\sqrt{13} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`2*sqrt(13)`,`0.005`)
[[?]] @Explain
************
Da beide Radien positiv sind, gilt:

$$
\begin{aligned}
u_{\mathrm{a}}&=2\pi R \quad \left| :(2\pi) \right. \\[4pt]
R&=\frac{u_{\mathrm{a}}}{2\pi}=\frac{6\pi\sqrt{2}}{2\pi}=3\sqrt{2}\,\mathrm{cm} \\[6pt]
A_{\mathrm{Ring}}&=\pi(R^2-r^2) \quad \left| :\pi \right. \\[4pt]
\frac{A_{\mathrm{Ring}}}{\pi}&=R^2-r^2 \quad \left| +r^2 \right. \\[4pt]
\frac{A_{\mathrm{Ring}}}{\pi}+r^2&=R^2 \quad \left| -\frac{A_{\mathrm{Ring}}}{\pi} \right. \\[4pt]
r^2&=R^2-\frac{A_{\mathrm{Ring}}}{\pi}=\left(3\sqrt{2}\right)^2-\frac{5\pi}{\pi}=\left(13\right)\,\mathrm{cm}^2 \\[4pt]
\Rightarrow\quad r&=\sqrt{13}\,\mathrm{cm} \\[4pt]
d_{\mathrm{i}}&=2r=2\cdot\left(\sqrt{13}\right)=2\sqrt{13}\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

<div class="flex-child">

__$d)\;\;$__ Ein Kreisring hat den Flächeninhalt $A_{\mathrm{Ring}}=\frac{3}{4}\,\mathrm{cm}^2$. Der Innenkreis hat den Umfang $u_{\mathrm{i}}=\pi\,\mathrm{cm}$. **Bestimme** den Außendurchmesser.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$d_{\mathrm{a}}=$ [[ \sqrt{1+\frac{3}{\pi}} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`sqrt(1+3/pi)`,`0.005`)
[[?]] @Explain
************
Da beide Radien positiv sind, gilt:

$$
\begin{aligned}
u_{\mathrm{i}}&=2\pi r \quad \left| :(2\pi) \right. \\[4pt]
r&=\frac{u_{\mathrm{i}}}{2\pi}=\frac{\pi}{2\pi}=\frac{1}{2}\,\mathrm{cm} \\[6pt]
A_{\mathrm{Ring}}&=\pi(R^2-r^2) \quad \left| :\pi \right. \\[4pt]
\frac{A_{\mathrm{Ring}}}{\pi}&=R^2-r^2 \quad \left| +r^2 \right. \\[4pt]
R^2&=\frac{A_{\mathrm{Ring}}}{\pi}+r^2=\frac{\frac{3}{4}}{\pi}+\left(\frac{1}{2}\right)^2=\left(\frac{1}{4}+\frac{3}{4\pi}\right)\,\mathrm{cm}^2 \\[4pt]
\Rightarrow\quad R&=\sqrt{\frac{1}{4}+\frac{3}{4\pi}}=\frac{1}{2}\sqrt{1+\frac{3}{\pi}}\,\mathrm{cm} \\[4pt]
d_{\mathrm{a}}&=2R=2\cdot\left(\frac{1}{2}\sqrt{1+\frac{3}{\pi}}\right)=\sqrt{1+\frac{3}{\pi}}\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

<div class="flex-child">

__$e)\;\;$__ Ein Kreisring hat den Flächeninhalt $A_{\mathrm{Ring}}=7\,\mathrm{cm}^2$. Der Außenkreis hat den Umfang $u_{\mathrm{a}}=8\pi\,\mathrm{cm}$. **Bestimme** den Umfang des Innenkreises.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$u_{\mathrm{i}}=$ [[ 2\pi\sqrt{16-\frac{7}{\pi}} ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`2*pi*sqrt(16-7/pi)`,`0.005`)
[[?]] @Explain
************
Da beide Radien positiv sind, gilt:

$$
\begin{aligned}
u_{\mathrm{a}}&=2\pi R \quad \left| :(2\pi) \right. \\[4pt]
R&=\frac{u_{\mathrm{a}}}{2\pi}=\frac{8\pi}{2\pi}=4\,\mathrm{cm} \\[6pt]
A_{\mathrm{Ring}}&=\pi(R^2-r^2) \quad \left| :\pi \right. \\[4pt]
\frac{A_{\mathrm{Ring}}}{\pi}&=R^2-r^2 \quad \left| +r^2 \right. \\[4pt]
\frac{A_{\mathrm{Ring}}}{\pi}+r^2&=R^2 \quad \left| -\frac{A_{\mathrm{Ring}}}{\pi} \right. \\[4pt]
r^2&=R^2-\frac{A_{\mathrm{Ring}}}{\pi}=\left(4\right)^2-\frac{7}{\pi}=\left(16-\frac{7}{\pi}\right)\,\mathrm{cm}^2 \\[4pt]
\Rightarrow\quad r&=\sqrt{16-\frac{7}{\pi}}\,\mathrm{cm} \\[4pt]
u_{\mathrm{i}}&=2\pi r=2\pi\cdot\left(\sqrt{16-\frac{7}{\pi}}\right)=2\pi\sqrt{16-\frac{7}{\pi}}\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

<div class="flex-child">

__$f)\;\;$__ Ein Kreisring hat den Flächeninhalt $A_{\mathrm{Ring}}=\frac{5\pi}{9}\,\mathrm{cm}^2$. Der Innenkreis hat den Umfang $u_{\mathrm{i}}=\frac{4\pi}{3}\,\mathrm{cm}$. **Bestimme** den Umfang des Außenkreises.

<!--
data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"
-->
$u_{\mathrm{a}}=$ [[ 2\pi ]] $\mathrm{cm}$ @canvas
@Algebrite.check2(`2*pi`,`0.005`)
[[?]] @Explain
************
Da beide Radien positiv sind, gilt:

$$
\begin{aligned}
u_{\mathrm{i}}&=2\pi r \quad \left| :(2\pi) \right. \\[4pt]
r&=\frac{u_{\mathrm{i}}}{2\pi}=\frac{\frac{4\pi}{3}}{2\pi}=\frac{2}{3}\,\mathrm{cm} \\[6pt]
A_{\mathrm{Ring}}&=\pi(R^2-r^2) \quad \left| :\pi \right. \\[4pt]
\frac{A_{\mathrm{Ring}}}{\pi}&=R^2-r^2 \quad \left| +r^2 \right. \\[4pt]
R^2&=\frac{A_{\mathrm{Ring}}}{\pi}+r^2=\frac{\frac{5\pi}{9}}{\pi}+\left(\frac{2}{3}\right)^2=\left(1\right)\,\mathrm{cm}^2 \\[4pt]
\Rightarrow\quad R&=\sqrt{1}=1\,\mathrm{cm} \\[4pt]
u_{\mathrm{a}}&=2\pi R=2\pi\cdot\left(1\right)=2\pi\,\mathrm{cm}
\end{aligned}
$$
************

@resetter

@ADetails(1=BE; Kreis, Äquivalenzumformung)

</div>

</section>

