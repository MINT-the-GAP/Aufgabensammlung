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













tags: Erklärung, Wertetabelle, Funktionswert, Wertepaar, Funktionsgraph

comment: In diesem Abschnitt werden Wertetabellen durch Einsetzen erstellt, Wertepaare als Punkte eingetragen und daraus die Graphen einer linearen und einer quadratischen Funktion dargestellt.

author: Martin Lommatzsch

-->

# Wertetabellen

{{|>}}
***************************

Eine Wertetabelle stellt ausgewählte Werte einer Funktion übersichtlich zusammen. Dazu setzt man Zahlen für die Variable $x$ in den Funktionsterm ein und berechnet die zugehörigen Funktionswerte $f(x)$. In der Tabelle muss erkennbar bleiben, welcher Funktionswert zu welchem eingesetzten Wert gehört.

Mit diesen Wertepaaren lassen sich Punkte im Koordinatensystem eintragen. Sie helfen dabei, den Graphen der Funktion zu zeichnen und seinen Verlauf zu untersuchen.

{{|>}} Als erstes Beispiel betrachten wir die Funktion

$$
f(x)=2x+1.
$$

Für $x$ wählen wir die Zahlen $-2$, $-1$, $0$, $1$, $2$ und $3$. Jede Zahl wird mit $2$ multipliziert; anschließend wird $1$ addiert. Für $x=-2$ ergibt sich beispielsweise

$$
f(-2)=2\cdot(-2)+1=-4+1=-3.
$$

Die Spalten „Rechnung“ und „Punkt“ erläutern das Vorgehen. Für eine gewöhnliche Wertetabelle genügen die beiden Spalten mit $x$ und $f(x)$.

<!-- data-type="none" data-sortable="false" -->
| Punkt | $x$ | Rechnung | $f(x)$ |
| :---: | :---: | :---: | :---: |
| $P_{-2}$ | $-2$ | $2\cdot(-2)+1$ | $-3$ |
| $P_{-1}$ | $-1$ | $2\cdot(-1)+1$ | $-1$ |
| $P_0$ | $0$ | $2\cdot0+1$ | $1$ |
| $P_1$ | $1$ | $2\cdot1+1$ | $3$ |
| $P_2$ | $2$ | $2\cdot2+1$ | $5$ |
| $P_3$ | $3$ | $2\cdot3+1$ | $7$ |

{{|>}} Das zweite Beispiel ist die Funktion

$$
g(x)=x^2-1.
$$

Hier wird die eingesetzte Zahl zuerst quadriert; danach wird $1$ subtrahiert. Negative Zahlen werden mit ihrem Vorzeichen in Klammern eingesetzt. So gilt

$$
g(-2)=(-2)^2-1=4-1=3.
$$

Auch Brüche dürfen eingesetzt werden. Für $x=\frac12$ erhält man

$$
g\left(\frac12\right)
=\left(\frac12\right)^2-1
=\frac14-1
=-\frac34.
$$

<!-- data-type="none" data-sortable="false" -->
| Punkt | $x$ | Rechnung | $g(x)$ |
| :---: | :---: | :---: | :---: |
| $Q_{-2}$ | $-2$ | $(-2)^2-1$ | $3$ |
| $Q_{-1}$ | $-1$ | $(-1)^2-1$ | $0$ |
| $Q_0$ | $0$ | $0^2-1$ | $-1$ |
| $Q_{\frac12}$ | $\frac12$ | $\left(\frac12\right)^2-1$ | $-\frac34$ |
| $Q_1$ | $1$ | $1^2-1$ | $0$ |
| $Q_{\frac32}$ | $\frac32$ | $\left(\frac32\right)^2-1$ | $\frac54$ |
| $Q_2$ | $2$ | $2^2-1$ | $3$ |

Beim Quadrieren ist auf die Klammern zu achten: $(-2)^2=4$, aber $-2^2=-4$. Für das Einsetzen von $x=-2$ in $x^2$ ist deshalb $(-2)^2$ die richtige Schreibweise.

