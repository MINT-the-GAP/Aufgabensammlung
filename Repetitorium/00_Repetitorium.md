<!--
version:  0.0.1
language: de
narrator: Deutsch Female

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

input {
    text-align: center;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 20px;
}

.flex-child {
    flex: 1;
    min-width: 350px;
    margin-right: 20px;
}

@media (max-width: 400px) {
    .flex-child {
        flex: 100%;
        margin-right: 0;
    }
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md


tags: Repetitorium

comment: Hier entsteht ein mathematisches Repetitorium in LiaScript.

author: Martin Lommatzsch



import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md
-->




# Repetitorium der Mathematik




# Mengen






### Übungsaufgaben zu Mengen





# Algebraische Grundlagen





## Arithmetik mit natürlichen Zahlen




Ziffer Zahl
Term Gleichung










### Runden

    {{|>}} Um Rechnungen mit natürlichen Zahlen $\mathbb{N}$ schnell zu überprüfen lohnt sich die sogenannte Überschlagsrechnung, bei der die Zahlen gerundet werden. Um das **Runden** zu verstehen, muss sich nochmal die Stellenwerttafel vergegenwärtigt werden, da immer bestimmte Stellen betrachtet werden müssen: \


<center>
<!-- data-type="none" 
data-sortable="false" 
style="width:300px" -->
|  Zahl   |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :-----: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   35069 |             3     |          5   |         0  |        6  |       9 |
</center>


    {{|>}} Beim **Runden** wird die in der vorherigen Stelle der betrachtete Stelle der Zahl analysiert. Soll also auf Tausender gerundet werden, muss die Hunderterziffer betrachtet werden. Handelt es sich um eine der Ziffern $\left\{0;1;2;3;4\right\}$ wird die betrachtete Stelle abgerundet - sie bleibt also unverändert. Handelt es sich allerdings um $\left\{5;6;7;8;9\right\}$, dann wird aufgerundet - also an der betrachteten Stelle wir die Ziffer um $1$ erhöht. Dies kann begründet werden, dass die Ziffern $\left\{0;1;2;3;4\right\}$ dichter an einer Null sind als an einer Zehn wie $\left\{5;6;7;8;9\right\}$. \



<center>
<!-- data-type="none"
data-sortable="false" 
style="width:300px" -->
|   Zahl    |    Auf Zehner gerundet     |   Auf Hunderter gerundet    | 
|  :-----:  |    :-----:    |   :-----:      |
| $391$     | $\approx 390$ |  $\approx 400$ |
| $382$     | $\approx 380$ |  $\approx 400$ |
| $373$     | $\approx 370$ |  $\approx 400$ |
| $364$     | $\approx 360$ |  $\approx 400$ |
| $355$     | $\approx 360$ |  $\approx 400$ |
| $346$     | $\approx 350$ |  $\approx 300$ |
| $337$     | $\approx 340$ |  $\approx 300$ |
| $328$     | $\approx 330$ |  $\approx 300$ |
| $319$     | $\approx 320$ |  $\approx 300$ |
</center>


    {{|>}} Somit kann eine länger dauernde Rechnung wie folgt dargestellt durch das Runden der Faktoren überschlagen werden: \

$$
\begin{equation}
\begin{split}
6167 \cdot 3139 \approx 6000 \cdot 3000 = 18000000 \\  
 \end{split}
\end{equation}  
$$



<br>
<br>

Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Runden](https://www.youtube.com/watch?v=lkKLXE5FFes)








### Addition

    {{|>}} Die **Addition** ist die wichtigste Grundrechenart und lässt **Zahlen** größer als Eins überhaupt erst erfassbar werden, was am **Zahlenstrahl** schnell erkannt werden kann. Direkt hier wird schon deutlich, dass die Null das **neutrale Element** der **Addition** ist, da eine **Addition** von Null den **Wert des Terms** nicht verändert: $1+0=1$. \


<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (0,0.3) to[out=20,in=160] (1,0.3) ; \node at (0.5,0.5) {\large$+1$};
\draw[->, black!100,thick] (1,0.3) to[out=20,in=160] (2,0.3) ; \node at (1.5,0.5) {\large$+1$};
\draw[->, black!100,thick] (2,0.3) to[out=20,in=160] (3,0.3) ; \node at (2.5,0.5) {\large$+1$};

\end{tikzpicture} 

```
</center>



    {{|>}} Mit der **Addition** werden **Zahlen** zusammengezählt, was immer durch den **Additionsoperator** $+$ beschrieben wird. Der gesamte **Term** ist die sogenannte **Summe**, während der **Wert der Summe** immer auf der anderen Seite eines **Gleichheitszeichen** $=$ geschrieben wird. \



$$
\begin{equation}
\begin{split}
\underbrace{\text{Summand} + \text{Summand}}_{\text{Summe}}  & = \text{Wert der Summe} \\ 
 \end{split}
\end{equation}  
$$

Als Beispiel mit **Zahlen**:

$$
\begin{equation}
\begin{split} 
  2+4 &= 6   \\
 \end{split}
\end{equation}  
$$


    {{|>}} Im Beispiel aus Gleichung ist zu sehen, dass die Zwei mit der Vier zusammengezählt wurde, wie es der **Additionsoperator** $+$ (gesprochen "plus") gefordert hat. Am **Zahlenstrahl** verdeutlicht wird deutlich, dass vom ersten **Summanden** aus Schritte im **Wert** vom zweiten **Summanden** nach rechts gegangen wird, um beim **Wert der Summe** zu enden. \

<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (2,-0.4) to[out=340,in=200] (6,-0.4) ; \node at (4,-1.00) {\large$+4$};

\end{tikzpicture} 

```
</center>

    {{|>}} Bei der **Darstellung** am **Zahlenstrahl** wird deutlich, dass die **Addition** das **Assoziativgesetz** sowie das **Kommutativgesetz** erfüllt. \


**Kommutativgesetz** für die **Additon**: 

$$
\begin{equation}
\begin{split} 
  a+b=b+a   \\
 \end{split}
\end{equation}  
$$

Folgendes Beispiel des **Kommutativgesetzes** ist am **Zahlenstrahl** dargestellt:

$$
\begin{equation}
\begin{split} 
  2+4=4+2   \\
 \end{split}
\end{equation}  
$$

<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (2,-0.4) to[out=340,in=200] (6,-0.4) ; \node at (4,-1.00) {\large$+4$};

\draw[->, black!100,thick] (4,0.3) to[out=20,in=160] (6,0.3) ; \node at (5,0.750) {\large$+2$};

\end{tikzpicture} 

```
</center>




**Assoziativgesetz** für die **Additon**: 

$$
\begin{equation}
\begin{split} 
  a+b+c=(a+b)+c=a+(b+c)   \\
 \end{split}
\end{equation}  
$$

Folgendes Beispiel des **Assoziativgesetzes** ist am **Zahlenstrahl** dargestellt:

$$
\begin{equation}
\begin{split} 
  1+1+4=1+(1+4)   \\
 \end{split}
\end{equation}  
$$  
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 1.35) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (1,-0.4) to[out=340,in=200] (2,-0.4) ; \node at (1.5,-1.00) {\large$+1$};
\draw[->, black!100,thick] (2,-0.4) to[out=340,in=200] (6,-0.4) ; \node at (4,-1.00) {\large$+4$};

\draw[->, black!100,thick] (1,0.3) to[out=20,in=160] (6,0.3) ; \node at (3.5,1.00) {\large$+1+4$};

\end{tikzpicture} 

```
</center>




    {{|>}} Für größere **Zahlen** lohnt sich eine Schreibweise, die die **Zahlen**, die **addiert** werden sollen, entsprechtend ihrer Position in der Stellenwerttafel untereinander schreibt. Dabei wird der **Wert des Terms** unter einem Strich ausgerechnet.\






<!-- data-type="none" 
data-sortable="false" -->
|  Tausender   |  Hunderter |  Zehner   |  Einer  |    |
| :----------: | :--------: | :-------: | :-----: | :-----: |
|       $1$      |      $3$     |    $4$      |    $7$    |    1. Summand    |
|       $4$      |      $2$     |    $6$      |    $5$    |    2. Summand    |
|       $5$      |      $5$     | $\textcolor{red}{1}0$ |    $\textcolor{red}{1}2$    |    Einzelziffersummen    |
|       $5$      |      $6$     |    $1$      |    $2$    |    Wert der Summe    |

    {{|>}} Außerhalb der **Stellenwerttafel** wirkt die Rechnung der schriftlichen **Addition** übersichtlicher: \


$$
\begin{equation}
\begin{split}
 1347&   \\
+4265& \\ \hline
+\hspace{0.5em}\hspace{0.5em}\textcolor{red}{1}2& \\ 
+\hspace{0.5em}\textcolor{red}{1}0\hspace{0.5em}& \\ 
+\hspace{0.5em}5\hspace{0.5em}\hspace{0.5em}& \\ 
+5\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}& \\ \hline
5612& \\
 \end{split}
