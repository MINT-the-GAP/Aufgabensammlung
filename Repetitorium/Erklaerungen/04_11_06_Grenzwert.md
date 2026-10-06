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













tags: Erklärung, Grenzwerte

comment: In diesem Abschnitt werden einseitige Grenzwerte, Polstellen und Asymptoten, wichtige Folgengrenzwerte sowie das Grenzverhalten linearer und exponentieller Funktionen erklärt.

author: Martin Lommatzsch

-->

# Grenzwerte

{{|>}}
***************************

Bei den [Hyperbeln](04_06_01_Hyperbel.md) haben wir Funktionen kennengelernt, die nicht für alle reellen Argumente definiert sind. Beispielsweise gehört die Stelle $x_L=0$ weder zur Definitionsmenge von $f(x)=\frac1x$ noch zu der von $g(x)=\frac1{x^2}$. Trotzdem können wir untersuchen, wie sich die Funktionswerte verhalten, wenn sich $x$ dieser Stelle nähert.

Bei $\frac1x$ werden die Funktionswerte für negative Argumente nahe null betragsmäßig immer größer und bleiben negativ. Für positive Argumente nahe null wachsen sie dagegen unbegrenzt ins Positive. Bei $\frac1{x^2}$ wachsen die Funktionswerte auf beiden Seiten unbegrenzt ins Positive.

Die Stelle $x_L=0$ heißt deshalb bei $\frac1x$ Polstelle mit Vorzeichenwechsel, bei $\frac1{x^2}$ Polstelle ohne Vorzeichenwechsel. Es handelt sich nicht um einen Sprung zwischen zwei endlichen Funktionswerten. An der Polstelle selbst ist keine der beiden Funktionen definiert.

{{|>}} Um das Verhalten in der Nähe einer Stelle oder für betragsmäßig immer größere Argumente zu beschreiben, verwenden wir Grenzwerte. Die Schreibweise

$$
\lim_{x\to x_L} f(x)=L
$$

bedeutet bei einem endlichen Grenzwert $L$: Die Funktionswerte liegen beliebig nahe bei $L$, wenn wir $x$ aus der Definitionsmenge hinreichend nahe bei $x_L$ wählen, ohne $x=x_L$ einzusetzen. Ob die Funktion an der Stelle $x_L$ selbst definiert ist und welchen Wert sie dort hat, entscheidet nicht über diesen Grenzwert.

Wir unterscheiden eine Annäherung von kleineren Argumenten aus und eine Annäherung von größeren Argumenten aus:

$$
\begin{aligned}
\lim_{x\nearrow x_L}f(x)
&=\lim_{x\to x_L^-}f(x)
&&\text{linksseitiger Grenzwert},\\
\lim_{x\searrow x_L}f(x)
&=\lim_{x\to x_L^+}f(x)
&&\text{rechtsseitiger Grenzwert}.
\end{aligned}
$$

Die Richtungsangaben beziehen sich auf die Zahlenordnung der Argumente. Das Minus- beziehungsweise Pluszeichen an $x_L$ kennzeichnet die Seite der Annäherung, nicht das Vorzeichen des Funktionswerts.

Wenn eine Annäherung von beiden Seiten möglich ist, existiert ein endlicher beidseitiger Grenzwert genau dann, wenn beide einseitigen Grenzwerte existieren und denselben endlichen Wert haben.

{{|>}} Für die Kehrwertfunktion $f(x)=\frac1x$ ergeben sich die vier Grenzwertaussagen:

$$
\begin{aligned}
\lim_{x\to0^-}\frac1x&=-\infty,\\
\lim_{x\to0^+}\frac1x&=+\infty,\\
\lim_{x\to+\infty}\frac1x&=0,\\
\lim_{x\to-\infty}\frac1x&=0.
\end{aligned}
$$

Die Zeichen $+\infty$ und $-\infty$ sind keine reellen Zahlen. Sie beschreiben hier eine bestimmte Divergenz: Die Funktionswerte wachsen unbegrenzt ins Positive beziehungsweise ins Negative. Insbesondere ist $\infty$ kein Funktionswert, den man an der Polstelle einsetzen könnte.

Bei $x=0$ besitzt $\frac1x$ wegen des unterschiedlichen einseitigen Verhaltens keinen beidseitigen Grenzwert, auch nicht im erweiterten Sinn. Für $\frac1{x^2}$ stimmen dagegen die beiden einseitigen Aussagen überein:

