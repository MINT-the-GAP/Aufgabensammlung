<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md











import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md




tags: Ungleichungen, Sachaufgabe, sehr leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe zu Beschaffungen für ein Schulfest mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Beschaffungen für ein Schulfest


Für ein Schulfest werden gleich viele Wasser- und Saftflaschen beschafft. Eine Wasserflasche kostet 2 €, eine Saftflasche 6 €.  
**Berechne** die kleinste natürliche Zahl $x$ (Flaschen je Sorte), sodass mindestens 40 € ausgegeben werden.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 5 ]] $\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
2x + 6x &\geq 40 \\
8x &\geq 40 \quad \left|\, :8 \right. \\
x &\geq 5
\end{align*}
$$
******************
