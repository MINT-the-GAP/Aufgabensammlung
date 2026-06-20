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

















tags: Bruchrechnung, Sachaufgabe, sehr schwer, normal, Berechnen

comment: Löse eine Sachaufgabe mit Montagesets mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Montagesets



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
Für eine Kleinserie werden identische Montagesets vorbereitet.  
Pro Set werden für die Grundplatte $\dfrac{3}{4}\,\text{m}$ Metallleiste und für die Verstärkung $\dfrac{2}{5}\,\text{m}$ zusätzlich benötigt.  
Je Set kommt ein Verstärkungszuschlag in Höhe von $\dfrac{1}{6}$ der Set-Grundlänge (Summe aus Grundplatte und Verstärkung) hinzu.  
Es werden sechs Sets fertiggestellt. Anschließend werden $\dfrac{2}{9}$ der bis dahin insgesamt verwendeten Länge als Ausschuss verworfen.  
Zum Schluss können $\dfrac{1}{4}\,\text{m}$ aus Reststücken wiederverwendet werden (werden addiert).  
**Berechne** die schließlich benötigte Leistenlänge.  



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  293/45  ]]  m @canvas
@Algebrite.check(293/45)
************
$$
\begin{align*}
\text{Set-Grundlänge:}\quad
& \dfrac{3}{4}\,\text{m} + \dfrac{2}{5}\,\text{m}
= \left(\dfrac{15}{20}+\dfrac{8}{20}\right)\text{m}
= \dfrac{23}{20}\,\text{m} \\[6pt]
\text{Zuschlag je Set:}\quad
& \dfrac{1}{6}\cdot \dfrac{23}{20}\,\text{m}
= \dfrac{23}{120}\,\text{m} \\[6pt]
\text{Summe je Set:}\quad
& \dfrac{23}{20}\,\text{m} + \dfrac{23}{120}\,\text{m}
= \left(\dfrac{138}{120}+\dfrac{23}{120}\right)\text{m}
= \dfrac{161}{120}\,\text{m} \\[6pt]
\text{Vor Ausschuss (6 Sets):}\quad
& 6\cdot \dfrac{161}{120}\,\text{m}
= \dfrac{161}{20}\,\text{m} \\[6pt]
\text{Nach Ausschuss:}\quad
& \left(1-\dfrac{2}{9}\right)\cdot \dfrac{161}{20}\,\text{m}
= \dfrac{7}{9}\cdot \dfrac{161}{20}\,\text{m}
= \dfrac{1127}{180}\,\text{m} \\[6pt]
\text{Reststücke addieren:}\quad
& \dfrac{1127}{180}\,\text{m} + \dfrac{1}{4}\,\text{m}
= \dfrac{1127}{180}\,\text{m} + \dfrac{45}{180}\,\text{m}
= \dfrac{1172}{180}\,\text{m}
= \dfrac{293}{45}\,\text{m}
\end{align*}
$$
************

@ADetails(1=BE; Bruchrechnung, Sachaufgabe)


