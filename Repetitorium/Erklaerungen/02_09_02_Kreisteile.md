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













tags: Erklärung, Bogenmaß, Kreisausschnitt, Kreisabschnitt

comment: In diesem Abschnitt werden Bogenmaß, Kreisbogen, Kreisausschnitt und Kreisabschnitt ausführlich erklärt.

author: Martin Lommatzsch

-->

# Kreisteile



{{|>}}
***************************


Der Einheitskreis mit dem Radius $r=1$ hat den Umfang $U=2\pi$. Ein vollständiger Umlauf entspricht dem vollen Winkel $360^\circ$. Im Bogenmaß wird derselbe Winkel mit $2\pi\,\mathrm{rad}$ beschrieben:


$$
\begin{aligned}
2\pi\,\mathrm{rad} &= 360^\circ,\\
1^\circ &= \frac{\pi}{180}\,\mathrm{rad},\\
1\,\mathrm{rad} &= \frac{180^\circ}{\pi}.
\end{aligned}
$$


{{|>}} Radiant ist die Einheit des Bogenmaßes. Ein Winkel von $1\,\mathrm{rad}$ schneidet einen Kreisbogen aus, dessen Länge gleich dem Radius ist. Das Bogenmaß eines Winkels ist das Verhältnis der Bogenlänge zum Radius. Es ist daher ein Winkelmaß und keine Längeneinheit.


{{|>}} Bezeichnen $\alpha_{\mathrm{Grad}}$ und $\alpha_{\mathrm{rad}}$ die Zahlenwerte desselben Winkels im Gradmaß beziehungsweise im Bogenmaß, ergeben sich die Umrechnungen:


$$
\begin{aligned}
\alpha_{\mathrm{rad}}
  &= \frac{\pi}{180}\,\alpha_{\mathrm{Grad}},\\
\alpha_{\mathrm{Grad}}
  &= \frac{180}{\pi}\,\alpha_{\mathrm{rad}}.
\end{aligned}
$$


Bei der Verwendung trigonometrischer Funktionen muss am Taschenrechner das passende Winkelmaß eingestellt sein: DEG für das Gradmaß und RAD für das Bogenmaß.


{{|>}} Aus dem Kreisumfang $U=2\pi r$ und dem Flächeninhalt $A=\pi r^2$ lassen sich Teilgrößen des Kreises bestimmen. Zwei Radien und der dazwischenliegende Kreisbogen begrenzen einen Kreisausschnitt beziehungsweise Kreissektor. Die folgende Abbildung zeigt diese Größen an einem Viertelkreis. Die Bezeichnungen und Gleichungen gelten auch für andere Mittelpunktswinkel $\alpha$.


<center>

