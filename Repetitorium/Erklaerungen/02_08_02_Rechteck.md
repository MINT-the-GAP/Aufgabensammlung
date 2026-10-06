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

comment: Eigenschaften, Diagonalen, Flächeninhalt und Umfang des Rechtecks als spezielles Viereck.

author: Martin Lommatzsch

-->

# Rechteck

{{|>}}
***************************

Ein Rechteck ist ein Viereck mit vier rechten Winkeln. Die gegenüberliegenden Seiten sind jeweils parallel zueinander und gleich lang. Zwei benachbarte Seiten werden mit $a$ und $b$ bezeichnet.

<center>

@Koordinatensystem(`xmin=-1;xmax=7;ymin=-1;ymax=4;width=640;id=VIERECKRECHTECK;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`VIERECKRECHTECK;[[-1;-1];[7;-1];[7;4];[-1;4]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`VIERECKRECHTECK;[[0;0];[6;0];[6;3];[0;3]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`VIERECKRECHTECK;[[0;0];[6;0];[6;3];[0;3];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`VIERECKRECHTECK;[[0;0];[6;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Strecke(`VIERECKRECHTECK;[[0;3];[6;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`VIERECKRECHTECK;[[0.22;0];[0.22;0.22];[0;0.22]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKRECHTECK;[[6;0.22];[5.78;0.22];[5.78;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKRECHTECK;[[5.78;3];[5.78;2.78];[6;2.78]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKRECHTECK;[[0;2.78];[0.22;2.78];[0.22;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`VIERECKRECHTECK;[-0.3;-0.3];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKRECHTECK;[6.3;-0.3];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKRECHTECK;[6.3;3.3];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKRECHTECK;[-0.3;3.3];$\Large D$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKRECHTECK;[3;-0.4];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKRECHTECK;[6.4;1.5];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKRECHTECK;[3;3.4];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKRECHTECK;[-0.4;1.5];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKRECHTECK;[4.65;2.58];$\Large d$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`VIERECKRECHTECK;[4.65;0.4];$\Large e$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

{{|>}} Für die Seitenlängen gilt

$$
\begin{aligned}
\left|\overline{AB}\right|&=\left|\overline{CD}\right|=a,\\
\left|\overline{BC}\right|&=\left|\overline{DA}\right|=b.
\end{aligned}
$$

Jeder Innenwinkel beträgt $90^\circ$. Die Summe der vier Innenwinkel ist $360^\circ$.

{{|>}} Die grüne Diagonale $\overline{AC}$ hat die Länge $d$, die blaue Diagonale $\overline{BD}$ die Länge $e$. Beim Rechteck sind beide Diagonalen gleich lang und halbieren einander:

$$
d=e.
$$

Die Diagonalen stehen im Allgemeinen nicht orthogonal aufeinander. Das ist beim Rechteck nur dann der Fall, wenn es zugleich ein Quadrat ist.

{{|>}} Der Flächeninhalt ist das Produkt der beiden benachbarten Seitenlängen. Der Umfang ergibt sich als Summe der vier Seitenlängen:

$$
\begin{aligned}
A&=a\cdot b,\\
U&=a+b+a+b=2a+2b=2(a+b).
\end{aligned}
$$

Der Umfang wird in einer Längeneinheit, beispielsweise $\mathrm{cm}$, angegeben. Der Flächeninhalt wird in einer Flächeneinheit, beispielsweise $\mathrm{cm}^2$, angegeben.

{{|>}} Ein Rechteck muss keine unterschiedlich langen Nachbarseiten haben. Falls $a=b$ ist, handelt es sich um ein Quadrat. Jedes Quadrat ist also ein Rechteck, aber nicht jedes Rechteck ist ein Quadrat.

***************************
