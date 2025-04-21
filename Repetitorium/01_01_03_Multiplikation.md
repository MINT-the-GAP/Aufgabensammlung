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


tags: Erklärung, Multiplikation

comment: In diesem Abschnitt wird die Multiplikation ausführlich erklärt.

author: Martin Lommatzsch

-->

# Multiplikation


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
	\textcolor{red}{231}\;\;&  \\ \hline
17315& \\
 \end{split}
\end{equation}  
$$

$$
\begin{equation}
\begin{split}
3463 \cdot 5 &   \\ \hline
+\;\;\;\;\;\;15\textcolor{red}{}& \\ 
+\;\;\;\;30\textcolor{red}{0}& \\ 
+\;\;20\textcolor{red}{00}& \\ 
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

Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt: 
!?[Multiplikation](https://www.youtube.com/watch?v=Gh4Zfdlq7K0)

<br>
<br>
<br>
<br>
<br>