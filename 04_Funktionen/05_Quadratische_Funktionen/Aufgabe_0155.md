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

Der Graph der quadratischen Funktion $f$ verläuft durch die Punkte $P(-2\mid 28)$, $Q(1\mid 1)$ und $R(3\mid 23)$.

**Bestimme** die Funktionsgleichung von $f$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 4*x^2-5*x+2 ]] @canvas
@Algebrite.check(`4*x^2-5*x+2`)
[[?]] @Explain
****************
Der Ansatz lautet $f(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P(-2\mid 28):&\quad 28=a\cdot(-2)^2+b\cdot(-2)+c \\
Q(1\mid 1):&\quad 1=a\cdot1^2+b\cdot1+c \\
R(3\mid 23):&\quad 23=a\cdot3^2+b\cdot3+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 4a-2b+c=28 \\
\mathrm{II}:&\quad a+b+c=1 \\
\mathrm{III}:&\quad 9a+3b+c=23
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{I}-\mathrm{II}$ folgt:

$$
\begin{aligned}
3a-3b &= 28-1 \\
3a-3b &= 27 &&\quad |:3 \\
a-b &= 9 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
8a+2b &= 23-1 \\
8a+2b &= 22 &&\quad |:2 \\
4a+b &= 11 &&\quad (\mathrm{V})
\end{aligned}
$$

Addition von $\mathrm{IV}$ und $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
5a &= 9+11 \\
5a &= 20 &&\quad |:5 \\
a &= 4
\end{aligned}
$$

Einsetzen von $a=4$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
a-b &= 9 \\
4-b &= 9 &&\quad |-4 \\
-b &= 5 &&\quad |\cdot(-1) \\
b &= -5
\end{aligned}
$$

Einsetzen von $a=4$ und $b=-5$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
a+b+c &= 1 \\
4+(-5)+c &= 1 \\
-1+c &= 1 &&\quad |+1 \\
c &= 2
\end{aligned}
$$

Damit gilt $f(x)=4x^2-5x+2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme)

</div>

<div class="flex-child">

__$b)$__

Der Graph der quadratischen Funktion $g$ verläuft durch die Punkte $P(-3\mid 9)$, $Q(1\mid 1)$ und $R(2\mid -6)$.

**Bestimme** die Funktionsgleichung von $g$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -x^2-4*x+6 ]] @canvas
@Algebrite.check(`-x^2-4*x+6`)
[[?]] @Explain
****************
Der Ansatz lautet $g(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P(-3\mid 9):&\quad 9=a\cdot(-3)^2+b\cdot(-3)+c \\
Q(1\mid 1):&\quad 1=a\cdot1^2+b\cdot1+c \\
R(2\mid -6):&\quad -6=a\cdot2^2+b\cdot2+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 9a-3b+c=9 \\
\mathrm{II}:&\quad a+b+c=1 \\
\mathrm{III}:&\quad 4a+2b+c=-6
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
-8a+4b &= 1-9 \\
-8a+4b &= -8 &&\quad |:4 \\
-2a+b &= -2 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
3a+b &= -6-1 \\
3a+b &= -7 &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
5a &= -7-(-2) \\
5a &= -5 &&\quad |:5 \\
a &= -1
\end{aligned}
$$

Einsetzen von $a=-1$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
-2a+b &= -2 \\
-2\cdot(-1)+b &= -2 \\
2+b &= -2 &&\quad |-2 \\
b &= -4
\end{aligned}
$$

Einsetzen von $a=-1$ und $b=-4$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
a+b+c &= 1 \\
-1+(-4)+c &= 1 \\
-5+c &= 1 &&\quad |+5 \\
c &= 6
\end{aligned}
$$

Damit gilt $g(x)=-x^2-4x+6$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme)

</div>

</section>