{{|>}} Die eingesetzten Zahlen müssen zum Definitionsbereich der Funktion gehören. Bei den beiden Beispielen sind alle reellen Zahlen erlaubt. Innerhalb des Definitionsbereichs kann man die Tabellenwerte passend zum gewünschten Ausschnitt wählen; gleiche Abstände sind hilfreich, aber nicht vorgeschrieben.

Die Bezeichnungen $P_{-2}$ oder $Q_{\frac12}$ sind Namen für die zugehörigen Punkte. Der Index nennt hier den eingesetzten Wert von $x$. So gehört beispielsweise $Q_{\frac32}$ zum Wertepaar $\left(\frac32\mid\frac54\right)$.

{{|>}} Ein eingesetzter Wert und sein Funktionswert bilden ein geordnetes Wertepaar. Die Reihenfolge ist wichtig: Zuerst wird die Abszisse $x$ angegeben, danach die Ordinate $f(x)$. Der zugehörige Punkt wird geschrieben als

$$
P\left(x\mid f(x)\right).
$$

Für die beiden Beispiele sind also etwa

$$
P_{-2}(-2\mid-3)
\qquad\text{und}\qquad
Q_{\frac12}\left(\frac12\mid-\frac34\right)
$$

Punkte auf den jeweiligen Funktionsgraphen. Die Schreibweise $P(x\mid y)$ beschreibt einen Punkt und darf nicht mit dem Funktionswert $f(x)$ verwechselt werden.

Zum Eintragen von $P_{-2}(-2\mid-3)$ geht man vom Ursprung aus zunächst zwei Einheiten in negativer Richtung der Abszissenachse und anschließend drei Einheiten parallel zur Ordinatenachse in deren negativer Richtung. Bei positiven Koordinaten geht man entsprechend in die positive Achsenrichtung. Die gestrichelten Hilfsstrecken zeigen die Zuordnung der Koordinaten.

{{|>}} Die folgende Abbildung zeigt sechs ausgewählte Punkte aus den Wertetabellen. Die Punkte zu $f$ sind rot, die Punkte zu $g$ blau. Alle Punkte sind durch ein Kreuz markiert.

<center>

@Koordinatensystem(`xmin=-4.6;xmax=4.6;ymin=-4.6;ymax=4.6;width=720;id=WERTETABELLE01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=WERTETABELLE01;xlabel=$\Large x$;ylabel=$\Large y$`)

