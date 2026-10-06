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













tags: Erklärung, Skalarprodukt

comment: In diesem Abschnitt wird das Skalarprodukt mit dem Kosinussatz hergeleitet, als orthogonale Projektion gedeutet und zur Untersuchung von Winkeln und Orthogonalität verwendet.

author: Martin Lommatzsch

-->

# Skalarprodukt

{{|>}}
***************************

Wie bei der Addition von Vektoren werden auch beim Skalarprodukt die jeweiligen Komponenten miteinander verrechnet: Zusammengehörige Komponenten werden multipliziert und die Produkte addiert. Das Ergebnis ist ein Skalar, also eine Zahl, und kein Vektor. Für reelle Vektoren in einem kartesischen Koordinatensystem gilt:

$$
\vec{a}\cdot\vec{b}=a_xb_x+a_yb_y+a_zb_z.
$$

Im zweidimensionalen Fall entfällt der dritte Summand. Anders als ein Vektor hat das Ergebnis keine eigene Richtung. Es enthält aber Informationen über die Längen der beiden Vektoren und ihren eingeschlossenen Winkel:

$$
\varphi=\measuredangle(\vec{a},\vec{b}),
\qquad 0^\circ\leq\varphi\leq180^\circ.
$$

Dieser Winkel ist nur für $\vec{a}\ne\vec{0}$ und $\vec{b}\ne\vec{0}$ definiert. Verschiedene Standardbasisvektoren eines kartesischen Koordinatensystems sind orthogonal zueinander; beliebige Vektoren müssen dagegen keinen Winkel von $90^\circ$ einschließen.

{{|>}} Um den Zusammenhang zwischen Skalarprodukt und Winkel herzuleiten, betrachten wir zunächst zwei linear unabhängige Vektoren $\vec{a}$ und $\vec{b}$. Werden ihre Pfeile an denselben Anfangspunkt gesetzt, entsteht mit dem Differenzvektor $\vec{a}-\vec{b}$ ein Dreieck. Der Differenzpfeil führt von der Spitze von $\vec{b}$ zur Spitze von $\vec{a}$.

<center>

@Koordinatensystem(`xmin=-0.7;xmax=6.7;ymin=-0.7;ymax=6.7;width=620;id=SKALAR01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=SKALAR01;xlabel=$\Large x$;ylabel=$\Large y$`)

