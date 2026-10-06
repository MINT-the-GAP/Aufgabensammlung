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













tags: Erklärung, Vektorprodukt

comment: In diesem Abschnitt wird das Vektorprodukt aus Orthogonalitätsbedingungen hergeleitet, mit einer Determinanten-Rechenhilfe berechnet und zur Flächenberechnung verwendet. Rechengesetze und wichtige Identitäten werden erläutert.

author: Martin Lommatzsch

-->

# Vektorprodukt

{{|>}}
***************************

Um geometrische Eigenschaften im dreidimensionalen Raum zu beschreiben, wird häufig ein Vektor benötigt, der orthogonal zu einer Ebene ist. Eine solche Ebene wird durch zwei linear unabhängige Vektoren $\vec{a}$ und $\vec{b}$ aufgespannt. Gesucht ist ein von null verschiedener Vektor $\vec{c}$, der zu beiden orthogonal ist:

$$
\begin{aligned}
\vec{a}\cdot\vec{c}&\stackrel{!}{=}0
\quad\Rightarrow\quad\vec{a}\perp\vec{c},\\
\vec{b}\cdot\vec{c}&\stackrel{!}{=}0
\quad\Rightarrow\quad\vec{b}\perp\vec{c}.
\end{aligned}
$$

Ein solcher Vektor heißt Normalenvektor der Ebene. Die beiden Bedingungen bestimmen seine Länge und Orientierung noch nicht eindeutig: Auch jedes von null verschiedene Vielfache ist ein Normalenvektor. Das Vektorprodukt, auch Kreuzprodukt genannt, legt zusätzlich eine bestimmte Länge und Orientierung fest.

{{|>}} Zunächst schreiben wir die Skalarprodukte komponentenweise aus. Um $c_2$ zu eliminieren, wird die erste Gleichung mit $-b_2$ und die zweite mit $a_2$ multipliziert:

$$
\begin{aligned}
\mathrm{I.}\quad
a_1c_1+a_2c_2+a_3c_3&=0
&&\big|\ \cdot(-b_2),\\
\mathrm{II.}\quad
b_1c_1+b_2c_2+b_3c_3&=0
&&\big|\ \cdot a_2.
\end{aligned}
$$

Daraus folgt:

$$
\begin{aligned}
-b_2a_1c_1-b_2a_2c_2-b_2a_3c_3&=0,\\
a_2b_1c_1+a_2b_2c_2+a_2b_3c_3&=0.
\end{aligned}
$$

Durch Addition fällt $c_2$ weg. Anschließend werden die übrigen Komponenten ausgeklammert:

$$
\begin{aligned}
-b_2a_1c_1-b_2a_3c_3+a_2b_1c_1+a_2b_3c_3&=0,\\
(a_2b_1-a_1b_2)c_1+(a_2b_3-a_3b_2)c_3&=0.
\end{aligned}
$$

Nach dem Umstellen erhält man:

$$
(a_2b_3-a_3b_2)c_3=(a_1b_2-a_2b_1)c_1.
$$

Nur wenn $c_1\ne0$ und $a_2b_3-a_3b_2\ne0$ sind, darf daraus die Verhältnisgleichung gebildet werden:

$$
\frac{c_3}{c_1}
=\frac{a_1b_2-a_2b_1}{a_2b_3-a_3b_2}.
$$

Die entsprechenden Rechnungen für die anderen Komponenten führen auf dieselben zyklischen Produktdifferenzen. Als Vektorprodukt wird in einem rechtshändigen kartesischen Koordinatensystem definiert:

$$
\vec{c}=\vec{a}\times\vec{b}
:=
\begin{pmatrix}
a_2b_3-a_3b_2\\
a_3b_1-a_1b_3\\
a_1b_2-a_2b_1
\end{pmatrix}.
$$

Diese Definition benötigt keine Division und gilt deshalb auch dann, wenn einzelne Komponenten oder Produktdifferenzen null sind. Durch Einsetzen lässt sich prüfen, dass $\vec{a}\cdot\vec{c}=0$ und $\vec{b}\cdot\vec{c}=0$ gelten. Für linear unabhängige Ausgangsvektoren ist $\vec{c}\ne\vec{0}$.

Die Orientierung folgt der Rechte-Hand-Regel: Krümmt man die Finger der rechten Hand über den kleineren Winkel von $\vec{a}$ nach $\vec{b}$, zeigt der abgespreizte Daumen in Richtung von $\vec{a}\times\vec{b}$. Beim Vertauschen der Vektoren kehrt sich diese Richtung um.

{{|>}} Das Vektorprodukt lässt sich mithilfe einer Determinanten-Rechenhilfe merken. Für die Standardbasisvektoren $\hat{e}_1$, $\hat{e}_2$ und $\hat{e}_3$ schreibt man formal:

$$
\begin{pmatrix}x\\y\\z\end{pmatrix}
\times
\begin{pmatrix}a\\b\\c\end{pmatrix}
=
\begin{vmatrix}
\hat{e}_1&x&a\\
\hat{e}_2&y&b\\
\hat{e}_3&z&c
\end{vmatrix}.
$$

Die erste Spalte enthält hier Vektoren statt Zahlen. Der Ausdruck ist deshalb als Rechenschema zu verstehen: Entwickelt man nach der ersten Spalte, werden die skalaren $2\times2$-Determinanten mit den Basisvektoren multipliziert.

$$
\begin{aligned}
\begin{pmatrix}x\\y\\z\end{pmatrix}
\times
\begin{pmatrix}a\\b\\c\end{pmatrix}
&=(yc-zb)\hat{e}_1-(xc-za)\hat{e}_2\\
&\qquad +(xb-ya)\hat{e}_3\\
&=\begin{pmatrix}
yc-zb\\
za-xc\\
xb-ya
\end{pmatrix}.
\end{aligned}
$$

Insbesondere muss beim zweiten Eintrag das Vorzeichen beachtet werden.

Eine weitere Rechenhilfe entsteht, wenn beide Vektoren zweimal untereinander geschrieben werden. Die erste und die letzte Zeile werden gestrichen. Die drei verbleibenden überkreuzten Zeilenpaare liefern von oben nach unten die drei Komponenten: jeweils das Produkt an der grünen Verbindung minus das Produkt an der roten Verbindung.

<center>

@Koordinatensystem(`xmin=-0.9;xmax=4.6;ymin=-0.6;ymax=6.4;width=430;id=KREUZ01;achsen=0;grid=0;border=0;static=1`)

