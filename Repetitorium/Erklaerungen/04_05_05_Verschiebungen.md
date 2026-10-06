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













tags: Erklärung, Graphverschiebung, Graphstreckung, Graphspiegelung

comment: In diesem Abschnitt werden die Verschiebung, Streckung, Stauchung und Spiegelung von Funktionsgraphen durch Parameter im Argument und am Funktionswert erklärt.

author: Martin Lommatzsch

-->

# Verschiebungen und Parametereinflüsse

{{|>}}
***************************

Funktionsgraphen lassen sich verschieben, strecken, stauchen und spiegeln. Entscheidend ist dabei, ob ein Parameter das Argument oder den Funktionswert verändert. Die folgenden Regeln gelten nicht nur für Parabeln, sondern auch für andere reelle Funktionen auf ihrem jeweiligen Definitionsbereich.

In den Abbildungen ist der ursprüngliche Graph von $f$ blau und der veränderte Graph von $g$ rot dargestellt. Die Kreuze markieren die Scheitelpunkte $S_f$ und $S_g$. Alle Abbildungen zeigen Ausschnitte; die Graphen setzen sich über den Bildrand hinaus fort. Die hier verwendeten Beispielfunktionen haben den Definitionsbereich $\mathbb{R}$.

{{|>}} Wird zum Argument einer Funktion eine reelle Zahl $d$ addiert, entsteht

$$
g(x)=f(x+d).
$$

Der Graph wird um $-d$ in Abszissenrichtung verschoben: Für $d>0$ geht die Verschiebung in negative Abszissenrichtung, für $d<0$ in positive Abszissenrichtung. Seine Form bleibt unverändert.

Aus einem Punkt $P(u\mid v)$ mit $v=f(u)$ wird der Punkt $P'(u-d\mid v)$, denn $g(u-d)=f(u)=v$. Deshalb wirkt das Vorzeichen im Argument entgegengesetzt zur Verschiebungsrichtung.

Für $f(x)=x^2-1$ und $d=1$ erhalten wir $g(x)=(x+1)^2-1$. Der Scheitelpunkt wird von $S_f(0\mid-1)$ nach $S_g(-1\mid-1)$ verschoben. Der Pfeil zeigt diese Verschiebung um eine Einheit:

<center>

