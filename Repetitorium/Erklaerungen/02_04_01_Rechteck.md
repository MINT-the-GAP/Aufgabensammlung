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













tags: Erklärung, Rechteck

comment: In diesem Abschnitt werden die Eigenschaften des Rechtecks, seine Seiten und Diagonalen sowie Flächeninhalt und Umfang erklärt.

author: Martin Lommatzsch

-->

# Rechteck

{{|>}}
***************************

Nachdem Winkel anhand von Strecken und Geraden eingeführt wurden, werden nun am Rechteck weitere wichtige Größen für ebene geometrische Figuren betrachtet. Eine Ebene erstreckt sich in zwei Dimensionen.

Ein Rechteck ist ein Viereck mit vier rechten Winkeln. Jeder dieser Winkel beträgt $90^\circ$, sodass die Innenwinkelsumme $4\cdot90^\circ=360^\circ$ beträgt. Die gegenüberliegenden Seiten sind jeweils gleich lang und parallel zueinander.

<center>

@Koordinatensystem(`xmin=0;xmax=10;ymin=0;ymax=5;width=640;id=RECHTECK01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`RECHTECK01;[[0;0];[10;0];[10;5];[0;5]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)

@Flaeche(`RECHTECK01;[[1;1];[9;1];[9;4];[1;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`RECHTECK01;[[1;1];[9;1];[9;4];[1;4];[1;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`RECHTECK01;[[1;1.22];[1.22;1.22];[1.22;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`RECHTECK01;[[8.78;1];[8.78;1.22];[9;1.22]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`RECHTECK01;[[9;3.78];[8.78;3.78];[8.78;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`RECHTECK01;[[1.22;4];[1.22;3.78];[1;3.78]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`RECHTECK01;[0.68;0.70];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`RECHTECK01;[9.32;0.70];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`RECHTECK01;[9.32;4.30];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`RECHTECK01;[0.68;4.30];$\Large D$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`RECHTECK01;[5;0.58];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`RECHTECK01;[9.40;2.5];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`RECHTECK01;[5;4.38];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`RECHTECK01;[0.60;2.5];$\Large d$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die Abbildung zeigt, wie die Eckpunkte und Seiten eines Rechtecks benannt werden. Die Eckpunkte heißen $A$, $B$, $C$ und $D$, die Seitenlängen $a$, $b$, $c$ und $d$. Für die gegenüberliegenden Seiten gilt

$$
\begin{aligned}
\left|\overline{AB}\right|&=a=c=\left|\overline{CD}\right|,\\
\left|\overline{BC}\right|&=b=d=\left|\overline{DA}\right|.
\end{aligned}
$$

Die Strecken $\overline{AC}$ und $\overline{DB}$ verbinden jeweils zwei gegenüberliegende Eckpunkte. Sie werden Diagonalen genannt.

{{|>}} Eine wichtige Größe ebener geometrischer Figuren ist der Flächeninhalt $A$. Er gibt an, wie groß die von den Seiten eingeschlossene Fläche ist. Eine Fläche besitzt eine Ausdehnung in zwei Dimensionen. Beispiele dafür sind die Fläche eines Blattes Papier, einer Tischplatte oder einer Tafel.

Eine Einheit des Flächeninhalts ist der Quadratmeter $\mathrm{m}^2$. Ein Quadratmeter ist der Flächeninhalt eines Quadrats mit einer Seitenlänge von einem Meter. Dieses Quadrat ist ein besonderes Rechteck mit $a=b=1\,\mathrm{m}$. Es gilt

$$
1\,\mathrm{m}\cdot1\,\mathrm{m}=1\,\mathrm{m}^2.
$$

{{|>}} Der Flächeninhalt eines Rechtecks ergibt sich aus dem Produkt der beiden benachbarten Seitenlängen $a$ und $b$:

$$
A=a\cdot b.
$$

Werden beide Seitenlängen in Metern angegeben, erhält man den Flächeninhalt in Quadratmetern. Werden beide in Zentimetern angegeben, erhält man ihn in Quadratzentimetern.

{{|>}} Die zweite wichtige Größe ist der Umfang $U$. Er beschreibt die Länge des gesamten Randes und ist damit eine Längengröße. Für den Umfang werden die Längen aller vier Seiten addiert. Da die gegenüberliegenden Seiten gleich lang sind, gilt für das Rechteck

$$
\begin{aligned}
U&=a+b+c+d\\
 &=a+b+a+b\\
 &=2a+2b\\
 &=2(a+b).
\end{aligned}
$$

Der Umfang wird beispielsweise in Metern oder Zentimetern angegeben, der Flächeninhalt dagegen in Quadratmetern oder Quadratzentimetern.

***************************
