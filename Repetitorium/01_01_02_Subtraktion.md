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


tags: Erklärung, Subtraktion

comment: In diesem Abschnitt wird die Subtraktion ausführlich erklärt.

author: Martin Lommatzsch

-->

# Subtraktion


{{|>}}
*******************************

Die **Subtraktion** ist die Umkehroperation der **Addition** und wird durch den **Subtraktionsoperator** $-$ (gesprochen "minus") beschrieben. Auch bei der **Subtraktion** ist somit die Null das **neutrale Element** der **Subktration**, da eine **Subktraktion** mit Null den **Wert des Terms** nicht verändert: $1-0=1$. Auf dem Zahlenstrahl wird somit die Richtung der Schritte der Addition von links nach rechts umgekehrt: \


<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Subt1.png)

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

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Subt2.png)

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






Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Subtraktion](https://www.youtube.com/watch?v=a2Nwh8npSUo)


*******************************

