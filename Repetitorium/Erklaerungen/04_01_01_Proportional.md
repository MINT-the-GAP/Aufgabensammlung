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













tags: Erklärung, Proportional, Antiproportional

comment: In diesem Abschnitt werden direkte und indirekte Proportionalität, die Bestimmung des Proportionalitätsfaktors sowie Abhängigkeiten von Potenzen und mehreren Größen erklärt.

author: Martin Lommatzsch

-->

# Proportionalitäten

{{|>}}
***************************

Auch wenn die genaue Funktionsgleichung noch unbekannt ist, lässt sich manchmal bereits beschreiben, wie zwei Größen zusammenhängen. Zwei wichtige Arten solcher Zusammenhänge sind die direkte Proportionalität und die Antiproportionalität. Sie erfassen aber nicht alle möglichen Zuordnungen.

Ist die Größe $x$ direkt proportional zur Größe $t$, schreiben wir:

$$
x\propto t.
$$

Das Zeichen $\propto$ bedeutet „ist proportional zu“. Es besagt, dass es einen festen Proportionalitätsfaktor $a$ gibt, sodass für alle betrachteten Werte gilt:

$$
x(t)=a t.
$$

Für $t\neq0$ ist somit der Quotient konstant:

$$
\frac{x(t)}{t}=a.
$$

Wird $t$ verdoppelt, verdoppelt sich auch $x(t)$; wird $t$ verdreifacht, verdreifacht sich $x(t)$. Das gilt jeweils, sofern die betrachteten Werte zum Definitionsbereich gehören. Ist $t=0$ zugelassen, folgt $x(0)=0$. Der Graph liegt auf einer Geraden durch den Ursprung.

{{|>}} Aus einer bekannten Proportionalität und einem Wertepaar mit $t\neq0$ lässt sich der Faktor bestimmen. Für das Wertepaar $(t\mid x)=(1\mid2)$ erhalten wir:

$$
2=a\cdot1
\quad\Longleftrightarrow\quad
a=2.
$$

Damit lautet die Funktionsgleichung:

$$
x(t)=2t.
$$

Das zweite vorgegebene Wertepaar $(4\mid8)$ liefert denselben Faktor:

$$
8=a\cdot4
\quad\Longleftrightarrow\quad
a=\frac84=2.
$$

Die Wertepaare passen also beide zum proportionalen Modell. Ein Gleichungssystem mit zwei unbekannten Parametern ist hier nicht nötig: In $x(t)=a t$ ist nur $a$ unbekannt. Das Paar $(0\mid0)$ allein würde dagegen nicht genügen, denn es passt zu jedem Faktor $a$.

Einzelne passende Wertepaare beweisen noch nicht, dass eine unbekannte Zuordnung überall proportional ist. Die Bestimmung von $a$ setzt voraus, dass der proportionale Zusammenhang bereits bekannt ist oder als Modell angenommen wird.

{{|>}} Nicht jede Gerade beschreibt eine direkte Proportionalität. Bei der allgemeinen [linearen Funktion](04_03_01_Geraden.md)

$$
x(t)=a t+b
$$

ist die Zuordnung nur dann direkt proportional, wenn $b=0$ gilt. Sind $a$ und $b$ beide unbekannt, braucht man zwei Wertepaare mit verschiedenen Argumenten $t$, um diese zwei Parameter eindeutig zu bestimmen.

{{|>}} Bei einer Antiproportionalität, auch indirekte Proportionalität genannt, ist eine Größe proportional zum Kehrwert der anderen. Ist beispielsweise $F$ antiproportional zu $r$, gilt:

$$
F\propto\frac1r
\quad\Longleftrightarrow\quad
F(r)=\frac{c}{r},
\qquad r\neq0.
$$

Dabei ist $c$ eine feste, von null verschiedene Konstante. Anders als bei einer direkten Proportionalität ist jetzt nicht der Quotient, sondern das Produkt konstant:

$$
r\cdot F(r)=c.
$$

Wird $r$ verdoppelt, halbiert sich $F(r)$; wird $r$ verdreifacht, wird $F(r)$ durch drei geteilt. Auch hier genügt ein geeignetes Wertepaar, um $c$ zu bestimmen: Man multipliziert seine beiden Werte.

