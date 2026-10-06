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













tags: Erklärung, Partielle Ableitung, Totales Differential

comment: In diesem Abschnitt werden partielle und totale Ableitungen unterschieden sowie die mehrdimensionale Kettenregel und das totale Differential erklärt.

author: Martin Lommatzsch

-->

# Partielle und totale Differentiation

{{|>}}
***************************

Es existieren verschiedene Differentialoperatoren. Viele der in der Vektoranalysis verwendeten Operatoren werden aus partiellen Ableitungen zusammengesetzt. In diesem Abschnitt wird zunächst der Unterschied zwischen partieller und totaler Differentiation herausgearbeitet.

Der bisher verwendete Operator $\frac{d}{dx}$ bildet die gewöhnliche Ableitung einer Funktion einer Variablen. Wenn weitere Größen von $x$ abhängen, werden ihre Änderungen beim Ableiten ebenfalls berücksichtigt; in diesem Zusammenhang spricht man von der totalen Ableitung nach $x$. Für eine Potenz mit positiver ganzer Zahl $n$ gilt beispielsweise:

$$
\frac{d}{dx}x^n=n x^{n-1}.
$$

{{|>}} Die bereits eingeführten [Ableitungsregeln](05_01_01_Ableitungsregeln.md) gelten weiterhin. Ist $f$ differenzierbar, folgen aus Produkt- und Summenregel:

$$
\begin{aligned}
\frac{d}{dx}f(x)&=f'(x),\\
\frac{d}{dx}\bigl(x^n f(x)\bigr)
&=n x^{n-1}f(x)+x^n f'(x),\\
\frac{d}{dx}\bigl(x^n+f(x)\bigr)
&=n x^{n-1}+f'(x).
\end{aligned}
$$

Der Operator wirkt auf den gesamten Ausdruck in der Klammer. Dabei wird auch die Abhängigkeit berücksichtigt, die in der Schreibweise $f(x)$ zusammengefasst ist.

{{|>}} Der partielle Differentialoperator wird mit $\frac{\partial}{\partial x}$ bezeichnet. Bei einer Funktion mehrerer unabhängiger Variablen wird nach einer dieser Variablen abgeleitet, während die übrigen festgehalten werden. Für die Potenz von $x$ gilt daher ebenfalls:

$$
\frac{\partial}{\partial x}x^n=n x^{n-1}.
$$

Entscheidend ist nicht, ob eine Abhängigkeit sichtbar oder in einem Funktionsterm verborgen ist, sondern welche Variablen beim Ableiten unabhängig voneinander behandelt werden. Auch bei partiellen Ableitungen gelten Produkt-, Summen- und Kettenregel.

{{|>}} Zur Gegenüberstellung betrachten wir zunächst die Funktion zweier unabhängiger Variablen:

$$
f(x,y)=x^n+y.
$$

Bei der partiellen Ableitung nach $x$ bleibt $y$ konstant. Bei der partiellen Ableitung nach $y$ bleibt umgekehrt $x$ konstant:

$$
\begin{aligned}
\frac{\partial f}{\partial x}(x,y)&=n x^{n-1},\\
\frac{\partial f}{\partial y}(x,y)&=1.
\end{aligned}
$$

{{|>}} Nun wird zusätzlich eine differenzierbare Abhängigkeit $y=y(x)$ vorgegeben. Durch Einsetzen entsteht die Funktion einer Variablen $F(x)=f(x,y(x))=x^n+y(x)$.

Die partielle Ableitung der ursprünglichen Funktion und die totale Ableitung entlang dieser Abhängigkeit lauten:

$$
\begin{aligned}
\left.\frac{\partial f}{\partial x}(x,y)\right|_{y=y(x)}
&=n x^{n-1},\\
\frac{d}{dx}f(x,y(x))
&=n x^{n-1}+y'(x).
\end{aligned}
$$

