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

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(-2\mid -9\right)$ und $Q\left(2\mid 7\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 4*x-1 ]] @canvas
@Algebrite.check(`4*x-1`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{7-\left(-9\right)}{2-\left(-2\right)} = \dfrac{16}{4} = 4
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=4$ und die Koordinaten von $P\left(-2\mid -9\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
-9 &= 4\cdot \left(-2\right)+b \\
-9 &= -8+b &&\quad |+8 \\
b &= -9+8 = -1
\end{aligned}
$$

Damit gilt $f(x)=4x-1$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(-1\mid 11\right)$ und $Q\left(3\mid -13\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -6*x+5 ]] @canvas
@Algebrite.check(`-6*x+5`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-13-11}{3-\left(-1\right)} = \dfrac{-24}{4} = -6
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-6$ und die Koordinaten von $P\left(-1\mid 11\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
11 &= \left(-6\right)\cdot \left(-1\right)+b \\
11 &= 6+b &&\quad |-6 \\
b &= 11-6 = 5
\end{aligned}
$$

Damit gilt $g(x)=-6x+5$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(-4\mid -12\right)$ und $Q\left(1\mid -2\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 2*x-4 ]] @canvas
@Algebrite.check(`2*x-4`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-2-\left(-12\right)}{1-\left(-4\right)} = \dfrac{10}{5} = 2
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=2$ und die Koordinaten von $P\left(-4\mid -12\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
-12 &= 2\cdot \left(-4\right)+b \\
-12 &= -8+b &&\quad |+8 \\
b &= -12+8 = -4
\end{aligned}
$$

Damit gilt $h(x)=2x-4$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(1\mid -14\right)$ und $Q\left(5\mid -26\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -3*x-11 ]] @canvas
@Algebrite.check(`-3*x-11`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-26-\left(-14\right)}{5-1} = \dfrac{-12}{4} = -3
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-3$ und die Koordinaten von $P\left(1\mid -14\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
-14 &= \left(-3\right)\cdot 1+b \\
-14 &= -3+b &&\quad |+3 \\
b &= -14+3 = -11
\end{aligned}
$$

Damit gilt $k(x)=-3x-11$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

</section>
