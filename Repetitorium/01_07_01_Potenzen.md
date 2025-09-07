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


tags: Erklärung, Potenzen, Wurzeln

comment: In diesem Abschnitt werden Potenzen und Wurzeln ausführlich erklärt.

author: Martin Lommatzsch

-->


# Potenzen und Wurzeln




{{|>}}
*********************


Wie schon zuvor wurden viele Rechenmethoden und neue Eigenschaften eingeführt, um die Übersicht oder Handhabung von rechnerischen Ausdrücken zu vereinfachen. Aus dem selben Grund wird die *Potenz* eingeführt, welche als verkürzte Schreibweise der wiederholten *Multiplikation* eines stets gleichwertigen *Faktors* dient. 


$$
\begin{align*}
a \cdot a & = a^2 \\
a \cdot a \cdot a \cdot a \cdot a  & = a^5\\
2^6 &= 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2    \\
\end{align*}
$$


{{|>}} Für *Potenzen* gelten Rechenregeln, welche schnell erklärt werden können, wenn der abkürzende Charakter wie in vorherigen *Gleichung* verinnerlicht wurde. Im Folgenden soll eine Regel gezeigt und dann begründet werden, dass diese gilt (außer die Regel ist intuitiv).



$$
\begin{align*}
a^2 \cdot a^3 &= a^{2+3} = a^5 = \left(a \cdot a\right) \cdot \left(a \cdot a \cdot a\right) \\
\Rightarrow a^3 : a^2 &= a^{3-2} = a^1 = a \\
\end{align*}
$$



{{|>}} Aus der Bedingung, dass $\frac{a}{a}=1$ sein muss und mit der Regel aus vorherigen *Gleichung* ergibt sich daraus, dass $a^1 \cdot \frac{1}{a} = a^0 = 1$ sein muss. Hieraus ergibt sich: 



$$
\begin{align*}
a^0 &= 1 \\ 
a^{-1} &= \frac{1}{a}   \\
\end{align*}
$$


{{|>}} Des Weiteren kann abgleitet werden, dass Rechnungen mit *Potenzen* nicht *assoziativ* sind:



$$
\begin{align*}
a^3 \cdot a^3 & = \left(a^{3}\right)^2 = a^{3 \cdot 2} = a^6 \\
a^{\left(3^2\right)} & = a^{3 \cdot 3} = a^9 \\
\end{align*}
$$



{{|>}} Außerdem lässt sich aus dem bereits Beschriebenen ersehen, dass 



$$
\begin{align*}
(a^2)^{\frac{1}{2}} &= a ^{\frac{2}{2}} = a^1 = a \\
\Rightarrow a^{\frac{1}{2}} &:= \sqrt{a} \;\;  \\
\end{align*}
$$



{{|>}} gilt, wobei $\sqrt{a}$ die *Wurzel* von $a$ genannt wird. Die *Wurzel* habt die *Potenz* $^2$ auf, wie in vorherigen *Gleichung* zu sehen ist.



{{|>}} Somit gelten zusammengefasst folgende Regeln für die *Potenzrechnung*:




$$
\begin{align*}
a^n \cdot a^m &= a^{n+m} \\
\left(a^n\right)^m  &= a^{n\cdot m} \\
a^0 & = 1 \\
a^{-n} & = \frac{1}{a^n} \\
a^{\frac{1}{n}} & =  \sqrt[n]{a} \\
\left(a^n\right)^m  & \neq a^{\left(n^m \right)} \\
\end{align*}
$$




{{|>}} Abschließend ist noch zu erwähnen, dass bei dem Ausdruck $a^n$ es sich bei $a$ um die *Basis* und bei $n$ um den *Exponenten* handelt.




<h2> *Wurzeln* </h2>

