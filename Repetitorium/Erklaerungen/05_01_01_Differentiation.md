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












tags: Erklärung, Ableitungen

comment: In diesem Abschnitt werden die Grundlagen der Differentiation ausführlich erklärt.

author: Martin Lommatzsch

-->

# Differentiation




{{|>}}
***************************

Die *Differentiation* und die *Integration* sind wichtige Kernelemente der *Analysis*. Um diese beiden *Operationen* effektiv einzuführen, sollte die *Geradengleichung* $f(x) = m x + b$ mit der *Steigung* der *Geraden* $m$ und dem *Ordinatenschnittpunkt* $b$ nochmals ins Gedächtnis gerufen werden.

{{|>}} Seien die *Geraden* $f(x) = x$ und $f'(x) = 1$ gegeben. Anhand der Veranschaulichung im *Koordinatensystem* ist zu erkennen, dass die *Steigung* der *Geraden* $f(x)$ gleich dem Wert der *Geraden* $f'(x)$, also gleich eins, ist. Die *Steigung* der *Geraden* $f'(x)$ ist null, da es sich, wie im *Koordinatensystem* zu erkennen ist, um eine *Konstante* handelt.




<center>

@Koordinatensystem(`xmin=-0.8;xmax=4.8;ymin=-0.8;ymax=4.2;width=680;id=DIFF01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=DIFF01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`DIFF01;f=0;x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);linestyle=solid`)
@PlotFunktion(`DIFF01;df=0;1;rgb(var(--color-text,51,51,51));linestyle=solid`)
@Strecke(`DIFF01;[[2;2];[3;2];[3;3]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`DIFF01;[2.5;1.72];$\Large \Delta x=1$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIFF01;[3.6;2.45];$\Large \Delta y=m$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`DIFF01;[2.25;3.5];$\Large f(x)=x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`DIFF01;[3.8;0.65];$\Large f'(x)=1$;rgb(var(--color-text,51,51,51));1`)

</center>



{{|>}} Dabei ist der Begriff „*Steigung*“ folgendermaßen *definiert*: „Wenn man von der *Geraden* aus einen Einheitsschritt nach rechts geht, entspricht die *Steigung* der *Geraden* der Anzahl der Einheitsschritte *orthogonal* zum gegangenen Schritt – folglich nach oben bei positiver *Steigung* und nach unten bei negativer *Steigung*.“




{{|>}} Mathematisch lässt sich ein Ausdruck definieren, der sprachlich fordert: „*Bestimme die Steigung der Funktion!*“ Diese Forderung wird durch den sogenannten *Differentialoperator* $\frac{d}{d x}$ erfüllt, der „*d nach d x*“ gelesen wird. Ein solcher *Operator* wirkt nur nach rechts. Das heißt, dass alle *Größen*, die links vom *Operator* stehen, unangetastet bleiben. Somit soll folgende Rechenvorschrift für den *Operator* gelten, um den im vorherigen *Koordinatensystem* veranschaulichten Forderungen gerecht zu werden:


$$
\begin{aligned}
\frac{d}{d x} x &= 1 \qquad \text{siehe Funktionenbeispiel} \\
\frac{d}{d x} 1 &= 0 \qquad \text{im Koordinatensystem} \qquad (1)
\end{aligned}
$$


{{|>}} Das *Kommutativgesetz*, das für normale Zahlen, *Parameter* und *Variablen* gilt, wird beispielsweise durch folgende Gleichungen beschrieben:


$$
\begin{aligned}
3\cdot 5 - 5 \cdot 3 &= 0 \\
a\cdot b - b \cdot a &= 0 = \left[ a , b \right] \qquad , \qquad (2)
\end{aligned}
$$


{{|>}} Dabei bezeichnet $\left[ a , b \right] = a\cdot b - b \cdot a = 0$ den sogenannten *Kommutator*. Für den *Differentialoperator* verändert sich dieser Zusammenhang wie folgt:


$$
\begin{aligned}
\left[ \frac{d}{d x} , x \right] &= \frac{d}{d x} x - x \frac{d}{d x} \\
&= \frac{d}{d x} x - x \frac{d}{d x} 1 \\
&= 1 - 0 \\
&= 1 \qquad . \qquad (3)
\end{aligned}
$$


{{|>}} Durch *Äquivalenzumformung* der Gleichung (3) ergibt sich:


$$
\begin{aligned}
\frac{d}{d x} x - x \frac{d}{d x} &= 1 \qquad \left| + x \frac{d}{d x} \right. \\
{}\textcolor{#ff0000}{\frac{d}{d x} x} &= \textcolor{#33cc33}{1 + x \frac{d}{d x}} \qquad (4)
\end{aligned}
$$


{{|>}} Dieser Ausdruck ist von zentraler Bedeutung, da er es durch ein triviales *Einsetzungsverfahren* ermöglicht, den *Operator* an einer *Variablen* vorbeizuziehen. Ist zum Beispiel die *Steigung* der *Funktion* $g(x) = x^2$ gesucht, lässt sie sich mithilfe der Gleichung (4) bestimmen, indem *Terme* der Form $\frac{d}{d x}x$ durch den Ausdruck $\left(1 + x\frac{d}{d x}\right)$ ersetzt werden.


$$
\begin{aligned}
\frac{d}{d x} x^2 &= \textcolor{#ff0000}{\frac{d}{d x}x} \cdot x \\
&= \textcolor{#33cc33}{\left(1 + x\frac{d}{d x}\right)}x \\
&= x + x\textcolor{#ff0000}{\frac{d}{d x}x} \\
&= x + x\textcolor{#33cc33}{\left(1 + x\frac{d}{d x}\right)} \\
&= x + x + x^2\underbrace{\frac{d}{d x}}_{=0} \\
&= 2x \qquad (5)
\end{aligned}
$$


{{|>}} Ähnlich verhält sich das Prozedere bei der *Funktion* $h(x) = x^3$, wobei lediglich die Anzahl der Schritte zunimmt.


$$
\begin{aligned}
\frac{d}{d x} x^3 &= \textcolor{#ff0000}{\frac{d}{d x}x} \cdot x \cdot x \\
&= \textcolor{#33cc33}{\left(1 + x\frac{d}{d x}\right)}x \cdot x \\
&= x \cdot x + x\textcolor{#ff0000}{\frac{d}{d x}x} \cdot x \\
&= x \cdot x + x\textcolor{#33cc33}{\left(1 + x\frac{d}{d x}\right)} \cdot x \\
&= x \cdot x + x \cdot x + x^2\textcolor{#ff0000}{\frac{d}{d x}\cdot x} \\
&= x \cdot x + x \cdot x + x^2\textcolor{#33cc33}{\left(1 + x\frac{d}{d x}\right)} \\
&= x^2 + x^2 + x^2 + x^3\underbrace{\frac{d}{d x}}_{=0} \\
&= 3x^2 \qquad (6)
\end{aligned}
$$


{{|>}} Dies lässt sich auch für $x^4$ und höhere *Potenzen* von $x$ bestimmen, wobei sich lediglich die Anzahl der Schritte weiter erhöhen würde. Bei der Gegenüberstellung der Ergebnisse ist eine Regel für die *Ableitung* von *Polynomen* erkennbar, sodass die Prozedur des wiederholten Einsetzens überflüssig wird.


$$
\begin{aligned}
\frac{d}{d x}1 &= 0 \\
\frac{d}{d x}x &= 1 + x\frac{d}{d x} = 1 \\
\frac{d}{d x}x^2 &= 2x + x^2\frac{d}{d x} = 2x \\
\frac{d}{d x}x^3 &= 3x^2 + x^3\frac{d}{d x} = 3x^2 \\
\frac{d}{d x}x^4 &= 4x^3 + x^4\frac{d}{d x} = 4x^3 \\
\frac{d}{d x}x^5 &= 5x^4 + x^5\frac{d}{d x} = 5x^4 \qquad (7)
\end{aligned}
$$


{{|>}} Gleichung (7) zeigt deutlich, dass sich die Potenz bei der Anwendung des *Differentialoperators* um eins verringert und als *Vorfaktor* wiederzufinden ist. Somit ergibt sich folgende allgemeine Regel für die Anwendung des *Differentialoperators* – es wird auch vom „*Ableiten*“ gesprochen – auf ein *Polynom*:


$$
\begin{aligned}
\frac{d}{d x}x^n &= nx^{n-1} + x^n\frac{d}{d x} \\
\Rightarrow \frac{d}{d x}x^n &= nx^{n-1} \qquad (8)
\end{aligned}
$$


{{|>}} Als verkürzende Schreibweise soll von nun an gelten:


$$
\begin{aligned}
\frac{d}{d x}f(x) &= f'(x) \qquad . \qquad (9)
\end{aligned}
$$


{{|>}} Dabei bedeutet der Strich bei $f'(x)$, dass es sich um die *Ableitung* der *Funktion* $f(x)$ handelt und dass der wirkende *Differentialoperator* nach $x$ (also $\frac{d}{d x}$) gewirkt hat. So gilt zum Beispiel ebenso:


$$
\begin{aligned}
\frac{d}{d y}f(y) &= f'(y) \qquad \text{Funktion von } y, \text{ daher Differentialoperator nach } y \\
\frac{d}{d z}f(z) &= f'(z) \qquad \text{Funktion von } z, \text{ daher Differentialoperator nach } z \\
\frac{d}{d t}x(t) &= \dot{x}(t) \qquad \text{Funktion von } t, \text{ daher Differentialoperator nach } t, \qquad (10)
\end{aligned}
$$


{{|>}} Dabei ist Letzteres ein Spezialfall der Physik, da nach der Zeit $t$ *abgeleitet* wurde. Generell werden in der Physik die *Ableitungen* nach der Zeit mit einem *Punkt* über der *Funktion* beschrieben.


{{|>}} Da in den Schulen fast ausschließlich der *Differentialquotient* benutzt wird, um diese neuen mathematischen *Operationen* einzuführen, wird dieser in einem Nachtragsabschnitt (*Differentialquotient*) erläutert.



***************************

