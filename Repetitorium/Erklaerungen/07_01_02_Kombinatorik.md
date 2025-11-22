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


tags: Erklärung, Kombinatorik

comment: In diesem Abschnitt wird Kombinatorik ausführlich erklärt.

author: Martin Lommatzsch

-->

# Kombinatorik




{{|>}}
***************************
Die *Kombinatorik* ist ein Teilgebiet der Mathematik, welches sich mit der *Abzählbarkeit* bei *diskreten* Prozessen wie dem Anordnen von Kugeln beschäftigt. In diesem Buch wird im Wesentlichen nur auf die Aspekte eingegangen, die für ein Verständnis der grundlegenden *stochastischen* und *statistischen* Grundlagen benötigt werden.  Aus diesem Grund soll die Anordnungsmöglichkeit von unterschiedlich farbigen Kugeln nach ihrer Anzahl der Startpunkt sein. Um $0$ unterschiedliche Kugeln anzuordnen gibt es nur eine Anordnungsmöglichkeit, da nichts anzuordnen ebenfalls eine Anordnung ist und somit den Ausgangspunkt jeglicher Betrachtung bildet. In der folgenden Abbildung sind alle Anordnungen von Kugeln mit wachsender Anzahl (bis $n=4$) dargestellt, wobei die Anordnung von oben nach unten betrachtet werden muss, während die jeweiligen Blöcke $n$ darstellten und bei $n=0$ starten.



![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/kombi1.png)



{{|>}} Erkennbar wird, dass die Anzahl der Anordnungen, die sogenannten *Permutationen*, kontinuierlich ansteigen. Auch wird deutlich, dass bei der Anordnung für $n=3$	die Elemente von $n=2$ und bei der Anordnung für $n=4$	die Elemente von $n=3$ wiederzufinden sind, was durch die gestrichelten Linien gezeigt wird. Die Gesamtanzahl der *Permutationen* kann durch die *Fakultät* beschrieben werden. Dies lässt sich Anhand des Beispiels für $n=4$ begründen, da also für die erste Kugel vier Optionen zur Auswahl stehen, danach können für die gewählte Kugel an der zweiten Position aus drei Optionen gewählt werden, danach aus zwei Optionen und abschließend nur noch aus einer Option, sodass sich $4 \cdot 3 \cdot 2 \cdot 1 = 4!$ *Permutationen* ergeben. 


{{|>}} Werden die *Permutationen* von mehreren Kugeln gleicher Farbe betrachtet, werden die *Permutationen*, die eine Wiederholung darstellen nicht extra gewertet.


![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/kombi2.png)


{{|>}} In dem gezeigten Beispiel sind vier Kugeln zu sehen, welche nur auf die Farben rot und blau beschränkt sind. Von links nach rechts wächst in den Blöcken die Anzahl der blauen Kugeln. Deutlich zu erkennen ist, dass es stets einen Block mehr gibt als die *Gesamtanzahl* der Kugeln. Auch die *Symmetrie* ist gut zu erkennen, da es keinen Unterschied in der Anzahl der *Permutationen* macht, welche Kugel welche Farbe hat, sondern lediglich die *Differenz* zwischen den roten und blauen Kugeln. Da allerdings bei $n=4$ Kugeln generell $24$ *Permutationen* bestehen, müssen die *Permutationen* der jeweiligen Blöcke durch eine stets gleiche Rechenoperation im Bezug zur Anzahl der jeweiligen Farbe erzeugt werden. Dies ist möglich, wenn durch die Anzahl der *Permutationen* gleicher Farbe *dividiert* wird, was bei zwei Farben auch durch den *Binominialkoeffizienten* dargestellt wird:


$$
\begin{align*}
\dfrac{4!}{4! \cdot 0!} = 1 \qquad \dfrac{4!}{3! \cdot 1!} = 4 \qquad \dfrac{4!}{2! \cdot 2!} = 6 \qquad \dfrac{4!}{1! \cdot 3!} = 4 \qquad \dfrac{4!}{0! \cdot 4!} = 1
\end{align*}
$$


{{|>}} Dies kann durch die *Anzahlfunktion* $\#$ wie folgt verallgemeinert werden: 


$$
\begin{align*}
\# P &= \frac{\#K!}{\#F_1!\#F_2!...\#F_N!} = \frac{\#K!}{\prod\limits_{i=1}^N\#F_i!} \;\; , \\
\end{align*}
$$


{{|>}} wobei die Anzahl der *Permutationen* $\#P$ gegeben ist durch die *Fakultät* der Anzahl aller Kugeln $\#K$ *dividiert* durch das *Produkt* der Anzahl der jeweiligen farbigen Kugeln $\#F_1$. Dabei gibt der *Index* die Farbe an und $N$ die gesamte Anzahl aller Farben. 


