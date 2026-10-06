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













tags: Erklärung, Obersumme, Untersumme

comment: In diesem Abschnitt werden Ober- und Untersummen, der Integralgrenzwert sowie Trapez- und Mittelpunktsummen erklärt.

author: Martin Lommatzsch

-->

# Ober- und Untersummen

{{|>}}
***************************

Wie beim [Differentialquotienten](05_01_05_DiffQuo.md) wird hier ein ergänzender Zugang zur zuvor eingeführten Operatoralgebra betrachtet. Bei der [Integration](05_04_01_Integration.md) ging es um Stammfunktionen und Flächeninhalte. Nun wird der Flächeninhalt zunächst durch endlich viele Rechtecke angenähert. Durch einen Grenzübergang lässt sich daraus das bestimmte Integral gewinnen.

Sei $f$ auf dem Intervall $[a,b]$ stetig und nichtnegativ, wobei $a<b$. Gesucht ist der Flächeninhalt $A$ zwischen dem Graphen von $f$, der Abszissenachse und den beiden Grenzen $a$ und $b$. Das Intervall wird in $n$ gleich breite Teilintervalle zerlegt:

$$
\begin{aligned}
a=x_0<x_1<\dots<x_n=b,\qquad n&\in\mathbb N,\quad n\ge1,\\
\Delta x&=\frac{b-a}{n}>0,\\
x_k&=a+k\Delta x,\\
x_k-x_{k-1}&=\Delta x.
\end{aligned}
$$

{{|>}} Für eine Untersumme werden die Rechteckhöhen so gewählt, dass die Rechtecke vollständig unter dem Graphen liegen. Auf jedem Teilintervall ist die größtmögliche solche Höhe der kleinste dort angenommene Funktionswert. Die Summe der Rechteckflächen unterschätzt den gesuchten Flächeninhalt oder stimmt mit ihm überein.

Die folgenden Skizzen zeigen die Funktion

$$
f(x)=-\frac34x^2+4x+\frac12
\qquad \text{auf }[0,5]
$$

mit fünf beziehungsweise zehn Rechtecken. Die blauen Flächen gehören zur Untersumme.

