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













tags: Erklärung, Rekonstruktion

comment: In diesem Abschnitt wird erklärt, wie Funktionen aus vorgegebenen Punkten und Steigungen rekonstruiert werden. Ein quadratisches Beispiel zeigt das Aufstellen und Lösen des Gleichungssystems sowie die Probe.

author: Martin Lommatzsch

-->

# Rekonstruktion von Funktionen

{{|>}}
***************************

Um eine Funktion zu rekonstruieren, werden Informationen über ihren Verlauf benötigt. Das können Punkte ihres Graphen, momentane Steigungen oder andere Beziehungen sein. Entscheidend ist zunächst, zu welcher Funktionsart die gesuchte Funktion gehören soll. In den Naturwissenschaften können bekannte [Proportionalitäten](04_01_01_Proportional.md) einen passenden Ansatz liefern.

Hinreichend oft differenzierbare Funktionen können mithilfe einer [Taylorentwicklung](05_01_05_Taylor.md) in der Nähe einer Entwicklungsstelle durch Polynome angenähert werden. Deshalb lohnt es sich besonders, die Rekonstruktion von Polynomen zu betrachten. Eine solche lokale Näherung bedeutet allerdings nicht, dass jede Funktion selbst ein Polynom ist. Das Verfahren lässt sich auch auf andere Funktionsansätze übertragen; dabei können andere Arten von Gleichungssystemen entstehen.

{{|>}} Zunächst wird der allgemeine Funktionsterm mit allen noch unbekannten Koeffizienten aufgeschrieben:

$$
\begin{aligned}
f_1(x)&=a_1x+a_0,\\
f_2(x)&=a_2x^2+a_1x+a_0,\\
f_3(x)&=a_3x^3+a_2x^2+a_1x+a_0,\\
f_n(x)&=\sum_{k=0}^{n}a_kx^k.
\end{aligned}
$$

Der allgemeine Ansatz für ein Polynom höchstens $n$-ten Grades enthält $n+1$ unbekannte Koeffizienten $a_0,\ldots,a_n$. Soll der Grad genau $n$ sein, muss zusätzlich $a_n\ne0$ gelten.

Die Angaben werden nun in Gleichungen übersetzt. Ein vorgegebener Punkt $P(x_P\mid y_P)$ auf dem Graphen liefert eine Gleichung für den Funktionswert. Eine vorgegebene Steigung $m$ an der Stelle $x_S$ liefert eine Gleichung für die erste Ableitung:

$$
\begin{aligned}
f_n(x_P)&=y_P,\\
f_n'(x_S)&=m.
\end{aligned}
$$

Nach dem Einsetzen des Ansatzes und gegebenenfalls seiner Ableitungen entsteht bei solchen Bedingungen ein lineares Gleichungssystem für die Koeffizienten. Zum Beispiel ist eine vorgegebene Nullstelle $x_N$ die Bedingung $f_n(x_N)=0$.

{{|>}} Zur eindeutigen Bestimmung der $n+1$ Koeffizienten benötigt man $n+1$ voneinander unabhängige lineare Bedingungen. Wiederholte oder bereits aus anderen Angaben folgende Bedingungen liefern keine neue Information. Weitere Angaben dürfen den bisherigen Bedingungen nicht widersprechen.

Insbesondere bestimmen $n+1$ Punkte mit paarweise verschiedenen Abszissen genau ein Polynom höchstens $n$-ten Grades. Das Ergebnis kann einen kleineren Grad besitzen, wenn der berechnete Koeffizient $a_n$ null ist.

Liegen weniger unabhängige lineare Bedingungen vor, ist das Gleichungssystem unterbestimmt. Sofern die Bedingungen miteinander vereinbar sind, bleiben freie Parameter übrig und es entsteht eine [Funktionsschar](05_08_01_Funktionsscharen.md). Widersprüchliche Bedingungen führen dagegen zu keiner Lösung innerhalb des gewählten Ansatzes.

{{|>}} Im Beispiel soll eine quadratische Funktion durch die drei Punkte

$$
P_1(0\mid2),\qquad P_2(4\mid0),\qquad P_3(-3\mid0)
$$

verlaufen. Der Ansatz lautet

$$
f_2(x)=a_2x^2+a_1x+a_0,\qquad a_2\ne0.
$$

Wir setzen die Koordinaten der drei Punkte ein:

$$
\begin{aligned}
\mathrm{I.}\quad 2&=a_2\cdot0^2+a_1\cdot0+a_0,\\
\mathrm{II.}\quad 0&=a_2\cdot4^2+a_1\cdot4+a_0,\\
\mathrm{III.}\quad 0&=a_2\cdot(-3)^2+a_1\cdot(-3)+a_0.
\end{aligned}
$$

{{|>}} Aus Gleichung I folgt unmittelbar $a_0=2$. Mit diesem Wert vereinfachen sich die beiden anderen Gleichungen zu

$$
\begin{aligned}
\mathrm{II.}\quad 0&=16a_2+4a_1+2,\\
\mathrm{III.}\quad 0&=9a_2-3a_1+2.
\end{aligned}
$$

Gleichung II wird nach $a_1$ aufgelöst:

$$
\begin{aligned}
4a_1&=-16a_2-2,\\
a_1&=-4a_2-\frac12.
\end{aligned}
$$

Diesen Ausdruck setzen wir in Gleichung III ein:

$$
\begin{aligned}
0&=9a_2-3\left(-4a_2-\frac12\right)+2\\
 &=9a_2+12a_2+\frac32+2\\
 &=21a_2+\frac72,\\
-\frac72&=21a_2,\\
a_2&=-\frac{7}{42}=-\frac16.
\end{aligned}
$$

Anschließend ergibt sich

$$
a_1=-4\left(-\frac16\right)-\frac12
=\frac23-\frac12=\frac16.
$$

Damit sind alle drei Koeffizienten bestimmt. Die gesuchte Funktion lautet

$$
f_2(x)=-\frac16x^2+\frac16x+2.
$$

{{|>}} Zur Probe werden die drei vorgegebenen Abszissen in den gefundenen Funktionsterm eingesetzt:

$$
\begin{aligned}
f_2(0)&=2,\\
f_2(4)&=-\frac{16}{6}+\frac46+2=0,\\
f_2(-3)&=-\frac96-\frac36+2=0.
\end{aligned}
$$

Alle drei Punkte liegen somit auf dem Graphen. Da $a_2=-\frac16\ne0$ ist, handelt es sich tatsächlich um eine quadratische Funktion. Ihre beiden Nullstellen sind auch in der faktorisierten Schreibweise erkennbar:

$$
f_2(x)=-\frac16(x-4)(x+3).
$$

Die Abbildung zeigt die rekonstruierte Parabel und die drei vorgegebenen Punkte als Kreuze:

<center>

@Koordinatensystem(`xmin=-4.5;xmax=5.5;ymin=-2.5;ymax=3.5;width=760;id=REKON01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=REKON01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`REKON01;f2=0;-(x^2)/6+x/6+2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@Punkt(`REKON01;P1=0;0;2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`REKON01;P2=0;4;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`REKON01;P3=0;-3;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`REKON01;[0.5;2.5];$\Large P_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`REKON01;[4.35;0.4];$\Large P_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`REKON01;[-3.35;0.4];$\Large P_3$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`REKON01;[3.2;1.6];$\Large f_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Das Vorgehen bleibt auch bei anderen Rekonstruktionsaufgaben gleich: Einen geeigneten Ansatz wählen, die Angaben in Gleichungen übersetzen, die unbekannten Parameter bestimmen und das Ergebnis an den ursprünglichen Bedingungen prüfen.

***************************
