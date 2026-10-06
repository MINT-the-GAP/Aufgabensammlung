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













tags: Erklärung, Pyramidenstumpf

comment: In diesem Abschnitt werden Aufbau, Netz, Volumen und Oberflächeninhalt eines geraden Pyramidenstumpfs mit rechteckiger Grund- und Deckfläche erklärt.

author: Martin Lommatzsch

-->

# Pyramidenstumpf

{{|>}}
***************************

Ein Pyramidenstumpf entsteht, wenn die Spitze einer Pyramide durch einen Schnitt parallel zur Grundfläche abgetrennt wird. Die ursprüngliche Grundfläche und die neue Deckfläche liegen in parallelen Ebenen und sind ähnlich zueinander. Die Seitenflächen des verbleibenden Körpers sind Trapeze.

Im Folgenden betrachten wir den Stumpf einer geraden Pyramide mit rechteckiger Grundfläche. Die größere Grundfläche hat die Seitenlängen $a_1$ und $b_1$, die kleinere Deckfläche die Seitenlängen $a_2$ und $b_2$. Die Verbindung ihrer Mittelpunkte ist orthogonal zu den Ebenen von Grund- und Deckfläche. Die Höhe $h$ des Stumpfs ist der orthogonale Abstand zwischen diesen Ebenen.

<center>

