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













tags: Erklärung, Achsenspiegelung, Punktspiegelung

comment: In diesem Abschnitt werden Achsenspiegelung und Punktspiegelung sowie Achsensymmetrie, Punktsymmetrie und Kreissymmetrie erklärt.

author: Martin Lommatzsch

-->

# Symmetrie

{{|>}}
***************************

Symmetrien sind wichtige Eigenschaften geometrischer Figuren und von Funktionsgraphen. Auch in den Naturwissenschaften spielen sie eine große Rolle. Um Achsensymmetrie und Punktsymmetrie zu verstehen, werden zunächst zwei Arten von Spiegelungen betrachtet.

{{|>}} Bei einer Achsenspiegelung wird eine Gerade als Spiegelachse $s$ festgelegt. Zu jedem Punkt $P$, der nicht auf dieser Achse liegt, gehört ein Bildpunkt $P'$ auf der anderen Seite. Beide Punkte haben denselben Abstand zur Spiegelachse.

Die Verbindung zwischen $P$ und $P'$ ist orthogonal zur Spiegelachse $s$. Der Schnittpunkt $F$ dieser Verbindung mit der Spiegelachse ist der Mittelpunkt der Strecke $\overline{PP'}$. Es gilt also

$$
\overline{PP'}\perp s
\qquad\text{und}\qquad
\left|\overline{PF}\right|=\left|\overline{FP'}\right|.
$$

Ein Punkt auf der Spiegelachse bleibt bei der Spiegelung unverändert. In der folgenden Abbildung wird das Dreieck $ABC$ an der Achse $s$ auf das Dreieck $A'B'C'$ gespiegelt.

<center>

@Koordinatensystem(`xmin=-2.4;xmax=7.6;ymin=-5.2;ymax=3.2;width=680;id=SYMMETRIE01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`SYMMETRIE01;[[-2.4;-5.2];[7.6;-5.2];[7.6;3.2];[-2.4;3.2]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`SYMMETRIE01;[[0;0];[5;0];[3.375;2.375]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`SYMMETRIE01;[[0;0];[5;0];[3.375;2.375];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Flaeche(`SYMMETRIE01;[[0;-2];[5;-2];[3.375;-4.375]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`SYMMETRIE01;[[0;-2];[5;-2];[3.375;-4.375];[0;-2]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`SYMMETRIE01;[[-2;-1];[7;-1]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`SYMMETRIE01;[[0;0];[0;-2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=dashed`)
@Strecke(`SYMMETRIE01;[[0;-0.77];[0.23;-0.77];[0.23;-1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE01;[[-0.1;-0.5];[0.1;-0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE01;[[-0.1;-1.5];[0.1;-1.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE01;[[5;0];[5;-2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`SYMMETRIE01;[[5;-0.77];[4.77;-0.77];[4.77;-1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE01;[[4.9;-0.5];[5.1;-0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE01;[[4.9;-1.5];[5.1;-1.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE01;[[3.375;2.375];[3.375;-4.375]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px;linestyle=dashed`)
@Strecke(`SYMMETRIE01;[[3.375;-0.77];[3.605;-0.77];[3.605;-1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE01;[[3.275;0.6875];[3.475;0.6875]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE01;[[3.275;-2.6875];[3.475;-2.6875]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px;linestyle=solid`)
@KoordText(`SYMMETRIE01;[-0.35;0.2];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE01;[5.35;0.2];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE01;[3.375;2.75];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE01;[-0.35;-2.2];$\Large A'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE01;[5.35;-2.2];$\Large B'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE01;[3.375;-4.8];$\Large C'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE01;[7.22;-0.67];$\Large s$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die gestrichelten Verbindungslinien führen von $A$ nach $A'$, von $B$ nach $B'$ und von $C$ nach $C'$. Die kleinen Rechtwinkelmarkierungen zeigen, dass alle drei Verbindungen orthogonal zur Spiegelachse verlaufen. Die gleichfarbigen Querstriche markieren die jeweils gleich langen Teilstrecken auf beiden Seiten der Achse.

Mit dem Abstand eines Punktes von einer Geraden ist immer die Länge der kürzesten Verbindung gemeint. Für einen Punkt außerhalb der Geraden verläuft diese Verbindung orthogonal zur Geraden. Um beispielsweise $C$ zu spiegeln, zeichnet man deshalb durch $C$ eine zu $s$ orthogonale Gerade und trägt denselben Abstand auf der anderen Seite ab. So erhält man $C'$. Anschließend werden die gespiegelten Eckpunkte wieder miteinander verbunden.

{{|>}} Bei einer Punktspiegelung wird ein Punkt $M$ als Spiegelzentrum festgelegt. Zu jedem Punkt $P$ gehört ein Bildpunkt $P'$, sodass $M$ der Mittelpunkt der Strecke $\overline{PP'}$ ist. Für $P\ne M$ liegen $P$, $M$ und $P'$ daher auf einer Geraden, wobei die beiden Punkte auf entgegengesetzten Seiten von $M$ liegen. Es gilt

$$
\left|\overline{PM}\right|=\left|\overline{MP'}\right|.
$$

Das Spiegelzentrum $M$ selbst bleibt unverändert. In der Ebene entspricht die Punktspiegelung einer Drehung um $M$ um $180^\circ$, also einer halben Umdrehung.

<center>

@Koordinatensystem(`xmin=-8;xmax=8;ymin=-3.25;ymax=7.9;width=780;id=SYMMETRIE02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`SYMMETRIE02;[[-8;-3.25];[8;-3.25];[8;7.9];[-8;7.9]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`SYMMETRIE02;[[2;0];[7;0];[5.375;2.375]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`SYMMETRIE02;[[2;0];[7;0];[5.375;2.375];[2;0]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Flaeche(`SYMMETRIE02;[[-2;0];[-7;0];[-5.375;-2.375]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`SYMMETRIE02;[[-2;0];[-7;0];[-5.375;-2.375];[-2;0]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`SYMMETRIE02;[[2;0];[1.998782;0.069799];[1.995128;0.139513];[1.989044;0.209057];[1.980536;0.278346];[1.969616;0.347296];[1.956295;0.415823];[1.940591;0.483844];[1.922523;0.551275];[1.902113;0.618034];[1.879385;0.68404];[1.854368;0.749213];[1.827091;0.813473];[1.797588;0.876742];[1.765895;0.938943];[1.732051;1];[1.696096;1.059839];[1.658075;1.118386];[1.618034;1.175571];[1.576022;1.231323];[1.532089;1.285575];[1.48629;1.338261];[1.43868;1.389317];[1.389317;1.43868];[1.338261;1.48629];[1.285575;1.532089];[1.231323;1.576022];[1.175571;1.618034];[1.118386;1.658075];[1.059839;1.696096];[1;1.732051];[0.938943;1.765895];[0.876742;1.797588];[0.813473;1.827091];[0.749213;1.854368];[0.68404;1.879385];[0.618034;1.902113];[0.551275;1.922523];[0.483844;1.940591];[0.415823;1.956295];[0.347296;1.969616];[0.278346;1.980536];[0.209057;1.989044];[0.139513;1.995128];[0.069799;1.998782];[0;2];[-0.069799;1.998782];[-0.139513;1.995128];[-0.209057;1.989044];[-0.278346;1.980536];[-0.347296;1.969616];[-0.415823;1.956295];[-0.483844;1.940591];[-0.551275;1.922523];[-0.618034;1.902113];[-0.68404;1.879385];[-0.749213;1.854368];[-0.813473;1.827091];[-0.876742;1.797588];[-0.938943;1.765895];[-1;1.732051];[-1.059839;1.696096];[-1.118386;1.658075];[-1.175571;1.618034];[-1.231323;1.576022];[-1.285575;1.532089];[-1.338261;1.48629];[-1.389317;1.43868];[-1.43868;1.389317];[-1.48629;1.338261];[-1.532089;1.285575];[-1.576022;1.231323];[-1.618034;1.175571];[-1.658075;1.118386];[-1.696096;1.059839];[-1.732051;1];[-1.765895;0.938943];[-1.797588;0.876742];[-1.827091;0.813473];[-1.854368;0.749213];[-1.879385;0.68404];[-1.902113;0.618034];[-1.922523;0.551275];[-1.940591;0.483844];[-1.956295;0.415823];[-1.969616;0.347296];[-1.980536;0.278346];[-1.989044;0.209057];[-1.995128;0.139513];[-1.998782;0.069799];[-2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;->;2px;linestyle=dashed`)
@Strecke(`SYMMETRIE02;[[7;0];[6.995736;0.244296];[6.982948;0.488295];[6.961653;0.731699];[6.931876;0.974212];[6.893654;1.215537];[6.847033;1.455382];[6.79207;1.693453];[6.728832;1.929461];[6.657396;2.163119];[6.577848;2.394141];[6.490287;2.622246];[6.394818;2.847157];[6.291558;3.068598];[6.180633;3.286301];[6.062178;3.5];[5.936337;3.709435];[5.803263;3.91435];[5.663119;4.114497];[5.516075;4.30963];[5.362311;4.499513];[5.202014;4.683914];[5.035379;4.862609];[4.862609;5.035379];[4.683914;5.202014];[4.499513;5.362311];[4.30963;5.516075];[4.114497;5.663119];[3.91435;5.803263];[3.709435;5.936337];[3.5;6.062178];[3.286301;6.180633];[3.068598;6.291558];[2.847157;6.394818];[2.622246;6.490287];[2.394141;6.577848];[2.163119;6.657396];[1.929461;6.728832];[1.693453;6.79207];[1.455382;6.847033];[1.215537;6.893654];[0.974212;6.931876];[0.731699;6.961653];[0.488295;6.982948];[0.244296;6.995736];[0;7];[-0.244296;6.995736];[-0.488295;6.982948];[-0.731699;6.961653];[-0.974212;6.931876];[-1.215537;6.893654];[-1.455382;6.847033];[-1.693453;6.79207];[-1.929461;6.728832];[-2.163119;6.657396];[-2.394141;6.577848];[-2.622246;6.490287];[-2.847157;6.394818];[-3.068598;6.291558];[-3.286301;6.180633];[-3.5;6.062178];[-3.709435;5.936337];[-3.91435;5.803263];[-4.114497;5.663119];[-4.30963;5.516075];[-4.499513;5.362311];[-4.683914;5.202014];[-4.862609;5.035379];[-5.035379;4.862609];[-5.202014;4.683914];[-5.362311;4.499513];[-5.516075;4.30963];[-5.663119;4.114497];[-5.803263;3.91435];[-5.936337;3.709435];[-6.062178;3.5];[-6.180633;3.286301];[-6.291558;3.068598];[-6.394818;2.847157];[-6.490287;2.622246];[-6.577848;2.394141];[-6.657396;2.163119];[-6.728832;1.929461];[-6.79207;1.693453];[-6.847033;1.455382];[-6.893654;1.215537];[-6.931876;0.974212];[-6.961653;0.731699];[-6.982948;0.488295];[-6.995736;0.244296];[-7;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px;linestyle=dashed`)
@Strecke(`SYMMETRIE02;[[5.375;2.375];[5.288839;2.561138];[5.196235;2.744156];[5.0973;2.92383];[4.992155;3.099942];[4.880927;3.272277];[4.763753;3.440626];[4.640775;3.604783];[4.512143;3.764547];[4.378013;3.919726];[4.23855;4.070128];[4.093923;4.215572];[3.944307;4.35588];[3.789887;4.490881];[3.630848;4.62041];[3.467387;4.74431];[3.2997;4.86243];[3.127994;4.974626];[2.952476;5.080761];[2.773362;5.180706];[2.590868;5.274339];[2.405218;5.361546];[2.216638;5.442221];[2.025357;5.516265];[1.831608;5.583589];[1.635628;5.644109];[1.437655;5.697754];[1.23793;5.744456];[1.036698;5.78416];[0.834202;5.816817];[0.63069;5.842387];[0.426409;5.860838];[0.221609;5.872149];[0.016539;5.876306];[-0.188551;5.873304];[-0.393412;5.863146];[-0.597793;5.845844];[-0.801446;5.82142];[-1.004122;5.789904];[-1.205575;5.751334];[-1.405559;5.705756];[-1.603831;5.653227];[-1.800149;5.59381];[-1.994274;5.527578];[-2.185968;5.454612];[-2.375;5.375];[-2.561138;5.288839];[-2.744156;5.196235];[-2.92383;5.0973];[-3.099942;4.992155];[-3.272277;4.880927];[-3.440626;4.763753];[-3.604783;4.640775];[-3.764547;4.512143];[-3.919726;4.378013];[-4.070128;4.23855];[-4.215572;4.093923];[-4.35588;3.944307];[-4.490881;3.789887];[-4.62041;3.630848];[-4.74431;3.467387];[-4.86243;3.2997];[-4.974626;3.127994];[-5.080761;2.952476];[-5.180706;2.773362];[-5.274339;2.590868];[-5.361546;2.405218];[-5.442221;2.216638];[-5.516265;2.025357];[-5.583589;1.831608];[-5.644109;1.635628];[-5.697754;1.437655];[-5.744456;1.23793];[-5.78416;1.036698];[-5.816817;0.834202];[-5.842387;0.63069];[-5.860838;0.426409];[-5.872149;0.221609];[-5.876306;0.016539];[-5.873304;-0.188551];[-5.863146;-0.393412];[-5.845844;-0.597793];[-5.82142;-0.801446];[-5.789904;-1.004122];[-5.751334;-1.205575];[-5.705756;-1.405559];[-5.653227;-1.603831];[-5.59381;-1.800149];[-5.527578;-1.994274];[-5.454612;-2.185968];[-5.375;-2.375]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;->;2px;linestyle=dashed`)
@Strecke(`SYMMETRIE02;[[7;0];[-7;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`SYMMETRIE02;[[2;0];[-2;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=dashed`)
@Strecke(`SYMMETRIE02;[[5.375;2.375];[-5.375;-2.375]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px;linestyle=dashed`)
@Strecke(`SYMMETRIE02;[[-1;-0.11];[-1;0.11]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE02;[[1;-0.11];[1;0.11]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE02;[[-3.5;-0.11];[-3.5;0.11]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE02;[[3.5;-0.11];[3.5;0.11]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE02;[[-2.643042;-1.288116];[-2.731958;-1.086884]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px;linestyle=solid`)
@Strecke(`SYMMETRIE02;[[2.731958;1.086884];[2.643042;1.288116]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2px;linestyle=solid`)
@Punkt(`SYMMETRIE02;M=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`SYMMETRIE02;[0;-0.48];$\Large M$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE02;[2.23;-0.38];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE02;[7.25;-0.4];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE02;[5.69;2.72];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE02;[-2.24;0.4];$\Large A'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE02;[-7.34;-0.42];$\Large B'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE02;[-5.56;-2.82];$\Large C'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`SYMMETRIE02;[0;2.45];$\Large 180^\circ$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Auch hier wird das Dreieck $ABC$ auf das Dreieck $A'B'C'$ abgebildet. Die roten, blauen und orangefarbenen Kreisbögen zeigen die Drehwege von $A$, $B$ und $C$ zu ihren Bildpunkten. Jeder Bogen beschreibt eine halbe Umdrehung um denselben Punkt $M$.

Die geraden gestrichelten Verbindungen gehen durch $M$. Für die Abstände gilt

$$
\begin{aligned}
\left|\overline{AM}\right|&=\left|\overline{MA'}\right|,\\
\left|\overline{BM}\right|&=\left|\overline{MB'}\right|,\\
\left|\overline{CM}\right|&=\left|\overline{MC'}\right|.
\end{aligned}
$$

Zur Konstruktion von $C'$ zeichnet man die Gerade durch $C$ und $M$ und trägt die Länge der Strecke $\overline{CM}$ von $M$ aus in der entgegengesetzten Richtung noch einmal ab. Genauso werden $A'$ und $B'$ bestimmt.

{{|>}} Eine Spiegelung ist zunächst eine Abbildung, die einer Figur ein Spiegelbild zuordnet. Von Symmetrie spricht man, wenn die gesamte Figur durch eine solche Abbildung auf sich selbst abgebildet wird: Das Spiegelbild liegt dann genau auf der ursprünglichen Figur. Dabei muss nicht jeder einzelne Punkt an seiner ursprünglichen Stelle bleiben; Punkte dürfen ihre Plätze miteinander tauschen.

Eine Figur ist achsensymmetrisch zu einer Geraden, wenn sie nach der Spiegelung an dieser Geraden mit sich selbst übereinstimmt. Diese Gerade heißt Symmetrieachse. Anschaulich passen die beiden Seiten beim Falten entlang der Symmetrieachse genau aufeinander. Ein Rechteck hat beispielsweise zwei Symmetrieachsen durch die Mittelpunkte gegenüberliegender Seiten; bei einem Quadrat kommen die beiden Diagonalen hinzu.

Eine Figur ist punktsymmetrisch zu einem Punkt, wenn sie nach einer Punktspiegelung an diesem Punkt mit sich selbst übereinstimmt. Dieser Punkt heißt Symmetriezentrum. Ein Parallelogramm ist beispielsweise punktsymmetrisch zum Schnittpunkt seiner Diagonalen.

Die vorherigen Abbildungen zeigen jeweils ein Dreieck und sein Spiegelbild. Allein daraus folgt nicht, dass das einzelne Dreieck achsen- oder punktsymmetrisch ist.

{{|>}} Eine weitergehende Symmetrie ist die Kreissymmetrie, die hier mit radialer Symmetrie gemeint ist: Eine ebene Figur bleibt bei jeder Drehung um denselben Mittelpunkt unverändert. Ein Kreis besitzt diese Eigenschaft. Ausgehend vom Mittelpunkt ist keine Richtung ausgezeichnet.

Eine solche Figur bleibt insbesondere bei einer Drehung um $180^\circ$ unverändert und ist deshalb auch punktsymmetrisch. Umgekehrt ist nicht jede punktsymmetrische Figur kreissymmetrisch: Ein Rechteck ist zwar zu seinem Mittelpunkt punktsymmetrisch, stimmt aber beispielsweise nach einer Drehung um $45^\circ$ nicht mit sich selbst überein.

***************************
