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


tags: Erklärung, Distributivgesetz

comment: In diesem Abschnitt wird das Distributivgesetz ausführlich erklärt.

author: Martin Lommatzsch

-->


# Distributivgesetz




{{|>}}
*******************************


Wenn eine Rechnung mehr als nur einen **Rechenoperator** beinhaltet, dann lohnt es sich **Klammern** zu verwenden, um den Überblick zu behalten oder auf bestimmte Sachverhalte aufmerksam zu machen. Im engeren Sinne ist die Rechnung mit **Klammern** auf die **Multiplikation** reduzierbar. Dabei wirkt der außenstehende **Faktor** auf jeden **Summanden** innerhalb der **Klammer**:



$$
\begin{align*}
a \cdot (b + c) & = a \cdot b + a \cdot c  \\
16 = 2 \cdot 8  = 2 \cdot (3 + 5) & =  2 \cdot 3 + 2 \cdot 5 = 6 + 10 = 16   \\
\end{align*}
$$

{{|>}} Das Beispiel aus der vorherigen **Gleichung** zeigt, wie der **Faktor** auf die **Summanden** innerhalb der **Klammern** wirkt und somit der gleiche **Wert des Terms** produziert, wie die **Multiplikation** des **Faktors** mit der **Summe** der **Klammer**. Dieses Verfahren mit der **Klammersetzung** wird **Distributivgesetz** genannt. Das **Distributivgesetz** kann anhand eines zusammengesetzten **Rechtecks** aus anderen **Rechtecken** visualisiert werden. 



<center>

<!-- style="width:750px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Distributiv1.png)

</center>


{{|>}} Wobei der **Flächeninhalt** des gesamten **Rechtecks** einmal direkt über $A=a(b+c)$ oder über die **Addition** der beiden kleineren **Rechtecke** $A=A_1+A_2=ab+ac$ berechnet werden kann. 


{{|>}} Bei der Verrechnung von **Subtraktionsoperatoren** mit einer **Klammer** gilt, dass das vorgestellte Minus lediglich eine verkürzte Schreibweise von $(-1)\cdot$ ist: 


$$
\begin{align*}
- (b + c) & = (-1) \cdot ( b +  c ) = (-1) \cdot b + (-1) \cdot c = - b - c\\
\end{align*}
$$

{{|>}} Auch **Terme** von **Summen** können miteinander **multipliziert** werden: 



$$
\begin{align*}
(a + b) \cdot (c + d) & = a \cdot (c + d) + b \cdot (c + d) = a \cdot c + a \cdot d + b \cdot c + b \cdot d \\
\end{align*}
$$

{{|>}} In der vorherigen **Gleichung** wirken zu erst die **Summanden** der ersten **Klammer** auf die zweite **Klammer**, sodass dann die zweite **Klammer** wie in **Gleichung** (\ref{eqn:1.5.1}) **ausmultipliziert** werden kann. Es wird auch ersichtlich, dass die Schreibweise mit den **Klammern** wesentlich kürzer ist. Das **Ausmultiplizieren** ist trotz der verkürzten **Klammerschreibweise** oftmals von Vorteil. 

Die **Klammersetzung** ist nicht nur ein Bestandteil einer verkürzten Schreibweise, sondern auch von fundamentaler Bedeutung bei komplexeren **Einsetzungsverfahren**. So sei zum Beispiel $a = g+h$ und soll in die folgende Gleichung eingesetzt werden. 


$$
\begin{align*}
a \cdot d = (g+h)\cdot d = g \cdot d + h \cdot d \\
\end{align*}
$$

{{|>}} Wie die vorherige Gleichung zeigt, sollte bei einer Ersetzung der eingesetzte **Term** am besten prophylaktisch umklammert werden, um Fehler zu vermeiden. Erst nach einer Reflexion der **Gleichung** sollten dann die **Klammern**, wenn möglich, fallen gelassen werden.  






{{|>}} Allerdings sollte auch die **Umkehrung** des **Ausmultiplizierens**, das **Ausklammern**, beherrscht werden, da es oftmals die Übersicht verbessert, wie in diesem Beispiel:  



$$
\begin{align*}
a \cdot b + a \cdot c + a \cdot d + a \cdot e + a \cdot f + g = a \cdot (b+c+d+e+f) +g   \\
\end{align*}
$$

{{|>}} Die vorherige Gleichung zeigt, dass der **Faktor** $a$, welcher sich in vielen **Summanden** befindet, **ausgeklammert** wurde um die Übersicht zu verbessern. Generell gilt, dass man gleiche **Vorfaktoren** bei **Summen** **ausklammern** kann.







!?[Distributivgesetz](https://www.youtube.com/watch?v=tSawKXhm714)

*******************************


