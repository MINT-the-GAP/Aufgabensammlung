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













tags: Erklärung, Monotonie, Satz von l'Hôpital

comment: In diesem Abschnitt werden Monotonie mithilfe der Ableitung und der Satz von l'Hôpital zur Grenzwertberechnung erklärt.

author: Martin Lommatzsch

-->

# Monotonie

{{|>}}
***************************

Das Monotonieverhalten beschreibt, ob eine Funktion bei zunehmenden Argumenten steigt, fällt oder konstant bleibt. Dabei wird immer ein bestimmter Bereich des Definitionsbereichs $\mathbb{D}$ betrachtet.

Eine Funktion heißt streng monoton steigend, wenn zu zwei beliebigen Argumenten $x_1<x_2$ stets $f(x_1)<f(x_2)$ gilt. Bei streng monoton fallendem Verhalten gilt entsprechend $f(x_1)>f(x_2)$. Monoton steigend beziehungsweise monoton fallend erlaubt zusätzlich gleiche Funktionswerte: Dann gilt $f(x_1)\leq f(x_2)$ beziehungsweise $f(x_1)\geq f(x_2)$.

Ein konstanter Abschnitt schließt strenge Monotonie auf dem gesamten betrachteten Bereich aus. Er ist aber mit monoton steigendem oder fallendem Verhalten vereinbar, solange sich die Richtung nicht umkehrt. Eine überall konstante Funktion ist sowohl monoton steigend als auch monoton fallend, aber nicht streng monoton.

{{|>}} Bei einer differenzierbaren Funktion kann die [Ableitung](05_01_01_Differentiation.md) zum Untersuchen der Monotonie verwendet werden. Sei $I\subseteq\mathbb{D}$ ein offenes Intervall, auf dem $f$ differenzierbar ist. Dann gelten:

$$
\begin{aligned}
f'(x)>0\quad \forall x\in I
&\quad\Rightarrow\quad \text{streng monoton steigend auf }I,\\
f'(x)<0\quad \forall x\in I
&\quad\Rightarrow\quad \text{streng monoton fallend auf }I,\\
f'(x)\geq0\quad \forall x\in I
&\quad\Rightarrow\quad \text{monoton steigend auf }I,\\
f'(x)\leq0\quad \forall x\in I
&\quad\Rightarrow\quad \text{monoton fallend auf }I.
\end{aligned}
$$

Gilt $f'(x)=0\quad \forall x\in I$, ist $f$ auf $I$ konstant. Gehören Randpunkte zum betrachteten Intervall, lassen sich diese bei Stetigkeit von $f$ an den Randpunkten in die Monotonieaussage einbeziehen.

Die Bedingungen mit $f'(x)>0$ beziehungsweise $f'(x)<0$ sind hinreichend für strenge Monotonie, aber nicht notwendig. Beispielsweise ist $g(x)=x^3$ auf $\mathbb{R}$ streng monoton steigend, obwohl $g'(0)=0$ ist. Eine einzelne Stelle mit Ableitung null ist also kein konstanter Abschnitt.

{{|>}} Das Monotonieverhalten kann auf verschiedenen Intervallen unterschiedlich sein. Für die Funktion $f(x)=x^2$ gilt:

$$
f'(x)=\frac{d}{dx}x^2=2x.
$$

Damit erhalten wir:

$$
\begin{aligned}
f'(x)<0\quad \forall x\in(-\infty,0)
&\quad\Rightarrow\quad \text{streng monoton fallend},\\
f'(x)>0\quad \forall x\in(0,\infty)
&\quad\Rightarrow\quad \text{streng monoton steigend}.
\end{aligned}
$$

Links von null fällt die Parabel, rechts von null steigt sie. Da $f$ bei null stetig ist, gilt dies auch auf $(-\infty,0]$ beziehungsweise $[0,\infty)$. Auf ganz $\mathbb{R}$ ist die Funktion dagegen weder monoton steigend noch monoton fallend. Der [Tiefpunkt](05_02_01_Extrem.md) liegt bei $S(0 \mid 0)$.

Die Intervallvoraussetzung ist wichtig: Über eine Definitionslücke hinweg darf das Vorzeichen der Ableitung nicht ohne Weiteres auf den gesamten Definitionsbereich übertragen werden. Beispielsweise hat $u(x)=\frac1x$ überall in $\mathbb{R}\setminus\{0\}$ eine negative Ableitung. Die Funktion fällt streng monoton auf jedem der Intervalle $(-\infty,0)$ und $(0,\infty)$, aber nicht auf dem gesamten Definitionsbereich: Es gilt $-1<1$, jedoch $u(-1)=-1<1=u(1)$.

{{|>}} Der Satz von l'Hôpital dient einem anderen Zweck: Er erleichtert unter bestimmten Voraussetzungen die Berechnung von [Grenzwerten](04_11_06_Grenzwert.md) eines Quotienten. Er gilt nicht nur für gebrochen rationale Funktionen und ist kein allgemeines Verfahren zur Monotonieuntersuchung.

Für $f(x)=\frac{g(x)}{h(x)}$ seien $g$ und $h$ in einer Umgebung von $x_0$, außer möglicherweise bei $x_0$ selbst, differenzierbar. Dort müssen $h(x)\ne0$ und $h'(x)\ne0$ gelten. Außerdem muss beim betrachteten Grenzübergang eine der unbestimmten Formen $0/0$ oder $\infty/\infty$ vorliegen: Zähler und Nenner gehen entweder beide gegen null oder beide jeweils gegen $+\infty$ beziehungsweise $-\infty$. Diese Schreibweisen bezeichnen Grenzwertsituationen, keine ausgerechneten Quotienten.

Existiert der Grenzwert des Quotienten der Ableitungen als reelle Zahl oder als $+\infty$ beziehungsweise $-\infty$, gilt:

$$
\lim_{x\to x_0}f(x)
=\lim_{x\to x_0}\frac{g(x)}{h(x)}
=\lim_{x\to x_0}\frac{g'(x)}{h'(x)}.
$$

Die Regel gilt entsprechend für einseitige Grenzwerte und Grenzübergänge $x\to\pm\infty$, wenn die Voraussetzungen auf der betrachteten Seite beziehungsweise für hinreichend große Beträge von $x$ erfüllt sind.

{{|>}} Zähler und Nenner werden dabei einzeln abgeleitet. Das ist nicht die Ableitung des gesamten Quotienten nach der Quotientenregel. Auch dürfen die Grenzwerte von Zähler und Nenner des neuen Quotienten nicht beliebig getrennt berechnet und anschließend dividiert werden; dafür müssen zusätzlich die üblichen Grenzwertsätze anwendbar sein.

Ein Beispiel mit der unbestimmten Form $0/0$ ist:

$$
\begin{aligned}
\lim_{x\to1}\frac{x^2-1}{x-1}
&=\lim_{x\to1}\frac{2x}{1}\\
&=2.
\end{aligned}
$$

Hier gehen Zähler und Nenner gegen null, beide sind differenzierbar und die Ableitung des Nenners ist $1\ne0$. Der Grenzwert des Quotienten der Ableitungen existiert. Dasselbe Ergebnis lässt sich durch Kürzen von $x-1$ für $x\ne1$ erhalten. l'Hôpital ist also eine mögliche Hilfe, aber nicht bei jedem Quotienten nötig oder zulässig.

***************************
