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

Der Graph der quadratischen Funktion $f$ verläuft durch die Punkte $P(-1\mid 4)$, $Q(1\mid -2)$ und $R(2\mid 1)$.

**Bestimme** die Funktionsgleichung von $f$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 2*x^2-3*x-1 ]] @canvas
@Algebrite.check(`2*x^2-3*x-1`)
[[?]] @Explain
****************
Der Ansatz lautet $f(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P(-1\mid 4):&\quad 4=a\cdot(-1)^2+b\cdot(-1)+c \\
Q(1\mid -2):&\quad -2=a\cdot 1^2+b\cdot 1+c \\
R(2\mid 1):&\quad 1=a\cdot 2^2+b\cdot 2+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad a-b+c=4 \\
\mathrm{II}:&\quad a+b+c=-2 \\
\mathrm{III}:&\quad 4a+2b+c=1
\end{aligned}
$$

Durch Subtraktion von $\mathrm{I}$ von $\mathrm{II}$ ergibt sich $b$:

$$
\begin{aligned}
2b &= -2-4 \\
2b &= -6 &&\quad |:2 \\
b &= -3
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ und $b=-3$ folgt:

$$
\begin{aligned}
3a+b &= 1-(-2) \\
3a-3 &= 3 &&\quad |+3 \\
3a &= 6 &&\quad |:3 \\
a &= 2
\end{aligned}
$$

Einsetzen von $a=2$ und $b=-3$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
a+b+c &= -2 \\
2+(-3)+c &= -2 \\
-1+c &= -2 &&\quad |+1 \\
c &= -1
\end{aligned}
$$

Damit gilt $f(x)=2x^2-3x-1$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssystem)

</div>

<div class="flex-child">

__$b)$__

Der Graph der quadratischen Funktion $g$ verläuft durch die Punkte $P(-2\mid -12)$, $Q(1\mid 3)$ und $R(3\mid -17)$.

**Bestimme** die Funktionsgleichung von $g$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -3*x^2+2*x+4 ]] @canvas
@Algebrite.check(`-3*x^2+2*x+4`)
[[?]] @Explain
****************
Der Ansatz lautet $g(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P(-2\mid -12):&\quad -12=a\cdot(-2)^2+b\cdot(-2)+c \\
Q(1\mid 3):&\quad 3=a\cdot 1^2+b\cdot 1+c \\
R(3\mid -17):&\quad -17=a\cdot 3^2+b\cdot 3+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 4a-2b+c=-12 \\
\mathrm{II}:&\quad a+b+c=3 \\
\mathrm{III}:&\quad 9a+3b+c=-17
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{I}-\mathrm{II}$ folgt:

$$
\begin{aligned}
3a-3b &= -12-3 \\
3a-3b &= -15 &&\quad |:3 \\
a-b &= -5 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
8a+2b &= -17-3 \\
8a+2b &= -20 &&\quad |:2 \\
4a+b &= -10 &&\quad (\mathrm{V})
\end{aligned}
$$

Addition von $\mathrm{IV}$ und $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
5a &= -5+(-10) \\
5a &= -15 &&\quad |:5 \\
a &= -3
\end{aligned}
$$

Einsetzen von $a=-3$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
a-b &= -5 \\
-3-b &= -5 &&\quad |+3 \\
-b &= -2 &&\quad |\cdot(-1) \\
b &= 2
\end{aligned}
$$

Einsetzen von $a=-3$ und $b=2$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
a+b+c &= 3 \\
-3+2+c &= 3 \\
-1+c &= 3 &&\quad |+1 \\
c &= 4
\end{aligned}
$$

Damit gilt $g(x)=-3x^2+2x+4$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme)

</div>

</section>
