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













tags: Erklärung, Lineare Funktionen, Steigung, Steigungsdreieck, Ordinatenabschnitt, Nullstellen, Schnittpunkt

comment: In diesem Abschnitt werden lineare Funktionen, Steigung und Steigungsdreieck, Ordinatenabschnitt, die Bestimmung einer Geradengleichung aus zwei Punkten sowie Nullstellen und Schnittpunkte erklärt.

author: Martin Lommatzsch

-->

# Geraden – lineare Funktionen

{{|>}}
***************************

Die Graphen linearer Funktionen sind Geraden. Ihre allgemeine Funktionsgleichung lautet

$$
f(x)=mx+b.
$$

Dabei ist $x$ die Variable, während $m$ und $b$ feste reelle Parameter der jeweiligen Funktion sind. Der Parameter $m$ beschreibt die Steigung und $b$ den Ordinatenabschnitt. Wenn nichts anderes angegeben ist, betrachten wir diese Funktionen auf dem Definitionsbereich $\mathbb{R}$.

Für $m\neq0$ ist $mx+b$ ein Polynom ersten Grades: Die höchste vorkommende Potenz von $x$ ist $x^1$. Für $m=0$ entsteht dagegen die konstante Funktion $f(x)=b$. Sie wird hier als Sonderfall der linearen Funktionen mitbehandelt.

Sind $m$ und $b$ bekannt, ist die Funktion eindeutig festgelegt. Sind beide unbekannt, benötigt man zwei geeignete, voneinander unabhängige Angaben. Das können beispielsweise zwei Punkte mit unterschiedlichen Abszissen oder die Steigung und ein Punkt sein.

{{|>}} Zunächst bleibt $b=0$, und nur die Steigung $m$ wird verändert. Alle zugehörigen Geraden verlaufen durch den Ursprung. In der folgenden Abbildung stehen die schwarzen Graphen für positive Steigungen und die roten für negative Steigungen. Die Indizes geben jeweils den Wert von $m$ an:

$$
\begin{aligned}
f_m(x)&=mx
&&\text{für }m\in\left\{\frac14,\frac12,1,2,4\right\},\\
g_m(x)&=mx
&&\text{für }m\in\left\{-\frac14,-\frac12,-1,-2,-4\right\}.
\end{aligned}
$$

<center>

