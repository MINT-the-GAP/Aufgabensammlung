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

tags: Quadratische Funktionen, Lineare Funktionen, Gleichungssysteme, Nullstellen, Schnittpunkt, Quadratische Ergänzung, Satz des Pythagoras, schwer, hoch, Bestimmen, Berechnen, Interpretieren

comment: Bestimme eine Parabel aus drei Punkten, eine Sekante und die Nullstellen. Berechne gemeinsame Punkte mit einer Geraden, interpretiere eine weitere Schnittpunktrechnung und bestimme den Abstand zweier Scheitelpunkte. Die gegebenen Werte und alle existierenden gesuchten Zahlenwerte sind ganzzahlig.

author: Martin Lommatzsch
-->

# Parabeln, Geraden und Scheitelpunktabstand

<img alt="Vernetzungsgrad 4" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 4" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">

Die Teilaufgaben bauen aufeinander auf. Verwende jeweils die quadratische Funktion $f$ aus Teilaufgabe $a)$.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

Der Graph der quadratischen Funktion $f$ verläuft durch die Punkte $P(-4\mid 5)$, $Q(-1\mid 8)$ und $R(2\mid -7)$.

**Bestimme** die Funktionsgleichung von $f$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ -x^2-4*x+5 ]] @canvas
@Algebrite.check(`-x^2-4*x+5`)
[[?]] @Explain
****************
Der Ansatz lautet $f(x)=ax^2+bx+c$ mit $a\ne 0$. Einsetzen der Punktkoordinaten ergibt:

$$
\begin{aligned}
P(-4\mid 5):&\quad 5=a\cdot(-4)^2+b\cdot(-4)+c \\
Q(-1\mid 8):&\quad 8=a\cdot(-1)^2+b\cdot(-1)+c \\
R(2\mid -7):&\quad -7=a\cdot 2^2+b\cdot 2+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 16a-4b+c=5 \\
\mathrm{II}:&\quad a-b+c=8 \\
\mathrm{III}:&\quad 4a+2b+c=-7
\end{aligned}
$$

Durch Subtraktion wird $c$ eliminiert. Aus $\mathrm{I}-\mathrm{II}$ folgt:

$$
\begin{aligned}
15a-3b &= 5-8 \\
15a-3b &= -3 &&\quad |:3 \\
5a-b &= -1 &&\quad (\mathrm{IV})
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ folgt:

$$
\begin{aligned}
3a+3b &= -7-8 \\
3a+3b &= -15 &&\quad |:3 \\
a+b &= -5 &&\quad (\mathrm{V})
\end{aligned}
$$

Addition von $\mathrm{IV}$ und $\mathrm{V}$ liefert $a$:

$$
\begin{aligned}
6a &= -1+(-5) \\
6a &= -6 &&\quad |:6 \\
a &= -1
\end{aligned}
$$

Einsetzen von $a=-1$ in $\mathrm{V}$ ergibt $b$:

$$
\begin{aligned}
a+b &= -5 \\
-1+b &= -5 &&\quad |+1 \\
b &= -4
\end{aligned}
$$

Einsetzen von $a=-1$ und $b=-4$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
a-b+c &= 8 \\
-1-(-4)+c &= 8 \\
3+c &= 8 &&\quad |-3 \\
c &= 5
\end{aligned}
$$

Damit gilt $f(x)=-x^2-4x+5$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme)

</div>

<div class="flex-child">

__$b)$__

Die Sekante $s$ verläuft durch die beiden Punkte des Graphen von $f$ an den Stellen $x_A=-3$ und $x_B=4$.

**Bestimme** die Funktionsgleichung der Sekante $s$.

<!-- data-hint-button="1" data-solution-button="3" -->
$s(x)=$ [[ -5*x-7 ]] @canvas
@Algebrite.check(`-5*x-7`)
[[?]] @Explain
****************
Zunächst werden die zugehörigen Funktionswerte berechnet:

