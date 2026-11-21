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

Der Graph der linearen Funktion $f$ verläuft durch die Punkte $P(-3\mid 3)$ und $Q(6\mid -9)$. Die Teilaufgaben beziehen sich auf dieselbe Funktion.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

**Bestimme** die Funktionsgleichung von $f$ aus den beiden gegebenen Punkten.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ -4/3*x-1 ]] @canvas
@Algebrite.check(`-4/3*x-1`)
[[?]] @Explain
****************
Für die Steigung gilt:

$$
\begin{aligned}
m_f &= \dfrac{\Delta y}{\Delta x} = \dfrac{y_Q-y_P}{x_Q-x_P} \\
&= \dfrac{-9-3}{6-(-3)} = \dfrac{-12}{9} = -\frac{4}{3}
\end{aligned}
$$

Für den Ordinatenachsenabschnitt werden $m_f=-\frac{4}{3}$ und die Koordinaten von $P(-3\mid 3)$ eingesetzt. Anschließend wird nach $b_f$ umgestellt:

$$
\begin{aligned}
f(x) &= m_fx+b_f \\
3 &= \left(-\frac{4}{3}\right)\cdot (-3)+b_f \\
3 &= 4+b_f &&\quad |-4 \\
b_f &= 3-4 = -1
\end{aligned}
$$

Damit gilt $f(x)=-\frac{4}{3}x-1$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

__$b)$__

**Berechne** die Nullstelle der Funktion $f$ aus Teilaufgabe $a)$.

<!-- data-hint-button="1" data-solution-button="3" -->
$x_N=$ [[ -3/4 ]] @canvas
@Algebrite.check(`-3/4`)
[[?]] @Explain
****************
An der Nullstelle ist der Funktionswert gleich null:

$$
\begin{aligned}
f(x_N) &= 0 \\
-\frac{4}{3}x_N-1 &= 0 &&\quad |+1 \\
-\frac{4}{3}x_N &= 1 &&\quad |\cdot\left(-\frac{3}{4}\right) \\
x_N &= -\frac{3}{4}
\end{aligned}
$$

Die Nullstelle lautet $x_N=-\frac{3}{4}$. Der Schnittpunkt mit der Abszissenachse ist $N\left(-\frac{3}{4}\mid 0\right)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Nullstellen, Bruchrechnung)

</div>

<div class="flex-child">

__$c)$__

Der Graph einer weiteren linearen Funktion $g$ verläuft orthogonal zum Graphen von $f$ und schneidet die Ordinatenachse im Punkt $B_g(0\mid 24)$.

**Berechne** die Koordinaten des Schnittpunkts $S$ der beiden Graphen.

<!-- data-hint-button="1" data-solution-button="3" -->
$S($ [[ -12 ]] @canvas $\mid$ [[ 15 ]] @canvas $)$
@Algebrite.check(`[-12;15]`)
[[?]] @Explain
****************
Für die Steigungen orthogonaler Geraden gilt $m_f\cdot m_g=-1$. Mit $m_f=-\frac{4}{3}$ folgt:

$$
m_g=-\dfrac{1}{m_f}=-\dfrac{1}{-\frac{4}{3}}=\frac{3}{4}
$$

Der Punkt $B_g(0\mid 24)$ liegt auf dem Graphen von $g$. Damit ergibt sich der Ordinatenachsenabschnitt:

$$
\begin{aligned}
g(x) &= m_gx+b_g \\
24 &= \frac{3}{4}\cdot 0+b_g \\
b_g &= 24
\end{aligned}
$$

Somit lautet die zweite Funktionsgleichung $g(x)=\frac{3}{4}x+24$.

Am Schnittpunkt stimmen die Funktionswerte überein:

$$
\begin{aligned}
f(x_S) &= g(x_S) \\
-\frac{4}{3}x_S-1 &= \frac{3}{4}x_S+24 &&\quad |-\frac{3}{4}x_S+1 \\
\left(-\frac{4}{3}-\frac{3}{4}\right)x_S &= 25 \\
-\frac{25}{12}x_S &= 25 &&\quad |\cdot\left(-\frac{12}{25}\right) \\
x_S &= -12
\end{aligned}
$$

Für die Ordinate wird $x_S=-12$ in $f$ eingesetzt:

$$
y_S=f(-12)=\left(-\frac{4}{3}\right)\cdot (-12)-1=15
$$

Die Probe mit der zweiten Funktion ergibt $g(-12)=\frac{3}{4}\cdot (-12)+24=15$.

Der Schnittpunkt lautet $S(-12\mid 15)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

__$d)$__

Die Graphen von $f$ und $g$ schneiden die Ordinatenachse in den Punkten $B_f$ und $B_g$.

**Berechne** den Flächeninhalt des Dreiecks $B_fB_gS$ in Flächeneinheiten $(FE)$.

<!-- data-hint-button="1" data-solution-button="3" -->
$A=$ [[ 150 ]] @canvas $\mathrm{FE}$
@Algebrite.check(`150`)
[[?]] @Explain
****************
Die Ordinatenschnittpunkte ergeben sich aus den Funktionswerten an der Stelle $x=0$:

$$
f(0)=-1,\qquad g(0)=24
$$

Die Eckpunkte des Dreiecks sind damit $B_f(0\mid -1)$, $B_g(0\mid 24)$ und $S(-12\mid 15)$.

Als Grundseite wird die Strecke $\overline{B_fB_g}$ auf der Ordinatenachse gewählt. Ihre Länge ist die Differenz der Ordinaten:

$$
\ell=|24-(-1)|\,\mathrm{LE}=25\,\mathrm{LE}
$$

Die zugehörige Höhe ist der senkrechte Abstand von $S$ zur Ordinatenachse. Da diese Achse durch $x=0$ verläuft, gilt:

$$
h=|-12-0|\,\mathrm{LE}=12\,\mathrm{LE}
$$

Für den Flächeninhalt folgt:

$$
\begin{aligned}
A &= \frac{1}{2}\cdot\ell\cdot h \\
&= \frac{1}{2}\cdot 25\,\mathrm{LE}\cdot 12\,\mathrm{LE} \\
&= 150\,\mathrm{FE}
\end{aligned}
$$

Das Dreieck hat einen Flächeninhalt von $150\,\mathrm{FE}$.
****************

@resetter

@ADetails(1=BE; Dreiecke, Fläche, Lineare Funktionen)

</div>

</section>
