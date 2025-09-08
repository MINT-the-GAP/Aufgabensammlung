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


tags: Erklärung, Chance, Wahrscheinlichkeit, Häufigkeit, Median, arithmetische Mittelwert, Spannweite

comment: In diesem Abschnitt werden die Grundlagen der Stochastik ausführlich erklärt.

author: Martin Lommatzsch

-->

# Grundlagen der Stochastik




{{|>}}
***************************

Die *Wahrscheinlichkeitsrechnung* basiert darauf, dass die Ergebnisse in *Verhältnissen* ($2:3$ "Zwei zu Drei") oder in *Prozentwerten* $25\% $ angeben werden. Beide dieser Angabearten basieren auf der *Bruchrechnung*. Folglich kann aus den *Verhältnissen* der *Prozentwert* bestimmt werden, da es sich um einen *Bruch* in einer Schreibweise mit dem *Divisionsoperator* handelt. Hierbei ist zu beachten, dass bei der *Chance*, der Doppelpunkt anders als die *Division* interpretiert wird. Allerdings ist zu beachten, dass die erste *Darstellung* die sogenannte *Chance* ist, während die zweite *Darstellung* die *relative Häufigkeit* genannt wird. Bei der *Chance* ist die *Summe* der beiden Zahlen die gesamte *absolute Häufigkeit*, während diese bei der *relativen Häufigkeit* als *ungekürzten Nenner* zu finden ist. So ergibt sich für die *Chance*: 

$$
\begin{align*}
&\text{Anzahl der Treffer Ereignis 1} : \text{Anzahl der Treffer Ereignis 2}  \\
&\;\;\Rightarrow\;\; \text{Gesamtanzahl}= \text{Anzahl der Treffer Ereignis 1} + \text{Anzahl der Treffer Ereignis 2} \;\; . \\
\end{align*}
$$


{{|>}} Da die *Chance* nur schwer intuitiv einzuschätzen ist, wird in der Regel auf die *relative Häufigkeit* zurückgegriffen, welche oft in der *prozentualen* *Darstellung* zu finden ist. Für die *relative Häufigkeit* $p$ gilt:

$$
\begin{align*}
\text{relative Häufigkeit} = \frac{\text{Anzahl der Treffer}}{\text{Gesamtanzahl}}  \;\; . \\
\end{align*}
$$



{{|>}} Durch die Reduktion auf Treffer eines *Ereignisses* $E$ kann somit immer ein alleiniges *Gegenereignis* $\bar{E}$ - also keine Treffer - definiert werden, sodass die *Wahrscheinlichkeiten* $P$ der beiden *Ereignisse* sich stets zu $100\%$ *aufaddieren*: 


$$
\begin{align*}
100\%=P(E) + P(\bar{E})  \;\; . \\
\end{align*}
$$


{{|>}} Ein *Ereignis* kann immer auf das Ziehen von Kugeln aus einer Urne übersetzt werden, sodass im folgenden Abschnitt zunächst die verschiedenen Anordnungen von Kugeln - der *Kombinatorik* - und anschließend das Ziehen von Kugeln thematisiert wird. 





{{|>}} Zuvor müssen die Begriffe "*Ereignis*" und "*Ergebnis*" und die daraus abgeleiteten Größen betrachtet werden. Dies ist am besten an zwei Würfeln dar zu stellen. So ist der *Ergebnisraum* $\Omega$ hier als *Summe* der angezeigten Augen zu betrachten, sodass $\Omega=\left\{2;3;4;5;6;7;8;9;10;11;12\right\}$ ist. Nun können die *Ergebnisse* aus verschiedene *Ereignisse* resultieren, so kann zum Beispiel das *Ergebnis* $4$ durch die *Ereignisse* $\Sigma_4 = \left\{  \left\{ \right.\right.$  <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \left. \right\} ; \left\{ \right. $ <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \left. \right\} ; \left\{  \right. $ <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $\left.\left. \right\}\right\}$ dargestellt werden.  



{{|>}} Je nach Bezug können unterschiedliche *Mittelwerte* $\bar{x}$ existieren, allerdings wird hier in diesem Buch ausschließlich der *arithmetische Mittelwert* verwendet, welcher durch die *Summe* der *Ergebnisse* *dividiert* durch die Anzahl der *Ergebnisse* gegeben ist: 



$$
\begin{align*}
\bar{x}_{arithm} = \frac{1}{n} \sum\limits_{k=1}^{n} x_k  \;\; . \\
\end{align*}
$$



{{|>}} Um *Ergebnissmengen*, also zum Beispiel Messdaten, zu bewerten, ist oftmals auch die *Spannweite* $R$ von Interesse, welche lediglich die Distanz zwischen den maximalen und minimalen *Wert* der *Ergebnissemenge* beschreibt. Die *Spannweite* bildet das einfachste *Streumaß*:



$$
\begin{align*}
R   = x_{max} - x_{min}  \;\; . \\
\end{align*}
$$







***************************