\end{equation}  
$$


    {{|>}} Dies kann noch wie folgt verkürzt geschrieben werden: \

$$
\begin{equation}
\begin{split}
1347&   \\
+4265& \\ 
	\textcolor{red}{11}\hspace{0.5em}\hspace{0.5em}&  \\ \hline
5612& \\
 \end{split}
\end{equation}  
$$


     {{|>}} Bei dieser Art der Schreibweise, werden die **Zahlen**, die entsprechend ihrer Position in der **Stellenwerttafel** untereinander stehen, einzeln **addiert**. Dabei wird immer bei der **Ziffern** der kleinsten Position in der **Stellenwerttafel** begonnen. Dies ist sind stets die **Ziffern**, die am weitesten rechts bei den **Zahlen** stehen. Wenn die **addierte** Zahl höher ist als Neun, dann wird die Eins der Zehn zur nächsten Zahlenspalte hinzugezählt. Diese Eins wird auch oft Merkeins genannt und ist in der Beispielrechnung rot eingefärbt. Der Vorteil dieser Schreibweise ist es, dass niemals höhere **Zahlen** als $9$ und $9$ **addiert** werden können. Folglich benötigt der Schüler nur ein sehr gutes Zahlenverständnis von der Zahl $0$ bis $18$ um jegliche Additionsaufgabe zu lösen. Falls mehr als zwei **Summanden** (im Beispiel sind $1337$ und $4265$ die **Summanden**) vorkommen ist es immer erlaubt in einer Nebenrechnung zunächst nur zwei **Summanden** zu **addieren** um dann anschließend die **Summe** der ersten beiden **Summanden** mit der nächsten **Summanden** zu verrechnen. \

