<!--
version:  0.0.1
language: de


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


tags: Gleichungssysteme, mittel, sehr niedrig, Angeben

comment: Fülle den Lückentext passend zur präsentierten Lösung des Gleichungssystems aus.

author: Martin Lommatzsch

-->




# Lückentext zum Lösen von Gleichungssystemen

**Fülle** alle Lücken des Lückentextes **aus**, der die präsentierte Musterlösung zum gegebenen Gleichungssystem beschreibt.




<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ 
$$
\begin{align*}
I.& \qquad 3x - y = 13 \\  
II.& \qquad x + 4y = 13  \\ \hline
I. &\qquad 3x - y = 13 \quad \left| -3x \right. \\
&\qquad -y = 13 - 3x \quad \left| \cdot(-1) \right. \\
&\qquad y = 3x - 13 \\ \hline
I. \cap II. &\qquad x + 4(3x - 13) = 13 \\
&\qquad x + 12x - 52 = 13 \\
&\qquad 13x - 52 = 13 \quad \left| +52 \right. \\
&\qquad 13x = 65 \quad \left| :13 \right. \\
&\qquad x = 5 \\
x \cap I. &\qquad 3\cdot 5 - y = 13 \\
&\qquad 15 - y = 13 \quad \left| -15 \right. \\
&\qquad -y = -2 \quad \left| \cdot(-1) \right. \\
&\qquad y = 2
\end{align*}
$$

<!-- data-solution-button="5"-->
Um das [[   Gleichungssystem   ]] zu lösen, wird das [[    Einsetzungsverfahren    ]] angewendet.  
Zunächst wird eine der beiden [[   Gleichungen   ]] gewählt, hier die erste, und nach [[  y  ]] umgestellt.  
Aus $3x - y = 13$ folgt durch Umformen, dass $y = 3x - 13$. Diesen Ausdruck setzen wir in die zweite [[  Gleichung  ]] ein.  
Dadurch entsteht $x + 4(3x - 13) =$ [[  13  ]]. Nach dem [[  Ausmultiplizieren  ]] der Klammern ergibt sich $x + 12x - 52 = 13$, was sich zu $13x - 52 = 13$ zusammenfassen lässt. Wird $52$ auf beiden Seiten [[ addiert ]], so folgt $13x = 65$. Abschließend muss durch $13$ dividiert werden. Zum Schluss wird $x=5$ in die [[  erste  ]] Gleichung [[  eingesetzt ]], sodass $y = 2$ resultiert.  

</div>
<div class="flex-child">
__$b)\;\;$__ 
$$
\begin{align*}
I. &\qquad 3x + 2y = 17 \\
II. &\qquad 5x - y = 11 \\ \hline
II. &\qquad 5x - y = 11 \quad \left| \cdot 2 \right. \\
II.\cdot 2 &\qquad 10x - 2y = 22 \\
I. &\qquad 3x + 2y = 17 \\ \hline
I. + (II.\cdot 2)\, &\qquad (3x+10x) + (2y-2y) = 17 + 22 \\
&\qquad 13x = 39 \quad \left| :13 \right. \\
&\qquad x = 3 \\
x \cap II.\, &\qquad 5\cdot 3 - y = 11 \\
&\qquad 15 - y = 11 \quad \left| -15 \right. \\
&\qquad -y = -4 \quad \left| \cdot(-1) \right. \\
&\qquad y = 4
\end{align*}
$$

<!-- data-solution-button="5"-->
Um das [[   Gleichungssystem   ]] zu lösen, wird das [[   Additionsverfahren   ]] angewendet.
Dazu wird zunächst die [[   zweite   ]] Gleichung so umgeformt, dass die Variable $y$ in beiden Gleichungen mit entgegengesetzten [[ Vorzeichen ]] auftritt.
Deshalb wird  die zweite Gleichung mit [[  2  ]] multiplizieren und es ergibt sich $10x - 2y = 22$.
Nun können wir diese Gleichung mit der [[   ersten   ]] addieren. Dabei fällt die Variable [[  y  ]] weg und es bleibt $13x = 39$.
Wird nun durch [[   13   ]] geteilt, so ergibt sich $x = 3$.
Dieser Wert wird anschließend in die [[   zweite   ]] Gleichung eingesetzt: $5\cdot 3 - y = 11$.
Nach dem Umformen folgt $15 - y = 11$, und nach Subtraktion von [[ 15 ]] ergibt sich $-y = -4$.
Durch Multiplikation mit [[ -1 ]] ergibt sich schließlich $y = 4$.

</div>
<div class="flex-child">
__$c)\;\;$__ 
$$
\begin{align*}
I. &\qquad 4x - y = 13 \quad \left| -4x \right. \\
II.&\qquad x + 2y = 10 \quad \left| -x \right. \\ \hline
I. &\qquad -y = 13 - 4x \quad \left| \cdot(-1) \right. \\
I. &\qquad y = 4x - 13 \\
II.&\qquad 2y = 10 - x \quad \left| :2 \right. \\
II.&\qquad y = \dfrac{10 - x}{2} \\[4pt]
I. \cap II. &\qquad 4x - 13 = \dfrac{10 - x}{2} \\
&\qquad 2(4x - 13) = 10 - x \\
&\qquad 8x - 26 = 10 - x \quad \left| +x \right. \\
&\qquad 9x - 26 = 10 \quad \left| +26 \right. \\
&\qquad 9x = 36 \quad \left| :9 \right. \\
&\qquad x = 4 \\
x \cap I. &\qquad 4\cdot 4 - y = 13 \\
&\qquad 16 - y = 13 \quad \left| -16 \right. \\
&\qquad -y = -3 \quad \left| \cdot(-1) \right. \\
&\qquad y = 3
\end{align*}
$$


<!-- data-solution-button="5"-->
Zur Lösung des [[   Gleichungssystems   ]] wird das [[   Gleichsetzungsverfahren   ]] angewendet.
Zunächst wird die [[   erste   ]] Gleichung nach $y$ aufgelöst und es ergibt sich $y = 4x - 13$.
Anschließend wird die [[   zweite   ]] Gleichung ebenfalls nach $y$ umgeformt, sodass $y = \dfrac{10 - x}{2}$ resultiert.
Beide Terme für [[  y  ]] werden nun [[   gleichgesetzt   ]], wodurch $4x - 13 = \dfrac{10 - x}{2}$ entsteht.
Nach dem [[   Ausmultiplizieren   ]] folgt $8x - 26 = 10 - x$.
Durch [[  Addition  ]] von [[  x  ]] auf beiden Seiten ergibt sich $9x - 26 = 10$.
Nach Addition von [[  26  ]] resultiert $9x = 36$.
Durch [[  Division  ]] mit $9$ folgt $x = 4$.
Der Wert für $x$ wird schließlich in die [[  erste  ]] Gleichung [[  eingesetzt  ]], sodass $y = 3$ bestimmt wird.

</div>
</section>