$$
\begin{aligned}
y_A &= f(-3)=-(-3)^2-4\cdot(-3)+5=8 \\
y_B &= f(4)=-4^2-4\cdot 4+5=-27
\end{aligned}
$$

Die Sekante verläuft somit durch $A(-3\mid 8)$ und $B(4\mid -27)$. Ihre Steigung ist:

$$
\begin{aligned}
m_s &= \dfrac{\Delta y}{\Delta x}
= \dfrac{y_B-y_A}{x_B-x_A} \\
&= \dfrac{-27-8}{4-(-3)}
= \dfrac{-35}{7}=-5
\end{aligned}
$$

Der Ansatz lautet $s(x)=m_sx+b_s$. Einsetzen von $m_s=-5$ und $A(-3\mid 8)$ liefert:

$$
\begin{aligned}
8 &= (-5)\cdot(-3)+b_s \\
8 &= 15+b_s &&\quad |-15 \\
b_s &= -7
\end{aligned}
$$

Damit gilt $s(x)=-5x-7$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Quadratische Funktionen)

</div>

<div class="flex-child">

__$c)$__

**Berechne** die Nullstellen von $f$. Trage sie in aufsteigender Reihenfolge ein, sodass $x_1<x_2$ gilt.

<!-- data-hint-button="1" data-solution-button="3" -->
$x_1=$ [[ -5 ]] @canvas \
$x_2=$ [[ 1 ]] @canvas
@Algebrite.check(`[-5;1]`)
[[?]] @Explain
****************
An den Nullstellen ist der Funktionswert null. Durch quadratische Ergänzung ergibt sich:

$$
\begin{aligned}
f(x) &= 0 \\
-x^2-4x+5 &= 0 &&\quad |\cdot(-1) \\
x^2+4x-5 &= 0 &&\quad |+5 \\
x^2+4x &= 5 &&\quad |+4 \\
x^2+4x+4 &= 9 \\
(x+2)^2 &= 9 \\
x+2 &= \pm 3 &&\quad |-2 \\
x &= -2\pm 3
\end{aligned}
$$

Daraus folgen $x_1=-2-3=-5$ und $x_2=-2+3=1$.

Die Schnittpunkte mit der Abszissenachse sind $N_1(-5\mid 0)$ und $N_2(1\mid 0)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Nullstellen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$d)$__

Gegeben ist die Gerade mit der Funktionsgleichung $g(x)=-10x+14$.

**Berechne** die Koordinaten aller gemeinsamen Punkte der Graphen von $f$ und $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$S($ [[ 3 ]] @canvas $\mid$ [[ -16 ]] @canvas $)$
@Algebrite.check(`[3;-16]`)
[[?]] @Explain
****************
An gemeinsamen Punkten stimmen die Funktionswerte überein:

$$
\begin{aligned}
f(x) &= g(x) \\
-x^2-4x+5 &= -10x+14 &&\quad |+10x-14 \\
-x^2+6x-9 &= 0 &&\quad |\cdot(-1) \\
x^2-6x+9 &= 0 \\
(x-3)^2 &= 0 \\
x-3 &= 0 &&\quad |+3 \\
x &= 3
\end{aligned}
$$

Für die Ordinate gilt:

$$
y=f(3)=-3^2-4\cdot 3+5=-16
$$

Die Probe mit der Geraden ergibt $g(3)=-10\cdot 3+14=-16$.

Es gibt genau einen gemeinsamen Punkt $S(3\mid -16)$. Die Schnittpunktgleichung hat eine doppelte Lösung. Die Gerade berührt die Parabel in diesem Punkt und ist somit eine Tangente.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

__$e)$__

Eine zweite Parabel ist durch $h(x)=x^2-6x+30$ gegeben.

**Berechne** die möglichen Schnittpunkte ihres Graphen mit dem Graphen von $f$ aus Teilaufgabe $a)$. **Interpretiere** das Ergebnis deiner Rechnung hinsichtlich gemeinsamer Punkte der beiden Parabeln. Formuliere deine Deutung mit einer rechnerischen Begründung.

