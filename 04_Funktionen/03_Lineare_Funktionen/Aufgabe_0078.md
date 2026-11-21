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

tags: Lineare Funktionen, Schnittpunkt, Bruchrechnung, leicht, normal, Bestimmen

comment: Bestimme die Gleichungen von drei linearen Funktionen, deren Graphen die jeweils gegebene Gerade an der angegebenen Stelle orthogonal schneiden.

author: Martin Lommatzsch
-->

# Orthogonale Geraden an einer gegebenen Stelle bestimmen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

**Bestimme** jeweils die Funktionsgleichung einer linearen Funktion, deren Graph die gegebene Gerade an der angegebenen Stelle $x_0$ orthogonal schneidet.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Gegeben sind die lineare Funktion $f(x)=-4x+6$ und die Stelle $x_0=4$.

**Bestimme** die Funktionsgleichung von $g$, deren Graph den Graphen von $f$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 1/4*x-11 ]] @canvas
@Algebrite.check(`1/4*x-11`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=4$ in $f$:

$$
\begin{aligned}
y_S &= f(x_0) = -4x_0+6 \\
&= -4\cdot 4+6 = -10
\end{aligned}
$$

Der Schnittpunkt ist $S(4\mid -10)$.

Für die Steigungen orthogonaler Geraden gilt $m_f\cdot m_g=-1$. Mit $m_f=-4$ folgt:

$$
m_g=-\dfrac{1}{m_f}=-\dfrac{1}{-4}=\dfrac{1}{4}
$$

Für den Ordinatenachsenabschnitt werden $m_g=\frac{1}{4}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_g$ umgestellt:

$$
\begin{aligned}
g(x) &= m_gx+b_g \\
-10 &= \frac{1}{4}\cdot 4+b_g \\
-10 &= 1+b_g &&\quad |-1 \\
b_g &= -10-1 = -11
\end{aligned}
$$

Damit gilt $g(x)=\frac{1}{4}x-11$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Gegeben sind die lineare Funktion $h(x)=3x-5$ und die Stelle $x_0=-2$.

**Bestimme** die Funktionsgleichung von $k$, deren Graph den Graphen von $h$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -1/3*x-35/3 ]] @canvas
@Algebrite.check(`-1/3*x-35/3`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=-2$ in $h$:

$$
\begin{aligned}
y_S &= h(x_0) = 3x_0-5 \\
&= 3\cdot \left(-2\right)-5 = -11
\end{aligned}
$$

Der Schnittpunkt ist $S(-2\mid -11)$.

Für die Steigungen orthogonaler Geraden gilt $m_h\cdot m_k=-1$. Mit $m_h=3$ folgt:

$$
m_k=-\dfrac{1}{m_h}=-\dfrac{1}{3}
$$

Für den Ordinatenachsenabschnitt werden $m_k=-\frac{1}{3}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_k$ umgestellt:

$$
\begin{aligned}
k(x) &= m_kx+b_k \\
-11 &= \left(-\frac{1}{3}\right)\cdot \left(-2\right)+b_k \\
-11 &= \frac{2}{3}+b_k &&\quad |-\frac{2}{3} \\
b_k &= -11-\frac{2}{3} = -\frac{35}{3}
\end{aligned}
$$

Damit gilt $k(x)=-\frac{1}{3}x-\frac{35}{3}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Gegeben sind die lineare Funktion $p(x)=-6x-4$ und die Stelle $x_0=-3$.

**Bestimme** die Funktionsgleichung von $q$, deren Graph den Graphen von $p$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$q(x)=$ [[ 1/6*x+29/2 ]] @canvas
@Algebrite.check(`1/6*x+29/2`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=-3$ in $p$:

$$
\begin{aligned}
y_S &= p(x_0) = -6x_0-4 \\
&= -6\cdot \left(-3\right)-4 = 14
\end{aligned}
$$

Der Schnittpunkt ist $S(-3\mid 14)$.

Für die Steigungen orthogonaler Geraden gilt $m_p\cdot m_q=-1$. Mit $m_p=-6$ folgt:

$$
m_q=-\dfrac{1}{m_p}=-\dfrac{1}{-6}=\dfrac{1}{6}
$$

Für den Ordinatenachsenabschnitt werden $m_q=\frac{1}{6}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_q$ umgestellt:

$$
\begin{aligned}
q(x) &= m_qx+b_q \\
14 &= \frac{1}{6}\cdot \left(-3\right)+b_q \\
14 &= -\frac{1}{2}+b_q &&\quad |+\frac{1}{2} \\
b_q &= 14+\frac{1}{2} = \frac{29}{2}
\end{aligned}
$$

Damit gilt $q(x)=\frac{1}{6}x+\frac{29}{2}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

</section>
