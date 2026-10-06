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













tags: Erklärung, Trigonometrie, Sinus, Kosinus, Tangens, Kotangens, Sinussatz, Kosinussatz

comment: In diesem Abschnitt werden Sinus, Kosinus, Tangens und Kotangens, die Winkelbestimmung mit Arcusfunktionen sowie Sinussatz und Kosinussatz mit ihren Herleitungen erklärt.

author: Martin Lommatzsch

-->

# Trigonometrie

{{|>}}
***************************

Die Trigonometrie untersucht die Beziehungen zwischen Winkeln und Seitenlängen geometrischer Figuren. Zunächst steht das rechtwinklige Dreieck im Mittelpunkt. Vielecke lassen sich in Dreiecke zerlegen; geeignete Höhen führen dabei auf rechtwinklige Teildreiecke. So können auch umfangreichere geometrische Berechnungen auf bekannte Beziehungen zurückgeführt werden.

In der folgenden Abbildung liegt der rechte Winkel bei $C$. Die beiden Katheten $\overline{AC}$ und $\overline{BC}$ sind orthogonal zueinander. Die gegenüberliegende Seite $\overline{AB}$ ist die Hypotenuse und die längste Seite des Dreiecks.

<center>

@Koordinatensystem(`xmin=-0.3;xmax=8;ymin=0;ymax=4.8;width=700;id=TRIGO01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`TRIGO01;[[-0.3;0];[8;0];[8;4.8];[-0.3;4.8]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`TRIGO01;[[1;1];[6;2];[4;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`TRIGO01;[[4;4];[1;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Strecke(`TRIGO01;[[1;1];[6;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`TRIGO01;[[6;2];[4;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`TRIGO01;[[1.637377;1.127475];[1.630369;1.158542];[1.621847;1.189227];[1.611832;1.219458];[1.600348;1.249163];[1.587423;1.278269];[1.573088;1.306708];[1.557378;1.33441];[1.540329;1.361309];[1.521984;1.387341];[1.502385;1.412443];[1.48158;1.436555];[1.459619;1.459619]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`TRIGO01;[[5.561594;2.438406];[5.539513;2.415153];[5.518665;2.390789];[5.499103;2.36538];[5.480882;2.338994];[5.464049;2.3117];[5.44865;2.283573];[5.434726;2.254687];[5.422314;2.225121];[5.411448;2.194951];[5.402155;2.164261];[5.394462;2.133131];[5.388389;2.101645];[5.383951;2.069887];[5.381162;2.037942];[5.380028;2.005895];[5.380552;1.973833];[5.382734;1.941841];[5.386566;1.910004];[5.39204;1.878408]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`TRIGO01;[[3.830294;3.830294];[4;3.660589];[4.169706;3.830294]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`TRIGO01;[0.73;0.82];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO01;[6.25;1.87];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO01;[4.05;4.34];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO01;[2.04;1.55];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO01;[5.06;2.3];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO01;[1.4;3.02];$\Large \text{Ankathete }b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`TRIGO01;[6.26;3.4];$\Large \text{Gegenkathete }a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`TRIGO01;[3.65;0.85];$\Large \text{Hypotenuse }c$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Bezogen auf den spitzen Winkel $\alpha$ bei $A$ heißt die blaue Seite $\overline{BC}$ Gegenkathete; ihre Länge ist $a$. Die grüne Seite $\overline{AC}$ ist die Ankathete mit der Länge $b$. Die rote Hypotenuse hat die Länge $c$.

Die Ankathete ist diejenige Kathete, die am betrachteten Winkel anliegt. Die Hypotenuse liegt ebenfalls an diesem Winkel, ist aber keine Kathete. Gegenkathete und Ankathete werden also durch den gewählten Winkel bestimmt, nicht durch ihre Lage auf dem Zeichenblatt.

{{|>}} Rechtwinklige Dreiecke mit demselben spitzen Winkel sind ähnlich. Werden sie vergrößert oder verkleinert, ändern sich alle Seitenlängen mit demselben Faktor. Die Verhältnisse entsprechender Seitenlängen bleiben deshalb gleich und hängen nur vom Winkel ab.

Der Sinus eines spitzen Winkels ist das Verhältnis aus Gegenkathete und Hypotenuse:

$$
\sin(\alpha)=\sin\alpha
=\frac{\text{Gegenkathete}}{\text{Hypotenuse}}
=\frac{a}{c}.
$$

Die beiden spitzen Winkel des rechtwinkligen Dreiecks ergänzen sich zu einem rechten Winkel:

$$
\alpha+\beta=90^\circ,
\qquad
\beta=90^\circ-\alpha.
$$

Beim Wechsel von $\alpha$ zu $\beta$ tauschen die beiden Katheten ihre Rollen: Die Gegenkathete von $\alpha$ ist die Ankathete von $\beta$ und umgekehrt. Die Hypotenuse bleibt dieselbe Seite.

{{|>}} Der Kosinus eines spitzen Winkels ist das Verhältnis aus Ankathete und Hypotenuse:

$$
\cos(\alpha)=\cos\alpha
=\frac{\text{Ankathete}}{\text{Hypotenuse}}
=\frac{b}{c}.
$$

Aus dem Wechsel der Kathetenrollen folgt

$$
\begin{aligned}
\sin\alpha&=\cos\beta=\cos(90^\circ-\alpha),\\
\cos\alpha&=\sin\beta=\sin(90^\circ-\alpha).
\end{aligned}
$$

Sinus und Kosinus sind damit eng verbunden. Bei ihrer späteren Erweiterung auf allgemeine Winkel gilt auch $\sin(90^\circ+\delta)=\cos\delta$. Der Kosinus kann daher als um $90^\circ$ verschobene Sinusfunktion beschrieben werden. Für die Berechnungen am rechtwinkligen Dreieck genügen zunächst die Seitenverhältnisse und die Beziehungen der beiden spitzen Winkel.

{{|>}} Aus dem Verhältnis von Sinus und Kosinus entsteht der Tangens. Die Hypotenusenlänge kürzt sich heraus:

$$
\begin{aligned}
\tan(\alpha)=\tan\alpha
&=\frac{\sin\alpha}{\cos\alpha}\\
&=\frac{\dfrac{a}{c}}{\dfrac{b}{c}}\\[0.5em]
&=\frac{a}{c}\cdot\frac{c}{b}\\
&=\frac{a}{b}
=\frac{\text{Gegenkathete}}{\text{Ankathete}}.
\end{aligned}
$$

Wird dieses Verhältnis umgekehrt, erhält man den Kotangens:

$$
\begin{aligned}
\cot(\alpha)=\cot\alpha
&=\frac{\cos\alpha}{\sin\alpha}\\
&=\frac{b}{a}
=\frac{\text{Ankathete}}{\text{Gegenkathete}}
=\frac{1}{\tan\alpha}.
\end{aligned}
$$

{{|>}} In einem nicht entarteten rechtwinkligen Dreieck gilt $0^\circ<\alpha<90^\circ$. Beide Katheten sind positiv und kürzer als die Hypotenuse. Deshalb liegen Sinus und Kosinus eines spitzen Winkels stets strikt zwischen null und eins:

$$
0<\sin\alpha<1,
\qquad
0<\cos\alpha<1.
$$

Tangens und Kotangens sind für solche Winkel ebenfalls positiv. Ihre Werte können beliebig groß werden, besitzen aber für jeden einzelnen spitzen Winkel einen endlichen Wert:

$$
0<\tan\alpha<\infty,
\qquad
0<\cot\alpha<\infty.
$$

Ist ein spitzer Winkel und eine Seitenlänge bekannt, lassen sich alle übrigen Seitenlängen und Winkel des rechtwinkligen Dreiecks bestimmen. Sind beispielsweise $\alpha$ und $c$ gegeben, gilt

$$
a=c\sin\alpha,\qquad
b=c\cos\alpha,\qquad
\beta=90^\circ-\alpha.
$$

Der rechte Winkel allein und eine Seitenlänge reichen dafür nicht aus. Vor dem Bilden eines Seitenverhältnisses müssen die Längen außerdem in derselben Einheit vorliegen; ihr Verhältnis ist dann einheitenlos.

{{|>}} Um einen Winkel aus zwei Seitenlängen zu bestimmen, benötigt man die zugehörigen Umkehrfunktionen. Sie heißen Arkussinus, Arkuskosinus, Arkustangens und Arkuskotangens. Für den spitzen Winkel $\alpha$ des dargestellten rechtwinkligen Dreiecks gilt

$$
\begin{aligned}
\alpha&=\arcsin\left(\frac{a}{c}\right),\\
\alpha&=\arccos\left(\frac{b}{c}\right),\\
\alpha&=\arctan\left(\frac{a}{b}\right),\\
\alpha&=\operatorname{arccot}\left(\frac{b}{a}\right).
\end{aligned}
$$

Auf vielen Taschenrechnern stehen dafür die Beschriftungen $\sin^{-1}$, $\cos^{-1}$ und $\tan^{-1}$. In diesem Zusammenhang bezeichnen sie die Umkehrfunktionen, nicht die Kehrwerte $1/\sin\alpha$, $1/\cos\alpha$ oder $1/\tan\alpha$. Entsprechend kann $\cot^{-1}$ für den Arkuskotangens stehen. Ist keine eigene Taste vorhanden, kann für positive Argumente $\operatorname{arccot}(x)=\arctan(1/x)$ verwendet werden.

Soll ein Winkel in Grad berechnet werden, muss der Taschenrechner auf Gradmaß, meist mit DEG bezeichnet, eingestellt sein. Das gilt sowohl für die Eingabe von Winkeln als auch für die Ausgabe durch eine Arcusfunktion.

Die Umformung mit dem Arkussinus lässt sich schrittweise schreiben:

$$
\begin{aligned}
\sin\alpha&=\frac{a}{c}\\
\arcsin(\sin\alpha)&=\arcsin\left(\frac{a}{c}\right)\\
\alpha&=\arcsin\left(\frac{a}{c}\right).
\end{aligned}
$$

Der letzte Schritt ist hier zulässig, weil $\alpha$ ein spitzer Winkel ist. Allgemein sind die Winkelfunktionen nicht auf ihrem gesamten Definitionsbereich eindeutig umkehrbar; dafür müssen passende Winkelbereiche festgelegt werden. Diese Einschränkung wird bei allgemeinen Dreiecken wichtig und später bei den Umkehrfunktionen genauer betrachtet.

{{|>}} Auch Dreiecke ohne rechten Winkel lassen sich trigonometrisch untersuchen. Dabei liegen die Seiten $a$, $b$ und $c$ jeweils den Winkeln $\alpha$, $\beta$ und $\gamma$ gegenüber. Mit genügend geeigneten Angaben können die fehlenden Größen berechnet werden.

Im folgenden spitzwinkligen Dreieck zerlegt die Höhenstrecke $\overline{CF}$ die Figur in zwei rechtwinklige Dreiecke. Sie ist orthogonal zur Grundseite $\overline{AB}$ und besitzt die Länge $h_c$.

<center>

@Koordinatensystem(`xmin=0.25;xmax=6.8;ymin=0.1;ymax=4.7;width=640;id=TRIGO02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`TRIGO02;[[0.25;0.1];[6.8;0.1];[6.8;4.7];[0.25;4.7]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`TRIGO02;[[1;1];[4;1];[4;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);0.18;inhalt=0;umfang=0`)
@Flaeche(`TRIGO02;[[4;1];[6;1];[4;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0.18;inhalt=0;umfang=0`)
@Strecke(`TRIGO02;[[1;1];[6;1];[4;4];[1;1]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`TRIGO02;[[4;1];[4;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`TRIGO02;[[1.62;1];[1.61915;1.032448];[1.616604;1.064808];[1.612367;1.096989];[1.606452;1.128905];[1.598874;1.160468];[1.589655;1.191591];[1.57882;1.222188];[1.566398;1.252177];[1.552424;1.281474];[1.536936;1.31];[1.519976;1.337676];[1.501591;1.364427];[1.48183;1.390179];[1.46075;1.414861];[1.438406;1.438406]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`TRIGO02;[[5.656086;1.515871];[5.629874;1.4974];[5.604652;1.477598];[5.580487;1.456519];[5.557445;1.434218];[5.535587;1.410756];[5.514971;1.386195];[5.495652;1.360601];[5.477682;1.334042];[5.46111;1.30659];[5.445979;1.278318];[5.43233;1.249301];[5.4202;1.219618];[5.409621;1.189346];[5.40062;1.158569];[5.393224;1.127367];[5.38745;1.095825];[5.383315;1.064026];[5.380829;1.032056];[5.38;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`TRIGO02;[[3.646447;3.646447];[3.66488;3.628928];[3.684181;3.612368];[3.704298;3.596812];[3.725181;3.582299];[3.746774;3.568866];[3.769023;3.556548];[3.791869;3.545378];[3.815253;3.535383];[3.839115;3.526591];[3.863394;3.519023];[3.888025;3.5127];[3.912947;3.507637];[3.938094;3.503847];[3.963401;3.501341];[3.988802;3.500125];[4.014233;3.500203];[4.039626;3.501573];[4.064917;3.504232];[4.090041;3.508174];[4.114931;3.513388];[4.139524;3.519861];[4.163756;3.527576];[4.187564;3.536514];[4.210888;3.54665];[4.233665;3.557959];[4.255839;3.570411];[4.27735;3.583975]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`TRIGO02;[[4;1.2];[4.2;1.2];[4.2;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`TRIGO02;[0.72;0.79];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO02;[6.26;0.79];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO02;[4;4.34];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO02;[4;0.72];$\Large F$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO02;[1.94;1.39];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO02;[5.07;1.48];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO02;[3.7;3.2];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO02;[2.18;2.65];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO02;[5.38;2.73];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO02;[3.5;0.4];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO02;[4.3;2.5];$\Large h_c$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

In den beiden Teildreiecken kann dieselbe Höhe auf zwei Arten berechnet werden:

$$
h_c=b\sin\alpha,
\qquad
h_c=a\sin\beta.
$$

Gleichsetzen und Umformen liefert

$$
b\sin\alpha=a\sin\beta
\qquad\Longrightarrow\qquad
\frac{a}{\sin\alpha}=\frac{b}{\sin\beta}.
$$

Entsprechend lässt sich mit einer weiteren Höhe die dritte Seite einbeziehen. So erhält man den Sinussatz:

$$
\frac{a}{\sin\alpha}
=\frac{b}{\sin\beta}
=\frac{c}{\sin\gamma}.
$$

Der Sinussatz gilt für jedes nicht entartete Dreieck, also auch für rechtwinklige und stumpfwinklige Dreiecke. Bei einem äußeren Höhenfußpunkt betrachtet man rechtwinklige Hilfsdreiecke an der verlängerten Grundseite. Für den stumpfen Winkel wird dabei die Beziehung $\sin(180^\circ-\alpha)=\sin\alpha$ genutzt; die Gleichheit der Seiten-Sinus-Verhältnisse bleibt erhalten.

{{|>}} Auch der Flächeninhalt lässt sich mit den Winkeln ausdrücken. Mit $A_\Delta$ wird hier der Flächeninhalt des Dreiecks bezeichnet, damit keine Verwechslung mit dem Eckpunkt $A$ entsteht:

$$
A_\Delta
=\frac12bc\sin\alpha
=\frac12ac\sin\beta
=\frac12ab\sin\gamma.
$$

Aus $2A_\Delta=ab\sin\gamma$ folgt die erweiterte Schreibweise des Sinussatzes aus dem Zusammenhang mit dem Flächeninhalt:

$$
\frac{a}{\sin\alpha}
=\frac{b}{\sin\beta}
=\frac{c}{\sin\gamma}
=\frac{abc}{2A_\Delta}.
$$

Der Sinussatz ist besonders hilfreich, wenn eine Seite und ihr gegenüberliegender Winkel bekannt sind. Bei der Winkelbestimmung ist jedoch Vorsicht nötig: Ein spitzer Winkel und sein Ergänzungswinkel zu $180^\circ$ haben denselben Sinus. Bei zwei Seiten und einem nicht eingeschlossenen Winkel können deshalb zwei verschiedene Dreiecke möglich sein. Der Arkussinus liefert zunächst nur einen der möglichen Winkelwerte; auch der Ergänzungswinkel muss mit den übrigen Angaben und der Innenwinkelsumme $180^\circ$ geprüft werden.

{{|>}} Ein weiterer Zusammenhang ist der Kosinussatz. Auch seine Herleitung beginnt mit einer Höhe. In der folgenden Abbildung bezeichnet $h$ die Länge der Höhenstrecke $\overline{CF}$. Die Grundseite wird durch $F$ in zwei Teilstrecken zerlegt:

$$
d=\left|\overline{AF}\right|,
\qquad
e=\left|\overline{FB}\right|,
\qquad
c=d+e.
$$

<center>

@Koordinatensystem(`xmin=0.25;xmax=6.8;ymin=0.1;ymax=4.7;width=640;id=TRIGO03;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`TRIGO03;[[0.25;0.1];[6.8;0.1];[6.8;4.7];[0.25;4.7]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`TRIGO03;[[1;1];[6;1];[4;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18;inhalt=0;umfang=0`)
@Strecke(`TRIGO03;[[1;1];[6;1];[4;4];[1;1]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`TRIGO03;[[4;1];[4;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`TRIGO03;[[1.62;1];[1.61915;1.032448];[1.616604;1.064808];[1.612367;1.096989];[1.606452;1.128905];[1.598874;1.160468];[1.589655;1.191591];[1.57882;1.222188];[1.566398;1.252177];[1.552424;1.281474];[1.536936;1.31];[1.519976;1.337676];[1.501591;1.364427];[1.48183;1.390179];[1.46075;1.414861];[1.438406;1.438406]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`TRIGO03;[[5.656086;1.515871];[5.629874;1.4974];[5.604652;1.477598];[5.580487;1.456519];[5.557445;1.434218];[5.535587;1.410756];[5.514971;1.386195];[5.495652;1.360601];[5.477682;1.334042];[5.46111;1.30659];[5.445979;1.278318];[5.43233;1.249301];[5.4202;1.219618];[5.409621;1.189346];[5.40062;1.158569];[5.393224;1.127367];[5.38745;1.095825];[5.383315;1.064026];[5.380829;1.032056];[5.38;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`TRIGO03;[[3.646447;3.646447];[3.66488;3.628928];[3.684181;3.612368];[3.704298;3.596812];[3.725181;3.582299];[3.746774;3.568866];[3.769023;3.556548];[3.791869;3.545378];[3.815253;3.535383];[3.839115;3.526591];[3.863394;3.519023];[3.888025;3.5127];[3.912947;3.507637];[3.938094;3.503847];[3.963401;3.501341];[3.988802;3.500125];[4.014233;3.500203];[4.039626;3.501573];[4.064917;3.504232];[4.090041;3.508174];[4.114931;3.513388];[4.139524;3.519861];[4.163756;3.527576];[4.187564;3.536514];[4.210888;3.54665];[4.233665;3.557959];[4.255839;3.570411];[4.27735;3.583975]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`TRIGO03;[[4;1.2];[4.2;1.2];[4.2;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`TRIGO03;[0.72;0.79];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[6.26;0.79];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[4;4.34];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[4;0.72];$\Large F$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[1.94;1.39];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[5.07;1.48];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[3.7;3.2];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[2.18;2.65];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[5.38;2.73];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[3.5;0.4];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[4.3;2.5];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`TRIGO03;[2.65;1.25];$\Large d$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGO03;[4.93;1.25];$\Large e$;rgb(var(--color-text,51,51,51));1`)

</center>

Im linken rechtwinkligen Teildreieck gilt nach dem Satz des Pythagoras

$$
b^2=d^2+h^2.
$$

Für die beiden Quadrate auf der rechten Seite erhält man

$$
\begin{aligned}
d^2&=(c-e)^2=c^2-2ce+e^2,\\
h^2&=a^2-e^2.
\end{aligned}
$$

Im rechten Teildreieck ist $e$ die Ankathetenlänge zum Winkel $\beta$ und $a$ die Hypotenusenlänge. Daher gilt

$$
\cos\beta=\frac{e}{a}
\qquad\Longrightarrow\qquad
e=a\cos\beta.
$$

Einsetzen führt zu

$$
\begin{aligned}
b^2&=d^2+h^2\\
&=(c^2-2ce+e^2)+(a^2-e^2)\\
&=a^2+c^2-2ce\\
&=a^2+c^2-2ac\cos\beta.
\end{aligned}
$$

{{|>}} Werden die Seiten und Winkel entsprechend vertauscht, ergeben sich die drei Fassungen des Kosinussatzes:

$$
\begin{aligned}
a^2&=b^2+c^2-2bc\cos\alpha,\\
b^2&=a^2+c^2-2ac\cos\beta,\\
c^2&=a^2+b^2-2ab\cos\gamma.
\end{aligned}
$$

Auch der Kosinussatz gilt für jedes nicht entartete Dreieck. In der gezeigten Herleitung liegt $F$ zwischen $A$ und $B$. Liegt der Höhenfußpunkt außerhalb der Grundseite, verwendet man $e=a\cos\beta$ als gerichtete Projektion, also mit Vorzeichen, und nicht immer als positive Streckenlänge. Die Gleichung $b^2=(c-e)^2+h^2$ führt dann zum selben Ergebnis.

Für $\gamma=90^\circ$ gilt $\cos\gamma=0$. Damit wird die dritte Gleichung zum Satz des Pythagoras:

$$
c^2=a^2+b^2.
$$

Der Kosinussatz verallgemeinert somit den Satz des Pythagoras. Er eignet sich besonders, wenn zwei Seiten und der eingeschlossene Winkel gegeben sind oder aus drei Seitenlängen ein Winkel bestimmt werden soll. Beispielsweise gilt

$$
\cos\gamma=\frac{a^2+b^2-c^2}{2ab},
\qquad
\gamma=\arccos\left(\frac{a^2+b^2-c^2}{2ab}\right).
$$

Dabei muss $c$ dem Winkel $\gamma$ gegenüberliegen. Drei gegebene Seitenlängen müssen positiv sein und die Dreiecksungleichungen erfüllen, damit ein nicht entartetes Dreieck existiert.

Sinussatz und Kosinussatz fassen Beziehungen zusammen, die aus rechtwinkligen Teildreiecken hergeleitet werden können. Sie ermöglichen direkte Berechnungen, ohne jedes Mal Hilfsdreiecke vollständig auszuwerten. Entscheidend bleiben die richtige Zuordnung von Seiten und Winkeln sowie die Prüfung, ob die gegebenen Angaben ein Dreieck eindeutig bestimmen.

***************************
