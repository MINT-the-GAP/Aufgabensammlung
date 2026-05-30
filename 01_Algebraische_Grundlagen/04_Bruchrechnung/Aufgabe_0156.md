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

comment: Löse eine Sachaufgabe mit einer Laborreihe mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Laborreihe


Für eine Laborreihe werden Mischungen angesetzt.  
Pro Dose werden $\dfrac{2}{3}\,\ell$ Grundlösung und $\dfrac{3}{10}\,\ell$ Zusatzlösung kombiniert.  
Beim Ansetzen geht je Dose $\dfrac{1}{12}$ der Mischsumme als Verlust ab (die Mischsumme ist $\dfrac{2}{3}\,\ell+\dfrac{3}{10}\,\ell$).  
Es werden sechs Dosen hergestellt. Danach wird $\dfrac{3}{8}$ der bis dahin vorhandenen Gesamtmenge für Tests entnommen.  
Zum Schluss werden pro hergestellter Dose nochmals $\dfrac{1}{5}\,\ell$ destilliertes Wasser zugegeben.  
**Bestimme** das endgültige Volumen. 



<!-- data-solution-button="5"-->
[[  2171/480  ]] @canvas $\ell$
@Algebrite.check(2171/480)
************
$$
\begin{align*}
\text{Mischsumme je Dose:}\quad
& \dfrac{2}{3}\,\ell+\dfrac{3}{10}\,\ell
= \dfrac{20}{30}\,\ell+\dfrac{9}{30}\,\ell
= \dfrac{29}{30}\,\ell \\[6pt]
\text{Verlust je Dose:}\quad
& \dfrac{1}{12}\cdot\dfrac{29}{30}\,\ell
= \dfrac{29}{360}\,\ell \\[6pt]
\text{Je Dose nach Verlust:}\quad
& \left(\dfrac{29}{30}-\dfrac{29}{360}\right)\,\ell
= \dfrac{319}{360}\,\ell \\[6pt]
\text{Sechs Dosen:}\quad
& 6\cdot\dfrac{319}{360}\,\ell
= \dfrac{319}{60}\,\ell \\[6pt]
\text{Entnahme Tests:}\quad
& \left(1-\dfrac{3}{8}\right)\cdot\dfrac{319}{60}\,\ell
= \dfrac{5}{8}\cdot\dfrac{319}{60}\,\ell
= \dfrac{319}{96}\,\ell \\[6pt]
\text{Zugabe Wasser:}\quad
& 6\cdot\dfrac{1}{5}\,\ell
= \dfrac{6}{5}\,\ell
= \dfrac{576}{480}\,\ell \\[6pt]
\text{Endvolumen:}\quad
& \dfrac{319}{96}\,\ell + \dfrac{6}{5}\,\ell
= \dfrac{1595}{480}\,\ell + \dfrac{576}{480}\,\ell
= \dfrac{2171}{480}\,\ell
\end{align*}
$$
************