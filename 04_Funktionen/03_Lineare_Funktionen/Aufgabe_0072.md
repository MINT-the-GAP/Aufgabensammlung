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

tags: Lineare Funktionen, Dezimalzahlen, Negative Zahlen, leicht, niedrig, Bestimmen

comment: Bestimme die Funktionsterme von vier linearen Funktionen aus jeweils zwei gegebenen Punkten. Die Aufgaben enthalten Dezimalzahlen mit positiven und negativen Vorzeichen.

author: Martin Lommatzsch
-->

# Lineare Funktionen aus zwei Punkten bestimmen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

**Bestimme** jeweils den Funktionsterm der linearen Funktion, deren Graph durch die beiden angegebenen Punkte verläuft.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(-2\mid -2{,}6\right)$ und $Q\left(3\mid 0{,}4\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 0,6*x-1,4 ]] @canvas
@Algebrite.check(`0.6*x-1.4`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{0{,}4-\left(-2{,}6\right)}{3-\left(-2\right)} = \dfrac{3}{5} = 0{,}6
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=0{,}6$ und die Koordinaten von $P\left(-2\mid -2{,}6\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
-2{,}6 &= 0{,}6\cdot \left(-2\right)+b \\
-2{,}6 &= -1{,}2+b &&\quad |+1{,}2 \\
b &= -2{,}6+1{,}2 = -1{,}4
\end{aligned}
$$

Damit gilt $f(x)=0{,}6x-1{,}4$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(0{,}4\mid 1{,}8\right)$ und $Q\left(2{,}8\mid -1{,}2\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -1,25*x+2,3 ]] @canvas
@Algebrite.check(`-1.25*x+2.3`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-1{,}2-1{,}8}{2{,}8-0{,}4} = \dfrac{-3}{2{,}4} = -1{,}25
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-1{,}25$ und die Koordinaten von $P\left(0{,}4\mid 1{,}8\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
1{,}8 &= \left(-1{,}25\right)\cdot 0{,}4+b \\
1{,}8 &= -0{,}5+b &&\quad |+0{,}5 \\
b &= 1{,}8+0{,}5 = 2{,}3
\end{aligned}
$$

Damit gilt $g(x)=-1{,}25x+2{,}3$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(-1{,}5\mid -2{,}9\right)$ und $Q\left(2\mid 2\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 1,4*x-0,8 ]] @canvas
@Algebrite.check(`1.4*x-0.8`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{2-\left(-2{,}9\right)}{2-\left(-1{,}5\right)} = \dfrac{4{,}9}{3{,}5} = 1{,}4
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=1{,}4$ und die Koordinaten von $P\left(-1{,}5\mid -2{,}9\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
-2{,}9 &= 1{,}4\cdot \left(-1{,}5\right)+b \\
-2{,}9 &= -2{,}1+b &&\quad |+2{,}1 \\
b &= -2{,}9+2{,}1 = -0{,}8
\end{aligned}
$$

Damit gilt $h(x)=1{,}4x-0{,}8$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(-4\mid -0{,}5\right)$ und $Q\left(1\mid -2\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -0,3*x-1,7 ]] @canvas
@Algebrite.check(`-0.3*x-1.7`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-2-\left(-0{,}5\right)}{1-\left(-4\right)} = \dfrac{-1{,}5}{5} = -0{,}3
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-0{,}3$ und die Koordinaten von $P\left(-4\mid -0{,}5\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
-0{,}5 &= \left(-0{,}3\right)\cdot \left(-4\right)+b \\
-0{,}5 &= 1{,}2+b &&\quad |-1{,}2 \\
b &= -0{,}5-1{,}2 = -1{,}7
\end{aligned}
$$

Damit gilt $k(x)=-0{,}3x-1{,}7$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

</section>
