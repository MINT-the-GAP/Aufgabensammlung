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


tags: Erklärung, Dezimalzahlen

comment: In diesem Abschnitt wird die Dezimalzahlen ausführlich erklärt.

author: Martin Lommatzsch

-->



# Dezimalzahlen


{{|>}}
********************************


Um **Brüche** in **Dezimalzahlen** umzuwandeln bedarf es der schriftlichen **Division** oder eines guten Zahlengefühls. Anhand eines Beispiels soll ersteres verdeutlicht werden.  


$$
\begin{align*}
\dfrac{2}{7} =\qquad &2 : 7 =0,285... \\
						 -&0\\\hline
							&20\\
							-&14 \\\hline
							&\hspace{0.5em}60\\
							-&\hspace{0.5em}56\\\hline
						&\hspace{0.5em}\hspace{0.5em}40 \\
							-&\hspace{0.5em}\hspace{0.5em}35\\\hline
						&\;\; \vdots \\
\end{align*}
$$


{{|>}} An der **Gleichung** ist zu erkennen, wie jeder **Bruch** in eine **Dezimalzahl** umgewandelt werden kann. Dabei wird bei der schriftlichen **Divisionsrechnung** nach jeder **Subtraktion**  eine Nachkommastellennull nach unten gezogen, sodass die Rechnung fortgesetzt werden kann bis kein **Rest** mehr existiert, eine **Periodizität** wie bei $\dfrac{1}{3} = 0,3333333333... = 0,\bar{3}$ festgestellt wird oder eine genauere **Dezimalzahl** nicht mehr erforderlich ist. Da im Allgemeinen bekannt ist, dass $\dfrac{3}{3}=1$ ist, soll hier an dieser Stelle des Buchs folgende Festlegung zur **Periodizität** gelten: $3 \cdot 0,\bar{3} = 0,\bar{9} := 1$. Diese Festlegung kann auch bewiesen werden, was allerdings hier den Rahmen des Buches sprengen würde. 

{{|>}} Die maximale **Periodenlänge** ist gegeben durch den **Nenner** des **Bruches** $a$, welcher zur **Dezimalbruchdarstellung** gehört. Dabei hat die maximal mögliche **Periodenlänge** (Anzahl der Ziffern bevor sich die Reihenfolge der Zahlen wiederholt) $a-1$ Ziffern lang. Hierbei muss beachtet werden, dass die **Periodenlänge** auch kleiner als die maximale **Periodenlänge** sein kann.  

{{|>}} Um **Brüche** in eine **Dezimaldarstellung** zu bringen besteht auch die Möglichkeit den **Bruch** so zu **Erweitern**, dass dieser eine **Zehnerpotenz** bildet ($10,\; 100,\; 1000,\; 10000,\;...$), um anschließend nur das Komma im **Zähler** an die richtige Stelle zu setzen. Dabei geben die Nullen im **Nenner** an, wie **Nachkommastellen** existieren.


$$
\begin{align*}
\dfrac{49}{20} = \dfrac{49 \cdot 5}{20 \cdot 5} = \dfrac{245}{100} = 2,45 \\
\end{align*}
$$


{{|>}} Im Allgemeinen sollte auf eine Umwandlung in **Dezimalzahlen** verzichtet werden, da die **Darstellung** durch einen **Bruch** meistens, das weitere Vorgehen vereinfacht. Die **Darstellung** einer Zahl als **Bruch** ist dabei eine Schreibweise, welche eine Rechnung fordert, aber sie nicht ausführt. So kann zum Beispiel durch das Erhalten von **Bruchdarstellungen** folgende Rechnung leichter durchgeführt werden als in der **Dezimalzahlendarstellung**, welche im direkten Vergleich darunter zu finden ist. (Bei dieser Rechnung werden **Klammern** verwendet, deren Bedeutung genaustens im Abschnitt "Klammersetzung" besprochen werden. Für diese Rechnung gilt, dass die Rechnung in der **Klammer** zu erst ausgeführt werden soll.) 



$$
\begin{align*}
\left( \dfrac{2}{3} + \dfrac{1}{6} \right) \cdot \dfrac{3}{5} & =  \left( \dfrac{2 \cdot 2}{3 \cdot 2} + \dfrac{1}{6} \right)  \cdot \dfrac{3}{5}  \\
& = \dfrac{5}{6} \cdot \dfrac{3}{5}  \\
& = \dfrac{\cancel{5} \cdot 3}{6 \cdot \cancel{5}}  \\
& = \dfrac{3}{6}  \\
& = \dfrac{1}{2} \\ & \\
\left( 0,\bar{6} + 0,1\bar{6} \right) \cdot 0,6 & = 0,8\bar{3} \cdot 0,6  \\
& = 0,5 \\
\end{align*}
$$


