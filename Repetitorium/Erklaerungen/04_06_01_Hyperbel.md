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













tags: Erklärung, Hyperbel, Asymptote

comment: In diesem Abschnitt werden Hyperbeln und negative Potenzen, ihre Definitions- und Wertemengen, Asymptoten sowie der Einfluss der Parameter erklärt.

author: Martin Lommatzsch

-->

# Hyperbeln

{{|>}}
***************************

Nach Geraden und Parabeln betrachten wir nun die Kehrwertfunktion

$$
f(x)=\frac1x=x^{-1}.
$$

Ihr Graph ist eine Hyperbel mit zwei Ästen. Da nicht durch null geteilt werden darf, ist die Definitionsmenge $\mathbb{D}=\mathbb{R}\setminus\{0\}$. Auch der Funktionswert kann niemals null sein; die Wertemenge ist deshalb $\mathbb{W}=\mathbb{R}\setminus\{0\}$.

Für positive Argumente sind die Funktionswerte positiv, für negative Argumente negativ. Die beiden Äste liegen im ersten und dritten Quadranten. Aus $f(-x)=-f(x)$ folgt die Punktsymmetrie zum Koordinatenursprung. Wegen $x\cdot f(x)=1$ beschreibt die Funktion außerdem eine antiproportionale Zuordnung.

{{|>}} Die Kehrwertfunktion gehört zur Familie der Potenzfunktionen mit negativen ganzzahligen Exponenten:

$$
f_n(x)=\frac1{x^n}=x^{-n},\qquad n\in\{1,2,3,\ldots\}.
$$

Für alle diese Funktionen gilt $\mathbb{D}=\mathbb{R}\setminus\{0\}$. Die folgende Abbildung zeigt die Fälle $n=1,2,3,4$. Nur $f_1$ beschreibt hier eine Hyperbel im engeren geometrischen Sinn; die anderen Graphen werden auch Hyperbeln höherer Ordnung genannt.

<center>

