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













tags: Erklärung, Vektorgerade, Abstand, Schnittwinkel

comment: In diesem Abschnitt werden Geraden durch Vektoren beschrieben, ihre Darstellungsformen unterschieden und Abstände, Lotfußpunkte, Schnittwinkel sowie Lagebeziehungen untersucht.

author: Martin Lommatzsch

-->

# Vektorielle Geraden

{{|>}}
***************************

Wie in der Geometrie werden auch mithilfe von Vektoren nach und nach komplexere geometrische Objekte beschrieben. Den Anfang bilden Geraden. Ihre vektorielle Darstellung erinnert an die Gleichung einer linearen Funktion, lässt sich aber ebenso im dreidimensionalen Raum verwenden:

$$
g:\quad\vec{x}=\vec{b}+\chi\vec{m},
\qquad \chi\in\mathbb R,\quad\vec{m}\ne\vec{0}.
$$

Diese Darstellung heißt Parameterform. Der Stützvektor $\vec{b}$ führt vom Koordinatenursprung zu einem Punkt $B$ der Geraden. Der Richtungsvektor $\vec{m}$ gibt ihre Richtung an. Durch alle reellen Werte des Parameters $\chi$ werden sämtliche Punkte der Geraden erreicht; $\vec{x}$ ist jeweils der Ortsvektor des erreichten Punktes.

Für $\chi=0$ erhält man den Stützpunkt, für $\chi=1$ den Ortsvektor $\vec{b}+\vec{m}$. Negative Parameterwerte führen vom Stützpunkt aus entgegen der Orientierung von $\vec{m}$. Ein anderer Stützpunkt auf derselben Geraden oder ein von null verschiedenes Vielfaches des Richtungsvektors beschreibt dieselbe Gerade. Der Richtungsvektor ist dabei keine einzelne Zahl wie die Steigung einer linearen Funktion.

{{|>}} In der Ebene gibt es außerdem die Achsenabschnittsform:

$$
\frac{x}{x_0}+\frac{y}{y_0}=1,
\qquad x_0\ne0,\quad y_0\ne0.
$$

Die Gerade schneidet die Abszissenachse in $X(x_0\mid0)$ und die Ordinatenachse in $Y(0\mid y_0)$. Diese Form setzt zwei von null verschiedene Achsenabschnitte voraus. Für eine Gerade durch den Ursprung oder eine Gerade parallel zu einer Koordinatenachse ist sie in dieser Form nicht verwendbar.

Im folgenden Beispiel sind $x_0=4$ und $y_0=5$. Dieselbe Gerade kann auf drei Arten beschrieben werden:

$$
\begin{aligned}
\frac{x}{4}+\frac{y}{5}&=1,\\
y&=-\frac54x+5,\\
g:\quad\vec{x}
&=\begin{pmatrix}0\\5\end{pmatrix}
+\chi\begin{pmatrix}4\\-5\end{pmatrix}.
\end{aligned}
$$

<center>

