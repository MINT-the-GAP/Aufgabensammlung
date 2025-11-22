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


tags: Erklärung, Ungleichungen

comment: In diesem Abschnitt wird das Lösen von Ungleichungen ausführlich erklärt.

author: Martin Lommatzsch

-->

# Ungleichungen




{{|>}}
********************************


*Ungleichungen* beschreiben meistens Sachverhalte, bei denen vor allem die Grenzen entscheidend sind. So gibt es insgesamt vier Bedingungen:



$$
\begin{align*}
x & > y  \qquad \text{$x$ größer als $y$} \;\; , \\
x & \geq  y  \qquad \text{$x$ größer gleich $y$} \;\; , \\
x & \leq  y  \qquad \text{$x$ kleiner gleich $y$} \;\; , \\
x & < y  \qquad \text{$x$ kleiner als $y$} \;\; . \\
\end{align*}
$$

{{|>}} Im Umgang mit *Ungleichungen* gelten nahe zu die gleichen Regeln wie bei *Gleichungen*, so muss bei der *Äquivalenzumformung* lediglich beim Vorzeichenwechsel auch die Richtung der Bedingung umgedreht werden, da die Aussage ansonsten falsch werden würde:


$$
\begin{align*}
x & > a  \qquad  \left|  \cdot (-1) \right. \\
\Rightarrow -x & < -a  \qquad    \\ 
\end{align*}
$$



{{|>}} Dies kann erkannt werden, wenn die *Multiplikation* $\cdot(-1)$ durch mehrere Schritte der Strichrechnung ersetzt:


$$
\begin{align*}
x & > a  \qquad  \left|  -x \right. \\
0 & > a-x  \qquad  \left|  -a \right. \\
-a & > -x  \qquad  \text{mit: Drehe die Ungleichung um.} \\
\Rightarrow -x & < -a  \qquad   \;\; ,  \\ 
\end{align*}
$$

{{|>}} wobei bei dieser Veranschaulichung die Gleichheit der Ausdrücke $x>a$ und $a<x$. 


{{|>}} Da die Lösung bei *Ungleichungen* nicht eine einzige Zahl, sondern ein *Zahlenintervall* ist, muss dieses *Intervall* angegeben werden. Dabei kann dies als *Lösungsmenge* wie folgt dargestellt werden:


$$
\begin{align*}
x &\geq 2 \\
\Rightarrow \mathbb{L} & = \left\{  x \in \mathbb{R}   \left|  x \geq 2   \right.  \right\} \\
\end{align*}
$$

{{|>}} Die Darstellung der Lösung als *Intervall* kann im Abschnitt "Intervalle" nachgeschlagen werden.


********************************
