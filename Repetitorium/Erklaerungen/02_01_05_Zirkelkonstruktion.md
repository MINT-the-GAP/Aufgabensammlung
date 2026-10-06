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













tags: Erklärung, Konstruktion, Mittelsenkrechte, Winkelhalbierende, Satz des Thales

comment: In diesem Abschnitt werden Mittelsenkrechte, Winkelhalbierende, rechtwinklige Dreiecke mit dem Thaleskreis, Höhen, Dreiecke aus drei Seiten und regelmäßige Sechsecke mit Zirkel und Lineal konstruiert.

author: Martin Lommatzsch

-->

# Zirkelkonstruktionen

{{|>}}
***************************

Mit Zirkel und Lineal lassen sich viele geometrische Figuren und besondere Geraden konstruieren. Der Zirkel überträgt Längen und zeichnet Kreise oder Kreisbögen; das Lineal verbindet Punkte und verlängert Strecken zu Geraden. Für die folgenden Konstruktionen reichen häufig die Teile der Hilfskreise aus, an denen Schnittpunkte entstehen.

Zunächst wird eine zur Strecke $\overline{AB}$ orthogonale Gerade konstruiert. Dazu zeichnet man um $A$ und $B$ jeweils einen Kreis mit derselben Zirkelöffnung. Der gemeinsame Radius muss größer als die Hälfte der Streckenlänge sein, damit sich die Kreise in zwei verschiedenen Punkten $P$ und $Q$ schneiden. Die Gerade durch $P$ und $Q$ ist orthogonal zu $\overline{AB}$.

<center>