{{|>}} *Wurzeln* sind die *Umkehroperationen* zum *Potenzieren*. Somit steht hinter der sogenannten *Quadratwurzel* der Zahl $z$ ($\sqrt{z}$) die Frage: "`Welche Zahl ergibt mit sich selbst *multipliziert* die Zahl $z$?"' Hierzu lohnt es sich einige Zahlen zum *Quadrat* (zum Beispiel: $8^2 = 64$) zu kennen, um direkt ein Wert einer *Wurzel* zu erkennen. Da es nicht nur die *Quadratwurzel* der Zahl $z$ ($\sqrt{z} = z^{\frac{1}{2}}$) gibt, sondern auch noch höhere Werte des *Nenners* im *Exponenten*, lohnt es sich stets die jeweilige *Wurzel* als *Potenz* zu schreiben.




$$
\begin{align*}
\sqrt{z} & = z^{\frac{1}{2}} = \sqrt[2]{z} \\
\sqrt[4]{z} & = z^{\frac{1}{4}} \\
\end{align*}
$$


{{|>}} Es gibt ein schriftliches Verfahren eine *Wurzel* zu ziehen, allerdings bedarf es einer aufwendigeren Erklärung, welche in einem eigenen Teil vorgenommen wird, da die Schüler heutzutage oftmals bei der Einführung der *Wurzel* mit dem Taschenrechner arbeiten, wird vorerst das schriftliche *Wurzelziehverfahren* ausgespart.


{{|>}} Außerdem bleibt anzumerken, dass *Wurzeln* aus *negativen Zahlen* erst im Kapitel "*Komplexe Zahlen*" eingeführt werden. Bis zu diesem Zeitpunkt sind Berechnungen von *Wurzeln* aus *negativen Zahlen* nicht vorgesehen. Folglich sind Rechnungen in denen *Wurzeln* aus *negativen Zahlen* vorkommen ein Hinweis darauf, dass Rechenfehler aufgetreten sind. 




<h2> 10er-Potenzen </h2>


{{|>}} Von allen *Potenzen* haben *2er-Potenzen* $2^n$ in der Informatik und die *10er-Potenzen* $10^n$ eine besonders wichtige Funktion inne. Grade in der Physik werden besonders große Größen mit besonders kleinen verrechnet. Die daraus resultierenden Werte sollen dann wieder in einer Größe angegeben werden, die dem Menschen zur Vorstellung genügen. Deswegen werden viele Größen mit Hilfe der *10er-Potenzen* umgerechnet. Für diese gilt:



$$
\begin{align*}
10^2 & = 100 \\
10^{-3} &= \frac{1}{1000} = 0,001 \\
\end{align*}
$$


{{|>}} Jede *Einheit* ist meistens mit einer sprachlichen Abkürzung verbunden, so steht bei $1\,$cm das "centi" für $\frac{1}{100} = 10^{-2}$. Eine Tabelle mit der Auflistung vieler dieser Abkürzungen und ihre Bedeutung als *10er-Potenz* befinden sich im Kapitel zu den *Einheiten*. 


{{|>}} Während für alle *Einheiten* k für Kilo also Tausend steht, steht dies sprachlich bei der Einheit Byte B auch für Tausend. Allerdings versteckt sich hier durch den Fakt, dass Computer nur die $0$ (Nein) und die $1$ (Ja) kennen, eine andere Zahl: 



$$
\begin{align*}
10^3 \,\text{m} & = 1\, \text{km} \\
10^6\, \text{m} & = 1\, \text{Mm} \\
2^{10} \,\text{B} &= 1\, \text{kB} = 1024 \,\text{B}\\
2^{20} \,\text{B} &= 1\, \text{MB} = 1048576 \,\text{B}  \\
\end{align*}
$$


{{|>}} Bei der *Einheitenumrechnung* ist das Verständnis von *10er-Potenz* von elementarer Bedeutung, da 



