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













tags: Erklärung, Funktionsschar, Ortskurve

comment: In diesem Abschnitt werden Funktionsscharen, die Ortskurve ihrer Extrempunkte und gemeinsame Punkte aller Schargraphen an einem Beispiel mit Exponentialfunktionen erklärt.

author: Martin Lommatzsch

-->

# Funktionsscharen

{{|>}}
***************************

Bei einer Funktionsschar bleibt mindestens ein Parameter der Funktionsgleichung zunächst frei. Jeder zulässige Parameterwert bestimmt eine einzelne Funktion der Schar. Der Parameter wird dabei von der Variablen unterschieden: Bei der Untersuchung einer einzelnen Funktion ist er fest.

Werden charakteristische Punkte mithilfe einer [Kurvendiskussion](05_05_01_Kurvendiskussion.md) untersucht, hängen ihre Koordinaten häufig vom Parameter ab. Die Menge der Punkte, die beim Variieren des Parameters entstehen, heißt Ortskurve. Lässt sie sich als Funktionsgraph darstellen, kann eine zugehörige Funktionsgleichung bestimmt werden. Nicht jede Ortskurve muss allerdings der Graph einer Funktion sein.

{{|>}} Als Beispiel betrachten wir die Funktionsschar

$$
f_t(x)=xe^{-tx},\qquad x\in\mathbb{R},\quad t\in\mathbb{R}.
$$

Hier ist $x$ die Variable und $t$ der Parameter. Für jeden festen Wert von $t$ ist $f_t$ auf ganz $\mathbb{R}$ definiert. Beim Ableiten nach $x$ wird $t$ als Konstante behandelt. Mit Produkt- und Kettenregel erhalten wir

$$
\begin{aligned}
f_t'(x)=\frac{d}{dx}f_t(x)
&=e^{-tx}+x(-t)e^{-tx}\\
&=(1-tx)e^{-tx}.
\end{aligned}
$$

Da $e^{-tx}>0$ ist, kann nur der Faktor $1-tx$ null werden. Für $t\ne0$ folgt

$$
\begin{aligned}
f_t'(x)&\stackrel{!}{=}0,\\
1-tx&=0\quad\Rightarrow\quad x_E=\frac1t,\\
f_t\left(\frac1t\right)&=\frac1t e^{-1}=\frac1{te}.
\end{aligned}
$$

{{|>}} Zur Bestätigung und Unterscheidung der [Extrempunkte](05_02_01_Extrem.md) verwenden wir die zweite Ableitung:

$$
\begin{aligned}
f_t''(x)&=(t^2x-2t)e^{-tx},\\
f_t''\left(\frac1t\right)&=-\frac{t}{e}.
\end{aligned}
$$

Für $t>0$ ist dieser Wert negativ und es liegt ein Hochpunkt vor. Für $t<0$ ist er positiv und es liegt ein Tiefpunkt vor. Die parameterabhängigen Extrempunkte lauten somit

$$
E_t\left(\frac1t \mid \frac1{te}\right),\qquad t\ne0.
$$

Der Sonderfall $t=0$ muss gesondert betrachtet werden: Dann gilt $f_0(x)=x$ und $f_0'(x)=1$. Diese Funktion besitzt keinen Extrempunkt.

{{|>}} Um die Ortskurve der Extrempunkte zu bestimmen, werden deren Koordinaten mit $x$ und $y$ bezeichnet. Anschließend lösen wir eine der beiden Gleichungen nach dem Parameter auf und setzen das Ergebnis in die andere ein:

$$
\begin{aligned}
x&=\frac1t,& y&=\frac1{te},\\
t&=\frac1x,& y&=\frac{1}{\frac1x\cdot e}=\frac{x}{e}.
\end{aligned}
$$

Damit lautet die Gleichung der Ortskurve

$$
g(x)=\frac{x}{e},\qquad x\in\mathbb{R}\setminus\{0\}.
$$

Der ausgeschlossene Wert $x=0$ ist wichtig: Für keinen endlichen Parameterwert $t\ne0$ wird $1/t=0$. Umgekehrt gehört zu jedem $x\ne0$ der zulässige Parameter $t=1/x$. Die Ortskurve ist deshalb die Gerade mit der Steigung $1/e$ ohne den Ursprung. Werden nur positive Parameter betrachtet, bleibt nur der Teil mit $x>0$: die Ortskurve der Hochpunkte.

