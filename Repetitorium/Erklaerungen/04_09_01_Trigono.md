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













tags: Erklärung, Trigonometrische Funktionen, Additionstheoreme

comment: In diesem Abschnitt werden die trigonometrischen Funktionen am Einheitskreis, ihre Graphen und Umkehrfunktionen sowie trigonometrische Identitäten und Additionstheoreme erklärt.

author: Martin Lommatzsch

-->

# Trigonometrische Funktionen

{{|>}}
***************************

In der [Trigonometrie](03_01_01_Trigonometrie.md) haben wir Sinus, Kosinus, Tangens und Kotangens zunächst als Seitenverhältnisse im rechtwinkligen Dreieck kennengelernt. Nun betrachten wir sie als Funktionen: Jedem zulässigen Winkel wird ein reeller Funktionswert zugeordnet. Damit lassen sich unter anderem Schwingungen und andere periodische Vorgänge beschreiben.

Für die Funktionsgraphen verwenden wir das Bogenmaß. Eine volle Umdrehung entspricht $360^\circ=2\pi\,\mathrm{rad}$, ein rechter Winkel $90^\circ=\frac{\pi}{2}\,\mathrm{rad}$. Das Argument $x$ bezeichnet im Folgenden die Maßzahl des Winkels im Bogenmaß. Auch negative Winkel und Winkel über eine volle Umdrehung hinaus sind möglich.

{{|>}} Am Einheitskreis mit dem Radius $r=1$ lässt sich diese Zuordnung auf beliebige Winkel erweitern. Wir beginnen auf der positiven $x$-Achse und messen positive Winkel gegen den Uhrzeigersinn. Der zum Winkel $\alpha$ gehörende Kreispunkt hat die Koordinaten

$$
P(\cos\alpha\mid\sin\alpha).
$$

Seine Abszisse ist also der Kosinus, seine Ordinate der Sinus des Winkels. Im ersten Quadranten stimmen diese Koordinaten mit den Kathetenlängen im rechtwinkligen Dreieck überein. In den anderen Quadranten können die Koordinaten negativ sein; Streckenlängen selbst sind dagegen nie negativ.

<center>

@Koordinatensystem(`xmin=-1.4;xmax=1.4;ymin=-1.3;ymax=1.4;width=500;id=TRIGONO01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=TRIGONO01;xlabel=$\Large x$;ylabel=$\Large y$`)

