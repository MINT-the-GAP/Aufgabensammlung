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

Der Graph der quadratischen Funktion $f$ verläuft durch die Punkte $P\left(-2\mid -2\right)$, $Q\left(1\mid -1\right)$ und $R\left(3\mid 3\right)$.

**Bestimme** die Funktionsgleichung von $f$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 1/3*x^2+2/3*x-2 ]] @canvas
@Algebrite.check(`1/3*x^2+2/3*x-2`)
[[?]] @Explain
****************
Der Ansatz lautet $f(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P\left(-2\mid -2\right):&\quad -2=a\cdot \left(-2\right)^2+b\cdot \left(-2\right)+c \\
Q\left(1\mid -1\right):&\quad -1=a\cdot 1^2+b\cdot 1+c \\
R\left(3\mid 3\right):&\quad 3=a\cdot 3^2+b\cdot 3+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 4a-2b+c=-2 \\
\mathrm{II}:&\quad a+b+c=-1 \\
\mathrm{III}:&\quad 9a+3b+c=3
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
-3a+3b &= -1-\left(-2\right) \\
-3a+3b &= 1 &&\quad |:3 \\
-a+b &= \frac{1}{3} &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
8a+2b &= 3-\left(-1\right) \\
8a+2b &= 4 &&\quad |:2 \\
4a+b &= 2 &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
5a &= 2-\frac{1}{3} \\
5a &= \frac{5}{3} &&\quad |:5 \\
a &= \frac{1}{3}
\end{aligned}
$$

Einsetzen von $a=\frac{1}{3}$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
-a+b &= \frac{1}{3} \\
-1\cdot \frac{1}{3}+b &= \frac{1}{3} \\
-\frac{1}{3}+b &= \frac{1}{3} &&\quad |+\frac{1}{3} \\
b &= \frac{2}{3}
\end{aligned}
$$

Einsetzen von $a=\frac{1}{3}$ und $b=\frac{2}{3}$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
a+b+c &= -1 \\
1\cdot \frac{1}{3}+1\cdot \frac{2}{3}+c &= -1 \\
\frac{1}{3}+\frac{2}{3}+c &= -1 \\
1+c &= -1 &&\quad |-1 \\
c &= -2
\end{aligned}
$$

Damit gilt $f(x)=\frac{1}{3}x^2+\frac{2}{3}x-2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme, Bruchrechnung)

</div>

<div class="flex-child">

__$b)$__

Der Graph der quadratischen Funktion $g$ verläuft durch die Punkte $P\left(-3\mid -7\right)$, $Q\left(1\mid 1\right)$ und $R\left(3\mid -4\right)$.

**Bestimme** die Funktionsgleichung von $g$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -3/4*x^2+1/2*x+5/4 ]] @canvas
@Algebrite.check(`-3/4*x^2+1/2*x+5/4`)
[[?]] @Explain
****************
Der Ansatz lautet $g(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P\left(-3\mid -7\right):&\quad -7=a\cdot \left(-3\right)^2+b\cdot \left(-3\right)+c \\
Q\left(1\mid 1\right):&\quad 1=a\cdot 1^2+b\cdot 1+c \\
R\left(3\mid -4\right):&\quad -4=a\cdot 3^2+b\cdot 3+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 9a-3b+c=-7 \\
\mathrm{II}:&\quad a+b+c=1 \\
\mathrm{III}:&\quad 9a+3b+c=-4
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
-8a+4b &= 1-\left(-7\right) \\
-8a+4b &= 8 &&\quad |:4 \\
-2a+b &= 2 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
8a+2b &= -4-1 \\
8a+2b &= -5 &&\quad |:2 \\
4a+b &= -\frac{5}{2} &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
6a &= -\frac{5}{2}-2 \\
6a &= -\frac{9}{2} &&\quad |:6 \\
a &= -\frac{3}{4}
\end{aligned}
$$

Einsetzen von $a=-\frac{3}{4}$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
-2a+b &= 2 \\
-2\cdot \left(-\frac{3}{4}\right)+b &= 2 \\
\frac{3}{2}+b &= 2 &&\quad |-\frac{3}{2} \\
b &= \frac{1}{2}
\end{aligned}
$$

Einsetzen von $a=-\frac{3}{4}$ und $b=\frac{1}{2}$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
a+b+c &= 1 \\
1\cdot \left(-\frac{3}{4}\right)+1\cdot \frac{1}{2}+c &= 1 \\
-\frac{3}{4}+\frac{1}{2}+c &= 1 \\
-\frac{1}{4}+c &= 1 &&\quad |+\frac{1}{4} \\
c &= \frac{5}{4}
\end{aligned}
$$

Damit gilt $g(x)=-\frac{3}{4}x^2+\frac{1}{2}x+\frac{5}{4}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme, Bruchrechnung)

</div>

</section>
