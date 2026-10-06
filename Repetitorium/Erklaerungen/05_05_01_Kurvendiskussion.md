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













tags: Erklärung, Kurvendiskussion, Integration

comment: In diesem Abschnitt werden die Schritte einer Kurvendiskussion zusammengefasst und an einer gebrochen rationalen Funktion einschließlich Stammfunktion und Graph erläutert.

author: Martin Lommatzsch

-->

# Kurvendiskussion

{{|>}}
***************************

Die Kurvendiskussion verbindet die Methoden zur Untersuchung von Funktionen. Definitionsbereich, Symmetrie, Grenzwerte und Nullstellen werden mit den Informationen aus den Ableitungen zusammengeführt. Dadurch entsteht ein zusammenhängendes Bild des Funktionsverlaufs.

Die folgende Übersicht enthält die 13 Schritte der anschließenden Beispielrechnung. Nicht jede Funktion besitzt alle genannten Eigenschaften. Welche Untersuchungen benötigt werden, richtet sich nach der Fragestellung; die Wertemenge lässt sich häufig erst nach der Untersuchung von Grenzwerten und Extremwerten abschließend bestimmen. Die Bildung einer Stammfunktion in Schritt 12 ist eine ergänzende [Integrationsaufgabe](05_04_01_Integration.md).

