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

Der Graph der quadratischen Funktion $f$ verläuft durch die Punkte $P(-2\mid 5)$, $Q(2\mid -3)$ und $R(4\mid 5)$.

**Bestimme** die Funktionsgleichung von $f$ mithilfe eines linearen Gleichungssystems.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ x^2-2*x-3 ]] @canvas
@Algebrite.check(`x^2-2*x-3`)
[[?]] @Explain
****************
Der Ansatz lautet $f(x)=ax^2+bx+c$ mit $a\ne 0$. Einsetzen der Punktkoordinaten ergibt:

$$
\begin{aligned}
P(-2\mid 5):&\quad 5=a\cdot(-2)^2+b\cdot(-2)+c \\
Q(2\mid -3):&\quad -3=a\cdot 2^2+b\cdot 2+c \\
R(4\mid 5):&\quad 5=a\cdot 4^2+b\cdot 4+c
\end{aligned}
$$

Daraus entsteht das lineare Gleichungssystem:

$$
\begin{aligned}
\mathrm{I}:&\quad 4a-2b+c=5 \\
\mathrm{II}:&\quad 4a+2b+c=-3 \\
\mathrm{III}:&\quad 16a+4b+c=5
\end{aligned}
$$

Aus $\mathrm{II}-\mathrm{I}$ folgt:

$$
\begin{aligned}
4b &= -3-5 \\
4b &= -8 &&\quad |:4 \\
b &= -2
\end{aligned}
$$

Aus $\mathrm{III}-\mathrm{II}$ und $b=-2$ ergibt sich:

$$
\begin{aligned}
12a+2b &= 5-(-3) \\
12a+2\cdot(-2) &= 8 \\
12a-4 &= 8 &&\quad |+4 \\
12a &= 12 &&\quad |:12 \\
a &= 1
\end{aligned}
$$

Einsetzen von $a=1$ und $b=-2$ in $\mathrm{II}$ liefert $c$:

$$
\begin{aligned}
4a+2b+c &= -3 \\
4\cdot 1+2\cdot(-2)+c &= -3 \\
4-4+c &= -3 \\
c &= -3
\end{aligned}
$$

Damit gilt $f(x)=x^2-2x-3$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Gleichungssysteme)

</div>

<div class="flex-child">

__$b)$__

Die Sekante $s$ verläuft durch die beiden Punkte des Graphen von $f$ an den Stellen $x_A=-3$ und $x_B=6$.

**Bestimme** die Funktionsgleichung der Sekante $s$.

<!-- data-hint-button="1" data-solution-button="3" -->
$s(x)=$ [[ x+15 ]] @canvas
@Algebrite.check(`x+15`)
[[?]] @Explain
****************
Zunächst werden die zugehörigen Funktionswerte berechnet:

$$
\begin{aligned}
y_A &= f(-3)=(-3)^2-2\cdot(-3)-3=12 \\
y_B &= f(6)=6^2-2\cdot 6-3=21
\end{aligned}
$$

Die Sekante verläuft somit durch $A(-3\mid 12)$ und $B(6\mid 21)$. Ihre Steigung ist:

$$
\begin{aligned}
m_s &= \dfrac{\Delta y}{\Delta x}
= \dfrac{y_B-y_A}{x_B-x_A} \\
&= \dfrac{21-12}{6-(-3)}
= \dfrac{9}{9}=1
\end{aligned}
$$

Der Ansatz lautet $s(x)=m_sx+b_s$. Einsetzen von $m_s=1$ und $A(-3\mid 12)$ liefert:

$$
\begin{aligned}
12 &= 1\cdot(-3)+b_s \\
12 &= -3+b_s &&\quad |+3 \\
b_s &= 15
\end{aligned}
$$

Damit gilt $s(x)=x+15$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Quadratische Funktionen)

</div>

<div class="flex-child">

__$c)$__

**Berechne** die Nullstellen von $f$. Trage sie in aufsteigender Reihenfolge ein, sodass $x_1<x_2$ gilt.

<!-- data-hint-button="1" data-solution-button="3" -->
$x_1=$ [[ -1 ]] @canvas \
$x_2=$ [[ 3 ]] @canvas
@Algebrite.check(`[-1;3]`)
[[?]] @Explain
****************
An den Nullstellen ist der Funktionswert null. Durch quadratische Ergänzung ergibt sich:

$$
\begin{aligned}
f(x) &= 0 \\
x^2-2x-3 &= 0 &&\quad |+3 \\
x^2-2x &= 3 &&\quad |+1 \\
x^2-2x+1 &= 4 \\
(x-1)^2 &= 4 \\
x-1 &= \pm 2 &&\quad |+1 \\
x &= 1\pm 2
\end{aligned}
$$

Daraus folgen $x_1=1-2=-1$ und $x_2=1+2=3$.

Die Schnittpunkte mit der Abszissenachse sind $N_1(-1\mid 0)$ und $N_2(3\mid 0)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Nullstellen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$d)$__

