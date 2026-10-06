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













tags: Erklärung, Ähnlichkeit

comment: In diesem Abschnitt werden ähnliche Figuren, der Ähnlichkeitsfaktor und die Ähnlichkeitssätze für Dreiecke erklärt.

author: Martin Lommatzsch

-->

# Ähnlichkeit

{{|>}}
***************************

Zwei geometrische Figuren heißen ähnlich, wenn sie dieselbe Form haben. Ihre Größe und ihre Lage dürfen verschieden sein. Eine Figur lässt sich dann durch eine zentrische Streckung und gegebenenfalls durch Verschiebungen, Drehungen oder Spiegelungen auf die andere abbilden.

Beim Vergrößern oder Verkleinern müssen alle Längen mit demselben positiven Faktor $k$ multipliziert werden. Die Winkelgrößen bleiben dabei unverändert. Man schreibt $F_1\sim F_2$, wenn die Figuren $F_1$ und $F_2$ ähnlich sind.

<center>

@Koordinatensystem(`xmin=-0.7;xmax=15.2;ymin=-0.9;ymax=3.5;width=820;id=AEHNLICHKEIT01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`AEHNLICHKEIT01;[[-0.7;-0.9];[15.2;-0.9];[15.2;3.5];[-0.7;3.5]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`AEHNLICHKEIT01;[[0;0.5];[2;0.5];[2;2.5];[0;2.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`AEHNLICHKEIT01;[[0;0.5];[2;0.5];[2;2.5];[0;2.5];[0;0.5]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`AEHNLICHKEIT01;[[0.17;0.5];[0.17;0.67];[0;0.67]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[2;0.67];[1.83;0.67];[1.83;0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[1.83;2.5];[1.83;2.33];[2;2.33]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[0;2.33];[0.17;2.33];[0.17;2.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Flaeche(`AEHNLICHKEIT01;[[5;0.085786];[6.414214;1.5];[5;2.914214];[3.585786;1.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`AEHNLICHKEIT01;[[5;0.085786];[6.414214;1.5];[5;2.914214];[3.585786;1.5];[5;0.085786]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`AEHNLICHKEIT01;[[5.120208;0.205995];[5;0.326203];[4.879792;0.205995]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[6.294005;1.620208];[6.173797;1.5];[6.294005;1.379792]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[4.879792;2.794005];[5;2.673797];[5.120208;2.794005]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[3.705995;1.379792];[3.826203;1.5];[3.705995;1.620208]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Flaeche(`AEHNLICHKEIT01;[[8;0.75];[9.5;0.75];[9.5;2.25];[8;2.25]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`AEHNLICHKEIT01;[[8;0.75];[9.5;0.75];[9.5;2.25];[8;2.25];[8;0.75]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`AEHNLICHKEIT01;[[8.17;0.75];[8.17;0.92];[8;0.92]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[9.5;0.92];[9.33;0.92];[9.33;0.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[9.33;2.25];[9.33;2.08];[9.5;2.08]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[8;2.08];[8.17;2.08];[8.17;2.25]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Flaeche(`AEHNLICHKEIT01;[[11.5;0.5];[14.5;0.5];[14.5;2.5];[11.5;2.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`AEHNLICHKEIT01;[[11.5;0.5];[14.5;0.5];[14.5;2.5];[11.5;2.5];[11.5;0.5]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`AEHNLICHKEIT01;[[11.67;0.5];[11.67;0.67];[11.5;0.67]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[14.5;0.67];[14.33;0.67];[14.33;0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[14.33;2.5];[14.33;2.33];[14.5;2.33]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT01;[[11.5;2.33];[11.67;2.33];[11.67;2.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`AEHNLICHKEIT01;[1;-0.38];$\Large F_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`AEHNLICHKEIT01;[5;-0.38];$\Large F_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`AEHNLICHKEIT01;[8.75;-0.38];$\Large F_3$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`AEHNLICHKEIT01;[13;-0.38];$\Large F_4$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die ersten beiden Figuren sind gleich große Quadrate. Sie sind kongruent und damit auch ähnlich. Die Drehung des zweiten Quadrats ändert weder seine Seitenlängen noch seine Winkel.

Das dritte Quadrat ist kleiner, besitzt aber dieselbe Form. In der Zeichnung sind seine Seiten jeweils $\frac34$ so lang wie die des ersten Quadrats. Es entsteht deshalb mit dem Faktor $k=\frac34$ und einer passenden Verschiebung. Somit gilt

$$
F_1\sim F_2,\qquad F_1\sim F_3,\qquad F_2\sim F_3.
$$

Das vierte Viereck ist ein Rechteck, aber kein Quadrat. Es ist zu den ersten drei Figuren nicht ähnlich: Seine benachbarten Seiten stehen im Verhältnis $3:2$, beim Quadrat dagegen im Verhältnis $1:1$. Zwar besitzen alle vier Figuren rechte Winkel, doch gleiche Winkel allein reichen bei Vierecken nicht für Ähnlichkeit aus.

{{|>}} Bei ähnlichen Dreiecken lassen sich entsprechende Eckpunkte, Seiten und Winkel einander zuordnen. In den folgenden Dreiecken gehören $A$ und $A'$, $B$ und $B'$ sowie $C$ und $C'$ zusammen. Das wird durch die Reihenfolge in der Schreibweise ausgedrückt:

$$
\triangle ABC\sim\triangle A'B'C'.
$$

<center>

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=4.5;width=820;id=AEHNLICHKEIT02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`AEHNLICHKEIT02;[[-1;-1];[11;-1];[11;4.5];[-1;4.5]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`AEHNLICHKEIT02;[[0;0];[3.2;0];[0.9;2.4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`AEHNLICHKEIT02;[[0;0];[3.2;0];[0.9;2.4];[0;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px`)
@Strecke(`AEHNLICHKEIT02;[[0.4;0];[0.39949;0.020192];[0.397961;0.040332];[0.395418;0.06037];[0.391867;0.080253];[0.387316;0.099932];[0.381777;0.119356];[0.375266;0.138476];[0.367797;0.157243];[0.359391;0.175609];[0.350068;0.193527];[0.339852;0.210951];[0.32877;0.227838];[0.31685;0.244144];[0.304122;0.259827];[0.290618;0.274848];[0.276373;0.289167];[0.261424;0.30275];[0.245808;0.315561];[0.229565;0.327567];[0.212737;0.338737];[0.195367;0.349044];[0.177498;0.358461];[0.159177;0.366964];[0.140449;0.374532]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT02;[[2.854047;0.360994];[2.842112;0.349164];[2.83058;0.33694];[2.819466;0.324336];[2.808781;0.311365];[2.798539;0.298042];[2.78875;0.284383];[2.779426;0.270402];[2.770576;0.256116];[2.762212;0.24154];[2.754342;0.226692];[2.746976;0.211588];[2.740122;0.196244];[2.733787;0.180679];[2.727978;0.16491];[2.722703;0.148955];[2.717967;0.132831];[2.713775;0.116557];[2.710133;0.100152];[2.707044;0.083633];[2.704512;0.06702];[2.70254;0.050332];[2.701129;0.033586];[2.700282;0.016802];[2.7;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT02;[[0.749017;1.997378];[0.768013;1.990758];[0.787298;1.985032];[0.806829;1.980215];[0.826565;1.976317];[0.846461;1.973346];[0.866474;1.971309];[0.886561;1.97021];[0.906677;1.970052];[0.926778;1.970835];[0.946821;1.972557];[0.966761;1.975214];[0.986556;1.978802];[1.006161;1.983311];[1.025533;1.988732];[1.044631;1.995053];[1.063412;2.002261];[1.081835;2.010339];[1.099861;2.01927];[1.117449;2.029034];[1.134561;2.03961];[1.15116;2.050975];[1.167209;2.063104];[1.182674;2.07597];[1.197519;2.089545]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Flaeche(`AEHNLICHKEIT02;[[5.3;0];[10.1;0];[6.65;3.6]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 88.71000000000001%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850));1;inhalt=0;umfang=0`)
@Strecke(`AEHNLICHKEIT02;[[5.3;0];[10.1;0];[6.65;3.6];[5.3;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2.5px`)
@Strecke(`AEHNLICHKEIT02;[[5.82;0];[5.819337;0.026249];[5.81735;0.052432];[5.814044;0.078481];[5.809427;0.104329];[5.803511;0.129912];[5.796311;0.155163];[5.787845;0.180019];[5.778136;0.204416];[5.767208;0.228291];[5.755088;0.251585];[5.741808;0.274237];[5.727401;0.296189];[5.711905;0.317387];[5.695358;0.337775];[5.677803;0.357302];[5.659285;0.375918];[5.639851;0.393575];[5.61955;0.410229];[5.598435;0.425837];[5.576558;0.440358];[5.553976;0.453758];[5.530747;0.466];[5.506929;0.477054];[5.482584;0.486891]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT02;[[9.684857;0.433193];[9.670534;0.418997];[9.656696;0.404329];[9.643359;0.389203];[9.630538;0.373638];[9.618247;0.35765];[9.6065;0.341259];[9.595311;0.324482];[9.584692;0.307339];[9.574654;0.289848];[9.565211;0.27203];[9.556371;0.253905];[9.548146;0.235493];[9.540544;0.216815];[9.533574;0.197892];[9.527244;0.178746];[9.52156;0.159397];[9.51653;0.139869];[9.51216;0.120182];[9.508453;0.10036];[9.505414;0.080424];[9.503048;0.060398];[9.501355;0.040303];[9.500339;0.020163];[9.5;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`AEHNLICHKEIT02;[[6.456882;3.085019];[6.481179;3.07655];[6.505846;3.069227];[6.530828;3.063066];[6.556071;3.05808];[6.581519;3.05428];[6.607118;3.051674];[6.63281;3.050269];[6.65854;3.050066];[6.684251;3.051068];[6.709887;3.05327];[6.735393;3.056669];[6.760711;3.061258];[6.785787;3.067025];[6.810565;3.073959];[6.834993;3.082045];[6.859015;3.091264];[6.88258;3.101596];[6.905636;3.113019];[6.928133;3.125508];[6.95002;3.139036];[6.971251;3.153573];[6.991779;3.169086];[7.011559;3.185543];[7.030548;3.202906]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`AEHNLICHKEIT02;[-0.3;-0.25];$\Large A$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`AEHNLICHKEIT02;[3.5;-0.25];$\Large B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`AEHNLICHKEIT02;[0.72;2.76];$\Large C$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`AEHNLICHKEIT02;[5;-0.25];$\Large A'$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`AEHNLICHKEIT02;[10.43;-0.25];$\Large B'$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`AEHNLICHKEIT02;[6.5;3.97];$\Large C'$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`AEHNLICHKEIT02;[2.33;1.35];$\Large a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`AEHNLICHKEIT02;[0.12;1.35];$\Large b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`AEHNLICHKEIT02;[1.6;-0.46];$\Large c$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`AEHNLICHKEIT02;[8.61;1.95];$\Large a'$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`AEHNLICHKEIT02;[5.6;1.95];$\Large b'$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`AEHNLICHKEIT02;[7.7;-0.46];$\Large c'$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`AEHNLICHKEIT02;[0.61;0.35];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`AEHNLICHKEIT02;[2.45;0.3];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`AEHNLICHKEIT02;[1.04;1.64];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`AEHNLICHKEIT02;[6.04;0.44];$\Large \alpha'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`AEHNLICHKEIT02;[9.17;0.37];$\Large \beta'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`AEHNLICHKEIT02;[6.82;2.68];$\Large \gamma'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`AEHNLICHKEIT02;[3.1;3.55];$\Large k=1{,}5$;rgb(var(--color-text,51,51,51));1`)

</center>

Die Seite $a$ liegt dem Eckpunkt $A$ gegenüber, $b$ dem Eckpunkt $B$ und $c$ dem Eckpunkt $C$. Im zweiten Dreieck werden die zugehörigen Seiten mit $a'$, $b'$ und $c'$ bezeichnet. Entsprechende Innenwinkel sind gleich groß:

$$
\alpha'=\alpha,\qquad
\beta'=\beta,\qquad
\gamma'=\gamma.
$$

Die eingezeichneten Bögen markieren diese Innenwinkel. Die Seitenlängen des rechts dargestellten Dreiecks sind in der Zeichnung jeweils das $1{,}5$-Fache der entsprechenden Seitenlängen des linken Dreiecks.

{{|>}} Der Ähnlichkeitsfaktor $k$ beschreibt das Verhältnis einer Bildlänge zur entsprechenden ursprünglichen Länge. Für die beiden Dreiecke gilt

$$
\frac{a'}{a}=\frac{b'}{b}=\frac{c'}{c}=k.
$$

Dabei muss die Zuordnung der Seiten beachtet werden. Man darf beispielsweise nicht die größte Seite des einen Dreiecks mit der kleinsten Seite des anderen vergleichen.

Für $k>1$ wird die Figur vergrößert, für $0<k<1$ wird sie verkleinert. Bei $k=1$ sind entsprechende Längen gleich: Die Figuren sind kongruent. Kongruenz ist also ein Sonderfall der Ähnlichkeit. In der umgekehrten Abbildungsrichtung lautet der Faktor $\frac1k$.

{{|>}} Um die Ähnlichkeit zweier Dreiecke nachzuweisen, müssen nicht immer alle drei Winkel und alle drei Seitenverhältnisse überprüft werden. Jeder der folgenden vier Ähnlichkeitssätze genügt bereits allein. Voraussetzung ist jeweils eine passende Zuordnung der Eckpunkte und Seiten.

{{|>}} Beim Ähnlichkeitssatz WW stimmen zwei entsprechende Innenwinkel überein. Der dritte Winkel ist dann ebenfalls gleich groß, weil die Innenwinkelsumme in jedem Dreieck $180^\circ$ beträgt. Deshalb wird dieser Satz auch WWW genannt.

Sind beispielsweise $\alpha'=\alpha$ und $\beta'=\beta$, folgt

$$
\gamma'=180^\circ-\alpha'-\beta'
=180^\circ-\alpha-\beta=\gamma.
$$

Damit sind die beiden Dreiecke ähnlich. Ihre Seitenlängen müssen nicht gleich sein.

{{|>}} Beim Ähnlichkeitssatz SSS stimmen die Verhältnisse aller drei entsprechenden Seitenlängen überein:

$$
\frac{a'}{a}=\frac{b'}{b}=\frac{c'}{c}.
$$

Es gibt also einen gemeinsamen Faktor $k$, mit dem jede Seitenlänge des ersten Dreiecks multipliziert wird. Anders als beim Kongruenzsatz SSS werden hier nicht gleich lange Seiten, sondern proportionale Seitenlängen verlangt.

{{|>}} Beim Ähnlichkeitssatz SWS stehen zwei entsprechende Seitenpaare im selben Verhältnis, und die von diesen Seiten eingeschlossenen Winkel sind gleich groß. Beispielsweise genügen

$$
\frac{b'}{b}=\frac{c'}{c}
\qquad\text{und}\qquad
\alpha'=\alpha.
$$

Der Winkel $\alpha$ liegt zwischen den Seiten $b$ und $c$, der Winkel $\alpha'$ zwischen $b'$ und $c'$. Entscheidend ist, dass gerade dieser eingeschlossene Winkel übereinstimmt. Ein Winkel wird dabei nicht mit einer Seitenlänge ins Verhältnis gesetzt.

{{|>}} Beim Ähnlichkeitssatz SsW stimmen das Verhältnis zweier entsprechender Seiten und der Winkel gegenüber der längeren dieser beiden Seiten überein. Zum Beispiel genügen die Bedingungen

$$
\frac{a'}{a}=\frac{b'}{b},\qquad
a>b,\qquad
\alpha'=\alpha.
$$

Hier liegt $\alpha$ der Seite $a$ gegenüber. Wegen des gleichen Seitenverhältnisses gilt dann auch $a'>b'$, und $\alpha'$ liegt der längeren bekannten Seite $a'$ gegenüber. Das große $S$ in SsW kennzeichnet diese längere Seite.

Die Einschränkung ist wichtig: Liegt der bekannte Winkel nur der kürzeren der beiden bekannten Seiten gegenüber, können zwei verschiedene, nicht ähnliche Dreiecke entstehen. Ein beliebiger SSW-Fall ist deshalb kein allgemeiner Ähnlichkeitssatz.

{{|>}} Ähnlichkeit hilft dabei, unbekannte Längen aus bekannten Längenverhältnissen zu bestimmen. Beträgt der Ähnlichkeitsfaktor beispielsweise $k=3$ und ist eine Seite $4\,\mathrm{cm}$ lang, hat die entsprechende Seite der Bildfigur die Länge

$$
3\cdot4\,\mathrm{cm}=12\,\mathrm{cm}.
$$

Auch der Umfang wird mit $k$ multipliziert. Der Flächeninhalt wird dagegen mit $k^2$ multipliziert:

$$
U'=k\cdot U,\qquad
A'=k^2\cdot A.
$$

Bei $k=3$ ist der Umfang also dreimal und der Flächeninhalt neunmal so groß. Die Winkel bleiben gleich. Die Ähnlichkeitssätze bilden außerdem eine Grundlage für die Strahlensätze und für Zusammenhänge in der Trigonometrie.

***************************
