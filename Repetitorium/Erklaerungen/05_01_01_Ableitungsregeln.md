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

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md










tags: Erklärung, Ableitungen, Produktregel, Kettenregel

comment: In diesem Abschnitt werden die Ableitungsregeln ausführlich erklärt.

author: Martin Lommatzsch

-->

# Ableitungsregeln




{{|>}}
***************************

Die erste *Ableitungsregel* wurde schon in *Gleichung* (8) beschrieben und gilt für jede Art von *Polynomen*.


$$
\begin{aligned}
\frac{d}{dx} x^n &= nx^{n-1} + x^n \frac{d}{dx} \qquad (11)
\end{aligned}
$$


{{|>}} Diese *Ableitungsregel* ist besonders nützlich im Zusammenhang mit den *Potenzgesetzen*, denn so lassen sich bestimmte *Funktionen* mit einer *Variablen* als *Basis* und einer Zahl im *Exponenten* *darstellen*. Mithilfe dieser *Ableitungsregel* besteht die Möglichkeit, wesentlich komplexere, also zusammengesetzte, *Funktionen* *abzuleiten*. Sei dazu $f(x)=g(x)+h(x)$. Dann gilt unter Verwendung der Regeln für die Klammersetzung:


$$
\begin{aligned}
\frac{d}{dx} \left(g(x)+h(x)\right) &= \frac{d}{dx} g(x) + \frac{d}{dx} h(x) \qquad (11\mathrm{a})
\end{aligned}
$$


{{|>}} Sei nun $f(x)=g(x)h(x)$ mit zum Beispiel $g(x)=x^n$ und $h(x)=x^m$. Dann gilt unter Berücksichtigung der *Potenzgesetze*, der Gleichung (11) und der verkürzten Schreibweise aus *Gleichung* (9):


$$
\begin{aligned}
\frac{d}{dx} f(x)=\frac{d}{dx} g(x)h(x) &= \frac{d}{dx} x^n x^m = \frac{d}{dx} x^{n+m} = (n+m)x^{n+m-1} \\
&= \frac{d}{dx} x^n x^m =\left( n x ^{n-1} + x^n \frac{d}{dx} \right) x^m \\
&= n x ^{n-1} x^m + x^n \frac{d}{dx} x^m \\
&= n x ^{n-1} x^m + x^n \left( m x ^{m-1} + x^m \frac{d}{dx} \right) \\
&= n x ^{n-1} x^m + x^n m x ^{m-1} \\
&= g'(x) h(x) + g(x) h'(x) \\
&= n x ^{n-1 +m} + m x ^{n+m-1 } = (n+m)x^{n+m-1} \qquad (12)
\end{aligned}
$$


{{|>}} Wie Gleichung (12) zeigt, kann diese Aufgabe mithilfe der *Potenzgesetze* schnell in einer Zeile gelöst werden. Dieses Ergebnis soll als Vergleich dienen, um die *Ableitungsregel* für *Polynome* auf die zusammengesetzte *Funktion* $f(x)$ anzuwenden. Dabei wird, wie schon beim Herleiten der *Ableitungsregel* für *Polynome*, erneut das *Einsetzungsverfahren* verwendet. In der vorletzten Zeile dieser Rechnung ist zu erkennen, dass


$$
\begin{aligned}
f'(x)= \frac{d}{dx} f(x)=\frac{d}{dx} g(x)h(x) &= g'(x) h(x) + g(x) h'(x) \;\; , \qquad (13)
\end{aligned}
$$


{{|>}} gilt. Diese *Ableitungsregel* aus Gleichung (13) wird *Leibnizregel* oder *Produktregel* genannt. Ihr Nutzen wird sich offenbaren, wenn nicht nur *Polynome* zur Diskussion stehen.