@Strecke(`KREUZ01;[[0.25;3.9];[2.25;3.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Strecke(`KREUZ01;[[0.25;2.9];[2.25;2.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Strecke(`KREUZ01;[[0.25;1.9];[2.25;1.1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2px`)
@Strecke(`KREUZ01;[[0.25;3.1];[2.25;3.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`KREUZ01;[[0.25;2.1];[2.25;2.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`KREUZ01;[[0.25;1.1];[2.25;1.9]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@KoordText(`KREUZ01;[0;5.9];$\Large \vec{a}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[2.5;5.9];$\Large \vec{b}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[0;5];$\Large 2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[0;4];$\Large 3$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[0;3];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[0;2];$\Large 2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[0;1];$\Large 3$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[0;0];$\Large 4$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[2.5;5];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[2.5;4];$\Large 6$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[2.5;3];$\Large 7$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[2.5;2];$\Large 5$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[2.5;1];$\Large 6$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[2.5;0];$\Large 7$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[3.65;3.5];$\Large c_1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[3.65;2.5];$\Large c_2$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`KREUZ01;[3.65;1.5];$\Large c_3$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`KREUZ01;[[-0.35;5];[2.85;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`KREUZ01;[[-0.35;0];[2.85;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)

</center>

Für das dargestellte Zahlenbeispiel ergibt sich:

$$
\begin{aligned}
\begin{pmatrix}2\\3\\4\end{pmatrix}
\times
\begin{pmatrix}5\\6\\7\end{pmatrix}
&=\begin{pmatrix}
3\cdot7-4\cdot6\\
4\cdot5-2\cdot7\\
2\cdot6-3\cdot5
\end{pmatrix}\\
&=\begin{pmatrix}-3\\6\\-3\end{pmatrix}.
\end{aligned}
$$

{{|>}} Im zweidimensionalen Raum gibt es eine verwandte skalare Größe. Für zwei ebene Vektoren ist die Determinante

$$
\det\begin{pmatrix}x&a\\y&b\end{pmatrix}=xb-ay.
$$

Ihr Betrag ist der Flächeninhalt des aufgespannten Parallelogramms; ihr Vorzeichen beschreibt dessen Orientierung. Sie ist weder ein zweidimensionaler Normalenvektor noch allein die Höhe des Parallelogramms.

Ergänzt man beide Vektoren um eine dritte Komponente $0$, erhält man das gewöhnliche dreidimensionale Vektorprodukt:

$$
\begin{pmatrix}x\\y\\0\end{pmatrix}
\times
\begin{pmatrix}a\\b\\0\end{pmatrix}
=
\begin{pmatrix}0\\0\\xb-ay\end{pmatrix}.
$$

Für linear unabhängige Ausgangsvektoren zeigt dieses Ergebnis aus der ursprünglichen Ebene heraus oder in sie hinein.

In $\mathbb{R}^n$ lässt sich über Determinanten außerdem ein verallgemeinertes Produkt von $n-1$ Vektoren definieren. Sein Ergebnis ist zu allen Eingabevektoren orthogonal. Sind diese linear unabhängig, ist der Ergebnisvektor von null verschieden. Für $n>3$ handelt es sich also nicht mehr um denselben zweistelligen Operator wie beim hier betrachteten Vektorprodukt in $\mathbb{R}^3$.

Im eindimensionalen Raum gibt es zu einem von null verschiedenen Vektor keinen ebenfalls von null verschiedenen orthogonalen Vektor. Das liegt an der Dimension des Raumes, nicht an einem Verbot eindimensionaler Determinanten: Auch $1\times1$-Matrizen besitzen eine Determinante.

{{|>}} Das Vektorprodukt besitzt die folgenden Recheneigenschaften. Dabei sind $\vec{a},\vec{b},\vec{c}\in\mathbb{R}^3$ und $\lambda\in\mathbb{R}$.

Das Produkt eines Vektors mit einem Vielfachen desselben Vektors ist der Nullvektor:

$$
\vec{a}\times(\lambda\vec{a})=\vec{0}.
$$

Beim Vertauschen der Faktoren ändert sich das Vorzeichen. Das Vektorprodukt ist antikommutativ:

$$
\vec{a}\times\vec{b}=-(\vec{b}\times\vec{a}).
$$

Ein skalarer Faktor kann vor das Vektorprodukt gezogen werden. Es ist homogen in beiden Faktoren:

$$
\lambda(\vec{a}\times\vec{b})
=(\lambda\vec{a})\times\vec{b}
=\vec{a}\times(\lambda\vec{b}).
$$

Außerdem gilt das Distributivgesetz:

$$
\vec{a}\times(\vec{b}+\vec{c})
=\vec{a}\times\vec{b}+\vec{a}\times\vec{c}.
$$

Besonders wichtig sind die folgenden Spezialfälle:

$$
\begin{aligned}
\vec{a}\perp\vec{b}
&\ \Rightarrow\ |\vec{a}\times\vec{b}|=|\vec{a}|\,|\vec{b}|,\\
\vec{a}\parallel\vec{b}
&\ \Rightarrow\ \vec{a}\times\vec{b}=\vec{0},\\
\vec{a}=\vec{b}
&\ \Rightarrow\ \vec{a}\times\vec{a}=\vec{0},\\
\vec{a}=\vec{0}\ \lor\ \vec{b}=\vec{0}
&\ \Rightarrow\ \vec{a}\times\vec{b}=\vec{0}.
\end{aligned}
$$

Bei parallelen oder antiparallelen Vektoren verschwindet das Vektorprodukt. Allgemein ist es genau dann der Nullvektor, wenn die beiden Vektoren linear abhängig sind.

{{|>}} Für mehrfach auftretende Vektorprodukte sind drei Identitäten besonders nützlich. Die Klammern müssen dabei beachtet werden.

Die Jacobi-Identität lautet:

$$
\begin{aligned}
&\vec{a}\times(\vec{b}\times\vec{c})
+\vec{b}\times(\vec{c}\times\vec{a})\\
&\qquad+\vec{c}\times(\vec{a}\times\vec{b})
=\vec{0}.
\end{aligned}
$$

Die Graßmann-Identität führt ein doppeltes Vektorprodukt auf Skalarprodukte und skalare Vielfache zurück:

$$
\vec{a}\times(\vec{b}\times\vec{c})
=\vec{b}(\vec{a}\cdot\vec{c})
-\vec{c}(\vec{a}\cdot\vec{b}).
$$

Die Lagrange-Identität beschreibt das Skalarprodukt zweier Vektorprodukte:

$$
\begin{aligned}
(\vec{a}\times\vec{b})\cdot(\vec{c}\times\vec{d})
&=(\vec{a}\cdot\vec{c})(\vec{b}\cdot\vec{d})\\
&\qquad-(\vec{a}\cdot\vec{d})(\vec{b}\cdot\vec{c}).
\end{aligned}
$$

Der Punkt auf der linken Seite ist ausdrücklich ein Skalarprodukt. Beide Seiten sind daher Skalare.

Setzt man $\vec{c}=\vec{a}$ und $\vec{d}=\vec{b}$, erhält man:

$$
\begin{aligned}
|\vec{a}\times\vec{b}|^2
&=(\vec{a}\cdot\vec{a})(\vec{b}\cdot\vec{b})
-(\vec{a}\cdot\vec{b})^2\\
&=|\vec{a}|^2|\vec{b}|^2-(\vec{a}\cdot\vec{b})^2.
\end{aligned}
$$

Für zwei von null verschiedene Vektoren gilt $\vec{a}\cdot\vec{b}=|\vec{a}|\,|\vec{b}|\cos\varphi$. Zusammen mit $\sin^2\varphi+\cos^2\varphi=1$ folgt:

$$
\begin{aligned}
|\vec{a}\times\vec{b}|^2
&=|\vec{a}|^2|\vec{b}|^2(1-\cos^2\varphi)\\
&=|\vec{a}|^2|\vec{b}|^2\sin^2\varphi.
\end{aligned}
$$

Da der eingeschlossene Winkel im Bereich $0^\circ\leq\varphi\leq180^\circ$ liegt, ist $\sin\varphi\geq0$. Durch Wurzelziehen ergibt sich:

$$
|\vec{a}\times\vec{b}|
=|\vec{a}|\,|\vec{b}|\sin\varphi.
$$

{{|>}} Diese Gleichung lässt sich geometrisch mit einem rechtwinkligen Dreieck deuten. Die folgende Zeichnung zeigt zwei Vektoren in einer Ebene. Die Spitze von $\vec{b}$ wird orthogonal auf die Gerade in Richtung von $\vec{a}$ projiziert. Die violette Strecke ist die Höhe $h$.

<center>

@Koordinatensystem(`xmin=-0.7;xmax=6.7;ymin=-0.7;ymax=6.7;width=620;id=KREUZ02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=KREUZ02;xlabel=$\Large x$;ylabel=$\Large y$`)

@Punkt(`KREUZ02;S;1;1;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Punkt(`KREUZ02;A;5;1;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Punkt(`KREUZ02;B;3;5;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Winkel(`KREUZ02;phi=0;[A;S;B];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0.8`)
@Strecke(`KREUZ02;[[3;5];[3;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);;-;3px`)
@Strecke(`KREUZ02;[[2.75;1];[2.75;1.25];[3;1.25]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Vektor(`KREUZ02;[[1;1];[3;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);b=0`)
@Vektor(`KREUZ02;[[1;1];[5;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);a=0`)
@KoordText(`KREUZ02;[1.65;3.1];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`KREUZ02;[4.4;0.65];$\Large \vec{a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`KREUZ02;[2.1;1.65];$\Large \varphi$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`KREUZ02;[4.5;3.1];$\Large h=|\vec{b}|\sin\varphi$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)

</center>

Für die Höhe gilt:

$$
h=|\vec{b}|\sin\varphi.
$$

Die Höhe allein ist noch nicht der Betrag des Vektorprodukts. Erst die Multiplikation mit der Grundseitenlänge $|\vec{a}|$ ergibt diesen Betrag:

$$
|\vec{a}\times\vec{b}|=|\vec{a}|\,h.
$$

Verschiebt man die beiden Vektorpfeile parallel an die jeweils andere Spitze, entsteht das zugehörige Parallelogramm:

<center>

@Koordinatensystem(`xmin=0.1;xmax=8.6;ymin=0.2;ymax=5.8;width=720;id=KREUZ03;achsen=0;grid=0;border=0;static=1`)

@Punkt(`KREUZ03;S;1;1;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Punkt(`KREUZ03;A;5;1;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Punkt(`KREUZ03;B;3;5;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Flaeche(`KREUZ03;[[1;1];[5;1];[7;5];[3;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);0.18`)
@Winkel(`KREUZ03;phi=0;[A;S;B];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0.8`)
@Strecke(`KREUZ03;[[3;5];[3;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);;-;3px`)
@Strecke(`KREUZ03;[[2.75;1];[2.75;1.25];[3;1.25]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Vektor(`KREUZ03;[[1;1];[3;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);b1=0`)
@Vektor(`KREUZ03;[[5;1];[7;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);b2=0`)
@Vektor(`KREUZ03;[[1;1];[5;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);a1=0`)
@Vektor(`KREUZ03;[[3;5];[7;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);a2=0`)
@KoordText(`KREUZ03;[1.65;3.1];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`KREUZ03;[6.4;3.1];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`KREUZ03;[4.4;0.65];$\Large \vec{a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`KREUZ03;[5;5.35];$\Large \vec{a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`KREUZ03;[2.1;1.65];$\Large \varphi$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`KREUZ03;[4.5;3.1];$\Large h=|\vec{b}|\sin\varphi$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)

</center>

Der Flächeninhalt des Parallelogramms ist Grundseitenlänge mal Höhe. Damit lautet die Gleichung zur Flächenberechnung:

$$
A=|\vec{a}|\,h
=|\vec{a}|\,|\vec{b}|\sin\varphi
=|\vec{a}\times\vec{b}|.
$$

Das Vektorprodukt selbst ist ein Vektor, sein Betrag dagegen ein Flächenmaß. Bei parallel gerichteten Ausgangsvektoren oder einem Nullvektor ist das Parallelogramm entartet und der Flächeninhalt gleich $0$; ein Winkel mit dem Nullvektor ist nicht definiert.

***************************
