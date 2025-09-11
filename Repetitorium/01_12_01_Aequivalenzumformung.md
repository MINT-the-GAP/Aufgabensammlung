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


tags: Erklärung, Äquivalenzumformung

comment: In diesem Abschnitt wird die Äquivalenzumformung ausführlich erklärt.

author: Martin Lommatzsch

-->

# Äquivalenzumformung



{{|>}}
********************************



Die *Äquivalenzumformung* stellt die Basis für den Erkenntniserwerb und steht als selbstverständliches Vorwissen aller Schüler im Zentrum des naturwissenschaftlichen Unterrichts. Letztendlich versteckt sich hinter diesem Wort nur die Bedingung, dass auf beiden Seiten des *Äquivalenzzeichens* "=" immer die gleichen *Operationen* durchgeführt werden müssen. Dabei wird hinter dem *Kommandostrich* oder *Ankündigungsstrich* "$\left|\right.$" hinter der umzuformenden *Gleichung* die nachfolgende *Operation* angegeben.


$$
\begin{align*}
  0	 &= 0  \qquad \left|   + 2   \right. \\
	\Leftrightarrow 2 &= 2 \\
  \end{align*}
$$


{{|>}} Die Gleichung zeigt, wie auf beiden Seiten des *Äquivalenzzeichen* die Zwei *addiert* wurde. Dabei steht der Doppelpfeil $\Leftrightarrow$ für "daraus folgt und umgekehrt", und ist nicht zwingend erforderlich bei einer *Äquivalenzumformung*, sollte allerdings bei einer genauen, detaillierten und vollständigen Betrachtung mit geschrieben werden.


{{|>}} Eine *Gleichung* wird zum Beispiel durch eine Balkenwaage mit gleichlangen Armen symbolisiert, bei der auf beiden Seiten die exakt gleiche Masse in den Schalen liegen muss. 

<center>

<!-- style="width:600px" -->
![](Kap2/waage0.png)

</center>

{{|>}} In der Abbildung wird deutlich, dass die Masse $x$ nur einen bestimmten *Wert* für ein Gleichgewicht haben kann, nämlich $6\,$kg.





$$
\begin{align*}
  8	 &= 8  \qquad \left|   - 2   \right. \\
 6 &= 6  \qquad \left|   \cdot \, 3   \right. \\
 18 &= 18  \qquad \left|   : 2   \right. \\
 9 &= 9   \\
  \end{align*}
$$
 

{{|>}} Die *Gleichung* zeigt, wie im ersten Schritt auf beiden Seiten des *Äquivalenzzeichen* die Zwei *subtrahiert* wurde. Im zweiten Schritt werden beide Seiten mit drei *multipliziert* und im dritten Schritt durch Zwei *dividiert*. In diesen beiden Beispielen sind die vier Grundrechenarten gezeigt, was nicht bedeutet, dass andere *Rechenoperationen* ausgeschlossen sind.\


{{|>}} *Äquivalenzumformungen* dienen dazu um *Gleichung* umzustellen und so *Werte* von unbekannten *Parametern* beziehungsweise *Variablen* zu bestimmen. *Parameter* sind Platzhalter für *Zahlen* und werden in der Regel mit Buchstaben am Anfang des Alphabets beschrieben. Wenn keine genaue Beschreibung für die *Parameter* angegeben sind, gilt $a,b,... \in \mathbb{R}$. 


{{|>}} Dies kann gut durch Streichholzschachteln symbolisiert werden. Dabei befinden sich in jeder Streichholzschachtel mit der Aufschrift $x$ stets die gleiche aber unbekannte Anzahl von Streichhölzern. 

<center>

<!-- style="width:350px" -->
![](Kap2/streichholz0a.png)

</center>

{{|>}} Um herauszufinden, wie viele Streichhölzer sich jeweils in den Schachtel befinden ohne die Schachtel dabei zu öffnen, muss auf beiden Seiten des *Äquivalenzzeichen* exakt die gleiche Aktion durchgeführt werden. Im ersten Schritt wird auf beiden Seiten ein Streichholz weggenommen.

