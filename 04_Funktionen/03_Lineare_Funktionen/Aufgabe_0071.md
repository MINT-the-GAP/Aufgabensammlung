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

tags: Lineare Funktionen, Bruchrechnung, Ganze Zahlen, leicht, niedrig, Bestimmen

comment: Bestimme die Funktionsterme von vier linearen Funktionen aus jeweils zwei gegebenen Punkten. Die Punktkoordinaten enthalten Brüche und ganze Zahlen.

author: Martin Lommatzsch
-->

# Lineare Funktionen aus zwei Punkten bestimmen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

**Bestimme** jeweils den Funktionsterm der linearen Funktion, deren Graph durch die beiden angegebenen Punkte verläuft.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P\left(-1\mid -\frac{19}{6}\right)$ und $Q\left(4\mid 1\right)$.

**Bestimme** den Funktionsterm von $f$.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 5/6*x-7/3 ]] @canvas
@Algebrite.check(`5/6*x-7/3`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{1-\left(-\frac{19}{6}\right)}{4-\left(-1\right)} = \dfrac{\frac{25}{6}}{5} = \frac{5}{6}
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=\frac{5}{6}$ und die Koordinaten von $P\left(-1\mid -\frac{19}{6}\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
f(x) &= mx+b \\
-\frac{19}{6} &= \frac{5}{6}\cdot \left(-1\right)+b \\
-\frac{19}{6} &= -\frac{5}{6}+b &&\quad |+\frac{5}{6} \\
b &= -\frac{19}{6}+\frac{5}{6} = -\frac{7}{3}
\end{aligned}
$$

Damit gilt $f(x)=\frac{5}{6}x-\frac{7}{3}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der linearen Funktion $g$ verläuft durch die Punkte $P\left(\frac{7}{8}\mid -1\right)$ und $Q\left(-\frac{7}{8}\mid 0\right)$.

**Bestimme** den Funktionsterm von $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -4/7*x-1/2 ]] @canvas
@Algebrite.check(`-4/7*x-1/2`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{0-\left(-1\right)}{-\frac{7}{8}-\frac{7}{8}} = \dfrac{1}{-\frac{7}{4}} = -\frac{4}{7}
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-\frac{4}{7}$ und die Koordinaten von $P\left(\frac{7}{8}\mid -1\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
g(x) &= mx+b \\
-1 &= \left(-\frac{4}{7}\right)\cdot \frac{7}{8}+b \\
-1 &= -\frac{1}{2}+b &&\quad |+\frac{1}{2} \\
b &= -1+\frac{1}{2} = -\frac{1}{2}
\end{aligned}
$$

Damit gilt $g(x)=-\frac{4}{7}x-\frac{1}{2}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Der Graph der linearen Funktion $h$ verläuft durch die Punkte $P\left(-\frac{5}{3}\mid -\frac{5}{3}\right)$ und $Q\left(5\mid \frac{23}{3}\right)$.

**Bestimme** den Funktionsterm von $h$.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 7/5*x+2/3 ]] @canvas
@Algebrite.check(`7/5*x+2/3`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{\frac{23}{3}-\left(-\frac{5}{3}\right)}{5-\left(-\frac{5}{3}\right)} = \dfrac{\frac{28}{3}}{\frac{20}{3}} = \frac{7}{5}
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=\frac{7}{5}$ und die Koordinaten von $P\left(-\frac{5}{3}\mid -\frac{5}{3}\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
h(x) &= mx+b \\
-\frac{5}{3} &= \frac{7}{5}\cdot \left(-\frac{5}{3}\right)+b \\
-\frac{5}{3} &= -\frac{7}{3}+b &&\quad |+\frac{7}{3} \\
b &= -\frac{5}{3}+\frac{7}{3} = \frac{2}{3}
\end{aligned}
$$

Damit gilt $h(x)=\frac{7}{5}x+\frac{2}{3}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$d)$__

Der Graph der linearen Funktion $k$ verläuft durch die Punkte $P\left(2\mid -\frac{2}{3}\right)$ und $Q\left(-\frac{2}{3}\mid \frac{4}{3}\right)$.

**Bestimme** den Funktionsterm von $k$.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -3/4*x+5/6 ]] @canvas
@Algebrite.check(`-3/4*x+5/6`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{\frac{4}{3}-\left(-\frac{2}{3}\right)}{-\frac{2}{3}-2} = \dfrac{2}{-\frac{8}{3}} = -\frac{3}{4}
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m=-\frac{3}{4}$ und die Koordinaten von $P\left(2\mid -\frac{2}{3}\right)$ eingesetzt. Anschließend wird nach $b$ umgestellt:

$$
\begin{aligned}
k(x) &= mx+b \\
-\frac{2}{3} &= \left(-\frac{3}{4}\right)\cdot 2+b \\
-\frac{2}{3} &= -\frac{3}{2}+b &&\quad |+\frac{3}{2} \\
b &= -\frac{2}{3}+\frac{3}{2} = \frac{5}{6}
\end{aligned}
$$

Damit gilt $k(x)=-\frac{3}{4}x+\frac{5}{6}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung, Ganze Zahlen)

</div>

</section>
