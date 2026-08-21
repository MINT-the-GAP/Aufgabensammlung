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

@Koordinatensystem(`xmin=-0.75;xmax=4.75;ymin=-0.75;ymax=4.25;width=820;id=DIFF_E1;achsen=0;grid=0;border=0`)

@Flaeche(`DIFF_E1;[[-0.74;-0.74];[4.74;-0.74];[4.74;4.24];[-0.74;4.24]];#ffffff;1;inhalt=0;umfang=0`)

@Strecke(`DIFF_E1;[[-0.25;-0.5];[-0.25;3.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[0.25;-0.5];[0.25;3.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[0.75;-0.5];[0.75;3.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[1.25;-0.5];[1.25;3.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[1.75;-0.5];[1.75;3.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[2.25;-0.5];[2.25;3.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[2.75;-0.5];[2.75;3.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[3.25;-0.5];[3.25;3.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[3.75;-0.5];[3.75;3.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)

@Strecke(`DIFF_E1;[[-0.5;-0.25];[3.75;-0.25]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[-0.5;0.25];[3.75;0.25]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[-0.5;0.75];[3.75;0.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[-0.5;1.25];[3.75;1.25]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[-0.5;1.75];[3.75;1.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[-0.5;2.25];[3.75;2.25]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[-0.5;2.75];[3.75;2.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[-0.5;3.25];[3.75;3.25]];#b8b8b8;;design=-;1px;linestyle=dashed`)
@Strecke(`DIFF_E1;[[-0.5;3.75];[3.75;3.75]];#b8b8b8;;design=-;1px;linestyle=dashed`)

@Strecke(`DIFF_E1;[[-0.5;-0.5];[-0.5;3.75]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[0.5;-0.5];[0.5;3.75]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[1;-0.5];[1;3.75]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[1.5;-0.5];[1.5;3.75]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[2;-0.5];[2;3.75]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[2.5;-0.5];[2.5;3.75]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[3;-0.5];[3;3.75]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[3.5;-0.5];[3.5;3.75]];#8f8f8f;;design=-;1px`)

@Strecke(`DIFF_E1;[[-0.5;-0.5];[3.75;-0.5]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.5;0.5];[3.75;0.5]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.5;1];[3.75;1]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.5;1.5];[3.75;1.5]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.5;2];[3.75;2]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.5;2.5];[3.75;2.5]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.5;3];[3.75;3]];#8f8f8f;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.5;3.5];[3.75;3.5]];#8f8f8f;;design=-;1px`)

@Strecke(`DIFF_E1;[[-0.75;0];[3.8;0]];#000000;;design=->;2px`)
@Strecke(`DIFF_E1;[[0;-0.75];[0;3.8]];#000000;;design=->;2px`)

@Strecke(`DIFF_E1;[[-0.5;-0.5];[4;4]];#ff0000;;design=-;3px`)
@Strecke(`DIFF_E1;[[-0.5;1];[4.05;1]];#000000;;design=-;3px`)

@Strecke(`DIFF_E1;[[2;2];[3;2]];#000000;;design=->;2px`)
@Strecke(`DIFF_E1;[[3;2];[3;3]];#000000;;design=->;2px`)

@Strecke(`DIFF_E1;[[-0.5;-0.05];[-0.5;0.05]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[0.5;-0.05];[0.5;0.05]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[1;-0.05];[1;0.05]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[1.5;-0.05];[1.5;0.05]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[2;-0.05];[2;0.05]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[2.5;-0.05];[2.5;0.05]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[3;-0.05];[3;0.05]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[3.5;-0.05];[3.5;0.05]];#000000;;design=-;1px`)

@Strecke(`DIFF_E1;[[-0.05;-0.5];[0.05;-0.5]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.05;0.5];[0.05;0.5]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.05;1];[0.05;1]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.05;1.5];[0.05;1.5]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.05;2];[0.05;2]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.05;2.5];[0.05;2.5]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.05;3];[0.05;3]];#000000;;design=-;1px`)
@Strecke(`DIFF_E1;[[-0.05;3.5];[0.05;3.5]];#000000;;design=-;1px`)

@KoordText(`DIFF_E1;[-0.5;-0.2];$-0{,}5$;#000000;1`)
@KoordText(`DIFF_E1;[-0.12;-0.2];$0$;#000000;1`)
@KoordText(`DIFF_E1;[0.5;-0.2];$0{,}5$;#000000;1`)
@KoordText(`DIFF_E1;[1;-0.2];$1$;#000000;1`)
@KoordText(`DIFF_E1;[1.5;-0.2];$1{,}5$;#000000;1`)
@KoordText(`DIFF_E1;[2;-0.2];$2$;#000000;1`)
@KoordText(`DIFF_E1;[2.5;-0.2];$2{,}5$;#000000;1`)
@KoordText(`DIFF_E1;[3;-0.2];$3$;#000000;1`)
@KoordText(`DIFF_E1;[3.5;-0.2];$3{,}5$;#000000;1`)

@KoordText(`DIFF_E1;[-0.22;-0.5];$-0{,}5$;#000000;1`)
@KoordText(`DIFF_E1;[-0.18;0.5];$0{,}5$;#000000;1`)
@KoordText(`DIFF_E1;[-0.14;1];$1$;#000000;1`)
@KoordText(`DIFF_E1;[-0.18;1.5];$1{,}5$;#000000;1`)
@KoordText(`DIFF_E1;[-0.14;2];$2$;#000000;1`)
@KoordText(`DIFF_E1;[-0.18;2.5];$2{,}5$;#000000;1`)
@KoordText(`DIFF_E1;[-0.14;3];$3$;#000000;1`)
@KoordText(`DIFF_E1;[-0.18;3.5];$3{,}5$;#000000;1`)

@KoordText(`DIFF_E1;[3.93;-0.02];$x$;#000000;1`)
@KoordText(`DIFF_E1;[0;3.95];$y$;#000000;1`)
@KoordText(`DIFF_E1;[4.34;4.03];$f(x)=x$;#ff0000;1`)
@KoordText(`DIFF_E1;[4.35;1];$f^{\prime}(x)=1$;#000000;1`)
@KoordText(`DIFF_E1;[2.5;1.84];$1$;#000000;1`)
@KoordText(`DIFF_E1;[3.14;2.5];$m$;#000000;1`)

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