{{|>}} Mit der *Leibnizregel* und der *Substitution* soll nun noch eine weitere *Ableitungsregel* bestimmt werden. Dabei sei die *Funktion* $f(x)$ eine verkettete *Funktion*: $f(x) = g(x) \circ h(x) = g \left(h(x)\right)$. Als Beispiel seien $g(x) = x^2$ und $h(x)=2x+1$ mit den *Ableitungen* $g'(x) = 2x$ und $h'(x)=2$ gegeben. Wie es die Verkettung erfordert, wird $h(x)$ in die *Funktion* $g(x)$ eingesetzt. Daraus ergibt sich folgende Ableitung mit einer Überprüfung des Ergebnisses durch die *Ableitungsregel* für *Polynome* sowie die *binomischen Formeln*:


$$
\begin{aligned}
\frac{d}{dx} f(x)=\frac{d}{dx} g\left(h(x)\right) &= \frac{d}{dx} \left( 2x + 1 \right)^2 = \frac{d}{dx} \left(4x^2+4x +1\right) = 8x + 4 \\
&= \frac{d}{dx} \left( 2x + 1 \right)\left( 2x + 1 \right) \quad \text{Leibnizregel} \\
&= \left( 2x + 1 \right) \frac{d}{dx} \left( 2x + 1 \right) + \left( 2x + 1 \right) \frac{d}{dx} \left( 2x + 1 \right) \\
&= \left( 2x + 1 \right) 2 + \left( 2x + 1 \right) 2 \\
&= 2 \cdot 2 \left( 2x + 1 \right) \quad \text{Vergleich mit } g'(x),\, h'(x) \text{ und } h(x) \\
&= h'(x) \cdot g' \left( h(x) \right) = 8x + 4 \qquad (14)
\end{aligned}
$$


{{|>}} Die letzte Zeile offenbart durch den Vergleich der *Terme* mit den *Funktionen* $g(x)$ und $h(x)$ sowie ihren *Ableitungen* $g'(x)$ und $h'(x)$ die allgemeine Regel für die *Ableitung* verketteter *Funktionen*.


$$
\begin{aligned}
f'(x)=\frac{d}{dx} f(x)=\frac{d}{dx} g\left(h(x)\right) &= h'(x) \cdot g' \left( h(x) \right) \qquad (15)
\end{aligned}
$$


{{|>}} Diese Regel wird *Kettenregel* genannt. Ihre Bedeutung wird sich erst offenbaren, wenn *Funktionen* betrachtet werden, deren abgekürzte Schreibweise ihre Herkunft aus *Polynomen* nicht mehr offensichtlich zeigt.


{{|>}} Mittels der *Substitution* $y:=h(x)$ würde das *Polynom* in der Klammer ersetzt werden. Allerdings muss auch der *Ableitungsoperator* $\frac{d}{dx}$ in $\frac{d}{dy}$ umgewandelt werden. Dies geschieht wie folgt. Dabei sollte erwähnt werden, dass es sich lediglich um eine Nebenrechnung handelt, die der Durchführung der *Substitution* dient. Die gezeigten Rechenschritte wirken intuitiv, sind allerdings nicht ohne weitere Prüfungen und tieferliegende Mathematik durchführbar:


