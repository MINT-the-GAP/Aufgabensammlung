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













tags: Erklärung, Parallelogramm

comment: Parallele Gegenseiten, Winkel, Höhe, Flächeninhalt und Umfang eines Parallelogramms.

author: Martin Lommatzsch

-->

# Parallelogramm

{{|>}}
***************************

Ein Parallelogramm ist ein Viereck, dessen gegenüberliegende Seiten jeweils parallel zueinander sind. Die gegenüberliegenden Seiten sind auch gleich lang. Benachbarte Seiten werden mit $a$ und $b$ bezeichnet.

<center>

@Koordinatensystem(`xmin=-1;xmax=9;ymin=-1;ymax=3.8;width=680;id=VIERECKPARALLELOGRAMM;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`VIERECKPARALLELOGRAMM;[[-1;-1];[9;-1];[9;3.8];[-1;3.8]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`VIERECKPARALLELOGRAMM;[[0;0];[6;0];[8;2.8];[2;2.8]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`VIERECKPARALLELOGRAMM;[[0;0];[6;0];[8;2.8];[2;2.8];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`VIERECKPARALLELOGRAMM;[[2;0];[2;2.8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`VIERECKPARALLELOGRAMM;[[2.22;0];[2.22;0.22];[2;0.22]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`VIERECKPARALLELOGRAMM;[-0.3;-0.3];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`VIERECKPARALLELOGRAMM;[[0.6;0];[0.599529;0.023757];[0.598119;0.047478];[0.59577;0.071123];[0.592486;0.094658];[0.588274;0.118043];[0.583138;0.141244];[0.577088;0.164223];[0.570133;0.186944];[0.562284;0.209373];[0.553553;0.231472];[0.543953;0.253209];[0.533501;0.274549];[0.522211;0.295458];[0.510103;0.315904];[0.497194;0.335854];[0.483506;0.355277];[0.469059;0.374143];[0.453877;0.392423];[0.437983;0.410087];[0.421402;0.427107];[0.40416;0.443458];[0.386284;0.459113];[0.367802;0.474048];[0.348743;0.48824]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKPARALLELOGRAMM;[[6.360368;0.504515];[6.312872;0.535267];[6.26277;0.561562];[6.21048;0.583179];[6.156437;0.599939];[6.101091;0.611703];[6.044903;0.618372];[5.988341;0.61989];[5.931876;0.616246];[5.875979;0.607469];[5.821114;0.593633];[5.76774;0.574852];[5.716299;0.551284];[5.667222;0.523124];[5.620916;0.490607];[5.577768;0.454004];[5.538136;0.41362];[5.502351;0.369791];[5.470711;0.322882];[5.443479;0.273284];[5.420882;0.22141];[5.403108;0.167691];[5.390306;0.112576];[5.382582;0.056523];[5.38;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKPARALLELOGRAMM;[[7.4;2.8];[7.400471;2.776243];[7.401881;2.752522];[7.40423;2.728877];[7.407514;2.705342];[7.411726;2.681957];[7.416862;2.658756];[7.422912;2.635777];[7.429867;2.613056];[7.437716;2.590627];[7.446447;2.568528];[7.456047;2.546791];[7.466499;2.525451];[7.477789;2.504542];[7.489897;2.484096];[7.502806;2.464146];[7.516494;2.444723];[7.530941;2.425857];[7.546123;2.407577];[7.562017;2.389913];[7.578598;2.372893];[7.59584;2.356542];[7.613716;2.340887];[7.632198;2.325952];[7.651257;2.31176]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKPARALLELOGRAMM;[[1.639632;2.295485];[1.687128;2.264733];[1.73723;2.238438];[1.78952;2.216821];[1.843563;2.200061];[1.898909;2.188297];[1.955097;2.181628];[2.011659;2.18011];[2.068124;2.183754];[2.124021;2.192531];[2.178886;2.206367];[2.23226;2.225148];[2.283701;2.248716];[2.332778;2.276876];[2.379084;2.309393];[2.422232;2.345996];[2.461864;2.38638];[2.497649;2.430209];[2.529289;2.477118];[2.556521;2.526716];[2.579118;2.57859];[2.596892;2.632309];[2.609694;2.687424];[2.617418;2.743477];[2.62;2.8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`VIERECKPARALLELOGRAMM;[6.3;-0.3];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKPARALLELOGRAMM;[8.3;3.05];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKPARALLELOGRAMM;[1.7;3.05];$\Large D$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKPARALLELOGRAMM;[3;-0.45];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKPARALLELOGRAMM;[7.42;1.4];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKPARALLELOGRAMM;[5;3.22];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKPARALLELOGRAMM;[0.56;1.4];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKPARALLELOGRAMM;[2.35;1.4];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VIERECKPARALLELOGRAMM;[0.99;0.45];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKPARALLELOGRAMM;[5.63;0.73];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKPARALLELOGRAMM;[7.01;2.35];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKPARALLELOGRAMM;[2.37;2.07];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Gegenüberliegende Innenwinkel sind gleich groß. Die Bögen markieren $\alpha$ bei $A$ und $C$ sowie $\beta$ bei $B$ und $D$. Dabei ist jeweils der gesamte Innenwinkel zwischen zwei Seiten gemeint, nicht ein Teilwinkel an der Höhe. Zwei benachbarte Innenwinkel ergänzen sich zu $180^\circ$:

$$
\alpha+\beta=180^\circ.
$$

Da die Winkel $\alpha$ und $\beta$ jeweils zweimal vorkommen, beträgt die Innenwinkelsumme $360^\circ$.

{{|>}} Die Diagonalen verbinden die jeweils gegenüberliegenden Eckpunkte. Sie halbieren einander. Bei einem Parallelogramm müssen sie weder gleich lang sein noch orthogonal aufeinander stehen.

Die Nachbarseiten $a$ und $b$ dürfen gleich lang sein. In diesem Fall ist das Parallelogramm eine Raute. Sind alle Innenwinkel rechtwinklig, ist es ein Rechteck. Treffen beide Bedingungen zu, ist es ein Quadrat.

{{|>}} Die rote Höhe $h$ steht orthogonal auf der Grundseite $a$. Sie ist der Abstand zwischen den beiden parallelen Seiten der Länge $a$, nicht die Länge der schrägen Seite $b$.

In der Zeichnung lässt sich das Dreieck links der Höhe abtrennen und nach rechts verschieben. Es entsteht ein Rechteck mit der Breite $a$ und der Höhe $h$. Der Flächeninhalt ändert sich dabei nicht. Daher gilt

$$
A=a\cdot h.
$$

Allgemein kann jede Seite als Grundseite $g$ gewählt werden. Mit der zugehörigen orthogonalen Höhe $h_g$ ist der Flächeninhalt $A=g\cdot h_g$.

{{|>}} Da jede der beiden Seitenlängen zweimal vorkommt, ist der Umfang

$$
U=a+b+a+b=2a+2b=2(a+b).
$$

***************************