$$
\lim_{x\to0^-}\frac1{x^2}
=\lim_{x\to0^+}\frac1{x^2}
=\lim_{x\to0}\frac1{x^2}
=+\infty.
$$

Auch diese Gleichung beschreibt eine bestimmte Divergenz und keinen endlichen Grenzwert.

{{|>}} Nicht jede Definitionslücke ist eine Polstelle. Bei einer hebbaren Definitionslücke existiert ein endlicher Grenzwert, mit dem man die Funktion an der fehlenden Stelle stetig ergänzen kann. Zum Beispiel gilt

$$
h(x)=\frac{x^2-1}{x-1}=x+1,\qquad x\neq1.
$$

Der ursprüngliche Bruchterm ist bei $x=1$ nicht definiert. Die Funktionswerte nähern sich dort aber von beiden Seiten der Zahl $2$:

$$
\lim_{x\to1}h(x)=2.
$$

Durch die zusätzliche Festlegung $h(1)=2$ würde die Lücke geschlossen. Solche Unterschiede zwischen Polstellen und hebbaren Definitionslücken werden bei gebrochen rationalen Funktionen genauer untersucht.

{{|>}} Grenzwerte im Unendlichen beschreiben das Verhalten für immer größere positive Argumente oder für immer kleinere, betragsmäßig größere negative Argumente. Ein solcher Grenzwert muss nicht existieren. Beispielsweise schwankt $\sin x$ für $x\to+\infty$ weiter zwischen $-1$ und $1$, ohne sich einem einzigen Wert zu nähern.

Ein Graph oder eine Wertetabelle hilft dabei, ein Grenzverhalten zu vermuten. Das Einsetzen von zwei besonders großen oder kleinen Zahlen ist jedoch kein Beweis: Entscheidend ist das Verhalten für alle hinreichend großen beziehungsweise kleinen Argumente der Definitionsmenge.

{{|>}} Bei $f(x)=\frac1x$ wird der Abstand des Graphen zur Geraden $y=0$ für $x\to+\infty$ und für $x\to-\infty$ beliebig klein. Die Abszissenachse ist deshalb eine Asymptote. Außerdem ist die Gerade $x=0$, also die Ordinatenachse, eine Asymptote an der Polstelle.

Eine Asymptote ist hier eine Gerade, der sich ein Graph bei einem bestimmten Grenzverhalten beliebig annähert. Das bedeutet nicht allgemein, dass der Graph diese Gerade niemals schneiden darf. Bei der Kehrwertfunktion wird der Wert $0$ tatsächlich nie angenommen, weil $\frac1x\neq0$ für jedes zulässige $x$ gilt.

Die Aussage „Der Grenzwert ist null“ allein bedeutet dagegen nicht, dass der Funktionswert null unerreichbar wäre. Schon die konstante Funktion $f(x)=0$ besitzt für $x\to+\infty$ den Grenzwert $0$ und nimmt diesen Wert überall an.

{{|>}} Grenzwerte treten auch bei Zahlenfolgen auf. Dann durchläuft der Index $n$ die positiven natürlichen Zahlen $1,2,3,\ldots$. Die folgenden sieben Grenzwertaussagen sind eine weiterführende Sammlung; ihre Herleitungen gehen über die anschauliche Einführung hinaus.

Für eine feste positive reelle Zahl $a$ gilt:

$$
\lim_{n\to\infty}\sqrt[n]{a}=1,
\qquad a>0.
$$

Auch die Folge der $n$-ten Wurzeln von $n$ besitzt diesen Grenzwert:

$$
\lim_{n\to\infty}\sqrt[n]{n}=1.
$$

Mit $n!=1\cdot2\cdot\ldots\cdot n$ bezeichnet man die Fakultät von $n$. Für sie gelten:

$$
\begin{aligned}
\lim_{n\to\infty}\sqrt[n]{n!}&=+\infty,\\
\lim_{n\to\infty}\frac{n}{\sqrt[n]{n!}}&=e.
\end{aligned}
$$

Dabei ist $e\approx2{,}71828$ die eulersche Zahl. Für eine feste reelle Zahl $x$ erhält man:

$$
\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n=e^x,
\qquad x\in\mathbb{R}.
$$

Hier bleibt $x$ unverändert; nur $n$ wächst. Für hinreichend große $n$ ist die Basis $1+\frac{x}{n}$ positiv, auch wenn $x<0$ ist.

Für jede feste reelle Zahl $a$ gilt außerdem:

$$
\lim_{n\to\infty}\frac{a^n}{n!}=0,
\qquad a\in\mathbb{R}.
$$

