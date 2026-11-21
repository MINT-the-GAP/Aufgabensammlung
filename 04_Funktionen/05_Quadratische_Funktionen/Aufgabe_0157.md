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

tags: Quadratische Funktionen, Gleichungssysteme, Bruchrechnung, mittel, normal, Bestimmen

comment: Bestimme die Gleichungen zweier quadratischer Funktionen aus jeweils drei Punkten mithilfe eines linearen Gleichungssystems. Die gegebenen Punktkoordinaten sind ganze Zahlen; die gesuchten Parameter enthalten rationale Zahlen, die keine ganzen Zahlen sind.

author: Martin Lommatzsch
-->

# Quadratische Funktionen aus drei Punkten bestimmen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der quadratischen Funktion $f$ verläuft durch die Punkte $P\left(-4\mid 9\right)$, $Q\left(-2\mid 3\right)$ und $R\left(1\mid 0\right)$.

**Bestimme** die Funktionsgleichung von $f$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 2/5*x^2-3/5*x+1/5 ]] @canvas
@Algebrite.check(`2/5*x^2-3/5*x+1/5`)
[[?]] @Explain
****************
Der Ansatz lautet $f(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P\left(-4\mid 9\right):&\quad 9=a\cdot \left(-4\right)^2+b\cdot \left(-4\right)+c \\
Q\left(-2\mid 3\right):&\quad 3=a\cdot \left(-2\right)^2+b\cdot \left(-2\right)+c \\
R\left(1\mid 0\right):&\quad 0=a\cdot 1^2+b\cdot 1+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 16a-4b+c=9 \\
\mathrm{II}:&\quad 4a-2b+c=3 \\
\mathrm{III}:&\quad a+b+c=0
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
-12a+2b &= 3-9 \\
-12a+2b &= -6 &&\quad |:2 \\
-6a+b &= -3 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
-3a+3b &= 0-3 \\
-3a+3b &= -3 &&\quad |:3 \\
-a+b &= -1 &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
5a &= -1-\left(-3\right) \\
5a &= 2 &&\quad |:5 \\
a &= \frac{2}{5}
\end{aligned}
$$

Einsetzen von $a=\frac{2}{5}$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
-6a+b &= -3 \\
-6\cdot \frac{2}{5}+b &= -3 \\
-\frac{12}{5}+b &= -3 &&\quad |+\frac{12}{5} \\
b &= -\frac{3}{5}
\end{aligned}
$$

Einsetzen von $a=\frac{2}{5}$ und $b=-\frac{3}{5}$ in $\mathrm{III}$ liefert $c$:

$$
\begin{aligned}
a+b+c &= 0 \\
1\cdot \frac{2}{5}+1\cdot \left(-\frac{3}{5}\right)+c &= 0 \\
\frac{2}{5}+\left(-\frac{3}{5}\right)+c &= 0 \\
-\frac{1}{5}+c &= 0 &&\quad |+\frac{1}{5} \\
c &= \frac{1}{5}
\end{aligned}
$$

Damit gilt $f(x)=\frac{2}{5}x^2-\frac{3}{5}x+\frac{1}{5}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme, Bruchrechnung)

</div>

<div class="flex-child">

__$b)$__

Der Graph der quadratischen Funktion $g$ verläuft durch die Punkte $P\left(-1\mid 1\right)$, $Q\left(2\mid -1\right)$ und $R\left(3\mid -5\right)$.

**Bestimme** die Funktionsgleichung von $g$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -5/6*x^2+1/6*x+2 ]] @canvas
@Algebrite.check(`-5/6*x^2+1/6*x+2`)
[[?]] @Explain
****************
Der Ansatz lautet $g(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P\left(-1\mid 1\right):&\quad 1=a\cdot \left(-1\right)^2+b\cdot \left(-1\right)+c \\
Q\left(2\mid -1\right):&\quad -1=a\cdot 2^2+b\cdot 2+c \\
R\left(3\mid -5\right):&\quad -5=a\cdot 3^2+b\cdot 3+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad a-b+c=1 \\
\mathrm{II}:&\quad 4a+2b+c=-1 \\
\mathrm{III}:&\quad 9a+3b+c=-5
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
3a+3b &= -1-1 \\
3a+3b &= -2 &&\quad |:3 \\
a+b &= -\frac{2}{3} &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
5a+b &= -5-\left(-1\right) \\
5a+b &= -4 &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
4a &= -4-\left(-\frac{2}{3}\right) \\
4a &= -\frac{10}{3} &&\quad |:4 \\
a &= -\frac{5}{6}
\end{aligned}
$$

Einsetzen von $a=-\frac{5}{6}$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
a+b &= -\frac{2}{3} \\
1\cdot \left(-\frac{5}{6}\right)+b &= -\frac{2}{3} \\
-\frac{5}{6}+b &= -\frac{2}{3} &&\quad |+\frac{5}{6} \\
b &= \frac{1}{6}
\end{aligned}
$$

Einsetzen von $a=-\frac{5}{6}$ und $b=\frac{1}{6}$ in $\mathrm{I}$ liefert $c$:

$$
\begin{aligned}
a-b+c &= 1 \\
1\cdot \left(-\frac{5}{6}\right)+\left(-1\right)\cdot \frac{1}{6}+c &= 1 \\
-\frac{5}{6}+\left(-\frac{1}{6}\right)+c &= 1 \\
-1+c &= 1 &&\quad |+1 \\
c &= 2
\end{aligned}
$$

Damit gilt $g(x)=-\frac{5}{6}x^2+\frac{1}{6}x+2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme, Bruchrechnung)

</div>

</section>
