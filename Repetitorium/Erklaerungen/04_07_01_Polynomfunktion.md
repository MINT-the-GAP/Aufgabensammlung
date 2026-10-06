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













tags: Erklärung, Polynomfunktion

comment: In diesem Abschnitt werden Polynomfunktionen, ihr Grad und ihre Koeffizienten sowie Potenzgraphen, Symmetrie und lokale Extrempunkte erklärt.

author: Martin Lommatzsch

-->

# Polynomfunktionen

{{|>}}
***************************

Nach den [Geraden](04_03_01_Geraden.md) und den [Parabeln](04_05_01_Parabeln.md) betrachten wir Funktionen mit höheren Potenzen von $x$. Lineare und quadratische Funktionen lassen sich in eine gemeinsame Familie einordnen:

$$
\begin{aligned}
f_1(x)&=a_1x+a_0
&&\text{1. Grades},\\
f_2(x)&=a_2x^2+a_1x+a_0
&&\text{2. Grades},\\
f_3(x)&=a_3x^3+a_2x^2+a_1x+a_0
&&\text{3. Grades},\\
f_4(x)&=a_4x^4+a_3x^3+a_2x^2+a_1x+a_0
&&\text{4. Grades},\\
f_5(x)&=a_5x^5+a_4x^4+a_3x^3+a_2x^2+a_1x+a_0
&&\text{5. Grades},\\
&\vdots
\end{aligned}
$$

Die Terme auf den rechten Seiten heißen Polynome. Sie bestehen aus einer endlichen Summe von Potenzen der Variablen $x$ mit nichtnegativen ganzzahligen Exponenten. Jede Potenz besitzt einen Vorfaktor, den Koeffizienten. Der konstante Summand $a_0$ enthält keine Variable.

{{|>}} Eine Polynomfunktion wird auch ganzrationale Funktion genannt. Für einen positiven ganzzahligen Grad $n$ schreiben wir allgemein:

$$
f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0,
\qquad a_n\neq0.
$$

Die Koeffizienten $a_0,a_1,\ldots,a_n$ sind reelle Zahlen. Der Grad ist der höchste vorkommende Exponent mit einem von null verschiedenen Koeffizienten. Der Summand $a_nx^n$ heißt führender Term; $a_n$ ist der führende Koeffizient.

Ein Polynom vom Grad $n$ hat $n+1$ mögliche Koeffizienten. Einige davon dürfen null sein, sodass entsprechende Summanden entfallen. Beispielsweise hat $2x^5-3x+1$ den Grad $5$, obwohl nur drei Summanden auftreten. Konstante Funktionen $f(x)=a_0$ mit $a_0\neq0$ haben den Grad $0$; das Nullpolynom ist ein Sonderfall ohne höchsten von null verschiedenen Koeffizienten.

Jede Polynomfunktion ist für alle reellen Argumente definiert:

$$
D_f=\mathbb{R}.
$$

{{|>}} Um den Einfluss des Exponenten zu vergleichen, betrachten wir zunächst nur die Potenzfunktionen

$$
p_n(x)=x^n,\qquad n=1,2,3,4,5.
$$

Hier ist der führende Koeffizient jeweils $1$; alle übrigen Koeffizienten sind null. Die folgende Abbildung zeigt diese fünf Graphen gemeinsam:

<center>

@Koordinatensystem(`xmin=-4.6;xmax=4.9;ymin=-4.6;ymax=4.6;width=780;id=POLYNOM01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=POLYNOM01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`POLYNOM01;p1=0;x;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`POLYNOM01;p2=0;x^2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`POLYNOM01;p3=0;x^3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`POLYNOM01;p4=0;x^4;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);linestyle=solid`)
@PlotFunktion(`POLYNOM01;p5=0;x^5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);linestyle=solid`)
@Punkt(`POLYNOM01;P=0;1;1;rgb(var(--color-text,51,51,51));1;fix`)