Schließlich ergibt sich mit dem natürlichen Logarithmus $\ln$ zur Basis $e$:

$$
\lim_{n\to\infty}n\left(\sqrt[n]{a}-1\right)=\ln a,
\qquad a>0.
$$

Die Bedingungen sind wesentlich. Beispielsweise wäre der erste Grenzwert bei $a=0$ gleich $0$ statt $1$; der letzte Ausdruck $\ln a$ ist im Reellen nur für $a>0$ definiert.

{{|>}} Mit einem Grenzwert lässt sich auch zeigen, dass $0{,}\overline9=1$ gilt. Zunächst betrachten wir nur endlich viele Neunen nach dem Komma:

$$
s_n
=0{,}\underbrace{99\ldots9}_{n\text{ Stellen}}
=\sum_{k=1}^{n}\frac9{10^k}
=1-\frac1{10^n}.
$$

Die unendliche periodische Dezimalzahl ist der Grenzwert dieser endlichen Dezimalzahlen:

$$
\begin{aligned}
0{,}\overline9
&=\lim_{n\to\infty}s_n\\
&=\lim_{n\to\infty}\left(1-\frac1{10^n}\right)\\
&=1-\lim_{n\to\infty}\frac1{10^n}\\
&=1.
\end{aligned}
$$

Für jedes endliche $n$ bleibt noch der positive Abstand $\frac1{10^n}$ zur Zahl $1$. Dieser Abstand hat den Grenzwert $0$. Die unendliche Dezimalzahl ist daher nicht nur näherungsweise, sondern genau gleich $1$.

{{|>}} Vergleichen wir nun eine lineare Funktion und eine Exponentialfunktion. Für $f(x)=x$ erhalten wir eine Gerade durch den Koordinatenursprung:

<center>

@Koordinatensystem(`xmin=-4.8;xmax=5.1;ymin=-4.8;ymax=4.8;width=780;id=GRENZWERT01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=GRENZWERT01;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`GRENZWERT01;f=0;x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);linestyle=solid`)
@KoordText(`GRENZWERT01;[1.5;2.65];$\Large f(x)=x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #00a5c0);1`)

</center>

Wächst $x$ unbegrenzt, so wächst auch $f(x)$ unbegrenzt. Wird $x$ dagegen beliebig klein im Sinne von $x\to-\infty$, werden auch die Funktionswerte unbegrenzt negativ:

$$
\begin{aligned}
\lim_{x\to+\infty}x&=+\infty,\\
\lim_{x\to-\infty}x&=-\infty.
\end{aligned}
$$

Der gezeichnete Ausschnitt endet am Rand des Koordinatensystems; die Gerade selbst setzt sich in beide Richtungen fort.

{{|>}} Bei der Exponentialfunktion $g(x)=2^x$ sieht das Verhalten anders aus:

<center>

@Koordinatensystem(`xmin=-4.8;xmax=5.1;ymin=-1.5;ymax=4.8;width=780;id=GRENZWERT02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=GRENZWERT02;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`GRENZWERT02;g=0;2^x;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #e840ac);linestyle=solid`)
@KoordText(`GRENZWERT02;[3.5;3.5];$\Large g(x)=2^x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #e840ac);1`)

</center>

Für immer größere positive Argumente wachsen die Funktionswerte unbegrenzt. Für immer kleinere negative Argumente nähern sie sich dagegen der null von der positiven Seite:

$$
\begin{aligned}
\lim_{x\to+\infty}2^x&=+\infty,\\
\lim_{x\to-\infty}2^x&=0.
\end{aligned}
$$

Denn für positives $t$ gilt $2^{-t}=\frac1{2^t}$. Während der Nenner für $t\to+\infty$ unbegrenzt wächst, nähert sich der Kehrwert der null. Die Abszissenachse $y=0$ ist deshalb für $x\to-\infty$ eine Asymptote.

Für jedes reelle $x$ ist $2^x>0$. Darum wird der Wert $0$ niemals angenommen und eine Division durch $2^x$ ist für jedes reelle $x$ zulässig. Die Begründung ist die strikte Positivität des Exponentialterms, nicht allein sein Grenzwert.

{{|>}} Eine Vorstellung von den typischen Funktionsgraphen erleichtert es, Grenzverhalten zu erkennen und Ergebnisse zu überprüfen. Für rechnerische Begründungen werden später Grenzwertsätze und weitere Verfahren eingeführt. Dazu gehört unter passenden Voraussetzungen auch die Regel von l’Hôpital; sie wird in einem späteren Abschnitt behandelt.

***************************
