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


tags: Erklärung, Prozentrechnung

comment: In diesem Abschnitt wird die Prozentrechnung ausführlich erklärt.

author: Martin Lommatzsch

-->

# Prozentrechnung



{{|>}}
**********************



Die *Prozentrechnung* ist von besonderer Bedeutung in der heutigen Gesellschaft, dabei versteckt sich hinter ihr nur der *Bruch* $\frac{1}{100}$. Denn *pro cent* bedeutet übersetzt nicht viel mehr als pro hundert. Aus diesem *Bruch* heraus hat sich historisch dann das *Prozentzeichen* $\%$ entwickelt. Der rechnerische Umgang ist durch das Ersetzen von $\%$ durch $\frac{1}{100}$ gegeben. Während für *Promille* sich ebenfalls ein abkürzendes Zeichen entwickelt hat: $1 \text{\permil} = \frac{1}{1000}$.



$$
\begin{align*}
4 \% = 4 \cdot \frac{1}{100} = \frac{4}{100} = 0,04 \\  \end{align*}
$$


Auch andere Rechnungen sind auf diesen Fakt reduzierbar: Sei ein Kapital von $1000$\,\euro\; mit einem *Zinssatz* von $4\%$ pro Jahr angelegt, wie hoch wären die *Zinsen* nach einem Jahr? Diese Frage kann leicht dargestellt werden als: 



$$
\begin{align*}
1000 \text{\,\euro\;} \cdot 4 \% = 1000 \text{\,\euro\;} \cdot 4 \cdot \frac{1}{100} = 4000 \text{\,\euro\;}   \cdot \frac{1}{100} = \frac{4000 \text{\,\euro\;}}{100} = 40 \text{\,\euro\;} \;\; , \\ 
 \end{align*}
$$



Der *Dreisatz* zur Frage "`Wie viel sind 4\% von 300?"' gestaltet sich als:



$$
\begin{align*}
300 \;\; & \text{entsprechen: } \;\; 100 \% \\
3 \;\; & \text{entsprechen: } \;\; 1 \% \\
12 \;\; & \text{entsprechen: } \;\; 4 \%  \\
 \end{align*}
$$

Allerdings ist der *Dreisatz* durch das Wissen, dass $\% = \frac{1}{100}$ ist, wie folgt verkürzt durchzuführen: 




$$
\begin{align*}
300 \cdot 4 \% = \frac{4 \cdot 300}{100} = \frac{1200}{100} = 12 \;\; , \\
 \end{align*}
$$

wobei in der vorherigen *Gleichung* die Zwischenschritte weggelassen werden könnten, da $\frac{300}{100}$ und $3 \cdot 4$ nicht von besonderer Schwierigkeit sind.


Ein anderer Aspekt bei der *Prozentrechnung* ist die *Normierung*. Die *Normierung* beschreibt die Rechnung wie viel ein *Prozent* darstellen. Sei zum Beispiel eine *Menge* von $250000$ gegeben, dann kann jede *Teilmenge* (zum Beispiel $46972$) mit dem *Kehrwert* der *Menge* *multipliziert* und somit *normiert* werden.  


$$
\begin{align*}
\frac{1}{250000} \cdot 46972 = 18,7888 \% \;\; , \\
 \end{align*}
$$

Somit entspricht die *Teilmenge* insgesamt $18,7888 \%$ der *Gesamtmenge*. Es gibt verschiedene Formen der *Normierung* neben der *Normierung* auf $100\%$, welche in diesem Abschnitt vorgestellt wurde.

Da des öfteren nach bestimmten Vokabeln gefragt wird, sollen diese noch am Ende vorgestellt werden:



$$
\begin{align*}
W = p\left[\%\right] G = \frac{p}{100} G \;\; , \\
 \end{align*}
$$

wobei $G$ der *Grundwert*, $W$ der *Prozentwert*, $p$ der *Prozentfuß* oder *Prozentzahl* und $p[\%]$ der *Prozentsatz* ist. (Beispiel: Der *Prozentsatz* muss in *Prozent* angegeben werden $p[\%] = 5\%$, während hier die *Prozentzahl* durch $p=5$ gegeben ist, sodass $p[\%] = \frac{p}{100}$ gilt.) \\



		
Füllt man diese *Gleichung* mit einer Bedeutung bezüglich Geldanlagen werden oftmals andere *Variablennamen* verwendet, während das mathematische Vorgehen unverändert bleibt:		


$$
\begin{align*}
W & = G \frac{p}{100}  \;\; , \\
Z & = K \frac{p}{100}  \;\; , \\
 \end{align*}
$$

