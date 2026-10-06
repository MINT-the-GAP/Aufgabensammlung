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













tags: Erklärung, Umkehrfunktion

comment: In diesem Abschnitt werden Umkehrfunktionen, die Einschränkung des Definitionsbereichs, die Spiegelung an der Geraden y=x und das algebraische Bestimmen einer Umkehrfunktion erklärt.

author: Martin Lommatzsch

-->

# Umkehrfunktionen

{{|>}}
***************************

Zu vielen Rechenoperationen kennen wir eine Umkehroperation. Eine Umkehrfunktion macht entsprechend die Zuordnung einer Funktion rückgängig: Aus $y=f(x)$ wird $x=f^{-1}(y)$.

Nicht jede Funktion besitzt auf ihrer gesamten Definitionsmenge eine Umkehrfunktion. Dafür muss jeder Wert aus der Wertemenge von $f$ zu genau einem Argument gehören. Unterschiedliche Argumente dürfen also nicht denselben Funktionswert haben. Ist diese Bedingung nicht erfüllt, kann eine geeignete Einschränkung der Definitionsmenge eine umkehrbare Funktion ergeben.

{{|>}} Beim Umkehren werden Definitionsmenge und Wertemenge vertauscht:

$$
\mathbb{D}_{f^{-1}}=\mathbb{W}_f,
\qquad
\mathbb{W}_{f^{-1}}=\mathbb{D}_f.
$$

Für alle jeweils zulässigen Argumente gelten die Beziehungen

$$
\begin{aligned}
f^{-1}\bigl(f(x)\bigr)&=x, &&x\in\mathbb{D}_f,\\
f\bigl(f^{-1}(y)\bigr)&=y, &&y\in\mathbb{W}_f.
\end{aligned}
$$

Setzt man einen Funktionswert in die Umkehrfunktion ein, erhält man also das ursprüngliche Argument zurück. Umgekehrt führt das Einsetzen eines Wertes der Umkehrfunktion in die ursprüngliche Funktion wieder zum Ausgangswert.

Die Schreibweise $f^{-1}$ bezeichnet hier die Umkehrfunktion, nicht den Kehrwert $\frac1{f(x)}$.

{{|>}} Als Beispiel betrachten wir $f(x)=x^2$. Auf ganz $\mathbb{R}$ ist diese Funktion nicht eindeutig umkehrbar, denn etwa $f(2)=f(-2)=4$. Beschränken wir die Definitionsmenge auf $[0;\infty)$, gehört dagegen zu jedem Funktionswert genau ein nichtnegatives Argument. Dann gilt

$$
f(x)=x^2,\qquad x\geq0,
\qquad\text{und}\qquad
f^{-1}(x)=\sqrt{x},\qquad x\geq0.
$$

Hier haben sowohl $f$ als auch $f^{-1}$ die Definitionsmenge und die Wertemenge $[0;\infty)$. Die beiden Mengen werden zwar vertauscht, müssen sich aber nicht unterscheiden.

<center>

@Koordinatensystem(`xmin=-0.5;xmax=4.8;ymin=-0.5;ymax=4.8;width=780;id=UMKEHR01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=UMKEHR01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`UMKEHR01;f=0;sqrt(x)^4;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`UMKEHR01;g=0;sqrt(x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`UMKEHR01;s=0;x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));linestyle=dashed`)
@Punkt(`UMKEHR01;O=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`UMKEHR01;P=0;2;4;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`UMKEHR01;Q=0;4;2;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`UMKEHR01;[2.55;4.2];$\Large P(2\mid4)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`UMKEHR01;[4.05;1.65];$\Large P'(4\mid2)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`UMKEHR01;[0.95;3.25];$\Large f(x)=x^2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`UMKEHR01;[3.1;1.15];$\Large f^{-1}(x)=\sqrt{x}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`UMKEHR01;[3.1;3.7];$\Large g(x)=x$;rgb(var(--color-text,51,51,51));1`)

