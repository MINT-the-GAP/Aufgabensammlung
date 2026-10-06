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













tags: Erklärung, Dreiecke, Satz des Pythagoras, Höhensatz, Kathetensatz

comment: In diesem Abschnitt werden der Satz des Pythagoras, der Höhensatz und der Kathetensatz für rechtwinklige Dreiecke erklärt und geometrisch veranschaulicht.

author: Martin Lommatzsch

-->

# Dreieckssätze

{{|>}}
***************************

Ein mathematischer Satz ist eine Aussage, deren Gültigkeit unter bestimmten Voraussetzungen bewiesen wurde. Die folgenden drei Sätze gelten für rechtwinklige Dreiecke.

Der rechte Winkel liegt in den Abbildungen beim Eckpunkt $C$. Die gegenüberliegende Seite $c$ ist die Hypotenuse und zugleich die längste Seite des Dreiecks. Die beiden Seiten $a$ und $b$, die den rechten Winkel einschließen, heißen Katheten.

{{|>}} Der Satz des Pythagoras stellt einen Zusammenhang zwischen den drei Seitenlängen her:

$$
a^2+b^2=c^2.
$$

Die Quadrate über den Katheten haben die Flächeninhalte $a^2$ und $b^2$. Ihre Summe ist gleich dem Flächeninhalt $c^2$ des Quadrats über der Hypotenuse.

<center>

