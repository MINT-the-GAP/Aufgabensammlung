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

tags: Quadratische Funktionen, Gleichungssysteme, Dezimalzahlen, schwer, normal, Bestimmen

comment: Bestimme die Gleichungen zweier quadratischer Funktionen aus jeweils drei Punkten mithilfe eines linearen Gleichungssystems. Die gegebenen Punktkoordinaten und die gesuchten Parameter enthalten rationale Zahlen, die keine ganzen Zahlen sind.

author: Martin Lommatzsch
-->

# Quadratische Funktionen aus drei Punkten bestimmen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 4" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der quadratischen Funktion $f$ verläuft durch die Punkte $P\left(-1{,}5\mid 4\right)$, $Q\left(0{,}5\mid 0\right)$ und $R\left(2\mid 1{,}2\right)$.

**Bestimme** die Funktionsgleichung von $f$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 0,8*x^2-1,2*x+0,4 ]] @canvas
@Algebrite.check(`0.8*x^2-1.2*x+0.4`)
[[?]] @Explain
****************
Der Ansatz lautet $f(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P\left(-1{,}5\mid 4\right):&\quad 4=a\cdot \left(-1{,}5\right)^2+b\cdot \left(-1{,}5\right)+c \\
Q\left(0{,}5\mid 0\right):&\quad 0=a\cdot \left(0{,}5\right)^2+b\cdot 0{,}5+c \\
R\left(2\mid 1{,}2\right):&\quad 1{,}2=a\cdot 2^2+b\cdot 2+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 2{,}25a-1{,}5b+c=4 \\
\mathrm{II}:&\quad 0{,}25a+0{,}5b+c=0 \\
\mathrm{III}:&\quad 4a+2b+c=1{,}2
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
-2a+2b &= 0-4 \\
-2a+2b &= -4 &&\quad |:2 \\
-a+b &= -2 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
3{,}75a+1{,}5b &= 1{,}2-0 \\
3{,}75a+1{,}5b &= 1{,}2 &&\quad |:1{,}5 \\
2{,}5a+b &= 0{,}8 &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
3{,}5a &= 0{,}8-\left(-2\right) \\
3{,}5a &= 2{,}8 &&\quad |:3{,}5 \\
a &= 0{,}8
\end{aligned}
$$

Einsetzen von $a=0{,}8$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
-a+b &= -2 \\
-1\cdot 0{,}8+b &= -2 \\
-0{,}8+b &= -2 &&\quad |+0{,}8 \\
b &= -1{,}2
\end{aligned}
$$

Einsetzen von $a=0{,}8$ und $b=-1{,}2$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
0{,}25a+0{,}5b+c &= 0 \\
0{,}25\cdot 0{,}8+0{,}5\cdot \left(-1{,}2\right)+c &= 0 \\
0{,}2+\left(-0{,}6\right)+c &= 0 \\
-0{,}4+c &= 0 &&\quad |+0{,}4 \\
c &= 0{,}4
\end{aligned}
$$

Damit gilt $f(x)=0{,}8x^2-1{,}2x+0{,}4$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme, Dezimalzahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der quadratischen Funktion $g$ verläuft durch die Punkte $P\left(-0{,}4\mid -1{,}04\right)$, $Q\left(1{,}6\mid -0{,}84\right)$ und $R\left(3{,}6\mid -10{,}64\right)$.

**Bestimme** die Funktionsgleichung von $g$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -1,25*x^2+1,6*x-0,2 ]] @canvas
@Algebrite.check(`-1.25*x^2+1.6*x-0.2`)
[[?]] @Explain
****************
Der Ansatz lautet $g(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P\left(-0{,}4\mid -1{,}04\right):&\quad -1{,}04=a\cdot \left(-0{,}4\right)^2+b\cdot \left(-0{,}4\right)+c \\
Q\left(1{,}6\mid -0{,}84\right):&\quad -0{,}84=a\cdot \left(1{,}6\right)^2+b\cdot 1{,}6+c \\
R\left(3{,}6\mid -10{,}64\right):&\quad -10{,}64=a\cdot \left(3{,}6\right)^2+b\cdot 3{,}6+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 0{,}16a-0{,}4b+c=-1{,}04 \\
\mathrm{II}:&\quad 2{,}56a+1{,}6b+c=-0{,}84 \\
\mathrm{III}:&\quad 12{,}96a+3{,}6b+c=-10{,}64
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
2{,}4a+2b &= -0{,}84-\left(-1{,}04\right) \\
2{,}4a+2b &= 0{,}2 &&\quad |:2 \\
1{,}2a+b &= 0{,}1 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
10{,}4a+2b &= -10{,}64-\left(-0{,}84\right) \\
10{,}4a+2b &= -9{,}8 &&\quad |:2 \\
5{,}2a+b &= -4{,}9 &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
4a &= -4{,}9-0{,}1 \\
4a &= -5 &&\quad |:4 \\
a &= -1{,}25
\end{aligned}
$$

Einsetzen von $a=-1{,}25$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
1{,}2a+b &= 0{,}1 \\
1{,}2\cdot \left(-1{,}25\right)+b &= 0{,}1 \\
-1{,}5+b &= 0{,}1 &&\quad |+1{,}5 \\
b &= 1{,}6
\end{aligned}
$$

Einsetzen von $a=-1{,}25$ und $b=1{,}6$ in $\mathrm{I}$ liefert $c$:

$$
\begin{aligned}
0{,}16a-0{,}4b+c &= -1{,}04 \\
0{,}16\cdot \left(-1{,}25\right)+\left(-0{,}4\right)\cdot 1{,}6+c &= -1{,}04 \\
-0{,}2+\left(-0{,}64\right)+c &= -1{,}04 \\
-0{,}84+c &= -1{,}04 &&\quad |+0{,}84 \\
c &= -0{,}2
\end{aligned}
$$

Damit gilt $g(x)=-1{,}25x^2+1{,}6x-0{,}2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme, Dezimalzahlen)

</div>

</section>
