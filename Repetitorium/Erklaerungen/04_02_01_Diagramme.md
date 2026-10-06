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













tags: Erklärung, Balkendiagramm, Säulendiagramm, Kreisdiagramm, Streifendiagramm

comment: In diesem Abschnitt werden absolute und relative Häufigkeiten mit Balken-, Säulen-, Kreis- und Streifendiagrammen dargestellt und von Histogrammen abgegrenzt.

author: Martin Lommatzsch

-->

# Darstellungen durch Diagramme

{{|>}}
***************************

Neben der Darstellung von Wertepaaren durch Funktionsgraphen gibt es weitere Möglichkeiten, Daten anschaulich darzustellen. Absolute Häufigkeiten geben an, wie oft eine Kategorie vorkommt. Sie sind Anzahlen und werden gelegentlich mit dem Zeichen $\#$ bezeichnet.

Balkendiagramme und Säulendiagramme machen solche Anzahlen gut vergleichbar. Die Länge eines Balkens beziehungsweise die Höhe einer Säule ist proportional zur dargestellten Anzahl. Dabei müssen die Skala gleichmäßig eingeteilt und der Ausgangswert null sein, damit die Größenverhältnisse unverzerrt erkennbar bleiben.

Im folgenden Balkendiagramm stehen die Buchstaben A bis I für neun verschiedene Kategorien. Die Balken verlaufen horizontal; ihre Längen geben die absoluten Häufigkeiten an.

<!-- Kategoriale Diagramme: A bis I sind keine numerischen Koordinaten.
     Die öffentliche Board-API schaltet beide numerischen Achsen nur gemeinsam.
     Daher hier eine einseitige Anzahlskala mit lia-coordinate-Zeichenmakros;
     kein Ersatz der nativen Achsen für Funktionsgraphen. -->
<center>