{{|>}} Die Abbildung zeigt wie im Beispiel die fünf Schargraphen für $t=1$, $t=\frac12$, $t=\frac13$, $t=\frac14$ und $t=\frac15$ in Blau. Die zugehörigen Hochpunkte sind als rote Kreuze markiert und liegen auf der rot gestrichelten Ortskurve.

<center>

@Koordinatensystem(`xmin=-0.55;xmax=6.9;ymin=-0.5;ymax=3.15;width=800;id=SCHAR01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=SCHAR01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`SCHAR01;f1=0;x*exp(-x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`SCHAR01;f2=0;x*exp(-x/2);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`SCHAR01;f3=0;x*exp(-x/3);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`SCHAR01;f4=0;x*exp(-x/4);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`SCHAR01;f5=0;x*exp(-x/5);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`SCHAR01;g=0;x^2/(e*x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=dashed`)
@Punkt(`SCHAR01;E1=0;1;0.3678794412;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`SCHAR01;E2=0;2;0.7357588823;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`SCHAR01;E3=0;3;1.1036383235;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`SCHAR01;E4=0;4;1.4715177647;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`SCHAR01;E5=0;5;1.8393972059;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`SCHAR01;P=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`SCHAR01;[6.25;0.2];$\Large f_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`SCHAR01;[6.25;0.52];$\Large f_{1/2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`SCHAR01;[6.25;0.97];$\Large f_{1/3}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`SCHAR01;[6.25;1.48];$\Large f_{1/4}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`SCHAR01;[6.25;1.96];$\Large f_{1/5}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`SCHAR01;[5.7;2.7];$\Large g(x)=\frac{x}{e}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SCHAR01;[0.83;0.14];$\Large E_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SCHAR01;[1.83;0.53];$\Large E_{1/2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SCHAR01;[2.83;0.9];$\Large E_{1/3}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SCHAR01;[3.83;1.28];$\Large E_{1/4}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SCHAR01;[4.83;1.62];$\Large E_{1/5}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SCHAR01;[0.25;-0.3];$\Large P$;rgb(var(--color-text,51,51,51));1`)

</center>

Die Abszissen der eingezeichneten Hochpunkte sind $1,2,3,4,5$, ihre Ordinaten entsprechend $1/e,2/e,3/e,4/e,5/e$. Je kleiner der positive Parameter wird, desto weiter liegt der Hochpunkt rechts und oben. Der schwarze Punkt $P$ im Ursprung gehört zu allen Schargraphen, aber nicht zur Ortskurve ihrer Extrempunkte.

{{|>}} Manche Funktionsscharen besitzen Punkte, durch die jeder Graph unabhängig vom Parameterwert verläuft. Um solche gemeinsamen Punkte zu finden, können zwei Scharfunktionen mit unterschiedlichen Parametern $t_1\ne t_2$ gleichgesetzt werden:

$$
\begin{aligned}
f_{t_1}(x)&\stackrel{!}{=}f_{t_2}(x),\\
xe^{-t_1x}&=xe^{-t_2x}.
\end{aligned}
$$

Für $x=0$ ist die Gleichung erfüllt. Dieser Fall wird vor einer Division durch $x$ geprüft, damit die Lösung nicht verloren geht. Für $x\ne0$ darf durch $x$ dividiert werden. Da die reelle Exponentialfunktion eindeutig umkehrbar ist, ergibt sich

$$
\begin{aligned}
e^{-t_1x}&=e^{-t_2x}\\
\Rightarrow\quad -t_1x&=-t_2x\\
\Rightarrow\quad (t_2-t_1)x&=0.
\end{aligned}
$$

Wegen $t_1\ne t_2$ würde daraus $x=0$ folgen, im Widerspruch zu $x\ne0$. Es gibt also keine weitere Schnittstelle zweier verschiedener Schargraphen. Außerdem gilt ausdrücklich

$$
f_t(0)=0\qquad \forall t\in\mathbb{R}.
$$

Damit ist $P(0\mid0)$ der einzige gemeinsame Punkt aller Graphen dieser Funktionsschar. Allgemein müssen beim Vergleich zweier Schargraphen gefundene Punkte noch darauf geprüft werden, ob sie tatsächlich für alle zulässigen Parameterwerte gelten.

***************************