@Koordinatensystem(`xmin=-4.8;xmax=5.05;ymin=-4.8;ymax=5.05;width=780;id=GERADEN01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=GERADEN01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`GERADEN01;slope0=0;x;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`GERADEN01;slope1=0;2*x;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`GERADEN01;slope2=0;4*x;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`GERADEN01;slope3=0;0.5*x;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`GERADEN01;slope4=0;0.25*x;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`GERADEN01;slope5=0;-x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`GERADEN01;slope6=0;-2*x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`GERADEN01;slope7=0;-4*x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`GERADEN01;slope8=0;-0.5*x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`GERADEN01;slope9=0;-0.25*x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`GERADEN01;[4.48;4.12];$\Large f_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`GERADEN01;[1.7;4.4];$\Large f_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`GERADEN01;[0.7;4.4];$\Large f_4$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`GERADEN01;[4.5;1.85];$\Large f_{\frac12}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`GERADEN01;[4.5;0.75];$\Large f_{\frac14}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`GERADEN01;[4.48;-4.15];$\Large g_{-1}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`GERADEN01;[2.6;-4.4];$\Large g_{-2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`GERADEN01;[1.5;-4.4];$\Large g_{-4}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`GERADEN01;[4.5;-1.8];$\Large g_{-\frac12}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`GERADEN01;[4.5;-0.8];$\Large g_{-\frac14}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Alle Abbildungen zeigen nur Ausschnitte der Geraden. Die Geraden setzen sich über die eingezeichneten Enden hinaus fort.

{{|>}} Für $m>0$ steigen die Funktionswerte, wenn $x$ zunimmt. Für $m<0$ fallen sie. Bei $m=0$ bleiben sie unverändert. In der üblichen Orientierung des Koordinatensystems sieht man daher steigende Geraden von links unten nach rechts oben und fallende Geraden von links oben nach rechts unten.

Je größer der Betrag $|m|$ ist, desto steiler verläuft die Gerade bei gleicher Achsenskalierung. Beispielsweise fällt die Gerade mit $m=-4$ stärker als die Gerade mit $m=-1$. Dabei ist $-4$ nicht größer als $-1$; größer ist ihr Betrag.

{{|>}} Die Steigung lässt sich mit einem Steigungsdreieck bestimmen. Man beginnt an einem Punkt der Geraden, geht parallel zur Abszissenachse in deren positiver Richtung und anschließend parallel zur Ordinatenachse bis zu einem zweiten Punkt der Geraden. Die beiden Hilfsstrecken sind orthogonal zueinander.

Beträgt die Änderung der Abszisse genau $1$, ist die Änderung des Funktionswertes gleich $m$. Bei einer fallenden Geraden ist diese Änderung negativ; sie ist also nicht mit einer stets positiven Streckenlänge gleichzusetzen.

Die folgende Abbildung zeigt zwei Steigungsdreiecke für $f(x)=x$: das blaue mit $A\left(\frac12\mid\frac12\right)$ und $B(2\mid2)$ sowie das schwarze mit $B(2\mid2)$ und $C(3\mid3)$.

<center>

@Koordinatensystem(`xmin=-0.85;xmax=4.15;ymin=-0.85;ymax=4.15;width=740;id=GERADEN02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=GERADEN02;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`GERADEN02;linear=0;x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`GERADEN02;[2.45;3.6];$\Large f(x)=x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Strecke(`GERADEN02;[[0.5;0.5];[2;0.5];[2;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);delta=0;-;2px`)
@Strecke(`GERADEN02;[[2;2];[3;2];[3;3]];rgb(var(--color-text,51,51,51));unit=0;-;2px`)
@Strecke(`GERADEN02;[[1.86;0.5];[1.86;0.64];[2;0.64]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`GERADEN02;[[2.86;2];[2.86;2.14];[3;2.14]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`GERADEN02;[1.22;0.73];$\Large \Delta x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`GERADEN02;[2.45;1.23];$\Large \Delta f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`GERADEN02;[2.5;1.8];$\Large 1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`GERADEN02;[3.26;2.5];$\Large m$;rgb(var(--color-text,51,51,51));1`)
@Punkt(`GERADEN02;A=0;0.5;0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`GERADEN02;[0.48;0.85];$\Large A$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`GERADEN02;B=0;2;2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`GERADEN02;[1.72;2.12];$\Large B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`GERADEN02;C=0;3;3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`GERADEN02;[2.72;3.1];$\Large C$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Allgemein werden die Änderungen durch das Zeichen $\Delta$ beschrieben. Für zwei Stellen $x_1<x_2$ gilt

$$
\begin{aligned}
\Delta x&=x_2-x_1,\\
\Delta f(x)&=f(x_2)-f(x_1).
\end{aligned}
$$

Die Steigung ist das Verhältnis dieser Änderungen:

$$
m=\frac{\Delta f(x)}{\Delta x}
 =\frac{f(x_2)-f(x_1)}{x_2-x_1}.
$$

Beim blauen Dreieck sind $\Delta x=2-\frac12=\frac32$ und $\Delta f(x)=2-\frac12=\frac32$. Daher gilt

$$
m=\frac{\frac32}{\frac32}=1.
$$

Beim schwarzen Dreieck ergibt sich derselbe Wert aus $m=\frac{3-2}{3-2}=1$. Die Größe des Steigungsdreiecks ändert das Verhältnis nicht: Auf einer Geraden ist die Steigung überall gleich. Voraussetzung für die Berechnung ist stets $\Delta x\neq0$.

{{|>}} Nun bleibt $m=1$, während $b$ die Werte von $-3$ bis $3$ annimmt. Für diese Abbildung bezeichnen wir die Funktionen als $f_b(x)=x+b$; der Index nennt hier also den Ordinatenabschnitt und nicht die Steigung.

<center>

@Koordinatensystem(`xmin=-4.8;xmax=5.05;ymin=-4.8;ymax=5.05;width=780;id=GERADEN03;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=GERADEN03;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`GERADEN03;offset0=0;x-3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);linestyle=solid`)
@Punkt(`GERADEN03;B0=0;0;-3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1;fix`)
@KoordText(`GERADEN03;[4.49;1.06];$\Large f_{-3}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)
@PlotFunktion(`GERADEN03;offset1=0;x-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #c8a500);linestyle=solid`)
@Punkt(`GERADEN03;B1=0;0;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #c8a500);1;fix`)
@KoordText(`GERADEN03;[4.49;2.06];$\Large f_{-2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #c8a500);1`)
@PlotFunktion(`GERADEN03;offset2=0;x-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);linestyle=solid`)
@Punkt(`GERADEN03;B2=0;0;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1;fix`)
@KoordText(`GERADEN03;[4.49;3.06];$\Large f_{-1}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@PlotFunktion(`GERADEN03;offset3=0;x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);linestyle=solid`)
@Punkt(`GERADEN03;B3=0;0;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@KoordText(`GERADEN03;[4.49;4.06];$\Large f_0$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@PlotFunktion(`GERADEN03;offset4=0;x+1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@Punkt(`GERADEN03;B4=0;0;1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`GERADEN03;[3;4.4];$\Large f_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@PlotFunktion(`GERADEN03;offset5=0;x+2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`GERADEN03;B5=0;0;2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`GERADEN03;[2;4.4];$\Large f_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@PlotFunktion(`GERADEN03;offset6=0;x+3;rgb(var(--color-text,51,51,51));linestyle=solid`)
@Punkt(`GERADEN03;B6=0;0;3;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`GERADEN03;[1;4.4];$\Large f_3$;rgb(var(--color-text,51,51,51));1`)

</center>

Alle Geraden haben dieselbe Steigung und sind parallel zueinander. Eine Änderung von $b$ verschiebt den Graphen parallel zur Ordinatenachse. Die Kreuze markieren die Schnittpunkte mit dieser Achse.

Da auf der Ordinatenachse $x=0$ gilt, erhält man

$$
f(0)=m\cdot0+b=b.
$$

Der Schnittpunkt mit der Ordinatenachse ist somit $B(0\mid b)$. Die Zahl $b$ heißt Ordinatenabschnitt oder Ordinatenschnittwert; auch die Bezeichnung Offset wird verwendet. Der Zahlenwert $b$ ist von dem Punkt $B(0\mid b)$ zu unterscheiden.

{{|>}} Um eine Geradengleichung aus zwei Punkten zu bestimmen, werden deren Koordinaten in $f(x)=mx+b$ eingesetzt. Als Beispiel dienen

$$
P(-1\mid-4)
\qquad\text{und}\qquad
Q(2\mid3).
$$

Die unbekannten Parameter $m$ und $b$ müssen beide Gleichungen erfüllen:

$$
\begin{aligned}
P:\qquad -4&=-m+b,\\
Q:\qquad 3&=2m+b.
\end{aligned}
$$

Wir lösen die erste Gleichung nach $b$ auf:

$$
-4=-m+b
\quad\Longleftrightarrow\quad
b=m-4.
$$

{{|>}} Diesen Ausdruck für $b$ setzen wir in die zweite Gleichung ein. Das ist das Einsetzungsverfahren:

$$
\begin{aligned}
3&=2m+(m-4)\\
3&=3m-4 &&\big|\, +4\\
7&=3m &&\big|\, :3\\
m&=\frac73.
\end{aligned}
$$

Anschließend wird $m=\frac73$ in $b=m-4$ eingesetzt:

$$
b=\frac73-4
 =\frac73-\frac{12}{3}
 =-\frac53.
$$

Damit lautet die gesuchte Funktionsgleichung

$$
f(x)=\frac73x-\frac53.
$$

Zur Kontrolle setzen wir beide Abszissen ein:

$$
\begin{aligned}
f(-1)&=-\frac73-\frac53=-4,\\
f(2)&=\frac{14}{3}-\frac53=3.
\end{aligned}
$$

Beide vorgegebenen Punkte liegen also auf dem Graphen.

{{|>}} Derselbe Zusammenhang lässt sich unmittelbar mit dem Steigungsdreieck berechnen. Für $P(x_1\mid y_1)$ und $Q(x_2\mid y_2)$ mit $x_1\neq x_2$ gilt

$$
m=\frac{y_2-y_1}{x_2-x_1}
\qquad\text{und danach}\qquad
b=y_1-mx_1.
$$

Im Beispiel ist $m=\frac{3-(-4)}{2-(-1)}=\frac73$. Es entsteht also dieselbe Gerade.

Zwei verschiedene Punkte mit gleicher Abszisse liegen dagegen auf einer zur Ordinatenachse parallelen Geraden. Diese ist kein Graph einer Funktion $y=f(x)$, denn derselben Abszisse würden mehrere Ordinaten zugeordnet. Ein einzelner Punkt oder zweimal derselbe Punkt bestimmt die Steigung noch nicht eindeutig.

Auch bei Polynomen höheren Grades kann man vorgegebene Punkte einsetzen und die unbekannten Koeffizienten mithilfe eines Gleichungssystems bestimmen. Dazu werden entsprechend mehr unabhängige Bedingungen benötigt. Eine allgemeine Regel zur Parameteranzahl beliebiger Funktionen folgt daraus nicht.

{{|>}} Eine Nullstelle ist eine Stelle $x_N$, an der der Funktionswert $0$ ist. Der zugehörige Punkt $N(x_N\mid0)$ liegt auf der Abszissenachse. Für eine lineare Funktion mit $m\neq0$ erhält man

$$
\begin{aligned}
0&=mx_N+b &&\big|\, -b\\
-b&=mx_N &&\big|\, :m\\
x_N&=-\frac{b}{m}.
\end{aligned}
$$

Für die zuvor bestimmte Funktion folgt

$$
x_N=-\frac{-\frac53}{\frac73}=\frac57.
$$

Ihre Nullstelle ist also $x_N=\frac57$, der Schnittpunkt mit der Abszissenachse ist $N\left(\frac57\mid0\right)$.

Für $m=0$ darf nicht durch $m$ dividiert werden. Dann gilt $f(x)=b$: Ist $b\neq0$, gibt es keine Nullstelle. Ist auch $b=0$, ist jede reelle Zahl eine Nullstelle, und der Graph fällt mit der Abszissenachse zusammen.

{{|>}} Zwei Funktionsgraphen schneiden sich dort, wo sie für dieselbe Abszisse denselben Funktionswert besitzen. Wir betrachten

$$
f(x)=x-1
\qquad\text{und}\qquad
g(x)=-\frac12x+2.
$$

<center>

@Koordinatensystem(`xmin=-0.55;xmax=4.65;ymin=-0.55;ymax=4.65;width=660;id=GERADEN04;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=GERADEN04;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`GERADEN04;f=0;x-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);linestyle=solid`)
@PlotFunktion(`GERADEN04;g=0;-0.5*x+2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@Strecke(`GERADEN04;[[0;1];[2;1];[2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);helpers=0;-;2px;linestyle=dashed`)
@Punkt(`GERADEN04;S=0;2;1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`GERADEN04;[2.7;1.17];$\Large S(2\mid1)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`GERADEN04;[3.85;3.65];$\Large f(x)=x-1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`GERADEN04;[1.2;2.57];$\Large g(x)=-\frac12x+2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Die gestrichelten Hilfsstrecken zeigen den Schnittpunkt $S(2\mid1)$. Seine Abszisse ist $2$, seine Ordinate ist $1$.

{{|>}} Für die rechnerische Bestimmung werden die Funktionsterme gleichgesetzt:

$$
\begin{aligned}
g(x)&=f(x)\\
-\frac12x+2&=x-1 &&\big|\, +\frac12x+1\\
3&=\frac32x &&\big|\, \cdot\frac23\\
x_S&=2.
\end{aligned}
$$

Damit ist zunächst nur die Abszisse des Schnittpunkts bekannt. Für seine Ordinate setzen wir $x_S=2$ in eine der beiden Funktionen ein:

$$
y_S=f(2)=2-1=1.
$$

Die andere Funktion liefert zur Kontrolle denselben Wert:

$$
g(2)=-\frac12\cdot2+2=1.
$$

Der gesuchte Schnittpunkt lautet damit

$$
S(x_S\mid y_S)=S(2\mid1).
$$

{{|>}} Für zwei auf $\mathbb{R}$ definierte lineare Funktionen gibt es drei Möglichkeiten: Bei unterschiedlichen Steigungen schneiden sich die Graphen in genau einem Punkt. Bei gleicher Steigung und verschiedenen Ordinatenabschnitten sind die Geraden parallel und haben keinen Schnittpunkt. Stimmen sowohl Steigung als auch Ordinatenabschnitt überein, sind die Geraden identisch und haben alle ihre Punkte gemeinsam.

Das Gleichsetzen der Funktionsterme ist auch bei anderen Funktionsarten möglich. Die entstehende Gleichung kann dann andere Lösungsverfahren erfordern und mehrere oder keine Schnittstellen besitzen.

***************************
