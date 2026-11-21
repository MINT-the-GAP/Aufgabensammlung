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

tags: Lineare Funktionen, Nullstellen, Schnittpunkt, Dreiecke, Fläche, Bruchrechnung, mittel, hoch, Bestimmen, Berechnen

comment: Bestimme eine lineare Funktion aus zwei Punkten. Berechne ihre Nullstelle, den Schnittpunkt mit einer orthogonalen Geraden und den Flächeninhalt des Dreiecks aus den beiden Ordinatenschnittpunkten und dem Schnittpunkt der Geraden.

author: Martin Lommatzsch
-->

# Lineare Funktionen, orthogonale Geraden und Dreiecksfläche

<img alt="Vernetzungsgrad 4" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P(-2\mid -2)$ und $Q(4\mid 7)$. Die Teilaufgaben beziehen sich auf dieselbe Funktion.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

**Bestimme** die Funktionsgleichung von $f$ aus den beiden gegebenen Punkten.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 3/2*x+1 ]] @canvas
@Algebrite.check(`3/2*x+1`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m_f &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{7-(-2)}{4-(-2)} = \dfrac{9}{6} = \frac{3}{2}
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m_f=\frac{3}{2}$ und die Koordinaten von $P(-2\mid -2)$ eingesetzt. Anschließend wird nach $b_f$ umgestellt:

$$
\begin{aligned}
f(x) &= m_fx+b_f \\
-2 &= \frac{3}{2}\cdot (-2)+b_f \\
-2 &= -3+b_f &&\quad |+3 \\
b_f &= -2+3 = 1
\end{aligned}
$$

Damit gilt $f(x)=\frac{3}{2}x+1$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

__$b)$__

**Berechne** die Nullstelle der Funktion $f$ aus Teilaufgabe $a)$.

<!-- data-hint-button="1" data-solution-button="3" -->
$x_N=$ [[ -2/3 ]] @canvas
@Algebrite.check(`-2/3`)
[[?]] @Explain
****************
An der Nullstelle ist der Funktionswert gleich null:

$$
\begin{aligned}
f(x_N) &= 0 \\
\frac{3}{2}x_N+1 &= 0 &&\quad |-1 \\
\frac{3}{2}x_N &= -1 &&\quad |\cdot\frac{2}{3} \\
x_N &= -\frac{2}{3}
\end{aligned}
$$

Die Nullstelle lautet $x_N=-\frac{2}{3}$. Der Schnittpunkt mit der Abszissenachse ist $N\left(-\frac{2}{3}\mid 0\right)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Nullstellen, Bruchrechnung)

</div>

<div class="flex-child">

__$c)$__

Der Graph einer weiteren linearen Funktion $g$ verläuft orthogonal zum Graphen von $f$ und schneidet die Ordinatenachse im Punkt $B_g(0\mid 14)$.

**Berechne** die Koordinaten des Schnittpunkts $S$ der beiden Graphen.

<!-- data-hint-button="1" data-solution-button="3" -->
$S($ [[ 6 ]] @canvas $\mid$ [[ 10 ]] @canvas $)$
@Algebrite.check(`[6;10]`)
[[?]] @Explain
****************
Für die Steigungen orthogonaler Geraden gilt $m_f\cdot m_g=-1$. Mit $m_f=\frac{3}{2}$ folgt:

$$
m_g=-\dfrac{1}{m_f}=-\dfrac{1}{\frac{3}{2}}=-\frac{2}{3}
$$

Der Punkt $B_g(0\mid 14)$ liegt auf dem Graphen von $g$. Damit ergibt sich der Ordinatenachsenabschnitt:

$$
\begin{aligned}
g(x) &= m_gx+b_g \\
14 &= \left(-\frac{2}{3}\right)\cdot 0+b_g \\
b_g &= 14
\end{aligned}
$$

Somit lautet die zweite Funktionsgleichung $g(x)=-\frac{2}{3}x+14$.

Am Schnittpunkt stimmen die Funktionswerte überein:

$$
\begin{aligned}
f(x_S) &= g(x_S) \\
\frac{3}{2}x_S+1 &= -\frac{2}{3}x_S+14 &&\quad |+\frac{2}{3}x_S-1 \\
\left(\frac{3}{2}+\frac{2}{3}\right)x_S &= 13 \\
\frac{13}{6}x_S &= 13 &&\quad |\cdot\frac{6}{13} \\
x_S &= 6
\end{aligned}
$$

Für die Ordinate wird $x_S=6$ in $f$ eingesetzt:

$$
y_S=f(6)=\frac{3}{2}\cdot 6+1=10
$$

Die Probe mit der zweiten Funktion ergibt $g(6)=-\frac{2}{3}\cdot 6+14=10$.

Der Schnittpunkt lautet $S(6\mid 10)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

__$d)$__

Die Graphen von $f$ und $g$ schneiden die Ordinatenachse in den Punkten $B_f$ und $B_g$.

**Berechne** den Flächeninhalt des Dreiecks $B_fB_gS$ in Flächeneinheiten $(FE)$.

<!-- data-hint-button="1" data-solution-button="3" -->
$A=$ [[ 39 ]] @canvas $\mathrm{FE}$
@Algebrite.check(`39`)
[[?]] @Explain
****************
Die Ordinatenschnittpunkte ergeben sich aus den Funktionswerten an der Stelle $x=0$:

$$
f(0)=1,\qquad g(0)=14
$$

Die Eckpunkte des Dreiecks sind damit $B_f(0\mid 1)$, $B_g(0\mid 14)$ und $S(6\mid 10)$.

Als Grundseite wird die Strecke $\overline{B_fB_g}$ auf der Ordinatenachse gewählt. Ihre Länge ist die Differenz der Ordinaten:

$$
\ell=|14-1|\,\mathrm{LE}=13\,\mathrm{LE}
$$

Die zugehörige Höhe ist der senkrechte Abstand von $S$ zur Ordinatenachse. Da diese Achse durch $x=0$ verläuft, gilt:

$$
h=|6-0|\,\mathrm{LE}=6\,\mathrm{LE}
$$

Für den Flächeninhalt folgt:

$$
\begin{aligned}
A &= \frac{1}{2}\cdot\ell\cdot h \\
&= \frac{1}{2}\cdot 13\,\mathrm{LE}\cdot 6\,\mathrm{LE} \\
&= 39\,\mathrm{FE}
\end{aligned}
$$

Das Dreieck hat einen Flächeninhalt von $39\,\mathrm{FE}$.
****************

@resetter

@ADetails(1=BE; Dreiecke, Fläche, Lineare Funktionen)

</div>

</section>
