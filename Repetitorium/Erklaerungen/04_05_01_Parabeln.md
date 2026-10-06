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













tags: Erklärung, Quadratische Funktionen, Scheitelpunktsform, Quadratische Ergänzung

comment: In diesem Abschnitt werden Parabeln, die allgemeine Form und die Scheitelpunktsform quadratischer Funktionen, die Wirkung ihrer Parameter, die quadratische Ergänzung und die Bestimmung von Nullstellen erklärt.

author: Martin Lommatzsch

-->

# Parabeln – quadratische Funktionen

{{|>}}
***************************

Nach den linearen Funktionen betrachten wir nun quadratische Funktionen. Ihre Graphen heißen Parabeln. Die allgemeine Form der Funktionsgleichung lautet

$$
f(x)=ax^2+bx+c,\qquad a,b,c\in\mathbb{R},\quad a\neq0.
$$

Der Term $ax^2+bx+c$ ist ein Polynom zweiten Grades: Die höchste vorkommende Potenz von $x$ ist $x^2$. Die Bedingung $a\neq0$ ist wichtig, denn für $a=0$ bliebe eine lineare oder konstante Funktion übrig. Wenn nichts anderes angegeben ist, betrachten wir den Definitionsbereich $\mathbb{R}$.

Die drei Parameter $a$, $b$ und $c$ legen die Funktion fest. Dabei ist $c=f(0)$ der Ordinatenabschnitt. Die Lage des Scheitelpunktes und die Form der Parabel lassen sich besonders gut aus einer anderen Schreibweise ablesen:

$$
f(x)=a(x-d)^2+e.
$$

Diese Darstellung heißt Scheitelpunktsform. Sie beschreibt dieselbe Funktion wie die allgemeine Form. Mit quadratischer Ergänzung gelangt man zur Scheitelpunktsform; durch Ausmultiplizieren erhält man wieder die allgemeine Form.

{{|>}} Für $a=1$, $d=0$ und $e=0$ ergibt sich die einfachste quadratische Funktion:

$$
f(x)=x^2.
$$

Ihr Graph wird Normalparabel genannt.

<center>

@Koordinatensystem(`xmin=-4.7;xmax=5.1;ymin=-0.95;ymax=4.8;width=780;id=PARABELN01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=PARABELN01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`PARABELN01;f=0;x^2;rgb(var(--color-text,51,51,51));linestyle=solid`)
@Punkt(`PARABELN01;S=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`PARABELN01;[0.72;-0.66];$\Large S(0\mid0)$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PARABELN01;[3;3.2];$\Large f(x)=x^2$;rgb(var(--color-text,51,51,51));1`)

</center>

Die Normalparabel ist achsensymmetrisch zur Ordinatenachse, denn $(-x)^2=x^2$. Ihre Funktionswerte sind nichtnegativ. Nur für $x=0$ ist der Funktionswert null; je größer $|x|$ wird, desto größer wird $x^2$.

Der tiefste Punkt heißt Scheitelpunkt und liegt bei $S(0\mid0)$. Dort besitzt die Funktion ihr Minimum $0$. Ihr Wertebereich ist $[0;\infty)$. Alle Abbildungen zeigen Ausschnitte der Graphen; die Kurven setzen sich über den Bildrand hinaus fort.

{{|>}} Zunächst bleiben $d=e=0$, während $a$ verändert wird. Die folgenden Parabeln besitzen alle denselben Scheitelpunkt $S(0\mid0)$. Die schwarzen Graphen gehören zu positiven und die roten zu negativen Werten von $a$. Die Indizes nennen jeweils diesen Parameterwert:

$$
\begin{aligned}
f_a(x)&=ax^2
&&\text{für }a\in\left\{2,1,\frac12,\frac18\right\},\\
g_a(x)&=ax^2
&&\text{für }a\in\left\{-1,-\frac32,-\frac14\right\}.
\end{aligned}
$$

<center>

