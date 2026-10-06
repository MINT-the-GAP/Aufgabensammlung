<!--
version:  1.0.1
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













tags: Erklärung, Dreiecke, Schwerpunkt, Inkreis, Umkreis, Eulersche Gerade

comment: In diesem Abschnitt werden Höhen, Seitenhalbierende, Mittelsenkrechte und Winkelhalbierende, ihre Schnittpunkte, die Euler’sche Gerade sowie Inkreis und Umkreis erklärt.

author: Martin Lommatzsch

-->

# Dreieckseigenschaften

{{|>}}
***************************

Neben den Seiten und Winkeln eines Dreiecks sind besondere Linien und ihre Schnittpunkte wichtig. Sie helfen dabei, weitere Eigenschaften zu erkennen und geometrische Aufgaben zu lösen. Die Eckpunkte heißen wieder $A$, $B$ und $C$, die gegenüberliegenden Seiten haben die Längen $a$, $b$ und $c$.

Eine Höhe verläuft durch einen Eckpunkt und steht orthogonal auf der Geraden durch die gegenüberliegende Seite. Die drei Höhengeraden schneiden sich in einem Punkt, dem Höhenschnittpunkt $H$.

{{|>}} Eine Seitenhalbierende verbindet einen Eckpunkt mit dem Mittelpunkt der gegenüberliegenden Seite. Die drei Seitenhalbierenden schneiden sich im Schwerpunkt $S$ des Dreiecks. Dieser liegt immer innerhalb des Dreiecks und teilt jede Seitenhalbierende im Verhältnis $2:1$. Dabei ist der Abschnitt zwischen Eckpunkt und Schwerpunkt doppelt so lang wie der Abschnitt zwischen Schwerpunkt und Seitenmittelpunkt.

{{|>}} Eine Mittelsenkrechte verläuft durch den Mittelpunkt einer Seite und steht orthogonal auf dieser Seite. Sie muss nicht durch den gegenüberliegenden Eckpunkt verlaufen. Die drei Mittelsenkrechten schneiden sich im Umkreismittelpunkt $M$. Dieser Punkt ist von allen drei Eckpunkten gleich weit entfernt.

<center>

