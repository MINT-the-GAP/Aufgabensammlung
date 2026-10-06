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













tags: Erklärung, Zahlenstrahl, Intervalle

comment: In diesem Abschnitt werden Zahlenstrahl und Zahlengerade, gleichmäßige Abstände sowie offene, abgeschlossene und halboffene Intervalle erklärt.

author: Martin Lommatzsch

-->

# Zahlenstrahl

{{|>}}
***************************

Auf einem Zahlenstrahl lassen sich Zahlen der Größe nach anordnen. Er ist eine Halbgerade: eine gerade Linie mit einem Anfangspunkt, aber ohne Endpunkt. Der Anfangspunkt liegt bei $0$. Nach rechts werden die Zahlen größer. Der Zahlenstrahl lässt sich in dieser Richtung beliebig weit fortsetzen; die Zeichnung zeigt nur einen Ausschnitt.

Auf dem folgenden Zahlenstrahl sind die natürlichen Zahlen $\mathbb{N}=\{0,1,2,3,\dots\}$ in regelmäßigen Abständen markiert.

<center>

@Koordinatensystem(`xmin=-0.6;xmax=6.4;ymin=-0.75;ymax=0.65;width=540;id=ZAHLENSTRAHL01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZAHLENSTRAHL01;[[-0.6;-0.75];[6.4;-0.75];[6.4;0.65];[-0.6;0.65]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`ZAHLENSTRAHL01;[[0;0];[5.65;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`ZAHLENSTRAHL01;[[0;-0.09];[0;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL01;[[1;-0.09];[1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL01;[[2;-0.09];[2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL01;[[3;-0.09];[3;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL01;[[4;-0.09];[4;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL01;[[5;-0.09];[5;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`ZAHLENSTRAHL01;[0;-0.42];$\Large 0$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL01;[1;-0.42];$\Large 1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL01;[2;-0.42];$\Large 2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL01;[3;-0.42];$\Large 3$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL01;[4;-0.42];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL01;[5;-0.42];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL01;[6;0];$\Large x$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Mit den ganzen Zahlen kommen die negativen Zahlen hinzu:

$$
\mathbb{Z}=\{\dots,-3,-2,-1,0,1,2,3,\dots\}.
$$

Dazu wird der Zahlenstrahl über die $0$ hinaus nach links verlängert. Es entsteht eine Zahlengerade, die weder einen Anfangs- noch einen Endpunkt besitzt. Sie lässt sich in beide Richtungen beliebig weit fortsetzen; die Zeichnung zeigt nur einen Ausschnitt.

<center>

@Koordinatensystem(`xmin=-2.9;xmax=6.4;ymin=-0.75;ymax=0.65;width=720;id=ZAHLENSTRAHL02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZAHLENSTRAHL02;[[-2.9;-0.75];[6.4;-0.75];[6.4;0.65];[-2.9;0.65]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`ZAHLENSTRAHL02;[[-2.6;0];[5.65;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`ZAHLENSTRAHL02;[[-2;-0.09];[-2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL02;[[-1;-0.09];[-1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL02;[[0;-0.09];[0;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL02;[[1;-0.09];[1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL02;[[2;-0.09];[2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL02;[[3;-0.09];[3;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL02;[[4;-0.09];[4;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL02;[[5;-0.09];[5;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`ZAHLENSTRAHL02;[-2;-0.42];$\Large -2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL02;[-1;-0.42];$\Large -1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL02;[0;-0.42];$\Large 0$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL02;[1;-0.42];$\Large 1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL02;[2;-0.42];$\Large 2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL02;[3;-0.42];$\Large 3$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL02;[4;-0.42];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL02;[5;-0.42];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL02;[6;0];$\Large x$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die Länge eines Einheitenschritts, beispielsweise von $1$ bis $2$, kann für eine Zeichnung frei gewählt werden. Innerhalb derselben Zeichnung müssen aber alle Einheitenschritte gleich lang sein. Solche gleichmäßigen Abstände heißen äquidistant.

Das $x$ an der Zahlengeraden bezeichnet die Zahlenkoordinate: Jeder Punkt auf der Geraden lässt sich durch genau eine Zahl $x$ beschreiben. Zwischen den markierten ganzen Zahlen liegen weitere Zahlen, beispielsweise $1{,}5$ zwischen $1$ und $2$.

{{|>}} Intervalle beschreiben zusammenhängende Bereiche auf der Zahlengeraden. Sie enthalten alle reellen Zahlen zwischen ihren Grenzen, nicht nur die ganzen Zahlen. Die Menge der reellen Zahlen wird mit $\mathbb{R}$ bezeichnet.

Bei einem Intervall mit zwei endlichen Grenzen kann jede Grenze dazugehören oder ausgeschlossen sein. Gehört eine Grenze dazu, wird sie inklusive berücksichtigt; andernfalls ist sie exklusiv. Daraus ergeben sich vier Möglichkeiten.

{{|>}} Ein abgeschlossenes Intervall enthält beide Grenzen. Für das Intervall von $1$ bis $3$ gilt

$$
[1,3]=\left\{x\in\mathbb{R}\mid 1\leq x\leq 3\right\}.
$$

Es enthält die Zahlen $1$ und $3$ und alle reellen Zahlen dazwischen. Die nach innen geöffneten eckigen Klammern zeigen, dass beide Grenzen dazugehören. Der Bereich dazwischen ist rot hervorgehoben.

<center>

@Koordinatensystem(`xmin=-2.9;xmax=6.4;ymin=-0.75;ymax=0.65;width=720;id=ZAHLENSTRAHL03;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZAHLENSTRAHL03;[[-2.9;-0.75];[6.4;-0.75];[6.4;0.65];[-2.9;0.65]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`ZAHLENSTRAHL03;[[-2.6;0];[5.65;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`ZAHLENSTRAHL03;[[-2;-0.09];[-2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL03;[[-1;-0.09];[-1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL03;[[0;-0.09];[0;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL03;[[1;-0.09];[1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL03;[[2;-0.09];[2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL03;[[3;-0.09];[3;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL03;[[4;-0.09];[4;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL03;[[5;-0.09];[5;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL03;[[1;0];[3;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`ZAHLENSTRAHL03;[[1.15;0.2];[1;0.2];[1;-0.2];[1.15;-0.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`ZAHLENSTRAHL03;[[2.85;0.2];[3;0.2];[3;-0.2];[2.85;-0.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@KoordText(`ZAHLENSTRAHL03;[-2;-0.42];$\Large -2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL03;[-1;-0.42];$\Large -1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL03;[0;-0.42];$\Large 0$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL03;[1;-0.42];$\Large 1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL03;[2;-0.42];$\Large 2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL03;[3;-0.42];$\Large 3$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL03;[4;-0.42];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL03;[5;-0.42];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL03;[6;0];$\Large x$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Ein offenes Intervall enthält keine seiner beiden Grenzen. Es kann mit runden Klammern oder mit nach außen geöffneten eckigen Klammern geschrieben werden:

$$
(1,3)=]1,3[=\left\{x\in\mathbb{R}\mid 1<x<3\right\}.
$$

Dieses Intervall enthält alle reellen Zahlen zwischen $1$ und $3$, aber weder die $1$ noch die $3$. In der Abbildung zeigen beide eckigen Klammern nach außen.

<center>

@Koordinatensystem(`xmin=-2.9;xmax=6.4;ymin=-0.75;ymax=0.65;width=720;id=ZAHLENSTRAHL04;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZAHLENSTRAHL04;[[-2.9;-0.75];[6.4;-0.75];[6.4;0.65];[-2.9;0.65]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`ZAHLENSTRAHL04;[[-2.6;0];[5.65;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`ZAHLENSTRAHL04;[[-2;-0.09];[-2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL04;[[-1;-0.09];[-1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL04;[[0;-0.09];[0;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL04;[[1;-0.09];[1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL04;[[2;-0.09];[2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL04;[[3;-0.09];[3;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL04;[[4;-0.09];[4;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL04;[[5;-0.09];[5;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL04;[[1;0];[3;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`ZAHLENSTRAHL04;[[0.85;0.2];[1;0.2];[1;-0.2];[0.85;-0.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`ZAHLENSTRAHL04;[[3.15;0.2];[3;0.2];[3;-0.2];[3.15;-0.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@KoordText(`ZAHLENSTRAHL04;[-2;-0.42];$\Large -2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL04;[-1;-0.42];$\Large -1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL04;[0;-0.42];$\Large 0$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL04;[1;-0.42];$\Large 1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL04;[2;-0.42];$\Large 2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL04;[3;-0.42];$\Large 3$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL04;[4;-0.42];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL04;[5;-0.42];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL04;[6;0];$\Large x$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Bei einem halboffenen Intervall gehört genau eine Grenze dazu. Ist die linke Grenze eingeschlossen und die rechte ausgeschlossen, gilt

$$
[1,3)=[1,3[=\left\{x\in\mathbb{R}\mid 1\leq x<3\right\}.
$$

Die $1$ gehört zum Intervall, die $3$ nicht. Dazwischen liegen alle weiteren Zahlen des Intervalls. Die linke Klammer ist nach innen, die rechte nach außen geöffnet.

<center>

@Koordinatensystem(`xmin=-2.9;xmax=6.4;ymin=-0.75;ymax=0.65;width=720;id=ZAHLENSTRAHL05;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZAHLENSTRAHL05;[[-2.9;-0.75];[6.4;-0.75];[6.4;0.65];[-2.9;0.65]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`ZAHLENSTRAHL05;[[-2.6;0];[5.65;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`ZAHLENSTRAHL05;[[-2;-0.09];[-2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL05;[[-1;-0.09];[-1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL05;[[0;-0.09];[0;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL05;[[1;-0.09];[1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL05;[[2;-0.09];[2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL05;[[3;-0.09];[3;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL05;[[4;-0.09];[4;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL05;[[5;-0.09];[5;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL05;[[1;0];[3;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`ZAHLENSTRAHL05;[[1.15;0.2];[1;0.2];[1;-0.2];[1.15;-0.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`ZAHLENSTRAHL05;[[3.15;0.2];[3;0.2];[3;-0.2];[3.15;-0.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@KoordText(`ZAHLENSTRAHL05;[-2;-0.42];$\Large -2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL05;[-1;-0.42];$\Large -1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL05;[0;-0.42];$\Large 0$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL05;[1;-0.42];$\Large 1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL05;[2;-0.42];$\Large 2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL05;[3;-0.42];$\Large 3$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL05;[4;-0.42];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL05;[5;-0.42];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL05;[6;0];$\Large x$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Ist umgekehrt die linke Grenze ausgeschlossen und die rechte eingeschlossen, gilt

$$
(1,3]=]1,3]=\left\{x\in\mathbb{R}\mid 1<x\leq 3\right\}.
$$

Die $1$ gehört nicht zum Intervall, die $3$ dagegen schon. Auch hier sind alle reellen Zahlen dazwischen enthalten. Die linke Klammer ist nach außen, die rechte nach innen geöffnet.

<center>

@Koordinatensystem(`xmin=-2.9;xmax=6.4;ymin=-0.75;ymax=0.65;width=720;id=ZAHLENSTRAHL06;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZAHLENSTRAHL06;[[-2.9;-0.75];[6.4;-0.75];[6.4;0.65];[-2.9;0.65]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`ZAHLENSTRAHL06;[[-2.6;0];[5.65;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`ZAHLENSTRAHL06;[[-2;-0.09];[-2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL06;[[-1;-0.09];[-1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL06;[[0;-0.09];[0;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL06;[[1;-0.09];[1;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL06;[[2;-0.09];[2;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL06;[[3;-0.09];[3;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL06;[[4;-0.09];[4;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL06;[[5;-0.09];[5;0.09]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZAHLENSTRAHL06;[[1;0];[3;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`ZAHLENSTRAHL06;[[0.85;0.2];[1;0.2];[1;-0.2];[0.85;-0.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`ZAHLENSTRAHL06;[[2.85;0.2];[3;0.2];[3;-0.2];[2.85;-0.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@KoordText(`ZAHLENSTRAHL06;[-2;-0.42];$\Large -2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL06;[-1;-0.42];$\Large -1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL06;[0;-0.42];$\Large 0$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL06;[1;-0.42];$\Large 1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL06;[2;-0.42];$\Large 2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL06;[3;-0.42];$\Large 3$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL06;[4;-0.42];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL06;[5;-0.42];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZAHLENSTRAHL06;[6;0];$\Large x$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Mit Intervallen können beispielsweise Lösungsmengen angegeben werden. Das wird auch bei Funktionen wichtig, etwa wenn beschrieben werden soll, für welche Zahlen eine Funktion definiert ist.

Zahlenstrahl und Zahlengerade sind eindimensionale Objekte: Man kann sich auf ihnen nur entlang einer Richtung vorwärts oder rückwärts bewegen. Zur Beschreibung eines Punktes genügt deshalb eine einzige Zahlenkoordinate.

***************************