<section class="dynFlex">

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.8;ymin=-0.6;ymax=6.8;width=520;id=OBERUNTER01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=OBERUNTER01;xlabel=$\Large x$;ylabel=$\Large y$`)

@Flaeche(`OBERUNTER01;[[0;0];[1;0];[1;0.5];[0;0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER01;[[1;0];[2;0];[2;3.75];[1;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER01;[[2;0];[3;0];[3;5.5];[2;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER01;[[3;0];[4;0];[4;4.5];[3;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER01;[[4;0];[5;0];[5;1.75];[4;1.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)

@PlotFunktion(`OBERUNTER01;f=0;-0.75*x^2+4*x+0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`OBERUNTER01;[4.65;4.2];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`OBERUNTER01;[3;6.35];$\Large U_{5},\quad\Delta x=1$;rgb(var(--color-text,51,51,51));1`)

</center>

</div>

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.8;ymin=-0.6;ymax=6.8;width=520;id=OBERUNTER02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=OBERUNTER02;xlabel=$\Large x$;ylabel=$\Large y$`)

@Flaeche(`OBERUNTER02;[[0;0];[0.5;0];[0.5;0.5];[0;0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER02;[[0.5;0];[1;0];[1;2.3125];[0.5;2.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER02;[[1;0];[1.5;0];[1.5;3.75];[1;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER02;[[1.5;0];[2;0];[2;4.8125];[1.5;4.8125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER02;[[2;0];[2.5;0];[2.5;5.5];[2;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER02;[[2.5;0];[3;0];[3;5.75];[2.5;5.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER02;[[3;0];[3.5;0];[3.5;5.3125];[3;5.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER02;[[3.5;0];[4;0];[4;4.5];[3.5;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER02;[[4;0];[4.5;0];[4.5;3.3125];[4;3.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER02;[[4.5;0];[5;0];[5;1.75];[4.5;1.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)

@PlotFunktion(`OBERUNTER02;f=0;-0.75*x^2+4*x+0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`OBERUNTER02;[4.65;4.2];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`OBERUNTER02;[3;6.35];$\Large U_{10},\quad\Delta x=0{,}5$;rgb(var(--color-text,51,51,51));1`)

</center>

</div>

</section>

{{|>}} Für eine monoton steigende Funktion ist der kleinste Wert auf $[x_{k-1},x_k]$ der Wert am linken Rand. In diesem Fall gilt:

$$
U_n=\sum_{k=1}^{n}f(x_{k-1})\cdot\Delta x.
$$

Bei einer monoton fallenden Funktion liegen die kleinsten Werte dagegen am rechten Rand. Die gezeigte Parabel steigt zunächst und fällt anschließend. Deshalb darf für sie nicht durchgehend derselbe Rand als Rechteckhöhe verwendet werden.

{{|>}} Bei einer Obersumme werden die Rechtecke so hoch gewählt, dass sie den Graphen auf jedem Teilintervall von oben begrenzen. Die kleinste dafür ausreichende Höhe ist jeweils der größte Funktionswert. Die Summe dieser Rechteckflächen überschätzt den gesuchten Flächeninhalt oder stimmt mit ihm überein. In den Skizzen sind die zugehörigen Flächen grün dargestellt.

<section class="dynFlex">

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.8;ymin=-0.6;ymax=6.8;width=520;id=OBERUNTER03;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=OBERUNTER03;xlabel=$\Large x$;ylabel=$\Large y$`)

@Flaeche(`OBERUNTER03;[[0;0];[1;0];[1;3.75];[0;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER03;[[1;0];[2;0];[2;5.5];[1;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER03;[[2;0];[3;0];[3;5.83333333333333];[2;5.83333333333333]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER03;[[3;0];[4;0];[4;5.75];[3;5.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER03;[[4;0];[5;0];[5;4.5];[4;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)

@PlotFunktion(`OBERUNTER03;f=0;-0.75*x^2+4*x+0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`OBERUNTER03;[4.65;4.2];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`OBERUNTER03;[3;6.35];$\Large O_{5},\quad\Delta x=1$;rgb(var(--color-text,51,51,51));1`)

</center>

</div>

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.8;ymin=-0.6;ymax=6.8;width=520;id=OBERUNTER04;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=OBERUNTER04;xlabel=$\Large x$;ylabel=$\Large y$`)

@Flaeche(`OBERUNTER04;[[0;0];[0.5;0];[0.5;2.3125];[0;2.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER04;[[0.5;0];[1;0];[1;3.75];[0.5;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER04;[[1;0];[1.5;0];[1.5;4.8125];[1;4.8125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER04;[[1.5;0];[2;0];[2;5.5];[1.5;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER04;[[2;0];[2.5;0];[2.5;5.8125];[2;5.8125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER04;[[2.5;0];[3;0];[3;5.83333333333333];[2.5;5.83333333333333]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER04;[[3;0];[3.5;0];[3.5;5.75];[3;5.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER04;[[3.5;0];[4;0];[4;5.3125];[3.5;5.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER04;[[4;0];[4.5;0];[4.5;4.5];[4;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER04;[[4.5;0];[5;0];[5;3.3125];[4.5;3.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)

@PlotFunktion(`OBERUNTER04;f=0;-0.75*x^2+4*x+0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`OBERUNTER04;[4.65;4.2];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`OBERUNTER04;[3;6.35];$\Large O_{10},\quad\Delta x=0{,}5$;rgb(var(--color-text,51,51,51));1`)

</center>

</div>

</section>

Für eine monoton steigende Funktion liegen die größten Werte am rechten Rand:

$$
O_n=\sum_{k=1}^{n}f(x_k)\cdot\Delta x.
$$

Bei einer monoton fallenden Funktion liegen sie am linken Rand. Enthält ein Teilintervall einen Hochpunkt, kann die erforderliche Höhe auch größer als beide Randwerte sein. Im Beispiel liegt der Hochpunkt bei

$$
H\left(\frac83\mid\frac{35}{6}\right).
$$

Deshalb hat das obere Rechteck über $[2,3]$ bei fünf Teilintervallen die Höhe $\frac{35}{6}$. Bei zehn Teilintervallen gilt dies für das Rechteck über $\left[\frac52,3\right]$.

{{|>}} Um Ober- und Untersummen unabhängig vom Monotonieverhalten zu beschreiben, werden Infimum und Supremum verwendet. Das Infimum ist die größte untere Schranke einer Wertemenge, das Supremum ihre kleinste obere Schranke. Für eine stetige Funktion auf einem abgeschlossenen Teilintervall werden diese Werte angenommen; sie sind dann Minimum und Maximum:

$$
\begin{aligned}
m_k&=\inf_{x\in[x_{k-1},x_k]}f(x)
=\min_{x\in[x_{k-1},x_k]}f(x),\\
M_k&=\sup_{x\in[x_{k-1},x_k]}f(x)
=\max_{x\in[x_{k-1},x_k]}f(x).
\end{aligned}
$$

Damit lauten die allgemeinen Ausdrücke für die beiden Summen:

$$
\begin{aligned}
U_n&=\sum_{k=1}^{n}m_k\cdot\Delta x,\\
O_n&=\sum_{k=1}^{n}M_k\cdot\Delta x.
\end{aligned}
$$

Die Definitionen mit Infimum und Supremum lassen sich auch für beschränkte Funktionen verwenden, die nicht stetig sind. Dann müssen die Schranken nicht als Funktionswerte angenommen werden.

{{|>}} Zwischen Ober- und Untersumme liegt der gesuchte Flächeninhalt:

$$
U_n\le A\le O_n.
$$

In den folgenden Skizzen sind beide Summen gemeinsam dargestellt. Die grüne Fläche oberhalb der blauen Rechtecke macht den noch verbleibenden Unterschied sichtbar.

<section class="dynFlex">

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.8;ymin=-0.6;ymax=6.8;width=520;id=OBERUNTER05;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=OBERUNTER05;xlabel=$\Large x$;ylabel=$\Large y$`)

@Flaeche(`OBERUNTER05;[[0;0];[1;0];[1;3.75];[0;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER05;[[1;0];[2;0];[2;5.5];[1;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER05;[[2;0];[3;0];[3;5.83333333333333];[2;5.83333333333333]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER05;[[3;0];[4;0];[4;5.75];[3;5.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER05;[[4;0];[5;0];[5;4.5];[4;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER05;[[0;0];[1;0];[1;0.5];[0;0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER05;[[1;0];[2;0];[2;3.75];[1;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER05;[[2;0];[3;0];[3;5.5];[2;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER05;[[3;0];[4;0];[4;4.5];[3;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER05;[[4;0];[5;0];[5;1.75];[4;1.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)

@PlotFunktion(`OBERUNTER05;f=0;-0.75*x^2+4*x+0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`OBERUNTER05;[4.65;4.2];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`OBERUNTER05;[3;6.35];$\Large U_{5}\le A\le O_{5}$;rgb(var(--color-text,51,51,51));1`)

</center>

</div>

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.8;ymin=-0.6;ymax=6.8;width=520;id=OBERUNTER06;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=OBERUNTER06;xlabel=$\Large x$;ylabel=$\Large y$`)

@Flaeche(`OBERUNTER06;[[0;0];[0.5;0];[0.5;2.3125];[0;2.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER06;[[0.5;0];[1;0];[1;3.75];[0.5;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER06;[[1;0];[1.5;0];[1.5;4.8125];[1;4.8125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER06;[[1.5;0];[2;0];[2;5.5];[1.5;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER06;[[2;0];[2.5;0];[2.5;5.8125];[2;5.8125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER06;[[2.5;0];[3;0];[3;5.83333333333333];[2.5;5.83333333333333]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER06;[[3;0];[3.5;0];[3.5;5.75];[3;5.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER06;[[3.5;0];[4;0];[4;5.3125];[3.5;5.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER06;[[4;0];[4.5;0];[4.5;4.5];[4;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER06;[[4.5;0];[5;0];[5;3.3125];[4.5;3.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER06;[[0;0];[0.5;0];[0.5;0.5];[0;0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER06;[[0.5;0];[1;0];[1;2.3125];[0.5;2.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER06;[[1;0];[1.5;0];[1.5;3.75];[1;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER06;[[1.5;0];[2;0];[2;4.8125];[1.5;4.8125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER06;[[2;0];[2.5;0];[2.5;5.5];[2;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER06;[[2.5;0];[3;0];[3;5.75];[2.5;5.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER06;[[3;0];[3.5;0];[3.5;5.3125];[3;5.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER06;[[3.5;0];[4;0];[4;4.5];[3.5;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER06;[[4;0];[4.5;0];[4.5;3.3125];[4;3.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER06;[[4.5;0];[5;0];[5;1.75];[4.5;1.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)

@PlotFunktion(`OBERUNTER06;f=0;-0.75*x^2+4*x+0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`OBERUNTER06;[4.65;4.2];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`OBERUNTER06;[3;6.35];$\Large U_{10}\le A\le O_{10}$;rgb(var(--color-text,51,51,51));1`)

</center>

</div>

</section>

Wird jedes Teilintervall halbiert, wird die Untersumme nicht kleiner und die Obersumme nicht größer:

$$
U_n\le U_{2n}\le A\le O_{2n}\le O_n.
$$

Für das Beispiel ergeben sich:

<!-- data-type="none" data-sortable="false" -->
| Anzahl $n$ | Breite $\Delta x$ | Untersumme $U_n$ | Obersumme $O_n$ |
| :-------: | :--------------: | :--------------: | :------------: |
| $5$ | $1$ | $16$ | $\frac{76}{3}\approx25{,}3333$ |
| $10$ | $\frac12$ | $\frac{75}{4}=18{,}75$ | $\frac{2251}{96}\approx23{,}4479$ |

Bei der gleichmäßigen Zerlegung gilt $\Delta x\to0$ für $n\to\infty$. Für die stetige Funktion nähern sich beide Summen demselben Wert. Der Grenzwert ist der exakte Flächeninhalt, nicht bloß eine Näherung:

$$
A=\lim_{n\to\infty}U_n
=\lim_{n\to\infty}O_n
=\int_a^b f(x)\,dx.
$$

Bei ungleich breiten Teilintervallen steht in jeder Summe die jeweilige Breite $\Delta x_k$. Für den Grenzübergang muss dann die größte Teilintervallbreite gegen null gehen; die bloße Anzahl der Teilintervalle genügt nicht.

{{|>}} Der Hauptsatz der Differential- und Integralrechnung verbindet diesen Grenzwert mit der Stammfunktion $F$:

$$
\begin{aligned}
F'(x)&=f(x),\\
\int_a^b f(x)\,dx&=F(b)-F(a).
\end{aligned}
$$

Das unbestimmte Integral beschreibt die Familie der Stammfunktionen:

$$
\int f(x)\,dx=F(x)+C.
$$

Für die betrachtete Parabel erhält man:

$$
\begin{aligned}
F(x)&=-\frac14x^3+2x^2+\frac12x,\\
A&=F(5)-F(0)=\frac{85}{4}=21{,}25.
\end{aligned}
$$

Die Voraussetzung $f(x)\ge0$ stellt sicher, dass das Integral hier mit dem geometrischen Flächeninhalt übereinstimmt. Bei Vorzeichenwechseln liefert $\int_a^b f(x)\,dx$ eine vorzeichenbehaftete Bilanz; der gesamte geometrische Flächeninhalt ist dann $\int_a^b |f(x)|\,dx$.

{{|>}} Aus Ober- und Untersumme lässt sich außerdem eine mittlere Näherung bilden:

$$
\begin{aligned}
S_n&=U_n+\frac{O_n-U_n}{2}
=\frac{U_n+O_n}{2},\\
|A-S_n|&\le\frac{O_n-U_n}{2},\\
A&=\lim_{n\to\infty}S_n.
\end{aligned}
$$

Eine verwandte Möglichkeit ist die Trapezsumme. Hier werden die beiden Randpunkte des Graphen auf jedem Teilintervall durch eine Strecke verbunden. Die Fläche unter dieser Strecke ist ein Trapez; seine Höhe in Richtung der Abszissenachse ist $\Delta x$, seine parallelen Seiten haben die Längen $f(x_{k-1})$ und $f(x_k)$.

Die erste Skizze zeigt nochmals die Ober- und Untersumme mit fünf Teilintervallen, die zweite die gelben Trapeze. Das violette Dreieck veranschaulicht auf $[1,2]$ die Ergänzung eines unteren Rechtecks zu einem Trapez.

<section class="dynFlex">

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.8;ymin=-0.6;ymax=6.8;width=520;id=OBERUNTER07;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=OBERUNTER07;xlabel=$\Large x$;ylabel=$\Large y$`)

@Flaeche(`OBERUNTER07;[[0;0];[1;0];[1;3.75];[0;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER07;[[1;0];[2;0];[2;5.5];[1;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER07;[[2;0];[3;0];[3;5.83333333333333];[2;5.83333333333333]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER07;[[3;0];[4;0];[4;5.75];[3;5.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER07;[[4;0];[5;0];[5;4.5];[4;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18`)
@Flaeche(`OBERUNTER07;[[0;0];[1;0];[1;0.5];[0;0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER07;[[1;0];[2;0];[2;3.75];[1;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER07;[[2;0];[3;0];[3;5.5];[2;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER07;[[3;0];[4;0];[4;4.5];[3;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`OBERUNTER07;[[4;0];[5;0];[5;1.75];[4;1.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)

@PlotFunktion(`OBERUNTER07;f=0;-0.75*x^2+4*x+0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`OBERUNTER07;[4.65;4.2];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`OBERUNTER07;[3;6.35];$\Large U_{5}\le A\le O_{5}$;rgb(var(--color-text,51,51,51));1`)

</center>

</div>

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.8;ymin=-0.6;ymax=6.8;width=520;id=OBERUNTER08;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=OBERUNTER08;xlabel=$\Large x$;ylabel=$\Large y$`)

@Flaeche(`OBERUNTER08;[[0;0];[1;0];[1;3.75];[0;0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #c8a500);0.18`)
@Flaeche(`OBERUNTER08;[[1;0];[2;0];[2;5.5];[1;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #c8a500);0.18`)
@Flaeche(`OBERUNTER08;[[2;0];[3;0];[3;5.75];[2;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #c8a500);0.18`)
@Flaeche(`OBERUNTER08;[[3;0];[4;0];[4;4.5];[3;5.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #c8a500);0.18`)
@Flaeche(`OBERUNTER08;[[4;0];[5;0];[5;1.75];[4;4.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #c8a500);0.18`)
@Flaeche(`OBERUNTER08;[[1;3.75];[2;3.75];[2;5.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);0.18`)

@PlotFunktion(`OBERUNTER08;f=0;-0.75*x^2+4*x+0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`OBERUNTER08;[4.65;4.2];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`OBERUNTER08;[3;6.35];$\Large T_{5},\quad\Delta x=1$;rgb(var(--color-text,51,51,51));1`)

</center>

</div>

</section>

Die Trapezsumme lautet:

$$
\begin{aligned}
T_n&=\sum_{k=1}^{n}
\frac{f(x_{k-1})+f(x_k)}{2}\cdot\Delta x,\\
A&=\lim_{n\to\infty}T_n.
\end{aligned}
$$

Ist die Funktion auf jedem einzelnen Teilintervall monoton, sind die Randwerte zugleich Minimum und Maximum. Dann gilt $T_n=S_n$. Liegt jedoch wie im Beispiel ein Hochpunkt im Inneren eines Teilintervalls, gilt diese Gleichheit im Allgemeinen nicht:

$$
\begin{aligned}
S_5&=\frac{16+\frac{76}{3}}{2}
=\frac{62}{3}\approx20{,}6667,\\
T_5&=\frac{165}{8}=20{,}625.
\end{aligned}
$$

{{|>}} Statt die Rechteckhöhen an Randwerten oder Extremwerten auszurichten, können auch die Funktionswerte in den Intervallmitten verwendet werden. Dadurch entsteht die Mittelpunktsumme. Die violetten Rechtecke zeigen diese Näherung für fünf Teilintervalle.

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.8;ymin=-0.6;ymax=6.8;width=520;id=OBERUNTER09;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=OBERUNTER09;xlabel=$\Large x$;ylabel=$\Large y$`)

@Flaeche(`OBERUNTER09;[[0;0];[1;0];[1;2.3125];[0;2.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);0.18`)
@Flaeche(`OBERUNTER09;[[1;0];[2;0];[2;4.8125];[1;4.8125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);0.18`)
@Flaeche(`OBERUNTER09;[[2;0];[3;0];[3;5.8125];[2;5.8125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);0.18`)
@Flaeche(`OBERUNTER09;[[3;0];[4;0];[4;5.3125];[3;5.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);0.18`)
@Flaeche(`OBERUNTER09;[[4;0];[5;0];[5;3.3125];[4;3.3125]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);0.18`)

@PlotFunktion(`OBERUNTER09;f=0;-0.75*x^2+4*x+0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`OBERUNTER09;[4.65;4.2];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`OBERUNTER09;[3;6.35];$\Large R_{5},\quad\Delta x=1$;rgb(var(--color-text,51,51,51));1`)

</center>

Die beiden Schreibweisen für die Mitte eines Teilintervalls führen zur gleichen Summe:

$$
\begin{aligned}
R_n&=\sum_{k=1}^{n}
f\left(x_{k-1}+\frac{\Delta x}{2}\right)\cdot\Delta x\\
&=\sum_{k=1}^{n}
f\left(x_k-\frac{\Delta x}{2}\right)\cdot\Delta x,\\
A&=\lim_{n\to\infty}R_n.
\end{aligned}
$$

Die Mittelpunktsumme ist im Allgemeinen weder eine Unter- noch eine Obersumme. Im Beispiel liegt ihr Wert über dem gesuchten Flächeninhalt:

$$
R_5=\frac{345}{16}=21{,}5625
\qquad\text{und}\qquad
A=\frac{85}{4}=21{,}25.
$$

{{|>}} Die endlichen Summen liefern Näherungen, ihre Grenzwerte den exakten Integralwert. Dieser Zugang verbindet diskrete Summen und Grenzwerte mit Infimum und Supremum. Er ergänzt die bisher verwendete Operatoralgebra und erklärt, weshalb die Integration zur Flächenberechnung geeignet ist. Im Operatorzugang lassen sich beispielsweise Rechenregeln für ganzzahlige Potenzen durch vollständige Induktion nachweisen. Beide Sichtweisen sind miteinander vereinbar und werden in weiterführenden Themen wie Differentialgleichungen benötigt.

***************************