@KoordText(`POLYNOM01;[-3.4;3.55];$\Large p_1(x)=x$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`POLYNOM01;[-3.4;2.85];$\Large p_2(x)=x^2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`POLYNOM01;[-3.4;2.15];$\Large p_3(x)=x^3$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`POLYNOM01;[-3.4;1.45];$\Large p_4(x)=x^4$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`POLYNOM01;[-3.4;0.75];$\Large p_5(x)=x^5$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`POLYNOM01;[1.75;0.65];$\Large P(1\mid1)$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Alle fünf Graphen verlaufen durch den Koordinatenursprung und durch den Punkt $P(1\mid1)$, denn für jeden positiven ganzzahligen Exponenten $n$ gilt $0^n=0$ und $1^n=1$.

Bei einem geraden Exponenten ist der Graph von $p_n(x)=x^n$ achsensymmetrisch zur Ordinatenachse. Bei einem ungeraden Exponenten ist er punktsymmetrisch zum Koordinatenursprung:

$$
\begin{aligned}
p_n(-x)&=p_n(x)
&&\text{für gerades }n,\\
p_n(-x)&=-p_n(x)
&&\text{für ungerades }n.
\end{aligned}
$$

Diese Aussagen beziehen sich auf die betrachteten Potenzfunktionen. Bei einer allgemeinen Polynomfunktion folgt aus dem Grad allein nicht dieselbe Symmetrie: Auch die übrigen Koeffizienten müssen berücksichtigt werden.

{{|>}} Rechts von $P(1\mid1)$, also für ein festes Argument $x>1$, ergibt ein höherer Exponent einen größeren Funktionswert. Für ein festes Argument zwischen $0$ und $1$ ist es umgekehrt:

$$
\begin{aligned}
x<x^2<x^3<x^4<x^5
&\qquad\text{für }x>1,\\
x^5<x^4<x^3<x^2<x
&\qquad\text{für }0<x<1.
\end{aligned}
$$

Zwischen $0$ und $1$ liegen die Werte mit größerem Exponenten somit näher bei null. Für negative Argumente unterscheiden wir zusätzlich das Vorzeichen: Gerade Potenzen sind positiv, ungerade Potenzen negativ. Für die Beträge gilt dieselbe Unterscheidung zwischen $|x|<1$ und $|x|>1$.

Bei einer allgemeinen Polynomfunktion bestimmt der führende Term $a_nx^n$ das Verhalten für betragsmäßig sehr große Argumente. Die übrigen Terme können den Verlauf dazwischen jedoch wesentlich verändern. Wir dürfen sie daher nicht weglassen, wenn wir beispielsweise Symmetrie, Nullstellen oder Extrempunkte untersuchen.

{{|>}} Betrachten wir nun die beiden Polynomfunktionen dritten und vierten Grades aus der nächsten Abbildung:

$$
\begin{aligned}
f_3(x)&=x^3-\frac32x^2-2x+2,\\
f_4(x)&=x^4-3x^2+2.
\end{aligned}
$$

<center>

@Koordinatensystem(`xmin=-4.6;xmax=4.9;ymin=-4.6;ymax=4.6;width=780;id=POLYNOM02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=POLYNOM02;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`POLYNOM02;f3=0;x^3-1.5*x^2-2*x+2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`POLYNOM02;f4=0;x^4-3*x^2+2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);linestyle=solid`)
@Punkt(`POLYNOM02;H3=0;-0.4574271078;2.5052830309;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@Punkt(`POLYNOM02;T3=0;1.4574271078;-1.0052830309;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@Punkt(`POLYNOM02;T41=0;-1.2247448714;-0.25;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@Punkt(`POLYNOM02;H4=0;0;2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@Punkt(`POLYNOM02;T42=0;1.2247448714;-0.25;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)

@KoordText(`POLYNOM02;[-3.25;3.65];$\Large f_3$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`POLYNOM02;[-3.25;2.65];$\Large f_4$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`POLYNOM02;[-0.7;3.35];$\Large H_3$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`POLYNOM02;[1.75;-1.45];$\Large T_3$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`POLYNOM02;[-1.75;-0.65];$\Large T_{4,1}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`POLYNOM02;[0.45;2.35];$\Large H_4$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`POLYNOM02;[0.6;-0.65];$\Large T_{4,2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)

</center>

{{|>}} An einigen Punkten wechselt der Graph vom Steigen zum Fallen oder vom Fallen zum Steigen. Diese Punkte erinnern an den Scheitelpunkt einer Parabel. Es handelt sich um lokale Extrempunkte.

An einem lokalen Hochpunkt ist der Funktionswert größer als die Funktionswerte an allen hinreichend nahen anderen Stellen. An einem lokalen Tiefpunkt ist er entsprechend kleiner. Wir unterscheiden dabei die Extremstelle $x_E$, den Extremwert $f(x_E)$ und den Extrempunkt $E(x_E\mid f(x_E))$.

„Lokal“ bedeutet, dass wir eine Umgebung der Stelle betrachten. Der Extremwert muss nicht der größte oder kleinste Wert der gesamten Funktion sein.

Die blaue Beispielfunktion $f_3$ hat einen lokalen Hochpunkt $H_3$ und einen lokalen Tiefpunkt $T_3$, also zwei lokale Extrempunkte. Die orange Beispielfunktion $f_4$ hat zwei Tiefpunkte $T_{4,1}$ und $T_{4,2}$ sowie einen lokalen Hochpunkt $H_4$, also drei lokale Extrempunkte. Der Punkt $H_4$ liegt zwar auch auf dem blauen Graphen, ist dort aber kein Extrempunkt.

{{|>}} Diese Anzahlen gelten für die gezeigten Beispiele, nicht für jede Funktion gleichen Grades. Eine Polynomfunktion vom Grad $n\geq1$ besitzt höchstens $n-1$ lokale Extrempunkte. Sie kann auch weniger besitzen: $p_3(x)=x^3$ hat keinen Extrempunkt und $p_4(x)=x^4$ nur einen Tiefpunkt, nämlich den Koordinatenursprung.

Die Berechnung der Extremstellen wird mit den Verfahren der Differenzialrechnung behandelt. Nullstellen sind die Lösungen der Gleichung $f(x)=0$; Verfahren zu ihrer Berechnung werden gesondert eingeführt.

***************************