$$
\begin{aligned}
\frac{d}{dx} y =\frac{dy}{dx} &= h'(x) \qquad \left| \cdot dx \right. \\
dy &= dx \cdot h'(x) \qquad \left| : h'(x) \right. \\
\Rightarrow dx &= \frac{dy}{h'(x)} \qquad \text{eingesetzt in: } \frac{d}{dx} \\
\Rightarrow \frac{d}{dx} &= h'(x) \frac{d}{dy} \qquad (16)
\end{aligned}
$$


{{|>}} Der gefundene Ausdruck für $\frac{d}{dx}$ wird nun bei der Durchführung der *Substitution* eingesetzt.


$$
\begin{aligned}
\frac{d}{dx} f(x) &= \frac{d}{dx} g\left(h(x)\right) \qquad \text{mit: } y:=h(x) \text{ und: } \frac{d}{dx} = h'(x) \frac{d}{dy} \\
&= h'(x)\frac{d}{dy} g(y) \\
&= h'(x) g'(y) \qquad \text{mit: } y=h(x) \text{ zurückeingesetzt} \\
&= h'(x) g'\left(h(x)\right) \qquad (17)
\end{aligned}
$$


{{|>}} Die Gleichungen (16) und (17) zeigen eine Herleitung der *Kettenregel* ohne Spezifizierung der *Funktionen*, sodass festgehalten werden kann, dass jede *differenzierbare verkettete Funktion* mithilfe dieser Regel *ableitbar* ist.


{{|>}} Einige *Funktionen* haben eine sehr komplex anmutende Struktur, sodass ihre *Ableitung* manchmal nicht intuitiv erscheint. Häufig erscheint jedoch die *Umkehrfunktion* dieser *Funktionen* in einer einfacheren Form. Aus diesem Grund muss ein Ausdruck gefunden werden, mit dem aus der leicht zu bestimmenden *Ableitung* der zugehörigen *Umkehrfunktion* die *Ableitung* der gewünschten *Funktion* gewonnen werden kann. Als Ansatz wird die Gleichung (5.4.1) gewählt:


$$
\begin{aligned}
f\left(f^{-1}(x)\right) &= x \qquad \quad \left| \frac{d}{d x} \right. \\
\frac{d}{d x} f\left(f^{-1}(x)\right) &= \frac{d}{d x} x \qquad \quad \left| \text{Kettenregel} \right. \\
\left(\frac{d}{d x}f^{-1}(x)\right) f'\left(f^{-1}(x)\right) &= 1 \qquad \quad \left| : f'\left(f^{-1}(x)\right) \right. \\
\frac{d}{d x}f^{-1}(x) &= \frac{1}{f'\left(f^{-1}(x)\right)} \qquad (18)
\end{aligned}
$$


{{|>}} Diese Gleichung zur Bestimmung der *Ableitung* einer *Umkehrfunktion* $f^{-1}(x)$ mithilfe der zugehörigen *Funktion* $f(x)$ ermöglicht es, selbst *Umkehrfunktionen* mit unbekannter Struktur abzuleiten, da lediglich die Struktur der *Funktion* bekannt sein muss.


{{|>}} Mit den erschlossenen *Ableitungsregeln* können alle *Funktionen* abgeleitet werden, die differenzierbar sind. Allerdings bedarf es bei speziellen *Funktionsarten* noch eines technischen Zwischenschritts zur Vereinfachung, wobei die Gleichung (5.4.1) erneut ausgenutzt werden kann.


$$
\begin{aligned}
f(x) &= a^x \qquad \quad \left| \text{mit: } f\left(f^{-1}(x)\right) = x \right. \\
f(x) &= e^{\ln a^x} \qquad \quad \left| \text{mit: } \ln a^x = x \ln a \right. \\
f(x) &= e^{x \ln a} \qquad \quad \left| \frac{d}{dx} \right. \\
\Rightarrow \frac{d}{dx} f(x) &= a^x \ln a \qquad (19)
\end{aligned}
$$


{{|>}} An Gleichung (19) ist deutlich zu erkennen, wie die Verbindung zwischen *Funktion* und *Umkehrfunktion* bei der besonders leicht abzuleitenden *Exponentialfunktion* in Kombination mit den *Logarithmengesetzen* ausgenutzt wird. Mittels dieses Verfahrens kann auch die Funktion $f(x) = x^x$ abgeleitet werden:


$$
\begin{aligned}
f(x) &= x^x \qquad \quad \left| \text{mit: } f\left(f^{-1}(x)\right) = x \right. \\
f(x) &= e^{\ln x^x} \qquad \quad \left| \text{mit: } \ln x^x = x \ln x \right. \\
f(x) &= e^{x \ln x} \qquad \quad \left| \frac{d}{dx} \right. \\
\Rightarrow \frac{d}{dx} f(x) &= \left(\ln x + 1 \right) e^{x \ln x} \\
\Rightarrow \frac{d}{dx} f(x) &= \left(\ln x + 1 \right) x^x \qquad (20)
\end{aligned}
$$




***************************

