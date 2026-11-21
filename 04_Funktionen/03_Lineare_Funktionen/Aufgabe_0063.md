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

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(1\mid 7\right)$ und $Q\left(4\mid 13\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 2*x+5 ]] @canvas
@Algebrite.check(`2*x+5`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{13-7}{4-1} = \dfrac{6}{3} = 2
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=2$ und die Koordinaten von $P\left(1\mid 7\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
7 &= 2\cdot 1+b \\
7 &= 2+b &&\quad |-2 \\
b &= 7-2 = 5
\end{aligned}
$$

Damit gilt $f(x)=2x+5$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(2\mid 11\right)$ und $Q\left(8\mid 35\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 4*x+3 ]] @canvas
@Algebrite.check(`4*x+3`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{35-11}{8-2} = \dfrac{24}{6} = 4
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=4$ und die Koordinaten von $P\left(2\mid 11\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
11 &= 4\cdot 2+b \\
11 &= 8+b &&\quad |-8 \\
b &= 11-8 = 3
\end{aligned}
$$

Damit gilt $g(x)=4x+3$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(3\mid 17\right)$ und $Q\left(7\mid 29\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 3*x+8 ]] @canvas
@Algebrite.check(`3*x+8`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{29-17}{7-3} = \dfrac{12}{4} = 3
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=3$ und die Koordinaten von $P\left(3\mid 17\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
17 &= 3\cdot 3+b \\
17 &= 9+b &&\quad |-9 \\
b &= 17-9 = 8
\end{aligned}
$$

Damit gilt $h(x)=3x+8$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(4\mid 21\right)$ und $Q\left(9\mid 46\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ 5*x+1 ]] @canvas
@Algebrite.check(`5*x+1`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{46-21}{9-4} = \dfrac{25}{5} = 5
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=5$ und die Koordinaten von $P\left(4\mid 21\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
21 &= 5\cdot 4+b \\
21 &= 20+b &&\quad |-20 \\
b &= 21-20 = 1
\end{aligned}
$$

Damit gilt $k(x)=5x+1$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen)

</div>

</section>
