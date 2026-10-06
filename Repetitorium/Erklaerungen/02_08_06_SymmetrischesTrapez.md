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













tags: Erklärung, Symmetrisches Trapez

comment: Symmetrie, gleich lange Schenkel und Diagonalen sowie Flächeninhalt und Umfang eines symmetrischen Trapezes.

author: Martin Lommatzsch

-->

# Symmetrisches Trapez

{{|>}}
***************************

Ein symmetrisches Trapez besitzt eine Symmetrieachse, die orthogonal auf den parallelen Seiten $a$ und $c$ steht. Die Achse verläuft durch die Mittelpunkte dieser beiden Seiten. Die beiden Schenkel sind gleich lang und werden hier beide mit $b$ bezeichnet. Man nennt diese Figur auch gleichschenkliges Trapez.

<center>

@Koordinatensystem(`xmin=-3;xmax=7;ymin=-1.2;ymax=4.4;width=700;id=VIERECKSYMMTRAPEZ;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`VIERECKSYMMTRAPEZ;[[-3;-1.2];[7;-1.2];[7;4.4];[-3;4.4]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`VIERECKSYMMTRAPEZ;[[-2;0];[6;0];[4;3];[0;3]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`VIERECKSYMMTRAPEZ;[[-2;0];[6;0];[4;3];[0;3];[-2;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`VIERECKSYMMTRAPEZ;[[2;-0.6];[2;3.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);;-;2px;linestyle=dashed`)
@Strecke(`VIERECKSYMMTRAPEZ;[[-2;0];[4;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Strecke(`VIERECKSYMMTRAPEZ;[[0;3];[6;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px`)
@Strecke(`VIERECKSYMMTRAPEZ;[[2;0.22];[2.22;0.22];[2.22;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);;-;2px`)
@Strecke(`VIERECKSYMMTRAPEZ;[[2;2.78];[2.22;2.78];[2.22;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);;-;2px`)
@KoordText(`VIERECKSYMMTRAPEZ;[-2.3;-0.3];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`VIERECKSYMMTRAPEZ;[[-1.38;0];[-1.38052;0.025382];[-1.382078;0.050721];[-1.384673;0.075975];[-1.388299;0.101102];[-1.39295;0.126059];[-1.39862;0.150805];[-1.405298;0.175298];[-1.412973;0.199497];[-1.421632;0.223362];[-1.431261;0.246852];[-1.441843;0.269928];[-1.453362;0.292552];[-1.465797;0.314685];[-1.479127;0.336291];[-1.493331;0.357332];[-1.508384;0.377775];[-1.524262;0.397584];[-1.540937;0.416727];[-1.558382;0.435171];[-1.576567;0.452885];[-1.595463;0.46984];[-1.615036;0.486007];[-1.635255;0.501359];[-1.656086;0.515871]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKSYMMTRAPEZ;[[5.656086;0.515871];[5.635255;0.501359];[5.615036;0.486007];[5.595463;0.46984];[5.576567;0.452885];[5.558382;0.435171];[5.540937;0.416727];[5.524262;0.397584];[5.508384;0.377775];[5.493331;0.357332];[5.479127;0.336291];[5.465797;0.314685];[5.453362;0.292552];[5.441843;0.269928];[5.431261;0.246852];[5.421632;0.223362];[5.412973;0.199497];[5.405298;0.175298];[5.39862;0.150805];[5.39295;0.126059];[5.388299;0.101102];[5.384673;0.075975];[5.382078;0.050721];[5.38052;0.025382];[5.38;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKSYMMTRAPEZ;[[3.38;3];[3.382507;2.944306];[3.390006;2.889063];[3.402437;2.834716];[3.4197;2.781706];[3.441655;2.730461];[3.468125;2.681395];[3.498895;2.634906];[3.533717;2.591368];[3.572309;2.551135];[3.614359;2.51453];[3.659527;2.481851];[3.707448;2.453362];[3.757735;2.429292];[3.80998;2.409837];[3.863762;2.395154];[3.918645;2.385361];[3.974186;2.380538];[4.029936;2.380723];[4.085444;2.385916];[4.140261;2.396074];[4.193944;2.411115];[4.246059;2.430917];[4.296184;2.455321];[4.343914;2.484129]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKSYMMTRAPEZ;[[-0.343914;2.484129];[-0.296184;2.455321];[-0.246059;2.430917];[-0.193944;2.411115];[-0.140261;2.396074];[-0.085444;2.385916];[-0.029936;2.380723];[0.025814;2.380538];[0.081355;2.385361];[0.136238;2.395154];[0.19002;2.409837];[0.242265;2.429292];[0.292552;2.453362];[0.340473;2.481851];[0.385641;2.51453];[0.427691;2.551135];[0.466283;2.591368];[0.501105;2.634906];[0.531875;2.681395];[0.558345;2.730461];[0.5803;2.781706];[0.597563;2.834716];[0.609994;2.889063];[0.617493;2.944306];[0.62;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`VIERECKSYMMTRAPEZ;[-0.97;0.24];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[4.97;0.24];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[3.34;2.34];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[0.66;2.34];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[6.3;-0.3];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[4.3;3.28];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[-0.3;3.28];$\Large D$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[2;-0.9];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[5.42;1.5];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[2;4];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[-1.42;1.5];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKSYMMTRAPEZ;[2.85;2.7];$\Large e$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`VIERECKSYMMTRAPEZ;[4.55;1.05];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

{{|>}} Bei einer Spiegelung an der gestrichelten Achse gehen die Eckpunkte $A$ und $B$ sowie $D$ und $C$ ineinander über. Deshalb sind die beiden Innenwinkel an derselben Grundseite jeweils gleich groß:

$$
\angle DAB=\angle ABC=\alpha,\qquad
\angle ADC=\angle BCD=\beta.
$$

Die beiden Diagonalen haben ebenfalls dieselbe Länge:

$$
e=f.
$$

Anders als beim Rechteck halbieren die Diagonalen einander im Allgemeinen nicht.

{{|>}} Wie bei jedem Trapez ist die Höhe $h$ der orthogonale Abstand der parallelen Seiten. Für den Flächeninhalt gilt

$$
A=\frac{a+c}{2}\cdot h.
$$

Bei dem gezeichneten symmetrischen Trapez lässt sich dieser Zusammenhang auch durch Zerlegen und Ergänzen sichtbar machen:

<center>

@Koordinatensystem(`xmin=-3;xmax=7;ymin=-1.2;ymax=4;width=700;id=VIERECKTRAPEZZERLEGUNG;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`VIERECKTRAPEZZERLEGUNG;[[-3;-1.2];[7;-1.2];[7;4];[-3;4]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Flaeche(`VIERECKTRAPEZZERLEGUNG;[[-2;0];[6;0];[4;3];[0;3]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`VIERECKTRAPEZZERLEGUNG;[[-2;0];[6;0];[4;3];[0;3];[-2;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Flaeche(`VIERECKTRAPEZZERLEGUNG;[[-2;0];[0;0];[0;3]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff));1;inhalt=0;umfang=0`)
@Flaeche(`VIERECKTRAPEZZERLEGUNG;[[4;3];[6;3];[6;0]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff));1;inhalt=0;umfang=0`)
@Strecke(`VIERECKTRAPEZZERLEGUNG;[[-2;0];[6;0];[4;3];[0;3];[-2;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`VIERECKTRAPEZZERLEGUNG;[[0;3];[0;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px`)
@Strecke(`VIERECKTRAPEZZERLEGUNG;[[4;3];[6;3];[6;0]];rgb(var(--color-text,51,51,51));;-;2px;linestyle=dashed`)
@Strecke(`VIERECKTRAPEZZERLEGUNG;[[6;0];[4;3]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`VIERECKTRAPEZZERLEGUNG;[[0.22;0];[0.22;0.22];[0;0.22]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`VIERECKTRAPEZZERLEGUNG;[[5.78;3];[5.78;2.78];[6;2.78]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`VIERECKTRAPEZZERLEGUNG;[-0.32;1.5];$\Large h$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VIERECKTRAPEZZERLEGUNG;[3;3.55];$\Large m=\frac{a+c}{2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VIERECKTRAPEZZERLEGUNG;[2;-0.5];$\Large a$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKTRAPEZZERLEGUNG;[2;2.65];$\Large c$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKTRAPEZZERLEGUNG;[-0.45;-0.32];$\Large H$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`VIERECKTRAPEZZERLEGUNG;[6.32;3.3];$\Large G$;rgb(var(--color-text,51,51,51));1`)

</center>

Das blau markierte Dreieck links der roten Höhe kann abgetrennt und rechts passend angelegt werden. Die neue Figur ist ein Rechteck mit der Höhe $h$ und der Breite $m=\frac{a+c}{2}$. Die gestrichelten Strecken zeigen die ergänzten Teile des Rechteckrandes. Weil nur umgelegt wurde, bleibt der Flächeninhalt unverändert.

{{|>}} Für den Umfang werden die parallelen Seiten und die beiden gleich langen Schenkel addiert:

$$
U=a+c+2b.
$$

{{|>}} Auch hier sind Spezialfälle eingeschlossen: Sind die parallelen Seiten gleich lang, ist das symmetrische Trapez ein Rechteck. Jedes Rechteck und damit auch jedes Quadrat ist bei dieser Definition ein symmetrisches Trapez.

Gleich lange Schenkel allein reichen bei der hier verwendeten inklusiven Trapezdefinition nicht als Kennzeichen aus: Auch ein schiefes Parallelogramm hat gleich lange Gegenseiten. Entscheidend ist die Symmetrieachse orthogonal zu den gewählten Grundseiten.

***************************
