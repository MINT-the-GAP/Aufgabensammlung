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

tags: Lineare Funktionen, Schnittpunkt, Bruchrechnung, mittel, normal, Bestimmen

comment: Bestimme die Gleichungen von drei linearen Funktionen, deren Graphen die jeweils gegebene Gerade an der angegebenen Stelle orthogonal schneiden. Die Koeffizienten und Stellen enthalten Brüche und negative Zahlen.

author: Martin Lommatzsch
-->

# Orthogonale Geraden an einer gegebenen Stelle bestimmen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

**Bestimme** jeweils die Funktionsgleichung einer linearen Funktion, deren Graph die gegebene Gerade an der angegebenen Stelle $x_0$ orthogonal schneidet.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Gegeben sind die lineare Funktion $f(x)=\frac{2}{3}x-\frac{5}{4}$ und die Stelle $x_0=-\frac{3}{2}$.

**Bestimme** die Funktionsgleichung von $g$, deren Graph den Graphen von $f$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -3/2*x-9/2 ]] @canvas
@Algebrite.check(`-3/2*x-9/2`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=-\frac{3}{2}$ in $f$:

$$
\begin{aligned}
y_S &= f(x_0) = \frac{2}{3}x_0-\frac{5}{4} \\
&= \frac{2}{3}\cdot \left(-\frac{3}{2}\right)-\frac{5}{4} \\
&= -1-\frac{5}{4} = -\frac{9}{4}
\end{aligned}
$$

Der Schnittpunkt ist $S\left(-\frac{3}{2}\mid -\frac{9}{4}\right)$.

Für die Steigungen orthogonaler Geraden gilt $m_f\cdot m_g=-1$. Mit $m_f=\frac{2}{3}$ folgt:

$$
m_g=-\dfrac{1}{m_f}=-\dfrac{1}{\frac{2}{3}}=-\frac{3}{2}
$$

Für den Ordinatenachsenabschnitt werden $m_g=-\frac{3}{2}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_g$ umgestellt:

$$
\begin{aligned}
g(x) &= m_gx+b_g \\
-\frac{9}{4} &= \left(-\frac{3}{2}\right)\cdot \left(-\frac{3}{2}\right)+b_g \\
-\frac{9}{4} &= \frac{9}{4}+b_g &&\quad |-\frac{9}{4} \\
b_g &= -\frac{9}{4}-\frac{9}{4} = -\frac{9}{2}
\end{aligned}
$$

Damit gilt $g(x)=-\frac{3}{2}x-\frac{9}{2}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Gegeben sind die lineare Funktion $h(x)=-\frac{3}{4}x+\frac{7}{6}$ und die Stelle $x_0=\frac{2}{3}$.

**Bestimme** die Funktionsgleichung von $k$, deren Graph den Graphen von $h$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ 4/3*x-2/9 ]] @canvas
@Algebrite.check(`4/3*x-2/9`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=\frac{2}{3}$ in $h$:

$$
\begin{aligned}
y_S &= h(x_0) = -\frac{3}{4}x_0+\frac{7}{6} \\
&= \left(-\frac{3}{4}\right)\cdot \frac{2}{3}+\frac{7}{6} \\
&= -\frac{1}{2}+\frac{7}{6} = \frac{2}{3}
\end{aligned}
$$

Der Schnittpunkt ist $S\left(\frac{2}{3}\mid \frac{2}{3}\right)$.

Für die Steigungen orthogonaler Geraden gilt $m_h\cdot m_k=-1$. Mit $m_h=-\frac{3}{4}$ folgt:

$$
m_k=-\dfrac{1}{m_h}=-\dfrac{1}{-\frac{3}{4}}=\frac{4}{3}
$$

Für den Ordinatenachsenabschnitt werden $m_k=\frac{4}{3}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_k$ umgestellt:

$$
\begin{aligned}
k(x) &= m_kx+b_k \\
\frac{2}{3} &= \frac{4}{3}\cdot \frac{2}{3}+b_k \\
\frac{2}{3} &= \frac{8}{9}+b_k &&\quad |-\frac{8}{9} \\
b_k &= \frac{2}{3}-\frac{8}{9} = -\frac{2}{9}
\end{aligned}
$$

Damit gilt $k(x)=\frac{4}{3}x-\frac{2}{9}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Gegeben sind die lineare Funktion $p(x)=\frac{5}{2}x-3$ und die Stelle $x_0=-2$.

**Bestimme** die Funktionsgleichung von $q$, deren Graph den Graphen von $p$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$q(x)=$ [[ -2/5*x-44/5 ]] @canvas
@Algebrite.check(`-2/5*x-44/5`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=-2$ in $p$:

$$
\begin{aligned}
y_S &= p(x_0) = \frac{5}{2}x_0-3 \\
&= \frac{5}{2}\cdot \left(-2\right)-3 \\
&= -5-3 = -8
\end{aligned}
$$

Der Schnittpunkt ist $S\left(-2\mid -8\right)$.

Für die Steigungen orthogonaler Geraden gilt $m_p\cdot m_q=-1$. Mit $m_p=\frac{5}{2}$ folgt:

$$
m_q=-\dfrac{1}{m_p}=-\dfrac{1}{\frac{5}{2}}=-\frac{2}{5}
$$

Für den Ordinatenachsenabschnitt werden $m_q=-\frac{2}{5}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_q$ umgestellt:

$$
\begin{aligned}
q(x) &= m_qx+b_q \\
-8 &= \left(-\frac{2}{5}\right)\cdot \left(-2\right)+b_q \\
-8 &= \frac{4}{5}+b_q &&\quad |-\frac{4}{5} \\
b_q &= -8-\frac{4}{5} = -\frac{44}{5}
\end{aligned}
$$

Damit gilt $q(x)=-\frac{2}{5}x-\frac{44}{5}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

</section>