<br>
<br>

Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt: \

!?[Addition](https://www.youtube.com/watch?v=Tn9xv6jSyyI)









### Subtraktion

    {{|>}} Die **Subtraktion**<!-- title="Test" --> ist die Umkehroperation der **Addition** und wird durch den **Subtraktionsoperator** $-$ (gesprochen "minus") beschrieben. Auch bei der **Subtraktion** ist somit die Null das **neutrale Element** der **Subktration**, da eine **Subktraktion** mit Null den **Wert des Terms** nicht verändert: $1-0=1$. Auf dem Zahlenstrahl wird somit die Richtung der Schritte der Addition von links nach rechts umgekehrt: \


<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (5,0.3) to[out=160,in=20] (4,0.3) ; \node at (4.5,0.5) {\large$-1$};
\draw[->, black!100,thick] (4,0.3) to[out=160,in=20] (3,0.3) ; \node at (3.5,0.5) {\large$-1$};
\draw[->, black!100,thick] (3,0.3) to[out=160,in=20] (2,0.3) ; \node at (2.5,0.5) {\large$-1$};

\end{tikzpicture} 

```
</center>




    {{|>}} Der gesamte **Term** ist die sogenannte **Differenz**, während der **Wert der Differenz** immer auf der anderen Seite eines **Gleichheitszeichen** $=$ geschrieben wird. Vom **Minuenden** wird dabei der **Subtrahend** abgezogen. \



$$
\begin{equation}
\begin{split}
\underbrace{\text{Minuend} - \text{Subtrahend}}_{\text{Differenz}}  & = \text{Wert der Differenz} \\ 
 \end{split}
\end{equation}  
$$

Als Beispiel mit **Zahlen**:

$$
\begin{equation}
\begin{split} 
  5 - 2 = 3   \\
 \end{split}
\end{equation}  
$$




<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\Large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\LARGE$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\Huge$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (5,0.3) to[out=160,in=20] (2,0.3) ; \node at (3.5,0.75) {\large$-3$};

\end{tikzpicture} 

```
</center>


    {{|>}} Wie schon an den unterschiedlichen Bezeichnungen **Minuend** sowie **Subtrahend** zu erahnen ist, ist die **Subtraktion** wieder **kommutativ** noch **assoziativ**. \


$$
\begin{equation}
\begin{split}
  a-b & \neq b-a   \\
  a-b-c & \neq a-(b-c)  \\
 \end{split}
\end{equation}  
$$



    {{|>}} Auch bei der schriftlichen **Subtraktion** werden die Ziffern startend von der kleinsten Position in der **Stellenwerttafel** bearbeitet. Dabei kann die jeweilige **Ziffer** des **Subtrahenden** größer sein als die des **Minuenden**, wie in der zweiten Ziffernspalte. Hierbei ist die Zahl $6$ statt von der $3$ von der $13$ zu **subtrahieren**. Die dazu geschriebene Zehn muss anschließend von der nächsten Ziffernspalte abgezogen werden, was durch die Merkeins in rot wieder symbolisiert wird.


$$
\begin{equation}
\begin{split}
 6337&   \\
-4265& \\ 
	\textcolor{red}{1}\hspace{0.5em}\hspace{0.5em}&  \\ \hline
2072& \\
 \end{split}
\end{equation}  
$$


    {{|>}} Auch bei der **Subtraktion** kann es vorkommen, dass mehrere **Subtrahenden** vorzufinden sind. Dabei sind zwei Arten von Nebenrechnungen zulässig: Die erste Variante sieht vor, dass die **Subtrahenden** nacheinander vom **Minuenden** **subtrahiert** werden, während die zweite Variante vorsieht, dass die **Subtrahenden** **addiert** werden und anschließend die **Summe** der **Subtrahenden** vom **Minuend** abgezogen werden. 

Beispiele der ersten Variante:
$$
\begin{equation}
\begin{split}
  a - b - c &= (a - b) - c     \\
  874 - 125 - 236 &= (874 - 125) - 236      \\
 &\\
  a - b - c - d &= ((a - b) - c) - d      \\
  874 - 125 - 236 - 58 &= ((874 - 125) - 236) - 58      \\
 \end{split}
\end{equation}  
$$



Beispiele der zweiten Variante:
$$
\begin{equation}
\begin{split}
  a - b - c &= a - (b + c)     \\
  874 - 125 - 236 &= 874 - (125 + 236)     \\
 &\\
  a - b - c - d &= a - (b + c + d)     \\
  874 - 125 - 236 - 58 &= 874 - (125 + 236 + 58)     \\
 \end{split}
\end{equation}  
$$


    {{|>}} Beim schriftlichen **Subtrahieren** kann maximal die **Ziffer** $9$ als **Subtrahend** der einzelnen Spalten auftauchen. Somit ist die größte Zahl von der abgezogen werden kann die $18$. Folglich wird lediglich ein gutes Zahlenverständnis bei der **Subtraktion** von den Zahlen $0$ bis $18$ benötigt. \







<br>
<br>

Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Subtraktion](https://www.youtube.com/watch?v=a2Nwh8npSUo)








### Multiplikation


    {{|>}} Die **Multiplikation** ist die erste abkürzende Schreibweise, die in der Schule eingeführt wird. Dabei wird die zum Beispiel Rechnung $3+3+3+3$ abgekürzt als $4 \cdot 3$ geschrieben, also vier mal die Drei, was durch den **Multiplikationsoperator** $\cdot$ beschrieben wird. Werden also gleichwertige **Summanden** **aufaddiert**, dann kann dies durch die **Multiplikation** im Sinne der Anzahl der **Summanden** mal dem Wert des **Summanden** beschrieben werden. Folglich werden die beiden **Faktoren** miteinander **multipliziert** und bilden ein **Produkt**, während der **Wert des Produkts** auf der anderen Seite des **Gleichheitszeichen** steht.


$$
\begin{equation}
\begin{split}
\underbrace{\text{Faktor} \cdot \text{Faktor}}_{\text{Produkt}}  & = \text{Wert des Produkts} \\ 
 \end{split}
\end{equation}  
$$



Als Beispiel mit **Zahlen**:

$$
\begin{equation}
\begin{split} 
  5 \cdot 4 &= 20   \\
 \end{split}
\end{equation}  
$$

    {{|>}} Am Beispiel kann schon erkannt werden, dass die Anzahl der gleichwertigen **Summanden** und der Wert des **Summanden** vertauscht werden kann. \


$$
\begin{equation}
\begin{split} 
  5 + 5 +5+5 &= 20   \\
  4+4+4+4+4 &= 20   \\
 \end{split}
\end{equation}  
$$

    {{|>}} Diese Rechnung kann ebenfalls geometrisch interpretiert werden, in dem mehrfache Schrittfolgen gleicher Werte am **Zahlenstrahl** vollzogen oder eine zweidimensionale **rechteckige** Anordnung von **Einheitsflächen** betrachtet wird. Beide Interpretationen werden am Beispiel $2 \cdot 4$ dargestellt: \




<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (10.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (9.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 
\draw[-, black!100,thick]  ( 9,0.1) -- ( 9,-0.1) node[below] {\large$9$}; 

\draw[->, black!100,thick] (0,0.3) to[out=20,in=160] (2,0.3) ; \node at (1,0.65) {\large$+2$};
\draw[->, black!100,thick] (2,0.3) to[out=20,in=160] (4,0.3) ; \node at (3,0.65) {\large$+2$};
\draw[->, black!100,thick] (4,0.3) to[out=20,in=160] (6,0.3) ; \node at (5,0.65) {\large$+2$};
\draw[->, black!100,thick] (6,0.3) to[out=20,in=160] (8,0.3) ; \node at (7,0.65) {\large$+2$};

\end{tikzpicture} 

```
</center>


<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-.5) {};
  \node at (10.5, 2.5) {};


\begin{scope}[yshift=1cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  

\begin{scope}[yshift=0.5cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  



\begin{scope}[xshift=8cm]
\begin{scope}[yshift=0cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  

\begin{scope}[yshift=0.5cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  

\begin{scope}[yshift=1cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  

\begin{scope}[yshift=1.5cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  
\end{scope}  

\end{tikzpicture} 

```
</center>


    {{|>}} Es wird deutlich, dass die **Multiplikation** das **Assoziativgesetz** sowie das **Kommutativgesetz** erfüllt. \


**Kommutativgesetz** für die **Multiplikation**: 

$$
\begin{equation}
\begin{split} 
  a \cdot b=b \cdot a   \\
 \end{split}
\end{equation}  
$$


**Assoziativgesetz** für die **Multiplikation**: 

$$
\begin{equation}
\begin{split} 
  a \cdot b \cdot c = (a \cdot b) \cdot c = a \cdot (b \cdot c)  \\
 \end{split}
\end{equation}  
$$


    {{|>}} Die schriftliche **Multiplikation** sieht Zahlen von $0$ bis $9 \cdot 9 = 81$ vor, da auch hier die einzelnen **Ziffern** der Zahl nacheinander bearbeitet werden. Die **Multiplikation** kann in mehreren Schritten aus der **Addition** heraus eingeführt werden. Hierbei wird das Beispiel $3463 \cdot 5$ betrachtet:  \



$$
\begin{equation}
\begin{split}
3463 &   \\
+3463 & \\ 
+3463 & \\ 
+3463 & \\ 
+3463 & \\ 
	\textcolor{red}{231}\hspace{0.5em}&  \\ \hline
17315& \\
 \end{split}
\end{equation}  
$$

$$
\begin{equation}
\begin{split}
3463 \cdot 5 &   \\ \hline
+\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}15\textcolor{red}{}& \\ 
+\hspace{0.5em}\hspace{0.5em}30\textcolor{red}{0}& \\ 
+\hspace{0.5em}20\textcolor{red}{00}& \\ 
+15\textcolor{red}{000}& \\   \hline
17315& \\
 \end{split}
\end{equation}  
$$


$$
\begin{equation}
\begin{split}
3_{\textcolor{red}{2}}4_{\textcolor{red}{3}}6_{\textcolor{red}{1}}3 \cdot 5 &   \\ \hline 
17315& \\
 \end{split}
\end{equation}  

$$



    {{|>}} Hierbei wird deutlich, dass die Schreibweisen sich verkürzen, sodass bei der dritten Variante die Merkzahlen im **Index** der Ziffern des ersten **Faktors** geschrieben wurden. Dies ist nicht mehr übersichtlich genug, wenn beide **Faktoren** über mehrere Ziffern verfügen, sodass dann die Merkzahlen entweder seperat niedergeschrieben oder im Kopf behalten werden müssen. \


$$
\begin{equation}
\begin{split}
1337 \cdot \textcolor{blue}{2}\textcolor{green}{3} &   \\ \hline
\textcolor{blue}{2674}\textcolor{red}{0}& \\ 
+\textcolor{red}{0}\textcolor{green}{3011}& \\ \hline
29751& \\
 \end{split}
\end{equation}  
$$


    {{|>}} Aus der Gleichung ist zu erkennen, dass die $2$ auf die Zahl $7$ wirkt und danach auf die $3$. Dabei wird die Zehn der Rechnung $2 \cdot 7 = 14$ mit zur nächsten Ziffer von rechts gezählt. Das Ergebnis wird so notiert, dass die am weitest stehende **Ziffer** direkt unter der betrachten Zahl steht (im Beispiel unter der $2$). Anschließend wird dies mit der nächsten **Ziffer**, hier die Drei, wiederholt. Die untereinander geschriebenen Zahlen werden dann **addiert**, sodass sich der Wert des **Terms** ergibt. \





    {{|>}} Da die **Multiplikation** die abkürzende Schreibweise der **Addition** von gleichwertigen **Summanden** ist, ergibt sich daraus die erste **Vorrangsregel**: Punktrechnungen werden vor Strichrechnungen durchgeführt. \

$$
\begin{equation}
\begin{split}
\textcolor{blue}{3 \cdot 5} + \textcolor{red}{2 \cdot 8} & = \textcolor{blue}{5+5+ 5} + \textcolor{red}{8+8}   \\
 & = \textcolor{blue}{15} + \textcolor{red}{16}   \\ 
 & = 31   \\ 
 \end{split}
\end{equation}  
$$


<br>
<br>

Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Multiplikation](https://www.youtube.com/watch?v=Gh4Zfdlq7K0)






### Division

    {{|>}} Die **Division** stellt die umkehrende Frage der **Multiplikation**: "Wie oft passt die Zahl in die andere Zahl?". Bei der **Division** wird der **Dividend** durch den **Divisor** **dividiert**, was immer durch den **Divisionsoperator** $:$ beschrieben wird. Der gesamte **Term** ist der sogenannte **Quotient**, während der **Wert des Quotienten** auf der anderen Seite des **Gleichheitszeichen** $=$ geschrieben wird. \


$$
\begin{equation}
\begin{split}
\underbrace{\text{Dividend} : \text{Divisor}}_{\text{Quotient}}  & = \text{Wert des Quotienten} \\ 
 \end{split}
\end{equation}  
$$

    Da es sich um die Umkehrung der **Multiplikation** handelt, sollten auch wiederum alle Zahlen von $0$ bis $81$ beherrscht werden. Diese Umkehrung wird besonders deutlich, wenn die **Multiplikation** wie in dem folgenden Beispiel verwendet wird.






Als Beispiel mit **Zahlen**:

$$

\begin{equation*}
\begin{split}
8123 \cdot 3 &   \\ \hline
+\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}\textcolor{red}{9}& \\ 
+\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}\textcolor{orange}{6}0& \\ 
+\hspace{0.5em}\hspace{0.5em}\textcolor{green}{3}00& \\ 
+\textcolor{blue}{24}000& \\   \hline
24369& \\
 \end{split}
