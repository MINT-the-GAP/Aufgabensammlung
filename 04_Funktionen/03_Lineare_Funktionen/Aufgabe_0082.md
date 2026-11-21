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

Gegeben sind die lineare Funktion $f(x)=\frac{4}{5}x-\frac{7}{8}$ und die Stelle $x_0=-\frac{5}{2}$.

**Bestimme** die Funktionsgleichung von $g$, deren Graph den Graphen von $f$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -5/4*x-6 ]] @canvas
@Algebrite.check(`-5/4*x-6`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=-\frac{5}{2}$ in $f$:

$$
\begin{aligned}
y_S &= f(x_0) = \frac{4}{5}x_0-\frac{7}{8} \\
&= \frac{4}{5}\cdot \left(-\frac{5}{2}\right)-\frac{7}{8} \\
&= -2-\frac{7}{8} = -\frac{23}{8}
\end{aligned}
$$

Der Schnittpunkt ist $S\left(-\frac{5}{2}\mid -\frac{23}{8}\right)$.

Für die Steigungen orthogonaler Geraden gilt $m_f\cdot m_g=-1$. Mit $m_f=\frac{4}{5}$ folgt:

$$
m_g=-\dfrac{1}{m_f}=-\dfrac{1}{\frac{4}{5}}=-\frac{5}{4}
$$

Für den Ordinatenachsenabschnitt werden $m_g=-\frac{5}{4}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_g$ umgestellt:

$$
\begin{aligned}
g(x) &= m_gx+b_g \\
-\frac{23}{8} &= \left(-\frac{5}{4}\right)\cdot \left(-\frac{5}{2}\right)+b_g \\
-\frac{23}{8} &= \frac{25}{8}+b_g &&\quad |-\frac{25}{8} \\
b_g &= -\frac{23}{8}-\frac{25}{8} = -6
\end{aligned}
$$

Damit gilt $g(x)=-\frac{5}{4}x-6$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$b)$__

Gegeben sind die lineare Funktion $h(x)=-\frac{5}{3}x+\frac{4}{5}$ und die Stelle $x_0=\frac{3}{2}$.

**Bestimme** die Funktionsgleichung von $k$, deren Graph den Graphen von $h$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ 3/5*x-13/5 ]] @canvas
@Algebrite.check(`3/5*x-13/5`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=\frac{3}{2}$ in $h$:

$$
\begin{aligned}
y_S &= h(x_0) = -\frac{5}{3}x_0+\frac{4}{5} \\
&= \left(-\frac{5}{3}\right)\cdot \frac{3}{2}+\frac{4}{5} \\
&= -\frac{5}{2}+\frac{4}{5} = -\frac{17}{10}
\end{aligned}
$$

Der Schnittpunkt ist $S\left(\frac{3}{2}\mid -\frac{17}{10}\right)$.

Für die Steigungen orthogonaler Geraden gilt $m_h\cdot m_k=-1$. Mit $m_h=-\frac{5}{3}$ folgt:

$$
m_k=-\dfrac{1}{m_h}=-\dfrac{1}{-\frac{5}{3}}=\frac{3}{5}
$$

Für den Ordinatenachsenabschnitt werden $m_k=\frac{3}{5}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_k$ umgestellt:

$$
\begin{aligned}
k(x) &= m_kx+b_k \\
-\frac{17}{10} &= \frac{3}{5}\cdot \frac{3}{2}+b_k \\
-\frac{17}{10} &= \frac{9}{10}+b_k &&\quad |-\frac{9}{10} \\
b_k &= -\frac{17}{10}-\frac{9}{10} = -\frac{13}{5}
\end{aligned}
$$

Damit gilt $k(x)=\frac{3}{5}x-\frac{13}{5}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

<div class="flex-child">

__$c)$__

Gegeben sind die lineare Funktion $p(x)=\frac{7}{4}x-\frac{5}{6}$ und die Stelle $x_0=-\frac{2}{3}$.

**Bestimme** die Funktionsgleichung von $q$, deren Graph den Graphen von $p$ an der Stelle $x_0$ orthogonal schneidet.

<!-- data-hint-button="1" data-solution-button="3" -->
$q(x)=$ [[ -4/7*x-50/21 ]] @canvas
@Algebrite.check(`-4/7*x-50/21`)
[[?]] @Explain
****************
Die Ordinate des Schnittpunkts ergibt sich durch Einsetzen von $x_0=-\frac{2}{3}$ in $p$:

$$
\begin{aligned}
y_S &= p(x_0) = \frac{7}{4}x_0-\frac{5}{6} \\
&= \frac{7}{4}\cdot \left(-\frac{2}{3}\right)-\frac{5}{6} \\
&= -\frac{7}{6}-\frac{5}{6} = -2
\end{aligned}
$$

Der Schnittpunkt ist $S\left(-\frac{2}{3}\mid -2\right)$.

Für die Steigungen orthogonaler Geraden gilt $m_p\cdot m_q=-1$. Mit $m_p=\frac{7}{4}$ folgt:

$$
m_q=-\dfrac{1}{m_p}=-\dfrac{1}{\frac{7}{4}}=-\frac{4}{7}
$$

Für den Ordinatenachsenabschnitt werden $m_q=-\frac{4}{7}$ und die Koordinaten von $S$ eingesetzt. Anschließend wird nach $b_q$ umgestellt:

$$
\begin{aligned}
q(x) &= m_qx+b_q \\
-2 &= \left(-\frac{4}{7}\right)\cdot \left(-\frac{2}{3}\right)+b_q \\
-2 &= \frac{8}{21}+b_q &&\quad |-\frac{8}{21} \\
b_q &= -2-\frac{8}{21} = -\frac{50}{21}
\end{aligned}
$$

Damit gilt $q(x)=-\frac{4}{7}x-\frac{50}{21}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Steigung, Schnittpunkt, Bruchrechnung, Ganze Zahlen)

</div>

</section>