Zum Beispiel ergibt $r=2$ und $F=6$ den Faktor $c=12$. Damit gilt:

$$
F(r)=\frac{12}{r},
\qquad
F(2)=6,\quad F(4)=3,\quad F(6)=2.
$$

Der zugehörige Graph ist eine [Hyperbel](04_06_01_Hyperbel.md). In Anwendungen ist der Definitionsbereich häufig auf $r>0$ eingeschränkt. Die Aussage „Je größer $r$, desto kleiner $F$“ allein reicht nicht aus, um Antiproportionalität festzustellen; entscheidend ist das konstante Produkt.

{{|>}} Als weiterführenden Ausblick betrachten wir Proportionalitäten zu Potenzen. Die Aussage $x\propto t^n$ bedeutet bei fest vorgegebenem Exponenten $n$:

$$
x(t)=a t^n.
$$

Dabei betrachten wir nur Werte, für die $t^n$ definiert ist. Hier ist $x$ proportional zu $t^n$, nicht allgemein direkt proportional zu $t$. Beispielsweise führt $x\propto t^2$ beim Verdoppeln von $t$ zur Vervierfachung von $x$. Auch in diesem Potenzansatz ist nur der Faktor $a$ unbekannt. Ein Wertepaar mit $t^n\neq0$ genügt daher zur Bestimmung von $a$.

Davon zu unterscheiden ist ein allgemeines [Polynom](04_07_01_Polynomfunktion.md) vom Grad höchstens $n$, wobei $n$ zunächst eine positive ganze Zahl ist:

$$
x(t)=a_n t^n+a_{n-1}t^{n-1}+\cdots+a_1t+a_0.
$$

Dieser Ansatz hat $n+1$ zunächst unbekannte Koeffizienten. Zu seiner eindeutigen Bestimmung benötigt man im Allgemeinen $n+1$ Wertepaare mit verschiedenen Argumenten. Für $n=0$ bleibt nur die konstante Funktion $x(t)=a_0$ mit einem unbekannten Koeffizienten. Die Anzahl der benötigten Angaben hängt also von den unbekannten Parametern des gewählten Modells ab, nicht allein von der höchsten Potenz.

Ebenso bedeutet $F\propto1/r^n$, dass $F(r)=c/r^n$ gilt. Für positive ganze Zahlen $n$ beschreibt dies eine Kehrwertpotenz; die gewöhnliche Antiproportionalität zu $r$ ist der Fall $n=1$.

{{|>}} In naturwissenschaftlichen Modellen können mehrere Abhängigkeiten gleichzeitig auftreten. Dabei muss jeweils angegeben werden, welche anderen Größen konstant gehalten werden.

Nehmen wir als mathematisches Beispiel positive, unabhängig veränderbare Größen $r$, $q$ und $Q$ an. Für alle betrachteten Werte soll gelten:

$$
\begin{aligned}
F&\propto\frac1r
&&\text{bei festen }q,Q,\\
F&\propto q
&&\text{bei festen }r,Q,\\
F&\propto Q
&&\text{bei festen }r,q.
\end{aligned}
$$

Dann lassen sich die Abhängigkeiten zusammenfassen:

$$
F\propto\frac{qQ}{r}
\quad\Longleftrightarrow\quad
F(r,q,Q)=k\frac{qQ}{r}.
$$

Der gemeinsame Faktor $k$ ist unabhängig von $r$, $q$ und $Q$, kann aber von weiteren, hier konstant gehaltenen Bedingungen abhängen. Die Buchstaben bezeichnen in diesem Beispiel nur allgemeine Größen; damit wird kein bestimmtes Naturgesetz behauptet.

Verdoppelt man beispielsweise $q$, verdreifacht $Q$ und verdoppelt gleichzeitig $r$, wird $F$ insgesamt mit dem Faktor $2\cdot3/2=3$ multipliziert. Die Einzelabhängigkeiten dürfen nur dann so kombiniert werden, wenn sie tatsächlich bei unabhängig veränderten Größen und ansonsten gleichen Bedingungen gelten.

***************************