@Koordinatensystem(`xmin=-4.7;xmax=5.1;ymin=-4.7;ymax=4.8;width=780;id=PARABELN02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=PARABELN02;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`PARABELN02;f2=0;2*x^2;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`PARABELN02;f1=0;x^2;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`PARABELN02;fhalf=0;0.5*x^2;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`PARABELN02;feighth=0;0.125*x^2;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`PARABELN02;g1=0;-(x^2);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`PARABELN02;gthreehalves=0;-1.5*x^2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`PARABELN02;gquarter=0;-0.25*x^2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`PARABELN02;S=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`PARABELN02;[1.59;3.6];$\Large f_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PARABELN02;[2.22;3.6];$\Large f_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PARABELN02;[3.01;3.6];$\Large f_{\frac12}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PARABELN02;[4.03;2.55];$\Large f_{\frac18}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PARABELN02;[2.05;-3];$\Large g_{-1}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`PARABELN02;[-1.05;-3];$\Large g_{-\frac32}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`PARABELN02;[3.95;-3.3];$\Large g_{-\frac14}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Für $a>0$ ist die Parabel nach oben geöffnet und der Scheitelpunkt ein Tiefpunkt. Für $a<0$ ist sie nach unten geöffnet und der Scheitelpunkt ein Hochpunkt. Ein Wechsel des Vorzeichens von $a$ spiegelt den Graphen von $ax^2$ an der Abszissenachse.

Der Betrag $|a|$ bestimmt die Streckung oder Stauchung gegenüber der Normalparabel in Ordinatenrichtung: Für $|a|>1$ wird sie gestreckt und dadurch schmaler; für $0<|a|<1$ wird sie gestaucht und dadurch breiter. Für $|a|=1$ bleibt ihre Breite unverändert.

{{|>}} Der Parameter $a$ ist keine konstante Steigung wie bei einer Geraden. Vom Scheitelpunkt aus kann man ihn dennoch leicht ablesen: Geht man eine Einheit in positive oder negative Abszissenrichtung, so beträgt die Änderung der Ordinate genau $a$. Allgemein gilt für einen Abstand $t$ in Abszissenrichtung

$$
f(d+t)-e=at^2.
$$

Für $t=1$ und $t=-1$ erhält man also jeweils $f(d+t)=e+a$. Bei einem Abstand von zwei Einheiten ist die Änderung dagegen $4a$. Sie wächst quadratisch mit dem Abstand, nicht gleichmäßig wie bei einer linearen Funktion.

{{|>}} Nun bleiben $a=1$ und $d=0$ fest. Nur $e$ wird verändert:

$$
f_e(x)=x^2+e,\qquad e\in\{0,1,2,-1,-2,-3\}.
$$

<center>

@Koordinatensystem(`xmin=-4.7;xmax=5.1;ymin=-4.7;ymax=4.8;width=780;id=PARABELN03;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=PARABELN03;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`PARABELN03;f0=0;x^2+0;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`PARABELN03;f1=0;x^2+1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`PARABELN03;f2=0;x^2+2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`PARABELN03;f3=0;x^2-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);linestyle=solid`)
@PlotFunktion(`PARABELN03;f4=0;x^2-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);linestyle=solid`)
@PlotFunktion(`PARABELN03;f5=0;x^2-3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);linestyle=solid`)
@Punkt(`PARABELN03;S0=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`PARABELN03;[0.62;-0.17];$\Large S_{0}$;rgb(var(--color-text,51,51,51));1`)
@Punkt(`PARABELN03;S1=0;0;1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`PARABELN03;[0.62;0.83];$\Large S_{1}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`PARABELN03;S2=0;0;2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`PARABELN03;[0.62;1.83];$\Large S_{2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`PARABELN03;S3=0;0;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1;fix`)
@KoordText(`PARABELN03;[0.62;-1.17];$\Large S_{-1}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)
@Punkt(`PARABELN03;S4=0;0;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@KoordText(`PARABELN03;[0.62;-2.17];$\Large S_{-2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@Punkt(`PARABELN03;S5=0;0;-3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1;fix`)
@KoordText(`PARABELN03;[0.62;-3.17];$\Large S_{-3}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)

</center>

Der Parameter $e$ verschiebt die Normalparabel in Ordinatenrichtung. Für $e>0$ erfolgt die Verschiebung in positive, für $e<0$ in negative Ordinatenrichtung. Die Form bleibt unverändert.

Die markierten Scheitelpunkte sind $S_e(0\mid e)$; der Index bezeichnet den jeweiligen Wert von $e$. So gehört beispielsweise der blaue Scheitelpunkt $S_2(0\mid2)$ zu $f_2(x)=x^2+2$ und der grüne Scheitelpunkt $S_{-3}(0\mid-3)$ zu $f_{-3}(x)=x^2-3$.

{{|>}} Für die Verschiebung in Abszissenrichtung setzen wir $a=1$ und $e=0$ und verändern nun $d$:

$$
f_d(x)=(x-d)^2,\qquad d\in\{-2,-1,0,1,2\}.
$$

<center>

@Koordinatensystem(`xmin=-4.7;xmax=5.1;ymin=-0.95;ymax=4.8;width=780;id=PARABELN04;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=PARABELN04;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`PARABELN04;f0=0;(x+2)^2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`PARABELN04;f1=0;(x+1)^2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`PARABELN04;f2=0;(x-0)^2;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`PARABELN04;f3=0;(x-1)^2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);linestyle=solid`)
@PlotFunktion(`PARABELN04;f4=0;(x-2)^2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);linestyle=solid`)
@Punkt(`PARABELN04;S0=0;-2;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`PARABELN04;[-2;-0.66];$\Large S_{-2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`PARABELN04;S1=0;-1;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`PARABELN04;[-1;-0.66];$\Large S_{-1}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`PARABELN04;S2=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`PARABELN04;[0;-0.66];$\Large S_{0}$;rgb(var(--color-text,51,51,51));1`)
@Punkt(`PARABELN04;S3=0;1;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@KoordText(`PARABELN04;[1;-0.66];$\Large S_{1}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@Punkt(`PARABELN04;S4=0;2;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1;fix`)
@KoordText(`PARABELN04;[2;-0.66];$\Large S_{2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)

</center>

Der Scheitelpunkt liegt jeweils bei $S_d(d\mid0)$. Für $d>0$ verschiebt sich die Normalparabel in positive, für $d<0$ in negative Abszissenrichtung. Wieder ändert sich nur ihre Lage, nicht ihre Form.

Das Vorzeichen innerhalb der Klammer ist dabei zu beachten: $(x-2)^2$ hat den Scheitelpunkt $(2\mid0)$, während $(x+2)^2=(x-(-2))^2$ den Scheitelpunkt $(-2\mid0)$ besitzt. Der Index an $S_d$ nennt auch hier den Parameterwert, nicht die Reihenfolge der Punkte.

{{|>}} In der vollständigen Scheitelpunktsform $f(x)=a(x-d)^2+e$ lassen sich beide Koordinaten des Scheitelpunktes direkt ablesen:

$$
S(d\mid e).
$$

Die Symmetrieachse ist die Gerade mit der Gleichung $x=d$, denn $f(d+t)=f(d-t)$. Für $a>0$ ist $e$ das Minimum und der Wertebereich $[e;\infty)$. Für $a<0$ ist $e$ das Maximum und der Wertebereich $(-\infty;e]$.

Der Ordinatenabschnitt ist im Allgemeinen nicht $e$, sondern $f(0)=ad^2+e=c$. Nur für $d=0$ liegt der Scheitelpunkt auf der Ordinatenachse, sodass dann $e=c$ gilt.

{{|>}} Um den Scheitelpunkt aus der allgemeinen Form zu bestimmen, klammert man zunächst $a$ aus den beiden Summanden mit $x$ aus und ergänzt anschließend ein vollständiges Quadrat:

$$
\begin{aligned}
f(x)&=ax^2+bx+c\\
&=a\left(x^2+\frac ba x\right)+c\\
&=a\left[x^2+\frac ba x+\left(\frac b{2a}\right)^2
-\left(\frac b{2a}\right)^2\right]+c\\
&=a\left(x+\frac b{2a}\right)^2+c-\frac{b^2}{4a}.
\end{aligned}
$$

Der ergänzte Wert wird zugleich wieder subtrahiert; der Funktionsterm bleibt dadurch unverändert. Im Vergleich mit $a(x-d)^2+e$ erhält man

$$
d=-\frac b{2a},\qquad e=c-\frac{b^2}{4a}.
$$

Der Scheitelpunkt hat somit die Koordinaten

$$
S\left(-\frac b{2a}\,\middle|\,c-\frac{b^2}{4a}\right).
$$

Umgekehrt ergibt das Ausmultiplizieren $a(x-d)^2+e=ax^2-2ad\,x+ad^2+e$. Deshalb gelten auch $b=-2ad$ und $c=ad^2+e$.

{{|>}} Beispielsweise wird $f(x)=2x^2-8x+5$ durch quadratische Ergänzung umgeformt:

$$
\begin{aligned}
f(x)&=2(x^2-4x)+5\\
&=2\bigl[(x-2)^2-4\bigr]+5\\
&=2(x-2)^2-3.
\end{aligned}
$$

Die Parabel ist nach oben geöffnet, gegenüber der Normalparabel in Ordinatenrichtung mit dem Faktor $2$ gestreckt und hat den Scheitelpunkt $S(2\mid-3)$.

{{|>}} Zur Bestimmung der Nullstellen setzt man wie bei einer linearen Funktion $f(x)=0$. In der Scheitelpunktsform erhält man

$$
\begin{aligned}
a(x-d)^2+e&=0\\
(x-d)^2&=-\frac ea.
\end{aligned}
$$

Ein Quadrat kann für reelle Zahlen nicht negativ sein. Deshalb sind drei Fälle zu unterscheiden:

<!-- data-type="none" data-sortable="false" -->
| Bedingung | Reelle Nullstellen | Lage zur Abszissenachse |
| :---: | :--- | :--- |
| $-\frac ea>0$ | $x_1=d-\sqrt{-\frac ea}$ und $x_2=d+\sqrt{-\frac ea}$ | Zwei Schnittpunkte |
| $-\frac ea=0$ | $x=d$ als doppelte Nullstelle | Berührung im Scheitelpunkt |
| $-\frac ea<0$ | Keine reelle Nullstelle | Kein gemeinsamer Punkt |

Eine quadratische Funktion hat also nicht immer zwei reelle Nullstellen. Beispielsweise hat $x^2-1$ die Nullstellen $-1$ und $1$, $x^2$ nur die doppelte Nullstelle $0$ und $x^2+1$ keine reelle Nullstelle.

{{|>}} Sind alle drei Parameter unbekannt, benötigt man drei geeignete, voneinander unabhängige Angaben. Häufig sind das drei Punkte mit unterschiedlichen Abszissen. Durch Einsetzen ihrer Koordinaten in $y=ax^2+bx+c$ entsteht ein lineares Gleichungssystem für $a$, $b$ und $c$.

Zum Beispiel sollen $P(0\mid1)$, $Q(1\mid0)$ und $R(2\mid1)$ auf der Parabel liegen. Daraus folgt

$$
\begin{aligned}
c&=1,\\
a+b+c&=0,\\
4a+2b+c&=1.
\end{aligned}
$$

Mit $c=1$ ergeben sich $a+b=-1$ und $2a+b=0$. Die Differenz liefert $a=1$, anschließend folgt $b=-2$. Damit lautet die gesuchte Funktionsgleichung $f(x)=x^2-2x+1=(x-1)^2$.

Drei Punkte mit unterschiedlichen Abszissen bestimmen genau eine Polynomfunktion höchstens zweiten Grades. Liegen die drei Punkte auf einer Geraden, ergibt sich $a=0$ und somit keine Parabel. Sind dagegen der Scheitelpunkt und ein weiterer Punkt außerhalb der Symmetrieachse bekannt, lassen sich $d$ und $e$ direkt ablesen; durch Einsetzen des weiteren Punktes wird dann nur noch $a$ bestimmt.

***************************
