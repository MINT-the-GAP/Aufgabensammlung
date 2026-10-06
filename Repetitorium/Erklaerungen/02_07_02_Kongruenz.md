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













tags: Erklärung, Kongruenz, Konstruktion

comment: In diesem Abschnitt werden Kongruenz, die fünf Kongruenzsätze für Dreiecke und die zugehörigen Konstruktionen erklärt.

author: Martin Lommatzsch

-->

# Kongruenz

{{|>}}
***************************

Zwei geometrische Figuren heißen kongruent oder deckungsgleich, wenn sie durch Verschieben, Drehen und gegebenenfalls Spiegeln genau aufeinander abgebildet werden können. Sie haben dieselbe Form und dieselbe Größe. Entsprechende Seiten sind gleich lang, entsprechende Winkel sind gleich groß. Nur die Lage oder die Orientierung kann verschieden sein.

<center>

@Koordinatensystem(`xmin=-0.6;xmax=7.2;ymin=-0.9;ymax=3.35;width=660;id=KONGRUENZ01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`KONGRUENZ01;[[-0.6;-0.9];[7.2;-0.9];[7.2;3.35];[-0.6;3.35]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`KONGRUENZ01;[[0;0];[2;0];[2;2];[0;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`KONGRUENZ01;[[0;0];[2;0];[2;2];[0;2];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`KONGRUENZ01;[[0;0.16];[0.16;0.16];[0.16;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Strecke(`KONGRUENZ01;[[1.84;0];[1.84;0.16];[2;0.16]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Strecke(`KONGRUENZ01;[[2;1.84];[1.84;1.84];[1.84;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Strecke(`KONGRUENZ01;[[0.16;2];[0.16;1.84];[0;1.84]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Flaeche(`KONGRUENZ01;[[5.25;0];[6.664214;1.414214];[5.25;2.828427];[3.835786;1.414214]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`KONGRUENZ01;[[5.25;0];[6.664214;1.414214];[5.25;2.828427];[3.835786;1.414214];[5.25;0]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`KONGRUENZ01;[[5.136863;0.113137];[5.25;0.226274];[5.363137;0.113137]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Strecke(`KONGRUENZ01;[[6.551076;1.301076];[6.437939;1.414214];[6.551076;1.527351]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Strecke(`KONGRUENZ01;[[5.363137;2.71529];[5.25;2.602153];[5.136863;2.71529]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Strecke(`KONGRUENZ01;[[3.948924;1.527351];[4.062061;1.414214];[3.948924;1.301076]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@KoordText(`KONGRUENZ01;[1;-0.48];$\Large \mathrm{Figur}\ 1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ01;[5.25;-0.48];$\Large \mathrm{Figur}\ 2$;rgb(var(--color-text,51,51,51));1`)

</center>

Die beiden Quadrate lassen sich durch eine Drehung und eine Verschiebung zur Deckung bringen. Man schreibt dafür

$$
\mathrm{Figur}_1\cong\mathrm{Figur}_2.
$$

Ein kleineres Quadrat wäre zu diesen Quadraten zwar ähnlich, aber nicht kongruent. Kongruenz ist der Sonderfall der Ähnlichkeit, bei dem der Längenfaktor $k=1$ beträgt. Gleiche Winkel allein reichen für Kongruenz also nicht aus.

{{|>}} Besonders nützlich sind Kongruenzsätze für Dreiecke. Sie geben an, welche übereinstimmenden Seitenlängen und Winkelgrößen bereits genügen, damit zwei Dreiecke kongruent sind. Dabei müssen jeweils entsprechende Seiten und Winkel miteinander verglichen werden.

Wie üblich liegt die Seite $a$ dem Eckpunkt $A$ gegenüber, $b$ dem Eckpunkt $B$ und $c$ dem Eckpunkt $C$. Die Winkel bei $A$, $B$ und $C$ heißen $\alpha$, $\beta$ und $\gamma$. Ein $S$ steht für eine Seitenlänge, ein $W$ für eine Winkelgröße.

Die folgenden Abbildungen zeigen jeweils ein Beispiel für die gegebenen Größen und die zugehörige Konstruktion. Die Sätze gelten allgemein, nicht nur für die dargestellte Dreiecksform. Eine eindeutige Konstruktion bedeutet hier eindeutig bis auf Verschieben, Drehen und Spiegeln. Die Angaben müssen ein echtes Dreieck ermöglichen: Seitenlängen müssen positiv sein, und die Summe zweier Seitenlängen muss größer als die dritte sein.

{{|>}} SSS: Zwei Dreiecke sind kongruent, wenn ihre drei entsprechenden Seiten gleich lang sind. Sind in einem zweiten Dreieck die Seiten mit $a'$, $b'$ und $c'$ bezeichnet, genügt also

$$
a=a',\qquad b=b',\qquad c=c'.
$$

Für die Konstruktion zeichnet man zuerst die Strecke $\overline{AB}$ mit der Länge $c$. Dann zeichnet man einen Kreis um $A$ mit dem Radius $b$ und einen Kreis um $B$ mit dem Radius $a$. Ein Schnittpunkt der Kreise ist der dritte Eckpunkt $C$. Zum Schluss verbindet man $C$ mit $A$ und $B$.

<center>

@Koordinatensystem(`xmin=-2.3;xmax=5.9;ymin=-2.25;ymax=4.4;width=650;id=KONGRUENZ02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`KONGRUENZ02;[[-2.3;-2.25];[5.9;-2.25];[5.9;4.4];[-2.3;4.4]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Punkt(`KONGRUENZ02;A=0;1;1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`KONGRUENZ02;B=0;4;2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@Flaeche(`KONGRUENZ02;[[1;1];[4;2];[3;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`KONGRUENZ02;[[1;1];[4;2];[3;3];[1;1]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`KONGRUENZ02;[[1;1];[3.8;0.6];[4;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Kreis(`KONGRUENZ02;KreisA=0;A;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);0;radius=2.8284271247461903;inhalt=0;umfang=0;linestyle=dashed`)
@Kreis(`KONGRUENZ02;KreisB=0;B;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;radius=1.4142135623730951;inhalt=0;umfang=0;linestyle=dashed`)
@KoordText(`KONGRUENZ02;[0.73;0.79];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ02;[4.28;1.83];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ02;[3;3.43];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ02;[3.87;2.71];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ02;[1.69;2.26];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ02;[2.66;1.12];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ02;[4.05;0.28];$\Large C'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ02;[-0.5;4.06];$\Large r=b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`KONGRUENZ02;[5.1;3.35];$\Large r=a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Der rote Kreis legt den Abstand $b$ zu $A$ fest, der blaue Kreis den Abstand $a$ zu $B$. Der zweite Schnittpunkt $C'$ ergibt ein an $\overline{AB}$ gespiegeltes Dreieck. Beide möglichen Dreiecke sind kongruent. Schneiden sich die Kreise nicht oder berühren sie sich nur, entsteht kein echtes Dreieck.

{{|>}} SWS: Zwei Dreiecke sind kongruent, wenn zwei entsprechende Seiten und der jeweils eingeschlossene Winkel übereinstimmen. In der Abbildung sind das $a$, $b$ und $\gamma$.

Für die Konstruktion zeichnet man den Winkel $\gamma$ bei $C$. Auf einem Schenkel trägt man die Länge $b$ bis zum Punkt $A$ ab, auf dem anderen die Länge $a$ bis zum Punkt $B$. Die Verbindung von $A$ und $B$ schließt das Dreieck.

<center>

@Koordinatensystem(`xmin=0.25;xmax=4.75;ymin=0.3;ymax=3.85;width=510;id=KONGRUENZ03;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`KONGRUENZ03;[[0.25;0.3];[4.75;0.3];[4.75;3.85];[0.25;3.85]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`KONGRUENZ03;[[3;3];[0.6;0.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`KONGRUENZ03;[[3;3];[4.35;1.65]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Flaeche(`KONGRUENZ03;[[1;1];[4;2];[3;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`KONGRUENZ03;[[1;1];[4;2];[3;3];[1;1]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`KONGRUENZ03;[[2.73837;2.73837];[2.747661;2.729399];[2.757258;2.720757];[2.767151;2.712456];[2.777328;2.704505];[2.787777;2.696914];[2.798484;2.689692];[2.809436;2.682848];[2.82062;2.676391];[2.832024;2.670328];[2.843631;2.664666];[2.855429;2.659413];[2.867404;2.654575];[2.87954;2.650158];[2.891822;2.646167];[2.904237;2.642607];[2.916768;2.639483];[2.929401;2.636798];[2.942119;2.634555];[2.954908;2.632758];[2.967752;2.631408];[2.980636;2.630507];[2.993543;2.630056];[3.006457;2.630056];[3.019364;2.630507];[3.032248;2.631408];[3.045092;2.632758];[3.057881;2.634555];[3.070599;2.636798];[3.083232;2.639483];[3.095763;2.642607];[3.108178;2.646167];[3.12046;2.650158];[3.132596;2.654575];[3.144571;2.659413];[3.156369;2.664666];[3.167976;2.670328];[3.17938;2.676391];[3.190564;2.682848];[3.201516;2.689692];[3.212223;2.696914];[3.222672;2.704505];[3.232849;2.712456];[3.242742;2.720757];[3.252339;2.729399];[3.26163;2.73837]];rgb(var(--color-text,51,51,51));;-;2px;linestyle=solid`)
@KoordText(`KONGRUENZ03;[3;2.29];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ03;[0.67;1.03];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ03;[4.35;2.03];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ03;[3;3.43];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ03;[3.87;2.71];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ03;[1.69;2.26];$\Large b$;rgb(var(--color-text,51,51,51));1`)

</center>

Wichtig ist, dass der gegebene Winkel zwischen den beiden gegebenen Seiten liegt.

{{|>}} SsW: Zwei Dreiecke sind kongruent, wenn zwei entsprechende Seiten und der Winkel gegenüber der längeren dieser beiden Seiten übereinstimmen. Das große $S$ und das kleine $s$ erinnern daran, dass die beiden gegebenen Seiten unterschiedlich lang sind. Hier sind $a$, $c$ und $\gamma$ gegeben, wobei $c>a$ gilt. Der Winkel $\gamma$ liegt der längeren gegebenen Seite $c$ gegenüber.

Für die Konstruktion zeichnet man den Winkel $\gamma$ bei $C$ und trägt auf einem Schenkel die kürzere bekannte Seite $a$ bis zum Punkt $B$ ab. Anschließend zeichnet man um $B$ einen Kreis mit dem Radius $c$. Sein Schnittpunkt mit dem anderen Winkelschenkel, dem Strahl von $C$ durch $A$, ist der gesuchte Punkt $A$.

<center>

@Koordinatensystem(`xmin=-0.55;xmax=7.65;ymin=-1.65;ymax=5.65;width=660;id=KONGRUENZ04;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`KONGRUENZ04;[[-0.55;-1.65];[7.65;-1.65];[7.65;5.65];[-0.55;5.65]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Punkt(`KONGRUENZ04;B=0;4;2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@Kreis(`KONGRUENZ04;KreisB=0;B;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;radius=3.1622776601683795;inhalt=0;umfang=0;linestyle=dashed`)
@Strecke(`KONGRUENZ04;[[3;3];[0.1;0.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Flaeche(`KONGRUENZ04;[[1;1];[4;2];[3;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`KONGRUENZ04;[[1;1];[4;2];[3;3];[1;1]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`KONGRUENZ04;[[2.73837;2.73837];[2.747661;2.729399];[2.757258;2.720757];[2.767151;2.712456];[2.777328;2.704505];[2.787777;2.696914];[2.798484;2.689692];[2.809436;2.682848];[2.82062;2.676391];[2.832024;2.670328];[2.843631;2.664666];[2.855429;2.659413];[2.867404;2.654575];[2.87954;2.650158];[2.891822;2.646167];[2.904237;2.642607];[2.916768;2.639483];[2.929401;2.636798];[2.942119;2.634555];[2.954908;2.632758];[2.967752;2.631408];[2.980636;2.630507];[2.993543;2.630056];[3.006457;2.630056];[3.019364;2.630507];[3.032248;2.631408];[3.045092;2.632758];[3.057881;2.634555];[3.070599;2.636798];[3.083232;2.639483];[3.095763;2.642607];[3.108178;2.646167];[3.12046;2.650158];[3.132596;2.654575];[3.144571;2.659413];[3.156369;2.664666];[3.167976;2.670328];[3.17938;2.676391];[3.190564;2.682848];[3.201516;2.689692];[3.212223;2.696914];[3.222672;2.704505];[3.232849;2.712456];[3.242742;2.720757];[3.252339;2.729399];[3.26163;2.73837]];rgb(var(--color-text,51,51,51));;-;2px;linestyle=solid`)
@KoordText(`KONGRUENZ04;[3;2.29];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ04;[0.64;1.07];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ04;[4.28;1.83];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ04;[3;3.43];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ04;[3.87;2.71];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ04;[2.66;1.12];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ04;[6.6;4.9];$\Large r=c$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Der Zirkel wird also auf die längere bekannte Seite $c$ eingestellt. Weil $c>a$ ist, liegt $C$ innerhalb dieses Kreises. Der gewählte Strahl schneidet den Kreis deshalb genau einmal. Die ganze Gerade hätte einen weiteren Schnittpunkt auf der entgegengesetzten Seite von $C$; dieser gehört nicht zum gewählten Winkelschenkel.

Liegt der gegebene Winkel dagegen der kürzeren bekannten Seite gegenüber, können zwei nicht kongruente Dreiecke entstehen. Ein beliebiger SSW-Fall ist deshalb kein Kongruenzsatz.

{{|>}} WSW: Zwei Dreiecke sind kongruent, wenn eine entsprechende Seite und die beiden an dieser Seite anliegenden Winkel übereinstimmen. In der Abbildung sind das $c$, $\alpha$ und $\beta$.

Für die Konstruktion zeichnet man zuerst $\overline{AB}$ mit der Länge $c$. Bei $A$ trägt man den Winkel $\alpha$ und bei $B$ den Winkel $\beta$ auf derselben Seite von $\overline{AB}$ ab. Der Schnittpunkt der freien Winkelschenkel ist $C$. Dabei muss $\alpha+\beta<180^\circ$ gelten, damit ein echtes Dreieck entsteht.

<center>

@Koordinatensystem(`xmin=0.25;xmax=4.75;ymin=0.3;ymax=3.95;width=510;id=KONGRUENZ05;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`KONGRUENZ05;[[0.25;0.3];[4.75;0.3];[4.75;3.95];[0.25;3.95]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`KONGRUENZ05;[[1;1];[3.45;3.45]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`KONGRUENZ05;[[4;2];[2.63;3.37]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Flaeche(`KONGRUENZ05;[[1;1];[4;2];[3;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`KONGRUENZ05;[[1;1];[4;2];[3;3];[1;1]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`KONGRUENZ05;[[1.711512;1.237171];[1.703269;1.2606];[1.694255;1.283744];[1.684479;1.306576];[1.673952;1.329072];[1.662687;1.351207];[1.650694;1.372957];[1.637988;1.394298];[1.624582;1.415207];[1.610492;1.43566];[1.595732;1.455636];[1.580318;1.475112];[1.564268;1.494066];[1.547599;1.512479];[1.53033;1.53033]];rgb(var(--color-text,51,51,51));;-;2px;linestyle=solid`)
@KoordText(`KONGRUENZ05;[1.944222;1.583562];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`KONGRUENZ05;[[3.717157;2.282843];[3.707543;2.272889];[3.698278;2.26261];[3.689374;2.252015];[3.680843;2.24112];[3.672693;2.229935];[3.664935;2.218476];[3.657578;2.206754];[3.650631;2.194786];[3.644102;2.182584];[3.638;2.170164];[3.63233;2.15754];[3.627101;2.144727];[3.622317;2.131741];[3.617986;2.118598];[3.614112;2.105313];[3.6107;2.091901];[3.607754;2.07838];[3.605278;2.064764];[3.603274;2.051072];[3.601745;2.037318];[3.600692;2.023519];[3.600117;2.009692];[3.600021;1.995854];[3.600404;1.982021];[3.601265;1.968209];[3.602604;1.954435];[3.604418;1.940716];[3.606705;1.927067];[3.609463;1.913506];[3.612689;1.900049];[3.616378;1.886711];[3.620527;1.873509]];rgb(var(--color-text,51,51,51));;-;2px;linestyle=solid`)
@KoordText(`KONGRUENZ05;[3.270063;2.172315];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ05;[0.73;0.79];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ05;[4.28;1.83];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ05;[3;3.43];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ05;[2.66;1.12];$\Large c$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} WWS: Zwei Dreiecke sind kongruent, wenn eine entsprechende Seite, ein anliegender Winkel und der dieser Seite gegenüberliegende Winkel übereinstimmen. In der Abbildung sind das $c$, $\alpha$ und $\gamma$.

Zunächst berechnet man den fehlenden Winkel mithilfe der Innenwinkelsumme:

$$
\alpha+\beta+\gamma=180^\circ
\qquad\Rightarrow\qquad
\beta=180^\circ-\alpha-\gamma.
$$

Danach kennt man wie bei WSW die Seite $c$ und ihre beiden anliegenden Winkel $\alpha$ und $\beta$. Die weitere Konstruktion ist deshalb dieselbe. Der graue, gestrichelte Winkelbogen zeigt den zuerst berechneten Winkel $\beta$.

<center>

@Koordinatensystem(`xmin=0.25;xmax=4.75;ymin=0.3;ymax=3.95;width=510;id=KONGRUENZ06;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`KONGRUENZ06;[[0.25;0.3];[4.75;0.3];[4.75;3.95];[0.25;3.95]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`KONGRUENZ06;[[1;1];[3.45;3.45]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`KONGRUENZ06;[[4;2];[2.63;3.37]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Flaeche(`KONGRUENZ06;[[1;1];[4;2];[3;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`KONGRUENZ06;[[1;1];[4;2];[3;3];[1;1]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`KONGRUENZ06;[[1.711512;1.237171];[1.703269;1.2606];[1.694255;1.283744];[1.684479;1.306576];[1.673952;1.329072];[1.662687;1.351207];[1.650694;1.372957];[1.637988;1.394298];[1.624582;1.415207];[1.610492;1.43566];[1.595732;1.455636];[1.580318;1.475112];[1.564268;1.494066];[1.547599;1.512479];[1.53033;1.53033]];rgb(var(--color-text,51,51,51));;-;2px;linestyle=solid`)
@KoordText(`KONGRUENZ06;[1.944222;1.583562];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`KONGRUENZ06;[[2.73837;2.73837];[2.747661;2.729399];[2.757258;2.720757];[2.767151;2.712456];[2.777328;2.704505];[2.787777;2.696914];[2.798484;2.689692];[2.809436;2.682848];[2.82062;2.676391];[2.832024;2.670328];[2.843631;2.664666];[2.855429;2.659413];[2.867404;2.654575];[2.87954;2.650158];[2.891822;2.646167];[2.904237;2.642607];[2.916768;2.639483];[2.929401;2.636798];[2.942119;2.634555];[2.954908;2.632758];[2.967752;2.631408];[2.980636;2.630507];[2.993543;2.630056];[3.006457;2.630056];[3.019364;2.630507];[3.032248;2.631408];[3.045092;2.632758];[3.057881;2.634555];[3.070599;2.636798];[3.083232;2.639483];[3.095763;2.642607];[3.108178;2.646167];[3.12046;2.650158];[3.132596;2.654575];[3.144571;2.659413];[3.156369;2.664666];[3.167976;2.670328];[3.17938;2.676391];[3.190564;2.682848];[3.201516;2.689692];[3.212223;2.696914];[3.222672;2.704505];[3.232849;2.712456];[3.242742;2.720757];[3.252339;2.729399];[3.26163;2.73837]];rgb(var(--color-text,51,51,51));;-;2px;linestyle=solid`)
@KoordText(`KONGRUENZ06;[3;2.29];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`KONGRUENZ06;[[3.717157;2.282843];[3.707543;2.272889];[3.698278;2.26261];[3.689374;2.252015];[3.680843;2.24112];[3.672693;2.229935];[3.664935;2.218476];[3.657578;2.206754];[3.650631;2.194786];[3.644102;2.182584];[3.638;2.170164];[3.63233;2.15754];[3.627101;2.144727];[3.622317;2.131741];[3.617986;2.118598];[3.614112;2.105313];[3.6107;2.091901];[3.607754;2.07838];[3.605278;2.064764];[3.603274;2.051072];[3.601745;2.037318];[3.600692;2.023519];[3.600117;2.009692];[3.600021;1.995854];[3.600404;1.982021];[3.601265;1.968209];[3.602604;1.954435];[3.604418;1.940716];[3.606705;1.927067];[3.609463;1.913506];[3.612689;1.900049];[3.616378;1.886711];[3.620527;1.873509]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@KoordText(`KONGRUENZ06;[3.270063;2.172315];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ06;[0.73;0.79];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ06;[4.28;1.83];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ06;[3;3.43];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KONGRUENZ06;[2.66;1.12];$\Large c$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Zum Konstruieren mit Zirkel und Geodreieck prüft man also zuerst, welche Seiten und Winkel gegeben sind und wo sie liegen. Bei SSS und SsW helfen Kreisschnittpunkte; bei SWS, WSW und WWS werden vor allem die passenden Winkel und Seiten abgetragen.

Drei gleiche Winkel allein legen nur die Form eines Dreiecks fest, nicht seine Größe. WWW ist daher kein Kongruenzsatz, sondern ein Ähnlichkeitssatz. Kongruenz und Ähnlichkeit bilden wichtige Grundlagen für weitere geometrische Zusammenhänge, etwa für die Strahlensätze und die Trigonometrie.

***************************
