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


tags: Erklärung, Quadratische Ergänzung

comment: In diesem Abschnitt wird die Quadratische Ergänzung ausführlich erklärt.

author: Martin Lommatzsch

-->

#  Quadratische Ergänzung



{{|>}}
*********************

Das Ziel bei einer *quadratischen Ergänzung* ist es, eine Gleichung so umzuformen, dass man die *binomischen Formeln* ausnutzen kann um die *Potenz* der *Variable* zu reduzieren. Als erklärendes Beispiel soll diese allgemeine *Gleichung*, welche auch allgemeines *Polynom* zweiter *Ordnung* oder *quadratische Gleichung* genannt wird, dienen (Auf die Eigenschaften von *Polynome* und explizit *quadratische Termen* wird im Kapitel "*Funktionen*" genauer eingegangen.):


$$
\begin{align*}
& a x^2 + b x + c = 0    \\
\end{align*}
$$
 

{{|>}} Diese Form erinnert an die so genannte erste *binomische Formel* $(x+d)^2 = x^2 + 2dx + d^2$. Aus diesem Grund wird der *Vorfaktor* (*Koeffizient*) $a$ des *quadratischen Terms* $a x^2$ über *Äquivalenzumformung* entfernt.


$$
\begin{align*}
& a x^2 + b x + c = 0  \qquad \left| : a \right.\\
&  x^2 + \frac{b}{a} x + \frac{c}{a} = 0  \\
\end{align*}
$$
 


{{|>}} Durch direktes gegenüberstellen der *Terme* können bestimmte Bedingungen an die *Vorfaktoren* geknüpft werden, sodass die künstliche Generierung einer *Binomischen Formel* möglich wird, dies wird *Koeffizientenvergleich* genannt. Generell wird der *Koeffizientenvergleich* immer angewendet, wenn eine *Gleichheit* von *Vorfaktoren* zu einer erheblichen Vereinfachung eines Problems dienen könnte.


$$
\begin{align*}
&  x^2 + \textcolor{red}{\frac{b}{a}} x + \frac{c}{a} = 0  \\
&  x^2 + \textcolor{red}{2 d} x + d^2 = 0  \\
\end{align*}
$$
 

{{|>}} Durch den *Koeffizientenvergleich* der rot markierten *Vorfaktoren*, kann folgende Bedingung aufgestellt werden: $\frac{b}{a}  = 2d$ und so der *Parameter* $d$  als $\frac{b}{2a}$ bestimmt werden. Da die zu lösende *Gleichung* noch kein $d^2$ beherbergt, muss dieses durch eine *Addition* hinzugefügt werden. Anschließend werden alle *Terme* die nicht zu einer *Binomischen Formel* gehören auf die andere Seite des *Gleichheitszeichens* gebracht: 


$$
\begin{align*}
&  x^2 + \frac{b}{a} x + \frac{c}{a} = 0  \qquad \left| + \left(\frac{b}{2a}\right)^2 \right.\\
&  x^2 + \frac{b}{a} x + \left(\frac{b}{2a}\right)^2 + \frac{c}{a} =  \left(\frac{b}{2a}\right)^2  \qquad \left| -  \frac{c}{a} \right.\\
&  x^2 + \frac{b}{a} x + \left(\frac{b}{2a}\right)^2  =  \left(\frac{b}{2a}\right)^2  -  \frac{c}{a}  \\
\end{align*}
$$


{{|>}} Nach genauerer Betrachtung ist festzustellen, dass auf der linken Seite des *Gleichheitszeichen* die *erste binomische Formel* vorzufinden ist. Nach der Ersetzung fällt auf, dass die *quadratische Potenz* und die *lineare Potenz* in der *Variablen* $x$ verschmolzen sind. Um nun nach der *Variable* restlos aufzulösen, muss auf beiden Seiten des *Gleichheitszeichens* die *Wurzel* gezogen werden, da dies die *Umkehrfunktion* zum *Quadrieren* ist. Dabei ist zu beachten, dass es eine negative und eine positive *Lösung* gibt, da zum Beispiel $2^2 = (-2)^2$ ist.
 



$$
\begin{align*}
&  \underbrace{x^2 + \frac{b}{a} x + \left(\frac{b}{2a}\right)^2}_{= \left(x+\frac{b}{2a}\right)^2}  =  \left(\frac{b}{2a}\right)^2  -  \frac{c}{a}  \\
&  \left(x+\frac{b}{2a}\right)^2  =  \left(\frac{b}{2a}\right)^2  -  \frac{c}{a} \qquad  \\ 
&  x_{1,2}+\frac{b}{2a}  = \pm \sqrt{\left(\frac{b}{2a}\right)^2  -  \frac{c}{a}} \qquad \left|  -\frac{b}{2a} \right.\\ 
&  x_{1,2}  = - \frac{b}{2a} \pm \sqrt{\left(\frac{b}{2a}\right)^2  -  \frac{c}{a}} \\ 
\end{align*}
$$
 