In der ersten Zeile wird zuerst bei festem $y$ partiell abgeleitet und erst danach $y=y(x)$ eingesetzt. In der zweiten Zeile wird die bereits zusammengesetzte Funktion nach $x$ abgeleitet. Dann trägt auch die Änderung von $y(x)$ zum Ergebnis bei.

{{|>}} Allgemein ergibt sich für eine differenzierbare Funktion $f(x,y)$ entlang $y=y(x)$ mit der Kettenregel:

$$
\begin{aligned}
\frac{d}{dx}f(x,y(x))
&=\frac{\partial f}{\partial x}(x,y(x))\\
&\quad+\frac{\partial f}{\partial y}(x,y(x))\,y'(x).
\end{aligned}
$$

Beim Beispiel $f(x,y)=x^n+y$ ist $\frac{\partial f}{\partial y}=1$, sodass der zusätzliche Beitrag gerade $y'(x)$ ist.

Die Deklaration der unabhängigen Variablen und ihrer Abhängigkeiten ist deshalb wesentlich. Bei einer Funktion nur einer unabhängigen Variablen stimmen gewöhnliche und partielle Ableitung überein. Bei mehreren Variablen muss angegeben werden, welche festgehalten werden und welche sich mitändern.

{{|>}} Hängen die drei Variablen einer Funktion $f(x,y,z)$ von einem Parameter $t$ ab, wird die Ableitung von $f(x(t),y(t),z(t))$ nach $t$ aus drei Beiträgen zusammengesetzt. Vorausgesetzt wird, dass $f$ an den betrachteten Punkten total differenzierbar ist und $x(t)$, $y(t)$ sowie $z(t)$ differenzierbar sind. Für $f$ genügt beispielsweise, dass seine partiellen Ableitungen in einer Umgebung stetig sind.

Mit der abkürzenden Schreibweise $\frac{df}{dt}=\frac{d}{dt}f(x(t),y(t),z(t))$ lautet die mehrdimensionale Kettenregel:

$$
\frac{df}{dt}
=\frac{\partial f}{\partial x}\frac{dx}{dt}
+\frac{\partial f}{\partial y}\frac{dy}{dt}
+\frac{\partial f}{\partial z}\frac{dz}{dt}.
$$

Alle partiellen Ableitungen auf der rechten Seite werden am selben Punkt $(x(t),y(t),z(t))$ ausgewertet. Jeder Beitrag beschreibt die Änderung über eine der drei Variablen.

{{|>}} In Differentialschreibweise ergibt sich daraus:

$$
\begin{aligned}
df
&=\frac{\partial f}{\partial x}\,dx
+\frac{\partial f}{\partial y}\,dy
+\frac{\partial f}{\partial z}\,dz,\\
dx&=x'(t)\,dt,\\
dy&=y'(t)\,dt,\\
dz&=z'(t)\,dt.
\end{aligned}
$$

Der Ausdruck für $df$ heißt totales Differential. Er beschreibt den linearen Anteil der Funktionsänderung durch Änderungen aller unabhängigen Variablen. Die Ableitung $\frac{df}{dt}$ und das Differential $df$ sind daher zu unterscheiden: Erst durch Vorgabe einer Abhängigkeit von $t$ erhält man die Änderungsrate entlang dieser Abhängigkeit.

{{|>}} Die Bildung und Verwendung des totalen Differentials spielt bei weiterführenden Integrationsaufgaben und bei Koordinatentransformationen, also beim Wechsel der Koordinatenbeschreibung, eine wichtige Rolle. Diese Zusammenhänge werden in der Vektoranalysis weiter vertieft.

Auch bei der Fehlerrechnung ist die Unterscheidung wichtig: Die partiellen Ableitungen beschreiben, wie empfindlich eine Funktion auf Änderungen einzelner Eingangsgrößen reagiert. Das totale Differential fasst deren Beiträge zur linearen Änderung der Ergebnisgröße zusammen.

***************************