<!-- data-type="none" data-sortable="false" -->
| Schritt | Untersuchung | Vorgehen |
| :---: | :--- | :--- |
| 1 | Definitions- und Wertemenge | Zulässige Argumente $\mathbb{D}$ bestimmen; tatsächlich angenommene Werte $\mathbb{W}=\{f(x)\mid x\in\mathbb{D}\}$ ermitteln. |
| 2 | Standardsymmetrien | $f(-x)=f(x)$: Symmetrie zur Ordinatenachse; $f(-x)=-f(x)$: Symmetrie zum Ursprung. Der Definitionsbereich muss zu $x$ auch $-x$ enthalten. |
| 3 | Grenzverhalten | Grenzwerte für $x\to\pm\infty$ sowie einseitige Grenzwerte an Definitionsgrenzen untersuchen, soweit diese Grenzübergänge möglich sind. |
| 4 | Polstellen | Bei $f(x)=g(x)/h(x)$ zunächst $h(x)=0$ lösen. Durch Kürzen und Grenzwerte zwischen hebbaren Lücken und Polstellen unterscheiden. |
| 5 | Asymptoten | Geraden bestimmen, denen sich der Graph annähert. Bei gebrochen rationalen Funktionen hilft die Polynomdivision. |
| 6 | Nullstellen | $f(x_N)=0$ mit $x_N\in\mathbb{D}$ lösen; die Punkte lauten $N(x_N\mid0)$. |
| 7 | Extremstellen | An inneren differenzierbaren Extremstellen gilt $f'(x_E)=0$. Hinreichend: zusätzlich $f''(x_E)>0$ für ein Minimum oder $f''(x_E)<0$ für ein Maximum. |
| 8 | Wendestellen | Krümmungswechsel untersuchen. Hinreichender Test: $f''(x_W)=0$ und $f'''(x_W)\ne0$. |
| 9 | Sattelpunkte | Einen nachgewiesenen Wendepunkt zusätzlich auf $f'(x_S)=0$ prüfen. |
| 10 | Monotonie | Das Vorzeichen von $f'$ auf zusammenhängenden Intervallen untersuchen. |
| 11 | Konvex oder konkav | $f''(x)\geq0$ auf einem Intervall: konvex; $f''(x)\leq0$: konkav. |
| 12 | Stammfunktion | Eine Funktion $F$ mit $F'=f$ bestimmen: $\int f(x)\,dx=F(x)+C$. |
| 13 | Graph | Besondere Punkte, Asymptoten, Monotonie und Krümmung zusammenführen; weitere Punkte aus einer Wertetabelle ergänzen. |

Die Ableitungstests setzen die benötigte Differenzierbarkeit voraus. Für die angegebenen Extrem- und Wendepunkttests genügt zweimalige beziehungsweise dreimalige stetige Differenzierbarkeit in einer Umgebung der untersuchten inneren Stelle. Sind auch höhere Ableitungen dort null, bleiben diese Tests unentschieden. Randpunkte und Stellen ohne Ableitung müssen gesondert untersucht werden.

{{|>}} Für die Monotonie gelten auf einem offenen Intervall $I$, auf dem $f$ differenzierbar ist, die folgenden hinreichenden Kriterien:

$$
\begin{aligned}
f'(x)>0\quad \forall x\in I
&\Rightarrow \text{streng monoton steigend},\\
f'(x)<0\quad \forall x\in I
&\Rightarrow \text{streng monoton fallend},\\
f'(x)\geq0\quad \forall x\in I
&\Rightarrow \text{monoton steigend},\\
f'(x)\leq0\quad \forall x\in I
&\Rightarrow \text{monoton fallend}.
\end{aligned}
$$

Strenge Monotonie kann auch dann vorliegen, wenn die Ableitung an einzelnen Stellen null ist. Über Definitionslücken hinweg dürfen die Intervallaussagen nicht einfach zusammengezogen werden.

{{|>}} Konvexität und Konkavität können auch ohne Ableitungen untersucht werden. Für eine auf dem Intervall $I$ stetige Funktion gelten die Mittelpunktkriterien:

$$
\begin{gathered}
\begin{aligned}
\text{konvex:}\quad
f\left(\frac{x_1+x_2}{2}\right)
&\leq\frac{f(x_1)+f(x_2)}{2},\\
\text{konkav:}\quad
f\left(\frac{x_1+x_2}{2}\right)
&\geq\frac{f(x_1)+f(x_2)}{2},
\end{aligned}\\
\forall x_1,x_2\in I,\;x_1\ne x_2.
\end{gathered}
$$

Bei zweimal differenzierbaren Funktionen auf einem offenen Intervall sind diese Aussagen gleichwertig zu den entsprechenden Vorzeichenbedingungen für $f''$. Die ausführlichen Erläuterungen stehen bei [Extrempunkten](05_02_01_Extrem.md), [Wende- und Sattelpunkten](05_02_02_Wende.md), [Monotonie](05_03_01_Monotonie.md) sowie [konvexen und konkaven Funktionen](05_03_02_Konvex.md).

{{|>}} Als vollständiges Beispiel betrachten wir eine gebrochen rationale Funktion, an der mehrere dieser Eigenschaften gleichzeitig auftreten:

$$
f(x)=\frac{\frac12x^3-2x^2-3}{x^2-3x}.
$$

Für die Untersuchung werden die ersten drei Ableitungen benötigt:

$$
\begin{aligned}
f'(x)=\frac{d}{dx}f(x)
&=\frac{x^4-6x^3+12x^2+12x-18}{2x^2(x-3)^2},\\
f''(x)=\frac{d}{dx}f'(x)
&=\frac{-3x^3-18x^2+54x-54}{x^3(x-3)^3},\\
f'''(x)=\frac{d}{dx}f''(x)
&=\frac{9(x^4+8x^3-36x^2+72x-54)}{x^4(x-3)^4}.
\end{aligned}
$$

{{|>}} Schritt 1: Definitions- und Wertemenge bestimmen.

Der Nenner darf nicht null sein:

$$
x^2-3x=x(x-3)=0
\quad\Longleftrightarrow\quad x=0\;\vee\;x=3.
$$

Daraus folgt

$$
\mathbb{D}=\mathbb{R}\setminus\{0,3\}.
$$

