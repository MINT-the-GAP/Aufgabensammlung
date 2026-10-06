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













tags: Erklärung, Koordinatensystem, Definitionsbereich, Wertebereich, Funktionssymmetrie

comment: In diesem Abschnitt werden Koordinatensystem, Funktionsbegriff und Eindeutigkeit, Symmetrien von Funktionsgraphen sowie Definitionsbereich und Wertebereich erklärt.

author: Martin Lommatzsch

-->

# Funktion

{{|>}}
***************************

Um Funktionen verstehen und ihre Graphen darstellen zu können, werden zunächst die Begriffe des Koordinatensystems eingeführt. Ein kartesisches Koordinatensystem in der Ebene besteht aus zwei zueinander orthogonalen Zahlengeraden, die sich an ihren Nullpunkten schneiden. Dieser gemeinsame Punkt heißt Koordinatenursprung und hat die Koordinaten $O(0\mid0)$.

Die erste Achse heißt Abszissenachse, die zweite Ordinatenachse. Ein Punkt $P(x\mid y)$ wird durch ein geordnetes Zahlenpaar beschrieben: Seine erste Koordinate $x$ ist die Abszisse, seine zweite Koordinate $y$ die Ordinate. Die Orientierung des Koordinatensystems in einer Zeichnung ändert nichts an der Orthogonalität seiner Achsen.

Bei einem Funktionsgraphen werden auf der Abszissenachse die Werte der unabhängigen Variablen $x$ und auf der Ordinatenachse die zugehörigen Funktionswerte $y=f(x)$ aufgetragen. Die Schreibweise $f(x)$ wird „f von x“ gelesen.

<center>

@Koordinatensystem(`xmin=-4.7;xmax=4.7;ymin=-4.7;ymax=4.7;width=780;id=FUNKTION01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=FUNKTION01;xlabel=$\Large x$;ylabel=$\Large y$`)

