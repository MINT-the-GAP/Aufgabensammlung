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













tags: Erklärung, Strahlensatz

comment: In diesem Abschnitt werden der erste und zweite Strahlensatz, die beiden Strahlensatzfiguren und das Aufstellen passender Verhältnisgleichungen erklärt.

author: Martin Lommatzsch

-->

# Strahlensatz

{{|>}}
***************************

Bei kongruenten Dreiecken sind entsprechende Seiten gleich lang. Damit stimmen auch die Verhältnisse entsprechender Seitenlängen überein. Das gilt nicht nur für kongruente, sondern auch für ähnliche Dreiecke: Alle entsprechenden Seitenlängen werden mit demselben Faktor verändert, sodass ihre Verhältnisse gleich bleiben.

<center>

@Koordinatensystem(`xmin=-0.6;xmax=12.6;ymin=-0.95;ymax=4.6;width=860;id=STRAHLENSATZ01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`STRAHLENSATZ01;[[-0.6;-0.95];[12.6;-0.95];[12.6;4.6];[-0.6;4.6]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`STRAHLENSATZ01;[[0;0];[3;0];[2;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`STRAHLENSATZ01;[[3;0];[2;3]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ01;[[3;0];[0;0];[2;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@KoordText(`STRAHLENSATZ01;[1.5;-0.46];$\Large T_1$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`STRAHLENSATZ01;[[4;0];[7;0];[6;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`STRAHLENSATZ01;[[7;0];[6;3]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ01;[[7;0];[4;0];[6;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@KoordText(`STRAHLENSATZ01;[5.5;-0.46];$\Large T_2$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`STRAHLENSATZ01;[[8;0];[12;0];[10.666667;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`STRAHLENSATZ01;[[12;0];[10.666667;4]];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ01;[[12;0];[8;0];[10.666667;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@KoordText(`STRAHLENSATZ01;[10;-0.46];$\Large T_3$;rgb(var(--color-text,51,51,51));1`)

</center>

Die ersten beiden Dreiecke $T_1$ und $T_2$ sind kongruent. Das dritte Dreieck $T_3$ ist eine Vergrößerung mit dem Faktor $k=\frac43$. Das Verhältnis der beiden rot markierten Seiten ist bei allen drei Dreiecken gleich. Durch die Vergrößerung werden nämlich Zähler und Nenner mit demselben Faktor multipliziert.

{{|>}} Werden zwei ähnliche Dreiecke passend angeordnet, entstehen die charakteristischen Strahlensatzfiguren. Links sind das kleine und das große Dreieck an einem gemeinsamen Eckpunkt $S$ überlagert. Rechts ist das kleine Dreieck zusätzlich um $180^\circ$ um $S$ gedreht.

<center>

@Koordinatensystem(`xmin=-0.7;xmax=13.45;ymin=-3.65;ymax=4.55;width=880;id=STRAHLENSATZ02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`STRAHLENSATZ02;[[-0.7;-3.65];[13.45;-3.65];[13.45;4.55];[-0.7;4.55]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`STRAHLENSATZ02;[[0;0];[4;0];[2.666667;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Flaeche(`STRAHLENSATZ02;[[0;0];[3;0];[2;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`STRAHLENSATZ02;[[4;0];[0;0];[2.666667;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ02;[[3;0];[0;0];[2;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ02;[[4;0];[2.666667;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@Strecke(`STRAHLENSATZ02;[[3;0];[2;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@KoordText(`STRAHLENSATZ02;[-0.33;-0.37];$\Large S$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`STRAHLENSATZ02;[[8.8;0];[12.8;0];[11.466667;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Flaeche(`STRAHLENSATZ02;[[8.8;0];[5.8;0];[6.8;-3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`STRAHLENSATZ02;[[12.8;0];[8.8;0];[11.466667;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ02;[[5.8;0];[8.8;0];[6.8;-3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ02;[[12.8;0];[11.466667;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@Strecke(`STRAHLENSATZ02;[[5.8;0];[6.8;-3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=solid`)
@KoordText(`STRAHLENSATZ02;[9.3;-0.37];$\Large S$;rgb(var(--color-text,51,51,51));1`)

</center>

In beiden Anordnungen liegen die roten Seiten auf zwei Geraden, die sich in $S$ schneiden. Die blauen Querstrecken sind parallel. Links befinden sie sich auf derselben Seite von $S$, rechts auf gegenüberliegenden Seiten. Diese beiden Anordnungen werden häufig V-Figur und X-Figur genannt.

{{|>}} Die Strahlensätze ermöglichen es, unbekannte Streckenlängen mithilfe solcher Verhältnisse zu berechnen. Voraussetzung sind zwei verschiedene Geraden, die sich in $S$ schneiden, und zwei verschiedene parallele Geraden $g$ und $h$, die jede der beiden sich schneidenden Geraden treffen, aber nicht durch $S$ gehen.

Die Schnittpunkte werden so bezeichnet, dass $S$, $A$ und $A'$ auf einer Geraden liegen und $S$, $B$ und $B'$ auf der anderen. Die Strecken $\overline{AB}$ und $\overline{A'B'}$ liegen auf den parallelen Geraden:

$$
g\parallel h
\qquad\Rightarrow\qquad
\overline{AB}\parallel\overline{A'B'}.
$$

<center>

@Koordinatensystem(`xmin=-1.1;xmax=6.5;ymin=-0.85;ymax=6.2;width=660;id=STRAHLENSATZ03;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`STRAHLENSATZ03;[[-1.1;-0.85];[6.5;-0.85];[6.5;6.2];[-1.1;6.2]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`STRAHLENSATZ03;[[0;0];[0;5];[5;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Flaeche(`STRAHLENSATZ03;[[0;0];[0;4];[4;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`STRAHLENSATZ03;[[0;-0.6];[0;5.95]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=solid`)
@Strecke(`STRAHLENSATZ03;[[-0.5;-0.5];[5.95;5.95]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=solid`)
@Strecke(`STRAHLENSATZ03;[[-0.75;4];[5.5;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ03;[[-0.75;5];[6.05;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ03;[[0;3.78];[0.22;3.78];[0.22;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Strecke(`STRAHLENSATZ03;[[0;4.78];[0.22;4.78];[0.22;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@Strecke(`STRAHLENSATZ03;[[0.388909;0.388909];[0.375404;0.40196];[0.361462;0.414542];[0.347098;0.426641];[0.33233;0.438243];[0.317174;0.449333];[0.301649;0.4599];[0.285771;0.469931];[0.269561;0.479413];[0.253036;0.488337];[0.236216;0.496691];[0.219121;0.504466];[0.20177;0.511653];[0.184184;0.518244];[0.166383;0.52423];[0.148388;0.529605];[0.13022;0.534362];[0.111901;0.538496];[0.093451;0.542003];[0.074892;0.544877];[0.056245;0.547117];[0.037533;0.548718];[0.018778;0.549679];[0;0.55]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@KoordText(`STRAHLENSATZ03;[0.367376;0.886924];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`STRAHLENSATZ03;[[3.66;4];[3.660198;3.988392];[3.660793;3.976798];[3.661783;3.96523];[3.663167;3.953703];[3.664944;3.94223];[3.667111;3.930825];[3.669667;3.9195];[3.672608;3.908269];[3.675931;3.897145];[3.679631;3.886141];[3.683705;3.87527];[3.688148;3.864544];[3.692955;3.853976];[3.698119;3.843578];[3.703635;3.833363];[3.709497;3.823341];[3.715698;3.813526];[3.72223;3.803929];[3.729086;3.79456];[3.736258;3.78543];[3.743738;3.776551];[3.751516;3.767932];[3.759584;3.759584]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@KoordText(`STRAHLENSATZ03;[3.316329;3.716814];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`STRAHLENSATZ03;[[4.66;5];[4.660198;4.988392];[4.660793;4.976798];[4.661783;4.96523];[4.663167;4.953703];[4.664944;4.94223];[4.667111;4.930825];[4.669667;4.9195];[4.672608;4.908269];[4.675931;4.897145];[4.679631;4.886141];[4.683705;4.87527];[4.688148;4.864544];[4.692955;4.853976];[4.698119;4.843578];[4.703635;4.833363];[4.709497;4.823341];[4.715698;4.813526];[4.72223;4.803929];[4.729086;4.79456];[4.736258;4.78543];[4.743738;4.776551];[4.751516;4.767932];[4.759584;4.759584]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@KoordText(`STRAHLENSATZ03;[4.316329;4.716814];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ03;[-0.42;0.18];$\Large S$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ03;[-0.36;3.7];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ03;[-0.36;5.28];$\Large A'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ03;[4.37;3.6];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ03;[5.52;4.71];$\Large B'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ03;[5.65;4.23];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`STRAHLENSATZ03;[6.15;5.24];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

In dieser V-Figur liegen $A'$ und $B'$ weiter von $S$ entfernt als $A$ und $B$. Die Dreiecke $SAB$ und $SA'B'$ besitzen den gemeinsamen Winkel $\alpha$ bei $S$. Die beiden mit $\beta$ markierten Winkel sind wegen $g\parallel h$ gleich große Stufenwinkel. Nach dem Ähnlichkeitssatz WW sind die Dreiecke deshalb ähnlich.

{{|>}} Bei der X-Figur liegen die parallelen Geraden auf gegenüberliegenden Seiten von $S$. Die Zuordnung bleibt dieselbe: $A$ gehört zu $A'$ und $B$ zu $B'$. Deshalb liegt $A'$ hier rechts oben und $B'$ links oben.

<center>

@Koordinatensystem(`xmin=-3.5;xmax=3.1;ymin=-3.1;ymax=4.35;width=590;id=STRAHLENSATZ04;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`STRAHLENSATZ04;[[-3.5;-3.1];[3.1;-3.1];[3.1;4.35];[-3.5;4.35]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`STRAHLENSATZ04;[[0;0];[1.5;3];[-2.25;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Flaeche(`STRAHLENSATZ04;[[0;0];[-1;-2];[1.5;-2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`STRAHLENSATZ04;[[-1.4;-2.8];[1.9;3.8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=solid`)
@Strecke(`STRAHLENSATZ04;[[2.1;-2.8];[-2.85;3.8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=solid`)
@Strecke(`STRAHLENSATZ04;[[-2.3;-2];[2.3;-2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ04;[[-3.1;3];[2.6;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=solid`)
@Strecke(`STRAHLENSATZ04;[[-0.201246;-0.402492];[-0.187203;-0.409213];[-0.172936;-0.415443];[-0.158461;-0.421177];[-0.143797;-0.426406];[-0.128961;-0.431125];[-0.113971;-0.435328];[-0.098844;-0.43901];[-0.083599;-0.442167];[-0.068253;-0.444794];[-0.052827;-0.446889];[-0.037336;-0.448448];[-0.021802;-0.449472];[-0.006241;-0.449957];[0.009328;-0.449903];[0.024885;-0.449311];[0.040413;-0.448182];[0.055892;-0.446516];[0.071304;-0.444315];[0.086631;-0.441583];[0.101854;-0.438322];[0.116955;-0.434536];[0.131916;-0.43023];[0.14672;-0.42541];[0.161347;-0.42008];[0.175782;-0.414247];[0.190006;-0.407919];[0.204003;-0.401102];[0.217756;-0.393805];[0.231248;-0.386037];[0.244463;-0.377807];[0.257385;-0.369124];[0.27;-0.36]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@KoordText(`STRAHLENSATZ04;[0.076335;-0.846565];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`STRAHLENSATZ04;[[0.201246;0.402492];[0.187203;0.409213];[0.172936;0.415443];[0.158461;0.421177];[0.143797;0.426406];[0.128961;0.431125];[0.113971;0.435328];[0.098844;0.43901];[0.083599;0.442167];[0.068253;0.444794];[0.052827;0.446889];[0.037336;0.448448];[0.021802;0.449472];[0.006241;0.449957];[-0.009328;0.449903];[-0.024885;0.449311];[-0.040413;0.448182];[-0.055892;0.446516];[-0.071304;0.444315];[-0.086631;0.441583];[-0.101854;0.438322];[-0.116955;0.434536];[-0.131916;0.43023];[-0.14672;0.42541];[-0.161347;0.42008];[-0.175782;0.414247];[-0.190006;0.407919];[-0.204003;0.401102];[-0.217756;0.393805];[-0.231248;0.386037];[-0.244463;0.377807];[-0.257385;0.369124];[-0.27;0.36]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@KoordText(`STRAHLENSATZ04;[-0.076335;0.846565];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`STRAHLENSATZ04;[[1.308;-1.744];[1.299323;-1.750744];[1.290882;-1.757782];[1.282688;-1.765105];[1.274751;-1.772705];[1.267079;-1.780574];[1.259682;-1.788701];[1.252568;-1.797078];[1.245746;-1.805694];[1.239224;-1.814539];[1.23301;-1.823602];[1.22711;-1.832874];[1.221532;-1.842343];[1.216283;-1.851998];[1.211368;-1.861827];[1.206794;-1.87182];[1.202565;-1.881963];[1.198688;-1.892246];[1.195165;-1.902656];[1.192003;-1.913181];[1.189203;-1.923808];[1.18677;-1.934525];[1.184707;-1.945319];[1.183015;-1.956177];[1.181697;-1.967088];[1.180755;-1.978037];[1.180189;-1.989012];[1.18;-2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@KoordText(`STRAHLENSATZ04;[0.873901;-1.68695];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`STRAHLENSATZ04;[[-2.016;2.688];[-2.005425;2.696219];[-1.995138;2.704796];[-1.985152;2.713722];[-1.975478;2.722985];[-1.966128;2.732574];[-1.957112;2.74248];[-1.948442;2.752689];[-1.940128;2.763189];[-1.932179;2.773969];[-1.924605;2.785015];[-1.917415;2.796315];[-1.910617;2.807856];[-1.90422;2.819623];[-1.89823;2.831602];[-1.892655;2.84378];[-1.887502;2.856143];[-1.882776;2.868675];[-1.878483;2.881362];[-1.874628;2.894189];[-1.871216;2.907141];[-1.868251;2.920202];[-1.865736;2.933357];[-1.863674;2.946591];[-1.862068;2.959888];[-1.86092;2.973233];[-1.86023;2.986608];[-1.86;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=solid`)
@KoordText(`STRAHLENSATZ04;[-1.543403;2.646701];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ04;[0.43;0.03];$\Large S$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ04;[-1.37;-2.35];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ04;[2.07;-2.36];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ04;[1.9;3.24];$\Large A'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ04;[-2.77;2.66];$\Large B'$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`STRAHLENSATZ04;[2.57;-2];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`STRAHLENSATZ04;[2.8;3.25];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Die Winkel $\alpha$ bei $S$ sind nun Scheitelwinkel, die beiden Winkel $\beta$ sind Wechselwinkel an den parallelen Geraden. Wieder stimmen zwei entsprechende Winkel überein, also sind auch hier die Dreiecke $SAB$ und $SA'B'$ ähnlich. Die Strahlensätze gelten für beide Anordnungen.

{{|>}} Der erste Strahlensatz beschreibt Verhältnisse zwischen den Strecken auf den beiden sich schneidenden Geraden. Entsprechende Abstände vom Schnittpunkt $S$ stehen im gleichen Verhältnis:

$$
\frac{\left|\overline{SA}\right|}{\left|\overline{SA'}\right|}
=
\frac{\left|\overline{SB}\right|}{\left|\overline{SB'}\right|}.
$$

Dabei bezeichnet $\left|\overline{SA}\right|$ die Länge der Strecke von $S$ nach $A$. Alle verwendeten Streckenlängen sind positiv; es werden keine gerichteten Strecken verwendet.

Durch Umstellen erhält man auch die im Dreieck betrachteten Seitenverhältnisse:

$$
\frac{\left|\overline{SA}\right|}{\left|\overline{SB}\right|}
=
\frac{\left|\overline{SA'}\right|}{\left|\overline{SB'}\right|}.
$$

{{|>}} Zum ersten Strahlensatz gehören außerdem Verhältnisse mit den Zwischenstrecken $\overline{AA'}$ und $\overline{BB'}$:

$$
\begin{aligned}
\frac{\left|\overline{SA}\right|}{\left|\overline{AA'}\right|}
&=
\frac{\left|\overline{SB}\right|}{\left|\overline{BB'}\right|},\\[0.8em]
\frac{\left|\overline{SA'}\right|}{\left|\overline{AA'}\right|}
&=
\frac{\left|\overline{SB'}\right|}{\left|\overline{BB'}\right|}.
\end{aligned}
$$

Diese Beziehungen gelten ebenfalls für beide Anordnungen. Beim Berechnen der Zwischenstrecken muss aber unterschieden werden: In der gezeigten V-Figur liegen $A'$ und $B'$ außen, daher gilt

$$
\begin{aligned}
\left|\overline{AA'}\right|
&=\left|\overline{SA'}\right|-\left|\overline{SA}\right|,\\
\left|\overline{BB'}\right|
&=\left|\overline{SB'}\right|-\left|\overline{SB}\right|.
\end{aligned}
$$

In der X-Figur liegt $S$ zwischen den jeweiligen Punkten. Deshalb werden die Abstände addiert:

$$
\begin{aligned}
\left|\overline{AA'}\right|
&=\left|\overline{SA}\right|+\left|\overline{SA'}\right|,\\
\left|\overline{BB'}\right|
&=\left|\overline{SB}\right|+\left|\overline{SB'}\right|.
\end{aligned}
$$

{{|>}} Der zweite Strahlensatz bezieht zusätzlich die parallelen Querstrecken $\overline{AB}$ und $\overline{A'B'}$ ein. Ihr Längenverhältnis ist gleich dem Verhältnis der entsprechenden Abstände von $S$:

$$
\frac{\left|\overline{AB}\right|}{\left|\overline{A'B'}\right|}
=
\frac{\left|\overline{SA}\right|}{\left|\overline{SA'}\right|}
=
\frac{\left|\overline{SB}\right|}{\left|\overline{SB'}\right|}.
$$

Hier müssen die ganzen Strecken vom Schnittpunkt $S$ bis zur jeweiligen Parallelen verwendet werden. Die Zwischenstrecke $\overline{AA'}$ ist beispielsweise nicht dasselbe wie $\overline{SA'}$ und darf sie in dieser Gleichung nicht ersetzen.

{{|>}} Zum Aufstellen einer Verhältnisgleichung sucht man zuerst die parallelen Geraden. Danach ordnet man die Strecken den beiden ähnlichen Dreiecken zu. In der Gleichung

$$
\frac{\left|\overline{SB}\right|}{\left|\overline{SB'}\right|}
=
\frac{\left|\overline{AB}\right|}{\left|\overline{A'B'}\right|}
$$

stehen oben jeweils Längen aus dem Dreieck $SAB$ und unten die entsprechenden Längen aus dem Dreieck $SA'B'$. Man kann beide Brüche umkehren, darf aber nicht nur einen davon umkehren.

Die Strecken $\overline{SB}$ und $\overline{SB'}$ liegen dabei auf derselben Geraden. Die benötigte Parallelität besteht zwischen $\overline{AB}$ und $\overline{A'B'}$. Dass die beiden Strecken $\overline{SB}$ und $\overline{AB}$ aneinanderstoßen, kann als „L-Form“ eine Merkhilfe sein. Ein rechter Winkel ist dafür nicht erforderlich; entscheidend sind die Parallelität und die richtige Zuordnung.

{{|>}} Ein Beispiel: In einer Strahlensatzfigur sind $\left|\overline{SB}\right|=6\,\mathrm{cm}$, $\left|\overline{SB'}\right|=9\,\mathrm{cm}$ und $\left|\overline{AB}\right|=4\,\mathrm{cm}$ gegeben. Für die gesuchte Länge $x=\left|\overline{A'B'}\right|$ ergibt der zweite Strahlensatz

$$
\frac{6\,\mathrm{cm}}{9\,\mathrm{cm}}
=
\frac{4\,\mathrm{cm}}{x}
\qquad\Rightarrow\qquad
x=
\frac{9\,\mathrm{cm}\cdot4\,\mathrm{cm}}{6\,\mathrm{cm}}
=6\,\mathrm{cm}.
$$

Die parallele Querstrecke $\overline{A'B'}$ ist also $6\,\mathrm{cm}$ lang. Als Kontrolle: Der Abstand von $S$ wurde mit dem Faktor $\frac96=1{,}5$ vergrößert. Derselbe Faktor vergrößert auch die Querstrecke von $4\,\mathrm{cm}$ auf $6\,\mathrm{cm}$.

{{|>}} Solche Seitenverhältnisse werden später auch in der Trigonometrie verwendet. Bei ähnlichen rechtwinkligen Dreiecken hängen sie von den entsprechenden Winkeln ab, nicht von der Größe der Dreiecke. Die Strahlensätze machen diese Verbindung zwischen Ähnlichkeit, Winkeln und Längenverhältnissen sichtbar.

***************************