@Koordinatensystem(`xmin=-0.9;xmax=6.2;ymin=-0.9;ymax=6.2;width=620;id=VGERADE01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VGERADE01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`VGERADE01;g=0;-1.25*x+5;rgb(var(--color-text,51,51,51))`)
@Strecke(`VGERADE01;[[0;0];[4;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;4px`)
@Strecke(`VGERADE01;[[0;0];[0;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;4px`)
@Punkt(`VGERADE01;X=0;4;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@Punkt(`VGERADE01;Y=0;0;5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`VGERADE01;[2;0.42];$\Large x_0=4$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VGERADE01;[0.53;2.5];$\Large y_0=5$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VGERADE01;[4.35;0.35];$\Large X$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VGERADE01;[0.28;5.3];$\Large Y$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VGERADE01;[3.85;1];$\Large g$;rgb(var(--color-text,51,51,51));1`)

</center>

Die räumliche Gleichung $\frac{x}{x_0}+\frac{y}{y_0}+\frac{z}{z_0}=1$ beschreibt bei von null verschiedenen Nennern dagegen eine Ebene, keine Gerade. Die Parameterform einer Geraden benötigt auch im Raum nur einen freien Parameter.

{{|>}} Eine weitere Darstellung verwendet die Orthogonalitätsbedingung. Für eine Gerade in der Ebene wählt man einen Normalenvektor $\vec{n}\ne\vec{0}$, der orthogonal zu ihrem Richtungsvektor ist:

$$
\vec{m}\cdot\vec{n}=0.
$$

Für jeden Punkt auf der Geraden ist auch $\vec{x}-\vec{b}$ orthogonal zu $\vec{n}$. Damit lautet die Normalform, auch Normalenform genannt:

$$
\begin{aligned}
(\vec{x}-\vec{b})\cdot\vec{n}&=0\\
\Longleftrightarrow\quad
\vec{x}\cdot\vec{n}&=\vec{b}\cdot\vec{n}.
\end{aligned}
$$

Für die Gerade aus dem ersten Bild kann beispielsweise $B(3\mid\frac54)$ als Stützpunkt und $\vec{n}=\begin{pmatrix}1\\\frac45\end{pmatrix}$ als Normalenvektor gewählt werden. Tatsächlich gilt $4\cdot1-5\cdot\frac45=0$.

<center>

@Koordinatensystem(`xmin=-0.9;xmax=6.2;ymin=-0.9;ymax=6.2;width=620;id=VGERADE02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VGERADE02;xlabel=$\Large x$;ylabel=$\Large y$`)

@Punkt(`VGERADE02;B=0;3;1.25;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);0;fix`)
@Punkt(`VGERADE02;T=0;3.8;0.25;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`VGERADE02;N=0;4;2.05;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;fix`)
@Winkel(`VGERADE02;rechterWinkel=0;[T;B;N];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));0.8;Wert=1`)
@PlotFunktion(`VGERADE02;g=0;-1.25*x+5;rgb(var(--color-text,51,51,51))`)
@Vektor(`VGERADE02;[[0;0];[3;1.25]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);b=0`)
@Vektor(`VGERADE02;[[3;1.25];[4;2.05]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);n=0`)
@Punkt(`VGERADE02;Bsichtbar=0;3;1.25;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`VGERADE02;[1.4;0.94];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VGERADE02;[3.33;1.99];$\Large \vec{n}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VGERADE02;[2.75;1.08];$\Large B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VGERADE02;[3.93;0.68];$\Large g$;rgb(var(--color-text,51,51,51));1`)

</center>

Einsetzen liefert $(x-3)+\frac45(y-\frac54)=0$, also $5x+4y=20$. Im dreidimensionalen Raum beschreibt eine einzelne Normalengleichung wiederum eine Ebene. Eine räumliche Gerade kann stattdessen durch zwei unabhängige Normalengleichungen als Schnitt zweier Ebenen beschrieben werden.

{{|>}} Wird der Normalenvektor auf die Länge $1$ normiert, entsteht die Hessesche Normalform. Seine Orientierung wird so gewählt, dass die rechte Seite nichtnegativ ist:

$$
\begin{aligned}
\vec{n}_0&=\pm\frac{\vec{n}}{|\vec{n}|},
\qquad \vec{b}\cdot\vec{n}_0\ge0,\\
(\vec{x}-\vec{b})\cdot\vec{n}_0&=0,\\
\vec{x}\cdot\vec{n}_0&=d,
\qquad d=\vec{b}\cdot\vec{n}_0.
\end{aligned}
$$

Hier ist $d$ der Abstand der Geraden vom Koordinatenursprung. Der Vektor $\vec{n}_0$ ist ein Einheitsnormalenvektor: Er hat die Länge $1$ und ist orthogonal zur Geradenrichtung. Der Stützvektor $\vec{b}$ darf weiterhin zu jedem Punkt der Geraden führen. Nur wenn er zum Lotfußpunkt vom Ursprung führt, ist seine eigene Länge gleich $d$ und unter allen Stützvektorlängen minimal.

Im Beispiel gilt:

$$
\vec{n}_0=\frac1{\sqrt{41}}\begin{pmatrix}5\\4\end{pmatrix},
\qquad
\frac{5x+4y}{\sqrt{41}}=\frac{20}{\sqrt{41}},
\qquad d=\frac{20}{\sqrt{41}}.
$$

{{|>}} Der Abstand zweier Punkte ergibt sich aus der Länge ihres Verbindungsvektors. Sind $\vec{p}$ und $\vec{q}$ die Ortsvektoren von $P$ und $Q$, dann gilt:

$$
\overrightarrow{PQ}=\vec{q}-\vec{p}.
$$

Die folgende räumliche Darstellung ist ein Schrägbild. Die drei Koordinatenrichtungen sind im Raum paarweise orthogonal; Längen und Winkel auf dem Bildschirm entsprechen jedoch nicht unmittelbar den räumlichen Maßen. Der orangefarbene Pfeil führt von $P$ nach $Q$ und ist daher mit $\vec{q}-\vec{p}$ bezeichnet.

<!-- Schrägbildprojektion: (x,y,z) -> (y-0.75*x,z-0.5*x). P=(1,2,0), Q=(0,3,2). -->

<center>

@Koordinatensystem(`xmin=-2.5;xmax=4.4;ymin=-1.9;ymax=3.1;width=700;id=VGERADE03;achsen=0;grid=0;border=0;static=1`)

@Strecke(`VGERADE03;[[0.6;0.4];[-1.875;-1.25]];rgb(var(--color-text,51,51,51));;->;2px`)
@Strecke(`VGERADE03;[[-0.7;0];[3.9;0]];rgb(var(--color-text,51,51,51));;->;2px`)
@Strecke(`VGERADE03;[[0;-0.8];[0;2.65]];rgb(var(--color-text,51,51,51));;->;2px`)
@Vektor(`VGERADE03;[[0;0];[1.25;-0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);p=0`)
@Vektor(`VGERADE03;[[0;0];[3;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);q=0`)
@Vektor(`VGERADE03;[[1.25;-0.5];[3;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);differenz=0`)
@Punkt(`VGERADE03;O=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`VGERADE03;P=0;1.25;-0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`VGERADE03;Q=0;3;2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`VGERADE03;[-2.08;-1.42];$\Large x$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE03;[4.1;0];$\Large y$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE03;[0;2.87];$\Large z$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE03;[-0.22;0.18];$\Large O$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE03;[1.42;-0.78];$\Large P$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VGERADE03;[3.2;2.22];$\Large Q$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VGERADE03;[0.55;-0.5];$\Large \vec{p}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VGERADE03;[1.45;1.23];$\Large \vec{q}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VGERADE03;[2.8;0.65];$\Large \vec{q}-\vec{p}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)

</center>

Für $P(p_1\mid p_2\mid p_3)$ und $Q(q_1\mid q_2\mid q_3)$ ist der Abstand:

$$
\begin{aligned}
d(P,Q)&=|\vec{q}-\vec{p}|\\
&=\sqrt{(q_1-p_1)^2+(q_2-p_2)^2+(q_3-p_3)^2}.
\end{aligned}
$$

Die umgekehrte Differenz $\vec{p}-\vec{q}$ zeigt von $Q$ nach $P$, hat aber dieselbe Länge. In der Ebene entfällt der dritte Summand unter der Wurzel.

{{|>}} Beim Abstand zwischen einem Punkt $P$ und einer Geraden $g$ wird die kürzeste Verbindungsstrecke gesucht. Für $P\notin g$ trifft diese orthogonal auf die Gerade. Ihr Endpunkt auf $g$ heißt Lotfußpunkt $L$.

Die Skizze zeigt eine räumliche Gerade mit einem Stützpunkt $B$, den Punkt $P$ und seinen Lotfußpunkt $L$. Auch hier ist die Orthogonalität eine räumliche Eigenschaft, unabhängig von der perspektivischen Darstellung.

<!-- Schrägbildprojektion wie oben. B=(1,1,0), m=(0,1,0), P=(3,2,3), L=(1,2,0). -->

<center>

@Koordinatensystem(`xmin=-2.8;xmax=4.4;ymin=-1.9;ymax=3.1;width=700;id=VGERADE04;achsen=0;grid=0;border=0;static=1`)

@Strecke(`VGERADE04;[[0.6;0.4];[-1.875;-1.25]];rgb(var(--color-text,51,51,51));;->;2px`)
@Strecke(`VGERADE04;[[-0.7;0];[3.9;0]];rgb(var(--color-text,51,51,51));;->;2px`)
@Strecke(`VGERADE04;[[0;-0.8];[0;2.65]];rgb(var(--color-text,51,51,51));;->;2px`)
@Gerade(`VGERADE04;[[0.25;-0.5];[1.25;-0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);g=0`)
@Strecke(`VGERADE04;[[-0.25;1.5];[1.25;-0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;3px`)
@Strecke(`VGERADE04;[[1.45;-0.5];[1.3;-0.3];[1.1;-0.3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Vektor(`VGERADE04;[[0;0];[-0.25;1.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);p=0`)
@Vektor(`VGERADE04;[[2;-0.85];[3;-0.85]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);m=0`)
@Punkt(`VGERADE04;P=0;-0.25;1.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`VGERADE04;B=0;0.25;-0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@Punkt(`VGERADE04;L=0;1.25;-0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@KoordText(`VGERADE04;[-2.08;-1.42];$\Large x$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE04;[4.1;0];$\Large y$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE04;[0;2.87];$\Large z$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE04;[-0.27;-0.2];$\Large O$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE04;[-0.6;1.72];$\Large P$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VGERADE04;[0.28;-0.82];$\Large B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VGERADE04;[1.44;-0.82];$\Large L$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`VGERADE04;[-0.45;0.65];$\Large \vec{p}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VGERADE04;[2.5;-1.17];$\Large \vec{m}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VGERADE04;[0.94;0.7];$\Large d(P,g)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`VGERADE04;[3.5;-0.78];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Für $g:\vec{x}=\vec{b}+\chi\vec{m}$ lässt sich der Abstand im dreidimensionalen Raum mithilfe des Kreuzprodukts berechnen:

$$
d(P,g)=\frac{|\vec{m}\times(\vec{p}-\vec{b})|}{|\vec{m}|},
\qquad\vec{m}\ne\vec{0}.
$$

Der Betrag des Kreuzprodukts ist der Flächeninhalt des von $\vec{m}$ und $\vec{p}-\vec{b}$ aufgespannten Parallelogramms. Die Division durch seine Grundseitenlänge $|\vec{m}|$ liefert die gesuchte Höhe. Das Kreuzprodukt selbst zeigt dabei nicht von der Geraden zum Punkt, sondern orthogonal zur Ebene dieses Parallelogramms. Liegt $P$ auf $g$, sind die beiden Vektoren kollinear und der Abstand ist $0$.

{{|>}} Für zwei nicht parallele Geraden im Raum

$$
\begin{aligned}
g_1:\quad\vec{x}&=\vec{b}_1+s\vec{m}_1,\\
g_2:\quad\vec{x}&=\vec{b}_2+t\vec{m}_2,
\qquad s,t\in\mathbb R,
\end{aligned}
$$

ist $\vec{n}=\vec{m}_1\times\vec{m}_2\ne\vec{0}$ orthogonal zu beiden Richtungsvektoren. Der Abstand ergibt sich aus dem Betrag der Projektion des Verbindungsvektors der Stützpunkte auf diese gemeinsame Normalenrichtung:

$$
d(g_1,g_2)=
\frac{|(\vec{m}_1\times\vec{m}_2)\cdot(\vec{b}_1-\vec{b}_2)|}
{|\vec{m}_1\times\vec{m}_2|}.
$$

Ist dieser Abstand positiv, sind die nicht parallelen Geraden windschief: Sie liegen nicht in einer gemeinsamen Ebene und haben keinen Schnittpunkt. Ist der Abstand $0$, schneiden sie sich. In der Skizze verbindet die orangefarbene Strecke zwei Lotfußpunkte und ist im Raum orthogonal zu beiden Geraden.

<!-- Schrägbildprojektion wie oben. g1=(1,1,0)+s(0,1,0), g2=(1,2,2)+t(1,0,0). L1=(1,2,0), L2=(1,2,2). -->

<center>

@Koordinatensystem(`xmin=-2.8;xmax=4.2;ymin=-1.9;ymax=3.1;width=700;id=VGERADE05;achsen=0;grid=0;border=0;static=1`)

@Strecke(`VGERADE05;[[0.6;0.4];[-1.875;-1.25]];rgb(var(--color-text,51,51,51));;->;2px`)
@Strecke(`VGERADE05;[[-0.7;0];[3.7;0]];rgb(var(--color-text,51,51,51));;->;2px`)
@Strecke(`VGERADE05;[[0;-0.8];[0;2.65]];rgb(var(--color-text,51,51,51));;->;2px`)
@Gerade(`VGERADE05;[[0.25;-0.5];[1.25;-0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);g1=0`)
@Gerade(`VGERADE05;[[1.25;1.5];[0.5;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);g2=0`)
@Strecke(`VGERADE05;[[1.25;-0.5];[1.25;1.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;3px`)
@Strecke(`VGERADE05;[[1.47;-0.5];[1.47;-0.28];[1.25;-0.28]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VGERADE05;[[1.1;1.4];[1.1;1.18];[1.25;1.28]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Punkt(`VGERADE05;L1=0;1.25;-0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@Punkt(`VGERADE05;L2=0;1.25;1.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@KoordText(`VGERADE05;[-2.08;-1.42];$\Large x$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE05;[3.93;0];$\Large y$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE05;[0;2.87];$\Large z$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE05;[-0.24;-0.18];$\Large O$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VGERADE05;[1.28;-0.85];$\Large L_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`VGERADE05;[1.18;1.82];$\Large L_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`VGERADE05;[1.57;0.68];$\Large d$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`VGERADE05;[3.4;-0.8];$\Large g_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VGERADE05;[3.35;2.62];$\Large g_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)

</center>

Die Projektionen der Geraden kreuzen sich links im Bild. Das ist kein räumlicher Schnittpunkt: Die Geraden liegen in unterschiedlichen Höhen. Ob sie sich tatsächlich schneiden, entscheidet das Gleichungssystem, nicht die Überlagerung ihrer Bilder.

Für parallele Geraden ist $\vec{m}_1\times\vec{m}_2=\vec{0}$. Die vorige Gleichung darf dann nicht verwendet werden, weil ihr Nenner null wäre. Stattdessen berechnet man den Abstand eines Stützpunktes der einen Geraden zur anderen:

$$
d(g_1,g_2)=
\frac{|\vec{m}_1\times(\vec{b}_2-\vec{b}_1)|}{|\vec{m}_1|}.
$$

Auch echt parallele Geraden haben einen positiven Abstand; bei identischen Geraden ist er $0$. Ein positiver Abstand allein genügt deshalb nicht, um Windschiefe festzustellen.

{{|>}} Schneiden sich zwei Geraden, kann ihr Schnittwinkel mithilfe des Skalarprodukts bestimmt werden. Üblicherweise wird der kleinere der beiden Winkel angegeben:

$$
\begin{aligned}
\varphi(g_1,g_2)
&=\arccos\left(
\frac{|\vec{m}_1\cdot\vec{m}_2|}{|\vec{m}_1|\,|\vec{m}_2|}
\right),\\
0^\circ&\le\varphi\le90^\circ.
\end{aligned}
$$

Der Betrag im Zähler sorgt dafür, dass das Ergebnis unverändert bleibt, wenn die Orientierung eines Richtungsvektors umgekehrt wird. Ohne den Betrag erhält man den Winkel zwischen den gewählten Vektoren im Bereich von $0^\circ$ bis $180^\circ$. Die Beziehung folgt aus $\vec{m}_1\cdot\vec{m}_2=|\vec{m}_1|\,|\vec{m}_2|\cos\theta$; die beiden Richtungsvektoren müssen dafür nicht orthogonal sein.

Für parallele Geraden beträgt der Richtungswinkel $0^\circ$. Auch windschiefen Geraden kann über ihre Richtungsvektoren ein Winkel zugeordnet werden, obwohl sie keinen Schnittpunkt besitzen. Bei $\vec{m}_1\cdot\vec{m}_2=0$ sind ihre Richtungen orthogonal. Nur bei einem vorhandenen Schnittpunkt handelt es sich um einen rechtwinkligen Schnitt.

{{|>}} Der Lotfußpunkt kann auch direkt berechnet werden. Für einen Punkt $Q$ mit Ortsvektor $\vec{q}$ und eine Gerade $g:\vec{x}=\vec{b}+t\vec{m}$ liegt der gesuchte Punkt $L$ auf der Geraden. Sein Ortsvektor hat deshalb die Form

$$
\vec{\ell}=\vec{b}+t_0\vec{m}.
$$

Zusätzlich muss $\overrightarrow{LQ}=\vec{q}-\vec{\ell}$ orthogonal zu $\vec{m}$ sein. Daraus folgt:

$$
\begin{aligned}
(\vec{q}-\vec{b}-t_0\vec{m})\cdot\vec{m}&=0,\\
(\vec{q}-\vec{b})\cdot\vec{m}
&=t_0|\vec{m}|^2,\\
t_0&=\frac{(\vec{q}-\vec{b})\cdot\vec{m}}{|\vec{m}|^2},\\
\vec{\ell}&=\vec{b}
+\frac{(\vec{q}-\vec{b})\cdot\vec{m}}{|\vec{m}|^2}\,\vec{m}.
\end{aligned}
$$

Entscheidend ist der Stützvektor $\vec{b}$ in der letzten Zeile: Vom Stützpunkt wird entlang der Geraden zum Lotfußpunkt gegangen, nicht vom außerhalb liegenden Punkt $Q$. Anschließend erhält man $d(Q,g)=|\vec{q}-\vec{\ell}|$. Diese Projektionsrechnung funktioniert sowohl in der Ebene als auch im Raum. Für $Q\in g$ ist $L=Q$ und der Abstand null.

{{|>}} Zum Abschluss lassen sich die Lagebeziehungen zweier Geraden systematisch unterscheiden. Gegeben seien

$$
\begin{aligned}
g_1:\quad\vec{x}&=\vec{a}+\mu\vec{b},\\
g_2:\quad\vec{x}&=\vec{c}+\nu\vec{d},
\qquad\mu,\nu\in\mathbb R,
\end{aligned}
$$

wobei $\vec{b}$ und $\vec{d}$ hier die von null verschiedenen Richtungsvektoren sind. Die beiden Parameter müssen unabhängig voneinander gewählt werden. Gemeinsame Punkte findet man durch Lösen des Gleichungssystems

$$
\vec{a}+\mu\vec{b}=\vec{c}+\nu\vec{d}.
$$

Ob die Richtungen parallel sind, lässt sich über $\vec{b}=\lambda\vec{d}$ mit $\lambda\ne0$ prüfen. Alternativ gilt nach der Gleichheitsbedingung der Cauchy-Schwarz-Ungleichung:

$$
|\vec{b}\cdot\vec{d}|=|\vec{b}|\,|\vec{d}|.
$$

Damit ergibt sich folgende Fallunterscheidung:

<!-- data-type="none" data-sortable="false" -->
| Richtungen parallel? | Gemeinsamer Punkt? | Lagebeziehung |
|:---:|:---:|---|
| Ja | Ja | Identisch: Alle Punkte sind gemeinsam. |
| Ja | Nein | Echt parallel: Der Abstand ist positiv. |
| Nein | Ja | Schneidend: Es gibt genau einen Schnittpunkt. |
| Nein | Nein | Windschief: Nur im Raum möglich. |

Bei nicht parallelen Richtungen prüft man zusätzlich das Skalarprodukt. Für $\vec{b}\cdot\vec{d}=0$ sind die Richtungen orthogonal: Mit Schnittpunkt schneiden sich die Geraden rechtwinklig, ohne Schnittpunkt sind sie windschief mit orthogonalen Richtungen. Für $\vec{b}\cdot\vec{d}\ne0$ ist der kleinere Richtungswinkel echt zwischen $0^\circ$ und $90^\circ$.

***************************
