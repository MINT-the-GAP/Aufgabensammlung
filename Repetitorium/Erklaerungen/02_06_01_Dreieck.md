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













tags: Erklärung, Dreiecke

comment: In diesem Abschnitt werden Dreiecke, ihre Seiten und Winkel, Höhe, Flächeninhalt und Umfang sowie gleichschenklige und gleichseitige Dreiecke erklärt.

author: Martin Lommatzsch

-->

# Dreieck

{{|>}}
***************************

Wird ein Rechteck entlang einer Diagonalen in zwei Teile zerschnitten, entstehen zwei deckungsgleiche Dreiecke mit jeweils einem rechten Winkel. Solche Dreiecke heißen rechtwinklige Dreiecke.

Dreiecke spielen in der Geometrie eine zentrale Rolle: Vielecke lassen sich in Dreiecke zerlegen. Auch Kreisflächen können durch eine Unterteilung in immer kleinere Dreiecke näherungsweise beschrieben werden. Besonders wichtig ist dabei das rechtwinklige Dreieck.

<center>

@Koordinatensystem(`xmin=0;xmax=7;ymin=-1.9;ymax=4.9;width=560;id=DREIECK01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`DREIECK01;[[0;-1.9];[7;-1.9];[7;4.9];[0;4.9]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECK01;[[1;1];[3;-1];[6;2]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 94.35%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`DREIECK01;[[1;1];[3;-1];[6;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=dashed`)
@Flaeche(`DREIECK01;[[1;1];[6;2];[4;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`DREIECK01;[[1;1];[6;2];[4;4];[1;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK01;[[3.837365;3.837365];[4;3.674731];[4.162635;3.837365]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DREIECK01;[0.66;0.9];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK01;[6.35;1.9];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK01;[4.12;4.4];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK01;[2.1;2.8];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK01;[5.32;3.3];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK01;[3.6;1.15];$\Large c$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die Abbildung zeigt ein rechtwinkliges Dreieck mit den Eckpunkten $A$, $B$ und $C$. Die gestrichelten Seiten ergänzen es wieder zu einem Rechteck. Die dem Eckpunkt $A$ gegenüberliegende Seite hat die Länge $a$, die dem Eckpunkt $B$ gegenüberliegende Seite die Länge $b$ und die dem Eckpunkt $C$ gegenüberliegende Seite die Länge $c$:

$$
a=\left|\overline{BC}\right|,\qquad
b=\left|\overline{CA}\right|,\qquad
c=\left|\overline{AB}\right|.
$$

Nicht jedes Dreieck besitzt einen rechten Winkel. Deshalb werden auch die drei Innenwinkel benannt: $\alpha$ (Alpha) liegt bei $A$, $\beta$ (Beta) bei $B$ und $\gamma$ (Gamma) bei $C$. Die Summe der Innenwinkel beträgt in jedem ebenen Dreieck

$$
\alpha+\beta+\gamma=180^\circ.
$$

Bei einem rechtwinkligen Dreieck beträgt ein Innenwinkel $90^\circ$. Sind alle drei Innenwinkel kleiner als $90^\circ$, heißt das Dreieck spitzwinklig. Ist ein Innenwinkel größer als $90^\circ$, heißt es stumpfwinklig.

<center>

@Koordinatensystem(`xmin=-0.8;xmax=6.8;ymin=-0.9;ymax=4.9;width=640;id=DREIECK02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`DREIECK02;[[-0.8;-0.9];[6.8;-0.9];[6.8;4.9];[-0.8;4.9]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECK02;[[0;0];[6;0];[3;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`DREIECK02;[[0;0];[6;0];[3;4];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK02;[[3;4];[3;0]];rgb(var(--color-text,51,51,51));;-;2px;linestyle=dashed`)
@Strecke(`DREIECK02;[[3;0.23];[3.23;0.23];[3.23;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK02;[[0.55;0];[0.548359;0.042459];[0.543445;0.084664];[0.535287;0.126364];[0.523935;0.16731];[0.509455;0.207257];[0.491935;0.245967];[0.471479;0.28321];[0.448209;0.318762];[0.422263;0.352411];[0.393798;0.383957];[0.362982;0.413212];[0.33;0.44]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK02;[[5.67;0.44];[5.637018;0.413212];[5.606202;0.383957];[5.577737;0.352411];[5.551791;0.318762];[5.528521;0.28321];[5.508065;0.245967];[5.490545;0.207257];[5.476065;0.16731];[5.464713;0.126364];[5.456555;0.084664];[5.451641;0.042459];[5.45;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK02;[[2.67;3.56];[2.718996;3.527203];[2.771221;3.49984];[2.826075;3.478224];[2.882927;3.462604];[2.941125;3.45316];[3;3.45];[3.058875;3.45316];[3.117073;3.462604];[3.173925;3.478224];[3.228779;3.49984];[3.281004;3.527203];[3.33;3.56]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DREIECK02;[0.95;0.43];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK02;[5.08;0.43];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK02;[3.4;3.06];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK02;[-0.32;-0.3];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK02;[6.3;-0.3];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK02;[3;4.42];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK02;[1.08;2.2];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK02;[4.91;2.2];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK02;[3;-0.48];$\Large c=g$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK02;[3.29;1.65];$\Large h$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Eine Seite des Dreiecks kann als Grundseite $g$ gewählt werden. In der Abbildung ist dies die Seite $c$. Die zugehörige Höhe $h$ steht orthogonal auf der Geraden durch die Grundseite und führt zum gegenüberliegenden Eckpunkt $C$.

Liegt der Fußpunkt der Höhe auf der Grundseite, zerlegt die Höhe das Dreieck in zwei rechtwinklige Dreiecke. Bei einem stumpfwinkligen Dreieck kann der Fußpunkt auch auf der Verlängerung einer Seite liegen. Die Höhe ist auch dann der orthogonale Abstand des gegenüberliegenden Eckpunkts von der Geraden durch die Grundseite.

{{|>}} Der Flächeninhalt $A$ eines Dreiecks ist halb so groß wie der Flächeninhalt eines Rechtecks mit derselben Grundseite $g$ und Höhe $h$. In der Abbildung lässt sich das an den beiden rechtwinkligen Teildreiecken erkennen: Jedes ist die Hälfte eines entsprechenden Rechtecks. Zusammen ergeben ihre Flächeninhalte

$$
A=\frac{g\cdot h}{2}.
$$

Jede der drei Seiten kann als Grundseite verwendet werden. Dabei muss immer die zu dieser Seite gehörende Höhe eingesetzt werden.

Der Umfang $U$ ist die Länge des gesamten Randes. Er ergibt sich aus der Summe der drei Seitenlängen:

$$
U=a+b+c.
$$

Werden die Längen beispielsweise in Zentimetern angegeben, erhält man den Umfang in $\mathrm{cm}$ und den Flächeninhalt in $\mathrm{cm}^2$.

{{|>}} Ein gleichschenkliges Dreieck besitzt zwei gleich lange Seiten. Diese Seiten heißen Schenkel, die dritte Seite heißt Basis. Den gleich langen Seiten liegen gleich große Winkel gegenüber. Diese beiden Winkel werden Basiswinkel genannt.

In der folgenden Abbildung sind beide Schenkellängen mit $a$ bezeichnet. Die Basis hat die Länge $c$, die beiden Basiswinkel haben jeweils die Größe $\alpha$ und der Winkel zwischen den Schenkeln hat die Größe $\gamma$.

<center>

@Koordinatensystem(`xmin=-0.85;xmax=6.85;ymin=-0.85;ymax=4.85;width=640;id=DREIECK03;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`DREIECK03;[[-0.85;-0.85];[6.85;-0.85];[6.85;4.85];[-0.85;4.85]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECK03;[[0;0];[6;2];[0;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`DREIECK03;[[0;0];[6;2];[0;4];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK03;[[0.521776;0.173925];[0.500881;0.227196];[0.474565;0.278008];[0.443112;0.32581];[0.406862;0.370086];[0.366208;0.410355];[0.321591;0.446183];[0.273492;0.477181];[0.222433;0.503014];[0.168966;0.523403];[0.113671;0.538125];[0.057145;0.547023];[0;0.55]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK03;[[0;3.45];[0.057145;3.452977];[0.113671;3.461875];[0.168966;3.476597];[0.222433;3.496986];[0.273492;3.522819];[0.321591;3.553817];[0.366208;3.589645];[0.406862;3.629914];[0.443112;3.67419];[0.474565;3.721992];[0.500881;3.772804];[0.521776;3.826075]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK03;[[5.478224;2.173925];[5.469652;2.145708];[5.462604;2.117073];[5.457102;2.0881];[5.45316;2.058875];[5.450791;2.02948];[5.45;2];[5.450791;1.97052];[5.45316;1.941125];[5.457102;1.9119];[5.462604;1.882927];[5.469652;1.854292];[5.478224;1.826075]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DREIECK03;[-0.35;-0.25];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK03;[-0.35;4.28];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK03;[6.38;2];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK03;[-0.4;2];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK03;[3;0.63];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK03;[3;3.38];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK03;[0.43;0.7];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK03;[0.43;3.3];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK03;[4.95;2];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)

</center>

Es gilt

$$
2\alpha+\gamma=180^\circ.
$$

Ist ein Basiswinkel bekannt, folgt $\gamma=180^\circ-2\alpha$. Ist der Winkel zwischen den Schenkeln bekannt, ergibt sich $\alpha=\dfrac{180^\circ-\gamma}{2}$.

Ein übliches Geodreieck hat die Form eines gleichschenkligen rechtwinkligen Dreiecks: Der Winkel zwischen seinen gleich langen Seiten beträgt $90^\circ$, die beiden anderen Winkel betragen jeweils $45^\circ$.

{{|>}} Ein gleichseitiges Dreieck besitzt drei gleich lange Seiten. Damit sind auch alle drei Innenwinkel gleich groß. Wegen der Innenwinkelsumme von $180^\circ$ beträgt jeder Innenwinkel genau $60^\circ$.

<center>

@Koordinatensystem(`xmin=-0.85;xmax=6.85;ymin=-0.85;ymax=6;width=570;id=DREIECK04;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`DREIECK04;[[-0.85;-0.85];[6.85;-0.85];[6.85;6];[-0.85;6]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`DREIECK04;[[0;0];[6;0];[3;5.196152]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`DREIECK04;[[0;0];[6;0];[3;5.196152];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK04;[[0.55;0];[0.547907;0.047936];[0.541644;0.095506];[0.531259;0.14235];[0.516831;0.188111];[0.498469;0.23244];[0.476314;0.275];[0.450534;0.315467];[0.421324;0.353533];[0.388909;0.388909];[0.353533;0.421324];[0.315467;0.450534];[0.275;0.476314]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK04;[[5.725;0.476314];[5.684533;0.450534];[5.646467;0.421324];[5.611091;0.388909];[5.578676;0.353533];[5.549466;0.315467];[5.523686;0.275];[5.501531;0.23244];[5.483169;0.188111];[5.468741;0.14235];[5.458356;0.095506];[5.452093;0.047936];[5.45;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DREIECK04;[[2.725;4.719838];[2.76756;4.697683];[2.811889;4.679321];[2.85765;4.664893];[2.904494;4.654508];[2.952064;4.648245];[3;4.646152];[3.047936;4.648245];[3.095506;4.654508];[3.14235;4.664893];[3.188111;4.679321];[3.23244;4.697683];[3.275;4.719838]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DREIECK04;[-0.3;-0.25];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK04;[6.3;-0.25];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK04;[3;5.6];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK04;[1.03;2.78];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK04;[4.95;2.78];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK04;[3;-0.42];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK04;[0.87;0.47];$\Large 60^\circ$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK04;[5.13;0.47];$\Large 60^\circ$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DREIECK04;[3;4.22];$\Large 60^\circ$;rgb(var(--color-text,51,51,51));1`)

</center>

Für ein gleichseitiges Dreieck mit der Seitenlänge $a$ gilt daher

$$
U=3a,\qquad \alpha=\beta=\gamma=60^\circ.
$$

***************************
