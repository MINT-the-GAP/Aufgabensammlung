<!--
version:  1.0.0
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md













tags: Erklärung, Gebrochen rationale Funktionen, Polynomdivision

comment: In diesem Abschnitt werden gebrochen rationale Funktionen, ihre Definitionsmengen, echte und unechte Bruchterme, Polynomdivision sowie Polstellen und hebbare Definitionslücken erklärt.

author: Martin Lommatzsch

-->

# Gebrochen rationale Funktionen

{{|>}}
***************************

Eine gebrochen rationale Funktion wird durch einen Quotienten zweier [Polynome](04_07_01_Polynomfunktion.md) beschrieben:

$$
f(x)=\frac{P(x)}{Q(x)}.
$$

Dabei sind $P$ und $Q$ Polynome mit reellen Koeffizienten, und $Q$ darf nicht das Nullpolynom sein. Da eine Division durch null nicht definiert ist, müssen wir alle Nullstellen des Nenners ausschließen. Die maximale reelle Definitionsmenge lautet deshalb:

$$
D_f=\{x\in\mathbb{R}\mid Q(x)\neq0\}.
$$

Diese ausgeschlossenen Stellen bleiben auch dann ausgeschlossen, wenn sich der Funktionsterm später kürzen lässt.

{{|>}} Bei der Unterscheidung zwischen echt und unecht gebrochen rationalen Funktionen vergleichen wir die Polynomgrade. Für ein Zählerpolynom $P$, das nicht das Nullpolynom ist, gilt:

$$
\begin{aligned}
\deg P<\deg Q
&\quad\Rightarrow\quad\text{echt gebrochen rational},\\
\deg P\geq\deg Q
&\quad\Rightarrow\quad\text{unecht gebrochen rational}.
\end{aligned}
$$

Entscheidend sind also die höchsten auftretenden Potenzen mit von null verschiedenen Koeffizienten. Ob gemeinsame Faktoren gekürzt werden können, ist eine andere Frage.

Zum Beispiel ist

$$
g(x)=\frac{1}{x^2-25},
\qquad D_g=\mathbb{R}\setminus\{-5,5\},
$$

echt gebrochen rational: Der Zähler hat den Grad $0$, der Nenner den Grad $2$.

{{|>}} Dagegen ist die Funktion

$$
f(x)=\frac{x^2+4x+4}{x^2-25},
\qquad D_f=\mathbb{R}\setminus\{-5,5\},
$$

unecht gebrochen rational, denn Zähler und Nenner haben beide den Grad $2$. Durch Faktorisieren erhalten wir:

$$
f(x)=\frac{(x+2)^2}{(x-5)(x+5)},
\qquad x\neq-5,\;x\neq5.
$$

Hier gibt es keinen gemeinsamen Faktor zum Kürzen. Trotzdem ist die Funktion unecht gebrochen rational. An den ausgeschlossenen Stellen $x=-5$ und $x=5$ hat sie Polstellen: Der Nenner nähert sich dort null, während der Zähler jeweils von null verschieden bleibt. Die Funktionswerte wachsen bei Annäherung an diese Stellen betragsmäßig unbegrenzt.

{{|>}} Gemeinsame Faktoren können beispielsweise mithilfe binomischer Identitäten erkannt werden:

$$
\begin{aligned}
h(x)
&=\frac{x^2-9}{x+3}\\
&=\frac{(x-3)(x+3)}{x+3}\\
&=x-3,
\qquad x\neq-3.
\end{aligned}
$$

Der Faktor $x+3$ darf nur gekürzt werden, wenn er nicht null ist. Daher bleibt die ursprüngliche Definitionsmenge

$$
D_h=\mathbb{R}\setminus\{-3\}
$$

erhalten. Der Graph stimmt mit der Geraden $y=x-3$ überein, allerdings fehlt der Punkt $(-3\mid-6)$. Die Funktion $h$ ist also nicht dieselbe Funktion wie $x\mapsto x-3$ auf ganz $\mathbb{R}$.

