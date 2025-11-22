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


tags: Erklärung, Verhältnisse

comment: In diesem Abschnitt werden Verhältnisse ausführlich erklärt.

author: Martin Lommatzsch

-->

# Verhältnisse




{{|>}}
***************************


Ein *Verhältnis* lässt sich durch einen *Bruch* oder einer *Division* darstellen. *Verhältnisse* werden benutzt, um *Vergrößerungen* oder *Verkleinerungen* zu verdeutlichen.



$$
\begin{align*}
\frac{1}{4}	 =								1 &: 4 \qquad \text{Verkleinerung} \\
\frac{4}{1}  =   							4 &: 1 \qquad \text{Vergrößerung} \\
\end{align*}
$$



{{|>}} Diese Form von *Verhältnissen* wird bei Karten "*Maßstab*" genannt. Dabei ist die erste Zahl immer die Darstellung auf der Karte, während die zweite Zahl die dazugehörige *Strecke* in der Natur widerspiegelt. So wäre bei einem *Maßstab* von $1:1000$ ein gemessener Meter auf der Karte in der Natur $1000\,$m. 
*Verhältnisse* werden auch in vielen anderen Bereichen, wie der Chemie und beim Kochen, verwendet. Dabei werden *Verhältnisgleichungen* benötigt:


$$
\begin{align*}
\frac{4}{500\,\text{g}}	 =	\frac{3}{x}		\;\;,					 \\ 
\end{align*}
$$



{{|>}} wobei das Beispiel so interpretiert werden kann, dass für vier Personen $500\,$g benötigt werden und nun die Menge für drei Personen bestimmt werden soll, dabei gilt das *Verhältnis* $\dfrac{4}{500\,\text{g}} = 1 : 125\,$g (pro Person $125\,$g), sodass die $125\,$g nur mit der Anzahl der Personen *multipliziert* werden muss (wie es durch *Äquivalenzumformung* ebenso bestimmt wird). 


{{|>}} Des Weiteren kann ein *Verhältnis* benutzt werden, um zum Beispiel zu verdeutlichen, dass auf jedes Sauerstoffmolekül $O_2$ eine gewisse *Anzahl* $\#$ von Stickstoffmolekülen $N_2$ kommen, wenn Luft aus unserer Atmosphäre betrachtet wird:


$$
\begin{align*}
\frac{\#(O_2)}{21\%}	 =	\frac{\#(N_2)}{78\%}	\;\Rightarrow\; \frac{78\% \#(O_2)}{21\%} = \#(N_2)  	\;\Rightarrow\; 3,714  \#(O_2)  \approx \#(N_2) 	\;\Rightarrow\;  3,714 : 1   \;\;,					 \\ 
\end{align*}
$$



{{|>}} wobei die Information, welche Zahl zu welcher *Größe* gehört, angegeben werden sollte.

{{|>}} Generell lässt sich festhalten, dass *Verhältnisgleichungen* eine *Gleichheit* von *Quotienten* beschreiben und die allgemeine Form $\dfrac{a}{b} = \dfrac{c}{d}$ besitzen. *Verhältnisse* werden oftmals bei *Streckungen* und *Ähnlichkeiten*  sowie bei der *Berechnung* von *Strahlensatz*- und *Trigonometrieaufgaben* vorkommen.



***************************
