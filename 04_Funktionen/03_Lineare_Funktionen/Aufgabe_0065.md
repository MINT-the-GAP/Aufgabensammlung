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

tags: Lineare Funktionen, sehr leicht, sehr niedrig, Bestimmen

comment: Bestimme die Funktionsterme von vier linearen Funktionen aus jeweils zwei gegebenen Punkten. Punktkoordinaten, Steigungen und Ordinatenachsenabschnitte sind natürliche Zahlen.

author: Martin Lommatzsch
-->

# Lineare Funktionen aus zwei Punkten bestimmen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">

**Bestimme** jeweils den Funktionsterm der linearen Funktion, deren Graph durch die beiden angegebenen Punkte verläuft.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(1\mid 10\right)$ und $Q\left(6\mid 30\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 4*x+6 ]] @canvas
@Algebrite.check(`4*x+6`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{30-10}{6-1} = \dfrac{20}{5} = 4
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=4$ und die Koordinaten von $P\left(1\mid 10\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
10 &= 4\cdot 1+b \\
10 &= 4+b &&\quad |-4 \\
b &= 10-4 = 6
\end{aligned}
$$

Damit gilt $f(x)=4x+6$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(2\mid 17\right)$ und $Q\left(5\mid 38\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 7*x+3 ]] @canvas
@Algebrite.check(`7*x+3`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{38-17}{5-2} = \dfrac{21}{3} = 7
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=7$ und die Koordinaten von $P\left(2\mid 17\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
17 &= 7\cdot 2+b \\
17 &= 14+b &&\quad |-14 \\
b &= 17-14 = 3
\end{aligned}
$$

Damit gilt $g(x)=7x+3$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(3\mid 11\right)$ und $Q\left(7\mid 15\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ x+8 ]] @canvas
@Algebrite.check(`x+8`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{15-11}{7-3} = \dfrac{4}{4} = 1
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=1$ und die Koordinaten von $P\left(3\mid 11\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
11 &= 1\cdot 3+b \\
11 &= 3+b &&\quad |-3 \\
b &= 11-3 = 8
\end{aligned}
$$

Damit gilt $h(x)=x+8$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(4\mid 22\right)$ und $Q\left(8\mid 34\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ 3*x+10 ]] @canvas
@Algebrite.check(`3*x+10`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{34-22}{8-4} = \dfrac{12}{4} = 3
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=3$ und die Koordinaten von $P\left(4\mid 22\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
22 &= 3\cdot 4+b \\
22 &= 12+b &&\quad |-12 \\
b &= 22-12 = 10
\end{aligned}
$$

Damit gilt $k(x)=3x+10$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