$$
\begin{align*}
1\,\text{dm} &= 10\,\text{cm} = 10^1\,\text{cm} \\
1\,\text{dm}^2 &= 1\,\text{dm} \cdot 1\,\text{dm} =10\,\text{cm} \cdot 10\,\text{cm} = 100\,\text{cm}^2 = 10^2 \,\text{cm}^2\\
1\,\text{dm}^3 &= 1\,\text{dm} \cdot 1\,\text{dm}\cdot 1\,\text{dm} =10\,\text{cm} \cdot 10\,\text{cm} \cdot 10\,\text{cm} = 1000\,\text{cm}^3 = 10^3 \,\text{cm}^3 := 1 \,\text{l} \\
\end{align*}
$$


{{|>}} gilt. Dahinter verstecken sich sprachliche Abkürzungen, die mit *potenziert* werden $100\,\text{cm}^2 = 100 (\,\text{cm})^2 =100 \,\text{c}^2\,\text{m}^2 = 10^2 \frac{1}{10^2} \,\text{m}^2 = 1\,\text{m}^2$. Die Schreibweise für $1\,\text{cm}^2$ ist wieder nichts weiter als eine Konvention zur Abkürzung für $1 (\,\text{cm})^2$. Wie die vorherige Gleichung zeigt, gibt der *Exponent* der *Einheit* an, mit welcher Zahl die Anzahl der Null der Standardumrechnung *multipliziert* wird:  



$$
\begin{align*}
1\,\text{km} &= 1000\,\text{m} = 10^3\,\text{m} \\
1\,\text{km}^2 &= \left(10^3\,\text{m}\right)^2= \left(10^3\right)^2 \,\text{m}^2=  10^{3\cdot 2} \,\text{m}^2 = 1000000m^2= 10^6\,\text{m}^2 \\
1\,\text{km}^3 &= \left(10^3\,\text{m}\right)^3= \left(10^3\right)^3 \,\text{m}^3 = 10^{3\cdot 6}\,\text{m}^3 = 1000000000m^3 = 10^{9}\,\text{m}^3  \\
\end{align*}
$$


{{|>}} Der *Koeffizient* einer *10er-Potenz*, wie bei $3,24 \cdot 10^5$ wird auch *Mantisse* genannt.




<h2> *Binomische Lehrsätze* </h2>


{{|>}} Mit Hilfe der *Potenzen* können auch die *Summen* *potenziert* werden: 



$$
\begin{align*}
(x + d) \cdot (x + d) = (x+d)^2 & = x^2 + x \cdot d + d \cdot x + d^2 = x^2 + 2 \cdot d \cdot x + d^2 \\
(x - d) \cdot (x - d) = (x-d)^2 & = x^2 - x \cdot d - d \cdot x + d^2 = x^2 - 2 \cdot d \cdot x + d^2 \\
(x + d) \cdot (x - d) &=     x^2 + x \cdot d - d \cdot x + d^2 = x^2 - d^2 \\
\end{align*}
$$


{{|>}} Die drei *Gleichungen* werden *Binomische Gleichungen* (oftmals auch eher abwertend Binomische Formeln) genannt, welche aus dem *Binomischen Lehrsatz* als spezielle Form kommen, und werden in der Beschreibung der Natur immer wieder vorgefunden und nicht zu Letzt deswegen im Mathematik und naturwissenschaftlichen Unterricht in Klausur- und Übungsaufgaben verwendet. Die *Binomische Gleichungen* können anhand eines *Quadrats*, welches in vier *Flächen* unterteilt wurde, visualisieren. 



<center>

<!-- style="width:500px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Potenzer.png)

</center>





{{|>}} Generell kann man diese *Binomischen Lehrsätze* noch für jede *Potenz* verallgemeinern, dazu dient das sogenannt *Pascal'sche Dreieck*, welches die *Vorfaktoren* wiedergibt.



