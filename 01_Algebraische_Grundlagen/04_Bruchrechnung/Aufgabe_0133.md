<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md











import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md



tags: Bruchrechnung, Sachaufgabe, leicht, niedrig, Bestimmen

comment: Löse eine Sachaufgabe mit einer Obstkiste mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Obstkiste

Eine Obstkiste wiegt $48\,\text{kg}$. Darin befinden sich Äpfel und Birnen.  
Die Äpfel machen $\dfrac{5}{12}$ der gesamten Masse aus. Von den restlichen Kilogramm entfallen $\dfrac{2}{3}$ auf Birnen.  
**Bestimme**, wie viele Kilogramm Obst weder Äpfel noch Birnen sind. 

<!-- data-solution-button="5"-->
[[  28/3  ]] kg
@Algebrite.check(28/3)
************
$$
\text{Äpfel:}\quad \dfrac{5}{12}\cdot 48 = 20\,\text{kg} \\
\text{Rest:}\quad 48-20 = 28\,\text{kg} \\
\text{Birnen:}\quad \dfrac{2}{3}\cdot 28 = \dfrac{56}{3}\,\text{kg} \\
\text{Sonstiges: } 28-\dfrac{56}{3} = \dfrac{28}{3}\,\text{kg}
$$
************
