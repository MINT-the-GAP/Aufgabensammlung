<!--
author: Martin Lommatzsch
version: 1.0.0
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

tags: Ableitungen, grafisches Ableiten, mittel, niedrig, Skizzieren

comment: Skizziere den Ableitungsgraphen zu einer quartischen Funktion und einer Sinusfunktion.
-->

# Ableitungsgraphen skizzieren

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeit: mittel" width="120" height="30">

Öffne im Koordinatensystem das Werkzeugmenü und wähle den Stift. Zeichne über möglichst viel von der sichtbaren Breite und klicke auf „Prüfen“.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=600;id=ABL0019A;1;1;1`)

@AxisLabel(`id=ABL0019A;xlabel=$x$;ylabel=$y$`)

@PlotFunction(`ABL0019A;f;(1/36)*x^4-0.5*x^2+1;#0077cc`)

@DGS(`ABL0019A;tools=[910;920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`ABL0019A`,`__$a)$__ **Skizziere** den Graphen von $f'$ zum vorgegebenen blauen Graphen von $f$.`)

@RekonstruktionMitOptionen(`ABL0019A;(1/9)*x^3-x;0.5`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)
[[?]] @Explain
*****************
$f'(x)=\frac{1}{9}x^3-x$

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=360;id=ABL0019Asolution;static=1;1;1;1`)
@AxisLabel(`id=ABL0019Asolution;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0019Asolution;f1=0;(1/9)*x^3-x;#b41f65`)
*****************

@resetter

@ADetails(`1=BE; Ableitungen, grafisches Ableiten`)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=600;id=ABL0019B;1;1;1`)

@AxisLabel(`id=ABL0019B;xlabel=$x$;ylabel=$y$`)

@PlotFunction(`ABL0019B;g;2*sin(x);#0077cc`)

@DGS(`ABL0019B;tools=[910;920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`ABL0019B`,`__$b)$__ **Skizziere** den Graphen von $g'$ zum vorgegebenen blauen Graphen von $g$.`)

@RekonstruktionMitOptionen(`ABL0019B;2*cos(x);0.6`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)
[[?]] @Explain
*****************
$g'(x)=2\cos(x)$

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=360;id=ABL0019Bsolution;static=1;1;1;1`)
@AxisLabel(`id=ABL0019Bsolution;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0019Bsolution;g1=0;2*cos(x);#b41f65`)
*****************

@resetter

@ADetails(`1=BE; Ableitungen, grafisches Ableiten`)

</div>

</section>