<!-- data-type="none"
data-sortable="false" -->
| Term | Ausgeklammert |
| :---:| :-------    |
| $(x + d)^0$ | $1$  |
| $(x + d)^1$ | $x + d$ |
| $(x + d)^2$ | $x^2 + 2 \cdot d \cdot x + d^2$ |
| $(x + d)^3$ | $x^3 + 3\cdot d \cdot x^2 + 3\cdot d^2 \cdot x + d^3$ |
| $(x + d)^4$ | $x^4 + 4\cdot d \cdot x^3 + 6\cdot d^2 \cdot x^2 + 4\cdot d^3 \cdot x + d^4$ |
| $(x + d)^5$ | $x^5 + 5\cdot d \cdot x^4 + 10\cdot d^2 \cdot x^3+ 10\cdot d^3 \cdot x^2 + 5\cdot d^4 \cdot x + d^5$ |



{{|>}} Dabei pflanzen sich die *Vorfaktoren* (sogenannte *Koeffizienten*) so weiter fort in dem die benachbarten *Koeffizienten* *aufaddiert* werden. Die *Potenzen* der ersten *Variable* startet stets mit der höchsten Zahl im *Exponenten* und nimmt bei jedem weiteren *Summanden* ab, während die *Potenz* der zweiten *Variable* im *Exponenten* zunimmt. Die *Vorfaktoren*, welche sich im *Pascal'schen Dreieck* befinden, werden im Kapitel "*Wahrscheinlichkeitsrechnung*" durch die sogenannten *Binomialkoeffizienten* erneut auftauchen und nochmals erläutert.




!?[Potenzgesetze](https://www.youtube.com/watch?v=g1zLW9FsglU)


Weitere *Koeffizienten* können aus dem *Pascal'schen Dreieck* entnommen werden:



<h2> *Pascal'sches Dreieck* </h2>

$$
\begin{align*} 1 \\ \end{align*}
$$
$$
\begin{align*} 1 \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1 \quad 2 \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1 \quad  3  \quad 3  \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1 \quad 4  \quad 6  \quad 4  \quad 1 \\\end{align*}
$$
$$
\begin{align*} 1  \quad  5 \quad 10 \quad 10 \quad 5 \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1  \quad  6 \quad 15 \quad 20 \quad 15 \quad 6 \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1  \quad  7 \quad 21 \quad 35 \quad 35 \quad 21 \quad 7 \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1  \quad  8 \quad 28 \quad 56 \quad 70 \quad 56 \quad 28 \quad 8 \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1  \quad  9 \quad 36 \quad 84 \quad 126 \quad 126 \quad 84 \quad 36 \quad 9 \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1  \quad  10 \quad 45 \quad 120 \quad 210 \quad 252 \quad 210 \quad 120 \quad 45 \quad 10 \quad 1 \\\end{align*}
$$
$$
\begin{align*} 1  \quad  11 \quad 55 \quad 165 \quad 330 \quad 462 \quad 462 \quad 330 \quad 165 \quad 55 \quad 11 \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1  \quad  12 \quad 66 \quad 220 \quad 495 \quad 792 \quad 924 \quad 792 \quad 495 \quad 220 \quad 66 \quad 12 \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1  \quad  13 \quad 78 \quad 286 \quad 715 \quad 1287 \quad 1716 \quad 1716 \quad 1287 \quad 715 \quad 286 \quad 78 \quad 13 \quad 1 \\ \end{align*}
$$
$$
\begin{align*} 1  \quad  14 \quad 91 \quad 364 \quad 1001 \quad 2002 \quad 3003 \quad 3432 \quad 3003 \quad 2002 \quad 1001 \quad 364 \quad 91 \quad 14 \quad 1 \\\end{align*}
$$
$$
\begin{align*} 1  \quad  15 \quad 105 \quad 455 \quad 1365 \quad 3003 \quad 5005 \quad 6435 \quad 6435 \quad 5005 \quad 3003 \quad 1365 \quad 455 \quad 105 \quad 15 \quad 1 \\ \end{align*}
$$

*********************