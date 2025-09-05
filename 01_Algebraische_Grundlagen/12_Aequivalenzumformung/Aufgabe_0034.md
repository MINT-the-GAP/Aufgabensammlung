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




tags: Äquivalenzumformung, Sachaufgabe, niedrig, leicht, Berechnen, 

comment: Löse eine Sachaufgabe mit Bezahlmodellen mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Stickeralbum



Zwei Schüler sammeln Sticker für ein Album. Die betrachtete Schülerin startet mit sechs Stickern. Jeden Tag fügt sie drei weitere Sticker hinzu. Der betrachtete Schüler beginnt mit 18 Stickern, bekommt aber pro Tag nur ein weiteren Sticker. **Berechne**, nach wie vielen Tagen beide gleich viele Sticker haben.

<!-- data-solution-button="5"-->
$x$ = [[  6  ]]
@Algebrite.check(6)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
3x + 6 \;\stackrel{!}{=}\; x + 18
$$

$$
\begin{align*}
3x + 6 &= x + 18 \quad \left|\, -x \right.\\[2pt]
2x + 6 &= 18 \quad \left|\, -6 \right.\\[2pt]
2x &= 12 \quad \left|\, :2 \right.\\[2pt]
x &= 6
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{3\cdot 6 + 6}_{\text{Schülerin}} = 24  \\
&\quad\text{und}\quad  \\
&\underbrace{1\cdot 6 + 18}_{\text{Schüler}} = 24
\end{align*}
$$

Deutung:
Nach 6 Tagen haben beide gleich viele Sticker. Für $x<6$ hat der Schüler mehr; für $x>6$ hat die Schülerin mehr.
************