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

tags: Quadratische Funktionen, Gleichungssysteme, mittel, normal, Bestimmen

comment: Bestimme die Gleichungen zweier quadratischer Funktionen aus jeweils drei Punkten mithilfe eines linearen Gleichungssystems. Alle gegebenen Koordinaten und gesuchten Parameter sind ganze Zahlen.

author: Martin Lommatzsch
-->

# Quadratische Funktionen aus drei Punkten bestimmen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der quadratischen Funktion $f$ verläuft durch die Punkte $P(-2\mid 4)$, $Q(1\mid 1)$ und $R(2\mid 12)$.

**Bestimme** die Funktionsgleichung von $f$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 3*x^2+2*x-4 ]] @canvas
@Algebrite.check(`3*x^2+2*x-4`)
[[?]] @Explain
****************
Der Ansatz lautet $f(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P(-2\mid 4):&\quad 4=a\cdot(-2)^2+b\cdot(-2)+c \\
Q(1\mid 1):&\quad 1=a\cdot1^2+b\cdot1+c \\
R(2\mid 12):&\quad 12=a\cdot2^2+b\cdot2+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 4a-2b+c=4 \\
\mathrm{II}:&\quad a+b+c=1 \\
\mathrm{III}:&\quad 4a+2b+c=12
\end{aligned}
$$

Durch Subtraktion von $\mathrm{I}$ von $\mathrm{III}$ ergibt sich $b$:

$$
\begin{aligned}
4b &= 12-4 \\
4b &= 8 &&\quad |:4 \\
b &= 2
\end{aligned}
$$

Aus $\mathrm{I}-\mathrm{II}$ und $b=2$ folgt:

$$
\begin{aligned}
3a-3b &= 4-1 \\
3a-3\cdot 2 &= 3 \\
3a-6 &= 3 &&\quad |+6 \\
3a &= 9 &&\quad |:3 \\
a &= 3
\end{aligned}
$$

Einsetzen von $a=3$ und $b=2$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
a+b+c &= 1 \\
3+2+c &= 1 \\
5+c &= 1 &&\quad |-5 \\
c &= -4
\end{aligned}
$$

Damit gilt $f(x)=3x^2+2x-4$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme)

</div>

<div class="flex-child">

__$b)$__

Der Graph der quadratischen Funktion $g$ verläuft durch die Punkte $P(-1\mid -4)$, $Q(2\mid 5)$ und $R(4\mid -9)$.

**Bestimme** die Funktionsgleichung von $g$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -2*x^2+5*x+3 ]] @canvas
@Algebrite.check(`-2*x^2+5*x+3`)
[[?]] @Explain
****************
Der Ansatz lautet $g(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P(-1\mid -4):&\quad -4=a\cdot(-1)^2+b\cdot(-1)+c \\
Q(2\mid 5):&\quad 5=a\cdot2^2+b\cdot2+c \\
R(4\mid -9):&\quad -9=a\cdot4^2+b\cdot4+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad a-b+c=-4 \\
\mathrm{II}:&\quad 4a+2b+c=5 \\
\mathrm{III}:&\quad 16a+4b+c=-9
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
3a+3b &= 5-(-4) \\
3a+3b &= 9 &&\quad |:3 \\
a+b &= 3 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
12a+2b &= -9-5 \\
12a+2b &= -14 &&\quad |:2 \\
6a+b &= -7 &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
5a &= -7-3 \\
5a &= -10 &&\quad |:5 \\
a &= -2
\end{aligned}
$$

Einsetzen von $a=-2$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
a+b &= 3 \\
-2+b &= 3 &&\quad |+2 \\
b &= 5
\end{aligned}
$$

Einsetzen von $a=-2$ und $b=5$ in $\mathrm{I}$ liefert $c$:

$$
\begin{aligned}
a-b+c &= -4 \\
-2-5+c &= -4 \\
-7+c &= -4 &&\quad |+7 \\
c &= 3
\end{aligned}
$$

Damit gilt $g(x)=-2x^2+5x+3$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme)

</div>

</section>
