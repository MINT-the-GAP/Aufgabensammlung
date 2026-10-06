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













tags: Erklärung, Drachen

comment: Benachbarte gleich lange Seiten, Symmetrie, Diagonalen, Flächeninhalt und Umfang eines Drachenvierecks.

author: Martin Lommatzsch

-->

# Drachen

{{|>}}
***************************

Ein Drachen oder Drachenviereck ist ein Viereck mit zwei Paaren gleich langer benachbarter Seiten. Hier werden konvexe Drachen betrachtet, also Vierecke ohne einspringende Ecke. Die beiden Seitenpaare werden mit $a$ und $b$ bezeichnet.

<center>

@Koordinatensystem(`xmin=-1;xmax=7;ymin=-1;ymax=7;width=600;id=VIERECKDRACHEN;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`VIERECKDRACHEN;[[-1;-1];[7;-1];[7;7];[-1;7]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`VIERECKDRACHEN;[[0;0];[4;0];[6;6];[0;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`VIERECKDRACHEN;[[0;0];[4;0];[6;6];[0;4];[0;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`VIERECKDRACHEN;[[0;0];[6;6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2.5px`)
@Strecke(`VIERECKDRACHEN;[[0;4];[4;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`VIERECKDRACHEN;[[2.176777;2.176777];[2;2.353553];[1.823223;2.176777]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`VIERECKDRACHEN;[-0.3;-0.3];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[4.3;-0.3];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[6.3;6.3];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[-0.3;4.3];$\Large D$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[2;-0.42];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[-0.42;2];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[5.48;2.85];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[2.85;5.48];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[2.05;1.6];$\Large S$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[1.1;3.2];$\Large e$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VIERECKDRACHEN;[4;3.6];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@Strecke(`VIERECKDRACHEN;[[0.55;0];[0.547907;0.047936];[0.541644;0.095506];[0.531259;0.14235];[0.516831;0.188111];[0.498469;0.23244];[0.476314;0.275];[0.450534;0.315467];[0.421324;0.353533];[0.388909;0.388909];[0.353533;0.421324];[0.315467;0.450534];[0.275;0.476314];[0.23244;0.498469];[0.188111;0.516831];[0.14235;0.531259];[0.095506;0.541644];[0.047936;0.547907];[0;0.55]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKDRACHEN;[[4.205548;0.616644];[4.139697;0.634811];[4.072304;0.645966];[4.004112;0.649987];[3.935874;0.646829];[3.868345;0.636527];[3.80227;0.619195];[3.738379;0.595025];[3.677377;0.564282];[3.619938;0.527307];[3.566697;0.484509];[3.518242;0.436359];[3.475107;0.38339];[3.43777;0.326186];[3.406642;0.26538];[3.382068;0.201643];[3.364318;0.135679];[3.353589;0.068216];[3.35;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKDRACHEN;[[5.193619;5.731206];[5.20853;5.69004];[5.225541;5.649695];[5.244607;5.61028];[5.265677;5.571899];[5.288696;5.534654];[5.313602;5.498644];[5.340329;5.463964];[5.368807;5.430706];[5.398959;5.398959];[5.430706;5.368807];[5.463964;5.340329];[5.498644;5.313602];[5.534654;5.288696];[5.571899;5.265677];[5.61028;5.244607];[5.649695;5.225541];[5.69004;5.20853];[5.731206;5.193619]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKDRACHEN;[[0;3.35];[0.068216;3.353589];[0.135679;3.364318];[0.201643;3.382068];[0.26538;3.406642];[0.326186;3.43777];[0.38339;3.475107];[0.436359;3.518242];[0.484509;3.566697];[0.527307;3.619938];[0.564282;3.677377];[0.595025;3.738379];[0.619195;3.80227];[0.636527;3.868345];[0.646829;3.935874];[0.649987;4.004112];[0.645966;4.072304];[0.634811;4.139697];[0.616644;4.205548]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`VIERECKDRACHEN;[0.9;0.35];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[3.72;0.95];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[5.45;4.94];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKDRACHEN;[0.95;3.72];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} In der Zeichnung gilt

$$
\begin{aligned}
\left|\overline{AB}\right|&=\left|\overline{AD}\right|=a,\\
\left|\overline{BC}\right|&=\left|\overline{CD}\right|=b.
\end{aligned}
$$

Die grüne Diagonale $\overline{AC}$ ist die Symmetrieachse. Bei einer Spiegelung an dieser Achse gehen die Eckpunkte $B$ und $D$ ineinander über. Deshalb sind die Innenwinkel bei $B$ und $D$ gleich groß. In der Zeichnung heißen beide $\alpha$.

Für die übrigen Innenwinkel $\beta$ und $\gamma$ gilt zusammen mit diesen beiden Winkeln

$$
2\alpha+\beta+\gamma=360^\circ.
$$

Ein Paar gleich großer gegenüberliegender Winkel allein genügt allerdings nicht, um ein Viereck als Drachen zu kennzeichnen.

{{|>}} Die rote Diagonale $\overline{BD}$ hat die Länge $e$, die grüne Diagonale $\overline{AC}$ die Länge $f$. Beide stehen orthogonal aufeinander und schneiden sich im Punkt $S$.

Die Symmetrieachse $\overline{AC}$ halbiert die andere Diagonale $\overline{BD}$:

$$
\left|\overline{BS}\right|=\left|\overline{SD}\right|=\frac{e}{2}.
$$

Umgekehrt muss die Diagonale $\overline{BD}$ die Diagonale $\overline{AC}$ nicht halbieren. Die beiden Teilstrecken $\overline{AS}$ und $\overline{SC}$ können unterschiedlich lang sein.

{{|>}} Die rote Diagonale zerlegt den Drachen in zwei gleichschenklige Dreiecke mit derselben Grundseite $e$. Ihre Höhen sind die beiden Teilstücke von $f$. Mit $f_1=\left|\overline{AS}\right|$ und $f_2=\left|\overline{SC}\right|$ folgt

$$
\begin{aligned}
A&=\frac{1}{2}e\cdot f_1+\frac{1}{2}e\cdot f_2\\
 &=\frac{1}{2}e(f_1+f_2)\\
 &=\frac{1}{2}e\cdot f.
\end{aligned}
$$

{{|>}} Da jede der beiden Seitenlängen zweimal vorkommt, beträgt der Umfang

$$
U=2a+2b=2(a+b).
$$

Falls $a=b$ ist, sind alle vier Seiten gleich lang. Der Drachen ist dann eine Raute. Damit zählen auch Rauten und Quadrate zu den Drachen.

***************************
