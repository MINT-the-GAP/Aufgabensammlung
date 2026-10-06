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













tags: Erklärung, Zentrische Streckung, Drehung

comment: In diesem Abschnitt werden zentrische Streckungen, Drehungen und ihre Kombination sowie der Zusammenhang mit Kongruenz und Ähnlichkeit erklärt.

author: Martin Lommatzsch

-->

# Streckungen und Drehungen

{{|>}}
***************************

Geometrische Figuren können durch eine zentrische Streckung vergrößert oder verkleinert werden. Dazu werden ein Punkt $Z$ als Streckzentrum und ein Streckungsfaktor $k$ festgelegt. Hier werden positive Streckungsfaktoren betrachtet.

Für jeden Punkt $P$ der Figur zeichnet man den Strahl von $Z$ durch $P$. Der Bildpunkt $P'$ liegt auf diesem Strahl. Sein Abstand vom Streckzentrum ist das $k$-Fache des ursprünglichen Abstands:

$$
\left|\overline{ZP'}\right|=k\cdot\left|\overline{ZP}\right|.
$$

Wichtig ist, dass für alle Punkte derselbe Faktor verwendet wird. Man addiert also nicht zu allen Abständen dieselbe Länge, sondern multipliziert jeden Abstand mit derselben Zahl. Das Streckzentrum $Z$ bleibt unverändert.

<center>

@Koordinatensystem(`xmin=-0.8;xmax=8.9;ymin=-3.4;ymax=3.8;width=740;id=STRECKUNG01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`STRECKUNG01;[[-0.8;-3.4];[8.9;-3.4];[8.9;3.8];[-0.8;3.8]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Punkt(`STRECKUNG01;Z=0;0;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Strecke(`STRECKUNG01;[[0;0];[5.891001;-2.747019]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`STRECKUNG01;[[0;0];[8.638019;3.143982]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`STRECKUNG01;[[0;0];[6.705702;0.183214]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Flaeche(`STRECKUNG01;[[5.437847;-2.53571];[7.973556;2.902137];[3.352851;0.091607]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG01;[[5.437847;-2.53571];[7.973556;2.902137];[3.352851;0.091607];[5.437847;-2.53571]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Flaeche(`STRECKUNG01;[[1.812616;-0.845237];[2.657852;0.967379];[1.117617;0.030536]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG01;[[1.812616;-0.845237];[2.657852;0.967379];[1.117617;0.030536];[1.812616;-0.845237]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@KoordText(`STRECKUNG01;[1.812616;-1.195237];$\Large A$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`STRECKUNG01;[5.437847;-2.88571];$\Large A'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRECKUNG01;[2.657852;1.317379];$\Large B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`STRECKUNG01;[7.973556;3.252137];$\Large B'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRECKUNG01;[0.867617;0.650536];$\Large C$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`STRECKUNG01;[3.052851;0.391607];$\Large C'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRECKUNG01;[-0.28;-0.35];$\Large Z$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`STRECKUNG01;[5.2;2.75];$\Large k=3$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} In der Abbildung wird das rote Dreieck $ABC$ mit dem Faktor $k=3$ auf das große, schwarz umrandete Dreieck $A'B'C'$ abgebildet. Die gestrichelten Hilfslinien zeigen, dass $Z$, jeder ursprüngliche Eckpunkt und sein zugehöriger Bildpunkt auf einer Geraden liegen. Für die Abstände gilt

$$
\frac{\left|\overline{ZA'}\right|}{\left|\overline{ZA}\right|}
=
\frac{\left|\overline{ZB'}\right|}{\left|\overline{ZB}\right|}
=
\frac{\left|\overline{ZC'}\right|}{\left|\overline{ZC}\right|}
=3.
$$

Auch jede Seitenlänge des großen Dreiecks ist dreimal so groß wie die entsprechende Seitenlänge des roten Dreiecks. Umgekehrt erhält man das rote Dreieck aus dem großen durch eine zentrische Streckung mit dem Faktor $k=\frac13$.

{{|>}} Für $k>1$ wird die Figur vergrößert. Für $0<k<1$ wird sie verkleinert. Bei $k=1$ bleibt die Figur unverändert. Die Winkelgrößen ändern sich bei einer zentrischen Streckung nicht; die Form bleibt erhalten. Entsprechende Seiten liegen auf parallelen Geraden oder auf derselben Geraden.

{{|>}} Eine Figur kann außerdem um einen Punkt gedreht werden. Dazu legt man ein Drehzentrum $Z$, einen Drehwinkel und eine Drehrichtung fest. Jeder Punkt bewegt sich auf einem Kreis um $Z$. Der Radius dieses Kreises ist sein Abstand vom Drehzentrum.

Bei einer Drehung wird jeder Punkt um denselben Winkel und in derselben Richtung gedreht. Sein Abstand zu $Z$ bleibt dabei erhalten:

$$
\left|\overline{ZP'}\right|=\left|\overline{ZP}\right|.
$$

Auch die Seitenlängen und Winkelgrößen der Figur bleiben unverändert. Die Drehung ändert die Lage, aber weder die Form noch die Größe der Figur. Das Drehzentrum selbst bleibt fest.

<center>

@Koordinatensystem(`xmin=-6.9;xmax=6.9;ymin=-6.9;ymax=6.9;width=780;id=STRECKUNG02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`STRECKUNG02;[[-6.9;-6.9];[6.9;-6.9];[6.9;6.9];[-6.9;6.9]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Punkt(`STRECKUNG02;Z=0;0;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Kreis(`STRECKUNG02;BahnA=0;Z;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);0;radius=4;inhalt=0;umfang=0;linestyle=dashed`)
@Kreis(`STRECKUNG02;BahnB=0;Z;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;radius=5.656854249492381;inhalt=0;umfang=0;linestyle=dashed`)
@Kreis(`STRECKUNG02;BahnC=0;Z;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0;radius=2.23606797749979;inhalt=0;umfang=0;linestyle=dashed`)
@Flaeche(`STRECKUNG02;[[3.625231;-1.690473];[5.315704;1.934758];[2.235234;0.061071]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG02;[[3.625231;-1.690473];[5.315704;1.934758];[2.235234;0.061071];[3.625231;-1.690473]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=dotted`)
@KoordText(`STRECKUNG02;[5.873079;2.137626];$\Large 0^\circ$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);1`)
@Flaeche(`STRECKUNG02;[[3.75877;1.368081];[2.39069;5.126851];[1.537365;1.623733]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG02;[[3.75877;1.368081];[2.39069;5.126851];[1.537365;1.623733];[3.75877;1.368081]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=dotted`)
@KoordText(`STRECKUNG02;[2.641364;5.664424];$\Large 45^\circ$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@Flaeche(`STRECKUNG02;[[1.690473;3.625231];[-1.934758;5.315704];[-0.061071;2.235234]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG02;[[1.690473;3.625231];[-1.934758;5.315704];[-0.061071;2.235234];[1.690473;3.625231]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=dotted`)
@KoordText(`STRECKUNG02;[-2.137626;5.873079];$\Large 90^\circ$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@Flaeche(`STRECKUNG02;[[-1.368081;3.75877];[-5.126851;2.39069];[-1.623733;1.537365]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG02;[[-1.368081;3.75877];[-5.126851;2.39069];[-1.623733;1.537365];[-1.368081;3.75877]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=dotted`)
@KoordText(`STRECKUNG02;[-5.664424;2.641364];$\Large 135^\circ$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Flaeche(`STRECKUNG02;[[-3.625231;1.690473];[-5.315704;-1.934758];[-2.235234;-0.061071]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG02;[[-3.625231;1.690473];[-5.315704;-1.934758];[-2.235234;-0.061071];[-3.625231;1.690473]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@KoordText(`STRECKUNG02;[-5.873079;-2.137626];$\Large 180^\circ$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Flaeche(`STRECKUNG02;[[-3.464102;-2];[-1.464102;-5.464102];[-1.232051;-1.866025]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b07850);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG02;[[-3.464102;-2];[-1.464102;-5.464102];[-1.232051;-1.866025];[-3.464102;-2]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=dotted`)
@KoordText(`STRECKUNG02;[-1.617619;-6.037036];$\Large 235^\circ$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b07850);1`)
@Flaeche(`STRECKUNG02;[[-0.348623;-3.984779];[3.636156;-4.333402];[0.821883;-2.079545]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG02;[[-0.348623;-3.984779];[3.636156;-4.333402];[0.821883;-2.079545];[-0.348623;-3.984779]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=dotted`)
@KoordText(`STRECKUNG02;[4.017423;-4.787778];$\Large 290^\circ$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)
@Strecke(`STRECKUNG02;[[0;0];[3.625231;-1.690473]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`STRECKUNG02;[[0;0];[3.75877;1.368081]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`STRECKUNG02;[[1.015065;-0.473332];[1.024162;-0.453312];[1.032865;-0.433116];[1.04117;-0.412754];[1.049073;-0.392232];[1.056572;-0.371559];[1.063663;-0.350743];[1.070344;-0.329792];[1.076613;-0.308714];[1.082467;-0.287516];[1.087903;-0.266208];[1.09292;-0.244797];[1.097516;-0.223292];[1.101688;-0.201701];[1.105436;-0.180032];[1.108758;-0.158293];[1.111652;-0.136494];[1.114117;-0.114642];[1.116153;-0.092745];[1.117759;-0.070813];[1.118934;-0.048854];[1.119678;-0.026875];[1.119989;-0.004887];[1.119869;0.017104];[1.119318;0.039087];[1.118335;0.061056];[1.11692;0.083002];[1.115075;0.104915];[1.1128;0.126788];[1.110097;0.148612];[1.106965;0.170378];[1.103406;0.192079];[1.099422;0.213706];[1.095015;0.235251];[1.090185;0.256704];[1.084935;0.278059];[1.079266;0.299307];[1.073182;0.320439];[1.066683;0.341448];[1.059774;0.362325];[1.052456;0.383063]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;->;2px;linestyle=solid`)
@KoordText(`STRECKUNG02;[1.618458;-0.070663];$\Large 45^\circ$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRECKUNG02;[-0.35;-0.43];$\Large Z$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Die hellblaue Figur rechts ist die Ausgangsfigur. Die anderen Dreiecke zeigen verschiedene Drehungen dieser Figur um $Z$. Die außen angegebenen Winkel $0^\circ$, $45^\circ$, $90^\circ$, $135^\circ$, $180^\circ$, $235^\circ$ und $290^\circ$ werden jeweils von dieser Ausgangslage aus gegen den Uhrzeigersinn gemessen. Die rote Figur gehört zur Drehung um $180^\circ$.

Der kleine Winkelbogen am Zentrum zeigt als Beispiel die Drehung um $45^\circ$. Die drei gestrichelten Kreise sind die Bahnen der drei Eckpunkte. Entsprechende Eckpunkte aller Dreiecke liegen auf demselben Kreis, weil sich ihr Abstand vom Drehzentrum nicht ändert.

{{|>}} Zentrische Streckung und Drehung können auch nacheinander ausgeführt werden. In der folgenden Abbildung ist das rote Dreieck die Zwischenfigur: Das blaue Dreieck wird zunächst um $110^\circ$ im Uhrzeigersinn um $Z$ gedreht und liegt dann auf dem roten Dreieck. Anschließend wird das rote Dreieck vom selben Zentrum aus mit dem Faktor $k=2{,}5$ gestreckt. So entsteht das große, schwarz umrandete Dreieck.

<center>

@Koordinatensystem(`xmin=-6.5;xmax=15.25;ymin=-6.65;ymax=6.65;width=900;id=STRECKUNG03;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`STRECKUNG03;[[-6.5;-6.65];[15.25;-6.65];[15.25;6.65];[-6.5;6.65]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Punkt(`STRECKUNG03;Z=0;0;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Strecke(`STRECKUNG03;[[0;0];[8.601096;-6.022553]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`STRECKUNG03;[[0;0];[14.623649;2.578544]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`STRECKUNG03;[[0;0];[11.059403;-1.640004]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Kreis(`STRECKUNG03;BahnA=0;Z;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);0;radius=4;inhalt=0;umfang=0;linestyle=dashed`)
@Kreis(`STRECKUNG03;BahnB=0;Z;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;radius=5.656854249492381;inhalt=0;umfang=0;linestyle=dashed`)
@Kreis(`STRECKUNG03;BahnC=0;Z;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b07850);0;radius=2.23606797749979;inhalt=0;umfang=0;linestyle=dashed`)
@Flaeche(`STRECKUNG03;[[8.19152;-5.735764];[13.927285;2.455756];[5.529701;-0.820002]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG03;[[8.19152;-5.735764];[13.927285;2.455756];[5.529701;-0.820002];[8.19152;-5.735764]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Flaeche(`STRECKUNG03;[[3.276608;-2.294306];[5.570914;0.982302];[2.211881;-0.328001]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG03;[[3.276608;-2.294306];[5.570914;0.982302];[2.211881;-0.328001];[3.276608;-2.294306]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@Flaeche(`STRECKUNG03;[[1.035276;3.863703];[-2.828427;4.898979];[-0.448288;2.190671]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0.18;inhalt=0;umfang=0`)
@Strecke(`STRECKUNG03;[[1.035276;3.863703];[-2.828427;4.898979];[-0.448288;2.190671];[1.035276;3.863703]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=solid`)
@Strecke(`STRECKUNG03;[[0;0];[1.035276;3.863703]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`STRECKUNG03;[[0.349406;1.304];[0.411567;1.285734];[0.47278;1.264507];[0.532904;1.240368];[0.591801;1.213372];[0.649335;1.183581];[0.705373;1.151064];[0.759787;1.115896];[0.81245;1.078158];[0.863243;1.037936];[0.912047;0.995324];[0.95875;0.95042];[1.003246;0.903326];[1.04543;0.854152];[1.085207;0.803011];[1.122484;0.75002];[1.157176;0.695301];[1.189202;0.638982];[1.21849;0.58119];[1.244971;0.52206];[1.268585;0.461727];[1.289277;0.400331];[1.306999;0.338013];[1.321711;0.274916];[1.333379;0.211187];[1.341976;0.14697];[1.347482;0.082416];[1.349884;0.017671];[1.349178;-0.047114];[1.345363;-0.111791];[1.338451;-0.17621];[1.328455;-0.240224];[1.3154;-0.303684];[1.299315;-0.366445];[1.280237;-0.428361];[1.258211;-0.489291];[1.233286;-0.549094];[1.205522;-0.607633];[1.17498;-0.664772];[1.141733;-0.72038];[1.105855;-0.774328]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;->;2px;linestyle=solid`)
@KoordText(`STRECKUNG03;[2.65;1.65];$\Large 110^\circ$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRECKUNG03;[10.3;-4.7];$\Large k=2{,}5$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRECKUNG03;[-0.45;-0.5];$\Large Z$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Vom blauen zum großen Dreieck werden also sowohl die Lage als auch die Größe verändert. Der Weg vom roten zum blauen Dreieck besteht dagegen nur aus einer Drehung um $110^\circ$ gegen den Uhrzeigersinn. Der Weg vom roten zum großen Dreieck besteht nur aus der Streckung mit dem Faktor $2{,}5$.

Solche Abbildungen helfen dabei, Kongruenz und Ähnlichkeit zu untersuchen. Eine gedrehte Figur ist zur Ausgangsfigur kongruent: Beide haben dieselbe Form und Größe. Bei einer zentrischen Streckung bleibt die Form erhalten, während die Seitenlängen mit demselben Faktor verändert werden. Ausgangsfigur und Bildfigur sind deshalb ähnlich.

Um beliebige kongruente oder ähnliche Figuren aufeinander abzubilden, können je nach Lage und Orientierung zusätzlich Verschiebungen oder Spiegelungen erforderlich sein. Kongruenz und Ähnlichkeit werden in eigenen Erklärungen genauer betrachtet.

***************************
