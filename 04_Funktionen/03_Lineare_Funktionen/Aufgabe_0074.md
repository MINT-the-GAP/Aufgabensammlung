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

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(-1{,}25\mid -5\right)$ und $Q\left(2{,}5\mid -0{,}5\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 1,2*x-3,5 ]] @canvas
@Algebrite.check(`1.2*x-3.5`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-0{,}5-\left(-5\right)}{2{,}5-\left(-1{,}25\right)} = \dfrac{4{,}5}{3{,}75} = 1{,}2
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=1{,}2$ und die Koordinaten von $P\left(-1{,}25\mid -5\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
-5 &= 1{,}2\cdot \left(-1{,}25\right)+b \\
-5 &= -1{,}5+b &&\quad |+1{,}5 \\
b &= -5+1{,}5 = -3{,}5
\end{aligned}
$$

Damit gilt $f(x)=1{,}2x-3{,}5$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(-1{,}5\mid 3{,}8\right)$ und $Q\left(2{,}5\mid 0{,}6\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -0,8*x+2,6 ]] @canvas
@Algebrite.check(`-0.8*x+2.6`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{0{,}6-3{,}8}{2{,}5-\left(-1{,}5\right)} = \dfrac{-3{,}2}{4} = -0{,}8
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-0{,}8$ und die Koordinaten von $P\left(-1{,}5\mid 3{,}8\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
3{,}8 &= \left(-0{,}8\right)\cdot \left(-1{,}5\right)+b \\
3{,}8 &= 1{,}2+b &&\quad |-1{,}2 \\
b &= 3{,}8-1{,}2 = 2{,}6
\end{aligned}
$$

Damit gilt $g(x)=-0{,}8x+2{,}6$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(-0{,}75\mid -1{,}2\right)$ und $Q\left(1{,}25\mid -0{,}4\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 0,4*x-0,9 ]] @canvas
@Algebrite.check(`0.4*x-0.9`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-0{,}4-\left(-1{,}2\right)}{1{,}25-\left(-0{,}75\right)} = \dfrac{0{,}8}{2} = 0{,}4
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=0{,}4$ und die Koordinaten von $P\left(-0{,}75\mid -1{,}2\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
-1{,}2 &= 0{,}4\cdot \left(-0{,}75\right)+b \\
-1{,}2 &= -0{,}3+b &&\quad |+0{,}3 \\
b &= -1{,}2+0{,}3 = -0{,}9
\end{aligned}
$$

Damit gilt $h(x)=0{,}4x-0{,}9$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(-0{,}8\mid 0{,}2\right)$ und $Q\left(1{,}6\mid -4\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -1,75*x-1,2 ]] @canvas
@Algebrite.check(`-1.75*x-1.2`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-4-0{,}2}{1{,}6-\left(-0{,}8\right)} = \dfrac{-4{,}2}{2{,}4} = -1{,}75
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-1{,}75$ und die Koordinaten von $P\left(-0{,}8\mid 0{,}2\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
0{,}2 &= \left(-1{,}75\right)\cdot \left(-0{,}8\right)+b \\
0{,}2 &= 1{,}4+b &&\quad |-1{,}4 \\
b &= 0{,}2-1{,}4 = -1{,}2
\end{aligned}
$$

Damit gilt $k(x)=-1{,}75x-1{,}2$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen, Negative Zahlen)

</div>

</section>
