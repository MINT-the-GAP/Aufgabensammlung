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













tags: Erklärung, Differenzenquotient, Differentialquotient

comment: In diesem Abschnitt werden der Differenzenquotient als Sekantensteigung und der Differentialquotient als Grenzwert eingeführt und an grundlegenden Funktionen sowie zwei ausführlichen Beispielen berechnet.

author: Martin Lommatzsch

-->

# Differentialquotient

{{|>}}
***************************

In den bisherigen Erklärungen wurden die [Differentiation](05_01_01_Differentiation.md) und die [Integration](05_04_01_Integration.md) über die Operatoralgebra eingeführt. Dieser Zugang knüpft unter anderem an das Einsetzverfahren und an lineare Funktionen an und ist auch in der Physik, Wirtschaft und höheren Mathematik nützlich. Der Kommutator verdeutlicht dabei, dass die Reihenfolge von Operatoren eine Rolle spielt: Rechengesetze für Zahlen dürfen nicht ungeprüft auf Operatoren übertragen werden. Bei ihrer Verknüpfung müssen die jeweiligen Voraussetzungen für Kommutativität und Assoziativität berücksichtigt werden.

Dieser Nachtrag ergänzt den Operatorzugang um die in der Schule übliche Einführung durch den Differentialquotienten. Dabei ist eine Unterscheidung wichtig: Der Differenzenquotient beschreibt eine mittlere Änderungsrate und kann eine Näherung für die momentane Steigung liefern. Der Differentialquotient ist dagegen der exakte Grenzwert dieser Quotienten, sofern er als endliche Zahl existiert.

{{|>}} Zunächst betrachten wir zwei verschiedene Stellen $x_0$ und $x_1$ einer Funktion $f$. Die Gerade $g$ durch die beiden Punkte

$$
P_0\bigl(x_0\mid f(x_0)\bigr)
\qquad\text{und}\qquad
P_1\bigl(x_1\mid f(x_1)\bigr)
$$

ist eine Sekante des Funktionsgraphen. In der Skizze gilt:

$$
\begin{aligned}
f(x)&=\frac14x^2-\frac34x+2,\\
g(x)&=x-\frac12,\\
P_0(2\mid 1{,}5)&,\qquad P_1(5\mid 4{,}5).
\end{aligned}
$$

<center>

