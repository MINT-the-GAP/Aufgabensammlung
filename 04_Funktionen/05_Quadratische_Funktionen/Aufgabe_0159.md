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

tags: Quadratische Funktionen, Gleichungssysteme, Bruchrechnung, schwer, normal, Bestimmen

comment: Bestimme die Gleichungen zweier quadratischer Funktionen aus jeweils drei Punkten mithilfe eines linearen Gleichungssystems. Die gegebenen Punktkoordinaten und die gesuchten Parameter enthalten rationale Zahlen, die keine ganzen Zahlen sind.

author: Martin Lommatzsch
-->

# Quadratische Funktionen aus drei Punkten bestimmen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 4" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der quadratischen Funktion $f$ verläuft durch die Punkte $P\left(-\frac{3}{2}\mid \frac{5}{2}\right)$, $Q\left(\frac{3}{2}\mid \frac{3}{2}\right)$ und $R\left(3\mid \frac{11}{2}\right)$.

**Bestimme** die Funktionsgleichung von $f$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 2/3*x^2-1/3*x+1/2 ]] @canvas
@Algebrite.check(`2/3*x^2-1/3*x+1/2`)
[[?]] @Explain
****************
Der Ansatz lautet $f(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P\left(-\frac{3}{2}\mid \frac{5}{2}\right):&\quad \frac{5}{2}=a\cdot \left(-\frac{3}{2}\right)^2+b\cdot \left(-\frac{3}{2}\right)+c \\
Q\left(\frac{3}{2}\mid \frac{3}{2}\right):&\quad \frac{3}{2}=a\cdot \left(\frac{3}{2}\right)^2+b\cdot \frac{3}{2}+c \\
R\left(3\mid \frac{11}{2}\right):&\quad \frac{11}{2}=a\cdot 3^2+b\cdot 3+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad \frac{9}{4}a-\frac{3}{2}b+c=\frac{5}{2} \\
\mathrm{II}:&\quad \frac{9}{4}a+\frac{3}{2}b+c=\frac{3}{2} \\
\mathrm{III}:&\quad 9a+3b+c=\frac{11}{2}
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
3b &= \frac{3}{2}-\frac{5}{2} \\
3b &= -1 &&\quad |:3 \\
b &= -\frac{1}{3} &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
\frac{27}{4}a+\frac{3}{2}b &= \frac{11}{2}-\frac{3}{2} \\
\frac{27}{4}a+\frac{3}{2}b &= 4 &&\quad |:\frac{3}{2} \\
\frac{9}{2}a+b &= \frac{8}{3} &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
\frac{9}{2}a &= \frac{8}{3}-\left(-\frac{1}{3}\right) \\
\frac{9}{2}a &= 3 &&\quad |:\frac{9}{2} \\
a &= \frac{2}{3}
\end{aligned}
$$

Aus $\mathrm{IV}$ folgt direkt $b=-\frac{1}{3}$.

Einsetzen von $a=\frac{2}{3}$ und $b=-\frac{1}{3}$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
\frac{9}{4}a+\frac{3}{2}b+c &= \frac{3}{2} \\
\frac{9}{4}\cdot \frac{2}{3}+\frac{3}{2}\cdot \left(-\frac{1}{3}\right)+c &= \frac{3}{2} \\
\frac{3}{2}+\left(-\frac{1}{2}\right)+c &= \frac{3}{2} \\
1+c &= \frac{3}{2} &&\quad |-1 \\
c &= \frac{1}{2}
\end{aligned}
$$

Damit gilt $f(x)=\frac{2}{3}x^2-\frac{1}{3}x+\frac{1}{2}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme, Bruchrechnung)

</div>

<div class="flex-child">

__$b)$__

Der Graph der quadratischen Funktion $g$ verläuft durch die Punkte $P\left(-3\mid -\frac{27}{4}\right)$, $Q\left(\frac{3}{2}\mid 0\right)$ und $R\left(\frac{9}{2}\mid -\frac{11}{2}\right)$.

**Bestimme** die Funktionsgleichung von $g$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -4/9*x^2+5/6*x-1/4 ]] @canvas
@Algebrite.check(`-4/9*x^2+5/6*x-1/4`)
[[?]] @Explain
****************
Der Ansatz lautet $g(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P\left(-3\mid -\frac{27}{4}\right):&\quad -\frac{27}{4}=a\cdot \left(-3\right)^2+b\cdot \left(-3\right)+c \\
Q\left(\frac{3}{2}\mid 0\right):&\quad 0=a\cdot \left(\frac{3}{2}\right)^2+b\cdot \frac{3}{2}+c \\
R\left(\frac{9}{2}\mid -\frac{11}{2}\right):&\quad -\frac{11}{2}=a\cdot \left(\frac{9}{2}\right)^2+b\cdot \frac{9}{2}+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 9a-3b+c=-\frac{27}{4} \\
\mathrm{II}:&\quad \frac{9}{4}a+\frac{3}{2}b+c=0 \\
\mathrm{III}:&\quad \frac{81}{4}a+\frac{9}{2}b+c=-\frac{11}{2}
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
-\frac{27}{4}a+\frac{9}{2}b &= 0-\left(-\frac{27}{4}\right) \\
-\frac{27}{4}a+\frac{9}{2}b &= \frac{27}{4} &&\quad |:\frac{9}{2} \\
-\frac{3}{2}a+b &= \frac{3}{2} &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
18a+3b &= -\frac{11}{2}-0 \\
18a+3b &= -\frac{11}{2} &&\quad |:3 \\
6a+b &= -\frac{11}{6} &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
\frac{15}{2}a &= -\frac{11}{6}-\frac{3}{2} \\
\frac{15}{2}a &= -\frac{10}{3} &&\quad |:\frac{15}{2} \\
a &= -\frac{4}{9}
\end{aligned}
$$

Einsetzen von $a=-\frac{4}{9}$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
-\frac{3}{2}a+b &= \frac{3}{2} \\
-\frac{3}{2}\cdot \left(-\frac{4}{9}\right)+b &= \frac{3}{2} \\
\frac{2}{3}+b &= \frac{3}{2} &&\quad |-\frac{2}{3} \\
b &= \frac{5}{6}
\end{aligned}
$$

Einsetzen von $a=-\frac{4}{9}$ und $b=\frac{5}{6}$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
\frac{9}{4}a+\frac{3}{2}b+c &= 0 \\
\frac{9}{4}\cdot \left(-\frac{4}{9}\right)+\frac{3}{2}\cdot \frac{5}{6}+c &= 0 \\
-1+\frac{5}{4}+c &= 0 \\
\frac{1}{4}+c &= 0 &&\quad |-\frac{1}{4} \\
c &= -\frac{1}{4}
\end{aligned}
$$

Damit gilt $g(x)=-\frac{4}{9}x^2+\frac{5}{6}x-\frac{1}{4}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme, Bruchrechnung)

</div>

</section>
