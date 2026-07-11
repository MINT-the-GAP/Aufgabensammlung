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


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md















tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit einer Schnellladestation mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Schnellladestation


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Im Wartebereich eines Bahnhofs stehen zwei Sitzplätze mit Steckdosen.  
Ein Smartphone wird an eine Schnellladestation angeschlossen. Zu Beginn zeigt es 22 Prozent Akkustand und gewinnt pro Minute 1,5 Prozentpunkte hinzu.  
Das andere Smartphone läuft ohne Netzteil mit einem grafikintensiven Spiel. Es startet bei 94 Prozent und verliert pro Minute 2 Prozentpunkte.  
**Berechne**, nach wie vielen Minuten beide Geräte den gleichen Akkustand anzeigen.



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$x$ = [[  144/7  ]] @canvas
@Algebrite.check(144/7)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{2}x + 22 \;\stackrel{!}{=}\; 94 - 2x
$$

$$
\begin{align*}
\dfrac{3}{2}x + 22 &= 94 - 2x \quad \left|\, +2x \right.\\[2pt]
\left(\dfrac{3}{2} + 2\right)x + 22 &= 94 \quad \left|\, -22 \right.\\[2pt]
\dfrac{7}{2}x &= 72 \quad \left|\, :\dfrac{7}{2} \right.\\[2pt]
x &= 72 \cdot \dfrac{2}{7} \;=\; \dfrac{144}{7}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{3}{2}\cdot \dfrac{144}{7} + 22}_{\text{Ladegerät}}
= \dfrac{216}{7} + \dfrac{154}{7}
= \dfrac{370}{7}   \\
&\quad\text{und}\quad   \\
&\underbrace{94 - 2\cdot \dfrac{144}{7}}_{\text{ohne Netzteil}}
= \dfrac{658}{7} - \dfrac{288}{7}
= \dfrac{370}{7}
\end{align*}
$$


Deutung: Nach $\dfrac{144}{7}\approx 20{,}6$ Minuten zeigen beide etwa $\dfrac{370}{7}\approx 52{,}9\,\% Akkustand.

************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Sachaufgabe)