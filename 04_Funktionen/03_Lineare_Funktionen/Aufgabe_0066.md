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

tags: Lineare Funktionen, Ganze Zahlen, sehr leicht, niedrig, Bestimmen

comment: Bestimme die Funktionsterme von vier linearen Funktionen aus jeweils zwei gegebenen Punkten. Punktkoordinaten, Steigungen und Ordinatenachsenabschnitte sind ganze Zahlen.

author: Martin Lommatzsch
-->

# Lineare Funktionen aus zwei Punkten bestimmen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">

**Bestimme** jeweils den Funktionsterm der linearen Funktion, deren Graph durch die beiden angegebenen Punkte verläuft.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(-3\mid -13\right)$ und $Q\left(2\mid -3\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 2*x-7 ]] @canvas
@Algebrite.check(`2*x-7`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-3-\left(-13\right)}{2-\left(-3\right)} = \dfrac{10}{5} = 2
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=2$ und die Koordinaten von $P\left(-3\mid -13\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
-13 &= 2\cdot \left(-3\right)+b \\
-13 &= -6+b &&\quad |+6 \\
b &= -13+6 = -7
\end{aligned}
$$

Damit gilt $f(x)=2x-7$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(-2\mid 15\right)$ und $Q\left(3\mid 0\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -3*x+9 ]] @canvas
@Algebrite.check(`-3*x+9`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{0-15}{3-\left(-2\right)} = \dfrac{-15}{5} = -3
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-3$ und die Koordinaten von $P\left(-2\mid 15\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
15 &= \left(-3\right)\cdot \left(-2\right)+b \\
15 &= 6+b &&\quad |-6 \\
b &= 15-6 = 9
\end{aligned}
$$

Damit gilt $g(x)=-3x+9$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(1\mid -1\right)$ und $Q\left(4\mid 14\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 5*x-6 ]] @canvas
@Algebrite.check(`5*x-6`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{14-\left(-1\right)}{4-1} = \dfrac{15}{3} = 5
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=5$ und die Koordinaten von $P\left(1\mid -1\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
-1 &= 5\cdot 1+b \\
-1 &= 5+b &&\quad |-5 \\
b &= -1-5 = -6
\end{aligned}
$$

Damit gilt $h(x)=5x-6$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(-5\mid 1\right)$ und $Q\left(-2\mid -2\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -x-4 ]] @canvas
@Algebrite.check(`-x-4`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-2-1}{-2-\left(-5\right)} = \dfrac{-3}{3} = -1
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-1$ und die Koordinaten von $P\left(-5\mid 1\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
1 &= \left(-1\right)\cdot \left(-5\right)+b \\
1 &= 5+b &&\quad |-5 \\
b &= 1-5 = -4
\end{aligned}
$$

Damit gilt $k(x)=-x-4$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

</section>
