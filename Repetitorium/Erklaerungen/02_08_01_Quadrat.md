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













tags: Erklärung, Quadrat

comment: Eigenschaften, Seiten, Flächeninhalt und Umfang eines Quadrats.

author: Martin Lommatzsch

-->

# Quadrat

{{|>}}
***************************

Ein Quadrat ist ein Rechteck, bei dem alle vier Seiten gleich lang sind. Es besitzt vier rechte Winkel. Gegenüberliegende Seiten sind parallel zueinander.

<center>

@Koordinatensystem(`xmin=-1;xmax=5;ymin=-1;ymax=5;width=520;id=VIERECKQUADRAT;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`VIERECKQUADRAT;[[-1;-1];[5;-1];[5;5];[-1;5]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`VIERECKQUADRAT;[[0;0];[4;0];[4;4];[0;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`VIERECKQUADRAT;[[0;0];[4;0];[4;4];[0;4];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`VIERECKQUADRAT;[[0.22;0];[0.22;0.22];[0;0.22]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKQUADRAT;[[4;0.22];[3.78;0.22];[3.78;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKQUADRAT;[[3.78;4];[3.78;3.78];[4;3.78]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKQUADRAT;[[0;3.78];[0.22;3.78];[0.22;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`VIERECKQUADRAT;[-0.3;-0.3];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKQUADRAT;[4.3;-0.3];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKQUADRAT;[4.3;4.3];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKQUADRAT;[-0.3;4.3];$\Large D$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKQUADRAT;[2;-0.4];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKQUADRAT;[4.4;2];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKQUADRAT;[2;4.4];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKQUADRAT;[-0.4;2];$\Large a$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die Eckpunkte heißen $A$, $B$, $C$ und $D$. Da alle vier Seiten dieselbe Länge $a$ besitzen, gilt

$$
\left|\overline{AB}\right|
=\left|\overline{BC}\right|
=\left|\overline{CD}\right|
=\left|\overline{DA}\right|=a.
$$

Jeder Innenwinkel beträgt $90^\circ$. Die Innenwinkelsumme ist deshalb $4\cdot90^\circ=360^\circ$.

{{|>}} Der Flächeninhalt eines Rechtecks ergibt sich aus dem Produkt zweier benachbarter Seitenlängen. Beim Quadrat sind beide gleich $a$. Damit gilt

$$
A=a\cdot a=a^2.
$$

Für den Umfang werden die vier gleich langen Seiten addiert:

$$
U=a+a+a+a=4a.
$$

Werden die Seitenlängen in Zentimetern angegeben, wird der Umfang in $\mathrm{cm}$ und der Flächeninhalt in $\mathrm{cm}^2$ angegeben.

{{|>}} Die Strecken $\overline{AC}$ und $\overline{BD}$ sind die Diagonalen. Sie sind gleich lang, halbieren einander und sind orthogonal zueinander. Jede Diagonale halbiert außerdem die beiden Innenwinkel an ihren Endpunkten.

Ein Quadrat ist somit nicht nur ein besonderes Rechteck, sondern auch eine besondere Raute: Es hat sowohl vier rechte Winkel als auch vier gleich lange Seiten.

***************************
