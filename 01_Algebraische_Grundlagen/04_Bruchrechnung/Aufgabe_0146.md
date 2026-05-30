<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md











import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md



tags: Bruchrechnung, Sachaufgabe, mittel, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit einer Tagesetappe eines Busses mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Tagesetappe


Eine Buslinie hat eine Tagesetappe von $54\,\text{km}$.  
Am Morgen werden $\dfrac{4}{9}$ der Gesamtdistanz gefahren.  
Von der verbleibenden Strecke wird nach der Pause nochmals $\dfrac{5}{12}$ zurückgelegt.  
**Berechne** die am Ende noch ausstehende Strecke als Bruch. 

<!-- data-solution-button="5"-->
[[  35/2  ]] km
@Algebrite.check(35/2)
************
$$
\begin{align*}
\text{Morgens:}\;& \dfrac{4}{9}\cdot 54\,\text{km}
= \dfrac{216}{9}\,\text{km}
= 24\,\text{km} \\[4pt]
\text{Rest 1:}\;& 54\,\text{km} - 24\,\text{km} = 30\,\text{km} \\[6pt]
\text{Nach der Pause:}\;& \dfrac{5}{12}\cdot 30\,\text{km}
= \dfrac{150}{12}\,\text{km}
= \dfrac{25}{2}\,\text{km} \\[4pt]
\text{Endrest:}\;& 30\,\text{km} - \dfrac{25}{2}\,\text{km}
= \dfrac{60}{2}\,\text{km} - \dfrac{25}{2}\,\text{km}
= \dfrac{35}{2}\,\text{km}
\end{align*}
$$
************