Bei $x=-3$ liegt keine Polstelle, sondern eine hebbare Definitionslücke vor. Erst durch die zusätzliche Festlegung des Werts $-6$ an dieser Stelle entsteht eine stetige Fortsetzung auf ganz $\mathbb{R}$. Die ursprüngliche Funktion wird dadurch erweitert, nicht nur umgeschrieben.

{{|>}} Bei komplizierteren Polynomen sind gemeinsame Faktoren nicht immer unmittelbar erkennbar. Dann hilft die Polynomdivision. Sie funktioniert ähnlich wie die schriftliche Division von Zahlen: Wir dividieren die führenden Terme, multiplizieren das Ergebnis mit dem Divisor und subtrahieren dieses Produkt vom bisherigen Rest.

Wir betrachten:

$$
u(x)=\frac{2x^4+2x^3-4x^2+8x-48}{x-2},
\qquad D_u=\mathbb{R}\setminus\{2\}.
$$

Die Funktion ist bereits am Gradvergleich als unecht gebrochen rational zu erkennen: Der Zähler hat den Grad $4$, der Nenner den Grad $1$. Die Division zeigt, welcher Polynomanteil und welcher Rest entstehen.

{{|>}} Zunächst ordnen wir die Summanden nach absteigenden Potenzen. Fehlende Potenzen würden wir mit dem Koeffizienten null ergänzen. Im Beispiel sind alle Potenzen von $x^4$ bis $x^0$ vorhanden.

Im ersten Schritt teilen wir $2x^4$ durch $x$ und erhalten $2x^3$. Dieses erste Glied des Ergebnisses multiplizieren wir mit dem gesamten Divisor:

$$
2x^3(x-2)=2x^4-4x^3.
$$

Wir subtrahieren das gesamte Produkt. Dabei ändern sich beide Vorzeichen:

$$
\begin{aligned}
&(2x^4+2x^3-4x^2+8x-48)
 -(2x^4-4x^3)\\
&\qquad=6x^3-4x^2+8x-48.
\end{aligned}
$$

Nun wiederholen wir denselben Ablauf. Aus $6x^3:x$ entsteht $6x^2$, aus $8x^2:x$ entsteht $8x$ und zuletzt aus $24x:x$ die Zahl $24$. Das vollständige Rechenschema lautet:

$$
\begin{array}{rrrrr}
2x^4 & +2x^3 & -4x^2 & +8x & -48\\
-\bigl(2x^4 & -4x^3\bigr) & & &\\
\hline
& 6x^3 & -4x^2 & +8x & -48\\
& -\bigl(6x^3 & -12x^2\bigr) & &\\
\hline
& & 8x^2 & +8x & -48\\
& & -\bigl(8x^2 & -16x\bigr) &\\
\hline
& & & 24x & -48\\
& & & -\bigl(24x & -48\bigr)\\
\hline
& & & & 0
\end{array}
$$

Die vier ermittelten Glieder bilden den Quotienten:

$$
S(x)=2x^3+6x^2+8x+24.
$$

Der Rest ist null. Zur Kontrolle multiplizieren wir Quotient und Divisor:

$$
\begin{aligned}
&(x-2)(2x^3+6x^2+8x+24)\\
&\qquad=2x^4+2x^3-4x^2+8x-48.
\end{aligned}
$$

{{|>}} Damit lässt sich der Funktionsterm vereinfachen:

$$
u(x)=2x^3+6x^2+8x+24,
\qquad x\neq2.
$$

Die Definitionslücke bei $x=2$ verschwindet durch die Division nicht. Das Polynom $S$ hätte dort den Wert

$$
S(2)=2\cdot2^3+6\cdot2^2+8\cdot2+24=80.
$$

Im Graphen von $u$ fehlt also der Punkt $(2\mid80)$. Auch hier liegt eine hebbare Definitionslücke und keine Polstelle vor. Dass die Division ohne Rest aufgeht, bedeutet, dass $x-2$ ein Faktor des Zählerpolynoms ist.

{{|>}} Allgemein liefert die Polynomdivision zu $P$ und $Q$ einen Quotienten $S$ und ein Restpolynom $R$ mit