@Strecke(`WERTETABELLE01;[[-2;0];[-2;-3];[0;-3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=dashed`)
@Strecke(`WERTETABELLE01;[[-1;0];[-1;-1];[0;-1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=dashed`)
@Strecke(`WERTETABELLE01;[[1;0];[1;3];[0;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px;linestyle=dashed`)
@Strecke(`WERTETABELLE01;[[-2;0];[-2;3];[0;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`WERTETABELLE01;[[0.5;0];[0.5;-0.75];[0;-0.75]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Strecke(`WERTETABELLE01;[[1.5;0];[1.5;1.25];[0;1.25]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2px;linestyle=dashed`)
@Punkt(`WERTETABELLE01;Pm2=0;-2;-3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`WERTETABELLE01;[-2.15;-3.43];$\Large P_{-2}(-2\mid-3)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`WERTETABELLE01;Pm1=0;-1;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`WERTETABELLE01;[-1.12;-1.55];$\Large P_{-1}(-1\mid-1)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`WERTETABELLE01;P1=0;1;3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`WERTETABELLE01;[1.75;3.43];$\Large P_1(1\mid3)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`WERTETABELLE01;Qm2=0;-2;3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`WERTETABELLE01;[-2.1;3.43];$\Large Q_{-2}(-2\mid3)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`WERTETABELLE01;Q05=0;0.5;-0.75;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`WERTETABELLE01;[1.75;-1.4];$\Large Q_{\frac12}\!\left(\frac12\mid-\frac34\right)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`WERTETABELLE01;Q15=0;1.5;1.25;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`WERTETABELLE01;[2.55;1.78];$\Large Q_{\frac32}\!\left(\frac32\mid\frac54\right)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

{{|>}} Der Graph einer Funktion besteht aus allen Punkten $P(x\mid f(x))$, deren Abszissen zum Definitionsbereich gehören. Eine endliche Wertetabelle liefert davon nur eine Auswahl.

Für $f(x)=2x+1$ liegen die Punkte auf einer Geraden. Für $g(x)=x^2-1$ ergibt sich eine Parabel, also eine gekrümmte Linie. Ihre Tabellenpunkte werden deshalb nicht durch einen kantigen Streckenzug verbunden. Zum Zeichnen nutzt man die bekannte Art der Funktion und bei Bedarf zusätzliche Wertepaare.

<center>

@Koordinatensystem(`xmin=-4.6;xmax=4.6;ymin=-4.6;ymax=4.6;width=720;id=WERTETABELLE02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=WERTETABELLE02;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`WERTETABELLE02;f=0;2*x+1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020)`)
@PlotFunktion(`WERTETABELLE02;g=0;x^2-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff)`)
@Punkt(`WERTETABELLE02;Pm2=0;-2;-3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`WERTETABELLE02;[-2.47;-2.97];$\Large P_{-2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`WERTETABELLE02;Pm1=0;-1;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`WERTETABELLE02;[-1.45;-1.05];$\Large P_{-1}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`WERTETABELLE02;P0=0;0;1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`WERTETABELLE02;[0.37;0.93];$\Large P_0$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`WERTETABELLE02;P1=0;1;3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`WERTETABELLE02;[1.4;2.98];$\Large P_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Punkt(`WERTETABELLE02;Qm2=0;-2;3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`WERTETABELLE02;[-2.48;3];$\Large Q_{-2}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`WERTETABELLE02;Qm1=0;-1;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`WERTETABELLE02;[-1.2;0.38];$\Large Q_{-1}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`WERTETABELLE02;Q0=0;0;-1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`WERTETABELLE02;[-0.37;-1.39];$\Large Q_0$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`WERTETABELLE02;Q05=0;0.5;-0.75;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`WERTETABELLE02;[0.67;-1.3];$\Large Q_{\frac12}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`WERTETABELLE02;Q1=0;1;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`WERTETABELLE02;[1.45;-0.35];$\Large Q_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`WERTETABELLE02;Q15=0;1.5;1.25;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`WERTETABELLE02;[1.98;1.2];$\Large Q_{\frac32}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Punkt(`WERTETABELLE02;Q2=0;2;3;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`WERTETABELLE02;[2.38;2.94];$\Large Q_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`WERTETABELLE02;[1.28;4.08];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`WERTETABELLE02;[2.64;4.08];$\Large g$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Die Zeichnung zeigt nur einen Ausschnitt der beiden Graphen. Deshalb sind beispielsweise $P_2(2\mid5)$ und $P_3(3\mid7)$ aus der ersten Wertetabelle hier nicht sichtbar.

{{|>}} Eine Wertetabelle unterstützt das Zeichnen und Ablesen eines Funktionsgraphen. Aus einer endlichen Tabelle allein lässt sich der gesamte Graph jedoch nicht eindeutig bestimmen: Zwischen den eingetragenen Punkten könnten ohne weitere Angaben unterschiedliche Verläufe liegen.

Auch Definitionsbereich und Wertebereich lassen sich aus einem begrenzten Bildausschnitt im Allgemeinen nicht vollständig ablesen. Dafür müssen zusätzlich die Funktionsgleichung und die Vorgaben zur Funktion berücksichtigt werden.

In den folgenden Abschnitten werden einzelne Funktionsarten genauer untersucht. Später ergänzen rechnerische Verfahren aus der Differential- und Integralrechnung die Untersuchung von Graphen; grafische Darstellungen bleiben dabei eine wichtige Hilfe zum Veranschaulichen und Kontrollieren.

***************************