@Punkt(`SKALAR01;S;1;1;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Punkt(`SKALAR01;A;3;5;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Punkt(`SKALAR01;B;5;2;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Winkel(`SKALAR01;phi=0;[B;S;A];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0.8`)
@Vektor(`SKALAR01;[[1;1];[3;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);a=0`)
@Vektor(`SKALAR01;[[1;1];[5;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);b=0`)
@Vektor(`SKALAR01;[[5;2];[3;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);differenz=0`)
@KoordText(`SKALAR01;[1.65;3.1];$\Large \vec{a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SKALAR01;[3.6;1.3];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`SKALAR01;[4.8;3.75];$\Large \vec{a}-\vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`SKALAR01;[2;1.85];$\Large \varphi$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Der Kosinussatz verknüpft den Winkel $\varphi$ mit den drei Seitenlängen des Dreiecks. Diese Seitenlängen sind die Beträge der Vektoren. In drei Dimensionen lauten sie:

$$
\begin{aligned}
|\vec{a}|&=\sqrt{a_x^2+a_y^2+a_z^2},\\
|\vec{b}|&=\sqrt{b_x^2+b_y^2+b_z^2},\\
|\vec{a}-\vec{b}|
&=\sqrt{(a_x-b_x)^2+(a_y-b_y)^2+(a_z-b_z)^2}.
\end{aligned}
$$

Die zweidimensionale Zeichnung veranschaulicht dieselbe Beziehung; dort sind $a_z=b_z=0$. Nach dem Kosinussatz gilt:

$$
|\vec{a}-\vec{b}|^2
=|\vec{a}|^2+|\vec{b}|^2-2|\vec{a}|\,|\vec{b}|\cos\varphi.
$$

Durch Einsetzen der Komponenten ergibt sich:

$$
\begin{aligned}
&(a_x-b_x)^2+(a_y-b_y)^2+(a_z-b_z)^2\\
&\qquad=a_x^2+a_y^2+a_z^2+b_x^2+b_y^2+b_z^2\\
&\qquad\phantom{={}}-2|\vec{a}|\,|\vec{b}|\cos\varphi.
\end{aligned}
$$

Wir multiplizieren die Quadrate auf der linken Seite aus:

$$
\begin{aligned}
&a_x^2+a_y^2+a_z^2+b_x^2+b_y^2+b_z^2\\
&\qquad-2a_xb_x-2a_yb_y-2a_zb_z\\
&\quad=a_x^2+a_y^2+a_z^2+b_x^2+b_y^2+b_z^2\\
&\qquad-2|\vec{a}|\,|\vec{b}|\cos\varphi.
\end{aligned}
$$

Die Quadrate der Komponenten stehen auf beiden Seiten und können subtrahiert werden. Anschließend wird durch $-2$ dividiert:

$$
\begin{aligned}
-2a_xb_x-2a_yb_y-2a_zb_z
&=-2|\vec{a}|\,|\vec{b}|\cos\varphi,\\
a_xb_x+a_yb_y+a_zb_z
&=|\vec{a}|\,|\vec{b}|\cos\varphi.
\end{aligned}
$$

Damit stimmen die Berechnung aus den Komponenten und die geometrische Darstellung überein:

$$
\vec{a}\cdot\vec{b}
=a_xb_x+a_yb_y+a_zb_z
=|\vec{a}|\,|\vec{b}|\cos\varphi.
$$

Diese Beziehung gilt auch für parallele und antiparallele Vektoren, obwohl sie kein echtes Dreieck aufspannen. Für zwei von null verschiedene Vektoren lässt sich daraus der Winkel bestimmen:

$$
\varphi=\arccos\left(
\frac{\vec{a}\cdot\vec{b}}{|\vec{a}|\,|\vec{b}|}
\right).
$$

{{|>}} Die geometrische Bedeutung des Skalarprodukts wird durch eine orthogonale Projektion deutlich. Zunächst sind noch einmal die beiden Vektoren mit ihrem gemeinsamen Anfangspunkt und dem eingeschlossenen Winkel dargestellt.

<center>

@Koordinatensystem(`xmin=-0.7;xmax=6.7;ymin=-0.7;ymax=6.7;width=620;id=SKALAR02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=SKALAR02;xlabel=$\Large x$;ylabel=$\Large y$`)

@Punkt(`SKALAR02;S;1;1;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Punkt(`SKALAR02;A;3;5;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Punkt(`SKALAR02;B;5;2;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Winkel(`SKALAR02;phi=0;[B;S;A];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0.8`)
@Vektor(`SKALAR02;[[1;1];[3;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);a=0`)
@Vektor(`SKALAR02;[[1;1];[5;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);b=0`)
@KoordText(`SKALAR02;[1.65;3.1];$\Large \vec{a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SKALAR02;[4.6;2.3];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`SKALAR02;[2;1.85];$\Large \varphi$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

Nun wird die Spitze von $\vec{a}$ orthogonal auf die Gerade in Richtung von $\vec{b}$ projiziert. Die gestrichelte Strecke und diese Gerade stehen im rechten Winkel zueinander. Die Vektoren selbst bleiben dabei unverändert.

<center>

@Koordinatensystem(`xmin=-0.7;xmax=6.7;ymin=-0.7;ymax=6.7;width=620;id=SKALAR03;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=SKALAR03;xlabel=$\Large x$;ylabel=$\Large y$`)

@Punkt(`SKALAR03;S;1;1;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Punkt(`SKALAR03;A;3;5;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Punkt(`SKALAR03;B;5;2;rgb(var(--color-text,51,51,51));0;opacity=0`)
@Winkel(`SKALAR03;phi=0;[B;S;A];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0.8`)
@Strecke(`SKALAR03;[[3;5];[3.8235294118;1.7058823529]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`SKALAR03;[[3.6235294118;1.6558823529];[3.5735294118;1.8558823529];[3.7735294118;1.9058823529]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Vektor(`SKALAR03;[[1;1];[3;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);a=0`)
@Vektor(`SKALAR03;[[1;1];[5;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);b=0`)
@Strecke(`SKALAR03;[[1;1];[3.8235294118;1.7058823529]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);;-;3px`)
@KoordText(`SKALAR03;[1.65;3.1];$\Large \vec{a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`SKALAR03;[4.6;2.3];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`SKALAR03;[2;1.85];$\Large \varphi$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`SKALAR03;[2.9;0.7];$\Large |\vec{a}|\cos\varphi$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)

</center>

Im entstandenen rechtwinkligen Dreieck ist $|\vec{a}|$ die Hypotenusenlänge. Für den hier dargestellten spitzen Winkel ist die violette Strecke die Ankathete mit der Länge $|\vec{a}|\cos\varphi$. Das Skalarprodukt ist diese Projektionslänge multipliziert mit $|\vec{b}|$.

Allgemein ist $|\vec{a}|\cos\varphi$ eine vorzeichenbehaftete skalare Projektion: Bei einem stumpfen Winkel liegt die Projektion entgegen der Richtung von $\vec{b}$ und der Wert ist negativ. Bei einem rechten Winkel ist er null.

{{|>}} Besonders wichtig sind drei Spezialfälle für zwei von null verschiedene Vektoren:

$$
\begin{aligned}
\varphi=90^\circ
&\ \Rightarrow\ \vec{a}\cdot\vec{b}
=|\vec{a}|\,|\vec{b}|\cos90^\circ=0,\\
\varphi=0^\circ
&\ \Rightarrow\ \vec{a}\cdot\vec{b}
=|\vec{a}|\,|\vec{b}|,\\
\varphi=180^\circ
&\ \Rightarrow\ \vec{a}\cdot\vec{b}
=-|\vec{a}|\,|\vec{b}|.
\end{aligned}
$$

Im ersten Fall sind die Vektoren orthogonal. Im zweiten Fall sind sie parallel und gleichgerichtet. Im dritten Fall sind sie parallel und entgegengerichtet; dies wird auch antiparallel genannt.

Die Orthogonalität kann direkt über die Komponenten geprüft werden:

$$
\vec{a}\perp\vec{b}
\quad\Longleftrightarrow\quad
\vec{a}\cdot\vec{b}=0.
$$

Algebraisch gilt auch der Nullvektor als orthogonal zu jedem Vektor, denn sein Skalarprodukt mit jedem Vektor ist null. Ein Winkel mit dem Nullvektor ist dennoch nicht definiert.

Für die kartesischen Standardbasisvektoren gilt deshalb:

$$
\hat{e}_i\cdot\hat{e}_j
=\begin{cases}
1,&i=j,\\
0,&i\ne j.
\end{cases}
$$

Verschiedene Standardbasisvektoren sind orthogonal. Ein Standardbasisvektor hat dagegen mit sich selbst das Skalarprodukt $1$, denn seine Länge beträgt $1$ und sein Winkel mit sich selbst ist $0^\circ$.

{{|>}} Das Skalarprodukt ist kommutativ. Die beiden Vektoren dürfen vertauscht werden:

$$
\vec{a}\cdot\vec{b}=\vec{b}\cdot\vec{a}.
$$

Ein Assoziativgesetz für drei hintereinander ausgeführte Skalarprodukte gibt es dagegen nicht: Schon das erste Skalarprodukt liefert einen Skalar. Ein weiteres Skalarprodukt zwischen diesem Skalar und einem Vektor ist nicht definiert.

Interpretiert man die jeweils äußere Multiplikation stattdessen als Multiplikation eines Vektors mit einem Skalar, sind beide Ausdrücke definiert, aber im Allgemeinen verschieden. Zum Beispiel gilt für $\vec{a}=\vec{b}=\hat{e}_x$ und $\vec{c}=\hat{e}_y$:

$$
\begin{aligned}
(\vec{b}\cdot\vec{c})\vec{a}&=0\vec{a}=\vec{0},\\
(\vec{a}\cdot\vec{b})\vec{c}&=1\vec{c}=\hat{e}_y.
\end{aligned}
$$

Das Umklammern kann also das Ergebnis verändern. Skalarprodukt und Multiplikation mit einem Skalar müssen unterschieden werden.

{{|>}} In weiterführenden Texten kommen verschiedene Schreibweisen für das Skalarprodukt vor. Neben dem Punkt wird häufig eine Klammernotation verwendet:

$$
\vec{a}\cdot\vec{b}=\langle\vec{a},\vec{b}\rangle.
$$

Auch die Zeichen $\circ$ und $\bullet$ werden gelegentlich dafür festgelegt. Wenn sie als Skalarprodukt definiert sind, gilt:

$$
\vec{a}\cdot\vec{b}
=\vec{a}\circ\vec{b}
=\vec{a}\bullet\vec{b}.
$$

Diese Zeichen können in anderen Zusammenhängen andere Operationen bezeichnen. Hier bleibt die Schreibweise $\vec{a}\cdot\vec{b}$ erhalten, um die Verbindung zur Multiplikation sichtbar zu machen. Der Skalarproduktoperator wird zwischen den Vektoren ausdrücklich geschrieben und nicht weggelassen.

***************************