Gegeben ist die Gerade mit der Funktionsgleichung $g(x)=8x-28$.

**Berechne** die Koordinaten aller gemeinsamen Punkte der Graphen von $f$ und $g$.

<!-- data-hint-button="1" data-solution-button="3" -->
$S($ [[ 5 ]] @canvas $\mid$ [[ 12 ]] @canvas $)$
@Algebrite.check(`[5;12]`)
[[?]] @Explain
****************
An gemeinsamen Punkten stimmen die Funktionswerte überein:

$$
\begin{aligned}
f(x) &= g(x) \\
x^2-2x-3 &= 8x-28 &&\quad |-8x+28 \\
x^2-10x+25 &= 0 \\
(x-5)^2 &= 0 \\
x-5 &= 0 &&\quad |+5 \\
x &= 5
\end{aligned}
$$

Für die Ordinate gilt:

$$
y=f(5)=5^2-2\cdot 5-3=12
$$

Die Probe mit der Geraden ergibt $g(5)=8\cdot 5-28=12$.

Es gibt genau einen gemeinsamen Punkt $S(5\mid 12)$. Die Schnittpunktgleichung hat eine doppelte Lösung. Die Gerade berührt die Parabel in diesem Punkt und ist somit eine Tangente.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

__$e)$__

Eine zweite Parabel ist durch $h(x)=-x^2+8x-24$ gegeben.

**Berechne** die möglichen Schnittpunkte ihres Graphen mit dem Graphen von $f$ aus Teilaufgabe $a)$. **Interpretiere** das Ergebnis deiner Rechnung hinsichtlich gemeinsamer Punkte der beiden Parabeln. Formuliere deine Deutung mit einer rechnerischen Begründung.

<!-- data-hint-button="1" data-solution-button="3" data-llm-textarea="6" -->
[[Antwort]]
[[?]] @Explain
```text @LLMQuiz(0.55;coverage=1;solution=1;feedback=1;assessmentengine=quality;Rechtschreibung=1;Satzbau=1;maxthinkingtime=15s;maxthinkingtokens=medium,`Eine zweite Parabel ist durch $h(x)=-x^2+8x-24$ gegeben. Berechne die möglichen Schnittpunkte ihres Graphen mit dem Graphen von $f$ aus Teilaufgabe $a)$. Interpretiere das Ergebnis deiner Rechnung hinsichtlich gemeinsamer Punkte der beiden Parabeln. Formuliere deine Deutung mit einer rechnerischen Begründung.`)
<!-- lia-llm:criterion -->
Die Schnittpunktgleichung 2x^2-10x+21=0 besitzt nach rechnerischer Prüfung keine reelle Lösung. Als gleichwertige Belege gelten beispielsweise (2x-5)^2=-17, eine negative Diskriminante nach korrekter Umformung oder ein negativer Radikand in der p-q-Gleichung.
<!-- lia-llm:criterion -->
Die beiden Parabeln haben keinen gemeinsamen Punkt.
<!-- lia-llm:solution -->
An gemeinsamen Punkten müsste $f(x)=h(x)$ gelten:

$$
\begin{aligned}
x^2-2x-3 &= -x^2+8x-24 &&\quad |+x^2-8x+24 \\
2x^2-10x+21 &= 0 &&\quad |\cdot 2 \\
4x^2-20x+42 &= 0 &&\quad |-17 \\
4x^2-20x+25 &= -17 \\
(2x-5)^2 &= -17
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
$d=$ [[ 5 ]] @canvas $\mathrm{LE}$
@Algebrite.check(`5`)
[[?]] @Explain
****************
Die Scheitelpunkte werden aus den Scheitelpunktsformen bestimmt. Für $f$ gilt:

$$
\begin{aligned}
f(x) &= x^2-2x-3 \\
&= x^2-2x+1-1-3 \\
&= (x-1)^2-4
\end{aligned}
$$

Daraus folgt $S_f(1\mid -4)$. Für $h$ gilt:

$$
\begin{aligned}
h(x) &= -x^2+8x-24 \\
&= -(x^2-8x)-24 \\
&= -(x^2-8x+16-16)-24 \\
&= -(x-4)^2+16-24 \\
&= -(x-4)^2-8
\end{aligned}
$$

Daraus folgt $S_h(4\mid -8)$. Mit dem Satz des Pythagoras ergibt sich der Abstand:

$$
\begin{aligned}
d &= \sqrt{(x_{S_h}-x_{S_f})^2+(y_{S_h}-y_{S_f})^2}\,\mathrm{LE} \\
&= \sqrt{(4-1)^2+(-8-(-4))^2}\,\mathrm{LE} \\
&= \sqrt{3^2+(-4)^2}\,\mathrm{LE} \\
&= \sqrt{9+16}\,\mathrm{LE} \\
&= 5\,\mathrm{LE}
\end{aligned}
$$

Der Abstand der Scheitelpunkte beträgt $5\,\mathrm{LE}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Satz des Pythagoras)

</div>

</section>