</center>

{{|>}} Der Graph einer Umkehrfunktion entsteht durch Spiegelung des ursprünglichen Graphen an der Geraden $g(x)=x$. Aus einem Punkt $P(u\mid v)$ wird dabei der Punkt $P'(v\mid u)$: Abszisse und Ordinate tauschen ihre Rollen.

In der Abbildung wird deshalb aus $P(2\mid4)$ auf dem roten Parabelast der Punkt $P'(4\mid2)$ auf dem blauen Wurzelgraphen. Die gestrichelte Gerade ist die Spiegelachse. Wird die gesamte Parabel mit beiden Ästen gespiegelt, entsteht keine eindeutige Funktion. Die Einschränkung auf einen Ast ist also auch bei der graphischen Bestimmung notwendig.

Zur Kontrolle gilt auf dem gewählten Bereich

$$
f^{-1}\bigl(f(x)\bigr)=\sqrt{x^2}=x
\qquad\text{für }x\geq0.
$$

Ohne diese Einschränkung wäre $\sqrt{x^2}=|x|$. Wählte man stattdessen für die Parabel den Bereich $(-\infty;0]$, hätte ihre Umkehrfunktion die Gleichung $f^{-1}(x)=-\sqrt{x}$ für $x\geq0$.

{{|>}} Eine Umkehrfunktion kann häufig auch algebraisch bestimmt werden. Dazu schreibt man zunächst $y=f(x)$ und löst die Gleichung nach $x$ auf. Anschließend wird $y$ in $x$ und der erhaltene Ausdruck für das ursprüngliche $x$ in $f^{-1}(x)$ umbenannt.

Im folgenden Beispiel wählen wir ausdrücklich den nichtnegativen Ast:

$$
f(x)=-\frac{9{,}81}{2}x^2+5,
\qquad x\geq0.
$$

Aus $y=f(x)$ ergibt sich

$$
\begin{aligned}
y&=-\frac{9{,}81}{2}x^2+5
&&\bigm| -5\\
y-5&=-\frac{9{,}81}{2}x^2
&&\bigm| \cdot\left(-\frac2{9{,}81}\right)\\
\frac{2(5-y)}{9{,}81}&=x^2\\
x&=\sqrt{\frac{2(5-y)}{9{,}81}}
&&\text{wegen }x\geq0.
\end{aligned}
$$

Nach dem Umbenennen lautet die Umkehrfunktion

$$
f^{-1}(x)=\sqrt{\frac{2(5-x)}{9{,}81}},
\qquad x\leq5.
$$

Das positive Wurzelzeichen ist durch den zuvor gewählten nichtnegativen Ast festgelegt. Auf der gesamten Definitionsmenge $\mathbb{R}$ wäre die ursprüngliche quadratische Funktion nicht eindeutig umkehrbar.

{{|>}} Die Definitions- und Wertemengen dieses Beispiels lauten

$$
\begin{aligned}
\mathbb{D}_f&=[0;\infty),
&\mathbb{W}_f&=(-\infty;5],\\
\mathbb{D}_{f^{-1}}&=(-\infty;5],
&\mathbb{W}_{f^{-1}}&=[0;\infty).
\end{aligned}
$$

Insbesondere gehört die null zur Wertemenge der Umkehrfunktion, denn $f^{-1}(5)=0$. Als weitere Probe gilt

$$
f(1)=0{,}095
\qquad\text{und}\qquad
f^{-1}(0{,}095)
=\sqrt{\frac{2(5-0{,}095)}{9{,}81}}
=1.
$$

Entscheidend sind somit eine eindeutige Zuordnung, die passende Wahl des Definitionsbereichs und das Vertauschen der Definitions- und Wertemengen. Nicht jede Umkehrfunktion lässt sich durch elementare Umformungen in einem geschlossenen Term ausdrücken; ihre Existenz und ihre Darstellung durch Spiegelung hängen davon nicht ab.

***************************
