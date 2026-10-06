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













tags: Erklärung, Oktaeder, Tetraeder

comment: In diesem Abschnitt werden Oktaeder und Tetraeder als besondere Spitzkörper sowie ihre Oberflächen und Volumina erklärt.

author: Martin Lommatzsch

-->

# Spitzkörper

{{|>}}
***************************

Viele räumliche Körper lassen sich aus einfacheren Körpern zusammensetzen. Bei Spitzkörpern helfen insbesondere die Eigenschaften der Pyramide: Ihr Volumen ist ein Drittel des Produkts aus Grundflächeninhalt und Körperhöhe. Diese Höhe ist der orthogonale Abstand der Spitze von der Grundebene. Zwei besondere Beispiele sind das Oktaeder und das Tetraeder.

{{|>}} Ein Oktaeder ist ein Körper mit acht Flächen. Das hier gezeigte Oktaeder entsteht aus zwei gleich großen geraden Pyramiden, die an ihren rechteckigen Grundflächen zusammengesetzt werden. Das gemeinsame Rechteck besitzt die Seitenlängen $a$ und $b$. Beide Höhenstrecken sind orthogonal zur gemeinsamen Grundebene und treffen sich im Mittelpunkt des Rechtecks. Jede der beiden Pyramiden hat die Körperhöhe $h$, sodass der Abstand der auf verschiedenen Seiten der Grundebene liegenden Spitzen $2h$ beträgt. Die gestrichelten Kanten liegen auf der Rückseite.

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.35;ymin=-3.25;ymax=3.95;width=540;id=SPITZ01;achsen=0;grid=0;border=0;static=1`)
@Flaeche(`SPITZ01;[[-0.7;-3.25];[5.35;-3.25];[5.35;3.95];[-0.7;3.95]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`SPITZ01;[[0;0];[4;0];[2.353553;3.353553]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`SPITZ01;[[4;0];[4.707107;0.707107];[2.353553;3.353553]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`SPITZ01;[[0;0];[4;0];[2.353553;-2.646447]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 91.18%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`SPITZ01;[[4;0];[4.707107;0.707107];[2.353553;-2.646447]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 80.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`SPITZ01;[[0;0];[0.707107;0.707107];[4.707107;0.707107]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`SPITZ01;[[2.353553;3.353553];[0.707107;0.707107];[2.353553;-2.646447]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`SPITZ01;[[0;0];[4;0];[4.707107;0.707107];[2.353553;3.353553];[0;0];[2.353553;-2.646447];[4.707107;0.707107]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`SPITZ01;[[2.353553;3.353553];[4;0];[2.353553;-2.646447]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`SPITZ01;[[2.353553;-2.646447];[2.353553;3.353553]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@Strecke(`SPITZ01;[[2;0];[2.353553;3.353553];[4.353553;0.353553]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@KoordText(`SPITZ01;[1.8;-0.3];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ01;[4.75;0.13];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ01;[0.73;1.85];$\Large s$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ01;[2.78;-1.2];$\Large 2h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SPITZ01;[1.72;1.18];$\Large h_{\Delta_a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Strecke(`SPITZ01;[[3.7;1.333883];[4.58;1.8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@KoordText(`SPITZ01;[4.94;1.82];$\Large h_{\Delta_b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

{{|>}} Die gemeinsame Grundfläche liegt im Inneren und gehört nicht zur Oberfläche des zusammengesetzten Körpers. Außen bleiben acht Dreiecke: vier mit der Grundseite $a$ und der Dreieckshöhe $h_{\Delta_a}$ sowie vier mit der Grundseite $b$ und der Dreieckshöhe $h_{\Delta_b}$. Die Seitenkante $s$ ist weder die Körperhöhe $h$ noch eine dieser Dreieckshöhen.

$$
\begin{aligned}
O &=4\cdot\frac12 a h_{\Delta_a}
   +4\cdot\frac12 b h_{\Delta_b}\\
  &=2a h_{\Delta_a}+2b h_{\Delta_b},\\
V &=2\cdot\frac13 abh=\frac23 abh.
\end{aligned}
$$

{{|>}} Da die Höhenstrecken orthogonal zur Grundebene verlaufen und im Mittelpunkt des Rechtecks enden, bilden sie mit den Verbindungen zu den Seitenmitten rechtwinklige Dreiecke. Deren Hypotenusen sind die Dreieckshöhen der Seitenflächen. Diese lassen sich mit dem Satz des Pythagoras berechnen:

$$
h_{\Delta_a}=\sqrt{h^2+\left(\frac b2\right)^2},
\qquad
h_{\Delta_b}=\sqrt{h^2+\left(\frac a2\right)^2}.
$$

{{|>}} Sind alle zwölf Kanten gleich lang, handelt es sich um ein regelmäßiges Oktaeder. Seine acht Flächen sind dann gleichseitige Dreiecke. In diesem besonderen Fall ist das gemeinsame Rechteck ein Quadrat, und für die Kantenlänge $a$ gilt:

$$
b=a,\qquad
s=a,\qquad
h=\frac{a}{\sqrt2},\qquad
h_{\Delta_a}=h_{\Delta_b}=\frac{\sqrt3}{2}a.
$$

Damit vereinfachen sich die Gleichungen zu

$$
O=2\sqrt3\,a^2,
\qquad
V=\frac{\sqrt2}{3}a^3.
$$

{{|>}} Ein Tetraeder ist eine dreiseitige Pyramide. Es besitzt vier dreieckige Flächen, sechs Kanten und vier Eckpunkte. Jeder konvexe Polyeder mit genau vier Flächen ist ein Tetraeder. Sind alle sechs Kanten gleich lang, sind die vier Flächen gleichseitige Dreiecke; dann spricht man von einem regelmäßigen Tetraeder. Ein solches Tetraeder mit der Kantenlänge $s$ zeigt das folgende Schrägbild. Die verdeckten Kanten sind gestrichelt eingezeichnet.

<center>

@Koordinatensystem(`xmin=-0.6;xmax=4.65;ymin=-0.6;ymax=4.3;width=520;id=SPITZ02;achsen=0;grid=0;border=0;static=1`)
@Flaeche(`SPITZ02;[[-0.6;-0.6];[4.65;-0.6];[4.65;4.3];[-0.6;4.3]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`SPITZ02;[[0;0];[4;0];[2.408248;3.674235]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`SPITZ02;[[0;0];[3.224745;1.224745];[4;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`SPITZ02;[[3.224745;1.224745];[2.408248;3.674235]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`SPITZ02;[[0;0];[4;0];[2.408248;3.674235];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`SPITZ02;[[2.408248;0.408248];[2.408248;3.674235]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@Strecke(`SPITZ02;[[2.478959;0.478959];[2.478959;0.678959];[2.408248;0.608248]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Strecke(`SPITZ02;[[2.408248;0.408248];[3.224745;1.224745]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@KoordText(`SPITZ02;[-0.25;-0.17];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ02;[4.26;-0.15];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ02;[2.97;1.42];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ02;[2.408248;3.944235];$\Large S$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ02;[2.098248;0.248248];$\Large F$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ02;[2.628248;2.17];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SPITZ02;[2;-0.3];$\Large s$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ02;[0.88;1.73];$\Large s$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ02;[3.48;2];$\Large s$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die Höhenstrecke verläuft von der Spitze $S$ orthogonal zur Ebene der Grundfläche $ABC$ und hat die Länge $h$. Ihr Fußpunkt $F$ ist beim regelmäßigen Tetraeder der Mittelpunkt des gleichseitigen Grunddreiecks. Weil die räumliche Figur schräg auf die Zeichenebene abgebildet wird, erscheinen die gleich langen Kanten im Bild unterschiedlich lang.

{{|>}} Das Netz besteht aus vier gleichseitigen Dreiecken mit der Seitenlänge $s$. Die gestrichelten Verbindungen zwischen den Dreiecken sind Faltkanten. Die Höhe $h_\Delta$ eines solchen Dreiecks ist von der Körperhöhe $h$ zu unterscheiden:

<center>

@Koordinatensystem(`xmin=-2.6;xmax=6.6;ymin=-4.05;ymax=4.1;width=580;id=SPITZ03;achsen=0;grid=0;border=0;static=1`)
@Flaeche(`SPITZ03;[[-2.6;-4.05];[6.6;-4.05];[6.6;4.1];[-2.6;4.1]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`SPITZ03;[[0;0];[4;0];[2;3.464102]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`SPITZ03;[[0;0];[2;3.464102];[-2;3.464102]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 91.18%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`SPITZ03;[[4;0];[2;3.464102];[6;3.464102]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 80.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Flaeche(`SPITZ03;[[0;0];[4;0];[2;-3.464102]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`SPITZ03;[[-2;3.464102];[6;3.464102];[2;-3.464102];[-2;3.464102]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`SPITZ03;[[0;0];[4;0];[2;3.464102];[0;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`SPITZ03;[[2;0];[2;3.464102]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`SPITZ03;[[2.2;0];[2.2;0.2];[2;0.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Strecke(`SPITZ03;[[0.5;0];[0.499695;0.01745];[0.498782;0.034878];[0.497261;0.052264];[0.495134;0.069587];[0.492404;0.086824];[0.489074;0.103956];[0.485148;0.120961];[0.480631;0.137819];[0.475528;0.154508];[0.469846;0.17101];[0.463592;0.187303];[0.456773;0.203368];[0.449397;0.219186];[0.441474;0.234736];[0.433013;0.25];[0.424024;0.26496];[0.414519;0.279596];[0.404508;0.293893];[0.394005;0.307831];[0.383022;0.321394];[0.371572;0.334565];[0.35967;0.347329];[0.347329;0.35967];[0.334565;0.371572];[0.321394;0.383022];[0.307831;0.394005];[0.293893;0.404508];[0.279596;0.414519];[0.26496;0.424024];[0.25;0.433013]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@KoordText(`SPITZ03;[0.92;0.62];$\Large 60^\circ$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ03;[1.08;0.24];$\Large s$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ03;[0.7;3.73];$\Large s$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SPITZ03;[2.5;1.6];$\Large h_\Delta$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

$$
h_\Delta=\frac{\sqrt3}{2}s,
\qquad
G=\frac12 s h_\Delta=\frac{\sqrt3}{4}s^2.
$$

{{|>}} Im gleichseitigen Grunddreieck teilt der Mittelpunkt $F$ jede Seitenhalbierende im Verhältnis $2:1$. Daher ist der Abstand von $F$ zu einem Eckpunkt $s/\sqrt3$. Die Körperhöhe folgt aus dem rechtwinkligen Dreieck $SFC$:

$$
\begin{aligned}
h^2+\left(\frac{s}{\sqrt3}\right)^2&=s^2,\\
h&=s\sqrt{\frac23}.
\end{aligned}
$$

{{|>}} Die Oberfläche des regelmäßigen Tetraeders besteht aus vier gleich großen Dreiecken. Für das Volumen gilt die Volumengleichung der Pyramide:

$$
\begin{aligned}
O&=4\cdot\frac{\sqrt3}{4}s^2=\sqrt3\,s^2,\\
V&=\frac13 G h\\
 &=\frac13\cdot\frac{\sqrt3}{4}s^2\cdot s\sqrt{\frac23}
  =\frac{\sqrt2}{12}s^3.
\end{aligned}
$$

{{|>}} Zwei Kanten, die sich an einer Ecke des regelmäßigen Tetraeders treffen, schließen einen Winkel von $60^\circ$ ein. Die oft genannten ungefähr $109{,}5^\circ$ beziehen sich auf einen anderen Winkel: Er liegt zwischen zwei Verbindungen vom Mittelpunkt des gesamten Tetraeders zu zwei seiner Eckpunkte. Dieser Mittelpunkt liegt im Inneren des Körpers und ist nicht der Grundflächenmittelpunkt $F$.

{{|>}} Oberflächeninhalte werden in Quadrateinheiten wie $\mathrm{cm}^2$ angegeben, Volumina in Kubikeinheiten wie $\mathrm{cm}^3$. Vor einer Berechnung müssen alle Längen in derselben Einheit vorliegen.

***************************
