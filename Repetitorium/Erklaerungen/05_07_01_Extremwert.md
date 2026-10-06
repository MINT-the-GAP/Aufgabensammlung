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













tags: Erklärung, Extremwertaufgaben

comment: In diesem Abschnitt wird erklärt, wie Extremwertaufgaben mit Nebenbedingungen durch Aufstellen einer Zielfunktion gelöst werden. Ein Rechteck mit festem Umfang liefert das Beispiel für einen maximalen Flächeninhalt.

author: Martin Lommatzsch

-->

# Extremwertaufgaben mit Nebenbedingungen

{{|>}}
***************************

In vielen Anwendungen der Differentiation werden mehrere Bedingungen miteinander verknüpft, um eine Größe zu optimieren. Gesucht ist dabei ein möglichst großer oder möglichst kleiner Wert, also ein Maximum oder Minimum. Die Größe, die optimiert werden soll, wird durch die Zielfunktion beschrieben. Die zusätzlichen Vorgaben heißen Nebenbedingungen.

Dazu werden die Informationen zunächst als Gleichungen aufgeschrieben. Mithilfe der Nebenbedingungen werden abhängige Größen so ersetzt, dass die Zielfunktion möglichst nur noch von einer Variablen abhängt. Anschließend wird diese Funktion im sachlich zulässigen Bereich untersucht.

Auch Wendepunkte können in Anwendungen eine Rolle spielen, etwa bei der Untersuchung von Änderungsraten. Ein Wendepunkt der Zielfunktion ist aber für sich genommen kein Maximum oder Minimum dieser Funktion.

{{|>}} Beispielaufgabe: Der Umfang $U>0$ eines [Rechtecks](02_04_01_Rechteck.md) ist fest vorgegeben. Seine Seitenlängen $x$ und $y$ sollen so gewählt werden, dass der Flächeninhalt maximal wird. Bestimme die dafür nötigen Seitenlängen.

Im ersten Schritt werden die Angaben in Gleichungen übersetzt:

$$
U=2x+2y,\qquad A=xy.
$$

Die Gleichung für den Umfang ist die Nebenbedingung. Die Gleichung für den Flächeninhalt beschreibt die zu maximierende Größe. Der Umfang $U$ bleibt während der gesamten Untersuchung konstant; die Seitenlängen $x$ und $y$ dürfen sich ändern.

{{|>}} Wir lösen die Nebenbedingung nach $y$ auf:

$$
\begin{aligned}
U&=2x+2y,\\
2y&=U-2x,\\
y&=\frac U2-x.
\end{aligned}
$$

Beide Seitenlängen müssen positiv sein. Aus $x>0$ und $y=\frac U2-x>0$ folgt deshalb

$$
0<x<\frac U2.
$$

Dies ist der zulässige Bereich für die weitere Untersuchung. Bei $x=0$ oder $x=U/2$ wäre eine Seite null; es entstünde kein Rechteck mit positivem Flächeninhalt.

{{|>}} Der Ausdruck für $y$ wird nun in die Flächeninhaltsgleichung eingesetzt. Dadurch ergibt sich die Zielfunktion

$$
\begin{aligned}
A(x)&=x\left(\frac U2-x\right)\\
&=-x^2+\frac U2x,\qquad x\in\left(0,\frac U2\right).
\end{aligned}
$$

Nun hängt $A$ nur noch von $x$ ab. $U$ ist ein fester Parameter und wird beim Ableiten nach $x$ als Konstante behandelt.

{{|>}} Zur Bestimmung einer möglichen inneren Extremstelle wird die erste Ableitung gleich null gesetzt:

$$
\begin{aligned}
\frac{d}{dx}A(x)=A'(x)&=-2x+\frac U2,\\
A'(x)&\stackrel{!}{=}0,\\
-2x+\frac U2&=0,\\
2x&=\frac U2,\\
x_E&=\frac U4.
\end{aligned}
$$

Wegen $U>0$ liegt $x_E=U/4$ im zulässigen Bereich. Die zweite Ableitung lautet

$$
\frac{d}{dx}A'(x)=A''(x)=-2<0.
$$

Damit ist an dieser Stelle ein lokales Maximum nachgewiesen. Die zugrunde liegenden Ableitungskriterien werden bei den [Extrempunkten](05_02_01_Extrem.md) erläutert.

{{|>}} Für die Aufgabe muss der größte Flächeninhalt unter allen zulässigen Rechtecken gefunden werden. Dass das gefundene Maximum auch global ist, lässt sich durch quadratische Ergänzung zeigen:

$$
A(x)=\frac{U^2}{16}-\left(x-\frac U4\right)^2.
$$

Ein Quadrat ist nie negativ. Deshalb gilt

$$
A(x)\le\frac{U^2}{16}
\quad \forall x\in\left(0,\frac U2\right).
$$

Gleichheit wird genau für $x=U/4$ erreicht. An den ausgeschlossenen Randstellen nähert sich der Flächeninhalt dagegen null. Somit liefert die gefundene Stelle tatsächlich das eindeutige globale Maximum im zulässigen Bereich.

{{|>}} Die zweite Seitenlänge wird aus der Nebenbedingung berechnet:

$$
y=\frac U2-\frac U4=\frac U4.
$$

Die optimalen Seitenlängen und der maximale Flächeninhalt sind also

$$
x=y=\frac U4,\qquad
A_{\max}=\frac U4\cdot\frac U4=\frac{U^2}{16}.
$$

Das Rechteck mit dem größten Flächeninhalt bei festem Umfang ist somit ein Quadrat. Zur Kontrolle ergibt sich wieder der vorgegebene Umfang:

$$
2\cdot\frac U4+2\cdot\frac U4=U.
$$

Werden $U$, $x$ und $y$ in Metern angegeben, wird $A$ in Quadratmetern angegeben. Entsprechend liefert die Gleichung $A_{\max}=U^2/16$ aus einer Längengröße eine Flächengröße.

Bei anderen Extremwertaufgaben werden ebenso Zielfunktion, Nebenbedingungen und zulässiger Bereich festgelegt. Nach dem Ableiten müssen die gefundenen Kandidaten geprüft und gegebenenfalls mit zulässigen Randwerten verglichen werden. Zum Schluss werden alle gesuchten Größen berechnet und im ursprünglichen Zusammenhang gedeutet.

***************************