{{|>}} Ähnlich wie bei der wachsenden Anzahl von Kugeln mit neuen Farben, kann auch die Umkehrung betrachtet werden, bei der die Anzahl der unterschiedlichen farbigen Kugeln und deren Maximalanzahl gegeben ist. Im folgenden alle Anordnungsoptionen für zwei Farben mit unterschiedlicher Maximalanzahl von Kugeln $n$. 



![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/kombi3.png)

{{|>}} Für drei Farben mit unterschiedlicher Maximalanzahl von Kugeln $n$ ergibt sich das folgende Bild:	



![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/kombi4.png)


{{|>}} Für vier Farben mit unterschiedlicher Maximalanzahl von Kugeln $n$ ergibt sich das folgende Bild:	



![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/kombi5.png)


{{|>}} Dies Muster lässt sich vorsetzen, sodass sich für $n=5$ die Anordnungsoptionen $1 \stackrel{\cdot 5}{\longrightarrow} 5 \stackrel{\cdot 4}{\longrightarrow} 20 \stackrel{\cdot 3}{\longrightarrow} 60 \stackrel{\cdot 2}{\longrightarrow} 120 \stackrel{\cdot 1}{\longrightarrow} 120 $	 und für $n=6$ die Anordnungsoptionen $1 \stackrel{\cdot 6}{\longrightarrow} 6 \stackrel{\cdot 5}{\longrightarrow} 30 \stackrel{\cdot 4}{\longrightarrow} 120 \stackrel{\cdot 3}{\longrightarrow} 360 \stackrel{\cdot 2}{\longrightarrow} 720   \stackrel{\cdot 1}{\longrightarrow} 720 $	ergeben. \\



{{|>}} Generell gilt, dass bei Aufzeichnen von Kombinationen (oder Anordnungsmöglichkeiten) ein Schema überlegt werden sollte, da es sonst zu Dopplungen kommen kann oder gar Anordnungsoptionen übersehen werden können. Aus diesem Grund empfiehlt es sich, dass zunächst das erste Element (hier Kugelfarbe) festgesetzt wird, dann das zweite und so weiter. Ist eine erste Anordnung gefunden, sollten die letzten beiden Elemente vertauscht werden. Anschließend die letzten drei Elemente, wobei es sich empfiehlt, das drittletzte Element nur einmal zu wechseln bis die beiden letzten Elemente wieder vertauscht wurden. Dies kann auch als *Baumdiagramm* dargestellt werden: 



![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/kombi6.png)


{{|>}} wobei von den vier Anfangspfaden aus Platzgründen nur einer dargestellt wurde. 



{{|>}} Werden Kugeln aus einer Urne gezogen, handelt es sich um ein *Zufallsexperiment* und die *Ereignisse* können in Treffer und Nichttreffer einsortiert werden, sodass in der Regel nur zwei *Ereignisse* betrachten werden müssen. In der folgenden Darstellung sind mit $n$ die Anzahl der Ziehungen nach unten aufgetragen, während alle möglichen *Ergebnisse* der Ziehungen in Blöcken gleicher *Häufigkeit* in den jeweiligen Zeilen visualisiert sind. 
	


![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/kombi7.png)



{{|>}} 
***************************
Deutlich zu erkennen ist, dass die Anzahl der möglichen *Ergebnisse* mit dem *Quadrat* der Anzahl der Ziehungen zunimmt. Auch sind die verschiedenen *Permutationen* für die gleichen *Häufigkeiten* zu erkennen, sodass dies als die Anzahl der *Pfade*, die unter Vernachlässigung der Reihenfolge zum gleichen *Ergebnis* führen angesehen werden kann. Die jeweiligen *Permutationsmöglichkeiten* sind bei den *Baumdiagrammen* gegeben durch die *Binomialkoeffzienten*, welche schon aus dem Kapitel "`Algebraische Grundlagen"' bekannt sind. So kann bei zwei Farben die Anzahl der *Pfade* darüber bestimmt werden, indem das *Pascal'sche Dreieck* betrachtet wird. Für mehr Farben ergeben sich auch mehr mögliche *Permutationen*. Die verschiedenen *Permutationen* für die jeweiligen *Pfade* bei mehreren Farben können über die *Reihe*


$$
\begin{align*}
\left(\sum_{i=1}^{N} F_i \right)^n \;\; , \\
\end{align*}
$$


 wobei $n$ der Anzahl der Ziehungen entspricht.

***************************





***************************


