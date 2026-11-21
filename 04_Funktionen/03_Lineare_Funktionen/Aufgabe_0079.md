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

Gegeben sind die lineare Funktion $f(x)=7x-2$ und die Stelle $x_0=1$.

**Bestimme** die Funktionsgleichung von $g$, deren Graph den Graphen von $f$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -1/7*x+36/7 ]] @canvas
@Algebrite.check(`-1/7*x+36/7`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=1$ in $f$:

$$
\begin{aligned}
y_S &= f(x_0) = 7x_0-2 \\
&= 7\cdot 1-2 = 5
\end{aligned}
$$

Der Schnittpunkt ist $S(1\mid 5)$.

Für die Steigungen orthogonaler Geraden gilt $m_f\cdot m_g=-1$. Mit $m_f=7$ folgt:

$$
m_g=-\dfrac{1}{m_f}=-\dfrac{1}{7}
$$

Für den Ordinatenachsenabschnitt werden $m_g=-\frac{1}{7}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_g$ umgestellt:

$$
\begin{aligned}
g(x) &= m_gx+b_g \\
5 &= \left(-\frac{1}{7}\right)\cdot 1+b_g \\
5 &= -\frac{1}{7}+b_g &&\quad |+\frac{1}{7} \\
b_g &= 5+\frac{1}{7} = \frac{36}{7}
\end{aligned}
$$

Damit gilt $g(x)=-\frac{1}{7}x+\frac{36}{7}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Gegeben sind die lineare Funktion $h(x)=-5x+8$ und die Stelle $x_0=5$.

**Bestimme** die Funktionsgleichung von $k$, deren Graph den Graphen von $h$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ 1/5*x-18 ]] @canvas
@Algebrite.check(`1/5*x-18`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=5$ in $h$:

$$
\begin{aligned}
y_S &= h(x_0) = -5x_0+8 \\
&= -5\cdot 5+8 = -17
\end{aligned}
$$

Der Schnittpunkt ist $S(5\mid -17)$.

Für die Steigungen orthogonaler Geraden gilt $m_h\cdot m_k=-1$. Mit $m_h=-5$ folgt:

$$
m_k=-\dfrac{1}{m_h}=-\dfrac{1}{-5}=\dfrac{1}{5}
$$

Für den Ordinatenachsenabschnitt werden $m_k=\frac{1}{5}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_k$ umgestellt:

$$
\begin{aligned}
k(x) &= m_kx+b_k \\
-17 &= \frac{1}{5}\cdot 5+b_k \\
-17 &= 1+b_k &&\quad |-1 \\
b_k &= -17-1 = -18
\end{aligned}
$$

Damit gilt $k(x)=\frac{1}{5}x-18$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Gegeben sind die lineare Funktion $p(x)=4x+7$ und die Stelle $x_0=-4$.

**Bestimme** die Funktionsgleichung von $q$, deren Graph den Graphen von $p$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$q(x)=$ [[ -1/4*x-10 ]] @canvas
@Algebrite.check(`-1/4*x-10`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=-4$ in $p$:

$$
\begin{aligned}
y_S &= p(x_0) = 4x_0+7 \\
&= 4\cdot \left(-4\right)+7 = -9
\end{aligned}
$$

Der Schnittpunkt ist $S(-4\mid -9)$.

Für die Steigungen orthogonaler Geraden gilt $m_p\cdot m_q=-1$. Mit $m_p=4$ folgt:

$$
m_q=-\dfrac{1}{m_p}=-\dfrac{1}{4}
$$

Für den Ordinatenachsenabschnitt werden $m_q=-\frac{1}{4}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_q$ umgestellt:

$$
\begin{aligned}
q(x) &= m_qx+b_q \\
-9 &= \left(-\frac{1}{4}\right)\cdot \left(-4\right)+b_q \\
-9 &= 1+b_q &&\quad |-1 \\
b_q &= -9-1 = -10
\end{aligned}
$$

Damit gilt $q(x)=-\frac{1}{4}x-10$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

</section>