@Koordinatensystem(`xmin=-4.8;xmax=5.1;ymin=-4.8;ymax=4.8;width=780;id=HYPERBEL01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=HYPERBEL01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`HYPERBEL01;f1=0;1/x^1;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`HYPERBEL01;f2=0;1/x^2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`HYPERBEL01;f3=0;1/x^3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`HYPERBEL01;f4=0;1/x^4;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);linestyle=solid`)
@Punkt(`HYPERBEL01;P=0;1;1;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`HYPERBEL01;[1.75;0.83];$\Large P(1\mid1)$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`HYPERBEL01;[3;3.8];$\Large f_1(x)=\frac1x$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`HYPERBEL01;[3;3];$\Large f_2(x)=\frac1{x^2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`HYPERBEL01;[3;2.2];$\Large f_3(x)=\frac1{x^3}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`HYPERBEL01;[3;1.4];$\Large f_4(x)=\frac1{x^4}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)

</center>

Alle vier Graphen verlaufen durch den mit einem Kreuz markierten Punkt $P(1\mid1)$, denn $1^{-n}=1$. Die Farben der Funktionsgleichungen kennzeichnen die zugehörigen Graphen.

Für gerade $n$ gilt $f_n(-x)=f_n(x)$. Der Graph ist achsensymmetrisch zur Ordinatenachse und liegt im ersten und zweiten Quadranten. Seine Wertemenge ist $(0;\infty)$.

Für ungerade $n$ gilt dagegen $f_n(-x)=-f_n(x)$. Der Graph liegt im ersten und dritten Quadranten und ist punktsymmetrisch zum Koordinatenursprung. Seine Wertemenge ist $\mathbb{R}\setminus\{0\}$.

{{|>}} Nähert sich $x$ von der positiven Seite der null, wachsen die Werte aller $f_n$ unbegrenzt. Von der negativen Seite hängt das Verhalten dagegen davon ab, ob $n$ gerade oder ungerade ist:

<!-- data-type="none" data-sortable="false" -->
| Annäherung an $0$ | $n$ gerade | $n$ ungerade |
| :--- | :---: | :---: |
| Von der positiven Seite | $f_n(x)\to+\infty$ | $f_n(x)\to+\infty$ |
| Von der negativen Seite | $f_n(x)\to+\infty$ | $f_n(x)\to-\infty$ |

Die Stelle $x=0$ heißt Polstelle. Bei geradem $n$ liegt dort kein Vorzeichenwechsel vor, bei ungeradem $n$ dagegen schon. Die Gerade $x=0$, also die Ordinatenachse, ist eine Asymptote: Der Abstand des jeweiligen Astes zu dieser Geraden wird bei der Annäherung an die Polstelle beliebig klein, während die Funktionswerte betragsmäßig unbegrenzt wachsen.

Wird $|x|$ immer größer, nähern sich alle Funktionswerte der null. Die Gerade $y=0$, also die Abszissenachse, ist die zweite Asymptote. Sie wird von keinem der Graphen geschnitten. Eine Asymptote ist allgemein eine Gerade, der sich ein Graph in einem bestimmten Grenzverhalten annähert; bei anderen Funktionen kann ein Graph seine Asymptote durchaus schneiden.

Für festes $x$ mit $0<|x|<1$ wächst der Betrag $\frac1{|x|^n}$ mit $n$. Für $|x|>1$ wird er dagegen kleiner. Bei $|x|=1$ ist der Betrag immer $1$. So lässt sich der unterschiedliche Verlauf in der Abbildung erklären. Die Graphen enden nicht am Rand des dargestellten Ausschnitts.

{{|>}} Als Ergänzung betrachten wir die Umkehrfunktionen dieser Potenzfunktionen. Die allgemeinen Grundlagen stehen in der Erklärung [Umkehrfunktionen](04_05_08_Umkehrfunktion.md). Die Kehrwertfunktion ist ihre eigene Umkehrfunktion, denn

$$
y=\frac1x
\quad\Longleftrightarrow\quad
x=\frac1y,\qquad x,y\neq0.
$$

Beim Spiegeln ihres Graphen an der Geraden $y=x$ bleibt er unverändert.

Für ungerade $n$ ist $f_n(x)=\frac1{x^n}$ auf $\mathbb{R}\setminus\{0\}$ eindeutig umkehrbar. Aus $y=\frac1{x^n}$ folgt $x^n=\frac1y$ und damit

$$
f_n^{-1}(x)=\frac1{\sqrt[n]{x}},
\qquad x\in\mathbb{R}\setminus\{0\},
\qquad n\text{ ungerade}.
$$

Dabei bezeichnet $\sqrt[n]{x}$ für ungerades $n$ auch bei negativem $x$ die reelle Wurzel. Zum Beispiel gilt für $f_3(x)=\frac1{x^3}$ die Beziehung $f_3(2)=\frac18$ und umgekehrt $f_3^{-1}\left(\frac18\right)=2$.

{{|>}} Für gerade $n$ ist $f_n$ auf der gesamten Definitionsmenge nicht eindeutig umkehrbar, denn $f_n(x)=f_n(-x)$. Beispielsweise liefern $x=2$ und $x=-2$ bei $f_2(x)=\frac1{x^2}$ beide den Wert $\frac14$.

Beschränkt man die Funktion auf positive Argumente, entsteht der positive Ast $f_{n,+}$. Beschränkt man sie auf negative Argumente, entsteht der negative Ast $f_{n,-}$. Beide sind einzeln umkehrbar:

$$
\begin{aligned}
f_{n,+}^{-1}(x)&=\frac1{\sqrt[n]{x}}, &&x>0,\\
f_{n,-}^{-1}(x)&=-\frac1{\sqrt[n]{x}}, &&x>0,
\end{aligned}
\qquad n\text{ gerade}.
$$

Die Umkehrfunktion des positiven Astes hat die Wertemenge $(0;\infty)$, die des negativen Astes $(-\infty;0)$. Das Vorzeichen ist durch den gewählten Ast festgelegt; ein unentschiedenes $\pm$ würde keine eindeutige Funktion beschreiben.

Die nächste Abbildung zeigt nur positive Argumente und Funktionswerte: blau den positiven Ast von $f(x)=\frac1{x^2}$ und rot seine Umkehrfunktion $f^{-1}(x)=\frac1{\sqrt{x}}$. Die gestrichelte Gerade $y=x$ ist die Spiegelachse. Die Punkte $P\left(2\,\middle|\,\frac14\right)$ und $P'\left(\frac14\,\middle|\,2\right)$ verdeutlichen das Vertauschen der Koordinaten:

<center>

@Koordinatensystem(`xmin=-0.5;xmax=5.1;ymin=-0.5;ymax=4.8;width=780;id=HYPERBEL02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=HYPERBEL02;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`HYPERBEL02;f=0;1/(sqrt(x)^4);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`HYPERBEL02;g=0;1/sqrt(x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`HYPERBEL02;s=0;x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));linestyle=dashed`)
@Punkt(`HYPERBEL02;P=0;2;0.25;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`HYPERBEL02;[2.55;0.42];$\Large P$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`HYPERBEL02;Q=0;0.25;2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`HYPERBEL02;[0.4;2.6];$\Large P'$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`HYPERBEL02;[1.15;3.75];$\Large f(x)=\frac1{x^2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`HYPERBEL02;[3.7;0.85];$\Large f^{-1}(x)=\frac1{\sqrt{x}}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`HYPERBEL02;[3.1;3.5];$\Large y=x$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Wie bei anderen Funktionen beeinflussen Parameter die Lage und den Verlauf einer Hyperbel. Für die verschobene und gestreckte Kehrwertfunktion schreiben wir

$$
h(x)=\frac a{x+b}+c,\qquad a\neq0.
$$

Der Definitionsbereich ist $\mathbb{R}\setminus\{-b\}$, der Wertebereich $\mathbb{R}\setminus\{c\}$. Die Asymptoten sind die Geraden $x=-b$ und $y=c$.

Der Parameter $c$ verschiebt den Graphen in Ordinatenrichtung. Für $c>0$ erfolgt die Verschiebung in positive, für $c<0$ in negative Ordinatenrichtung. Die folgenden beiden Beispiele zeigen

$$
g_1(x)=\frac1x+3
\qquad\text{und}\qquad
g_2(x)=\frac1x-2.
$$

<center>

@Koordinatensystem(`xmin=-4.8;xmax=5.1;ymin=-4.8;ymax=4.8;width=780;id=HYPERBEL03;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=HYPERBEL03;xlabel=$\Large x$;ylabel=$\Large y$`)

@Strecke(`HYPERBEL03;[[-4.2;3];[4.3;3]];rgb(var(--color-text,51,51,51));;-;2px;linestyle=dashed`)
@KoordText(`HYPERBEL03;[-3.2;3.35];$\Large y=3$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`HYPERBEL03;[[-4.2;-2];[4.3;-2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=dashed`)
@KoordText(`HYPERBEL03;[3.3;-2.4];$\Large y=-2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@PlotFunktion(`HYPERBEL03;g1=0;1/x+3;rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`HYPERBEL03;g2=0;1/x-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`HYPERBEL03;N1=0;-0.3333333333333333;0;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`HYPERBEL03;[-1.15;0.38];$\Large N_1$;rgb(var(--color-text,51,51,51));1`)
@Punkt(`HYPERBEL03;N2=0;0.5;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`HYPERBEL03;[1.05;0.38];$\Large N_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`HYPERBEL03;[2.8;4.15];$\Large g_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`HYPERBEL03;[2.8;-1.25];$\Large g_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Die zur Abszissenachse parallelen Asymptoten liegen nun bei $y=3$ beziehungsweise $y=-2$. Die Nullstellen sind $x=-\frac13$ beziehungsweise $x=\frac12$; ihre Schnittpunkte mit der Abszissenachse sind markiert.

Für $h(x)=\frac a{x+b}+c$ ergibt sich bei $c\neq0$ genau eine Nullstelle:

$$
\frac a{x+b}+c=0
\quad\Longleftrightarrow\quad
x=-b-\frac ac.
$$

Für $c=0$ besitzt diese Funktion bei $a\neq0$ keine Nullstelle.

{{|>}} Der Parameter $a$ multipliziert alle Funktionswerte von $\frac1{x+b}$ vor der Verschiebung um $c$. Sein Betrag bestimmt die Streckung oder Stauchung in Ordinatenrichtung; ein negatives $a$ spiegelt diesen Graphen zusätzlich an der Abszissenachse. Anschließend wird um $c$ verschoben.

Für $b=c=0$ liegen die Äste bei $a>0$ im ersten und dritten, bei $a<0$ im zweiten und vierten Quadranten. Die Beispiele lauten

$$
g_3(x)=\frac4x
\qquad\text{und}\qquad
g_4(x)=-\frac2x.
$$

<center>

@Koordinatensystem(`xmin=-4.8;xmax=5.1;ymin=-4.8;ymax=4.8;width=780;id=HYPERBEL04;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=HYPERBEL04;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`HYPERBEL04;g3=0;4/x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`HYPERBEL04;g4=0;-2/x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);linestyle=solid`)
@Punkt(`HYPERBEL04;P4=0;1;4;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`HYPERBEL04;[1.9;4.1];$\Large (1\mid4)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`HYPERBEL04;Pm2=0;1;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1;fix`)
@KoordText(`HYPERBEL04;[1.85;-2.25];$\Large (1\mid-2)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`HYPERBEL04;[3;1.85];$\Large g_3$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`HYPERBEL04;[3;-1.1];$\Large g_4$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)

</center>

Bei $g_3$ werden die Ordinaten der Kehrwertfunktion vervierfacht. Bei $g_4$ werden sie zunächst verdoppelt und anschließend wird der Graph an der Abszissenachse gespiegelt. Beide Funktionen haben weiterhin die Koordinatenachsen als Asymptoten und keine Nullstelle.

Für die ganze Familie $\frac a{x^n}$ mit festem $a$ gilt bei $x=1$ der Wert $a$. Ihr gemeinsamer Punkt ist also $P(1\mid a)$, nicht allgemein $P(\sqrt a\mid\sqrt a)$. Für $a>0$ sind $(\sqrt a\mid\sqrt a)$ und $(-\sqrt a\mid-\sqrt a)$ stattdessen die Schnittpunkte von $y=\frac ax$ mit $y=x$.

{{|>}} Der Parameter $b$ in $h(x)=\frac a{x+b}+c$ verschiebt den Graphen um $-b$ in Abszissenrichtung. Das Pluszeichen im Nenner bedeutet für $b>0$ eine Verschiebung in negative Abszissenrichtung. Die beiden Beispiele sind

$$
g_5(x)=\frac1{x+3}
\qquad\text{und}\qquad
g_6(x)=\frac1{x-1}.
$$

<center>

@Koordinatensystem(`xmin=-4.8;xmax=5.1;ymin=-4.8;ymax=4.8;width=780;id=HYPERBEL05;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=HYPERBEL05;xlabel=$\Large x$;ylabel=$\Large y$`)

@Strecke(`HYPERBEL05;[[-3;-4.2];[-3;4.3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px;linestyle=dashed`)
@KoordText(`HYPERBEL05;[-3.55;3.5];$\Large x=-3$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@Strecke(`HYPERBEL05;[[1;-4.2];[1;4.3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b07850);;-;2px;linestyle=dashed`)
@KoordText(`HYPERBEL05;[1.8;3.7];$\Large x=1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b07850);1`)
@PlotFunktion(`HYPERBEL05;g5=0;1/(x+3);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);linestyle=solid`)
@PlotFunktion(`HYPERBEL05;g6=0;1/(x-1);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b07850);linestyle=solid`)
@KoordText(`HYPERBEL05;[-1.7;1.15];$\Large g_5$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`HYPERBEL05;[2.9;1.2];$\Large g_6$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b07850);1`)

</center>

Bei $g_5$ liegt die Polstelle bei $x=-3$, bei $g_6$ bei $x=1$. Die entsprechenden Asymptoten sind gestrichelt markiert. In beiden Fällen bleibt die Abszissenachse die andere Asymptote; die Graphen besitzen keine Nullstelle.

{{|>}} Auch die verschobene Hyperbelfunktion lässt sich umkehren. Das Auflösen nach $x$ liefert

$$
\begin{aligned}
y&=\frac a{x+b}+c\\
y-c&=\frac a{x+b}\\
x+b&=\frac a{y-c}\\
x&=\frac a{y-c}-b.
\end{aligned}
$$

Damit gilt

$$
h^{-1}(x)=\frac a{x-c}-b,\qquad x\neq c.
$$

Definitionsmenge und Wertemenge sind nun $\mathbb{R}\setminus\{c\}$ beziehungsweise $\mathbb{R}\setminus\{-b\}$. Auch dieser Graph ist eine Hyperbel.

{{|>}} Bei höheren Potenzen muss die Position des Parameters im Nenner genau beachtet werden. Die im Ausgangsansatz betrachtete Familie

$$
F_{a,b,c,n}(x)=\frac a{x^n+b}+c,\qquad
a\neq0,\quad n\in\{1,2,3,\ldots\},
$$

ist für $n>1$ im Allgemeinen keine einfache Verschiebung von $\frac a{x^n}$. Eine Verschiebung um $-b$ in Abszissenrichtung erhält man stattdessen durch

$$
\frac a{(x+b)^n}+c.
$$

Zum Beispiel ist $\frac1{x^2+1}$ für alle reellen $x$ definiert und besitzt keine reelle Polstelle. Dagegen hat $\frac1{(x+1)^2}$ die Polstelle $x=-1$.

Bei $F_{a,b,c,n}$ sind genau diejenigen Argumente ausgeschlossen, für die $x^n+b=0$ gilt. Für ungerades $n$ gibt es eine solche Stelle; für gerades $n$ gibt es bei $b<0$ zwei, bei $b=0$ eine und bei $b>0$ keine. Für $|x|\to\infty$ bleibt $y=c$ die zur Abszissenachse parallele Asymptote. Die zuvor bestimmten Verschiebungen und Nullstellen von $h$ beziehen sich ausdrücklich auf den Fall $n=1$.

***************************
