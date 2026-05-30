<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md











import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md



tags: Bruchrechnung, Sachaufgabe, schwer, normal, Berechnen

comment: Löse eine Sachaufgabe mit einer Druckerei mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Druckerei

In einer Druckerei werden großformatige Plakate produziert. Für jedes Plakat werden $\dfrac{7}{10}\,\text{m}^2$ Papier für die Druckfläche und zusätzlich $\dfrac{1}{8}\,\text{m}^2$ als Rand verwendet.  
Es werden insgesamt acht Plakate hergestellt. Nach dem Zuschneiden gehen $\dfrac{3}{20}$ der gesamten bisher verwendeten Fläche als Verschnitt verloren.  
Anschließend muss wegen eines Fehldrucks noch einmal $\dfrac{1}{4}\,\text{m}^2$ nachgedruckt werden.  
**Berechne** die schließlich verbrauchte Papierfläche. 


<!-- data-solution-button="5"-->
[[  293/50  ]] m$^2$
@Algebrite.check(293/50)
************
$$
\begin{align*}
\text{Term:}\quad 
&\left[\,8\cdot\left(\dfrac{7}{10}+\dfrac{1}{8}\right)\right]\cdot\left(1-\dfrac{3}{20}\right)\;+\;\dfrac{1}{4}\;\;\text{m}^2 \\[6pt]
\text{Pro Plakat:}\quad 
&\left(\dfrac{7}{10}+\dfrac{1}{8}\right)
= \left(\dfrac{28}{40}+\dfrac{5}{40}\right)
= \dfrac{33}{40} \\[6pt]
\text{Für 8 Plakate:}\quad 
&8\cdot\dfrac{33}{40}
= \dfrac{264}{40}
= \dfrac{33}{5} \\[6pt]
\text{Nach Verschnitt:}\quad 
&\dfrac{33}{5}\cdot\left(1-\dfrac{3}{20}\right)
= \dfrac{33}{5}\cdot\dfrac{17}{20}
= \dfrac{561}{100} \\[6pt]
\text{Nachdruck addieren:}\quad 
&\dfrac{561}{100} + \dfrac{1}{4}
= \dfrac{561}{100} + \dfrac{25}{100}
= \dfrac{586}{100}
= \dfrac{293}{50} \\[4pt]
&\Rightarrow\;\; \dfrac{293}{50}\,\text{m}^2
\end{align*}
$$
************
