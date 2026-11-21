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

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(-1\mid 11\right)$ und $Q\left(2\mid -1\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ -4*x+7 ]] @canvas
@Algebrite.check(`-4*x+7`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-1-11}{2-\left(-1\right)} = \dfrac{-12}{3} = -4
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-4$ und die Koordinaten von $P\left(-1\mid 11\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
11 &= \left(-4\right)\cdot \left(-1\right)+b \\
11 &= 4+b &&\quad |-4 \\
b &= 11-4 = 7
\end{aligned}
$$

Damit gilt $f(x)=-4x+7$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(-4\mid -14\right)$ und $Q\left(-1\mid -5\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 3*x-2 ]] @canvas
@Algebrite.check(`3*x-2`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-5-\left(-14\right)}{-1-\left(-4\right)} = \dfrac{9}{3} = 3
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=3$ und die Koordinaten von $P\left(-4\mid -14\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
-14 &= 3\cdot \left(-4\right)+b \\
-14 &= -12+b &&\quad |+12 \\
b &= -14+12 = -2
\end{aligned}
$$

Damit gilt $g(x)=3x-2$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(3\mid -17\right)$ und $Q\left(6\mid -23\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ -2*x-11 ]] @canvas
@Algebrite.check(`-2*x-11`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-23-\left(-17\right)}{6-3} = \dfrac{-6}{3} = -2
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-2$ und die Koordinaten von $P\left(3\mid -17\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
-17 &= \left(-2\right)\cdot 3+b \\
-17 &= -6+b &&\quad |+6 \\
b &= -17+6 = -11
\end{aligned}
$$

Damit gilt $h(x)=-2x-11$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(-3\mid -8\right)$ und $Q\left(4\mid -1\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ x-5 ]] @canvas
@Algebrite.check(`x-5`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-1-\left(-8\right)}{4-\left(-3\right)} = \dfrac{7}{7} = 1
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=1$ und die Koordinaten von $P\left(-3\mid -8\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
-8 &= 1\cdot \left(-3\right)+b \\
-8 &= -3+b &&\quad |+3 \\
b &= -8+3 = -5
\end{aligned}
$$

Damit gilt $k(x)=x-5$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Ganze Zahlen)

</div>

</section>