@Koordinatensystem(`xmin=-5.6;xmax=5.6;ymin=-3.8;ymax=3.8;width=660;id=ZIRKEL01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZIRKEL01;[[-5.6;-3.8];[5.6;-3.8];[5.6;3.8];[-5.6;3.8]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Kreis(`ZIRKEL01;k_A=0;A;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;radius=3;inhalt=0;umfang=0`)
@Kreis(`ZIRKEL01;k_B=0;B;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;radius=3;inhalt=0;umfang=0`)
@Strecke(`ZIRKEL01;[[-2;0];[2;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZIRKEL01;[[0;-3.3];[0;3.3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`ZIRKEL01;[[0;0.25];[0.25;0.25];[0.25;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZIRKEL01;[[-1.3;-0.12];[-1.3;0.12]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZIRKEL01;[[1.3;-0.12];[1.3;0.12]];rgb(var(--color-text,51,51,51));;-;2px`)
@Punkt(`ZIRKEL01;A=0;-2;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL01;B=0;2;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL01;M=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL01;P=0;0;2.236068;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL01;Q=0;0;-2.236068;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`ZIRKEL01;[-2.35;-0.3];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL01;[2.35;-0.3];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL01;[-0.35;-0.3];$\Large M$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL01;[-0.55;2.95];$\Large P$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL01;[0.44;-2.85];$\Large Q$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL01;[0.35;3.2];$\Large m$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ZIRKEL01;[0.5;0.67];$\Large 90^\circ$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Da die beiden Kreise gleich große Radien besitzen, ist die rote Gerade $m$ zugleich die Mittelsenkrechte von $\overline{AB}$. Sie geht durch den Mittelpunkt $M$ und zerlegt die Strecke in zwei gleich lange Teilstrecken:

$$
m\perp\overline{AB}
\qquad\text{und}\qquad
\left|\overline{AM}\right|=\left|\overline{MB}\right|=\frac{\left|\overline{AB}\right|}{2}.
$$

Beide Kreisschnittpunkte haben jeweils den gleichen Abstand zu $A$ und $B$. Deshalb liegen sie auf der Mittelsenkrechten. Auch bei unterschiedlichen Radien ist die Verbindungsgerade der beiden Kreisschnittpunkte orthogonal zu $\overline{AB}$, sofern überhaupt zwei Schnittpunkte vorhanden sind. Sie halbiert $\overline{AB}$ dann aber nicht. Für die Mittelsenkrechte darf die Zirkelöffnung zwischen den beiden Kreisen also nicht verändert werden.

{{|>}} Auch die Winkelhalbierende lässt sich mit dem Zirkel konstruieren. Gegeben ist ein Winkel $\alpha$ zwischen $0^\circ$ und $180^\circ$ mit dem Scheitelpunkt $S$. Zuerst zeichnet man einen Kreisbogen um $S$, der die beiden Schenkel in $P$ und $Q$ trifft. Dadurch sind die Strecken $\overline{SP}$ und $\overline{SQ}$ gleich lang.

Anschließend zeichnet man um $P$ und $Q$ zwei Kreise mit derselben Zirkelöffnung. Dieser Radius muss größer als die Hälfte der Länge von $\overline{PQ}$ sein. Man wählt einen ihrer Schnittpunkte $T$ im Inneren des Winkels, der nicht mit $S$ zusammenfällt. Der von $S$ durch $T$ verlaufende Strahl $w$ ist die gesuchte Winkelhalbierende.

<center>

@Koordinatensystem(`xmin=-2.5;xmax=4.05;ymin=-2.5;ymax=4.05;width=610;id=ZIRKEL02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZIRKEL02;[[-2.5;-2.5];[4.05;-2.5];[4.05;4.05];[-2.5;4.05]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Kreis(`ZIRKEL02;k=0;S;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;radius=2;inhalt=0;umfang=0`)
@Kreis(`ZIRKEL02;k_P=0;P;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;radius=1.5;inhalt=0;umfang=0`)
@Kreis(`ZIRKEL02;k_Q=0;Q;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;radius=1.5;inhalt=0;umfang=0`)
@Strecke(`ZIRKEL02;[[0;3.35];[0;0];[3.35;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZIRKEL02;[[0;2];[2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px`)
@Strecke(`ZIRKEL02;[[0;0];[3.1;3.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`ZIRKEL02;[[0.7;0];[0.699592;0.023899];[0.698368;0.04777];[0.69633;0.071585];[0.69348;0.095317];[0.689822;0.118937];[0.685359;0.142419];[0.680097;0.165735];[0.674042;0.188858];[0.667201;0.21176];[0.659583;0.234416];[0.651195;0.256798];[0.642048;0.278881];[0.632152;0.300638];[0.62152;0.322046];[0.610162;0.343077];[0.598094;0.363709];[0.585327;0.383916];[0.571879;0.403676];[0.557764;0.422965];[0.542998;0.441762];[0.527599;0.460043];[0.511585;0.477787];[0.494975;0.494975]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`ZIRKEL02;[[0.601041;0.601041];[0.58017;0.621211];[0.558623;0.640656];[0.536425;0.659355];[0.513601;0.677284];[0.490178;0.694424];[0.466184;0.710755];[0.441646;0.726256];[0.416594;0.740911];[0.391055;0.754702];[0.365061;0.767614];[0.338641;0.77963];[0.311826;0.790737];[0.284648;0.800922];[0.257137;0.810173];[0.229327;0.81848];[0.20125;0.825832];[0.172938;0.832221];[0.144424;0.837641];[0.115742;0.842083];[0.086925;0.845544];[0.058006;0.848018];[0.02902;0.849504];[0;0.85]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`ZIRKEL02;[[1.12;0.88];[1.24;1];[1.12;1.12]];rgb(var(--color-text,51,51,51));;-;2px`)
@Punkt(`ZIRKEL02;S=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL02;P=0;2;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL02;Q=0;0;2;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL02;T=0;1.353553;1.353553;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL02;H=0;1;1;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`ZIRKEL02;[-0.27;-0.28];$\Large S$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL02;[2.18;-0.3];$\Large P$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL02;[-0.28;2.17];$\Large Q$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL02;[1.75;1.6];$\Large T$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL02;[1.07;0.7];$\Large H$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL02;[3.25;3.15];$\Large w$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ZIRKEL02;[1.05;0.27];$\Large \frac{\alpha}{2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ZIRKEL02;[0.27;1.15];$\Large \frac{\alpha}{2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Die beiden gleich markierten Winkel sind jeweils $\frac{\alpha}{2}$ groß. In der dargestellten Konstruktion ist der Ausgangswinkel ein rechter Winkel; beide Teilwinkel betragen deshalb $45^\circ$. Das Verfahren funktioniert ebenso bei anderen Winkeln zwischen $0^\circ$ und $180^\circ$.

Der Strahl $w$ ist orthogonal zur orangefarbenen Strecke $\overline{PQ}$ und verläuft durch ihren Mittelpunkt $H$. Die Konstruktion beruht also auf der Mittelsenkrechten von $\overline{PQ}$: Sowohl $S$ als auch $T$ haben jeweils gleiche Abstände zu $P$ und $Q$. Im gleichschenkligen Dreieck $SPQ$ halbiert diese Gerade deshalb auch den Winkel bei $S$.

{{|>}} Mit dem Satz des Thales kann ein rechtwinkliges Dreieck konstruiert werden. Dazu zeichnet man zunächst die spätere Hypotenuse $\overline{AB}$, konstruiert ihren Mittelpunkt $M$ und zeichnet den Halbkreis mit Mittelpunkt $M$ durch $A$ und $B$. Der Radius ist also die Hälfte der Länge von $\overline{AB}$.

Jeder weitere Punkt $C$ auf diesem Halbkreis bildet mit $A$ und $B$ ein rechtwinkliges Dreieck. Die beiden Endpunkte $A$ und $B$ selbst dürfen nicht als $C$ gewählt werden. Der rechte Winkel liegt bei $C$:

$$
\angle ACB=90^\circ.
$$

Ist zusätzlich die Kathetenlänge $b=\left|\overline{AC}\right|$ gegeben, stellt man diese Länge als Zirkelradius ein und zeichnet einen Kreisbogen um $A$. Sein Schnittpunkt mit dem Thaleshalbkreis ist der gesuchte Punkt $C$. Danach verbindet man $C$ mit $A$ und $B$. Die Kathetenlänge muss positiv und kleiner als die Hypotenusenlänge sein.

<center>

@Koordinatensystem(`xmin=-7.8;xmax=3.8;ymin=-0.9;ymax=4.8;width=720;id=ZIRKEL03;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZIRKEL03;[[-7.8;-0.9];[3.8;-0.9];[3.8;4.8];[-7.8;4.8]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`ZIRKEL03;[[1.242641;0];[1.240056;0.148066];[1.232306;0.295952];[1.219399;0.443477];[1.201352;0.590461];[1.178185;0.736727];[1.149929;0.882095];[1.116616;1.026388];[1.078288;1.16943];[1.034991;1.311048];[0.986778;1.451069];[0.933708;1.589321];[0.875845;1.725637];[0.81326;1.859851];[0.746029;1.991799];[0.674235;2.12132];[0.597963;2.248257];[0.517309;2.372455];[0.432368;2.493762];[0.343246;2.61203];[0.250051;2.727117];[0.152896;2.838881];[0.0519;2.947186];[-0.052814;3.0519];[-0.161119;3.152896];[-0.272883;3.250051];[-0.38797;3.343246];[-0.506238;3.432368];[-0.627545;3.517309];[-0.751743;3.597963];[-0.87868;3.674235];[-1.008201;3.746029];[-1.140149;3.81326];[-1.274363;3.875845];[-1.410679;3.933708];[-1.548931;3.986778];[-1.688952;4.034991];[-1.83057;4.078288];[-1.973612;4.116616];[-2.117905;4.149929];[-2.263273;4.178185];[-2.409539;4.201352];[-2.556523;4.219399];[-2.704048;4.232306];[-2.851934;4.240056];[-3;4.242641];[-3.148066;4.240056];[-3.295952;4.232306];[-3.443477;4.219399];[-3.590461;4.201352];[-3.736727;4.178185];[-3.882095;4.149929];[-4.026388;4.116616];[-4.16943;4.078288];[-4.311048;4.034991];[-4.451069;3.986778];[-4.589321;3.933708];[-4.725637;3.875845];[-4.859851;3.81326];[-4.991799;3.746029];[-5.12132;3.674235];[-5.248257;3.597963];[-5.372455;3.517309];[-5.493762;3.432368];[-5.61203;3.343246];[-5.727117;3.250051];[-5.838881;3.152896];[-5.947186;3.0519];[-6.0519;2.947186];[-6.152896;2.838881];[-6.250051;2.727117];[-6.343246;2.61203];[-6.432368;2.493762];[-6.517309;2.372455];[-6.597963;2.248257];[-6.674235;2.12132];[-6.746029;1.991799];[-6.81326;1.859851];[-6.875845;1.725637];[-6.933708;1.589321];[-6.986778;1.451069];[-7.034991;1.311048];[-7.078288;1.16943];[-7.116616;1.026388];[-7.149929;0.882095];[-7.178185;0.736727];[-7.201352;0.590461];[-7.219399;0.443477];[-7.232306;0.295952];[-7.240056;0.148066];[-7.242641;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`ZIRKEL03;[[3;0];[2.998172;0.104698];[2.992692;0.209269];[2.983566;0.313585];[2.970804;0.417519];[2.954423;0.520945];[2.934443;0.623735];[2.910887;0.725766];[2.883785;0.826912];[2.85317;0.927051];[2.819078;1.02606];[2.781552;1.12382];[2.740636;1.22021];[2.696382;1.315113];[2.648843;1.408415];[2.598076;1.5];[2.544144;1.589758];[2.487113;1.677579];[2.427051;1.763356];[2.364032;1.846984];[2.298133;1.928363];[2.229434;2.007392];[2.158019;2.083975];[2.083975;2.158019];[2.007392;2.229434];[1.928363;2.298133];[1.846984;2.364032];[1.763356;2.427051];[1.677579;2.487113];[1.589758;2.544144];[1.5;2.598076];[1.408415;2.648843];[1.315113;2.696382];[1.22021;2.740636];[1.12382;2.781552];[1.02606;2.819078];[0.927051;2.85317];[0.826912;2.883785];[0.725766;2.910887];[0.623735;2.934443];[0.520945;2.954423];[0.417519;2.970804];[0.313585;2.983566];[0.209269;2.992692];[0.104698;2.998172];[0;3];[-0.104698;2.998172];[-0.209269;2.992692];[-0.313585;2.983566];[-0.417519;2.970804];[-0.520945;2.954423];[-0.623735;2.934443];[-0.725766;2.910887];[-0.826912;2.883785];[-0.927051;2.85317];[-1.02606;2.819078];[-1.12382;2.781552];[-1.22021;2.740636];[-1.315113;2.696382];[-1.408415;2.648843];[-1.5;2.598076];[-1.589758;2.544144];[-1.677579;2.487113];[-1.763356;2.427051];[-1.846984;2.364032];[-1.928363;2.298133];[-2.007392;2.229434];[-2.083975;2.158019];[-2.158019;2.083975];[-2.229434;2.007392];[-2.298133;1.928363];[-2.364032;1.846984];[-2.427051;1.763356];[-2.487113;1.677579];[-2.544144;1.589758];[-2.598076;1.5];[-2.648843;1.408415];[-2.696382;1.315113];[-2.740636;1.22021];[-2.781552;1.12382];[-2.819078;1.02606];[-2.85317;0.927051];[-2.883785;0.826912];[-2.910887;0.725766];[-2.934443;0.623735];[-2.954423;0.520945];[-2.970804;0.417519];[-2.983566;0.313585];[-2.992692;0.209269];[-2.998172;0.104698];[-3;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`ZIRKEL03;[[-3;0];[3;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZIRKEL03;[[-3;0];[0;3];[3;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`ZIRKEL03;[[-0.18;2.82];[0;2.64];[0.18;2.82]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`ZIRKEL03;[[-1.5;-0.12];[-1.5;0.12]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZIRKEL03;[[1.5;-0.12];[1.5;0.12]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`ZIRKEL03;[[-2.25;0];[-2.250437;0.025606];[-2.251748;0.051182];[-2.253932;0.076698];[-2.256986;0.102125];[-2.260905;0.127433];[-2.265687;0.152592];[-2.271325;0.177573];[-2.277812;0.202348];[-2.285141;0.226886];[-2.293304;0.25116];[-2.302291;0.275141];[-2.312092;0.298801];[-2.322694;0.322113];[-2.334086;0.345049];[-2.346255;0.367583];[-2.359185;0.389688];[-2.372863;0.411339];[-2.387273;0.43251];[-2.402396;0.453177];[-2.418217;0.473316];[-2.434715;0.492903];[-2.451873;0.511915];[-2.46967;0.53033]];rgb(var(--color-text,51,51,51));;-;2px`)
@Punkt(`ZIRKEL03;A=0;-3;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL03;B=0;3;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL03;M=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL03;C=0;0;3;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`ZIRKEL03;[-3.27;-0.32];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL03;[3.22;-0.32];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL03;[0;-0.32];$\Large M$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL03;[0.45;3.35];$\Large C$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ZIRKEL03;[-2.03;0.34];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL03;[0;2.24];$\Large 90^\circ$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ZIRKEL03;[-2;1.85];$\Large b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Der blaue Kreisbogen legt die Länge $b$ fest, der schwarze Halbkreis den rechten Winkel bei $C$. Alternativ kann ein spitzer Winkel $\alpha$ bei $A$ vorgegeben werden: Sein zweiter Schenkel trifft den Thaleshalbkreis außer in $A$ im gesuchten Punkt $C$. Wird dieser Winkel mit einem Winkelmesser abgetragen, benötigt diese Variante zusätzlich ein Geodreieck oder einen Winkelmesser; das Abmessen eines beliebigen Winkels ist keine reine Zirkel-und-Lineal-Konstruktion.

{{|>}} Die Höhe eines Dreiecks lässt sich ebenfalls mit Hilfe einer Mittelsenkrechten konstruieren. Für die Höhe von $C$ auf die gegenüberliegende Seite $\overline{AB}$ betrachtet man die ganze Gerade durch $A$ und $B$. Falls nötig, wird die Seite verlängert.

Zuerst zeichnet man um $C$ einen Kreis, der diese Gerade in zwei verschiedenen Punkten $P$ und $Q$ schneidet. Der Radius muss dazu größer als der Abstand von $C$ zur Geraden sein. Anschließend zeichnet man um $P$ und $Q$ zwei Kreise mit gleicher Zirkelöffnung, deren Radius größer als die Hälfte der Länge von $\overline{PQ}$ ist. Ihre beiden Schnittpunkte $R$ und $T$ bestimmen die Mittelsenkrechte von $\overline{PQ}$.

<center>

@Koordinatensystem(`xmin=-3.25;xmax=4.1;ymin=-2.3;ymax=3.95;width=620;id=ZIRKEL04;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZIRKEL04;[[-3.25;-2.3];[4.1;-2.3];[4.1;3.95];[-3.25;3.95]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Kreis(`ZIRKEL04;k_P=0;P;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);0;radius=1.8;inhalt=0;umfang=0`)
@Kreis(`ZIRKEL04;k_Q=0;Q;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);0;radius=1.8;inhalt=0;umfang=0`)
@Strecke(`ZIRKEL04;[[-1.751342;0.94308];[-1.678063;0.858782];[-1.601887;0.777093];[-1.522907;0.698113];[-1.441218;0.621937];[-1.35692;0.548658];[-1.270117;0.478366];[-1.180913;0.411146];[-1.089417;0.34708];[-0.995742;0.286246];[-0.9;0.228719];[-0.802309;0.174568];[-0.702788;0.123859];[-0.601557;0.076655];[-0.498741;0.033012];[-0.394464;-0.007016];[-0.288854;-0.043381];[-0.18204;-0.076037];[-0.07415;-0.104946];[0.034683;-0.130072];[0.144326;-0.151385];[0.254646;-0.168858];[0.365509;-0.18247];[0.476779;-0.192205];[0.588322;-0.198051];[0.7;-0.2];[0.811678;-0.198051];[0.923221;-0.192205];[1.034491;-0.18247];[1.145354;-0.168858];[1.255674;-0.151385];[1.365317;-0.130072];[1.47415;-0.104946];[1.58204;-0.076037];[1.688854;-0.043381];[1.794464;-0.007016];[1.898741;0.033012];[2.001557;0.076655];[2.102788;0.123859];[2.202309;0.174568];[2.3;0.228719];[2.395742;0.286246];[2.489417;0.34708];[2.580913;0.411146];[2.670117;0.478366];[2.75692;0.548658];[2.841218;0.621937];[2.922907;0.698113];[3.001887;0.777093];[3.078063;0.858782];[3.151342;0.94308]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px`)
@Strecke(`ZIRKEL04;[[-2;0];[0.7;3];[2;0];[-2;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`ZIRKEL04;[[-0.413553;0];[1.813553;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px`)
@Strecke(`ZIRKEL04;[[0.7;-1.95];[0.7;3.55]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Strecke(`ZIRKEL04;[[0.7;0];[0.7;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2.6px`)
@Strecke(`ZIRKEL04;[[0.7;0.24];[0.94;0.24];[0.94;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Punkt(`ZIRKEL04;A=0;-2;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL04;B=0;2;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL04;C=0;0.7;3;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL04;P=0;-0.413553;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL04;Q=0;1.813553;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL04;F=0;0.7;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL04;R=0;0.7;1.414214;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL04;T=0;0.7;-1.414214;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`ZIRKEL04;[-2.55;-0.28];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL04;[2.35;-0.28];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL04;[1.08;3.34];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL04;[-0.483553;-0.35];$\Large P$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`ZIRKEL04;[1.6;0.35];$\Large Q$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`ZIRKEL04;[0.93;-0.35];$\Large F$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL04;[0.4;1.45];$\Large R$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ZIRKEL04;[0.38;-1.47];$\Large T$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ZIRKEL04;[0.35;2.15];$\Large h_c$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)

</center>

Weil $C$ als Mittelpunkt des blauen Hilfskreises von $P$ und $Q$ gleich weit entfernt ist, liegt auch $C$ auf dieser Mittelsenkrechten. Die grüne Gerade durch $R$ und $T$ ist daher die Höhengerade. Ihr Schnittpunkt mit der Geraden durch $A$ und $B$ heißt Höhenfußpunkt $F$. Die Höhenstrecke ist $\overline{CF}$; ihre Länge wird mit $h_c$ bezeichnet.

Die orange Hilfsstrecke $\overline{PQ}$ wird im Punkt $F$ halbiert, die Seite $\overline{AB}$ dagegen im Allgemeinen nicht. Bei einem stumpfwinkligen Dreieck kann der Höhenfußpunkt auf der Verlängerung der gegenüberliegenden Seite liegen. Damit wird deutlich: Die Mittelsenkrechte einer passenden Hilfsstrecke ist eine wichtige Grundlage für weitere Konstruktionen.

{{|>}} Durch die Kombination solcher Schritte lassen sich auch ganze Dreiecke konstruieren. Sind die drei Seitenlängen $a$, $b$ und $c$ vorgegeben, zeichnet man zunächst $\overline{AB}$ mit der Länge $c$. Um $A$ zeichnet man einen Kreisbogen mit Radius $b$, um $B$ einen Kreisbogen mit Radius $a$. Ein Schnittpunkt der beiden Kreise liefert den dritten Eckpunkt $C$.

<center>

@Koordinatensystem(`xmin=-0.7;xmax=5.7;ymin=-0.8;ymax=4;width=620;id=ZIRKEL05;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZIRKEL05;[[-0.7;-0.8];[5.7;-0.8];[5.7;4];[-0.7;4]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`ZIRKEL05;[[3.75877;1.368081];[3.709871;1.495612];[3.656647;1.621399];[3.599159;1.745296];[3.537474;1.867157];[3.471665;1.986842];[3.401808;2.10421];[3.327985;2.219125];[3.250281;2.331453];[3.168788;2.441062];[3.0836;2.547824];[2.994817;2.651617];[2.902542;2.752317];[2.806883;2.849809];[2.707951;2.943977];[2.605861;3.034714];[2.500734;3.121911];[2.39269;3.205469];[2.281857;3.28529];[2.168363;3.361279];[2.052342;3.43335];[1.933927;3.501418];[1.813257;3.565403];[1.690473;3.625231]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`ZIRKEL05;[[4.479055;2.954423];[4.376265;2.934443];[4.274234;2.910887];[4.173088;2.883785];[4.072949;2.85317];[3.97394;2.819078];[3.87618;2.781552];[3.77979;2.740636];[3.684887;2.696382];[3.591585;2.648843];[3.5;2.598076];[3.410242;2.544144];[3.322421;2.487113];[3.236644;2.427051];[3.153016;2.364032];[3.071637;2.298133];[2.992608;2.229434];[2.916025;2.158019];[2.841981;2.083975];[2.770566;2.007392];[2.701867;1.928363];[2.635968;1.846984];[2.572949;1.763356];[2.512887;1.677579];[2.455856;1.589758];[2.401924;1.5];[2.351157;1.408415];[2.303618;1.315113];[2.259364;1.22021];[2.218448;1.12382];[2.180922;1.02606]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`ZIRKEL05;[[0;0];[5;0];[3.2;2.4];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Punkt(`ZIRKEL05;A=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL05;B=0;5;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL05;C=0;3.2;2.4;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`ZIRKEL05;[-0.25;-0.3];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL05;[5.25;-0.3];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL05;[3.23;2.78];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL05;[2.5;-0.35];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL05;[1.35;1.38];$\Large b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`ZIRKEL05;[4.52;1.38];$\Large a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Die beiden Verbindungen $\overline{AC}$ und $\overline{BC}$ haben dann genau die gewünschten Längen. Dies ist die Dreieckskonstruktion nach dem Kongruenzsatz SSS. Die drei positiven Längen müssen die Dreiecksungleichungen erfüllen:

$$
a+b>c,\qquad a+c>b,\qquad b+c>a.
$$

Dann gibt es zwei mögliche Schnittpunkte, je einen auf jeder Seite der Geraden durch $A$ und $B$. Die beiden entstehenden Dreiecke sind Spiegelbilder und kongruent. In der Abbildung ist die obere Lösung dargestellt. Bei bloßer Berührung der Hilfskreise entsteht kein echtes Dreieck, sondern eine entartete Figur mit drei Punkten auf einer Geraden.

{{|>}} Auch ein regelmäßiges Sechseck kann mit dem Zirkel konstruiert werden. Man zeichnet einen Kreis mit Mittelpunkt $M$ und Radius $r$ und wählt einen Punkt $A$ auf der Kreislinie. Ohne die Zirkelöffnung zu verändern, zeichnet man um $A$ Kreisbögen. Ihre Schnittpunkte mit dem Ausgangskreis sind die beiden benachbarten Eckpunkte $B$ und $F$.

Nun setzt man den Zirkel nacheinander in $B$, $C$, $D$ und $E$ ein und trägt denselben Radius stets in derselben Umlaufrichtung weiter ab. Dabei wählt man jeweils den neuen Schnittpunkt auf dem Ausgangskreis, nicht den vorherigen Eckpunkt. So erhält man insgesamt sechs verschiedene Punkte $A$, $B$, $C$, $D$, $E$ und $F$. Verbindet man sie in dieser Reihenfolge und zuletzt $F$ mit $A$, entsteht das regelmäßige Sechseck.

<center>

@Koordinatensystem(`xmin=-2.85;xmax=2.85;ymin=-2.8;ymax=2.8;width=620;id=ZIRKEL06;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`ZIRKEL06;[[-2.85;-2.8];[2.85;-2.8];[2.85;2.8];[-2.85;2.8]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Kreis(`ZIRKEL06;k=0;M;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;radius=2;inhalt=0;umfang=0`)
@Strecke(`ZIRKEL06;[[1.652704;1.969616];[1.584177;1.956295];[1.516156;1.940591];[1.448725;1.922523];[1.381966;1.902113];[1.31596;1.879385];[1.250787;1.854368];[1.186527;1.827091];[1.123258;1.797588];[1.061057;1.765895];[1;1.732051];[0.940161;1.696096];[0.881614;1.658075];[0.824429;1.618034];[0.768677;1.576022];[0.714425;1.532089];[0.661739;1.48629];[0.610683;1.43868];[0.56132;1.389317];[0.51371;1.338261];[0.467911;1.285575]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`ZIRKEL06;[[0.467911;-1.285575];[0.51371;-1.338261];[0.56132;-1.389317];[0.610683;-1.43868];[0.661739;-1.48629];[0.714425;-1.532089];[0.768677;-1.576022];[0.824429;-1.618034];[0.881614;-1.658075];[0.940161;-1.696096];[1;-1.732051];[1.061057;-1.765895];[1.123258;-1.797588];[1.186527;-1.827091];[1.250787;-1.854368];[1.31596;-1.879385];[1.381966;-1.902113];[1.448725;-1.922523];[1.516156;-1.940591];[1.584177;-1.956295];[1.652704;-1.969616]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`ZIRKEL06;[[-0.879385;2.416091];[-0.902113;2.350085];[-0.922523;2.283326];[-0.940591;2.215895];[-0.956295;2.147874];[-0.969616;2.079347];[-0.980536;2.010397];[-0.989044;1.941108];[-0.995128;1.871564];[-0.998782;1.80185];[-1;1.732051];[-0.998782;1.662252];[-0.995128;1.592538];[-0.989044;1.522994];[-0.980536;1.453705];[-0.969616;1.384754];[-0.956295;1.316227];[-0.940591;1.248207];[-0.922523;1.180776];[-0.902113;1.114017];[-0.879385;1.048011]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`ZIRKEL06;[[-2.532089;0.446476];[-2.48629;0.39379];[-2.43868;0.342734];[-2.389317;0.293371];[-2.338261;0.245761];[-2.285575;0.199962];[-2.231323;0.156029];[-2.175571;0.114017];[-2.118386;0.073976];[-2.059839;0.035955];[-2;0];[-1.938943;-0.033844];[-1.876742;-0.065537];[-1.813473;-0.09504];[-1.749213;-0.122317];[-1.68404;-0.147334];[-1.618034;-0.170062];[-1.551275;-0.190473];[-1.483844;-0.208541];[-1.415823;-0.224244];[-1.347296;-0.237565]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`ZIRKEL06;[[-1.652704;-1.969616];[-1.584177;-1.956295];[-1.516156;-1.940591];[-1.448725;-1.922523];[-1.381966;-1.902113];[-1.31596;-1.879385];[-1.250787;-1.854368];[-1.186527;-1.827091];[-1.123258;-1.797588];[-1.061057;-1.765895];[-1;-1.732051];[-0.940161;-1.696096];[-0.881614;-1.658075];[-0.824429;-1.618034];[-0.768677;-1.576022];[-0.714425;-1.532089];[-0.661739;-1.48629];[-0.610683;-1.43868];[-0.56132;-1.389317];[-0.51371;-1.338261];[-0.467911;-1.285575]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`ZIRKEL06;[[0.879385;-2.416091];[0.902113;-2.350085];[0.922523;-2.283326];[0.940591;-2.215895];[0.956295;-2.147874];[0.969616;-2.079347];[0.980536;-2.010397];[0.989044;-1.941108];[0.995128;-1.871564];[0.998782;-1.80185];[1;-1.732051];[0.998782;-1.662252];[0.995128;-1.592538];[0.989044;-1.522994];[0.980536;-1.453705];[0.969616;-1.384754];[0.956295;-1.316227];[0.940591;-1.248207];[0.922523;-1.180776];[0.902113;-1.114017];[0.879385;-1.048011]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`ZIRKEL06;[[2.532089;-0.446476];[2.48629;-0.39379];[2.43868;-0.342734];[2.389317;-0.293371];[2.338261;-0.245761];[2.285575;-0.199962];[2.231323;-0.156029];[2.175571;-0.114017];[2.118386;-0.073976];[2.059839;-0.035955];[2;0];[1.938943;0.033844];[1.876742;0.065537];[1.813473;0.09504];[1.749213;0.122317];[1.68404;0.147334];[1.618034;0.170062];[1.551275;0.190473];[1.483844;0.208541];[1.415823;0.224244];[1.347296;0.237565]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`ZIRKEL06;[[2;0];[1;1.732051];[-1;1.732051];[-2;0];[-1;-1.732051];[1;-1.732051];[2;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`ZIRKEL06;[[0;0];[2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`ZIRKEL06;[[0;0];[1;1.732051]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`ZIRKEL06;[[2;0];[-1;1.732051];[-1;-1.732051];[2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`ZIRKEL06;[[0.6;0];[0.599634;0.02094];[0.598538;0.041854];[0.596713;0.062717];[0.594161;0.083504];[0.590885;0.104189];[0.586889;0.124747];[0.582177;0.145153];[0.576757;0.165382];[0.570634;0.18541];[0.563816;0.205212];[0.55631;0.224764];[0.548127;0.244042];[0.539276;0.263023];[0.529769;0.281683];[0.519615;0.3];[0.508829;0.317952];[0.497423;0.335516];[0.48541;0.352671];[0.472806;0.369397];[0.459627;0.385673];[0.445887;0.401478];[0.431604;0.416795];[0.416795;0.431604];[0.401478;0.445887];[0.385673;0.459627];[0.369397;0.472806];[0.352671;0.48541];[0.335516;0.497423];[0.317952;0.508829];[0.3;0.519615]];rgb(var(--color-text,51,51,51));;-;2px`)
@Punkt(`ZIRKEL06;A=0;2;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL06;B=0;1;1.732051;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL06;C=0;-1;1.732051;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL06;D=0;-2;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL06;E=0;-1;-1.732051;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL06;F=0;1;-1.732051;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`ZIRKEL06;M=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`ZIRKEL06;[2.4;0];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL06;[1.2;2.078461];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL06;[-1.2;2.078461];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL06;[-2.4;0];$\Large D$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL06;[-1.2;-2.078461];$\Large E$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL06;[1.2;-2.078461];$\Large F$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL06;[-0.25;-0.2];$\Large M$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL06;[1.1;-0.18];$\Large r$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ZIRKEL06;[0.88;0.28];$\Large 60^\circ$;rgb(var(--color-text,51,51,51));1`)

</center>

Alle sechs Seiten sind so lang wie der Kreisradius. Das Dreieck aus $M$ und zwei benachbarten Eckpunkten ist gleichseitig, da auch beide Radien die Länge $r$ haben. Jeder zugehörige Mittelpunktswinkel beträgt daher $60^\circ$; sechs solcher Winkel ergeben $360^\circ$.

Verbindet man nur jeden zweiten Eckpunkt, also beispielsweise $A$, $C$ und $E$, erhält man das rot gezeichnete gleichseitige Dreieck. Ebenso bilden $B$, $D$ und $F$ ein gleichseitiges Dreieck.

Diese Beispiele zeigen, wie aus wenigen Grundkonstruktionen viele weitere Figuren entstehen: Gleiche Zirkelöffnungen übertragen Längen, Kreisschnittpunkte legen neue Punkte fest, und Mittelsenkrechten ermöglichen unter anderem Winkelhalbierende und Höhen.

***************************
