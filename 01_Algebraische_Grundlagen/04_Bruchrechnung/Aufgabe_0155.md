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

comment: Löse eine Sachaufgabe mit Stoff-Kits mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Stoff-Kits

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
Für eine Materialserie werden identische Stoff-Kits vorbereitet.  
Je Kit werden $\dfrac{7}{12}\,\text{m}$ Stoff für die Außenflächen und $\dfrac{3}{8}\,\text{m}$ für das Innenfutter bereitgelegt.  
Pro Kit fällt zusätzlich Verschnitt in Höhe von $\dfrac{1}{6}$ der Kit-Grundlänge an (die Kit-Grundlänge ist die Summe aus Außen- und Innenanteil).  
Es werden fünf Kits gefertigt. Zusätzlich werden drei Teststreifen geschnitten, wobei jeder Teststreifen $\dfrac{1}{4}$ der Kit-Grundlänge entspricht (ohne Verschnitt).  
Von der bis dahin vorbereiteten Gesamtlänge werden anschließend $\dfrac{2}{15}$ zurückgegeben. Zum Abschluss kommen $\dfrac{1}{5}\,\text{m}$ aus Restbeständen dazu.  
**Berechne** die schließlich benötigte Stofflänge. 




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  4897/864  ]]  m @canvas
@Algebrite.check(4897/864)
************
$$
\begin{align*}
\text{Kit-Grundlänge:}\quad 
& \dfrac{7}{12}\,\text{m}+\dfrac{3}{8}\,\text{m}
= \dfrac{14}{24}\,\text{m}+\dfrac{9}{24}\,\text{m}
= \dfrac{23}{24}\,\text{m} \\[6pt]
\text{Verschnitt je Kit:}\quad 
& \dfrac{1}{6}\cdot \dfrac{23}{24}\,\text{m}
= \dfrac{23}{144}\,\text{m} \\[6pt]
\text{Je Kit inkl. Verschnitt:}\quad 
& \dfrac{23}{24}\,\text{m}+\dfrac{23}{144}\,\text{m}
= \dfrac{161}{144}\,\text{m} \\[6pt]
\text{Fünf Kits:}\quad 
& 5\cdot\dfrac{161}{144}\,\text{m}
= \dfrac{805}{144}\,\text{m} \\[6pt]
\text{Drei Teststreifen:}\quad 
& 3\cdot\left(\dfrac{1}{4}\cdot\dfrac{23}{24}\right)\,\text{m}
= 3\cdot\dfrac{23}{96}\,\text{m}
= \dfrac{23}{32}\,\text{m} \\[6pt]
\text{Zwischensumme:}\quad 
& \dfrac{805}{144}\,\text{m}+\dfrac{23}{32}\,\text{m}
= \dfrac{1817}{288}\,\text{m} \\[6pt]
\text{Rückgabe:}\quad 
& \left(1-\dfrac{2}{15}\right)\cdot\dfrac{1817}{288}\,\text{m}
= \dfrac{13}{15}\cdot\dfrac{1817}{288}\,\text{m}
= \dfrac{23621}{4320}\,\text{m} \\[6pt]
\text{Restbestand hinzu:}\quad 
& \dfrac{23621}{4320}\,\text{m}+\dfrac{1}{5}\,\text{m}
= \dfrac{23621}{4320}\,\text{m}+\dfrac{864}{4320}\,\text{m} \\[4pt]
&= \dfrac{24485}{4320}\,\text{m}
= \dfrac{4897}{864}\,\text{m}
\end{align*}
$$
************

@ADetails(1=BE; Bruchrechnung, Sachaufgabe)