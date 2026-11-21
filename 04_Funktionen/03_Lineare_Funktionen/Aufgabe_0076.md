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

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(-\frac{1}{2}\mid 3\right)$ und $Q\left(2{,}5\mid -1\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ -4/3*x+7/3 ]] @canvas
@Algebrite.check(`-4/3*x+7/3`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-1-3}{2{,}5-\left(-\frac{1}{2}\right)} = \dfrac{-4}{3} = -\frac{4}{3}
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-\frac{4}{3}$ und die Koordinaten von $P\left(-\frac{1}{2}\mid 3\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
3 &= \left(-\frac{4}{3}\right)\cdot \left(-\frac{1}{2}\right)+b \\
3 &= \frac{2}{3}+b &&\quad |-\frac{2}{3} \\
b &= 3-\frac{2}{3} = \frac{7}{3}
\end{aligned}
$$

Damit gilt $f(x)=-\frac{4}{3}x+\frac{7}{3}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Dezimalzahlen, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(-2\mid -1{,}4\right)$ und $Q\left(\frac{3}{2}\mid 0{,}7\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 0,6*x-1/5 ]] @canvas
@Algebrite.check(`0.6*x-1/5`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{0{,}7-\left(-1{,}4\right)}{\frac{3}{2}-\left(-2\right)} = \dfrac{\frac{21}{10}}{\frac{7}{2}} = 0{,}6
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=0{,}6$ und die Koordinaten von $P\left(-2\mid -1{,}4\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
-1{,}4 &= 0{,}6\cdot \left(-2\right)+b \\
-1{,}4 &= -\frac{6}{5}+b &&\quad |+\frac{6}{5} \\
b &= -1{,}4+\frac{6}{5} = -\frac{1}{5}
\end{aligned}
$$

Damit gilt $g(x)=0{,}6x-\frac{1}{5}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Dezimalzahlen, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(0{,}75\mid -3\right)$ und $Q\left(\frac{7}{4}\mid 2\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 5*x-6,75 ]] @canvas
@Algebrite.check(`5*x-6.75`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{2-\left(-3\right)}{\frac{7}{4}-0{,}75} = \dfrac{5}{1} = 5
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=5$ und die Koordinaten von $P\left(0{,}75\mid -3\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
-3 &= 5\cdot 0{,}75+b \\
-3 &= \frac{15}{4}+b &&\quad |-\frac{15}{4} \\
b &= -3-\frac{15}{4} = -6{,}75
\end{aligned}
$$

Damit gilt $h(x)=5x-6{,}75$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Dezimalzahlen, Ganze Zahlen)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(-3\mid \frac{5}{4}\right)$ und $Q\left(1{,}5\mid -\frac{5}{2}\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -5/6*x-1,25 ]] @canvas
@Algebrite.check(`-5/6*x-1.25`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-\frac{5}{2}-\frac{5}{4}}{1{,}5-\left(-3\right)} = \dfrac{-\frac{15}{4}}{\frac{9}{2}} = -\frac{5}{6}
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-\frac{5}{6}$ und die Koordinaten von $P\left(-3\mid \frac{5}{4}\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
\frac{5}{4} &= \left(-\frac{5}{6}\right)\cdot \left(-3\right)+b \\
\frac{5}{4} &= \frac{5}{2}+b &&\quad |-\frac{5}{2} \\
b &= \frac{5}{4}-\frac{5}{2} = -1{,}25
\end{aligned}
$$

Damit gilt $k(x)=-\frac{5}{6}x-1{,}25$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Dezimalzahlen, Ganze Zahlen)

</div>

</section>