@Punkt(`TRIGONO01;M=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`TRIGONO01;U=0;1;0;rgb(var(--color-text,51,51,51));0;fix`)
@Kreis(`TRIGONO01;k=0;M;rgb(var(--color-text,51,51,51));0;radius=1`)
@Punkt(`TRIGONO01;P1=0;0.7071067812;0.7071067812;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Strecke(`TRIGONO01;[M;P1];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@Punkt(`TRIGONO01;F1=0;0.7071067812;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);0;fix`)
@Strecke(`TRIGONO01;[F1;P1];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=dashed`)
@Punkt(`TRIGONO01;P2=0;0;1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1;fix`)
@Strecke(`TRIGONO01;[M;P2];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2.5px;linestyle=solid`)
@Strecke(`TRIGONO01;[M;P2];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2.5px;linestyle=dashed`)
@Punkt(`TRIGONO01;P3=0;-0.8660254038;0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@Strecke(`TRIGONO01;[M;P3];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=solid`)
@Punkt(`TRIGONO01;F3=0;-0.8660254038;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);0;fix`)
@Strecke(`TRIGONO01;[F3;P3];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=dashed`)
@Punkt(`TRIGONO01;P4=0;0.8660254038;-0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@Strecke(`TRIGONO01;[M;P4];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2.5px;linestyle=solid`)
@Punkt(`TRIGONO01;F4=0;0.8660254038;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);0;fix`)
@Strecke(`TRIGONO01;[F4;P4];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2.5px;linestyle=dashed`)
@Winkel(`TRIGONO01;alpha=0;[U;M;P1];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;Wert=0`)
@KoordText(`TRIGONO01;[0.49;0.23];$\Large \alpha$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`TRIGONO01;[0.84;0.82];$\Large P_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`TRIGONO01;[-0.15;1.12];$\Large P_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@KoordText(`TRIGONO01;[-1.08;0.63];$\Large P_3$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`TRIGONO01;[1.03;-0.56];$\Large P_4$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`TRIGONO01;[0.13;-0.18];$\Large M$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO01;[-0.95;-0.9];$\Large r=1$;rgb(var(--color-text,51,51,51));1`)

</center>

Die farbigen Radien markieren vier Winkel. Für den roten Radius ist $\alpha=45^\circ=\frac{\pi}{4}$ eingezeichnet. Die zur $x$-Achse orthogonalen Hilfsstrecken machen die Ordinaten sichtbar.

{{|>}} Um daraus den Sinusgraphen zu erhalten, tragen wir den Winkel im Bogenmaß als neues Argument auf der horizontalen Achse und die Ordinate des Kreispunkts als Funktionswert auf der vertikalen Achse ab. Aus $P(\cos\alpha\mid\sin\alpha)$ wird somit $Q(\alpha\mid\sin\alpha)$.

<!-- data-type="none" data-sortable="false" -->
| Kreispunkt / Graphpunkt | Winkel im Gradmaß | Argument im Bogenmaß | Sinuswert |
| --- | --- | --- | --- |
| $P_1$ / $Q_1$ (rot) | $45^\circ$ | $\frac{\pi}{4}$ | $\frac{\sqrt2}{2}$ |
| $P_2$ / $Q_2$ (grün) | $90^\circ$ | $\frac{\pi}{2}$ | $1$ |
| $P_3$ / $Q_3$ (blau) | $150^\circ$ | $\frac{5\pi}{6}$ | $\frac12$ |
| $P_4$ / $Q_4$ (orange) | $330^\circ$ | $\frac{11\pi}{6}$ | $-\frac12$ |

<center>

@Koordinatensystem(`xmin=-0.45;xmax=6.9;ymin=-1.6;ymax=1.6;width=850;id=TRIGONO02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=TRIGONO02;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`TRIGONO02;s=0;sin(x);rgb(var(--color-text,51,51,51));linestyle=solid`)
@Strecke(`TRIGONO02;[[0.7853981634;0];[0.7853981634;0.7071067812]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=dashed`)
@Punkt(`TRIGONO02;Q1=0;0.7853981634;0.7071067812;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`TRIGONO02;[0.9053981634;0.9471067812];$\Large Q_1$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@Strecke(`TRIGONO02;[[1.5707963268;0];[1.5707963268;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2.5px;linestyle=dashed`)
@Punkt(`TRIGONO02;Q2=0;1.5707963268;1;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1;fix`)
@KoordText(`TRIGONO02;[1.6907963268000001;1.24];$\Large Q_2$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)
@Strecke(`TRIGONO02;[[2.617993878;0];[2.617993878;0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=dashed`)
@Punkt(`TRIGONO02;Q3=0;2.617993878;0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`TRIGONO02;[2.737993878;0.74];$\Large Q_3$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@Strecke(`TRIGONO02;[[5.7595865316;0];[5.7595865316;-0.5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);;-;2.5px;linestyle=dashed`)
@Punkt(`TRIGONO02;Q4=0;5.7595865316;-0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@KoordText(`TRIGONO02;[5.8795865316;-0.72];$\Large Q_4$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)

</center>

Wichtig ist der Unterschied der horizontalen Koordinaten: Am Kreis lesen wir dort $\cos\alpha$ ab, am Funktionsgraphen dagegen den Winkel $\alpha$ selbst. Beide Abbildungen zeigen also unterschiedliche Zuordnungen.

{{|>}} Nach einer vollen Umdrehung erreichen wir wieder denselben Kreispunkt. Deshalb wiederholen sich Sinus und Kosinus mit der kleinsten positiven Periode $2\pi$:

$$
\begin{aligned}
\sin(x+2\pi)&=\sin x,\\
\cos(x+2\pi)&=\cos x.
\end{aligned}
$$

Beide Funktionen sind auf ganz $\mathbb{R}$ definiert und haben die Wertemenge $[-1;1]$. Der Kosinusgraph entsteht aus dem Sinusgraphen durch eine Verschiebung um $\frac{\pi}{2}$ nach links:

$$
\cos x=\sin\left(x+\frac{\pi}{2}\right).
$$

<center>

@Koordinatensystem(`xmin=-7.5;xmax=7.5;ymin=-1.8;ymax=2;width=850;id=TRIGONO03;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=TRIGONO03;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`TRIGONO03;s=0;sin(x);rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`TRIGONO03;c=0;cos(x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`TRIGONO03;[-3.8;1.6];$\Large y=\sin x$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO03;[3.7;1.6];$\Large y=\cos x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Insbesondere gilt $\sin0=0$ und $\cos0=1$. Beide Funktionen nehmen den größten Wert $1$ und den kleinsten Wert $-1$ tatsächlich an. Daher sind $1$ und $-1$ nicht nur Supremum und Infimum ihrer Wertemengen, sondern auch Maximum und Minimum.

{{|>}} Auch die Symmetrie folgt aus dem Einheitskreis. Beim Wechsel von $x$ zu $-x$ bleibt die Abszisse erhalten, während die Ordinate ihr Vorzeichen wechselt:

$$
\begin{aligned}
\sin(-x)&=-\sin x,\\
\cos(-x)&=\cos x.
\end{aligned}
$$

Der Sinus ist eine ungerade Funktion; sein Graph ist punktsymmetrisch zum Ursprung. Der Kosinus ist eine gerade Funktion; sein Graph ist achsensymmetrisch zur $y$-Achse.

{{|>}} Tangens und Kotangens werden durch Quotienten von Sinus und Kosinus beschrieben:

$$
\begin{aligned}
\tan x&=\frac{\sin x}{\cos x},
&&\cos x\neq0,\\
\cot x&=\frac{\cos x}{\sin x},
&&\sin x\neq0.
\end{aligned}
$$

Die Nenner dürfen nicht null werden. Mit $k\in\mathbb{Z}$ ergeben sich deshalb die Definitionsmengen

$$
\begin{aligned}
D_{\tan}
&=\mathbb{R}\setminus
\left\{\frac{\pi}{2}+k\pi\mid k\in\mathbb{Z}\right\},\\
D_{\cot}
&=\mathbb{R}\setminus
\{k\pi\mid k\in\mathbb{Z}\}.
\end{aligned}
$$

Beide Wertemengen sind $\mathbb{R}$. Die kleinste positive Periode beträgt jeweils $\pi$, also eine halbe Umdrehung:

$$
\tan(x+\pi)=\tan x,
\qquad
\cot(x+\pi)=\cot x.
$$

Diese Gleichungen gelten an allen Stellen, an denen die jeweilige Funktion definiert ist.

<center>

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-3.8;ymax=4.4;width=800;id=TRIGONO04;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=TRIGONO04;xlabel=$\Large x$;ylabel=$\Large y$`)

@Strecke(`TRIGONO04;[[-6.2831853072;-3.6];[-6.2831853072;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=dashed`)
@Strecke(`TRIGONO04;[[-4.7123889804;-3.6];[-4.7123889804;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2.5px;linestyle=dashed`)
@Strecke(`TRIGONO04;[[-3.1415926536;-3.6];[-3.1415926536;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=dashed`)
@Strecke(`TRIGONO04;[[-1.5707963268;-3.6];[-1.5707963268;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2.5px;linestyle=dashed`)
@Strecke(`TRIGONO04;[[0;-3.6];[0;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=dashed`)
@Strecke(`TRIGONO04;[[1.5707963268;-3.6];[1.5707963268;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2.5px;linestyle=dashed`)
@Strecke(`TRIGONO04;[[3.1415926536;-3.6];[3.1415926536;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=dashed`)
@Strecke(`TRIGONO04;[[4.7123889804;-3.6];[4.7123889804;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 60%, rgb(var(--color-background,255,255,255)));;-;2.5px;linestyle=dashed`)
@Strecke(`TRIGONO04;[[6.2831853072;-3.6];[6.2831853072;3.6]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=dashed`)
@PlotFunktion(`TRIGONO04;t=0;tan(x);rgb(var(--color-text,51,51,51));linestyle=solid`)
@PlotFunktion(`TRIGONO04;c=0;cos(x)/sin(x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@KoordText(`TRIGONO04;[-3.9;3.5];$\Large y=\tan x$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO04;[2.35;3.5];$\Large y=\cot x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

Die gestrichelten Geraden markieren die vertikalen Asymptoten. An den Polstellen sind die Graphen unterbrochen; die gestrichelten Linien gehören nicht zu den Graphen.

Die Nullstellen des Tangens liegen bei $x=k\pi$. Genau dort hat der Kotangens Polstellen. Umgekehrt liegen die Nullstellen des Kotangens bei $x=\frac{\pi}{2}+k\pi$, also an den Polstellen des Tangens.

{{|>}} Wegen ihrer Periodizität nehmen trigonometrische Funktionen viele Werte mehrfach an. Eine eindeutige [Umkehrfunktion](04_05_08_Umkehrfunktion.md) entsteht daher erst, wenn wir den ursprünglichen Definitionsbereich geeignet einschränken. Die gebräuchlichen Hauptwerte legen wir hier so fest:

<!-- data-type="none" data-sortable="false" -->
| Umkehrfunktion | Definitionsmenge | Wertemenge / gewählter Bereich der Ausgangsfunktion |
| --- | --- | --- |
| Arkussinus $\arcsin x$ | $[-1;1]$ | $\left[-\frac{\pi}{2};\frac{\pi}{2}\right]$ |
| Arkuskosinus $\arccos x$ | $[-1;1]$ | $[0;\pi]$ |
| Arkustangens $\arctan x$ | $\mathbb{R}$ | $\left(-\frac{\pi}{2};\frac{\pi}{2}\right)$ |
| Arkuskotangens $\operatorname{arccot}x$ | $\mathbb{R}$ | $(0;\pi)$ |

Die Funktionswerte der Arkusfunktionen sind Winkel im Bogenmaß. Beim Arkuskotangens gibt es unterschiedliche Konventionen; in dieser Erklärung gilt durchgehend

$$
\operatorname{arccot}x=\frac{\pi}{2}-\arctan x.
$$

<center>

@Koordinatensystem(`xmin=-4.6;xmax=4.6;ymin=-2.25;ymax=4.05;width=850;id=TRIGONO05;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=TRIGONO05;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`TRIGONO05;s=0;asin(x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`TRIGONO05;c=0;acos(x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`TRIGONO05;t=0;atan(x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);linestyle=solid`)
@PlotFunktion(`TRIGONO05;q=0;pi/2-atan(x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);linestyle=solid`)
@Punkt(`TRIGONO05;S1=0;-1;-1.5707963268;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`TRIGONO05;S2=0;1;1.5707963268;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`TRIGONO05;C1=0;-1;3.1415926536;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@Punkt(`TRIGONO05;C2=0;1;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1;fix`)
@KoordText(`TRIGONO05;[-2.7;3.65];$\Large y=\arcsin x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`TRIGONO05;[2.6;3.65];$\Large y=\arccos x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`TRIGONO05;[-2.7;-1.85];$\Large y=\arctan x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`TRIGONO05;[2.6;-1.85];$\Large y=\operatorname{arccot}x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);1`)

</center>

Die markierten Endpunkte gehören zu den Graphen von Arkussinus und Arkuskosinus. Arkustangens und Arkuskotangens sind dagegen für jedes reelle Argument definiert; die Grenzen ihrer Wertemengen werden nicht erreicht.

{{|>}} Beispielsweise gilt

$$
\arcsin\left(\frac12\right)=\frac{\pi}{6}.
$$

Obwohl auch $\sin\left(\frac{5\pi}{6}\right)=\frac12$ ist, liefert der Arkussinus nur den festgelegten Hauptwert. Insbesondere darf man nicht für beliebige Winkel $\arcsin(\sin x)=x$ schreiben:

$$
\begin{aligned}
\arcsin(\sin x)&=x
&&\text{für }-\frac{\pi}{2}\leq x\leq\frac{\pi}{2},\\
\arcsin\left(\sin\frac{5\pi}{6}\right)&=\frac{\pi}{6}
&&\neq\frac{5\pi}{6}.
\end{aligned}
$$

Die Schreibweise $\sin^{-1}$ auf manchen Taschenrechnern meint den Arkussinus, nicht den Kehrwert $\frac1{\sin x}$.

{{|>}} Zwischen den trigonometrischen Funktionen bestehen Identitäten, mit denen sich Terme umformen lassen. Die wichtigste folgt unmittelbar aus der Gleichung des Einheitskreises oder dem Satz des Pythagoras:

$$
\sin^2x+\cos^2x=1.
$$

Dabei bedeutet $\sin^2x=(\sin x)^2$ und entsprechend $\cos^2x=(\cos x)^2$. Gemeint ist das Quadrat des Funktionswerts, nicht etwa $\sin(x^2)$. Da jeder Kreispunkt $(\cos x\mid\sin x)$ den Abstand $1$ vom Ursprung hat, gilt die Identität für alle reellen $x$, auch außerhalb des ersten Quadranten.

{{|>}} Die Additionstheoreme verknüpfen Funktionswerte einer Winkelsumme oder Winkeldifferenz mit den Werten der einzelnen Winkel:

$$
\begin{aligned}
\sin(x+y)&=\sin x\cos y+\cos x\sin y,\\
\sin(x-y)&=\sin x\cos y-\cos x\sin y,\\
\cos(x+y)&=\cos x\cos y-\sin x\sin y,\\
\cos(x-y)&=\cos x\cos y+\sin x\sin y.
\end{aligned}
$$

Insbesondere ist $\sin(x+y)$ im Allgemeinen nicht gleich $\sin x+\sin y$. Die folgenden rechtwinkligen Dreiecke machen die Summenformeln zunächst für positive Winkel mit $\alpha+\beta<90^\circ$ anschaulich. In der Skizze sind $\alpha=25^\circ$ und $\beta=35^\circ$ gewählt.

<center>

@Koordinatensystem(`xmin=-0.16;xmax=1.16;ymin=-0.15;ymax=1.12;width=680;id=TRIGONO06;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=TRIGONO06;xlabel=$\Large x$;ylabel=$\Large y$`)

@Punkt(`TRIGONO06;M=0;0;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`TRIGONO06;U=0;1;0;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`TRIGONO06;V=0;0;1;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`TRIGONO06;T=0;0.906307787;0.4226182617;rgb(var(--color-text,51,51,51));0;fix`)
@Punkt(`TRIGONO06;B=0;0.5;0.8660254038;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`TRIGONO06;D=0;0.7424038765;0.3461886131;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`TRIGONO06;A=0;0.5;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`TRIGONO06;C=0;0.7424038765;0;rgb(var(--color-text,51,51,51));1;fix`)
@Punkt(`TRIGONO06;E=0;0.5;0.3461886131;rgb(var(--color-text,51,51,51));1;fix`)
@Kreissektor(`TRIGONO06;[M;U;V];rgb(var(--color-text,51,51,51));0;k=0`)
@Strecke(`TRIGONO06;[M;B];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`TRIGONO06;[M;T];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`TRIGONO06;[B;D];rgb(var(--color-text,51,51,51));;-;2.5px;linestyle=solid`)
@Strecke(`TRIGONO06;[A;B];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2.5px;linestyle=solid`)
@Strecke(`TRIGONO06;[C;D];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00b850);;-;2.5px;linestyle=solid`)
@Strecke(`TRIGONO06;[E;D];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);;-;2.5px;linestyle=solid`)
@Winkel(`TRIGONO06;alpha=0;[U;M;T];rgb(var(--color-text,51,51,51));1;Wert=0`)
@Winkel(`TRIGONO06;beta=0;[T;M;B];rgb(var(--color-text,51,51,51));1;Wert=0`)
@Winkel(`TRIGONO06;alpha=0;[E;B;D];rgb(var(--color-text,51,51,51));1;Wert=0`)
@Winkel(`TRIGONO06;w=0;[T;D;B];rgb(var(--color-text,51,51,51));1;Wert=1`)
@KoordText(`TRIGONO06;[0.28;0.06];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO06;[0.23;0.21];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO06;[0.54;0.75];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO06;[-0.08;0.05];$\Large M$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO06;[0.46;-0.065];$\Large A$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO06;[0.7724038765;-0.065];$\Large C$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO06;[0.5;0.95];$\Large B$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO06;[0.8024038764999999;0.3411886131];$\Large D$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO06;[0.46;0.3111886131];$\Large E$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`TRIGONO06;[0.105;0.64];$\Large \overline{MB}=1$;rgb(var(--color-text,51,51,51));1`)

</center>

Der Punkt $B$ liegt auf dem Einheitskreis, sodass $\overline{MB}=1$ gilt. $D$ ist die orthogonale Projektion von $B$ auf den unteren Radius. Damit ist das Dreieck $MDB$ bei $D$ rechtwinklig. $A$ und $C$ sind die orthogonalen Projektionen von $B$ beziehungsweise $D$ auf die $x$-Achse; $E$ liegt auf $\overline{AB}$ auf derselben Höhe wie $D$.

{{|>}} Für die Herleitung bezeichnen $AB$, $MD$ und die anderen Buchstabenpaare jeweils die Länge der entsprechenden Strecke. Im großen Dreieck $MAB$ und im Dreieck $MDB$ gilt:

$$
\begin{aligned}
AB&=\sin(\alpha+\beta),\\
MD&=\cos\beta,\\
BD&=\sin\beta.
\end{aligned}
$$

Der Winkel zwischen $\overline{BE}$ und $\overline{BD}$ ist ebenfalls $\alpha$: Die beiden Schenkel stehen jeweils orthogonal zu den Schenkeln des Winkels $\alpha$ bei $M$. Deshalb ergeben die kleineren rechtwinkligen Dreiecke

$$
\begin{aligned}
BE&=BD\cos\alpha=\sin\beta\cos\alpha,\\
CD&=MD\sin\alpha=\cos\beta\sin\alpha.
\end{aligned}
$$

Wegen $EA=CD$ und $AB=BE+EA$ folgt das Additionstheorem für den Sinus:

$$
\sin(\alpha+\beta)
=\sin\beta\cos\alpha+\cos\beta\sin\alpha.
$$

{{|>}} Für den Kosinus betrachten wir die horizontalen Strecken. Es gilt $MA=MC-AC$ sowie $AC=ED$. Somit erhalten wir

$$
\begin{aligned}
MC&=MD\cos\alpha=\cos\beta\cos\alpha,\\
ED&=BD\sin\alpha=\sin\beta\sin\alpha,\\
\cos(\alpha+\beta)
&=MA\\
&=MC-ED\\
&=\cos\beta\cos\alpha-\sin\beta\sin\alpha.
\end{aligned}
$$

Die gezeichnete Zerlegung arbeitet mit positiven Streckenlängen im ersten Quadranten. Die Additionstheoreme gelten aber für alle reellen Winkel. Das lässt sich mit gerichteten Koordinaten beschreiben: Drehen wir die Koordinatenrichtungen um $\alpha$, werden aus ihnen $(\cos\alpha\mid\sin\alpha)$ und $(-\sin\alpha\mid\cos\alpha)$. Der um $\alpha$ gedrehte Punkt $(\cos\beta\mid\sin\beta)$ besitzt deshalb die Koordinaten

$$
\begin{pmatrix}
\cos(\alpha+\beta)\\
\sin(\alpha+\beta)
\end{pmatrix}
=
\cos\beta
\begin{pmatrix}
\cos\alpha\\
\sin\alpha
\end{pmatrix}
+
\sin\beta
\begin{pmatrix}
-\sin\alpha\\
\cos\alpha
\end{pmatrix}.
$$

Durch Ausmultiplizieren entstehen genau die beiden Summenformeln, nun unabhängig vom Quadranten. Die Differenzformeln folgen durch Ersetzen von $\beta$ durch $-\beta$ und Anwenden von $\sin(-\beta)=-\sin\beta$ und $\cos(-\beta)=\cos\beta$.

{{|>}} Setzen wir in den Summenformeln beide Winkel gleich, entstehen die Formeln für den doppelten Winkel:

$$
\begin{aligned}
\sin(2x)&=2\sin x\cos x,\\
\cos(2x)&=\cos^2x-\sin^2x.
\end{aligned}
$$

Mithilfe von $\sin^2x+\cos^2x=1$ lässt sich die zweite Formel auch so schreiben:

$$
\begin{aligned}
\cos(2x)&=1-2\sin^2x,\\
\cos(2x)&=2\cos^2x-1.
\end{aligned}
$$

Durch Umstellen erhalten wir schließlich Ausdrücke für die Quadrate der Funktionswerte:

$$
\begin{aligned}
\sin^2x&=\frac{1-\cos(2x)}{2},\\
\cos^2x&=\frac{1+\cos(2x)}{2}.
\end{aligned}
$$

Diese Identitäten gelten für alle reellen $x$. Sie helfen, trigonometrische Terme zu vereinfachen und Zusammenhänge zwischen Winkeln, Schwingungen und periodischen Funktionen zu erkennen.

***************************
