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

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(1\mid 7\right)$ und $Q\left(5\mid 19\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 3*x+4 ]] @canvas
@Algebrite.check(`3*x+4`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{19-7}{5-1} = \dfrac{12}{4} = 3
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=3$ und die Koordinaten von $P\left(1\mid 7\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
7 &= 3\cdot 1+b \\
7 &= 3+b &&\quad |-3 \\
b &= 7-3 = 4
\end{aligned}
$$

Damit gilt $f(x)=3x+4$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(2\mid 14\right)$ und $Q\left(4\mid 26\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 6*x+2 ]] @canvas
@Algebrite.check(`6*x+2`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{26-14}{4-2} = \dfrac{12}{2} = 6
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=6$ und die Koordinaten von $P\left(2\mid 14\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
14 &= 6\cdot 2+b \\
14 &= 12+b &&\quad |-12 \\
b &= 14-12 = 2
\end{aligned}
$$

Damit gilt $g(x)=6x+2$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(3\mid 15\right)$ und $Q\left(8\mid 25\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 2*x+9 ]] @canvas
@Algebrite.check(`2*x+9`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{25-15}{8-3} = \dfrac{10}{5} = 2
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=2$ und die Koordinaten von $P\left(3\mid 15\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
15 &= 2\cdot 3+b \\
15 &= 6+b &&\quad |-6 \\
b &= 15-6 = 9
\end{aligned}
$$

Damit gilt $h(x)=2x+9$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(4\mid 27\right)$ und $Q\left(7\mid 42\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ 5*x+7 ]] @canvas
@Algebrite.check(`5*x+7`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{42-27}{7-4} = \dfrac{15}{3} = 5
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=5$ und die Koordinaten von $P\left(4\mid 27\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
27 &= 5\cdot 4+b \\
27 &= 20+b &&\quad |-20 \\
b &= 27-20 = 7
\end{aligned}
$$

Damit gilt $k(x)=5x+7$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