@Koordinatensystem(`xmin=-1;xmax=11.4;ymin=-1.3;ymax=10.1;width=680;id=DIAGRAMME01;achsen=0;grid=0;border=0;static=1`)
@Strecke(`DIAGRAMME01;[[1;0];[1;9.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME01;[[2;0];[2;9.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME01;[[3;0];[3;9.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME01;[[4;0];[4;9.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME01;[[5;0];[5;9.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME01;[[6;0];[6;9.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME01;[[7;0];[7;9.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME01;[[8;0];[8;9.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME01;[[9;0];[9;9.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME01;[[10;0];[10;9.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME01;[[10.7;0];[0;0];[0;9.6]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME01;[[0;-0.12];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[0;-0.46];$\Large 0$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME01;[[1;-0.12];[1;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[1;-0.46];$\Large 1$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME01;[[2;-0.12];[2;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[2;-0.46];$\Large 2$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME01;[[3;-0.12];[3;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[3;-0.46];$\Large 3$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME01;[[4;-0.12];[4;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[4;-0.46];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME01;[[5;-0.12];[5;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[5;-0.46];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME01;[[6;-0.12];[6;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[6;-0.46];$\Large 6$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME01;[[7;-0.12];[7;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[7;-0.46];$\Large 7$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME01;[[8;-0.12];[8;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[8;-0.46];$\Large 8$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME01;[[9;-0.12];[9;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[9;-0.46];$\Large 9$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME01;[[10;-0.12];[10;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[10;-0.46];$\Large 10$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME01;[[0;0.5];[0;1.1];[4;1.1];[4;0.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME01;[[0;0.5];[0;1.1];[4;1.1];[4;0.5];[0;0.5]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[-0.45;0.8];$\Large\text{A}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME01;[4.35;0.8];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME01;[[0;1.5];[0;2.1];[5;2.1];[5;1.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME01;[[0;1.5];[0;2.1];[5;2.1];[5;1.5];[0;1.5]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[-0.45;1.8];$\Large\text{B}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME01;[5.35;1.8];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME01;[[0;2.5];[0;3.1];[6;3.1];[6;2.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME01;[[0;2.5];[0;3.1];[6;3.1];[6;2.5];[0;2.5]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[-0.45;2.8];$\Large\text{C}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME01;[6.35;2.8];$\Large 6$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME01;[[0;3.5];[0;4.1];[7;4.1];[7;3.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME01;[[0;3.5];[0;4.1];[7;4.1];[7;3.5];[0;3.5]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[-0.45;3.8];$\Large\text{D}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME01;[7.35;3.8];$\Large 7$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME01;[[0;4.5];[0;5.1];[8;5.1];[8;4.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME01;[[0;4.5];[0;5.1];[8;5.1];[8;4.5];[0;4.5]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[-0.45;4.8];$\Large\text{E}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME01;[8.35;4.8];$\Large 8$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME01;[[0;5.5];[0;6.1];[9;6.1];[9;5.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME01;[[0;5.5];[0;6.1];[9;6.1];[9;5.5];[0;5.5]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[-0.45;5.8];$\Large\text{F}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME01;[9.35;5.8];$\Large 9$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME01;[[0;6.5];[0;7.1];[9;7.1];[9;6.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME01;[[0;6.5];[0;7.1];[9;7.1];[9;6.5];[0;6.5]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[-0.45;6.8];$\Large\text{G}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME01;[9.35;6.8];$\Large 9$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME01;[[0;7.5];[0;8.1];[10;8.1];[10;7.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME01;[[0;7.5];[0;8.1];[10;8.1];[10;7.5];[0;7.5]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[-0.45;7.8];$\Large\text{H}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME01;[10.35;7.8];$\Large 10$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME01;[[0;8.5];[0;9.1];[10;9.1];[10;8.5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME01;[[0;8.5];[0;9.1];[10;9.1];[10;8.5];[0;8.5]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME01;[-0.45;8.8];$\Large\text{I}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME01;[10.35;8.8];$\Large 10$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME01;[5;-0.98];$\Large\text{Anzahl}$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Ein Säulendiagramm stellt dieselben Daten mit vertikalen Säulen dar. Die Kategorien stehen unter den Säulen; die Anzahlen werden an der Skala links abgelesen.

<center>

@Koordinatensystem(`xmin=-1.4;xmax=10.1;ymin=-1;ymax=11.4;width=680;id=DIAGRAMME02;achsen=0;grid=0;border=0;static=1`)
@Strecke(`DIAGRAMME02;[[0;1];[9.6;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME02;[[0;2];[9.6;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME02;[[0;3];[9.6;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME02;[[0;4];[9.6;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME02;[[0;5];[9.6;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME02;[[0;6];[9.6;6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME02;[[0;7];[9.6;7]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME02;[[0;8];[9.6;8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME02;[[0;9];[9.6;9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME02;[[0;10];[9.6;10]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`DIAGRAMME02;[[0;10.7];[0;0];[9.6;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME02;[[-0.12;0];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;0];$\Large 0$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME02;[[-0.12;1];[0;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;1];$\Large 1$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME02;[[-0.12;2];[0;2]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;2];$\Large 2$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME02;[[-0.12;3];[0;3]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;3];$\Large 3$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME02;[[-0.12;4];[0;4]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;4];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME02;[[-0.12;5];[0;5]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;5];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME02;[[-0.12;6];[0;6]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;6];$\Large 6$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME02;[[-0.12;7];[0;7]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;7];$\Large 7$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME02;[[-0.12;8];[0;8]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;8];$\Large 8$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME02;[[-0.12;9];[0;9]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;9];$\Large 9$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME02;[[-0.12;10];[0;10]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[-0.46;10];$\Large 10$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME02;[[0.5;0];[1.1;0];[1.1;4];[0.5;4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME02;[[0.5;0];[1.1;0];[1.1;4];[0.5;4];[0.5;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[0.8;-0.45];$\Large\text{A}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME02;[0.8;4.35];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME02;[[1.5;0];[2.1;0];[2.1;5];[1.5;5]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME02;[[1.5;0];[2.1;0];[2.1;5];[1.5;5];[1.5;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[1.8;-0.45];$\Large\text{B}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME02;[1.8;5.35];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME02;[[2.5;0];[3.1;0];[3.1;6];[2.5;6]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME02;[[2.5;0];[3.1;0];[3.1;6];[2.5;6];[2.5;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[2.8;-0.45];$\Large\text{C}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME02;[2.8;6.35];$\Large 6$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME02;[[3.5;0];[4.1;0];[4.1;7];[3.5;7]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME02;[[3.5;0];[4.1;0];[4.1;7];[3.5;7];[3.5;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[3.8;-0.45];$\Large\text{D}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME02;[3.8;7.35];$\Large 7$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME02;[[4.5;0];[5.1;0];[5.1;8];[4.5;8]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME02;[[4.5;0];[5.1;0];[5.1;8];[4.5;8];[4.5;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[4.8;-0.45];$\Large\text{E}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME02;[4.8;8.35];$\Large 8$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME02;[[5.5;0];[6.1;0];[6.1;9];[5.5;9]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME02;[[5.5;0];[6.1;0];[6.1;9];[5.5;9];[5.5;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[5.8;-0.45];$\Large\text{F}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME02;[5.8;9.35];$\Large 9$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME02;[[6.5;0];[7.1;0];[7.1;9];[6.5;9]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME02;[[6.5;0];[7.1;0];[7.1;9];[6.5;9];[6.5;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[6.8;-0.45];$\Large\text{G}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME02;[6.8;9.35];$\Large 9$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME02;[[7.5;0];[8.1;0];[8.1;10];[7.5;10]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME02;[[7.5;0];[8.1;0];[8.1;10];[7.5;10];[7.5;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[7.8;-0.45];$\Large\text{H}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME02;[7.8;10.35];$\Large 10$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`DIAGRAMME02;[[8.5;0];[9.1;0];[9.1;10];[8.5;10]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1`)
@Strecke(`DIAGRAMME02;[[8.5;0];[9.1;0];[9.1;10];[8.5;10];[8.5;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME02;[8.8;-0.45];$\Large\text{I}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME02;[8.8;10.35];$\Large 10$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME02;[1.3;10.98];$\Large\text{Anzahl}$;rgb(var(--color-text,51,51,51));1`)

</center>

Die Kategorien H und I besitzen mit jeweils $10$ die größte absolute Häufigkeit. A hat mit $4$ die kleinste. F und G kommen jeweils $9$-mal vor. Beide Diagramme enthalten dieselben Informationen, nur ihre Ausrichtung unterscheidet sich.

Die Summe aller Anzahlen beträgt:

$$
N=4+5+6+7+8+9+9+10+10=68.
$$

Auch relative Häufigkeiten können mit Balken oder Säulen dargestellt werden. Dann zeigt die Skala Anteile oder Prozentwerte statt Anzahlen an.

{{|>}} Ein Histogramm ist etwas anderes als ein Säulendiagramm mit gleichmäßig angeordneten Kategorien. Es stellt die Häufigkeiten von Zahlenwerten dar, die zu Klassen, also Zahlenintervallen, zusammengefasst werden, etwa Körpergrößen von $150$ bis unter $160\,\mathrm{cm}$.

Die Rechtecke eines Histogramms liegen über diesen Intervallen. Benachbarte Klassen schließen ohne Abstand aneinander an. Entscheidend ist, dass die Flächeninhalte der Rechtecke proportional zu den Häufigkeiten sind. Bei gleich breiten Klassen sind damit auch die Höhen proportional zu den Häufigkeiten. Bei unterschiedlich breiten Klassen muss die Höhe dagegen die Häufigkeitsdichte, also Häufigkeit geteilt durch Klassenbreite, wiedergeben.

Die oben gezeigten Kategorien A bis I sind keine solchen Zahlenintervalle; ihre gleichmäßigen Abstände machen aus dem Säulendiagramm deshalb kein Histogramm.

{{|>}} Soll der Anteil einer Kategorie an der Gesamtzahl verglichen werden, betrachten wir die relative Häufigkeit. Für eine Kategorie mit der Anzahl $n$ und eine Gesamtzahl $N>0$ gilt:

$$
h=\frac{n}{N}.
$$

In Prozent wird dieser Anteil als $p\,\%$ mit $p=100h$ geschrieben. Für A aus dem ersten Beispiel ergibt sich beispielsweise:

$$
h_A=\frac4{68}=\frac1{17},
\qquad
p_A\,\%\approx5{,}88\,\%.
$$

Ein Kreisdiagramm zeigt die Anteile am Ganzen durch Kreisausschnitte. Die Kategorien müssen zusammen das Ganze ergeben und dürfen sich nicht überschneiden. Der vollständige Kreis entspricht $100\,\%$ und einem Vollwinkel von $360^\circ$. Deshalb gilt:

$$
1\,\%\ \widehat{=}\ \frac{360^\circ}{100}=3{,}6^\circ.
$$

Für einen Anteil von $p\,\%$ beträgt der zugehörige Mittelpunktswinkel:

$$
\alpha=\frac{p}{100}\cdot360^\circ=p\cdot3{,}6^\circ.
$$

{{|>}} Das folgende Kreisdiagramm zeigt ein zweites, unabhängiges Beispiel. Seine Prozentwerte gehören nicht zu den Anzahlen des Balken- und Säulendiagramms oben.

<center>

@Koordinatensystem(`xmin=-3.6;xmax=3.6;ymin=-3.6;ymax=3.6;width=620;id=DIAGRAMME03;achsen=0;grid=0;border=0;static=1`)
@Punkt(`DIAGRAMME03;M;0;0;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`DIAGRAMME03;R0;2.7;0;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`DIAGRAMME03;R1;2.223538;1.531626;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`DIAGRAMME03;R2;1.489444;2.252012;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`DIAGRAMME03;R3;-0.355224;2.676531;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`DIAGRAMME03;R4;-1.58702;2.184346;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`DIAGRAMME03;R5;-2.682751;0.304712;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`DIAGRAMME03;R6;-2.443033;-1.149604;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`DIAGRAMME03;R7;-1.087847;-2.471151;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`DIAGRAMME03;R8;1.3451;-2.341091;rgb(var(--color-text,51,51,51));0;fix`)
@Kreissektor(`DIAGRAMME03;[M;R0;R1];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78.47%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff));1;S0=0`)
@Kreissektor(`DIAGRAMME03;[M;R1;R2];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020));1;S1=0`)
@Kreissektor(`DIAGRAMME03;[M;R2;R3];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850));1;S2=0`)
@Kreissektor(`DIAGRAMME03;[M;R3;R4];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00));1;S3=0`)
@Kreissektor(`DIAGRAMME03;[M;R4;R5];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 83.41%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #e840ac));1;S4=0`)
@Kreissektor(`DIAGRAMME03;[M;R5;R6];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #c8a500));1;S5=0`)
@Kreissektor(`DIAGRAMME03;[M;R6;R7];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 79.88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff));1;S6=0`)
@Kreissektor(`DIAGRAMME03;[M;R7;R8];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b07850));1;S7=0`)
@Kreissektor(`DIAGRAMME03;[M;R8;R0];rgb(var(--color-background,255,255,255));1;S8=0`)
@Kreis(`DIAGRAMME03;k=0;M;rgb(var(--color-text,51,51,51));0;radius=2.7`)
@Strecke(`DIAGRAMME03;[[0;0];[2.7;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME03;[[0;0];[2.223538;1.531626]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME03;[[0;0];[1.489444;2.252012]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME03;[[0;0];[-0.355224;2.676531]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME03;[[0;0];[-1.58702;2.184346]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME03;[[0;0];[-2.682751;0.304712]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME03;[[0;0];[-2.443033;-1.149604]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME03;[[0;0];[-1.087847;-2.471151]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME03;[[0;0];[1.3451;-2.341091]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME03;[1.947924;0.605965];$\Large 9{,}6\,\%$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME03;[[2.597232;0.807953];[2.826399;0.879243]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME03;[3.036469;0.944592];$\Large\text{A}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME03;[1.428839;1.456029];$\Large 6{,}1\,\%$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME03;[[1.905118;1.941372];[2.073217;2.112669]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME03;[2.227307;2.269692];$\Large\text{B}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME03;[0.457512;1.988035];$\Large 11{,}4\,\%$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME03;[[0.610016;2.650713];[0.663841;2.8846]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME03;[0.713181;3.098995];$\Large\text{C}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME03;[-0.756929;1.894375];$\Large 7{,}9\,\%$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME03;[[-1.009239;2.525834];[-1.098289;2.748702]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME03;[-1.179919;2.952997];$\Large\text{D}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME03;[-1.762404;1.027391];$\Large 13{,}2\,\%$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME03;[[-2.349872;1.369855];[-2.557213;1.490725]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME03;[-2.747276;1.601522];$\Large\text{E}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME03;[-2.012839;-0.33178];$\Large 8{,}8\,\%$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME03;[[-2.683786;-0.442373];[-2.92059;-0.481406]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME03;[-3.137661;-0.517186];$\Large\text{F}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME03;[-1.424257;-1.46051];$\Large 11{,}4\,\%$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME03;[[-1.89901;-1.947347];[-2.06657;-2.119172]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME03;[-2.220166;-2.276678];$\Large\text{G}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME03;[0.108899;-2.037091];$\Large 14{,}9\,\%$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME03;[[0.145198;-2.716122];[0.15801;-2.95578]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME03;[0.169754;-3.175466];$\Large\text{H}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME03;[1.765623;-1.02185];$\Large 16{,}7\,\%$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME03;[[2.354164;-1.362466];[2.561884;-1.482684]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME03;[2.752294;-1.592883];$\Large\text{I}$;rgb(var(--color-text,51,51,51));1`)

</center>

Die Anteile ergeben zusammen $100\,\%$:

$$
\begin{aligned}
&9{,}6+6{,}1+11{,}4+7{,}9+13{,}2\\
&\quad+8{,}8+11{,}4+14{,}9+16{,}7=100.
\end{aligned}
$$

Zum Beispiel gehört zum Anteil von A der Winkel:

$$
\alpha_A=\frac{9{,}6}{100}\cdot360^\circ=34{,}56^\circ.
$$

I besitzt mit $16{,}7\,\%$ den größten, B mit $6{,}1\,\%$ den kleinsten Anteil. Ohne die Gesamtzahl lassen sich aus diesen Prozentwerten allein keine absoluten Anzahlen bestimmen.

Andere Darstellungen können Anteile ebenfalls verdeutlichen. Beispielsweise werden Sitzverteilungen politischer Gremien häufig in einem Halbring oder einem Rechteck angeordnet; oft steht dabei jedes Symbol für einen Sitz. Die Zuordnung $1\,\%\ \widehat{=}\ 3{,}6^\circ$ gilt für das vollständige Kreisdiagramm, nicht unverändert für einen Halbkreis.

{{|>}} Ein Streifendiagramm zeigt dieselben Anteile in einem Rechteck mit gleichbleibender Höhe. Seine gesamte Länge entspricht $100\,\%$. Die Länge jedes Teilstücks ist proportional zum zugehörigen Anteil; wegen der gleichen Höhe gilt das auch für seinen Flächeninhalt.

<center>

@Koordinatensystem(`xmin=-0.35;xmax=10.35;ymin=-0.75;ymax=1.95;width=900;id=DIAGRAMME04;achsen=0;grid=0;border=0;static=1`)
@Flaeche(`DIAGRAMME04;[[0;0];[0.96;0];[0.96;1];[0;1]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78.47%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff));1`)
@Flaeche(`DIAGRAMME04;[[0.96;0];[1.57;0];[1.57;1];[0.96;1]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020));1`)
@Flaeche(`DIAGRAMME04;[[1.57;0];[2.71;0];[2.71;1];[1.57;1]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850));1`)
@Flaeche(`DIAGRAMME04;[[2.71;0];[3.5;0];[3.5;1];[2.71;1]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00));1`)
@Flaeche(`DIAGRAMME04;[[3.5;0];[4.82;0];[4.82;1];[3.5;1]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 83.41%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #e840ac));1`)
@Flaeche(`DIAGRAMME04;[[4.82;0];[5.7;0];[5.7;1];[4.82;1]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #c8a500));1`)
@Flaeche(`DIAGRAMME04;[[5.7;0];[6.84;0];[6.84;1];[5.7;1]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 79.88%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff));1`)
@Flaeche(`DIAGRAMME04;[[6.84;0];[8.33;0];[8.33;1];[6.84;1]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 78%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b07850));1`)
@Flaeche(`DIAGRAMME04;[[8.33;0];[10;0];[10;1];[8.33;1]];rgb(var(--color-background,255,255,255));1`)
@Strecke(`DIAGRAMME04;[[0;0];[10;0];[10;1];[0;1];[0;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME04;[[0.96;0];[0.96;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME04;[[1.57;0];[1.57;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME04;[[2.71;0];[2.71;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME04;[[3.5;0];[3.5;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME04;[[4.82;0];[4.82;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME04;[[5.7;0];[5.7;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME04;[[6.84;0];[6.84;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@Strecke(`DIAGRAMME04;[[8.33;0];[8.33;1]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME04;[0.48;1.35];$\Large\text{A}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[0.48;0.5];$\Large 9{,}6\,\%$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[1.265;1.35];$\Large\text{B}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[1.265;0.5];$\Large 6{,}1\,\%$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[2.14;1.35];$\Large\text{C}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[2.14;0.5];$\Large 11{,}4\,\%$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[3.105;1.35];$\Large\text{D}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[3.105;0.5];$\Large 7{,}9\,\%$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[4.16;1.35];$\Large\text{E}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[4.16;0.5];$\Large 13{,}2\,\%$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[5.26;1.35];$\Large\text{F}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[5.26;0.5];$\Large 8{,}8\,\%$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[6.27;1.35];$\Large\text{G}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[6.27;0.5];$\Large 11{,}4\,\%$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[7.585;1.35];$\Large\text{H}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[7.585;0.5];$\Large 14{,}9\,\%$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[9.165;1.35];$\Large\text{I}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIAGRAMME04;[9.165;0.5];$\Large 16{,}7\,\%$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`DIAGRAMME04;[[0;-0.2];[10;-0.2]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIAGRAMME04;[5;-0.5];$\Large 100\,\%$;rgb(var(--color-text,51,51,51));1`)

</center>

Bei einer Gesamtlänge $L$ berechnet sich die Länge $l$ eines Teilstücks mit dem Anteil $p\,\%$ durch:

$$
l=\frac{p}{100}\cdot L.
$$

Zeichnen wir den gesamten Streifen $10\,\mathrm{cm}$ lang, erhält A mit $9{,}6\,\%$ die Länge:

$$
l_A=\frac{9{,}6}{100}\cdot10\,\mathrm{cm}
=0{,}96\,\mathrm{cm}.
$$

Die Farben und die Reihenfolge A bis I stimmen mit dem Kreisdiagramm überein. Beide zeigen dieselbe relative Verteilung: Im Kreis vergleichen wir Winkel und Sektorflächen, im Streifen die Längen der Teilstücke.

***************************