$$
P(x)=Q(x)\,S(x)+R(x).
$$

Dabei ist entweder $R$ das Nullpolynom oder sein Grad kleiner als der Grad von $Q$. Für alle Stellen der ursprünglichen Definitionsmenge gilt:

$$
\frac{P(x)}{Q(x)}
=S(x)+\frac{R(x)}{Q(x)},
\qquad Q(x)\neq0.
$$

Eine unecht gebrochen rationale Funktion wird dadurch in einen Polynomanteil und gegebenenfalls einen echt gebrochen rationalen Restanteil zerlegt. Bei einer echt gebrochen rationalen Funktion ist der Polynomanteil $S=0$.

{{|>}} Ein von null verschiedener Rest ist auch bei einer unecht gebrochen rationalen Funktion möglich. Für das erste Beispiel mit quadratischem Zähler gilt:

$$
x^2+4x+4=(x^2-25)\cdot1+(4x+29).
$$

Somit erhalten wir:

$$
\frac{x^2+4x+4}{x^2-25}
=1+\frac{4x+29}{x^2-25},
\qquad x\neq-5,\;x\neq5.
$$

Der Quotient ist $1$, der Rest lautet $4x+29$. Der Gradvergleich, die Kürzbarkeit und das Auftreten von Polstellen dürfen also nicht miteinander verwechselt werden.

{{|>}} Für die Untersuchung einer ausgeschlossenen Stelle kürzen wir zunächst alle gemeinsamen Faktoren von Zähler und Nenner vollständig. Die ursprüngliche Definitionsmenge bleibt dabei maßgeblich.

Ist der vollständig gekürzte Nenner an der betrachteten Stelle von null verschieden, lässt sich ein endlicher Funktionswert ergänzen: Es liegt eine hebbare Definitionslücke vor. Bleibt die Stelle dagegen eine Nullstelle des vollständig gekürzten Nenners, liegt dort eine Polstelle vor.

Beide Fälle können innerhalb derselben Funktion vorkommen:

$$
v(x)=\frac{x-1}{(x-1)(x-2)}
=\frac{1}{x-2},
\qquad x\neq1,\;x\neq2.
$$

Bei $x=1$ ist die Definitionslücke hebbar; im Graphen fehlt der Punkt $(1\mid-1)$. Bei $x=2$ bleibt eine Polstelle. Diese Funktion ist echt gebrochen rational und besitzt dennoch eine hebbare Definitionslücke.

Auch wenn ein gemeinsamer Faktor gekürzt werden kann, muss die zugehörige Polstelle nicht verschwinden:

$$
w(x)=\frac{x-1}{(x-1)^2}
=\frac{1}{x-1},
\qquad x\neq1.
$$

Bei $x=1$ bleibt ein Faktor im Nenner übrig. Deshalb liegt dort weiterhin eine Polstelle vor. Es kommt auf die Anzahl der gleichen Faktoren im Zähler und im Nenner an.

Sowohl hebbare Lücken als auch Polstellen sind ausgeschlossene Stellen der ursprünglichen Definitionsmenge. Weitere Einzelheiten zum Verhalten in ihrer Umgebung stehen in der Erklärung [Grenzwerte](04_11_06_Grenzwert.md).

{{|>}} Die Polynomdivision hilft außerdem beim Bestimmen von Nullstellen höherer Polynome. Ist $x_0$ eine bekannte Nullstelle eines Polynoms $P$, so geht die Division durch $x-x_0$ ohne Rest auf:

$$
P(x)=(x-x_0)\,S(x).
$$

Die weiteren Nullstellen können dann anhand des Polynoms $S$ untersucht werden, dessen Grad um eins kleiner ist. Im ausführlichen Beispiel ist $x=2$ eine Nullstelle des Zählerpolynoms, aber keine Nullstelle der gebrochen rationalen Funktion $u$, denn $2$ gehört nicht zu deren Definitionsmenge.

Allgemein ist $x_0$ genau dann eine Nullstelle von $P/Q$, wenn $P(x_0)=0$ und zugleich $Q(x_0)\neq0$ gilt.

***************************
