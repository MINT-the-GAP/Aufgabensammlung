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

comment: Löse eine Sachaufgabe mit Suppenportionen mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Suppenportion

In der Schulküche wird eine große Suppenportion vorbereitet. Ein Kessel enthält zu Beginn $36\,\ell$ Brühe.  
In der ersten Pause werden $\dfrac{2}{9}$ der gesamten Brühe ausgegeben.  
In der zweiten Pause werden anschließend $\dfrac{3}{8}$ der verbleibenden Brühe ausgegeben.  
**Berechne** das Restvolumen im Kessel nach der zweiten Pause. 

<!-- data-solution-button="5"-->
[[  35/2  ]]  $\ell$
@Algebrite.check(35/2)
************
$$
\begin{align*}
\text{1. Ausgabe:}\quad & \dfrac{2}{9}\cdot 36\,\ell
= \dfrac{2}{9}\cdot \dfrac{36}{1}\,\ell
= \dfrac{72}{9}\,\ell
= 8\,\ell \\[4pt]
\text{Rest 1:}\quad & 36\,\ell - 8\,\ell = 28\,\ell \\[4pt]
\text{2. Ausgabe:}\quad & \dfrac{3}{8}\cdot 28\,\ell
= \dfrac{3}{8}\cdot \dfrac{28}{1}\,\ell
= \dfrac{84}{8}\,\ell
= \dfrac{21}{2}\,\ell \\[4pt]
\text{Rest ges.:}\quad & 28\,\ell - \dfrac{21}{2}\,\ell
= \dfrac{56}{2}\,\ell - \dfrac{21}{2}\,\ell
= \dfrac{35}{2}\,\ell
\end{align*}
$$
************
