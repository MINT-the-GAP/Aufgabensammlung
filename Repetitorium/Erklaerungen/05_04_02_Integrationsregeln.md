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













tags: Erklärung, Partielle Integration, Substitution, Integralmittelwert

comment: In diesem Abschnitt werden die Potenzregel, partielle Integration, Integration durch Substitution und der Mittelwertsatz der Integralrechnung hergeleitet und erklärt.

author: Martin Lommatzsch

-->

# Integrationsregeln

{{|>}}
***************************

Nachdem der Formalismus der [Integration](05_04_01_Integration.md) eingeführt wurde, werden nun Regeln zur Bestimmung von Stammfunktionen hergeleitet. Ausgangspunkt sind die bekannten Ableitungsregeln. Zunächst betrachten wir eine Potenz $x^n$:

$$
\frac{d}{dx}x^n=n x^{n-1}.
$$

{{|>}} Mit der Substitution $m=n-1$, also $n=m+1$, lässt sich der Exponent auf der rechten Seite vereinfachen. Für $m\ne-1$ folgt:

$$
\begin{aligned}
\frac{d}{dx}x^{m+1}&=(m+1)x^m,\\
\frac{1}{m+1}\frac{d}{dx}x^{m+1}&=x^m.
\end{aligned}
$$

In Differentialschreibweise und durch anschließendes Integrieren ergibt sich die Potenzregel der Integration:

$$
\begin{aligned}
\frac{1}{m+1}\,d\!\left(x^{m+1}\right)&=x^m\,dx,\\
\int x^m\,dx
&=\frac{1}{m+1}\int d\!\left(x^{m+1}\right)\\
&=\frac{x^{m+1}}{m+1}+C,
\qquad m\ne-1.
\end{aligned}
$$

Dabei steht $d(x^{m+1})$ für $\left(\frac{d}{dx}x^{m+1}\right)dx$. Die Integrationskonstante $C$ berücksichtigt, dass eine konstante Zahl beim Ableiten wegfällt.

Für nichtnegative ganzzahlige Exponenten gilt die Regel für alle reellen $x$. Für beliebige reelle Exponenten kann sie auf $x>0$ angewendet werden. Bei $m=-1$ entsteht stattdessen $\int \frac{1}{x}\,dx=\ln|x|+C$ auf einem Intervall ohne null. Ein Polynom wird summandenweise integriert; konstante Vorfaktoren bleiben dabei erhalten.

{{|>}} Die partielle Integration geht aus der Produktregel hervor. Für stetig differenzierbare Funktionen $f$ und $g$ gilt:

$$
\begin{aligned}
\frac{d}{dx}\bigl(f(x)g(x)\bigr)
&=f'(x)g(x)+f(x)g'(x),\\
d\bigl(f(x)g(x)\bigr)
&=f'(x)g(x)\,dx+f(x)g'(x)\,dx.
\end{aligned}
$$

Wählt man für $f'(x)g(x)$ und $f(x)g'(x)$ jeweils eine Stammfunktion, ergibt die Integration:

$$
f(x)g(x)
=\int f'(x)g(x)\,dx+\int f(x)g'(x)\,dx+C_0.
$$

Durch Umstellen erhält man die Regel der partiellen Integration:

$$
\int f'(x)g(x)\,dx
=f(x)g(x)-\int f(x)g'(x)\,dx.
$$

Bei dieser Kurzschreibweise sind die unbestimmten Integrale bis auf eine additive Konstante zu verstehen. Ist $H$ eine gewählte Stammfunktion von $f g'$, lautet das vollständige Ergebnis:

$$
\begin{aligned}
\int f'(x)g(x)\,dx&=f(x)g(x)-H(x)+C,\\
H'(x)&=f(x)g'(x).
\end{aligned}
$$

{{|>}} Bei der Anwendung wird der Faktor $f'(x)$ integriert und der Faktor $g(x)$ differenziert. Die Aufteilung ist dann nützlich, wenn eine Stammfunktion $f(x)$ leicht gefunden werden kann und das verbleibende Integral über $f(x)g'(x)$ einfacher wird.

Dies ist häufig bei einem Produkt aus einem Polynom und einer weiteren Funktion der Fall. Wird das Polynom als $g(x)$ gewählt, sinkt sein Grad beim Ableiten. Die partielle Integration kann auf das verbleibende Integral erneut angewendet werden, bis die Ableitung des Polynoms schließlich null ist. Dieses wiederholte Vorgehen hilft, sofern auch die wiederholten Stammfunktionen des anderen Faktors bestimmt werden können. Das Verfahren ist jedoch nicht auf Polynome beschränkt.

{{|>}} Die Integration durch Substitution lässt sich aus der Kettenregel herleiten. Für stetig differenzierbare Funktionen $f$ und $g$, deren Verkettung definiert ist, gilt:

$$
\begin{aligned}
\frac{d}{dx}f(g(x))
&=g'(x)f'(g(x)),\\
d\bigl(f(g(x))\bigr)
&=g'(x)f'(g(x))\,dx.
\end{aligned}
$$

Die Integration macht das Ableiten rückgängig:

$$
\int g'(x)f'(g(x))\,dx=f(g(x))+C.
$$

{{|>}} Der innere Funktionsterm wird durch eine neue Variable ersetzt. Mit $y=g(x)$ gilt:

$$
dy=g'(x)\,dx.
$$

Damit werden sowohl der Funktionsterm als auch das Differential ersetzt:

$$
\begin{aligned}
\int g'(x)f'(g(x))\,dx
&=\int f'(y)\,dy\\
&=f(y)+C\\
&=f(g(x))+C.
\end{aligned}
$$

Nach der Integration wird im unbestimmten Integral wieder $y=g(x)$ eingesetzt. Wo $g'(x)\ne0$ ist, kann die Differentialbeziehung auch als $dx=\frac{dy}{g'(x)}$ geschrieben werden. Für die obige Herleitung genügt jedoch $dy=g'(x)\,dx$; eine Division durch $g'(x)$ ist nicht nötig.

{{|>}} Bei einem bestimmten Integral müssen mit der Integrationsvariablen auch die Grenzen verändert werden. Aus $x=a$ wird $y=g(a)$ und aus $x=b$ wird $y=g(b)$:

$$
\int_a^b g'(x)f'(g(x))\,dx
=\int_{g(a)}^{g(b)} f'(y)\,dy.
$$

Die Reihenfolge der neuen Grenzen ergibt sich aus den ursprünglichen Grenzen. Falls $g(a)>g(b)$ ist, werden sie nicht einfach vertauscht, denn das würde das Vorzeichen des Integrals ändern.

{{|>}} Zur Auswertung werden die Funktionswerte der Stammfunktion an den Grenzen eingesetzt. Dafür sind sowohl die eckige Klammer als auch der Auswertungsstrich gebräuchlich:

$$
\begin{aligned}
\int_{g(a)}^{g(b)} f'(y)\,dy
&=\bigl[f(y)\bigr]_{g(a)}^{g(b)}\\
&=\left.f(y)\right|_{y=g(a)}^{y=g(b)}\\
&=f(g(b))-f(g(a)).
\end{aligned}
$$

Es gilt also weiterhin: Wert an der oberen Grenze minus Wert an der unteren Grenze. Eine Integrationskonstante fällt bei dieser Differenz weg.

Die Regeln der Differentiation und Integration bilden auch eine Grundlage für die Untersuchung von Differentialgleichungen, in denen eine gesuchte Funktion zusammen mit ihren Ableitungen vorkommt.

{{|>}} Eine weitere Anwendung ist der Mittelwertsatz der Integralrechnung. In seiner gewichteten Form sei $f$ auf $[a,b]$ stetig, $a<b$, und $g$ dort integrierbar und nichtnegativ. Dann gibt es mindestens eine Stelle $\xi\in[a,b]$, für die gilt:

$$
\int_a^b f(x)g(x)\,dx
=f(\xi)\int_a^b g(x)\,dx.
$$

Die Gewichtsfunktion $g$ darf hier nicht das Vorzeichen wechseln. Entsprechend gilt der Satz auch für eine überall nichtpositive Gewichtsfunktion. Ist $\int_a^b g(x)\,dx>0$, beschreibt $f(\xi)$ den gewichteten Mittelwert der Funktion $f$:

$$
f(\xi)
=\frac{\displaystyle\int_a^b f(x)g(x)\,dx}
{\displaystyle\int_a^b g(x)\,dx}.
$$

{{|>}} Für die konstante Gewichtsfunktion $g(x)=1$ folgt der gewöhnliche Mittelwertsatz der Integralrechnung:

$$
\begin{aligned}
\int_a^b f(x)\,dx
&=f(\xi)\int_a^b 1\,dx\\
&=f(\xi)(b-a),\\
\frac{1}{b-a}\int_a^b f(x)\,dx
&=f(\xi).
\end{aligned}
$$

Der Integralmittelwert $\overline{f}=\frac{1}{b-a}\int_a^b f(x)\,dx$ ist also ein Funktionswert, den die stetige Funktion an mindestens einer Stelle $\xi$ des Intervalls annimmt.

{{|>}} Dieser Mittelwert berücksichtigt die Vorzeichen der Funktionswerte. Nur wenn $f(x)\ge0$ auf dem ganzen Intervall gilt, ist er zugleich der mittlere Abstand des Graphen zur Abszissenachse, gemessen parallel zur Ordinatenachse. Für den mittleren Abstand im allgemeinen Fall muss der Betrag verwendet werden:

$$
\overline{d}=\frac{1}{b-a}\int_a^b |f(x)|\,dx.
$$

So werden negative Funktionswerte bei der Abstandsbestimmung ebenfalls als positive Beiträge berücksichtigt.

***************************