<center>

<!-- style="width:350px" -->
![](Kap2/streichholz0b.png)

</center>

{{|>}} Im zweiten Schritt wird bei beiden Seiten des *Äquivalenzzeichen* eine Schachtel entfernt.

<center>

<!-- style="width:350px" -->
![](Kap2/streichholz0c.png)

</center>

Aus der letzten *Gleichung* wird deutlich, dass sich in jeder Schachtel mit der Aufschrift $x$ genau drei Streichhölzer sind.



Im folgenden Beispiel soll nach $x$ aufgelöst werden.

$$
\begin{align*}
0 & = \frac{a}{d} \cdot x + b - c  \qquad \left| + c \right. \\
c & = \frac{a}{d} \cdot x    \qquad \left| -b \right. \\
c - b & = \frac{a}{d} \cdot x    \qquad \left| \cdot d \right. \\
d \cdot \left(c - b\right) & = a \cdot x    \qquad \left| : a \right. \\
\frac{d \cdot \left(c - b\right)}{a} & =  x     \\
  \end{align*}
$$

{{|>}} Jede *Rechenoperation*, die die Richtigkeit der *Gleichung* nicht verändert ist zulässig! Die *Addition* der $0$ und die *Multiplikation* der $1$ sind solche *Operationen*. Dabei ist $0$ das so genannte *neutrale Element* der *Addition* und $1$ das *neutrale Element* der *Multiplikation*.



$$
\begin{align*}
\frac{1}{2}  = \frac{1}{2} \cdot 1 = \frac{1}{2} \cdot \frac{4}{4} = \frac{4}{8} \qquad  &\text{Multiplikation der $1$} \\
4 = 4 + 0 = 4+6-6 = 10 - 6 \qquad  & \text{Addition der $0$} \\
  \end{align*}
$$

{{|>}} Die Beispiele aus *Gleichung* zeigen, dass die *Multiplikation* des *neutralen Elements* mit dem *Erweitern* von *Brüchen* unmittelbar in Verbindung steht.  


{{|>}} Um *Lösungen* der *Äquivalenzumformung* zu überprüfen, kann bei der *Probe* die berechnete *Lösung* in die Ausgangsgleichung eingesetzt werden. Wenn die *Gleichung* rechnerisch gezeigt werden kann, ist der ermittelte *Variablenwert* beziehungsweise *Parameterwert* eine richtige *Lösung*.

Beispiel:
 


$$
\begin{align*}
3x-2&=5x+4 \quad \left| +2  \right. \\
3x&=5x+6 \quad \left| -5x  \right. \\
-2x&=6 \quad \left| :(-2)  \right. \\
x&=-3 \\
\Rightarrow \; 3\cdot(-3)-2&=5\cdot(-3)+4\\
-9-2&=-15+4\\
-11&=-11\\
  \end{align*}
$$


{{|>}}  Bei *Rechenoperationen*, die die *Definitionsmenge* der *Gleichung* verändert, kann nicht mehr von direkter *Äquivalenzumformung* gesprochen werden. Aus diesem Grund kann keine *Äquivalenzumformung* angekündigt werden und es sollte die *Definitionsmengenveränderung* durch einen "Daraus folgt"-Pfeil $\Rightarrow$ angedeutet werden. Dazu ein Beispiel:

$$
\begin{align*}
(2x)^2 & = 4a-5 \\
\Rightarrow\;\; 2x_{1,2} & = \pm \sqrt{4a-5} \quad \left| :2  \right.  \\
x_{1,2} & = \pm \dfrac{\sqrt{4a-5}}{2}  
  \end{align*}
$$

{{|>}} In dem gezeigten Beispiel wäre ein *Ankündigungsstrich* mit einer angedeuteten *Wurzel* nicht korrekt, da die *Definitionsmenge* halbiert wird. Aus diesem Grund wurde dies auch nicht im ersten Schritt niedergeschrieben.










********************************