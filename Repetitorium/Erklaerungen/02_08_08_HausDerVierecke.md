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













tags: Erklärung, Vierecke

comment: Einordnung der besonderen Vierecke und ihrer Spezialfälle im Haus der Vierecke.

author: Martin Lommatzsch

-->

# Haus der Vierecke

{{|>}}
***************************

Die besonderen Vierecke hängen miteinander zusammen. Ein Quadrat besitzt zum Beispiel alle Eigenschaften eines Rechtecks und zusätzlich vier gleich lange Seiten. Es ist deshalb ein besonderes Rechteck. Solche Beziehungen werden im Haus der Vierecke dargestellt.

Ein Pfeil bedeutet „ist auch“: Jede Figur des Ausgangstyps gehört ebenfalls zum Typ an der Pfeilspitze. Die Pfeile führen also von spezielleren zu allgemeineren Vierecken.

<center>

@Koordinatensystem(`xmin=-8.7;xmax=8.7;ymin=-2.1;ymax=18;width=780;id=HAUSVIERECKE;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`HAUSVIERECKE;[[-8.7;-2.1];[8.7;-2.1];[8.7;18];[-8.7;18]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`HAUSVIERECKE;[[-1.1;14.7];[-3.5;13.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px`)
@Strecke(`HAUSVIERECKE;[[1.1;14.7];[3.5;13.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px`)
@Strecke(`HAUSVIERECKE;[[-4.6;10.15];[-5.5;9.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px`)
@Strecke(`HAUSVIERECKE;[[-3.4;10.15];[-0.9;9.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px`)
@Strecke(`HAUSVIERECKE;[[3.4;10.15];[0.9;9.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px`)
@Strecke(`HAUSVIERECKE;[[4.6;10.15];[5.5;9.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px`)
@Strecke(`HAUSVIERECKE;[[-5.4;5.4];[-3.6;4.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px`)
@Strecke(`HAUSVIERECKE;[[-0.45;6.05];[-2;4.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px`)
@Strecke(`HAUSVIERECKE;[[5.6;5.9];[2.7;1.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px`)
@Strecke(`HAUSVIERECKE;[[-2.15;1.8];[0.6;1.2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;->;2px`)
@Flaeche(`HAUSVIERECKE;[[-0.95;15.05];[0.95;15.05];[0.95;16.95];[-0.95;16.95]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`HAUSVIERECKE;[[-0.95;15.05];[0.95;15.05];[0.95;16.95];[-0.95;16.95];[-0.95;15.05]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`HAUSVIERECKE;[0;14.45];$\Large \text{Quadrat}$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`HAUSVIERECKE;[[-5.7;11.2];[-2.9;11.2];[-2.9;12.8];[-5.7;12.8]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`HAUSVIERECKE;[[-5.7;11.2];[-2.9;11.2];[-2.9;12.8];[-5.7;12.8];[-5.7;11.2]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`HAUSVIERECKE;[-4.3;10.65];$\Large \text{Rechteck}$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`HAUSVIERECKE;[[2.7;12];[4.3;11];[5.9;12];[4.3;13]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`HAUSVIERECKE;[[2.7;12];[4.3;11];[5.9;12];[4.3;13];[2.7;12]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`HAUSVIERECKE;[4.3;10.65];$\Large \text{Raute}$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`HAUSVIERECKE;[[-7;7.2];[-4.2;7.2];[-4.85;8.6];[-6.35;8.6]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`HAUSVIERECKE;[[-7;7.2];[-4.2;7.2];[-4.85;8.6];[-6.35;8.6];[-7;7.2]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`HAUSVIERECKE;[-5.6;6.55];$\Large \text{symmetrisches}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`HAUSVIERECKE;[-5.6;5.98];$\Large \text{Trapez}$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`HAUSVIERECKE;[[-1.4;7.2];[0.8;7.2];[1.4;8.6];[-0.8;8.6]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`HAUSVIERECKE;[[-1.4;7.2];[0.8;7.2];[1.4;8.6];[-0.8;8.6];[-1.4;7.2]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`HAUSVIERECKE;[0;6.55];$\Large \text{Parallelogramm}$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`HAUSVIERECKE;[[5.6;6.9];[6.55;7.7];[5.6;8.95];[4.65;7.7]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`HAUSVIERECKE;[[5.6;6.9];[6.55;7.7];[5.6;8.95];[4.65;7.7];[5.6;6.9]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`HAUSVIERECKE;[5.6;6.4];$\Large \text{Drachen}$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`HAUSVIERECKE;[[-4.3;3];[-1.3;3];[-2.55;4.4];[-3.6;4.4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`HAUSVIERECKE;[[-4.3;3];[-1.3;3];[-2.55;4.4];[-3.6;4.4];[-4.3;3]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`HAUSVIERECKE;[-2.8;2.35];$\Large \text{Trapez}$;rgb(var(--color-text,51,51,51));1`)
@Flaeche(`HAUSVIERECKE;[[0.15;-0.65];[2.9;-0.8];[2.2;0.85];[0.85;0.4]];color-mix(in srgb, rgb(var(--color-background,255,255,255)) 86.59%, color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0));1;inhalt=0;umfang=0`)
@Strecke(`HAUSVIERECKE;[[0.15;-0.65];[2.9;-0.8];[2.2;0.85];[0.85;0.4];[0.15;-0.65]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@KoordText(`HAUSVIERECKE;[1.5;-1.4];$\Large \text{allgemeines Viereck}$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Das Haus verwendet die Trapezdefinition „mindestens ein Paar paralleler Gegenseiten“. Ein Parallelogramm hat sogar zwei solche Paare und ist deshalb auch ein Trapez. Bei einer anderen Definition, die genau ein Paar verlangt, sähe das Haus anders aus.

Ein symmetrisches Trapez besitzt eine Symmetrieachse orthogonal zu den parallelen Seiten. Damit sind auch Rechtecke eingeschlossen. Bei den Drachen betrachten wir konvexe Figuren, also Vierecke ohne einspringende Ecke.

{{|>}} Das Quadrat steht ganz oben, weil es besonders viele Eigenschaften gleichzeitig erfüllt: Es hat vier gleich lange Seiten und vier rechte Winkel. Es ist deshalb sowohl ein Rechteck als auch eine Raute.

Ein Rechteck ist ein Parallelogramm und ein symmetrisches Trapez. Eine Raute ist ein Parallelogramm und ein Drachen. Folgt man den Pfeilen weiter, erreicht man schließlich das allgemeine Viereck.

{{|>}} Die wichtigsten Merkmale lassen sich so zusammenfassen:

<!-- data-type="none" data-sortable="false" -->
| Viereck | Seiten und Winkel | Diagonalen |
| :--- | :--- | :--- |
| Quadrat | Vier gleich lange Seiten und vier rechte Winkel. | Gleich lang, orthogonal zueinander und gegenseitig halbierend. |
| Rechteck | Vier rechte Winkel; gegenüberliegende Seiten gleich lang und parallel. | Gleich lang und gegenseitig halbierend. |
| Raute | Vier gleich lange Seiten; gegenüberliegende Seiten parallel und gegenüberliegende Winkel gleich groß. | orthogonal zueinander und gegenseitig halbierend. |
| Parallelogramm | Gegenüberliegende Seiten parallel und gleich lang; gegenüberliegende Winkel gleich groß. | Halbieren einander. |
| Symmetrisches Trapez | Symmetrieachse orthogonal zu den parallelen Seiten; gleich lange Schenkel und gleiche Winkel an jeder Grundseite. | Gleich lang. |
| Drachen | Zwei Paare gleich langer benachbarter Seiten; ein Paar gegenüberliegender Winkel gleich groß. | orthogonal zueinander; eine Diagonale halbiert die andere. |
| Trapez | Mindestens ein Paar paralleler Gegenseiten. | Im Allgemeinen weder gleich lang noch orthogonal oder gegenseitig halbierend. |
| Allgemeines Viereck | Vier Seiten; Innenwinkelsumme $360^\circ$. | Verbinden jeweils zwei gegenüberliegende Eckpunkte. |

{{|>}} Die Beziehungen gelten auch über mehrere Pfeile hinweg. Beispielsweise ist jedes Quadrat ein Rechteck, damit ein Parallelogramm und damit ein Trapez. Ebenso ist jedes Quadrat eine Raute und damit ein Drachen.

Die umgekehrte Aussage gilt nicht automatisch: Ein Rechteck kann verschieden lange Nachbarseiten haben und muss dann kein Quadrat sein. Eine Raute kann schiefe Innenwinkel besitzen und muss deshalb ebenfalls kein Quadrat sein.

Das Haus ordnet die Vierecke nach ihren Eigenschaften, nicht nach ihrer Lage oder Ausrichtung in der Zeichnung. Ein gedrehtes Quadrat bleibt ein Quadrat.

***************************
