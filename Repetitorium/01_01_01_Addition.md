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


tags: Erklärung, Addition

comment: In diesem Abschnitt wird die Addition ausführlich erklärt.

author: Martin Lommatzsch

-->

# Addition

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
+\;\;\;\;\textcolor{red}{1}2& \\ 
+\;\;\textcolor{red}{1}0\;\;& \\ 
+\;\;5\;\;\;\;& \\ 
+5\;\;\;\;\;\;& \\ \hline
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
	\textcolor{red}{11}\textcolor{white}{\;\;}&  \\ \hline
5612& \\
 \end{split}
\end{equation}  
$$


     {{|>}} Bei dieser Art der Schreibweise, werden die **Zahlen**, die entsprechend ihrer Position in der **Stellenwerttafel** untereinander stehen, einzeln **addiert**. Dabei wird immer bei der **Ziffern** der kleinsten Position in der **Stellenwerttafel** begonnen. Dies ist sind stets die **Ziffern**, die am weitesten rechts bei den **Zahlen** stehen. Wenn die **addierte** Zahl höher ist als Neun, dann wird die Eins der Zehn zur nächsten Zahlenspalte hinzugezählt. Diese Eins wird auch oft Merkeins genannt und ist in der Beispielrechnung rot eingefärbt. Der Vorteil dieser Schreibweise ist es, dass niemals höhere **Zahlen** als $9$ und $9$ **addiert** werden können. Folglich benötigt der Schüler nur ein sehr gutes Zahlenverständnis von der Zahl $0$ bis $18$ um jegliche Additionsaufgabe zu lösen. Falls mehr als zwei **Summanden** (im Beispiel sind $1337$ und $4265$ die **Summanden**) vorkommen ist es immer erlaubt in einer Nebenrechnung zunächst nur zwei **Summanden** zu **addieren** um dann anschließend die **Summe** der ersten beiden **Summanden** mit der nächsten **Summanden** zu verrechnen. \

<br>
<br>

Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt: \

!?[Addition](https://www.youtube.com/watch?v=Tn9xv6jSyyI) \

<br>
<br>
<br>
<br>
<br>