wobei $Z$ für Zinsen und $K$ für das *Kapital* steht. Anhang von Geldanlagen kann schnell verdeutlicht werden, wie dramatisch sich ein stetiges *relatives Wachstum* auswirkt, denn ein *Wachstum* um einen festen relativen *Wert* wird auch *exponentielles Wachstum* genannt. Hier soll ein Beispiel dienen: Ein *Kapital* von $K_0 = 5000$\EUR{} soll für $4$ Jahre zu einem *Jahreszinssatz* von $p\left[\%\right]=10\%$ angelegt werden. Das bedeutet, dass nach jedem Jahr ein neues *Grundkapital* betrachtet werden muss, da die *Zinsen* *addiert* werden:


$$
\begin{align*}
Z_1 & = K_0 \frac{p}{100}  \;\; \Rightarrow \;\; K_1 = K_0 + Z_1 \;\; , \\
Z_2 & = K_1 \frac{p}{100}  \;\; \Rightarrow \;\; K_2 = K_1 + Z_2 \;\; , \\
Z_3 & = K_2 \frac{p}{100}  \;\; \Rightarrow \;\; K_3 = K_2 + Z_3 \;\; , \\
& \vdots \\
 \end{align*}
$$

Im Beispiel ergibt sich daraus:


$$
\begin{align*}
Z_1 & = 5000 \text{\EUR{}} \frac{10}{100} = 500\text{\EUR{}}  \;\; \Rightarrow \;\; K_1 = K_0 + Z_1 = 5500\text{\EUR{}} \;\; , \\
Z_2 & = 5500 \text{\EUR{}} \frac{10}{100} = 550\text{\EUR{}}  \;\; \Rightarrow \;\; K_2 = K_1 + Z_2 = 6050\text{\EUR{}} \;\; , \\
Z_3 & = 6050 \text{\EUR{}} \frac{10}{100} = 605\text{\EUR{}}  \;\; \Rightarrow \;\; K_3 = K_2 + Z_3 = 6655\text{\EUR{}} \;\; , \\ 
Z_4 & = 6655 \text{\EUR{}} \frac{10}{100} = 665,5\text{\EUR{}}  \;\; \Rightarrow \;\; K_4 = K_3 + Z_4 = 7320,5\text{\EUR{}} \;\; , \\ 
 \end{align*}
$$

Dies kann auch komprimiert als Gleichung dargestellt werden,: 


$$
\begin{align*}
 K_1 &= K_0 + Z_1 \;\; , \\
 K_1 &= K_0 + K_0 \frac{p}{100}  \;\; , \\
 K_1 &= K_0 \underbrace{\left( 1+ \frac{p}{100}\right)}_{=q}  \;\; , \\
 \end{align*}
$$

wobei $q$ der *Wachstumsfaktor* ist. Aus der verkürzten *Darstellung* eines Jahres, kann eine *Gleichung* für $n$ Jahre entwickelt werden, hierfür wird zunächst eine Kapitalentwicklung über $3$ Jahre betrachtet:



$$
\begin{align*}
 K_3 &= K_2 \left( 1+ \frac{p}{100}\right) \qquad\; \text{mit:} \;\; K_2 = K_1 \left( 1+ \frac{p}{100}\right)  \;\; , \\ 
 K_3 &= K_1 \left( 1+ \frac{p}{100}\right) \left( 1+ \frac{p}{100}\right) \qquad\; \text{mit:} \;\; K_1 = K_0 \left( 1+ \frac{p}{100}\right)  \;\; , \\ 
 K_3 &= K_0 \left( 1+ \frac{p}{100}\right) \left( 1+ \frac{p}{100}\right) \left( 1+ \frac{p}{100}\right) \qquad\; \text{mit:} \;\; a \cdot a = a^2  \;\; , \\ 
 K_3 &= K_0 \left( 1+ \frac{p}{100}\right)^3 \;\; , \\ 
\Rightarrow\;\;  K_n &= K_0 \left( 1+ \frac{p}{100}\right)^n \;\; ,\\ 
 \end{align*}
$$

Allerdings werden bei Vertragskündigung nicht immer volle Jahre verrechnet, sodass die $n$ Jahre auf Monate, Wochen oder Tage umgerechnet werden müssen. Hierbei ist zu beachten, dass Banken (und in der Wirtschaft) nur mit $360$ statt $\approx 365,249$ Tagen pro Jahr rechnet wird. In der Finanzwelt werden auch monatlich oder täglich Zinsen berechnet, sodass sich die *Gleichung*, die für Jahre gilt, für den *Zinssatz* $p$ noch angepasst werden muss.



$$
\begin{align*}
 K_n &= K_0 \left( 1+ \frac{p}{100}\right)^n \qquad\text{Jahreszinsen} \;\; ,\\
 K_n &= K_0 \left( 1+ \frac{p}{100} \cdot \frac{m}{12}\right)^n \qquad\text{Monatszinsen} \;\; ,\\
 K_n &= K_0 \left( 1+ \frac{p}{100} \cdot \frac{t}{360}\right)^n \qquad\text{Tageszinsen} \;\; ,\\
 \end{align*}
$$



wobei $m$ für die Anzahl der Monate und $t$ für die Anzahl der Tage stehen.







**********************
