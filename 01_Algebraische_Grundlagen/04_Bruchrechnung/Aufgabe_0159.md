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

comment: Löse eine Sachaufgabe mit Schutzmatten mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Schutzmatten


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
Für eine Veranstaltung wird eine rechteckige Halle vorbereitet.  
Die Länge beträgt $ 25\,\text{m} $, die Breite ist $ \dfrac{4}{5} $ der Länge. Zunächst wird eine Sicherheitszone von $ \dfrac{3}{10} $ der Gesamtfläche abgesperrt (nicht begehbar).  
Von der anschließend verbleibenden Fläche werden Schutzmatten auf $ \dfrac{2}{3} $ ausgelegt (ebenfalls nicht begehbar).  
Zum Schluss blockiert eine Bühne $ \dfrac{1}{5} $ der Gesamtfläche.  
**Berechne** die am Ende frei begehbare Fläche. 




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  50/3  ]]  m$^2$ @canvas
@Algebrite.check(50/3)
************
$$
\begin{align*}
\text{Breite:}&\quad \dfrac{4}{5}\cdot 25\,\text{m} = 20\,\text{m} \\[4pt]
\text{Gesamtfläche:}&\quad 25\,\text{m}\cdot 20\,\text{m} = 500\,\text{m}^2 \\[6pt]
\text{Sicherheitszone:}&\quad \dfrac{3}{10}\cdot 500\,\text{m}^2 = 150\,\text{m}^2 \\[4pt]
\text{Rest 1:}&\quad 500\,\text{m}^2 - 150\,\text{m}^2 = 350\,\text{m}^2 \\[6pt]
\text{Matten (vom Rest 1):}&\quad \dfrac{2}{3}\cdot 350\,\text{m}^2
= \dfrac{700}{3}\,\text{m}^2 \\[6pt]
\text{Rest 2:}&\quad 350\,\text{m}^2 - \dfrac{700}{3}\,\text{m}^2
= \dfrac{1050}{3}\,\text{m}^2 - \dfrac{700}{3}\,\text{m}^2
= \dfrac{350}{3}\,\text{m}^2 \\[6pt]
\text{Bühne (von Gesamt):}&\quad \dfrac{1}{5}\cdot 500\,\text{m}^2 = 100\,\text{m}^2 = \dfrac{300}{3}\,\text{m}^2 \\[6pt]
\text{Frei begehbar:}&\quad \dfrac{350}{3}\,\text{m}^2 - \dfrac{300}{3}\,\text{m}^2
= \dfrac{50}{3}\,\text{m}^2
\end{align*}
$$
************

@ADetails(1=BE; Bruchrechnung, Sachaufgabe)