{{|>}} Die Gleichung zeigt, dass die Rechnung mit den **Brüchen** zwar länger erscheint, aber vollständig im Kopf durchgeführt werden kann. Während die Rechnungen mit den **Dezimalzahlen** vielen Menschen nur mit Taschenrechner gelingen und dabei noch die Problematik der **Periodizität** bei der Eingabe in den Taschenrechner besteht, sodass als Lösung $0,499999999$ auf dem Taschenrechnerdisplay angezeigt wird. Diese Lösung wäre nicht richtig und durch das **Runden** de Lösung bekommt der Schüler oftmals den Eindruck, dass solche Rechnungen nicht ohne Taschenrechner schaffbar seien. Aus diesem Grund lohnt es sich besonders bei **Divisionsaufgaben** die **Dezimalzahlen** in **Brüche** zu überführen.





{{|>}} Viele **Dezimalzahlen** lassen sich als **Brüche** darstellen, hierbei wird der **Stellenwert** der einzeln Ziffern mit der Ziffer multipliziert und anschließend die einzelnen **Brüche** **aufaddiert**.



$$
\begin{align*}
0,2573 & = 0 \cdot \dfrac{1}{1} + 2 \cdot \dfrac{1}{10} + 5 \cdot \dfrac{1}{100} + 7 \cdot \dfrac{1}{1000} + 3 \cdot \dfrac{1}{10000} \\
& = \dfrac{2573}{10000} \\
\end{align*}
$$



{{|>}} Wobei deutlich wird, dass der **Stellenwert** der letzten Ziffer entscheiden für den resultierenden **Nenner** ist. Anschließend sollte stets geguckt werden ob das **Kürzen** der **Brüche** möglich ist. 




{{|>}} **Periodizitäten** lassen sich auch als **Bruch** darstellen, hierbei wird der **Darstellungswechsel** zwischen Neunteln und dessen **Dezimalzahldarstellung** betrachtet:




$$
\begin{align*}
&\dfrac{1}{9} = 0,\bar{1}  \qquad 
\dfrac{2}{9} = 0,\bar{2}  \qquad 
\dfrac{3}{9} = 0,\bar{3}  \qquad  \\
&\dfrac{4}{9} = 0,\bar{4}  \qquad 
\dfrac{5}{9} = 0,\bar{5}  \qquad 
\dfrac{6}{9} = 0,\bar{6}  \qquad  \\
&\dfrac{7}{9} = 0,\bar{7}  \qquad 
\dfrac{8}{9} = 0,\bar{8}  \qquad 
\dfrac{9}{9} = 0,\bar{9}=1  \qquad  \\
&\dfrac{10}{9} = 1,\bar{1}  \qquad 
\dfrac{11}{9} = 1,\bar{2}  \qquad 
\dfrac{12}{9} = 1,\bar{3}  \qquad \\
\end{align*}
$$



{{|>}} Somit kann für **Periodizitäten** mit mehreren Ziffern auch die Beteiligung von Neunteln geschlussfolgert werden:



$$
\begin{align*}
&\dfrac{12}{99} = 0,\overline{12}  \qquad  
\dfrac{54}{99} = 0,\overline{54}  \qquad   \\
&\dfrac{120}{99} = 1,\overline{19}  \qquad  
\dfrac{125}{999} = 0,\overline{125}  \qquad  \\
\end{align*}
$$



{{|>}} Wobei es Verschiebungen durch die Komination mit Zehnteln kommen kann:



$$
\begin{align*}
&\dfrac{7}{90} = 0,0\overline{7}  \qquad  
\dfrac{10}{90} = 0,\overline{1}  \qquad   \\
&\dfrac{11}{90} = 0,1\overline{2}  \qquad  
\dfrac{19}{90} = 0,2\overline{1}  \qquad  \\
\end{align*}
$$



{{|>}} **Dezimalzahlen**, die nicht als **Bruch** dargestellt werden können sind **irrationale Zahlen** $\mathbb{I}$ (Zahlen die nicht durch einen **Bruch** dargestellt werden können). Beispiele hierfür sind:



$$
\begin{align*}
& a)\;\; 0,10100100010000100000... \\
& b)\;\; 0,123456789101112131415... \\
& c)\;\; \pi=3,14159265358979323... \\
& d)\;\; e=2,71828182845904523536... \\
\end{align*}
$$


{{|>}} Die Rechnung mit **Dezimalzahlen** verhält sich ähnlich wie mit **Natürlichen Zahlen**, wobei im Wesentlichen die Position des Kommas beachtet werden muss.


{{|>}} • **Addition** und **Subtraktion**: Bei der schriftlichen **Addition** sowie der **Subtraktion** müssen die Kommata untereinander stehen. Im folgenden Beispiel $13,37+42,6587$ werden zum ersten **Summanden** zwei weitere **Nachkommastellen** in blau hinzugefügt $13,37=13,37\textcolor{blue}{00}$, um mehr Übersicht zu gewährleisten.



$$
\begin{align*}
13,37\textcolor{blue}{00}&   \\
+42,6587& \\ 
	\textcolor{red}{1,1}\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}&  \\ \hline
56,0287& \\
\end{align*}
$$


{{|>}} • **Multiplikation**: Bei der **Multiplikation** von **Dezimalzahlen** bietet es sich ein **Darstellungswechsel** in die **Bruchdarstellung** an, da so die normale schriftliche **Multiplikation** durch geführt werden kann. 



