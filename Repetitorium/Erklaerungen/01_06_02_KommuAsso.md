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


tags: Erklärung, Kommutativgesetz, Assoziativgesetz

comment: In diesem Abschnitt werden das Kommutativgesetz und das Assoziativgesetz ausführlich erklärt.

author: Martin Lommatzsch

-->


# Kommutativ- und Assoziativgesetz




{{|>}}
***************************


Das *Assoziativ*- und das *Kommutativgesetz* helfen beim Rechnen den Überblick selbst über sehr komplex wirkende Sachverhalte zu behalten und sollten deswegen bekannt sein. In diesem Abschnitt werden diese beiden Gesetz und ihre Auswirkungen auf die Mathematik besprochen. Auch wird nochmals motiviert, warum es lohnend sein kann mit *Brüchen* und *negativen Zahlen* zu arbeiten. 


<h2>Kommutator</h2>

{{|>}} Das *Kommutativgesetz* besagt, dass die Vertauschung von Zahlen, *Parametern* oder *Variablen* bei einer Rechenoperation keinen Einfluss auf den *Wert des Terms* hat. Zur Überprüfung des *Kommutativgesetzes* dient der *Kommutator*, welcher folgende definierte Rechenanweisung ist:



$$
\begin{align*}
\left[a,b\right] = a \cdot b - b \cdot a \\
\end{align*}
$$

{{|>}} Ist der *Kommutator* gleich Null, so gilt, dass $a\cdot b = b \cdot a$ ist. Wenn man nun Zahlen für die *Parameter* $a$ und $b$ einsetzt, so ist die Gültigkeit des *Kommutativgesetzes* intuitiv zu erkennen: 


$$
\begin{align*}
\left[2,3\right] = 2 \cdot 3 - 3 \cdot 2 = 6 -6 = 0 \\
\end{align*}
$$

{{|>}} Der allgemeine *Kommutator* ist für die *Multiplikation* definiert - wenn nun das *Kommutativgesetz* zum Beispiel für die *Addition* überprüft werden soll, wird am Komma des *Kommutator* gekennzeichnet welcher *Operator* untersucht wird. 



$$
\begin{align*}
\left[a,_+b\right] & = a + b - b + a  \\ 
\left[2,_+3\right] & = 2 + 3 - 3 + 2 = 5 -5 = 0  \\
\end{align*}
$$

{{|>}} Es wird deutlich, dass ohne die Einführung der *ganzen Zahlen* $\mathbb{Z}$ und der *Bruchrechnung* und somit die Verallgemeinerung von *Addition* mit *Subtraktion* sowie der *Multiplikation* mit der *Division*, dass *Kommutativgesetz* nicht für die *Subtraktion* und *Division* gelten würde. 



$$
\begin{align*}
\left[a,_-b\right] & = a - b - b - a \neq 0 \\ 
\left[2,_-3\right] & = 2 - 3 - 3 - 2 \neq 0 \\ 
\left[a,_:b\right] & = a : b - b : a \neq 0 \\ 
\left[2,_:3\right] & = 2 : 3 - 3 : 2 \neq 0 \\
\end{align*}
$$

{{|>}} Durch die Einführung *ganzen Zahlen* $\mathbb{Z}$ und der *Bruchrechnung* verändert sich die vorherigen *Gleichungen* zu:



$$
\begin{align*}
\left[a,_+-b\right] & = (a + (-b)) - (-b + a) = 0 \\ 
\left[3,_+-2\right] & = (3 + (- 2)) - (-2 + 3) = 1 - 1 = 0 \\ 
\left[a,\frac{1}{b}\right] & = a \cdot \frac{1}{b} - \frac{1}{b} \cdot a =  \frac{a}{b}- \frac{a}{b}  = 0 \\ 
\left[2,\frac{1}{3}\right] & = 2 \cdot \frac{1}{3}  - \frac{1}{3} \cdot 2 =  \frac{2}{3}- \frac{2}{3} = 0 \\
\end{align*}
$$


{{|>}} Die besondere Bedeutung und die Konsequenzen des *Kommutators* werden im Kapitel "*Differentiation* und *Integration*" weiter ausgeführt. Während die *Klammern* im nächsten Unterabschnitt genaustens erklärt werden



<h2>Assoziativgesetz</h2>

{{|>}} Das *Assoziativgesetz* besagt, dass die Reihenfolge bei einer Rechnung keine Relevanz besitzen darf. So macht es zum Beispiel keinen Unterschied bei der *Addition* oder *Multiplikation* von drei Zahlen, welche zuerst verrechnet werden.



$$
\begin{align*}
a + b + c & = (a+b)+c = a + (b+c) = b + (a + c) \\
a \cdot b \cdot c & = (a\cdot b)\cdot c = a \cdot (b\cdot c) = b \cdot (a \cdot c)  \\
\end{align*}
$$

{{|>}} Die Reihenfolge in den vorherigen *Gleichung* wird beschrieben durch die *Klammern*, welche angeben welche Rechnung zu erst vollzogen werden soll. Das jeweils letzte *Gleichheitszeichen* konnte nur durch die Vertauschung der geschriebenen Reihenfolge der *Parameter* $a,b$ und $c$, also dem *Kommutativgesetz*, geschrieben werden. Erneut zeigt sich, dass die Verallgemeinerung von *Addition* mit *Subtraktion* sowie *Multiplikation* mit *Division* seine Vorteile hat, denn die *Rechenoperatoren* der *Subtraktion* und der *Division* sind nicht *assoziativ*: 



$$
\begin{align*}
(a-b)-c & \neq a - (b-c)  \\
 (a : b): c &\neq a : (b: c)   \\
\end{align*}
$$

{{|>}} Allerdings gilt durch die Einführung der *ganzen Zahlen* $\mathbb{Z}$ und des *Bruchrechnens*, dass der *Subtraktionsoperator* umgeschrieben werden kann in $- = + (-1)$ sowie der *Divisionsoperator* mit nur seltenen Ausnahmen aus dem mathematischen Gebrauch verschwindet.




***************************


