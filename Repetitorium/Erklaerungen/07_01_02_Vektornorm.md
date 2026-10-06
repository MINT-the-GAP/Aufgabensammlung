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













tags: Erklärung, Vektornorm, Einheitsvektor

comment: In diesem Abschnitt werden die Addition und Subtraktion von Vektoren veranschaulicht, ihre Länge mit der euklidischen Norm berechnet und Vektoren zu Einheitsvektoren normiert.

author: Martin Lommatzsch

-->

# Länge von Vektoren

{{|>}}
***************************

Ein Vektor beschreibt eine Verschiebung mit einer bestimmten Richtung und Länge. Um seine Eigenschaften zu veranschaulichen, betrachten wir zunächst ein zweidimensionales kartesisches Koordinatensystem. Seine Koordinatenrichtungen sind orthogonal und verwenden dieselbe Längeneinheit.

Der dargestellte Vektor führt vom Ursprung aus drei Einheiten in die positive Abszissenrichtung und vier Einheiten in die positive Ordinatenrichtung:

<center>

@Koordinatensystem(`xmin=-0.8;xmax=6.7;ymin=-0.8;ymax=6.7;width=620;id=VEKTORNORM01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VEKTORNORM01;xlabel=$\Large x$;ylabel=$\Large y$`)

@Vektor(`VEKTORNORM01;[[0;0];[3;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);c=0`)
@KoordText(`VEKTORNORM01;[1.1;2.25];$\Large \vec{c}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Seine Komponenten lassen sich als Summe zweier Vektoren in den Koordinatenrichtungen schreiben:

$$
\vec{c}
=\begin{pmatrix}3\\4\end{pmatrix}
=\begin{pmatrix}3\\0\end{pmatrix}
+\begin{pmatrix}0\\4\end{pmatrix}
=\vec{a}+\vec{b}.
$$

{{|>}} Bei der Vektoraddition wird der Anfang des zweiten Pfeils an die Spitze des ersten gesetzt. Eine Parallelverschiebung des Pfeils ändert den Vektor nicht. Die durchgezogenen Pfeile zeigen zuerst $\vec{a}$ und dann $\vec{b}$; die gestrichelten Pfeile zeigen die umgekehrte Reihenfolge.

<center>

@Koordinatensystem(`xmin=-0.8;xmax=6.7;ymin=-0.8;ymax=6.7;width=620;id=VEKTORNORM02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=VEKTORNORM02;xlabel=$\Large x$;ylabel=$\Large y$`)

@Strecke(`VEKTORNORM02;[[2.75;0];[2.75;0.25];[3;0.25]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)

@Vektor(`VEKTORNORM02;[[0;0];[0;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);b2=0;linestyle=dashed`)
@Vektor(`VEKTORNORM02;[[0;4];[3;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);a2=0;linestyle=dashed`)
@Vektor(`VEKTORNORM02;[[0;0];[3;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);a1=0`)
@Vektor(`VEKTORNORM02;[[3;0];[3;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);b1=0`)
@Vektor(`VEKTORNORM02;[[0;0];[3;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);c=0`)
@KoordText(`VEKTORNORM02;[1.5;0.3];$\Large \vec{a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VEKTORNORM02;[3.3;2];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`VEKTORNORM02;[0.3;2];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`VEKTORNORM02;[1.5;4.3];$\Large \vec{a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VEKTORNORM02;[1.1;2.25];$\Large \vec{c}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Beide Wege führen zum selben Endpunkt. Die Vektoraddition ist kommutativ:

$$
\vec{c}=\vec{a}+\vec{b}=\vec{b}+\vec{a}.
$$

{{|>}} Bei der Subtraktion wird der Gegenvektor addiert. Der Gegenvektor $-\vec{b}$ hat dieselbe Länge wie $\vec{b}$ und zeigt bei $\vec{b}\ne\vec{0}$ in die entgegengesetzte Richtung:

$$
\vec{a}-\vec{b}=\vec{a}+(-\vec{b}).
$$

Das folgende Parallelogramm verdeutlicht Addition und Subtraktion für ein neues Vektorpaar:

$$
\vec{a}=\begin{pmatrix}5\\0\end{pmatrix},
\qquad
\vec{b}=\begin{pmatrix}3\\4\end{pmatrix}.
$$

<center>

@Koordinatensystem(`xmin=-1.4;xmax=8.9;ymin=-4.8;ymax=5;width=720;id=VEKTORNORM03;achsen=0;grid=0;border=0;static=1`)

@Vektor(`VEKTORNORM03;[[0;0];[5;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);a1=0`)
@Vektor(`VEKTORNORM03;[[0;0];[3;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);b1=0`)
@Vektor(`VEKTORNORM03;[[5;0];[8;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);b2=0`)
@Vektor(`VEKTORNORM03;[[3;4];[8;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);a2=0`)
@Vektor(`VEKTORNORM03;[[0;0];[8;4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);summe=0`)
@Vektor(`VEKTORNORM03;[[3;4];[5;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);differenz=0`)
@Vektor(`VEKTORNORM03;[[5;0];[2;-4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);gegenvektor=0;linestyle=dashed`)
@Vektor(`VEKTORNORM03;[[0;0];[2;-4]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);differenz2=0;linestyle=dashed`)

@KoordText(`VEKTORNORM03;[2.5;0.35];$\Large \vec{a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VEKTORNORM03;[5.5;4.35];$\Large \vec{a}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`VEKTORNORM03;[1.05;2.25];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VEKTORNORM03;[7;1.75];$\Large \vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VEKTORNORM03;[6.65;2.9];$\Large \vec{a}+\vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`VEKTORNORM03;[5;1.7];$\Large \vec{a}-\vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)
@KoordText(`VEKTORNORM03;[4.4;-1.9];$\Large -\vec{b}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`VEKTORNORM03;[0;-2.4];$\Large \vec{a}+(-\vec{b})$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #b54bff);1`)

</center>

Die orangefarbene Diagonale stellt $\vec{a}+\vec{b}$ dar. Die violette Diagonale führt von der Spitze von $\vec{b}$ zur Spitze von $\vec{a}$ und stellt deshalb $\vec{a}-\vec{b}$ dar. Der gestrichelte violette Pfeil ist derselbe Differenzvektor, nur parallel verschoben. Seine Entstehung als $\vec{a}+(-\vec{b})$ ist am gestrichelten roten Gegenvektor zu erkennen.

{{|>}} Die Länge eines Vektors wird durch seine euklidische Norm, auch Betrag genannt, beschrieben. Dafür werden unter anderem die Schreibweisen $\|\vec{a}\|_V$, $\|\vec{a}\|_2$ und $|\vec{a}|$ verwendet. In diesem Abschnitt ist damit stets die euklidische Norm gemeint:

$$
\|\vec{a}\|_V=\|\vec{a}\|_2=|\vec{a}|
=\sqrt{\vec{a}\cdot\vec{a}}.
$$

Der Punkt zwischen den Vektoren bezeichnet das Skalarprodukt. Das Skalarprodukt eines Vektors mit sich selbst ist eine nichtnegative Zahl. Die Schreibweise erinnert an den Betrag einer reellen Zahl:

$$
|x|=\sqrt{x^2}.
$$

Für das Skalarprodukt der kartesischen Standardbasisvektoren gilt:

$$
\hat{e}_i\cdot\hat{e}_i=1,
\qquad
\hat{e}_i\cdot\hat{e}_j=0
\quad(i\ne j).
$$

Sie haben also jeweils die Länge $1$ und sind paarweise orthogonal. Deshalb verschwinden beim Ausmultiplizieren die gemischten Produkte verschiedener Basisvektoren.

{{|>}} Für den Vektor $\vec{d}=\begin{pmatrix}3\\0\end{pmatrix}$ ergibt sich beispielsweise:

$$
\begin{aligned}
d=|\vec{d}|
&=\left|\begin{pmatrix}3\\0\end{pmatrix}\right|\\
&=\sqrt{
\begin{pmatrix}3\\0\end{pmatrix}
\cdot
\begin{pmatrix}3\\0\end{pmatrix}}\\
&=\sqrt{
(3\hat{e}_1+0\hat{e}_2)
\cdot
(3\hat{e}_1+0\hat{e}_2)}\\
&=\sqrt{
9(\hat{e}_1\cdot\hat{e}_1)
+0(\hat{e}_2\cdot\hat{e}_2)}\\
&=\sqrt{9}=3.
\end{aligned}
$$

{{|>}} Die Berechnung der Vektorlänge entspricht dem Satz des Pythagoras. Beim Vektor $\vec{c}$ aus den ersten beiden Abbildungen bilden die beiden Komponentenvektoren die orthogonalen Katheten eines rechtwinkligen Dreiecks. Die Länge des Summenvektors ist die Hypotenusenlänge:

$$
|\vec{c}|
=\left|\begin{pmatrix}3\\4\end{pmatrix}\right|
=\sqrt{3^2+4^2}
=\sqrt{25}=5.
$$

Die Zahlen beziehen sich auf die gewählte Längeneinheit: Dieser Vektor ist fünf Längeneinheiten lang. Seine Länge ist nicht die Summe der Komponenten $3+4$.

In drei Dimensionen wird der Satz des Pythagoras zweimal angewendet. Für $\vec{r}=\begin{pmatrix}x\\y\\z\end{pmatrix}$ folgt:

$$
r=|\vec{r}|=\sqrt{x^2+y^2+z^2}.
$$

Dasselbe gilt in der Schreibweise mit Basisvektoren:

$$
\begin{aligned}
\vec{r}&=a\hat{e}_1+b\hat{e}_2+c\hat{e}_3,\\
|\vec{r}|&=\sqrt{a^2+b^2+c^2}.
\end{aligned}
$$

Entscheidend ist eine orthonormale Basis: Die Basisvektoren müssen paarweise orthogonal sein und jeweils die Länge $1$ haben. Die Komponenten werden jeweils mit sich selbst multipliziert und die Ergebnisse addiert; anschließend wird die nichtnegative Quadratwurzel gezogen. Auch negative Komponenten liefern durch das Quadrieren einen nichtnegativen Beitrag. Nur der Nullvektor hat die Länge $0$.

{{|>}} Einheitsvektoren werden auch normierte Vektoren genannt, weil ihre Länge genau $1$ beträgt. Aus einem Vektor $\vec{r}\ne\vec{0}$ erhält man einen Einheitsvektor in derselben Richtung, indem man alle Komponenten durch seinen Betrag teilt:

$$
\hat{e}_r=\frac{1}{|\vec{r}|}\,\vec{r},
\qquad
\vec{r}\ne\vec{0}.
$$

Da $|\vec{r}|>0$ ist, bleibt die Orientierung erhalten. Die Länge des normierten Vektors ist:

$$
|\hat{e}_r|
=\left|\frac{1}{|\vec{r}|}\vec{r}\right|
=\frac{|\vec{r}|}{|\vec{r}|}=1.
$$

Für den Vektor $\vec{c}=\begin{pmatrix}3\\4\end{pmatrix}$ lautet der zugehörige Einheitsvektor:

$$
\hat{e}_c
=\frac15\begin{pmatrix}3\\4\end{pmatrix}
=\begin{pmatrix}\frac35\\[2pt]\frac45\end{pmatrix},
\qquad
|\hat{e}_c|
=\sqrt{\left(\frac35\right)^2+\left(\frac45\right)^2}
=1.
$$

Der Nullvektor kann nicht auf diese Weise normiert werden: Sein Betrag ist $0$, und eine Division durch null ist nicht definiert.

***************************