$$
\begin{align*}
2,34 \cdot 0,7 & = \dfrac{234}{100} \cdot \dfrac{7}{10} \\ 
& = \dfrac{234 \cdot 7}{100 \cdot 10}  \\ 
& = \dfrac{1638}{1000}  \\ 
& = 1,638 \\
\end{align*}
$$


{{|>}} Hieraus wird auch die folgende Regel ersichtlich: "Die Anzahl der **Nachkommastellen** aller **Faktoren** ergibt die Anzahl der **Nachkommastellen** des **Werts des Produkts**."



{{|>}} • **Division**: Bei der **Division** von **Dezimalzahlen** bietet es sich ein **Darstellungswechsel** in die **Bruchdarstellung** an, da so die normale schriftliche **Division** durch geführt werden kann. 



$$
\begin{align*}
       3,234 : 0,6 &= \dfrac{3234}{1000} : \dfrac{6}{10}  \\ 
& = \dfrac{3234}{1000} \cdot \dfrac{10}{6}  \\ 
& =  \dfrac{3234}{100} \cdot \dfrac{1}{6}  \\ 
& = \dfrac{1}{100} \cdot \dfrac{3234}{6}  \\ 
& = 32,34:6  \\ 
& = 5,39 \\
\end{align*}
$$


{{|>}} Wobei auch wieder eine Regel ersichtlich wird: "Die Kommata dürfen im **Divisor** und **Dividenden** gleichmäßig verschoben werden. Um eine schriftliche **Division** durch zu führen ist es ratsam kein Komma im **Dividenden** zu besitzen."








{{|>}} Das Prinzip **Runden** unterliegt auch bei den **Dezimalzahlen** klaren Regeln, wie auch schon bei den **natürlichen Zahlen**. So gilt, wenn die Stelle hinter der **gerundet** werden soll größer als vier ist, dann wird **aufgerundet**. Beim **Aufrunden** wird die Ziffer an der **gerundet** wird um eins erhöht. Andernfalls wird **abgerundet** und die Ziffer bleibt unangetastet.





$$
\begin{align*}
0,485 &\approx 0,49 \qquad \text{aufrunden}\\
0,322 &\approx 0,32 \qquad \text{abrunden}\\
\end{align*}
$$



{{|>}} Das Prinzip des **Rundens** ist wichtig, da bei vielen Rechnungen in der Lösung viele **Nachkommastellen** auftreten. Aus diesem Grund gilt stillschweigend die Konvention, dass immer auf zwei **Nachkommastellen** gerundet wird, außer es ist anders angegeben.











{{|>}} Dieses Verfahren zur Umwandlung von **Brüchen** in **Dezimalzahlen** ist in erster Linie nützlich um **Prozentwerte** auszurechnen, was detaillierter im Abschnitt "Prozentrechnung" beschrieben wird. Es ist ratsam für jeden Schüler, wenn jede mögliche Rechnung mit **Brüchen** bewältigt wird, da die **Bruchrechnung** mit zunehmenden Umfang der Mathematik an Bedeutung gewinnt. Aus diesem Grund befindet sich im Folgenden noch eine Auflistung einiger besonders oft vorkommenden **Brüche** und ihrer **Dezimalszahldarstellung**. Wichtig zu erwähnen bleibt, dass nicht jede **Dezimalzahl** als eine **Bruchzahl** dargestellt werden kann.




$$
  \begin{align*}
\dfrac{1}{2} & = 0,5 \qquad \quad &&\dfrac{1}{4} = 0,25 \\
\dfrac{1}{8} & = 0,125 \qquad \quad &&\dfrac{1}{16} = 0,0625 \\
\dfrac{3}{2} & = 1,5 \qquad \quad &&\dfrac{3}{4} = 0,75 \\
\dfrac{3}{8} & = 0,375 \qquad \quad &&\dfrac{5}{8} = 0,625 \\
\dfrac{5}{2} & = 2,5 \qquad \quad &&\dfrac{5}{4} = 1,25 \\
\dfrac{7}{8} & = 0,875 \qquad \quad &&\dfrac{9}{8} = 1,125 \\
\dfrac{1}{3} & = 0,\overline{3} \qquad \quad &&\dfrac{2}{3} = 0,\overline{6} \\
\dfrac{4}{3} & = 1,\overline{3} \qquad \quad &&\dfrac{1}{6} = 0,1\overline{6} \\
\dfrac{5}{6} & = 0,8\overline{3}  \qquad \quad  &&\dfrac{1}{12} = 0,08\overline{3} \\
\dfrac{1}{9} & = 0,\overline{1} \qquad \quad &&\dfrac{5}{9} = 0,\overline{5}  \\
\dfrac{1}{5} & = 0,2 \qquad \quad &&\dfrac{3}{5} = 0,6  \\
\dfrac{1}{10} & = 0,1 \qquad \quad &&\dfrac{7}{10} = 0,7 \\
\dfrac{1}{100} & = 0,01 = 1\% \qquad \quad &&\dfrac{1}{1000} = 0,001 = 1 \permil \\
\end{align*}  
$$




********************************