@Koordinatensystem(`xmin=-0.6;xmax=4.6;ymin=-0.6;ymax=4.6;width=520;id=KTEIL01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`KTEIL01;[[-0.6;-0.6];[4.6;-0.6];[4.6;4.6];[-0.6;4.6]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)

@Punkt(`KTEIL01;M=0;0;0;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`KTEIL01;P=0;4;0;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`KTEIL01;Q=0;0;4;rgb(var(--color-text,51,51,51));0;fix`)
@Kreissektor(`KTEIL01;[M;P;Q];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;S=0`)
@Strecke(`KTEIL01;[[0;4];[0;0];[4;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`KTEIL01;[[4;0];[3.9988;0.09816];[3.99518;0.19627];[3.98916;0.29426];[3.98074;0.39207];[3.96992;0.48964];[3.95671;0.58692];[3.94111;0.68385];[3.92314;0.78036];[3.90281;0.8764];[3.88013;0.97192];[3.8551;1.06685];[3.82776;1.16114];[3.79811;1.25473];[3.76618;1.34756];[3.73197;1.43958];[3.69552;1.53073];[3.65684;1.62097];[3.61596;1.71022];[3.5729;1.79845];[3.52769;1.88559];[3.48035;1.97159];[3.43091;2.05641];[3.37941;2.13999];[3.32588;2.22228];[3.27034;2.30323];[3.21283;2.3828];[3.15339;2.46093];[3.09204;2.53757];[3.02884;2.61269];[2.9638;2.68624];[2.89699;2.75816];[2.82843;2.82843];[2.75816;2.89699];[2.68624;2.9638];[2.61269;3.02884];[2.53757;3.09204];[2.46093;3.15339];[2.3828;3.21283];[2.30323;3.27034];[2.22228;3.32588];[2.13999;3.37941];[2.05641;3.43091];[1.97159;3.48035];[1.88559;3.52769];[1.79845;3.5729];[1.71022;3.61596];[1.62097;3.65684];[1.53073;3.69552];[1.43958;3.73197];[1.34756;3.76618];[1.25473;3.79811];[1.16114;3.82776];[1.06685;3.8551];[0.97192;3.88013];[0.8764;3.90281];[0.78036;3.92314];[0.68385;3.94111];[0.58692;3.95671];[0.48964;3.96992];[0.39207;3.98074];[0.29426;3.98916];[0.19627;3.99518];[0.09816;3.9988];[0;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`KTEIL01;[[4;0];[0;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`KTEIL01;[[0;0];[2;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`KTEIL01;[[0.63;0];[0.62865;0.0412];[0.62461;0.08223];[0.61789;0.12291];[0.60853;0.16306];[0.59657;0.20251];[0.58204;0.24109];[0.56503;0.27864];[0.5456;0.315];[0.52383;0.35001];[0.49981;0.38352];[0.47366;0.41539];[0.44548;0.44548];[0.41539;0.47366];[0.38352;0.49981];[0.35001;0.52383];[0.315;0.5456];[0.27864;0.56503];[0.24109;0.58204];[0.20251;0.59657];[0.16306;0.60853];[0.12291;0.61789];[0.08223;0.62461];[0.0412;0.62865];[0;0.63]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`KTEIL01;[0.4;0.16];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KTEIL01;[2;-0.25];$\Large r$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KTEIL01;[-0.25;2];$\Large r$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KTEIL01;[3.05;3.05];$\Large b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`KTEIL01;[2.34;2.14];$\Large s$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`KTEIL01;[1.24;0.9];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>


{{|>}} Der blaue Kreisbogen mit der Länge $b$ ist derselbe Anteil am gesamten Kreisumfang, den der Mittelpunktswinkel am vollen Winkel besitzt. Für die Bogenlänge gilt daher:


$$
b=\frac{\alpha_{\mathrm{Grad}}}{360}\cdot2\pi r
  =r\alpha_{\mathrm{rad}}.
$$


{{|>}} Der Flächeninhalt des Kreisausschnitts ist derselbe Anteil am Flächeninhalt des gesamten Kreises:


$$
\begin{aligned}
A_{\mathrm{Kreisausschnitt}}
  &= \frac{\alpha_{\mathrm{Grad}}}{360}\pi r^2\\
  &= \frac{br}{2}\\
  &= \frac{1}{2}r^2\alpha_{\mathrm{rad}}.
\end{aligned}
$$


{{|>}} Die rote Strecke zwischen den beiden Punkten der Kreislinie wird Sehne genannt; ihre Länge ist $s$. Die Sehne und der zugehörige Kreisbogen begrenzen einen Kreisabschnitt, auch Kreissegment genannt. Für einen kleineren Kreisabschnitt mit $0<\alpha_{\mathrm{Grad}}\leq180$ wird vom Kreisausschnitt das Dreieck mit der Grundseite $s$ und der Höhe $h$ abgezogen:


$$
\begin{aligned}
A_{\mathrm{Kreisabschnitt}}
  &= A_{\mathrm{Kreisausschnitt}}-A_{\mathrm{Dreieck}}\\
  &= \frac{\alpha_{\mathrm{Grad}}}{360}\pi r^2-\frac{sh}{2}\\
  &= \frac{br-sh}{2}.
\end{aligned}
$$


Dabei bezeichnet $h$ den orthogonalen Abstand des Mittelpunkts von der Sehne, wie in der Abbildung eingezeichnet.


***************************