@Koordinatensystem(`xmin=-0.8;xmax=8.5;ymin=-0.8;ymax=7.2;width=570;id=PYRAMIDENSTUMPF01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`PYRAMIDENSTUMPF01;[[-0.8;-0.8];[8.5;-0.8];[8.5;7.2];[-0.8;7.2]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDENSTUMPF01;[[0;0];[6;0];[4.9;3.3];[1.9;3.3]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDENSTUMPF01;[[6;0];[7.6;1.2];[5.7;3.9];[4.9;3.3]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDENSTUMPF01;[[1.9;3.3];[4.9;3.3];[5.7;3.9];[2.7;3.9]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 93.65%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`PYRAMIDENSTUMPF01;[[0;0];[1.6;1.2];[7.6;1.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF01;[[1.6;1.2];[2.7;3.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF01;[[1.9;3.3];[3.8;6.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF01;[[4.9;3.3];[3.8;6.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF01;[[5.7;3.9];[3.8;6.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF01;[[2.7;3.9];[3.8;6.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF01;[[3.8;3.6];[3.8;6.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF01;[[0;0];[6;0];[7.6;1.2];[5.7;3.9];[2.7;3.9];[1.9;3.3];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDENSTUMPF01;[[1.9;3.3];[4.9;3.3];[5.7;3.9]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDENSTUMPF01;[[6;0];[4.9;3.3]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDENSTUMPF01;[[3;0];[3.4;3.3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF01;[[6.8;0.6];[5.3;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF01;[[3.8;0.6];[3.8;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`PYRAMIDENSTUMPF01;[[3.8;0.6];[4.35;0.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`PYRAMIDENSTUMPF01;[[4;0.6];[4;0.8];[3.8;0.8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@KoordText(`PYRAMIDENSTUMPF01;[3;-0.36];$\Large a_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF01;[7.2;0.23];$\Large b_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF01;[4.36;3.04];$\Large a_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF01;[5.82;3.44];$\Large b_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF01;[3.8;6.91];$\Large S$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF01;[4.19;1.78];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`PYRAMIDENSTUMPF01;[4.15;5.13];$\Large h_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`PYRAMIDENSTUMPF01;[2.58;1.65];$\Large h_a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`PYRAMIDENSTUMPF01;[6.7;1.75];$\Large h_b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

{{|>}} Die dünnen gestrichelten Linien ergänzen die abgeschnittene Pyramide bis zu ihrer ursprünglichen Spitze $S$. Ihre Höhe ist $h_2$; die vollständige Pyramide hatte also die Höhe $h+h_2$. Verdeckte Kanten des Stumpfs sind ebenfalls gestrichelt dargestellt.

Da der Schnitt parallel zur Grundfläche verläuft, werden beide Rechteckseiten mit demselben Faktor $k$ verkleinert. Dabei gilt

$$
\frac{a_2}{a_1}=\frac{b_2}{b_1}
=\frac{h_2}{h+h_2}=k,
\qquad 0<k<1.
$$

Der Stumpf besitzt acht Eckpunkte, zwölf Kanten und sechs Flächen: eine rechteckige Grundfläche, eine rechteckige Deckfläche und vier trapezförmige Seitenflächen.

{{|>}} Das Netz zeigt denselben Pyramidenstumpf wie die räumliche Abbildung. Je zwei gegenüberliegende Trapeze sind kongruent. An den Seiten der Längen $a_1$ und $a_2$ haben sie die Trapezhöhe $h_a$; an den Seiten der Längen $b_1$ und $b_2$ die Trapezhöhe $h_b$.

<center>

@Koordinatensystem(`xmin=-4.2;xmax=13.2;ymin=-4.15;ymax=8.1;width=790;id=PYRAMIDENSTUMPF02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`PYRAMIDENSTUMPF02;[[-4.2;-4.15];[13.2;-4.15];[13.2;8.1];[-4.2;8.1]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDENSTUMPF02;[[0;0];[6;0];[6;4];[0;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDENSTUMPF02;[[9.354102;1];[12.354102;1];[12.354102;3];[9.354102;3]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 93.65%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDENSTUMPF02;[[0;0];[1.5;-3.162278];[4.5;-3.162278];[6;0]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 91.88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDENSTUMPF02;[[6;4];[4.5;7.162278];[1.5;7.162278];[0;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 91.88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDENSTUMPF02;[[0;4];[-3.354102;3];[-3.354102;1];[0;0]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`PYRAMIDENSTUMPF02;[[6;0];[9.354102;1];[9.354102;3];[6;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`PYRAMIDENSTUMPF02;[[0;0];[6;0];[6;4];[0;4];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDENSTUMPF02;[[0;0];[1.5;-3.162278];[4.5;-3.162278];[6;0];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDENSTUMPF02;[[6;4];[4.5;7.162278];[1.5;7.162278];[0;4];[6;4]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDENSTUMPF02;[[0;4];[-3.354102;3];[-3.354102;1];[0;0];[0;4]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDENSTUMPF02;[[6;0];[9.354102;1];[9.354102;3];[6;4];[6;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDENSTUMPF02;[[9.354102;1];[12.354102;1];[12.354102;3];[9.354102;3];[9.354102;1]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`PYRAMIDENSTUMPF02;[[3;0];[3;-3.162278]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF02;[[3;4];[3;7.162278]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF02;[[0;2];[-3.354102;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF02;[[6;2];[9.354102;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`PYRAMIDENSTUMPF02;[[3.24;0];[3.24;-0.24];[3;-0.24]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`PYRAMIDENSTUMPF02;[[3;4.24];[3.24;4.24];[3.24;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`PYRAMIDENSTUMPF02;[[0;2.24];[-0.24;2.24];[-0.24;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`PYRAMIDENSTUMPF02;[[6.24;2];[6.24;2.24];[6;2.24]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`PYRAMIDENSTUMPF02;[3;2];$\Large G_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF02;[10.854102;2];$\Large G_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF02;[3;0.42];$\Large a_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF02;[5.55;2];$\Large b_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF02;[3;-3.592278];$\Large a_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF02;[-3.804102;2];$\Large b_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF02;[10.854102;0.58];$\Large a_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF02;[12.784102;2];$\Large b_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`PYRAMIDENSTUMPF02;[3.65;-1.581139];$\Large h_a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`PYRAMIDENSTUMPF02;[3.65;5.581139];$\Large h_a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`PYRAMIDENSTUMPF02;[-1.677051;2.5];$\Large h_b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`PYRAMIDENSTUMPF02;[7.677051;2.5];$\Large h_b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Die blauen Trapezhöhen verlaufen innerhalb der Seitenflächen orthogonal zu den parallelen Trapezseiten. Zur Grundebene sind sie dagegen nicht orthogonal und deshalb länger als die Körperhöhe $h$, die den orthogonalen Abstand der Grund- und Deckebene angibt. Die rechten Winkel zwischen Trapezhöhe und Trapezseite sind im Netz markiert.

{{|>}} Die Grund- und Deckfläche haben die Flächeninhalte

$$
G_1=a_1b_1,
\qquad
G_2=a_2b_2.
$$

Das Volumen des Stumpfs ist das Volumen der ursprünglichen Pyramide abzüglich des Volumens der abgeschnittenen kleinen Pyramide. Mit der Ähnlichkeit der beiden Pyramiden erhält man

$$
\begin{aligned}
V&=\frac13 G_1(h+h_2)-\frac13 G_2h_2\\
 &=\frac h3\left(G_1+\sqrt{G_1G_2}+G_2\right).
\end{aligned}
$$

Die zweite Gleichung benötigt nur die Höhe des Stumpfs sowie die Flächeninhalte von Grund- und Deckfläche. Sie gilt auch für Pyramidenstümpfe mit anderen Vielecken als Grundfläche, sofern die Deckfläche durch einen parallelen Schnitt entsteht.

{{|>}} Für die Oberfläche werden zusätzlich die Trapezhöhen benötigt. Beim dargestellten geraden rechteckigen Pyramidenstumpf ist die Verbindung der Mittelpunkte von Grund- und Deckfläche orthogonal zu deren Ebenen. Die seitlichen Abstände betragen $\frac{b_1-b_2}{2}$ beziehungsweise $\frac{a_1-a_2}{2}$. Der Satz des Pythagoras liefert

$$
\begin{aligned}
h_a&=\sqrt{h^2+\left(\frac{b_1-b_2}{2}\right)^2},\\
h_b&=\sqrt{h^2+\left(\frac{a_1-a_2}{2}\right)^2}.
\end{aligned}
$$

{{|>}} Der Flächeninhalt eines Trapezes ist das Produkt aus seiner Höhe und dem Mittelwert der beiden parallelen Seitenlängen. Da jeweils zwei gleiche Trapeze vorkommen, ergeben sich Mantelflächeninhalt $M$ und Oberflächeninhalt $O$ zu

$$
\begin{aligned}
M&=2\cdot\frac{a_1+a_2}{2}\,h_a
  +2\cdot\frac{b_1+b_2}{2}\,h_b\\
 &=(a_1+a_2)h_a+(b_1+b_2)h_b,\\
O&=G_1+G_2+M\\
 &=a_1b_1+a_2b_2+(a_1+a_2)h_a+(b_1+b_2)h_b.
\end{aligned}
$$

Bei quadratischer Grund- und Deckfläche gilt $a_1=b_1$ und $a_2=b_2$. Dann sind auch die beiden Trapezhöhen gleich lang. Volumenangaben haben kubische Einheiten wie $\mathrm{cm}^3$, Oberflächenangaben dagegen quadratische Einheiten wie $\mathrm{cm}^2$.

***************************
