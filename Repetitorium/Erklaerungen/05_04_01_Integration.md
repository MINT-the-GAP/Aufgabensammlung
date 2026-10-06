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













tags: Erklärung, Integration

comment: In diesem Abschnitt werden Stammfunktionen, bestimmte und unbestimmte Integrale sowie Flächeninhalte zwischen Funktionsgraphen erklärt.

author: Martin Lommatzsch

-->

# Integration

{{|>}}
***************************

Nachdem die [Differentiation](05_01_01_Differentiation.md) zur Bestimmung der Steigung eines Funktionsgraphen eingeführt wurde, soll nun eine weitere Eigenschaft untersucht werden: der Flächeninhalt zwischen dem Graphen und der Abszissenachse.

Sei zunächst die Funktion $f(x)=1$ gegeben. Gesucht ist der Flächeninhalt von $x=0$ bis $x=x_0$ mit $x_0\ge 0$. Die rote Strecke markiert die rechte Begrenzung; in der Abbildung ist beispielhaft $x_0=3$ gewählt.

<center>

@Koordinatensystem(`xmin=-0.6;xmax=4.4;ymin=-0.4;ymax=1.8;width=680;id=INTEGRATION01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=INTEGRATION01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`INTEGRATION01;f=0;1;rgb(var(--color-text,51,51,51));linestyle=solid`)
@Strecke(`INTEGRATION01;[[3;0];[3;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@KoordText(`INTEGRATION01;[2;1.25];$\Large f(x)=1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`INTEGRATION01;[3.3;0.2];$\Large x_0$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Die eingeschlossene Fläche ist ein Rechteck. Ihre Höhe beträgt $1$, ihre Breite $x$. Daher ist die Flächeninhaltsfunktion für $x\ge 0$ gegeben durch:

$$
\begin{aligned}
F(x)&=1\cdot x=x,\\
F(x_0)&=x_0.
\end{aligned}
$$

Die Ableitung dieser Flächeninhaltsfunktion ist wieder die Ausgangsfunktion:

$$
F'(x)=1=f(x).
$$

{{|>}} Als weiteres Beispiel sei $g(x)=x$ gegeben. Wieder wird der Flächeninhalt zwischen dem Graphen, der Abszissenachse und den Grenzen $0$ und $x\ge 0$ betrachtet. Die roten Hilfslinien veranschaulichen die Zerlegung der Dreiecksflächen bei den Stellen $1$, $2$ und $3$.

<center>

@Koordinatensystem(`xmin=-0.6;xmax=4.1;ymin=-0.6;ymax=4.1;width=680;id=INTEGRATION02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=INTEGRATION02;xlabel=$\Large x$;ylabel=$\Large y$`)

@Strecke(`INTEGRATION02;[[1;0];[1;1];[3;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`INTEGRATION02;[[2;0];[2;2];[3;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`INTEGRATION02;[[3;0];[3;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`INTEGRATION02;[[1;0];[3;2]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`INTEGRATION02;[[2;1];[3;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@PlotFunktion(`INTEGRATION02;g=0;x;rgb(var(--color-text,51,51,51));linestyle=solid`)
@KoordText(`INTEGRATION02;[1.65;3.2];$\Large g(x)=x$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Die Fläche bildet ein Dreieck mit Grundseite $x$ und Höhe $g(x)=x$. Somit lautet die Flächeninhaltsfunktion:

$$
\begin{aligned}
G(x)&=\frac{g(x)\cdot x}{2}\\
&=\frac{1}{2}x^2.
\end{aligned}
$$

Auch hier liefert das Ableiten wieder die Ausgangsfunktion:

$$
G'(x)=\frac{1}{2}\cdot 2x=x=g(x).
$$

{{|>}} Diese Beobachtung führt zur Integration. Eine Funktion $F$ heißt Stammfunktion von $f$, wenn $F'(x)=f(x)$ gilt. Auch $F(x)+C$ hat dieselbe Ableitung, da die Ableitung einer konstanten Zahl $C$ null ist.

Das unbestimmte Integral beschreibt die Gesamtheit der Stammfunktionen auf einem Intervall:

$$
\int f(x)\,dx=F(x)+C.
$$

Dies wird gelesen als „Das Integral über $f(x)$ nach $x$“. Das Zeichen $dx$ kennzeichnet die Integrationsvariable. Bei den beiden Flächeninhaltsfunktionen wurde die Konstante bereits durch $F(0)=0$ beziehungsweise $G(0)=0$ festgelegt.

{{|>}} Wird zwischen zwei festen Grenzen $a$ und $b$ integriert, handelt es sich um ein bestimmtes Integral. Für eine auf $[a,b]$ stetige Funktion $f$ und eine Stammfunktion $F$ gilt:

$$
\int_a^b f(x)\,dx
=\bigl[F(x)\bigr]_a^b
=F(b)-F(a).
$$

Man liest „Das Integral über $f(x)$ nach $x$ von $a$ bis $b“. Bei der Auswertung wird der Stammfunktionswert an der unteren Grenze vom Wert an der oberen Grenze abgezogen. Die Integrationskonstante fällt in dieser Differenz weg.

{{|>}} Wie beim Ableiten können Summanden einzeln behandelt werden. Sind $F$ und $G$ Stammfunktionen von $f$ und $g$, gilt:

$$
\begin{aligned}
\int\bigl(f(x)+g(x)\bigr)\,dx
&=\int f(x)\,dx+\int g(x)\,dx\\
&=F(x)+G(x)+C.
\end{aligned}
$$

Die Konstanten der beiden einzelnen Stammfunktionen werden dabei zu einer Konstante $C$ zusammengefasst.

{{|>}} Bei der bestimmten Integration ist das Vorzeichen wichtig. Für $a<b$ tragen Bereiche oberhalb der Abszissenachse positiv und Bereiche unterhalb negativ zum Integral bei. Das bestimmte Integral ist daher eine Flächenbilanz, nicht immer der gesamte geometrische Flächeninhalt. Der geometrische Flächeninhalt selbst ist nicht negativ.

Um die gesamte Fläche zu bestimmen, wird der Betrag des Integranden verwendet oder das Intervall an den Vorzeichenwechseln aufgeteilt. Auch das Vertauschen der Integrationsgrenzen verändert das Vorzeichen:

$$
\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx.
$$

{{|>}} Die folgende Abbildung zeigt wie im Beispiel die Gerade $f(x)=1-x$. Die Grenzen sind $a=-2$ und $c=2$, die Nullstelle liegt bei $b=1$. Zwischen $a$ und $b$ liegt der Graph oberhalb, zwischen $b$ und $c$ unterhalb der Abszissenachse.

<center>

@Koordinatensystem(`xmin=-3.2;xmax=3.2;ymin=-2.6;ymax=3.8;width=680;id=INTEGRATION03;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=INTEGRATION03;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`INTEGRATION03;f=0;1-x;rgb(var(--color-text,51,51,51));linestyle=solid`)
@Strecke(`INTEGRATION03;[[-2;0];[-2;3]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`INTEGRATION03;[[2;0];[2;-1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Punkt(`INTEGRATION03;N=0;1;0;rgb(var(--color-text,51,51,51));1;fix`)
@KoordText(`INTEGRATION03;[-2;-0.55];$\Large a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`INTEGRATION03;[1;0.4];$\Large b$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`INTEGRATION03;[2;0.4];$\Large c$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`INTEGRATION03;[2.45;-2];$\Large f(x)$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Unter den Bedingungen $a<b<c$, $f(x)\ge 0$ auf $[a,b]$ und $f(x)\le 0$ auf $[b,c]$ ergibt sich der gesamte Flächeninhalt:

$$
\begin{aligned}
A
&=\int_a^c |f(x)|\,dx\\
&=\int_a^b |f(x)|\,dx+\int_b^c |f(x)|\,dx\\
&=\int_a^b f(x)\,dx-\int_b^c f(x)\,dx\\
&=\int_a^b f(x)\,dx+\int_c^b f(x)\,dx.
\end{aligned}
$$

Das negative Teilintegral wird also mit umgekehrtem Vorzeichen zum Flächeninhalt addiert. Der Betrag des gesamten Integrals allein genügt bei einem Vorzeichenwechsel im Allgemeinen nicht, weil sich positive und negative Beiträge vorher gegenseitig aufheben können.

{{|>}} Soll der eingeschlossene Flächeninhalt zwischen zwei Funktionsgraphen bestimmt werden, werden zunächst deren Schnittpunkte ermittelt. Ihre Abszissen bilden die Integrationsgrenzen der eingeschlossenen Teilflächen.

Die Abbildung zeigt die Funktionen $f(x)=\frac{1}{2}x^2-3x+5$ und $g(x)=\frac{1}{2}x+1$. Die Schnittstellen werden mit $x_{\times_1}$ und $x_{\times_2}$ bezeichnet.

<center>

@Koordinatensystem(`xmin=-0.6;xmax=6.6;ymin=-0.8;ymax=6.4;width=680;id=INTEGRATION04;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=INTEGRATION04;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`INTEGRATION04;f=0;0.5*x^2-3*x+5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`INTEGRATION04;g=0;0.5*x+1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`INTEGRATION04;S1=0;1.43844718719117;1.719223593595585;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`INTEGRATION04;S2=0;5.56155281280883;3.780776406404415;rgb(var(--color-text,51,51,51));1;fix`)
@Strecke(`INTEGRATION04;[[1.43844718719117;0];[1.43844718719117;1.719223593595585]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`INTEGRATION04;[[5.56155281280883;0];[5.56155281280883;3.780776406404415]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@KoordText(`INTEGRATION04;[1.43844718719117;-0.5];$\Large x_{\times_1}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`INTEGRATION04;[5.56155281280883;-0.5];$\Large x_{\times_2}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`INTEGRATION04;[5.5;5.3];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`INTEGRATION04;[4.3;3.65];$\Large g(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Zwischen den beiden benachbarten Schnittstellen liegt $g$ oberhalb von $f$. Der gesuchte Flächeninhalt entsteht daher, indem der niedrigere Funktionswert vom höheren abgezogen und die Differenz integriert wird:

$$
\begin{aligned}
A
&=\int_{x_{\times_1}}^{x_{\times_2}}
\bigl(g(x)-f(x)\bigr)\,dx\\
&=\left|
\int_{x_{\times_1}}^{x_{\times_2}} f(x)\,dx
-\int_{x_{\times_1}}^{x_{\times_2}} g(x)\,dx
\right|\\
&=\int_{x_{\times_1}}^{x_{\times_2}}
|f(x)-g(x)|\,dx.
\end{aligned}
$$

Die Gleichheit mit dem Betrag der Differenz der beiden Integrale gilt hier, weil die Graphen innerhalb dieses Intervalls ihre Reihenfolge nicht wechseln. Bei mehreren Schnittstellen werden die Teilintervalle entsprechend getrennt betrachtet.

Bei der Flächenbestimmung gilt also stets: obere Funktion minus untere Funktion. Dieser Unterschied der Funktionswerte steht unter dem Integral und wird Integrand genannt.

***************************