{{|>}} Nach einer Umbenennung der *Parameter* $p=\frac{b}{a}$ und $q=\frac{c}{a}$ erkennt man, dass die so genannte *p-q-Formel* hergeleitet wurde, welche sich lediglich durch die Umbenennung der *Parameter* von der sogenannten *Mitternachtsformel* aus der vorherigen *Gleichung* unterscheidet: 


$$
\begin{align*}
& x^2 + p x + q =0 \\ 
& \Rightarrow x_{1,2}  = - \frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^2  - q} \\ 
\end{align*}
$$


{{|>}} Um Zeit in bestimmten Klausur- oder Unterrichtssituationen zu sparen, empfiehlt es sich die *p-q-Formel* zu verwenden, dennoch sollte von ihrer Benutzung abgeraten werden, denn in der höheren Mathematik (siehe Kapitel "*Differentiation* und *Integration*") sind viele Aufgaben nur noch mittels der *quadratischen Ergänzung* effektiv zu lösen. 

{{|>}} Die Zahl unten rechts von zum Beispiel $x_1$ wird *Index* genannt. Ein *Index* hat keine genauere mathematische Bedeutung, allerdings kann darüber eine zusätzliche Information mitgegeben werden. So bedeutet $x_{1,2}$, dass zwei spezielle *Werte* für $x$ vorliegen, die die *Gleichung* lösen würden. Oftmals wird auch $x_0$ vorgefunden und steht für einen speziellen *konstanten* *Wert*. Folglich gibt der *Index* nur genauer an, welche Bedeutung genau dieser *Wert* der *Variable* oder des *Parameters* besitzt.


{{|>}} Wenn bei einer *Gleichung* in offensichtliches *Produkt* mit einer *quadratischen Gleichung* vorliegt, lohnt es sich *auszuklammern*



$$
\begin{align*}
& a x^3 + b x^2 + c x = 0 \\
\Rightarrow & x \cdot \left( a x^2 + b x + c  \right) = 0  \;\; , \\
\end{align*}
$$
 

{{|>}} sodass das die *Faktoren* des *Produkts* separiert betrachtet werden können, denn es gilt nach wie vor der *Satz des Nullprodukts*: Wenn einer der *Faktoren* gleich Null ist, dann ist das gesamte *Produkt* gleich Null.


$$
\begin{align*}
& \underbrace{x}_{\stackrel{!}{=} 0} \cdot \underbrace{\left( a x^2 + b x + c  \right)}_{\stackrel{!}{=} 0} = 0 \Rightarrow x_1=0 \\ 
\Rightarrow &  a x^2 + b x + c    = 0 \\ 
\end{align*}
$$
 



{{|>}} Ab diesem Zeitpunkt kann die restliche *Gleichung* mit der *quadratischen Ergänzung* gelöst werden. Das *Ausklammerungsverfahren* funktioniert nicht nur bei höheren *Polynomen*, sondern immer, wenn aus allen Bestandteilen der *Gleichung* *ausgeklammert* werden kann. So ist es möglich bei einigen *Gleichungen* die *Lösungen* direkt abzulesen. 


$$
\begin{align*}
& x^2 - 6 x = x (x - 6) \Rightarrow x_1 = 0 \wedge x_2 = 6 \\
\end{align*}
$$
 

{{|>}} Aus diesem Grund lohnt es sich nicht immer *Klammern* aus zu *multiplizieren*. 



{{|>}} Bei jeder Rechnung ist es dem Rechnenden freigestellt Abkürzungen einzuführen. Dieser Prozess wird *Substitution* genannt. Im folgenden Beispiel wird die *Summe* innerhalb der *Klammer* *substituiert*: 



$$
\begin{align*}
&\left( x + a \right)^2 \qquad \text{mit: } y := x+a \\
&=y^2 \\
\end{align*}
$$



{{|>}} Dabei ist es wichtig zu beachten, dass bei der *Substitution* ersetzten *Variablen* vollständig eliminiert werden.


$$
\begin{align*}
&\left( x + a \right)^2 \cdot x \qquad \text{mit: } y := x+a \; \Rightarrow \; x = y-a \\
&=y^2 \cdot (y-a) = y^3 - a\cdot y^2 \\
\end{align*}
$$



{{|>}} Jede *Substitution* ist zulässig. Wichtig wird dieser Prozess besonders wenn komplexere Aufgaben dadurch wesentlich vereinfacht werden können. Aus diesem Grund wird im Kapitel "*Differentiation* und *Integration*" nochmal besonders auf die *Substitution* eingegangen.





Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt: \

!?[Quadratische Ergänzung](https://www.youtube.com/watch?v=8QRKPmR82jQ)



*********************