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













tags: Erklärung, Tangentengleichung

comment: In diesem Abschnitt werden Tangentengleichungen aus der Ableitung und der Taylorentwicklung hergeleitet sowie Tangenten an Wende- und Sattelpunkten erklärt.

author: Martin Lommatzsch

-->

# Tangentengleichungen

{{|>}}
***************************

Oft interessiert die momentane Steigung eines Funktionsgraphen an einer bestimmten Stelle $x=a$. Ist $f$ dort differenzierbar, ist diese Steigung gleich dem Ableitungswert $f'(a)$. Sie beschreibt das lokale Änderungsverhalten und ist zugleich die Steigung der Tangente im Punkt $B(a \mid f(a))$.

{{|>}} Die Tangente ist die Gerade durch $B$ mit der Steigung $f'(a)$. Ihre Gleichung lautet:

$$
t_a(x)=f'(a)(x-a)+f(a).
$$

Dabei bleibt die Berührstelle $a$ fest, während $x$ die Variable der Tangentengleichung ist. Der Index $a$ kennzeichnet, an welcher Stelle die Tangente angelegt wird. Setzt man $x=a$ ein, erhält man $t_a(a)=f(a)$: Tangente und Funktionsgraph gehen durch denselben Punkt. Außerdem gilt $t_a'(x)=f'(a)$, die Steigung der Tangente ist also konstant.

{{|>}} Dieselbe Gleichung ergibt sich aus der [Taylorentwicklung](05_01_05_Taylor.md). Das Taylorpolynom erster Ordnung besteht aus den Summanden für $n=0$ und $n=1$:

$$
\begin{aligned}
T_1(x;a)
&=\sum_{n=0}^{1}\frac{f^{(n)}(a)}{n!}(x-a)^n\\
&=\frac{f(a)}{0!}(x-a)^0
+\frac{f'(a)}{1!}(x-a)^1\\
&=f(a)+f'(a)(x-a)=t_a(x).
\end{aligned}
$$

Ist $f$ in einer Umgebung von $a$ zweimal stetig differenzierbar, kann das Restglied folgendermaßen angegeben werden:

$$
f(x)=f(a)+f'(a)(x-a)
+\mathcal{O}\!\left((x-a)^2\right),
\qquad x\to a.
$$

Das Restglied bezieht sich auf den Abstand $x-a$ zur Entwicklungsstelle. Nur für $a=0$ vereinfacht es sich zu $\mathcal{O}(x^2)$. Wird das Restglied weggelassen, erhält man die lokale Näherung $f(x)\approx t_a(x)$, nicht im Allgemeinen eine exakte Gleichheit mit $f$.

Für die Tangentengleichung selbst genügt bereits, dass $f'(a)$ existiert. Eine unendliche Taylorreihe oder eine zweite Ableitung ist dafür nicht erforderlich.

{{|>}} Durch Ausmultiplizieren erhält man die übliche [Geradengleichung](04_03_01_Geraden.md) mit Steigung $m$ und Ordinatenabschnitt $b$:

$$
\begin{aligned}
t_a(x)&=f'(a)x+\bigl(f(a)-a f'(a)\bigr),\\
m&=f'(a),\\
b&=f(a)-a f'(a).
\end{aligned}
$$

Zum Bestimmen einer Tangente werden also zuerst $f(a)$ und $f'(a)$ berechnet und anschließend in die Tangentengleichung eingesetzt.

{{|>}} Beispielsweise hat die Funktion $f(x)=x^2$ an der Stelle $a=1$ den Funktionswert $f(1)=1$ und die Steigung $f'(1)=2$:

$$
\begin{aligned}
f'(x)&=2x,\\
t_1(x)&=2(x-1)+1=2x-1.
\end{aligned}
$$

Der blaue Graph und die rote, gestrichelte Tangente haben im Punkt $B(1 \mid 1)$ denselben Funktionswert und dieselbe Steigung.

<center>

@Koordinatensystem(`xmin=-2.6;xmax=3.6;ymin=-1.6;ymax=4.6;width=680;id=TANGENTENGL01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=TANGENTENGL01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`TANGENTENGL01;f=0;x^2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`TANGENTENGL01;t_1=0;2*x-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=dashed`)
@Punkt(`TANGENTENGL01;B=0;1;1;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`TANGENTENGL01;[1.35;0.65];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TANGENTENGL01;[-1.5;3.6];$\Large f(x)=x^2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`TANGENTENGL01;[2.7;3.4];$\Large t_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

In der Nähe von $a=1$ kann die Tangente zur Näherung verwendet werden. Zum Beispiel liefert sie $t_1(1{,}1)=1{,}2$, während der tatsächliche Funktionswert $f(1{,}1)=1{,}21$ ist. Der Fehler beträgt hier $0{,}01=(1{,}1-1)^2$.

{{|>}} Eine Tangente an einen Funktionsgraphen muss nicht überall auf derselben Seite des Graphen liegen. Anders als bei der Tangente an einen Kreis wird sie in der Analysis nicht durch „genau einen gemeinsamen Punkt“ bestimmt, sondern durch den gemeinsamen Punkt und die gleiche Steigung. Weitere Schnittpunkte mit dem Graphen sind möglich.

An einem Wendepunkt wechselt die Krümmung des Graphen. Dort kann der Graph seine Tangente kreuzen. Beispielsweise besitzt $h(x)=x^3+x$ im Wendepunkt $(0 \mid 0)$ die Tangente $t_0(x)=x$, denn $h'(0)=1$. Die Differenz $h(x)-t_0(x)=x^3$ wechselt bei null das Vorzeichen; die Wendetangente ist hier nicht waagerecht.

{{|>}} Ein Sattelpunkt ist dagegen ein Wendepunkt mit waagerechter Tangente. An seiner Stelle $a$ gilt zusätzlich $f'(a)=0$, sodass die Tangentengleichung zu einer konstanten Funktion wird:

$$
t_a(x)=0\cdot(x-a)+f(a)=f(a).
$$

Ein Beispiel ist $g(x)=x^3+1$ mit dem Sattelpunkt $S(0 \mid 1)$:

$$
\begin{aligned}
g'(x)&=3x^2, & g'(0)&=0,\\
g''(x)&=6x, & g(0)&=1,\\
t_0(x)&=1.
\end{aligned}
$$

Die zweite Ableitung wechselt bei null ihr Vorzeichen. Auch $g(x)-t_0(x)=x^3$ wechselt dort das Vorzeichen: Der Graph kreuzt seine waagerechte Tangente im Sattelpunkt.

<center>

@Koordinatensystem(`xmin=-3;xmax=3;ymin=-2;ymax=4;width=680;id=TANGENTENGL02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=TANGENTENGL02;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`TANGENTENGL02;g=0;x^3+1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`TANGENTENGL02;t_0=0;1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=dashed`)
@Punkt(`TANGENTENGL02;S=0;0;1;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`TANGENTENGL02;[0.35;0.65];$\Large S$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TANGENTENGL02;[-1.85;-0.8];$\Large g(x)=x^3+1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`TANGENTENGL02;[2.1;1.35];$\Large t_0(x)=1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Eine waagerechte Tangente allein genügt nicht für einen Sattelpunkt: Die Parabel $f(x)=x^2$ hat bei $a=0$ ebenfalls die Tangente $t_0(x)=0$, dort aber einen Tiefpunkt und keinen Wendepunkt.

***************************