\end{equation*}  

\hspace{5em}

\begin{equation*}
\begin{split} 
  24369:3 &= 8123   \\
  \underline{-\textcolor{blue}{24}} \hspace{0.5em}\hspace{0.5em}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em} &   \\
  03 \hspace{0.5em}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em} &   \\
  \underline{-\hspace{0.5em}\textcolor{green}{3}} \hspace{0.5em}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em} &   \\
  06 \hspace{0.5em}\hspace{0.85em}\hspace{0.5em} &   \\
  \underline{-\hspace{0.5em}\textcolor{orange}{6}} \hspace{0.5em}\hspace{0.85em}\hspace{0.5em} &   \\
  09 \hspace{0.85em}\hspace{0.5em} &   \\
  \underline{-\hspace{0.5em}\textcolor{red}{9}} \hspace{0.85em}\hspace{0.5em} &   \\
  0 \hspace{0.85em}\hspace{0.5em} &   \\
 \end{split}
\end{equation*}  
$$


    {{|>}} Bei der schriftlichen **Division** wird zunächst gefragt "Wie oft passt der **Divisor** ($3$) in die erste Ziffer des **Dividenden** ($2$)?" Die Antwort wäre "`Null mal"' und somit ist die Null die erste **Ziffer** des **Wert** des **Terms**, dem sogenannten **Quotienten**. Anschließend wir die gefundene **Ziffer** des **Quotienten** mit dem **Divisor** **multipliziert** und dieser **Wert** dieser Rechnung von der ersten **Ziffer** **subtrahiert**. Dann wird die nächste **Ziffer** zur Betrachtung mit nach unten gezogen (im Beispiel die Zahl $4$) und nun die sich danach immer wiederholende Frage "Wie oft passt der **Divisor** in diese Zahl?" gestellt. Die Antwort wird beim **Wert** des **Terms** notiert (im Beispiel $8$) und diese **Ziffer** des **Quotienten** dann wieder **multipliziert** mit dem **Divisor** von der besagten **Zahl** **subtrahiert** und anschließend die nächste **Ziffer** des **Dividenden** zur Betrachtung nach unten gezogen. Dieses Prozedur wiederholt sich solange bis alle **Zahlen** betrachtet wurden. \



    {{|>}} Bei höheren **Zahlen** im **Divisor** lohnt es sich diesen in zwei **Zahlen** zu zerlegen. So kann zum Beispiel der **Divisor** $72$ in zwei **Divisoren** $8$ und $9$ zerlegt werden. Dann muss zu erst durch eine **Zahl** **dividiert** werden und anschließend der **Quotient** aus der ersten **Division** durch die zweite **Zahl** **dividiert** werden. Da die **Division** mit am zeitaufwendigsten ist, wird später die **Bruchrechnung** eingeführt, welche eine **Division** bis zum **Wert** des **Terms** hin herauszögern kann.

 
<br>
<br>

Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Division](https://www.youtube.com/watch?v=KkDMx59XTAs)







## Teilbarkeiten










## Bruchrechnung










## Dezimalzahlen










## Parameter









## Einsetzungsverfahren








## Prozentrechnung






## Ganze Zahlen




## Assoziativ- und Kommutativgesetz





## Distributivgesetz





## Potenzen






## Logarithmen





## Äquivalenzumformung







## Quadratische Ergänzung






## Substitution








## Gleichungssysteme





## Ungleichungen







## Fakultäten und Binomialkoeffizienten







## Zahlensysteme





## Einheitsflächen





## Verhältnisse





## Gemischte Aufgaben

