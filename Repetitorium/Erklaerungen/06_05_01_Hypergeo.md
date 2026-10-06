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













tags: Erklärung, Hypergeometrische Verteilung

comment: In diesem Abschnitt werden die hypergeometrische Verteilung beim Ziehen ohne Zurücklegen sowie ihr Erwartungswert, ihre Varianz und ihre Standardabweichung erklärt.

author: Martin Lommatzsch

-->

# Hypergeometrische Verteilung

{{|>}}
***************************

Die hypergeometrische Verteilung beschreibt die Anzahl der Treffer beim [Ziehen ohne Zurücklegen](06_02_01_Baumdiagramme.md). Aus einer Grundgesamtheit mit $N$ Elementen werden $n$ Elemente zufällig ausgewählt. Dabei besitzen $M$ der insgesamt $N$ Elemente die gewünschte Eigenschaft. Die Zufallsgröße $X$ zählt, wie viele dieser Elemente in der Auswahl enthalten sind.

Anders als bei der [Binomialverteilung](06_04_01_Binomial.md) sind die aufeinanderfolgenden Ziehungen im Allgemeinen nicht unabhängig: Nach jeder Ziehung ändern sich die Zusammensetzung der verbleibenden Menge und damit die Trefferwahrscheinlichkeit. Jede Auswahl von $n$ Elementen soll gleich wahrscheinlich sein; die Reihenfolge innerhalb dieser Auswahl wird nicht berücksichtigt.

Dabei sind $N$, $M$ und $n$ ganze Zahlen mit

$$
N\ge1,\qquad 0\le M\le N,\qquad 0\le n\le N.
$$

{{|>}} Die Wahrscheinlichkeit für genau $k$ Treffer lässt sich mit [Binomialkoeffizienten](06_01_02_Kombinatorik.md) bestimmen. Die Wahrscheinlichkeitsfunktion $H(k)$ lautet:

$$
H(k)=P(X=k)
=\frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}}.
$$

Der erste Binomialkoeffizient $\binom{M}{k}$ zählt die Möglichkeiten, $k$ Treffer aus den $M$ Elementen mit der gewünschten Eigenschaft auszuwählen. Der zweite Binomialkoeffizient $\binom{N-M}{n-k}$ zählt die Möglichkeiten, die übrigen $n-k$ Elemente aus den $N-M$ Nichttreffern auszuwählen. Das Produkt im Zähler gibt somit die Anzahl der günstigen Auswahlen an.

Der Binomialkoeffizient $\binom{N}{n}$ im Nenner zählt alle möglichen Auswahlen von $n$ Elementen aus der Grundgesamtheit. Für $n\ge1$ gilt:

$$
\binom{N}{n}
=\frac{N(N-1)\cdots(N-n+1)}{n!}.
$$

Bei jeder weiteren Ziehung steht ein Element weniger zur Verfügung. Weil die Reihenfolge nicht berücksichtigt wird, muss das Produkt dieser Anzahlen durch $n!$ geteilt werden.

{{|>}} Die Trefferzahl $k$ kann nur ganzzahlige Werte annehmen. Es können weder mehr als $M$ Treffer noch mehr als $N-M$ Nichttreffer ausgewählt werden. Deshalb sind nur die folgenden Trefferzahlen möglich:

$$
\max\bigl(0,n-(N-M)\bigr)\le k\le\min(n,M).
$$

Außerhalb dieses Bereichs ist $P(X=k)=0$. In den folgenden Summen wird dafür die Konvention $\binom{a}{b}=0$ verwendet, wenn bei ganzzahligen $a\ge0$ und $b$ entweder $b<0$ oder $b>a$ gilt.

$H(k)=P(X=k)$ gibt eine Einzelwahrscheinlichkeit an. Die Verteilungsfunktion beschreibt dagegen die aufsummierte Wahrscheinlichkeit $P(X\le k)$.

{{|>}} Für den Erwartungswert $E(X)$ werden die möglichen Trefferzahlen mit ihren jeweiligen Wahrscheinlichkeiten gewichtet und anschließend addiert. Bei der hypergeometrischen Verteilung vereinfacht sich diese Summe zu:

$$
\begin{aligned}
E(X)
&=\sum_{k=0}^{n}k\,
  \frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}}\\
&=n\frac{M}{N}.
\end{aligned}
$$

Der Anteil $\frac{M}{N}$ der gewünschten Elemente in der Grundgesamtheit wird also mit der Anzahl $n$ der Ziehungen multipliziert.

{{|>}} Die Varianz $\sigma^2=\operatorname{Var}(X)$ ergibt sich aus dem Erwartungswert der quadrierten Trefferzahl abzüglich des quadrierten Erwartungswerts. Für $N>1$ gilt:

$$
\begin{aligned}
\sigma^2=\operatorname{Var}(X)
&=\sum_{k=0}^{n}k^2\,
  \frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}}
  -\left(n\frac{M}{N}\right)^2\\
&=n\frac{M}{N}\left(1-\frac{M}{N}\right)
  \frac{N-n}{N-1}.
\end{aligned}
$$

Gegenüber der Varianz einer Binomialverteilung mit $p=\frac{M}{N}$ kommt der Faktor $\frac{N-n}{N-1}$ hinzu. Werden alle Elemente ausgewählt, ist die Trefferzahl sicher gleich $M$ und die Varianz gleich null. Auch im Sonderfall $N=1$ ist die Trefferzahl eindeutig bestimmt und die Varianz gleich null; die Gleichung mit dem Nenner $N-1$ ist dann nicht anwendbar.

Die Standardabweichung $\sigma$ ist die Quadratwurzel der Varianz.

{{|>}} Ein Beispiel verdeutlicht den Umgang mit der hypergeometrischen Verteilung: Auf vier Stellen bewerben sich $15$ Personen, von denen fünf bereits Erfahrung in genau dieser Position mitbringen. Die Vergabe der Arbeitsstellen erfolgt nach einem Losverfahren, bei dem jede Auswahl von vier verschiedenen Personen gleich wahrscheinlich ist. Berechne die Wahrscheinlichkeit, dass genau drei Personen mit Erfahrung ausgewählt werden. Berechne außerdem den Erwartungswert und die Standardabweichung der Anzahl ausgewählter Personen mit Erfahrung.

Hier zählt $X$ die ausgewählten Personen mit Erfahrung. Gegeben sind:

$$
N=15,\qquad M=5,\qquad n=4,\qquad k=3.
$$

{{|>}} Drei der fünf erfahrenen Personen und eine der zehn Personen ohne entsprechende Erfahrung sollen ausgewählt werden. Damit ergibt sich:

$$
\begin{aligned}
H(3)=P(X=3)
&=\frac{\binom{5}{3}\binom{15-5}{4-3}}{\binom{15}{4}}\\
&=\frac{10\cdot10}{1365}\\
&=\frac{20}{273}\approx7{,}326\,\%.
\end{aligned}
$$

Die Wahrscheinlichkeit, dass genau drei Personen mit Erfahrung ausgewählt werden, liegt bei etwa $7{,}326\,\%$.

{{|>}} Für den Erwartungswert folgt:

$$
E(X)=4\cdot\frac{5}{15}=\frac{4}{3}=1{,}\overline{3}.
$$

Bei häufig wiederholter Durchführung dieses Losverfahrens mit jeweils derselben Ausgangssituation würden durchschnittlich $1{,}\overline{3}$ Stellen von Personen mit Erfahrung besetzt. In einer einzelnen Auswahl ist die Anzahl solcher Personen selbstverständlich ganzzahlig.

{{|>}} Die Standardabweichung ist:

$$
\begin{aligned}
\sigma
&=\sqrt{4\cdot\frac{5}{15}
  \left(1-\frac{5}{15}\right)\frac{15-4}{15-1}}\\
&=\sqrt{\frac{44}{63}}\approx0{,}8357.
\end{aligned}
$$

Damit beträgt die Varianz $\frac{44}{63}$ und die Standardabweichung der Anzahl ausgewählter Personen mit Erfahrung etwa $0{,}8357$.

***************************