@Strecke(`FUNKTION01;[[0.22;0];[0.22;0.22];[0;0.22]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@KoordText(`FUNKTION01;[2;2.4];$\Large \text{1. Quadrant}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`FUNKTION01;[-2;2.4];$\Large \text{2. Quadrant}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`FUNKTION01;[-2;-2.4];$\Large \text{3. Quadrant}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`FUNKTION01;[2;-2.4];$\Large \text{4. Quadrant}$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die beiden Achsen teilen die Ebene in vier Quadranten. In der dargestellten Orientierung beginnt die Nummerierung rechts oben und läuft gegen den Uhrzeigersinn. Im ersten Quadranten sind beide Koordinaten positiv; im zweiten gilt $x<0$ und $y>0$, im dritten sind beide negativ und im vierten gilt $x>0$ und $y<0$. Punkte auf den Achsen gehören zu keinem Quadranten.

Die Koordinatenebene ist unbegrenzt. Das Gitternetz in der Abbildung zeigt nur einen Ausschnitt; die Achsen setzen sich in beide Richtungen beliebig weit fort.

{{|>}} Eine Funktion ist eine eindeutige Zuordnung: Jedem Element ihrer Definitionsmenge wird genau ein Funktionswert zugeordnet. Hier werden Funktionen betrachtet, deren Argumente und Funktionswerte reelle Zahlen sind. Für eine solche Funktion schreibt man beispielsweise

$$
f:x\mapsto y=f(x).
$$

Dabei bezeichnet $f$ die Funktion und $f(x)$ ihren Wert an der Stelle $x$. Die Zuordnung muss für jedes erlaubte $x$ einen Wert liefern, und dieser Wert muss eindeutig sein. Unterschiedliche Argumente dürfen jedoch denselben Funktionswert besitzen.

Eine Funktion kann durch eine Gleichung beschrieben werden, aber auch durch einen Text, eine Wertetabelle oder ihren Graphen. Nicht jede Funktion muss durch einen einzigen Rechenterm gegeben sein. Der Graph besteht aus allen Punkten $P(x\mid f(x))$ mit erlaubtem $x$.

{{|>}} Ein Beispiel ist die durch

$$
f(x)=2x
$$

beschriebene Funktion. Sie ordnet jeder eingesetzten Zahl ihr Doppeltes zu. Beispielsweise gilt

$$
f(3)=2\cdot3=6
\qquad\text{und}\qquad
f(-2)=2\cdot(-2)=-4.
$$

Die zugehörigen Punkte auf dem Graphen sind $P(3\mid6)$ und $Q(-2\mid-4)$. Weitere Wertepaare lassen sich in einer Wertetabelle zusammenstellen:

<!-- data-type="none" data-sortable="false" -->
| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $f(x)=2x$ | $-4$ | $-2$ | $0$ | $2$ | $4$ |

{{|>}} Funktionsgraphen können achsen- oder punktsymmetrisch sein. Für die Symmetrie zur Ordinatenachse beziehungsweise zum Koordinatenursprung muss zunächst die Definitionsmenge bezüglich $0$ symmetrisch sein: Mit jedem erlaubten $x$ muss auch $-x$ erlaubt sein. Anschließend wird durch Einsetzen geprüft, ob für alle diese $x$ die passende Gleichung gilt:

$$
\begin{aligned}
f(-x)&=f(x)
&&\text{Symmetrie zur Ordinatenachse},\\
f(-x)&=-f(x)
&&\text{Symmetrie zum Koordinatenursprung}.
\end{aligned}
$$

Die zweite Gleichung kann gleichwertig als $f(x)=-f(-x)$ geschrieben werden. Bei der Achsensymmetrie bleibt der Graph nach einer Spiegelung an der Ordinatenachse unverändert. Bei der Punktsymmetrie bleibt er nach einer Drehung um den Koordinatenursprung um $180^\circ$ unverändert. Einzelne passende Wertepaare reichen als Nachweis nicht aus; die Gleichung muss im gesamten Definitionsbereich gelten.

{{|>}} Für die auf allen reellen Zahlen definierte Funktion $f(x)=3x^2-6$ ergibt das Einsetzen von $-x$:

$$
\begin{aligned}
f(-x)&=3(-x)^2-6\\
     &=3x^2-6\\
     &=f(x).
\end{aligned}
$$

Dabei wurde $(-x)^2=x^2$ verwendet. Der Graph ist also achsensymmetrisch zur Ordinatenachse. Solche Funktionen heißen gerade Funktionen.

{{|>}} Für die ebenfalls auf allen reellen Zahlen definierte Funktion $f(x)=2x^3-3x$ gilt dagegen

$$
\begin{aligned}
f(-x)&=2(-x)^3-3(-x)\\
     &=-2x^3+3x\\
     &=-(2x^3-3x)\\
     &=-f(x).
\end{aligned}
$$

Hier wurden $(-x)^3=-x^3$ und $-3(-x)=3x$ verwendet. Der Graph ist punktsymmetrisch zum Koordinatenursprung. Solche Funktionen heißen ungerade Funktionen. Auch die Funktion $f(x)=2x$ ist ungerade.

Die Symmetrieachse oder das Symmetriezentrum eines Graphen muss nicht mit der Ordinatenachse beziehungsweise dem Koordinatenursprung zusammenfallen. Verschiebt man den Ursprung auf einen Punkt der zur Ordinatenachse parallelen Symmetrieachse beziehungsweise in das Symmetriezentrum, lassen sich die entsprechenden Tests auf die Funktionsgleichung im verschobenen Koordinatensystem anwenden. Die ursprüngliche Gleichung muss dazu in den neuen Koordinaten ausgedrückt werden. Scheitern die beiden Tests im ursprünglichen Koordinatensystem, ist damit nicht jede denkbare Symmetrie ausgeschlossen.

{{|>}} Die Definitionsmenge $\mathbb{D}$ enthält alle als Argument zugelassenen Zahlen; man spricht auch vom Definitionsbereich. Sie gehört zur Festlegung einer Funktion. Wird eine Funktion durch einen Term ohne weitere Einschränkung vorgegeben, sucht man in diesem Zusammenhang den größtmöglichen Definitionsbereich innerhalb der reellen Zahlen.

Die Wertemenge $\mathbb{W}$, auch Wertebereich genannt, enthält genau die tatsächlich angenommenen Funktionswerte:

$$
\mathbb{W}=\left\{f(x)\mid x\in\mathbb{D}\right\}.
$$

Die Wertemenge ist also nicht einfach eine beliebig gewählte Zielmenge. Eine Zielmenge darf auch Werte enthalten, die durch die Funktion gar nicht erreicht werden.

Für $f(x)=2x$ mit dem größtmöglichen reellen Definitionsbereich gilt

$$
\mathbb{D}=\mathbb{R}
\qquad\text{und}\qquad
\mathbb{W}=\mathbb{R}.
$$

Jede reelle Zahl darf eingesetzt werden, und jede reelle Zahl $y$ wird erreicht, nämlich mit $x=\frac{y}{2}$. Wird dagegen beispielsweise nur $\mathbb{D}=[0,\infty)$ zugelassen, ist auch die Wertemenge auf $\mathbb{W}=[0,\infty)$ beschränkt. Der Wertebereich hängt somit auch vom gewählten Definitionsbereich ab.

{{|>}} Bei der Bestimmung des Definitionsbereichs müssen die auftretenden Rechenoperationen beachtet werden. Durch $0$ darf nicht dividiert werden. Beim Rechnen mit reellen Zahlen muss außerdem der Radikand einer Quadratwurzel größer oder gleich $0$ sein. Für verschiedene Rechenoperationen entstehen also unterschiedliche Bedingungen; nicht jeder Definitionsbereich lässt sich allein durch das Lösen einer Gleichung bestimmen.

Für die Funktion

$$
f(x)=\frac{1}{2x-2}
$$

darf der Nenner nicht $0$ werden. Um die ausgeschlossene Stelle zu finden, löst man die Gleichung

$$
2x-2=0
\quad\Longleftrightarrow\quad
2x=2
\quad\Longleftrightarrow\quad
x=1.
$$

Damit lautet der größtmögliche reelle Definitionsbereich

$$
\mathbb{D}=\mathbb{R}\setminus\{1\}.
$$

Alle reellen Zahlen außer $1$ sind erlaubt. Der Funktionswert $0$ wird nicht erreicht, da der Zähler stets $1$ ist. Jede andere reelle Zahl $y$ erhält man durch Einsetzen von $x=1+\frac{1}{2y}$. Daher gilt hier auch

$$
\mathbb{W}=\mathbb{R}\setminus\{0\}.
$$

{{|>}} Weder der Funktionsname noch die Variable müssen $f$ beziehungsweise $x$ heißen. In der Physik kann beispielsweise der Ort $x$ von der Zeit $t$ abhängen. Die Funktion wird dann als $x(t)$ geschrieben.

Bei einer geradlinigen Bewegung mit konstanter Geschwindigkeit $v$ und dem Anfangsort $x(0)=0$ beschreibt

$$
x(t)=v\cdot t
$$

den Ort zur Zeit $t$. Wird $t$ in Sekunden und $v$ in Metern pro Sekunde angegeben, ergibt sich $x(t)$ in Metern. Für $t\geq0$ und $v\geq0$ stimmt dieser Wert mit der seit dem Start zurückgelegten Strecke überein. Ein anderer Anfangsort $x_0$ führt zu $x(t)=x_0+v\cdot t$.

Funktionen helfen dabei, Zusammenhänge als mathematische Modelle zu beschreiben und innerhalb ihrer Voraussetzungen Vorhersagen zu treffen. Daraus folgt jedoch nicht, dass alles exakt berechnet oder die Zukunft uneingeschränkt vorhergesagt werden kann. Messunsicherheiten, Zufall, unvollständige Informationen und begrenzte Rechenmöglichkeiten setzen Grenzen. Vereinfachungen machen Modelle handhabbar; ihre Eignung muss am betrachteten Sachverhalt geprüft werden. Solche Fragen werden bei der Wahrscheinlichkeitsrechnung und bei physikalischen Anwendungen weiter vertieft.

***************************
