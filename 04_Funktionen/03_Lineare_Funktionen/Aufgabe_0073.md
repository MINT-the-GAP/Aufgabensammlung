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

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(-0{,}8\mid 1\right)$ und $Q\left(2{,}4\mid 3{,}4\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 0,75*x+1,6 ]] @canvas
@Algebrite.check(`0.75*x+1.6`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{3{,}4-1}{2{,}4-\left(-0{,}8\right)} = \dfrac{2{,}4}{3{,}2} = 0{,}75
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=0{,}75$ und die Koordinaten von $P\left(-0{,}8\mid 1\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
1 &= 0{,}75\cdot \left(-0{,}8\right)+b \\
1 &= -0{,}6+b &&\quad |+0{,}6 \\
b &= 1+0{,}6 = 1{,}6
\end{aligned}
$$

Damit gilt $f(x)=0{,}75x+1{,}6$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(-0{,}5\mid 1{,}5\right)$ und $Q\left(1{,}5\mid -1{,}7\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -1,6*x+0,7 ]] @canvas
@Algebrite.check(`-1.6*x+0.7`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-1{,}7-1{,}5}{1{,}5-\left(-0{,}5\right)} = \dfrac{-3{,}2}{2} = -1{,}6
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-1{,}6$ und die Koordinaten von $P\left(-0{,}5\mid 1{,}5\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
1{,}5 &= \left(-1{,}6\right)\cdot \left(-0{,}5\right)+b \\
1{,}5 &= 0{,}8+b &&\quad |-0{,}8 \\
b &= 1{,}5-0{,}8 = 0{,}7
\end{aligned}
$$

Damit gilt $g(x)=-1{,}6x+0{,}7$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(-3\mid -3{,}2\right)$ und $Q\left(4\mid -1{,}8\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 0,2*x-2,6 ]] @canvas
@Algebrite.check(`0.2*x-2.6`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-1{,}8-\left(-3{,}2\right)}{4-\left(-3\right)} = \dfrac{1{,}4}{7} = 0{,}2
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=0{,}2$ und die Koordinaten von $P\left(-3\mid -3{,}2\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
-3{,}2 &= 0{,}2\cdot \left(-3\right)+b \\
-3{,}2 &= -0{,}6+b &&\quad |+0{,}6 \\
b &= -3{,}2+0{,}6 = -2{,}6
\end{aligned}
$$

Damit gilt $h(x)=0{,}2x-2{,}6$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(0{,}6\mid 1{,}9\right)$ und $Q\left(2{,}2\mid -2{,}1\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -2,5*x+3,4 ]] @canvas
@Algebrite.check(`-2.5*x+3.4`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-2{,}1-1{,}9}{2{,}2-0{,}6} = \dfrac{-4}{1{,}6} = -2{,}5
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-2{,}5$ und die Koordinaten von $P\left(0{,}6\mid 1{,}9\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
1{,}9 &= \left(-2{,}5\right)\cdot 0{,}6+b \\
1{,}9 &= -1{,}5+b &&\quad |+1{,}5 \\
b &= 1{,}9+1{,}5 = 3{,}4
\end{aligned}
$$

Damit gilt $k(x)=-2{,}5x+3{,}4$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

</section>