@Koordinatensystem(`xmin=-1.1;xmax=6.7;ymin=-0.9;ymax=6.4;width=760;id=DIFFQUO01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=DIFFQUO01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`DIFFQUO01;f=0;0.25*x^2-0.75*x+2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`DIFFQUO01;g=0;x-0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@Strecke(`DIFFQUO01;[[2;1.5];[5;1.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);;-;3px`)
@Strecke(`DIFFQUO01;[[5;1.5];[5;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;3px`)
@Strecke(`DIFFQUO01;[[4.8;1.5];[4.8;1.7];[5;1.7]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Punkt(`DIFFQUO01;P_0=0;2;1.5;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`DIFFQUO01;P_1=0;5;4.5;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`DIFFQUO01;[1.65;1.9];$\Large P_0$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIFFQUO01;[5.32;4.6];$\Large P_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIFFQUO01;[3.5;1.12];$\Large \Delta x=x_1-x_0$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)
@KoordText(`DIFFQUO01;[5.45;2.8];$\Large \Delta f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`DIFFQUO01;[5.3;5.8];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DIFFQUO01;[6.15;5.25];$\Large g(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Das Steigungsdreieck zeigt die Änderungen $\Delta x=x_1-x_0$ und $\Delta f=f(x_1)-f(x_0)$. Allgemein können diese Änderungen auch negativ sein; sie sind nicht mit stets positiven Streckenlängen gleichzusetzen. Für die Steigung $m$ der Sekante $g(x)=mx+b$ gilt:

$$
\begin{aligned}
m&=\frac{g(x_1)-g(x_0)}{x_1-x_0}\\
&=\frac{f(x_1)-f(x_0)}{x_1-x_0}
=\frac{\Delta f}{\Delta x}.
\end{aligned}
$$

Der Übergang von $g$ zu $f$ ist möglich, weil beide Funktionen an den Schnittstellen dieselben Werte besitzen. Im gezeichneten Beispiel ist $m=\frac{4{,}5-1{,}5}{5-2}=1$.

{{|>}} Der Differenzenquotient wird als Funktion der beiden Stellen eingeführt:

$$
\varphi(x_1,x_0):=\frac{f(x_1)-f(x_0)}{x_1-x_0},
\qquad x_1\ne x_0.
$$

Dabei müssen beide Stellen zum Definitionsbereich von $f$ gehören. Der Differenzenquotient gibt die durchschnittliche Steigung beziehungsweise die mittlere Änderungsrate zwischen diesen Stellen an. Mit $h=x_1-x_0$ lässt er sich anders schreiben:

$$
\begin{aligned}
x_1&=x_0+h,\qquad h\ne0,\\
\varphi(x_0+h,x_0)
&=\frac{f(x_0+h)-f(x_0)}{h}.
\end{aligned}
$$

Für die momentane Steigung an der Stelle $x_0$ wird die zweite Stelle immer näher an $x_0$ herangeführt. Direkt $h=0$ einzusetzen ist nicht erlaubt, weil dann der Nenner null wäre.

{{|>}} Sei $f$ in einer offenen Umgebung von $x_0$ definiert. Existiert der folgende Grenzwert als endliche Zahl und stimmt er bei Annäherung von beiden Seiten überein, heißt $f$ an der Stelle $x_0$ differenzierbar. Der Differentialquotient ist dann:

$$
\begin{aligned}
f'(x_0)
&=\lim_{x_1\to x_0}\varphi(x_1,x_0)\\
&=\lim_{x_1\to x_0}\frac{f(x_1)-f(x_0)}{x_1-x_0}\\
&=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}.
\end{aligned}
$$

Während der Grenzwertbildung bleibt $h\ne0$. Die Sekantensteigungen nähern sich der Tangentensteigung $f'(x_0)$ an. Diese ist die momentane Änderungsrate der Funktion an der betrachteten Stelle.

Die Definition liefert zunächst einen Ableitungswert. Wendet man sie an jeder Stelle an, an der der Grenzwert existiert, erhält man die Ableitungsfunktion. Damit besteht der Zusammenhang zur Operatorenschreibweise:

$$
\frac{d}{dx}f(x)=f'(x)
=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}.
$$

{{|>}} An einigen grundlegenden Funktionen lässt sich der Übergang zum Differentialquotienten unmittelbar nachvollziehen. In allen Differenzenquotienten gilt weiterhin $x_1\ne x_0$.

Für eine konstante Funktion $f(x)=c$ ergibt sich:

$$
\begin{aligned}
\varphi(x_1,x_0)&=\frac{c-c}{x_1-x_0}=0,\\
f'(x_0)&=\lim_{x_1\to x_0}0=0.
\end{aligned}
$$

Für $f(x)=ax$ mit konstantem $a$ gilt:

$$
\begin{aligned}
\varphi(x_1,x_0)&=\frac{ax_1-ax_0}{x_1-x_0}=a,\\
f'(x_0)&=\lim_{x_1\to x_0}a=a.
\end{aligned}
$$

Bei $f(x)=x^2$ wird die Differenz zweier Quadrate faktorisiert:

$$
\begin{aligned}
\varphi(x_1,x_0)&=\frac{x_1^2-x_0^2}{x_1-x_0}=x_1+x_0,\\
f'(x_0)&=\lim_{x_1\to x_0}(x_1+x_0)=2x_0.
\end{aligned}
$$

Für $f(x)=x^3$ erhält man entsprechend:

$$
\begin{aligned}
\varphi(x_1,x_0)
&=\frac{x_1^3-x_0^3}{x_1-x_0}\\
&=x_1^2+x_0x_1+x_0^2,\\
f'(x_0)
&=\lim_{x_1\to x_0}(x_1^2+x_0x_1+x_0^2)
=3x_0^2.
\end{aligned}
$$

Allgemein lässt sich für $f(x)=x^n$ mit einer positiven ganzen Zahl $n$ der Zähler durch $x_1-x_0$ teilen:

$$
\begin{aligned}
\varphi(x_1,x_0)
&=\frac{x_1^n-x_0^n}{x_1-x_0}
=\sum_{k=0}^{n-1}x_1^kx_0^{n-1-k},\\
f'(x_0)
&=\lim_{x_1\to x_0}\sum_{k=0}^{n-1}x_1^kx_0^{n-1-k}
=nx_0^{n-1}.
\end{aligned}
$$

Im Grenzwert nimmt jeder der $n$ Summanden den Wert $x_0^{n-1}$ an. So ergibt sich die Potenzregel für positive ganzzahlige Exponenten.

Für $f(x)=e^x$ wird dagegen zunächst $e^{x_0}$ ausgeklammert:

$$
\begin{aligned}
\varphi(x_1,x_0)
&=\frac{e^{x_1}-e^{x_0}}{x_1-x_0}\\
&=e^{x_0}\frac{e^{x_1-x_0}-1}{x_1-x_0}.
\end{aligned}
$$

Mit dem Grenzwert $\lim_{h\to0}\frac{e^h-1}{h}=1$ folgt:

$$
f'(x_0)
=e^{x_0}\lim_{h\to0}\frac{e^h-1}{h}
=e^{x_0}.
$$

Bei Polynomen helfen Faktorisierung oder Polynomdivision beim Kürzen des Differenzenquotienten. Für andere Funktionen werden passende Grenzwertsätze benötigt, wie beim Exponentialbeispiel. Auch die weiteren [Ableitungsregeln](05_01_01_Ableitungsregeln.md) lassen sich aus der Grenzwertdefinition beweisen. Die Operatoralgebra bietet dazu eine ergänzende Sichtweise auf die Rechenoperationen. Der Zusammenhang mit der Integration wird durch den Hauptsatz der Differential- und Integralrechnung hergestellt.

{{|>}} Im ersten ausführlichen Beispiel wird die Ableitung von $f(x)=x^2$ mit dem Differentialquotienten berechnet. Dazu betrachten wir die Stellen $x$ und $x+\Delta x$ mit $\Delta x\ne0$. Ihre Differenz ist $\Delta x$, und die Änderung des Funktionswertes lautet $\Delta f(x)=f(x+\Delta x)-f(x)$.

Die beiden Argumente werden in denselben Funktionsterm eingesetzt:

$$
\begin{aligned}
\frac{\Delta f(x)}{\Delta x}
&=\frac{f(x+\Delta x)-f(x)}{\Delta x}\\
&=\frac{\textcolor{#2455a4}{(x+\Delta x)^2}
-\textcolor{#21823b}{x^2}}{\Delta x}.
\end{aligned}
$$

Mit der binomischen Gleichung wird der Zähler ausmultipliziert. Anschließend werden gleiche Terme zusammengefasst und der gemeinsame Faktor $\Delta x$ gekürzt:

$$
\begin{aligned}
\frac{\Delta f(x)}{\Delta x}
&=\frac{x^2+2x\Delta x+(\Delta x)^2-x^2}{\Delta x}\\
&=\frac{2x\Delta x+(\Delta x)^2}{\Delta x}\\
&=\frac{(2x+\Delta x)\Delta x}{\Delta x}\\
&=2x+\Delta x.
\end{aligned}
$$

Das Kürzen ist erlaubt, weil $\Delta x\ne0$ gilt. Erst danach wird der Grenzwert betrachtet. Der Abstand $|\Delta x|$ zwischen den beiden Stellen geht gegen null:

$$
\begin{aligned}
f'(x)
&=\lim_{\Delta x\to0}\frac{f(x+\Delta x)-f(x)}{\Delta x}\\
&=\lim_{\Delta x\to0}(2x+\Delta x)\\
&=2x.
\end{aligned}
$$

{{|>}} Im zweiten Beispiel lautet die Funktion $f(x)=4x^2-2x$. Wieder setzen wir $x+\Delta x$ und $x$ ein und bilden für $\Delta x\ne0$ den Differenzenquotienten:

$$
\begin{aligned}
\frac{\Delta f(x)}{\Delta x}
&=\frac{f(x+\Delta x)-f(x)}{\Delta x}\\
&=\frac{\textcolor{#2455a4}{4(x+\Delta x)^2-2(x+\Delta x)}
-\textcolor{#21823b}{(4x^2-2x)}}{\Delta x}.
\end{aligned}
$$

Beim Auflösen der letzten Klammer ändern sich beide Vorzeichen. Zum Ausmultiplizieren verwenden wir:

$$
\begin{aligned}
4(x+\Delta x)^2
&=4\bigl(x^2+2x\Delta x+(\Delta x)^2\bigr)\\
&=4x^2+8x\Delta x+4(\Delta x)^2,\\
-2(x+\Delta x)&=-2x-2\Delta x.
\end{aligned}
$$

Damit wird der Quotient schrittweise vereinfacht:

$$
\begin{aligned}
\frac{\Delta f(x)}{\Delta x}
&=\frac{4(x+\Delta x)^2-2(x+\Delta x)-4x^2+2x}{\Delta x}\\
&=\frac{4x^2+8x\Delta x+4(\Delta x)^2-2x-2\Delta x-4x^2+2x}{\Delta x}\\
&=\frac{8x\Delta x+4(\Delta x)^2-2\Delta x}{\Delta x}\\
&=\frac{(8x+4\Delta x-2)\Delta x}{\Delta x}\\
&=8x-2+4\Delta x.
\end{aligned}
$$

Nach dem Kürzen kann der Grenzwert gebildet werden:

$$
\begin{aligned}
f'(x)
&=\lim_{\Delta x\to0}\frac{f(x+\Delta x)-f(x)}{\Delta x}\\
&=\lim_{\Delta x\to0}(8x-2+4\Delta x)\\
&=8x-2.
\end{aligned}
$$

Beide Beispiele liefern dieselben Ableitungen wie die bekannten Ableitungsregeln. Der Differentialquotient erklärt dabei den Übergang von der mittleren zur momentanen Änderungsrate; die Operatorenschreibweise beschreibt denselben Ableitungsvorgang.

***************************
