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













tags: Erklärung, Binomialverteilung, Erwartungswert, Varianz, Standardabweichung

comment: In diesem Abschnitt werden die Binomialverteilung, Erwartungswert, Varianz, Standardabweichung und kumulierte Wahrscheinlichkeiten erklärt.

author: Martin Lommatzsch

-->

# Binomialverteilung

{{|>}}
***************************

Die Binomialverteilung knüpft an das [Ziehen mit Zurücklegen](06_02_01_Baumdiagramme.md) an. Ein Zufallsversuch wird $n$-mal unabhängig unter gleichen Bedingungen durchgeführt. Bei jedem Versuch werden nur das Eintreten eines Ereignisses $E$ und das Eintreten seines Gegenereignisses $\bar E$ unterschieden. Die Wahrscheinlichkeit $p$ für $E$ bleibt bei jeder Wiederholung gleich:

$$
P(E)=p,\qquad P(\bar E)=1-p.
$$

Ein solcher Einzelversuch heißt Bernoulli-Experiment; die Folge der $n$ unabhängigen Versuche heißt Bernoulli-Kette. Die Zufallsgröße $X$ zählt, wie oft $E$ eintritt. Deshalb sind nur die ganzzahligen Werte $k=0,1,\dots,n$ möglich. Dabei sei $n\ge1$ und $0\le p\le1$.

Die folgende Abbildung zeigt die Wahrscheinlichkeiten für $n=25$ und $p=40\%$. Auf der Abszissenachse steht die Trefferzahl $k$, auf der Ordinatenachse die zugehörige Wahrscheinlichkeit in Prozent. Die Säulen stehen jeweils mittig über ihrer Trefferzahl.

<center>

