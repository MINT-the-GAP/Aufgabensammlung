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

comment: Löse eine Sachaufgabe mit Rahmenleisten mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Rahmenleisten


Für ein Ausstellungsmodell werden Rahmen gebaut.  
Jeder Rahmen benötigt $\dfrac{3}{2}\,\text{m}$ Leisten für die langen Kanten und $\dfrac{3}{4}\,\text{m}$ für die kurzen Kanten.  
Beim Anpassen fällt pro Rahmen Verschnitt von $\dfrac{1}{6}\,\text{m}$ an, der von der benötigten Länge abgezogen wird.  
Es werden $4$ identische Rahmen gefertigt.  
**Berechne** die gesamte tatsächlich benötigte Leistenlänge. 

<!-- data-solution-button="5"-->
[[  25/3  ]] m
@Algebrite.check(25/3)
************
$$
\begin{align*}
\text{Term:}\quad & 4\cdot\Big( \big(\dfrac{3}{2}+\dfrac{3}{4}\big)\text{ m} - \dfrac{1}{6}\,\text{m} \Big) \\[4pt]
\text{Klammer:}\quad & \dfrac{3}{2}+\dfrac{3}{4}=\dfrac{6}{4}+\dfrac{3}{4}=\dfrac{9}{4} \\
&\Rightarrow \; 4\cdot\Big(\dfrac{9}{4}\,\text{m} - \dfrac{1}{6}\,\text{m}\Big)
= 4\cdot\Big(\dfrac{27}{12}-\dfrac{2}{12}\Big)\text{ m} \\
&= 4\cdot\dfrac{25}{12}\,\text{m}
= \dfrac{100}{12}\,\text{m}
= \dfrac{25}{3}\,\text{m}
\end{align*}
$$
************
