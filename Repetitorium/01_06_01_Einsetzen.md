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


tags: Erklärung, Einsetzungsverfahren, Variable

comment: In diesem Abschnitt werden Variablen und wie man in diese einsetzt ausführlich erklärt.

author: Martin Lommatzsch

-->


# Variablen und Einsetzungsverfahren




{{|>}}
*********************




*Variablen* sind Platzhalter hinter denen sich jede mögliche Zahl verbergen kann. Jeder *Variable* gehört einer *Zahlenmenge* an und kann somit jede beliebige Zahl aus dieser *Menge* darstellen. Das bedeutet, dass Rechnungen mit *Variablen* für alle möglichen Zahlen} Gültigkeit besitzen. Eine *Variable* wird mit einem Buchstaben oder einem anderen beliebigen Symbol gekennzeichnet. Somit kann die Abkürzung der *Addition*, also die *Multiplikation*, wie folgt dargestellt:


$$
\begin{align*}
a + a = 2 \cdot a \;\; .
\end{align*}
$$

{{|>}} Die *Gleichung* für jede Zahl für $a$ Gültigkeit. Ebenso kann auch die *Subtraktion* einer Zahl von sich selbst mit *Variablen* dargestellt werden: 



$$
\begin{align*}
a - a = 0 \;\; .
\end{align*}
$$

{{|>}} Besitzt eine *Variable* einen Namen wie $a$, dann unterscheidet dieser sich von einer anderen *Variable* $b$. Beide *Variablen* können nicht zusammengefasst werden und auch ihr Name $a$ und $b$ wechseln. In bestimmten Fällen, kann es vorkommen, dass *Variablen* nach ihrer Bestimmung den gleichen Wert haben können. 

{{|>}} 
Beim Rechnen mit *Variablen* (oder später auch *Parameter*) ist es wichtig zu beachten, dass nur gleiche *Produkte* von *Variablen* zusammengefasst werden können. Dazu einige Beispiele:



$$
\begin{align*}
4a + 3a + 5b + 6b & = 7a + 11b \;\; , \\
4ab + 3a + 5ab + 6b & = 3a + 9ab +6b \;\; , \\
3aa + 5ab - aa + 2b - 3ab + 4b & = 2aa + 2ab + 6b \;\; . \\ 
\end{align*}
$$


{{|>}} Bei diesem Zusammenfassen von *Termen* müssen die vorgestellten Regeln beachtet werden. *Terme* sind dabei Teile von *Gleichungen* auf einer Seite eines *Äquivalenzzeichens*. 




{{|>}} Das *Einsetzungsverfahren* wird oftmals mit *Gleichungssystemen* in Verbindung gebracht, allerdings ist das dahinter liegende Prinzip von fundamentalerer Bedeutung für den Umgang mit mathematischem und naturwissenschaftlichem Wissen. Bei diesem Verfahren wird entweder für einen *Parameter*, einer *Variable* oder einen *Term*  eine Zahl oder einem weiterführender *Term* eingesetzt, sodass es generell zu einer Vereinfachung, einer Beispielrechnung oder der Reduzierung von unbekannten Größen kommt. Dabei ist ein *Parameter* ein Platzhalter für eine Zahl (oftmals werden $a,b,c,d$ als *Parameter* verwendet), während die *Variable* der Platzhalter für eine veränderliche Zahl (oftmals werden $x,y,z$ als *Variable* verwendet) ist und ein *Term* ein ganzer Abschnitt einer Rechenanweisung (zum Beispiel $5\cdot x \cdot a$ wäre ein *Term*).


{{|>}} Als Beispiel für das *Einsetzen* von Zahlen soll das *Erweitern* bei der *Bruchrechnung* dienen. Hierbei soll gelten, dass für $a$ der *Wert* $2$, für $b$ der *Wert* 3 und für den *Erweiterungsparameter* $n$ die Zahl $4$ eingesetzt werden soll.



$$
\begin{align*}
\frac{a}{b}  &= \frac{a  }{b  } \cdot 1 = \frac{a  }{b  }  \cdot \frac{n}{n} = \frac{a \cdot n}{ b  \cdot n} \quad \text{mit: } a=2\\
\Rightarrow \frac{2}{b}  &= \frac{2  }{b  } \cdot 1 = \frac{2  }{b  }  \cdot \frac{n}{n} = \frac{2 \cdot n}{ b  \cdot n} \quad \text{mit: } b=3\\
\Rightarrow \frac{2}{3}  &= \frac{2  }{3  } \cdot 1 = \frac{2  }{3  }  \cdot \frac{n}{n} = \frac{2 \cdot n}{ 3  \cdot n} \quad \text{mit: } n=4\\
\Rightarrow \frac{2}{3}  &= \frac{2  }{3  } \cdot 1 = \frac{2  }{3  }  \cdot \frac{4}{4} = \frac{2 \cdot 4}{ 3  \cdot 4} = \frac{8}{12} \\
\end{align*}
$$

{{|>}} Wie bereits oben schon erwähnt wurde, ist dieses Verfahren auch mit *Termen* möglich.


$$
\begin{align*}
a+b & = c \qquad \text{mit: } a = d-e+f \\
\Rightarrow d-e+f+b & = c \qquad \text{mit: } c = e-f-d \\
\Rightarrow d-e+f+b & = e-f-d   \\
\end{align*}
$$

{{|>}} Generell sollte beim *Einsetzen* von Ausdrücken der einzusetzende *Term* in *Klammern* geschrieben werden, da es sonst unter anderem zu *Vorzeichenfehler* oder Ähnlichem kommen kann. Hierzu einige Beispiele:



$$
\begin{align*}
a-b &  \qquad \text{mit: } b = d+e \;\; \Rightarrow \;\; \text{richtig:}\;  a-(d+e) = a - d - e  \;;\; \text{falsch:}\;a-d+e   \\ 
a^2 &  \qquad \text{mit: } a = -b \;\; \Rightarrow \;\; \text{richtig:}\;  (-b)^2 = b^2 \;;\; \text{falsch:}\;-b^2   \\ 
\end{align*}
$$

{{|>}} Folglich sollten alle *Einsetzungen* mit *Klammern* unternommen werden und nach dem *Einsetzen* auf die Notwendigkeit der *Klammern* geschaut werden. Hierdurch entsteht schnell ein Gefühl, wann die *Klammern* unabdingbar werden.




!?[Einsetzen](https://www.youtube.com/watch?v=oCzl1Sasf4M)

*********************


