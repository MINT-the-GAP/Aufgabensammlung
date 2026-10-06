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













tags: Erklärung, Tangente, Sekante

comment: In diesem Abschnitt werden Tangenten und Sekanten am Kreis, der rechte Winkel zum Radius sowie Stützgeraden an einer Ecke erklärt.

author: Martin Lommatzsch

-->

# Tangenten und Sekanten

{{|>}}
***************************

Geraden können unterschiedliche Lagen zu einer ebenen Figur haben. Am Kreis werden insbesondere zwei Geradenarten unterschieden: Eine Sekante schneidet die Kreislinie in zwei verschiedenen Punkten. Eine Tangente berührt den Kreis in genau einem Punkt, dem Berührpunkt, und verläuft nicht durch das Innere des Kreises.

<center>

@Koordinatensystem(`xmin=-6;xmax=6;ymin=-4.7;ymax=5.4;width=620;id=TANGENTE01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`TANGENTE01;[[-6;-4.7];[6;-4.7];[6;5.4];[-6;5.4]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Kreis(`TANGENTE01;F=0;M;color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;radius=4;inhalt=0;umfang=0`)
@Kreis(`TANGENTE01;k=0;M;rgb(var(--color-text,51,51,51));0;radius=4;inhalt=0;umfang=0`)
@Strecke(`TANGENTE01;[[-5.5;4];[5.5;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`TANGENTE01;[[-5.5;-2];[5.5;-2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px`)
@Strecke(`TANGENTE01;[[0;0];[0;4]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`TANGENTE01;[[0;3.68];[0.32;3.68];[0.32;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Punkt(`TANGENTE01;M=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`TANGENTE01;B=0;0;4;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`TANGENTE01;P=0;-3.464102;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@Punkt(`TANGENTE01;Q=0;3.464102;-2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`TANGENTE01;[-3;4.55];$\Large \text{Tangente }t$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`TANGENTE01;[0;-1.48];$\Large \text{Sekante }s$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`TANGENTE01;[-0.42;-0.18];$\Large M$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TANGENTE01;[0.42;4.47];$\Large B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`TANGENTE01;[-3.67;-2.47];$\Large P$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`TANGENTE01;[3.67;-2.47];$\Large Q$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`TANGENTE01;[0.3;2];$\Large r$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TANGENTE01;[0.9;3.47];$\Large 90^\circ$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die blaue Sekante $s$ hat mit der Kreislinie die beiden Schnittpunkte $P$ und $Q$ gemeinsam. Die Strecke zwischen diesen Punkten heißt Sehne. Bis auf ihre beiden Endpunkte liegt sie im Kreisinneren. Die Sekante ist dagegen die gesamte, in beide Richtungen unbegrenzte Gerade.

Die rote Tangente $t$ hat mit der Kreislinie nur den Berührpunkt $B$ gemeinsam. Alle anderen Punkte der Tangente liegen außerhalb des Kreises.

{{|>}} Eine Kreistangente ist im Berührpunkt orthogonal zur zugehörigen Radiusstrecke. In der Abbildung ist deshalb der rechte Winkel zwischen der Tangente $t$ und der Radiusstrecke $\overline{MB}$ markiert:

$$
t\perp\overline{MB}.
$$

Um die Tangente in einem gegebenen Punkt $B$ der Kreislinie zu zeichnen, verbindet man $B$ mit dem Mittelpunkt $M$ und zeichnet durch $B$ die zu $\overline{MB}$ orthogonale Gerade. Zu jedem Punkt der Kreislinie gibt es genau eine solche Tangente.

{{|>}} Bei anderen Kurven darf die Beschreibung der Kreistangente nicht einfach übernommen werden. Dort beschreibt eine Tangente die Richtung der Kurve im betrachteten Punkt. Eine Tangente kann die Kurve durchaus auch schneiden; die Anzahl der gemeinsamen Punkte allein entscheidet deshalb nicht darüber, ob eine Gerade Tangente ist. Diese Unterscheidung wird später bei der Untersuchung von Funktionsgraphen wichtig.

{{|>}} An einer Ecke eines Vielecks treffen dagegen zwei unterschiedliche Seitenrichtungen aufeinander. Dort gibt es keine eindeutige Tangentenrichtung wie am Kreis. Geraden, die eine konvexe Figur berühren und die gesamte Figur auf einer Seite der Geraden lassen, werden Stützgeraden genannt. Das Quadrat zeigt zwei solcher Geraden durch denselben Eckpunkt $E$.

<center>

@Koordinatensystem(`xmin=-3.9;xmax=3.7;ymin=-0.9;ymax=4.45;width=580;id=TANGENTE02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`TANGENTE02;[[-3.9;-0.9];[3.7;-0.9];[3.7;4.45];[-3.9;4.45]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`TANGENTE02;[[0;0];[2;0];[2;2];[0;2]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`TANGENTE02;[[0;0];[2;0];[2;2];[0;2];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`TANGENTE02;[[-2.4;-0.4];[1.6;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`TANGENTE02;[[-3.4;-0.266667];[2.7;3.8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px`)
@Punkt(`TANGENTE02;E=0;0;2;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`TANGENTE02;[-0.3;2.3];$\Large E$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TANGENTE02;[1.65;3.95];$\Large g_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`TANGENTE02;[3.1;3.85];$\Large g_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

{{|>}} Die beiden Stützgeraden $g_1$ und $g_2$ haben mit dem Quadrat jeweils nur den Eckpunkt $E$ gemeinsam. Keine der beiden verläuft durch das Innere des Quadrats. Durch $E$ lassen sich sogar unendlich viele Stützgeraden mit unterschiedlichen Richtungen legen.

Mehrere mögliche Stützgeraden bedeuten aber nicht, dass die Ecke eine eindeutige Tangente besitzt. Am Kreis ist die Tangente in jedem Punkt der Kreislinie eindeutig bestimmt; an der Ecke des Quadrats sind dagegen viele Stützgeraden möglich.

***************************