@Koordinatensystem(`xmin=-3.9;xmax=4.1;ymin=-3.8;ymax=4;width=720;id=VERSCHIEBUNG01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VERSCHIEBUNG01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`VERSCHIEBUNG01;f=0;x^2-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`VERSCHIEBUNG01;g=0;(x+1)^2-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Strecke(`VERSCHIEBUNG01;[[0;-1];[0;-1.8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`VERSCHIEBUNG01;[[-1;-1];[-1;-1.8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`VERSCHIEBUNG01;[[0;-1.8];[-1;-1.8]];rgb(var(--color-text,51,51,51));;->;2px`)
@KoordText(`VERSCHIEBUNG01;[-0.65;-2.2];$\Large d=1$;rgb(var(--color-text,51,51,51));1`)
@Punkt(`VERSCHIEBUNG01;Sf=0;0;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`VERSCHIEBUNG01;[0.5;-1.4];$\Large S_f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`VERSCHIEBUNG01;Sg=0;-1;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`VERSCHIEBUNG01;[-1.4;-1.4];$\Large S_g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VERSCHIEBUNG01;[2.45;2];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VERSCHIEBUNG01;[-3;2];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Bei der Schreibweise $g(x)=f(x-d)$ ist die Verschiebung dagegen $+d$. Beispielsweise verschiebt $f(x-2)$ den Graphen um zwei Einheiten in positive Abszissenrichtung. Für $d=0$ bleibt er unverändert.

{{|>}} Wird eine reelle Zahl $b$ zum Funktionswert addiert, entsteht

$$
g(x)=f(x)+b.
$$

Nun wird der Graph um $b$ in Ordinatenrichtung verschoben: Für $b>0$ in positive, für $b<0$ in negative Ordinatenrichtung. Aus $P(u\mid v)$ wird $P'(u\mid v+b)$. Wieder bleibt die Form erhalten; für $b=0$ ändert sich nichts.

Im Beispiel $f(x)=x^2-1$ und $b=1$ ergibt sich $g(x)=x^2$. Der Scheitelpunkt wandert von $S_f(0\mid-1)$ nach $S_g(0\mid0)$:

<center>

@Koordinatensystem(`xmin=-3.9;xmax=4.1;ymin=-3.8;ymax=4;width=720;id=VERSCHIEBUNG02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VERSCHIEBUNG02;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`VERSCHIEBUNG02;f=0;x^2-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`VERSCHIEBUNG02;g=0;x^2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Strecke(`VERSCHIEBUNG02;[[0;-1];[-1.25;-1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`VERSCHIEBUNG02;[[0;0];[-1.25;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`VERSCHIEBUNG02;[[-1.25;-1];[-1.25;0]];rgb(var(--color-text,51,51,51));;->;2px`)
@KoordText(`VERSCHIEBUNG02;[-1.85;-0.6];$\Large b=1$;rgb(var(--color-text,51,51,51));1`)
@Punkt(`VERSCHIEBUNG02;Sf=0;0;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`VERSCHIEBUNG02;[0.5;-1.4];$\Large S_f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`VERSCHIEBUNG02;Sg=0;0;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`VERSCHIEBUNG02;[0.8;0.2];$\Large S_g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VERSCHIEBUNG02;[2.4;2];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VERSCHIEBUNG02;[-1;2.3];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Falls $0$ zum Definitionsbereich gehört, ändert sich der Ordinatenabschnitt von $f(0)$ zu $f(0)+b$. Die Nullstellen können sich durch diese Verschiebung ändern, entstehen oder entfallen.

{{|>}} Wird der gesamte Funktionswert mit einem reellen Parameter $a$ multipliziert, lautet die neue Funktion

$$
g(x)=a\cdot f(x).
$$

Die Abszisse jedes Punktes bleibt gleich, während seine Ordinate mit $a$ multipliziert wird: Aus $P(u\mid v)$ wird $P'(u\mid av)$.

Für $|a|>1$ wird der Graph in Ordinatenrichtung gestreckt; für $0<|a|<1$ wird er in Ordinatenrichtung gestaucht. Die Abstände zur Abszissenachse werden mit $|a|$ multipliziert. Für $a<0$ kommt zusätzlich eine Spiegelung an der Abszissenachse hinzu. Bei $|a|=1$ bleiben die Abstände zu dieser Achse unverändert.

Für $a=3$ und $f(x)=x^2-1$ gilt $g(x)=3(x^2-1)$. Der Scheitelpunkt $S_f(0\mid-1)$ wird zu $S_g(0\mid-3)$:

<center>

@Koordinatensystem(`xmin=-3.9;xmax=4.1;ymin=-3.8;ymax=4;width=720;id=VERSCHIEBUNG03;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VERSCHIEBUNG03;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`VERSCHIEBUNG03;f=0;x^2-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`VERSCHIEBUNG03;g=0;3*(x^2-1);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`VERSCHIEBUNG03;Sf=0;0;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`VERSCHIEBUNG03;[0.55;-1.3];$\Large S_f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`VERSCHIEBUNG03;Sg=0;0;-3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`VERSCHIEBUNG03;[0.55;-3.25];$\Large S_g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VERSCHIEBUNG03;[2.4;2];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VERSCHIEBUNG03;[0.65;2.4];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Für $a=\frac14$ entsteht $g(x)=\frac14(x^2-1)$. Alle Ordinaten werden geviertelt; die Parabel wird dadurch breiter. Ihr Scheitelpunkt liegt bei $S_g\left(0\,\middle|\,-\frac14\right)$:

<center>

@Koordinatensystem(`xmin=-3.9;xmax=4.1;ymin=-3.8;ymax=4;width=720;id=VERSCHIEBUNG04;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VERSCHIEBUNG04;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`VERSCHIEBUNG04;f=0;x^2-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`VERSCHIEBUNG04;g=0;0.25*(x^2-1);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`VERSCHIEBUNG04;Sf=0;0;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`VERSCHIEBUNG04;[0.55;-1.4];$\Large S_f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`VERSCHIEBUNG04;Sg=0;0;-0.25;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`VERSCHIEBUNG04;[0.25;-0.6];$\Large S_g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VERSCHIEBUNG04;[2.4;2.5];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VERSCHIEBUNG04;[3.1;1.2];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Für $a=-1$ entsteht $g(x)=-(x^2-1)=-x^2+1$. Hier erfolgt ausschließlich eine Spiegelung an der Abszissenachse. Der Scheitelpunkt $S_f(0\mid-1)$ wird zum Hochpunkt $S_g(0\mid1)$:

<center>

@Koordinatensystem(`xmin=-3.9;xmax=4.1;ymin=-3.8;ymax=4;width=720;id=VERSCHIEBUNG05;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VERSCHIEBUNG05;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`VERSCHIEBUNG05;f=0;x^2-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`VERSCHIEBUNG05;g=0;-(x^2-1);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`VERSCHIEBUNG05;Sf=0;0;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`VERSCHIEBUNG05;[0.55;-1.3];$\Large S_f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`VERSCHIEBUNG05;Sg=0;0;1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`VERSCHIEBUNG05;[0.55;1.35];$\Large S_g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VERSCHIEBUNG05;[2.4;2];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VERSCHIEBUNG05;[2.4;-2];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Für $a\neq0$ bleiben die Nullstellen unverändert, denn

$$
a\cdot f(x)=0\quad\Longleftrightarrow\quad f(x)=0.
$$

In allen drei Beispielen sind das $x=-1$ und $x=1$. Für $a=0$ gilt dagegen $g(x)=0$ für jedes $x$ aus dem ursprünglichen Definitionsbereich. Dann ist jeder dieser Werte eine Nullstelle.

{{|>}} Wird das Argument mit einem reellen Parameter $c\neq0$ multipliziert, entsteht

$$
g(x)=f(cx).
$$

Um denselben Funktionswert $v=f(u)$ zu erhalten, muss nun $cx=u$ gelten. Daher wird aus $P(u\mid v)$ der Punkt

$$
P'\left(\frac uc\,\middle|\,v\right).
$$

Die Abszissen werden also durch $c$ geteilt, nicht mit $c$ multipliziert. Der Faktor für die Abstände zur Ordinatenachse ist $\frac1{|c|}$: Für $|c|>1$ wird der Graph in Abszissenrichtung gestaucht, für $0<|c|<1$ in Abszissenrichtung gestreckt. Bei $c<0$ kommt eine Spiegelung an der Ordinatenachse hinzu. Für $c=1$ bleibt der Graph unverändert; für $c=-1$ wird er ausschließlich gespiegelt.

Für die folgenden drei Abbildungen verwenden wir nun

$$
f(x)=x^2+2x-1=(x+1)^2-2.
$$

Der Scheitelpunkt liegt bei $S_f(-1\mid-2)$. Anders als $x^2-1$ ist diese Parabel nicht symmetrisch zur Ordinatenachse. Deshalb ist auch die Spiegelung an dieser Achse deutlich zu erkennen.

{{|>}} Für $c=2$ entsteht

$$
g(x)=f(2x)=(2x)^2+2(2x)-1=4x^2+4x-1.
$$

Die Abszissen werden halbiert: Der Graph wird in Abszissenrichtung mit dem Faktor $\frac12$ gestaucht. Der Scheitelpunkt liegt bei $S_g\left(-\frac12\,\middle|\,-2\right)$:

<center>

@Koordinatensystem(`xmin=-3.9;xmax=4.1;ymin=-3.8;ymax=4;width=720;id=VERSCHIEBUNG06;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VERSCHIEBUNG06;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`VERSCHIEBUNG06;f=0;x^2+2*x-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`VERSCHIEBUNG06;g=0;(2*x)^2+2*(2*x)-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`VERSCHIEBUNG06;Sf=0;-1;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`VERSCHIEBUNG06;[-1.45;-2.4];$\Large S_f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`VERSCHIEBUNG06;Sg=0;-0.5;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`VERSCHIEBUNG06;[-0.5;-2.4];$\Large S_g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VERSCHIEBUNG06;[1.9;2.5];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VERSCHIEBUNG06;[0.1;2.6];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Für $c=\frac12$ entsteht

$$
\begin{aligned}
g(x)&=f\left(\frac12x\right)
=\left(\frac12x\right)^2+2\left(\frac12x\right)-1\\
&=\frac14x^2+x-1.
\end{aligned}
$$

Die Abszissen werden verdoppelt: Der Graph wird in Abszissenrichtung mit dem Faktor $2$ gestreckt. Der Scheitelpunkt liegt nun bei $S_g(-2\mid-2)$:

<center>

@Koordinatensystem(`xmin=-3.9;xmax=4.1;ymin=-3.8;ymax=4;width=720;id=VERSCHIEBUNG07;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VERSCHIEBUNG07;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`VERSCHIEBUNG07;f=0;x^2+2*x-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`VERSCHIEBUNG07;g=0;(0.5*x)^2+2*(0.5*x)-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`VERSCHIEBUNG07;Sf=0;-1;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`VERSCHIEBUNG07;[-0.6;-2.4];$\Large S_f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`VERSCHIEBUNG07;Sg=0;-2;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`VERSCHIEBUNG07;[-2.4;-2.4];$\Large S_g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VERSCHIEBUNG07;[1.65;2.6];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VERSCHIEBUNG07;[3;2.6];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Für $c=-1$ entsteht

$$
g(x)=f(-x)=(-x)^2+2(-x)-1=x^2-2x-1.
$$

Die Spiegelung an der Ordinatenachse verändert das Vorzeichen aller Abszissen. Aus $S_f(-1\mid-2)$ wird $S_g(1\mid-2)$:

<center>

@Koordinatensystem(`xmin=-3.9;xmax=4.1;ymin=-3.8;ymax=4;width=720;id=VERSCHIEBUNG08;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VERSCHIEBUNG08;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`VERSCHIEBUNG08;f=0;x^2+2*x-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`VERSCHIEBUNG08;g=0;x^2-2*x-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`VERSCHIEBUNG08;Sf=0;-1;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`VERSCHIEBUNG08;[-1;-2.45];$\Large S_f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`VERSCHIEBUNG08;Sg=0;1;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`VERSCHIEBUNG08;[1;-2.45];$\Large S_g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VERSCHIEBUNG08;[-3.35;2.4];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VERSCHIEBUNG08;[3.35;2.4];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Falls $0$ zum Definitionsbereich von $f$ gehört, bleibt bei $g(x)=f(cx)$ der Ordinatenabschnitt unverändert, denn $g(0)=f(0)$. In diesen drei Beispielen beträgt er $-1$. Die Nullstellen werden für $c\neq0$ hingegen durch $c$ geteilt.

Der Sonderfall $c=0$ ist keine Streckung oder Stauchung mit einem von null verschiedenen Faktor: Dann gilt $g(x)=f(0)$. Ist $f(0)$ definiert, entsteht eine konstante Funktion; im Beispiel ist das $g(x)=-1$. Ist $f(0)$ nicht definiert, liefert dieser Term keine Funktionswerte.

{{|>}} Die vier Veränderungen lassen sich an einem Punkt $P(u\mid v)$ des ursprünglichen Graphen zusammenfassen:

<!-- data-type="none" data-sortable="false" -->
| Neue Funktion | Zugehöriger Punkt auf dem neuen Graphen | Wirkung |
| :--- | :--- | :--- |
| $g(x)=f(x+d)$ | $P'(u-d\mid v)$ | Verschiebung um $-d$ in Abszissenrichtung |
| $g(x)=f(x)+b$ | $P'(u\mid v+b)$ | Verschiebung um $b$ in Ordinatenrichtung |
| $g(x)=a\cdot f(x)$, $a\neq0$ | $P'(u\mid av)$ | Streckung oder Stauchung in Ordinatenrichtung; bei $a<0$ zusätzlich Spiegelung an der Abszissenachse |
| $g(x)=f(cx)$, $c\neq0$ | $P'\left(\frac uc\,\middle\vert\,v\right)$ | Streckung oder Stauchung in Abszissenrichtung mit dem Faktor $\frac1{\lvert c\rvert}$; bei $c<0$ zusätzlich Spiegelung an der Ordinatenachse |

Bei eingeschränkten Definitionsbereichen muss auch die Zulässigkeit der Argumente beachtet werden: $f(x+d)$ ist genau dann definiert, wenn $x+d$ zum Definitionsbereich von $f$ gehört; für $f(cx)$ muss entsprechend $cx$ dazugehören. Bei $f(x)+b$ und $a\cdot f(x)$ bleibt der Definitionsbereich von $f$ erhalten.

***************************