<!-- data-hint-button="1" data-solution-button="3" data-llm-textarea="6" -->
[[Antwort]]
[[?]] @Explain
```text @LLMQuiz(0.55;coverage=1;solution=1;feedback=1;assessmentengine=quality;Rechtschreibung=1;Satzbau=1;maxthinkingtime=15s;maxthinkingtokens=medium,`Eine zweite Parabel ist durch $h(x)=x^2-6x+30$ gegeben. Berechne die möglichen Schnittpunkte ihres Graphen mit dem Graphen von $f$ aus Teilaufgabe $a)$. Interpretiere das Ergebnis deiner Rechnung hinsichtlich gemeinsamer Punkte der beiden Parabeln. Formuliere deine Deutung mit einer rechnerischen Begründung.`)
<!-- lia-llm:criterion -->
Die Schnittpunktgleichung 2x^2-2x+25=0 besitzt nach rechnerischer Prüfung keine reelle Lösung. Als gleichwertige Belege gelten beispielsweise (2x-1)^2=-49, eine negative Diskriminante nach korrekter Umformung oder ein negativer Radikand in der p-q-Gleichung.
<!-- lia-llm:criterion -->
Die beiden Parabeln haben keinen gemeinsamen Punkt.
<!-- lia-llm:solution -->
An gemeinsamen Punkten müsste $f(x)=h(x)$ gelten:

$$
\begin{aligned}
-x^2-4x+5 &= x^2-6x+30 &&\quad |-x^2+6x-30 \\
-2x^2+2x-25 &= 0 &&\quad |\cdot(-1) \\
2x^2-2x+25 &= 0 &&\quad |\cdot 2 \\
4x^2-4x+50 &= 0 &&\quad |-49 \\
4x^2-4x+1 &= -49 \\
(2x-1)^2 &= -49
\end{aligned}
$$

Das Quadrat einer reellen Zahl kann nicht negativ sein. Die Schnittpunktgleichung besitzt daher keine reelle Lösung. Die beiden Parabeln haben keinen gemeinsamen Punkt; sie schneiden und berühren sich nicht.
```

@resetter

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$f)$__

**Berechne** den Abstand der Scheitelpunkte der Parabeln von $f$ und $h$ in Längeneinheiten $(\mathrm{LE})$.

<!-- data-hint-button="1" data-solution-button="3" -->
$d=$ [[ 13 ]] @canvas $\mathrm{LE}$
@Algebrite.check(`13`)
[[?]] @Explain
****************
Die Scheitelpunkte werden aus den Scheitelpunktsformen bestimmt. Für $f$ gilt:

$$
\begin{aligned}
f(x) &= -x^2-4x+5 \\
&= -(x^2+4x)+5 \\
&= -(x^2+4x+4-4)+5 \\
&= -(x+2)^2+4+5 \\
&= -(x+2)^2+9
\end{aligned}
$$

Daraus folgt $S_f(-2\mid 9)$. Für $h$ gilt:

$$
\begin{aligned}
h(x) &= x^2-6x+30 \\
&= x^2-6x+9-9+30 \\
&= (x-3)^2+21
\end{aligned}
$$

Daraus folgt $S_h(3\mid 21)$. Mit dem Satz des Pythagoras ergibt sich der Abstand:

$$
\begin{aligned}
d &= \sqrt{(x_{S_h}-x_{S_f})^2+(y_{S_h}-y_{S_f})^2}\,\mathrm{LE} \\
&= \sqrt{(3-(-2))^2+(21-9)^2}\,\mathrm{LE} \\
&= \sqrt{5^2+12^2}\,\mathrm{LE} \\
&= \sqrt{25+144}\,\mathrm{LE} \\
&= 13\,\mathrm{LE}
\end{aligned}
$$

Der Abstand der Scheitelpunkte beträgt $13\,\mathrm{LE}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Satz des Pythagoras)

</div>

</section>
