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

Gegeben sind die lineare Funktion $f(x)=-\frac{4}{3}x-\frac{7}{2}$ und die Stelle $x_0=-\frac{3}{4}$.

**Bestimme** die Funktionsgleichung von $g$, deren Graph den Graphen von $f$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 3/4*x-31/16 ]] @canvas
@Algebrite.check(`3/4*x-31/16`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=-\frac{3}{4}$ in $f$:

$$
\begin{aligned}
y_S &= f(x_0) = -\frac{4}{3}x_0-\frac{7}{2} \\
&= \left(-\frac{4}{3}\right)\cdot \left(-\frac{3}{4}\right)-\frac{7}{2} \\
&= 1-\frac{7}{2} = -\frac{5}{2}
\end{aligned}
$$

Der Schnittpunkt ist $S\left(-\frac{3}{4}\mid -\frac{5}{2}\right)$.

Für die Steigungen orthogonaler Geraden gilt $m_f\cdot m_g=-1$. Mit $m_f=-\frac{4}{3}$ folgt:

$$
m_g=-\dfrac{1}{m_f}=-\dfrac{1}{-\frac{4}{3}}=\frac{3}{4}
$$

Für den Ordinatenachsenabschnitt werden $m_g=\frac{3}{4}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_g$ umgestellt:

$$
\begin{aligned}
g(x) &= m_gx+b_g \\
-\frac{5}{2} &= \frac{3}{4}\cdot \left(-\frac{3}{4}\right)+b_g \\
-\frac{5}{2} &= -\frac{9}{16}+b_g &&\quad |+\frac{9}{16} \\
b_g &= -\frac{5}{2}+\frac{9}{16} = -\frac{31}{16}
\end{aligned}
$$

Damit gilt $g(x)=\frac{3}{4}x-\frac{31}{16}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Gegeben sind die lineare Funktion $h(x)=\frac{3}{5}x+\frac{2}{3}$ und die Stelle $x_0=\frac{5}{6}$.

**Bestimme** die Funktionsgleichung von $k$, deren Graph den Graphen von $h$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -5/3*x+23/9 ]] @canvas
@Algebrite.check(`-5/3*x+23/9`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=\frac{5}{6}$ in $h$:

$$
\begin{aligned}
y_S &= h(x_0) = \frac{3}{5}x_0+\frac{2}{3} \\
&= \frac{3}{5}\cdot \frac{5}{6}+\frac{2}{3} \\
&= \frac{1}{2}+\frac{2}{3} = \frac{7}{6}
\end{aligned}
$$

Der Schnittpunkt ist $S\left(\frac{5}{6}\mid \frac{7}{6}\right)$.

Für die Steigungen orthogonaler Geraden gilt $m_h\cdot m_k=-1$. Mit $m_h=\frac{3}{5}$ folgt:

$$
m_k=-\dfrac{1}{m_h}=-\dfrac{1}{\frac{3}{5}}=-\frac{5}{3}
$$

Für den Ordinatenachsenabschnitt werden $m_k=-\frac{5}{3}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_k$ umgestellt:

$$
\begin{aligned}
k(x) &= m_kx+b_k \\
\frac{7}{6} &= \left(-\frac{5}{3}\right)\cdot \frac{5}{6}+b_k \\
\frac{7}{6} &= -\frac{25}{18}+b_k &&\quad |+\frac{25}{18} \\
b_k &= \frac{7}{6}+\frac{25}{18} = \frac{23}{9}
\end{aligned}
$$

Damit gilt $k(x)=-\frac{5}{3}x+\frac{23}{9}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Gegeben sind die lineare Funktion $p(x)=-\frac{7}{2}x+\frac{5}{4}$ und die Stelle $x_0=-\frac{1}{2}$.

**Bestimme** die Funktionsgleichung von $q$, deren Graph den Graphen von $p$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$q(x)=$ [[ 2/7*x+22/7 ]] @canvas
@Algebrite.check(`2/7*x+22/7`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=-\frac{1}{2}$ in $p$:

$$
\begin{aligned}
y_S &= p(x_0) = -\frac{7}{2}x_0+\frac{5}{4} \\
&= \left(-\frac{7}{2}\right)\cdot \left(-\frac{1}{2}\right)+\frac{5}{4} \\
&= \frac{7}{4}+\frac{5}{4} = 3
\end{aligned}
$$

Der Schnittpunkt ist $S\left(-\frac{1}{2}\mid 3\right)$.

Für die Steigungen orthogonaler Geraden gilt $m_p\cdot m_q=-1$. Mit $m_p=-\frac{7}{2}$ folgt:

$$
m_q=-\dfrac{1}{m_p}=-\dfrac{1}{-\frac{7}{2}}=\frac{2}{7}
$$

Für den Ordinatenachsenabschnitt werden $m_q=\frac{2}{7}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_q$ umgestellt:

$$
\begin{aligned}
q(x) &= m_qx+b_q \\
3 &= \frac{2}{7}\cdot \left(-\frac{1}{2}\right)+b_q \\
3 &= -\frac{1}{7}+b_q &&\quad |+\frac{1}{7} \\
b_q &= 3+\frac{1}{7} = \frac{22}{7}
\end{aligned}
$$

Damit gilt $q(x)=\frac{2}{7}x+\frac{22}{7}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

</section>
