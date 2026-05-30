<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md











import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md




tags: Bruchrechnung, Sachaufgabe, leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit einem Vorratstank mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Vorratstank


Ein Vorratstank enthält zu Beginn $48\,\ell$ Wasser. Am Vormittag werden $\dfrac{3}{8}$ des Inhalts verwendet, am Nachmittag danach $\dfrac{1}{4}$ des verbleibenden Inhalts.  
**Berechne** das Restvolumen im Tank.  

<!-- data-solution-button="5"-->
[[  45/2  ]] $\ell$
@Algebrite.check(45/2)
************
$$
\begin{align*}
\text{Vormittag:}\quad & \dfrac{3}{8}\cdot 48\,\ell
= \dfrac{144}{8}\,\ell
= 18\,\ell \\
\text{Rest 1:}\quad & 48\,\ell - 18\,\ell = 30\,\ell \\
\text{Nachmittag:}\quad & \dfrac{1}{4}\cdot 30\,\ell
= \dfrac{30}{4}\,\ell
= \dfrac{15}{2}\,\ell \\
\text{Endrest:}\quad & 30\,\ell - \dfrac{15}{2}\,\ell
= \dfrac{60}{2}\,\ell - \dfrac{15}{2}\,\ell
= \dfrac{45}{2}\,\ell
\end{align*}
$$

