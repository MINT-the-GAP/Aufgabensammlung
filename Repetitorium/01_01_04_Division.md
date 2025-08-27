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


tags: Erklärung, Division

comment: In diesem Abschnitt wird die Division ausführlich erklärt.

author: Martin Lommatzsch

-->

# Division


{{|>}}
*******************************


Die **Division** stellt die umkehrende Frage der **Multiplikation**: "Wie oft passt die Zahl in die andere Zahl?". Bei der **Division** wird der **Dividend** durch den **Divisor** **dividiert**, was immer durch den **Divisionsoperator** $:$ beschrieben wird. Der gesamte **Term** ist der sogenannte **Quotient**, während der **Wert des Quotienten** auf der anderen Seite des **Gleichheitszeichen** $=$ geschrieben wird. \


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

 
 

Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Division](https://www.youtube.com/watch?v=KkDMx59XTAs)


*******************************