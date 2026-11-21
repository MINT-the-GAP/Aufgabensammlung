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

tags: Quadratische Funktionen, Gleichungssysteme, Dezimalzahlen, mittel, normal, Bestimmen

comment: Bestimme die Gleichungen zweier quadratischer Funktionen aus jeweils drei Punkten mithilfe eines linearen Gleichungssystems. Die gegebenen Punktkoordinaten sind ganze Zahlen; die gesuchten Parameter enthalten rationale Zahlen, die keine ganzen Zahlen sind.

author: Martin Lommatzsch
-->

# Quadratische Funktionen aus drei Punkten bestimmen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der quadratischen Funktion $f$ verläuft durch die Punkte $P\left(-1\mid 1\right)$, $Q\left(1\mid 0\right)$ und $R\left(3\mid 9\right)$.

**Bestimme** die Funktionsgleichung von $f$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 1,25*x^2-0,5*x-0,75 ]] @canvas
@Algebrite.check(`1.25*x^2-0.5*x-0.75`)
[[?]] @Explain
****************
Der Ansatz lautet $f(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P\left(-1\mid 1\right):&\quad 1=a\cdot \left(-1\right)^2+b\cdot \left(-1\right)+c \\
Q\left(1\mid 0\right):&\quad 0=a\cdot 1^2+b\cdot 1+c \\
R\left(3\mid 9\right):&\quad 9=a\cdot 3^2+b\cdot 3+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad a-b+c=1 \\
\mathrm{II}:&\quad a+b+c=0 \\
\mathrm{III}:&\quad 9a+3b+c=9
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
2b &= 0-1 \\
2b &= -1 &&\quad |:2 \\
b &= -0{,}5 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
8a+2b &= 9-0 \\
8a+2b &= 9 &&\quad |:2 \\
4a+b &= 4{,}5 &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
4a &= 4{,}5-\left(-0{,}5\right) \\
4a &= 5 &&\quad |:4 \\
a &= 1{,}25
\end{aligned}
$$

Aus $\mathrm{IV}$ folgt direkt $b=-0{,}5$.

Einsetzen von $a=1{,}25$ und $b=-0{,}5$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
a+b+c &= 0 \\
1\cdot 1{,}25+1\cdot \left(-0{,}5\right)+c &= 0 \\
1{,}25+\left(-0{,}5\right)+c &= 0 \\
0{,}75+c &= 0 &&\quad |-0{,}75 \\
c &= -0{,}75
\end{aligned}
$$

Damit gilt $f(x)=1{,}25x^2-0{,}5x-0{,}75$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme, Dezimalzahlen)

</div>

<div class="flex-child">

__$b)$__

Der Graph der quadratischen Funktion $g$ verläuft durch die Punkte $P\left(-3\mid -5\right)$, $Q\left(1\mid 3\right)$ und $R\left(5\mid -1\right)$.

**Bestimme** die Funktionsgleichung von $g$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -0,375*x^2+1,25*x+2,125 ]] @canvas
@Algebrite.check(`-0.375*x^2+1.25*x+2.125`)
[[?]] @Explain
****************
Der Ansatz lautet $g(x)=ax^2+bx+c$ mit $a\ne 0$. Die Koordinaten der drei Punkte werden eingesetzt:

$$
\begin{aligned}
P\left(-3\mid -5\right):&\quad -5=a\cdot \left(-3\right)^2+b\cdot \left(-3\right)+c \\
Q\left(1\mid 3\right):&\quad 3=a\cdot 1^2+b\cdot 1+c \\
R\left(5\mid -1\right):&\quad -1=a\cdot 5^2+b\cdot 5+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 9a-3b+c=-5 \\
\mathrm{II}:&\quad a+b+c=3 \\
\mathrm{III}:&\quad 25a+5b+c=-1
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
-8a+4b &= 3-\left(-5\right) \\
-8a+4b &= 8 &&\quad |:4 \\
-2a+b &= 2 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
24a+4b &= -1-3 \\
24a+4b &= -4 &&\quad |:4 \\
6a+b &= -1 &&\quad (\mathrm{V})
\end{aligned}
$$

Subtraktion von $\mathrm{IV}$ von $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
8a &= -1-2 \\
8a &= -3 &&\quad |:8 \\
a &= -0{,}375
\end{aligned}
$$

Einsetzen von $a=-0{,}375$ in $\mathrm{IV}$ ergibt $b$:

$$
\begin{aligned}
-2a+b &= 2 \\
-2\cdot \left(-0{,}375\right)+b &= 2 \\
0{,}75+b &= 2 &&\quad |-0{,}75 \\
b &= 1{,}25
\end{aligned}
$$

Einsetzen von $a=-0{,}375$ und $b=1{,}25$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
a+b+c &= 3 \\
1\cdot \left(-0{,}375\right)+1\cdot 1{,}25+c &= 3 \\
-0{,}375+1{,}25+c &= 3 \\
0{,}875+c &= 3 &&\quad |-0{,}875 \\
c &= 2{,}125
\end{aligned}
$$

Damit gilt $g(x)=-0{,}375x^2+1{,}25x+2{,}125$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme, Dezimalzahlen)

</div>

</section>