Die Wertemenge ist in diesem Beispiel $\mathbb{W}=\mathbb{R}$. Das folgt nicht allein aus dem ungeraden Grad des Zählers: Wie Schritt 3 zeigt, ist $f$ auf $(3,\infty)$ stetig und nimmt dort wegen der Grenzwerte $-\infty$ und $+\infty$ jeden reellen Zwischenwert an. Einen Schnittpunkt mit der Ordinatenachse gibt es nicht, da $f(0)$ nicht definiert ist.

{{|>}} Schritt 2: Standardsymmetrien untersuchen.

Der Definitionsbereich ist nicht symmetrisch zum Ursprung: $-3$ gehört zu $\mathbb{D}$, aber $3$ nicht. Damit besitzt der Graph weder Achsensymmetrie zur Ordinatenachse noch Punktsymmetrie zum Ursprung. Auch der Vergleich an zwei zulässigen Argumenten zeigt:

$$
f(1)=\frac94,\qquad f(-1)=-\frac{11}{8}.
$$

Es gilt weder $f(-1)=f(1)$ noch $f(-1)=-f(1)$. Dies prüft die beiden Standardsymmetrien, nicht beliebige verschobene Symmetrieachsen oder -zentren.

Für die weiteren Untersuchungen ist eine [Polynomdivision](04_08_01_Gebrochen.md) hilfreich:

$$
\begin{aligned}
f(x)
&=\left(\frac12x^3-2x^2-3\right):(x^2-3x)\\
&=\frac12x-\frac12-\frac{\frac32x+3}{x^2-3x}\\
&=\frac12x-\frac12+\frac1x-\frac{5}{2(x-3)}.
\end{aligned}
$$

Die letzte Zeile zerlegt den verbleibenden Bruch in Partialbrüche. Sie erleichtert sowohl die Grenzwertbetrachtung als auch die spätere Integration.

{{|>}} Schritt 3: Verhalten im Unendlichen und an Definitionslücken bestimmen.

