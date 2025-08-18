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


tags: Erklärung, Negative Zahlen

comment: In diesem Abschnitt wird die Negative Zahlen ausführlich erklärt.

author: Martin Lommatzsch

-->

# Negative Zahlen





{{|>}} Die *negativen Zahlen* erweitern die *Zahlenmenge* der *natürlichen Zahlen* $\mathbb{N}$ \footnote{$\mathbb{N}=\left\{0,1,2,3,4,...\right\}$} zu den *ganzen Zahlen* $\mathbb{Z} = \left\{-2 , -1 , 0 , 1 , 2\right\}$, indem die *Subtraktion* mit der *Addition* vereinheitlicht wird. Dabei gehört der *Subtraktionsoperator* nun als *Vorzeichen* zu der Zahl dazu.




$$
\begin{align*}
2 - 1 = 2 + (-1) = -1+2 \\
  \end{align*}
$$

{{|>}} Wie die *Gleichung* zeigt, bleibt das *Vorzeichen* immer bei der jeweiligen Zahl. Dabei gilt, dass das positive *Vorzeichen* $+$ nicht oftmals nicht mitgeschrieben wird. Wichtig ist dabei, dass Zahlen mit negativem *Vorzeichen* immer in *Klammern* gesetzt werden, sodass niemals zwei *Grundrechenoperatoren* direkt hinter einander stehen. Als Folge dieser Schreibweise verschwindet die *Subtraktion* nahezu vollständig, da *Parameter* auch negative *Werte* annehmen kann.


$$
\begin{align*}
a - b = a + (-b) = - b + a \\
  \end{align*}
$$

{{|>}} Die *Gleichung* kann neu formuliert werden, indem der *Parameter* $b$ mit dem *Vorzeichen* neudefiniert wird: $-b := c$, sodass folgende *Gleichung* daraus entsteht:



$$
\begin{align*}
a - b = a + (-b) = a + c = c + a \quad . \\
  \end{align*}
$$





{{|>}} Aber nicht nur bei der *Addition* sondern auch bei der *Multiplikation* spielt das *Vorzeichen* eine besondere Rolle. Bei der *Multiplikation* wird deutlich wie das *Vorzeichen* im Detail mathematisch zu verstehen ist:




$$
\begin{align*}
-3 \cdot 2 = 2 \cdot (-3) = 2 \cdot (-1) \cdot 3 \quad . \\
  \end{align*}
$$


{{|>}} Wie die *Gleichung* zeigt, ist das *Vorzeichen* durch die *Multiplikation* der Zahl $-1$. Folglich wurde die *Zahlenmenge* der *natürlichen Zahlen* lediglich um eine Zahl, der $-1$, zu den *ganzen Zahlen* $\mathbb{Z}$ erweitert. Dabei dreht die *Multiplikation* der $-1$ das *Vorzeichen* der Zahl um, sodass die doppelte *Multiplikation* das *Vorzeichen* erhält. Somit ergibt sich die umgangssprachliche Regel: "`Minus mal Minus ergibt Plus!"'.



$$
\begin{align*}
(-1) \cdot (-1) = 1  \\
  \end{align*}
$$

{{|>}} Diese Regel kann durch mehrere Konzepte motiviert werden:


- durch das *Permanenzprinzip*:


$$
\begin{align*}
(-1) \cdot (2) &= -2  \\
(-1) \cdot (1) &= -1  \\
(-1) \cdot (0) &= 0  \\
(-1) \cdot (-1) &= 1  \\
(-1) \cdot (-2) &= 2  \\
  \end{align*}
$$

- über das *Distributivgesetz*:

$$
\begin{align*}
0 &= -2 \cdot 0  \\ 
0 &= -2 \cdot  \left(3 + (-3) \right)  \\ 
0 &= -2 \cdot  3 + (-2) \cdot   (-3)   \\ 
0 &= -6 + 6    \\ 
  \end{align*}
$$

- über die *Bruchrechnung*:

$$
\begin{align*}
(-4) \cdot \left(- \frac{3}{5}\right) &= (-4) \cdot \left(\frac{3}{-5}\right)   \\ 
  &=  \left(\frac{-4}{1}\right)  \cdot \left(\frac{3}{-5}\right)   \\ 
  &=  \frac{\cancel{-}12}{\cancel{-}5}   \\ 
  &=  \frac{ 12}{ 5}   \\ 
  \end{align*}
$$



{{|>}} Oftmals bereitet das Einsetzen von *negativen Zahlen* in *Gleichungen* mit höheren *Potenzen* Probleme. Aus diesem Grund wird hier explizit darauf hingewiesen, dass das negative *Vorzeichen* einer Zahl als die *Multiplikation* mit $(-1)$ verstanden werden kann. Somit muss beim Einsetzen in eine *Gleichung* die gesamte Zahl eingeklammert werden, da es ansonsten den *Wert des Terms* verändern würde.

$$
\begin{align*}
-a^2 = (-1) \cdot a^2 \neq (-a)^2 = (-1)^2 \cdot a^2 = a^2
  \end{align*}
$$


{{|>}}  Die Bedeutung der Einführung der *negativen Zahlen* wird im nächsten Abschnitt durch die Besprechung des *Kommutativ*- und *Assoziativgesetzes* detaillierter ausgeführt.







!?[Negative Zahlen](https://www.youtube.com/watch?v=Yt03b6sbMLM)