@Koordinatensystem(`xmin=-2.5;xmax=27;ymin=-1.8;ymax=19.8;width=760;id=BINOMIAL01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=BINOMIAL01;xlabel=$\Large k$;ylabel=$\Large \%$`)
@Flaeche(`BINOMIAL01;[[-0.4;0];[0.4;0];[0.4;0.000284302880299];[-0.4;0.000284302880299]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[0.6;0];[1.4;0];[1.4;0.00473838133832];[0.6;0.00473838133832]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[1.6;0];[2.4;0];[2.4;0.0379070507066];[1.6;0.0379070507066]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[2.6;0];[3.4;0];[3.4;0.193747148056];[2.6;0.193747148056]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[3.6;0];[4.4;0];[4.4;0.710406209538];[3.6;0.710406209538]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[4.6;0];[5.4;0];[5.4;1.98913738671];[4.6;1.98913738671]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[5.6;0];[6.4;0];[6.4;4.42030530379];[5.6;4.42030530379]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[6.6;0];[7.4;0];[7.4;7.99864769258];[6.6;7.99864769258]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[7.6;0];[8.4;0];[8.4;11.9979715389];[7.6;11.9979715389]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[8.6;0];[9.4;0];[9.4;15.1085567526];[8.6;15.1085567526]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[9.6;0];[10.4;0];[10.4;16.1157938695];[9.6;16.1157938695]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[10.6;0];[11.4;0];[11.4;14.6507216995];[10.6;14.6507216995]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[11.6;0];[12.4;0];[12.4;11.3950057663];[11.6;11.3950057663]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[12.6;0];[13.4;0];[13.4;7.59667051087];[12.6;7.59667051087]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[13.6;0];[14.4;0];[14.4;4.34095457764];[13.6;4.34095457764]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[14.6;0];[15.4;0];[15.4;2.12224446018];[14.6;2.12224446018]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[15.6;0];[16.4;0];[16.4;0.884268525075];[15.6;0.884268525075]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[16.6;0];[17.4;0];[17.4;0.312094773556];[16.6;0.312094773556]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[17.6;0];[18.4;0];[18.4;0.092472525498];[17.6;0.092472525498]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[18.6;0];[19.4;0];[19.4;0.0227125501223];[18.6;0.0227125501223]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[19.6;0];[20.4;0];[20.4;0.00454251002446];[19.6;0.00454251002446]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[20.6;0];[21.4;0];[21.4;0.000721033337216];[20.6;0.000721033337216]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[21.6;0];[22.4;0];[22.4;0.0000873979802687];[21.6;0.0000873979802687]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[22.6;0];[23.4;0];[23.4;0.00000759982437119];[22.6;0.00000759982437119]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[23.6;0];[24.4;0];[24.4;4.22212465066e-7];[23.6;4.22212465066e-7]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL01;[[24.6;0];[25.4;0];[25.4;1.12589990684e-8];[24.6;1.12589990684e-8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@KoordText(`BINOMIAL01;[14;18.7];$\Large n=25,\ p=40\%$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Ein bestimmter Pfad im Baumdiagramm mit $k$ Treffern und $n-k$ Nichttreffern besitzt die Wahrscheinlichkeit $p^k(1-p)^{n-k}$. Der [Binomialkoeffizient](06_01_02_Kombinatorik.md) zählt, auf wie viele verschiedene Pfade sich die $k$ Treffer verteilen können. Diese Pfade schließen sich gegenseitig aus, sodass ihre Wahrscheinlichkeiten addiert werden:

$$
\begin{aligned}
B_{n,p}(k):=P(X=k)
&=\binom nk [P(E)]^k[P(\bar E)]^{n-k}\\
&=\binom nk p^k(1-p)^{n-k},\\
\binom nk&=\frac{n!}{k!(n-k)!}.
\end{aligned}
$$

Die Verteilung wird kurz als $X\sim B(n,p)$ geschrieben. Da $X$ diskret ist, heißt $B_{n,p}$ Wahrscheinlichkeitsfunktion, nicht Wahrscheinlichkeitsdichte. Sie liefert die Wahrscheinlichkeit für genau $k$ Treffer, unabhängig von deren Reihenfolge. Für $p=0$ ist $X=0$ sicher, für $p=1$ ist $X=n$ sicher; die übrigen Wahrscheinlichkeiten sind dann null.

{{|>}} Die Wahrscheinlichkeiten aller möglichen Trefferzahlen müssen sich zu $1=100\%$ addieren. Dies folgt aus dem binomischen Lehrsatz:

$$
(u+v)^n=\sum_{k=0}^{n}\binom nk u^k v^{n-k}.
$$

Mit $u=p$ und $v=1-p$ ergibt sich:

$$
\begin{aligned}
\sum_{k=0}^{n}P(X=k)
&=\sum_{k=0}^{n}\binom nk p^k(1-p)^{n-k}\\
&=(p+1-p)^n=1=100\%.
\end{aligned}
$$

{{|>}} Der Erwartungswert $\mu=E(X)$ ist das mit den Wahrscheinlichkeiten gewichtete Mittel der möglichen Werte. Bei sehr vielen unabhängigen Wiederholungen der gesamten Bernoulli-Kette nähert sich die durchschnittliche Trefferzahl diesem Wert an. Der Erwartungswert ist nicht mit dem häufigsten Wert, dem Modalwert, gleichzusetzen und muss auch keine ganze Zahl sein.

Zur Herleitung wird jede Trefferzahl $k$ mit ihrer Wahrscheinlichkeit multipliziert. Für $0<p<1$ gilt:

$$
\begin{aligned}
\mu
&=\sum_{k=0}^{n}kP(X=k)\\
&=\sum_{k=0}^{n}k\binom nk p^k(1-p)^{n-k}\\
&=\sum_{k=1}^{n}k\frac{n!}{k!(n-k)!}p^k(1-p)^{n-k}\\
&=np\sum_{k=1}^{n}k\frac{(n-1)!}{k!(n-k)!}p^{k-1}(1-p)^{n-k}\\
&=np\sum_{k=1}^{n}\frac{(n-1)!}{(k-1)!(n-k)!}p^{k-1}(1-p)^{n-k}\\
&=np\sum_{k=1}^{n}\binom{n-1}{k-1}p^{k-1}(1-p)^{(n-1)-(k-1)}.
\end{aligned}
$$

Der Summand zu $k=0$ ist null und wurde vor dem Kürzen von $k$ entfernt. Mit $l=k-1$ läuft der neue Summationsindex von $0$ bis $n-1$. Wird zusätzlich $m=n-1$ gesetzt, kann erneut der binomische Lehrsatz verwendet werden:

$$
\begin{aligned}
\mu
&=np\sum_{l=0}^{n-1}\binom{n-1}{l}p^l(1-p)^{(n-1)-l}\\
&=np\sum_{l=0}^{m}\binom ml p^l(1-p)^{m-l}\\
&=np\bigl(p+(1-p)\bigr)^m\\
&=np.
\end{aligned}
$$

Auch für $p=0$ und $p=1$ gilt $\mu=np$, wie unmittelbar an den sicheren Trefferzahlen zu erkennen ist. Für das Beispiel mit $n=25$ und $p=0{,}4$ erhält man:

$$
\mu=25\cdot0{,}4=10.
$$

{{|>}} Der Erwartungswert allein beschreibt noch nicht, wie stark die möglichen Ergebnisse um ihn streuen. Die Varianz misst die mittlere quadratische Abweichung vom Erwartungswert; sie ist das Quadrat der Standardabweichung $\sigma$.

Dies lässt sich an drei allgemeinen diskreten Zufallsgrößen $X$, $Y$ und $Z$ verdeutlichen. Diese Vergleichsbeispiele sind nicht binomialverteilt: $X$ nimmt die Werte $1$ bis $6$ jeweils mit der Wahrscheinlichkeit $\frac16$ an; $Y$ nimmt nur $3$ oder $4$ und $Z$ nur $1$ oder $6$ an, jeweils mit der Wahrscheinlichkeit $\frac12$. Alle drei Diagramme sind gleich skaliert. Eine Einheit der Ordinatenachse entspricht hier $10\%$; die Höhe $5$ bedeutet also $50\%$. Die rote Linie markiert jeweils den Erwartungswert.

<section class="dynFlex">

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-1;xmax=7.5;ymin=-1.1;ymax=6.8;width=380;id=BINOMIAL02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=BINOMIAL02;xlabel=$\Large k$;ylabel=$\Large \scriptstyle10\%$`)
@KoordText(`BINOMIAL02;[5.8;6.2];$\Large X$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`BINOMIAL02;[[0.6;0];[1.4;0];[1.4;1.66666666667];[0.6;1.66666666667]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL02;[[1.6;0];[2.4;0];[2.4;1.66666666667];[1.6;1.66666666667]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL02;[[2.6;0];[3.4;0];[3.4;1.66666666667];[2.6;1.66666666667]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL02;[[3.6;0];[4.4;0];[4.4;1.66666666667];[3.6;1.66666666667]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL02;[[4.6;0];[5.4;0];[5.4;1.66666666667];[4.6;1.66666666667]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL02;[[5.6;0];[6.4;0];[6.4;1.66666666667];[5.6;1.66666666667]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Strecke(`BINOMIAL02;[[3.5;0];[3.5;5.3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);name=0;linestyle=dashed`)
@KoordText(`BINOMIAL02;[3.5;5.6];$\Large \mu=3{,}5$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

</div>

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-1;xmax=7.5;ymin=-1.1;ymax=6.8;width=380;id=BINOMIAL03;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=BINOMIAL03;xlabel=$\Large k$;ylabel=$\Large \scriptstyle10\%$`)
@KoordText(`BINOMIAL03;[5.8;6.2];$\Large Y$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`BINOMIAL03;[[2.6;0];[3.4;0];[3.4;5];[2.6;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL03;[[3.6;0];[4.4;0];[4.4;5];[3.6;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Strecke(`BINOMIAL03;[[3.5;0];[3.5;5.3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);name=0;linestyle=dashed`)
@KoordText(`BINOMIAL03;[3.5;5.6];$\Large \mu=3{,}5$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

</div>

<div class="flex-child">

<center>

@Koordinatensystem(`xmin=-1;xmax=7.5;ymin=-1.1;ymax=6.8;width=380;id=BINOMIAL04;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=BINOMIAL04;xlabel=$\Large k$;ylabel=$\Large \scriptstyle10\%$`)
@KoordText(`BINOMIAL04;[5.8;6.2];$\Large Z$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`BINOMIAL04;[[0.6;0];[1.4;0];[1.4;5];[0.6;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL04;[[5.6;0];[6.4;0];[6.4;5];[5.6;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Strecke(`BINOMIAL04;[[3.5;0];[3.5;5.3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);name=0;linestyle=dashed`)
@KoordText(`BINOMIAL04;[3.5;5.6];$\Large \mu=3{,}5$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

</div>

</section>

$$
\begin{aligned}
E(X)&=\frac16(1+2+3+4+5+6)=3{,}5,\\
E(Y)&=\frac12\cdot3+\frac12\cdot4=3{,}5,\\
E(Z)&=\frac12\cdot1+\frac12\cdot6=3{,}5.
\end{aligned}
$$

Obwohl alle drei Zufallsgrößen denselben Erwartungswert besitzen, liegen die möglichen Werte von $Y$ am nächsten und die von $Z$ am weitesten davon entfernt. Entsprechend besitzt $Y$ die kleinste und $Z$ die größte Streuung. Der Erwartungswert $3{,}5$ ist hier bei keiner der drei Zufallsgrößen selbst ein möglicher Wert.

{{|>}} Für eine diskrete Zufallsgröße $X$ mit möglichen Werten $x_i$ und endlichem zweiten Moment ist die Varianz definiert durch:

$$
\begin{aligned}
\operatorname{Var}(X)
&=E\bigl((X-\mu)^2\bigr)\\
&=\sum_i(x_i-\mu)^2P(X=x_i),
\qquad \mu=E(X).
\end{aligned}
$$

Sie ist keine Wahrscheinlichkeit, sondern ein Streuungsmaß. Mit der Linearität des Erwartungswertes und der Tatsache, dass $E(X)$ eine Konstante ist, ergibt sich der Satz von König-Huygens:

$$
\begin{aligned}
E\bigl((X-E(X))^2\bigr)
&=E\bigl(X^2-2XE(X)+(E(X))^2\bigr)\\
&=E(X^2)-E\bigl(2XE(X)\bigr)+E\bigl((E(X))^2\bigr)\\
&=E(X^2)-2E(X)E(X)+(E(X))^2\\
&=E(X^2)-(E(X))^2.
\end{aligned}
$$

{{|>}} Für eine binomialverteilte Zufallsgröße $X\sim B(n,p)$ gilt zusätzlich $E(X(X-1))=n(n-1)p^2$: Das Produkt $X(X-1)$ zählt die geordneten Paare verschiedener Treffer. Für jedes der $n(n-1)$ möglichen Versuchspaare treten wegen der Unabhängigkeit beide Treffer mit der Wahrscheinlichkeit $p^2$ ein. Damit folgt:

$$
\begin{aligned}
E(X^2)&=E(X(X-1))+E(X)\\
&=n(n-1)p^2+np,\\
\operatorname{Var}(X)
&=E(X^2)-(E(X))^2\\
&=n(n-1)p^2+np-n^2p^2\\
&=np(1-p).
\end{aligned}
$$

{{|>}} Die Standardabweichung ist die nichtnegative Quadratwurzel der Varianz. Sie beschreibt die Streuung in derselben Einheit wie die Zufallsgröße selbst. Bei einer Binomialverteilung gilt:

$$
\begin{aligned}
\sigma_X
&=\sqrt{\operatorname{Var}(X)}\\
&=\sqrt{E(X^2)-(E(X))^2}\\
&=\sqrt{np(1-p)}.
\end{aligned}
$$

Für die drei Vergleichsverteilungen erhält man die folgenden Streuungsmaße. Die Beziehung $\operatorname{Var}(X)=np(1-p)$ wird hier nicht verwendet, da diese drei Verteilungen keine Binomialverteilungen sind.

<!-- data-type="none" data-sortable="false" -->
| Zufallsgröße | Erwartungswert | Varianz | Standardabweichung |
|---|---|---|---|
| $X$ | $3{,}5$ | $\frac{35}{12}$ | $\sqrt{\frac{35}{12}}\approx1{,}71$ |
| $Y$ | $3{,}5$ | $\frac14$ | $\frac12=0{,}5$ |
| $Z$ | $3{,}5$ | $\frac{25}{4}$ | $\frac52=2{,}5$ |

Im ursprünglichen Binomialbeispiel mit $n=25$ und $p=0{,}4$ sind dagegen:

$$
\begin{aligned}
\operatorname{Var}(X)&=25\cdot0{,}4\cdot0{,}6=6,\\
\sigma_X&=\sqrt6\approx2{,}45.
\end{aligned}
$$

Die Standardabweichung beschreibt die Breite der Verteilung, legt deren gesamte Form aber nicht allein fest. Ihre Bedeutung wird bei der Normalverteilung erneut aufgegriffen.

{{|>}} Wird bei festem $n$ die Trefferwahrscheinlichkeit $p$ verändert, verschiebt sich der Erwartungswert $\mu=np$ von $0$ nach $n$. Gleichzeitig verändert sich die Streuung:

$$
\begin{aligned}
p\to0&:\quad \mu\to0,\qquad \sigma_X\to0,\\
p\to1&:\quad \mu\to n,\qquad \sigma_X\to0,\\
p=\frac12&:\quad \mu=\frac n2,\qquad \sigma_X=\frac{\sqrt n}{2}.
\end{aligned}
$$

Bei $p=\frac12$ ist die Verteilung symmetrisch um $\frac n2$ und ihre Standardabweichung bei festem $n$ am größten. Für $p$ nahe $0$ beziehungsweise $1$ konzentriert sich die Wahrscheinlichkeit zunehmend bei $0$ beziehungsweise $n$ Treffern. Bei ungeradem $n$ liegt $\frac n2$ zwischen zwei möglichen Trefferzahlen; die beiden benachbarten Säulen sind dann gleich hoch.

{{|>}} Die größte erreichbare Säulenhöhe für eine festgehaltene Trefferzahl $k$ ist eine andere Größe als der Erwartungswert. Wird $p$ variiert, so liegt dieses Maximum für $0<k<n$ bei $p=\frac kn$:

$$
\begin{aligned}
M(k)&:=\max_{0\le p\le1}B_{n,p}(k),\\
M(k)&=\binom nk\left(\frac kn\right)^k
       \left(1-\frac kn\right)^{n-k}
       \qquad (k=1,\dots,n-1),\\
M(0)&=M(n)=1.
\end{aligned}
$$

Die folgende Abbildung zeigt diese maximalen Säulenhöhen für $n=25$ als Kreuze. Die Ordinatenwerte sind wieder in Einheiten von $10\%$ angegeben. Die Anordnung ist symmetrisch zu $k=\frac n2$, denn $M(n-k)=M(k)$.

<center>

@Koordinatensystem(`xmin=-2.2;xmax=27;ymin=-1.3;ymax=12;width=800;id=BINOMIAL05;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=BINOMIAL05;xlabel=$\Large k$;ylabel=$\Large \scriptstyle10\%$`)
@Punkt(`BINOMIAL05;M_0=0;0;10;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_1=0;1;3.75413246727;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_2=0;2;2.8211180371;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_3=0;3;2.38720855112;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_4=0;4;2.13027398332;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_5=0;5;1.96015102527;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_6=0;6;1.84053578106;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_7=0;7;1.75374028119;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_8=0;8;1.69008280332;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_9=0;9;1.64386119198;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_10=0;10;1.61157938695;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_11=0;11;1.59108517121;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_12=0;12;1.58112685143;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_13=0;13;1.58112685143;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_14=0;14;1.59108517121;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_15=0;15;1.61157938695;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_16=0;16;1.64386119198;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_17=0;17;1.69008280332;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_18=0;18;1.75374028119;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_19=0;19;1.84053578106;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_20=0;20;1.96015102527;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_21=0;21;2.13027398332;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_22=0;22;2.38720855112;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_23=0;23;2.8211180371;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_24=0;24;3.75413246727;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`BINOMIAL05;M_25=0;25;10;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`BINOMIAL05;[15;10.8];$\Large n=25$;rgb(var(--color-text,51,51,51));1`)

</center>

Zu den verschiedenen Kreuzen gehören im Allgemeinen verschiedene Werte von $p$. Die Kreuze bilden deshalb nicht gemeinsam die Wahrscheinlichkeitsverteilung einer einzelnen Zufallsgröße. Insbesondere ist $M(k)$ eine Wahrscheinlichkeit und nicht der Erwartungswert $\mu$.

{{|>}} Sollen Grenzen für ein Szenario untersucht werden, werden mehrere Einzelwahrscheinlichkeiten addiert. Die kumulierte Verteilungsfunktion gibt die Wahrscheinlichkeit für höchstens $\ell$ Treffer an. Für eine ganzzahlige Grenze $0\le\ell\le n$ gilt:

$$
\begin{aligned}
F_{n,p}(\ell)
&:=P(X\le\ell)\\
&=\sum_{k=0}^{\ell}P(X=k)\\
&=\sum_{k=0}^{\ell}\binom nk p^k(1-p)^{n-k}.
\end{aligned}
$$

Im folgenden Diagramm stehen die Säulen für die Werte der kumulierten Verteilungsfunktion an den ganzzahligen Grenzen $\ell$. Eine Einheit der Ordinatenachse entspricht $10\%$. Die letzte Säule bei $\ell=25$ erreicht deshalb die Höhe $10$, also $100\%$.

<center>

@Koordinatensystem(`xmin=-2.2;xmax=27;ymin=-1.3;ymax=12;width=800;id=BINOMIAL06;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=BINOMIAL06;xlabel=$\Large \ell$;ylabel=$\Large \scriptstyle10\%$`)
@Flaeche(`BINOMIAL06;[[-0.4;0];[0.4;0];[0.4;0.0000284302880299];[-0.4;0.0000284302880299]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[0.6;0];[1.4;0];[1.4;0.000502268421862];[0.6;0.000502268421862]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[1.6;0];[2.4;0];[2.4;0.00429297349252];[1.6;0.00429297349252]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[2.6;0];[3.4;0];[3.4;0.0236676882981];[2.6;0.0236676882981]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[3.6;0];[4.4;0];[4.4;0.0947083092519];[3.6;0.0947083092519]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[4.6;0];[5.4;0];[5.4;0.293622047923];[4.6;0.293622047923]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[5.6;0];[6.4;0];[6.4;0.735652578302];[5.6;0.735652578302]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[6.6;0];[7.4;0];[7.4;1.53551734756];[6.6;1.53551734756]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[7.6;0];[8.4;0];[8.4;2.73531450145];[7.6;2.73531450145]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[8.6;0];[9.4;0];[9.4;4.24617017671];[8.6;4.24617017671]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[9.6;0];[10.4;0];[10.4;5.85774956366];[9.6;5.85774956366]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[10.6;0];[11.4;0];[11.4;7.32282173361];[10.6;7.32282173361]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[11.6;0];[12.4;0];[12.4;8.46232231024];[11.6;8.46232231024]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[12.6;0];[13.4;0];[13.4;9.22198936133];[12.6;9.22198936133]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[13.6;0];[14.4;0];[14.4;9.65608481909];[13.6;9.65608481909]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[14.6;0];[15.4;0];[15.4;9.86830926511];[14.6;9.86830926511]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[15.6;0];[16.4;0];[16.4;9.95673611762];[15.6;9.95673611762]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[16.6;0];[17.4;0];[17.4;9.98794559497];[16.6;9.98794559497]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[17.6;0];[18.4;0];[18.4;9.99719284752];[17.6;9.99719284752]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[18.6;0];[19.4;0];[19.4;9.99946410254];[18.6;9.99946410254]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[19.6;0];[20.4;0];[20.4;9.99991835354];[19.6;9.99991835354]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[20.6;0];[21.4;0];[21.4;9.99999045687];[20.6;9.99999045687]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[21.6;0];[22.4;0];[22.4;9.99999919667];[21.6;9.99999919667]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[22.6;0];[23.4;0];[23.4;9.99999995665];[22.6;9.99999995665]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[23.6;0];[24.4;0];[24.4;9.99999999887];[23.6;9.99999999887]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Flaeche(`BINOMIAL06;[[24.6;0];[25.4;0];[25.4;10];[24.6;10]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@KoordText(`BINOMIAL06;[15;10.8];$\Large n=25,\ p=40\%$;rgb(var(--color-text,51,51,51));1`)

</center>

Für das Beispiel erhält man:

$$
\begin{aligned}
P(X\le10)
&=F_{25;0{,}4}(10)\approx0{,}5858=58{,}58\%,\\
P(X\le25)
&=F_{25;0{,}4}(25)=1=100\%.
\end{aligned}
$$

{{|>}} Aus nichtnegativen Einzelwahrscheinlichkeiten und ihrer Summe $1$ folgt: Die Verteilungsfunktion liegt zwischen $0$ und $1$ und ist monoton steigend. Für Grenzen unterhalb von $0$ ist sie null, ab $n$ ist sie eins. Damit werden Folgen der Nichtnegativität, Additivität und Normierung aus den Axiomen von Kolmogorov sichtbar.

Für reelle Grenzen ist $F_{n,p}(x)=P(X\le x)$ zwischen benachbarten ganzen Zahlen konstant: Es ist eine Treppenfunktion, keine stetige Verbindung der Säulenoberkanten. Weitere Grenzfragen lassen sich mit Gegenereignissen beantworten. Für ganze Zahlen $0\le r\le s\le n$ gilt:

$$
\begin{aligned}
P(X\ge r)&=1-F_{n,p}(r-1),\\
P(r\le X\le s)&=F_{n,p}(s)-F_{n,p}(r-1).
\end{aligned}
$$

***************************