@Koordinatensystem(`xmin=-3.15;xmax=8.15;ymin=-5.8;ymax=6.35;width=580;id=DREIECKPYTHAGORAS;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`DREIECKPYTHAGORAS;[[-3.15;-5.8];[8.15;-5.8];[8.15;6.35];[-3.15;6.35]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECKPYTHAGORAS;[[0;0];[5;0];[5;-5];[0;-5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 85.88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKPYTHAGORAS;[[0;0];[5;0];[5;-5];[0;-5];[0;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Flaeche(`DREIECKPYTHAGORAS;[[0;0];[3.2;2.4];[0.8;5.6];[-2.4;3.2]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKPYTHAGORAS;[[0;0];[3.2;2.4];[0.8;5.6];[-2.4;3.2];[0;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Flaeche(`DREIECKPYTHAGORAS;[[5;0];[7.4;1.8];[5.6;4.2];[3.2;2.4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 88.71000000000001%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKPYTHAGORAS;[[5;0];[7.4;1.8];[5.6;4.2];[3.2;2.4];[5;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Flaeche(`DREIECKPYTHAGORAS;[[0;0];[5;0];[3.2;2.4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKPYTHAGORAS;[[0;0];[5;0];[3.2;2.4];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECKPYTHAGORAS;[[3.016;2.262];[3.154;2.078];[3.338;2.216]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DREIECKPYTHAGORAS;[-0.37;-0.03];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKPYTHAGORAS;[5.36;-0.08];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKPYTHAGORAS;[3.22;2.86];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKPYTHAGORAS;[1.45;1.58];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKPYTHAGORAS;[4.47;1.48];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKPYTHAGORAS;[2.5;-0.4];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKPYTHAGORAS;[2.5;-2.5];$\Large c^2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DREIECKPYTHAGORAS;[0.4;2.8];$\Large b^2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKPYTHAGORAS;[5.3;2.1];$\Large a^2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)

</center>

Die Abbildung veranschaulicht diesen Zusammenhang: Die blaue und die grüne Quadratfläche sind zusammen genauso groß wie die rote Quadratfläche. Dabei stehen $a^2$, $b^2$ und $c^2$ für Flächeninhalte und nicht für die Seitenlängen selbst.

{{|>}} Für den Höhensatz von Euklid wird die Höhe $h$ auf die Hypotenuse eingezeichnet. Ihr Lotfußpunkt $D$ teilt die Hypotenuse in zwei Abschnitte. In den folgenden Abbildungen heißen ihre Längen

$$
p=\left|\overline{AD}\right|,\qquad
q=\left|\overline{DB}\right|,\qquad
c=p+q.
$$

Die Höhe steht orthogonal auf der Hypotenuse. Sie zerlegt das ursprüngliche rechtwinklige Dreieck in zwei weitere rechtwinklige Dreiecke.

<center>

@Koordinatensystem(`xmin=-0.95;xmax=6;ymin=-4.1;ymax=3.4;width=570;id=DREIECKHOEHENSATZ;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`DREIECKHOEHENSATZ;[[-0.95;-4.1];[6;-4.1];[6;3.4];[-0.95;3.4]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECKHOEHENSATZ;[[0;0];[5;0];[3.2;2.4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECKHOEHENSATZ;[[0.8;0];[3.2;0];[3.2;2.4];[0.8;2.4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 85.88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKHOEHENSATZ;[[0.8;0];[3.2;0];[3.2;2.4];[0.8;2.4];[0.8;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Flaeche(`DREIECKHOEHENSATZ;[[3.2;0];[3.2;-3.2];[5;-3.2];[5;0]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKHOEHENSATZ;[[3.2;0];[3.2;-3.2];[5;-3.2];[5;0];[3.2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`DREIECKHOEHENSATZ;[[0;0];[5;0];[3.2;2.4];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECKHOEHENSATZ;[[3.2;2.4];[3.2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`DREIECKHOEHENSATZ;[[3.016;2.262];[3.154;2.078];[3.338;2.216]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECKHOEHENSATZ;[[3.2;0.19];[3.39;0.19];[3.39;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DREIECKHOEHENSATZ;[-0.35;-0.05];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKHOEHENSATZ;[5.36;0.02];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKHOEHENSATZ;[3.23;2.91];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKHOEHENSATZ;[2.95;-0.31];$\Large D$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKHOEHENSATZ;[1.43;1.49];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKHOEHENSATZ;[4.45;1.48];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKHOEHENSATZ;[1.6;-0.38];$\Large p$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKHOEHENSATZ;[4.1;0.32];$\Large q$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKHOEHENSATZ;[4.1;-3.62];$\Large q$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKHOEHENSATZ;[5.36;-1.6];$\Large p$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`DREIECKHOEHENSATZ;[3.51;1.18];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DREIECKHOEHENSATZ;[2;2.78];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DREIECKHOEHENSATZ;[1.95;0.55];$\Large h^2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DREIECKHOEHENSATZ;[4.1;-1.6];$\Large p\cdot q$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Der Höhensatz lautet

$$
h^2=p\cdot q.
$$

Das rote Quadrat mit der Seitenlänge $h$ und das blaue Rechteck mit den Seitenlängen $p$ und $q$ haben somit denselben Flächeninhalt. Da $h$ eine positive Länge ist, gilt auch $h=\sqrt{p\cdot q}$.

{{|>}} Der Kathetensatz von Euklid verknüpft jedes Kathetenquadrat mit einem Rechteck aus der Hypotenuse und dem zur Kathete gehörenden Hypotenusenabschnitt.

Mit der hier gewählten Bezeichnung gehört $q$ zur Kathete $a$ und $p$ zur Kathete $b$. Es gilt

$$
\begin{aligned}
a^2&=c\cdot q,\\
b^2&=c\cdot p.
\end{aligned}
$$

<center>

@Koordinatensystem(`xmin=-3.15;xmax=8.15;ymin=-5.8;ymax=6.35;width=580;id=DREIECKKATHETENSATZ;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`DREIECKKATHETENSATZ;[[-3.15;-5.8];[8.15;-5.8];[8.15;6.35];[-3.15;6.35]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECKKATHETENSATZ;[[0;0];[3.2;0];[3.2;-5];[0;-5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 85.88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKKATHETENSATZ;[[0;0];[3.2;0];[3.2;-5];[0;-5];[0;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Flaeche(`DREIECKKATHETENSATZ;[[3.2;0];[5;0];[5;-5];[3.2;-5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 82.35%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKKATHETENSATZ;[[3.2;0];[5;0];[5;-5];[3.2;-5];[3.2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px`)
@Flaeche(`DREIECKKATHETENSATZ;[[0;0];[3.2;2.4];[0.8;5.6];[-2.4;3.2]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 85.88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKKATHETENSATZ;[[0;0];[3.2;2.4];[0.8;5.6];[-2.4;3.2];[0;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Flaeche(`DREIECKKATHETENSATZ;[[5;0];[7.4;1.8];[5.6;4.2];[3.2;2.4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 82.35%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKKATHETENSATZ;[[5;0];[7.4;1.8];[5.6;4.2];[3.2;2.4];[5;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px`)
@Flaeche(`DREIECKKATHETENSATZ;[[0;0];[5;0];[3.2;2.4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`DREIECKKATHETENSATZ;[[0;0];[5;0];[3.2;2.4];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECKKATHETENSATZ;[[3.016;2.262];[3.154;2.078];[3.338;2.216]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DREIECKKATHETENSATZ;[-0.37;-0.03];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKATHETENSATZ;[5.36;-0.08];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKATHETENSATZ;[3.22;2.86];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKATHETENSATZ;[1.45;1.58];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKATHETENSATZ;[4.47;1.48];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DREIECKKATHETENSATZ;[[3.2;2.4];[3.2;-5]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECKKATHETENSATZ;[[3.2;0.2];[3.4;0.2];[3.4;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DREIECKKATHETENSATZ;[3.49;1.08];$\Large h$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKATHETENSATZ;[2.72;0.32];$\Large D$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKATHETENSATZ;[1.6;-0.4];$\Large p$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DREIECKKATHETENSATZ;[4.1;-0.4];$\Large q$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`DREIECKKATHETENSATZ;[-0.4;-2.5];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECKKATHETENSATZ;[1.6;-2.5];$\Large c\cdot p$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DREIECKKATHETENSATZ;[4.1;-2.5];$\Large c\cdot q$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`DREIECKKATHETENSATZ;[0.4;2.8];$\Large b^2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DREIECKKATHETENSATZ;[5.3;2.1];$\Large a^2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)

</center>

Das rote Quadrat mit dem Flächeninhalt $b^2$ ist genauso groß wie das rote Rechteck mit dem Flächeninhalt $c\cdot p$. Entsprechend sind das orange Quadrat mit dem Flächeninhalt $a^2$ und das orange Rechteck mit dem Flächeninhalt $c\cdot q$ gleich groß.

Die beiden Rechtecke bilden zusammen das Quadrat über der Hypotenuse. Addiert man die beiden Gleichungen des Kathetensatzes, erhält man deshalb wieder den Satz des Pythagoras:

$$
a^2+b^2=cq+cp=c(p+q)=c^2.
$$

Die Buchstaben $p$ und $q$ werden in manchen Darstellungen vertauscht. Entscheidend ist immer die Zuordnung in der jeweiligen Abbildung: Das Quadrat einer Kathete ist gleich dem Produkt aus der Hypotenuse und dem zu dieser Kathete gehörenden Hypotenusenabschnitt.

{{|>}} Dreiecke sind auch für viele Anwendungen in den Naturwissenschaften wichtig. In der Trigonometrie werden die Beziehungen zwischen Seitenlängen und Winkeln weiter untersucht.

***************************