Der Bruchrest geht für $x\to\pm\infty$ gegen null, da sein Zähler einen kleineren Grad als sein Nenner hat. Auch der [Satz von l'Hôpital](05_03_01_Monotonie.md) liefert hier:

$$
\lim_{x\to\pm\infty}
\left(-\frac{\frac32x+3}{x^2-3x}\right)
=\lim_{x\to\pm\infty}\left(-\frac{\frac32}{2x-3}\right)
=0.
$$

Dabei wird der Grenzwert des Quotienten der Ableitungen gebildet, nicht beliebig ein Quotient einzelner Grenzwerte. Der verbleibende lineare Term bestimmt das Verhalten im Unendlichen:

$$
\lim_{x\to-\infty}f(x)=-\infty,\qquad
\lim_{x\to+\infty}f(x)=+\infty.
$$

An den ausgeschlossenen Stellen betrachten wir jeweils beide Seiten:

$$
\begin{aligned}
\lim_{x\to0^-}f(x)&=-\infty,
&\lim_{x\to0^+}f(x)&=+\infty,\\
\lim_{x\to3^-}f(x)&=+\infty,
&\lim_{x\to3^+}f(x)&=-\infty.
\end{aligned}
$$

Nahe null dominiert der Term $1/x$, nahe drei der Term $-5/[2(x-3)]$. Auf $(3,\infty)$ ist $f$ stetig. Die Grenzwerte an den beiden Enden dieses Intervalls begründen mithilfe des Zwischenwertsatzes die bereits angegebene Wertemenge $\mathbb{R}$.

{{|>}} Schritt 4: Polstellen und ihre Art bestimmen.

Die beiden Nennernullstellen lassen sich nicht kürzen, denn der Zähler ist dort ungleich null:

$$
\begin{aligned}
\left.\left(\frac12x^3-2x^2-3\right)\right|_{x=0}&=-3,\\
\left.\left(\frac12x^3-2x^2-3\right)\right|_{x=3}&=-\frac{15}{2}.
\end{aligned}
$$

Damit liegen bei $x_{P_1}=0$ und $x_{P_2}=3$ einfache Polstellen mit Vorzeichenwechsel vor. Es handelt sich nicht um hebbare Definitionslücken.

{{|>}} Schritt 5: Asymptoten bestimmen.

Aus der Polynomdivision folgt die schiefe Asymptote

$$
A(x)=\frac12x-\frac12,\qquad
\lim_{x\to\pm\infty}\bigl(f(x)-A(x)\bigr)=0.
$$

Für $x\to-\infty$ ist der Bruchrest positiv, sodass sich der Graph der Asymptote von oben annähert. Für $x\to+\infty$ ist er negativ; dort erfolgt die Annäherung von unten. Eine Asymptote darf an einer endlichen Stelle geschnitten werden: Hier ist $f(-2)=A(-2)=-\frac32$.

An den beiden Polstellen sind außerdem die Geraden $x=0$ und $x=3$ Asymptoten parallel zur Ordinatenachse.

{{|>}} Schritt 6: Nullstellen bestimmen.

Für eine Nullstelle muss der Zähler null und der Nenner ungleich null sein:

$$
\frac12x^3-2x^2-3=0
\quad\Rightarrow\quad x_N\approx4{,}32131.
$$

Diese Gleichung besitzt genau eine reelle Lösung. Numerisch kann sie beispielsweise mit einem geeigneten Taschenrechner oder CAS bestimmt werden. Da $x_N\notin\{0,3\}$ ist, erhalten wir gerundet den Punkt

$$
N(4{,}32131\mid0).
$$

{{|>}} Schritt 7: Extrempunkte und ihre Art bestimmen.

Der Nenner von $f'$ ist auf $\mathbb{D}$ positiv. Deshalb lösen wir die Zählergleichung:

$$
x^4-6x^3+12x^2+12x-18=0.
$$

Sie besitzt die beiden reellen Lösungen

$$
x_{E_1}\approx-1{,}25166,\qquad x_{E_2}\approx0{,}954537.
$$

Für den hinreichenden Test werden diese Stellen in $f''$ eingesetzt:

$$
\begin{aligned}
f''(x_{E_1})&\approx-0{,}954866<0
&&\Rightarrow \text{lokales Maximum},\\
f''(x_{E_2})&\approx2{,}883844>0
&&\Rightarrow \text{lokales Minimum}.
\end{aligned}
$$

Die Ordinaten der Extrempunkte werden dagegen mit der ursprünglichen Funktion $f$ berechnet, nicht mit $f''$:

$$
\begin{aligned}
f(x_{E_1})&\approx-1{,}33676,
& E_{\max}(-1{,}25166\mid-1{,}33676),\\
f(x_{E_2})&\approx2{,}24711,
& E_{\min}(0{,}954537\mid2{,}24711).
\end{aligned}
$$

Beide Extrema sind lokal. Globale Extremwerte gibt es auf $\mathbb{D}$ nicht, da die Funktion nach oben und unten unbeschränkt ist.

{{|>}} Schritt 8: Wendepunkte bestimmen.

Auf $\mathbb{D}$ ist $f''(x)=0$ gleichbedeutend mit

$$
-3x^3-18x^2+54x-54=0.
$$

Aus der Partialbruchdarstellung folgt auch $f''(x)=2/x^3-5/(x-3)^3$. Damit lässt sich die einzige reelle Wendestellenkandidatin direkt bestimmen:

$$
\begin{aligned}
2(x-3)^3&=5x^3,\\
x-3&=\sqrt[3]{\frac52}\,x,\\
x_W&=\frac{-3}{\sqrt[3]{\frac52}-1}
\approx-8{,}39845.
\end{aligned}
$$

Die Prüfung mit der dritten Ableitung ergibt

$$
f'''(x_W)\approx-0{,}000317417\ne0.
$$

Somit liegt tatsächlich ein Wendepunkt vor. Aus $f(x_W)\approx-4{,}59897$ erhalten wir gerundet

$$
W(-8{,}39845\mid-4{,}59897).
$$

{{|>}} Schritt 9: Auf Sattelpunkte prüfen.

Für die Wendestelle gilt

$$
f'(x_W)\approx0{,}505064\ne0.
$$

Die Wendetangente ist also nicht waagerecht. Der Wendepunkt $W$ ist kein Sattelpunkt; da keine weitere Wendestelle existiert, besitzt die Funktion keinen Sattelpunkt.

{{|>}} Schritt 10: Monotonie auf Intervallen untersuchen.

Die Nullstellen von $f'$ und die beiden Polstellen zerlegen den Definitionsbereich für die Vorzeichenuntersuchung. Das jeweilige Vorzeichen gilt für alle Argumente des angegebenen Intervalls:

<!-- data-type="none" data-sortable="false" -->
| Intervall $I$ | Vorzeichen, $\forall x\in I$ | Monotonie von $f$ |
| :--- | :---: | :--- |
| $(-\infty,x_{E_1})$ | $f'(x)>0$ | streng monoton steigend |
| $(x_{E_1},0)$ | $f'(x)<0$ | streng monoton fallend |
| $(0,x_{E_2})$ | $f'(x)<0$ | streng monoton fallend |
| $(x_{E_2},3)$ | $f'(x)>0$ | streng monoton steigend |
| $(3,\infty)$ | $f'(x)>0$ | streng monoton steigend |

Die Vorzeichen bleiben zwischen diesen Stellen konstant, weil $f'$ dort stetig ist und keine weitere Nullstelle besitzt. An den beiden Extremstellen wechselt das Vorzeichen. Ein Sattelpunkt würde dagegen nicht automatisch einen Monotoniewechsel bedeuten. Auch gleiches Monotonieverhalten auf beiden Seiten einer Polstelle erlaubt keine Verbindung der getrennten Intervalle.

{{|>}} Schritt 11: Konvexe und konkave Intervalle bestimmen.

Für das Krümmungsverhalten werden die Wendestelle und die Polstellen als Intervallgrenzen verwendet. Aus dem Vorzeichen von $f''$ folgt:

<!-- data-type="none" data-sortable="false" -->
| Intervall $I$ | Vorzeichen, $\forall x\in I$ | Krümmung von $f$ |
| :--- | :---: | :--- |
| $(-\infty,x_W)$ | $f''(x)>0$ | konvex |
| $(x_W,0)$ | $f''(x)<0$ | konkav |
| $(0,3)$ | $f''(x)>0$ | konvex |
| $(3,\infty)$ | $f''(x)<0$ | konkav |

Bei $x_W$ wechselt die Krümmung von konvex zu konkav. Die Polstellen trennen Definitionsintervalle, sind aber selbst keine Wendestellen. Die Lage des Graphen relativ zu einer Asymptote allein genügt nicht zum Nachweis der Krümmung.

{{|>}} Schritt 12: Eine Stammfunktion bestimmen.

Mit der Partialbruchzerlegung aus Schritt 2 ergibt sich

$$
\begin{aligned}
\int f(x)\,dx
&=\int\left(\frac12x-\frac12+\frac1x-\frac{5}{2(x-3)}\right)\,dx\\
&=\frac14x^2-\frac12x+\ln|x|-\frac52\ln|x-3|+C.
\end{aligned}
$$

Eine Stammfunktion ist also

$$
F(x)=\frac14x^2-\frac12x+\ln|x|-\frac52\ln|x-3|.
$$

Die Beträge ermöglichen reelle Logarithmen auf jedem der Intervalle $(-\infty,0)$, $(0,3)$ und $(3,\infty)$. Auf diesen getrennten Intervallen kann die Integrationskonstante jeweils unabhängig gewählt werden. Auf $(0,3)$ gilt speziell $\ln|x|=\ln x$ und $\ln|x-3|=\ln(3-x)$.

Zur Kontrolle leiten wir ab:

$$
\frac{d}{dx}F(x)
=\frac12x-\frac12+\frac1x-\frac{5}{2(x-3)}
=f(x)\qquad \forall x\in\mathbb{D}.
$$

{{|>}} Schritt 13: Den Graphen zeichnen.

Zunächst werden Nullstelle, Extrempunkte, Wendepunkt und Asymptoten eingetragen. Eine ergänzende Wertetabelle liefert weitere Stützpunkte. Die Werte sind auf drei Nachkommastellen gerundet:

<!-- data-type="none" data-sortable="false" -->
| $x$ | $f(x)$ |
| ---: | ---: |
| $-8$ | $-4{,}398$ |
| $-4$ | $-2{,}393$ |
| $-2$ | $-1{,}500$ |
| $-1$ | $-1{,}375$ |
| $-0{,}5$ | $-2{,}036$ |
| $0{,}5$ | $2{,}750$ |
| $1$ | $2{,}250$ |
| $2$ | $3{,}500$ |
| $2{,}5$ | $6{,}150$ |
| $3{,}5$ | $-3{,}464$ |
| $4$ | $-0{,}750$ |
| $5$ | $0{,}950$ |
| $8$ | $3{,}125$ |

Die Punkte werden unter Beachtung von Monotonie und Krümmung zu drei getrennten Kurvenästen verbunden. Über die Polstellen hinweg wird keine Verbindung gezeichnet.

<center>

@Koordinatensystem(`xmin=-10;xmax=10;ymin=-8.5;ymax=8.5;width=800;id=KURVEN01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=KURVEN01;xlabel=$\Large x$;ylabel=$\Large y$`)

@Gerade(`KURVEN01;[[0;-8];[0;8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);p1=0;linestyle=dashdotted`)
@Gerade(`KURVEN01;[[3;-8];[3;8]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);p2=0;linestyle=dashdotted`)
@PlotFunktion(`KURVEN01;A=0;0.5*x-0.5;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=dashed`)
@PlotFunktion(`KURVEN01;f=0;(0.5*x^3-2*x^2-3)/(x^2-3*x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@Punkt(`KURVEN01;N=0;4.3213075287;0;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@Punkt(`KURVEN01;Emax=0;-1.2516634493;-1.3367633830;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@Punkt(`KURVEN01;Emin=0;0.9545367178;2.2471139970;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@Punkt(`KURVEN01;W=0;-8.3984491152;-4.5989660768;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1;fix`)
@KoordText(`KURVEN01;[4.65;0.8];$\Large N$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`KURVEN01;[-2.5;-0.65];$\Large E_{\max}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`KURVEN01;[1.3;1.45];$\Large E_{\min}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`KURVEN01;[-8.4;-3.7];$\Large W$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`KURVEN01;[8.4;4.9];$\Large A$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`KURVEN01;[8.4;2.8];$\Large f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`KURVEN01;[-1.15;7.5];$\Large x_{P_1}=0$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)
@KoordText(`KURVEN01;[4.2;7.5];$\Large x_{P_2}=3$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff8c00);1`)

</center>

Der Funktionsgraph ist rot, die schiefe Asymptote blau gestrichelt. Die orangefarbenen strichpunktierten Geraden kennzeichnen die Polstellen; die besonderen Punkte sind durch Kreuze markiert. Die Polasymptote $x=0$ fällt mit der Ordinatenachse zusammen.

{{|>}} Eine ausführliche Kurvendiskussion verbindet Kenntnisse aus Analysis und Algebra. Sie hilft, Funktionsmodelle etwa in Naturwissenschaften oder Wirtschaft zu beurteilen. Entscheidend ist dabei die zur Fragestellung passende Untersuchung, nicht das mechanische Abarbeiten jedes Schritts. Die benötigten Rechenregeln stehen bei [Ableitungen](05_01_01_Differentiation.md) und [Integrationsregeln](05_04_02_Integrationsregeln.md).

***************************
