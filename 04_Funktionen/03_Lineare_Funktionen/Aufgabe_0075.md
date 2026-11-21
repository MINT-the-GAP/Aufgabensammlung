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
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md

tags: Lineare Funktionen, Bruchrechnung, Dezimalzahlen, Ganze Zahlen, leicht, normal, Bestimmen

comment: Bestimme die Funktionsterme von vier linearen Funktionen aus jeweils zwei gegebenen Punkten. Die Punktkoordinaten enthalten Brüche, Dezimalzahlen und ganze Zahlen.

author: Martin Lommatzsch
-->

# Lineare Funktionen aus zwei Punkten bestimmen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

**Bestimme** jeweils den Funktionsterm der linearen Funktion, deren Graph durch die beiden angegebenen Punkte verläuft.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(-2\mid \frac{3}{5}\right)$ und $Q\left(0{,}5\mid -1\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ -16/25*x-0,68 ]] @canvas
@Algebrite.check(`-16/25*x-0.68`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-1-\frac{3}{5}}{0{,}5-\left(-2\right)} = \dfrac{-\frac{8}{5}}{\frac{5}{2}} = -\frac{16}{25}
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-\frac{16}{25}$ und die Koordinaten von $P\left(-2\mid \frac{3}{5}\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
\frac{3}{5} &= \left(-\frac{16}{25}\right)\cdot \left(-2\right)+b \\
\frac{3}{5} &= \frac{32}{25}+b &&\quad |-\frac{32}{25} \\
b &= \frac{3}{5}-\frac{32}{25} = -0{,}68
\end{aligned}
$$

Damit gilt $f(x)=-\frac{16}{25}x-0{,}68$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Dezimalzahlen, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(\frac{1}{2}\mid -2\right)$ und $Q\left(3\mid 1{,}75\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 1,5*x-11/4 ]] @canvas
@Algebrite.check(`1.5*x-11/4`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{1{,}75-\left(-2\right)}{3-\frac{1}{2}} = \dfrac{\frac{15}{4}}{\frac{5}{2}} = 1{,}5
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=1{,}5$ und die Koordinaten von $P\left(\frac{1}{2}\mid -2\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
-2 &= 1{,}5\cdot \frac{1}{2}+b \\
-2 &= \frac{3}{4}+b &&\quad |-\frac{3}{4} \\
b &= -2-\frac{3}{4} = -\frac{11}{4}
\end{aligned}
$$

Damit gilt $g(x)=1{,}5x-\frac{11}{4}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Dezimalzahlen, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(-1{,}2\mid 2\right)$ und $Q\left(\frac{3}{5}\mid 4{,}4\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 4/3*x+3,6 ]] @canvas
@Algebrite.check(`4/3*x+3.6`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{4{,}4-2}{\frac{3}{5}-\left(-1{,}2\right)} = \dfrac{\frac{12}{5}}{\frac{9}{5}} = \frac{4}{3}
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=\frac{4}{3}$ und die Koordinaten von $P\left(-1{,}2\mid 2\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
2 &= \frac{4}{3}\cdot \left(-1{,}2\right)+b \\
2 &= -\frac{8}{5}+b &&\quad |+\frac{8}{5} \\
b &= 2+\frac{8}{5} = 3{,}6
\end{aligned}
$$

Damit gilt $h(x)=\frac{4}{3}x+3{,}6$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Dezimalzahlen, Ganze Zahlen)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(2\mid -0{,}75\right)$ und $Q\left(-\frac{2}{3}\mid 1{,}25\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -0,75*x+3/4 ]] @canvas
@Algebrite.check(`-0.75*x+3/4`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{1{,}25-\left(-0{,}75\right)}{-\frac{2}{3}-2} = \dfrac{2}{-\frac{8}{3}} = -0{,}75
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-0{,}75$ und die Koordinaten von $P\left(2\mid -0{,}75\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
-0{,}75 &= \left(-0{,}75\right)\cdot 2+b \\
-0{,}75 &= -\frac{3}{2}+b &&\quad |+\frac{3}{2} \\
b &= -0{,}75+\frac{3}{2} = \frac{3}{4}
\end{aligned}
$$

Damit gilt $k(x)=-0{,}75x+\frac{3}{4}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Dezimalzahlen, Ganze Zahlen)

</div>

</section>