@Koordinatensystem(`xmin=-0.9;xmax=10.9;ymin=-1.6;ymax=6.5;width=720;id=DREIECKLINIEN;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`DREIECKLINIEN;[[-0.9;-1.6];[10.9;-1.6];[10.9;6.5];[-0.9;6.5]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECKLINIEN;[[0;0];[10;0];[3;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 93.65%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKLINIEN;[[0;0];[10;0];[3;4];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECKLINIEN;[[3;4];[4.2;5.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dotted`)
@Strecke(`DREIECKLINIEN;[[3;4];[1.7;4.742857]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dotted`)
@Strecke(`DREIECKLINIEN;[[4.557143;-1.4];[7.7;4.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=dotted`)
@Strecke(`DREIECKLINIEN;[[0.5;2.75];[5.9;-1.3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2.5px;linestyle=dotted`)
@Strecke(`DREIECKLINIEN;[[5;-1.3];[5;3.4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=dotted`)
@Strecke(`DREIECKLINIEN;[[0;0];[6.5;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=dashed`)
@Strecke(`DREIECKLINIEN;[[10;0];[1.5;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2.5px;linestyle=dashed`)
@Strecke(`DREIECKLINIEN;[[3;4];[5;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=dashed`)
@Strecke(`DREIECKLINIEN;[[0;0];[3.35;5.8625]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`DREIECKLINIEN;[[10;0];[2.6;5.55]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Strecke(`DREIECKLINIEN;[[3;0];[3;5.85]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`DREIECKLINIEN;[[5.16;-1.095];[2.8;5.8375]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px`)
@Strecke(`DREIECKLINIEN;[[3;0.22];[3.22;0.22];[3.22;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`DREIECKLINIEN;[[2.352388;4.116679];[2.543401;4.007528];[2.652552;4.198542]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`DREIECKLINIEN;[[3.776;4.668];[3.644;4.492];[3.468;4.624]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Punkt(`DREIECKLINIEN;P1=0;3;5.25;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`DREIECKLINIEN;P2=0;4.333333;1.333333;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`DREIECKLINIEN;P3=0;5;-0.625;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`DREIECKLINIEN;[-0.35;-0.3];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKLINIEN;[10.33;-0.3];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKLINIEN;[2.45;3.83];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKLINIEN;[0.77;2.18];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKLINIEN;[7.08;1.95];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKLINIEN;[7.5;-0.42];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKLINIEN;[2.55;5.85];$\Large H$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKLINIEN;[4.08;0.98];$\Large S$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKLINIEN;[5.65;-0.52];$\Large M$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKLINIEN;[1.08;2.94];$\Large h_A$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKLINIEN;[8.35;1.68];$\Large h_B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`DREIECKLINIEN;[2.7;0.75];$\Large h_C$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DREIECKLINIEN;[2.05;0.36];$\Large s_A$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKLINIEN;[7.12;0.35];$\Large s_B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`DREIECKLINIEN;[4.42;2.55];$\Large s_C$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DREIECKLINIEN;[7.82;3.68];$\Large m_A$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKLINIEN;[0.6;3.2];$\Large m_B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`DREIECKLINIEN;[5.45;3.98];$\Large m_C$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

In der Abbildung sind die Höhen $h_A$, $h_B$ und $h_C$ durchgezogen, die Seitenhalbierenden $s_A$, $s_B$ und $s_C$ gestrichelt und die Mittelsenkrechten $m_A$, $m_B$ und $m_C$ gepunktet.

Blau gehört zum Eckpunkt $A$ beziehungsweise zur gegenüberliegenden Seite $a$, Grün zu $B$ beziehungsweise $b$ und Rot zu $C$ beziehungsweise $c$. Zum Beispiel verläuft $h_A$ durch $A$, während $m_A$ durch den Mittelpunkt der Seite $a$ verläuft. Die grauen gepunkteten Linien verlängern die Dreiecksseiten.

Das dargestellte Dreieck ist stumpfwinklig. Deshalb liegen sowohl der Höhenschnittpunkt $H$ als auch der Umkreismittelpunkt $M$ außerhalb des Dreiecks. Der Schwerpunkt $S$ liegt dagegen innerhalb.

{{|>}} Der Höhenschnittpunkt $H$, der Schwerpunkt $S$ und der Umkreismittelpunkt $M$ liegen auf einer Geraden. Diese heißt Euler’sche Gerade und ist in der Abbildung orange eingezeichnet. Der Schwerpunkt liegt zwischen $H$ und $M$, und es gilt

$$
\left|\overline{HS}\right|=2\cdot\left|\overline{SM}\right|.
$$

Bei einem gleichseitigen Dreieck fallen diese drei Punkte zusammen. Dann bestimmen sie keine eindeutige Euler’sche Gerade. Der Schnittpunkt der Winkelhalbierenden liegt im Allgemeinen nicht auf der Euler’schen Geraden.

{{|>}} Eine Winkelhalbierende teilt einen Innenwinkel in zwei gleich große Winkel. Die drei inneren Winkelhalbierenden schneiden sich im Inkreismittelpunkt $W$. Dieser liegt immer innerhalb des Dreiecks und hat von allen drei Seiten denselben orthogonalen Abstand.

Der Inkreis, auch Innenkreis genannt, hat seinen Mittelpunkt in $W$. Er berührt jede Dreiecksseite in genau einem Punkt und liegt vollständig im Dreieck. Der Umkreis hat dagegen seinen Mittelpunkt in $M$ und verläuft durch alle drei Eckpunkte des Dreiecks.

<center>

@Koordinatensystem(`xmin=-1.2;xmax=11.2;ymin=-6.5;ymax=5.2;width=660;id=DREIECKKREISE;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`DREIECKKREISE;[[-1.2;-6.5];[11.2;-6.5];[11.2;5.2];[-1.2;5.2]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECKKREISE;[[0;0];[10;0];[3;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 93.65%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKKREISE;[[0;0];[10;0];[3;4];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECKKREISE;[[4.557143;-1.4];[7.2;3.225]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dotted`)
@Strecke(`DREIECKKREISE;[[0.5;2.75];[5.9;-1.3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px;linestyle=dotted`)
@Strecke(`DREIECKKREISE;[[5;-1.4];[5;3.4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=dotted`)
@Strecke(`DREIECKKREISE;[[0;0];[5.333333;2.666667]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=dashed`)
@Strecke(`DREIECKKREISE;[[10;0];[1.660922;2.214563]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2.5px;linestyle=dashed`)
@Strecke(`DREIECKKREISE;[[3;4];[3.827822;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=dashed`)
@Punkt(`DREIECKKREISE;P1=0;5;-0.625;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);0;fix`)
@Kreis(`DREIECKKREISE;k1=0;P1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);0;radius=5.038911`)
@Punkt(`DREIECKKREISE;P2=0;3.468871;1.734436;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);0;fix`)
@Kreis(`DREIECKKREISE;k2=0;P2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);0;radius=1.734436`)
@Punkt(`DREIECKKREISE;P3=0;5;-0.625;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@Punkt(`DREIECKKREISE;P4=0;3.468871;1.734436;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1;fix`)
@Strecke(`DREIECKKREISE;[[3.468871;1.734436];[3.468871;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);;-;2px`)
@KoordText(`DREIECKKREISE;[3.168871;0.7];$\Large r$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)
@Strecke(`DREIECKKREISE;[[5;-0.625];[10;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px`)
@KoordText(`DREIECKKREISE;[7.75;-0.88];$\Large R$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`DREIECKKREISE;[-0.43;-0.2];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKREISE;[10.45;-0.2];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKREISE;[2.85;4.47];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKREISE;[0.2;2.2];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKREISE;[7.2;2.14];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKREISE;[1.8;-0.4];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKREISE;[4;2.32];$\Large W$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)
@KoordText(`DREIECKKREISE;[5.9;-0.87];$\Large M$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`DREIECKKREISE;[1.65;0.42];$\Large w_A$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKKREISE;[7.65;0.98];$\Large w_B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`DREIECKKREISE;[2.6;2.7];$\Large w_C$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DREIECKKREISE;[7.4;2.85];$\Large m_A$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKKREISE;[0.65;3.17];$\Large m_B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`DREIECKKREISE;[5.45;3.45];$\Large m_C$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

In dieser Abbildung sind die Winkelhalbierenden $w_A$, $w_B$ und $w_C$ gestrichelt und die Mittelsenkrechten $m_A$, $m_B$ und $m_C$ gepunktet. Die Farbzuordnung zu den Eckpunkten und gegenüberliegenden Seiten bleibt gleich.

Der Inkreis mit dem Mittelpunkt $W$ und dem Radius $r$ ist violett dargestellt. Der Umkreis mit dem Mittelpunkt $M$ und dem Radius $R$ ist orange dargestellt.

{{|>}} Mit dem Flächeninhalt $A$, dem Umfang $U$ und den Seitenlängen $a$, $b$ und $c$ lassen sich die beiden Radien berechnen:

$$
r=\frac{2A}{U},\qquad
R=\frac{a\cdot b\cdot c}{4A}.
$$

Hier bezeichnet $A$ den Flächeninhalt, nicht den gleichnamigen Eckpunkt. Die Beziehung für den Inkreisradius ergibt sich, wenn $W$ mit den drei Eckpunkten verbunden wird: Es entstehen drei Dreiecke mit den Grundseiten $a$, $b$ und $c$ und jeweils derselben Höhe $r$. Daher gilt

$$
A=\frac{ar}{2}+\frac{br}{2}+\frac{cr}{2}
 =\frac{(a+b+c)r}{2}
 =\frac{Ur}{2}.
$$

{{|>}} In einem spitzwinkligen Dreieck liegt der Höhenschnittpunkt $H$ innerhalb der Dreiecksfläche. Die Punkte, in denen die Höhen orthogonal auf die gegenüberliegenden Seiten treffen, heißen Lotfußpunkte. Sie werden hier mit $H_a$, $H_b$ und $H_c$ bezeichnet; der Index gibt die jeweilige Seite an.

<center>

@Koordinatensystem(`xmin=-0.9;xmax=6.9;ymin=-0.9;ymax=4.9;width=640;id=DREIECKHOEHEN;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`DREIECKHOEHEN;[[-0.9;-0.9];[6.9;-0.9];[6.9;4.9];[-0.9;4.9]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECKHOEHEN;[[0;0];[6;0];[2;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKHOEHEN;[[0;0];[6;0];[2;4];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECKHOEHEN;[[0;0];[3;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`DREIECKHOEHEN;[[6;0];[1.2;2.4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Strecke(`DREIECKHOEHEN;[[2;4];[2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`DREIECKHOEHEN;[[2.858579;2.858579];[3;2.717157];[3.141421;2.858579]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`DREIECKHOEHEN;[[1.378885;2.310557];[1.289443;2.131672];[1.110557;2.221115]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Strecke(`DREIECKHOEHEN;[[2;0.2];[2.2;0.2];[2.2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Punkt(`DREIECKHOEHEN;P1=0;2;2;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`DREIECKHOEHEN;[-0.35;-0.25];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKHOEHEN;[6.32;-0.25];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKHOEHEN;[2;4.4];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKHOEHEN;[2.34;2.04];$\Large H$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKHOEHEN;[3.36;3.28];$\Large H_a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKHOEHEN;[0.71;2.63];$\Large H_b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`DREIECKHOEHEN;[2;-0.46];$\Large H_c$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Für die durch $H$ unterteilten Höhen gilt die Produktgleichheit

$$
\left|\overline{HA}\right|\cdot\left|\overline{HH_a}\right|
=
\left|\overline{HB}\right|\cdot\left|\overline{HH_b}\right|
=
\left|\overline{HC}\right|\cdot\left|\overline{HH_c}\right|.
$$

Die Produkte dieser Teilstreckenlängen sind also gleich groß. Das bedeutet nicht, dass $H$ jede Höhe im gleichen Verhältnis teilt.

***************************
