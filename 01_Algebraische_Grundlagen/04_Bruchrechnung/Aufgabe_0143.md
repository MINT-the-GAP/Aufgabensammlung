<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md

















tags: Bruchrechnung, Sachaufgabe, mittel, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit Stoffmengen mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Stoffmenge


In einer Textilwerkstatt liegt eine Stoffrolle mit $50\,\text{m}$ Länge bereit.  
Zunächst wird ein Anteil von $\dfrac{3}{5}$ der gesamten Rolle für Vorhänge zugeschnitten.  
Aus der verbleibenden Stoffmenge wird anschließend noch $\dfrac{1}{4}$ für Tischdecken verwendet.  
**Berechne** die am Ende übrig bleibende Stofflänge. 

<!-- data-solution-button="5"-->
[[  15  ]] m
@Algebrite.check(15)
************
$$
\begin{align*}
\text{Erster Zuschnitt:}\;& \dfrac{3}{5}\cdot 50\,\text{m}
= \dfrac{150}{5}\,\text{m}
= 30\,\text{m} \\
\text{Rest 1:}\;& 50\,\text{m} - 30\,\text{m} = 20\,\text{m} \\
\text{Zweiter Zuschnitt:}\;& \dfrac{1}{4}\cdot 20\,\text{m}
= 5\,\text{m} \\
\text{Endrest:}\;& 20\,\text{m} - 5\,\text{m} = 15\,\text{m}
\end{align*}
$$
************