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













tags: Erklärung, Pyramide

comment: In diesem Abschnitt werden Aufbau, Höhe, Netz, Volumen und Oberflächeninhalt einer Pyramide mit rechteckiger Grundfläche erklärt.

author: Martin Lommatzsch

-->

# Pyramide

{{|>}}
***************************

Eine Pyramide besteht aus einer Vielecksfläche als Grundfläche und Dreiecken als Seitenflächen, die in einer gemeinsamen Spitze zusammenlaufen. Die Spitze liegt außerhalb der Ebene der Grundfläche. Bei einer viereckigen Grundfläche besitzt die Pyramide fünf Eckpunkte, acht Kanten und fünf Flächen.

Ein Quader lässt sich in drei Pyramiden zerlegen: Dazu wird ein Eckpunkt als gemeinsame Spitze gewählt. Die drei Quaderflächen, die diesen Eckpunkt nicht enthalten, bilden die Grundflächen der Pyramiden. Die drei Teilkörper haben gleich große Volumina. Bei einem Würfel sind sie außerdem kongruent, bei einem beliebigen Quader dagegen im Allgemeinen nicht.

<center>

@Koordinatensystem(`xmin=-0.65;xmax=10.95;ymin=-1;ymax=9.55;width=710;id=PYRAMIDE01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`PYRAMIDE01;[[-0.65;-1];[10.95;-1];[10.95;9.55];[-0.65;9.55]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE01;[[0;5];[3;5];[3;8];[0;8]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 90.47%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE01;[[3;5];[4.2;5.9];[4.2;8.9];[3;8]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 85.53%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE01;[[0;8];[3;8];[4.2;8.9];[1.2;8.9]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 94%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`PYRAMIDE01;[[0;5];[1.2;5.9];[4.2;5.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE01;[[1.2;5.9];[1.2;8.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE01;[[0;5];[3;5];[4.2;5.9];[4.2;8.9];[1.2;8.9];[0;8];[0;5]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE01;[[0;8];[3;8];[3;5]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE01;[[3;8];[4.2;8.9]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE01;[[0;8];[3;8]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE01;[[0;5];[4.2;8.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #e840ac);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE01;[[3;5];[4.2;8.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #e840ac);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE01;[[1.2;5.9];[4.2;8.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #e840ac);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE01;[[0;8];[4.2;8.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #e840ac);;-;2px;linestyle=dashed`)
@KoordText(`PYRAMIDE01;[-0.32;6.5];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDE01;[1.5;4.7];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDE01;[3.94;5.3];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`PYRAMIDE01;[[6;5];[9;5];[10.2;8.9]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 90.12%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE01;[[9;5];[10.2;5.9];[10.2;8.9]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 79.53%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #e840ac));1;inhalt=0;umfang=0`)
@Strecke(`PYRAMIDE01;[[6;5];[7.2;5.9];[10.2;5.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE01;[[7.2;5.9];[10.2;8.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE01;[[6;5];[9;5];[10.2;5.9];[10.2;8.9];[6;5]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE01;[[9;5];[10.2;8.9]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`PYRAMIDE01;[8;4.45];$\Large V_1$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`PYRAMIDE01;[[0;0];[0;3];[4.2;3.9]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE01;[[0;3];[1.2;3.9];[4.2;3.9]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 80.24%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff));1;inhalt=0;umfang=0`)
@Strecke(`PYRAMIDE01;[[0;0];[1.2;0.9];[1.2;3.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE01;[[1.2;0.9];[4.2;3.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE01;[[0;0];[0;3];[1.2;3.9];[4.2;3.9];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE01;[[0;3];[4.2;3.9]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`PYRAMIDE01;[2;-0.55];$\Large V_2$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`PYRAMIDE01;[[6;0];[9;0];[9;3];[6;3]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 90.12%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE01;[[9;0];[9;3];[10.2;3.9]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 79.53%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE01;[[6;3];[9;3];[10.2;3.9]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 84.82%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850));1;inhalt=0;umfang=0`)
@Strecke(`PYRAMIDE01;[[6;0];[10.2;3.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE01;[[6;0];[9;0];[9;3];[6;3];[6;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE01;[[9;0];[10.2;3.9];[9;3]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE01;[[6;0];[6;3];[9;3];[10.2;3.9]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE01;[[6;3];[10.2;3.9]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`PYRAMIDE01;[8;-0.55];$\Large V_3$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die Abbildung zeigt diese Zerlegung oben links an einem Würfel mit der Kantenlänge $a$. Daneben und darunter sind die drei Pyramiden einzeln dargestellt. Jede enthält ein Drittel des Würfelvolumens:

$$
V_1=V_2=V_3=\frac{a^3}{3}.
$$

Bei einer Pyramide mit rechteckiger Grundfläche muss der Höhenfußpunkt nicht mit dem Mittelpunkt des Rechtecks zusammenfallen. Im Folgenden betrachten wir eine gerade Pyramide mit rechteckiger Grundfläche: Die Verbindung ihrer Spitze $S$ mit dem Mittelpunkt $M$ des Rechtecks ist orthogonal zur Grundebene. Die Höhe $h$ ist der orthogonale Abstand der Spitze von der Grundebene; sie ist nicht die Länge einer Seitenkante.

<center>

@Koordinatensystem(`xmin=-0.8;xmax=8.5;ymin=-0.8;ymax=6.25;width=620;id=PYRAMIDE02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`PYRAMIDE02;[[-0.8;-0.8];[8.5;-0.8];[8.5;6.25];[-0.8;6.25]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE02;[[0;0];[6;0];[3.8;5.6]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE02;[[6;0];[7.6;1.2];[3.8;5.6]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`PYRAMIDE02;[[0;0];[1.6;1.2];[7.6;1.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE02;[[1.6;1.2];[3.8;5.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE02;[[0;0];[6;0];[7.6;1.2];[3.8;5.6];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE02;[[6;0];[3.8;5.6]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE02;[[3.8;0.6];[3;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE02;[[3.8;0.6];[6.8;0.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE02;[[3;0];[3.8;5.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=dashed`)
@Strecke(`PYRAMIDE02;[[6.8;0.6];[3.8;5.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=dashed`)
@Strecke(`PYRAMIDE02;[[3.8;0.6];[3.8;5.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`PYRAMIDE02;[[4;0.6];[4;0.8];[3.8;0.8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@KoordText(`PYRAMIDE02;[3;-0.35];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDE02;[7.15;0.27];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDE02;[3.5;0.28];$\Large M$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDE02;[3.8;5.94];$\Large S$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDE02;[4.17;2.93];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`PYRAMIDE02;[2.9;2.2];$\Large h_{\Delta_a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`PYRAMIDE02;[6.48;1.95];$\Large h_{\Delta_b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`PYRAMIDE02;[2.9;0.78];$\Large \frac b2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`PYRAMIDE02;[5.3;0.34];$\Large \frac a2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`PYRAMIDE02;[1.37;2.8];$\Large s$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die Grundfläche hat die Seitenlängen $a$ und $b$ und damit den Flächeninhalt $G=ab$. Eine Seitenkante von einem Eckpunkt der Grundfläche zur Spitze hat die Länge $s$. Für das Volumen einer Pyramide gilt allgemein

$$
V=\frac13 Gh.
$$

Bei einer rechteckigen Grundfläche ergibt sich also

$$
V=\frac13 abh.
$$

Eine Pyramide besitzt damit ein Drittel des Volumens eines Prismas mit gleich großer Grundfläche und gleicher Höhe. Das gilt auch für eine schiefe Pyramide. Gleiche Grundflächeninhalte und gleiche Höhen führen zu gleichen Pyramidenvolumina; die Lage der Spitze über der Grundebene ändert daran nichts.

{{|>}} Für den Oberflächeninhalt werden die Grundfläche und die vier dreieckigen Seitenflächen addiert. Das Netz zeigt dieselbe gerade rechteckige Pyramide wie die vorherige Abbildung. Die beiden Dreiecke an den Seiten der Länge $a$ haben die Dreieckshöhe $h_{\Delta_a}$; die beiden Dreiecke an den Seiten der Länge $b$ haben die Dreieckshöhe $h_{\Delta_b}$.

<center>

@Koordinatensystem(`xmin=-6.6;xmax=12.6;ymin=-6.2;ymax=10.2;width=690;id=PYRAMIDE03;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`PYRAMIDE03;[[-6.6;-6.2];[12.6;-6.2];[12.6;10.2];[-6.6;10.2]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE03;[[0;0];[6;0];[6;4];[0;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE03;[[0;0];[3;-5.385165];[6;0]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 91.88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE03;[[6;4];[3;9.385165];[0;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 91.88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE03;[[0;4];[-5.830952;2];[0;0]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDE03;[[6;0];[11.830952;2];[6;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`PYRAMIDE03;[[0;0];[6;0];[6;4];[0;4];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE03;[[0;0];[3;-5.385165];[6;0];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE03;[[6;0];[11.830952;2];[6;4];[6;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE03;[[6;4];[3;9.385165];[0;4];[6;4]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE03;[[0;4];[-5.830952;2];[0;0];[0;4]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDE03;[[3;0];[3;-5.385165]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE03;[[3;4];[3;9.385165]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE03;[[0;2];[-5.830952;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE03;[[6;2];[11.830952;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDE03;[[3.28;0];[3.28;-0.28];[3;-0.28]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`PYRAMIDE03;[[3;4.28];[3.28;4.28];[3.28;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`PYRAMIDE03;[[0;2.28];[-0.28;2.28];[-0.28;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`PYRAMIDE03;[[6.28;2];[6.28;2.28];[6;2.28]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`PYRAMIDE03;[3;2];$\Large G=ab$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDE03;[3;0.5];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDE03;[5.52;2];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDE03;[3.8;-2.5];$\Large h_{\Delta_a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`PYRAMIDE03;[3.8;6.5];$\Large h_{\Delta_a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`PYRAMIDE03;[-3;2.62];$\Large h_{\Delta_b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`PYRAMIDE03;[9;2.62];$\Large h_{\Delta_b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`PYRAMIDE03;[0.65;-3.1];$\Large s$;rgb(var(--color-text,51,51,51));1`)

</center>

Die Dreieckshöhen verlaufen jeweils innerhalb der Seitenfläche von der Spitze orthogonal zur zugehörigen Grundkante. Sie sind nicht mit der Körperhöhe $h$ oder der Seitenkante $s$ zu verwechseln. Die rechten Winkel sind im Netz markiert.

{{|>}} Vom Mittelpunkt der rechteckigen Grundfläche bis zur Mitte einer Seite der Länge $a$ beträgt der Abstand $\frac b2$. Bis zur Mitte einer Seite der Länge $b$ beträgt er entsprechend $\frac a2$. Mit der Körperhöhe entstehen zwei rechtwinklige Dreiecke. Nach dem Satz des Pythagoras gilt deshalb

$$
\begin{aligned}
h_{\Delta_a}&=\sqrt{h^2+\left(\frac b2\right)^2},\\
h_{\Delta_b}&=\sqrt{h^2+\left(\frac a2\right)^2}.
\end{aligned}
$$

{{|>}} Der Mantelflächeninhalt $M_{\mathrm{Mantel}}$ ist die Summe der vier Dreiecksflächen. Mit der rechteckigen Grundfläche ergibt sich der Oberflächeninhalt $O$:

$$
\begin{aligned}
M_{\mathrm{Mantel}}
 &=2\cdot\frac12 a h_{\Delta_a}
   +2\cdot\frac12 b h_{\Delta_b}\\
 &=a h_{\Delta_a}+b h_{\Delta_b},\\
O&=G+M_{\mathrm{Mantel}}\\
 &=ab+a h_{\Delta_a}+b h_{\Delta_b}.
\end{aligned}
$$

{{|>}} Bei einer quadratischen Grundfläche gilt $b=a$. Dann sind die vier Seitenflächen kongruente Dreiecke und ihre Dreieckshöhen gleich lang. Mit $h_\Delta=h_{\Delta_a}=h_{\Delta_b}$ folgt

$$
\begin{aligned}
h_\Delta&=\sqrt{h^2+\frac{a^2}{4}},\\
V&=\frac13 a^2h,\\
O&=a^2+2a h_\Delta.
\end{aligned}
$$

Werden die Längen in Zentimetern angegeben, erhält man das Volumen in $\mathrm{cm}^3$ und den Oberflächeninhalt in $\mathrm{cm}^2$.

***************************
