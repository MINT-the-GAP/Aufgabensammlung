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


import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md



tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit Förderbändern mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Förderbänder


Auf zwei Förderbändern liegen Kisten.  
Auf Band 1 liegen zu Beginn 18 Kisten, und pro Minute kommen 1,25 Kisten dazu.  
Auf Band 2 liegen zu Beginn 44 Kisten, und pro Minute werden 1,75 Kisten abtransportiert.  
**Berechne**, nach wie vielen Minuten auf beiden Bändern gleich viele Kisten liegen.


<!-- data-solution-button="5"-->
$x$ = [[  26/3  ]]
@Algebrite.check(26/3)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{5}{4}x + 18 \;\stackrel{!}{=}\; 44 - \dfrac{7}{4}x
$$

$$
\begin{align*}
\dfrac{5}{4}x + 18 &= 44 - \dfrac{7}{4}x \quad \left|\, +\dfrac{7}{4}x \right.\\[2pt]
\left(\dfrac{5}{4} + \dfrac{7}{4}\right)x + 18 &= 44 \quad \left|\, -18 \right.\\[2pt]
\dfrac{12}{4}x &= 26 \quad \left|\, :\dfrac{12}{4} \right.\\[2pt]
3x &= 26 \quad \left|\, :3 \right.\\[2pt]
x &= \dfrac{26}{3}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{5}{4}\cdot\dfrac{26}{3} + 18}_{\text{Band 1}}
= \dfrac{130}{12} + \dfrac{216}{12}
= \dfrac{346}{12}
= \dfrac{173}{6}   \\
&\quad\text{und}\quad   \\
&\underbrace{44 - \dfrac{7}{4}\cdot\dfrac{26}{3}}_{\text{Band 2}}
= \dfrac{264}{6} - \dfrac{91}{6}
= \dfrac{173}{6}
\end{align*}
$$


Deutung: Nach $\dfrac{26}{3}\approx 8{,}7$  Minuten liegen auf beiden Bändern gleich viele Kisten ($\dfrac{173}{6}\approx 28{,}8$ Kisten).

************
