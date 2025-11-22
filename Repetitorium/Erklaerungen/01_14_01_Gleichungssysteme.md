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


tags: Erklärung, Gleichungssysteme

comment: In diesem Abschnitt wird das Lösen von Gleichungssysteme ausführlich erklärt.

author: Martin Lommatzsch

-->

# Gleichungssysteme


{{|>}}
********************************



Nicht jede *Gleichung* besitzt nur eine *Unbekannte*, sondern oftmals mehrere. Mit der richtigen Anzahl von *Randbedingungen* an diese *Gleichung* können alle *Unbekannten* mittels eines *Gleichungssystem* bestimmt werden. Sei ein allgemeines *Gleichungssystem* mit zwei Unbekannten als Beispiel gegeben:

$$
\begin{align*}
I.& \qquad 4x - y = 18 \\  
II.& \qquad x + 3y = 11  
\end{align*}
$$  


{{|>}} Das *Gleichungssystem* besteht dabei aus zwei *Gleichungen* mit ihren Bezeichnung ($I.$ oder $II.$) vor sich hertragen, welche zur besseren Übersicht dienen. 
Nun kann durch die *Äquivalenzumformung* eine der *Gleichungen* umgestellt werden und dann mittels verschiedener Verfahren das *Gleichungssystem* gelöst werden:

{{|>}} • Das *Gleichsetzungsverfahren*: Beim *Gleichsetzungsverfahren* werden die beiden *Gleichungen* (oder auch mehrere) nach der gleichen *Unbekannten* aufgelöst und dann mit einander gleichgesetz. Dieses Verfahren wird hier beispielhaft gezeigt:

$$
\begin{align*}
I. &\qquad 4x - y = 18 \quad \left| -4x \right. \\
&\qquad -y = 18 - 4x \quad \left| \cdot (-1) \right. \\
&\qquad y = \textcolor{red}{4x - 18} \\[6pt]
II. &\qquad x + 3y = 11 \quad \left| -x \right. \\
&\qquad 3y = 11 - x \quad \left| :3 \right. \\
&\qquad y = \textcolor{blue}{ \dfrac{11 - x}{3} } \\[6pt]
I. \cap II. &\qquad \textcolor{red}{4x - 18} = \textcolor{blue}{ \dfrac{11 - x}{3} } \\
&\qquad 3(4x - 18) = 11 - x \\
&\qquad 12x - 54 = 11 - x \quad \left| +x \right. \\
&\qquad 13x - 54 = 11 \quad \left| +54 \right. \\
&\qquad 13x = 65 \quad \left| :13 \right. \\
&\qquad x = 5 \\[6pt]
x \cap I. &\qquad 4\cdot 5 - y = 18 \\
&\qquad 20 - y = 18 \quad \left| -20 \right. \\
&\qquad -y = -2 \quad \left| \cdot (-1) \right. \\
&\qquad y = 2 \;\; ,
\end{align*}
$$

{{|>}} wobei $I. \cap II.$ verdeutlicht, dass $I.$ in $II.$ eingesetzt wurde. Das *Gleichsetzungsverfahren* kommt vor allem bei der Berechnung von *Schnittpunkten* oder *Schnittstellen* zur Anwendung.


{{|>}} • Das *Additionsverfahren*: Beim *Additionsverfahren* werden die beiden *Gleichungen* (oder auch mehrere) so *multipliziert*, dass bei der *Addition* oder *Subtraktion* dieser beiden *Gleichungen* voneinander eine *Unbekannte* eliminiert wird. Dieses Verfahren wird hier beispielhaft gezeigt:

$$
\begin{align*}
I.& \qquad \textcolor{blue}{4x - y = 18} \\  
II.& \qquad x + 3y = 11 \quad \left| \cdot 4 \right. \\
II.\cdot 4 &\qquad \textcolor{red}{4x + 12y = 44} \\ \hline
(II.\cdot 4) - I.\, &\qquad (\textcolor{red}{4x} - \textcolor{blue}{4x}) + (\textcolor{red}{12y} - \textcolor{blue}{(-y)}) = \textcolor{red}{44} - \textcolor{blue}{18} \\
&\qquad 13y = 26 \quad \left| :13 \right. \\
&\qquad y = 2 \\[6pt]
y \cap II. &\qquad x + 3\cdot 2 = 11 \\
&\qquad x + 6 = 11 \quad \left| -6 \right. \\
&\qquad x = 5
\end{align*}
$$

{{|>}} Das Additionsverfahren kommt vor allem bei linearen Gleichungssystem zur Anwendung. So wird es zum Beispiel bei dem Gauß-Jordan-Verfahren verwendet. 



{{|>}} • Das *Einsetzungsverfahren*: Beim *Einsetzungsverfahren* wird eine *Gleichung* nach einer *Unbekannten* aufgelöst und dieser Ausdruck dann in die anderen *Gleichungen* eingesetzt. Dieses Verfahren wird hier beispielhaft gezeigt:

$$
\begin{align*}
I.& \qquad 4x - y = 18 \quad \left| -4x \right. \\
&\qquad -y = 18 - 4x \quad \left| \cdot(-1) \right. \\
&\qquad y = \textcolor{red}{4x - 18} \\ \hline
I. \cap II. &\qquad x + 3(\textcolor{red}{4x - 18}) = 11 \\
&\qquad x + 12x - 54 = 11 \\
&\qquad 13x - 54 = 11 \quad \left| +54 \right. \\
&\qquad 13x = 65 \quad \left| :13 \right. \\
&\qquad x = 5 \\[6pt]
x \cap I. &\qquad 4\cdot 5 - y = 18 \\
&\qquad 20 - y = 18 \quad \left| -20 \right. \\
&\qquad -y = -2 \quad \left| \cdot(-1) \right. \\
&\qquad y = 2
\end{align*}
$$


{{|>}} Das *Einsetzungsverfahren* funktioniert bei jedem *Gleichungssystem* auch bei *nichtlinearen* *Gleichungen*, kann allerdings auch längere und komplexere *Terme* nach sich ziehen.


{{|>}} Alle Verfahren funktionieren auch bei mehr als zwei *Gleichungen* und zwei *Unbekannten* und können auch innerhalb einer Rechnung varriert werden. Dabei sollte immer beachtet werden, dass die Anzahl der *Gleichungen* mit der Anzahl der *Unbekannten* übereinstimmt, da das *Gleichungssystem* ansonsten *unterbestimmt* (zu wenige Informationen) oder *überbestimmt* (zu viele Informationen) ist. Letzteres ermöglicht es dem Rechnenden sich auf die trivialeren Informationen zu beschränken. 





********************************

